/** 路由配置 */
interface RouteSettings {
    /** 是否开启动态路由 */
    dynamic: boolean
    /** 动态路由关闭时的默认路由 */
    defaultRoles: Array<string>
    /** 是否开启三级及以上路由缓存功能 */
    thirdLevelRouteCache: boolean
}

const routeSettings: RouteSettings = {
    dynamic: true,
    defaultRoles: ["DEFAULT_ROLE"],
    thirdLevelRouteCache: false
}

export default routeSettings