<script>
export default {
  extends: "k-tree",
  inheritAttrs: false,
  props: {
    editable: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    async load(path) {
      const { data } = await this.$api.get(path + "/children", {
        select:
          "hasChildren,id,panelImage,title,uuid,status,previewUrl,options",
        status: "all",
      });

      const pages = {};

      data.forEach((page, index) => {
        const id = page[this.identifier];

        pages[index] = {
          id,
          icon: page.panelImage.icon,
          label: page.title,
          hasChildren: page.hasChildren,
          children: "/pages/" + this.$api.pages.id(page.id),
          open: false,
          status: page.status,
          url: page.previewUrl,
          //TODO: Proper permission and isLocked
          allowStatus: !page.options.changeStatus,
          allowPreview: page.options.preview,
        };
      });

      return pages;
    },
  },
};
</script>
