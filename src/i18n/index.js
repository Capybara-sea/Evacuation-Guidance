import { createI18n } from 'vue-i18n'

// ./lang/*.js は自動的に読み取られる
const messages = {}
const files = import.meta.glob('./lang/*.js', { eager: true })
for (const key in files) {
  messages[key.replace(/^.\/lang\/(.*)\.\w+$/, '$1')] = files[key].default
}

// messagesフリガナの変換
const formart = (str) =>
  str.replaceAll(/\$\(([^\s]+)\s([^\s]+)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
function forEachObject(obj) {
  for (const key in obj) {
    if (typeof obj[key] == 'object') forEachObject(obj[key])
    else if (typeof obj[key] == 'string') obj[key] = formart(obj[key])
  }
}
forEachObject(messages)

// 言語リスト 言語コード参考:lang.md
const langList = Object.keys(messages)

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'ja-JP',
  legacy: false,
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  messages,
})

export { i18n, langList, messages }
