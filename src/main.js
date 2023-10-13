import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAm2AJHY6HNYFHyDh5gAPPu5ef2kv-Lgss",
    authDomain: "community-forum-401517.firebaseapp.com",
    projectId: "community-forum-401517",
    storageBucket: "community-forum-401517.appspot.com",
    messagingSenderId: "902466457382",
    appId: "1:902466457382:web:fcae325223905777207be7"
};

initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
