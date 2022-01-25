<template>
  <q-layout view="hHh Lpr lfr">
    <q-header>
      <q-tabs
        v-model="tabLocal"
        class="bg-primary text-white"
        indicator-color="transparent"
        dense
        active-bg-color="active"
      >
        <q-route-tab
          class="desktop-only q-pa-none q-ma-none"
          v-for="link in essentialLinks"
          :key="link.key"
          :name="link.key"
          :to="link.link"
        >
          <q-btn
            unelevated
            class="q-pa-none fit q-ma-none text-body2 text-bold no-box-shadow"
            :label="link.label"
          />
        </q-route-tab>
        <q-btn
          class="desktop-hide"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
       <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-primary"
  >
    <q-list>
      <span
        v-for="(link, index) in essentialLinks"
        :key="index"
      >
        <q-expansion-item
          :label="link.label"
          v-if="link.subTabs"
          expand-icon-class="text-white"
        >
          <q-separator dark />
          <q-item
            v-for="(subTab, idx) in link.subTabs"
            :key="idx"
            class="bg-white text-grey-9"
            clickable
            :active="link === 'inbox'"
            @click="$router.push(subTab.link)"
            active-class="my-menu-link"
          >
            <q-item-section>{{ subTab.label }}</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item
          clickable
          @click="$router.push(link.link)"
          v-else
        >
          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
        <q-separator dark />
      </span>
    </q-list>
  </q-drawer>
        <q-space />
        <q-icon size="sm" name="fas fa-th" class="cursor-pointer q-mx-md">
          <q-popup-proxy>
            <q-card style="min-width: 20vw">
              <q-card-section class="row q-pa-xs">
                <div
                  class="width-33"
                  v-for="(app, index) in otherAppsLinks"
                  :key="index"
                >
                  <div class="col items-center justify-center">
                    <q-btn
                      class="fit q-py-sm"
                      :icon="app.icon"
                      padding="none"
                      stack
                      size="md"
                      color="orange"
                      flat
                      @click="handleClick(app.link)"
                    >
                      <span class="ellipsis text-caption">
                        {{ app.label }}
                      </span>
                      <q-tooltip>
                        {{ app.label }}
                      </q-tooltip>
                    </q-btn>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-popup-proxy>
        </q-icon>
      </q-tabs>
    </q-header>
  </q-layout>
</template>
<script>
import { QTabs, QRouteTab, QIcon, QPopupProxy, QBtn } from "quasar";
export default {
  name: "GOHeader",
  data() {
    return { leftDrawerOpen: false };
  },
  props: {
    otherAppsLinks: { type: Array, default: () => [] },
    essentialLinks: { type: Array, default: () => [] },
    tab: { type: String, default: () => "outbound" },
  },
  components: {
    // MenuDrawer: () => import('./MenuDrawer.vue'),
    QTabs,
    QRouteTab,
    QIcon,
    QPopupProxy,
    QBtn,
  },
  methods: {
    handleClick(link) {
      window.open(link, "_blank");
    },
  },
  computed: {
    tabLocal: {
      set(value) {
        this.$emit("update:tab", value);
      },
      get() {
        return this.tab;
      },
    },
    subTabLinks() {
      const selectedLink = this.essentialLinks.find((el) => el.key === this.tab);
      return selectedLink ? selectedLink.subTabs : [];
    },
  },
};
</script>
<style scoped>
.active {
  font-size: 14px;
}
.bg-active {
  background: #313a73;
}
.width-33 {
  min-width: 33%;
  max-width: 33%;
}
</style>
