import { runValidations } from '../../utils/validators'
import { store } from './store'

// This is how we would get initial state from backend
// export const setInitialState = () => {
//   // Hypothetical getter
//   httpClient.get('user')
//   .then( user => {
//     // replace entire store user data
//     store.setState(user)
//   })
// }

// Takes a local store object that may have validations
// Returns a function expecting a key and value to update the global store with
// Performs validations listed in the `validators` for the given localStore[key]
// This would be used to update the backend before updating the store upon 200 response
export const updateStoreValue = localStore => (key, newValue) => {
  const dataObj = localStore[key]
  // Validate and build errors array
  runValidations(dataObj, newValue)
  // Update reactive value
  store[key].value = newValue
}

// forceStoreValue is for debugging/testing, skips validation, prints warning
export const forceStoreValue =  (key, newValue) => {
  const dataObj = store[key]

  const consoleStyles = {
    code: 'font-weight: bold; color: #ccc; background-color: #333; padding: 0.2rem 0.5rem; border-radius: 0.2rem;',
    none: ''
  }
  const stylesList = ({ code, none }) => [ code, none, code, none, code ]

  console.warn(`Dangerously setting %c${key}%c from %c${dataObj.value}%c to %c${newValue}`, ...stylesList(consoleStyles))

  // Update reactive value
  dataObj.value = newValue
}
