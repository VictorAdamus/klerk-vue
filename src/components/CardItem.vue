<template>
  <div class='bg-white flex flex-col rounded-2xl p-6 relative bg-no-repeat bg-card pr-28 shadow-[0_8px_16px_0] shadow-black/10' :style="{backgroundImage:`url(${card.image})`}">
    <p class="text-[#999] text-[13px]">{{ card.periodicity }}</p>
    <h2 class="text-xl leading-7 font-medium mb-2">{{ card.title }}</h2>
    <p class="text-sm text-[#666] mb-4">{{ card.description }}</p>
    <ul class="flex flex-col gap-2 mb-4">
        <li class="leading-5 text-sm flex items-center justify-start" v-for="item in card.subtitleList" :key="item.id" ><span class="block w-4 h-4 mr-2 bg-[url('/src/assets/check.png')]"></span>{{ item.title }}</li>
    </ul>
    <label class="flex items-center cursor-pointer mt-auto">
        <input class="hidden" :checked="isChecked" type="checkbox" @change='this.isChecked = !this.isChecked'>
        <span class="block w-12 h-6 bg-gray-300 rounded-full relative mr-2" :class="{'checked-wrapper': isChecked}">
            <span class="h-[21px] w-[21px] bg-white block rounded-full top-[2px] left-[2px] absolute" :class="{'checked': isChecked}"></span>
        </span>
        <p class="text-sm leading-5">{{ card.subscribers }}</p>
    </label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
props: {
    card: {
        type: Object,
        required: true,
    }
},
data(){
    return {
    };
},
methods: {
    ...mapMutations(['toggleCheckbox', 'checkAllSubscribe']),
},
computed: {
    isChecked: {
        get(){
            return this.card.checked
        },
        set(value){
            this.toggleCheckbox({id:this.card.id, check: value})
            this.checkAllSubscribe()
        }
    }
}
}
</script>

<style scoped>
    .checked {
        right: 2px;
        left: auto;
    }

    .checked-wrapper {
        background-color: #316FEE;
    }
</style>