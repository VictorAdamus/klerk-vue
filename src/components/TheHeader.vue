<template>
    <div class="flex flex-col items-center justify-center">
        <img class="mb-6" src="/src/assets/logo.png">
        <ul class="flex items-center gap-[29px] mb-6">
            <li class="relative before:content-[''] before:w-4 before:h-4 before:bg-[url(/src/assets/arrow.png)] before:block before:bg-no-repeat before:bg-[] before:absolute before:-right-6 before:bg-center before:top-3"><router-link class="text-[#999] text-[13px] " to="/">Главная</router-link></li>
            <li class="relative before:content-[''] before:w-4 before:h-4 before:bg-[url(/src/assets/arrow.png)] before:block before:bg-no-repeat before:bg-[] before:absolute before:-right-6 before:bg-center before:top-3"><router-link class="text-[#999] text-[13px]" to="/">{{ routerName }}</router-link></li>
            <li><router-link class="text-[#999] text-[13px]" to="/">Крошка</router-link></li>
        </ul>
        <h1 class="text-[32px] font-medium tracking-tight mb-6 md:text-[56px]">Подписки «Клерка»</h1>
        <ul class="flex items-center gap-6 pb-6">
            <li v-for="route in routes" :key="route.title" @click="toggleBreadcrumb(route.title, route.src)"><router-link :active-class="'text-blue-500 border-b-[2px] border-blue-500 pb-6'" class="text-[#666] text-base" :to="route.src">{{ route.title }}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
        routes: [
            {
                title: 'Рассылки',
                src: '/subscribe',
                // activeLink: true
            },
            {
                title: 'Соцсети',
                src: '/social',
                // activeLink: false
            },
            {
                title: 'Мессенджеры',
                src: '/messages',
                // activeLink: false
            },
        ],
        routerName: '',
        routerPath: ''
        }
    },
    created(){
        this.routerName = this.routes[0].title
        this.routerPath = this.routes[0].src

    },
    methods: {
        toggleBreadcrumb(name, src){
            this.routerName = name
            this.routerPath = src
        }
    }
}
</script>
