import { type Ref, onBeforeMount, ref } from "vue"
import { debounce } from "lodash-es"

type Observer = {
    watermarkElMutationObserver?: MutationObserver
    parentElMutationObserver?: MutationObserver
    parentElResizeObserver?: ResizeObserver
}

type DefaultConfig = typeof defaultConfig

/** 默认配置 */
const defaultConfig = {
    /** 防御（默认开启） */
    defense: true,
    /** 文本颜色 */
    color: "#c0c4cc",
    /** 文本透明度 */
    opacity: 0.5,
    /** 文字大小 */
    size: 16,
    /** 文字字体 */
    family: "serif",
    /** 文本倾斜角度 */
    angle: -20,
    /** 一处水印所占宽度（数值越大水印密度越低） */
    width: 300,
    /** 一处水印所占高度 */
    height: 200
}

/** body 元素 */
const bodyEl = ref<HTMLElement>(document.body)

/** 
 * 创建水印
 */
export function useWatermark(parentEl: Ref<HTMLElement | null> = bodyEl) {
    /** 备份文本 */
    let backupText: string
    /** 最终配置 */
    let mergeConfig: DefaultConfig
    /** 水印元素 */
    let watermarkEl: HTMLElement | null = null
    /** 观察器 */
    const observer: Observer = {
        watermarkElMutationObserver: undefined,
        parentElMutationObserver: undefined,
        parentElResizeObserver: undefined
    }

    /** 设置水印 */
    const setWatermark = (text: string, config: Partial<DefaultConfig> = {}) => {
        if(!parentEl.value) {
            console.warn("请先挂载Dom")
            return
        }
        // 备份文件
        backupText = text
        // 合并配置
        mergeConfig = { ...defaultConfig, ...config }
        // 创建或更新水印元素
    }

    /** 创建水印元素 */
    const createWatermarkEl = () => {
        const isBody = parentEl
    }
}