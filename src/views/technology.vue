<template>
  <div class="container">
    <h1>Trabalho Argumentativo</h1>
    <h2>A tecnologia melhora o local de trabalho</h2>
    <div class="link-container">
      <Link name="Versão Final" filename="technology.jpg" pathname="https://docs.google.com/document/d/1xQUCubsn08aX2vz3_Uk2P--dOFgxsN8OMHgO_Iw7beY/edit?usp=sharing" />
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
