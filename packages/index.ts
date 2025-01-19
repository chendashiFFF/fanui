import type { App, Component } from 'vue'
import FanButton from './components/Button/FanButton.vue'

const components: Component[] = [
  FanButton
]

export {
  FanButton
}

export default {
  install(app: App) {
    components.forEach(component => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  }
} 