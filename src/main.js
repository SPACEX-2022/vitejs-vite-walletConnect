import { createApp } from 'vue'
import { Chains, createWeb3Auth } from '@kolirt/vue-web3-auth'
import './style.css'
import App from './App.vue'
import i18n from "./langs/index.js";
import 'amfe-flexible';
import './libs/uni.webview.1.5.6.js';

createApp(App)
    .use(i18n)
    .use(createWeb3Auth({
        projectId: 'cd8c158ea77f9585ec08da7a5590792c', // generate here https://cloud.walletconnect.com/ and turn on 'Supports Sign v2'
        chains: [
            Chains.bsc,
            Chains.mainnet,
            Chains.polygon
        ]
    }))
    .mount('#app')
