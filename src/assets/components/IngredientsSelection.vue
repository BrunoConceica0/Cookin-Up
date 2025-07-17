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
    selectionActive() {
      this.selection = !this.selection;
      if (this.selection) {
        this.$emit("add-ingredientes", this.text);
      }
    },
  },
  $emits: ["add-ingredientes"],
};
</script>

<template>
  <!-- <button class="ingredientes" @click="selection = !selection"> -->
  <tag
    class="cursor-pointer"
    :text="text"
    :active="selection"
    @click="selectionActive"
    :aria-pressed="selection"
  />
  <!-- </button> -->
</template>

<style scoped></style>
