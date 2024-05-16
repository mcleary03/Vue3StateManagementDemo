import { computed, reactive, inject } from 'vue'
import { capitalizeAll } from '../../utils/formatters'
import { store, userDataSymbol } from './store'

// Call `getUser()` from a component's `setup()` to get the store
// This MUST be exported as a function because `inject()` can only be called from the `setup()` method
export const getUser = () => inject(userDataSymbol)

// Returns string with first and last name capitalized
const fullName = ({ firstName, lastName }) => computed( () => capitalizeAll(`${firstName.value} ${lastName.value}`))

// Returns string with address formatted with capitalized first letters and commas where appropriate
const formattedAddress = ({ address, city, state }) => computed( () => {
  return capitalizeAll(`${address.value}${city.value ? ', ' : ''}${city.value}${state.value ? ', ' : ''}${state.value}`)
})

// Returns formatted object ready for direct use in template
export const getFullName = () => reactive( { label: 'Name', value: fullName(store) } )

// Returns formatted object ready for direct use in template
export const getFormattedAddress = () => reactive( { label: 'Address', value: formattedAddress(store) } )