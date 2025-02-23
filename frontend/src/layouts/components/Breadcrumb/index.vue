<template>
  <el-breadcrumb>
    <!-- <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span v-if="item.redirect === ''"></span>
    </el-breadcrumb-item> -->
    <el-breadcrumb-item>111</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { compile } from 'path-to-regexp';
import { ref } from 'vue';
import { type RouteLocationMatched, useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

/** 定义响应式数据 */
const breadcrumbs = ref<RouteLocationMatched[]>([])

/** 获取面包屑导航信息 */
const getBreadcrumb = () => {
  breadcrumbs.value = route.matched.filter((item) => item.meta?.title && item.meta?.breadcrumb !== false)
}

/** 编译路由路径 */
const pathCompile = (path: string) => {
  const toPath = compile(path)
}

</script>
