import { reactive, toRefs } from vue

export const props = {
  textContent: { type: String,  default: 'Click Me' },
  loadingText: { type: String,  default: 'Loading...' },
  errorText: { type: String,  default: 'An Error Occurred' },
  successText: { type: String,  default: 'Success!' },
  isDisabled: { type: Boolean, default: false }
}


const { textContent, loadingText, errorText, successText, isDisabled } = toRefs(props)

const state = reactive({
  isDisabled: isDisabled,
  isLoading: false,
  iserror: false,
  isSuccess: false,
  textContent: computed(() =>
    state.isLoading ? loadingText.value :
      state.isError ? errorText.value :
        state.isSuccess ? successText.value :
          textContent.value
  )
})

const handleClick = () => {
  if (!state.isDisabled) {
    state.isLoading = true
    // TODO tie this to a Promise's state for async requests
    setTimeout(() => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
    }, 2000)
  }
}

export const buttonState = reactive({
  props,
  textContent,
  isDisabled,
  handleClick
})
