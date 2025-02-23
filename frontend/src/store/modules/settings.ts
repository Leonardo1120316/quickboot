import { layoutSettings, LayoutSettings } from "@/config/layouts"
import { setConfigLayout } from "@/utils/cache/local-storage"
import { defineStore } from "pinia"
import { Ref, ref, watch } from "vue"

type SettingsStore = {
    [Key in keyof LayoutSettings]: Ref<LayoutSettings[Key]>
}

type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore('settings', () => {
    const state = {} as SettingsStore
    for (const [key, value] of Object.entries(layoutSettings)) {
        const refValue = ref(value)
        // @ts-ignore
        state[key as SettingsStoreKey] = refValue
        watch(refValue, () => {
            const settings = _getCacheDate()
            setConfigLayout(settings)
        })
    }
    /** 获取需要缓存的数据：将state对象转化成 settings 对象 */
    const _getCacheDate = () => {
        const settings = {} as LayoutSettings
        for(const [key, value] of Object.entries(state)) {
            // @ts-ignore
            settings[key as SettingsStoreKey] = value.value
        }
        return settings
    }
    return state
})