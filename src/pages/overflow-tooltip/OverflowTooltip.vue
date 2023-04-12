<template>
  <div class="overflow-box-wrapper" :style="{width: width}">
    <div
      ref="overflowBoxRef"
      class="overflow-box"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    >
      {{ content }}
    </div>
    <div class="tips" v-if="isShowTips">{{ content }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue"

defineProps({
  content: {
    type: [String, Number]
  },
  width: {
    type: String
  }
})

const isShowTips = ref(false)
const overflowBoxRef = ref(null)

const checkOverflowHidden = (el) => {
  const elComputed = document.defaultView.getComputedStyle(el, "");
  const padding =
    parseInt(elComputed.paddingLeft.replace("px", "")) +
    parseInt(elComputed.paddingRight.replace("px", ""));

  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);

  const rangeWidth = range.getBoundingClientRect().width;
  if ( rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth ) {
    return true
  }
  return false
}


const onMouseenter = () => {
  const isOverflowHidden = checkOverflowHidden(overflowBoxRef.value)
  if (isOverflowHidden) {
    isShowTips.value = true
  }
}

const onMouseleave = () => {
  isShowTips.value = false
}
</script>

<style lang="scss" scoped>
.overflow-box-wrapper {
  position: relative;
}
.overflow-box {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tips {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -100%);
  white-space: nowrap;
  border: 1px solid #333;
  padding: 4px 10px;
  border-radius: 4px;
  line-height: 1;
  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,100%);
    width: 0;
    height: 0;
    border-top: 6px solid #333;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>
