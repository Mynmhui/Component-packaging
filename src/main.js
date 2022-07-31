import Vue from 'vue'
import App from './App.vue'
import ZchUi from './components/index'

Vue.use(ZchUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
