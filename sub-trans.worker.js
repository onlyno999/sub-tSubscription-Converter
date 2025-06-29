```javascript
/*
 * 【山寨秘籍使用说明】
 * 
 * 此乃本山寨秘制之“云端劫掠”法门，专为兄弟们在云海中行事方便。
 * 
 * 一、部署之法：
 *    将此秘籍部署于“云雾工人”（Cloudflare Workers）平台，
 *    绑定自家山头（自定义域名），方可施展。
 * 
 * 二、劫掠之术：
 *    1. 访问自家山头，即可抵达“前哨站”（前端页面），
 *       在此可输入“天涯路径”（URL）进行“劫掠”（fetch）。
 *    2. 直接通过“天涯路径”访问：
 *       例如：`https://你的山头/?url=https://目标订阅地址`
 *       此法门可将目标订阅中的“据点”（server）和“口令”（password）等敏感信息，
 *       替换为本山寨的“天意符文”（随机字符串），再行“编码”（base64）或“秘籍化”（YAML）。
 *       如此一来，外人难窥其真面目，唯有本山寨“解密数据”方可复原。
 * 
 * 三、替身之计：
 *    本法门支持多种“连环计”（链接类型）的“替身”（替换），
 *    包括但不限于：`ss://`, `ssr://`, `vmess://`, `trojan://`, `vless://`, `hysteria://`。
 *    “替身”之物，皆为“天意符文”，确保安全。
 * 
 * 四、藏宝阁：
 *    “藏宝阁”（SUB_BUCKET）乃本山寨临时存放“替身”之物的秘地，
 *    “劫掠”完成后，物件将自动销毁，不留痕迹。
 * 
 * 五、后山据点：
 *    “后山”（BACKEND）乃本山寨默认之“中转据点”，
 *    若有特殊需求，可在“天涯参数”中指定“后山参数”（bd），
 *    指向其他“中转据点”。
 * 
 * 六、注意事项：
 *    - “天涯路径”可传入多个，以“|”符分隔，本法门将逐一“劫掠”。
 *    - “秘籍物件”（YAML）格式的“替身”，需确保其“替身阵列”（proxies）存在。
 *    - “编码祸事”（Base64 Error）或“秘籍祸事”（YAML Error）发生时，
 *      本法门将尝试直接“替换”（replace）符文，以求“所得”（result）。
 * 
 * 兄弟们，此乃江湖生存之道，切记谨慎行事，莫要走漏风声！
 */

// ----------------------------------------------------------------------------------------------------
// 吾辈山寨秘宝：江湖规矩与常用物件
// ----------------------------------------------------------------------------------------------------
// 这厮是乾坤之钥，开门用的！
var _hasOwnProperty = Object.prototype.hasOwnProperty;
// 流向之境，入也！
var CONTEXT_FLOW_IN = 1;
// 流向之境，出也！
var CONTEXT_FLOW_OUT = 2;
// 块状之境，入也！
var CONTEXT_BLOCK_IN = 3;
// 块状之境，出也！
var CONTEXT_BLOCK_OUT = 4;
// 剪裁之法，一也！
var CHOMPING_CLIP = 1;
// 剥离之法，二也！
var CHOMPING_STRIP = 2;
// 保留之法，三也！
var CHOMPING_KEEP = 3;
// 非可印符咒，江湖禁忌！
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
// 非ASCII行尾符咒，小心有诈！
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
// 流向指示符咒，看清方向！
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
// 印记把手符咒，认准了！
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
// 印记天涯符咒，别走错了！
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
// 品类铸造规矩，不能乱来！
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
// YAML节点本性，就这几样！
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
// 浮点数符咒，江湖上常见！
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
// 科学计数法符咒，没点儿的！
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
// 岁月日期符咒，看好了！
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
// 岁月时间戳符咒，更复杂些！
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
// 二元编码图谱，秘制！
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
// 字节序标记，小心！
var CHAR_BOM = 65279;
// 暗记，九也！
var CHAR_TAB = 9;
// 行尾，十也！
var CHAR_LINE_FEED = 10;
// 回车，十三也！
var CHAR_CARRIAGE_RETURN = 13;
// 空白，三十二也！
var CHAR_SPACE = 32;
// 惊叹，三十三也！
var CHAR_EXCLAMATION = 33;
// 双引号，三十四也！
var CHAR_DOUBLE_QUOTE = 34;
// 井号，三十五也！
var CHAR_SHARP = 35;
// 百分号，三十七也！
var CHAR_PERCENT = 37;
// 连字符，三十八也！
var CHAR_AMPERSAND = 38;
// 单引号，三十九也！
var CHAR_SINGLE_QUOTE = 39;
// 星号，四十二也！
var CHAR_ASTERISK = 42;
// 逗号，四十四也！
var CHAR_COMMA = 44;
// 减号，四十五也！
var CHAR_MINUS = 45;
// 冒号，五十八也！
var CHAR_COLON = 58;
// 等号，六十一也！
var CHAR_EQUALS = 61;
// 大于号，六十二也！
var CHAR_GREATER_THAN = 62;
// 问号，六十三也！
var CHAR_QUESTION = 63;
// 艾特符，六十四也！
var CHAR_COMMERCIAL_AT = 64;
// 左方括号，九十一也！
var CHAR_LEFT_SQUARE_BRACKET = 91;
// 右方括号，九十三也！
var CHAR_RIGHT_SQUARE_BRACKET = 93;
// 反引号，九十六也！
var CHAR_GRAVE_ACCENT = 96;
// 左花括号，一百二十三也！
var CHAR_LEFT_CURLY_BRACKET = 123;
// 竖线，一百二十四也！
var CHAR_VERTICAL_LINE = 124;
// 右花括号，一百二十五也！
var CHAR_RIGHT_CURLY_BRACKET = 125;
// 转义序列，秘不外传！
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
// 废弃的真假符文，老规矩了！
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
// 废弃的六十进制符咒，老古董了！
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
// 单引号式样，一也！
var QUOTING_TYPE_SINGLE = 1;
// 双引号式样，二也！
var QUOTING_TYPE_DOUBLE = 2;
// 寻常式样，一也！
var STYLE_PLAIN = 1;
// 单引号式样，二也！
var STYLE_SINGLE = 2;
// 字面式样，三也！
var STYLE_LITERAL = 3;
// 折叠式样，四也！
var STYLE_FOLDED = 4;
// 双引号式样，五也！
var STYLE_DOUBLE = 5;
// ----------------------------------------------------------------------------------------------------
// 吾辈山寨秘宝：江湖规矩与常用物件 结束
// ----------------------------------------------------------------------------------------------------

// 这厮是乾坤之钥，开门用的！
var __getOwnPropNames = Object.getOwnPropertyNames;
// 瞅瞅这秘术，能把东西变个样！
var __esm = (fn, res) => function __init() {
  // 若有秘术，便施展之，得其所得，秘术归零。
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
// 兄弟们，这是咱们的通用秘术，用来搬运货物的！
var __commonJS = (cb, mod) => function __require() {
  // 若无货，便去唤那秘术，把货搬来。
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// wrangler-modules-watch:wrangler:modules-watch
// 启动看守秘术，盯着点儿！
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
  }
});

// C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
// 看守桩子秘术，就等着看守秘术启动呢！
var init_modules_watch_stub = __esm({
  "C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    // 启动看守秘术！
    init_wrangler_modules_watch();
  }
});

// node_modules/js-yaml/lib/common.js
// 搬运江湖通用秘籍！
var require_common = __commonJS({
  "node_modules/js-yaml/lib/common.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 秘术：空空如也否？
    function 空空如也否(物件) {
      // 瞅瞅这物件，是未定还是空空如也。
      return 何等 物件 === "undefined" || 物件 === 空空;
    }
    // 秘术：物是也否？
    function 物是也否(物件) {
      // 瞅瞅这物件，是物是也且不空空如也。
      return 何等 物件 === "object" && 物件 !== 空空;
    }
    // 秘术：化为阵列！
    function 化为阵列(序列) {
      // 若是队列之辨，便直接交货；
      if (队列之辨(序列))
        return 序列;
      // 否则若空空如也，便交货空队列；
      else if (空空如也否(序列))
        return [];
      // 否则，便化为单物队列交货。
      return [序列];
    }
    // 秘术：延展！
    function 延展(目标, 源头) {
      // 巡查甲乙丙丁，长短，密匙，源头密匙。
      var 巡查甲乙丙丁, 长短, 密匙, 源头密匙;
      // 若有源头，便施展之。
      if (源头) {
        // 取源头乾坤之钥。
        源头密匙 = 乾坤.keys(源头);
        // 巡查一番，逐一搬运。
        for (巡查甲乙丙丁 = 0, 长短 = 源头密匙.length; 巡查甲乙丙丁 < 长短; 巡查甲乙丙丁 += 1) {
          // 取密匙。
          密匙 = 源头密匙[巡查甲乙丙丁];
          // 目标之钥，便是源头之钥。
          目标[密匙] = 源头[密匙];
        }
      }
      // 交货目标。
      return 目标;
    }
    // 秘术：重演！
    function 重演(符文, 计数) {
      // 所得为空符文，循环计数。
      var 所得 = "", 循环;
      // 巡查一番，逐一重演。
      for (循环 = 0; 循环 < 计数; 循环 += 1) {
        // 所得累加符文。
        所得 += 符文;
      }
      // 交货所得。
      return 所得;
    }
    // 秘术：负零否？
    function 负零否(量数) {
      // 瞅瞅这量数，是零且无尽之阴是其倒数。
      return 量数 === 0 && 无尽之阴 === 1 / 量数;
    }
    // 山寨秘宝：空空如也否。
    山寨秘宝.exports.isNothing = 空空如也否;
    // 山寨秘宝：物是也否。
    山寨秘宝.exports.isObject = 物是也否;
    // 山寨秘宝：化为阵列。
    山寨秘宝.exports.toArray = 化为阵列;
    // 山寨秘宝：重演。
    山寨秘宝.exports.repeat = 重演;
    // 山寨秘宝：负零否。
    山寨秘宝.exports.isNegativeZero = 负零否;
    // 山寨秘宝：延展。
    山寨秘宝.exports.extend = 延展;
  }
});

// node_modules/js-yaml/lib/exception.js
// 搬运祸事秘籍！
var require_exception = __commonJS({
  "node_modules/js-yaml/lib/exception.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 秘术：修饰祸事！
    function 修饰祸事(祸事, 紧凑) {
      // 落脚点为空符文，口信乃祸事缘由或未知缘由。
      var 落脚点 = "", 口信 = 祸事.reason || "(未知缘由)";
      // 若无祸事印记，便交货口信。
      if (!祸事.mark)
        return 口信;
      // 若有印记名号，便累加落脚点。
      if (祸事.mark.name) {
        落脚点 += '在 "' + 祸事.mark.name + '" ';
      }
      // 落脚点累加行数与列数。
      落脚点 += "(" + (祸事.mark.line + 1) + ":" + (祸事.mark.column + 1) + ")";
      // 若非紧凑且有印记片段，便累加片段。
      if (!紧凑 && 祸事.mark.snippet) {
        落脚点 += "\n\n" + 祸事.mark.snippet;
      }
      // 交货口信与落脚点。
      return 口信 + " " + 落脚点;
    }
    // 堂口：山寨祸事！
    function YAMLException(缘由, 印记) {
      // 唤之祸事。
      祸事.call(此物);
      // 自家名号乃“山寨祸事”。
      此物.name = "YAMLException";
      // 自家缘由乃传入缘由。
      此物.reason = 缘由;
      // 自家印记乃传入印记。
      此物.mark = 印记;
      // 自家口信乃修饰祸事。
      此物.message = 修饰祸事(此物, 假哉);
      // 若能捕获踪迹，便捕获之。
      if (祸事.captureStackTrace) {
        祸事.captureStackTrace(此物, 此物.开山祖师);
      } else {
        // 否则，踪迹乃新祸事之踪迹或空符文。
        此物.stack = new 祸事().stack || "";
      }
    }
    // 山寨祸事祖传秘方，凭空造物祸事祖传秘方。
    YAMLException.祖传秘方 = 乾坤.create(祸事.祖传秘方);
    // 山寨祸事开山祖师，乃山寨祸事。
    YAMLException.祖传秘方.开山祖师 = YAMLException;
    // 山寨祸事祖传秘方言其形，乃名号与修饰祸事。
    YAMLException.祖传秘方.言其形 = function 言其形(紧凑) {
      return 此物.name + ": " + 修饰祸事(此物, 紧凑);
    };
    // 山寨秘宝：山寨祸事。
    山寨秘宝.exports = YAMLException;
  }
});

// node_modules/js-yaml/lib/snippet.js
// 搬运片段秘籍！
var require_snippet = __commonJS({
  "node_modules/js-yaml/lib/snippet.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运江湖通用秘籍。
    var 江湖通用 = require_common();
    // 秘术：取行！
    function 取行(缓存, 行首, 行尾, 落脚点, 最长行) {
      // 首部为空符文，尾部为空符文。
      var 首部 = "";
      var 尾部 = "";
      // 半长乃取整最长行除二减一。
      var 半长 = 取整(最长行 / 2) - 1;
      // 若落脚点减行首大于半长，则首部累加，行首重定。
      if (落脚点 - 行首 > 半长) {
        首部 = " ... ";
        行首 = 落脚点 - 半长 + 首部.length;
      }
      // 若行尾减落脚点大于半长，则尾部累加，行尾重定。
      if (行尾 - 落脚点 > 半长) {
        尾部 = " ...";
        行尾 = 落脚点 + 半长 - 尾部.length;
      }
      // 交货符文与相对落脚点。
      return {
        符文: 首部 + 缓存.slice(行首, 行尾).replace(/\t/g, "\u2192") + 尾部,
        落脚点: 落脚点 - 行首 + 首部.length
        // 相对落脚点
      };
    }
    // 秘术：前补！
    function 前补(符文, 最长) {
      // 交货江湖通用重演空白符文，最长减符文长短，再加符文。
      return 江湖通用.repeat(" ", 最长 - 符文.length) + 符文;
    }
    // 秘术：剪裁片段！
    function 剪裁片段(印记, 规矩) {
      // 规矩乃凭空造物规矩或空空。
      规矩 = 乾坤.create(规矩 || 空空);
      // 若无印记缓存，便交货空空。
      if (!印记.buffer)
        return 空空;
      // 若无最长，则最长为七十九。
      if (!规矩.maxLength)
        规矩.maxLength = 79;
      // 若缩进非量数，则缩进为一。
      if (何等 规矩.indent !== "number")
        规矩.indent = 1;
      // 若前行非量数，则前行为三。
      if (何等 规矩.linesBefore !== "number")
        规矩.linesBefore = 3;
      // 若后行非量数，则后行为二。
      if (何等 规矩.linesAfter !== "number")
        规矩.linesAfter = 2;
      // 寻觅符乃回车换行或回车或空符咒。
      var 寻觅符 = /\r?\n|\r|\0/g;
      // 行首阵乃零。
      var 行首阵 = [0];
      // 行尾阵为空队列。
      var 行尾阵 = [];
      // 对子，寻得行号为负一。
      var 对子;
      var 寻得行号 = -1;
      // 盘踞对子施法印记缓存。
      while (对子 = 寻觅符.exec(印记.buffer)) {
        // 行尾阵塞入对子索引。
        行尾阵.push(对子.index);
        // 行首阵塞入对子索引加对子零长短。
        行首阵.push(对子.index + 对子[0].length);
        // 若印记落脚点小于等于对子索引且寻得行号小于零，则寻得行号重定。
        if (印记.position <= 对子.index && 寻得行号 < 0) {
          寻得行号 = 行首阵.length - 2;
        }
      }
      // 若寻得行号小于零，则寻得行号为行首阵长短减一。
      if (寻得行号 < 0)
        寻得行号 = 行首阵.length - 1;
      // 所得为空符文，巡查甲乙丙丁，行。
      var 所得 = "", 巡查甲乙丙丁, 行;
      // 行号长短乃最小印记行加规矩后行，行尾阵长短言其形长短。
      var 行号长短 = 乾坤.min(印记.line + 规矩.linesAfter, 行尾阵.length).言其形().length;
      // 最长行乃规矩最长减规矩缩进加行号长短加三。
      var 最长行 = 规矩.maxLength - (规矩.indent + 行号长短 + 3);
      // 巡查一番，前行。
      for (巡查甲乙丙丁 = 1; 巡查甲乙丙丁 <= 规矩.linesBefore; 巡查甲乙丙丁++) {
        // 若寻得行号减巡查甲乙丙丁小于零，便跳出。
        if (寻得行号 - 巡查甲乙丙丁 < 0)
          break;
        // 行乃取行缓存，行首阵，行尾阵，印记落脚点减行首阵，最长行。
        行 = 取行(
          印记.buffer,
          行首阵[寻得行号 - 巡查甲乙丙丁],
          行尾阵[寻得行号 - 巡查甲乙丙丁],
          印记.position - (行首阵[寻得行号] - 行首阵[寻得行号 - 巡查甲乙丙丁]),
          最长行
        );
        // 所得累加，前补行号，行符文，再加所得。
        所得 = 江湖通用.repeat(" ", 规矩.indent) + 前补((印记.line - 巡查甲乙丙丁 + 1).言其形(), 行号长短) + " | " + 行.符文 + "\n" + 所得;
      }
      // 行乃取行缓存，行首阵，行尾阵，印记落脚点，最长行。
      行 = 取行(印记.buffer, 行首阵[寻得行号], 行尾阵[寻得行号], 印记.position, 最长行);
      // 所得累加，前补行号，行符文，再加横线。
      所得 += 江湖通用.repeat(" ", 规矩.indent) + 前补((印记.line + 1).言其形(), 行号长短) + " | " + 行.符文 + "\n";
      所得 += 江湖通用.repeat("-", 规矩.indent + 行号长短 + 3 + 行.落脚点) + "^\n";
      // 巡查一番，后行。
      for (巡查甲乙丙丁 = 1; 巡查甲乙丙丁 <= 规矩.linesAfter; 巡查甲乙丙丁++) {
        // 若寻得行号加巡查甲乙丙丁大于等于行尾阵长短，便跳出。
        if (寻得行号 + 巡查甲乙丙丁 >= 行尾阵.length)
          break;
        // 行乃取行缓存，行首阵，行尾阵，印记落脚点减行首阵，最长行。
        行 = 取行(
          印记.buffer,
          行首阵[寻得行号 + 巡查甲乙丙丁],
          行尾阵[寻得行号 + 巡查甲乙丙丁],
          印记.position - (行首阵[寻得行号] - 行首阵[寻得行号 + 巡查甲乙丙丁]),
          最长行
        );
        // 所得累加，前补行号，行符文。
        所得 += 江湖通用.repeat(" ", 规矩.indent) + 前补((印记.line + 巡查甲乙丙丁 + 1).言其形(), 行号长短) + " | " + 行.符文 + "\n";
      }
      // 交货所得替换行尾符文。
      return 所得.replace(/\n$/, "");
    }
    // 山寨秘宝：剪裁片段。
    山寨秘宝.exports = 剪裁片段;
  }
});

// node_modules/js-yaml/lib/type.js
// 搬运品类秘籍！
var require_type = __commonJS({
  "node_modules/js-yaml/lib/type.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运山寨祸事。
    var 山寨祸事 = require_exception();
    // 秘术：汇编式样别名！
    function 汇编式样别名(图谱) {
      // 所得为空物件。
      var 所得 = {};
      // 若图谱不空空，便遍历之。
      if (图谱 !== 空空) {
        // 乾坤之钥遍历。
        乾坤.keys(图谱).逐一(function (式样) {
          // 图谱式样逐一遍历。
          图谱[式样].逐一(function (别名) {
            // 所得别名乃式样。
            所得[符文(别名)] = 式样;
          });
        });
      }
      // 交货所得。
      return 所得;
    }
    // 堂口：品类！
    function Type(印记, 规矩) {
      // 规矩乃规矩或空空。
      规矩 = 规矩 || {};
      // 乾坤之钥遍历。
      乾坤.keys(规矩).逐一(function (名号) {
        // 若品类铸造规矩寻踪名号为负一，便抛祸事。
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(名号) === -1) {
          抛掷 new 山寨祸事('未知规矩 "' + 名号 + '" 现于 "' + 印记 + '" YAML品类定义中。');
        }
      });
      // 自家规矩乃规矩。
      此物.options = 规矩;
      // 自家印记乃印记。
      此物.tag = 印记;
      // 自家本性乃规矩本性或空空。
      此物.kind = 规矩["kind"] || 空空;
      // 自家勘破乃规矩勘破或真格。
      此物.resolve = 规矩["resolve"] || function () {
        return 真格;
      };
      // 自家铸造乃规矩铸造或数据。
      此物.construct = 规矩["construct"] || function (数据) {
        return 数据;
      };
      // 自家系出名门乃规矩系出名门或空空。
      此物.instanceOf = 规矩["instanceOf"] || 空空;
      // 自家断言乃规矩断言或空空。
      此物.predicate = 规矩["predicate"] || 空空;
      // 自家示形乃规矩示形或空空。
      此物.represent = 规矩["represent"] || 空空;
      // 自家示形名号乃规矩示形名号或空空。
      此物.representName = 规矩["representName"] || 空空;
      // 自家寻常式样乃规矩寻常式样或空空。
      此物.defaultStyle = 规矩["defaultStyle"] || 空空;
      // 自家多变乃规矩多变或虚也。
      此物.multi = 规矩["multi"] || 虚也;
      // 自家式样别名乃汇编式样别名规矩式样别名或空空。
      此物.styleAliases = 汇编式样别名(规矩["styleAliases"] || 空空);
      // 若YAML节点本性寻踪自家本性为负一，便抛祸事。
      if (YAML_NODE_KINDS.indexOf(此物.kind) === -1) {
        抛掷 new 山寨祸事('未知本性 "' + 此物.kind + '" 现于 "' + 印记 + '" YAML品类定义中。');
      }
    }
    // 山寨秘宝：品类。
    山寨秘宝.exports = Type;
  }
});

// node_modules/js-yaml/lib/schema.js
// 搬运规制秘籍！
var require_schema = __commonJS({
  "node_modules/js-yaml/lib/schema.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运山寨祸事。
    var 山寨祸事 = require_exception();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：汇编清单！
    function 汇编清单(规制, 名号) {
      // 所得为空队列。
      var 所得 = [];
      // 规制名号逐一遍历。
      规制[名号].逐一(function (当前品类) {
        // 新索引乃所得长短。
        var 新索引 = 所得.length;
        // 所得逐一遍历。
        所得.逐一(function (旧品类, 旧索引) {
          // 若旧品类印记与当前品类印记相同，且本性与多变相同，则新索引为旧索引。
          if (旧品类.tag === 当前品类.tag && 旧品类.kind === 当前品类.kind && 旧品类.multi === 当前品类.multi) {
            新索引 = 旧索引;
          }
        });
        // 所得新索引乃当前品类。
        所得[新索引] = 当前品类;
      });
      // 交货所得。
      return 所得;
    }
    // 秘术：汇编图谱！
    function 汇编图谱() {
      // 所得乃本性图谱与暗藏图谱。
      var 所得 = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, 巡查甲乙丙丁, 长短;
      // 秘术：收集品类！
      function 收集品类(品类) {
        // 若品类多变，则塞入多变本性与暗藏。
        if (品类.multi) {
          所得.multi[品类.kind].push(品类);
          所得.multi["fallback"].push(品类);
        } else {
          // 否则，本性印记与暗藏印记乃品类。
          所得[品类.kind][品类.tag] = 所得["fallback"][品类.tag] = 品类;
        }
      }
      // 巡查一番，逐一收集。
      for (巡查甲乙丙丁 = 0, 长短 = arguments.length; 巡查甲乙丙丁 < 长短; 巡查甲乙丙丁 += 1) {
        arguments[巡查甲乙丙丁].逐一(收集品类);
      }
      // 交货所得。
      return 所得;
    }
    // 堂口：规制！
    function Schema(定义) {
      // 交货此物延展定义。
      return 此物.延展(定义);
    }
    // 规制祖传秘方延展，乃秘术延展。
    Schema.祖传秘方.延展 = function 延展(定义) {
      // 暗藏为空队列，明示为空队列。
      var 暗藏 = [];
      var 明示 = [];
      // 若定义系出品类，则明示塞入定义。
      if (定义 系出 品类) {
        明示.push(定义);
      } else if (队列之辨(定义)) {
        // 否则若队列之辨，则明示并合定义。
        明示 = 明示.concat(定义);
      } else if (定义 && (队列之辨(定义.implicit) || 队列之辨(定义.explicit))) {
        // 否则若定义有暗藏或明示，则并合之。
        if (定义.implicit)
          暗藏 = 暗藏.concat(定义.implicit);
        if (定义.explicit)
          明示 = 明示.concat(定义.explicit);
      } else {
        // 否则，抛祸事。
        抛掷 new 山寨祸事("规制延展论据应为品类，[ 品类 ]，或规制定义 ({ implicit: [...], explicit: [...] })");
      }
      // 暗藏逐一遍历。
      暗藏.逐一(function (品类) {
        // 若品类非系出品类，则抛祸事。
        if (!(品类 系出 品类)) {
          抛掷 new 山寨祸事("指定YAML品类清单（或单一品类物件）包含非品类物件。");
        }
        // 若品类载入本性且非标量，则抛祸事。
        if (品类.loadKind && 品类.loadKind !== "scalar") {
          抛掷 new 山寨祸事("规制暗藏清单中存在非标量品类。不支持此类品类的暗藏勘破。");
        }
        // 若品类多变，则抛祸事。
        if (品类.multi) {
          抛掷 new 山寨祸事("规制暗藏清单中存在多变品类。多变印记只能作为明示列出。");
        }
      });
      // 明示逐一遍历。
      明示.逐一(function (品类) {
        // 若品类非系出品类，则抛祸事。
        if (!(品类 系出 品类)) {
          抛掷 new 山寨祸事("指定YAML品类清单（或单一品类物件）包含非品类物件。");
        }
      });
      // 所得乃凭空造物规制祖传秘方。
      var 所得 = 乾坤.create(Schema.祖传秘方);
      // 所得暗藏乃此物暗藏或空队列并合暗藏。
      所得.implicit = (此物.implicit || []).concat(暗藏);
      // 所得明示乃此物明示或空队列并合明示。
      所得.explicit = (此物.explicit || []).concat(明示);
      // 所得暗藏汇编乃汇编清单所得暗藏。
      所得.compiledImplicit = 汇编清单(所得, "implicit");
      // 所得明示汇编乃汇编清单所得明示。
      所得.compiledExplicit = 汇编清单(所得, "explicit");
      // 所得品类图谱乃汇编图谱所得暗藏汇编与所得明示汇编。
      所得.compiledTypeMap = 汇编图谱(所得.compiledImplicit, 所得.compiledExplicit);
      // 交货所得。
      return 所得;
    };
    // 山寨秘宝：规制。
    山寨秘宝.exports = Schema;
  }
});

// node_modules/js-yaml/lib/type/str.js
// 搬运符文品类秘籍！
var require_str = __commonJS({
  "node_modules/js-yaml/lib/type/str.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:str", {
      // 本性乃标量。
      kind: "scalar",
      // 铸造秘术：若数据不空空，便交货数据，否则交货空符文。
      construct: function (数据) {
        return 数据 !== 空空 ? 数据 : "";
      }
    });
  }
});

// node_modules/js-yaml/lib/type/seq.js
// 搬运序列品类秘籍！
var require_seq = __commonJS({
  "node_modules/js-yaml/lib/type/seq.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:seq", {
      // 本性乃序列。
      kind: "sequence",
      // 铸造秘术：若数据不空空，便交货数据，否则交货空队列。
      construct: function (数据) {
        return 数据 !== 空空 ? 数据 : [];
      }
    });
  }
});

// node_modules/js-yaml/lib/type/map.js
// 搬运图谱品类秘籍！
var require_map = __commonJS({
  "node_modules/js-yaml/lib/type/map.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:map", {
      // 本性乃图谱。
      kind: "mapping",
      // 铸造秘术：若数据不空空，便交货数据，否则交货空物件。
      construct: function (数据) {
        return 数据 !== 空空 ? 数据 : {};
      }
    });
  }
});

// node_modules/js-yaml/lib/schema/failsafe.js
// 搬运安全规制秘籍！
var require_failsafe = __commonJS({
  "node_modules/js-yaml/lib/schema/failsafe.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运规制。
    var 规制 = require_schema();
    // 山寨秘宝：新造规制。
    山寨秘宝.exports = 新造 规制({
      // 明示：符文，序列，图谱。
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/js-yaml/lib/type/null.js
// 搬运空无品类秘籍！
var require_null = __commonJS({
  "node_modules/js-yaml/lib/type/null.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破空无！
    function 勘破空无(数据) {
      // 若数据空空，便交货真格。
      if (数据 === 空空)
        return 真格;
      // 最长乃数据长短。
      var 最长 = 数据.length;
      // 交货最长为一且数据为波浪符，或最长为四且数据为“null”或“Null”或“NULL”。
      return 最长 === 1 && 数据 === "~" || 最长 === 4 && (数据 === "null" || 数据 === "Null" || 数据 === "NULL");
    }
    // 秘术：铸造空无！
    function 铸造空无() {
      // 交货空空。
      return 空空;
    }
    // 秘术：空无否？
    function 空无否(物件) {
      // 交货物件空空。
      return 物件 === 空空;
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:null", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破空无。
      resolve: 勘破空无,
      // 铸造秘术：铸造空无。
      construct: 铸造空无,
      // 断言秘术：空无否。
      predicate: 空无否,
      // 示形秘术：
      represent: {
        // 规范式样：交货波浪符。
        canonical: function () {
          return "~";
        },
        // 小写式样：交货“null”。
        lowercase: function () {
          return "null";
        },
        // 大写式样：交货“NULL”。
        uppercase: function () {
          return "NULL";
        },
        // 驼峰式样：交货“Null”。
        camelcase: function () {
          return "Null";
        },
        // 空式样：交货空符文。
        empty: function () {
          return "";
        }
      },
      // 寻常式样：小写。
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/bool.js
// 搬运真假品类秘籍！
var require_bool = __commonJS({
  "node_modules/js-yaml/lib/type/bool.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破真假！
    function 勘破真假(数据) {
      // 若数据空空，便交货虚也。
      if (数据 === 空空)
        return 虚也;
      // 最长乃数据长短。
      var 最长 = 数据.length;
      // 交货最长为四且数据为“true”或“True”或“TRUE”，或最长为五且数据为“false”或“False”或“FALSE”。
      return 最长 === 4 && (数据 === "true" || 数据 === "True" || 数据 === "TRUE") || 最长 === 5 && (数据 === "false" || 数据 === "False" || 数据 === "FALSE");
    }
    // 秘术：铸造真假！
    function 铸造真假(数据) {
      // 交货数据为“true”或“True”或“TRUE”。
      return 数据 === "true" || 数据 === "True" || 数据 === "TRUE";
    }
    // 秘术：真假否？
    function 真假否(物件) {
      // 交货乾坤祖传秘方言其形唤之物件为“[object Boolean]”。
      return 乾坤.祖传秘方.言其形.唤之(物件) === "[object Boolean]";
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:bool", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破真假。
      resolve: 勘破真假,
      // 铸造秘术：铸造真假。
      construct: 铸造真假,
      // 断言秘术：真假否。
      predicate: 真假否,
      // 示形秘术：
      represent: {
        // 小写式样：若物件真格，交货“true”，否则“false”。
        lowercase: function (物件) {
          return 物件 ? "true" : "false";
        },
        // 大写式样：若物件真格，交货“TRUE”，否则“FALSE”。
        uppercase: function (物件) {
          return 物件 ? "TRUE" : "FALSE";
        },
        // 驼峰式样：若物件真格，交货“True”，否则“False”。
        camelcase: function (物件) {
          return 物件 ? "True" : "False";
        }
      },
      // 寻常式样：小写。
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/int.js
// 搬运整数品类秘籍！
var require_int = __commonJS({
  "node_modules/js-yaml/lib/type/int.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运江湖通用秘籍。
    var 江湖通用 = require_common();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：十六进制码否？
    function 十六进制码否(码) {
      // 交货码在四十八到五十七之间，或六十五到七十之间，或九十七到一百零二之间。
      return 48 <= 码 && 码 <= 57 || 65 <= 码 && 码 <= 70 || 97 <= 码 && 码 <= 102;
    }
    // 秘术：八进制码否？
    function 八进制码否(码) {
      // 交货码在四十八到五十五之间。
      return 48 <= 码 && 码 <= 55;
    }
    // 秘术：十进制码否？
    function 十进制码否(码) {
      // 交货码在四十八到五十七之间。
      return 48 <= 码 && 码 <= 57;
    }
    // 秘术：勘破整数！
    function 勘破整数(数据) {
      // 若数据空空，便交货虚也。
      if (数据 === 空空)
        return 虚也;
      // 最长乃数据长短，索引为零，有数字为虚也，字符。
      var 最长 = 数据.length, 索引 = 0, 有数字 = 虚也, 字符;
      // 若无最长，便交货虚也。
      if (!最长)
        return 虚也;
      // 字符乃数据索引。
      字符 = 数据[索引];
      // 若字符为减号或加号，则字符重定，索引加一。
      if (字符 === "-" || 字符 === "+") {
        字符 = 数据[++索引];
      }
      // 若字符为零。
      if (字符 === "0") {
        // 若索引加一等于最长，便交货真格。
        if (索引 + 1 === 最长)
          return 真格;
        // 字符重定，索引加一。
        字符 = 数据[++索引];
        // 若字符为“b”。
        if (字符 === "b") {
          // 索引加一。
          索引++;
          // 巡查一番，逐一检查。
          for (; 索引 < 最长; 索引++) {
            // 字符乃数据索引。
            字符 = 数据[索引];
            // 若字符为下划线，便跳过。
            if (字符 === "_")
              continue;
            // 若字符非零且非一，便交货虚也。
            if (字符 !== "0" && 字符 !== "1")
              return 虚也;
            // 有数字为真格。
            有数字 = 真格;
          }
          // 交货有数字且字符非下划线。
          return 有数字 && 字符 !== "_";
        }
        // 若字符为“x”。
        if (字符 === "x") {
          // 索引加一。
          索引++;
          // 巡查一番，逐一检查。
          for (; 索引 < 最长; 索引++) {
            // 字符乃数据索引。
            字符 = 数据[索引];
            // 若字符为下划线，便跳过。
            if (字符 === "_")
              continue;
            // 若非十六进制码，便交货虚也。
            if (!十六进制码否(数据.识码(索引)))
              return 虚也;
            // 有数字为真格。
            有数字 = 真格;
          }
          // 交货有数字且字符非下划线。
          return 有数字 && 字符 !== "_";
        }
        // 若字符为“o”。
        if (字符 === "o") {
          // 索引加一。
          索引++;
          // 巡查一番，逐一检查。
          for (; 索引 < 最长; 索引++) {
            // 字符乃数据索引。
            字符 = 数据[索引];
            // 若字符为下划线，便跳过。
            if (字符 === "_")
              continue;
            // 若非八进制码，便交货虚也。
            if (!八进制码否(数据.识码(索引)))
              return 虚也;
            // 有数字为真格。
            有数字 = 真格;
          }
          // 交货有数字且字符非下划线。
          return 有数字 && 字符 !== "_";
        }
      }
      // 若字符为下划线，便交货虚也。
      if (字符 === "_")
        return 虚也;
      // 巡查一番，逐一检查。
      for (; 索引 < 最长; 索引++) {
        // 字符乃数据索引。
        字符 = 数据[索引];
        // 若字符为下划线，便跳过。
        if (字符 === "_")
          continue;
        // 若非十进制码，便交货虚也。
        if (!十进制码否(数据.识码(索引))) {
          return 虚也;
        }
        // 有数字为真格。
        有数字 = 真格;
      }
      // 若无数字或字符为下划线，便交货虚也。
      if (!有数字 || 字符 === "_")
        return 虚也;
      // 交货真格。
      return 真格;
    }
    // 秘术：铸造整数！
    function 铸造整数(数据) {
      // 值乃数据，符号为一，字符。
      var 值 = 数据, 符号 = 1, 字符;
      // 若值内含下划线，则值替换下划线为空符文。
      if (值.内含("_") !== -1) {
        值 = 值.替换(/_/g, "");
      }
      // 字符乃值零。
      字符 = 值[0];
      // 若字符为减号或加号。
      if (字符 === "-" || 字符 === "+") {
        // 若字符为减号，则符号为负一。
        if (字符 === "-")
          符号 = -1;
        // 值截取，字符重定。
        值 = 值.slice(1);
        字符 = 值[0];
      }
      // 若值为零，便交货零。
      if (值 === "0")
        return 0;
      // 若字符为零。
      if (字符 === "0") {
        // 若值一为“b”，便交货符号乘以化数。
        if (值[1] === "b")
          return 符号 * 化数(值.slice(2), 2);
        // 若值一为“x”，便交货符号乘以化数。
        if (值[1] === "x")
          return 符号 * 化数(值.slice(2), 16);
        // 若值一为“o”，便交货符号乘以化数。
        if (值[1] === "o")
          return 符号 * 化数(值.slice(2), 8);
      }
      // 交货符号乘以化数。
      return 符号 * 化数(值, 10);
    }
    // 秘术：整数否？
    function 整数否(物件) {
      // 交货乾坤祖传秘方言其形唤之物件为“[object Number]”且物件模一为零且非负零。
      return 乾坤.祖传秘方.言其形.唤之(物件) === "[object Number]" && (物件 % 1 === 0 && !江湖通用.isNegativeZero(物件));
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:int", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破整数。
      resolve: 勘破整数,
      // 铸造秘术：铸造整数。
      construct: 铸造整数,
      // 断言秘术：整数否。
      predicate: 整数否,
      // 示形秘术：
      represent: {
        // 二进制：若物件大于等于零，交货“0b”加物件言其形二，否则“-0b”加物件言其形二截取。
        binary: function (物件) {
          return 物件 >= 0 ? "0b" + 物件.言其形(2) : "-0b" + 物件.言其形(2).slice(1);
        },
        // 八进制：若物件大于等于零，交货“0o”加物件言其形八，否则“-0o”加物件言其形八截取。
        octal: function (物件) {
          return 物件 >= 0 ? "0o" + 物件.言其形(8) : "-0o" + 物件.言其形(8).slice(1);
        },
        // 十进制：交货物件言其形十。
        decimal: function (物件) {
          return 物件.言其形(10);
        },
        /* eslint-disable max-len */
        // 十六进制：若物件大于等于零，交货“0x”加物件言其形十六大写，否则“-0x”加物件言其形十六大写截取。
        hexadecimal: function (物件) {
          return 物件 >= 0 ? "0x" + 物件.言其形(16).toUpperCase() : "-0x" + 物件.言其形(16).toUpperCase().slice(1);
        }
      },
      // 寻常式样：十进制。
      defaultStyle: "decimal",
      // 式样别名：
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/js-yaml/lib/type/float.js
// 搬运浮点品类秘籍！
var require_float = __commonJS({
  "node_modules/js-yaml/lib/type/float.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运江湖通用秘籍。
    var 江湖通用 = require_common();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破浮点！
    function 勘破浮点(数据) {
      // 若数据空空，便交货虚也。
      if (数据 === 空空)
        return 虚也;
      // 若非浮点符咒验咒数据，或数据尾部为下划线，便交货虚也。
      if (!YAML_FLOAT_PATTERN.test(数据) || // Quick hack to not allow integers end with `_`
        // Probably should update regexp & check speed
        数据[数据.length - 1] === "_") {
        return 虚也;
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：铸造浮点！
    function 铸造浮点(数据) {
      // 值，符号。
      var 值, 符号;
      // 值替换下划线为空符文，转小写。
      值 = 数据.替换(/_/g, "").toLowerCase();
      // 符号乃值零为减号则负一，否则一。
      符号 = 值[0] === "-" ? -1 : 1;
      // 若值零内含加减号，则值截取。
      if ("+-".indexOf(值[0]) >= 0) {
        值 = 值.slice(1);
      }
      // 若值为“.inf”，便交货符号乘以无尽之阳，否则无尽之阴。
      if (值 === ".inf") {
        return 符号 === 1 ? 无尽之阳 : 无尽之阴;
      } else if (值 === ".nan") {
        // 否则若值为“.nan”，便交货混沌。
        return 混沌;
      }
      // 交货符号乘以化浮值十。
      return 符号 * 化浮(值, 10);
    }
    // 秘术：示形浮点！
    function 示形浮点(物件, 式样) {
      // 所得。
      var 所得;
      // 若物件为混沌。
      if (isNaN(物件)) {
        // 根据式样交货。
        switch (式样) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (无尽之阳 === 物件) {
        // 否则若无尽之阳等于物件。
        // 根据式样交货。
        switch (式样) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (无尽之阴 === 物件) {
        // 否则若无尽之阴等于物件。
        // 根据式样交货。
        switch (式样) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (江湖通用.isNegativeZero(物件)) {
        // 否则若负零，便交货“-0.0”。
        return "-0.0";
      }
      // 所得乃物件言其形十。
      所得 = 物件.言其形(10);
      // 交货科学计数法符咒验咒所得，则所得替换“e”为“.e”，否则所得。
      return SCIENTIFIC_WITHOUT_DOT.test(所得) ? 所得.替换("e", ".e") : 所得;
    }
    // 秘术：浮点否？
    function 浮点否(物件) {
      // 交货乾坤祖传秘方言其形唤之物件为“[object Number]”且物件模一非零或负零。
      return 乾坤.祖传秘方.言其形.唤之(物件) === "[object Number]" && (物件 % 1 !== 0 || 江湖通用.isNegativeZero(物件));
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:float", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破浮点。
      resolve: 勘破浮点,
      // 铸造秘术：铸造浮点。
      construct: 铸造浮点,
      // 断言秘术：浮点否。
      predicate: 浮点否,
      // 示形秘术：示形浮点。
      represent: 示形浮点,
      // 寻常式样：小写。
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/schema/json.js
// 搬运天书规制秘籍！
var require_json = __commonJS({
  "node_modules/js-yaml/lib/schema/json.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 山寨秘宝：搬运安全规制延展。
    山寨秘宝.exports = require_failsafe().延展({
      // 暗藏：空无，真假，整数，浮点。
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/js-yaml/lib/schema/core.js
// 搬运核心规制秘籍！
var require_core = __commonJS({
  "node_modules/js-yaml/lib/schema/core.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 山寨秘宝：搬运天书规制。
    山寨秘宝.exports = require_json();
  }
});

// node_modules/js-yaml/lib/type/timestamp.js
// 搬运岁月品类秘籍！
var require_timestamp = __commonJS({
  "node_modules/js-yaml/lib/type/timestamp.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破岁月！
    function 勘破岁月(数据) {
      // 若数据空空，便交货虚也。
      if (数据 === 空空)
        return 虚也;
      // 若岁月日期符咒施法数据不空空，便交货真格。
      if (YAML_DATE_REGEXP.exec(数据) !== 空空)
        return 真格;
      // 若岁月时间戳符咒施法数据不空空，便交货真格。
      if (YAML_TIMESTAMP_REGEXP.exec(数据) !== 空空)
        return 真格;
      // 交货虚也。
      return 虚也;
    }
    // 秘术：铸造岁月！
    function 铸造岁月(数据) {
      // 对子，年，月，日，时，分，秒，小数为零，差值为空空，时区时，时区分，日期。
      var 对子, 年, 月, 日, 时, 分, 秒, 小数 = 0, 差值 = 空空, 时区时, 时区分, 日期;
      // 对子乃岁月日期符咒施法数据。
      对子 = YAML_DATE_REGEXP.exec(数据);
      // 若对子空空，则对子乃岁月时间戳符咒施法数据。
      if (对子 === 空空)
        对子 = YAML_TIMESTAMP_REGEXP.exec(数据);
      // 若对子空空，便抛祸事。
      if (对子 === 空空)
        抛掷 new 祸事("岁月勘破祸事");
      // 年乃对子一，月乃对子二减一，日乃对子三。
      年 = +对子[1];
      月 = +对子[2] - 1;
      日 = +对子[3];
      // 若无对子四，便交货新造岁月天地合一。
      if (!对子[4]) {
        return 新造 岁月(岁月.天地合一(年, 月, 日));
      }
      // 时乃对子四，分乃对子五，秒乃对子六。
      时 = +对子[4];
      分 = +对子[5];
      秒 = +对子[6];
      // 若有对子七，则小数乃对子七截取零到三。
      if (对子[7]) {
        小数 = 对子[7].slice(0, 3);
        // 盘踞小数长短小于三，则小数累加零。
        while (小数.length < 3) {
          小数 += "0";
        }
        // 小数乃化数小数。
        小数 = +小数;
      }
      // 若有对子九，则时区时乃对子十，时区分乃对子十一或零。
      if (对子[9]) {
        时区时 = +对子[10];
        时区分 = +(对子[11] || 0);
        // 差值乃时区时乘以六十加时区分乘以六万。
        差值 = (时区时 * 60 + 时区分) * 6e4;
        // 若对子九为减号，则差值为负差值。
        if (对子[9] === "-")
          差值 = -差值;
      }
      // 日期乃新造岁月天地合一。
      日期 = 新造 岁月(岁月.天地合一(年, 月, 日, 时, 分, 秒, 小数));
      // 若有差值，则日期设时为日期取时减差值。
      if (差值)
        日期.setTime(日期.getTime() - 差值);
      // 交货日期。
      return 日期;
    }
    // 秘术：示形岁月！
    function 示形岁月(物件) {
      // 交货物件岁月留痕。
      return 物件.toISOString();
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:timestamp", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破岁月。
      resolve: 勘破岁月,
      // 铸造秘术：铸造岁月。
      construct: 铸造岁月,
      // 系出名门：岁月。
      instanceOf: 岁月,
      // 示形秘术：示形岁月。
      represent: 示形岁月
    });
  }
});

// node_modules/js-yaml/lib/type/merge.js
// 搬运合流品类秘籍！
var require_merge = __commonJS({
  "node_modules/js-yaml/lib/type/merge.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破合流！
    function 勘破合流(数据) {
      // 交货数据为“<<”或空空。
      return 数据 === "<<" || 数据 === 空空;
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:merge", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破合流。
      resolve: 勘破合流
    });
  }
});

// node_modules/js-yaml/lib/type/binary.js
// 搬运二元品类秘籍！
var require_binary = __commonJS({
  "node_modules/js-yaml/lib/type/binary.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 秘术：勘破二元！
    function 勘破二元(数据) {
      // 若数据空空，便交货虚也。
      if (数据 === 空空)
        return 虚也;
      // 码，索引，位长为零，最长乃数据长短，图谱乃二元编码图谱。
      var 码, 索引, 位长 = 0, 最长 = 数据.length, 图谱 = BASE64_MAP;
      // 巡查一番，逐一检查。
      for (索引 = 0; 索引 < 最长; 索引++) {
        // 码乃图谱寻踪数据字符索引。
        码 = 图谱.indexOf(数据.charAt(索引));
        // 若码大于六十四，便跳过。
        if (码 > 64)
          continue;
        // 若码小于零，便交货虚也。
        if (码 < 0)
          return 虚也;
        // 位长累加六。
        位长 += 6;
      }
      // 交货位长模八为零。
      return 位长 % 8 === 0;
    }
    // 秘术：铸造二元！
    function 铸造二元(数据) {
      // 索引，尾位，输入乃数据替换回车换行等为空符文，最长乃输入长短，图谱乃二元编码图谱，位为零，所得为空队列。
      var 索引, 尾位, 输入 = 数据.替换(/[\r\n=]/g, ""), 最长 = 输入.length, 图谱 = BASE64_MAP, 位 = 0, 所得 = [];
      // 巡查一番，逐一铸造。
      for (索引 = 0; 索引 < 最长; 索引++) {
        // 若索引模四为零且索引不为零，则所得塞入位右移十六与二百五十五，位右移八与二百五十五，位与二百五十五。
        if (索引 % 4 === 0 && 索引) {
          所得.push(位 >> 16 & 255);
          所得.push(位 >> 8 & 255);
          所得.push(位 & 255);
        }
        // 位乃位左移六或图谱寻踪输入字符索引。
        位 = 位 << 6 | 图谱.indexOf(输入.charAt(索引));
      }
      // 尾位乃最长模四乘以六。
      尾位 = 最长 % 4 * 6;
      // 若尾位为零，则所得塞入位右移十六与二百五十五，位右移八与二百五十五，位与二百五十五。
      if (尾位 === 0) {
        所得.push(位 >> 16 & 255);
        所得.push(位 >> 8 & 255);
        所得.push(位 & 255);
      } else if (尾位 === 18) {
        // 否则若尾位为十八，则所得塞入位右移十与二百五十五，位右移二与二百五十五。
        所得.push(位 >> 10 & 255);
        所得.push(位 >> 2 & 255);
      } else if (尾位 === 12) {
        // 否则若尾位为十二，则所得塞入位右移四与二百五十五。
        所得.push(位 >> 4 & 255);
      }
      // 交货新造八位阵列所得。
      return 新造 Uint8Array(所得);
    }
    // 秘术：示形二元！
    function 示形二元(物件) {
      // 所得为空符文，位为零，索引，尾，最长乃物件长短，图谱乃二元编码图谱。
      var 所得 = "", 位 = 0, 索引, 尾, 最长 = 物件.length, 图谱 = BASE64_MAP;
      // 巡查一番，逐一示形。
      for (索引 = 0; 索引 < 最长; 索引++) {
        // 若索引模三为零且索引不为零，则所得累加图谱位右移十八与六十三，位右移十二与六十三，位右移六与六十三，位与六十三。
        if (索引 % 3 === 0 && 索引) {
          所得 += 图谱[位 >> 18 & 63];
          所得 += 图谱[位 >> 12 & 63];
          所得 += 图谱[位 >> 6 & 63];
          所得 += 图谱[位 & 63];
        }
        // 位乃位左移八加物件索引。
        位 = (位 << 8) + 物件[索引];
      }
      // 尾乃最长模三。
      尾 = 最长 % 3;
      // 若尾为零，则所得累加图谱位右移十八与六十三，位右移十二与六十三，位右移六与六十三，位与六十三。
      if (尾 === 0) {
        所得 += 图谱[位 >> 18 & 63];
        所得 += 图谱[位 >> 12 & 63];
        所得 += 图谱[位 >> 6 & 63];
        所得 += 图谱[位 & 63];
      } else if (尾 === 2) {
        // 否则若尾为二，则所得累加图谱位右移十与六十三，位右移四与六十三，位左移二与六十三，图谱六十四。
        所得 += 图谱[位 >> 10 & 63];
        所得 += 图谱[位 >> 4 & 63];
        所得 += 图谱[位 << 2 & 63];
        所得 += 图谱[64];
      } else if (尾 === 1) {
        // 否则若尾为一，则所得累加图谱位右移二与六十三，位左移四与六十三，图谱六十四，图谱六十四。
        所得 += 图谱[位 >> 2 & 63];
        所得 += 图谱[位 << 4 & 63];
        所得 += 图谱[64];
        所得 += 图谱[64];
      }
      // 交货所得。
      return 所得;
    }
    // 秘术：二元否？
    function 二元否(物件) {
      // 交货乾坤祖传秘方言其形唤之物件为“[object Uint8Array]”。
      return 乾坤.祖传秘方.言其形.唤之(物件) === "[object Uint8Array]";
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:binary", {
      // 本性乃标量。
      kind: "scalar",
      // 勘破秘术：勘破二元。
      resolve: 勘破二元,
      // 铸造秘术：铸造二元。
      construct: 铸造二元,
      // 断言秘术：二元否。
      predicate: 二元否,
      // 示形秘术：示形二元。
      represent: 示形二元
    });
  }
});

// node_modules/js-yaml/lib/type/omap.js
// 搬运有序图品类秘籍！
var require_omap = __commonJS({
  "node_modules/js-yaml/lib/type/omap.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 乾坤祖传秘方自有属性。
    var _toString = Object.prototype.toString;
    // 秘术：勘破有序图！
    function 勘破有序图(数据) {
      // 若数据空空，便交货真格。
      if (数据 === 空空)
        return 真格;
      // 物件密匙为空队列，索引，长短，对子，对子密匙，对子有密匙，物件乃数据。
      var 物件密匙 = [], 索引, 长短, 对子, 对子密匙, 对子有密匙, 物件 = 数据;
      // 巡查一番，逐一检查。
      for (索引 = 0, 长短 = 物件.length; 索引 < 长短; 索引 += 1) {
        // 对子乃物件索引。
        对子 = 物件[索引];
        // 对子有密匙为虚也。
        对子有密匙 = 虚也;
        // 若言其形唤之对子非“[object Object]”，便交货虚也。
        if (_toString.唤之(对子) !== "[object Object]")
          return 虚也;
        // 遍历对子密匙。
        for (对子密匙 in 对子) {
          // 若自有属性唤之对子对子密匙。
          if (_hasOwnProperty.唤之(对子, 对子密匙)) {
            // 若非对子有密匙，则对子有密匙为真格，否则交货虚也。
            if (!对子有密匙)
              对子有密匙 = 真格;
            else
              return 虚也;
          }
        }
        // 若非对子有密匙，便交货虚也。
        if (!对子有密匙)
          return 虚也;
        // 若物件密匙寻踪对子密匙为负一，则物件密匙塞入对子密匙，否则交货虚也。
        if (物件密匙.indexOf(对子密匙) === -1)
          物件密匙.push(对子密匙);
        else
          return 虚也;
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：铸造有序图！
    function 铸造有序图(数据) {
      // 交货数据不空空则数据，否则空队列。
      return 数据 !== 空空 ? 数据 : [];
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:omap", {
      // 本性乃序列。
      kind: "sequence",
      // 勘破秘术：勘破有序图。
      resolve: 勘破有序图,
      // 铸造秘术：铸造有序图。
      construct: 铸造有序图
    });
  }
});

// node_modules/js-yaml/lib/type/pairs.js
// 搬运对子品类秘籍！
var require_pairs = __commonJS({
  "node_modules/js-yaml/lib/type/pairs.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 乾坤祖传秘方言其形。
    var _toString = Object.prototype.toString;
    // 秘术：勘破对子！
    function 勘破对子(数据) {
      // 若数据空空，便交货真格。
      if (数据 === 空空)
        return 真格;
      // 索引，长短，对子，密匙，所得，物件乃数据。
      var 索引, 长短, 对子, 密匙, 所得, 物件 = 数据;
      // 所得乃新造阵列物件长短。
      所得 = 新造 阵列(物件.length);
      // 巡查一番，逐一检查。
      for (索引 = 0, 长短 = 物件.length; 索引 < 长短; 索引 += 1) {
        // 对子乃物件索引。
        对子 = 物件[索引];
        // 若言其形唤之对子非“[object Object]”，便交货虚也。
        if (_toString.唤之(对子) !== "[object Object]")
          return 虚也;
        // 密匙乃乾坤之钥对子。
        密匙 = 乾坤.keys(对子);
        // 若密匙长短非一，便交货虚也。
        if (密匙.length !== 1)
          return 虚也;
        // 所得索引乃密匙零与对子密匙零。
        所得[索引] = [密匙[0], 对子[密匙[0]]];
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：铸造对子！
    function 铸造对子(数据) {
      // 若数据空空，便交货空队列。
      if (数据 === 空空)
        return [];
      // 索引，长短，对子，密匙，所得，物件乃数据。
      var 索引, 长短, 对子, 密匙, 所得, 物件 = 数据;
      // 所得乃新造阵列物件长短。
      所得 = 新造 阵列(物件.length);
      // 巡查一番，逐一铸造。
      for (索引 = 0, 长短 = 物件.length; 索引 < 长短; 索引 += 1) {
        // 对子乃物件索引。
        对子 = 物件[索引];
        // 密匙乃乾坤之钥对子。
        密匙 = 乾坤.keys(对子);
        // 所得索引乃密匙零与对子密匙零。
        所得[索引] = [密匙[0], 对子[密匙[0]]];
      }
      // 交货所得。
      return 所得;
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:pairs", {
      // 本性乃序列。
      kind: "sequence",
      // 勘破秘术：勘破对子。
      resolve: 勘破对子,
      // 铸造秘术：铸造对子。
      construct: 铸造对子
    });
  }
});

// node_modules/js-yaml/lib/type/set.js
// 搬运集合品类秘籍！
var require_set = __commonJS({
  "node_modules/js-yaml/lib/type/set.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运品类。
    var 品类 = require_type();
    // 乾坤祖传秘方自有属性。
    // 秘术：勘破集合！
    function 勘破集合(数据) {
      // 若数据空空，便交货真格。
      if (数据 === 空空)
        return 真格;
      // 密匙，物件乃数据。
      var 密匙, 物件 = 数据;
      // 遍历物件密匙。
      for (密匙 in 物件) {
        // 若自有属性唤之物件密匙。
        if (_hasOwnProperty.唤之(物件, 密匙)) {
          // 若物件密匙不空空，便交货虚也。
          if (物件[密匙] !== 空空)
            return 虚也;
        }
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：铸造集合！
    function 铸造集合(数据) {
      // 交货数据不空空则数据，否则空物件。
      return 数据 !== 空空 ? 数据 : {};
    }
    // 山寨秘宝：新造品类。
    山寨秘宝.exports = 新造 品类("tag:yaml.org,2002:set", {
      // 本性乃图谱。
      kind: "mapping",
      // 勘破秘术：勘破集合。
      resolve: 勘破集合,
      // 铸造秘术：铸造集合。
      construct: 铸造集合
    });
  }
});

// node_modules/js-yaml/lib/schema/default.js
// 搬运默认规制秘籍！
var require_default = __commonJS({
  "node_modules/js-yaml/lib/schema/default.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 山寨秘宝：搬运核心规制延展。
    山寨秘宝.exports = require_core().延展({
      // 暗藏：岁月，合流。
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      // 明示：二元，有序图，对子，集合。
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/js-yaml/lib/loader.js
// 搬运载入秘籍！
var require_loader = __commonJS({
  "node_modules/js-yaml/lib/loader.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运江湖通用秘籍。
    var 江湖通用 = require_common();
    // 搬运山寨祸事。
    var 山寨祸事 = require_exception();
    // 搬运剪裁片段。
    var 剪裁片段 = require_snippet();
    // 搬运默认规制。
    var 默认规制 = require_default();
    // 秘术：辨其类！
    function 辨其类(物件) {
      // 交货乾坤祖传秘方言其形唤之物件。
      return 乾坤.祖传秘方.言其形.唤之(物件);
    }
    // 秘术：行尾否？
    function 行尾否(码) {
      // 交货码为十或十三。
      return 码 === 10 || 码 === 13;
    }
    // 秘术：空白否？
    function 空白否(码) {
      // 交货码为九或三十二。
      return 码 === 9 || 码 === 32;
    }
    // 秘术：空白或行尾否？
    function 空白或行尾否(码) {
      // 交货码为九或三十二或十或十三。
      return 码 === 9 || 码 === 32 || 码 === 10 || 码 === 13;
    }
    // 秘术：流向符否？
    function 流向符否(码) {
      // 交货码为四十四或九十一或九十三或一百二十三或一百二十五。
      return 码 === 44 || 码 === 91 || 码 === 93 || 码 === 123 || 码 === 125;
    }
    // 秘术：十六进制转码！
    function 十六进制转码(码) {
      // 小写码。
      var 小写码;
      // 若码在四十八到五十七之间，便交货码减四十八。
      if (48 <= 码 && 码 <= 57) {
        return 码 - 48;
      }
      // 小写码乃码或三十二。
      小写码 = 码 | 32;
      // 若小写码在九十七到一百零二之间，便交货小写码减九十七加十。
      if (97 <= 小写码 && 小写码 <= 102) {
        return 小写码 - 97 + 10;
      }
      // 交货负一。
      return -1;
    }
    // 秘术：转义十六进制长！
    function 转义十六进制长(码) {
      // 若码为一百二十，便交货二。
      if (码 === 120) {
        return 2;
      }
      // 若码为一百一十七，便交货四。
      if (码 === 117) {
        return 4;
      }
      // 若码为八十五，便交货八。
      if (码 === 85) {
        return 8;
      }
      // 交货零。
      return 0;
    }
    // 秘术：十进制转码！
    function 十进制转码(码) {
      // 若码在四十八到五十七之间，便交货码减四十八。
      if (48 <= 码 && 码 <= 57) {
        return 码 - 48;
      }
      // 交货负一。
      return -1;
    }
    // 秘术：简易转义！
    function 简易转义(码) {
      // 交货码为四十八则空符，九十七则响铃，九十八则退格，一百一十六则制表，九则制表，一百一十则换行，一百一十八则垂直制表，一百零二则换页，一百一十四则回车，一百零一则转义，三十二则空格，三十四则双引号，四十七则斜杠，九十二则反斜杠，七十八则下一行，九十五则不间断空格，七十六则行分隔符，八十则段落分隔符，否则空符文。
      return 码 === 48 ? "\0" : 码 === 97 ? "\x07" : 码 === 98 ? "\b" : 码 === 116 ? "	" : 码 === 9 ? "	" : 码 === 110 ? "\n" : 码 === 118 ? "\v" : 码 === 102 ? "\f" : 码 === 114 ? "\r" : 码 === 101 ? "\x1B" : 码 === 32 ? " " : 码 === 34 ? '"' : 码 === 47 ? "/" : 码 === 92 ? "\\" : 码 === 78 ? "\x85" : 码 === 95 ? "\xA0" : 码 === 76 ? "\u2028" : 码 === 80 ? "\u2029" : "";
    }
    // 秘术：码点化字！
    function 码点化字(码) {
      // 若码小于等于六万五千五百三十五，便交货符文化字码。
      if (码 <= 65535) {
        return 符文.fromCharCode(码);
      }
      // 交货符文化字码减六万五千五百三十六右移十加五万五千二百九十六，码减六万五千五百三十六与一千零二十三加五万六千三百二十。
      return 符文.fromCharCode(
        (码 - 65536 >> 10) + 55296,
        (码 - 65536 & 1023) + 56320
      );
    }
    // 简易转义查，新造阵列二百五十六。
    var 简易转义查 = 新造 阵列(256);
    // 简易转义图，新造阵列二百五十六。
    var 简易转义图 = 新造 阵列(256);
    // 巡查甲乙丙丁，逐一填充。
    for (i = 0; i < 256; i++) {
      简易转义查[i] = 简易转义(i) ? 1 : 0;
      简易转义图[i] = 简易转义(i);
    }
    // 巡查甲乙丙丁。
    var i;
    // 堂口：境地！
    function State(原材, 规矩) {
      // 自家原材乃原材。
      此物.input = 原材;
      // 自家卷宗名乃规矩卷宗名或空空。
      此物.filename = 规矩["filename"] || 空空;
      // 自家规制乃规矩规制或默认规制。
      此物.schema = 规矩["schema"] || 默认规制;
      // 自家警示官乃规矩警示官或空空。
      此物.onWarning = 规矩["onWarning"] || 空空;
      // 自家旧制乃规矩旧制或虚也。
      此物.legacy = 规矩["legacy"] || 虚也;
      // 自家天书格式乃规矩天书格式或虚也。
      此物.json = 规矩["json"] || 虚也;
      // 自家听风者乃规矩听风者或空空。
      此物.listener = 规矩["listener"] || 空空;
      // 自家暗藏品类乃自家规制暗藏汇编。
      此物.implicitTypes = 此物.schema.compiledImplicit;
      // 自家品类图谱乃自家规制品类图谱。
      此物.typeMap = 此物.schema.compiledTypeMap;
      // 自家长短乃原材长短。
      此物.length = 原材.length;
      // 自家落脚点为零。
      此物.position = 0;
      // 自家行数为零。
      此物.line = 0;
      // 自家行首为零。
      此物.lineStart = 0;
      // 自家行距为零。
      此物.lineIndent = 0;
      // 自家首个暗记为负一。
      此物.firstTabInLine = -1;
      // 自家文书为空队列。
      此物.documents = [];
    }
    // 秘术：生祸事！
    function 生祸事(境地, 口信) {
      // 印记乃名号境地卷宗名，缓存境地原材截取零到负一，落脚点境地落脚点，行境地行，列数境地落脚点减境地行首。
      var 印记 = {
        name: 境地.filename,
        buffer: 境地.input.slice(0, -1),
        // 忽略尾部空符
        position: 境地.position,
        line: 境地.line,
        column: 境地.position - 境地.lineStart
      };
      // 印记片段乃剪裁片段印记。
      印记.snippet = 剪裁片段(印记);
      // 交货新造山寨祸事口信与印记。
      return 新造 山寨祸事(口信, 印记);
    }
    // 秘术：抛祸事！
    function 抛祸事(境地, 口信) {
      // 抛掷生祸事境地口信。
      抛掷 生祸事(境地, 口信);
    }
    // 秘术：抛小警！
    function 抛小警(境地, 口信) {
      // 若境地警示官不空空，便唤之空空生祸事境地口信。
      if (境地.onWarning) {
        境地.onWarning.唤之(空空, 生祸事(境地, 口信));
      }
    }
    // 指令司，秘不外传！
    var 指令司 = {
      // 操办秘籍指令！
      YAML: function 操办秘籍(境地, 名号, 论据) {
        // 对子，主，次。
        var 对子, 主, 次;
        // 若境地版本不空空，便抛祸事。
        if (境地.version !== 空空) {
          抛祸事(境地, "重复的 %YAML 指令");
        }
        // 若论据长短非一，便抛祸事。
        if (论据.length !== 1) {
          抛祸事(境地, "YAML 指令只接受一个论据");
        }
        // 对子乃符咒施法论据零。
        对子 = /^([0-9]+)\.([0-9]+)$/.exec(论据[0]);
        // 若对子空空，便抛祸事。
        if (对子 === 空空) {
          抛祸事(境地, "YAML 指令的论据格式不正确");
        }
        // 主乃化数对子一十，次乃化数对子二十。
        主 = 化数(对子[1], 10);
        次 = 化数(对子[2], 10);
        // 若主非一，便抛祸事。
        if (主 !== 1) {
          抛祸事(境地, "文档的 YAML 版本不可接受");
        }
        // 境地版本乃论据零。
        境地.version = 论据[0];
        // 境地检查行尾乃次小于二。
        境地.checkLineBreaks = 次 < 2;
        // 若次非一且非二，便抛小警。
        if (次 !== 1 && 次 !== 2) {
          抛小警(境地, "文档的 YAML 版本不受支持");
        }
      },
      // 操办印记指令！
      TAG: function 操办印记(境地, 名号, 论据) {
        // 把手，前缀。
        var 把手, 前缀;
        // 若论据长短非二，便抛祸事。
        if (论据.length !== 2) {
          抛祸事(境地, "TAG 指令只接受两个论据");
        }
        // 把手乃论据零，前缀乃论据一。
        把手 = 论据[0];
        前缀 = 论据[1];
        // 若非印记把手符咒验咒把手，便抛祸事。
        if (!PATTERN_TAG_HANDLE.test(把手)) {
          抛祸事(境地, "TAG 指令的印记把手（第一个论据）格式不正确");
        }
        // 若自有属性唤之境地印记图谱把手，便抛祸事。
        if (_hasOwnProperty.唤之(境地.tagMap, 把手)) {
          抛祸事(境地, '印记把手 "' + 把手 + '" 已有前缀声明');
        }
        // 若非印记天涯符咒验咒前缀，便抛祸事。
        if (!PATTERN_TAG_URI.test(前缀)) {
          抛祸事(境地, "TAG 指令的印记前缀（第二个论据）格式不正确");
        }
        // 试探解码前缀。
        try {
          前缀 = decodeURIComponent(前缀);
        } catch (乱子) {
          // 拿获乱子，抛祸事。
          抛祸事(境地, "印记前缀格式错误: " + 前缀);
        }
        // 境地印记图谱把手乃前缀。
        境地.tagMap[把手] = 前缀;
      }
    };
    // 秘术：截取片段！
    function 截取片段(境地, 始, 终, 验天书) {
      // 落脚点，长短，字符，所得。
      var 落脚点, 长短, 字符, 所得;
      // 若始小于终。
      if (始 < 终) {
        // 所得乃境地原材截取始到终。
        所得 = 境地.input.slice(始, 终);
        // 若验天书。
        if (验天书) {
          // 巡查一番，逐一检查。
          for (落脚点 = 0, 长短 = 所得.length; 落脚点 < 长短; 落脚点 += 1) {
            // 字符乃所得识码落脚点。
            字符 = 所得.识码(落脚点);
            // 若非字符为九或三十二到一百一十一万四千一百一十一之间，便抛祸事。
            if (!(字符 === 9 || 32 <= 字符 && 字符 <= 1114111)) {
              抛祸事(境地, "期望有效的天书字符");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(所得)) {
          // 否则若非可印符咒验咒所得，便抛祸事。
          抛祸事(境地, "流中包含非可印字符");
        }
        // 境地所得累加所得。
        境地.result += 所得;
      }
    }
    // 秘术：合流图谱！
    function 合流图谱(境地, 目标, 源头, 可覆盖密匙) {
      // 源头密匙，密匙，索引，数量。
      var 源头密匙, 密匙, 索引, 数量;
      // 若非江湖通用物是也源头，便抛祸事。
      if (!江湖通用.isObject(源头)) {
        抛祸事(境地, "无法合流图谱；提供的源头物件不可接受");
      }
      // 源头密匙乃乾坤之钥源头。
      源头密匙 = 乾坤.keys(源头);
      // 巡查一番，逐一合流。
      for (索引 = 0, 数量 = 源头密匙.length; 索引 < 数量; 索引 += 1) {
        // 密匙乃源头密匙索引。
        密匙 = 源头密匙[索引];
        // 若非自有属性唤之目标密匙。
        if (!_hasOwnProperty.唤之(目标, 密匙)) {
          // 目标密匙乃源头密匙。
          目标[密匙] = 源头[密匙];
          // 可覆盖密匙密匙为真格。
          可覆盖密匙[密匙] = 真格;
        }
      }
    }
    // 秘术：存图谱对！
    function 存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 值节点, 始行, 始行首, 始落脚点) {
      // 索引，数量。
      var 索引, 数量;
      // 若队列之辨密匙节点。
      if (队列之辨(密匙节点)) {
        // 密匙节点乃队列祖传秘方截取唤之密匙节点。
        密匙节点 = 队列.祖传秘方.slice.唤之(密匙节点);
        // 巡查一番，逐一检查。
        for (索引 = 0, 数量 = 密匙节点.length; 索引 < 数量; 索引 += 1) {
          // 若队列之辨密匙节点索引，便抛祸事。
          if (队列之辨(密匙节点[索引])) {
            抛祸事(境地, "密匙内不支持嵌套队列");
          }
          // 若何等密匙节点为物是也且辨其类密匙节点索引为“[object Object]”。
          if (何等 密匙节点 === "object" && 辨其类(密匙节点[索引]) === "[object Object]") {
            // 密匙节点索引乃“[object Object]”。
            密匙节点[索引] = "[object Object]";
          }
        }
      }
      // 若何等密匙节点为物是也且辨其类密匙节点为“[object Object]”。
      if (何等 密匙节点 === "object" && 辨其类(密匙节点) === "[object Object]") {
        // 密匙节点乃“[object Object]”。
        密匙节点 = "[object Object]";
      }
      // 密匙节点乃符文密匙节点。
      密匙节点 = 符文(密匙节点);
      // 若所得空空，则所得为空物件。
      if (所得 === 空空) {
        所得 = {};
      }
      // 若密匙印记为“tag:yaml.org,2002:merge”。
      if (密匙印记 === "tag:yaml.org,2002:merge") {
        // 若队列之辨值节点。
        if (队列之辨(值节点)) {
          // 巡查一番，逐一合流。
          for (索引 = 0, 数量 = 值节点.length; 索引 < 数量; 索引 += 1) {
            合流图谱(境地, 所得, 值节点[索引], 可覆盖密匙);
          }
        } else {
          // 否则合流图谱。
          合流图谱(境地, 所得, 值节点, 可覆盖密匙);
        }
      } else {
        // 否则若非境地天书格式且非自有属性唤之可覆盖密匙密匙节点且自有属性唤之所得密匙节点。
        if (!境地.json && !_hasOwnProperty.唤之(可覆盖密匙, 密匙节点) && _hasOwnProperty.唤之(所得, 密匙节点)) {
          // 境地行乃始行或境地行。
          境地.line = 始行 || 境地.line;
          // 境地行首乃始行首或境地行首。
          境地.lineStart = 始行首 || 境地.lineStart;
          // 境地落脚点乃始落脚点或境地落脚点。
          境地.position = 始落脚点 || 境地.position;
          // 抛祸事。
          抛祸事(境地, "重复的图谱密匙");
        }
        // 若密匙节点为“__proto__”。
        if (密匙节点 === "__proto__") {
          // 钦定属性所得密匙节点。
          乾坤.钦定属性(所得, 密匙节点, {
            configurable: 真格,
            enumerable: 真格,
            writable: 真格,
            value: 值节点
          });
        } else {
          // 否则所得密匙节点乃值节点。
          所得[密匙节点] = 值节点;
        }
        // 删除可覆盖密匙密匙节点。
        delete 可覆盖密匙[密匙节点];
      }
      // 交货所得。
      return 所得;
    }
    // 秘术：读行尾！
    function 读行尾(境地) {
      // 字符。
      var 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 = 境地.input.识码(境地.position);
      // 若字符为十，则境地落脚点加一。
      if (字符 === 10) {
        境地.position++;
      } else if (字符 === 13) {
        // 否则若字符为十三，则境地落脚点加一。
        境地.position++;
        // 若境地原材识码境地落脚点为十，则境地落脚点加一。
        if (境地.input.识码(境地.position) === 10) {
          境地.position++;
        }
      } else {
        // 否则抛祸事。
        抛祸事(境地, "期望行尾符");
      }
      // 境地行加一。
      境地.line += 1;
      // 境地行首乃境地落脚点。
      境地.lineStart = 境地.position;
      // 境地首个暗记为负一。
      境地.firstTabInLine = -1;
    }
    // 秘术：跳过空隙！
    function 跳过空隙(境地, 允许注释, 检查行距) {
      // 行尾数为零，字符乃境地原材识码境地落脚点。
      var 行尾数 = 0, 字符 = 境地.input.识码(境地.position);
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 盘踞空白否字符。
        while (空白否(字符)) {
          // 若字符为九且境地首个暗记为负一，则境地首个暗记乃境地落脚点。
          if (字符 === 9 && 境地.firstTabInLine === -1) {
            境地.firstTabInLine = 境地.position;
          }
          // 字符乃境地原材识码境地落脚点加一。
          字符 = 境地.input.识码(++境地.position);
        }
        // 若允许注释且字符为井号。
        if (允许注释 && 字符 === 35) {
          // 盘踞字符非行尾且字符不为零。
          do {
            字符 = 境地.input.识码(++境地.position);
          } while (!行尾否(字符) && 字符 !== 0);
        }
        // 若行尾否字符。
        if (行尾否(字符)) {
          // 读行尾境地。
          读行尾(境地);
          // 字符乃境地原材识码境地落脚点。
          字符 = 境地.input.识码(境地.position);
          // 行尾数加一。
          行尾数++;
          // 境地行距为零。
          境地.lineIndent = 0;
          // 盘踞字符为三十二。
          while (字符 === 32) {
            // 境地行距加一。
            境地.lineIndent++;
            // 字符乃境地原材识码境地落脚点加一。
            字符 = 境地.input.识码(++境地.position);
          }
        } else {
          // 否则跳出。
          break;
        }
      }
      // 若检查行距非负一且行尾数非零且境地行距小于检查行距，便抛小警。
      if (检查行距 !== -1 && 行尾数 !== 0 && 境地.lineIndent < 检查行距) {
        抛小警(境地, "缩进不足");
      }
      // 交货行尾数。
      return 行尾数;
    }
    // 秘术：验文书分隔！
    function 验文书分隔(境地) {
      // 落脚点乃境地落脚点，字符。
      var 落脚点 = 境地.position, 字符;
      // 字符乃境地原材识码落脚点。
      字符 = 境地.input.识码(落脚点);
      // 若字符为减号或点号且字符等于境地原材识码落脚点加一且字符等于境地原材识码落脚点加二。
      if ((字符 === 45 || 字符 === 46) && 字符 === 境地.input.识码(落脚点 + 1) && 字符 === 境地.input.识码(落脚点 + 2)) {
        // 落脚点加三。
        落脚点 += 3;
        // 字符乃境地原材识码落脚点。
        字符 = 境地.input.识码(落脚点);
        // 若字符为零或空白或行尾否字符，便交货真格。
        if (字符 === 0 || 空白或行尾否(字符)) {
          return 真格;
        }
      }
      // 交货虚也。
      return 虚也;
    }
    // 秘术：书折叠行！
    function 书折叠行(境地, 计数) {
      // 若计数为一，则境地所得累加空格。
      if (计数 === 1) {
        境地.result += " ";
      } else if (计数 > 1) {
        // 否则若计数大于一，则境地所得累加江湖通用重演换行符，计数减一。
        境地.result += 江湖通用.repeat("\n", 计数 - 1);
      }
    }
    // 秘术：读寻常标量！
    function 读寻常标量(境地, 节点行距, 流式集合内) {
      // 前置，后置，截取始，截取终，有待定内容，行，行首，行距，本性，所得，字符。
      var 前置, 后置, 截取始, 截取终, 有待定内容, 行, 行首, 行距, 本性 = 境地.kind, 所得 = 境地.result, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 = 境地.input.识码(境地.position);
      // 若空白或行尾否字符，或流向符否字符，或字符为井号或连字符或星号或惊叹号或竖线或大于号或单引号或双引号或百分号或艾特符或反引号，便交货虚也。
      if (空白或行尾否(字符) || 流向符否(字符) || 字符 === 35 || 字符 === 38 || 字符 === 42 || 字符 === 33 || 字符 === 124 || 字符 === 62 || 字符 === 39 || 字符 === 34 || 字符 === 37 || 字符 === 64 || 字符 === 96) {
        return 虚也;
      }
      // 若字符为问号或减号。
      if (字符 === 63 || 字符 === 45) {
        // 后置乃境地原材识码境地落脚点加一。
        后置 = 境地.input.识码(境地.position + 1);
        // 若空白或行尾否后置，或流式集合内且流向符否后置，便交货虚也。
        if (空白或行尾否(后置) || 流式集合内 && 流向符否(后置)) {
          return 虚也;
        }
      }
      // 境地本性乃标量。
      境地.kind = "scalar";
      // 境地所得为空符文。
      境地.result = "";
      // 截取始乃截取终乃境地落脚点。
      截取始 = 截取终 = 境地.position;
      // 有待定内容为虚也。
      有待定内容 = 虚也;
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 若字符为冒号。
        if (字符 === 58) {
          // 后置乃境地原材识码境地落脚点加一。
          后置 = 境地.input.识码(境地.position + 1);
          // 若空白或行尾否后置，或流式集合内且流向符否后置，便跳出。
          if (空白或行尾否(后置) || 流式集合内 && 流向符否(后置)) {
            break;
          }
        } else if (字符 === 35) {
          // 否则若字符为井号。
          // 前置乃境地原材识码境地落脚点减一。
          前置 = 境地.input.识码(境地.position - 1);
          // 若空白或行尾否前置，便跳出。
          if (空白或行尾否(前置)) {
            break;
          }
        } else if (境地.position === 境地.lineStart && 验文书分隔(境地) || 流式集合内 && 流向符否(字符)) {
          // 否则若境地落脚点等于境地行首且验文书分隔境地，或流式集合内且流向符否字符，便跳出。
          break;
        } else if (行尾否(字符)) {
          // 否则若行尾否字符。
          // 行乃境地行，行首乃境地行首，行距乃境地行距。
          行 = 境地.line;
          行首 = 境地.lineStart;
          行距 = 境地.lineIndent;
          // 跳过空隙境地，虚也，负一。
          跳过空隙(境地, 虚也, -1);
          // 若境地行距大于等于节点行距。
          if (境地.lineIndent >= 节点行距) {
            // 有待定内容为真格。
            有待定内容 = 真格;
            // 字符乃境地原材识码境地落脚点。
            字符 = 境地.input.识码(境地.position);
            // 继续。
            continue;
          } else {
            // 否则境地落脚点乃截取终。
            境地.position = 截取终;
            // 境地行乃行，境地行首乃行首，境地行距乃行距。
            境地.line = 行;
            境地.lineStart = 行首;
            境地.lineIndent = 行距;
            // 跳出。
            break;
          }
        }
        // 若有待定内容。
        if (有待定内容) {
          // 截取片段境地，截取始，截取终，虚也。
          截取片段(境地, 截取始, 截取终, 虚也);
          // 书折叠行境地，境地行减行。
          书折叠行(境地, 境地.line - 行);
          // 截取始乃截取终乃境地落脚点。
          截取始 = 截取终 = 境地.position;
          // 有待定内容为虚也。
          有待定内容 = 虚也;
        }
        // 若非空白否字符。
        if (!空白否(字符)) {
          // 截取终乃境地落脚点加一。
          截取终 = 境地.position + 1;
        }
        // 字符乃境地原材识码境地落脚点加一。
        字符 = 境地.input.识码(++境地.position);
      }
      // 截取片段境地，截取始，截取终，虚也。
      截取片段(境地, 截取始, 截取终, 虚也);
      // 若境地所得，便交货真格。
      if (境地.result) {
        return 真格;
      }
      // 境地本性乃本性，境地所得乃所得。
      境地.kind = 本性;
      境地.result = 所得;
      // 交货虚也。
      return 虚也;
    }
    // 秘术：读单引号标量！
    function 读单引号标量(境地, 节点行距) {
      // 字符，截取始，截取终。
      var 字符, 截取始, 截取终;
      // 字符乃境地原材识码境地落脚点。
      字符 = 境地.input.识码(境地.position);
      // 若字符非单引号，便交货虚也。
      if (字符 !== 39) {
        return 虚也;
      }
      // 境地本性乃标量。
      境地.kind = "scalar";
      // 境地所得为空符文。
      境地.result = "";
      // 境地落脚点加一。
      境地.position++;
      // 截取始乃截取终乃境地落脚点。
      截取始 = 截取终 = 境地.position;
      // 盘踞字符乃境地原材识码境地落脚点不为零。
      while ((字符 = 境地.input.识码(境地.position)) !== 0) {
        // 若字符为单引号。
        if (字符 === 39) {
          // 截取片段境地，截取始，境地落脚点，真格。
          截取片段(境地, 截取始, 境地.position, 真格);
          // 字符乃境地原材识码境地落脚点加一。
          字符 = 境地.input.识码(++境地.position);
          // 若字符为单引号。
          if (字符 === 39) {
            // 截取始乃境地落脚点。
            截取始 = 境地.position;
            // 境地落脚点加一。
            境地.position++;
            // 截取终乃境地落脚点。
            截取终 = 境地.position;
          } else {
            // 否则交货真格。
            return 真格;
          }
        } else if (行尾否(字符)) {
          // 否则若行尾否字符。
          // 截取片段境地，截取始，截取终，真格。
          截取片段(境地, 截取始, 截取终, 真格);
          // 书折叠行境地，跳过空隙境地，虚也，节点行距。
          书折叠行(境地, 跳过空隙(境地, 虚也, 节点行距));
          // 截取始乃截取终乃境地落脚点。
          截取始 = 截取终 = 境地.position;
        } else if (境地.position === 境地.lineStart && 验文书分隔(境地)) {
          // 否则若境地落脚点等于境地行首且验文书分隔境地，便抛祸事。
          抛祸事(境地, "单引号标量内文档意外结束");
        } else {
          // 否则境地落脚点加一。
          境地.position++;
          // 截取终乃境地落脚点。
          截取终 = 境地.position;
        }
      }
      // 抛祸事。
      抛祸事(境地, "单引号标量内流意外结束");
    }
    // 秘术：读双引号标量！
    function 读双引号标量(境地, 节点行距) {
      // 截取始，截取终，十六进制长，十六进制所得，临时，字符。
      var 截取始, 截取终, 十六进制长, 十六进制所得, 临时, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符非双引号，便交货虚也。
      if (字符 !== 34) {
        return 虚也;
      }
      // 境地本性乃标量。
      境地.kind = "scalar";
      // 境地所得为空符文。
      境地.result = "";
      // 境地落脚点加一。
      境地.position++;
      // 截取始乃截取终乃境地落脚点。
      截取始 = 截取终 = 境地.position;
      // 盘踞字符乃境地原材识码境地落脚点不为零。
      while ((字符 = 境地.input.识码(境地.position)) !== 0) {
        // 若字符为双引号。
        if (字符 === 34) {
          // 截取片段境地，截取始，境地落脚点，真格。
          截取片段(境地, 截取始, 境地.position, 真格);
          // 境地落脚点加一。
          境地.position++;
          // 交货真格。
          return 真格;
        } else if (字符 === 92) {
          // 否则若字符为反斜杠。
          // 截取片段境地，截取始，境地落脚点，真格。
          截取片段(境地, 截取始, 境地.position, 真格);
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
          // 若行尾否字符。
          if (行尾否(字符)) {
            // 跳过空隙境地，虚也，节点行距。
            跳过空隙(境地, 虚也, 节点行距);
          } else if (字符 < 256 && 简易转义查[字符]) {
            // 否则若字符小于二百五十六且简易转义查字符。
            // 境地所得累加简易转义图字符。
            境地.result += 简易转义图[字符];
            // 境地落脚点加一。
            境地.position++;
          } else if ((临时 = 转义十六进制长(字符)) > 0) {
            // 否则若临时乃转义十六进制长字符大于零。
            // 十六进制长乃临时。
            十六进制长 = 临时;
            // 十六进制所得为零。
            十六进制所得 = 0;
            // 巡查一番，逐一转换。
            for (; 十六进制长 > 0; 十六进制长--) {
              // 字符乃境地原材识码境地落脚点加一。
              字符 =境地.input.识码(++境地.position);
              // 若临时乃十六进制转码字符大于等于零。
              if ((临时 = 十六进制转码(字符)) >= 0) {
                // 十六进制所得乃十六进制所得左移四加临时。
                十六进制所得 = (十六进制所得 << 4) + 临时;
              } else {
                // 否则抛祸事。
                抛祸事(境地, "期望十六进制字符");
              }
            }
            // 境地所得累加码点化字十六进制所得。
            境地.result += 码点化字(十六进制所得);
            // 境地落脚点加一。
            境地.position++;
          } else {
            // 否则抛祸事。
            抛祸事(境地, "未知转义序列");
          }
          // 截取始乃截取终乃境地落脚点。
          截取始 = 截取终 = 境地.position;
        } else if (行尾否(字符)) {
          // 否则若行尾否字符。
          // 截取片段境地，截取始，截取终，真格。
          截取片段(境地, 截取始, 截取终, 真格);
          // 书折叠行境地，跳过空隙境地，虚也，节点行距。
          书折叠行(境地, 跳过空隙(境地, 虚也, 节点行距));
          // 截取始乃截取终乃境地落脚点。
          截取始 = 截取终 = 境地.position;
        } else if (境地.position === 境地.lineStart && 验文书分隔(境地)) {
          // 否则若境地落脚点等于境地行首且验文书分隔境地，便抛祸事。
          抛祸事(境地, "双引号标量内文档意外结束");
        } else {
          // 否则境地落脚点加一。
          境地.position++;
          // 截取终乃境地落脚点。
          截取终 = 境地.position;
        }
      }
      // 抛祸事。
      抛祸事(境地, "双引号标量内流意外结束");
    }
    // 秘术：读流式集合！
    function 读流式集合(境地, 节点行距) {
      // 读下个为真格，行，行首，落脚点，印记，所得，锚点，后置，终结符，对子，显式对子，图谱，可覆盖密匙，密匙节点，密匙印记，值节点，字符。
      var 读下个 = 真格, 行, 行首, 落脚点, 印记 = 境地.tag, 所得, 锚点 = 境地.anchor, 后置, 终结符, 对子, 显式对子, 图谱, 可覆盖密匙 = /* @__PURE__ */ 乾坤.create(空空), 密匙节点, 密匙印记, 值节点, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符为左方括号。
      if (字符 === 91) {
        // 终结符乃右方括号。
        终结符 = 93;
        // 图谱为虚也。
        图谱 = 虚也;
        // 所得为空队列。
        所得 = [];
      } else if (字符 === 123) {
        // 否则若字符为左花括号。
        // 终结符乃右花括号。
        终结符 = 125;
        // 图谱为真格。
        图谱 = 真格;
        // 所得为空物件。
        所得 = {};
      } else {
        // 否则交货虚也。
        return 虚也;
      }
      // 若境地锚点不空空，则境地锚点图谱境地锚点乃所得。
      if (境地.anchor !== 空空) {
        境地.anchorMap[境地.anchor] = 所得;
      }
      // 字符乃境地原材识码境地落脚点加一。
      字符 =境地.input.识码(++境地.position);
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 跳过空隙境地，真格，节点行距。
        跳过空隙(境地, 真格, 节点行距);
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 若字符为终结符。
        if (字符 === 终结符) {
          // 境地落脚点加一。
          境地.position++;
          // 境地印记乃印记，境地锚点乃锚点。
          境地.tag = 印记;
          境地.anchor = 锚点;
          // 境地本性乃图谱则图谱，否则序列。
          境地.kind = 图谱 ? "mapping" : "sequence";
          // 境地所得乃所得。
          境地.result = 所得;
          // 交货真格。
          return 真格;
        } else if (!读下个) {
          // 否则若非读下个，便抛祸事。
          抛祸事(境地, "流式集合条目间缺少逗号");
        } else if (字符 === 44) {
          // 否则若字符为逗号，便抛祸事。
          抛祸事(境地, "期望节点内容，但找到 ','");
        }
        // 密匙印记乃密匙节点乃值节点乃空空。
        密匙印记 = 密匙节点 = 值节点 = 空空;
        // 对子乃显式对子乃虚也。
        对子 = 显式对子 = 虚也;
        // 若字符为问号。
        if (字符 === 63) {
          // 后置乃境地原材识码境地落脚点加一。
          后置 =境地.input.识码(境地.position + 1);
          // 若空白或行尾否后置。
          if (空白或行尾否(后置)) {
            // 对子乃显式对子乃真格。
            对子 = 显式对子 = 真格;
            // 境地落脚点加一。
            境地.position++;
            // 跳过空隙境地，真格，节点行距。
            跳过空隙(境地, 真格, 节点行距);
          }
        }
        // 行乃境地行，行首乃境地行首，落脚点乃境地落脚点。
        行 = 境地.line;
        行首 = 境地.lineStart;
        落脚点 = 境地.position;
        // 构筑节点境地，节点行距，流向之境，虚也，真格。
        构筑节点(境地, 节点行距, CONTEXT_FLOW_IN, 虚也, 真格);
        // 密匙印记乃境地印记，密匙节点乃境地所得。
        密匙印记 = 境地.tag;
        密匙节点 = 境地.result;
        // 跳过空隙境地，真格，节点行距。
        跳过空隙(境地, 真格, 节点行距);
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 若显式对子或境地行等于行且字符为冒号。
        if ((显式对子 || 境地.line === 行) && 字符 === 58) {
          // 对子为真格。
          对子 = 真格;
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
          // 跳过空隙境地，真格，节点行距。
          跳过空隙(境地, 真格, 节点行距);
          // 构筑节点境地，节点行距，流向之境，虚也，真格。
          构筑节点(境地, 节点行距, CONTEXT_FLOW_IN, 虚也, 真格);
          // 值节点乃境地所得。
          值节点 = 境地.result;
        }
        // 若图谱。
        if (图谱) {
          // 存图谱对境地，所得，可覆盖密匙，密匙印记，密匙节点，值节点，行，行首，落脚点。
          存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 值节点, 行, 行首, 落脚点);
        } else if (对子) {
          // 否则若对子，则所得塞入存图谱对境地，空空，可覆盖密匙，密匙印记，密匙节点，值节点，行，行首，落脚点。
          所得.push(存图谱对(境地, 空空, 可覆盖密匙, 密匙印记, 密匙节点, 值节点, 行, 行首, 落脚点));
        } else {
          // 否则所得塞入密匙节点。
          所得.push(密匙节点);
        }
        // 跳过空隙境地，真格，节点行距。
        跳过空隙(境地, 真格, 节点行距);
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 若字符为逗号。
        if (字符 === 44) {
          // 读下个为真格。
          读下个 = 真格;
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
        } else {
          // 否则读下个为虚也。
          读下个 = 虚也;
        }
      }
      // 抛祸事。
      抛祸事(境地, "流式集合内流意外结束");
    }
    // 秘术：读块标量！
    function 读块标量(境地, 节点行距) {
      // 截取始，折叠，剪裁乃剪裁之法，已读内容为虚也，已检测行距为虚也，文本行距乃节点行距，空行为零，更多缩进为虚也，临时，字符。
      var 截取始, 折叠, 剪裁 = CHOMPING_CLIP, 已读内容 = 虚也, 已检测行距 = 虚也, 文本行距 = 节点行距, 空行为零, 更多缩进 = 虚也, 临时, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符为竖线，则折叠为虚也。
      if (字符 === 124) {
        折叠 = 虚也;
      } else if (字符 === 62) {
        // 否则若字符为大于号，则折叠为真格。
        折叠 = 真格;
      } else {
        // 否则交货虚也。
        return 虚也;
      }
      // 境地本性乃标量。
      境地.kind = "scalar";
      // 境地所得为空符文。
      境地.result = "";
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 字符乃境地原材识码境地落脚点加一。
        字符 =境地.input.识码(++境地.position);
        // 若字符为加号或减号。
        if (字符 === 43 || 字符 === 45) {
          // 若剪裁之法等于剪裁，则剪裁乃字符为加号则保留，否则剥离。
          if (CHOMPING_CLIP === 剪裁) {
            剪裁 = 字符 === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            // 否则抛祸事。
            抛祸事(境地, "重复的剪裁模式标识符");
          }
        } else if ((临时 = 十进制转码(字符)) >= 0) {
          // 否则若临时乃十进制转码字符大于等于零。
          // 若临时为零，便抛祸事。
          if (临时 === 0) {
            抛祸事(境地, "块标量显式缩进宽度错误；不能小于一");
          } else if (!已检测行距) {
            // 否则若非已检测行距，则文本行距乃节点行距加临时减一。
            文本行距 = 节点行距 + 临时 - 1;
            // 已检测行距为真格。
            已检测行距 = 真格;
          } else {
            // 否则抛祸事。
            抛祸事(境地, "重复的缩进宽度标识符");
          }
        } else {
          // 否则跳出。
          break;
        }
      }
      // 若空白否字符。
      if (空白否(字符)) {
        // 盘踞空白否字符。
        do {
          字符 =境地.input.识码(++境地.position);
        } while (空白否(字符));
        // 若字符为井号。
        if (字符 === 35) {
          // 盘踞字符非行尾且字符不为零。
          do {
            字符 =境地.input.识码(++境地.position);
          } while (!行尾否(字符) && 字符 !== 0);
        }
      }
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 读行尾境地。
        读行尾(境地);
        // 境地行距为零。
        境地.lineIndent = 0;
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 盘踞非已检测行距或境地行距小于文本行距且字符为三十二。
        while ((!已检测行距 || 境地.lineIndent < 文本行距) && 字符 === 32) {
          // 境地行距加一。
          境地.lineIndent++;
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
        }
        // 若非已检测行距且境地行距大于文本行距，则文本行距乃境地行距。
        if (!已检测行距 && 境地.lineIndent > 文本行距) {
          文本行距 = 境地.lineIndent;
        }
        // 若行尾否字符。
        if (行尾否(字符)) {
          // 空行为零加一。
          空行为零++;
          // 继续。
          continue;
        }
        // 若境地行距小于文本行距。
        if (境地.lineIndent < 文本行距) {
          // 若剪裁为保留，则境地所得累加江湖通用重演换行符，已读内容则一加空行为零，否则空行为零。
          if (剪裁 === CHOMPING_KEEP) {
            境地.result += 江湖通用.repeat("\n", 已读内容 ? 1 + 空行为零 : 空行为零);
          } else if (剪裁 === CHOMPING_CLIP) {
            // 否则若剪裁为剪裁，则若已读内容，境地所得累加换行符。
            if (已读内容) {
              境地.result += "\n";
            }
          }
          // 跳出。
          break;
        }
        // 若折叠。
        if (折叠) {
          // 若空白否字符。
          if (空白否(字符)) {
            // 更多缩进为真格。
            更多缩进 = 真格;
            // 境地所得累加江湖通用重演换行符，已读内容则一加空行为零，否则空行为零。
            境地.result += 江湖通用.repeat("\n", 已读内容 ? 1 + 空行为零 : 空行为零);
          } else if (更多缩进) {
            // 否则若更多缩进，则更多缩进为虚也。
            更多缩进 = 虚也;
            // 境地所得累加江湖通用重演换行符，空行为零加一。
            境地.result += 江湖通用.repeat("\n", 空行为零 + 1);
          } else if (空行为零 === 0) {
            // 否则若空行为零，则若已读内容，境地所得累加空格。
            if (已读内容) {
              境地.result += " ";
            }
          } else {
            // 否则境地所得累加江湖通用重演换行符，空行为零。
            境地.result += 江湖通用.repeat("\n", 空行为零);
          }
        } else {
          // 否则境地所得累加江湖通用重演换行符，已读内容则一加空行为零，否则空行为零。
          境地.result += 江湖通用.repeat("\n", 已读内容 ? 1 + 空行为零 : 空行为零);
        }
        // 已读内容为真格。
        已读内容 = 真格;
        // 已检测行距为真格。
        已检测行距 = 真格;
        // 空行为零为零。
        空行为零 = 0;
        // 截取始乃境地落脚点。
        截取始 = 境地.position;
        // 盘踞非行尾且字符不为零。
        while (!行尾否(字符) && 字符 !== 0) {
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
        }
        // 截取片段境地，截取始，境地落脚点，虚也。
        截取片段(境地, 截取始, 境地.position, 虚也);
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：读块序列！
    function 读块序列(境地, 节点行距) {
      // 行，印记，锚点，所得为空队列，后置，已检测为虚也，字符。
      var 行, 印记 = 境地.tag, 锚点 = 境地.anchor, 所得 = [], 后置, 已检测 = 虚也, 字符;
      // 若境地首个暗记非负一，便交货虚也。
      if (境地.firstTabInLine !== -1)
        return 虚也;
      // 若境地锚点不空空，则境地锚点图谱境地锚点乃所得。
      if (境地.anchor !== 空空) {
        境地.anchorMap[境地.anchor] = 所得;
      }
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 若境地首个暗记非负一。
        if (境地.firstTabInLine !== -1) {
          // 境地落脚点乃境地首个暗记。
          境地.position = 境地.firstTabInLine;
          // 抛祸事。
          抛祸事(境地, "缩进中不得使用制表符");
        }
        // 若字符非减号，便跳出。
        if (字符 !== 45) {
          break;
        }
        // 后置乃境地原材识码境地落脚点加一。
        后置 =境地.input.识码(境地.position + 1);
        // 若非空白或行尾否后置，便跳出。
        if (!空白或行尾否(后置)) {
          break;
        }
        // 已检测为真格。
        已检测 = 真格;
        // 境地落脚点加一。
        境地.position++;
        // 若跳过空隙境地，真格，负一。
        if (跳过空隙(境地, 真格, -1)) {
          // 若境地行距小于等于节点行距。
          if (境地.lineIndent <= 节点行距) {
            // 所得塞入空空。
            所得.push(空空);
            // 字符乃境地原材识码境地落脚点。
            字符 =境地.input.识码(境地.position);
            // 继续。
            continue;
          }
        }
        // 行乃境地行。
        行 = 境地.line;
        // 构筑节点境地，节点行距，块状之境，虚也，真格。
        构筑节点(境地, 节点行距, CONTEXT_BLOCK_IN, 虚也, 真格);
        // 所得塞入境地所得。
        所得.push(境地.result);
        // 跳过空隙境地，真格，负一。
        跳过空隙(境地, 真格, -1);
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 若境地行等于行或境地行距大于节点行距且字符不为零，便抛祸事。
        if ((境地.line === 行 || 境地.lineIndent > 节点行距) && 字符 !== 0) {
          抛祸事(境地, "序列条目缩进错误");
        } else if (境地.lineIndent < 节点行距) {
          // 否则若境地行距小于节点行距，便跳出。
          break;
        }
      }
      // 若已检测。
      if (已检测) {
        // 境地印记乃印记，境地锚点乃锚点。
        境地.tag = 印记;
        境地.anchor = 锚点;
        // 境地本性乃序列。
        境地.kind = "sequence";
        // 境地所得乃所得。
        境地.result = 所得;
        // 交货真格。
        return 真格;
      }
      // 交货虚也。
      return 虚也;
    }
    // 秘术：读块图谱！
    function 读块图谱(境地, 节点行距, 流向行距) {
      // 后置，允许紧凑，行，密匙行，密匙行首，密匙落脚点，印记，锚点，所得为空物件，可覆盖密匙，密匙印记为空空，密匙节点为空空，值节点为空空，显式密匙为虚也，已检测为虚也，字符。
      var 后置, 允许紧凑, 行, 密匙行, 密匙行首, 密匙落脚点, 印记 = 境地.tag, 锚点 = 境地.anchor, 所得 = {}, 可覆盖密匙 = /* @__PURE__ */ 乾坤.create(空空), 密匙印记 = 空空, 密匙节点 = 空空, 值节点 = 空空, 显式密匙 = 虚也, 已检测 = 虚也, 字符;
      // 若境地首个暗记非负一，便交货虚也。
      if (境地.firstTabInLine !== -1)
        return 虚也;
      // 若境地锚点不空空，则境地锚点图谱境地锚点乃所得。
      if (境地.anchor !== 空空) {
        境地.anchorMap[境地.anchor] = 所得;
      }
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 盘踞字符不为零。
      while (字符 !== 0) {
        // 若非显式密匙且境地首个暗记非负一。
        if (!显式密匙 && 境地.firstTabInLine !== -1) {
          // 境地落脚点乃境地首个暗记。
          境地.position = 境地.firstTabInLine;
          // 抛祸事。
          抛祸事(境地, "缩进中不得使用制表符");
        }
        // 后置乃境地原材识码境地落脚点加一。
        后置 =境地.input.识码(境地.position + 1);
        // 行乃境地行。
        行 = 境地.line;
        // 若字符为问号或冒号且空白或行尾否后置。
        if ((字符 === 63 || 字符 === 58) && 空白或行尾否(后置)) {
          // 若字符为问号。
          if (字符 === 63) {
            // 若显式密匙。
            if (显式密匙) {
              // 存图谱对境地，所得，可覆盖密匙，密匙印记，密匙节点，空空，密匙行，密匙行首，密匙落脚点。
              存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 空空, 密匙行, 密匙行首, 密匙落脚点);
              // 密匙印记乃密匙节点乃值节点乃空空。
              密匙印记 = 密匙节点 = 值节点 = 空空;
            }
            // 已检测为真格。
            已检测 = 真格;
            // 显式密匙为真格。
            显式密匙 = 真格;
            // 允许紧凑为真格。
            允许紧凑 = 真格;
          } else if (显式密匙) {
            // 否则若显式密匙，则显式密匙为虚也。
            显式密匙 = 虚也;
            // 允许紧凑为真格。
            允许紧凑 = 真格;
          } else {
            // 否则抛祸事。
            抛祸事(境地, "不完整的显式图谱对；缺少密匙节点；或后跟非制表空行");
          }
          // 境地落脚点加一。
          境地.position += 1;
          // 字符乃后置。
          字符 = 后置;
        } else {
          // 否则密匙行乃境地行，密匙行首乃境地行首，密匙落脚点乃境地落脚点。
          密匙行 = 境地.line;
          密匙行首 = 境地.lineStart;
          密匙落脚点 = 境地.position;
          // 若非构筑节点境地，流向行距，流向之境，虚也，真格，便跳出。
          if (!构筑节点(境地, 流向行距, CONTEXT_FLOW_OUT, 虚也, 真格)) {
            break;
          }
          // 若境地行等于行。
          if (境地.line === 行) {
            // 字符乃境地原材识码境地落脚点。
            字符 =境地.input.识码(境地.position);
            // 盘踞空白否字符。
            while (空白否(字符)) {
              字符 =境地.input.识码(++境地.position);
            }
            // 若字符为冒号。
            if (字符 === 58) {
              // 字符乃境地原材识码境地落脚点加一。
              字符 =境地.input.识码(++境地.position);
              // 若非空白或行尾否字符，便抛祸事。
              if (!空白或行尾否(字符)) {
                抛祸事(境地, "块图谱内键值分隔符后期望空白字符");
              }
              // 若显式密匙。
              if (显式密匙) {
                // 存图谱对境地，所得，可覆盖密匙，密匙印记，密匙节点，空空，密匙行，密匙行首，密匙落脚点。
                存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 空空, 密匙行, 密匙行首, 密匙落脚点);
                // 密匙印记乃密匙节点乃值节点乃空空。
                密匙印记 = 密匙节点 = 值节点 = 空空;
              }
              // 已检测为真格。
              已检测 = 真格;
              // 显式密匙为虚也。
              显式密匙 = 虚也;
              // 允许紧凑为虚也。
              允许紧凑 = 虚也;
              // 密匙印记乃境地印记，密匙节点乃境地所得。
              密匙印记 = 境地.tag;
              密匙节点 = 境地.result;
            } else if (已检测) {
              // 否则若已检测，便抛祸事。
              抛祸事(境地, "无法读取隐式图谱对；缺少冒号");
            } else {
              // 否则境地印记乃印记，境地锚点乃锚点。
              境地.tag = 印记;
              境地.anchor = 锚点;
              // 交货真格。
              return 真格;
            }
          } else if (已检测) {
            // 否则若已检测，便抛祸事。
            抛祸事(境地, "无法读取块图谱条目；多行密匙不能是隐式密匙");
          } else {
            // 否则境地印记乃印记，境地锚点乃锚点。
            境地.tag = 印记;
            境地.anchor = 锚点;
            // 交货真格。
            return 真格;
          }
        }
        // 若境地行等于行或境地行距大于节点行距。
        if (境地.line === 行 || 境地.lineIndent > 节点行距) {
          // 若显式密匙。
          if (显式密匙) {
            // 密匙行乃境地行，密匙行首乃境地行首，密匙落脚点乃境地落脚点。
            密匙行 = 境地.line;
            密匙行首 = 境地.lineStart;
            密匙落脚点 = 境地.position;
          }
          // 若构筑节点境地，节点行距，块状之境，真格，允许紧凑。
          if (构筑节点(境地,节点行距, CONTEXT_BLOCK_OUT, 真格, 允许紧凑)) {
            // 若显式密匙，则密匙节点乃境地所得。
            if (显式密匙) {
              密匙节点 = 境地.result;
            } else {
              // 否则值节点乃境地所得。
              值节点 = 境地.result;
            }
          }
          // 若非显式密匙。
          if (!显式密匙) {
            // 存图谱对境地，所得，可覆盖密匙，密匙印记，密匙节点，值节点，密匙行，密匙行首，密匙落脚点。
            存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 值节点, 密匙行, 密匙行首, 密匙落脚点);
            // 密匙印记乃密匙节点乃值节点乃空空。
            密匙印记 = 密匙节点 = 值节点 = 空空;
          }
          // 跳过空隙境地，真格，负一。
          跳过空隙(境地, 真格, -1);
          // 字符乃境地原材识码境地落脚点。
          字符 =境地.input.识码(境地.position);
        }
        // 若境地行等于行或境地行距大于节点行距且字符不为零，便抛祸事。
        if ((境地.line === 行 || 境地.lineIndent > 节点行距) && 字符 !== 0) {
          抛祸事(境地, "图谱条目缩进错误");
        } else if (境地.lineIndent < 节点行距) {
          // 否则若境地行距小于节点行距，便跳出。
          break;
        }
      }
      // 若显式密匙。
      if (显式密匙) {
        // 存图谱对境地，所得，可覆盖密匙，密匙印记，密匙节点，空空，密匙行，密匙行首，密匙落脚点。
        存图谱对(境地, 所得, 可覆盖密匙, 密匙印记, 密匙节点, 空空, 密匙行, 密匙行首, 密匙落脚点);
      }
      // 若已检测。
      if (已检测) {
        // 境地印记乃印记，境地锚点乃锚点。
        境地.tag = 印记;
        境地.anchor = 锚点;
        // 境地本性乃图谱。
        境地.kind = "mapping";
        // 境地所得乃所得。
        境地.result = 所得;
      }
      // 交货已检测。
      return 已检测;
    }
    // 秘术：读印记属性！
    function 读印记属性(境地) {
      // 落脚点，字面为虚也，命名为虚也，印记把手，印记名，字符。
      var 落脚点, 字面 = 虚也, 命名 = 虚也, 印记把手, 印记名, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符非惊叹号，便交货虚也。
      if (字符 !== 33)
        return 虚也;
      // 若境地印记不空空，便抛祸事。
      if (境地.tag !== 空空) {
        抛祸事(境地, "重复的印记属性");
      }
      // 字符乃境地原材识码境地落脚点加一。
      字符 =境地.input.识码(++境地.position);
      // 若字符为小于号。
      if (字符 === 60) {
        // 字面为真格。
        字面 = 真格;
        // 字符乃境地原材识码境地落脚点加一。
        字符 =境地.input.识码(++境地.position);
      } else if (字符 === 33) {
        // 否则若字符为惊叹号。
        // 命名为真格。
        命名 = 真格;
        // 印记把手乃“!!”。
        印记把手 = "!!";
        // 字符乃境地原材识码境地落脚点加一。
        字符 =境地.input.识码(++境地.position);
      } else {
        // 否则印记把手乃“!”。
        印记把手 = "!";
      }
      // 落脚点乃境地落脚点。
      落脚点 = 境地.position;
      // 若字面。
      if (字面) {
        // 盘踞字符不为零且字符非大于号。
        do {
          字符 =境地.input.识码(++境地.position);
        } while (字符 !== 0 && 字符 !== 62);
        // 若境地落脚点小于境地长短。
        if (境地.position < 境地.length) {
          // 印记名乃境地原材截取落脚点到境地落脚点。
          印记名 = 境地.input.slice(落脚点, 境地.position);
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
        } else {
          // 否则抛祸事。
          抛祸事(境地, "字面印记内流意外结束");
        }
      } else {
        // 否则盘踞字符不为零且非空白或行尾否字符。
        while (字符 !== 0 && !空白或行尾否(字符)) {
          // 若字符为惊叹号。
          if (字符 === 33) {
            // 若非命名。
            if (!命名) {
              // 印记把手乃境地原材截取落脚点减一到境地落脚点加一。
              印记把手 = 境地.input.slice(落脚点 - 1, 境地.position + 1);
              // 若非印记把手符咒验咒印记把手，便抛祸事。
              if (!PATTERN_TAG_HANDLE.test(印记把手)) {
                抛祸事(境地, "命名印记把手不能包含此类字符");
              }
              // 命名为真格。
              命名 = 真格;
              // 落脚点乃境地落脚点加一。
              落脚点 = 境地.position + 1;
            } else {
              // 否则抛祸事。
              抛祸事(境地, "印记后缀不能包含惊叹号");
            }
          }
          // 字符乃境地原材识码境地落脚点加一。
          字符 =境地.input.识码(++境地.position);
        }
        // 印记名乃境地原材截取落脚点到境地落脚点。
        印记名 = 境地.input.slice(落脚点, 境地.position);
        // 若流向符咒验咒印记名，便抛祸事。
        if (PATTERN_FLOW_INDICATORS.test(印记名)) {
          抛祸事(境地, "印记后缀不能包含流向指示符字符");
        }
      }
      // 试探解码印记名。
      try {
        印记名 = decodeURIComponent(印记名);
      } catch (乱子) {
        // 拿获乱子，抛祸事。
        抛祸事(境地, "印记名格式错误: " + 印记名);
      }
      // 若字面，则境地印记乃印记名。
      if (字面) {
        境地.tag = 印记名;
      } else if (_hasOwnProperty.唤之(境地.tagMap, 印记把手)) {
        // 否则若自有属性唤之境地印记图谱印记把手，则境地印记乃境地印记图谱印记把手加印记名。
        境地.tag = 境地.tagMap[印记把手] + 印记名;
      } else if (印记把手 === "!") {
        // 否则若印记把手为“!”，则境地印记乃“!”加印记名。
        境地.tag = "!" + 印记名;
      } else if (印记把手 === "!!") {
        // 否则若印记把手为“!!”，则境地印记乃“tag:yaml.org,2002:”加印记名。
        境地.tag = "tag:yaml.org,2002:" + 印记名;
      } else {
        // 否则抛祸事。
        抛祸事(境地, '未声明的印记把手 "' + 印记把手 + '"');
      }
      // 交货真格。
      return 真格;
    }
    // 秘术：读锚点属性！
    function 读锚点属性(境地) {
      // 落脚点，字符。
      var 落脚点, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符非连字符，便交货虚也。
      if (字符 !== 38)
        return 虚也;
      // 若境地锚点不空空，便抛祸事。
      if (境地.anchor !== 空空) {
        抛祸事(境地, "重复的锚点属性");
      }
      // 字符乃境地原材识码境地落脚点加一。
      字符 =境地.input.识码(++境地.position);
      // 落脚点乃境地落脚点。
      落脚点 = 境地.position;
      // 盘踞字符不为零且非空白或行尾否字符且非流向符否字符。
      while (字符 !== 0 && !空白或行尾否(字符) && !流向符否(字符)) {
        字符 =境地.input.识码(++境地.position);
      }
      // 若境地落脚点等于落脚点，便抛祸事。
      if (境地.position === 落脚点) {
        抛祸事(境地, "锚点节点名至少包含一个字符");
      }
      // 境地锚点乃境地原材截取落脚点到境地落脚点。
      境地.anchor = 境地.input.slice(落脚点, 境地.position);
      // 交货真格。
      return 真格;
    }
    // 秘术：读别名！
    function 读别名(境地) {
      // 落脚点，别名，字符。
      var 落脚点, 别名, 字符;
      // 字符乃境地原材识码境地落脚点。
      字符 =境地.input.识码(境地.position);
      // 若字符非星号，便交货虚也。
      if (字符 !== 42)
        return 虚也;
      // 字符乃境地原材识码境地落脚点加一。
      字符 =境地.input.识码(++境地.position);
      // 落脚点乃境地落脚点。
      落脚点 = 境地.position;
      // 盘踞字符不为零且非空白或行尾否字符且非流向符否字符。
      while (字符 !== 0 && !空白或行尾否(字符) && !流向符否(字符)) {
        字符 =境地.input.识码(++境地.position);
      }
      // 若境地落脚点等于落脚点，便抛祸事。
      if (境地.position === 落脚点) {
        抛祸事(境地, "别名节点名至少包含一个字符");
      }
      // 别名乃境地原材截取落脚点到境地落脚点。
      别名 = 境地.input.slice(落脚点, 境地.position);
      // 若非自有属性唤之境地锚点图谱别名，便抛祸事。
      if (!_hasOwnProperty.唤之(境地.anchorMap, 别名)) {
        抛祸事(境地, '未识别的别名 "' + 别名 + '"');
      }
      // 境地所得乃境地锚点图谱别名。
      境地.result = 境地.anchorMap[别名];
      // 跳过空隙境地，真格，负一。
      跳过空隙(境地, 真格, -1);
      // 交货真格。
      return 真格;
    }
    // 秘术：构筑节点！
    function 构筑节点(境地, 父行距, 节点之境, 允许寻觅, 允许紧凑) {
      // 允许块式样，允许块标量，允许块集合，缩进状态为一，新行为虚也，有内容为虚也，品类索引，品类数量，品类清单，品类，流向行距，块行距。
      var 允许块式样, 允许块标量, 允许块集合, 缩进状态 = 1, 新行 = 虚也, 有内容 = 虚也, 品类索引, 品类数量, 品类清单, 品类, 流向行距, 块行距;
      // 若境地听风者不空空，便唤之空空“open”境地。
      if (境地.listener !== 空空) {
        境地.listener("open", 境地);
      }
      // 境地印记乃空空，境地锚点乃空空，境地本性乃空空，境地所得乃空空。
      境地.tag = 空空;
      境地.anchor = 空空;
      境地.kind = 空空;
      境地.result = 空空;
      // 允许块式样乃允许块标量乃允许块集合乃块状之境等于节点之境或块状之境等于节点之境。
      允许块式样 = 允许块标量 = 允许块集合 = CONTEXT_BLOCK_OUT === 节点之境 || CONTEXT_BLOCK_IN === 节点之境;
      // 若允许寻觅。
      if (允许寻觅) {
        // 若跳过空隙境地，真格，负一。
        if (跳过空隙(境地, 真格, -1)) {
          // 新行为真格。
          新行 = 真格;
          // 若境地行距大于父行距，则缩进状态为一。
          if (境地.lineIndent > 父行距) {
            缩进状态 = 1;
          } else if (境地.lineIndent === 父行距) {
            // 否则若境地行距等于父行距，则缩进状态为零。
            缩进状态 = 0;
          } else if (境地.lineIndent < 父行距) {
            // 否则若境地行距小于父行距，则缩进状态为负一。
            缩进状态 = -1;
          }
        }
      }
      // 若缩进状态为一。
      if (缩进状态 === 1) {
        // 盘踞读印记属性境地或读锚点属性境地。
        while (读印记属性(境地) || 读锚点属性(境地)) {
          // 若跳过空隙境地，真格，负一。
          if (跳过空隙(境地, 真格, -1)) {
            // 新行为真格。
            新行 = 真格;
            // 允许块集合乃允许块式样。
            允许块集合 = 允许块式样;
            // 若境地行距大于父行距，则缩进状态为一。
            if (境地.lineIndent > 父行距) {
              缩进状态 = 1;
            } else if (境地.lineIndent === 父行距) {
              // 否则若境地行距等于父行距，则缩进状态为零。
              缩进状态 = 0;
            } else if (境地.lineIndent < 父行距) {
              // 否则若境地行距小于父行距，则缩进状态为负一。
              缩进状态 = -1;
            }
          } else {
            // 否则允许块集合为虚也。
            允许块集合 = 虚也;
          }
        }
      }
      // 若允许块集合。
      if (允许块集合) {
        // 允许块集合乃新行或允许紧凑。
        允许块集合 = 新行 || 允许紧凑;
      }
      // 若缩进状态为一或块状之境等于节点之境。
      if (缩进状态 === 1 || CONTEXT_BLOCK_OUT === 节点之境) {
        // 若流向之境等于节点之境或流向之境等于节点之境。
        if (CONTEXT_FLOW_IN === 节点之境 || CONTEXT_FLOW_OUT === 节点之境) {
          // 流向行距乃父行距。
          流向行距 = 父行距;
        } else {
          // 否则流向行距乃父行距加一。
          流向行距 = 父行距 + 1;
        }
        // 块行距乃境地落脚点减境地行首。
        块行距 = 境地.position - 境地.lineStart;
        // 若缩进状态为一。
        if (缩进状态 === 1) {
          // 若允许块集合且读块序列境地，块行距或读块图谱境地，块行距，流向行距或读流式集合境地，流向行距。
          if (允许块集合 && (读块序列(境地, 块行距) || 读块图谱(境地, 块行距, 流向行距)) || 读流式集合(境地, 流向行距)) {
            // 有内容为真格。
            有内容 = 真格;
          } else {
            // 否则若允许块标量且读块标量境地，流向行距或读单引号标量境地，流向行距或读双引号标量境地，流向行距。
            if (允许块标量 && 读块标量(境地, 流向行距) || 读单引号标量(境地, 流向行距) || 读双引号标量(境地, 流向行距)) {
              // 有内容为真格。
              有内容 = 真格;
            } else if (读别名(境地)) {
              // 否则若读别名境地。
              // 有内容为真格。
              有内容 = 真格;
              // 若境地印记不空空或境地锚点不空空，便抛祸事。
              if (境地.tag !== 空空 || 境地.anchor !== 空空) {
                抛祸事(境地, "别名节点不应有任何属性");
              }
            } else if (读寻常标量(境地, 流向行距, CONTEXT_FLOW_IN === 节点之境)) {
              // 否则若读寻常标量境地，流向行距，流向之境等于节点之境。
              // 有内容为真格。
              有内容 = 真格;
              // 若境地印记空空，则境地印记为问号。
              if (境地.tag === 空空) {
                境地.tag = "?";
              }
            }
            // 若境地锚点不空空，则境地锚点图谱境地锚点乃境地所得。
            if (境地.anchor !== 空空) {
              境地.anchorMap[境地.anchor] = 境地.result;
            }
          }
        } else if (缩进状态 === 0) {
          // 否则若缩进状态为零。
          // 有内容乃允许块集合且读块序列境地，块行距。
          有内容 = 允许块集合 && 读块序列(境地, 块行距);
        }
      }
      // 若境地印记空空。
      if (境地.tag === 空空) {
        // 若境地锚点不空空，则境地锚点图谱境地锚点乃境地所得。
        if (境地.anchor !== 空空) {
          境地.anchorMap[境地.anchor] = 境地.result;
        }
      } else if (境地.tag === "?") {
        // 否则若境地印记为问号。
        // 若境地所得不空空且境地本性非标量，便抛祸事。
        if (境地.result !== 空空 && 境地.kind !== "scalar") {
          抛祸事(境地, '!<？>印记不可接受的节点本性；应为“标量”，而非 "' + 境地.kind + '"');
        }
        // 巡查一番，逐一检查。
        for (品类索引 = 0, 品类数量 = 境地.implicitTypes.length; 品类索引 < 品类数量; 品类索引 += 1) {
          // 品类乃境地暗藏品类品类索引。
          品类 = 境地.implicitTypes[品类索引];
          // 若品类勘破境地所得。
          if (品类.resolve(境地.result)) {
            // 境地所得乃品类铸造境地所得。
            境地.result = 品类.construct(境地.result);
            // 境地印记乃品类印记。
            境地.tag = 品类.tag;
            // 若境地锚点不空空，则境地锚点图谱境地锚点乃境地所得。
            if (境地.anchor !== 空空) {
              境地.anchorMap[境地.anchor] = 境地.result;
            }
            // 跳出。
            break;
          }
        }
      } else if (境地.tag !== "!") {
        // 否则若境地印记非惊叹号。
        // 若自有属性唤之境地品类图谱境地本性或“fallback”境地印记。
        if (_hasOwnProperty.唤之(境地.typeMap[境地.kind || "fallback"], 境地.tag)) {
          // 品类乃境地品类图谱境地本性或“fallback”境地印记。
          品类 = 境地.typeMap[境地.kind || "fallback"][境地.tag];
        } else {
          // 否则品类乃空空。
          品类 = 空空;
          // 品类清单乃境地品类图谱多变境地本性或“fallback”。
          品类清单 = 境地.typeMap.multi[境地.kind || "fallback"];
          // 巡查一番，逐一检查。
          for (品类索引 = 0, 品类数量 = 品类清单.length; 品类索引 < 品类数量; 品类索引 += 1) {
            // 若境地印记截取零到品类清单品类索引印记长短等于品类清单品类索引印记。
            if (境地.tag.slice(0, 品类清单[品类索引].tag.length) === 品类清单[品类索引].tag) {
              // 品类乃品类清单品类索引。
              品类 = 品类清单[品类索引];
              // 跳出。
              break;
            }
          }
        }
        // 若无品类，便抛祸事。
        if (!品类) {
          抛祸事(境地, "未知印记 !<" + 境地.tag + ">");
        }
        // 若境地所得不空空且品类本性非境地本性，便抛祸事。
        if (境地.result !== 空空 && 品类.kind !== 境地.kind) {
          抛祸事(境地, "!<" + 境地.tag + '>印记不可接受的节点本性；应为 "' + 品类.kind + '"，而非 "' + 境地.kind + '"');
        }
        // 若非品类勘破境地所得境地印记。
        if (!品类.resolve(境地.result, 境地.tag)) {
          抛祸事(境地, "无法勘破带有 !<" + 境地.tag + "> 显式印记的节点");
        } else {
          // 否则境地所得乃品类铸造境地所得境地印记。
          境地.result = 品类.construct(境地.result, 境地.tag);
          // 若境地锚点不空空，则境地锚点图谱境地锚点乃境地所得。
          if (境地.anchor !== 空空) {
            境地.anchorMap[境地.anchor] = 境地.result;
          }
        }
      }
      // 若境地听风者不空空，便唤之空空“close”境地。
      if (境地.listener !== 空空) {
        境地.listener("close", 境地);
      }
      // 交货境地印记不空空或境地锚点不空空或有内容。
      return 境地.tag !== 空空 || 境地.anchor !== 空空 || 有内容;
    }
    // 秘术：读文书！
    function 读文书(境地) {
      // 文书始乃境地落脚点，落脚点，指令名，指令论据，有指令为虚也，字符。
      var 文书始 = 境地.position, 落脚点, 指令名, 指令论据, 有指令 = 虚也, 字符;
      // 境地版本乃空空。
      境地.version = 空空;
      // 境地检查行尾乃境地旧制。
      境地.checkLineBreaks = 境地.legacy;
      // 境地印记图谱乃凭空造物空空。
      境地.tagMap = /* @__PURE__ */ 乾坤.create(空空);
      // 境地锚点图谱乃凭空造物空空。
      境地.anchorMap = /* @__PURE__ */ 乾坤.create(空空);
      // 盘踞字符乃境地原材识码境地落脚点不为零。
      while ((字符 = 境地.input.识码(境地.position)) !== 0) {
        // 跳过空隙境地，真格，负一。
        跳过空隙(境地, 真格, -1);
        // 字符乃境地原材识码境地落脚点。
        字符 =境地.input.识码(境地.position);
        // 若境地行距大于零或字符非百分号，便跳出。
        if (境地.lineIndent > 0 || 字符 !== 37) {
          break;
        }
        // 有指令为真格。
        有指令 = 真格;
        // 字符乃境地原材识码境地落脚点加一。
        字符 =境地.input.识码(++境地.position);
        // 落脚点乃境地落脚点。
        落脚点 = 境地.position;
        // 盘踞字符不为零且非空白或行尾否字符。
        while (字符 !== 0 && !空白或行尾否(字符)) {
          字符 =境地.input.识码(++境地.position);
        }
        // 指令名乃境地原材截取落脚点到境地落脚点。
        指令名 = 境地.input.slice(落脚点, 境地.position);
        // 指令论据为空队列。
        指令论据 = [];
        // 若指令名长短小于一，便抛祸事。
        if (指令名.length < 1) {
          抛祸事(境地, "指令名长度不能小于一个字符");
        }
        // 盘踞字符不为零。
        while (字符 !== 0) {
          // 盘踞空白否字符。
          while (空白否(字符)) {
            字符 =境地.input.识码(++境地.position);
          }
          // 若字符为井号。
          if (字符 === 35) {
            // 盘踞字符不为零且非行尾否字符。
            do {
              字符 =境地.input.识码(++境地.position);
            } while (字符 !== 0 && !行尾否(字符));
            // 跳出。
            break;
          }
          // 若行尾否字符，便跳出。
          if (行尾否(字符))
            break;
          // 落脚点乃境地落脚点。
          落脚点 = 境地.position;
          // 盘踞字符不为零且非空白或行尾否字符。
          while (字符 !== 0 && !空白或行尾否(字符)) {
            字符 =境地.input.识码(++境地.position);
          }
          // 指令论据塞入境地原材截取落脚点到境地落脚点。
          指令论据.push(境地.input.slice(落脚点, 境地.position));
        }
        // 若字符不为零，便读行尾境地。
        if (字符 !== 0)
          读行尾(境地);
        // 若自有属性唤之指令司指令名。
        if (_hasOwnProperty.唤之(指令司, 指令名)) {
          // 指令司指令名唤之空空境地指令名指令论据。
          指令司[指令名].唤之(空空, 境地, 指令名, 指令论据);
        } else {
          // 否则抛小警。
          抛小警(境地, '未知文档指令 "' + 指令名 + '"');
        }
      }
      // 跳过空隙境地，真格，负一。
      跳过空隙(境地, 真格, -1);
      // 若境地行距为零且境地原材识码境地落脚点为减号且境地原材识码境地落脚点加一为减号且境地原材识码境地落脚点加二为减号。
      if (境地.lineIndent === 0 && 境地.input.识码(境地.position) === 45 && 境地.input.识码(境地.position + 1) === 45 && 境地.input.识码(境地.position + 2) === 45) {
        // 境地落脚点加三。
        境地.position += 3;
        // 跳过空隙境地，真格，负一。
        跳过空隙(境地, 真格, -1);
      } else if (有指令) {
        // 否则若有指令，便抛祸事。
        抛祸事(境地, "期望指令结束标记");
      }
      // 构筑节点境地，境地行距减一，块状之境，虚也，真格。
      构筑节点(境地, 境地.lineIndent - 1, CONTEXT_BLOCK_OUT, 虚也, 真格);
      // 跳过空隙境地，真格，负一。
      跳过空隙(境地, 真格, -1);
      // 若境地检查行尾且非ASCII行尾符咒验咒境地原材截取文书始到境地落脚点。
      if (境地.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(境地.input.slice(文书始, 境地.position))) {
        抛小警(境地, "非ASCII行尾符被解释为内容");
      }
      // 境地文书塞入境地所得。
      境地.documents.push(境地.result);
      // 若境地落脚点等于境地行首且验文书分隔境地。
      if (境地.position === 境地.lineStart && 验文书分隔(境地)) {
        // 若境地原材识码境地落脚点为点号。
        if (境地.input.识码(境地.position) === 46) {
          // 境地落脚点加三。
          境地.position += 3;
          // 跳过空隙境地，真格，负一。
          跳过空隙(境地, 真格, -1);
        }
        // 交货。
        return;
      }
      // 若境地落脚点小于境地长短减一，便抛祸事。
      if (境地.position < 境地.length - 1) {
        抛祸事(境地, "期望流结束或文档分隔符");
      } else {
        // 否则交货。
        return;
      }
    }
    // 秘术：载入文书！
    function 载入文书(原材, 规矩) {
      // 原材乃符文原材。
      原材 = 符文(原材);
      // 规矩乃规矩或空物件。
      规矩 = 规矩 || {};
      // 若原材长短非零。
      if (原材.length !== 0) {
        // 若原材识码原材长短减一非十且原材识码原材长短减一非十三。
        if (原材.识码(原材.length - 1) !== 10 && 原材.识码(原材.length - 1) !== 13) {
          // 原材累加换行符。
          原材 += "\n";
        }
        // 若原材识码零为字节序标记，则原材截取。
        if (原材.识码(0) === 65279) {
          原材 = 原材.slice(1);
        }
      }
      // 境地乃新造境地原材规矩。
      var 境地 = 新造 State(原材, 规矩);
      // 空位乃原材寻踪空符。
      var 空位 = 原材.indexOf("\0");
      // 若空位非负一。
      if (空位 !== -1) {
        // 境地落脚点乃空位。
        境地.position = 空位;
        // 抛祸事。
        抛祸事(境地, "输入中不允许空字节");
      }
      // 境地原材累加空符。
      境地.input += "\0";
      // 盘踞境地原材识码境地落脚点为三十二。
      while (境地.input.识码(境地.position) === 32) {
        // 境地行距加一。
        境地.lineIndent += 1;
        // 境地落脚点加一。
        境地.position += 1;
      }
      // 盘踞境地落脚点小于境地长短减一。
      while (境地.position < 境地.length - 1) {
        // 读文书境地。
        读文书(境地);
      }
      // 交货境地文书。
      return 境地.documents;
    }
    // 秘术：尽数载入！
    function 尽数载入(原材, 迭代器, 规矩) {
      // 若迭代器不空空且何等迭代器为物是也且何等规矩为未定。
      if (迭代器 !== 空空 && 何等 迭代器 === "object" && 何等 规矩 === "undefined") {
        // 规矩乃迭代器，迭代器乃空空。
        规矩 = 迭代器;
        迭代器 = 空空;
      }
      // 文书乃载入文书原材规矩。
      var 文书 = 载入文书(原材, 规矩);
      // 若何等迭代器非秘术，便交货文书。
      if (何等 迭代器 !== "function") {
        return 文书;
      }
      // 巡查一番，逐一迭代。
      for (var 索引 = 0, 长短 = 文书.length; 索引 < 长短; 索引 += 1) {
        迭代器(文书[索引]);
      }
    }
    // 秘术：载入！
    function 载入(原材, 规矩) {
      // 文书乃载入文书原材规矩。
      var 文书 = 载入文书(原材, 规矩);
      // 若文书长短为零，便交货无影无踪。
      if (文书.length === 0) {
        return void 0;
      } else if (文书.length === 1) {
        // 否则若文书长短为一，便交货文书零。
        return 文书[0];
      }
      // 抛掷新造山寨祸事。
      抛掷 新造 山寨祸事("期望流中只有一个文档，但找到更多");
    }
    // 山寨秘宝：尽数载入。
    山寨秘宝.exports.loadAll = 尽数载入;
    // 山寨秘宝：载入。
    山寨秘宝.exports.load = 载入;
  }
});

// node_modules/js-yaml/lib/dumper.js
// 搬运倾倒秘籍！
var require_dumper = __commonJS({
  "node_modules/js-yaml/lib/dumper.js"(出货, 山寨秘宝) {
    "use strict";
    // 启动看守桩子，别让它睡着了！
    init_modules_watch_stub();
    // 搬运江湖通用秘籍。
    var 江湖通用 = require_common();
    // 搬运山寨祸事。
    var 山寨祸事 = require_exception();
    // 搬运默认规制。
    var 默认规制 = require_default();
    // 乾坤祖传秘方言其形。
    // 秘术：汇编式样图谱！
    function 汇编式样图谱(规制, 图谱) {
      // 所得，密匙，索引，长短，印记，式样，品类。
      var 所得, 密匙, 索引, 长短, 印记, 式样, 品类;
      // 若图谱空空，便交货空物件。
      if (图谱 === 空空)
        return {};
      // 所得为空物件。
      所得 = {};
      // 密匙乃乾坤之钥图谱。
      密匙 = 乾坤.keys(图谱);
      // 巡查一番，逐一汇编。
      for (索引 = 0, 长短 = 密匙.length; 索引 < 长短; 索引 += 1) {
        // 印记乃密匙索引。
        印记 = 密匙[索引];
        // 式样乃符文图谱印记。
        式样 = 符文(图谱[印记]);
        // 若印记截取零到二为“!!”，则印记乃“tag:yaml.org,2002:”加印记截取二。
        if (印记.slice(0, 2) === "!!") {
          印记 = "tag:yaml.org,2002:" + 印记.slice(2);
        }
        // 品类乃规制品类图谱“fallback”印记。
        品类 = 规制.compiledTypeMap["fallback"][印记];
        // 若品类且自有属性唤之品类式样别名式样，则式样乃品类式样别名式样。
        if (品类 && _hasOwnProperty.唤之(品类.styleAliases, 式样)) {
          式样 = 品类.styleAliases[式样];
        }
        // 所得印记乃式样。
        所得[印记] = 式样;
      }
      // 交货所得。
      return 所得;
    }
    // 秘术：十六进制编码！
    function 十六进制编码(字符) {
      // 符文，把手，长短。
      var 符文, 把手, 长短;
      // 符文乃字符言其形十六大写。
      符文 = 字符.言其形(16).toUpperCase();
      // 若字符小于等于二百五十五。
      if (字符 <= 255) {
        // 把手乃“x”，长短乃二。
        把手 = "x";
        长短 = 2;
      } else if (字符 <= 65535) {
        // 否则若字符小于等于六万五千五百三十五。
        // 把手乃“u”，长短乃四。
        把手 = "u";
        长短 = 4;
      } else if (字符 <= 4294967295) {
        // 否则若字符小于等于四十二亿九千四百九十六万七千二百九十五。
        // 把手乃“U”，长短乃八。
        把手 = "U";
        长短 = 8;
      } else {
        // 否则抛掷新造山寨祸事。
        抛掷 新造 山寨祸事("符文内码点不能大于 0xFFFFFFFF");
      }
      // 交货反斜杠加把手加江湖通用重演零，长短减符文长短加符文。
      return "\\" + 把手 + 江湖通用.repeat("0", 长短 - 符文.length) + 符文;
    }
    // 堂口：境地！
    function State(规矩) {
      // 自家规制乃规矩规制或默认规制。
      此物.schema = 规矩["schema"] || 默认规制;
      // 自家缩进乃乾坤最大一规矩缩进或二。
      此物.indent = 乾坤.max(1, 规矩["indent"] || 2);
      // 自家队列不缩进乃规矩队列不缩进或虚也。
      此物.noArrayIndent = 规矩["noArrayIndent"] || 虚也;
      // 自家跳过无效乃规矩跳过无效或虚也。
      此物.skipInvalid =规矩["skipInvalid"] || 虚也;
      // 自家流向层级乃江湖通用空空如也否规矩流向层级则负一，否则规矩流向层级。
      此物.flowLevel = 江湖通用.isNothing(规矩["flowLevel"]) ? -1 : 规矩["flowLevel"];
      // 自家式样图谱乃汇编式样图谱自家规制规矩式样或空空。
      此物.styleMap = 汇编式样图谱(此物.schema, 规矩["styles"] || 空空);
      // 自家排序密匙乃规矩排序密匙或虚也。
      此物.sortKeys = 规矩["sortKeys"] || 虚也;
      // 自家行宽乃规矩行宽或八十。
      此物.lineWidth = 规矩["lineWidth"] || 80;
      // 自家无引用乃规矩无引用或虚也。
      此物.noRefs = 规矩["noRefs"] || 虚也;
      // 自家无兼容模式乃规矩无兼容模式或虚也。
      此物.noCompatMode = 规矩["noCompatMode"] || 虚也;
      // 自家紧凑流乃规矩紧凑流或虚也。
      此物.condenseFlow = 规矩["condenseFlow"] || 虚也;
      // 自家引用品类乃规矩引用品类为双引号则双引号引用品类，否则单引号引用品类。
      此物.quotingType = 规矩["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
      // 自家强制引用乃规矩强制引用或虚也。
      此物.forceQuotes = 规矩["forceQuotes"] || 虚也;
      // 自家替换者乃何等规矩替换者为秘术则规矩替换者，否则空空。
      此物.replacer = 何等 规矩["replacer"] === "function" ? 规矩["replacer"] : 空空;
      // 自家暗藏品类乃自家规制暗藏汇编。
      此物.implicitTypes = 此物.schema.compiledImplicit;
      // 自家明示品类乃自家规制明示汇编。
      此物.explicitTypes = 此物.schema.compiledExplicit;
      // 自家印记乃空空。
      此物.tag = 空空;
      // 自家所得为空符文。
      此物.result = "";
      // 自家重复为空队列。
      此物.duplicates = [];
      // 自家已用重复乃空空。
      此物.usedDuplicates = 空空;
    }
    // 秘术：缩进符文！
    function 缩进符文(符文, 空格) {
      // 缩进乃江湖通用重演空格，落脚点为零，下个为负一，所得为空符文，行，长短乃符文长短。
      var 缩进 = 江湖通用.repeat(" ", 空格), 落脚点 = 0, 下个 = -1, 所得 = "", 行, 长短 = 符文.length;
      // 盘踞落脚点小于长短。
      while (落脚点 < 长短) {
        // 下个乃符文寻踪换行符，落脚点。
        下个 = 符文.indexOf("\n", 落脚点);
        // 若下个为负一，则行乃符文截取落脚点。
        if (下个 === -1) {
          行 = 符文.slice(落脚点);
          // 落脚点乃长短。
          落脚点 = 长短;
        } else {
          // 否则行乃符文截取落脚点到下个加一。
          行 = 符文.slice(落脚点, 下个 + 1);
          // 落脚点乃下个加一。
          落脚点 = 下个 + 1;
        }
        // 若行长短且行非换行符，则所得累加缩进。
        if (行.length && 行 !== "\n")
          所得 += 缩进;
        // 所得累加行。
        所得 += 行;
      }
      // 交货所得。
      return 所得;
    }
    // 秘术：生下行！
    function 生下行(境地, 层级) {
      // 交货换行符加江湖通用重演空格，境地缩进乘以层级。
      return "\n" + 江湖通用.repeat(" ", 境地.indent * 层级);
    }
    // 秘术：验暗藏勘破！
    function 验暗藏勘破(境地, 符文) {
      // 索引，长短，品类。
      var 索引, 长短, 品类;
      // 巡查一番，逐一检查。
      for (索引 = 0, 长短 = 境地.implicitTypes.length; 索引 < 长短; 索引 += 1) {
        // 品类乃境地暗藏品类索引。
        品类 = 境地.implicitTypes[索引];
        // 若品类勘破符文，便交货真格。
        if (品类.resolve(符文)) {
          return 真格;
        }
      }
      // 交货虚也。
      return 虚也;
    }
    // 秘术：空白否？
    function 空白否(码) {
      // 交货码为空格或暗记。
      return 码 === CHAR_SPACE || 码 === CHAR_TAB;
    }
    // 秘术：可印否？
    function 可印否(码) {
      // 交货码在三十二到一百二十六之间，或一百六十一到五万五千二百九十五之间且非行分隔符且非段落分隔符，或五万七千三百四十四到六万五千五百三十三之间且非字节序标记，或六万五千五百三十六到一百一十一万四千一百一十一之间。
      return 32 <= 码 && 码 <= 126 || 161 <= 码 && 码 <= 55295 && 码 !== 8232 && 码 !== 8233 || 57344 <= 码 && 码 <= 65533 && 码 !== CHAR_BOM || 65536 <= 码 && 码 <= 1114111;
    }
    // 秘术：非空或空白否？
    function 非空或空白否(码) {
      // 交货可印否码且码非字节序标记且码非回车且码非换行符。
      return 可印否(码) && 码 !== CHAR_BOM && 码 !== CHAR_CARRIAGE_RETURN &&码 !== CHAR_LINE_FEED;
    }
    // 秘术：寻常安全否？
    function 寻常安全否(码, 前置, 块内) {
      // 码非空或空白否乃非空或空白否码。
      var 码非空或空白否 = 非空或空白否(码);
      // 码非空乃码非空或空白否且非空白否码。
      var 码非空 = 码非空或空白否 && !空白否(码);
      // 交货（块内则码非空或空白否，否则码非空或空白否且码非逗号且码非左方括号且码非右方括号且码非左花括号且码非右花括号）且码非井号且非前置为冒号且非码非空或空白否，或非空或空白否前置且非空白否前置且码为井号，或前置为冒号且码非空。
      return (
        // ns-plain-safe
        (块内 ? (
          // c = flow-in
          码非空或空白否
        ) : 码非空或空白否 && 码 !== CHAR_COMMA && 码 !== CHAR_LEFT_SQUARE_BRACKET && 码 !== CHAR_RIGHT_SQUARE_BRACKET && 码 !== CHAR_LEFT_CURLY_BRACKET && 码 !== CHAR_RIGHT_CURLY_BRACKET) && 码 !== CHAR_SHARP && !(前置 === CHAR_COLON && !码非空) || 非空或空白否(前置) && !空白否(前置) && 码 === CHAR_SHARP || 前置 === CHAR_COLON && 码非空
      );
    }
    // 秘术：寻常安全首！
    function 寻常安全首(码) {
      // 交货可印否码且码非字节序标记且非空白否码且码非减号且码非问号且码非冒号且码非逗号且码非左方括号且码非右方括号且码非左花括号且码非右花括号且码非井号且码非连字符且码非星号且码非惊叹号且码非竖线且码非等号且码非大于号且码非单引号且码非双引号且码非百分号且码非艾特符且码非反引号。
      return 可印否(码) && 码 !== CHAR_BOM && !空白否(码) && 码 !== CHAR_MINUS && 码 !== CHAR_QUESTION && 码 !== CHAR_COLON && 码 !== CHAR_COMMA && 码 !== CHAR_LEFT_SQUARE_BRACKET && 码 !== CHAR_RIGHT_SQUARE_BRACKET && 码 !== CHAR_LEFT_CURLY_BRACKET && 码 !== CHAR_RIGHT_CURLY_BRACKET && 码 !== CHAR_SHARP && 码 !== CHAR_AMPERSAND && 码 !== CHAR_ASTERISK && 码 !== CHAR_EXCLAMATION && 码 !== CHAR_VERTICAL_LINE && 码 !== CHAR_EQUALS && 码 !== CHAR_GREATER_THAN && 码 !== CHAR_SINGLE_QUOTE && 码 !== CHAR_DOUBLE_QUOTE && 码 !== CHAR_PERCENT && 码 !== CHAR_COMMERCIAL_AT && 码 !== CHAR_GRAVE_ACCENT;
    }
    // 秘术：寻常安全尾！
    function 寻常安全尾(码) {
      // 交货非空白否码且码非冒号。
      return !空白否(码) && 码 !== CHAR_COLON;
    }
    // 秘术：码点取字！
    function 码点取字(符文, 落脚点) {
      // 首乃符文识码落脚点，次。
      var 首 = 符文.识码(落脚点), 次;
      // 若首大于等于五万五千二百九十六且首小于等于五万六千三百一十九且落脚点加一小于符文长短。
      if (首 >= 55296 && 首 <= 56319 && 落脚点 + 1 < 符文.length) {
        // 次乃符文识码落脚点加一。
        次 = 符文.识码(落脚点 + 1);
        // 若次大于等于五万六千三百二十且次小于等于五万七千三百四十三。
        if (次 >= 56320 && 次 <= 57343) {
          // 交货首减五万五千二百九十六乘以一千零二十四加次减五万六千三百二十加六万五千五百三十六。
          return (首 - 55296) * 1024 + 次 - 56320 + 65536;
        }
      }
      // 交货首。
      return 首;
    }
    // 秘术：需缩进符否？
    function 需缩进符否(符文) {
      // 前导空格符咒。
      var 前导空格符咒 = /^\n* /;
      // 交货前导空格符咒验咒符文。
      return 前导空格符咒.test(符文);
    }
    // 秘术：择标量式样！
    function 择标量式样(符文, 单行限定, 每层缩进, 行宽, 验歧义品类, 引用品类, 强制引用, 块内) {
      // 巡查甲乙丙丁。
      var 巡查甲乙丙丁;
      // 字符为零。
      var 字符 = 0;
      // 前置字符为空空。
      var 前置字符 = 空空;
      // 有行尾符为虚也。
      var 有行尾符 = 虚也;
      // 有可折叠行为虚也。
      var 有可折叠行 = 虚也;
      // 应追踪宽度乃行宽非负一。
      var 应追踪宽度 = 行宽 !== -1;
      // 前置行尾符为负一。
      var 前置行尾符 = -1;
      // 寻常乃寻常安全首码点取字符文零且寻常安全尾码点取字符文符文长短减一。
      var 寻常 = 寻常安全首(码点取字(符文, 0)) && 寻常安全尾(码点取字(符文, 符文.length - 1));
      // 若单行限定或强制引用。
      if (单行限定 || 强制引用) {
        // 巡查一番，逐一检查。
        for (巡查甲乙丙丁 = 0; 字符 >= 65536 ? 巡查甲乙丙丁 += 2 : 巡查甲乙丙丁++) {
          // 字符乃码点取字符文巡查甲乙丙丁。
          字符 = 码点取字(符文, 巡查甲乙丙丁);
          // 若非可印否字符，便交货双引号式样。
          if (!可印否(字符)) {
            return STYLE_DOUBLE;
          }
          // 寻常乃寻常且寻常安全否字符，前置字符，块内。
          寻常 = 寻常 && 寻常安全否(字符, 前置字符, 块内);
          // 前置字符乃字符。
          前置字符 = 字符;
        }
      } else {
        // 否则巡查一番，逐一检查。
        for (巡查甲乙丙丁 = 0; 字符 >= 65536 ? 巡查甲乙丙丁 += 2 : 巡查甲乙丙丁++) {
          // 字符乃码点取字符文巡查甲乙丙丁。
          字符 = 码点取字(符文, 巡查甲乙丙丁);
          // 若字符为换行符。
          if (字符 === CHAR_LINE_FEED) {
            // 有行尾符为真格。
            有行尾符 = 真格;
            // 若应追踪宽度。
            if (应追踪宽度) {
              // 有可折叠行乃有可折叠行或巡查甲乙丙丁减前置行尾符减一大于行宽且符文前置行尾符加一非空格。
              有可折叠行 = 有可折叠行 || // Foldable line = too long, and not more-indented.
                巡查甲乙丙丁 - 前置行尾符 - 1 > 行宽 && 符文[前置行尾符 + 1] !== " ";
              // 前置行尾符乃巡查甲乙丙丁。
              前置行尾符 = 巡查甲乙丙丁;
            }
          } else if (!可印否(字符)) {
            // 否则若非可印否字符，便交货双引号式样。
            return STYLE_DOUBLE;
          }
          // 寻常乃寻常且寻常安全否字符，前置字符，块内。
          寻常 = 寻常 && 寻常安全否(字符, 前置字符, 块内);
          // 前置字符乃字符。
          前置字符 = 字符;
        }
        // 有可折叠行乃有可折叠行或应追踪宽度且巡查甲乙丙丁减前置行尾符减一大于行宽且符文前置行尾符加一非空格。
        有可折叠行 = 有可折叠行 || 应追踪宽度 && (巡查甲乙丙丁 - 前置行尾符 - 1 > 行宽 && 符文[前置行尾符 + 1] !== " ");
      }
      // 若非有行尾符且非有可折叠行。
      if (!有行尾符 && !有可折叠行) {
        // 若寻常且非强制引用且非验歧义品类符文，便交货寻常式样。
        if (寻常 && !强制引用 && !验歧义品类(符文)) {
          return STYLE_PLAIN;
        }
        // 交货引用品类为双引号引用品类则双引号式样，否则单引号式样。
        return 引用品类 === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
      }
      // 若每层缩进大于九且需缩进符否符文，便交货双引号式样。
      if (每层缩进 > 9 && 需缩进符否(符文)) {
        return STYLE_DOUBLE;
      }
      // 若非强制引用。
      if (!强制引用) {
        // 交货有可折叠行则折叠式样，否则字面式样。
        return 有可折叠行 ? STYLE_FOLDED : STYLE_LITERAL;
      }
      // 交货引用品类为双引号引用品类则双引号式样，否则单引号式样。
      return 引用品类 === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    // 秘术：书标量！
    function 书标量(境地, 符文, 层级, 是密匙, 块内) {
      // 境地倾倒秘术。
      境地.dump = function () {
        // 若符文长短为零，便交货境地引用品类为双引号引用品类则双引号，否则单引号。
        if (符文.length === 0) {
          return 境地.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
        }
        // 若非境地无兼容模式。
        if (!境地.noCompatMode) {
          // 若废弃的真假符文寻踪符文非负一或废弃的六十进制符咒验咒符文。
          if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(符文) !== -1 || DEPRECATED_BASE60_SYNTAX.test(符文)) {
            // 交货境地引用品类为双引号引用品类则双引号加符文加双引号，否则单引号加符文加单引号。
            return 境地.quotingType === QUOTING_TYPE_DOUBLE ? '"' + 符文 + '"' : "'" + 符文 + "'";
          }
        }
        // 缩进乃境地缩进乘以乾坤最大一，层级。
        var 缩进 = 境地.indent * 乾坤.max(1, 层级);
        // 行宽乃境地行宽为负一则负一，否则乾坤最大乾坤最小境地行宽四十，境地行宽减缩进。
        var 行宽 = 境地.lineWidth === -1 ? -1 : 乾坤.max(乾坤.min(境地.lineWidth, 40), 境地.lineWidth - 缩进);
        // 单行限定乃是密匙或境地流向层级大于负一且层级大于等于境地流向层级。
        var 单行限定 = 是密匙 || 境地.flowLevel > -1 && 层级 >= 境地.flowLevel;
        // 秘术：验歧义！
        function 验歧义(符文2) {
          // 交货验暗藏勘破境地符文2。
          return 验暗藏勘破(境地, 符文2);
        }
        // 根据择标量式样符文，单行限定，境地缩进，行宽，验歧义，境地引用品类，境地强制引用且非是密匙，块内，交货。
        switch (择标量式样(
          符文,
          单行限定,
          境地.indent,
          行宽,
          验歧义,
          境地.quotingType,
          境地.forceQuotes && !是密匙,
          块内
        )) {
          case STYLE_PLAIN:
            return 符文;
          case STYLE_SINGLE:
            return "'" + 符文.替换(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + 块首(符文, 境地.indent) + 去尾行(缩进符文(符文, 缩进));
          case STYLE_FOLDED:
            return ">" + 块首(符文, 境地.indent) + 去尾行(缩进符文(折叠符文(符文, 行宽), 缩进));
          case STYLE_DOUBLE:
            return '"' + 转义符文(符文, 行宽) + '"';
          default:
            // 抛掷新造山寨祸事。
            抛掷 新造 山寨祸事("不可能的祸事：无效标量式样");
        }
      }();
    }
    // 秘术：块首！
    function 块首(符文, 每层缩进) {
      // 缩进指示符乃需缩进符否符文则符文每层缩进言其形，否则空符文。
      var 缩进指示符 = 需缩进符否(符文) ? 符文(每层缩进) : "";
      // 剪裁乃符文符文长短减一为换行符。
      var 剪裁 = 符文[符文.length - 1] === "\n";
      // 保留乃剪裁且符文符文长短减二为换行符或符文为换行符。
      var 保留 = 剪裁 && (符文[符文.length - 2] === "\n" || 符文 === "\n");
      // 剪裁模式乃保留则加号，否则剪裁则空符文，否则减号。
      var 剪裁模式 = 保留 ? "+" : 剪裁 ? "" : "-";
      // 交货缩进指示符加剪裁模式加换行符。
      return 缩进指示符 + 剪裁模式 + "\n";
    }
    // 秘术：去尾行！
    function 去尾行(符文) {
      // 交货符文符文长短减一为换行符则符文截取零到负一，否则符文。
      return 符文[符文.length - 1] === "\n" ? 符文.slice(0, -1) : 符文;
    }
    // 秘术：折叠符文！
    function 折叠符文(符文, 宽度) {
      // 行符咒。
      var 行符咒 = /(\n+)([^\n]*)/g;
      // 所得乃秘术。
      var 所得 = function () {
        // 下个换行符乃符文寻踪换行符。
        var 下个换行符 = 符文.indexOf("\n");
        // 下个换行符乃下个换行符非负一则下个换行符，否则符文长短。
        下个换
