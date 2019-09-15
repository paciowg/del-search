import Vue from 'vue';
import Router from 'vue-router';

import Search from '@/views/Search.vue';
import Detail from '@/views/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail,
      props: true,
    },
  ],
});
