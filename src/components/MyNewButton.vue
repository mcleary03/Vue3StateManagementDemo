<template>
  <button @click.prevent="handleClick" :class="{disabled: state.isDisabled, loading: state.isLoading}">
    {{ state.textContent }}
  </button>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'
import { props } from '../utils/buttonState'

export default {
  name: 'MyButton',
  props: {
    textContent: { type: String,  default: 'Click Me' },
    loadingText: { type: String,  default: 'Loading...' },
    errorText:   { type: String,  default: 'An Error Occurred' },
    successText: { type: String,  default: 'Success!' },
    isDisabled:  { type: Boolean, default: false }
  },
  setup(props) {
    const { textContent, loadingText, errorText, successText, isDisabled } = toRefs(props)
    const state = reactive({
      isDisabled: isDisabled,
      isLoading: false,
      iserror: false,
      isSuccess: false,
      textContent: computed( () =>
        state.isLoading ? loadingText.value :
          state.isError ? errorText.value :
            state.isSuccess ? successText.value :
              textContent.value
      )
    })

    return {
      loadingText,
      errorText,
      successText,
      isDisabled,
      state,
      handleClick
    }
  }
}
</script>

<style scoped>
  button {
    position: relative;
    width: 12rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: #666;
    color: #ccc;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.4s;
  }
  button:hover:not(.disabled),
  button:focus:not(.disabled) {
    background-color: #333;
    color: #fff;
  }
  button::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    border-radius: 1rem;
    background-color: rgba(102, 102, 102, 0.5);
    transition: none;
  }
  .disabled {
    background: #eee;
    cursor:not-allowed;
  }
  .disabled:hover {
    background: #eee;
  }
  .loading {
    background-color: #333;
  }
  .loading::before {
    right: 0;
    transition: 2s right ease-in;
  }
</style>