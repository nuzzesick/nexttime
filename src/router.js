import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Help from "./views/Help.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/about",
      name: "about",
      component: About,
      props: true
    },
    {
      path: "/help",
      name: "help",
      component: Help,
      props: true
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */
        "./views/NotFound")
    }
  ]
});

export default router;
