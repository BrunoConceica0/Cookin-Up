<script lang="ts">
export default {
  data() {
    return {
      ingredientes: ["alho", "mantega", "orégano"],
    };
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto"> Sua lista:</span>
      <ul v-if="ingredientes.length > 0" class="ingredientes-sua-lista">
        <li
          class="ingrediente capitalize"
          v-for="(ingrediente, index) in ingredientes"
          :key="index"
        >
          {{ ingrediente }}
        </li>
      </ul>
      <p v-else class="paragrafo lista-vazia">
        <img src="../image/icones/lista-vazia.svg" alt="Ícone de pesquisa" />
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>
  </main>
</template>
