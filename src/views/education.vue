<template>
  <div class="1">
    <h1>Trabalho Expositivo</h1>
    <h2>A Educação no Brasil</h2>
    <div class="link-container">
      <Link name="Primeira Versão" filename="education1.jpg" pathname="https://docs.google.com/document/d/1GsoBLgy0zExOLnVNCEIu0TCKmsvgd3o2PSvhX5vVvYI/edit?usp=sharing"/>
      <Link name="Versão Final" filename="education2.jpg" pathname="https://docs.google.com/document/d/1jK8dQxHOPH6szJNfamLXaEYd3HMIDW4QslvPyEICvx8/edit?usp=sharing"/>
      <Link name="Versão Reescrita" filename="education3.jpg" pathname="https://docs.google.com/document/d/185q9clV_aBrnxG_3NezYQNWn5avzL4WFKTeDgPGK_Vk/edit?usp=sharing"/>
      <Link name="Análise" filename="education4.jpg" pathname="https://docs.google.com/document/d/1dhxk08rsJeqMo238GI9CEwJtaxVVds5TSUnrKl7Jkxo/edit?usp=sharing"/>
    </div>
  </div>
</template>

<script>
import Link from "../components/Link.vue";
  export default {
    name: 'Education',
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
