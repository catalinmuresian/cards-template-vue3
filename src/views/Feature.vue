<template>
  <div class="feature-page">
    <h1 class="title">We make creative media that <b>adds value</b></h1>
    <div class="cards-section">
      <MainCard
          v-for="card in cardsList"
          :card="card"
      />
    </div>
    <MainButton
            @handle-button="handleBtnStarted"
            :title="'GET STARTED'"
            :color="'#1B264F'"
    />
  </div>
</template>

<script setup>
import MainCard from '../components/MainCard'
import {ref} from "vue";
import MainButton from "@/components/MainButton";

const cardsList = ref([
  {
    img: ['1.png', '2.png'],
    content: {
      title: 'Photography',
      list: ['Drone Photography', 'Interiors', 'Exteriors / Architectural'],
      description: 'Every photograph we produce finds the beauty in your property while serving as a profitable asset.'
    }
  },
  {
    img: ['image 8.png'],
    content: {
      title: 'Virtual Staging',
      description: `Our staging will help you sell the potential of your space.<br> We can work off of our own photography or photos you provide.`
    }
  },
  {
    img: ['323.png'],
    content: {
      title: 'Renderings',
      list: ['Interiors', 'Exteriors'],
      description: `Renderings are the gold standard in <br> pre-construction marketing.`
    }
  },
  {
    img: ['4.png'],
    content: {
      title: 'Interactive Tours',
      list: ['Matterport', 'Video Walkthroughs'],
      description: 'Give your audience the ability to explore your property without requiring in-person travel.'
    }
  },
  {
    img: ['7.png'],
    content: {
      title: 'Floor Plans',
      list: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
      description: 'We produce laser-precise floor plans faster than any other service.'
    }
  },
  {
    img: ['5.png'],
    content: {
      title: 'Video',
      list: ['Drone Cinematography', 'Interiors', 'Exteriors / Architectural'],
      description: 'Video content has higher engagement and will help your property stand out online.'
    }
  },
])

function handleBtnStarted () {
  alert('button click')
}

</script>

<style lang="scss">
.feature-page {
  margin: 108px 0;
  .title {
    width: 730px;
    margin: 0 auto;
    font-size: 56px;
    color: #1B264F;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.01em;
    b {
      color: #506BCA;
      display: contents;
    }
  }
  .cards-section {
    display: flex;
    gap: 30px;
    row-gap: 40px;
    margin: 80px 0;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
