export { default as Brand } from '../..\\components\\Brand.vue'
export { default as DesktopNav } from '../..\\components\\DesktopNav.vue'
export { default as DetailCarousel } from '../..\\components\\DetailCarousel.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HomeCarousel } from '../..\\components\\HomeCarousel.vue'
export { default as HomeService } from '../..\\components\\HomeService.vue'
export { default as Mission } from '../..\\components\\Mission.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as SelectService } from '../..\\components\\SelectService.vue'
export { default as Service } from '../..\\components\\Service.vue'
export { default as SideCarousel } from '../..\\components\\SideCarousel.vue'
export { default as Slider } from '../..\\components\\Slider.vue'
export { default as Technisians } from '../..\\components\\Technisians.vue'
export { default as Testimony } from '../..\\components\\Testimony.vue'

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
