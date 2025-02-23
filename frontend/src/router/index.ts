import { type RouteRecordRaw, createRouter } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"

const Layouts = () => import("@/layouts/index.vue")

/**
 * 常驻路由
 */
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/redirect",
        component: Layouts,
        meta: {
            hidden: true
        },
        children: [
            {
                path: ":path(.*)",
                component: () => import("@/views/redirect/index.vue")
            }
        ]
    },
    {
        path: "/403",
        component: () => import("@/views/error-page/403.vue"),
        meta: {
            hidden: true
        }
    },
    {
        path: "/login",
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: "/",
        component: Layouts,
    }
]

/**
 * 动态路由
 * 用来放置有权限的路由
 */

export const router = createRouter({
    history,
    routes: constantRoutes
})