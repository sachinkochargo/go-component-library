// Button.stories.js

import GoTopBar from './index.vue';
import { tableStatsData, TABLE_ROW, TABLE_COLS } from './../../constants/index';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GoTopBar',
  component: GoTopBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { GoTopBar },
  setup() {
    //👇 The args will now be passed down to the template
    
    return { args } ;
  },
  methods : {
    onClick : () => {
      alert('here!!')
    }
  },
  template: '<GoTopBar v-bind="args" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    label : 'ABC'
};