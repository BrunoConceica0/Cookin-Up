<script lang="ts">
import type ICategories from "@/interface/ICategories";
import type { PropType } from "vue";

export default {
  props: {
    // O tipo ICategories[] é uma interface que define a estrutura dos dados que você está esperando. Tem que usar o 'as' para definir o tipo da variável.
    // O tipo PropType é uma interface que define o tipo de propriedade que você está esperando. Tem que usar o 'as' para definir o tipo da variável.Ela ajuda a garantir que a propriedade seja do tipo esperado.

    categoria: { type: Object as PropType<ICategories>, required: true },
  },
};
</script>
<template>
  {{ categoria.nome }}
  {{ categoria.imagem }}
</template>
<style scoped>
.categoria {
  @apply w-[19.5rem] p-[1rem] bg-branco shadow-sutil h-full flex flex-col items-center gap-[2rem];
}
.categoria__cabecalho {
  @apply flex flex-col items-center gap-[0.5rem];
}
.categoria__imagem {
  @apply w-[3.5rem];
}
.categoria__nome {
  @apply text-center text-verde-medio font-[700];
}
.categoria__ingredientes {
  @apply flex justify-center gap-[0.5rem] flex-wrap;
}
</style>
