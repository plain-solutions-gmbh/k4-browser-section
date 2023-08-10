<template>
  <section class="k-browser-section">
    <header class="k-section-header">
      <k-label>{{ label }}</k-label>
    </header>

    <k-file-browser
      v-if="files"
      class="k-browser-tree"
      :root="false"
      :editable="true"
      @select="onSelect"
    />

    <k-page-tree
      v-else
      class="k-browser-tree"
      :root="false"
      editable="true"
      @select="onSelect"
    />
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return "";
      },
    },
    root: {
      type: Boolean,
      default() {
        return false;
      },
    },
    files: {
      type: Boolean,
      default() {
        return false;
      },
    },
    current: {
      type: String,
      default() {
        return "/site";
      },
    },
    identifire: {
      type: String,
      default() {
        return "uuid";
      },
    },
  },
  methods: {
    onSelect(el) {
      if (this.files) {
        console.log(el);
      } else {
        window.open(this.$url(el.children), "_self");
      }
    },
  },
};
</script>

<style>
.k-browser-tree {
  background: var(--color-white);
  border-radius: var(--rounded);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  line-height: var(--leading-normal);
}

</style>
