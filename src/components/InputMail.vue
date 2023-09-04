<template>
    <form @submit.prevent class="flex flex-col items-start justify-center w-full mb-8 md:px-6">
        <Teleport to="body">
            <ModalWindow v-if="isModal === 'succeful'" response="this.response">Великолепно!<br> Подписка успешно оформлена!</ModalWindow>
            <ModalWindow v-else-if="isModal === 'error'">Ошибка!<br> Перезагрузите страницу и попробуйте еще раз
            </ModalWindow>
        </Teleport>
        <div class="w-full flex items-center justify-start relative mb-4">
            <input v-model="inputValue"
                class="w-[95%] p-4 rounded-lg border-none placeholder:text-base focus:border-none focus:outline-none focus:-outline-offset-1 focus:outline-blue-500 md:w-11/12"
                :class="{ 'focus:outline-lime-500': isValidBtn }" required type="email" placeholder="Электронная почта">
            <button
                class="p-4 bg-blue-500 rounded-[100px] absolute right-0 text-white text-base leading-6 md:py-[17px] md:px-8"
                :class="{ 'bg-lime-600': isValidBtn, 'animate-novalide': novalidAnimation }"
                v-on:animationend="novalidAnimation = false" @click="sendForm">
                <span class="hidden md:block">Подписаться</span>
                <span class=" md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.34998 17.355L12.6933 12L7.34998 6.645L8.99498 5L15.995 12L8.99498 19L7.34998 17.355Z"
                            fill="white" />
                    </svg>
                </span>
            </button>
        </div>
        <label class="flex items-center justify-start cursor-pointer">
            <input class="hidden" type="checkbox" :checked="allSubscribe" @change="toggleAllSubscribe">
            <span class="block w-8 h-4 bg-gray-300 rounded-full relative mr-2" :class="{ 'checked-wrapper': allSubscribe }">
                <span class="h-[13px] w-[13px] bg-white block rounded-full top-[1px] left-[1px] absolute"
                    :class="{ 'checked': allSubscribe }"></span>
            </span>
            <span>Подписаться на все рассылки</span>
        </label>

    </form>
</template>

<script>
import axios from 'axios'
import {mapState, mapMutations, mapGetters} from 'vuex'
import ModalWindow from './ModalWindow.vue'


export default {
    components: {ModalWindow},
    data() {
        return {
            isChecked: this.allSubscribe,
            inputValue: '',
            isValid: false,
            isValidBtn: false,
            novalidAnimation: false,
            isModal: null,
            response: false
        }
    },

    computed: {
        ...mapState(['cards']),
        ...mapGetters(['allSubscribe'])
    },
    methods: {
        ...mapMutations(['toggleMainCheckbox']),

        toggleAllSubscribe() {
            this.toggleMainCheckbox(!this.allSubscribe)
        },
        sendForm() {
            if (this.isValidBtn) {
                let arr = [];
                this.cards.forEach((card) => arr.push({id: card.id, checked: card.checked}))
                if (this.isChecked) {
                    arr = []
                }
                const payload = {
                    email: this.inputValue,
                    subscribeList: arr,
                    allSubscribe: this.isChecked
                };
                this.inputValue = ''
                axios.post('https://jsonplaceholder.typicode.com/posts', payload)
                    .then(resolve => {
                        console.log(`Succseful: `, resolve.data);
                        this.response = true
                        this.isModal = 'succeful'
                        setTimeout(() => {this.isModal = ''}, 1000)
                    })
                    .catch(error => {
                        console.log(`Error: ${ error }`);
                        this.response = true
                        this.isModal = 'error'
                        setTimeout(() => {this.isModal = ''}, 1000)
                    })
            } else {
                this.novalidAnimation = true

            }
        },

    },
    watch: {
        inputValue(value) {
            const regex = /^[^\s()<>@,;:/]+@\w[\w.-]+\.[a-z]{2,}$/i
            if (!regex.test(value.trim())) {
                this.isValidBtn = false
            } else {
                this.isValidBtn = true
            }
        }
    }
}
</script>

<style scoped>
.checked {
    left: auto;
    right: 1px;
}

.checked-wrapper {
    background-color: #316FEE;
}</style>