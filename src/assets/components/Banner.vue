<template>
  <header class="header">
    <div>
      <div class="apresentacao">
        <img src="../image/logo.svg" alt="Logo" class="logo" />
      </div>
      <div>
        <p class="cabecalho-lg frase-cabecalho">
          <span class="texto-verde">Um banquete de ideias para</span>
          despertar o chef que há em você!
        </p>
        <p class="subtitulo-lg">
          Explore novas receitas todos os dias com os ingredientes que estão ao
          seu alcance!
        </p>
      </div>
    </div>
    <div>
      <img class="foto-banner" src="../image/foto-banner.png" alt="Banner" />
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
.header {
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  grid-template-columns: 580px 1fr;
  gap: 10rem;
  margin-top: 4rem;
}
.apresentacao {
  display: flex;
  flex-direction: row;
}
</style>
