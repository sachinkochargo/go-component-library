<template>
  <q-btn-dropdown
    color="white"
    rounded
    size="md"
    no-caps
    :label="username"
    icon="fas fa-user-circle"
    text-color="grey-9"
    :disabled="dis"
  >
    <q-list separator>
      <q-item 
        v-for="(link, index) in menuLinks"
        :key="index"
        clickable
        @click="onClick(link)"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section class="text-weight-medium">
          {{ link.title }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
<script>
import { QList, QItemSection, QItem, QBtnDropdown, QIcon } from "quasar";
import { GoColors } from "./../../constants/types";
export default {
  name: "GoAuthButton",
  props: {
    username: String,
    menuLinks: Array,
    disable : Boolean,
    onClickHandler : {
      typd : Function
    }
  },
  methods: {
    onClick(link) {
      this.$emit("onClickHandler", link);
    },
  },
  computed: {
    isDisabled() {
      console.log("dis", this.dis);
      return this.dis === "true" ? true : false;
    },
    styling: {
      get() {
        const colorProps = GoColors(this.elemType);
        return {
          color: colorProps.color,
          textColor: colorProps.textColor,
        };
      },
    },
  },
  components: {
    QList,
    QItemSection,
    QItem,
    QBtnDropdown,
    QIcon
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
