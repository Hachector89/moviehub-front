import {TranslocoGlobalConfig} from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  defaultLang: 'en',
  langs: [ 'en', 'es' ],
  keysManager: {}
};

export default config;
