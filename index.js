(function() {
  "use strict";
  const BrowserSection_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$4 = {
    props: {
      label: {
        type: String,
        default() {
          return "";
        }
      },
      root: {
        type: Boolean,
        default() {
          return false;
        }
      },
      files: {
        type: Boolean,
        default() {
          return false;
        }
      },
      current: {
        type: String,
        default() {
          return "/site";
        }
      },
      identifire: {
        type: String,
        default() {
          return "uuid";
        }
      }
    },
    methods: {
      onSelect(el) {
        if (this.files) {
          console.log(el);
        } else {
          window.open(this.$url(el.children), "_self");
        }
      }
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("section", { staticClass: "k-browser-section" }, [_c("header", { staticClass: "k-section-header" }, [_c("k-label", [_vm._v(_vm._s(_vm.label))])], 1), _vm.files ? _c("k-file-browser", { staticClass: "k-browser-tree", attrs: { "root": false, "editable": true }, on: { "select": _vm.onSelect } }) : _c("k-page-tree", { staticClass: "k-browser-tree", attrs: { "root": false, "editable": "true" }, on: { "select": _vm.onSelect } })], 1);
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    null,
    null,
    null
  );
  __component__$4.options.__file = "/Users/romangsponer/Cloud/_sites/plain/site/plugins/k4-browser-section/src/components/BrowserSection.vue";
  const BrowserSection = __component__$4.exports;
  const Tree_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {
    extends: "k-page-tree",
    dialog: "k-pages-dialog",
    props: {
      editable: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    methods: {
      statusBtn(page) {
        console.log(
          this.$helper.page.status.call(page, page.status, page.allowStatus)
        );
        return {
          ...this.$helper.page.status.call(page, page.status, page.allowStatus),
          responsive: true,
          size: "sm"
        };
      }
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("ul", { staticClass: "k-tree", class: _vm.$options.name, style: { "--tree-level": _vm.level } }, _vm._l(_vm.state, function(item, index) {
      var _a;
      return _c("li", { key: index, attrs: { "aria-expanded": item.open, "aria-current": item.id === _vm.current } }, [_c("p", { staticClass: "k-tree-branch", attrs: { "data-has-subtree": item.hasChildren && item.open } }, [_c("button", { staticClass: "k-tree-toggle", attrs: { "disabled": !item.hasChildren, "type": "button" }, on: { "click": function($event) {
        return _vm.toggle(item);
      } } }, [_c("k-icon", { attrs: { "type": item.open ? "angle-down" : "angle-right" } })], 1), _c("button", { staticClass: "k-tree-folder", attrs: { "type": "button" }, on: { "click": function($event) {
        return _vm.select(item);
      }, "dblclick": function($event) {
        return _vm.toggle(item);
      } } }, [_c("k-icon-frame", { attrs: { "icon": (_a = item.icon) != null ? _a : "folder" } }), _c("span", [_vm._v(_vm._s(item.label))])], 1), _vm.editable ? _c("k-button", _vm._b({ staticClass: "k-page-view-status", attrs: { "variant": "none" }, on: { "click": function($event) {
        return _vm.$dialog(item.children + "/changeStatus");
      } } }, "k-button", _vm.statusBtn(item), false)) : _vm._e(), _vm.editable ? _c("k-dropdown", { staticClass: "k-page-view-options" }, [_c("k-button", { attrs: { "responsive": true, "icon": "cog" }, on: { "click": function($event) {
        return _vm.$refs.settings[index].toggle();
      } } }), _c("k-dropdown-content", { ref: "settings", refInFor: true, attrs: { "options": _vm.$dropdown(item.children) } })], 1) : _vm._e(), item.allowPreview && _vm.editable ? _c("k-button", { staticClass: "k-page-view-preview", attrs: { "link": item.url, "responsive": true, "icon": "open", "target": "_blank" } }) : _vm._e()], 1), item.hasChildren && item.open ? [_c(_vm.$options.name, _vm._b({ tag: "component", attrs: { "items": item.children, "level": _vm.level + 1 }, on: { "select": _vm.select, "toggle": _vm.toggle } }, "component", _vm.$props, false))] : _vm._e()], 2);
    }), 0);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    null,
    null,
    null
  );
  __component__$3.options.__file = "/Users/romangsponer/Cloud/_sites/plain/site/plugins/k4-browser-section/src/components/Tree.vue";
  const Tree = __component__$3.exports;
  const _sfc_main$2 = {
    extends: "k-tree",
    inheritAttrs: false,
    props: {
      editable: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    methods: {
      async load(path) {
        const { data } = await this.$api.get(path + "/children", {
          select: "hasChildren,id,panelImage,title,uuid,status,previewUrl,options",
          status: "all"
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
            allowStatus: !page.options.changeStatus,
            allowPreview: page.options.preview
          };
        });
        return pages;
      }
    }
  };
  const _sfc_render$2 = null;
  const _sfc_staticRenderFns$2 = null;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    null,
    null,
    null
  );
  __component__$2.options.__file = "/Users/romangsponer/Cloud/_sites/plain/site/plugins/k4-browser-section/src/components/PageTree.vue";
  const PageTree = __component__$2.exports;
  const FileBrowser_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1 = {
    props: {
      selected: {
        type: String,
        default: ""
      },
      editable: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data() {
      return {
        files: [],
        page: null,
        view: "tree"
      };
    },
    methods: {
      selectFile(file) {
        this.$emit("select", file);
      },
      async selectPage(page) {
        this.page = page;
        const parent = page.id === "site://" ? "/site/files" : "/pages/" + this.$api.pages.id(page.id) + "/files";
        const { data } = await this.$api.get(parent, {
          select: "filename,panelImage,link,uuid"
        });
        this.files = data.map((file, index) => {
          return {
            label: file.filename,
            image: file.panelImage,
            id: file.uuid,
            link: file.link,
            value: file.uuid,
            index
          };
        });
        this.view = "files";
      },
      togglePage() {
        this.$nextTick(() => {
          this.$refs.tree.scrollIntoView({
            behaviour: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        });
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _a, _b;
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-file-browser", attrs: { "data-view": _vm.view } }, [_c("div", { staticClass: "k-file-browser-layout" }, [_c("aside", { ref: "tree", staticClass: "k-file-browser-tree" }, [_c("k-page-tree", { attrs: { "current": (_a = _vm.page) == null ? void 0 : _a.id }, on: { "select": _vm.selectPage, "toggleBranch": _vm.togglePage } })], 1), _c("div", { ref: "items", staticClass: "k-file-browser-items" }, [_c("k-button", { staticClass: "k-file-browser-back-button", attrs: { "icon": "angle-left", "text": (_b = _vm.page) == null ? void 0 : _b.label }, on: { "click": function($event) {
      _vm.view = "tree";
    } } }), _vm.files.length ? _c("k-browser", { attrs: { "editable": _vm.editable, "items": _vm.files, "selected": _vm.selected }, on: { "select": _vm.selectFile } }) : _vm._e()], 1)])]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null,
    null,
    null
  );
  __component__$1.options.__file = "/Users/romangsponer/Cloud/_sites/plain/site/plugins/k4-browser-section/src/components/FileBrowser.vue";
  const FileBrowser = __component__$1.exports;
  const Browser_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    dialog: "k-files-dialog",
    props: {
      items: {
        type: Array,
        default() {
          return [];
        }
      },
      name: {
        default: "items",
        type: String
      },
      selected: {
        type: String,
        default: ""
      },
      editable: {
        type: Boolean
      },
      type: {
        default: "radio",
        type: String
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("nav", { staticClass: "k-browser" }, [_c("div", { staticClass: "k-browser-items" }, _vm._l(_vm.items, function(item) {
      return _c("label", { key: item.value, staticClass: "k-browser-item" }, [_c("input", { attrs: { "name": _vm.name, "type": _vm.type }, domProps: { "checked": _vm.selected === item.value }, on: { "change": function($event) {
        return _vm.$emit("select", item);
      } } }), item.image ? _c("k-item-image", { staticClass: "k-browser-item-image", attrs: { "image": { ...item.image, cover: true, back: "black" } } }) : _vm._e(), _c("span", { staticClass: "k-browser-item-info" }, [_vm._v(" " + _vm._s(item.label) + " ")]), _vm.editable ? _c("k-button", { staticClass: "k-files-view-status", staticStyle: { "--icon-size": "12px" }, attrs: { "variant": "none", "icon": "edit", "link": item.link } }) : _vm._e(), _vm.editable ? _c("k-dropdown", { staticClass: "k-files-view-options" }, [_c("k-button", { attrs: { "responsive": true, "icon": "cog" }, on: { "click": function($event) {
        _vm.$refs.settings[item.index].toggle();
      } } }), _c("k-dropdown-content", { ref: "settings", refInFor: true, attrs: { "options": _vm.$dropdown(item.link) } })], 1) : _vm._e()], 1);
    }), 0)]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/romangsponer/Cloud/_sites/plain/site/plugins/k4-browser-section/src/components/Browser.vue";
  const Browser = __component__.exports;
  window.panel.plugin("microman/browsersection", {
    sections: {
      browser: BrowserSection
    },
    components: {
      "k-tree": Tree,
      "k-page-tree": PageTree,
      "k-file-browser": FileBrowser,
      "k-browser": Browser
    }
  });
})();
