<script lang="ts">
//@ts-nocheck
import { getCategories } from "@/http/index";
import type ICategories from "@/interfaces/ICategories";
import CardCategory from "./CardCategory.vue";
export default {
  data() {
    return {
      // O tipo ICategories[] é uma interface que define a estrutura dos dados que você está esperando. Tem que usar o 'as' para definir o tipo da variável.
      categorias: [] as ICategories[],
    };
  },
  components: { CardCategory },
  async created() {
    this.categorias = await getCategories();
  },
  emits: ["add-ingredientes"],
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="text-[2.75em] leading-[120%] text-verde-medio block mb-[1.5rem]">
      Ingredientes
    </h1>
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategory
          :categoria="categoria"
          @add-ingredientes="$emit('add-ingredientes', $event)"
        />
      </li>
    </ul>
    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>
</template>

<style scoped></style>
