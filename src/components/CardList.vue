<script >

import CardItem from './CardItem.vue';
import { mapState} from 'vuex'
export default {
    components: {
    CardItem
  },
  computed: {
    ...mapState(['cards']),
  }

}
</script>

<template>
  <div class='grid grid-cols-1 gap-6 md:grid-cols-2'>
    <CardItem v-for="card in cards" :key="card.id" :card="card"/>
  </div>
</template>
