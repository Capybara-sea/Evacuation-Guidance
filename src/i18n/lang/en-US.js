export default {
  // 言語コード
  code: 'en-US',
  // 言語の名前
  name: 'English',

  home: {
    // 外国人向け避難誘導
    question: 'Evacuation Guidance for foreigners',
    // 災害時多言語情報
    info: 'Emergency Multi-language Resources',
  },
  content: {
    // 日本語はわかりますか?
    1: 'Do you understand Japanese?',
    // 何語がわかりますか
    2: 'Which language(s) do you speak?',
    // 翻訳アプリ(参考)
    3: 'You can refer to the following translation software.',
    // 何か困っていることはありますか？
    4: 'Do you have anything that troubles you?',
    // 欲しいものはありますか？
    5: 'Is there anything you want?',
  },
  image: {
    // Voice Traは、スマートフォン用の多言語音声翻訳アプリです。
    listen:
      'Voice Tra is a multilingual speech translation app for smartphones.',
    // Google Translateは Google が提供する翻訳アプリです。
    google: 'Google Translate is a translation app provided by Google.',
  },
  button: {
    // はい
    yes: 'Yes',
    // いいえ
    no: 'No',
    // 確認
    confirm: 'Confirm',
  },
  list: {
    lang: {
      // 英語
      'en-US': 'English',
      // 中国語(簡体字)
      'zh-CN': 'Simplified Chinese',
      // 韓国語
      'ko-KR': 'Korean',
      // ベトナム語
      'vi-VN': 'Vietnamese',
      // ネパール語
      'ne-NP': 'Nepali',
      // タガログ語
      'tl-PH': 'Tagalog',
      // インドネシア語
      'id-ID': 'Indonesian',
      // 中国語（繁体字）
      'zh-TW': 'Traditional Chinese',
      // タイ語
      'th-TH': 'Thai',
      // ミャンマー語
      'my-MM': 'Myanmar',
      // スペイン語
      'es-ES': 'Spanish',
      // フランス語
      'fr-FR': 'French',
      // ポルトガル語
      'pt-PT': 'Portuguese',
      // ロシア語
      'ru-RU': 'Russian',
      // その他
      el: 'others',
    },
    help: {
      // 食べられないものがあります
      1: 'I cannot eat certain food',
      // 長い間持っている病気があります
      2: 'I have a chronic illness',
      // 妊娠しています
      3: 'I am pregnant',
      // 障害があります
      4: 'I have a disability',
      // 体の調子が悪いです
      5: 'I am not well',
      // お祈りをしたいです
      6: 'I would like to pray',
      // 授乳をしたいです
      7: 'I would like to breastfeed/bottle feed my baby',
      // 短い間個室を使いたいです
      8: 'I would like to use a private room for a short time',
      // ペットを連'れてきたいです
      9: 'I would like to bring my pet(s)',
      //  Wi-Fiを使いたいです
      10: 'I would like to use wiﬁ',
      //  携帯電話を充電したいです
      11: 'I would like to charge my mobile phone',
      //  家族に連絡したいです
      12: 'I would like to contact my family',
      //  大使館に連絡したいです
      13: 'I would like to contact the embassy',
      //  すぐに帰国したいです
      14: 'I would like to go back to my country immediately',
      //  移動方法を知りたいです
      15: 'I would like to know which transportation to use',
      //  外貨両替したいです
      16: 'I would like to exchange currency',
    },
    need: {
      // 水
      1: 'Water',
      // 毛布
      2: 'Blanket',
      // おむつ
      3: 'Diapers',
      // 生理用品
      4: 'Sanitary pads',
      // 食べもの
      5: 'Food',
      // ハラル食品
      6: 'Halal food',
      // くすり
      7: 'Medicine',
      // ミルク
      8: 'Baby formula milk',
    },
  },
  result: {
    // 画像を生成する
    generateImage: 'generate image',
    // イメージの生成に失敗しました
    generateFailed: 'Failed to generate image',
    // 画像を長押しして保存する
    saveImage: 'Long press to save the image',
  },
  info: {
    // 参考サイト
    link: 'Reference Site',
    intro: {
      1: {
        // 災害時の多言語支援
        title: 'Multilingual support in times of disaster',
        // 日本に在住している外国人は日本語が不自由であったり、日本の生活環境に不案内であったり、災害のことを知らなかったりすることが多いため、災害弱者と位置づけられています。クレアでは、地域国際化協会、自治体などによる円滑な情報提供を支援することを目的として、平時から災害時対応を考え、多言語支援体制の構築に活かす「災害時の多言語支援のための手引き」や、多言語による文字情報の提供が可能な「多言語表示シート作成ツール」の提供など、災害時外国人支援のための情報を発信しています。
        content:
          'Foreigners living in Japan are often classified as vulnerable to disasters because they are not fluent in Japanese, are unfamiliar with the living environment in Japan, or do not know about disasters. With the aim of supporting the smooth provision of information by regional international associations, local governments, etc., CLAIR has prepared a guidebook for multilingual support in times of disaster that considers disaster response from normal times and utilizes it in building a multilingual support system. , and a tool for creating multilingual display sheets that can provide text information in multiple languages.',
      },
      2: {
        // 震度階級対応関係図
        title: 'Seismic intensity scale correspondence chart',
        // 震度の階級表には国際的に統一された標準的な規格はなく、それぞれの国や地域が採用したいくつかの指標があります。日本人が慣れ親しんでいる震度も、外国人にはなかなか伝わらないです。震度は各地の地震動の強さを表す指標であり、日本では0 ∼ 7までの10段階の気象庁震度階級が使用されていますが、他国では異なる震度階級が使われています。海外では12階級の震度階級が一般的です。12階級が当たり前の外国人にとっては、震度7や震度6強は決して大きい震度とはいえないのです。そこで、筆者は地震加速度と揺れによる影響の二つの要素を取り入れ、世界各国で使われる震度階級と日本の気象庁震度階級との対応関係図を作成し、外国人が地震の危険性をより把握しやすいようにします。
        content:
          'There is no internationally standardized standard for seismic intensity scales, and there are several indexes adopted by each country and region. It is difficult for foreigners to understand the intensity of the earthquake, which Japanese people are familiar with. Seismic intensity is an index that expresses the strength of earthquake ground motion in each region. In Japan, the Japan Meteorological Agency seismic intensity scale of 10 levels from 0 to 7 is used, but other countries use different seismic intensity scales. 12 seismic intensity classes are common overseas. For foreigners who are accustomed to 12th class, a seismic intensity of 7 or 6 upper is by no means a large seismic intensity. Therefore, the author incorporated the two elements of seismic acceleration and the impact of tremors and created a map of the correspondence between the seismic intensity scales used in countries around the world and the Japan Meteorological Agency seismic intensity scales, so that foreigners can better understand the danger of earthquakes. make it easy.',
      },
    },
    pics: {
      // 震度と揺れの状況
      1: 'Seismic intensity and tremor status',
      // 震度階級対応関係図
      2: 'Seismic intensity scale correspondence chart',
    },
  },
}
