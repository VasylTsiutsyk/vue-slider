import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Glide from '@glidejs/glide'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    Glide,
    render: h => h(App)
}).$mount('#slider')