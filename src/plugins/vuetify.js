import Vue from 'vue';
import Vuetify, { VApp, VContent } from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  components: {
    VApp,
    VContent,
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
