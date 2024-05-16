<template>
  <MyUserDataView />
</template>

<script>
import MyUserDataView from './components/MyUserDataView.vue'

export default {
  components: { MyUserDataView }
}
</script>

<style>
@font-face {
  font-family: Noir;
    src: url("./assets/N_Font/Noir_regular.otf") format("opentype");
}

@font-face {
    font-family: Noir;
    font-weight: bold;
    src: url("./assets/NOIR_Font/Noir_medium.otf") format("opentype");
}
:root {
  --bg-gradient: linear-gradient(120deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 12%) 33%, hsl(0, 0%, 27%) 70%, hsl(0, 0%, 13%) 100%);
}
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Noir, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #111;
  background: var(--bg-gradient);
  padding: 40px;
  min-height: 100vh;
}
</style>