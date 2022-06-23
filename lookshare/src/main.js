import Vue from 'vue'
import App from './App.vue'
//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBarsStaggered)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
