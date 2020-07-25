import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


let submit = document.querySelector('#submit')

submit.addEventListener('click', function() {
  let alertMess = document.querySelector('.alert');
  alertMess.style.display = 'block';
  setTimeout(function(){ 
    alertMess.classList.add('removed'); 
  }, 3000);
  if(alertMess.classList.contains('removed')) {
    alertMess.classList.remove('removed');
  } 
})


