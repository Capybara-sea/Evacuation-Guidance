import { createI18n } from 'vue-i18n'

// ./lang/*.js は自動的に読み取られる
const messages = {}
const files = import.meta.glob('./lang/*.js', { eager: true })
for (const key in files) {
  messages[key.replace(/^.\/lang\/(.*)\.\w+$/, '$1')] = files[key].default
}

// 言語リスト 言語コード参考:lang.md
const langList = Object.keys(messages)

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  legacy: false,
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  messages,
})

export { i18n, langList, messages }
