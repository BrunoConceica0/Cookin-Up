<script lang="ts">
//@ts-nocheck
import type ICategories from "@/interfaces/ICategories";
import Tag from "./Tag.vue";
import IngredientsSelection from "./IngredientsSelection.vue";

export default {
  props: {
    // O tipo ICategories[] é uma interface que define a estrutura dos dados que você está esperando. Tem que usar o 'as' para definir o tipo da variável.
    // O tipo PropType é uma interface que define o tipo de propriedade que você está esperando. Tem que usar o 'as' para definir o tipo da variável.Ela ajuda a garantir que a propriedade seja do tipo esperado.

    categoria: { type: Object as PropType<ICategories>, required: true },
  },
  components: { Tag, IngredientsSelection },
  emits: ["add-ingredientes", "remove-ingredientes"],
};
</script>
<template>
  <article
    class="w-[19.5rem] p-[1rem] bg-white h-full flex flex-col items-center gap-[2rem]"
  >
    <header class="flex flex-col items-center gap-[0.5rem]">
      <img
        class="w-[3.5rem]"
        :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`"
        alt=""
      />
      <h2
        class="w-[19.5rem] p-[1rem] bg-white h-full flex flex-col items-center gap-[2rem] text-center text-verde-medio font-[700]"
      >
        {{ categoria.nome }}
      </h2>
    </header>
    <ul class="flex justify-center gap-[0.5rem] flex-wrap">
      <li v-for="ingredientes in categoria.ingredientes" :key="ingredientes">
        <IngredientsSelection
          :text="ingredientes"
          @addIngredientes="$emit('add-ingredientes', $event)"
          @removeIngredientes="$emit('remove-ingredientes', $event)"
        />
      </li>
    </ul>
  </article>
</template>
