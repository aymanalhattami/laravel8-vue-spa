import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

