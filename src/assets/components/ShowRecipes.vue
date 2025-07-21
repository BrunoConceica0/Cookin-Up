<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas font-bold text-verde-medio">
      Receitas
    </h1>
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
    <RecipesEmpty v-else />
    <ButtomEdit @click.prevent="$emit('edit-recipes')" />
  </section>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { getRecipes } from "@/http/index";
import type IRecipe from "@/interfaces/IRecipes";
import ButtomEdit from "./ButtomEdit.vue";
import CardRecipes from "./CarRecipes.vue";
import RecipesEmpty from "./RecipesEmpty.vue";
import { hasItems } from "../utils/List";

export default {
  data() {
    return {
      receitas: [] as IRecipe[],
    };
  },
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true },
  },
  async created() {
    const response = await getRecipes();
    this.receitas = response.filter((recipe) => {
      const hasIngredient = hasItems(recipe.ingredientes, this.ingredientes);
      return hasIngredient;
    });
  },

  components: { ButtomEdit, CardRecipes, RecipesEmpty },
  emits: ["edit-recipes"],
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
