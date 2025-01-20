<template>
  <div class="example">
    <h1>FanUI 组件示例</h1>
    <fan-button>默认按钮</fan-button>
    <fan-button type="primary">主要按钮</fan-button>
    <fan-button disabled>禁用按钮</fan-button>
    <fan-button type="success" size="medium">成功按钮</fan-button>
    <fan-button type="success" size="small">成功按钮</fan-button>
    <fan-button type="success" size="mini">成功按钮</fan-button>
    <fan-button type="warning">警告按钮</fan-button>
    <fan-button type="danger">危险按钮</fan-button>
    <fan-button type="info">信息按钮</fan-button>
    <fan-button plain>文本按钮</fan-button>
    <fan-button type="primary" plain>文本按钮</fan-button>
    <fan-button type="success" plain>文本按钮</fan-button>
    <fan-button type="warning" plain>文本按钮</fan-button>
    <fan-button type="danger" plain>文本按钮</fan-button>
    <fan-button type="primary" round>圆角按钮</fan-button> 
    <fan-button type="primary" circle/>
    <fan-button type="primary" loading>加载中按钮</fan-button>
    <fan-button type="primary" icon="i-heroicons-arrow-right">带图标按钮</fan-button>
    <fan-button type="primary" icon="i-heroicons-arrow-right" loading>带图标加载中按钮</fan-button>
    <fan-button type="primary" icon="i-heroicons-arrow-right" disabled>带图标禁用按钮</fan-button>
  </div>
</template>

<script setup lang="ts">
import { FanButton } from '../packages/index'
</script>

<style lang="scss">
.example {
  padding: 20px;
  
  button {
    margin-right: 10px;
  }
}
</style> 