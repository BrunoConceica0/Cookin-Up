<script lang="ts">
//@ts-nocheck
import type ICategories from "@/interfaces/ICategories";
import Tag from "./Tag.vue";
import IngredientsSelection from "./IngredientsSelection.vue";

export default {
  props: {
    // O tipo ICategories[] é uma interface que define a estrutura dos dados que você está esperando. Tem que usar o 'as' para definir o tipo da variável.
    // O tipo PropType é uma interface que define o tipo de propriedade que você está esperando. Tem que usar o 'as' para definir o tipo da variável.Ela ajuda a garantir que a propriedade seja do tipo esperado.

    receita: { type: Object as PropType<IRecipes>, required: true },
  },
  components: { Tag, IngredientsSelection },
  emits: ["add-ingredientes", "remove-ingredientes"],
};
</script>
<template>
  <article class="receita">
    <header class="receita__corpo">
      <img
        class="receita__imagem"
        :src="`/imagens/receitas/${receita.imagem}`"
        :alt="`${receita.nome}`"
      />
      <h2 class="receita__nome">
        {{ receita.nome }}
      </h2>
    </header>
  </article>
</template>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #fff);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
