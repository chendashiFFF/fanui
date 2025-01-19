<template>
  <button
    :class="[
      'fan-button',
      type ? `fan-button--${type}` : '',
      size ? `fan-button--${size}` : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle,
        'is-plain': plain
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <i class="fan-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
type ButtonSize = 'medium' | 'small' | 'mini'

export default defineComponent({
  name: 'FanButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: ''
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
    circle: Boolean,
    plain: Boolean
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt)
    }
    return { handleClick }
  }
})
</script>

<style lang="scss">
@use '../../styles/button.scss';
</style> 