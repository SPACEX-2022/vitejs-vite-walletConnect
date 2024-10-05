<script setup>
import { account, accountDetails, connect, disconnect } from '@kolirt/vue-web3-auth'

const onBack = () => {
  uni.navigateBack();
}
</script>

<template>
  <div class="container">
    <div class="pageTitle">
      <img src="../images/backIcon.png" alt="" class="backIcon" @click="onBack" />
      <div class="title">
        {{ $t('pageTitle') }}
      </div>
    </div>
    <div class="connectTitle">{{ $t('connectWallet') }}</div>
    <ul class="walletList">
      <li class="wallet">
        <img src="../images/walletconnect.png" alt="" class="icon" />
        <div class="name">WalletConnect</div>
        <button class="btn" @click="connect()">{{ $t('connect') }}</button>
      </li>
    </ul>
<!--    <div v-if="account.connected">-->
<!--      <button @click="accountDetails()">-->
<!--        {{ account.address }}-->
<!--      </button>-->
<!--      <button @click="disconnect()">Disconnect from {{ account.wallet.name }}</button>-->
<!--    </div>-->
<!--    <button v-else @click="connect()">Connect wallet</button>-->
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;

  .pageTitle {
    margin-top: 20px;
    display: flex;
    padding: 10px 20px;
    position: relative;
    .backIcon {
      width: 11px;
      height: 21px;
    }

    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 4px;
      font-family: PingFang HK;
      font-size: 18px;
      font-weight: 500;
      line-height: 25.2px;
      text-align: center;
      color: #fff;
    }
  }

  .connectTitle {
    margin-top: 20vh;
    margin-bottom: 15px;
    font-family: PingFang SC;
    font-size: 24px;
    font-weight: 500;
    line-height: 33.6px;
    text-align: center;
    color: #fff;
  }

  .walletList {
    padding: 0 20px;
    list-style: none;

    .wallet {
      padding: 13px 15px;
      display: flex;
      align-items: center;
      border: 3px solid #1E1E1E;
      background: #2E2E2E;
      border-radius: 15px;

      .icon {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }

      .name {
        flex: 1 1 auto;
        font-family: PingFang SC;
        font-size: 16px;
        font-weight: 500;
        line-height: 22.4px;
        text-align: left;
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
      }

      .btn {
        padding: 7px 10px;
        border-radius: 5px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        text-align: center;
        color: #000;

        background: linear-gradient(180deg, #8DDD97 0%, #A9CDAC 100%);
        //-webkit-background-clip: text;
        //background-clip: text;
        //color: transparent;
      }
    }
  }
}
</style>