import { defineCustomElement, createApp, h, getCurrentInstance } from 'vue'
import i18n from '@/lang/i18n'

export const createElementInstance = ({ component = null, renderOptions = {} } = {}) => {
  // Vue generates a new HTML element class from the component definition.
  return defineCustomElement({
    setup() {
      const app = createApp({})

      app.use(i18n)

      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
    render: () => h(component, renderOptions),
    styles: component.styles
  })
}