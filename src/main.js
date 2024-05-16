import { createApp } from 'vue'
import { userDataSymbol, useUserData } from './stores/user/store'
import App from './App.vue'

const app = createApp(App)

// This is how we provide data to be injected at any level of the app
// Use this data store via getUserData() in a component's setup() method
//    import { getUserData } from '../store/userData.js'
//    ...
//    setup() {
//      return getUserData()
//    }
app.provide(userDataSymbol, useUserData())

app.mount('#app')
