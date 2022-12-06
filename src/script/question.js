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

  // 3.こちらの通訳アプリを参考してください。
  {
    id: 3,
    type: 'card',
    content: 'content.3',
    images: ['images/translation/listen.png',
      'images/translation/google.png'],
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

  // 5.困っていることlist 
  {
    id: 5,
    type: 'grid',
    content: 'content.4',
    list: [
      {
        text: 'list.help.1', 
      },
      {
        text: 'list.help.2', 
      },
      {
        text: 'list.help.3', 
      },
      {
        text: 'list.help.4', 
      },
      {
        text: 'list.help.5', 
      },
      {
        text: 'list.help.6', 
      },
      {
        text: 'list.help.7', 
      },
      {
        text: 'list.help.8', 
      },
      {
        text: 'list.help.9', 
      },
      {
        text: 'list.help.10', 
      },
      {
        text: 'list.help.11', 
      },
      {
        text: 'list.help.12', 
      },
      {
        text: 'list.help.13', 
      },
      {
        text: 'list.help.14', 
      },
      {
        text: 'list.help.15', 
      },
      {
        text: 'list.help.16', 
      },
    ],
    button: [
      {
        text: 'button.comfirm',
        to: 6,
      },
    ],
  },

  // 6.欲しいものはありますか? 
  {
    id: 6,
    type: 'check',
    content: 'content.5', // 欲しいものはありますか?
    button: [
      {
        text: 'button.yes', // はい
        to: 7,
      },
      {
        text: 'button.no', // いいえ
        to: 'end',
      },
    ],
  },

  // 7.欲しいものlist
  {
    id: 7,
    type: 'grid',
    content: 'content.5',
    list: [
      {
        text: 'list.need.1', 
      },
      {
        text: 'list.need.2', 
      },
      {
        text: 'list.need.3', 
      },
      {
        text: 'list.need.4', 
      },
      {
        text: 'list.need.5', 
      },
      {
        text: 'list.need.6', 
      },
      {
        text: 'list.need.7', 
      },
      {
        text: 'list.need.8', 
      },
    ],
    button: [
      {
        text: 'button.comfirm',
        to: 'end',
      },
    ],
  },
]
