<template>
  <div class="example">
    <h1>FanUI 组件示例</h1>
    <fan-button>默认按钮</fan-button>
    <fan-button type="primary">主要按钮</fan-button>
    <fan-button disabled>禁用按钮</fan-button>
    <fan-button type="success">成功按钮</fan-button>
    <fan-button type="warning">警告按钮</fan-button>
    <fan-button type="danger">危险按钮</fan-button>
    <fan-button type="info">信息按钮</fan-button>
  </div>
</template>

<script setup lang="ts">
import { FanButton } from '../packages/index'
</script>

<style lang="scss">
.example {
  padding: 20px;
  
  .fan-button {
    margin-right: 10px;
  }
}
</style> 