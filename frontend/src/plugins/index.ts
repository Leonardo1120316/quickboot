import { loadElementPlus } from './element-plus'
import { loadElementPlusIcons } from './element-plus-icon'
import { type App } from 'vue'

export function loadPlugins(app: App) {
    loadElementPlus(app)
    loadElementPlusIcons(app)
}