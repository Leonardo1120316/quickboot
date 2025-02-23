<template>
  <div class="select-layout-mode">
    <el-tooltip content="左侧模式">
      <el-container class="layout-mode left">
        <el-aside></el-aside>
        <el-container>
          <el-header></el-header>
          el-main
        </el-container>
      </el-container>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const feature = ref();

</script>

<style lang="scss"></style>