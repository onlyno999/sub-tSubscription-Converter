好的，山寨的兄弟们，收到！这是按照规矩改好的暗号本，把使用说明和黑话变量都挪到了开头的大框里，注释也换成了咱们的土匪黑话。保证小数点、空格啥的都不动，原汁原味！

```javascript
/*
// =================================================================================================
// ||                                                                                             ||
// ||                          山寨规矩：如何使用俺们这边的暗号转换器                             ||
// ||                                                                                             ||
// || 1. 把这个代码部署到你的云寨（Cloudflare Workers）。                                          ||
// || 2. 绑定一个藏宝洞（R2 Bucket），名字叫 `SUB_BUCKET`。这是存临时暗号的地方。                  ||
// || 3. 设置一个后山地址（Environment Variable），名字叫 `BACKEND`，填上你上游的订阅转换地址。    ||
// || 4. 访问你的云寨地址，不带路径，就能看到山寨的欢迎界面（前端页面）。                          ||
// || 5. 要转换暗号，访问你的云寨地址，带上 `?url=` 参数，后面跟上你要转换的暗号链或订阅地址。      ||
// ||    多个地址用 `|` 隔开。                                                                  ||
// ||    例如：`https://你的云寨地址/?url=ss://...|vmess://...|https://上游订阅地址`             ||
// || 6. 如果想指定这次转换的上游后山，可以在 `url` 参数后加上 `&bd=` 参数，填上指定的上游地址。   ||
// ||    例如：`https://你的云寨地址/?url=ss://...&bd=https://其他上游地址`                       ||
// || 7. 转换器会自动识别 SS, SSR, Vmess, Trojan, Vless, Hysteria 等暗号。                       ||
// || 8. 转换后的暗号会把服务器地址和 UUID/密码等关键信息替换成俺们山寨的假名，并记录在案（临时存R2）。||
// || 9. 转换器会把替换后的地址发给你的 `BACKEND` 或 `bd` 指定的上游后山进行二次加工。             ||
// || 10. 上游回来的结果，如果能解开（Base64），会把假名换回真名。如果不能，就直接返回。            ||
// || 11. 临时存放在藏宝洞的暗号会在转换完成后销毁。                                               ||
// ||                                                                                             ||
// || 变量清单 (藏在注释里，别让外人瞧见了)：                                                     ||
// || frontendUrl: 'https://cf-worker-dir-bke.pages.dev'  // 山寨前门脸地址                     ||
// || SUB_BUCKET: env.SUB_BUCKET                          // 藏宝洞 R2 对象                     ||
// || backend: env.BACKEND.replace(/(https?:\/\/[^/]+).*$/, "$1") // 上游后山地址（只取域名部分） ||
// || subDir: "subscription"                              // 藏宝洞里放暗号的秘密目录名         ||
// ||                                                                                             ||
// =================================================================================================
*/

// 这是咱山寨的秘密武器，用来搞模块加载的，别问是啥，问就是黑科技
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  // 第一次用的时候才启动，省点力气
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  // 另一个秘密武器，用来加载那些老掉牙的模块
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// wrangler-modules-watch:wrangler:modules-watch
// 这是看场子的，有啥风吹草动就吱一声
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    // 启动看场子的桩子
    init_modules_watch_stub();
  }
});

// C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
// 看场子的桩子，没啥大用，就是个摆设
var init_modules_watch_stub = __esm({
  "C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    // 启动真正的看场子程序
    init_wrangler_modules_watch();
  }
});

// node_modules/js-yaml/lib/common.js
// 这是处理通用小事的，比如判断是不是空，是不是对象啥的
var require_common = __commonJS({
  "node_modules/js-yaml/lib/common.js"(exports, module) {
    "use strict";
    // 先把看场子的叫醒
    init_modules_watch_stub();
    // 看看是不是啥都没有
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    // 看看是不是个物件
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    // 把东西变成一串儿（数组）
    function toArray(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (isNothing(sequence))
        return [];
      return [sequence];
    }
    // 把一个物件的本事（属性）传给另一个
    function extend(target, source) {
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
    // 重复一个字符串，就像土匪喊口号
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    // 看看是不是那个奇怪的负零
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    // 把这些本事都挂到外面，让别人也能用
    module.exports.isNothing = isNothing;
    module.exports.isObject = isObject;
    module.exports.toArray = toArray;
    module.exports.repeat = repeat;
    module.exports.isNegativeZero = isNegativeZero;
    module.exports.extend = extend;
  }
});

// node_modules/js-yaml/lib/exception.js
// 这是山寨里的刑堂，专门处理出错的情况
var require_exception = __commonJS({
  "node_modules/js-yaml/lib/exception.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 把错误报告写得详细点，像审犯人一样
    function formatError(exception, compact) {
      var where = "", message = exception.reason || "(unknown reason)"; // 啥原因？不知道！
      if (!exception.mark)
        return message; // 没标记？那就这样吧
      if (exception.mark.name) {
        where += 'in "' + exception.mark.name + '" '; // 在哪个文件出的事？
      }
      where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")"; // 第几行第几列？
      if (!compact && exception.mark.snippet) {
        where += "\n\n" + exception.mark.snippet; // 把出事那段代码也贴出来
      }
      return message + " " + where; // 错误信息加上位置
    }
    // 山寨的错误类型，叫 YAMLException
    function YAMLException(reason, mark) {
      Error.call(this); // 继承 Error 的本事
      this.name = "YAMLException"; // 名字叫 YAMLException
      this.reason = reason; // 出错的原因
      this.mark = mark; // 出错的位置标记
      this.message = formatError(this, false); // 完整的错误信息
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor); // 记录下调用栈，方便追查
      } else {
        this.stack = new Error().stack || ""; // 老办法记录调用栈
      }
    }
    // 让 YAMLException 继承 Error 的原型
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    // 重写 toString 方法，打印错误信息
    YAMLException.prototype.toString = function toString(compact) {
      return this.name + ": " + formatError(this, compact);
    };
    // 把这个错误类型挂出去
    module.exports = YAMLException;
  }
});

// node_modules/js-yaml/lib/snippet.js
// 这是刑堂的记录员，负责截取代码片段
var require_snippet = __commonJS({
  "node_modules/js-yaml/lib/snippet.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入通用小事处理员
    var common = require_common();
    // 截取一行代码
    function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
      var head = "";
      var tail = "";
      var maxHalfLength = Math.floor(maxLineLength / 2) - 1; // 一半的长度
      // 如果出错位置离行首太远，前面加省略号
      if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
      }
      // 如果出错位置离行尾太远，后面加省略号
      if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
      }
      // 返回截取的行和出错位置在截取行里的相对位置
      return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail, // 把 Tab 换成箭头
        pos: position - lineStart + head.length
        // relative position
      };
    }
    // 在字符串前面补空格
    function padStart(string, max) {
      return common.repeat(" ", max - string.length) + string;
    }
    // 生成代码片段，就像刑堂的卷宗
    function makeSnippet(mark, options) {
      options = Object.create(options || null); // 复制一份选项
      if (!mark.buffer)
        return null; // 没代码？没法截！
      if (!options.maxLength)
        options.maxLength = 79; // 一行最多多长
      if (typeof options.indent !== "number")
        options.indent = 1; // 缩进多少
      if (typeof options.linesBefore !== "number")
        options.linesBefore = 3; // 出错行前面截几行
      if (typeof options.linesAfter !== "number")
        options.linesAfter = 2; // 出错行后面截几行
      var re = /\r?\n|\r|\0/g; // 找换行符
      var lineStarts = [0]; // 每行开始的位置
      var lineEnds = []; // 每行结束的位置
      var match;
      var foundLineNo = -1; // 出错在哪一行
      // 遍历代码，找到所有行首行尾
      while (match = re.exec(mark.buffer)) {
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
          foundLineNo = lineStarts.length - 2;
        }
      }
      if (foundLineNo < 0)
        foundLineNo = lineStarts.length - 1; // 没找到？那就是最后一行
      var result = "", i, line;
      var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length; // 行号最多几位数
      var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3); // 代码部分最多多长
      // 截取出错行前面的代码
      for (i = 1; i <= options.linesBefore; i++) {
        if (foundLineNo - i < 0)
          break; // 超出范围了
        line = getLine(
          mark.buffer,
          lineStarts[foundLineNo - i],
          lineEnds[foundLineNo - i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
          maxLineLength
        );
        result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
      }
      // 截取出错行
      line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
      result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      // 画个箭头指出错在哪
      result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
      // 截取出错行后面的代码
      for (i = 1; i <= options.linesAfter; i++) {
        if (foundLineNo + i >= lineEnds.length)
          break; // 超出范围了
        line = getLine(
          mark.buffer,
          lineStarts[foundLineNo + i],
          lineEnds[foundLineNo + i],
          mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
          maxLineLength
        );
        result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
      }
      return result.replace(/\n$/, ""); // 去掉最后的换行
    }
    // 把这个记录员挂出去
    module.exports = makeSnippet;
  }
});

// node_modules/js-yaml/lib/type.js
// 这是山寨里的物件类型登记处
var require_type = __commonJS({
  "node_modules/js-yaml/lib/type.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入刑堂
    var YAMLException = require_exception();
    // 定义物件类型能有的本事（选项）
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
    // 定义物件的种类
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    // 整理物件样式的别名
    function compileStyleAliases(map) {
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
    // 定义一个物件类型
    function Type(tag, options) {
      options = options || {};
      // 检查给的本事是不是合规
      Object.keys(options).forEach(function (name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.options = options;
      this.tag = tag; // 物件的标记
      this.kind = options["kind"] || null; // 物件的种类
      this.resolve = options["resolve"] || function () {
        return true;
      }; // 如何判断是不是这个物件
      this.construct = options["construct"] || function (data) {
        return data;
      }; // 如何把数据变成这个物件
      this.instanceOf = options["instanceOf"] || null; // 是不是某个类的实例
      this.predicate = options["predicate"] || null; // 额外的判断函数
      this.represent = options["represent"] || null; // 如何把物件变成字符串
      this.representName = options["representName"] || null; // 如何表示物件的名字
      this.defaultStyle = options["defaultStyle"] || null; // 默认的样式
      this.multi = options["multi"] || false; // 是不是多标记类型
      this.styleAliases = compileStyleAliases(options["styleAliases"] || null); // 样式的别名
      // 检查物件种类是不是合规
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    // 把这个登记处挂出去
    module.exports = Type;
  }
});

// node_modules/js-yaml/lib/schema.js
// 这是山寨的规矩本（Schema）
var require_schema = __commonJS({
  "node_modules/js-yaml/lib/schema.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入刑堂和物件类型登记处
    var YAMLException = require_exception();
    var Type = require_type();
    // 整理物件类型列表，去重
    function compileList(schema, name) {
      var result = [];
      schema[name].forEach(function (currentType) {
        var newIndex = result.length;
        result.forEach(function (previousType, previousIndex) {
          // 如果标记、种类、多标记属性都一样，就认为是同一个类型
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
            newIndex = previousIndex;
          }
        });
        result[newIndex] = currentType; // 后面的会覆盖前面的
      });
      return result;
    }
    // 整理物件类型映射表，按种类和标记分类
    function compileMap() {
      var result = {
        scalar: {}, // 标量类型
        sequence: {}, // 序列类型
        mapping: {}, // 映射类型
        fallback: {}, // 备用类型
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        } // 多标记类型
      }, index, length;
      // 把类型放到对应的分类里
      function collectType(type) {
        if (type.multi) {
          result.multi[type.kind].push(type);
          result.multi["fallback"].push(type);
        } else {
          result[type.kind][type.tag] = result["fallback"][type.tag] = type;
        }
      }
      // 遍历所有输入的类型列表
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    // 定义一个规矩本
    function Schema(definition) {
      return this.extend(definition); // 创建时就扩展一下
    }
    // 扩展规矩本
    Schema.prototype.extend = function extend(definition) {
      var implicit = []; // 隐式类型列表
      var explicit = []; // 显式类型列表
      // 根据输入类型处理
      if (definition instanceof Type) {
        explicit.push(definition);
      } else if (Array.isArray(definition)) {
        explicit = explicit.concat(definition);
      } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit)
          implicit = implicit.concat(definition.implicit);
        if (definition.explicit)
          explicit = explicit.concat(definition.explicit);
      } else {
        throw new YAMLException("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })"); // 输入不对，扔刑堂
      }
      // 检查隐式类型列表
      implicit.forEach(function (type) {
        if (!(type instanceof Type)) {
          throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object."); // 列表里有不是物件类型的
        }
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."); // 隐式类型不能是非标量
        }
        if (type.multi) {
          throw new YAMLException("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit."); // 隐式类型不能是多标记类型
        }
      });
      // 检查显式类型列表
      explicit.forEach(function (type) {
        if (!(type instanceof Type)) {
          throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object."); // 列表里有不是物件类型的
        }
      });
      var result = Object.create(Schema.prototype); // 创建一个新的规矩本
      result.implicit = (this.implicit || []).concat(implicit); // 合并隐式类型
      result.explicit = (this.explicit || []).concat(explicit); // 合并显式类型
      result.compiledImplicit = compileList(result, "implicit"); // 整理隐式类型列表
      result.compiledExplicit = compileList(result, "explicit"); // 整理显式类型列表
      result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit); // 整理类型映射表
      return result; // 返回新的规矩本
    };
    // 把规矩本挂出去
    module.exports = Schema;
  }
});

// node_modules/js-yaml/lib/type/str.js
// 这是处理字符串物件的规矩
var require_str = __commonJS({
  "node_modules/js-yaml/lib/type/str.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 定义字符串物件类型
    module.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar", // 种类是标量
      construct: function (data) {
        return data !== null ? data : ""; // 如果是空就变成空字符串
      }
    });
  }
});

// node_modules/js-yaml/lib/type/seq.js
// 这是处理序列（数组）物件的规矩
var require_seq = __commonJS({
  "node_modules/js-yaml/lib/type/seq.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 定义序列物件类型
    module.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence", // 种类是序列
      construct: function (data) {
        return data !== null ? data : []; // 如果是空就变成空数组
      }
    });
  }
});

// node_modules/js-yaml/lib/type/map.js
// 这是处理映射（对象）物件的规矩
var require_map = __commonJS({
  "node_modules/js-yaml/lib/type/map.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 定义映射物件类型
    module.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping", // 种类是映射
      construct: function (data) {
        return data !== null ? data : {}; // 如果是空就变成空对象
      }
    });
  }
});

// node_modules/js-yaml/lib/schema/failsafe.js
// 这是最基本的规矩本，啥都得按规矩来，不能乱
var require_failsafe = __commonJS({
  "node_modules/js-yaml/lib/schema/failsafe.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入规矩本
    var Schema = require_schema();
    // 定义最基本的规矩本，只认识字符串、序列和映射
    module.exports = new Schema({
      explicit: [
        require_str(), // 字符串
        require_seq(), // 序列
        require_map() // 映射
      ]
    });
  }
});

// node_modules/js-yaml/lib/type/null.js
// 这是处理空物件的规矩
var require_null = __commonJS({
  "node_modules/js-yaml/lib/type/null.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 判断是不是空物件的标记
    function resolveYamlNull(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    // 把数据变成空
    function constructYamlNull() {
      return null;
    }
    // 判断是不是真正的空
    function isNull(object) {
      return object === null;
    }
    // 定义空物件类型
    module.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlNull, // 判断函数
      construct: constructYamlNull, // 构造函数
      predicate: isNull, // 额外的判断函数
      represent: {
        canonical: function () {
          return "~";
        }, // 标准表示
        lowercase: function () {
          return "null";
        }, // 小写表示
        uppercase: function () {
          return "NULL";
        }, // 大写表示
        camelcase: function () {
          return "Null";
        }, // 驼峰表示
        empty: function () {
          return "";
        } // 空表示
      },
      defaultStyle: "lowercase" // 默认用小写
    });
  }
});

// node_modules/js-yaml/lib/type/bool.js
// 这是处理布尔（真假）物件的规矩
var require_bool = __commonJS({
  "node_modules/js-yaml/lib/type/bool.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 判断是不是布尔物件的标记
    function resolveYamlBoolean(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    // 把数据变成布尔值
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    // 判断是不是真正的布尔值
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    // 定义布尔物件类型
    module.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlBoolean, // 判断函数
      construct: constructYamlBoolean, // 构造函数
      predicate: isBoolean, // 额外的判断函数
      represent: {
        lowercase: function (object) {
          return object ? "true" : "false";
        }, // 小写表示
        uppercase: function (object) {
          return object ? "TRUE" : "FALSE";
        }, // 大写表示
        camelcase: function (object) {
          return object ? "True" : "False";
        } // 驼峰表示
      },
      defaultStyle: "lowercase" // 默认用小写
    });
  }
});

// node_modules/js-yaml/lib/type/int.js
// 这是处理整数物件的规矩
var require_int = __commonJS({
  "node_modules/js-yaml/lib/type/int.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入通用小事处理员和物件类型登记处
    var common = require_common();
    var Type = require_type();
    // 看看是不是十六进制的数字
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    // 看看是不是八进制的数字
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    // 看看是不是十进制的数字
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    // 判断是不是整数物件的标记
    function resolveYamlInteger(data) {
      if (data === null)
        return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index];
      // 处理正负号
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      // 处理各种进制前缀
      if (ch === "0") {
        if (index + 1 === max)
          return true; // 只有个0
        ch = data[++index];
        if (ch === "b") {
          // 二进制
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue; // 跳过分隔符
            if (ch !== "0" && ch !== "1")
              return false; // 不是0也不是1
            hasDigits = true;
          }
          return hasDigits && ch !== "_"; // 必须有数字，且不能以下划线结尾
        }
        if (ch === "x") {
          // 十六进制
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isHexCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "o") {
          // 八进制
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isOctCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
      }
      if (ch === "_")
        return false; // 不能以下划线开头
      // 处理十进制
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isDecCode(data.charCodeAt(index))) {
          return false; // 不是十进制数字
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false; // 必须有数字，且不能以下划线结尾
      return true;
    }
    // 把数据变成整数
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch;
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, ""); // 去掉下划线
      }
      ch = value[0];
      // 处理正负号
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      // 根据前缀解析不同进制
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2); // 二进制
        if (value[1] === "x")
          return sign * parseInt(value.slice(2), 16); // 十六进制
        if (value[1] === "o")
          return sign * parseInt(value.slice(2), 8); // 八进制
      }
      return sign * parseInt(value, 10); // 十进制
    }
    // 判断是不是真正的整数
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object)); // 是数字，没有小数，不是负零
    }
    // 定义整数物件类型
    module.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlInteger, // 判断函数
      construct: constructYamlInteger, // 构造函数
      predicate: isInteger, // 额外的判断函数
      represent: {
        binary: function (obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        }, // 二进制表示
        octal: function (obj) {
          return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        }, // 八进制表示
        decimal: function (obj) {
          return obj.toString(10);
        }, // 十进制表示
        /* eslint-disable max-len */
        hexadecimal: function (obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        } // 十六进制表示
      },
      defaultStyle: "decimal", // 默认用十进制
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      } // 样式的别名
    });
  }
});

// node_modules/js-yaml/lib/type/float.js
// 这是处理浮点数物件的规矩
var require_float = __commonJS({
  "node_modules/js-yaml/lib/type/float.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入通用小事处理员和物件类型登记处
    var common = require_common();
    var Type = require_type();
    // 浮点数的匹配模式，像不像天书？
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    // 判断是不是浮点数物件的标记
    function resolveYamlFloat(data) {
      if (data === null)
        return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
        // Probably should update regexp & check speed
        data[data.length - 1] === "_") {
        return false; // 不符合模式或者以下划线结尾
      }
      return true;
    }
    // 把数据变成浮点数
    function constructYamlFloat(data) {
      var value, sign;
      value = data.replace(/_/g, "").toLowerCase(); // 去掉下划线，转小写
      sign = value[0] === "-" ? -1 : 1; // 处理正负号
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      // 处理无穷大和 NaN
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      }
      return sign * parseFloat(value, 10); // 解析浮点数
    }
    // 科学计数法但没有小数点的模式
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    // 如何把浮点数变成字符串
    function representYamlFloat(object, style) {
      var res;
      // 处理 NaN
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
        // 处理正无穷大
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        // 处理负无穷大
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        // 处理负零
        return "-0.0";
      }
      res = object.toString(10); // 转成字符串
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res; // 如果是科学计数法但没小数点，加上
    }
    // 判断是不是真正的浮点数
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object)); // 是数字，有小数或者负零
    }
    // 定义浮点数物件类型
    module.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlFloat, // 判断函数
      construct: constructYamlFloat, // 构造函数
      predicate: isFloat, // 额外的判断函数
      represent: representYamlFloat, // 表示函数
      defaultStyle: "lowercase" // 默认用小写
    });
  }
});

// node_modules/js-yaml/lib/schema/json.js
// 这是 JSON 兼容的规矩本
var require_json = __commonJS({
  "node_modules/js-yaml/lib/schema/json.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 继承最基本的规矩本，加上空、布尔、整数、浮点数
    module.exports = require_failsafe().extend({
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
// 这是核心规矩本，跟 JSON 兼容的差不多
var require_core = __commonJS({
  "node_modules/js-yaml/lib/schema/core.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 就是 JSON 兼容的规矩本
    module.exports = require_json();
  }
});

// node_modules/js-yaml/lib/type/timestamp.js
// 这是处理时间戳物件的规矩
var require_timestamp = __commonJS({
  "node_modules/js-yaml/lib/type/timestamp.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 日期格式的匹配模式
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    // 时间戳格式的匹配模式
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    // 判断是不是时间戳物件的标记
    function resolveYamlTimestamp(data) {
      if (data === null)
        return false;
      if (YAML_DATE_REGEXP.exec(data) !== null)
        return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
        return true;
      return false;
    }
    // 把数据变成 Date 对象
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null)
        match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null)
        throw new Error("Date resolve error"); // 解析日期出错
      year = +match[1];
      month = +match[2] - 1; // 月份从0开始
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day)); // 只有日期
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3); // 毫秒
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10]; // 时区小时
        tz_minute = +(match[11] || 0); // 时区分钟
        delta = (tz_hour * 60 + tz_minute) * 6e4; // 时区偏移量（毫秒）
        if (match[9] === "-")
          delta = -delta; // 负时区
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction)); // 创建 UTC 时间
      if (delta)
        date.setTime(date.getTime() - delta); // 加上时区偏移
      return date;
    }
    // 如何把 Date 对象变成字符串
    function representYamlTimestamp(object) {
      return object.toISOString(); // 用 ISO 格式表示
    }
    // 定义时间戳物件类型
    module.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlTimestamp, // 判断函数
      construct: constructYamlTimestamp, // 构造函数
      instanceOf: Date, // 是 Date 的实例
      represent: representYamlTimestamp // 表示函数
    });
  }
});

// node_modules/js-yaml/lib/type/merge.js
// 这是处理合并标记的规矩
var require_merge = __commonJS({
  "node_modules/js-yaml/lib/type/merge.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // 判断是不是合并标记
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    // 定义合并标记类型
    module.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlMerge // 判断函数
    });
  }
});

// node_modules/js-yaml/lib/type/binary.js
// 这是处理二进制物件的规矩
var require_binary = __commonJS({
  "node_modules/js-yaml/lib/type/binary.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    // Base64 编码表
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    // 判断是不是二进制物件的标记（Base64 编码）
    function resolveYamlBinary(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue; // 跳过换行符和等号
        if (code < 0)
          return false; // 有非法字符
        bitlen += 6; // 每个 Base64 字符代表 6 个比特
      }
      return bitlen % 8 === 0; // 总比特数必须是 8 的倍数
    }
    // 把 Base64 数据变成 Uint8Array
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          // 每 4 个 Base64 字符（24比特）转成 3 个字节
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx)); // 累积比特
      }
      tailbits = max % 4 * 6; // 剩余的比特数
      if (tailbits === 0) {
        // 刚好是 4 的倍数
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        // 剩余 18 比特，转 2 个字节
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        // 剩余 12 比特，转 1 个字节
        result.push(bits >> 4 & 255);
      }
      return new Uint8Array(result); // 返回 Uint8Array
    }
    // 如何把 Uint8Array 变成 Base64 字符串
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          // 每 3 个字节（24比特）转成 4 个 Base64 字符
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx]; // 累积比特
      }
      tail = max % 3; // 剩余的字节数
      if (tail === 0) {
        // 刚好是 3 的倍数
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        // 剩余 2 个字节，转 3 个 Base64 字符 + 1 个等号
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        // 剩余 1 个字节，转 2 个 Base64 字符 + 2 个等号
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    // 判断是不是 Uint8Array
    function isBinary(obj) {
      return Object.prototype.toString.call(obj) === "[object Uint8Array]";
    }
    // 定义二进制物件类型
    module.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar", // 种类是标量
      resolve: resolveYamlBinary, // 判断函数
      construct: constructYamlBinary, // 构造函数
      predicate: isBinary, // 额外的判断函数
      represent: representYamlBinary // 表示函数
    });
  }
});

// node_modules/js-yaml/lib/type/omap.js
// 这是处理有序映射（Ordered Map）物件的规矩
var require_omap = __commonJS({
  "node_modules/js-yaml/lib/type/omap.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    // 判断是不是有序映射物件的标记
    function resolveYamlOmap(data) {
      if (data === null)
        return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
      // 有序映射是一个序列，每个元素是一个只有一个键值对的对象
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false; // 元素不是对象
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false; // 对象里有多个键值对
          }
        }
        if (!pairHasKey)
          return false; // 对象里没有键值对
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey); // 记录键，检查重复
        else
          return false; // 键重复了
      }
      return true;
    }
    // 把数据变成有序映射（其实就是数组）
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    // 定义有序映射类型
    module.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence", // 种类是序列
      resolve: resolveYamlOmap, // 判断函数
      construct: constructYamlOmap // 构造函数
    });
  }
});

// node_modules/js-yaml/lib/type/pairs.js
// 这是处理键值对序列（Pairs）物件的规矩
var require_pairs = __commonJS({
  "node_modules/js-yaml/lib/type/pairs.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    var _toString = Object.prototype.toString;
    // 判断是不是键值对序列物件的标记
    function resolveYamlPairs(data) {
      if (data === null)
        return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      // 键值对序列是一个序列，每个元素是一个只有一个键值对的对象
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]")
          return false; // 元素不是对象
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false; // 对象里不是只有一个键值对
        result[index] = [keys[0], pair[keys[0]]]; // 变成 [key, value] 数组
      }
      return true;
    }
    // 把数据变成 [key, value] 数组的序列
    function constructYamlPairs(data) {
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
    // 定义键值对序列类型
    module.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence", // 种类是序列
      resolve: resolveYamlPairs, // 判断函数
      construct: constructYamlPairs // 构造函数
    });
  }
});

// node_modules/js-yaml/lib/type/set.js
// 这是处理集合（Set）物件的规矩
var require_set = __commonJS({
  "node_modules/js-yaml/lib/type/set.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入物件类型登记处
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 判断是不是集合物件的标记
    function resolveYamlSet(data) {
      if (data === null)
        return true;
      var key, object = data;
      // 集合是一个映射，所有值都是 null
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false; // 值不是 null
        }
      }
      return true;
    }
    // 把数据变成集合（其实就是对象）
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    // 定义集合类型
    module.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping", // 种类是映射
      resolve: resolveYamlSet, // 判断函数
      construct: constructYamlSet // 构造函数
    });
  }
});

// node_modules/js-yaml/lib/schema/default.js
// 这是默认的规矩本，啥都认识点
var require_default = __commonJS({
  "node_modules/js-yaml/lib/schema/default.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 继承核心规矩本，加上时间戳和合并标记（隐式），以及二进制、有序映射、键值对序列、集合（显式）
    module.exports = require_core().extend({
      implicit: [
        require_timestamp(),
        require_merge()
      ],
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
// 这是山寨里的情报分析员，负责把外面的情报（YAML 字符串）变成山寨能懂的物件
var require_loader = __commonJS({
  "node_modules/js-yaml/lib/loader.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入通用小事处理员、刑堂和记录员
    var common = require_common();
    var YAMLException = require_exception();
    var makeSnippet = require_snippet();
    // 引入默认的规矩本
    var DEFAULT_SCHEMA = require_default();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 定义情报分析的上下文模式
    var CONTEXT_FLOW_IN = 1; // 在流式集合里
    var CONTEXT_FLOW_OUT = 2; // 在流式集合外
    var CONTEXT_BLOCK_IN = 3; // 在块式集合里
    var CONTEXT_BLOCK_OUT = 4; // 在块式集合外
    // 定义处理换行的方式
    var CHOMPING_CLIP = 1; // 剪掉末尾换行
    var CHOMPING_STRIP = 2; // 剥掉所有末尾换行
    var CHOMPING_KEEP = 3; // 保留末尾换行
    // 定义一些不好的字符模式
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    // 定义非 ASCII 换行符模式
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    // 定义流式集合的指示符模式
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    // 定义标记句柄的模式
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    // 定义标记 URI 的模式
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    // 获取物件的类名
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    // 看看是不是换行符
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    // 看看是不是空白符
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    // 看看是不是空白符或换行符
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    // 看看是不是流式集合指示符
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    // 把十六进制字符转成数字
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32; // 转小写
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    // 看看转义序列后面跟的十六进制数字有几位
    function escapedHexLen(c) {
      if (c === 120) {
        return 2; // \xXX
      }
      if (c === 117) {
        return 4; // \uXXXX
      }
      if (c === 85) {
        return 8; // \UXXXXXXXX
      }
      return 0;
    }
    // 把十进制字符转成数字
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    // 处理简单的转义序列
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    // 根据码点生成字符
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      // 处理增补平面字符
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    // 预计算简单转义序列的查找表
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    // 情报分析的状态机
    function State(input, options) {
      this.input = input; // 输入的情报
      this.filename = options["filename"] || null; // 文件名
      this.schema = options["schema"] || DEFAULT_SCHEMA; // 用的规矩本
      this.onWarning = options["onWarning"] || null; // 警告处理函数
      this.legacy = options["legacy"] || false; // 是否兼容老版本
      this.json = options["json"] || false; // 是否按 JSON 规矩来
      this.listener = options["listener"] || null; // 监听器
      this.implicitTypes = this.schema.compiledImplicit; // 隐式类型列表
      this.typeMap = this.schema.compiledTypeMap; // 类型映射表
      this.length = input.length; // 情报总长度
      this.position = 0; // 当前位置
      this.line = 0; // 当前行号
      this.lineStart = 0; // 当前行开始位置
      this.lineIndent = 0; // 当前行缩进
      this.firstTabInLine = -1; // 当前行第一个 Tab 的位置
      this.documents = []; // 解析出来的文件列表
    }
    // 生成错误信息，像刑堂的判决书
    function generateError(state, message) {
      var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        // omit trailing \0
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
      };
      mark.snippet = makeSnippet(mark); // 附上代码片段
      return new YAMLException(message, mark);
    }
    // 扔到刑堂（抛出错误）
    function throwError(state, message) {
      throw generateError(state, message);
    }
    // 发出警告，像山寨里的锣鼓声
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    // 处理山寨里的各种指令
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive"); // YAML 指令重复了
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument"); // YAML 指令只接受一个参数
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]); // 解析版本号
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive"); // 版本号格式不对
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document"); // 不支持的 YAML 版本
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2; // 1.1 版本需要检查非 ASCII 换行符
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document"); // 不支持的 YAML 次版本
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments"); // TAG 指令需要两个参数
        }
        handle = args[0]; // 句柄
        prefix = args[1]; // 前缀
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive"); // 句柄格式不对
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle'); // 句柄重复声明了
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive"); // 前缀格式不对
        }
        try {
          prefix = decodeURIComponent(prefix); // 解码前缀
        } catch (err) {
          throwError(state, "tag prefix is malformed: " + prefix); // 前缀解码出错
        }
        state.tagMap[handle] = prefix; // 记录句柄和前缀的映射
      }
    };
    // 截取一段情报（字符串）
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          // 如果按 JSON 规矩来，检查字符是否合法
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character"); // 非法 JSON 字符
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters"); // 包含不可打印字符
        }
        state.result += _result; // 把截取的情报加到结果里
      }
    }
    // 合并映射，就像把两个山寨的资源合起来
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable"); // 源不是个物件，没法合
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
          // 如果目标里没有这个键，就加进去
          destination[key] = source[key];
          overridableKeys[key] = true; // 标记这个键是合并进来的，可以被覆盖
        }
      }
    }
    // 存储一个映射对（键值对）
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
      var index, quantity;
      // 处理键是数组的情况
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, "nested arrays are not supported inside keys"); // 键里不能嵌套数组
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]"; // 对象变成字符串表示
          }
        }
      }
      // 处理键是对象的情况
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode); // 把键转成字符串
      if (_result === null) {
        _result = {}; // 如果结果是空，就初始化一个对象
      }
      // 处理合并标记
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys); // 合并多个源
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys); // 合并单个源
        }
      } else {
        // 普通键值对
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          // 如果不是 JSON 模式，且键重复了，且不是合并进来的键，就报错
          state.line = startLine || state.line;
          state.lineStart = startLineStart || state.lineStart;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key"); // 键重复了
        }
        // 特殊处理 __proto__ 键
        if (keyNode === "__proto__") {
          Object.defineProperty(_result, keyNode, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: valueNode
          });
        } else {
          _result[keyNode] = valueNode; // 存储键值对
        }
        delete overridableKeys[keyNode]; // 这个键已经被覆盖了，从可覆盖列表里删掉
      }
      return _result; // 返回结果对象
    }
    // 读取一个换行符
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++; // LF
      } else if (ch === 13) {
        state.position++; // CR
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++; // CRLF
        }
      } else {
        throwError(state, "a line break is expected"); // 没找到换行符
      }
      state.line += 1; // 行号加一
      state.lineStart = state.position; // 记录新行开始位置
      state.firstTabInLine = -1; // 重置 Tab 标记
    }
    // 跳过分隔空白和注释
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        // 跳过空白符
        while (is_WHITE_SPACE(ch)) {
          if (ch === 9 && state.firstTabInLine === -1) {
            state.firstTabInLine = state.position; // 记录第一个 Tab 位置
          }
          ch = state.input.charCodeAt(++state.position);
        }
        // 跳过注释
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        // 处理换行
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++; // 换行计数
          state.lineIndent = 0; // 重置缩进
          // 计算新行缩进
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break; // 不是空白、注释、换行，就停
        }
      }
      // 检查缩进是否足够
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation"); // 缩进不够
      }
      return lineBreaks; // 返回跳过的换行数
    }
    // 检查是不是文档分隔符 (--- 或 ...)
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true; // 后面是空白或文件结束
        }
      }
      return false;
    }
    // 写入折叠的换行
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " "; // 一个换行变一个空格
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1); // 多个换行变多个换行
      }
    }
    // 读取普通标量（没有引号的字符串）
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      // 检查开头字符是否合法
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      // 检查 ? 和 - 开头的情况
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar"; // 标记为标量
      state.result = ""; // 清空结果
      captureStart = captureEnd = state.position; // 记录开始位置
      hasPendingContent = false; // 是否有待处理的内容
      while (ch !== 0) {
        // 检查 : 后面是不是空白或流式指示符
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break; // 遇到键值分隔符了
          }
        } else if (ch === 35) {
          // 检查 # 前面是不是空白
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break; // 遇到注释了
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          // 遇到文档分隔符或流式指示符
          break;
        } else if (is_EOL(ch)) {
          // 遇到换行
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1); // 跳过换行和空白
          if (state.lineIndent >= nodeIndent) {
            // 新行缩进足够，继续读
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            // 新行缩进不够，结束
            state.position = captureEnd; // 回退位置
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        // 处理待处理的内容（换行后的内容）
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line); // 写入折叠的换行
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        // 记录非空白字符的结束位置
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false); // 截取最后一段
      if (state.result) {
        return true; // 读到了内容
      }
      state.kind = _kind; // 没读到内容，恢复状态
      state.result = _result;
      return false;
    }
    // 读取单引号标量
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false; // 不是单引号开头
      }
      state.kind = "scalar"; // 标记为标量
      state.result = ""; // 清空结果
      state.position++; // 跳过开头的单引号
      captureStart = captureEnd = state.position; // 记录开始位置
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          // 遇到单引号
          captureSegment(state, captureStart, state.position, true); // 截取内容
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            // 遇到连续两个单引号，表示一个单引号字符
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true; // 遇到单个单引号，结束
          }
        } else if (is_EOL(ch)) {
          // 遇到换行
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent)); // 跳过换行和空白，写入折叠的换行
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar"); // 文档提前结束了
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar"); // 文件流提前结束了
    }
    // 读取双引号标量
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false; // 不是双引号开头
      }
      state.kind = "scalar"; // 标记为标量
      state.result = ""; // 清空结果
      state.position++; // 跳过开头的双引号
      captureStart = captureEnd = state.position; // 记录开始位置
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          // 遇到双引号
          captureSegment(state, captureStart, state.position, true); // 截取内容
          state.position++; // 跳过双引号
          return true; // 结束
        } else if (ch === 92) {
          // 遇到转义符 \
          captureSegment(state, captureStart, state.position, true); // 截取 \ 前面的内容
          ch = state.input.charCodeAt(++state.position); // 跳过 \
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent); // 跳过换行和空白
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            // 简单的转义序列
            state.result += simpleEscapeMap[ch]; // 写入转义后的字符
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            // 十六进制转义序列
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character"); // 期望十六进制字符
              }
            }
            state.result += charFromCodepoint(hexResult); // 写入转义后的字符
            state.position++;
          } else {
            throwError(state, "unknown escape sequence"); // 未知的转义序列
          }
          captureStart = captureEnd = state.position; // 记录新段落开始位置
        } else if (is_EOL(ch)) {
          // 遇到换行
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent)); // 跳过换行和空白，写入折叠的换行
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar"); // 文档提前结束了
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar"); // 文件流提前结束了
    }
    // 读取流式集合（[] 或 {}）
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93; // 序列用 ] 结束
        isMapping = false; // 不是映射
        _result = []; // 结果是数组
      } else if (ch === 123) {
        terminator = 125; // 映射用 } 结束
        isMapping = true; // 是映射
        _result = {}; // 结果是对象
      } else {
        return false; // 不是流式集合开头
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result; // 如果有锚点，记录下来
      }
      ch = state.input.charCodeAt(++state.position); // 跳过 [ 或 {
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent); // 跳过空白和注释
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          // 遇到结束符
          state.position++; // 跳过结束符
          state.tag = _tag; // 恢复标记
          state.anchor = _anchor; // 恢复锚点
          state.kind = isMapping ? "mapping" : "sequence"; // 标记种类
          state.result = _result; // 设置结果
          return true; // 结束
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries"); // 缺少逗号
        } else if (ch === 44) {
          throwError(state, "expected the node content, but found ','"); // 逗号后面没有内容
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          // 遇到 ? (显式键)
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true; // 是键值对，且是显式的
            state.position++; // 跳过 ?
            skipSeparationSpace(state, true, nodeIndent); // 跳过空白
          }
        }
        _line = state.line;
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true); // 解析键节点
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent); // 跳过空白
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          // 遇到 : (键值分隔符)
          isPair = true; // 是键值对
          ch = state.input.charCodeAt(++state.position); // 跳过 :
          skipSeparationSpace(state, true, nodeIndent); // 跳过空白
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true); // 解析值节点
          valueNode = state.result;
        }
        // 存储键值对或序列元素
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos)); // 键值对作为序列的一个元素
        } else {
          _result.push(keyNode); // 普通序列元素
        }
        skipSeparationSpace(state, true, nodeIndent); // 跳过空白
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          // 遇到逗号
          readNext = true; // 准备读下一个元素
          ch = state.input.charCodeAt(++state.position); // 跳过逗号
        } else {
          readNext = false; // 没有逗号，下一个必须是结束符
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection"); // 文件流提前结束了
    }
    // 读取块式标量（| 或 > 开头）
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false; // | 是字面量风格
      } else if (ch === 62) {
        folding = true; // > 是折叠风格
      } else {
        return false; // 不是块式标量开头
      }
      state.kind = "scalar"; // 标记为标量
      state.result = ""; // 清空结果
      // 处理块式标量头部（+ 或 -，以及缩进指示符）
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP; // 设置处理换行的方式
          } else {
            throwError(state, "repeat of a chomping mode identifier"); // 处理换行的方式重复指定了
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          // 缩进指示符
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one"); // 缩进不能小于 1
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1; // 计算实际缩进
            detectedIndent = true; // 标记已检测到缩进
          } else {
            throwError(state, "repeat of an indentation width identifier"); // 缩进重复指定了
          }
        } else {
          break; // 不是 + - 数字，结束头部
        }
      }
      // 跳过头部后面的空白和注释
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      // 读取内容行
      while (ch !== 0) {
        readLineBreak(state); // 读取换行
        state.lineIndent = 0; // 重置缩进
        ch = state.input.charCodeAt(state.position);
        // 计算行缩进
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        // 如果没有显式指定缩进，就用第一行的缩进作为基准
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++; // 空行计数
          continue;
        }
        if (state.lineIndent < textIndent) {
          // 缩进小于文本缩进，结束块式标量
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines); // 保留空行
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n"; // 只保留一个换行
            }
          }
          break;
        }
        // 处理折叠风格的换行
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true; // 遇到更深的缩进
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines); // 写入空行
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1); // 写入空行 + 一个换行
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " "; // 写入一个空格
            }
          } else {
            state.result += common.repeat("\n", emptyLines); // 写入空行
          }
        } else {
          // 处理字面量风格的换行
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines); // 写入空行
        }
        didReadContent = true; // 标记已读取内容
        detectedIndent = true; // 标记已检测到缩进
        emptyLines = 0; // 重置空行计数
        captureStart = state.position; // 记录内容开始位置
        // 读取内容直到行尾
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false); // 截取内容
      }
      return true; // 读取成功
    }
    // 读取块式序列（- 开头）
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false; // 行里有 Tab，不是块式序列
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result; // 如果有锚点，记录下来
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          throwError(state, "tab characters must not be used in indentation"); // 缩进里不能有 Tab
        }
        if (ch !== 45) {
          break; // 不是 - 开头，结束
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break; // - 后面不是空白或换行，不是序列项
        }
        detected = true; // 标记检测到序列
        state.position++; // 跳过 -
        if (skipSeparationSpace(state, true, -1)) {
          // 跳过空白和注释
          if (state.lineIndent <= nodeIndent) {
            _result.push(null); // 空序列项
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line; // 记录当前行号
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true); // 解析序列项节点
        _result.push(state.result); // 添加到结果里
        skipSeparationSpace(state, true, -1); // 跳过空白和注释
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry"); // 序列项缩进不对
        } else if (state.lineIndent < nodeIndent) {
          break; // 缩进小于父节点，结束序列
        }
      }
      if (detected) {
        state.tag = _tag; // 恢复标记
        state.anchor = _anchor; // 恢复锚点
        state.kind = "sequence"; // 标记种类
        state.result = _result; // 设置结果
        return true; // 读取成功
      }
      return false;
    }
    // 读取块式映射（键值对）
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.firstTabInLine !== -1)
        return false; // 行里有 Tab，不是块式映射
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result; // 如果有锚点，记录下来
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (!atExplicitKey && state.firstTabInLine !== -1) {
          state.position = state.firstTabInLine;
          throwError(state, "tab characters must not be used in indentation"); // 缩进里不能有 Tab
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // 记录当前行号
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          // 遇到 ? (显式键) 或 : (空键)
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos); // 存储上一个显式键值对（值是空）
              keyTag = keyNode = valueNode = null;
            }
            detected = true; // 标记检测到映射
            atExplicitKey = true; // 标记当前是显式键
            allowCompact = true; // 允许紧凑格式
          } else if (atExplicitKey) {
            atExplicitKey = false; // 显式键结束
            allowCompact = true; // 允许紧凑格式
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"); // 不完整的显式键值对
          }
          state.position += 1; // 跳过 ? 或 :
          ch = following;
        } else {
          _keyLine = state.line;
          _keyLineStart = state.lineStart;
          _keyPos = state.position;
          if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
            break; // 解析键节点失败
          }
          if (state.line === _line) {
            // 键和值在同一行
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              // 遇到 : (键值分隔符)
              ch = state.input.charCodeAt(++state.position); // 跳过 :
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping"); // : 后面需要空白
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos); // 存储上一个显式键值对（值是空）
                keyTag = keyNode = valueNode = null;
              }
              detected = true; // 标记检测到映射
              atExplicitKey = false; // 不是显式键了
              allowCompact = false; // 不允许紧凑格式
              keyTag = state.tag; // 记录键的标记
              keyNode = state.result; // 记录键节点
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed"); // 隐式键值对缺少 :
            } else {
              state.tag = _tag; // 恢复标记
              state.anchor = _anchor; // 恢复锚点
              return true; // 不是映射项，可能是其他节点
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key"); // 多行键不能是隐式键
          } else {
            state.tag = _tag; // 恢复标记
            state.anchor = _anchor; // 恢复锚点
            return true; // 不是映射项，可能是其他节点
          }
        }
        // 解析值节点
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (atExplicitKey) {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
          }
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result; // 显式键的值是键节点本身
            } else {
              valueNode = state.result; // 隐式键的值是值节点
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos); // 存储键值对
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1); // 跳过空白和注释
          ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry"); // 映射项缩进不对
        } else if (state.lineIndent < nodeIndent) {
          break; // 缩进小于父节点，结束映射
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos); // 存储最后一个显式键值对（值是空）
      }
      if (detected) {
        state.tag = _tag; // 恢复标记
        state.anchor = _anchor; // 恢复锚点
        state.kind = "mapping"; // 标记种类
        state.result = _result; // 设置结果
      }
      return detected; // 是否检测到映射
    }
    // 读取标记属性 (! 或 !<...> 或 !!...)
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false; // 不是 ! 开头
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property"); // 标记重复了
      }
      ch = state.input.charCodeAt(++state.position); // 跳过 !
      if (ch === 60) {
        isVerbatim = true; // 是 verbatim 标记 (<...>)
        ch = state.input.charCodeAt(++state.position); // 跳过 <
      } else if (ch === 33) {
        isNamed = true; // 是具名标记 (!!)
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position); // 跳过 !
      } else {
        tagHandle = "!"; // 是普通标记 (!)
      }
      _position = state.position; // 记录标记名开始位置
      if (isVerbatim) {
        // 读取 verbatim 标记名
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62); // 读到 > 或文件结束
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position); // 截取标记名
          ch = state.input.charCodeAt(++state.position); // 跳过 >
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag"); // 文件流提前结束了
        }
      } else {
        // 读取普通或具名标记名
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1); // 截取具名句柄
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters"); // 具名句柄包含非法字符
              }
              isNamed = true; // 标记是具名标记
              _position = state.position + 1; // 记录标记名开始位置
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks"); // 标记后缀不能包含 !
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position); // 截取标记名
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters"); // 标记后缀不能包含流式指示符
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName); // 标记名包含非法字符
      }
      try {
        tagName = decodeURIComponent(tagName); // 解码标记名
      } catch (err) {
        throwError(state, "tag name is malformed: " + tagName); // 标记名解码出错
      }
      // 设置最终标记
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName; // 使用句柄映射
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName; // 本地标记
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName; // 标准标记
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"'); // 未声明的句柄
      }
      return true; // 读取成功
    }
    // 读取锚点属性 (&...)
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false; // 不是 & 开头
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property"); // 锚点重复了
      }
      ch = state.input.charCodeAt(++state.position); // 跳过 &
      _position = state.position; // 记录锚点名开始位置
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character"); // 锚点名不能为空
      }
      state.anchor = state.input.slice(_position, state.position); // 截取锚点名
      return true; // 读取成功
    }
    // 读取别名 (*...)
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false; // 不是 * 开头
      ch = state.input.charCodeAt(++state.position); // 跳过 *
      _position = state.position; // 记录别名开始位置
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character"); // 别名不能为空
      }
      alias = state.input.slice(_position, state.position); // 截取别名
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"'); // 未找到对应的锚点
      }
      state.result = state.anchorMap[alias]; // 设置结果为锚点指向的物件
      skipSeparationSpace(state, true, -1); // 跳过空白和注释
      return true; // 读取成功
    }
    // 组合节点，这是情报分析的核心步骤
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state); // 通知监听器节点开始了
      }
      state.tag = null; // 重置标记
      state.anchor = null; // 重置锚点
      state.kind = null; // 重置种类
      state.result = null; // 重置结果
      // 判断是否允许块式风格
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        // 如果允许向前查找空白
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true; // 标记在新行
          // 判断当前缩进和父节点缩进的关系
          if (state.lineIndent > parentIndent) {
            indentStatus = 1; // 缩进更深
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0; // 缩进相同
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1; // 缩进更浅
          }
        }
      }
      // 如果缩进更深，尝试读取属性
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          // 读取标记或锚点属性
          if (skipSeparationSpace(state, true, -1)) {
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
        allowBlockCollections = atNewLine || allowCompact; // 块式集合必须在新行或允许紧凑格式
      }
      // 根据缩进状态和上下文读取节点内容
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent; // 流式上下文使用父节点缩进
        } else {
          flowIndent = parentIndent + 1; // 块式上下文使用父节点缩进 + 1
        }
        blockIndent = state.position - state.lineStart; // 计算当前位置的缩进
        if (indentStatus === 1) {
          // 缩进更深
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            // 尝试读取块式集合或流式集合
            hasContent = true;
          } else {
            // 尝试读取标量或别名
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties"); // 别名节点不能有属性
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?"; // 普通标量默认标记为 ?
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result; // 如果有锚点，记录下来
            }
          }
        } else if (indentStatus === 0) {
          // 缩进相同
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent); // 只允许读取块式序列
        }
      }
      // 处理标记和类型解析
      if (state.tag === null) {
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result; // 如果有锚点，记录下来
        }
      } else if (state.tag === "?") {
        // 隐式标记，尝试解析类型
        if (state.result !== null && state.kind !== "scalar") {
          throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"'); // ? 标记只能用于标量
        }
        for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
          type = state.implicitTypes[typeIndex];
          if (type.resolve(state.result)) {
            state.result = type.construct(state.result); // 构造物件
            state.tag = type.tag; // 设置实际标记
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result; // 如果有锚点，更新记录
            }
            break; // 找到匹配的类型就停止
          }
        }
      } else if (state.tag !== "!") {
        // 显式标记，查找对应的类型
        if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
        } else {
          type = null;
          typeList = state.typeMap.multi[state.kind || "fallback"];
          for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
            // 查找多标记类型
            if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
              type = typeList[typeIndex];
              break;
            }
          }
        }
        if (!type) {
          throwError(state, "unknown tag !<" + state.tag + ">"); // 未知的标记
        }
        if (state.result !== null && type.kind !== state.kind) {
          throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"'); // 节点种类和标记不匹配
        }
        if (!type.resolve(state.result, state.tag)) {
          throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag"); // 无法解析带有显式标记的节点
        } else {
          state.result = type.construct(state.result, state.tag); // 构造物件
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result; // 如果有锚点，更新记录
          }
        }
      }
      if (state.listener !== null) {
        state.listener("close", state); // 通知监听器节点结束了
      }
      return state.tag !== null || state.anchor !== null || hasContent; // 返回是否成功组合了节点
    }
    // 读取一个文档
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null; // 重置版本
      state.checkLineBreaks = state.legacy; // 根据 legacy 模式设置是否检查非 ASCII 换行符
      state.tagMap = /* @__PURE__ */ Object.create(null); // 重置标记映射
      state.anchorMap = /* @__PURE__ */ Object.create(null); // 重置锚点映射
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1); // 跳过空白和注释
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break; // 不是在行首或者不是 % 开头，就不是指令
        }
        hasDirectives = true; // 标记有指令
        ch = state.input.charCodeAt(++state.position); // 跳过 %
        _position = state.position; // 记录指令名开始位置
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position); // 截取指令名
        directiveArgs = []; // 指令参数列表
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length"); // 指令名不能为空
        }
        // 读取指令参数
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break; // 遇到注释，参数结束
          }
          if (is_EOL(ch))
            break; // 遇到换行，参数结束
          _position = state.position; // 记录参数开始位置
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position)); // 截取参数
        }
        if (ch !== 0)
          readLineBreak(state); // 读取换行
        // 处理指令
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"'); // 未知的指令
        }
      }
      skipSeparationSpace(state, true, -1); // 跳过空白和注释
      // 检查文档开始标记 (---)
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3; // 跳过 ---
        skipSeparationSpace(state, true, -1); // 跳过空白和注释
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected"); // 有指令但没有文档开始标记
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true); // 组合文档的根节点
      skipSeparationSpace(state, true, -1); // 跳过空白和注释
      // 检查非 ASCII 换行符
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content"); // 非 ASCII 换行符被当作内容了
      }
      state.documents.push(state.result); // 把解析出的文档加到列表里
      // 检查文档结束标记 (...) 或文件结束
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3; // 跳过 ...
          skipSeparationSpace(state, true, -1); // 跳过空白和注释
        }
        return; // 文档结束
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected"); // 期望文件结束或文档分隔符
      } else {
        return; // 文件结束
      }
    }
    // 加载所有文档
    function loadDocuments(input, options) {
      input = String(input);
      options = options || {};
      if (input.length !== 0) {
        // 确保输入以换行符结尾
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        // 移除 BOM
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options); // 创建状态机
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input"); // 输入中不允许 null 字节
      }
      state.input += "\0"; // 在末尾加上 null 字节作为结束标记
      // 跳过开头的空白缩进
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      // 读取所有文档
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents; // 返回文档列表
    }
    // 加载所有文档并迭代处理
    function loadAll(input, iterator, options) {
      if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options); // 加载文档
      if (typeof iterator !== "function") {
        return documents; // 没有迭代器，直接返回文档列表
      }
      // 用迭代器处理每个文档
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    // 只加载一个文档
    function load(input, options) {
      var documents = loadDocuments(input, options); // 加载文档
      if (documents.length === 0) {
        return void 0; // 没有文档
      } else if (documents.length === 1) {
        return documents[0]; // 只有一个文档，返回它
      }
      throw new YAMLException("expected a single document in the stream, but found more"); // 期望一个文档，但找到多个
    }
    // 把加载函数挂出去
    module.exports.loadAll = loadAll;
    module.exports.load = load;
  }
});

// node_modules/js-yaml/lib/dumper.js
// 这是山寨里的情报加密员，负责把山寨的物件变成外面的情报（YAML 字符串）
var require_dumper = __commonJS({
  "node_modules/js-yaml/lib/dumper.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入通用小事处理员、刑堂和默认规矩本
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_SCHEMA = require_default();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    // 定义一些常用字符的码点
    var CHAR_BOM = 65279;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33; // !
    var CHAR_DOUBLE_QUOTE = 34; // "
    var CHAR_SHARP = 35; // #
    var CHAR_PERCENT = 37; // %
    var CHAR_AMPERSAND = 38; // &
    var CHAR_SINGLE_QUOTE = 39; // '
    var CHAR_ASTERISK = 42; // *
    var CHAR_COMMA = 44; // ,
    var CHAR_MINUS = 45; // -
    var CHAR_COLON = 58; // :
    var CHAR_EQUALS = 61; // =
    var CHAR_GREATER_THAN = 62; // >
    var CHAR_QUESTION = 63; // ?
    var CHAR_COMMERCIAL_AT = 64; // @
    var CHAR_LEFT_SQUARE_BRACKET = 91; // [
    var CHAR_RIGHT_SQUARE_BRACKET = 93; // ]
    var CHAR_GRAVE_ACCENT = 96; // `
    var CHAR_LEFT_CURLY_BRACKET = 123; // {
    var CHAR_VERTICAL_LINE = 124; // |
    var CHAR_RIGHT_CURLY_BRACKET = 125; // }
    // 定义需要转义的字符及其转义序列
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
    // 定义一些不推荐使用的布尔值表示
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
    // 定义不推荐使用的 Base60 数字表示模式
    var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    // 整理样式映射表
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2); // 转换标准标记
        }
        type = schema.compiledTypeMap["fallback"][tag]; // 查找类型
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style]; // 使用样式别名
        }
        result[tag] = style; // 记录标记对应的样式
      }
      return result;
    }
    // 把字符码点转成十六进制转义序列
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase(); // 转十六进制大写
      if (character <= 255) {
        handle = "x";
        length = 2; // \xXX
      } else if (character <= 65535) {
        handle = "u";
        length = 4; // \uXXXX
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8; // \UXXXXXXXX
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF"); // 码点太大
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string; // 拼接转义序列
    }
    // 定义引用风格
    var QUOTING_TYPE_SINGLE = 1; // 单引号
    var QUOTING_TYPE_DOUBLE = 2; // 双引号
    // 情报加密的状态机
    function State(options) {
      this.schema = options["schema"] || DEFAULT_SCHEMA; // 用的规矩本
      this.indent = Math.max(1, options["indent"] || 2); // 缩进空格数
      this.noArrayIndent = options["noArrayIndent"] || false; // 数组是否不缩进
      this.skipInvalid = options["skipInvalid"] || false; // 跳过无效物件
      this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"]; // 流式风格层级
      this.styleMap = compileStyleMap(this.schema, options["styles"] || null); // 样式映射表
      this.sortKeys = options["sortKeys"] || false; // 是否排序键
      this.lineWidth = options["lineWidth"] || 80; // 行宽限制
      this.noRefs = options["noRefs"] || false; // 不使用锚点和别名
      this.noCompatMode = options["noCompatMode"] || false; // 不兼容模式
      this.condenseFlow = options["condenseFlow"] || false; // 紧凑流式风格
      this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE; // 默认引用风格
      this.forceQuotes = options["forceQuotes"] || false; // 强制引用
      this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null; // 替换函数
      this.implicitTypes = this.schema.compiledImplicit; // 隐式类型列表
      this.explicitTypes = this.schema.compiledExplicit; // 显式类型列表
      this.tag = null; // 当前物件的标记
      this.result = ""; // 当前物件的字符串表示
      this.duplicates = []; // 重复出现的物件列表
      this.usedDuplicates = null; // 已使用的重复物件标记
    }
    // 缩进字符串
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
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
          result += ind; // 非空行才加缩进
        result += line;
      }
      return result;
    }
    // 生成下一行的缩进
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    // 测试字符串是否能被隐式解析为某种类型
    function testImplicitResolving(state, str) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
          return true; // 能被解析
        }
      }
      return false; // 不能被解析
    }
    // 看看是不是空白符 (空格或 Tab)
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    // 看看是不是可打印字符
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
    }
    // 看看是不是非空白的可打印字符
    function isNsCharOrWhitespace(c) {
      return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    // 看看字符在普通标量中间是否安全
    function isPlainSafe(c, prev, inblock) {
      var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
      var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
      return (
        // ns-plain-safe
        (inblock ? (
          // c = flow-in
          cIsNsCharOrWhitespace
        ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
      );
    }
    // 看看字符在普通标量开头是否安全
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    // 看看字符在普通标量结尾是否安全
    function isPlainSafeLast(c) {
      return !isWhitespace(c) && c !== CHAR_COLON;
    }
    // 获取字符串指定位置的码点
    function codePointAt(string, pos) {
      var first = string.charCodeAt(pos), second;
      if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 56320 && second <= 57343) {
          return (first - 55296) * 1024 + second - 56320 + 65536; // 处理增补平面字符
        }
      }
      return first;
    }
    // 看看字符串是否需要缩进指示符 (以换行或空格开头)
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    // 定义标量的样式
    var STYLE_PLAIN = 1; // 普通风格
    var STYLE_SINGLE = 2; // 单引号风格
    var STYLE_LITERAL = 3; // 字面量风格 (|)
    var STYLE_FOLDED = 4; // 折叠风格 (>)
    var STYLE_DOUBLE = 5; // 双引号风格
    // 选择标量的最佳样式
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
      var i;
      var char = 0;
      var prevChar = null;
      var hasLineBreak = false; // 是否包含换行
      var hasFoldableLine = false; // 是否包含可折叠的行
      var shouldTrackWidth = lineWidth !== -1; // 是否需要考虑行宽
      var previousLineBreak = -1; // 上一个换行的位置
      // 检查是否能用普通风格
      var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
      if (singleLineOnly || forceQuotes) {
        // 如果只能单行或强制引用，只检查字符是否可打印和安全
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = codePointAt(string, i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE; // 包含不可打印字符，只能用双引号
          }
          plain = plain && isPlainSafe(char, prevChar, inblock);
          prevChar = char;
        }
      } else {
        // 否则，检查换行和行宽
        for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
          char = codePointAt(string, i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // 可折叠的行：太长，且不是更深的缩进
                i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE; // 包含不可打印字符，只能用双引号
          }
          plain = plain && isPlainSafe(char, prevChar, inblock);
          prevChar = char;
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " "); // 检查最后一行
      }
      // 根据检查结果选择样式
      if (!hasLineBreak && !hasFoldableLine) {
        // 单行，没有可折叠的行
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
          return STYLE_PLAIN; // 安全，不强制引用，不歧义，用普通风格
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE; // 否则根据默认引用风格选择单引号或双引号
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE; // 缩进太大且需要缩进指示符，用双引号
      }
      if (!forceQuotes) {
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL; // 不强制引用，有可折叠的行用折叠风格，否则用字面量风格
      }
      return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE; // 强制引用，根据默认引用风格选择单引号或双引号
    }
    // 写入标量
    function writeScalar(state, string, level, iskey, inblock) {
      state.dump = function () {
        if (string.length === 0) {
          return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''"; // 空字符串
        }
        if (!state.noCompatMode) {
          // 兼容模式下，检查不推荐的布尔值和 Base60 数字
          if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'"; // 用引号包起来
          }
        }
        var indent = state.indent * Math.max(1, level); // 计算缩进空格数
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent); // 计算实际行宽限制
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel; // 是否只能单行
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2); // 测试是否会引起歧义
        }
        // 根据选择的样式生成字符串
        switch (chooseScalarStyle(
          string,
          singleLineOnly,
          state.indent,
          lineWidth,
          testAmbiguity,
          state.quotingType,
          state.forceQuotes && !iskey,
          inblock
        )) {
          case STYLE_PLAIN:
            return string; // 普通风格
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'"; // 单引号风格，单引号转义为两个单引号
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent)); // 字面量风格
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent)); // 折叠风格
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"'; // 双引号风格，转义特殊字符
          default:
            throw new YAMLException("impossible error: invalid scalar style"); // 不可能发生的错误
        }
      }();
    }
    // 生成块式标量的头部 (| 或 > 后面跟着缩进指示符和处理换行的方式)
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : ""; // 缩进指示符
      var clip = string[string.length - 1] === "\n"; // 是否以换行结尾
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n"); // 是否保留末尾换行
      var chomp = keep ? "+" : clip ? "" : "-"; // 处理换行的方式 (+ 保留，空 剪掉，- 剥掉)
      return indentIndicator + chomp + "\n"; // 拼接头部
    }
    // 移除字符串末尾的换行
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    // 折叠字符串，使其符合行宽限制
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g; // 匹配换行和后面的非换行内容
      var result = function () {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width); // 折叠第一行
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " "; // 前面是否是更深的缩进
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2]; // 换行前缀和行内容
        moreIndented = line[0] === " "; // 当前行是否是更深的缩进
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width); // 拼接结果，处理换行
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    // 折叠单行字符串
    function foldLine(line, width) {
      if (line === "" || line[0] === " ")
        return line; // 空行或以空格开头的行不折叠
      var breakRe = / [^ ]/g; // 匹配空格后面跟着非空格字符
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          // 如果当前段落超过行宽
          end = curr > start ? curr : next; // 选择折叠点
          result += "\n" + line.slice(start, end); // 写入折叠后的行
          start = end + 1; // 更新开始位置
        }
        curr = next; // 更新当前位置
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        // 处理最后一段
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1); // 移除开头的换行
    }
    // 转义字符串中的特殊字符
    function escapeString(string) {
      var result = "";
      var char = 0;
      var escapeSeq;
      for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
        char = codePointAt(string, i);
        escapeSeq = ESCAPE_SEQUENCES[char]; // 查找转义序列
        if (!escapeSeq && isPrintable(char)) {
          // 如果没有转义序列且是可打印字符，直接添加
          result += string[i];
          if (char >= 65536)
            result += string[i + 1];
        } else {
          result += escapeSeq || encodeHex(char); // 添加转义序列或十六进制编码
        }
      }
      return result;
    }
    // 写入流式序列 ([...])
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value); // 应用替换函数
        }
        if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
          // 写入节点
          if (_result !== "")
            _result += "," + (!state.condenseFlow ? " " : ""); // 添加逗号和空格
          _result += state.dump; // 拼接节点字符串
        }
      }
      state.tag = _tag; // 恢复标记
      state.dump = "[" + _result + "]"; // 拼接流式序列字符串
    }
    // 写入块式序列 (- ...)
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length, value;
      for (index = 0, length = object.length; index < length; index += 1) {
        value = object[index];
        if (state.replacer) {
          value = state.replacer.call(object, String(index), value); // 应用替换函数
        }
        if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
          // 写入节点
          if (!compact || _result !== "") {
            _result += generateNextLine(state, level); // 添加换行和缩进
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-"; // 如果节点以换行开头，- 后面不加空格
          } else {
            _result += "- "; // 否则加 - 和空格
          }
          _result += state.dump; // 拼接节点字符串
        }
      }
      state.tag = _tag; // 恢复标记
      state.dump = _result || "[]"; // 拼接块式序列字符串，空序列用 [] 表示
    }
    // 写入流式映射 ({...})
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (_result !== "")
          pairBuffer += ", "; // 添加逗号和空格
        if (state.condenseFlow)
          pairBuffer += '"'; // 紧凑模式下，键加双引号
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue); // 应用替换函数
        }
        if (!writeNode(state, level, objectKey, false, false)) {
          continue; // 写入键节点失败，跳过
        }
        if (state.dump.length > 1024)
          pairBuffer += "? "; // 如果键太长，加 ?
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " "); // 拼接键和 :
        if (!writeNode(state, level, objectValue, false, false)) {
          continue; // 写入值节点失败，跳过
        }
        pairBuffer += state.dump; // 拼接值节点字符串
        _result += pairBuffer; // 拼接键值对字符串
      }
      state.tag = _tag; // 恢复标记
      state.dump = "{" + _result + "}"; // 拼接流式映射字符串
    }
    // 写入块式映射 (key: value)
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort(); // 按键名排序
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys); // 使用自定义排序函数
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function"); // sortKeys 选项不对
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || _result !== "") {
          pairBuffer += generateNextLine(state, level); // 添加换行和缩进
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
          objectValue = state.replacer.call(object, objectKey, objectValue); // 应用替换函数
        }
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue; // 写入键节点失败，跳过
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024; // 是否需要显式键 (? key: value)
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?"; // 如果键以换行开头，? 后面不加空格
          } else {
            pairBuffer += "? "; // 否则加 ? 和空格
          }
        }
        pairBuffer += state.dump; // 拼接键节点字符串
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level); // 显式键后面加换行和缩进
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue; // 写入值节点失败，跳过
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":"; // 如果值以换行开头，: 后面不加空格
        } else {
          pairBuffer += ": "; // 否则加 : 和空格
        }
        pairBuffer += state.dump; // 拼接值节点字符串
        _result += pairBuffer; // 拼接键值对字符串
      }
      state.tag = _tag; // 恢复标记
      state.dump = _result || "{}"; // 拼接块式映射字符串，空映射用 {} 表示
    }
    // 检测物件的类型
    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes; // 根据 explicit 选择类型列表
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          // 如果物件符合类型的 instanceOf 或 predicate
          if (explicit) {
            if (type.multi && type.representName) {
              state.tag = type.representName(object); // 多标记类型使用 representName
            } else {
              state.tag = type.tag; // 显式标记
            }
          } else {
            state.tag = "?"; // 隐式标记
          }
          if (type.represent) {
            // 如果类型有 represent 方法
            style = state.styleMap[type.tag] || type.defaultStyle; // 获取样式
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style); // 调用 represent 函数
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style); // 调用对应样式的 represent 方法
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style'); // 不支持的样式
            }
            state.dump = _result; // 设置结果字符串
          }
          return true; // 检测到类型
        }
      }
      return false; // 未检测到类型
    }
    // 写入节点
    function writeNode(state, level, object, block, compact, iskey, isblockseq) {
      state.tag = null; // 重置标记
      state.dump = object; // 默认结果是物件本身
      if (!detectType(state, object, false)) {
        detectType(state, object, true); // 先尝试隐式检测，再尝试显式检测
      }
      var type = _toString.call(state.dump); // 获取结果的类型字符串
      var inblock = block; // 记录是否在块式上下文
      var tagStr;
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level; // 根据 flowLevel 判断是否使用块式风格
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object); // 查找是否是重复物件
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false; // 如果有标记、是重复物件、或缩进不是默认值，就不使用紧凑格式
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex; // 如果是已使用的重复物件，使用别名
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true; // 如果是未使用的重复物件，标记为已使用
        }
        // 根据物件类型写入不同的节点
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact); // 块式映射
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump; // 添加锚点
            }
          } else {
            writeFlowMapping(state, level, state.dump); // 流式映射
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump; // 添加锚点
            }
          }
        } else if (type === "[object Array]") {
          if (block && state.dump.length !== 0) {
            if (state.noArrayIndent && !isblockseq && level > 0) {
              writeBlockSequence(state, level - 1, state.dump, compact); // 数组不缩进
            } else {
              writeBlockSequence(state, level, state.dump, compact); // 块式序列
            }
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump; // 添加锚点
            }
          } else {
            writeFlowSequence(state, level, state.dump); // 流式序列
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump; // 添加锚点
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey, inblock); // 写入标量
          }
        } else if (type === "[object Undefined]") {
          return false; // undefined 不写入
        } else {
          if (state.skipInvalid)
            return false; // 跳过无效物件
          throw new YAMLException("unacceptable kind of an object to dump " + type); // 不支持的物件类型
        }
        // 添加标记
        if (state.tag !== null && state.tag !== "?") {
          tagStr = encodeURI(
            state.tag[0] === "!" ? state.tag.slice(1) : state.tag
          ).replace(/!/g, "%21"); // URI 编码标记名
          if (state.tag[0] === "!") {
            tagStr = "!" + tagStr; // 本地标记
          } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
            tagStr = "!!" + tagStr.slice(18); // 标准标记
          } else {
            tagStr = "!<" + tagStr + ">"; // verbatim 标记
          }
          state.dump = tagStr + " " + state.dump; // 拼接标记和节点字符串
        }
      }
      return true; // 写入成功
    }
    // 查找重复出现的物件，用于生成锚点和别名
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object, objects, duplicatesIndexes); // 遍历物件结构
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]); // 记录重复物件
      }
      state.usedDuplicates = new Array(length); // 初始化已使用标记数组
    }
    // 递归遍历物件结构，查找重复
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object); // 查找是否已存在
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index); // 记录重复物件的索引
          }
        } else {
          objects.push(object); // 添加到已访问列表
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes); // 遍历数组元素
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes); // 遍历对象属性值
            }
          }
        }
      }
    }
    // 把物件加密成 YAML 字符串
    function dump(input, options) {
      options = options || {};
      var state = new State(options); // 创建状态机
      if (!state.noRefs)
        getDuplicateReferences(input, state); // 查找重复物件
      var value = input;
      if (state.replacer) {
        value = state.replacer.call({ "": value }, "", value); // 应用替换函数
      }
      if (writeNode(state, 0, value, true, true))
        return state.dump + "\n"; // 写入根节点并添加换行
      return ""; // 写入失败，返回空字符串
    }
    // 把加密函数挂出去
    module.exports.dump = dump;
  }
});

// node_modules/js-yaml/index.js
// 这是山寨的情报总管，负责协调情报分析和加密
var require_js_yaml = __commonJS({
  "node_modules/js-yaml/index.js"(exports, module) {
    "use strict";
    // 叫醒看场子的
    init_modules_watch_stub();
    // 引入情报分析员和加密员
    var loader = require_loader();
    var dumper = require_dumper();
    // 标记一些老掉牙的函数，用了就报错
    function renamed(from, to) {
      return function () {
        throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
      };
    }
    // 把山寨的各种本事都挂出去
    module.exports.Type = require_type(); // 物件类型登记处
    module.exports.Schema = require_schema(); // 规矩本
    module.exports.FAILSAFE_SCHEMA = require_failsafe(); // 最基本的规矩本
    module.exports.JSON_SCHEMA = require_json(); // JSON 兼容规矩本
    module.exports.CORE_SCHEMA = require_core(); // 核心规矩本
    module.exports.DEFAULT_SCHEMA = require_default(); // 默认规矩本
    module.exports.load = loader.load; // 加载一个文档
    module.exports.loadAll = loader.loadAll; // 加载所有文档
    module.exports.dump = dumper.dump; // 加密物件
    module.exports.YAMLException = require_exception(); // 刑堂
    module.exports.types = {
      // 各种物件类型的规矩
      binary: require_binary(),
      float: require_float(),
      map: require_map(),
      null: require_null(),
      pairs: require_pairs(),
      set: require_set(),
      timestamp: require_timestamp(),
      bool: require_bool(),
      int: require_int(),
      merge: require_merge(),
      omap: require_omap(),
      seq: require_seq(),
      str: require_str()
    };
    // 老掉牙的函数，用了就报错
    module.exports.safeLoad = renamed("safeLoad", "load");
    module.exports.safeLoadAll = renamed("safeLoadAll", "loadAll");
    module.exports.safeDump = renamed("safeDump", "dump");
  }
});

// src/index.js
// 这是山寨的总舵主，负责处理来往的各种请求
init_modules_watch_stub(); // 叫醒看场子的
var yaml = require_js_yaml(); // 引入情报总管

// 总舵主的本事，处理来客的请求
var src_default = {
  async fetch(来客, 宝库) {
    // 来客的请求，就是送来的情报
    const 路子 = new URL(来客.url); // 情报上的地址
    const 山寨地址 = 路子.origin; // 山寨自己的地址
    // frontendUrl: 'https://cf-worker-dir-bke.pages.dev'  // 山寨前门脸地址
    // SUB_BUCKET: env.SUB_BUCKET                          // 藏宝洞 R2 对象
    // backend: env.BACKEND.replace(/(https?:\/\/[^/]+).*$/, "$1") // 上游后山地址（只取域名部分）
    // subDir: "subscription"                              // 藏宝洞里放暗号的秘密目录名

    const 藏宝洞 = 宝库.SUB_BUCKET; // 藏宝洞 R2 对象
    let 后山地址 = 宝库.BACKEND.replace(/(https?:\/\/[^/]+).*$/, "$1"); // 上游后山地址（只取域名部分）
    const 秘密目录 = "subscription"; // 藏宝洞里放暗号的秘密目录名
    const 前门脸地址 = 'https://cf-worker-dir-bke.pages.dev'; // 山寨前门脸地址


    // 看看来客想干啥
    const 山路十八弯 = 路子.pathname.split("/").filter((弯) => 弯.length > 0); // 情报地址里的路径，一段一段的

    if (山路十八弯.length === 0) {
      // 如果没有指定路径，就去前门脸看看
      const 报文 = await fetch(前门脸地址);
      if (报文.status !== 200) {
        // 前门脸没开门
        return new Response('Failed to fetch frontend', { status: 报文.status });
      }
      const 原本的告示 = await 报文.text(); // 拿到前门脸的告示
      const 改过的告示 = 原本的告示.replace(/https:\/\/bulianglin2023\.dev/, 山寨地址); // 把告示里的地址换成山寨自己的
      return new Response(改过的告示, {
        status: 200,
        headers: {
          'Content-Type': 'text/html', // 告示是 HTML 格式的
        },
      });
    } else if (山路十八弯[0] === 秘密目录) {
      // 如果路径是秘密目录，说明来客想取藏宝洞里的暗号
      const 暗号令牌 = 山路十八弯[山路十八弯.length - 1]; // 最后一个弯是暗号令牌
      const 藏宝 = await 藏宝洞.get(暗号令牌); // 从藏宝洞里取暗号
      const 藏宝名帖 = await 藏宝洞.get(暗号令牌 + "_headers"); // 从藏宝洞里取暗号的名帖（Headers）

      if (藏宝 === null)
        return new Response("Not Found", { status: 404 }); // 没找到暗号

      // 看看藏宝洞是啥类型的
      if ("R2Bucket" === 藏宝洞.constructor.name) {
        // 如果是 R2 桶
        const 名帖 = 藏宝名帖 ? new Headers(await 藏宝名帖.json()) : new Headers({ "Content-Type": "text/plain;charset=UTF-8" }); // 拿到名帖
        return new Response(藏宝.body, { headers: 名帖 }); // 返回暗号内容和名帖
      } else {
        // 如果是 KV 存储
        const 名帖 = 藏宝名帖 ? new Headers(JSON.parse(藏宝名帖)) : new Headers({ "Content-Type": "text/plain;charset=UTF-8" }); // 拿到名帖
        return new Response(藏宝, { headers: 名帖 }); // 返回暗号内容和名帖
      }
    }

    // 如果不是取藏宝洞的暗号，那就是来转换暗号的
    const 暗号参数 = 路子.searchParams.get("url"); // 拿到 url 参数里的暗号链或订阅地址
    if (!暗号参数)
      return new Response("Missing URL parameter", { status: 400 }); // 没有 url 参数，没法干活

    const 后山参数 = 路子.searchParams.get("bd"); // 拿到 bd 参数，看看有没有指定上游后山
    if (后山参数 && /^(https?:\/\/[^/]+)[.].+$/g.test(后山参数))
      后山地址 = 后山参数.replace(/(https?:\/\/[^/]+).*$/, "$1"); // 如果指定了，就用指定的后山地址

    const 假名对照表 = {}; // 记录真名和假名的对照表
    const 改过的暗号链 = []; // 存放改过名字的暗号链
    const 临时令牌列表 = []; // 存放临时暗号的令牌

    if (暗号参数.startsWith("proxies:")) {
      // 如果是 Clash 格式的 YAML 内容
      const { format: 格式, data: 数据 } = parseData(暗号参数.replace(/\|/g, "\r\n")); // 解析数据
      if ("yaml" === 格式) {
        const 临时令牌 = generateRandomStr(11); // 捏个临时令牌
        const 改过的YAML数据 = replaceYAML(数据, 假名对照表); // 给 YAML 里的暗号改名
        if (改过的YAML数据) {
          await 藏宝洞.put(临时令牌, 改过的YAML数据); // 把改过名的 YAML 存到藏宝洞
          临时令牌列表.push(临时令牌); // 记录令牌
          改过的暗号链.push(`${山寨地址}/${秘密目录}/${临时令牌}`); // 生成新的订阅地址
        }
      }
    } else {
      // 如果是普通的暗号链或订阅地址
      const 地址列表 = 暗号参数.split("|").filter((段) => 段.trim() !== ""); // 把多个地址分开
      if (地址列表.length === 0)
        return new Response("There are no valid links", { status: 400 }); // 没有合法的地址

      let 报文, 解析结果;
      for (const 单个地址 of 地址列表) {
        const 临时令牌 = generateRandomStr(11); // 捏个临时令牌
        if (单个地址.startsWith("https://") || 单个地址.startsWith("http://")) {
          // 如果是订阅地址，去打探情报
          报文 = await fetch(单个地址, {
            method: 来客.method, // 用来客的方法
            headers: 来客.headers, // 用来客的名帖
            redirect: 'follow', // https://developers.cloudflare.com/workers/runtime-apis/request#constructor
          });
          if (!报文.ok)
            continue; // 打探失败，跳过
          const 明文情报 = await 报文.text(); // 拿到明文情报
          解析结果 = parseData(明文情报); // 解析情报
          await 藏宝洞.put(临时令牌 + "_headers", JSON.stringify(Object.fromEntries(报文.headers))); // 把名帖存到藏宝洞
          临时令牌列表.push(临时令牌); // 记录令牌
        } else {
          // 如果是单个暗号链
          解析结果 = parseData(单个地址); // 解析暗号链
        }

        // 根据情报格式处理
        if (/^(ssr?|vmess1?|trojan|vless|hysteria):\/\//.test(单个地址)) {
          // 如果是单个暗号链 (ss, ssr, vmess, trojan, vless, hysteria)
          const 新暗号链 = replaceInUri(单个地址, 假名对照表, false); // 给暗号链改名
          if (新暗号链)
            改过的暗号链.push(新暗号链); // 记录改过名的暗号链
          continue; // 处理下一个地址
        } else if ("base64" === 解析结果.format) {
          // 如果是 Base64 格式的订阅内容
          const 暗号链列表 = 解析结果.data.split(/\r?\n/).filter((链) => 链.trim() !== ""); // 把 Base64 解开，按行分割
          const 新暗号链列表 = [];
          for (const 链 of 暗号链列表) {
            const 新暗号链 = replaceInUri(链, 假名对照表, false); // 给每条暗号链改名
            if (新暗号链)
              新暗号链列表.push(新暗号链);
          }
          const 改过的Base64数据 = btoa(新暗号链列表.join("\r\n")); // 把改过名的暗号链重新 Base64 编码
          if (改过的Base64数据) {
            await 藏宝洞.put(临时令牌, 改过的Base64数据); // 把改过名的 Base64 数据存到藏宝洞
            临时令牌列表.push(临时令牌); // 记录令牌
            改过的暗号链.push(`${山寨地址}/${秘密目录}/${临时令牌}`); // 生成新的订阅地址
          }
        } else if ("yaml" === 解析结果.format) {
          // 如果是 YAML 格式的订阅内容
          const 改过的YAML数据 = replaceYAML(解析结果.data, 假名对照表); // 给 YAML 里的暗号改名
          if (改过的YAML数据) {
            await 藏宝洞.put(临时令牌, 改过的YAML数据); // 把改过名的 YAML 存到藏宝洞
            临时令牌列表.push(临时令牌); // 记录令牌
            改过的暗号链.push(`${山寨地址}/${秘密目录}/${临时令牌}`); // 生成新的订阅地址
          }
        }
      }
    }

    // 把改过名的暗号链重新组合成一个新的 url 参数
    const 新路子参数 = 改过的暗号链.join("|");
    路子.searchParams.set("url", 新路子参数); // 设置新的 url 参数

    // 派个小喽啰去上游后山打探情报（二次转换）
    const 改过的请求 = new Request(后山地址 + 路子.pathname + 路子.search, 来客);
    const 后山报文 = await fetch(改过的请求);

    // 任务完成，销毁藏宝洞里的临时暗号
    for (const 令牌 of 临时令牌列表) {
      await 藏宝洞.delete(令牌);
      await 藏宝洞.delete(令牌 + "_headers"); // 顺便把名帖也销毁了
    }

    // 处理上游后山的回信
    if (后山报文.status === 200) {
      const 明文情报 = await 后山报文.text(); // 拿到明文情报
      try {
        // 尝试用 Base64 解开，看看是不是 Base64 格式的订阅内容
        const 解开的情报 = urlSafeBase64Decode(明文情报);
        const 暗号链列表 = 解开的情报.split(/\r?\n/).filter((链) => 链.trim() !== ""); // 按行分割
        const 新暗号链列表 = [];
        for (const 链 of 暗号链列表) {
          const 新暗号链 = replaceInUri(链, 假名对照表, true); // 把假名换回真名
          if (新暗号链)
            新暗号链列表.push(新暗号链);
        }
        const 换回真名的Base64数据 = btoa(新暗号链列表.join("\r\n")); // 重新 Base64 编码
        return new Response(换回真名的Base64数据, 后山报文); // 返回换回真名的数据
      } catch (base64Error) {
        // 如果不是 Base64 格式，就直接替换字符串
        const 结果 = 明文情报.replace(
          new RegExp(Object.keys(假名对照表).join("|"), "g"), // 匹配所有假名
          (匹配到的假名) => 假名对照表[匹配到的假名] || 匹配到的假名 // 换回真名
        );
        return new Response(结果, 后山报文); // 返回替换后的数据
      }
    }

    // 如果上游后山回信不是 200，直接返回
    return 后山报文;
  }
};

// 根据暗号类型改头换面
function replaceInUri(暗号链, 假名对照表, 是恢复模式) {
  switch (true) {
    case 暗号链.startsWith("ss://"):
      return replaceSS(暗号链, 假名对照表, 是恢复模式);
    case 暗号链.startsWith("ssr://"):
      return replaceSSR(暗号链, 假名对照表, 是恢复模式);
    case 暗号链.startsWith("vmess://"):
    case 暗号链.startsWith("vmess1://"):
      return replaceVmess(暗号链, 假名对照表, 是恢复模式);
    case 暗号链.startsWith("trojan://"):
    case 暗号链.startsWith("vless://"):
      return replaceTrojan(暗号链, 假名对照表, 是恢复模式);
    case 暗号链.startsWith("hysteria://"):
      return replaceHysteria(暗号链, 假名对照表);
    default:
      return; // 不认识的暗号类型，跳过
  }
}

// 给 SSR 暗号改头换面
function replaceSSR(暗号链, 假名对照表, 是恢复模式) {
  暗号链 = 暗号链.slice("ssr://".length).replace("\r", "").split("#")[0]; // 去掉前缀、回车和备注
  暗号链 = urlSafeBase64Decode(暗号链); // Base64 解码
  const 正则匹配 = 暗号链.match(/(\S+):(\d+?):(\S+?):(\S+?):(\S+?):(\S+)\//); // 匹配各个部分
  if (!正则匹配) {
    return; // 匹配失败
  }
  const [, 服务器, , , , , 密码] = 正则匹配; // 提取服务器和密码
  let 改过的字符串;
  if (是恢复模式) {
    // 恢复模式：把假名换回真名
    改过的字符串 = "ssr://" + urlSafeBase64Encode(暗号链.replace(密码, urlSafeBase64Encode(假名对照表[urlSafeBase64Decode(密码)])).replace(服务器, 假名对照表[服务器]));
  } else {
    // 伪装模式：捏个假名替换真名
    const 假密码 = generateRandomStr(12); // 捏个假密码
    const 假域名 = generateRandomStr(12) + ".com"; // 捏个假域名
    假名对照表[假域名] = 服务器; // 记录假域名对应真服务器
    假名对照表[假密码] = urlSafeBase64Decode(密码); // 记录假密码对应真密码
    改过的字符串 = "ssr://" + urlSafeBase64Encode(暗号链.replace(服务器, 假域名).replace(密码, urlSafeBase64Encode(假密码))); // 替换并重新 Base64 编码
  }
  return 改过的字符串;
}

// 给 Vmess 暗号改头换面
function replaceVmess(暗号链, 假名对照表, 是恢复模式) {
  const 假UUID = generateRandomUUID(); // 捏个假 UUID
  const 假域名 = generateRandomStr(10) + ".com"; // 捏个假域名

  // 尝试匹配 Rocket 风格 (vmess://base64?...)
  const 正则匹配Rocket风格 = 暗号链.match(/vmess:\/\/([A-Za-z0-9-_]+)\?(.*)/);
  if (正则匹配Rocket风格) {
    const Base64数据 = 正则匹配Rocket风格[1];
    const 正则匹配 = urlSafeBase64Decode(Base64数据).match(/(.*?):(.*?)@(.*):(.*)/); // 解码后匹配
    if (!正则匹配)
      return;
    const [, 加密方式, UUID, 服务器, 端口] = 正则匹配;
    假名对照表[假域名] = 服务器;
    假名对照表[假UUID] = UUID;
    const 新字符串 = urlSafeBase64Encode(`${加密方式}:${假UUID}@${假域名}:${端口}`); // 替换并重新编码
    const 结果 = 暗号链.replace(Base64数据, 新字符串);
    return 结果;
  }

  // 尝试匹配 Kitsunebi 风格 (vmess1://uuid@server:port?...)
  const 正则匹配Kitsunebi风格 = 暗号链.match(/vmess1:\/\/(.*?)@(.*):(.*?)\?(.*)/);
  if (正则匹配Kitsunebi风格) {
    const [, UUID, 服务器] = 正则匹配Kitsunebi风格;
    假名对照表[假域名] = 服务器;
    假名对照表[假UUID] = UUID;
    const 正则 = new RegExp(`${UUID}|${服务器}`, "g"); // 匹配 UUID 或服务器
    const 结果 = 暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假UUID, 服务器, 假域名)); // 替换
    return 结果;
  }

  // 尝试匹配 Quan/Shadowrocket JSON 风格 (vmess://base64_json)
  let 临时暗号链 = 暗号链.replace(/vmess:\/\/|vmess1:\/\//g, ""); // 去掉前缀
  try {
    临时暗号链 = urlSafeBase64Decode(临时暗号链); // Base64 解码
    // 尝试匹配 Quan 风格 (alias = ...)
    const 正则匹配Quan风格 = 临时暗号链.match(/(.*?) = (.*)/);
    if (正则匹配Quan风格) {
      const 配置项 = 正则匹配Quan风格[2].split(",");
      if (配置项.length < 6)
        return;
      const 服务器 = 配置项[1].trim();
      const UUID = 配置项[4].trim().replace(/^"|"$/g, "");
      假名对照表[假域名] = 服务器;
      假名对照表[假UUID] = UUID;
      const 正则 = new RegExp(`${UUID}|${服务器}`, "g");
      const 结果 = 临时暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假UUID, 服务器, 假域名));
      return "vmess://" + btoa(结果); // 重新 Base64 编码
    }

    // 尝试解析 JSON
    const JSON数据 = JSON.parse(临时暗号链);
    const 服务器 = JSON数据.add;
    const UUID = JSON数据.id;
    const 正则 = new RegExp(`${UUID}|${服务器}`, "g");
    let 结果;
    if (是恢复模式) {
      结果 = 临时暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假名对照表[UUID], 服务器, 假名对照表[服务器])); // 恢复模式
    } else {
      假名对照表[假域名] = 服务器;
      假名对照表[假UUID] = UUID;
      结果 = 临时暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假UUID, 服务器, 假域名)); // 伪装模式
    }
    return "vmess://" + btoa(结果); // 重新 Base64 编码
  } catch (错误) {
    return; // 解析失败
  }
}

// 给 SS 暗号改头换面
function replaceSS(暗号链, 假名对照表, 是恢复模式) {
  const 假密码 = generateRandomStr(12); // 捏个假密码
  const 假域名 = 假密码 + ".com"; // 捏个假域名
  let 改过的字符串;
  let 临时暗号链 = 暗号链.slice("ss://".length).split("#")[0]; // 去掉前缀和备注

  if (临时暗号链.includes("@")) {
    // 如果是 base64_method:base64_password@server:port 格式
    const 正则匹配1 = 临时暗号链.match(/(\S+?)@(\S+):/);
    if (!正则匹配1) {
      return;
    }
    const [, Base64数据, 服务器] = 正则匹配1;
    const 正则匹配2 = urlSafeBase64Decode(Base64数据).match(/(\S+?):(\S+)/); // 解码 method:password
    if (!正则匹配2) {
      return;
    }
    const [, 加密方式, 密码] = 正则匹配2;

    if (是恢复模式) {
      const 新字符串 = urlSafeBase64Encode(加密方式 + ":" + 假名对照表[密码]); // 恢复密码
      改过的字符串 = 暗号链.replace(Base64数据, 新字符串).replace(服务器, 假名对照表[服务器]); // 恢复服务器
    } else {
      假名对照表[假域名] = 服务器;
      假名对照表[假密码] = 密码;
      const 新字符串 = urlSafeBase64Encode(加密方式 + ":" + 假密码); // 替换密码
      改过的字符串 = 暗号链.replace(Base64数据, 新字符串).replace(/@.*:/, `@${假域名}:`); // 替换服务器
    }
  } else {
    // 如果是 base64_method:password@server:port 格式 (整个 Base64 编码)
    try {
      const 解码后的值 = urlSafeBase64Decode(临时暗号链);
      const 正则匹配 = 解码后的值.match(/(\S+?):(\S+)@(\S+):/);
      if (!正则匹配) {
        return;
      }
      const [, , 密码, 服务器] = 正则匹配;
      假名对照表[假域名] = 服务器;
      假名对照表[假密码] = 密码;
      改过的字符串 = "ss://" + urlSafeBase64Encode(解码后的值.replace(/:.*@/, `:${假密码}@`).replace(/@.*:/, `@${假域名}:`)); // 替换并重新编码
      const 备注部分 = 暗号链.match(/#.*/); // 保留备注
      if (备注部分)
        改过的字符串 += 备注部分[0];
    } catch (错误) {
      return; // 解析失败
    }
  }
  return 改过的字符串;
}

// 给 Trojan 暗号改头换面
function replaceTrojan(暗号链, 假名对照表, 是恢复模式) {
  const 假UUID = generateRandomUUID(); // 捏个假 UUID
  const 假域名 = generateRandomStr(10) + ".com"; // 捏个假域名
  const 正则匹配 = 暗号链.match(/(vless|trojan):\/\/(.*?)@(.*):/); // 匹配前缀、UUID、服务器
  if (!正则匹配) {
    return;
  }
  const [, 前缀, UUID, 服务器] = 正则匹配;
  假名对照表[假域名] = 服务器;
  假名对照表[假UUID] = UUID;
  const 正则 = new RegExp(`${UUID}|${服务器}`, "g"); // 匹配 UUID 或服务器
  if (是恢复模式) {
    return 暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假名对照表[UUID], 服务器, 假名对照表[服务器])); // 恢复模式
  } else {
    return 暗号链.replace(正则, (匹配到的) => cReplace(匹配到的, UUID, 假UUID, 服务器, 假域名)); // 伪装模式
  }
}

// 给 Hysteria 暗号改头换面
function replaceHysteria(暗号链, 假名对照表) {
  const 正则匹配 = 暗号链.match(/hysteria:\/\/(.*):(.*?)\?/); // 匹配服务器和端口
  if (!正则匹配) {
    return;
  }
  const 服务器 = 正则匹配[1];
  const 假域名 = generateRandomStr(12) + ".com"; // 捏个假域名
  假名对照表[假域名] = 服务器; // 记录假域名对应真服务器
  return 暗号链.replace(服务器, 假域名); // 替换服务器
}

// 给 YAML 数据里的代理信息改头换面
function replaceYAML(yaml物件, 假名对照表) {
  if (!yaml物件.proxies) {
    return; // 没有代理信息，没法改
  }
  yaml物件.proxies.forEach((代理) => {
    const 假密码 = generateRandomStr(12); // 捏个假密码
    const 假域名 = 假密码 + ".com"; // 捏个假域名
    const 真实服务器 = 代理.server;
    代理.server = 假域名; // 替换服务器为假名
    假名对照表[假域名] = 真实服务器; // 记录对照关系

    if (代理.password) {
      const 真实密码 = 代理.password;
      代理.password = 假密码; // 替换密码为假名
      假名对照表[假密码] = 真实密码; // 记录对照关系
    }
    if (代理.uuid) {
      const 真实UUID = 代理.uuid;
      const 假UUID = generateRandomUUID(); // 捏个假 UUID
      代理.uuid = 假UUID; // 替换 UUID 为假名
      假名对照表[假UUID] = 真实UUID; // 记录对照关系
    }
  });
  return yaml.dump(yaml物件); // 把改过名的 YAML 物件重新加密成字符串
}

// URL 安全的 Base64 编码
function urlSafeBase64Encode(输入) {
  return btoa(输入).replace(/\+/g, "-").replace(/\//g, "_).replace(/=+$/, ""); // 替换 + / =
}

// URL 安全的 Base64 解码
function urlSafeBase64Decode(输入) {
  const 填充后的 = 输入 + "=".repeat((4 - 输入.length % 4) % 4); // 填充 =
  return atob(填充后的.replace(/-/g, "+").replace(/_/g, "/")); // 替换 - _ 回来再解码
}

// 捏个随机字符串，就像土匪的暗号
function generateRandomStr(长度) {
  return Math.random().toString(36).substring(2, 长度);
}

// 捏个随机 UUID，就像土匪的身份令牌
function generateRandomUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// 解析情报数据，看看是 Base64还是 YAML
function parseData(数据) {
  try {
    // 尝试 Base64 解码
    return { format: "base64", data: urlSafeBase64Decode(数据) };
  } catch (base64Error) {
    try {
      // 尝试 YAML 解析
      return { format: "yaml", data: yaml.load(数据) };
    } catch (yamlError) {
      // 啥也不是
      return { format: "unknown", data: 数据 };
    }
  }
}

// 替换字符串中的多个匹配项
function cReplace(匹配到的, ...替换对) {
  for (let i = 0; i < 替换对.length; i += 2) {
    if (匹配到的 === 替换对[i]) {
      return 替换对[i + 1]; // 找到匹配项，返回对应的替换值
    }
  }
  return 匹配到的; // 没找到，返回原字符串
}

// 把总舵主挂出去，让外面能找到
export {
  src_default as default
};

// 这是地图的标记，别管它
//# sourceMappingURL=index.js.map
```
