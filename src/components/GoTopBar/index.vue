<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-default-blue">
        <q-tabs
          class="bg-primary text-white"
          indicator-color="transparent"
          dense
          active-bg-color="active"
          v-model="tab"
          inline-label
          align="left"
        >
          <q-route-tab
            class="desktop-only q-pa-none q-ma-none"
            v-for="link in essentialLinks"
            :key="link.key"
            :name="link.key"
            :to="link.link"
            @click="onClick()"
          >
            <q-btn
              unelevated
              class="fit text-body2 text-bold no-box-shadow"
              :label="link.label"
            />
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script>
import { QTabs, QRouteTab, QBtn } from "quasar";
export default {
  name: "GoTopBar",
  props: {
    label: String,
    essentialLinks: {
      type: Array,
      default: () => [
        {
          link: "",
          key: "001",
          label: "Default",
        },
        {
          link: "",
          key: "002",
          label: "Default2",
        },
      ],
    },
  },
  methods: {
    onClick() {
      this.$emit("onClickHandler");
    },
  },
  components: {
    QTabs,
    QRouteTab,
    QBtn,
  },
  setup() {
    return {
      tab: "",
    };
  },
};
</script>
