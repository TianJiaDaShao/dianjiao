<template>
  <div class="mainPage">
    <mainHeader></mainHeader>
    <router-view />
  </div>
</template>

<script>
  import mainHeader from '@/components/mainHeader'
  export default {
    name: 'mainPage',
    data() {
      return {}
    },
    created() {},
    components: {
      mainHeader
    }
  }
</script>
