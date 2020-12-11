<template>
  <div class="container">
    <h1>Feedback de Colega</h1>
    <h2>A tecnologia melhora o local de trabalho</h2>
    <div class="link-container">
      <Link name="Peer Review" filename="peer.jpg" pathname="https://docs.google.com/document/d/134WBESxNcFjknhOn8uC4cMN3ijb8kOmV00Xi5hPPItY/edit?usp=sharing" />
    </div>
  </div>
</template>

<script>

import Link from '../components/Link.vue';
export default {
  name: 'Technology',
  components: {
    Link
  }

}

</script>

<style scoped>

  .link-container {
    border-style: solid;
    border-radius: 12px;
    border-color: #42b983;
  }

</style>
