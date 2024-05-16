<template>
  <section>
    <div class="outputSection">
      <div class="heading">Values</div>
      <div class="row">
        <span>{{ firstName.label }}: </span><span>{{ firstName.value }}</span>
      </div>
      <div class="row">
        <span>{{ lastName.label }}: </span><span>{{ lastName.value }}</span>
      </div>
      <div class="row">
        <span>{{ email.label }}: </span><span>{{ email.value }}</span>
      </div>
      <div class="row">
        <span>{{ address.label }}: </span><span>{{ address.value }}</span>
      </div>
      <div class="row">
        <span>{{ city.label }}: </span><span>{{ city.value }}</span>
      </div>
      <div class="row">
        <span>{{ state.label }}: </span><span>{{ state.value }}</span>
      </div>
    </div>

    <div class="outputSection">
      <div class="heading">Computed</div>
      <div class="row">
        <div>{{ fullName.label }}: </div><div>{{ fullName.value }}</div>
      </div>
      <div class="row">
        <div>{{ formattedAddress.label }}: </div><div>{{ formattedAddress.value }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { getUser, getFullName, getFormattedAddress } from '../stores/user'

export default {
  name: 'MyDisplay',
  setup() {
    const fullName = getFullName()
    const formattedAddress = getFormattedAddress()

    return { ...getUser(), fullName, formattedAddress}
  }
}

</script>

<style scoped>
section {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(8rem, auto) );
  gap: 4rem;
  height: 100%;
  text-shadow: 0 4px 6px rgba(0,0,0,0.8);
}
.outputSection {
  display: grid;
  align-content: start;
  padding: 2rem 0;
  overflow: hidden;
  border-radius: 0.5rem;
  color: #ccc;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.8);
  font-size: 2rem;
  background: var(--bg-gradient);
}
.row {
  display: grid;
  grid-template-columns: 200px auto;
  gap: 1rem;
  padding: 0 1rem;
  justify-self: start;
  align-items: start;
  padding-bottom: 0.4rem;
}
.heading {
  text-align: center;
  font-size: 2.5rem;
}
.row>:first-child {
  justify-self: end;
}
::selection {
  background-color: #eee;
  color: #333;
}
</style>