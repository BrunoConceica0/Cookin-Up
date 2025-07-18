<script lang="ts">
import SelectionIngredients from "./SelectionIngredients.vue";
import ShowRecipes from "./ShowRecipes.vue";
import Tag from "./Tag.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

export default {
  data() {
    return {
      ingredientes: [] as string[],
      content: "SelecionarIngredientes" as Pagina,
    };
  },
  components: { SelectionIngredients, Tag, ShowRecipes },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    removeIngredientes(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(
        (iLista) => ingrediente !== iLista
      );
    },
    nav(pagina: Pagina) {
      this.content = pagina;
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto"> Sua lista:</span>
      <ul v-if="ingredientes.length > 0" class="ingredientes-sua-lista">
        <li v-for="(ingrediente, index) in ingredientes" :key="index">
          <Tag :text="ingrediente" :active="true" />
        </li>
      </ul>
      <p v-else class="paragrafo lista-vazia">
        <img src="../image/icones/lista-vazia.svg" alt="Ícone de pesquisa" />
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>

    <SelectionIngredients
      v-if="content === 'SelecionarIngredientes'"
      @addIngredientes="adicionarIngrediente"
      @removeIngredientes="removeIngredientes"
      @buscar-receitas="nav('MostrarReceitas')"
    />
    <ShowRecipes v-else-if="content === 'MostrarReceitas'" />
  </main>
</template>
