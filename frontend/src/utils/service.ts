import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"
import { merge, get } from "lodash-es"
import { ElMessage } from "element-plus"

function logout() {
    
}

/** 创建请求实例 */
function createService() {
    // 创建axios 实例
    const service = axios.create()
    // 请求拦截
    service.interceptors.request.use(
        (config) => config,
        (error) => Promise.reject(error)
    )
    // 响应拦截
    service.interceptors.response.use((response) => {
        const apiData = response.data
        const responseType = response.request?.responseType
        if( responseType === 'blob' || responseType === 'arraybuffer') return apiData
        const code = apiData.code
        if(code === undefined) {
            ElMessage.error("非系统的接口")
            return Promise.reject(new Error("非本系统的接口"))
        }
        switch (code) {
            case 0:
                return apiData
            case 401:
                // Token 过期时
                return logout()
            default:
                // 不正确的 code
                ElMessage.error(apiData.message || "Error")
                return Promise.reject(new Error("Error"))
        }
    },
    (error) => {
        // status 是 HTTP 状态码
        const status = get(error, "response.status")
        switch(status) {
            case 400:
                error.message = "请求错误"
                break
            default:
                break
        }
        ElMessage.error(error.message)
        return Promise.reject(error)
    })
    return service
}

/** 创建请求方法 */
function createRequest(service: AxiosInstance) {
    return function <T>(config: AxiosRequestConfig): Promise<T> {
        const token = ''
        const deafultConfig = {
            headers: {
                Authorization: token
            },
            timeout: 5000,
            baseUrl: import.meta.env.VITE_BASE_API,
            data: {}
        }
        const mergeConfig = merge(deafultConfig, config)
        return service(mergeConfig)
    }
}

/** 用于网络请求的实例 */
const service = createService()

export const request = createRequest(service)