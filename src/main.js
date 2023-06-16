/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from "@/router";
import vuetify from "@/plugins/vuetify";

// Composables
import Vue from 'vue'
import VueRouter from "vue-router";

// Plugins
Vue.use(VueRouter);

new Vue({router, vuetify, render: h => h(App)}).$mount('#app')
