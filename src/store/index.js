import { createStore } from "vuex";

import { cards } from "../db/cards";

export default createStore({
    state(){
        return{
            cards: cards,
        }
    },
    getters:{
        allSubscribe(state){
            return state.cards.every((card)=>card.checked)
        }
    },
    mutations: {
        toggleCheckbox(state, payload) {
            state.allSubscribe = !state.allSubscribe
            const {id, check} = payload
            const card = state.cards.find((card)=> card.id === id)
            if(card) {
                console.log('card',check);
                card.checked = check
            }
        },
        toggleMainCheckbox(state, payload){
            state.allSubscribe = payload
            state.cards.forEach((card)=>card.checked = payload)
    },
    checkAllSubscribe(state){
        const check = state.cards.every((card)=>card.checked)
        if(check) {
            console.log('all', state.allSubscribe)
            state.allSubscribe = true
        } else {
            state.allSubscribe = false
            console.log('all', state.allSubscribe)
        }
    }
}
})