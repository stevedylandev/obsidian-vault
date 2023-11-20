/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Zen
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/utils/types.ts
var DEFAULT_SETTINGS = {
  enabled: false,
  preferences: {
    ribbon: true,
    tabs: false,
    statusBar: false,
    fileHeader: false,
    sideDockLeft: true,
    sideDockRight: true
  },
  integrations: []
};

// src/components/Settings/index.ts
var import_obsidian = require("obsidian");
var SettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: this.plugin.manifest.name });
    new import_obsidian.Setting(containerEl).setHeading().setName("What elements should be hidden when zen mode is enabled?");
    new import_obsidian.Setting(containerEl).setName("Application Ribbon").addButton((bc) => this.highlightElement(bc, ".workspace-ribbon.mod-left")).addToggle((tc) => tc.setValue(this.plugin.settings.preferences.ribbon).onChange(async (value) => {
      this.plugin.settings.preferences.ribbon = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Tabs").addButton((bc) => this.highlightElement(bc, ".workspace-split.mod-vertical .workspace-tab-header-container")).addToggle((tc) => tc.setValue(this.plugin.settings.preferences.tabs).onChange(async (value) => {
      this.plugin.settings.preferences.tabs = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Statusbar").addButton((bc) => this.highlightElement(bc, ".status-bar", true)).addToggle((tc) => tc.setValue(this.plugin.settings.preferences.statusBar).onChange(async (value) => {
      this.plugin.settings.preferences.statusBar = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("File Header").addButton((bc) => this.highlightElement(bc, ".workspace-split.mod-vertical .view-header")).addToggle((tc) => tc.setValue(this.plugin.settings.preferences.fileHeader).onChange(async (value) => {
      this.plugin.settings.preferences.fileHeader = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Left side-dock").addButton((bc) => this.highlightElement(bc, ".workspace-split.mod-horizontal.mod-left-split", false)).setDesc("Including the side-dock toggle button(s).").addToggle((tc) => tc.setValue(this.plugin.settings.preferences.sideDockLeft).onChange(async (value) => {
      this.plugin.settings.preferences.sideDockLeft = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Right side-dock").addButton((bc) => this.highlightElement(bc, ".workspace-split.mod-horizontal.mod-right-split")).setDesc("Including the side-dock toggle button(s).").addToggle((tc) => tc.setValue(this.plugin.settings.preferences.sideDockRight).onChange(async (value) => {
      this.plugin.settings.preferences.sideDockRight = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setHeading().setName("Integrations").setDesc(createFragment((el) => {
      let element = el.createSpan({ text: "See available integrations " });
      element.appendChild(el.createEl("a", {
        href: "https://github.com/Maxymillion/zen#Integrations",
        text: "here"
      }));
    }));
    this.plugin.integrator.update();
    if (this.plugin.settings.integrations.filter((e) => e.available).length < 1) {
      new import_obsidian.Setting(containerEl).setDesc(createFragment((el) => {
        el.createEl("i", { text: "No supported integrations found!" });
      }));
    }
    this.plugin.settings.integrations.map((el) => {
      if (el.available) {
        const integratedPlugin = this.plugin.integrator.getPluginObject(el.name);
        if (integratedPlugin) {
          const pluginEl = createEl("div", { cls: "zen-int-block", attr: { "data-enabled": el.enabled } });
          new import_obsidian.Setting(pluginEl).setName(createFragment((frag) => {
            let pluginTitle = frag.createEl("a", {
              cls: "zen-int--link",
              text: integratedPlugin.manifest.name,
              href: `${integratedPlugin.manifest.authorUrl}/${integratedPlugin.manifest.id}`
            });
            pluginTitle.appendChild(frag.createSpan({
              cls: "zen-int--author",
              text: ` by ${integratedPlugin.manifest.author}`
            }));
          })).setDesc(el.description).addToggle((tc) => tc.setValue(el.enabled).onChange(async (value) => {
            el.enabled = value;
            pluginEl.setAttr("data-enabled", value);
            if (this.plugin.settings.enabled) {
              this.plugin.integrator.toggleIntegration(el.name, value);
            }
            await this.plugin.saveSettings();
          }));
          if (Object.keys(el.options).length > 0) {
            const pluginOptionsTriggerEl = createEl("div", { cls: "zen-int-block--options-trigger" });
            const caret = (0, import_obsidian.getIcon)("chevron-down");
            if (caret) {
              pluginOptionsTriggerEl.append(createFragment((frag) => {
                frag.appendChild(caret);
                frag.createSpan({ text: "Extra options" });
              }));
              pluginOptionsTriggerEl.addEventListener("click", (e) => {
                pluginEl.classList.toggle("options-open");
              });
            }
            pluginEl.appendChild(pluginOptionsTriggerEl);
          }
          const pluginOptionsEl = createEl("div", { cls: "zen-int-block--options" });
          Object.keys(el.options).map((key) => {
            var _a;
            if (key in integratedPlugin.settings) {
              new import_obsidian.Setting(pluginOptionsEl).setName((_a = el.options[key].description) != null ? _a : key).addToggle((tc) => tc.setValue(el.options[key].active).onChange(async (value) => {
                el.options[key].active = value;
                await this.plugin.saveSettings();
              })).nameEl.addEventListener("click", async (e) => {
                var _a2;
                (_a2 = pluginOptionsEl.querySelector(".setting-item-control input")) == null ? void 0 : _a2.click();
              });
            }
          });
          pluginEl.appendChild(pluginOptionsEl);
          containerEl.appendChild(pluginEl);
        }
      }
    });
  }
  highlightElement(c, el, isAbsolute = false) {
    const element = this.containerEl.doc.body.find(el);
    const highlightClass = isAbsolute ? "zen-highlight-el-ab" : "zen-highlight-el";
    c.setIcon("eye");
    c.setTooltip("Highlight");
    c.buttonEl.addEventListener("mousedown", () => {
      element == null ? void 0 : element.addClass(highlightClass);
    });
    c.buttonEl.addEventListener("mouseup", () => {
      element == null ? void 0 : element.removeClass(highlightClass);
    });
    c.buttonEl.addEventListener("mouseleave", () => {
      element == null ? void 0 : element.removeClass(highlightClass);
    });
  }
};

// src/constants.ts
var VIEW_TYPE_ZEN = "com.maxymillion.zen";

// src/ui/ZenView.ts
var import_obsidian2 = require("obsidian");
var ZenView = class extends import_obsidian2.View {
  constructor(leaf, plugin) {
    super(leaf);
    this.leaf = leaf;
    this.plugin = plugin;
  }
  onunload() {
    if (this.headerIcon) {
      this.headerIcon.remove();
    }
    super.onunload();
  }
  onload() {
    if (this.app.workspace.leftSplit) {
      this.createHeaderIcon();
    }
    this.leaf.tabHeaderEl.draggable = false;
    this.updateClass();
    this.addEventListeners();
    super.onload();
  }
  async toggleZen() {
    this.plugin.settings.enabled = !this.plugin.settings.enabled;
    await this.plugin.saveSettings();
    await this.updateClass();
  }
  addEventListeners() {
    this.leaf.tabHeaderEl.addEventListener("click", async (e) => {
      e.stopPropagation();
      e.preventDefault();
      await this.toggleZen();
    });
  }
  createHeaderIcon() {
    let headerIcon = createEl("div", {
      cls: "zen-header",
      attr: { "data-zen": "icon", "aria-label": "Zen", "aria-label-position": "bottom" }
    });
    let headerInner = createEl("div", { cls: "zen-header-inner" });
    (0, import_obsidian2.setIcon)(headerInner, "eye-off");
    headerInner.addEventListener("click", async () => {
      await this.toggleZen();
    });
    headerIcon.appendChild(headerInner);
    this.headerIcon = headerIcon;
    this.app.workspace.leftSplit.getContainer().containerEl.appendChild(headerIcon);
  }
  addBodyClasses(addBaseClass) {
    if (addBaseClass) {
      this.containerEl.doc.body.addClass("zen-enabled");
    }
    Object.keys(this.plugin.settings.preferences).map((key) => {
      if (this.plugin.settings.preferences[key]) {
        this.containerEl.doc.body.addClass("zen-module--" + key);
      }
    });
  }
  removeBodyClasses(removeBaseClass) {
    if (removeBaseClass) {
      this.containerEl.doc.body.removeClass("zen-enabled");
    }
    this.containerEl.doc.body.className = this.containerEl.doc.body.className.split(" ").filter((c) => !c.startsWith("zen-module--")).join(" ").trim();
  }
  async updateClass() {
    (0, import_obsidian2.setIcon)(this.leaf.tabHeaderInnerIconEl, this.plugin.settings.enabled ? "eye-off" : "eye");
    if (this.plugin.settings.enabled) {
      this.removeBodyClasses();
      this.addBodyClasses(true);
      this.plugin.integrator.enableIntegrations();
    } else {
      this.removeBodyClasses(true);
      this.plugin.integrator.disableIntegrations();
    }
    await this.plugin.saveSettings();
  }
  getViewType() {
    return VIEW_TYPE_ZEN;
  }
  getDisplayText() {
    return "Zen";
  }
  getIcon() {
    return !this.plugin.settings.enabled ? "eye" : "eye-off";
  }
};

// src/components/Intregrator/index.ts
var import_obsidian3 = require("obsidian");
var Integrator = class {
  constructor(app, plugin) {
    this.integrations = [];
    this.app = app;
    this.plugin = plugin;
  }
  async update() {
    this.plugin.settings.integrations.map((el) => {
      if (this.app.plugins.plugins[el.name]) {
        el.available = true;
      } else {
        el.available = false;
      }
    });
    await this.plugin.saveSettings();
  }
  load(integrations) {
    integrations.map((el) => {
      console.log(`${this.plugin.manifest.name}: Found integration
[${el.name}]`);
      this.integrations.push(el);
      const foundPlugin = this.plugin.settings.integrations.filter((e) => e.name === el.name);
      if (foundPlugin.length > 0) {
        foundPlugin[0].available = true;
      } else {
        this.plugin.settings.integrations.push({
          enabled: false,
          available: true,
          name: el.name,
          description: el.description,
          options: el.options
        });
      }
    });
    this.plugin.saveSettings();
  }
  getPluginObject(name) {
    return this.app.plugins.plugins[name];
  }
  toggleIntegrations(type) {
    this.plugin.settings.integrations.filter((el) => el.enabled && el.available).map((el) => {
      const loadedPlugin = this.getPluginObject(el.name);
      const integration = this.integrations.filter((e) => e.name === el.name)[0];
      if (loadedPlugin) {
        integration.settings.filter((e) => e.type === type)[0].callback(loadedPlugin);
      }
    });
  }
  disableIntegrations() {
    this.toggleIntegrations("disable");
  }
  enableIntegrations() {
    this.toggleIntegrations("enable");
  }
  getIntegration(name) {
    return this.integrations.filter((el) => el.name === name)[0];
  }
  toggleIntegration(name, enable) {
    this.getIntegration(name).settings.filter((el) => el.type === (enable ? "enable" : "disable"))[0].callback(this.getPluginObject(name));
  }
};

// src/plugin.integrations.ts
var pluginIntegrations = [
  {
    name: "cm-typewriter-scroll-obsidian",
    description: "Automatically enable typewriter scroll when entering Zen mode.",
    enabled: false,
    available: false,
    options: {
      zenEnabled: {
        active: false,
        description: "Enable the darkening of non-active lines"
      }
    },
    settings: [
      {
        type: "enable",
        callback(plugin) {
          plugin.enableZen();
          return plugin.enableTypewriterScroll();
        }
      },
      {
        type: "disable",
        callback(plugin) {
          plugin.disableZen();
          return plugin.disableTypewriterScroll();
        }
      }
    ]
  }
];

// src/main.ts
var Zen = class extends import_obsidian4.Plugin {
  async onload() {
    console.log(`${this.manifest.name}: Loading`);
    await this.loadSettings();
    this.addSettingTab(new SettingsTab(this.app, this));
    this.registerView(VIEW_TYPE_ZEN, (leaf) => {
      leaf.setPinned(true);
      this.zenView = new ZenView(leaf, this);
      return this.zenView;
    });
    this.addCommand({
      id: "toggle",
      name: "Toggle",
      callback: () => {
        this.zenView.toggleZen();
      }
    });
    this.integrator = new Integrator(this.app, this);
    this.integrator.load(pluginIntegrations);
    this.app.workspace.onLayoutReady(async () => {
      await this.initLeaf();
    });
  }
  async initLeaf() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_ZEN);
    await this.app.workspace.getLeftLeaf(false).setViewState({
      type: VIEW_TYPE_ZEN,
      active: false
    });
  }
  async onunload() {
    console.log(`${this.manifest.name}: Unloading`);
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_ZEN);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    if (this.settings.enabled) {
      this.zenView.removeBodyClasses();
      this.zenView.addBodyClasses();
    }
  }
};
