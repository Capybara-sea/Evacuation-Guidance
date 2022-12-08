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
      { text: 'list.lang.en-US' }, // 英語
      { text: 'list.lang.zh-CN' }, // 中国語(簡体字)
      { text: 'list.lang.ko-KR' }, // 韓国語
      { text: 'list.lang.vi-VN' }, // ベトナム語
      { text: 'list.lang.ne-NP' }, // ネパール語
      { text: 'list.lang.tl-PH' }, // タガログ語
      { text: 'list.lang.id-ID' }, // インドネシア語
      { text: 'list.lang.zh-TW' }, // 中国語（繁体字）
      { text: 'list.lang.th-TH' }, // タイ語
      { text: 'list.lang.my-MM' }, // ミャンマー語
      { text: 'list.lang.es-ES' }, // スペイン語
      { text: 'list.lang.fr-FR' }, // フランス語
      { text: 'list.lang.pt-PT' }, // ポルトガル語
      { text: 'list.lang.ru-RU' }, // ロシア語
      { text: 'list.lang.el' }, // その他
    ],
    button: [
      {
        text: 'button.confirm',
        to: 3,
      },
    ],
  },

  // 3.こちらの通訳アプリを参考してください。
  {
    id: 3,
    type: 'card',
    content: 'content.3',
    images: ['images/translation/listen.png', 'images/translation/google.png'],
    button: [
      {
        text: 'button.confirm',
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
        // 食べられないものがあります
        text: 'list.help.1',
      },
      {
        // 長い間持っている病気があります
        text: 'list.help.2',
      },
      {
        // 妊娠しています
        text: 'list.help.3',
      },
      {
        // 障害があります
        text: 'list.help.4',
      },
      {
        // 体の調子が悪いです
        text: 'list.help.5',
      },
      {
        // お祈りをしたいです
        text: 'list.help.6',
      },
      {
        // 授乳をしたいです
        text: 'list.help.7',
      },
      {
        // 短い間個室を使いたいです
        text: 'list.help.8',
      },
      {
        // ペットを連'れてきたいです
        text: 'list.help.9',
      },
      {
        //  Wi-Fiを使いたいです
        text: 'list.help.10',
      },
      {
        //  携帯電話を充電したいです
        text: 'list.help.11',
      },
      {
        //  家族に連絡したいです
        text: 'list.help.12',
      },
      {
        //  大使館に連絡したいです
        text: 'list.help.13',
      },
      {
        //  すぐに帰国したいです
        text: 'list.help.14',
      },
      {
        //  移動方法を知りたいです
        text: 'list.help.15',
      },
      {
        //  外貨両替したいです
        text: 'list.help.16',
      },
    ],
    button: [
      {
        text: 'button.confirm',
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
        // 水
        text: 'list.need.1',
        image: 'images/needs/water.png',
      },
      {
        // 毛布
        text: 'list.need.2',
        image: 'images/needs/blanket.png',
      },
      {
        // おむつ
        text: 'list.need.3',
        image: 'images/needs/diapers.png',
      },
      {
        // 生理用品
        text: 'list.need.4',
        image: 'images/needs/sanitary_pads.png',
      },
      {
        // 食べもの
        text: 'list.need.5',
        image: 'images/needs/food.png',
      },
      {
        // ハラル食品
        text: 'list.need.6',
        image: 'images/needs/halal_food.png',
      },
      {
        // くすり
        text: 'list.need.7',
        image: 'images/needs/medicine.png',
      },
      {
        // ミルク
        text: 'list.need.8',
        image: 'images/needs/milk.png',
      },
    ],
    button: [
      {
        text: 'button.confirm',
        to: 'end',
      },
    ],
  },
]
