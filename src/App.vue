<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  components: {
    TheHeader,
    TheFooter
},
}

</script>

<template>
  <div class="flex flex-col items-center justify-center font-sans">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

