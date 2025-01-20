<template>
  <button
    ref="buttonRef"
    :class="[
      'fan-btn inline-flex items-center justify-center px-3 py-1.5 border rounded text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 backface-visibility-hidden',
      typeClasses,
      sizeClasses,
      {
        'opacity-60 cursor-not-allowed': disabled,
        'opacity-70 cursor-wait': loading,
        'rounded-full': round,
        'rounded-full p-2': circle,
        'bg-transparent hover:bg-opacity-90': plain
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <i class="animate-spin mr-2" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import anime from 'animejs/lib/anime.es.js';

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
    const buttonRef = ref<HTMLElement | null>(null)

    const typeClasses = computed(() => {
      const classes = {
        primary: props.plain 
          ? 'bg-primary-light text-primary border-primary hover:bg-primary-hover hover:text-white' 
          : 'bg-primary text-white border-primary hover:bg-primary-hover active:bg-primary-active focus:ring-primary/50',
        success: props.plain 
          ? 'bg-success-light text-success border-success hover:bg-success-hover hover:text-white' 
          : 'bg-success text-white border-success hover:bg-success-hover active:bg-success-active focus:ring-success/50',
        warning: props.plain 
          ? 'bg-warning-light text-warning border-warning hover:bg-warning-hover hover:text-white' 
          : 'bg-warning text-white border-warning hover:bg-warning-hover active:bg-warning-active focus:ring-warning/50',
        danger: props.plain 
          ? 'bg-danger-light text-danger border-danger hover:bg-danger-hover hover:text-white' 
          : 'bg-danger text-white border-danger hover:bg-danger-hover active:bg-danger-active focus:ring-danger/50',
        info: props.plain 
          ? 'bg-info-light text-info border-info hover:bg-info-hover hover:text-white' 
          : 'bg-info text-white border-info hover:bg-info-hover active:bg-info-active focus:ring-info/50',
        text: 'border-transparent bg-transparent text-primary hover:bg-gray-100 focus:ring-primary/50'
      }
      return props.type 
        ? classes[props.type] 
        : props.plain 
          ? 'bg-gray-50 border-gray-300 text-gray-700 hover:border-primary hover:text-primary' 
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary/50'
    })

    const sizeClasses = computed(() => {
      const classes = {
        medium: 'text-base px-5 py-2',
        small: 'text-sm px-3 py-1.5',
        mini: 'text-xs px-2 py-1'
      }
      return props.size ? classes[props.size] : ''
    })

    const handleClick = (evt: MouseEvent) => {
      if (buttonRef.value) {
        anime({
          targets: buttonRef.value,
          scale: [1, 0.95, 1],
          duration: 150,
          easing: 'easeInOutQuad'
        })
      }
      emit('click', evt)
    }

    const handleMouseEnter = () => {
      if (buttonRef.value && !props.disabled && !props.loading) {
        anime({
          targets: buttonRef.value,
          scale: 1.05,
          duration: 200,
          easing: 'easeOutQuad'
        })
      }
    }

    const handleMouseLeave = () => {
      if (buttonRef.value && !props.disabled && !props.loading) {
        anime({
          targets: buttonRef.value,
          scale: 1,
          duration: 200,
          easing: 'easeOutQuad'
        })
      }
    }

    return {
      buttonRef,
      typeClasses,
      sizeClasses,
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    }
  }
})
</script>