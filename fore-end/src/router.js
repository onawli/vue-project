// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
// import Films from './views/Films.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      // 首页
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          path: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/NowPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: () => import('./views/Center.vue')
        }

      ]
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
