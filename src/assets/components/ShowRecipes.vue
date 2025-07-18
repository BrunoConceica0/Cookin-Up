<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>
    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ receitas.length }}
    </p>
    <div v-if="receitas.length" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você
        tem por aí!
      </p>
      <ul class="flex flex-row flex-wrap justify-center gap-10">
        <li v-for="receita in receitas" :key="receita">
          <CardRecipes :receita="receita" />
        </li>
      </ul>
    </div>
    <ButtomEdit />
  </section>
</template>

<script lang="ts">
import { getRecipes } from "@/http/index";
import type IRecipe from "@/interfaces/IRecipes";
import ButtomEdit from "./ButtomEdit.vue";
import CardRecipes from "./CarRecipes.vue";

export default {
  data() {
    return {
      receitas: [] as IRecipe[],
    };
  },
  async created() {
    const response = await getRecipes();
    this.receitas = response.slice(0, 8);
  },
  components: { ButtomEdit, CardRecipes },
  emits: ["editar-receita"],
};
</script>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>

