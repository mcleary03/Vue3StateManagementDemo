<template>
  <main>
    <MyContainer class="two-col">
      <MyNestedContainer>
        <MyForm />
      </MyNestedContainer>

      <MyNestedContainer>
        <MyDisplay />
      </MyNestedContainer>
    </MyContainer>
  </main>
</template>

<script>
  import MyForm from './MyForm.vue'
  import MyContainer from './MyContainer.vue'
  import MyNestedContainer from './MyNestedContainer.vue'
  import MyDisplay from './MyDisplay.vue'

  export default {
    name: 'MyUserDataView',
    components: { MyForm, MyContainer, MyNestedContainer, MyDisplay }
  }
</script>

<style scoped>
main {
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
}
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media screen and (max-width: 1300px) {
  .two-col {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
  }
}
</style>