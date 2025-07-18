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

<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Recitas</h1>
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

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
