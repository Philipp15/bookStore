// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from './App';

Vue.use(Vuetify);
=======
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App';


Vue.use(Vuetify);


>>>>>>> a4978bb8585b90fb3b5e97925aa9c49935067b05
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
