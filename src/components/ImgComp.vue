<template>
  <div class="img-comp" :class="images.length > 1 && 'multiple-images'">
    <img v-for="img in images"
         :src="`/${img}`"
         :alt="img">
  </div>
</template>

<script setup>

const props = defineProps({
  images: Array,
  indexImg: Number
})
</script>

<style lang="scss">
.multiple-images {
  display: grid;
  align-content: space-between;
  :nth-child(1) {
    border-radius: 8px 0 0 0;
  }
  :nth-child(2) {
    border-radius: 0 0 0 8px;
  }
}
</style>
