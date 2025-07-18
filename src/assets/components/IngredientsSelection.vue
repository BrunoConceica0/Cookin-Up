<script lang="">
import Tag from "./Tag.vue";
export default {
  data() {
    return {
      selection: false,
    };
  },
  components: { Tag },
  props: {
    text: { type: String, required: true },
  },
  methods: {
    toggleSelection() {
      this.selection = !this.selection;
      if (this.selection) {
        this.$emit("addIngredientes", this.text);
      } else {
        this.$emit("removeIngredientes", this.text);
      }
    },
  },

  $emits: ["add-ingredientes", "remove-ingredientes"],
};
</script>

<template>
  <button
    class="cursor-pointer"
    @click.prevent="toggleSelection"
    :aria-pressed="selection"
  >
    <tag :text="text" :active="selection" />
  </button>
</template>

<style scoped></style>
