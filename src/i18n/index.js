import { createI18n } from 'vue-i18n'

// 言語リスト 言語コード参考:lang.md
const langList = ['en-US', 'ja-JP', 'zh-CN']

let messages = {}

langList.forEach((lang) => {
  messages[lang] = require(`./lang/${lang}.js`).default
})

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  legacy: false,
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  messages,
})

export { i18n, langList, messages }
