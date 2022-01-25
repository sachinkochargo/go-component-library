<template>
   <q-card flat bordered class="my-card" >
      <q-card-section :style="{'background' : styling.background, color : styling.textColor}">
        <slot name="cardheader"><div class="text-h6">{{title}}</div></slot>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <slot ></slot>
      </q-card-section>
    </q-card>
</template>

<script>
import { QCard, QCardSection, QSeparator } from "quasar";
import { GoTypes } from '../../constants/types';

export default {
  name: "GoCard",
  props : {
      title : {
          type : String
      },
      cardType : {
          type : String,
          default : 'GoDefault'
      }
  },
  components: {
    QCard,
    QCardSection,
    QSeparator,
  },
  setup(props){
      console.log(props)
  },
  computed : {
      styling : {
          get(){
              return {
                  background : GoTypes(this.cardType).backgroundColor
                  }
          }
      }
  }
};
</script>
