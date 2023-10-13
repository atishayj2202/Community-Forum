import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase/app'
import 'firebase/auth' // Import the Firebase Authentication module

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
}

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
