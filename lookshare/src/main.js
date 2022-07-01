import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGratipay } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dirname } from 'path'

library.add(faHouse, faPlus, faStore, faChevronLeft, faChevronRight, faCheck, faMessage)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$http = axios;

const path = require('path')
module.exports = {
  outputDir: path.resolve(dirname, './../back/dist')
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
