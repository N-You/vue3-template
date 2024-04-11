import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

import App from './App.vue';
import store from './store';
import i18n from './locales/index';

import '@/assets/main.css';
import '@/style/index.less';

import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
