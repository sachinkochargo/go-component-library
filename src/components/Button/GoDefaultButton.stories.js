// Button.stories.js

import GoButton from './GoButton.vue';
import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GoButton',
  component: GoButton,
  argTypes : {
    label: {
      type : String,
      description : 'Text for button'
    },
    dis : {
      type : Boolean,
      description : "if button is disabled"
    },
    primary : {
      type : Boolean,
      description : "If the button type needs to be primary , set by default"
    },
    secondary : {
      type : Boolean,
      description : "If the button type needs to be secondary."
    },
    onClickHandler : {
      type : Function,
      description : "A event called when the button is clicked, no data collected",
      action : 'clicked'
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { GoButton },
  setup() {

    return { args } ;
  },
  methods : {
    onClick() {
      alert('here!!')
    },
    action: action('onClick')
  },
  template: '<GoButton v-bind="args" @onClickHandler="action"/>',
  
    // onClickHandler : action('clicked')
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  label: "Submit",
  dis : Boolean(false),
  // onClickHandler : action('clicked')
};
Secondary.args = {
  label: "Submit",
  dis : Boolean(false),
  secondary : Boolean(true)
};