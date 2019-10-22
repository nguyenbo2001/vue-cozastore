import Vue from 'vue';
import Vuetify, { VApp, VContent, VCol, VIcon, VRow, VCard, VSlider, VHover, VMenu, VList, VListItem } from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VContent,
    VCol,
    VIcon,
    VRow,
    VCard,
    VSlider,
    VHover,
    VMenu,
    VList,
    VListItem
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi || fa || fa4',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        // primary: colors.purple,
        // secondary: colors.grey.darken1,
        // accent: colors.shades.black,
        error: colors.red.accent3,
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
      dark: {
        primary: colors.blue.lighten3,
      },
      options: {
        minifyTheme: function (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\r\n|\r|\n]/g, '')
            : css
        },
      },
    }
  }
});
