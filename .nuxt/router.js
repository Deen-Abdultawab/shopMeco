import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8cca9b8 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _2b0c0a79 = () => interopDefault(import('..\\pages\\Business.vue' /* webpackChunkName: "pages/Business" */))
const _8cac47ce = () => interopDefault(import('..\\pages\\Carousel.vue' /* webpackChunkName: "pages/Carousel" */))
const _2e584677 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _69985492 = () => interopDefault(import('..\\pages\\Individual.vue' /* webpackChunkName: "pages/Individual" */))
const _d60dae00 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _136d2fb3 = () => interopDefault(import('..\\pages\\Sidebar.vue' /* webpackChunkName: "pages/Sidebar" */))
const _405f37d4 = () => interopDefault(import('..\\pages\\Sidebar\\Booking.vue' /* webpackChunkName: "pages/Sidebar/Booking" */))
const _5285317f = () => interopDefault(import('..\\pages\\Sidebar\\Details.vue' /* webpackChunkName: "pages/Sidebar/Details" */))
const _602564df = () => interopDefault(import('..\\pages\\Sidebar\\Messages.vue' /* webpackChunkName: "pages/Sidebar/Messages" */))
const _7b78ca1e = () => interopDefault(import('..\\pages\\Sidebar\\Services.vue' /* webpackChunkName: "pages/Sidebar/Services" */))
const _05fb3797 = () => interopDefault(import('..\\pages\\Sidebar\\_id.vue' /* webpackChunkName: "pages/Sidebar/_id" */))
const _4b156b50 = () => interopDefault(import('..\\pages\\Started.vue' /* webpackChunkName: "pages/Started" */))
const _53df6609 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _a8cca9b8,
    name: "About"
  }, {
    path: "/Business",
    component: _2b0c0a79,
    name: "Business"
  }, {
    path: "/Carousel",
    component: _8cac47ce,
    name: "Carousel"
  }, {
    path: "/Contact",
    component: _2e584677,
    name: "Contact"
  }, {
    path: "/Individual",
    component: _69985492,
    name: "Individual"
  }, {
    path: "/Login",
    component: _d60dae00,
    name: "Login"
  }, {
    path: "/Sidebar",
    component: _136d2fb3,
    name: "Sidebar",
    children: [{
      path: "Booking",
      component: _405f37d4,
      name: "Sidebar-Booking"
    }, {
      path: "Details",
      component: _5285317f,
      name: "Sidebar-Details"
    }, {
      path: "Messages",
      component: _602564df,
      name: "Sidebar-Messages"
    }, {
      path: "Services",
      component: _7b78ca1e,
      name: "Sidebar-Services"
    }, {
      path: ":id?",
      component: _05fb3797,
      name: "Sidebar-id"
    }]
  }, {
    path: "/Started",
    component: _4b156b50,
    name: "Started"
  }, {
    path: "/",
    component: _53df6609,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
