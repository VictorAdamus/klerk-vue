<template>
  <div class=" px-4 py-8 max-w-5xl w-full bg-[#f5f5f8] md:px-6 md:py-12">
    <h2 class="text-center text-2xl font-medium tracking-tight mb-6">Выберите рассылки, которые подходят именно вам</h2>
    <InputMail />
    <CardList/>
  </div>
</template>

<script>
import CardList from './CardList.vue';
import InputMail from './InputMail.vue';
export default {
  components: {
    CardList, InputMail
  },
}
</script>
