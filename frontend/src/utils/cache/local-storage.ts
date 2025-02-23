import { LayoutSettings } from "@/config/layouts";
import { type SidebarOpened, type SidebarClosed } from "@/constants/app-key";
import CacheKey from "@/constants/cache-key";

//#region 系统布局配置
export const getConfigLayout = () => {
    const json = localStorage.getItem(CacheKey.CONFIG_LAYOUT)
    return json ? (JSON.parse(json) as LayoutSettings) : null
}
export const setConfigLayout = (settings: LayoutSettings) => {
    localStorage.setItem(CacheKey.CONFIG_LAYOUT, JSON.stringify(settings))
}
export const removeConfigLayout = () => {
    localStorage.removeItem(CacheKey.CONFIG_LAYOUT)
}
//# endregion

//#region 侧边栏状态
export const getSidebarStatus = () => {
    return localStorage.getItem(CacheKey.SIDEBAR_STATUS)
}
export const setSidebarStatus = (sidebarStatus: SidebarOpened | SidebarClosed) => {
    localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus)
}
//#endregion

//#region 正在应用的主题名称

//regionend