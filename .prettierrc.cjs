// 【配置官网】https://www.prettier.cn/docs/options.html
module.exports = {
    // [int]单行长度
    printWidth: 120,
    // [always|never|preserver]是否自动折行
    // always   - 当超出print width时就折行
    // never    - 不折行
    // perserve - 按照文件原样折行 （v1.9.0+）
    proseWrap: 'preserve',
    // [int]缩进单位
    tabWidth: 2,
    // [bool]使用tab缩进
    useTabs: false,
    // [bool]末尾分号
    semi: false,
    // [bool]单引号
    singleQuote: true,
    // [as-needed|consistent|preserve]object对象中key值是否加引号
    // as-needed  - 只有在需求要的情况下加引号
    // consistent - 有一个需要引号就统一加 
    // preserve   - 保留用户输入的引号
    quoteProps: 'as-needed',
    // [bool]在jsx文件中的引号需要单独设置
    jsxSingleQuote: false,
    // [es5|none|all]尾部逗号设置
    // none - 无尾逗号；
    // es5  - 添加es5中被支持的尾逗号；
    // all  - 所有可能的地方都被添加尾逗号；（包括函数参数），这个参数需要安装nodejs8或更高版本；
    trailingComma: 'all',
    // [bool]object对象里面的key和value值和括号间的空格
    // true  - Example: {   foo: bar  }
    // false - Example: {foo: bar}
    bracketSpacing: true,
    // [always|avoid]箭头函数单个参数的情况是否省略括号
    // avoid  - 尽可能不添加圆括号，示例：x => x带括号
    // always - 总是添加圆括号，示例： (x) => x
    arrowParens: 'always',
    // [int]执行格式化的范围
    rangeStart: 0,
    rangeEnd: Infinity,
    // [bool]是否在顶行显示格式化注释
    requirePragma: false,
    // [bool]是否在顶行显示格式化注释
    insertPragma: false,
    // [css|strict|ignore]指定HTML文件的全局空格敏感度
    // css    - 根据CSS默认的display值来格式化。
    // strict - 所有标签周围的空白被认为是重要的。
    // ignore - 所有标签周围的空格被认为是无关紧要的。
    htmlWhitespaceSensitivity: 'css',
    // [bool]script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
    vueIndentScriptAndStyle: false,
    // [lf|crlf|cr|auto]结尾符号
    // lf   – 仅换行 ( \n)，在 Linux 和 macOS 以及 git repos 中很常见
    // crlf - 回车 + 换行字符 ( \r\n)，在 Windows 上很常见
    // cr   - 仅回车符 ( \r)，很少使用
    // auto - 维护现有的行结尾（一个文件中的混合值通过查看第一行之后使用的内容来规范化）
    endOfLine: 'auto',
    // [auto|off]控制被引号包裹的代码是否进行格式化
    embeddedLanguageFormatting: 'auto',
}
