export default [
  {
    name: "resume",
    path: "/resume",
    component: () => import(/* webpackChunkName: "component--resume" */ "C:\\git\\kevincfisher-github-io\\my-site\\src\\pages\\Resume.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "C:\\git\\kevincfisher-github-io\\my-site\\src\\pages\\Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "C:\\git\\kevincfisher-github-io\\my-site\\src\\pages\\About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "C:\\git\\kevincfisher-github-io\\my-site\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "C:\\git\\kevincfisher-github-io\\my-site\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

