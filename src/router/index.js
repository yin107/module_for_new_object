import Vue from 'vue'
import Router from 'vue-router'
import baseRouters from './modules/base';
Vue.use(Router)
const routes = [...baseRouters];

const router = new Router({
	history:'hash',
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;