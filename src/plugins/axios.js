import Vue from 'vue'
import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Authorization'] = '';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://api.hgbrasil.com/finance',
            headers: { "Access-Control-Allow-Origin": "*", 
                        "Authorization":"e875a88a", 
                        "Accepts":"application/json",
                        "useCredentails": "true" }

        })
    }
})