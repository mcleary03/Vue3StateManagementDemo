<template>
  <label>
    <div>
      <div class="label">{{ label }}</div>
      <div class="errorMessage" v-for="error of errors" :key="error">{{ error.message }}</div>
    </div>
    <input :class="{ 'error': errors.length }" v-model="value" autocomplete="none">
  </label>
</template>

<script>

export default {
  name: 'MyInput',
  props: {
    modelValue: { type: Object, required: true }
  },
  setup({ modelValue }) {
    return { ...modelValue }
  }
}
</script>

<style scoped>
label {
  display: grid;
  grid-template-columns: minmax(18rem, 2fr) minmax(18rem, 3fr);
  grid-template-rows: repeat(auto-fit, minmax(3rem, 6rem));
  gap: 20px;
  align-items: center;
  font-size: 2rem;
  text-shadow: 0 4px 6px rgba(0,0,0,0.8);
  transition: text-shadow 0.3s linear;
  cursor: pointer;
}
label:hover {
  text-shadow: 0 8px 12px rgba(0,0,0,1);
  color: #d3d3d3;
}
input {
  width: 100%;
  height: 2rem;
  border-radius: 2rem;
  padding: 2rem 2rem;
  font-size: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.8) inset;
  border: none;
  background-color: #eee;
  color: #333;
  font-weight: bold;
  transition: background-color 0.3s linear,
              box-shadow 0.3s linear,
              color 0.3s linear;
}
input:hover {
  box-shadow: 2px 2px 2px rgba(0,0,0,0.5) inset;
  background-color: #666;
  color: #eee;
}
input:focus {
  outline: none;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.8) inset;
  background-color: #333;
  color: #eee;
}
.label {
  text-align: end;
}
.errorMessage {
  max-width: 100%;
  font-size: 1rem;
  text-align: end;
  color: #f11f1f;
  text-shadow: none;
}
.error {
  background-color: #f11f1f;
}
::selection {
  background-color: #eee;
  color: #333;
}
</style>