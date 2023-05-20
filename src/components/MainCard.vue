<template>
  <div class="main-card">
    <ImgComp
        :images="card.img"
        :index-img="card.img.length"
    />
    <TextComp
        :title="card.content.title"
        :list="card.content.list"
        :description="card.content.description"
    />
  </div>
</template>

<script setup>
import ImgComp from "@/components/ImgComp";
import TextComp from "@/components/TextComp";

const props = defineProps({
  card: Object
})
</script>

<style lang="scss">
.main-card {
  width: 437px;
  height: 336px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
</style>
