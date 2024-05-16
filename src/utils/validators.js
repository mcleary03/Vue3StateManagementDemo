import { computed, reactive, toRefs } from 'vue'

// Check if we even need to validate a given data object
const isValidationRequired = ({ validators }) => validators && validators.length

// Takes a data object and a new value to be validated
// Returns a function expecting a validator function
//    The returned function runs through a single validation for a given value
//    Returns true if validation passes
const applyValidator = (dataObj, newValue) => validator => validator(dataObj, newValue)

// Error helpers
const getErrorIndex = (errors, errorType) => errors.findIndex( ({ type }) => type === errorType )
const getError = (errors, errorType) => errors.filter( ({ type }) => type === errorType )
const clearAllErrors = ({ length }) => length = 0 // Set length to 0 to preserve reactivity
const clearError = (errors, type) => errors.splice(getErrorIndex(errors, type), 1)
const addError = (errors, errorObj) => errors.unshift(errorObj)

// Takes a data object and a new value to be validated
// Checks if validation is needed and if so, runs all validations listed in `dataObj`
// Clears out all errors before validating
// Returns true if validation not required, or if ALL validations passed
export const runValidations = (dataObj, newValue) => {
  clearAllErrors(dataObj.errors) // Clear all errors, redundant if every validation has its own cleanup

  return !isValidationRequired(dataObj) || [ ...dataObj.validators ].every( applyValidator(dataObj, newValue) )
}

// Checks that a string value is at least a given number of characters in length
// Takes a number, `minValidLength`
// Returns a function expecting a data object, and a new value to validate
//    The returned function builds errors object as it goes
//    and returns true if `newValue` has a length of equal or greater than `minValidLength`
export const minLength = minValidLength => ({ errors }, newValue) => {
  const type = 'minLength'
  const message = `Must be at least ${minValidLength} characters.`
  const errorObj = { type, message }
  const isValid = newValue.length >= minValidLength
  clearError(errors, type) // Clear only the error resulting from this validation

  if (!isValid) addError(errors, errorObj)

  return isValid
}

export const emailFormat = ({ errors }, newValue) => {
  const type = 'emailFormat'
  const message = `Invalid email format`
  const errorObj = { type, message }
  const regex = /\w+\@\w+\.com/
  const isValid = regex.test(newValue)

  clearError(errors, type) // Clear only the error resulting from this validation

  if (!isValid) addError(errors, errorObj)

  return isValid
}

export const validations = {
  firstName: { key: 'firstName', validators: [ minLength(2) ], errors: [] },
  lastName:  { key: 'lastName',  validators: [ minLength(2) ], errors: [] },
  address:   { key: 'address',   validators: [ minLength(5) ], errors: [] },
  city:      { key: 'city',      validators: [ minLength(2) ], errors: [] },
  state:     { key: 'state',     validators: [ minLength(2) ], errors: [] },
  email:     { key: 'email',     validators: [ emailFormat ],  errors: [] }
}

// Merges passed in state with related validation results (errors)
// Useful for local component state
export const getStoreWithErrors = (store, validations) => reactive(Object.keys(store).reduce( (merged, key) => {
  const validators = validations[key]?.validators ?? []
  const errors =     validations[key]?.errors     ?? []

  merged[key] = { ...toRefs(store[key]), validators, errors }

  return merged
}, {}))

// Form validation
// Takes array of field objects and returns true if they all have values with no errors
export const areAllFieldsValid = fields => computed( () => fields.every( ({ value, errors }) => value && !errors.length ))