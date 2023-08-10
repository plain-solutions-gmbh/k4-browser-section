<template>
  <ul :class="$options.name" class="k-tree" :style="{ '--tree-level': level }">
    <li
      v-for="(item, index) in state"
      :key="index"
      :aria-expanded="item.open"
      :aria-current="item.id === current"
    >
      <p
        class="k-tree-branch"
        :data-has-subtree="item.hasChildren && item.open"
      >
        <button
          :disabled="!item.hasChildren"
          class="k-tree-toggle"
          type="button"
          @click="toggle(item)"
        >
          <k-icon :type="item.open ? 'angle-down' : 'angle-right'" />
        </button>
        <button
          class="k-tree-folder"
          type="button"
          @click="select(item)"
          @dblclick="toggle(item)"
        >
          <k-icon-frame :icon="item.icon ?? 'folder'" />
          <span>{{ item.label }}</span>
        </button>

        <k-button
          v-if="editable"
          v-bind="statusBtn(item)"
          class="k-page-view-status"
          variant="none"
          @click="$dialog(item.children + '/changeStatus')"
        />
        <k-dropdown v-if="editable" class="k-page-view-options">
          <k-button
            :responsive="true"
            icon="cog"
            @click="$refs.settings[index].toggle()"
          />
          <k-dropdown-content
            ref="settings"
            :options="$dropdown(item.children)"
          />
        </k-dropdown>

        <k-button
          v-if="item.allowPreview && editable"
          :link="item.url"
          :responsive="true"
          icon="open"
          target="_blank"
          class="k-page-view-preview"
        />
      </p>
      <template v-if="item.hasChildren && item.open">
        <component
          :is="$options.name"
          v-bind="$props"
          :items="item.children"
          :level="level + 1"
          @select="select"
          @toggle="toggle"
        />
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  extends: "k-page-tree",
  dialog: "k-pages-dialog",
  props: {
    editable: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    statusBtn(page) {
      console.log(
        this.$helper.page.status.call(page, page.status, page.allowStatus)
      );
      return {
        ...this.$helper.page.status.call(page, page.status, page.allowStatus),
        responsive: true,
        size: "sm",
      };
    },
  },
};
</script>

<style>
.k-tree-branch > .k-page-view-status {
  background: none;
}
</style>
