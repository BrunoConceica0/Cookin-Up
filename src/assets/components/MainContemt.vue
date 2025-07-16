<script lang="ts">
export default {
  data() {
    return {
      ingredientes: ["alho", "mantega", "orégano"],
    };
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sua-lista-texto"> Sua lista:</span>
      <ul class="ingredientes-sua-lista">
        <li
          class="ingrediente capitalize"
          v-for="(ingrediente, index) in ingredientes"
          :key="index"
        >
          {{ ingrediente }}
        </li>
      </ul>
    </section>
  </main>
</template>
