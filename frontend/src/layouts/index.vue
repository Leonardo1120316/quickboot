<template>
  <div>
    <!-- 左侧模式 -->
    <LeftMode v-if="isLeft"></LeftMode>
    <!-- 顶部模式 -->
    <TopMode v-else-if="isTop"></TopMode>
    <!-- 混合模式 -->
    <LeftTopMode v-else-if="isLeftTop"></LeftTopMode>
    <!-- 右侧设置面板 -->
    <RightPanel v-if="showSettings">
      <Settings />
    </RightPanel>
  </div>
</template>

<script setup lang="ts">
import LeftMode from "./LeftMode.vue"
import TopMode from "./TopMode.vue";
import LeftTopMode from "./LeftTopMode.vue";
import { Settings, RightPanel } from "./components";
import { ref, watchEffect } from 'vue';
import { useSettingsStore } from "@/store/modules/settings";
import { storeToRefs } from "pinia";
import { getCssVar, setCssVar } from "@/utils/css";
import { useLayoutMode } from "@/hooks/useLayoutMode";

/** Layout 布局响应式 */

const settingsStore = useSettingsStore()
const { isLeft, isTop, isLeftTop } = useLayoutMode()
const { showSettings, showTagsView, showWatermark } = storeToRefs(settingsStore)

//#region 隐藏标签栏时删除其高度，是未来让 Logo 组件的高度和 Header区域一致
const cssVarName = "--v3-tagsview-height"
const v3TagsviewHeight = getCssVar(cssVarName)
watchEffect(() => {
  showTagsView.value ? setCssVar(cssVarName, v3TagsviewHeight) : setCssVar(cssVarName, "0px")
})
//#endregion

/** 开启或关闭水印 */

</script>
