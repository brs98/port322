<template>
  <div class="container">
    <h1>{{name}}</h1>
    <a :href="pathname" target="_blank"><img :src="require(`@/assets/${filename}`)"></a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: ['filename', 'pathname', 'name'],
}
</script>

<style scoped>

  h1 {
    display: block;
    color: #42b983;
  }

  img {
    width: 20vw;
    border-radius: 12px;
    border-style: solid;
    border-color: black;
    transition: 0.3s;
  }

  img:hover {
    cursor: pointer;
    webkit-filter: blur(3px);
    filter: blur(3px);
  }

  .container {
    display: block;
    margin: 10px;
    padding: 20px;
  }

</style>
