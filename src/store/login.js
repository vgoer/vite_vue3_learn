import { defineStore } from 'pinia'


export const store_login = defineStore('login',{
    state:() => {
        return {
            username:'admin',
            password:'admin123...'
        }
    },

    getters:{
        setUser(state){
            return state.username = state.username + "hello"
        }
    },
    
    actions:{
        setPass(){
            this.password = 'admin123hello'
        }
    }
})