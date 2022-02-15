// Button.stories.js

import { action } from '@storybook/addon-actions';
import { AUTH_MENU_ITEMS } from '../../constants';
import GoAuthButton from './index.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GoAuthButton',
  component: GoAuthButton,
  argTypes : {
    username: {
      type : String,
      description : 'Name to show in the button'
    },
    menuLinks : {
      type : Object,
      description : "List of items for the button dropdown"
    },
    disable : {
      type : Boolean,
      description : "te enable/disable button, by default set to false"
    },
    onClickHanlder: {
      type : Function,
      description : "Event when the button or any element is clicked "
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { GoAuthButton },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  methods : {
    action : action('onClickHanlder')
  },
  template: '<GoAuthButton v-bind="args" @onClickHandler="action" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  username: 'Button',
  disable : Boolean(false),
  menuLinks : AUTH_MENU_ITEMS
};