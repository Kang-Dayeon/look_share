import Vue from 'vue'
import App from './App.vue'
//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGratipay } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart, faPenNib, faFaceGrinHearts)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
