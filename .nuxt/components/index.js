export const Brand = () => import('../..\\components\\Brand.vue' /* webpackChunkName: "components/brand" */).then(c => wrapFunctional(c.default || c))
export const DesktopNav = () => import('../..\\components\\DesktopNav.vue' /* webpackChunkName: "components/desktop-nav" */).then(c => wrapFunctional(c.default || c))
export const DetailCarousel = () => import('../..\\components\\DetailCarousel.vue' /* webpackChunkName: "components/detail-carousel" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const HomeCarousel = () => import('../..\\components\\HomeCarousel.vue' /* webpackChunkName: "components/home-carousel" */).then(c => wrapFunctional(c.default || c))
export const HomeService = () => import('../..\\components\\HomeService.vue' /* webpackChunkName: "components/home-service" */).then(c => wrapFunctional(c.default || c))
export const Mission = () => import('../..\\components\\Mission.vue' /* webpackChunkName: "components/mission" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const SelectService = () => import('../..\\components\\SelectService.vue' /* webpackChunkName: "components/select-service" */).then(c => wrapFunctional(c.default || c))
export const Service = () => import('../..\\components\\Service.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c))
export const SideCarousel = () => import('../..\\components\\SideCarousel.vue' /* webpackChunkName: "components/side-carousel" */).then(c => wrapFunctional(c.default || c))
export const Slider = () => import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const Technisians = () => import('../..\\components\\Technisians.vue' /* webpackChunkName: "components/technisians" */).then(c => wrapFunctional(c.default || c))
export const Testimony = () => import('../..\\components\\Testimony.vue' /* webpackChunkName: "components/testimony" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
