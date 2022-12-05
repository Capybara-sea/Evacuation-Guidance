/**
 * type:
 *  - card
 *  - check 選択肢 [id, type, content, button]
 *  - grid  選択肢（複数）[id, type, content, list, button]
 *
 * id: number
 * type: card | check | grid
 * content: string
 * image: [string, ...] (base: assets/)
 * button: [{ text: string, to: id },...]
 * list: [{ text: string },...]
 */

 export default [
  // 1.日本語はわかりますか? (スクリプトの入り口)
  {
    id: 1,
    type: 'check',
    content: 'content.1', // 日本語はわかりますか?
    button: [
      {
        text: 'button.yes', // はい
        to: 2,
      },
      {
        text: 'button.no', // いいえ
        to: 2,
      },
    ],
  },

  // 2.何語がわかりますか?
  {
    id: 2,
    type: 'grid',
    content: 'content.2',
    list: [
      {
        text: 'list.lang.en', // はい
      },
      {
        text: 'list.lang.zh', // いいえ
      },
    ],
    button: [
      {
        text: 'button.comfirm',
        to: 3,
      },
    ],
  },

  // 3.翻訳アプリ(参考)
  {
    id: 3,
    type: 'card',
    content: 'content.3',
    images: ['/images/question/1.png', '/images/question/2.png'],
    button: [
      {
        text: 'button.comfirm',
        to: 4,
      },
    ],
  },

  // 4.何か困っていることはありますか? 
  {
    id: 4,
    type: 'check',
    content: 'content.4', // 何か困っていることはありますか?
    button: [
      {
        text: 'button.yes', // はい
        to: 5,
      },
      {
        text: 'button.no', // いいえ
        to: 6,
      },
    ],
  },

  // 5.何か困っていることはありますか? 
  {
    id: 5,
    type: 'grid',
    content: ''
  },

  // 6.欲しいものはありますか? 
  {
    id: 6,
    type: 'check',
    content: 'content.5', // 欲しいものはありますか?
    button: [
      {
        text: 'button.yes', // はい
        to: 'end',
      },
      {
        text: 'button.no', // いいえ
        to: 'end',
      },
    ],
  },
]
