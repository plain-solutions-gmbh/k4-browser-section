import BrowserSection from "./components/BrowserSection.vue";
import Tree from "./components/Tree.vue";
import PageTree from "./components/PageTree.vue";
import FileBrowser from "./components/FileBrowser.vue";
import Browser from "./components/Browser.vue";

window.panel.plugin("microman/browsersection", {
  sections: {
    browser: BrowserSection,
  },
  components: {
    "k-tree": Tree,
    "k-page-tree": PageTree,
    "k-file-browser": FileBrowser,
    "k-browser": Browser,
  },
});
