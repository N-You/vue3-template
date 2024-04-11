import { createI18n } from 'vue-i18n';
import enUS from './en-US/index';
import zhCN from './zh-CN/index';

const message = {
  enUS: {
    ...enUS,
  },
  zhCN: {
    ...zhCN,
  },
};

const i18n = createI18n({
  locale: 'zhCN',
  legacy: false,
  globalInjection: true,
  messages: message,
});

export default i18n;
