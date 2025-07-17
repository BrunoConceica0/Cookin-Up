<script lang="ts">

export default {
  props: {
    text: { type: String, required: true },
    active: { type: Boolean },
  },
};
</script>
<template>
  <span
    :class="[
      'inline-block rounded-[0.5rem] min-w-[4.25rem] px-2 py-2 text-center transition duration-200 text-cinza bg-cinza-claro capitalize',
      { active },
    ]"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.active {
  color: var(--color-creme);
  background-color: var(--color-coral);
}
</style>
<!--  text-creme bg-coral font-bold  -->
