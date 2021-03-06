import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './en';
import zhLocale from './zh';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
};

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
});

export default i18n;


/*import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('br', require('./pt_br.json'))
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('es', require('./es.json'))

// set the start locale to use
Vue.i18n.set('en')

// set fallback for non-translated strings
Vue.i18n.fallback('en')
*/