<template>
  <form>
    <MyInput :modelValue="firstName" @input="updateValue('firstName', $event.target.value)" />
    <MyInput :modelValue="lastName"  @input="updateValue('lastName',  $event.target.value)" />
    <MyInput :modelValue="email"     @input="updateValue('email',     $event.target.value)" />
    <MyInput :modelValue="address"   @input="updateValue('address',   $event.target.value)" />
    <MyInput :modelValue="city"      @input="updateValue('city',      $event.target.value)" />
    <MyInput :modelValue="state"     @input="updateValue('state',     $event.target.value)" />
    <MyButton :isDisabled="!isValidated" />
    <MyNewButton :isDisabled="!isValidated" />
  </form>
</template>

<script>
import { getUser } from '../stores/user'
import { validations } from '../utils/validators'
import { getStoreWithErrors, areAllFieldsValid } from '../utils/validators'
import { updateStoreValue } from '../stores/user/service'
import MyInput from './MyInput.vue'
import MyButton from './MyButton.vue'
import MyNewButton from './MyNewButton.vue'

export default {
  name: 'myForm',
  components: { MyInput, MyButton },
  setup() {
    // Create a local copy of the store that we can append any additional data to, for use within this form only
    const localStore = { ...getStoreWithErrors(getUser(), validations) }
    // We destructure here so we can pass relevant values to the validator method below
    // **NOTE** Destructuring would normally remove reactivity; works here because we export the individual refs via `toRefs`
    const { firstName, lastName, email, address, city, state } = localStore
    // Form validation, this controls a prop to activate/deactivate the submit button
    const isValidated = areAllFieldsValid([ firstName, lastName, email, address, city, state ])
    // This is the only way to update the global store from this component as the global store is exported as readonly
    // Updates the global store and runs validations if provided
    const updateValue = updateStoreValue(localStore)

    return { firstName, lastName, email, address, city, state, isValidated, updateValue }
  }
}
</script>

<style scoped>
form {
  display: grid;
  place-content: center;
  place-items: center;
  grid-gap: 1rem;
  padding: 2rem;
  background-color: #aaa;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.8);
  border-radius: 0.5rem;
  background: var(--bg-gradient);
}
span {
  color: #666;
  font-weight: bold;
}
</style>