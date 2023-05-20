<template>
  <div class="main-button">
    <button
        :style="{'background-color': color}"
        @click="handleButton()"><span>{{ title }}</span>
    </button>
  </div>
</template>

<script setup>

const emit = defineEmits(['handle-button'])

const props = defineProps({
  title: String,
  color: String
})

function handleButton () {
  emit('handle-button')
}
</script>

<style lang="scss">
.main-button {
  button {
    width: 315px;
    height: 60px;
    border-radius: 12px;
    cursor: pointer;
    span {
      color: white;
      font-size: 17px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

  }

}

</style>
