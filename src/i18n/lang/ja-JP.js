const $ = (a, b) => `<ruby>${a}<rt>${b}</rt></ruby>`

export default {
  code: 'ja-JP',
  name: $('日本語', 'にほんご'),
  home: {
    // 外国人向け避難誘導
    question: '外国人向け避難誘導',
    // 災害時多言語情報
    info: '災害時多言語情報',
  },
  content: {
    // 日本語はわかりますか?
    1: $('日本語', 'にほんご') + 'はわかりますか?',
    // 何語がわかりますか
    2: $('何語', 'なにご') + 'がわかりますか?',
    // こちらの通訳アプリを参考してください。
    3: 'こちらの' + $('通訳', 'つうやく') + 'アプリを' + $('参考', 'さんこう') + 'してくだざい。',
    // 何か困っていることはありますか？
    4: $('何', 'なに') + 'か' + $('困', 'こま') + 'っていることはありますか?',
    // 欲しいものはありますか？
    5: $('欲', 'ほ') + 'しいものはありますか？',
  },
  button: {
    // はい
    yes: 'はい',
    // いいえ
    no: 'いいえ',
    // 確認
    comfirm: $('確認', 'かくにん'),
  },
  list: {
    lang: {
      en: '英語',
      zh: '中国語(簡体字)',
      ko: '韓国語',
      vi: 'ベトナム語',
      ne: 'ネパール語',
      tl: 'タガログ語',
      id: 'インドネシア語',
      zhTW: '中国語（繁体字）',
      th: 'タイ語',
      mm: 'ミャンマー語',
      es: 'スペイン語',
      fr: 'フランス語',
      pt: 'ポルトガル語',
      ru: 'ロシア語',
      el: 'その他',
    },
  },
}
