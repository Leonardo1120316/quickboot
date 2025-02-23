import {
    type Router,
    type RouteRecordRaw,
    type RouteRecordNormalized,
    createRouter,
    createWebHashHistory,
    createWebHistory
} from "vue-router"
import { cloneDeep, omit } from "lodash-es"

/** 路由模式 */
export const history =
 import.meta.env.VITE_ROUTER_HISTORY === "hash"
 ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
 : createWebHistory(import.meta.env.VITE_PUBLIC_PATH)

/** 路由降级（把三级及其以上的路由转化为二级路由） */
export const flatMultiLevelRoutes = (routes: RouteRecordRaw[]) => {
    const routesMirror = cloneDeep(routes)
    routesMirror.forEach((route) => {

    })
}

/** 判断路由层级是否大于2 */
const isMultipleRoute = (route: RouteRecordRaw) => {
    const children = route.children
    if(children?.length) {
        
    }
}