// Button.stories.js

import GoTableCard from './GoTableCard.vue';
import { tableStatsData, TABLE_ROW, TABLE_COLS } from './../../constants/index';
import { action } from '@storybook/addon-actions';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GoTableCard',
  component: GoTableCard,
  argTypes:{
    rowClick : {
      action : 'clicked'
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { GoTableCard },
  setup() {
    //👇 The args will now be passed down to the template
    
    return { args } ;
  },
  methods : {
    onClick : () => {
      action('rowClick')
    },
    action : action('onClick')
  },
  template: '<GoTableCard v-bind="args" @rowClick="action" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  title: "Go Table Card",
  tableStatsData: tableStatsData,
  rows : TABLE_ROW,
  columns : TABLE_COLS,
  selectedRef : []
};