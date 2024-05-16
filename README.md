# Reactivity Demo
This is a demonstration of an alternative to using Vuex for state management. The focus is to decouple logic from our presentation layer by organizing everything by domain.

Data is readonly via queries and used directly by the components. Updates to the store are always done through the store's service. Every use of the store will stay in sync with updates automatically.

More documentation to come... for now, check out the code comments for implimentation details.

## Run the App
```js
npm run dev
```