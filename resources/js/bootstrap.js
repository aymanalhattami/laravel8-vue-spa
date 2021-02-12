import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

