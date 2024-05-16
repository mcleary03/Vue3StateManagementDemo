import { reactive, readonly } from 'vue'

// This is the data store containing initial values, metadata, and validation functions
const defaultUserData = {
  firstName: { key: 'firstName', label: 'First Name', value: ''},
  lastName:  { key: 'lastName',  label: 'Last Name',  value: ''},
  address:   { key: 'address',   label: 'Address',    value: ''},
  city:      { key: 'city',      label: 'City',       value: ''},
  state:     { key: 'state',     label: 'State',      value: ''},
  email:     { key: 'email',     label: 'Email',      value: ''}
}

// This is the REACTIVE object to update (Source of Truth)
// Do NOT use directly! Update store via service
export const store = reactive(defaultUserData)

// Unique identifier for this data store
export const userDataSymbol = Symbol('userData')

// This READONLY SINGLETON data object is provided to components via `getUser()`
// * Only used directly at top level of app to intialize
//   - exporting the store, allows us to list render properties using v-for
//   - exporting the store as refs, destructures the properties for direct use
export const useUserData = () => readonly(store)
