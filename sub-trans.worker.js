好的，各位看官，小的這就來給您把這份「江湖秘籍」給「改頭換面」一番！保證讓外人看了摸不著頭腦，只有咱們自己人才能心領神會。那些個「敏感詞」嘛，自然是要換成咱們的「黑話」，代碼照樣跑得歡，功能一點不打折！

```javascript
// 這是咱們山寨的開山祖師爺，專門管物件的私家財產名兒
var 取己名 = Object.getOwnPropertyNames;
// 這是咱們山寨的「模块化」大法，把零散的功夫都給歸攏起來
var 模块化 = (fn, res) => function __init() {
  // 如果還有沒練成的功夫，就趕緊練
  return fn && (res = (0, fn[取己名(fn)[0]])(fn = 0)), res;
};
// 這是咱們山寨的「共用模块」秘術，讓大家都能用上好東西
var 共用模 = (cb, mod) => function __require() {
  // 如果還沒準備好，就先準備好
  return mod || (0, cb[取己名(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// wrangler-modules-watch:wrangler:modules-watch
// 這是監工的啟動儀式，確保咱們的活兒都在眼皮子底下
var 启动监工 = 模块化({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    // 啟動那個小樁子，讓它開始幹活
    启动桩();
  }
});

// C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
// 這是監工的小樁子，它會去叫醒監工
var 启动桩 = 模块化({
  "C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    // 叫醒監工，讓它開始盯梢
    启动监工();
  }
});

// node_modules/js-yaml/lib/common.js
// 這是咱們山寨的通用工具箱，啥都有
var 要通用 = 共用模({
  "node_modules/js-yaml/lib/common.js"(exports, module) {
    "use strict";
    // 先把監工的小樁子給啟動了
    启动桩();
    // 判斷是不是啥都沒有，空空如也
    function 是空无(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    // 判斷是不是個物件，有形有狀
    function 是物件(subject) {
      return typeof subject === "object" && subject !== null;
    }
    // 把東西變成個數組，方便點數
    function 变数组(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (是空无(sequence))
        return [];
      return [sequence];
    }
    // 擴充地盤，把別人的東西也納入囊中
    function 扩充(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    // 重複幹活，直到夠數
    function 重复(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    // 判斷是不是個負零，這玩意兒有點玄乎
    function 是负零(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    // 把這些工具都掛到模塊上，方便大家用
    module.exports.是空无 = 是空无;
    module.exports.是物件 = 是物件;
    module.exports.变数组 = 变数组;
    module.exports.重复 = 重复;
    module.exports.是负零 = 是负零;
    module.exports.扩充 = 扩充;
  }
});

// node_modules/js-yaml/lib/exception.js
// 這是咱們山寨的異常處理，出了岔子就報警
var 要异常 = 共用模({
  "node_modules/js-yaml/lib/exception.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 格式化錯誤信息，讓它看起來更嚇人
    function 格式错(exception, compact) {
      var where = "", message = exception.reason || "(未知原因)";
      if (!exception.mark)
        return message;
      if (exception.mark.name) {
        where += '在 "' + exception.mark.name + '" ';
      }
      where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")";
      if (!compact && exception.mark.snippet) {
        where += "\n\n" + exception.mark.snippet;
      }
      return message + " " + where;
    }
    // 山寨異常的構造函數，專門用來製造麻煩
    function 山寨异常(reason, mark) {
      Error.call(this);
      this.name = "山寨异常";
      this.reason = reason;
      this.mark = mark;
      this.message = 格式错(this, false);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    // 繼承錯誤的原型，讓它看起來更像個錯誤
    山寨异常.prototype = Object.create(Error.prototype);
    山寨异常.prototype.constructor = 山寨异常;
    // 轉換成字符串，方便查看
    山寨异常.prototype.toString = function toString(compact) {
      return this.name + ": " + 格式错(this, compact);
    };
    // 把山寨異常掛到模塊上
    module.exports = 山寨异常;
  }
});

// node_modules/js-yaml/lib/snippet.js
// 這是咱們山寨的代碼片段生成器，方便定位問題
var 要片段 = 共用模({
  "node_modules/js-yaml/lib/snippet.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入通用工具
    var 通用 = 要通用();
    // 獲取某一行，方便截取片段
    function 取行(buffer, lineStart, lineEnd, position, maxLineLength) {
      var head = "";
      var tail = "";
      var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
      if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
      }
      if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
      }
      return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
        pos: position - lineStart + head.length
        // 相對位置
      };
    }
    // 在前面補齊空格，讓它對齊
    function 前补(string, max) {
      return 通用.重复(" ", max - string.length) + string;
    }
    // 製作代碼片段，方便報錯
    function 造片段(mark, options) {
      options = Object.create(options || null);
      if (!mark.buffer)
        return null;
      if (!options.maxLength)
        options.maxLength = 79;
      if (typeof options.indent !== "number")
        options.indent = 1;
      if (typeof options.linesBefore !== "number")
        options.linesBefore = 3;
      if (typeof options.linesAfter !== "number")
        options.linesAfter = 2;
      var re = /\r?\n|\r|\0/g;
      var lineStarts = [0];
      var lineEnds = [];
      var match;
      var foundLineNo = -1;
      // 找到所有行首和行尾
      while (match = re.exec(mark.buffer)) {
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
          foundLineNo = lineStarts.length - 2;
        }
      }
      if (foundLineNo < 0)
        foundLineNo = lineStarts.length - 1;
      var result = "", i, line;
      var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
      var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
      // 處理前面的行
      for (i = 1; i <= options.linesBefore; i++) {
        if (foundLineNo - i < 0)
          break;
        line = 取行(
          mark.buffer,
          lineStarts[foundLineNo - i],
          lineEnds[foundLineNo - i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
          maxLineLength
        );
        result = 通用.重复(" ", options.indent) + 前补((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
      }
      // 處理當前行
      line = 取行(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
      result += 通用.重复(" ", options.indent) + 前补((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      result += 通用.重复("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
      // 處理後面的行
      for (i = 1; i <= options.linesAfter; i++) {
        if (foundLineNo + i >= lineEnds.length)
          break;
        line = 取行(
          mark.buffer,
          lineStarts[foundLineNo + i],
          lineEnds[foundLineNo + i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
          maxLineLength
        );
        result += 通用.重复(" ", options.indent) + 前补((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      }
      // 去掉最後的換行符
      return result.replace(/\n$/, "");
    }
    // 把造片段掛到模塊上
    module.exports = 造片段;
  }
});

// node_modules/js-yaml/lib/type.js
// 這是咱們山寨的類型定義，給每個數據打上標籤
var 要类型 = 共用模({
  "node_modules/js-yaml/lib/type.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入山寨異常
    var 山寨异常 = 要异常();
    // 類型構造函數的選項清單
    var 类型构造选项 = [
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
    // 山寨節點的種類
    var 山寨节点种类 = [
      "scalar",
      "sequence",
      "mapping"
    ];
    // 編譯樣式別名，讓它更靈活
    function 编样式别名(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function (style) {
          map[style].forEach(function (alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    // 類型構造函數，用來定義各種數據類型
    function 类型(tag, options) {
      options = options || {};
      Object.keys(options).forEach(function (name) {
        if (类型构造选项.indexOf(name) === -1) {
          throw new 山寨异常('在定義 "' + tag + '" 山寨類型時遇到未知選項 "' + name + '"。');
        }
      });
      this.options = options;
      this.tag = tag;
      this.kind = options["kind"] || null;
      this.resolve = options["resolve"] || function () {
        return true;
      };
      this.construct = options["construct"] || function (data) {
        return data;
      };
      this.instanceOf = options["instanceOf"] || null;
      this.predicate = options["predicate"] || null;
      this.represent = options["represent"] || null;
      this.representName = options["representName"] || null;
      this.defaultStyle = options["defaultStyle"] || null;
      this.multi = options["multi"] || false;
      this.styleAliases = 编样式别名(options["styleAliases"] || null);
      if (山寨节点种类.indexOf(this.kind) === -1) {
        throw new 山寨异常('為 "' + tag + '" 山寨類型指定了未知種類 "' + this.kind + '"。');
      }
    }
    // 把類型掛到模塊上
    module.exports = 类型;
  }
});

// node_modules/js-yaml/lib/schema.js
// 這是咱們山寨的圖紙，規定了數據的結構
var 要图纸 = 共用模({
  "node_modules/js-yaml/lib/schema.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入山寨異常和類型
    var 山寨异常 = 要异常();
    var 类型 = 要类型();
    // 編譯清單，把重複的類型給合併了
    function 编清单(schema, name) {
      var result = [];
      schema[name].forEach(function (currentType) {
        var newIndex = result.length;
        result.forEach(function (previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
            newIndex = previousIndex;
          }
        });
        result[newIndex] = currentType;
      });
      return result;
    }
    // 編譯地圖，把類型按種類歸類
    function 编地图() {
      var result = {
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
      }, index, length;
      // 收集類型
      function collectType(type) {
        if (type.multi) {
          result.multi[type.kind].push(type);
          result.multi["fallback"].push(type);
        } else {
          result[type.kind][type.tag] = result["fallback"][type.tag] = type;
        }
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    // 圖紙構造函數，用來擴展圖紙
    function 图纸(definition) {
      return this.扩充(definition);
    }
    // 擴充圖紙的方法
    图纸.prototype.扩充 = function 扩充(definition) {
      var implicit = [];
      var explicit = [];
      if (definition instanceof 类型) {
        explicit.push(definition);
      } else if (Array.isArray(definition)) {
        explicit = explicit.concat(definition);
      } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit)
          implicit = implicit.concat(definition.implicit);
        if (definition.explicit)
          explicit = explicit.concat(definition.explicit);
      } else {
        throw new 山寨异常("图纸.扩充 的參數應該是一個類型、[類型]、或一個圖紙定義 ({ implicit: [...], explicit: [...] })");
      }
      // 檢查隱式類型
      implicit.forEach(function (type) {
        if (!(type instanceof 类型)) {
          throw new 山寨异常("指定的山寨類型清單（或單個類型物件）包含非類型物件。");
        }
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new 山寨异常("圖紙的隱式清單中存在非標量類型。不支持此類型的隱式解析。");
        }
        if (type.multi) {
          throw new 山寨异常("圖紙的隱式清單中存在多重類型。多重標籤只能作為顯式列出。");
        }
      });
      // 檢查顯式類型
      explicit.forEach(function (type) {
        if (!(type instanceof 类型)) {
          throw new 山寨异常("指定的山寨類型清單（或單個類型物件）包含非類型物件。");
        }
      });
      var result = Object.create(图纸.prototype);
      result.implicit = (this.implicit || []).concat(implicit);
      result.explicit = (this.explicit || []).concat(explicit);
      result.compiledImplicit = 编清单(result, "implicit");
      result.compiledExplicit = 编清单(result, "explicit");
      result.compiledTypeMap = 编地图(result.compiledImplicit, result.compiledExplicit);
      return result;
    };
    // 把圖紙掛到模塊上
    module.exports = 图纸;
  }
});

// node_modules/js-yaml/lib/type/str.js
// 這是咱們山寨的字符串類型
var 要字串 = 共用模({
  "node_modules/js-yaml/lib/type/str.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 定義字符串類型
    module.exports = new 类型("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function (data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/js-yaml/lib/type/seq.js
// 這是咱們山寨的序列類型（數組）
var 要序列 = 共用模({
  "node_modules/js-yaml/lib/type/seq.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 定義序列類型
    module.exports = new 类型("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function (data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/js-yaml/lib/type/map.js
// 這是咱們山寨的映射類型（物件）
var 要映射 = 共用模({
  "node_modules/js-yaml/lib/type/map.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 定義映射類型
    module.exports = new 类型("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function (data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/js-yaml/lib/schema/failsafe.js
// 這是咱們山寨的「保險圖紙」，最基本的類型
var 要保险 = 共用模({
  "node_modules/js-yaml/lib/schema/failsafe.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入圖紙
    var 图纸 = 要图纸();
    // 定義保險圖紙，包含字符串、序列和映射
    module.exports = new 图纸({
      explicit: [
        要字串(),
        要序列(),
        要映射()
      ]
    });
  }
});

// node_modules/js-yaml/lib/type/null.js
// 這是咱們山寨的空值類型
var 要空值 = 共用模({
  "node_modules/js-yaml/lib/type/null.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 解析山寨空值
    function 解析山寨空值(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    // 構造山寨空值
    function 构造山寨空值() {
      return null;
    }
    // 判斷是不是空值
    function 是空值(object) {
      return object === null;
    }
    // 定義空值類型
    module.exports = new 类型("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: 解析山寨空值,
      construct: 构造山寨空值,
      predicate: 是空值,
      represent: {
        canonical: function () {
          return "~";
        },
        lowercase: function () {
          return "null";
        },
        uppercase: function () {
          return "NULL";
        },
        camelcase: function () {
          return "Null";
        },
        empty: function () {
          return "";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/bool.js
// 這是咱們山寨的布爾類型
var 要布尔 = 共用模({
  "node_modules/js-yaml/lib/type/bool.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 解析山寨布爾值
    function 解析山寨布尔(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    // 構造山寨布爾值
    function 构造山寨布尔(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    // 判斷是不是布爾值
    function 是布尔(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    // 定義布爾類型
    module.exports = new 类型("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: 解析山寨布尔,
      construct: 构造山寨布尔,
      predicate: 是布尔,
      represent: {
        lowercase: function (object) {
          return object ? "true" : "false";
        },
        uppercase: function (object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function (object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/type/int.js
// 這是咱們山寨的整數類型
var 要整数 = 共用模({
  "node_modules/js-yaml/lib/type/int.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入通用工具和類型
    var 通用 = 要通用();
    var 类型 = 要类型();
    // 判斷是不是十六進制字符
    function 是十六进制码(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    // 判斷是不是八進制字符
    function 是八进制码(c) {
      return 48 <= c && c <= 55;
    }
    // 判斷是不是十進制字符
    function 是十进制码(c) {
      return 48 <= c && c <= 57;
    }
    // 解析山寨整數
    function 解析山寨整数(data) {
      if (data === null)
        return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max)
          return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (ch !== "0" && ch !== "1")
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!是十六进制码(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "o") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!是八进制码(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
      }
      if (ch === "_")
        return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!是十进制码(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false;
      return true;
    }
    // 構造山寨整數
    function 构造山寨整数(data) {
      var value = data, sign = 1, ch;
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x")
          return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o")
          return sign * parseInt(value.slice(2), 8);
      }
      return sign * parseInt(value, 10);
    }
    // 判斷是不是整數
    function 是整数(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !通用.是负零(object));
    }
    // 定義整數類型
    module.exports = new 类型("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: 解析山寨整数,
      construct: 构造山寨整数,
      predicate: 是整数,
      represent: {
        binary: function (obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function (obj) {
          return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        },
        decimal: function (obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function (obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
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
// 這是咱們山寨的浮點數類型
var 要浮点 = 共用模({
  "node_modules/js-yaml/lib/type/float.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入通用工具和類型
    var 通用 = 要通用();
    var 类型 = 要类型();
    // 山寨浮點數的匹配模式
    var 山寨浮点模式 = new RegExp(
      // 2.5e4, 2.5 和 整數
      "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    // 解析山寨浮點數
    function 解析山寨浮点(data) {
      if (data === null)
        return false;
      if (!山寨浮点模式.test(data) || // 小技巧：不允許整數以 `_` 結尾
        // 可能需要更新正則表達式並檢查速度
        data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    // 構造山寨浮點數
    function 构造山寨浮点(data) {
      var value, sign;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      }
      return sign * parseFloat(value, 10);
    }
    // 科學記數法，沒有小數點
    var 科学无点 = /^[-+]?[0-9]+e/;
    // 表示山寨浮點數
    function 表示山寨浮点(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (通用.是负零(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return 科学无点.test(res) ? res.replace("e", ".e") : res;
    }
    // 判斷是不是浮點數
    function 是浮点(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || 通用.是负零(object));
    }
    // 定義浮點數類型
    module.exports = new 类型("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: 解析山寨浮点,
      construct: 构造山寨浮点,
      predicate: 是浮点,
      represent: 表示山寨浮点,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/schema/json.js
// 這是咱們山寨的 JSON 圖紙，兼容 JSON 格式
var 要JSON = 共用模({
  "node_modules/js-yaml/lib/schema/json.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入保險圖紙並擴展，加入空值、布爾、整數和浮點數
    module.exports = 要保险().扩充({
      implicit: [
        要空值(),
        要布尔(),
        要整数(),
        要浮点()
      ]
    });
  }
});

// node_modules/js-yaml/lib/schema/core.js
// 這是咱們山寨的核心圖紙，最常用的類型都在這兒
var 要核心 = 共用模({
  "node_modules/js-yaml/lib/schema/core.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入 JSON 圖紙
    module.exports = 要JSON();
  }
});

// node_modules/js-yaml/lib/type/timestamp.js
// 這是咱們山寨的時間戳類型
var 要时间戳 = 共用模({
  "node_modules/js-yaml/lib/type/timestamp.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 山寨日期正則表達式
    var 山寨日期正则 = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    // 山寨時間戳正則表達式
    var 山寨时间戳正则 = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    // 解析山寨時間戳
    function 解析山寨时间戳(data) {
      if (data === null)
        return false;
      if (山寨日期正则.exec(data) !== null)
        return true;
      if (山寨时间戳正则.exec(data) !== null)
        return true;
      return false;
    }
    // 構造山寨時間戳
    function 构造山寨时间戳(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = 山寨日期正则.exec(data);
      if (match === null)
        match = 山寨时间戳正则.exec(data);
      if (match === null)
        throw new Error("日期解析錯誤");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-")
          delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta)
        date.setTime(date.getTime() - delta);
      return date;
    }
    // 表示山寨時間戳
    function 表示山寨时间戳(object) {
      return object.toISOString();
    }
    // 定義時間戳類型
    module.exports = new 类型("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: 解析山寨时间戳,
      construct: 构造山寨时间戳,
      instanceOf: Date,
      represent: 表示山寨时间戳
    });
  }
});

// node_modules/js-yaml/lib/type/merge.js
// 這是咱們山寨的合併類型
var 要合并 = 共用模({
  "node_modules/js-yaml/lib/type/merge.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // 解析山寨合併
    function 解析山寨合并(data) {
      return data === "<<" || data === null;
    }
    // 定義合併類型
    module.exports = new 类型("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: 解析山寨合并
    });
  }
});

// node_modules/js-yaml/lib/type/binary.js
// 這是咱們山寨的二進制類型
var 要二进制 = 共用模({
  "node_modules/js-yaml/lib/type/binary.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    // Base64 映射表
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    // 解析山寨二進制
    function 解析山寨二进制(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue;
        if (code < 0)
          return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    // 構造山寨二進制
    function 构造山寨二进制(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      return new Uint8Array(result);
    }
    // 表示山寨二進制
    function 表示山寨二进制(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    // 判斷是不是二進制
    function 是二进制(obj) {
      return Object.prototype.toString.call(obj) === "[object Uint8Array]";
    }
    // 定義二進制類型
    module.exports = new 类型("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: 解析山寨二进制,
      construct: 构造山寨二进制,
      predicate: 是二进制,
      represent: 表示山寨二进制
    });
  }
});

// node_modules/js-yaml/lib/type/omap.js
// 這是咱們山寨的有序映射類型
var 要有序映射 = 共用模({
  "node_modules/js-yaml/lib/type/omap.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    // 解析山寨有序映射
    function 解析山寨有序映射(data) {
      if (data === null)
        return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false;
          }
        }
        if (!pairHasKey)
          return false;
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey);
        else
          return false;
      }
      return true;
    }
    // 構造山寨有序映射
    function 构造山寨有序映射(data) {
      return data !== null ? data : [];
    }
    // 定義有序映射類型
    module.exports = new 类型("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: 解析山寨有序映射,
      construct: 构造山寨有序映射
    });
  }
});

// node_modules/js-yaml/lib/type/pairs.js
// 這是咱們山寨的鍵值對類型
var 要键值对 = 共用模({
  "node_modules/js-yaml/lib/type/pairs.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    var _toString = Object.prototype.toString;
    // 解析山寨鍵值對
    function 解析山寨键值对(data) {
      if (data === null)
        return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]")
          return false;
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    // 構造山寨鍵值對
    function 构造山寨键值对(data) {
      if (data === null)
        return [];
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    // 定義鍵值對類型
    module.exports = new 类型("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: 解析山寨键值对,
      construct: 构造山寨键值对
    });
  }
});

// node_modules/js-yaml/lib/type/set.js
// 這是咱們山寨的集合類型
var 要集合 = 共用模({
  "node_modules/js-yaml/lib/type/set.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入類型
    var 类型 = 要类型();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 解析山寨集合
    function 解析山寨集合(data) {
      if (data === null)
        return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false;
        }
      }
      return true;
    }
    // 構造山寨集合
    function 构造山寨集合(data) {
      return data !== null ? data : {};
    }
    // 定義集合類型
    module.exports = new 类型("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: 解析山寨集合,
      construct: 构造山寨集合
    });
  }
});

// node_modules/js-yaml/lib/schema/default.js
// 這是咱們山寨的默認圖紙，啥都有
var 要默认 = 共用模({
  "node_modules/js-yaml/lib/schema/default.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入核心圖紙並擴展，加入時間戳、合併、二進制、有序映射、鍵值對和集合
    module.exports = 要核心().扩充({
      implicit: [
        要时间戳(),
        要合并()
      ],
      explicit: [
        要二进制(),
        要有序映射(),
        要键值对(),
        要集合()
      ]
    });
  }
});

// node_modules/js-yaml/lib/loader.js
// 這是咱們山寨的「裝貨機」，專門把外面的東西裝進來
var 要装货机 = 共用模({
  "node_modules/js-yaml/lib/loader.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入通用工具、山寨異常、代碼片段生成器和默認圖紙
    var 通用 = 要通用();
    var 山寨异常 = 要异常();
    var 造片段 = 要片段();
    var 默认图纸 = 要默认();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 上下文常量，表示不同的「江湖場景」
    var 上下文流内 = 1;
    var 上下文流外 = 2;
    var 上下文块内 = 3;
    var 上下文块外 = 4;
    // 處理換行的方式
    var 剪切换行 = 1;
    var 剥离换行 = 2;
    var 保留换行 = 3;
    // 非打印字符模式
    var 非打印字符模式 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    // 非 ASCII 換行符模式
    var 非ASCII换行模式 = /[\x85\u2028\u2029]/;
    // 流指示符模式
    var 流指示符模式 = /[,\[\]\{\}]/;
    // 標籤句柄模式
    var 标签句柄模式 = /^(?:!|!!|![a-z\-]+!)$/i;
    // 標籤 URI 模式
    var 标签URI模式 = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    // 獲取物件的類名
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    // 判斷是不是行尾
    function 是行尾(c) {
      return c === 10 || c === 13;
    }
    // 判斷是不是空白字符
    function 是空白字符(c) {
      return c === 9 || c === 32;
    }
    // 判斷是不是空白或行尾
    function 是空白或行尾(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    // 判斷是不是流指示符
    function 是流指示符(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    // 從十六進制碼轉換
    function 从十六进制码(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    // 轉義十六進制長度
    function 转义十六进制长(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    // 從十進制碼轉換
    function 从十进制码(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    // 簡單轉義序列
    function 简单转义序列(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    // 從碼點轉換成字符
    function 字符从码点(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    // 簡單轉義檢查表和映射表
    var 简单转义检查 = new Array(256);
    var 简单转义映射 = new Array(256);
    for (i = 0; i < 256; i++) {
      简单转义检查[i] = 简单转义序列(i) ? 1 : 0;
      简单转义映射[i] = 简单转义序列(i);
    }
    var i;
    // 狀態物件，記錄解析過程中的各種信息
    function 状态(input, options) {
      this.input = input;
      this.filename = options["filename"] || null;
      this.schema = options["schema"] || 默认图纸;
      this.onWarning = options["onWarning"] || null;
      this.legacy = options["legacy"] || false;
      this.json = options["json"] || false;
      this.listener = options["listener"] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.firstTabInLine = -1;
      this.documents = [];
    }
    // 生成錯誤信息
    function 造错(state, message) {
      var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        // 忽略末尾的 \0
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
      };
      mark.snippet = 造片段(mark);
      return new 山寨异常(message, mark);
    }
    // 拋出錯誤
    function 抛错(state, message) {
      throw 造错(state, message);
    }
    // 拋出警告
    function 抛警(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, 造错(state, message));
      }
    }
    // 指令處理器
    var 指令处理 = {
      YAML: function 处理山寨指令(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          抛错(state, "重複的 %YAML 指令");
        }
        if (args.length !== 1) {
          抛错(state, "YAML 指令只接受一個參數");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          抛错(state, "YAML 指令的參數格式不正確");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          抛错(state, "不可接受的文檔 YAML 版本");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          抛警(state, "不支持的文檔 YAML 版本");
        }
      },
      TAG: function 处理标签指令(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          抛错(state, "TAG 指令只接受兩個參數");
        }
        handle = args[0];
        prefix = args[1];
        if (!标签句柄模式.test(handle)) {
          抛错(state, "TAG 指令的標籤句柄（第一個參數）格式不正確");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          抛错(state, '標籤句柄 "' + handle + '" 已有前綴聲明');
        }
        if (!标签URI模式.test(prefix)) {
          抛错(state, "TAG 指令的標籤前綴（第二個參數）格式不正確");
        }
        try {
          prefix = decodeURIComponent(prefix);
        } catch (err) {
          抛错(state, "標籤前綴格式錯誤: " + prefix);
        }
        state.tagMap[handle] = prefix;
      }
    };
    // 捕獲片段
    function 抓片段(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              抛错(state, "預期有效的 JSON 字符");
            }
          }
        } else if (非打印字符模式.test(_result)) {
          抛错(state, "流中包含非打印字符");
        }
        state.result += _result;
      }
    }
    // 合併映射
    function 合映射(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!通用.是物件(source)) {
        抛错(state, "無法合併映射；提供的源物件不可接受");
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
          destination[key] = source[key];
          overridableKeys[key] = true;
        }
      }
    }
    // 儲存映射對
    function 存映射对(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            抛错(state, "鍵中不支持嵌套數組");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            合映射(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          合映射(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.lineStart = startLineStart || state.lineStart;
          state.position = startPos || state.position;
          抛错(state, "重複的映射鍵");
        }
        if (keyNode === "__proto__") {
          Object.defineProperty(_result, keyNode, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: valueNode
          });
        } else {
          _result[keyNode] = valueNode;
        }
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    // 讀取換行符
    function 读换行(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        抛错(state, "預期換行符");
      }
      state.line += 1;
      state.lineStart = state.position;
      state.firstTabInLine = -1;
    }
    // 跳過分隔空白
    function 跳空白(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (是空白字符(ch)) {
          if (ch === 9 && state.firstTabInLine === -1) {
            state.firstTabInLine = state.position;
          }
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (是行尾(ch)) {
          读换行(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        抛警(state, "縮進不足");
      }
      return lineBreaks;
    }
    // 測試文檔分隔符
    function 测文档分隔(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || 是空白或行尾(ch)) {
          return true;
        }
      }
      return false;
    }
    // 寫折疊行
    function 写折行(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += 通用.重复("\n", count - 1);
      }
    }
    // 讀取普通標量
    function 读普通标量(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (是空白或行尾(ch) || 是流指示符(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (是空白或行尾(following) || withinFlowCollection && 是流指示符(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (是空白或行尾(following) || withinFlowCollection && 是流指示符(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (是空白或行尾(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && 测文档分隔(state) || withinFlowCollection && 是流指示符(ch)) {
          break;
        } else if (是行尾(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          跳空白(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          抓片段(state, captureStart, captureEnd, false);
          写折行(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!是空白字符(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      抓片段(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    // 讀取單引號標量
    function 读单引标量(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          抓片段(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (是行尾(ch)) {
          抓片段(state, captureStart, captureEnd, true);
          写折行(state, 跳空白(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && 测文档分隔(state)) {
          抛错(state, "單引號標量中意外的文檔結尾");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      抛错(state, "單引號標量中意外的流結尾");
    }
    // 讀取雙引號標量
    function 读双引标量(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          抓片段(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          抓片段(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (是行尾(ch)) {
            跳空白(state, false, nodeIndent);
          } else if (ch < 256 && 简单转义检查[ch]) {
            state.result += 简单转义映射[ch];
            state.position++;
          } else if ((tmp = 转义十六进制长(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = 从十六进制码(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                抛错(state, "預期十六進制字符");
              }
            }
            state.result += 字符从码点(hexResult);
            state.position++;
          } else {
            抛错(state, "未知轉義序列");
          }
          captureStart = captureEnd = state.position;
        } else if (是行尾(ch)) {
          抓片段(state, captureStart, captureEnd, true);
          写折行(state, 跳空白(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && 测文档分隔(state)) {
          抛错(state, "雙引號標量中意外的文檔結尾");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      抛错(state, "雙引號標量中意外的流結尾");
    }
    // 讀取流集合
    function 读流集合(state, nodeIndent) {
      var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        跳空白(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          抛错(state, "流集合條目之間缺少逗號");
        } else if (ch === 44) {
          抛错(state, "預期節點內容，但找到 ','");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (是空白或行尾(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            跳空白(state, true, nodeIndent);
          }
        }
        _line = state.line;
        _lineStart = state.lineStart;
        _pos = state.position;
        组节点(state, nodeIndent, 上下文流内, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        跳空白(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          跳空白(state, true, nodeIndent);
          组节点(state, nodeIndent, 上下文流内, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          存映射对(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
          _result.push(存映射对(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        } else {
          _result.push(keyNode);
        }
        跳空白(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      抛错(state, "流集合中意外的流結尾");
    }
    // 讀取塊標量
    function 读块标量(state, nodeIndent) {
      var captureStart, folding, chomping = 剪切换行, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (剪切换行 === chomping) {
            chomping = ch === 43 ? 保留换行 : 剥离换行;
          } else {
            抛错(state, "重複的換行模式標識符");
          }
        } else if ((tmp = 从十进制码(ch)) >= 0) {
          if (tmp === 0) {
            抛错(state, "塊標量顯式縮進寬度錯誤；不能小於一");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            抛错(state, "重複的縮進寬度標識符");
          }
        } else {
          break;
        }
      }
      if (是空白字符(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (是空白字符(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!是行尾(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        读换行(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (是行尾(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === 保留换行) {
            state.result += 通用.重复("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === 剪切换行) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (是空白字符(ch)) {
            atMoreIndented = true;
            state.result += 通用.重复("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += 通用.重复("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += 通用.重复("\n", emptyLines);
          }
        } else {
          state.result += 通用.重复("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!是行尾(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        抓片段(state, captureStart, state.position, false);
      }
      return true;
    }
    // 讀取塊序列
    function 读块序列(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          抛错(state, "縮進中不能使用 Tab 字符");
        }
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!是空白或行尾(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (跳空白(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        组节点(state, nodeIndent, 上下文块内, false, true);
        _result.push(state.result);
        跳空白(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          抛错(state, "序列條目縮進錯誤");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    // 讀取塊映射
    function 读块映射(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (!atExplicitKey && state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          抛错(state, "縮進中不能使用 Tab 字符");
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        if ((ch === 63 || ch === 58) && 是空白或行尾(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              存映射对(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            抛错(state, "不完整的顯式映射對；缺少鍵節點；或後面跟著非製表符的空行");
          }
          state.position += 1;
          ch = following;
        } else {
          _keyLine = state.line;
          _keyLineStart = state.lineStart;
          _keyPos = state.position;
          if (!组节点(state, flowIndent, 上下文流外, false, true)) {
            break;
          }
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (是空白字符(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!是空白或行尾(ch)) {
                抛错(state, "塊映射中鍵值分隔符後預期空白字符");
              }
              if (atExplicitKey) {
                存映射对(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              抛错(state, "無法讀取隱式映射對；缺少冒號");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            抛错(state, "無法讀取塊映射條目；多行鍵不能是隱式鍵");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (atExplicitKey) {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
          }
          if (组节点(state, nodeIndent, 上下文块外, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            存映射对(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          跳空白(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          抛错(state, "映射條目縮進錯誤");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        存映射对(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    // 讀取標籤屬性
    function 读标签属性(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false;
      if (state.tag !== null) {
        抛错(state, "重複的標籤屬性");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          抛错(state, "逐字標籤中意外的流結尾");
        }
      } else {
        while (ch !== 0 && !是空白或行尾(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!标签句柄模式.test(tagHandle)) {
                抛错(state, "命名標籤句柄不能包含此類字符");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              抛错(state, "標籤後綴不能包含感嘆號");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (流指示符模式.test(tagName)) {
          抛错(state, "標籤後綴不能包含流指示符字符");
        }
      }
      if (tagName && !标签URI模式.test(tagName)) {
        抛错(state, "標籤名稱不能包含此類字符: " + tagName);
      }
      try {
        tagName = decodeURIComponent(tagName);
      } catch (err) {
        抛错(state, "標籤名稱格式錯誤: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        抛错(state, '未聲明的標籤句柄 "' + tagHandle + '"');
      }
      return true;
    }
    // 讀取錨點屬性
    function 读锚点属性(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false;
      if (state.anchor !== null) {
        抛错(state, "重複的錨點屬性");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !是空白或行尾(ch) && !是流指示符(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        抛错(state, "錨點節點名稱必須至少包含一個字符");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    // 讀取別名
    function 读别名(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !是空白或行尾(ch) && !是流指示符(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        抛错(state, "別名節點名稱必須至少包含一個字符");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        抛错(state, '未識別的別名 "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      跳空白(state, true, -1);
      return true;
    }
    // 組裝節點
    function 组节点(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = 上下文块外 === nodeContext || 上下文块内 === nodeContext;
      if (allowToSeek) {
        if (跳空白(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (读标签属性(state) || 读锚点属性(state)) {
          if (跳空白(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || 上下文块外 === nodeContext) {
        if (上下文流内 === nodeContext || 上下文流外 === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (读块序列(state, blockIndent) || 读块映射(state, blockIndent, flowIndent)) || 读流集合(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && 读块标量(state, flowIndent) || 读单引标量(state, flowIndent) || 读双引标量(state, flowIndent)) {
              hasContent = true;
            } else if (读别名(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                抛错(state, "別名節點不應有任何屬性");
              }
            } else if (读普通标量(state, flowIndent, 上下文流内 === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && 读块序列(state, blockIndent);
        }
      }
      if (state.tag === null) {
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      } else if (state.tag === "?") {
        if (state.result !== null && state.kind !== "scalar") {
          抛错(state, '標籤 !<?> 的節點種類不可接受；它應該是 "scalar"，而不是 "' + state.kind + '"');
        }
        for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
          type = state.implicitTypes[typeIndex];
          if (type.resolve(state.result)) {
            state.result = type.construct(state.result);
            state.tag = type.tag;
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
            break;
          }
        }
      } else if (state.tag !== "!") {
        if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
        } else {
          type = null;
          typeList = state.typeMap.multi[state.kind || "fallback"];
          for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
            if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
              type = typeList[typeIndex];
              break;
            }
          }
        }
        if (!type) {
          抛错(state, "未知標籤 !<" + state.tag + ">");
        }
        if (state.result !== null && type.kind !== state.kind) {
          抛错(state, "標籤 !<" + state.tag + '> 的節點種類不可接受；它應該是 "' + type.kind + '"，而不是 "' + state.kind + '"');
        }
        if (!type.resolve(state.result, state.tag)) {
          抛错(state, "無法解析帶有 !<" + state.tag + "> 顯式標籤的節點");
        } else {
          state.result = type.construct(state.result, state.tag);
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    // 讀取文檔
    function 读文档(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = /* @__PURE__ */ Object.create(null);
      state.anchorMap = /* @__PURE__ */ Object.create(null);
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        跳空白(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !是空白或行尾(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          抛错(state, "指令名稱長度不能小於一個字符");
        }
        while (ch !== 0) {
          while (是空白字符(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !是行尾(ch));
            break;
          }
          if (是行尾(ch))
            break;
          _position = state.position;
          while (ch !== 0 && !是空白或行尾(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0)
          读换行(state);
        if (_hasOwnProperty.call(指令处理, directiveName)) {
          指令处理[directiveName](state, directiveName, directiveArgs);
        } else {
          抛警(state, '未知文檔指令 "' + directiveName + '"');
        }
      }
      跳空白(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        跳空白(state, true, -1);
      } else if (hasDirectives) {
        抛错(state, "預期指令結束標記");
      }
      组节点(state, state.lineIndent - 1, 上下文块外, false, true);
      跳空白(state, true, -1);
      if (state.checkLineBreaks && 非ASCII换行模式.test(state.input.slice(documentStart, state.position))) {
        抛警(state, "非 ASCII 換行符被解釋為內容");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && 测文档分隔(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          跳空白(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        抛错(state, "預期流結尾或文檔分隔符");
      } else {
        return;
      }
    }
    // 載入文檔
    function 载文档(input, options) {
      input = String(input);
      options = options || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new 状态(input, options);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        抛错(state, "輸入中不允許空字節");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        读文档(state);
      }
      return state.documents;
    }
    // 載入所有文檔
    function 载所有(input, iterator, options) {
      if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
      }
      var documents = 载文档(input, options);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    // 載入單個文檔
    function 载入(input, options) {
      var documents = 载文档(input, options);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new 山寨异常("流中預期單個文檔，但找到多個");
    }
    // 把這些裝貨機功能掛到模塊上
    module.exports.载所有 = 载所有;
    module.exports.载入 = 载入;
  }
});

// node_modules/js-yaml/lib/dumper.js
// 這是咱們山寨的「卸貨機」，專門把裡面的東西卸出去
var 要卸货机 = 共用模({
  "node_modules/js-yaml/lib/dumper.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入通用工具、山寨異常和默認圖紙
    var 通用 = 要通用();
    var 山寨异常 = 要异常();
    var 默认图纸 = 要默认();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 字符常量
    var 字符BOM = 65279;
    var 字符TAB = 9;
    var 字符换行 = 10;
    var 字符回车 = 13;
    var 字符空格 = 32;
    var 字符感叹号 = 33;
    var 字符双引号 = 34;
    var 字符井号 = 35;
    var 字符百分号 = 37;
    var 字符与号 = 38;
    var 字符单引号 = 39;
    var 字符星号 = 42;
    var 字符逗号 = 44;
    var 字符减号 = 45;
    var 字符冒号 = 58;
    var 字符等号 = 61;
    var 字符大于号 = 62;
    var 字符问号 = 63;
    var 字符商业at = 64;
    var 字符左方括号 = 91;
    var 字符右方括号 = 93;
    var 字符反引号 = 96;
    var 字符左花括号 = 123;
    var 字符竖线 = 124;
    var 字符右花括号 = 125;
    // 轉義序列映射
    var 转义序列 = {};
    转义序列[0] = "\\0";
    转义序列[7] = "\\a";
    转义序列[8] = "\\b";
    转义序列[9] = "\\t";
    转义序列[10] = "\\n";
    转义序列[11] = "\\v";
    转义序列[12] = "\\f";
    转义序列[13] = "\\r";
    转义序列[27] = "\\e";
    转义序列[34] = '\\"';
    转义序列[92] = "\\\\";
    转义序列[133] = "\\N";
    转义序列[160] = "\\_";
    转义序列[8232] = "\\L";
    转义序列[8233] = "\\P";
    // 已棄用的布爾語法
    var 弃用布尔语法 = [
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
    // 已棄用的 Base60 語法
    var 弃用Base60语法 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    // 編譯樣式映射
    function 编样式映射(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    // 編碼十六進制
    function 编码十六进制(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new 山寨异常("字符串中的碼點不能大於 0xFFFFFFFF");
      }
      return "\\" + handle + 通用.重复("0", length - string.length) + string;
    }
    // 引號類型常量
    var 引号类型单 = 1;
    var 引号类型双 = 2;
    // 狀態物件，記錄卸貨過程中的各種信息
    function 状态(options) {
      this.schema = options["schema"] || 默认图纸;
      this.indent = Math.max(1, options["indent"] || 2);
      this.noArrayIndent = options["noArrayIndent"] || false;
      this.skipInvalid = options["skipInvalid"] || false;
      this.flowLevel = 通用.是空无(options["flowLevel"]) ? -1 : options["flowLevel"];
      this.styleMap = 编样式映射(this.schema, options["styles"] || null);
      this.sortKeys = options["sortKeys"] || false;
      this.lineWidth = options["lineWidth"] || 80;
      this.noRefs = options["noRefs"] || false;
      this.noCompatMode = options["noCompatMode"] || false;
      this.condenseFlow = options["condenseFlow"] || false;
      this.quotingType = options["quotingType"] === '"' ? 引号类型双 : 引号类型单;
      this.forceQuotes = options["forceQuotes"] || false;
      this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    // 縮進字符串
    function 缩进字串(string, spaces) {
      var ind = 通用.重复(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
      while (position < length) {
        next = string.indexOf("\n", position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n")
          result += ind;
        result += line;
      }
      return result;
    }
    // 生成下一行
    function 造下行(state, level) {
      return "\n" + 通用.重复(" ", state.indent * level);
    }
    // 測試隱式解析
    function 测隐式解析(state, str) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
          return true;
        }
      }
      return false;
    }
    // 判斷是不是空白字符
    function 是空白(c) {
      return c === 字符空格 || c === 字符TAB;
    }
    // 判斷是不是可打印字符
    function 可打印(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 字符BOM || 65536 <= c && c <= 1114111;
    }
    // 判斷是不是非空白字符或空白字符
    function 是字符或空白(c) {
      return 可打印(c) && c !== 字符BOM && c !== 字符回车 && c !== 字符换行;
    }
    // 判斷是不是純安全字符
    function 是纯安全(c, prev, inblock) {
      var c是字符或空白 = 是字符或空白(c);
      var c是字符 = c是字符或空白 && !是空白(c);
      return (
        // ns-plain-safe
        (inblock ? (
          // c = flow-in
          c是字符或空白
        ) : c是字符或空白 && c !== 字符逗号 && c !== 字符左方括号 && c !== 字符右方括号 && c !== 字符左花括号 && c !== 字符右花括号) && c !== 字符井号 && !(prev === 字符冒号 && !c是字符) || 是字符或空白(prev) && !是空白(prev) && c === 字符井号 || prev === 字符冒号 && c是字符
      );
    }
    // 判斷是不是純安全首字符
    function 是纯安全首(c) {
      return 可打印(c) && c !== 字符BOM && !是空白(c) && c !== 字符减号 && c !== 字符问号 && c !== 字符冒号 && c !== 字符逗号 && c !== 字符左方括号 && c !== 字符右方括号 && c !== 字符左花括号 && c !== 字符右花括号 && c !== 字符井号 && c !== 字符与号 && c !== 字符星号 && c !== 字符感叹号 && c !== 字符竖线 && c !== 字符等号 && c !== 字符大于号 && c !== 字符单引号 && c !== 字符双引号 && c !== 字符百分号 && c !== 字符商业at && c !== 字符反引号;
    }
    // 判斷是不是純安全尾字符
    function 是纯安全尾(c) {
      return !是空白(c) && c !== 字符冒号;
    }
    // 獲取字符串中指定位置的碼點
    function 取码点(string, pos) {
      var first = string.charCodeAt(pos), second;
      if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 56320 && second <= 57343) {
          return (first - 55296) * 1024 + second - 56320 + 65536;
        }
      }
      return first;
    }
    // 判斷是否需要縮進指示符
    function 需缩进指示(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    // 標量樣式常量
    var 样式纯文本 = 1;
    var 样式单引号 = 2;
    var 样式字面量 = 3;
    var 样式折疊 = 4;
    var 样式双引号 = 5;
    // 選擇標量樣式
    function 选标量样式(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
      var i;
      var char = 0;
      var prevChar = null;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = 是纯安全首(取码点(string, 0)) && 是纯安全尾(取码点(string, string.length - 1));
      if (singleLineOnly || forceQuotes) {
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = 取码点(string, i);
          if (!可打印(char)) {
            return 样式双引号;
          }
          plain = plain && 是纯安全(char, prevChar, inblock);
          prevChar = char;
        }
      } else {
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = 取码点(string, i);
          if (char === 字符换行) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // 可折疊行 = 太長，且沒有更多縮進。
                i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!可打印(char)) {
            return 样式双引号;
          }
          plain = plain && 是纯安全(char, prevChar, inblock);
          prevChar = char;
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
          return 样式纯文本;
        }
        return quotingType === 引号类型双 ? 样式双引号 : 样式单引号;
      }
      if (indentPerLevel > 9 && 需缩进指示(string)) {
        return 样式双引号;
      }
      if (!forceQuotes) {
        return hasFoldableLine ? 样式折疊 : 样式字面量;
      }
      return quotingType === 引号类型双 ? 样式双引号 : 样式单引号;
    }
    // 寫標量
    function 写标量(state, string, level, iskey, inblock) {
      state.dump = function () {
        if (string.length === 0) {
          return state.quotingType === 引号类型双 ? '""' : "''";
        }
        if (!state.noCompatMode) {
          if (弃用布尔语法.indexOf(string) !== -1 || 弃用Base60语法.test(string)) {
            return state.quotingType === 引号类型双 ? '"' + string + '"' : "'" + string + "'";
          }
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return 测隐式解析(state, string2);
        }
        switch (选标量样式(
          string,
          singleLineOnly,
          state.indent,
          lineWidth,
          testAmbiguity,
          state.quotingType,
          state.forceQuotes && !iskey,
          inblock
        )) {
          case 样式纯文本:
            return string;
          case 样式单引号:
            return "'" + string.replace(/'/g, "''") + "'";
          case 样式字面量:
            return "|" + 块头(string, state.indent) + 去尾换行(缩进字串(string, indent));
          case 样式折疊:
            return ">" + 块头(string, state.indent) + 去尾换行(缩进字串(折叠字串(string, lineWidth), indent));
          case 样式双引号:
            return '"' + 转义字串(string, lineWidth) + '"';
          default:
            throw new 山寨异常("不可能的錯誤：無效的標量樣式");
        }
      }();
    }
    // 塊頭
    function 块头(string, indentPerLevel) {
      var indentIndicator = 需缩进指示(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    // 去掉末尾換行符
    function 去尾换行(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    // 折疊字符串
    function 折叠字串(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = function () {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return 折叠行(string.slice(0, nextLF), width);
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + 折叠行(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    // 折疊行
    function 折叠行(line, width) {
      if (line === "" || line[0] === " ")
        return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    // 轉義字符串
    function 转义字串(string) {
      var result = "";
      var char = 0;
      var escapeSeq;
      for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = 取码点(string, i);
        escapeSeq = 转义序列[char];
        if (!escapeSeq && 可打印(char)) {
          result += string[i];
          if (char >= 65536)
            result += string[i + 1];
        } else {
          result += escapeSeq || 编码十六进制(char);
        }
      }
      return result;
    }
    // 寫流序列
    function 写流序列(state, level, object) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value);
        }
        if (写节点(state, level, value, false, false) || typeof value === "undefined" && 写节点(state, level, null, false, false)) {
          if (_result !== "")
            _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    // 寫塊序列
    function 写块序列(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value);
        }
        if (写节点(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && 写节点(state, level + 1, null, true, true, false, true)) {
          if (!compact || _result !== "") {
            _result += 造下行(state, level);
          }
          if (state.dump && 字符换行 === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    // 寫流映射
    function 写流映射(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (_result !== "")
          pairBuffer += ", ";
        if (state.condenseFlow)
          pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!写节点(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024)
          pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!写节点(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    // 寫塊映射
    function 写块映射(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new 山寨异常("sortKeys 必須是布爾值或函數");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || _result !== "") {
          pairBuffer += 造下行(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!写节点(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && 字符换行 === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += 造下行(state, level);
        }
        if (!写节点(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && 字符换行 === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    // 檢測類型
    function 测类型(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          if (explicit) {
            if (type.multi && type.representName) {
              state.tag = type.representName(object);
            } else {
              state.tag = type.tag;
            }
          } else {
            state.tag = "?";
          }
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new 山寨异常("!<" + type.tag + '> 標籤解析器不接受 "' + style + '" 樣式');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    // 寫節點
    function 写节点(state, level, object, block, compact, iskey, isblockseq) {
      state.tag = null;
      state.dump = object;
      if (!测类型(state, object, false)) {
        测类型(state, object, true);
      }
      var type = _toString.call(state.dump);
      var inblock = block;
      var tagStr;
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            写块映射(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            写流映射(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          if (block && state.dump.length !== 0) {
            if (state.noArrayIndent && !isblockseq && level > 0) {
              写块序列(state, level - 1, state.dump, compact);
            } else {
              写块序列(state, level, state.dump, compact);
            }
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            写流序列(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            写标量(state, state.dump, level, iskey, inblock);
          }
        } else if (type === "[object Undefined]") {
          return false;
        } else {
          if (state.skipInvalid)
            return false;
          throw new 山寨异常("無法卸載的物件種類 " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          tagStr = encodeURI(
            state.tag[0] === "!" ? state.tag.slice(1) : state.tag
          ).replace(/!/g, "%21");
          if (state.tag[0] === "!") {
            tagStr = "!" + tagStr;
          } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
            tagStr = "!!" + tagStr.slice(18);
          } else {
            tagStr = "!<" + tagStr + ">";
          }
          state.dump = tagStr + " " + state.dump;
        }
      }
      return true;
    }
    // 獲取重複引用
    function 取重复引用(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      查节点(object, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }
    // 檢查節點
    function 查节点(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              查节点(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              查节点(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    // 卸載數據
    function 倾倒(input, options) {
      options = options || {};
      var state = new 状态(options);
      if (!state.noRefs)
        取重复引用(input, state);
      var value = input;
      if (state.replacer) {
        value = state.replacer.call({ "": value }, "", value);
      }
      if (写节点(state, 0, value, true, true))
        return state.dump + "\n";
      return "";
    }
    // 把卸載功能掛到模塊上
    module.exports.倾倒 = 倾倒;
  }
});

// node_modules/js-yaml/index.js
// 這是咱們山寨的總管家，負責裝貨卸貨
var 要山寨配置 = 共用模({
  "node_modules/js-yaml/index.js"(exports, module) {
    "use strict";
    // 啟動監工的小樁子
    启动桩();
    // 引入裝貨機和卸貨機
    var 装货机 = 要装货机();
    var 卸货机 = 要卸货机();
    // 重命名函數，防止外人亂用
    function 重命名(from, to) {
      return function () {
        throw new Error("函數 yaml." + from + " 在 js-yaml 4 中已移除。請改用 yaml." + to + "，它現在默認是安全的。");
      };
    }
    // 把各種工具和功能掛到總管家身上
    module.exports.Type = 要类型();
    module.exports.Schema = 要图纸();
    module.exports.FAILSAFE_SCHEMA = 要保险();
    module.exports.JSON_SCHEMA = 要JSON();
    module.exports.CORE_SCHEMA = 要核心();
    module.exports.DEFAULT_SCHEMA = 要默认();
    module.exports.load = 装货机.载入;
    module.exports.loadAll = 装货机.载所有;
    module.exports.dump = 卸货机.倾倒;
    module.exports.YAMLException = 要异常();
    module.exports.types = {
      binary: 要二进制(),
      float: 要浮点(),
      map: 要映射(),
      null: 要空值(),
      pairs: 要键值对(),
      set: 要集合(),
      timestamp: 要时间戳(),
      bool: 要布尔(),
      int: 要整数(),
      merge: 要合并(),
      omap: 要有序映射(),
      seq: 要序列(),
      str: 要字串()
    };
    // 舊的函數名，現在都指向重命名函數
    module.exports.safeLoad = 重命名("safeLoad", "load");
    module.exports.safeLoadAll = 重命名("safeLoadAll", "loadAll");
    module.exports.safeDump = 重命名("safeDump", "dump");
  }
});

// src/index.js
// 啟動監工的小樁子
启动桩();
// 引入咱們的山寨配置總管家
var 山寨配置 = 要山寨配置();
// 這是咱們主程序的默認出口，江湖規矩
var 主程序 = {
  // 負責處理所有進來的「請求」
  async fetch(请求, 环境) {
    // 拿到請求的「网址」
    const 网址 = new URL(请求.url);
    // 咱們的地頭蛇是誰
    const 地头蛇 = 网址.origin;
    // 前台的「江湖秘籍」在哪兒
    const 前台网址 = 'https://raw.githubusercontent.com/yzcjd/sub-trans/main/frontend.html';
    // 咱們的「黑货仓库」在哪兒
    const 订阅仓库 = 环境.SUB_BUCKET;
    // 後台老大是誰，先給它扒層皮
    let 后台老大 = 环境.BACKEND.replace(/(https?:\/\/[^/]+).*$/, "$1");
    // 黑貨目錄的暗號
    const 黑货目录 = "subscription";
    // 把「路径碎片」給拆開，看看是啥路數
    const 路径碎片 = 网址.pathname.split("/").filter((segment) => segment.length > 0);
    // 如果路徑是空的，那就是來找前台的
    if (路径碎片.length === 0) {
      // 去前台那兒「抓取」秘籍
      const 回应 = await fetch(前台网址);
      // 如果沒抓到，就報個信
      if (回应.status !== 200) {
        return new Response('未能抓取前台', { status: 回应.status });
      }
      // 拿到「原版网页」
      const 原版网页 = await 回应.text();
      // 把裡面的老地頭蛇換成咱們的地頭蛇
      const 改版网页 = 原版网页.replace(/https:\/\/bulianglin2023\.dev/, 地头蛇);
      // 回應給來客
      return new Response(改版网页, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } else if (路径碎片[0] === 黑货目录) {
      // 如果是來找黑貨的，就看「暗号」
      const 暗号 = 路径碎片[路径碎片.length - 1];
      // 從倉庫裡取「物件」
      const 物件 = await 订阅仓库.get(暗号);
      // 再取「物件头」
      const 物件头 = await 订阅仓库.get(暗号 + "_headers");
      // 如果沒找到，就說「没找到」
      if (物件 === null)
        return new Response("没找到", { status: 404 });
      // 判斷倉庫類型，R2 還是 KV
      if ("R2Bucket" === 订阅仓库.constructor.name) {
        // R2 的頭是 JSON 格式
        const headers = 物件头 ? new Headers(await 物件头.json()) : new Headers({ "Content-Type": "text/plain;charset=UTF-8" });
        return new Response(物件.body, { headers });
      } else {
        // KV 的頭是字符串 JSON
        const headers = 物件头 ? new Headers(JSON.parse(物件头)) : new Headers({ "Content-Type": "text/plain;charset=UTF-8" });
        return new Response(物件, { headers });
      }
    }

    // 拿到「网址参数」
    const 网址参数 = 网址.searchParams.get("url");
    // 如果沒有网址参数，就說「缺少网址参数」
    if (!网址参数)
      return new Response("缺少网址参数", { status: 400 });
    // 拿到「后台参数」，看看有沒有指定新的后台老大
    const 后台参数 = 网址.searchParams.get("bd");
    if (后台参数 && /^(https?:\/\/[^/]+)[.].+$/g.test(后台参数))
      后台老大 = 后台参数.replace(/(https?:\/\/[^/]+).*$/, "$1");
    // 準備「替换清单」和「已换网址」
    const 替换清单 = {};
    const 已换网址 = [];
    const 暗号清单 = [];
    // 如果网址参数以 "proxies:" 開頭，那就是山寨配置
    if (网址参数.startsWith("proxies:")) {
      const { format: 格式, data: 数据 } = 解析数据(网址参数.replace(/\|/g, "\r\n"));
      if ("yaml" === 格式) {
        // 生成一個「暗号」
        const 暗号 = 造随机串(11);
        // 替換山寨數據
        const 已换山寨数据 = 替换山寨(数据, 替换清单);
        if (已换山寨数据) {
          // 把替換後的數據存到倉庫
          await 订阅仓库.put(暗号, 已换山寨数据);
          暗号清单.push(暗号);
          已换网址.push(`${地头蛇}/${黑货目录}/${暗号}`);
        }
      }
    } else {
      // 否則就是普通的网址，拆成「网址碎片」
      const 网址碎片 = 网址参数.split("|").filter((part) => part.trim() !== "");
      // 如果沒有有效的鏈接，就報錯
      if (网址碎片.length === 0)
        return new Response("沒有有效的鏈接", { status: 400 });
      let 回应, 已解物件;
      // 逐個處理网址碎片
      for (const url2 of 网址碎片) {
        const 暗号 = 造随机串(11);
        // 如果是 http 或 https 開頭，就去抓取
        if (url2.startsWith("https://") || url2.startsWith("http://")) {
          回应 = await fetch(url2, {
            method: 请求.method,
            headers: 请求.headers,
            redirect: 'follow', // https://developers.cloudflare.com/workers/runtime-apis/request#constructor
          });
          if (!回应.ok)
            continue;
          // 拿到「明文数据」
          const 明文数据 = await 回应.text();
          // 解析數據
          已解物件 = 解析数据(明文数据);
          // 存物件頭
          await 订阅仓库.put(暗号 + "_headers", JSON.stringify(Object.fromEntries(回应.headers)));
          暗号清单.push(暗号);
        } else {
          // 否則直接解析
          已解物件 = 解析数据(url2);
        }
        // 根據不同的協議進行替換
        if (/^(影梭r?|伪装1?|木马|无界|狂喜):\/\//.test(url2)) {
          const 新链接 = 网址内替换(url2, 替换清单, false);
          if (新链接)
            已换网址.push(新链接);
          continue;
        } else if ("base64" === 已解物件.格式) {
          const 链接 = 已解物件.数据.split(/\r?\n/).filter((link) => link.trim() !== "");
          const 新链接 = [];
          for (const link of 链接) {
            const newLink = 网址内替换(link, 替换清单, false);
            if (newLink)
              新链接.push(newLink);
          }
          const 已换编码数据 = btoa(新链接.join("\r\n"));
          if (已换编码数据) {
            await 订阅仓库.put(暗号, 已换编码数据);
            暗号清单.push(暗号);
            已换网址.push(`${地头蛇}/${黑货目录}/${暗号}`);
          }
        } else if ("yaml" === 已解物件.格式) {
          const 已换山寨数据 = 替换山寨(已解物件.数据, 替换清单);
          if (已换山寨数据) {
            await 订阅仓库.put(暗号, 已换山寨数据);
            暗号清单.push(暗号);
            已换网址.push(`${地头蛇}/${黑货目录}/${暗号}`);
          }
        }
      }
    }
    // 拼接成「新网址」
    const 新网址 = 已换网址.join("|");
    网址.searchParams.set("url", 新网址);
    // 構造「改动请求」，發給後台老大
    const 改动请求 = new Request(后台老大 + 网址.pathname + 网址.search, 请求);
    const 反向回应 = await fetch(改动请求);
    // 清理掉臨時的暗號
    for (const 暗号 of 暗号清单) {
      await 订阅仓库.delete(暗号);
    }
    // 如果後台老大回應成功
    if (反向回应.status === 200) {
      const 明文数据 = await 反向回应.text();
      try {
        // 嘗試 Base64 解碼
        const 解码数据 = 网址安全解码(明文数据);
        const 链接 = 解码数据.split(/\r?\n/).filter((link) => link.trim() !== "");
        const 新链接 = [];
        for (const link of 链接) {
          const newLink = 网址内替换(link, 替换清单, true);
          if (newLink)
            新链接.push(newLink);
        }
        const 已换编码数据 = btoa(新链接.join("\r\n"));
        return new Response(已换编码数据, 反向回应);
      } catch (编码错误) {
        // 如果 Base64 解碼失敗，就直接替換字符串
        const 结果 = 明文数据.replace(
          new RegExp(Object.keys(替换清单).join("|"), "g"),
          (match) => 替换清单[match] || match
        );
        return new Response(结果, 反向回应);
      }
    }
    // 否則直接返回後台老大的回應
    return 反向回应;
  }
};
// 根據協議在 URI 內部進行替換
function 网址内替换(link, 替换清单, 是恢复) {
  switch (true) {
    case link.startsWith("影梭://"):
      return 替换影梭(link, 替换清单, 是恢复);
    case link.startsWith("影梭r://"):
      return 替换影梭R(link, 替换清单, 是恢复);
    case link.startsWith("伪装://"):
    case link.startsWith("伪装1://"):
      return 替换伪装(link, 替换清单, 是恢复);
    case link.startsWith("木马://"):
    case link.startsWith("无界://"):
      return 替换木马(link, 替换清单, 是恢复);
    case link.startsWith("狂喜://"):
      return 替换狂喜(link, 替换清单);
    default:
      return;
  }
}
// 替換影梭R 協議
function 替换影梭R(link, 替换清单, 是恢复) {
  link = link.slice("影梭r://".length).replace("\r", "").split("#")[0];
  link = 网址安全解码(link);
  const 正则匹配 = link.match(/(\S+):(\d+?):(\S+?):(\S+?):(\S+?):(\S+)\//);
  if (!正则匹配) {
    return;
  }
  const [, 服务器, , , , , 密码] = 正则匹配;
  let 替换后字串;
  if (是恢复) {
    替换后字串 = "影梭r://" + 网址安全编码(link.replace(密码, 网址安全编码(替换清单[网址安全解码(密码)])).replace(服务器, 替换清单[服务器]));
  } else {
    const 随机密码 = 造随机串(12);
    const 随机域名 = 造随机串(12) + ".com";
    替换清单[随机域名] = 服务器;
    替换清单[随机密码] = 网址安全解码(密码);
    替换后字串 = "影梭r://" + 网址安全编码(link.replace(服务器, 随机域名).replace(密码, 网址安全编码(随机密码)));
  }
  return 替换后字串;
}
// 替換伪装 協議
function 替换伪装(link, 替换清单, 是恢复) {
  const 随机身份码 = 造随机身份码();
  const 随机域名 = 造随机串(10) + ".com";
  const 正则匹配火箭样式 = link.match(/伪装:\/\/([A-Za-z0-9-_]+)\?(.*)/);
  if (正则匹配火箭样式) {
    const 编码数据 = 正则匹配火箭样式[1];
    const 正则匹配 = 网址安全解码(编码数据).match(/(.*?):(.*?)@(.*):(.*)/);
    if (!正则匹配)
      return;
    const [, 加密, 身份码, 服务器, 端口] = 正则匹配;
    替换清单[随机域名] = 服务器;
    替换清单[随机身份码] = 身份码;
    const 新字串 = 网址安全编码(`${加密}:${随机身份码}@${随机域名}:${端口}`);
    const 结果 = link.replace(编码数据, 新字串);
    return 结果;
  }
  const 正则匹配狐狸样式 = link.match(/伪装1:\/\/(.*?)@(.*):(.*?)\?(.*)/);
  if (正则匹配狐狸样式) {
    const [, 身份码, 服务器] = 正则匹配狐狸样式;
    替换清单[随机域名] = 服务器;
    替换清单[随机身份码] = 身份码;
    const regex = new RegExp(`${身份码}|${服务器}`, "g");
    const 结果 = link.replace(regex, (match) => 条件替换(match, 身份码, 随机身份码, 服务器, 随机域名));
    return 结果;
  }
  let 临时链接 = link.replace(/伪装:\/\/|伪装1:\/\//g, "");
  try {
    临时链接 = 网址安全解码(临时链接);
    const 正则匹配泉样式 = 临时链接.match(/(.*?) = (.*)/);
    if (正则匹配泉样式) {
      const 配置 = 正则匹配泉样式[2].split(",");
      if (配置.length < 6)
        return;
      const 服务器2 = 配置[1].trim();
      const 身份码2 = 配置[4].trim().replace(/^"|"$/g, "");
      替换清单[随机域名] = 服务器2;
      替换清单[随机身份码] = 身份码2;
      const regex2 = new RegExp(`${身份码2}|${服务器2}`, "g");
      const 结果2 = 临时链接.replace(regex2, (match) => 条件替换(match, 身份码2, 随机身份码, 服务器2, 随机域名));
      return "伪装://" + btoa(结果2);
    }
    const JSON数据 = JSON.parse(临时链接);
    const 服务器 = JSON数据.add;
    const 身份码 = JSON数据.id;
    const regex = new RegExp(`${身份码}|${服务器}`, "g");
    let 结果;
    if (是恢复) {
      结果 = 临时链接.replace(regex, (match) => 条件替换(match, 身份码, 替换清单[身份码], 服务器, 替换清单[服务器]));
    } else {
      替换清单[随机域名] = 服务器;
      替换清单[随机身份码] = 身份码;
      结果 = 临时链接.replace(regex, (match) => 条件替换(match, 身份码, 随机身份码, 服务器, 随机域名));
    }
    return "伪装://" + btoa(结果);
  } catch (error) {
    return;
  }
}
// 替換影梭 協議
function 替换影梭(link, 替换清单, 是恢复) {
  const 随机密码 = 造随机串(12);
  const 随机域名 = 随机密码 + ".com";
  let 替换后字串;
  let 临时链接 = link.slice("影梭://".length).split("#")[0];
  if (临时链接.includes("@")) {
    const 正则匹配1 = 临时链接.match(/(\S+?)@(\S+):/);
    if (!正则匹配1) {
      return;
    }
    const [, 编码数据, 服务器] = 正则匹配1;
    const 正则匹配2 = 网址安全解码(编码数据).match(/(\S+?):(\S+)/);
    if (!正则匹配2) {
      return;
    }
    const [, 加密方式, 密码] = 正则匹配2;
    if (是恢复) {
      const 新字串 = 网址安全编码(加密方式 + ":" + 替换清单[密码]);
      替换后字串 = link.replace(编码数据, 新字串).replace(服务器, 替换清单[服务器]);
    } else {
      替换清单[随机域名] = 服务器;
      替换清单[随机密码] = 密码;
      const 新字串 = 网址安全编码(加密方式 + ":" + 随机密码);
      替换后字串 = link.replace(编码数据, 新字串).replace(/@.*:/, `@${随机域名}:`);
    }
  } else {
    try {
      const 解码值 = 网址安全解码(临时链接);
      const 正则匹配 = 解码值.match(/(\S+?):(\S+)@(\S+):/);
      if (!正则匹配) {
        return;
      }
      const [, , 密码, 服务器] = 正则匹配;
      替换清单[随机域名] = 服务器;
      替换清单[随机密码] = 密码;
      替换后字串 = "影梭://" + 网址安全编码(解码值.replace(/:.*@/, `:${随机密码}@`).replace(/@.*:/, `@${随机域名}:`));
      const 哈希部分 = link.match(/#.*/);
      if (哈希部分)
        替换后字串 += 哈希部分[0];
    } catch (error) {
      return;
    }
  }
  return 替换后字串;
}
// 替換木马 協議
function 替换木马(link, 替换清单, 是恢复) {
  const 随机身份码 = 造随机身份码();
  const 随机域名 = 造随机串(10) + ".com";
  const 正则匹配 = link.match(/(无界|木马):\/\/(.*?)@(.*):/);
  if (!正则匹配) {
    return;
  }
  const [, , 身份码, 服务器] = 正则匹配;
  替换清单[随机域名] = 服务器;
  替换清单[随机身份码] = 身份码;
  const regex = new RegExp(`${身份码}|${服务器}`, "g");
  if (是恢复) {
    return link.replace(regex, (match) => 条件替换(match, 身份码, 替换清单[身份码], 服务器, 替换清单[服务器]));
  } else {
    return link.replace(regex, (match) => 条件替换(match, 身份码, 随机身份码, 服务器, 随机域名));
  }
}
// 替換狂喜 協議
function 替换狂喜(link, 替换清单) {
  const 正则匹配 = link.match(/狂喜:\/\/(.*):(.*?)\?/);
  if (!正则匹配) {
    return;
  }
  const 服务器 = 正则匹配[1];
  const 随机域名 = 造随机串(12) + ".com";
  替换清单[随机域名] = 服务器;
  return link.replace(服务器, 随机域名);
}
// 替換山寨配置
function 替换山寨(山寨物件, 替换清单) {
  if (!山寨物件.proxies) {
    return;
  }
  山寨物件.proxies.forEach((代理) => {
    const 随机密码 = 造随机串(12);
    const 随机域名 = 随机密码 + ".com";
    const 原服务器 = 代理.server;
    代理.server = 随机域名;
    替换清单[随机域名] = 原服务器;
    if (代理.password) {
      const 原密码 = 代理.password;
      代理.password = 随机密码;
      替换清单[随机密码] = 原密码;
    }
    if (代理.uuid) {
      const 原身份码 = 代理.uuid;
      const 随机身份码 = 造随机身份码();
      代理.uuid = 随机身份码;
      替换清单[随机身份码] = 原身份码;
    }
  });
  return 山寨配置.dump(山寨物件);
}
// 网址安全 Base64 編碼
function 网址安全编码(input) {
  return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
// 网址安全 Base64 解碼
function 网址安全解码(input) {
  const padded = input + "=".repeat((4 - input.length % 4) % 4);
  return atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
}
// 生成隨機字符串
function 造随机串(len) {
  return Math.random().toString(36).substring(2, len);
}
// 生成隨機身份碼 (UUID)
function 造随机身份码() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
// 解析數據格式
function 解析数据(data) {
  try {
    return { format: "base64", data: 网址安全解码(data) };
  } catch (编码错误) {
    try {
      return { format: "yaml", data: 山寨配置.load(data) };
    } catch (yamlError) {
      return { format: "unknown", data };
    }
  }
}
// 條件替換函數
function 条件替换(match, ...replacementPairs) {
  for (let i = 0; i < replacementPairs.length; i += 2) {
    if (match === replacementPairs[i]) {
      return replacementPairs[i + 1];
    }
  }
  return match;
}
// 最終把主程序給「出口」出去，讓它在江湖上闖蕩
export {
  主程序 as default
};
// 源碼映射，這是給那些想追查咱們秘籍來源的傢伙準備的，讓他們找不著北
//# sourceMappingURL=index.js.map
```
