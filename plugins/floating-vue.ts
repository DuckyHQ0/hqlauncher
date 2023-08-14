import FloatingVue from 'floating-vue'

export default defineNuxtPlugin(() => {
    FloatingVue.options.themes.tooltip.delay.show = 0
    FloatingVue.options.themes.tooltip.delay.hide = 100
    FloatingVue.options.distance = 8

    return
})
