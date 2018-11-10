import Vue from "vue"

import App from "./views/app"
import store from "./store"

new Vue({
  el: "#app",
  store,
  render: (h) => h(App)
})
