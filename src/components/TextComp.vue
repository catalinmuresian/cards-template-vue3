<template>
  <div class="text-comp">
    <h2>{{ title }}</h2>
    <div class="list">
      <ul>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ul>
    </div>
    <p class="description"
       v-html="description" />
  </div>
</template>

<script setup>
 const props = defineProps({
   title: String,
   list: Array,
   description: String
 })
</script>

<style lang="scss">
.text-comp {
  text-align: left;
  padding: 40px 30px 0 34px;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #353844;
    margin: 0;
  }
  .list {
    ul {
      padding: 0;
      list-style-type: none;
      margin: 12px 0;
      li {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: #353844;
        display: flex;
        align-items: baseline;
      }
    }
    ul li::before {
      content: "\2022";
      color: #D2AD81;
      width: 20px;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .description {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 26px;
    margin: 12px 0;
  }
}
</style>
