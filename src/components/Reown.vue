<script setup>
// import { account, accountDetails, connect, disconnect } from '@kolirt/vue-web3-auth'
import {createAppKit, useAppKit, useAppKitAccount, useAppKitEvents} from '@reown/appkit/vue'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { createConfig, watchAccount, getAccount } from '@wagmi/core'
import {onMounted, reactive} from "vue";


// 1. Get projectId from https://cloud.reown.com
const projectId = 'cd8c158ea77f9585ec08da7a5590792c'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks = [mainnet, arbitrum]

// 3. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks
})

// 4. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

const accountState = reactive({
  bufferAccount: null
})

onMounted(() => {
  // watchAccount(config, {
  //   onChange(data) {
  //     console.log('Account changed!', data)
  //   },
  // })
})


const events = useAppKitEvents()


// 5. Use modal composable
const modal = useAppKit()

function connect() {
  modal.open();
}

const { address, status, isConnected } = useAppKitAccount()
function getAccountInfo() {
  console.log(111, address, status, isConnected)
}
</script>

<template>
<!--  <div v-if="account.connected">-->
<!--    <button @click="accountDetails()">-->
<!--      {{ account.address }}-->
<!--    </button>-->
<!--    <button @click="disconnect()">Disconnect from {{ account.wallet.name }}</button>-->
<!--  </div>-->
<!--  <button v-else @click="connect()">Connect wallet</button>-->
  {{ accountState.bufferAccount }}
  <button @click="connect()">Connect wallet</button>
  <button @click="getAccountInfo()">Account</button>
</template>

<style scoped>
</style>
