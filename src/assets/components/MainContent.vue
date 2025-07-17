<script lang="ts">
import SelectionIngredients from "./SelectionIngredients.vue";
import Tag from "./Tag.vue";
export default {
  data() {
    return {
      ingredientes: [] as string[],
    };
  },
  components: { SelectionIngredients, Tag },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      console.log(this.ingredientes);
      this.ingredientes.push(ingrediente);
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

    <SelectionIngredients @add-ingredientes="adicionarIngrediente" />
  </main>
</template>
