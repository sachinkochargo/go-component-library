<template>
  <q-card flat bordered class="my-card">
    <q-card-section
      :style="{ 'background': styling.background, 'color': styling.textColor }"
    >
      <div class="q-pr-xs">
        <span class="q-pr-xs">{{ title }}</span> 
        <span v-if="this.tableStatsData" >
            <span v-for=" itm in tableStatsData " v-bind:key="itm.key">{{ itm.name }} : {{ itm.value }} <span> | </span> </span>
        </span>
        <!-- <span class="q-pl-xs">{{ $t("total") }}</span> -->
      </div>
    </q-card-section>
    <q-separator  />
    <q-card-section class="q-pa-none">
      <slot ></slot>
    </q-card-section>
  </q-card>
</template>

<script>
import { QCard, QCardSection, QSeparator } from "quasar";
import { GoTypes } from "../../constants/types";
export default {
  name: "GoTableCard",
  props: {
    title: {
      type: String,
    },
    cardType: {
      type: String,
      default: "GoDefault",
    },
    tableStatsData : {
        type : Array,
        // default : ()=>{
        //     return [
        //     {
        //         KEY : 'TEST',
        //         name : "test"
        //     }
        // ]
        // } 
    }
  },
  components: {
    QCard,
    QCardSection,
    QSeparator,
  },
  setup(props) {
    console.log('props', props.tableStatsData);
  },
  computed: {
    styling: {
      get() {
        return {
          background: GoTypes(this.cardType).backgroundColor,
          textColor : GoTypes(this.cardType).textColor

        };
      },
    },
  },
};
</script>
