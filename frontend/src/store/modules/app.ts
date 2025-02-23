import { SIDEBAR_CLOSED, SIDEBAR_OPENED, DeviceEnum } from '@/constants/app-key'
import { getSidebarStatus, setSidebarStatus } from '@/utils/cache/local-storage'
import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

interface Sidebar {
    opened: boolean
    withoutAnimation: boolean
}

/** 设置侧边栏转台本地缓存 */
function handleSideBarStatus(opened:boolean) {
    opened ? setSidebarStatus(SIDEBAR_OPENED) : setSidebarStatus(SIDEBAR_CLOSED)
}

export const useAppStore = defineStore("app", () => {
    /** 侧边栏状态 */
    const sidebar: Sidebar = reactive({
        opened: getSidebarStatus() !== SIDEBAR_CLOSED,
        withoutAnimation: false
    })
    /** 设备类型 */
    const device = ref<DeviceEnum>(DeviceEnum.Desktop)

    /** 监听侧边拦 opened 状态 */
    watch(
        () => sidebar.opened,
        (opened) => handleSideBarStatus(opened)
    )

    /** 切换侧边栏 */
    const toggleSidebar = (withoutAnimation: boolean) => {
        sidebar.opened = !sidebar.opened
        sidebar.withoutAnimation = withoutAnimation
    }
    /** 关闭侧边栏 */
    const closeSidebar = (withoutAnimation: boolean) => {
        sidebar.opened = false
        sidebar.withoutAnimation = withoutAnimation
    }
    /** 切换设备类型 */
    const toggleDevice = (value: DeviceEnum) => {
        device.value = value
    }

    return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice }
})