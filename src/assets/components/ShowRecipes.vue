<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">Receitas</span>
    <ul v-if="ingredientes.length > 0" class="ingredientes-sua-lista">
      <li v-for="(ingrediente, index) in ingredientes" :key="index">
     
      </li>
    </ul>
    <p v-else class="paragrafo lista-vazia">
      <img src="../image/icones/lista-vazia.svg" alt="Ícone de pesquisa" />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<script lang="ts">
import { getCategories } from "@/http/index";
import type ICategories from "@/interfaces/ICategories";

export default {
  data() {
    return {
      ingredientes: [] as ICategories[],
    };
  },
  async created() {
    this.ingredientes = await getCategories();
  },
};
</script>

<style></style>
