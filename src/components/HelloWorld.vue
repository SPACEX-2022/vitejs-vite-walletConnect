<script setup>
import { account, accountDetails, connect, disconnect } from '@kolirt/vue-web3-auth'
</script>

<template>
  <div v-if="account.connected">
    <button @click="accountDetails()">
      {{ account.address }}
    </button>
    <button @click="disconnect()">Disconnect from {{ account.wallet.name }}</button>
  </div>
  <button v-else @click="connect()">Connect wallet</button>
</template>

<style scoped>
</style>
