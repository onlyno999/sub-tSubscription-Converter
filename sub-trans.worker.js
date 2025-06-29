好嘞，各位山寨兄弟姐妹们，听好了！咱们这回要给这堆洋文代码来个大变样，让它也说上咱们的土话，变得风趣幽默，就像咱们山寨里的规矩一样！那些个“敏感词”嘛，都给它换成咱们自己人能懂的“暗号”，保证外人看了摸不着头脑，咱们自己用起来还顺溜！

来，开整！

```javascript
var 寻己名 = Object.getOwnPropertyNames; // 尋找物件自己的名號，這是咱們山寨的規矩，誰是誰的人得搞清楚。
var 秘籍引 = (秘方, 成果) => function 启动秘籍() { // 這是引子，引出咱們的秘籍，秘籍一啟動，就看成果了。
  return 秘方 && (成果 = (0, 秘方[寻己名(秘方)[0]])(秘方 = 0)), 成果; // 秘方在手，成果自來，這是硬道理。
};
var 寻常货 = (回调, 模块) => function 寻货郎() { // 尋常貨色，得找個貨郎來賣，賣不出去就自己留著。
  return 模块 || (0, 回调[寻己名(回调)[0]])((模块 = { exports: {} }).exports, 模块), 模块.exports; // 貨郎沒來，就自己上，把貨都倒騰出去。
};

// wrangler-modules-watch:wrangler:modules-watch
var 启动看家狗 = 秘籍引({ // 啟動看家狗，這狗是咱們山寨的眼線，盯著點外頭的動靜。
  "wrangler-modules-watch:wrangler:modules-watch"() { // 這是看家狗的暗號，別傳錯了。
    启动小跟班(); // 看家狗一叫，小跟班就得動起來。
  }
});

// C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
var 启动小跟班 = 秘籍引({ // 啟動小跟班，這小子機靈著呢，啥事都跑得快。
  "C:/Users/WIN/AppData/Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() { // 小跟班的住址，記牢了。
    启动看家狗(); // 小跟班一動，看家狗也得跟著。
  }
});

// node_modules/js-yaml/lib/common.js
var 寻常货栈 = 寻常货({ // 尋常貨棧，咱們山寨的百寶庫，啥都有。
  "node_modules/js-yaml/lib/common.js"(出口, 模块) { // 貨棧的規矩，出口和模塊都得清清楚楚。
    "use strict"; // 嚴格執行，這是山寨的鐵律。
    启动小跟班(); // 小跟班又來了，真是個勤快娃。
    function 空空如也(物件) { // 看看是不是空空如也，啥都沒有。
      return typeof 物件 === "undefined" || 物件 === null; // 沒定義或者就是個空，那可不就是空空如也嘛。
    }

    function 是物件否(物件) { // 瞧瞧這是不是個物件，別拿假貨糊弄人。
      return typeof 物件 === "object" && 物件 !== null; // 得是個物件，還不能是個空物件。
    }

    function 化为阵(序列) { // 把東西化成一排排的陣列，好點數。
      if (Array.isArray(序列)) // 如果本身就是陣列，那就直接用。
        return 序列; // 拿去吧。
      else if (空空如也(序列)) // 如果是空空如也，那就給個空陣列。
        return []; // 空手而歸。
      return [序列]; // 不然就給它套個陣列，單個也算一排。
    }

    function 扩充(目标, 源头) { // 擴充地盤，把源頭的東西都搬到目標裡。
      var 索引, 长度, 钥匙, 源头钥匙; // 索引、長度、鑰匙、源頭鑰匙，都得備齊。
      if (源头) { // 源頭有貨才動手。
        源头钥匙 = Object.keys(源头); // 找出源頭所有的鑰匙。
        for (索引 = 0, 长度 = 源头钥匙.length; 索引 < 长度; 索引 += 1) { // 一個一個搬。
          钥匙 = 源头钥匙[索引]; // 拿到鑰匙。
          目标[钥匙] = 源头[钥匙]; // 把貨搬過去。
        }
      }
      return 目标; // 搬完就回目標。
    }

    function 反复(字串, 次数) { // 把字串反復念叨幾遍。
      var 结果 = "", // 結果先空著。
        循环; // 循環次數。
      for (循环 = 0; 循环 < 次数; 循环 += 1) { // 念叨夠數為止。
        结果 += 字串; // 每次都加上。
      }
      return 结果; // 念叨完了就回結果。
    }

    function 零下否(数字) { // 看看是不是零下，這可得小心。
      return 数字 === 0 && Number.NEGATIVE_INFINITY === 1 / 数字; // 零除以負無窮，就是零下。
    }
    模块.exports.空空如也 = 空空如也; // 空空如也，出口。
    模块.exports.是物件否 = 是物件否; // 是物件否，出口。
    模块.exports.化为阵 = 化为阵; // 化為陣，出口。
    模块.exports.反复 = 反复; // 反復，出口。
    模块.exports.零下否 = 零下否; // 零下否，出口。
    模块.exports.扩充 = 扩充; // 擴充，出口。
  }
});

// node_modules/js-yaml/lib/exception.js
var 寻异端 = 寻常货({ // 尋找異端，山寨裡不容異類。
  "node_modules/js-yaml/lib/exception.js"(出口, 模块) { // 異端的規矩，出口和模塊。
    "use strict"; // 嚴格執行，不留情面。
    启动小跟班(); // 小跟班又來了。
    function 整顿错处(异端, 紧凑) { // 整頓錯處，把異端揪出來。
      var 何处 = "", // 何處犯錯。
        消息 = 异端.reason || "(不知何故)"; // 錯處消息，不知何故就寫不知何故。
      if (!异端.mark) // 沒標記就直接回消息。
        return 消息; // 消息回報。
      if (异端.mark.name) { // 有名號就加上。
        何处 += '在 "' + 异端.mark.name + '" '; // 在哪裡犯錯。
      }
      何处 += "(" + (异端.mark.line + 1) + ":" + (异端.mark.column + 1) + ")"; // 具體到哪一行哪一列。
      if (!紧凑 && 异端.mark.snippet) { // 如果不緊湊，就把片段也加上。
        何处 += "\n\n" + 异端.mark.snippet; // 加上片段。
      }
      return 消息 + " " + 何处; // 消息和何處一起回報。
    }

    function 歪门邪道之祸(原因, 标记) { // 歪門邪道之禍，這是大麻煩。
      Error.call(this); // 繼承錯誤。
      this.name = "歪门邪道之祸"; // 名號就是歪門邪道之禍。
      this.reason = 原因; // 原因。
      this.mark = 标记; // 標記。
      this.message = 整顿错处(this, false); // 消息就是整頓錯處。
      if (Error.captureStackTrace) { // 如果能捕獲堆棧。
        Error.captureStackTrace(this, this.constructor); // 就捕獲。
      } else {
        this.stack = new Error().stack || ""; // 不然就自己造個堆棧。
      }
    }
    歪门邪道之祸.prototype = Object.create(Error.prototype); // 繼承錯誤原型。
    歪门邪道之祸.prototype.constructor = 歪门邪道之祸; // 構造器就是自己。
    歪门邪道之祸.prototype.toString = function toString(紧凑) { // 轉成字串。
      return this.name + ": " + 整顿错处(this, 紧凑); // 名號加上整頓錯處。
    };
    模块.exports = 歪门邪道之祸; // 歪門邪道之禍，出口。
  }
});

// node_modules/js-yaml/lib/snippet.js
var 寻片段 = 寻常货({ // 尋找片段，看看哪裡出了問題。
  "node_modules/js-yaml/lib/snippet.js"(出口, 模块) { // 片段的規矩，出口和模塊。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 寻常 = 寻常货栈(); // 尋常貨棧裡找尋常。
    function 取一行(缓冲区, 行始, 行末, 位置, 最大行长) { // 取一行，從緩衝區裡取。
      var 头 = ""; // 頭部。
      var 尾 = ""; // 尾部。
      var 最大半长 = Math.floor(最大行长 / 2) - 1; // 最大半長。
      if (位置 - 行始 > 最大半长) { // 如果位置超過半長。
        头 = " ... "; // 頭部加點省略號。
        行始 = 位置 - 最大半长 + 头.length; // 行始也得調整。
      }
      if (行末 - 位置 > 最大半长) { // 如果行末超過半長。
        尾 = " ..."; // 尾部加點省略號。
        行末 = 位置 + 最大半长 - 尾.length; // 行末也得調整。
      }
      return {
        str: 头 + 缓冲区.slice(行始, 行末).replace(/\t/g, "\u2192") + 尾, // 字串就是頭尾加上中間的內容，把製表符換成箭頭。
        pos: 位置 - 行始 + 头.length // 相對位置。
      };
    }

    function 前补齐(字串, 最大) { // 前面補齊，讓字串夠長。
      return 寻常.反复(" ", 最大 - 字串.length) + 字串; // 用空格補齊。
    }

    function 造片段(标记, 选项) { // 製造片段，把錯誤的地方截出來。
      选项 = Object.create(选项 || null); // 選項得是個物件。
      if (!标记.buffer) // 沒緩衝區就沒法造。
        return null; // 回個空。
      if (!选项.maxLength) // 沒最大長度就設個默認值。
        选项.maxLength = 79; // 默認79。
      if (typeof 选项.indent !== "number") // 縮進不是數字就設個默認值。
        选项.indent = 1; // 默認1。
      if (typeof 选项.linesBefore !== "number") // 前面行數不是數字就設個默認值。
        选项.linesBefore = 3; // 默認3。
      if (typeof 选项.linesAfter !== "number") // 後面行數不是數字就設個默認值。
        选项.linesAfter = 2; // 默認2。
      var 正则 = /\r?\n|\r|\0/g; // 換行符和空字符的正規表達式。
      var 行始列表 = [0]; // 行始列表。
      var 行末列表 = []; // 行末列表。
      var 匹配; // 匹配結果。
      var 找到行号 = -1; // 找到的行號。
      while (匹配 = 正则.exec(标记.buffer)) { // 循環匹配。
        行末列表.push(匹配.index); // 記錄行末。
        行始列表.push(匹配.index + 匹配[0].length); // 記錄行始。
        if (标记.position <= 匹配.index && 找到行号 < 0) { // 如果位置在行末之前，且沒找到行號。
          找到行号 = 行始列表.length - 2; // 記錄行號。
        }
      }
      if (找到行号 < 0) // 如果還是沒找到行號。
        找到行号 = 行始列表.length - 1; // 就用最後一行。
      var 结果 = "", // 結果字串。
        i, 行; // 循環變數和行。
      var 行号长度 = Math.min(标记.line + 选项.linesAfter, 行末列表.length).toString().length; // 行號長度。
      var 最大行长 = 选项.maxLength - (选项.indent + 行号长度 + 3); // 最大行長。
      for (i = 1; i <= 选项.linesBefore; i++) { // 循環前面的行。
        if (找到行号 - i < 0) // 超出範圍就跳出。
          break; // 跳出。
        行 = 取一行( // 取一行。
          标记.buffer, // 緩衝區。
          行始列表[找到行号 - i], // 行始。
          行末列表[找到行号 - i], // 行末。
          标记.position - (行始列表[找到行号] - 行始列表[找到行号 - i]), // 位置。
          最大行长 // 最大行長。
        );
        结果 = 寻常.反复(" ", 选项.indent) + 前补齐((标记.line - i + 1).toString(), 行号长度) + " | " + 行.str + "\n" + 结果; // 加上縮進、行號、豎線和行內容。
      }
      行 = 取一行(标记.buffer, 行始列表[找到行号], 行末列表[找到行号], 标记.position, 最大行长); // 取當前行。
      结果 += 寻常.反复(" ", 选项.indent) + 前补齐((标记.line + 1).toString(), 行号长度) + " | " + 行.str + "\n"; // 加上當前行。
      结果 += 寻常.反复("-", 选项.indent + 行号长度 + 3 + 行.pos) + "^\n"; // 加上指示符。
      for (i = 1; i <= 选项.linesAfter; i++) { // 循環後面的行。
        if (找到行号 + i >= 行末列表.length) // 超出範圍就跳出。
          break; // 跳出。
        行 = 取一行( // 取一行。
          标记.buffer, // 緩衝區。
          行始列表[找到行号 + i], // 行始。
          行末列表[找到行号 + i], // 行末。
          标记.position - (行始列表[找到行号] - 行始列表[找到行号 + i]), // 位置。
          最大行长 // 最大行長。
        );
        结果 += 寻常.反复(" ", 选项.indent) + 前补齐((标记.line + i + 1).toString(), 行号长度) + " | " + 行.str + "\n"; // 加上縮進、行號、豎線和行內容。
      }
      return 结果.replace(/\n$/, ""); // 去掉末尾換行。
    }
    模块.exports = 造片段; // 製造片段，出口。
  }
});

// node_modules/js-yaml/lib/type.js
var 寻类型 = 寻常货({ // 尋找類型，這是咱們山寨的分類法。
  "node_modules/js-yaml/lib/type.js"(出口, 模块) { // 類型的規矩，出口和模塊。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 歪门邪道之祸 = 寻异端(); // 歪門邪道之禍。
    var 类型构造选项 = [ // 類型構造選項，都是些規矩。
      "kind", // 種類。
      "multi", // 多個。
      "resolve", // 解析。
      "construct", // 構造。
      "instanceOf", // 實例。
      "predicate", // 判斷。
      "represent", // 表示。
      "representName", // 表示名。
      "defaultStyle", // 默認樣式。
      "styleAliases" // 樣式別名。
    ];
    var 歪门节点种类 = [ // 歪門節點種類，就這幾種。
      "scalar", // 標量。
      "sequence", // 序列。
      "mapping" // 映射。
    ];

    function 汇编样式别名(图谱) { // 匯編樣式別名，把別名都整理好。
      var 结果 = {}; // 結果先空著。
      if (图谱 !== null) { // 圖譜不空才動手。
        Object.keys(图谱).forEach(function (样式) { // 遍歷樣式。
          图谱[样式].forEach(function (别名) { // 遍歷別名。
            结果[String(别名)] = 样式; // 記錄別名和樣式。
          });
        });
      }
      return 结果; // 回結果。
    }

    function 类型(标签, 选项) { // 類型，有標籤有選項。
      选项 = 选项 || {}; // 選項沒有就給個空物件。
      Object.keys(选项).forEach(function (名号) { // 遍歷選項名號。
        if (类型构造选项.indexOf(名号) === -1) { // 如果名號不在類型構造選項裡。
          throw new 歪门邪道之祸('在 "' + 标签 + '" 歪门类型定义中遇到未知选项 "' + 名号 + '"。'); // 拋出歪門邪道之禍。
        }
      });
      this.options = 选项; // 選項。
      this.tag = 标签; // 標籤。
      this.kind = 选项["kind"] || null; // 種類。
      this.resolve = 选项["resolve"] || function () { // 解析。
        return true; // 默認真。
      };
      this.construct = 选项["construct"] || function (数据) { // 構造。
        return 数据; // 默認回數據。
      };
      this.instanceOf = 选项["instanceOf"] || null; // 實例。
      this.predicate = 选项["predicate"] || null; // 判斷。
      this.represent = 选项["represent"] || null; // 表示。
      this.representName = 选项["representName"] || null; // 表示名。
      this.defaultStyle = 选项["defaultStyle"] || null; // 默認樣式。
      this.multi = 选项["multi"] || false; // 多個。
      this.styleAliases = 汇编样式别名(选项["styleAliases"] || null); // 樣式別名。
      if (歪门节点种类.indexOf(this.kind) === -1) { // 如果種類不在歪門節點種類裡。
        throw new 歪门邪道之祸('为 "' + 标签 + '" 歪门类型指定了未知种类 "' + this.kind + '"。'); // 拋出歪門邪道之禍。
      }
    }
    模块.exports = 类型; // 類型，出口。
  }
});

// node_modules/js-yaml/lib/schema.js
var 寻纲要 = 寻常货({ // 尋找綱要，這是咱們山寨的總綱。
  "node_modules/js-yaml/lib/schema.js"(出口, 模块) { // 綱要的規矩，出口和模塊。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 歪门邪道之祸 = 寻异端(); // 歪門邪道之禍。
    var 类型 = 寻类型(); // 類型。
    function 汇编清单(纲要, 名号) { // 匯編清單，把綱要裡的名號都整理好。
      var 结果 = []; // 結果先空著。
      纲要[名号].forEach(function (当前类型) { // 遍歷當前類型。
        var 新索引 = 结果.length; // 新索引。
        结果.forEach(function (之前类型, 之前索引) { // 遍歷之前類型。
          if (之前类型.tag === 当前类型.tag && 之前类型.kind === 当前类型.kind && 之前类型.multi === 当前类型.multi) { // 如果標籤、種類、多個都一樣。
            新索引 = 之前索引; // 就用之前的索引。
          }
        });
        结果[新索引] = 当前类型; // 記錄當前類型。
      });
      return 结果; // 回結果。
    }

    function 汇编图谱() { // 匯編圖譜，把所有類型都整理成圖譜。
      var 结果 = { // 結果物件。
          scalar: {}, // 標量。
          sequence: {}, // 序列。
          mapping: {}, // 映射。
          fallback: {}, // 後備。
          multi: { // 多個。
            scalar: [], // 標量。
            sequence: [], // 序列。
            mapping: [], // 映射。
            fallback: [] // 後備。
          }
        },
        索引, 长度; // 索引和長度。
      function 收集类型(类型) { // 收集類型。
        if (类型.multi) { // 如果是多個。
          结果.multi[类型.kind].push(类型); // 放到多個裡。
          结果.multi["fallback"].push(类型); // 放到後備裡。
        } else {
          结果[类型.kind][类型.tag] = 结果["fallback"][类型.tag] = 类型; // 放到對應的種類和後備裡。
        }
      }
      for (索引 = 0, 长度 = arguments.length; 索引 < 长度; 索引 += 1) { // 遍歷參數。
        arguments[索引].forEach(收集类型); // 收集類型。
      }
      return 结果; // 回結果。
    }

    function 纲要(定义) { // 綱要，有定義。
      return this.扩充(定义); // 擴充定義。
    }
    纲要.prototype.扩充 = function 扩充(定义) { // 綱要的擴充方法。
      var 隐式 = []; // 隱式。
      var 显式 = []; // 顯式。
      if (定义 instanceof 类型) { // 如果定義是類型。
        显式.push(定义); // 放到顯式裡。
      } else if (Array.isArray(定义)) { // 如果定義是陣列。
        显式 = 显式.concat(定义); // 合併到顯式裡。
      } else if (定义 && (Array.isArray(定义.implicit) || Array.isArray(定义.explicit))) { // 如果定義有隱式或顯式。
        if (定义.implicit) // 如果有隱式。
          隐式 = 隐式.concat(定义.implicit); // 合併到隱式裡。
        if (定义.explicit) // 如果有顯式。
          显式 = 显式.concat(定义.explicit); // 合併到顯式裡。
      } else {
        throw new 歪门邪道之祸("纲要.扩充参数应该是一个类型、[类型]、或一个纲要定义 ({ implicit: [...], explicit: [...] })"); // 拋出歪門邪道之禍。
      }
      隐式.forEach(function (类型) { // 遍歷隱式。
        if (!(类型 instanceof 类型)) { // 如果不是類型。
          throw new 歪门邪道之祸("指定的歪门类型列表（或单个类型物件）包含非类型物件。"); // 拋出歪門邪道之禍。
        }
        if (类型.loadKind && 类型.loadKind !== "scalar") { // 如果加載種類不是標量。
          throw new 歪门邪道之祸("纲要的隐式列表中存在非标量类型。不支持此类类型的隐式解析。"); // 拋出歪門邪道之禍。
        }
        if (类型.multi) { // 如果是多個。
          throw new 歪门邪道之祸("纲要的隐式列表中存在多类型。多标签只能作为显式列出。"); // 拋出歪門邪道之禍。
        }
      });
      显式.forEach(function (类型) { // 遍歷顯式。
        if (!(类型 instanceof 类型)) { // 如果不是類型。
          throw new 歪门邪道之祸("指定的歪门类型列表（或单个类型物件）包含非类型物件。"); // 拋出歪門邪道之禍。
        }
      });
      var 结果 = Object.create(纲要.prototype); // 結果物件。
      结果.implicit = (this.implicit || []).concat(隐式); // 隱式。
      结果.explicit = (this.explicit || []).concat(显式); // 顯式。
      结果.compiledImplicit = 汇编清单(结果, "implicit"); // 匯編隱式清單。
      结果.compiledExplicit = 汇编清单(结果, "explicit"); // 匯編顯式清單。
      结果.compiledTypeMap = 汇编图谱(结果.compiledImplicit, 结果.compiledExplicit); // 匯編類型圖譜。
      return 结果; // 回結果。
    };
    模块.exports = 纲要; // 綱要，出口。
  }
});

// node_modules/js-yaml/lib/type/str.js
var 寻字串 = 寻常货({ // 尋找字串，這是最基本的貨色。
  "node_modules/js-yaml/lib/type/str.js"(出口, 模块) { // 字串的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    模块.exports = new 类型("tag:yaml.org,2002:str", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      construct: function (数据) { // 構造方法。
        return 数据 !== null ? 数据 : ""; // 數據不空就用數據，不然就空字串。
      }
    });
  }
});

// node_modules/js-yaml/lib/type/seq.js
var 寻序列 = 寻常货({ // 尋找序列，一排排的。
  "node_modules/js-yaml/lib/type/seq.js"(出口, 模块) { // 序列的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    模块.exports = new 类型("tag:yaml.org,2002:seq", { // 導出一個新類型。
      kind: "sequence", // 種類是序列。
      construct: function (数据) { // 構造方法。
        return 数据 !== null ? 数据 : []; // 數據不空就用數據，不然就空陣列。
      }
    });
  }
});

// node_modules/js-yaml/lib/type/map.js
var 寻映射 = 寻常货({ // 尋找映射，一對對的。
  "node_modules/js-yaml/lib/type/map.js"(出口, 模块) { // 映射的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    模块.exports = new 类型("tag:yaml.org,2002:map", { // 導出一個新類型。
      kind: "mapping", // 種類是映射。
      construct: function (数据) { // 構造方法。
        return 数据 !== null ? 数据 : {}; // 數據不空就用數據，不然就空物件。
      }
    });
  }
});

// node_modules/js-yaml/lib/schema/failsafe.js
var 寻保底 = 寻常货({ // 尋找保底，這是咱們山寨的最後一道防線。
  "node_modules/js-yaml/lib/schema/failsafe.js"(出口, 模块) { // 保底的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 纲要 = 寻纲要(); // 綱要。
    模块.exports = new 纲要({ // 導出一個新綱要。
      explicit: [ // 顯式。
        寻字串(), // 字串。
        寻序列(), // 序列。
        寻映射() // 映射。
      ]
    });
  }
});

// node_modules/js-yaml/lib/type/null.js
var 寻空值 = 寻常货({ // 尋找空值，啥都沒有。
  "node_modules/js-yaml/lib/type/null.js"(出口, 模块) { // 空值的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    function 解析歪门空值(数据) { // 解析歪門空值。
      if (数据 === null) // 數據是空就回真。
        return true; // 真。
      var 最大 = 数据.length; // 最大長度。
      return 最大 === 1 && 数据 === "~" || 最大 === 4 && (数据 === "null" || 数据 === "Null" || 数据 === "NULL"); // 判斷是不是空值。
    }

    function 构造歪门空值() { // 構造歪門空值。
      return null; // 回空。
    }

    function 是空值否(物件) { // 看看是不是空值。
      return 物件 === null; // 物件是空就回真。
    }
    模块.exports = new 类型("tag:yaml.org,2002:null", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门空值, // 解析方法。
      construct: 构造歪门空值, // 構造方法。
      predicate: 是空值否, // 判斷方法。
      represent: { // 表示方法。
        canonical: function () { // 規範。
          return "~"; // 回波浪號。
        },
        lowercase: function () { // 小寫。
          return "null"; // 回null。
        },
        uppercase: function () { // 大寫。
          return "NULL"; // 回NULL。
        },
        camelcase: function () { // 駝峰。
          return "Null"; // 回Null。
        },
        empty: function () { // 空。
          return ""; // 回空字串。
        }
      },
      defaultStyle: "lowercase" // 默認小寫。
    });
  }
});

// node_modules/js-yaml/lib/type/bool.js
var 寻真假 = 寻常货({ // 尋找真假，是真是假得看清楚。
  "node_modules/js-yaml/lib/type/bool.js"(出口, 模块) { // 真假的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    function 解析歪门真假(数据) { // 解析歪門真假。
      if (数据 === null) // 數據是空就回假。
        return false; // 假。
      var 最大 = 数据.length; // 最大長度。
      return 最大 === 4 && (数据 === "true" || 数据 === "True" || 数据 === "TRUE") || 最大 === 5 && (数据 === "false" || 数据 === "False" || 数据 === "FALSE"); // 判斷是不是真假。
    }

    function 构造歪门真假(数据) { // 構造歪門真假。
      return 数据 === "true" || 数据 === "True" || 数据 === "TRUE"; // 判斷是不是真。
    }

    function 是真假否(物件) { // 看看是不是真假。
      return Object.prototype.toString.call(物件) === "[object Boolean]"; // 物件是布爾就回真。
    }
    模块.exports = new 类型("tag:yaml.org,2002:bool", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门真假, // 解析方法。
      construct: 构造歪门真假, // 構造方法。
      predicate: 是真假否, // 判斷方法。
      represent: { // 表示方法。
        lowercase: function (物件) { // 小寫。
          return 物件 ? "true" : "false"; // 真回true，假回false。
        },
        uppercase: function (物件) { // 大寫。
          return 物件 ? "TRUE" : "FALSE"; // 真回TRUE，假回FALSE。
        },
        camelcase: function (物件) { // 駝峰。
          return 物件 ? "True" : "False"; // 真回True，假回False。
        }
      },
      defaultStyle: "lowercase" // 默認小寫。
    });
  }
});

// node_modules/js-yaml/lib/type/int.js
var 寻整数 = 寻常货({ // 尋找整數，數數用的。
  "node_modules/js-yaml/lib/type/int.js"(出口, 模块) { // 整數的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 寻常 = 寻常货栈(); // 尋常貨棧裡找尋常。
    var 类型 = 寻类型(); // 類型。
    function 是十六进制码(字符码) { // 看看是不是十六進制碼。
      return 48 <= 字符码 && 字符码 <= 57 || 65 <= 字符码 && 字符码 <= 70 || 97 <= 字符码 && 字符码 <= 102; // 判斷是不是十六進制。
    }

    function 是八进制码(字符码) { // 看看是不是八進制碼。
      return 48 <= 字符码 && 字符码 <= 55; // 判斷是不是八進制。
    }

    function 是十进制码(字符码) { // 看看是不是十進制碼。
      return 48 <= 字符码 && 字符码 <= 57; // 判斷是不是十進制。
    }

    function 解析歪门整数(数据) { // 解析歪門整數。
      if (数据 === null) // 數據是空就回假。
        return false; // 假。
      var 最大 = 数据.length, // 最大長度。
        索引 = 0, // 索引。
        有数字 = false, // 有沒有數字。
        字符; // 字符。
      if (!最大) // 沒長度就回假。
        return false; // 假。
      字符 = 数据[索引]; // 取第一個字符。
      if (字符 === "-" || 字符 === "+") { // 如果是負號或正號。
        字符 = 数据[++索引]; // 取下一個字符。
      }
      if (字符 === "0") { // 如果是零。
        if (索引 + 1 === 最大) // 如果只有一個零。
          return true; // 回真。
        字符 = 数据[++索引]; // 取下一個字符。
        if (字符 === "b") { // 如果是二進制。
          索引++; // 索引加一。
          for (; 索引 < 最大; 索引++) { // 循環。
            字符 = 数据[索引]; // 取字符。
            if (字符 === "_") // 如果是下劃線。
              continue; // 跳過。
            if (字符 !== "0" && 字符 !== "1") // 如果不是零或一。
              return false; // 回假。
            有数字 = true; // 有數字。
          }
          return 有数字 && 字符 !== "_"; // 有數字且不是下劃線就回真。
        }
        if (字符 === "x") { // 如果是十六進制。
          索引++; // 索引加一。
          for (; 索引 < 最大; 索引++) { // 循環。
            字符 = 数据[索引]; // 取字符。
            if (字符 === "_") // 如果是下劃線。
              continue; // 跳過。
            if (!是十六进制码(数据.charCodeAt(索引))) // 如果不是十六進制碼。
              return false; // 回假。
            有数字 = true; // 有數字。
          }
          return 有数字 && 字符 !== "_"; // 有數字且不是下劃線就回真。
        }
        if (字符 === "o") { // 如果是八進制。
          索引++; // 索引加一。
          for (; 索引 < 最大; 索引++) { // 循環。
            字符 = 数据[索引]; // 取字符。
            if (字符 === "_") // 如果是下劃線。
              continue; // 跳過。
            if (!是八进制码(数据.charCodeAt(索引))) // 如果不是八進制碼。
              return false; // 回假。
            有数字 = true; // 有數字。
          }
          return 有数字 && 字符 !== "_"; // 有數字且不是下劃線就回真。
        }
      }
      if (字符 === "_") // 如果是下劃線。
        return false; // 回假。
      for (; 索引 < 最大; 索引++) { // 循環。
        字符 = 数据[索引]; // 取字符。
        if (字符 === "_") // 如果是下劃線。
          continue; // 跳過。
        if (!是十进制码(数据.charCodeAt(索引))) { // 如果不是十進制碼。
          return false; // 回假。
        }
        有数字 = true; // 有數字。
      }
      if (!有数字 || 字符 === "_") // 沒數字或者末尾是下劃線。
        return false; // 回假。
      return true; // 回真。
    }

    function 构造歪门整数(数据) { // 構造歪門整數。
      var 值 = 数据, // 值。
        符号 = 1, // 符號。
        字符; // 字符。
      if (值.indexOf("_") !== -1) { // 如果有下劃線。
        值 = 值.replace(/_/g, ""); // 去掉下劃線。
      }
      字符 = 值[0]; // 取第一個字符。
      if (字符 === "-" || 字符 === "+") { // 如果是負號或正號。
        if (字符 === "-") // 如果是負號。
          符号 = -1; // 符號是負一。
        值 = 值.slice(1); // 去掉第一個字符。
        字符 = 值[0]; // 取新第一個字符。
      }
      if (值 === "0") // 如果是零。
        return 0; // 回零。
      if (字符 === "0") { // 如果是零。
        if (值[1] === "b") // 如果是二進制。
          return 符号 * parseInt(值.slice(2), 2); // 解析二進制。
        if (值[1] === "x") // 如果是十六進制。
          return 符号 * parseInt(值.slice(2), 16); // 解析十六進制。
        if (值[1] === "o") // 如果是八進制。
          return 符号 * parseInt(值.slice(2), 8); // 解析八進制。
      }
      return 符号 * parseInt(值, 10); // 解析十進制。
    }

    function 是整数否(物件) { // 看看是不是整數。
      return Object.prototype.toString.call(物件) === "[object Number]" && (物件 % 1 === 0 && !寻常.零下否(物件)); // 是數字且是整數且不是負零。
    }
    模块.exports = new 类型("tag:yaml.org,2002:int", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门整数, // 解析方法。
      construct: 构造歪门整数, // 構造方法。
      predicate: 是整数否, // 判斷方法。
      represent: { // 表示方法。
        binary: function (物件) { // 二進制。
          return 物件 >= 0 ? "0b" + 物件.toString(2) : "-0b" + 物件.toString(2).slice(1); // 轉二進制。
        },
        octal: function (物件) { // 八進制。
          return 物件 >= 0 ? "0o" + 物件.toString(8) : "-0o" + 物件.toString(8).slice(1); // 轉八進制。
        },
        decimal: function (物件) { // 十進制。
          return 物件.toString(10); // 轉十進制。
        },
        /* eslint-disable max-len */
        hexadecimal: function (物件) { // 十六進制。
          return 物件 >= 0 ? "0x" + 物件.toString(16).toUpperCase() : "-0x" + 物件.toString(16).toUpperCase().slice(1); // 轉十六進制。
        }
      },
      defaultStyle: "decimal", // 默認十進制。
      styleAliases: { // 樣式別名。
        binary: [2, "bin"], // 二進制。
        octal: [8, "oct"], // 八進制。
        decimal: [10, "dec"], // 十進制。
        hexadecimal: [16, "hex"] // 十六進制。
      }
    });
  }
});

// node_modules/js-yaml/lib/type/float.js
var 寻浮点 = 寻常货({ // 尋找浮點，帶小數點的。
  "node_modules/js-yaml/lib/type/float.js"(出口, 模块) { // 浮點的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 寻常 = 寻常货栈(); // 尋常貨棧裡找尋常。
    var 类型 = 寻类型(); // 類型。
    var 歪门浮点正则 = new RegExp( // 歪門浮點的正規表達式。
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );

    function 解析歪门浮点(数据) { // 解析歪門浮點。
      if (数据 === null) // 數據是空就回假。
        return false; // 假。
      if (!歪门浮点正则.test(数据) || // 如果不符合正規表達式。
        // Quick hack to not allow integers end with `_`
        // Probably should update regexp & check speed
        数据[数据.length - 1] === "_") { // 或者末尾是下劃線。
        return false; // 回假。
      }
      return true; // 回真。
    }

    function 构造歪门浮点(数据) { // 構造歪門浮點。
      var 值, 符号; // 值和符號。
      值 = 数据.replace(/_/g, "").toLowerCase(); // 去掉下劃線，轉小寫。
      符号 = 值[0] === "-" ? -1 : 1; // 判斷符號。
      if ("+-".indexOf(值[0]) >= 0) { // 如果有正負號。
        值 = 值.slice(1); // 去掉第一個字符。
      }
      if (值 === ".inf") { // 如果是無窮大。
        return 符号 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY; // 回正負無窮大。
      } else if (值 === ".nan") { // 如果是NaN。
        return NaN; // 回NaN。
      }
      return 符号 * parseFloat(值, 10); // 解析浮點數。
    }

    var 科学计数无点 = /^[-+]?[0-9]+e/; // 科學計數無點的正規表達式。
    function 表示歪门浮点(物件, 样式) { // 表示歪門浮點。
      var 结果; // 結果。
      if (isNaN(物件)) { // 如果是NaN。
        switch (样式) { // 根據樣式。
          case "lowercase": // 小寫。
            return ".nan"; // 回.nan。
          case "uppercase": // 大寫。
            return ".NAN"; // 回.NAN。
          case "camelcase": // 駝峰。
            return ".NaN"; // 回.NaN。
        }
      } else if (Number.POSITIVE_INFINITY === 物件) { // 如果是正無窮大。
        switch (样式) { // 根據樣式。
          case "lowercase": // 小寫。
            return ".inf"; // 回.inf。
          case "uppercase": // 大寫。
            return ".INF"; // 回.INF。
          case "camelcase": // 駝峰。
            return ".Inf"; // 回.Inf。
        }
      } else if (Number.NEGATIVE_INFINITY === 物件) { // 如果是負無窮大。
        switch (样式) { // 根據樣式。
          case "lowercase": // 小寫。
            return "-.inf"; // 回-.inf。
          case "uppercase": // 大寫。
            return "-.INF"; // 回-.INF。
          case "camelcase": // 駝峰。
            return "-.Inf"; // 回-.Inf。
        }
      } else if (寻常.零下否(物件)) { // 如果是負零。
        return "-0.0"; // 回-0.0。
      }
      结果 = 物件.toString(10); // 轉成字串。
      return 科学计数无点.test(结果) ? 结果.replace("e", ".e") : 结果; // 如果是科學計數，就加上點。
    }

    function 是浮点否(物件) { // 看看是不是浮點。
      return Object.prototype.toString.call(物件) === "[object Number]" && (物件 % 1 !== 0 || 寻常.零下否(物件)); // 是數字且不是整數或者負零。
    }
    模块.exports = new 类型("tag:yaml.org,2002:float", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门浮点, // 解析方法。
      construct: 构造歪门浮点, // 構造方法。
      predicate: 是浮点否, // 判斷方法。
      represent: 表示歪门浮点, // 表示方法。
      defaultStyle: "lowercase" // 默認小寫。
    });
  }
});

// node_modules/js-yaml/lib/schema/json.js
var 寻秘档 = 寻常货({ // 尋找秘檔，這是咱們山寨的機密文件。
  "node_modules/js-yaml/lib/schema/json.js"(出口, 模块) { // 秘檔的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    模块.exports = 寻保底().扩充({ // 導出一個新綱要，擴充保底。
      implicit: [ // 隱式。
        寻空值(), // 空值。
        寻真假(), // 真假。
        寻整数(), // 整數。
        寻浮点() // 浮點。
      ]
    });
  }
});

// node_modules/js-yaml/lib/schema/core.js
var 寻核心 = 寻常货({ // 尋找核心，這是咱們山寨的命脈。
  "node_modules/js-yaml/lib/schema/core.js"(出口, 模块) { // 核心的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    模块.exports = 寻秘档(); // 導出秘檔。
  }
});

// node_modules/js-yaml/lib/type/timestamp.js
var 寻时戳 = 寻常货({ // 尋找時戳，記錄時間的。
  "node_modules/js-yaml/lib/type/timestamp.js"(出口, 模块) { // 時戳的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    var 歪门日期正则 = new RegExp( // 歪門日期的正規表達式。
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var 歪门时戳正则 = new RegExp( // 歪門時戳的正規表達式。
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );

    function 解析歪门时戳(数据) { // 解析歪門時戳。
      if (数据 === null) // 數據是空就回假。
        return false; // 假。
      if (歪门日期正则.exec(数据) !== null) // 如果是日期格式。
        return true; // 回真。
      if (歪门时戳正则.exec(数据) !== null) // 如果是時戳格式。
        return true; // 回真。
      return false; // 回假。
    }

    function 构造歪门时戳(数据) { // 構造歪門時戳。
      var 匹配, 年, 月, 日, 时, 分, 秒, 毫秒 = 0, // 匹配、年、月、日、時、分、秒、毫秒。
        时差 = null, // 時差。
        时区时, 时区分, 日期; // 時區時、時區分、日期。
      匹配 = 歪门日期正则.exec(数据); // 匹配日期。
      if (匹配 === null) // 如果沒匹配到。
        匹配 = 歪门时戳正则.exec(数据); // 匹配時戳。
      if (匹配 === null) // 如果還是沒匹配到。
        throw new Error("日期解析出错"); // 拋出錯誤。
      年 = +匹配[1]; // 年。
      月 = +匹配[2] - 1; // 月。
      日 = +匹配[3]; // 日。
      if (!匹配[4]) { // 如果沒有時分秒。
        return new Date(Date.UTC(年, 月, 日)); // 回日期。
      }
      时 = +匹配[4]; // 時。
      分 = +匹配[5]; // 分。
      秒 = +匹配[6]; // 秒。
      if (匹配[7]) { // 如果有毫秒。
        毫秒 = 匹配[7].slice(0, 3); // 取前三位。
        while (毫秒.length < 3) { // 補齊三位。
          毫秒 += "0"; // 補零。
        }
        毫秒 = +毫秒; // 轉數字。
      }
      if (匹配[9]) { // 如果有時區。
        时区时 = +匹配[10]; // 時區時。
        时区分 = +(匹配[11] || 0); // 時區分。
        时差 = (时区时 * 60 + 时区分) * 6e4; // 計算時差。
        if (匹配[9] === "-") // 如果是負號。
          时差 = -时差; // 時差取負。
      }
      日期 = new Date(Date.UTC(年, 月, 日, 时, 分, 秒, 毫秒)); // 構造日期。
      if (时差) // 如果有時差。
        日期.setTime(日期.getTime() - 时差); // 調整時間。
      return 日期; // 回日期。
    }

    function 表示歪门时戳(物件) { // 表示歪門時戳。
      return 物件.toISOString(); // 轉成ISO字串。
    }
    模块.exports = new 类型("tag:yaml.org,2002:timestamp", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门时戳, // 解析方法。
      construct: 构造歪门时戳, // 構造方法。
      instanceOf: Date, // 實例是日期。
      represent: 表示歪门时戳 // 表示方法。
    });
  }
});

// node_modules/js-yaml/lib/type/merge.js
var 寻合并 = 寻常货({ // 尋找合併，把東西合在一起。
  "node_modules/js-yaml/lib/type/merge.js"(出口, 模块) { // 合併的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    function 解析歪门合并(数据) { // 解析歪門合併。
      return 数据 === "<<" || 数据 === null; // 判斷是不是合併符號或者空。
    }
    模块.exports = new 类型("tag:yaml.org,2002:merge", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门合并 // 解析方法。
    });
  }
});

// node_modules/js-yaml/lib/type/binary.js
var 寻二进 = 寻常货({ // 尋找二進制，都是些數字。
  "node_modules/js-yaml/lib/type/binary.js"(出口, 模块) { // 二進制的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    var 六四图谱 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"; // 六四圖譜。
    function 解析歪门二进(数据) { // 解析歪門二進制。
      if (数据 === null) // 數據是空就回假。
        return false; // 假。
      var 字符码, 索引, 位长 = 0, // 字符碼、索引、位長。
        最大 = 数据.length, // 最大長度。
        图谱 = 六四图谱; // 圖譜。
      for (索引 = 0; 索引 < 最大; 索引++) { // 循環。
        字符码 = 图谱.indexOf(数据.charAt(索引)); // 找到字符碼。
        if (字符码 > 64) // 如果字符碼大於64。
          continue; // 跳過。
        if (字符码 < 0) // 如果字符碼小於零。
          return false; // 回假。
        位长 += 6; // 位長加六。
      }
      return 位长 % 8 === 0; // 位長能被八整除就回真。
    }

    function 构造歪门二进(数据) { // 構造歪門二進制。
      var 索引, 尾位, 输入 = 数据.replace(/[\r\n=]/g, ""), // 索引、尾位、輸入。
        最大 = 输入.length, // 最大長度。
        图谱 = 六四图谱, // 圖譜。
        位 = 0, // 位。
        结果 = []; // 結果。
      for (索引 = 0; 索引 < 最大; 索引++) { // 循環。
        if (索引 % 4 === 0 && 索引) { // 如果是四的倍數且不是零。
          结果.push(位 >> 16 & 255); // 推入結果。
          结果.push(位 >> 8 & 255); // 推入結果。
          结果.push(位 & 255); // 推入結果。
        }
        位 = 位 << 6 | 图谱.indexOf(输入.charAt(索引)); // 位左移六位，加上字符碼。
      }
      尾位 = 最大 % 4 * 6; // 尾位。
      if (尾位 === 0) { // 如果尾位是零。
        结果.push(位 >> 16 & 255); // 推入結果。
        结果.push(位 >> 8 & 255); // 推入結果。
        结果.push(位 & 255); // 推入結果。
      } else if (尾位 === 18) { // 如果尾位是十八。
        结果.push(位 >> 10 & 255); // 推入結果。
        结果.push(位 >> 2 & 255); // 推入結果。
      } else if (尾位 === 12) { // 如果尾位是十二。
        结果.push(位 >> 4 & 255); // 推入結果。
      }
      return new Uint8Array(结果); // 回Uint8Array。
    }

    function 表示歪门二进(物件) { // 表示歪門二進制。
      var 结果 = "", // 結果。
        位 = 0, // 位。
        索引, 尾, 最大 = 物件.length, // 索引、尾、最大長度。
        图谱 = 六四图谱; // 圖譜。
      for (索引 = 0; 索引 < 最大; 索引++) { // 循環。
        if (索引 % 3 === 0 && 索引) { // 如果是三的倍數且不是零。
          结果 += 图谱[位 >> 18 & 63]; // 加上字符。
          结果 += 图谱[位 >> 12 & 63]; // 加上字符。
          结果 += 图谱[位 >> 6 & 63]; // 加上字符。
          结果 += 图谱[位 & 63]; // 加上字符。
        }
        位 = (位 << 8) + 物件[索引]; // 位左移八位，加上物件。
      }
      尾 = 最大 % 3; // 尾。
      if (尾 === 0) { // 如果尾是零。
        结果 += 图谱[位 >> 18 & 63]; // 加上字符。
        结果 += 图谱[位 >> 12 & 63]; // 加上字符。
        结果 += 图谱[位 >> 6 & 63]; // 加上字符。
        结果 += 图谱[位 & 63]; // 加上字符。
      } else if (尾 === 2) { // 如果尾是二。
        结果 += 图谱[位 >> 10 & 63]; // 加上字符。
        结果 += 图谱[位 >> 4 & 63]; // 加上字符。
        结果 += 图谱[位 << 2 & 63]; // 加上字符。
        结果 += 图谱[64]; // 加上等號。
      } else if (尾 === 1) { // 如果尾是一。
        结果 += 图谱[位 >> 2 & 63]; // 加上字符。
        结果 += 图谱[位 << 4 & 63]; // 加上字符。
        结果 += 图谱[64]; // 加上等號。
        结果 += 图谱[64]; // 加上等號。
      }
      return 结果; // 回結果。
    }

    function 是二进否(物件) { // 看看是不是二進制。
      return Object.prototype.toString.call(物件) === "[object Uint8Array]"; // 是Uint8Array就回真。
    }
    模块.exports = new 类型("tag:yaml.org,2002:binary", { // 導出一個新類型。
      kind: "scalar", // 種類是標量。
      resolve: 解析歪门二进, // 解析方法。
      construct: 构造歪门二进, // 構造方法。
      predicate: 是二进否, // 判斷方法。
      represent: 表示歪门二进 // 表示方法。
    });
  }
});

// node_modules/js-yaml/lib/type/omap.js
var 寻有序图 = 寻常货({ // 尋找有序圖，有順序的映射。
  "node_modules/js-yaml/lib/type/omap.js"(出口, 模块) { // 有序圖的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    var _hasOwnProperty = Object.prototype.hasOwnProperty; // 自己的屬性。
    var _toString = Object.prototype.toString; // 轉字串。
    function 解析歪门有序图(数据) { // 解析歪門有序圖。
      if (数据 === null) // 數據是空就回真。
        return true; // 真。
      var 物件钥匙 = [], // 物件鑰匙。
        索引, 长度, 对子, 对子钥匙, 对子有钥匙, 物件 = 数据; // 索引、長度、對子、對子鑰匙、對子有鑰匙、物件。
      for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循環。
        对子 = 物件[索引]; // 取對子。
        对子有钥匙 = false; // 對子有沒有鑰匙。
        if (_toString.call(对子) !== "[object Object]") // 如果對子不是物件。
          return false; // 回假。
        for (对子钥匙 in 对子) { // 遍歷對子鑰匙。
          if (_hasOwnProperty.call(对子, 对子钥匙)) { // 如果是對子自己的鑰匙。
            if (!对子有钥匙) // 如果對子沒有鑰匙。
              对子有钥匙 = true; // 就設為真。
            else
              return false; // 不然就回假。
          }
        }
        if (!对子有钥匙) // 如果對子沒有鑰匙。
          return false; // 回假。
        if (物件钥匙.indexOf(对子钥匙) === -1) // 如果物件鑰匙裡沒有對子鑰匙。
          物件钥匙.push(对子钥匙); // 推入物件鑰匙。
        else
          return false; // 不然就回假。
      }
      return true; // 回真。
    }

    function 构造歪门有序图(数据) { // 構造歪門有序圖。
      return 数据 !== null ? 数据 : []; // 數據不空就用數據，不然就空陣列。
    }
    模块.exports = new 类型("tag:yaml.org,2002:omap", { // 導出一個新類型。
      kind: "sequence", // 種類是序列。
      resolve: 解析歪门有序图, // 解析方法。
      construct: 构造歪门有序图 // 構造方法。
    });
  }
});

// node_modules/js-yaml/lib/type/pairs.js
var 寻对子 = 寻常货({ // 尋找對子，成雙成對的。
  "node_modules/js-yaml/lib/type/pairs.js"(出口, 模块) { // 對子的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    var _toString = Object.prototype.toString; // 轉字串。
    function 解析歪门对子(数据) { // 解析歪門對子。
      if (数据 === null) // 數據是空就回真。
        return true; // 真。
      var 索引, 长度, 对子, 钥匙, 结果, 物件 = 数据; // 索引、長度、對子、鑰匙、結果、物件。
      结果 = new Array(物件.length); // 結果陣列。
      for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循環。
        对子 = 物件[索引]; // 取對子。
        if (_toString.call(对子) !== "[object Object]") // 如果對子不是物件。
          return false; // 回假。
        钥匙 = Object.keys(对子); // 取對子鑰匙。
        if (钥匙.length !== 1) // 如果鑰匙數量不是一。
          return false; // 回假。
        结果[索引] = [钥匙[0], 对子[钥匙[0]]]; // 記錄鑰匙和值。
      }
      return true; // 回真。
    }

    function 构造歪门对子(数据) { // 構造歪門對子。
      if (数据 === null) // 數據是空就回空陣列。
        return []; // 空陣列。
      var 索引, 长度, 对子, 钥匙, 结果, 物件 = 数据; // 索引、長度、對子、鑰匙、結果、物件。
      结果 = new Array(物件.length); // 結果陣列。
      for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循環。
        对子 = 物件[索引]; // 取對子。
        钥匙 = Object.keys(对子); // 取對子鑰匙。
        结果[索引] = [钥匙[0], 对子[钥匙[0]]]; // 記錄鑰匙和值。
      }
      return 结果; // 回結果。
    }
    模块.exports = new 类型("tag:yaml.org,2002:pairs", { // 導出一個新類型。
      kind: "sequence", // 種類是序列。
      resolve: 解析歪门对子, // 解析方法。
      construct: 构造歪门对子 // 構造方法。
    });
  }
});

// node_modules/js-yaml/lib/type/set.js
var 寻集合 = 寻常货({ // 尋找集合，一堆堆的。
  "node_modules/js-yaml/lib/type/set.js"(出口, 模块) { // 集合的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 类型 = 寻类型(); // 類型。
    var _hasOwnProperty = Object.prototype.hasOwnProperty; // 自己的屬性。
    function 解析歪门集合(数据) { // 解析歪門集合。
      if (数据 === null) // 數據是空就回真。
        return true; // 真。
      var 钥匙, 物件 = 数据; // 鑰匙、物件。
      for (钥匙 in 物件) { // 遍歷物件鑰匙。
        if (_hasOwnProperty.call(物件, 钥匙)) { // 如果是物件自己的鑰匙。
          if (物件[钥匙] !== null) // 如果值不是空。
            return false; // 回假。
        }
      }
      return true; // 回真。
    }

    function 构造歪门集合(数据) { // 構造歪門集合。
      return 数据 !== null ? 数据 : {}; // 數據不空就用數據，不然就空物件。
    }
    模块.exports = new 类型("tag:yaml.org,2002:set", { // 導出一個新類型。
      kind: "mapping", // 種類是映射。
      resolve: 解析歪门集合, // 解析方法。
      construct: 构造歪门集合 // 構造方法。
    });
  }
});

// node_modules/js-yaml/lib/schema/default.js
var 寻默认 = 寻常货({ // 尋找默認，這是咱們山寨的默認配置。
  "node_modules/js-yaml/lib/schema/default.js"(出口, 模块) { // 默認的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    模块.exports = 寻核心().扩充({ // 導出一個新綱要，擴充核心。
      implicit: [ // 隱式。
        寻时戳(), // 時戳。
        寻合并() // 合併。
      ],
      explicit: [ // 顯式。
        寻二进(), // 二進制。
        寻有序图(), // 有序圖。
        寻对子(), // 對子。
        寻集合() // 集合。
      ]
    });
  }
});

// node_modules/js-yaml/lib/loader.js
var 寻装载 = 寻常货({ // 尋找裝載，把東西都裝進來。
  "node_modules/js-yaml/lib/loader.js"(出口, 模块) { // 裝載的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 寻常 = 寻常货栈(); // 尋常貨棧裡找尋常。
    var 歪门邪道之祸 = 寻异端(); // 歪門邪道之禍。
    var 造片段 = 寻片段(); // 製造片段。
    var 默认纲要 = 寻默认(); // 默認綱要。
    var _hasOwnProperty = Object.prototype.hasOwnProperty; // 自己的屬性。
    var 流内境 = 1; // 流內境。
    var 流外境 = 2; // 流外境。
    var 块内境 = 3; // 塊內境。
    var 块外境 = 4; // 塊外境。
    var 剪切模式 = 1; // 剪切模式。
    var 剥离模式 = 2; // 剝離模式。
    var 保留模式 = 3; // 保留模式。
    var 不可印字符 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/; // 不可印字符的正規表達式。
    var 非西文换行 = /[\x85\u2028\u2029]/; // 非西文換行的正規表達式。
    var 流指示符 = /[,\[\]\{\}]/; // 流指示符的正規表達式。
    var 标签把手 = /^(?:!|!!|![a-z\-]+!)$/i; // 標籤把手的正規表達式。
    var 标签地址 = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i; // 標籤地址的正規表達式。
    function 查类型(物件) { // 檢查類型。
      return Object.prototype.toString.call(物件); // 回物件的字串表示。
    }

    function 是行尾否(字符码) { // 看看是不是行尾。
      return 字符码 === 10 || 字符码 === 13; // 判斷是不是換行或回車。
    }

    function 是空白否(字符码) { // 看看是不是空白。
      return 字符码 === 9 || 字符码 === 32; // 判斷是不是製表符或空格。
    }

    function 是空行否(字符码) { // 看看是不是空行。
      return 字符码 === 9 || 字符码 === 32 || 字符码 === 10 || 字符码 === 13; // 判斷是不是製表符、空格、換行或回車。
    }

    function 是流符否(字符码) { // 看看是不是流符。
      return 字符码 === 44 || 字符码 === 91 || 字符码 === 93 || 字符码 === 123 || 字符码 === 125; // 判斷是不是逗號、方括號或花括號。
    }

    function 十六转码(字符码) { // 十六進制轉碼。
      var 小寫字符码; // 小寫字符碼。
      if (48 <= 字符码 && 字符码 <= 57) { // 如果是數字。
        return 字符码 - 48; // 回數字。
      }
      小寫字符码 = 字符码 | 32; // 轉小寫。
      if (97 <= 小寫字符码 && 小寫字符码 <= 102) { // 如果是字母。
        return 小寫字符码 - 97 + 10; // 回數字。
      }
      return -1; // 回負一。
    }

    function 转义十六长(字符码) { // 轉義十六進制長度。
      if (字符码 === 120) { // 如果是x。
        return 2; // 回二。
      }
      if (字符码 === 117) { // 如果是u。
        return 4; // 回四。
      }
      if (字符码 === 85) { // 如果是U。
        return 8; // 回八。
      }
      return 0; // 回零。
    }

    function 十进制转码(字符码) { // 十進制轉碼。
      if (48 <= 字符码 && 字符码 <= 57) { // 如果是數字。
        return 字符码 - 48; // 回數字。
      }
      return -1; // 回負一。
    }

    function 简易转义(字符码) { // 簡易轉義。
      return 字符码 === 48 ? "\0" : 字符码 === 97 ? "\x07" : 字符码 === 98 ? "\b" : 字符码 === 116 ? "	" : 字符码 === 9 ? "	" : 字符码 === 110 ? "\n" : 字符码 === 118 ? "\v" : 字符码 === 102 ? "\f" : 字符码 === 114 ? "\r" : 字符码 === 101 ? "\x1B" : 字符码 === 32 ? " " : 字符码 === 34 ? '"' : 字符码 === 47 ? "/" : 字符码 === 92 ? "\\" : 字符码 === 78 ? "\x85" : 字符码 === 95 ? "\xA0" : 字符码 === 76 ? "\u2028" : 字符码 === 80 ? "\u2029" : ""; // 判斷字符碼，回對應的轉義字符。
    }

    function 码点转字(字符码) { // 碼點轉字。
      if (字符码 <= 65535) { // 如果字符碼小於等於65535。
        return String.fromCharCode(字符码); // 回字符。
      }
      return String.fromCharCode( // 回字符。
        (字符码 - 65536 >> 10) + 55296, // 高位。
        (字符码 - 65536 & 1023) + 56320 // 低位。
      );
    }

    var 简易转义查 = new Array(256); // 簡易轉義檢查陣列。
    var 简易转义图 = new Array(256); // 簡易轉義圖陣列。
    for (i = 0; i < 256; i++) { // 循環。
      简易转义查[i] = 简易转义(i) ? 1 : 0; // 檢查是不是簡易轉義。
      简易转义图[i] = 简易转义(i); // 記錄簡易轉義。
    }
    var i; // 循環變數。
    function 状态(输入, 选项) { // 狀態，有輸入有選項。
      this.input = 输入; // 輸入。
      this.filename = 选项["filename"] || null; // 文件名。
      this.schema = 选项["schema"] || 默认纲要; // 綱要。
      this.onWarning = 选项["onWarning"] || null; // 警告回調。
      this.legacy = 选项["legacy"] || false; // 舊版兼容。
      this.json = 选项["json"] || false; // JSON模式。
      this.listener = 选项["listener"] || null; // 監聽器。
      this.implicitTypes = this.schema.compiledImplicit; // 隱式類型。
      this.typeMap = this.schema.compiledTypeMap; // 類型圖譜。
      this.length = 输入.length; // 長度。
      this.position = 0; // 位置。
      this.line = 0; // 行號。
      this.lineStart = 0; // 行始。
      this.lineIndent = 0; // 行縮進。
      this.firstTabInLine = -1; // 行中第一個製表符。
      this.documents = []; // 文檔列表。
    }

    function 生错处(状态, 消息) { // 產生錯處。
      var 标记 = { // 標記。
        name: 状态.filename, // 文件名。
        buffer: 状态.input.slice(0, -1), // 緩衝區。
        // omit trailing \0
        position: 状态.position, // 位置。
        line: 状态.line, // 行號。
        column: 状态.position - 状态.lineStart // 列號。
      };
      标记.snippet = 造片段(标记); // 片段。
      return new 歪门邪道之祸(消息, 标记); // 回歪門邪道之禍。
    }

    function 抛错处(状态, 消息) { // 拋出錯處。
      throw 生错处(状态, 消息); // 拋出產生的錯處。
    }

    function 抛警示(状态, 消息) { // 拋出警示。
      if (状态.onWarning) { // 如果有警告回調。
        状态.onWarning.call(null, 生错处(状态, 消息)); // 調用警告回調。
      }
    }

    var 指令处理者 = { // 指令處理者。
      YAML: function 处理歪门指令(状态, 名号, 参数) { // 處理歪門指令。
        var 匹配, 主版本, 次版本; // 匹配、主版本、次版本。
        if (状态.version !== null) { // 如果版本不空。
          抛错处(状态, "重复的 %歪门指令"); // 拋出重複指令錯誤。
        }
        if (参数.length !== 1) { // 如果參數數量不是一。
          抛错处(状态, "歪门指令只收一个参数"); // 拋出參數數量錯誤。
        }
        匹配 = /^([0-9]+)\.([0-9]+)$/.exec(参数[0]); // 匹配版本號。
        if (匹配 === null) { // 如果沒匹配到。
          抛错处(状态, "歪门指令的参数格式不对劲"); // 拋出參數格式錯誤。
        }
        主版本 = parseInt(匹配[1], 10); // 主版本。
        次版本 = parseInt(匹配[2], 10); // 次版本。
        if (主版本 !== 1) { // 如果主版本不是一。
          抛错处(状态, "文档的歪门版本不中用"); // 拋出版本不中用錯誤。
        }
        状态.version = 参数[0]; // 版本。
        状态.checkLineBreaks = 次版本 < 2; // 檢查換行。
        if (次版本 !== 1 && 次版本 !== 2) { // 如果次版本不是一或二。
          抛警示(状态, "文档的歪门版本不给力"); // 拋出版本不給力警告。
        }
      },
      TAG: function 处理标签指令(状态, 名号, 参数) { // 處理標籤指令。
        var 把手, 前缀; // 把手、前綴。
        if (参数.length !== 2) { // 如果參數數量不是二。
          抛错处(状态, "标签指令只收两个参数"); // 拋出參數數量錯誤。
        }
        把手 = 参数[0]; // 把手。
        前缀 = 参数[1]; // 前綴。
        if (!标签把手.test(把手)) { // 如果不符合標籤把手正規表達式。
          抛错处(状态, "标签指令的标签把手（头一个参数）不对劲"); // 拋出把手格式錯誤。
        }
        if (_hasOwnProperty.call(状态.tagMap, 把手)) { // 如果標籤圖譜裡有把手。
          抛错处(状态, '“这个标签把手之前声明过后缀了”'); // 拋出重複聲明錯誤。
        }
        if (!标签地址.test(前缀)) { // 如果不符合標籤地址正規表達式。
          抛错处(状态, "标签指令的标签前缀（第二个参数）不对劲"); // 拋出前綴格式錯誤。
        }
        try { // 嘗試解碼。
          前缀 = decodeURIComponent(前缀); // 解碼。
        } catch (错处) { // 捕獲錯誤。
          抛错处(状态, "标签前缀歪了: " + 前缀); // 拋出前綴歪了錯誤。
        }
        状态.tagMap[把手] = 前缀; // 記錄把手和前綴。
      }
    };

    function 捕获片段(状态, 始, 末, 检查秘档) { // 捕獲片段。
      var _位置, _长度, _字符, _结果; // 位置、長度、字符、結果。
      if (始 < 末) { // 如果始小於末。
        _结果 = 状态.input.slice(始, 末); // 截取字串。
        if (检查秘档) { // 如果檢查秘檔。
          for (_位置 = 0, _长度 = _结果.length; _位置 < _长度; _位置 += 1) { // 循環。
            _字符 = _结果.charCodeAt(_位置); // 取字符碼。
            if (!(_字符 === 9 || 32 <= _字符 && _字符 <= 1114111)) { // 如果不是有效秘檔字符。
              抛错处(状态, "要的是正经秘档字符"); // 拋出字符錯誤。
            }
          }
        } else if (不可印字符.test(_结果)) { // 如果有不可印字符。
          抛错处(状态, "这水流里有见不得光的字符"); // 拋出不可印字符錯誤。
        }
        状态.result += _结果; // 結果加上截取的字串。
      }
    }

    function 合并映射(状态, 目标, 源头, 可覆盖钥匙) { // 合併映射。
      var 源头钥匙, 钥匙, 索引, 数量; // 源頭鑰匙、鑰匙、索引、數量。
      if (!寻常.是物件否(源头)) { // 如果源頭不是物件。
        抛错处(状态, "没法合拢这些映射；给的物件不中用"); // 拋出物件不中用錯誤。
      }
      源头钥匙 = Object.keys(源头); // 取源頭鑰匙。
      for (索引 = 0, 数量 = 源头钥匙.length; 索引 < 数量; 索引 += 1) { // 循環。
        钥匙 = 源头钥匙[索引]; // 取鑰匙。
        if (!_hasOwnProperty.call(目标, 钥匙)) { // 如果目標裡沒有鑰匙。
          目标[钥匙] = 源头[钥匙]; // 搬過去。
          可覆盖钥匙[钥匙] = true; // 設為可覆蓋。
        }
      }
    }

    function 存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, 值节点, 始行, 始行始, 始位置) { // 存儲映射對。
      var 索引, 数量; // 索引、數量。
      if (Array.isArray(钥匙节点)) { // 如果鑰匙節點是陣列。
        钥匙节点 = Array.prototype.slice.call(钥匙节点); // 複製一份。
        for (索引 = 0, 数量 = 钥匙节点.length; 索引 < 数量; 索引 += 1) { // 循環。
          if (Array.isArray(钥匙节点[索引])) { // 如果是嵌套陣列。
            抛错处(状态, "钥匙里套阵，不给面子"); // 拋出嵌套陣列錯誤。
          }
          if (typeof 钥匙节点 === "object" && 查类型(钥匙节点[索引]) === "[object Object]") { // 如果是物件。
            钥匙节点[索引] = "物件模样"; // 設為物件模樣。
          }
        }
      }
      if (typeof 钥匙节点 === "object" && 查类型(钥匙节点) === "[object Object]") { // 如果鑰匙節點是物件。
        钥匙节点 = "物件模样"; // 設為物件模樣。
      }
      钥匙节点 = String(钥匙节点); // 轉成字串。
      if (_结果 === null) { // 如果結果是空。
        _结果 = {}; // 設為空物件。
      }
      if (钥匙标签 === "tag:yaml.org,2002:merge") { // 如果是合併標籤。
        if (Array.isArray(值节点)) { // 如果值節點是陣列。
          for (索引 = 0, 数量 = 值节点.length; 索引 < 数量; 索引 += 1) { // 循環。
            合并映射(状态, _结果, 值节点[索引], 可覆盖钥匙); // 合併映射。
          }
        } else {
          合并映射(状态, _结果, 值节点, 可覆盖钥匙); // 合併映射。
        }
      } else {
        if (!状态.json && !_hasOwnProperty.call(可覆盖钥匙, 钥匙节点) && _hasOwnProperty.call(_结果, 钥匙节点)) { // 如果不是JSON模式，且鑰匙重複。
          状态.line = 始行 || 状态.line; // 行號。
          状态.lineStart = 始行始 || 状态.lineStart; // 行始。
          状态.position = 始位置 || 状态.position; // 位置。
          抛错处(状态, "映射钥匙重了"); // 拋出重複鑰匙錯誤。
        }
        if (钥匙节点 === "__proto__") { // 如果是__proto__。
          Object.defineProperty(_结果, 钥匙节点, { // 定義屬性。
            configurable: true, // 可配置。
            enumerable: true, // 可枚舉。
            writable: true, // 可寫。
            value: 值节点 // 值。
          });
        } else {
          _结果[钥匙节点] = 值节点; // 記錄值。
        }
        delete 可覆盖钥匙[钥匙节点]; // 刪除可覆蓋鑰匙。
      }
      return _结果; // 回結果。
    }

    function 读换行(状态) { // 讀換行。
      var 字符; // 字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符碼。
      if (字符 === 10) { // 如果是換行。
        状态.position++; // 位置加一。
      } else if (字符 === 13) { // 如果是回車。
        状态.position++; // 位置加一。
        if (状态.input.charCodeAt(状态.position) === 10) { // 如果是回車換行。
          状态.position++; // 位置加一。
        }
      } else {
        抛错处(状态, "该换行了"); // 拋出換行錯誤。
      }
      状态.line += 1; // 行號加一。
      状态.lineStart = 状态.position; // 行始。
      状态.firstTabInLine = -1; // 行中第一個製表符。
    }

    function 跳过间隔(状态, 允许注释, 检查缩进) { // 跳過間隔。
      var 换行数 = 0, // 換行數。
        字符 = 状态.input.charCodeAt(状态.position); // 字符。
      while (字符 !== 0) { // 循環直到結束。
        while (是空白否(字符)) { // 如果是空白。
          if (字符 === 9 && 状态.firstTabInLine === -1) { // 如果是製表符且沒記錄。
            状态.firstTabInLine = 状态.position; // 記錄製表符位置。
          }
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        }
        if (允许注释 && 字符 === 35) { // 如果允許註釋且是井號。
          do {
            字符 = 状态.input.charCodeAt(++状态.position); // 跳過註釋。
          } while (字符 !== 10 && 字符 !== 13 && 字符 !== 0); // 直到換行或結束。
        }
        if 是行尾否(字符)) { // 如果是行尾。
          读换行(状态); // 讀換行。
          字符 = 状态.input.charCodeAt(状态.position); // 取字符。
          换行数++; // 換行數加一。
          状态.lineIndent = 0; // 行縮進歸零。
          while (字符 === 32) { // 如果是空格。
            状态.lineIndent++; // 行縮進加一。
            字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          }
        } else {
          break; // 跳出。
        }
      }
      if (检查缩进 !== -1 && 换行数 !== 0 && 状态.lineIndent < 检查缩进) { // 如果檢查縮進且換行數不為零且縮進不夠。
        抛警示(状态, "缩进不够规矩"); // 拋出縮進不夠警告。
      }
      return 换行数; // 回換行數。
    }

    function 测文档分隔(状态) { // 測試文檔分隔符。
      var _位置 = 状态.position, // 位置。
        字符; // 字符。
      字符 = 状态.input.charCodeAt(_位置); // 取字符。
      if ((字符 === 45 || 字符 === 46) && 字符 === 状态.input.charCodeAt(_位置 + 1) && 字符 === 状态.input.charCodeAt(_位置 + 2)) { // 如果是三個連字符或三個點。
        _位置 += 3; // 位置加三。
        字符 = 状态.input.charCodeAt(_位置); // 取字符。
        if (字符 === 0 || 是空行否(字符)) { // 如果是結束或空行。
          return true; // 回真。
        }
      }
      return false; // 回假。
    }

    function 写折叠行(状态, 数量) { // 寫折疊行。
      if (数量 === 1) { // 如果數量是一。
        状态.result += " "; // 加上空格。
      } else if (数量 > 1) { // 如果數量大於一。
        状态.result += 寻常.反复("\n", 数量 - 1); // 加上換行。
      }
    }

    function 读普通标量(状态, 节点缩进, 流集合内) { // 讀普通標量。
      var 前面, 后面, 捕获始, 捕获末, 有待处理内容, _行, _行始, _行缩进, _种类 = 状态.kind, _结果 = 状态.result, 字符; // 前面、後面、捕獲始、捕獲末、有待處理內容、行、行始、行縮進、種類、結果、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (是空行否(字符) || 是流符否(字符) || 字符 === 35 || 字符 === 38 || 字符 === 42 || 字符 === 33 || 字符 === 124 || 字符 === 62 || 字符 === 39 || 字符 === 34 || 字符 === 37 || 字符 === 64 || 字符 === 96) { // 如果是空白、流符、井號、與號、星號、感嘆號、豎線、大於號、單引號、雙引號、百分號、艾特符、反引號。
        return false; // 回假。
      }
      if (字符 === 63 || 字符 === 45) { // 如果是問號或減號。
        后面 = 状态.input.charCodeAt(状态.position + 1); // 取後面字符。
        if (是空行否(后面) || 流集合内 && 是流符否(后面)) { // 如果是空白或流符。
          return false; // 回假。
        }
      }
      状态.kind = "scalar"; // 種類是標量。
      状态.result = ""; // 結果清空。
      捕获始 = 捕获末 = 状态.position; // 捕獲始末。
      有待处理内容 = false; // 有待處理內容。
      while (字符 !== 0) { // 循環直到結束。
        if (字符 === 58) { // 如果是冒號。
          后面 = 状态.input.charCodeAt(状态.position + 1); // 取後面字符。
          if (是空行否(后面) || 流集合内 && 是流符否(后面)) { // 如果是空白或流符。
            break; // 跳出。
          }
        } else if (字符 === 35) { // 如果是井號。
          前面 = 状态.input.charCodeAt(状态.position - 1); // 取前面字符。
          if (是空行否(前面)) { // 如果是空白。
            break; // 跳出。
          }
        } else if (状态.position === 状态.lineStart && 测文档分隔(状态) || 流集合内 && 是流符否(字符)) { // 如果是文檔分隔符或流符。
          break; // 跳出。
        } else if 是行尾否(字符)) { // 如果是行尾。
          _行 = 状态.line; // 行號。
          _行始 = 状态.lineStart; // 行始。
          _行缩进 = 状态.lineIndent; // 行縮進。
          跳过间隔(状态, false, -1); // 跳過間隔。
          if (状态.lineIndent >= 节点缩进) { // 如果行縮進大於等於節點縮進。
            有待处理内容 = true; // 有待處理內容。
            字符 = 状态.input.charCodeAt(状态.position); // 取字符。
            continue; // 繼續。
          } else {
            状态.position = 捕获末; // 位置回退。
            状态.line = _行; // 行號回退。
            状态.lineStart = _行始; // 行始回退。
            状态.lineIndent = _行缩进; // 行縮進回退。
            break; // 跳出。
          }
        }
        if (有待处理内容) { // 如果有待處理內容。
          捕获片段(状态, 捕获始, 捕获末, false); // 捕獲片段。
          写折叠行(状态, 状态.line - _行); // 寫折疊行。
          捕获始 = 捕获末 = 状态.position; // 捕獲始末。
          有待处理内容 = false; // 沒待處理內容。
        }
        if (!是空白否(字符)) { // 如果不是空白。
          捕获末 = 状态.position + 1; // 捕獲末。
        }
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      }
      捕获片段(状态, 捕获始, 捕获末, false); // 捕獲片段。
      if (状态.result) { // 如果有結果。
        return true; // 回真。
      }
      状态.kind = _种类; // 種類回退。
      状态.result = _结果; // 結果回退。
      return false; // 回假。
    }

    function 读单引号标量(状态, 节点缩进) { // 讀單引號標量。
      var 字符, 捕获始, 捕获末; // 字符、捕獲始、捕獲末。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 !== 39) { // 如果不是單引號。
        return false; // 回假。
      }
      状态.kind = "scalar"; // 種類是標量。
      状态.result = ""; // 結果清空。
      状态.position++; // 位置加一。
      捕获始 = 捕获末 = 状态.position; // 捕獲始末。
      while ((字符 = 状态.input.charCodeAt(状态.position)) !== 0) { // 循環直到結束。
        if (字符 === 39) { // 如果是單引號。
          捕获片段(状态, 捕获始, 状态.position, true); // 捕獲片段。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          if (字符 === 39) { // 如果是兩個單引號。
            捕获始 = 状态.position; // 捕獲始。
            状态.position++; // 位置加一。
            捕获末 = 状态.position; // 捕獲末。
          } else {
            return true; // 回真。
          }
        } else if 是行尾否(字符)) { // 如果是行尾。
          捕获片段(状态, 捕获始, 捕获末, true); // 捕獲片段。
          写折叠行(状态, 跳过间隔(状态, false, 节点缩进)); // 寫折疊行。
          捕获始 = 捕获末 = 状态.position; // 捕獲始末。
        } else if (状态.position === 状态.lineStart && 测文档分隔(状态)) { // 如果是文檔分隔符。
          抛错处(状态, "单引号标量里文档就没了，不合规矩"); // 拋出文檔結束錯誤。
        } else {
          状态.position++; // 位置加一。
          捕获末 = 状态.position; // 捕獲末。
        }
      }
      抛错处(状态, "单引号标量里水流就没了，不合规矩"); // 拋出水流結束錯誤。
    }

    function 读双引号标量(状态, 节点缩进) { // 讀雙引號標量。
      var 捕获始, 捕获末, 十六长, 十六结果, 臨時, 字符; // 捕獲始、捕獲末、十六長、十六結果、臨時、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 !== 34) { // 如果不是雙引號。
        return false; // 回假。
      }
      状态.kind = "scalar"; // 種類是標量。
      状态.result = ""; // 結果清空。
      状态.position++; // 位置加一。
      捕获始 = 捕获末 = 状态.position; // 捕獲始末。
      while ((字符 = 状态.input.charCodeAt(状态.position)) !== 0) { // 循環直到結束。
        if (字符 === 34) { // 如果是雙引號。
          捕获片段(状态, 捕获始, 状态.position, true); // 捕獲片段。
          状态.position++; // 位置加一。
          return true; // 回真。
        } else if (字符 === 92) { // 如果是反斜槓。
          捕获片段(状态, 捕获始, 状态.position, true); // 捕獲片段。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          if 是行尾否(字符)) { // 如果是行尾。
            跳过间隔(状态, false, 节点缩进); // 跳過間隔。
          } else if (字符 < 256 && 简易转义查[字符]) { // 如果是簡易轉義。
            状态.result += 简易转义图[字符]; // 加上轉義字符。
            状态.position++; // 位置加一。
          } else if ((臨時 = 转义十六长(字符)) > 0) { // 如果是十六進制轉義。
            十六长 = 臨時; // 十六長。
            十六结果 = 0; // 十六結果。
            for (; 十六长 > 0; 十六长--) { // 循環。
              字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
              if ((臨時 = 十六转码(字符)) >= 0) { // 如果是十六進制碼。
                十六结果 = (十六结果 << 4) + 臨時; // 加上十六進制結果。
              } else {
                抛错处(状态, "要的是十六进制字符"); // 拋出十六進制字符錯誤。
              }
            }
            状态.result += 码点转字(十六结果); // 加上碼點轉字。
            状态.position++; // 位置加一。
          } else {
            抛错处(状态, "不知名的转义符"); // 拋出不知名轉義符錯誤。
          }
          捕获始 = 捕获末 = 状态.position; // 捕獲始末。
        } else if 是行尾否(字符)) { // 如果是行尾。
          捕获片段(状态, 捕获始, 捕获末, true); // 捕獲片段。
          写折叠行(状态, 跳过间隔(状态, false, 节点缩进)); // 寫折疊行。
          捕获始 = 捕获末 = 状态.position; // 捕獲始末。
        } else if (状态.position === 状态.lineStart && 测文档分隔(状态)) { // 如果是文檔分隔符。
          抛错处(状态, "双引号标量里文档就没了，不合规矩"); // 拋出文檔結束錯誤。
        } else {
          状态.position++; // 位置加一。
          捕获末 = 状态.position; // 捕獲末。
        }
      }
      抛错处(状态, "双引号标量里水流就没了，不合规矩"); // 拋出水流結束錯誤。
    }

    function 读流集合(状态, 节点缩进) { // 讀流集合。
      var 读下个 = true, // 讀下個。
        _行, _行始, _位置, _标签 = 状态.tag, _结果, _锚点 = 状态.anchor, 后面, 终止符, 是对子, 是显式对子, 是映射, 可覆盖钥匙 = /* @__PURE__ */ Object.create(null), 钥匙节点, 钥匙标签, 值节点, 字符; // 讀下個、行、行始、位置、標籤、結果、錨點、後面、終止符、是對子、是顯式對子、是映射、可覆蓋鑰匙、鑰匙節點、鑰匙標籤、值節點、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 === 91) { // 如果是左方括號。
        终止符 = 93; // 終止符是右方括號。
        是映射 = false; // 不是映射。
        _结果 = []; // 結果是陣列。
      } else if (字符 === 123) { // 如果是左花括號。
        终止符 = 125; // 終止符是右花括號。
        是映射 = true; // 是映射。
        _结果 = {}; // 結果是物件。
      } else {
        return false; // 回假。
      }
      if (状态.锚点 !== null) { // 如果有錨點。
        状态.anchorMap[状态.锚点] = _结果; // 記錄錨點和結果。
      }
      字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      while (字符 !== 0) { // 循環直到結束。
        跳过间隔(状态, true, 节点缩进); // 跳過間隔。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        if (字符 === 终止符) { // 如果是終止符。
          状态.position++; // 位置加一。
          状态.tag = _标签; // 標籤回退。
          状态.anchor = _锚点; // 錨點回退。
          状态.kind = 是映射 ? "mapping" : "sequence"; // 種類是映射或序列。
          状态.result = _结果; // 結果。
          return true; // 回真。
        } else if (!读下个) { // 如果不讀下個。
          抛错处(状态, "流集合条目之间少了逗号"); // 拋出少了逗號錯誤。
        } else if (字符 === 44) { // 如果是逗號。
          抛错处(状态, "要的是节点内容，却来了个逗号"); // 拋出逗號錯誤。
        }
        钥匙标签 = 钥匙节点 = 值节点 = null; // 鑰匙標籤、鑰匙節點、值節點清空。
        是对子 = 是显式对子 = false; // 是對子、是顯式對子。
        if (字符 === 63) { // 如果是問號。
          后面 = 状态.input.charCodeAt(状态.position + 1); // 取後面字符。
          if (是空行否(后面)) { // 如果是空白。
            是对子 = 是显式对子 = true; // 是對子、是顯式對子。
            状态.position++; // 位置加一。
            跳过间隔(状态, true, 节点缩进); // 跳過間隔。
          }
        }
        _行 = 状态.line; // 行號。
        _行始 = 状态.lineStart; // 行始。
        _位置 = 状态.position; // 位置。
        组合节点(状态, 节点缩进, 流内境, false, true); // 組合節點。
        钥匙标签 = 状态.tag; // 鑰匙標籤。
        钥匙节点 = 状态.result; // 鑰匙節點。
        跳过间隔(状态, true, 节点缩进); // 跳過間隔。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        if ((是显式对子 || 状态.line === _行) && 字符 === 58) { // 如果是顯式對子或在同一行且是冒號。
          是对子 = true; // 是對子。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          跳过间隔(状态, true, 节点缩进); // 跳過間隔。
          组合节点(状态, 节点缩进, 流内境, false, true); // 組合節點。
          值节点 = 状态.result; // 值節點。
        }
        if (是映射) { // 如果是映射。
          存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, 值节点, _行, _行始, _位置); // 存儲映射對。
        } else if (是对子) { // 如果是對子。
          _结果.push(存储映射对(状态, null, 可覆盖钥匙, 钥匙标签, 钥匙节点, 值节点, _行, _行始, _位置)); // 推入映射對。
        } else {
          _结果.push(钥匙节点); // 推入鑰匙節點。
        }
        跳过间隔(状态, true, 节点缩进); // 跳過間隔。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        if (字符 === 44) { // 如果是逗號。
          读下个 = true; // 讀下個。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        } else {
          读下个 = false; // 不讀下個。
        }
      }
      抛错处(状态, "流集合里水流就没了，不合规矩"); // 拋出水流結束錯誤。
    }

    function 读块标量(状态, 节点缩进) { // 讀塊標量。
      var 捕获始, 折叠, 啃食 = 剪切模式, // 捕獲始、折疊、啃食。
        已读内容 = false, // 已讀內容。
        已侦测缩进 = false, // 已偵測縮進。
        文本缩进 = 节点缩进, // 文本縮進。
        空行数 = 0, // 空行數。
        更多缩进 = false, // 更多縮進。
        臨時, 字符; // 臨時、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 === 124) { // 如果是豎線。
        折叠 = false; // 不折疊。
      } else if (字符 === 62) { // 如果是大於號。
        折叠 = true; // 折疊。
      } else {
        return false; // 回假。
      }
      状态.kind = "scalar"; // 種類是標量。
      状态.result = ""; // 結果清空。
      while (字符 !== 0) { // 循環直到結束。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        if (字符 === 43 || 字符 === 45) { // 如果是加號或減號。
          if (剪切模式 === 啃食) { // 如果是剪切模式。
            啃食 = 字符 === 43 ? 保留模式 : 剥离模式; // 啃食模式。
          } else {
            抛错处(状态, "啃食模式符重复了"); // 拋出重複啃食模式錯誤。
          }
        } else if ((臨時 = 十进制转码(字符)) >= 0) { // 如果是十進制碼。
          if (臨時 === 0) { // 如果是零。
            抛错处(状态, "块标量缩进宽度不对劲；不能小于一"); // 拋出縮進寬度錯誤。
          } else if (!已侦测缩进) { // 如果沒偵測縮進。
            文本缩进 = 节点缩进 + 臨時 - 1; // 文本縮進。
            已侦测缩进 = true; // 已偵測縮進。
          } else {
            抛错处(状态, "缩进宽度符重复了"); // 拋出重複縮進寬度錯誤。
          }
        } else {
          break; // 跳出。
        }
      }
      if (是空白否(字符)) { // 如果是空白。
        do {
          字符 = 状态.input.charCodeAt(++状态.position); // 跳過空白。
        } while (是空白否(字符)); // 直到不是空白。
        if (字符 === 35) { // 如果是井號。
          do {
            字符 = 状态.input.charCodeAt(++状态.position); // 跳過註釋。
          } while (!是行尾否(字符) && 字符 !== 0); // 直到行尾或結束。
        }
      }
      while (字符 !== 0) { // 循環直到結束。
        读换行(状态); // 讀換行。
        状态.lineIndent = 0; // 行縮進歸零。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        while ((!已侦测缩进 || 状态.lineIndent < 文本缩进) && 字符 === 32) { // 如果沒偵測縮進或縮進不夠且是空格。
          状态.lineIndent++; // 行縮進加一。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        }
        if (!已侦测缩进 && 状态.lineIndent > 文本缩进) { // 如果沒偵測縮進且縮進過多。
          文本缩进 = 状态.lineIndent; // 文本縮進。
        }
        if 是行尾否(字符)) { // 如果是行尾。
          空行数++; // 空行數加一。
          continue; // 繼續。
        }
        if (状态.lineIndent < 文本缩进) { // 如果行縮進不夠。
          if (啃食 === 保留模式) { // 如果是保留模式。
            状态.result += 寻常.反复("\n", 已读内容 ? 1 + 空行数 : 空行数); // 加上換行。
          } else if (啃食 === 剪切模式) { // 如果是剪切模式。
            if (已读内容) { // 如果已讀內容。
              状态.result += "\n"; // 加上換行。
            }
          }
          break; // 跳出。
        }
        if (折叠) { // 如果是折疊。
          if (是空白否(字符)) { // 如果是空白。
            更多缩进 = true; // 更多縮進。
            状态.result += 寻常.反复("\n", 已读内容 ? 1 + 空行数 : 空行数); // 加上換行。
          } else if (更多缩进) { // 如果是更多縮進。
            更多缩进 = false; // 沒更多縮進。
            状态.result += 寻常.反复("\n", 空行数 + 1); // 加上換行。
          } else if (空行数 === 0) { // 如果空行數是零。
            if (已读内容) { // 如果已讀內容。
              状态.result += " "; // 加上空格。
            }
          } else {
            状态.result += 寻常.反复("\n", 空行数); // 加上換行。
          }
        } else {
          状态.result += 寻常.反复("\n", 已读内容 ? 1 + 空行数 : 空行数); // 加上換行。
        }
        已读内容 = true; // 已讀內容。
        已侦测缩进 = true; // 已偵測縮進。
        空行数 = 0; // 空行數歸零。
        捕获始 = 状态.position; // 捕獲始。
        while (!是行尾否(字符) && 字符 !== 0) { // 循環直到行尾或結束。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        }
        捕获片段(状态, 捕获始, 状态.position, false); // 捕獲片段。
      }
      return true; // 回真。
    }

    function 读块序列(状态, 节点缩进) { // 讀塊序列。
      var _行, _标签 = 状态.tag, _锚点 = 状态.anchor, _结果 = [], 后面, 已侦测 = false, 字符; // 行、標籤、錨點、結果、後面、已偵測、字符。
      if (状态.firstTabInLine !== -1) // 如果行中第一個製表符不為負一。
        return false; // 回假。
      if (状态.锚点 !== null) { // 如果有錨點。
        状态.anchorMap[状态.锚点] = _结果; // 記錄錨點和結果。
      }
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      while (字符 !== 0) { // 循環直到結束。
        if (状态.firstTabInLine !== -1) { // 如果行中第一個製表符不為負一。
          状态.position = 状态.firstTabInLine; // 位置回退。
          抛错处(状态, "缩进里不能有制表符"); // 拋出製表符錯誤。
        }
        if (字符 !== 45) { // 如果不是減號。
          break; // 跳出。
        }
        后面 = 状态.input.charCodeAt(状态.position + 1); // 取後面字符。
        if (!是空行否(后面)) { // 如果不是空白。
          break; // 跳出。
        }
        已侦测 = true; // 已偵測。
        状态.position++; // 位置加一。
        if (跳过间隔(状态, true, -1)) { // 跳過間隔。
          if (状态.lineIndent <= 节点缩进) { // 如果行縮進小於等於節點縮進。
            _结果.push(null); // 推入空。
            字符 = 状态.input.charCodeAt(状态.position); // 取字符。
            continue; // 繼續。
          }
        }
        _行 = 状态.line; // 行號。
        组合节点(状态, 节点缩进, 块内境, false, true); // 組合節點。
        _结果.push(状态.result); // 推入結果。
        跳过间隔(状态, true, -1); // 跳過間隔。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        if ((状态.line === _行 || 状态.lineIndent > 节点缩进) && 字符 !== 0) { // 如果在同一行或縮進過多且不是結束。
          抛错处(状态, "序列条目缩进不对劲"); // 拋出縮進錯誤。
        } else if (状态.lineIndent < 节点缩进) { // 如果行縮進不夠。
          break; // 跳出。
        }
      }
      if (已侦测) { // 如果已偵測。
        状态.tag = _标签; // 標籤回退。
        状态.anchor = _锚点; // 錨點回退。
        状态.kind = "sequence"; // 種類是序列。
        状态.result = _结果; // 結果。
        return true; // 回真。
      }
      return false; // 回假。
    }

    function 读块映射(状态, 节点缩进, 流缩进) { // 讀塊映射。
      var 后面, 允许紧凑, _行, _钥匙行, _钥匙行始, _钥匙位置, _标签 = 状态.tag, _锚点 = 状态.anchor, _结果 = {}, 可覆盖钥匙 = /* @__PURE__ */ Object.create(null), 钥匙标签 = null, 钥匙节点 = null, 值节点 = null, 在显式钥匙 = false, 已侦测 = false, 字符; // 後面、允許緊湊、行、鑰匙行、鑰匙行始、鑰匙位置、標籤、錨點、結果、可覆蓋鑰匙、鑰匙標籤、鑰匙節點、值節點、在顯式鑰匙、已偵測、字符。
      if (状态.firstTabInLine !== -1) // 如果行中第一個製表符不為負一。
        return false; // 回假。
      if (状态.锚点 !== null) { // 如果有錨點。
        状态.anchorMap[状态.锚点] = _结果; // 記錄錨點和結果。
      }
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      while (字符 !== 0) { // 循環直到結束。
        if (!在显式钥匙 && 状态.firstTabInLine !== -1) { // 如果不在顯式鑰匙且行中第一個製表符不為負一。
          状态.position = 状态.firstTabInLine; // 位置回退。
          抛错处(状态, "缩进里不能有制表符"); // 拋出製表符錯誤。
        }
        后面 = 状态.input.charCodeAt(状态.position + 1); // 取後面字符。
        _行 = 状态.line; // 行號。
        if ((字符 === 63 || 字符 === 58) && 是空行否(后面)) { // 如果是問號或冒號且是空白。
          if (字符 === 63) { // 如果是問號。
            if (在显式钥匙) { // 如果在顯式鑰匙。
              存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, null, _钥匙行, _钥匙行始, _钥匙位置); // 存儲映射對。
              钥匙标签 = 钥匙节点 = 值节点 = null; // 鑰匙標籤、鑰匙節點、值節點清空。
            }
            已侦测 = true; // 已偵測。
            在显式钥匙 = true; // 在顯式鑰匙。
            允许紧凑 = true; // 允許緊湊。
          } else if (在显式钥匙) { // 如果在顯式鑰匙。
            在显式钥匙 = false; // 不在顯式鑰匙。
            允许紧凑 = true; // 允許緊湊。
          } else {
            抛错处(状态, "显式映射对不完整；少了钥匙节点；或者后面跟着非制表的空行"); // 拋出不完整映射對錯誤。
          }
          状态.position += 1; // 位置加一。
          字符 = 后面; // 字符。
        } else {
          _钥匙行 = 状态.line; // 鑰匙行。
          _钥匙行始 = 状态.lineStart; // 鑰匙行始。
          _钥匙位置 = 状态.position; // 鑰匙位置。
          if (!组合节点(状态, 流缩进, 流外境, false, true)) { // 如果沒組合節點。
            break; // 跳出。
          }
          if (状态.line === _行) { // 如果在同一行。
            字符 = 状态.input.charCodeAt(状态.position); // 取字符。
            while (是空白否(字符)) { // 跳過空白。
              字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
            }
            if (字符 === 58) { // 如果是冒號。
              字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
              if (!是空行否(字符)) { // 如果不是空白。
                抛错处(状态, "块映射里键值分隔符后面得有个空白符"); // 拋出空白符錯誤。
              }
              if (在显式钥匙) { // 如果在顯式鑰匙。
                存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, null, _钥匙行, _钥匙行始, _钥匙位置); // 存儲映射對。
                钥匙标签 = 钥匙节点 = 值节点 = null; // 鑰匙標籤、鑰匙節點、值節點清空。
              }
              已侦测 = true; // 已偵測。
              在显式钥匙 = false; // 不在顯式鑰匙。
              允许紧凑 = false; // 不允許緊湊。
              钥匙标签 = 状态.tag; // 鑰匙標籤。
              钥匙节点 = 状态.result; // 鑰匙節點。
            } else if (已侦测) { // 如果已偵測。
              抛错处(状态, "读不了隐式映射对；少了冒号"); // 拋出少了冒號錯誤。
            } else {
              状态.tag = _标签; // 標籤回退。
              状态.anchor = _锚点; // 錨點回退。
              return true; // 回真。
            }
          } else if (已侦测) { // 如果已偵測。
            抛错处(状态, "读不了块映射条目；多行钥匙不能是隐式钥匙"); // 拋出多行鑰匙錯誤。
          } else {
            状态.tag = _标签; // 標籤回退。
            状态.anchor = _锚点; // 錨點回退。
            return true; // 回真。
          }
        }
        if (状态.line === _行 || 状态.lineIndent > 节点缩进) { // 如果在同一行或縮進過多。
          if (在显式钥匙) { // 如果在顯式鑰匙。
            _钥匙行 = 状态.line; // 鑰匙行。
            _钥匙行始 = 状态.lineStart; // 鑰匙行始。
            _钥匙位置 = 状态.position; // 鑰匙位置。
          }
          if (组合节点(状态, 节点缩进, 块外境, true, 允许紧凑)) { // 組合節點。
            if (在显式钥匙) { // 如果在顯式鑰匙。
              钥匙节点 = 状态.result; // 鑰匙節點。
            } else {
              值节点 = 状态.result; // 值節點。
            }
          }
          if (!在显式钥匙) { // 如果不在顯式鑰匙。
            存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, 值节点, _钥匙行, _钥匙行始, _钥匙位置); // 存儲映射對。
            钥匙标签 = 钥匙节点 = 值节点 = null; // 鑰匙標籤、鑰匙節點、值節點清空。
          }
          跳过间隔(状态, true, -1); // 跳過間隔。
          字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        }
        if ((状态.line === _行 || 状态.lineIndent > 节点缩进) && 字符 !== 0) { // 如果在同一行或縮進過多且不是結束。
          抛错处(状态, "映射条目缩进不对劲"); // 拋出縮進錯誤。
        } else if (状态.lineIndent < 节点缩进) { // 如果行縮進不夠。
          break; // 跳出。
        }
      }
      if (在显式钥匙) { // 如果在顯式鑰匙。
        存储映射对(状态, _结果, 可覆盖钥匙, 钥匙标签, 钥匙节点, null, _钥匙行, _钥匙行始, _钥匙位置); // 存儲映射對。
      }
      if (已侦测) { // 如果已偵測。
        状态.tag = _标签; // 標籤回退。
        状态.anchor = _锚点; // 錨點回退。
        状态.kind = "mapping"; // 種類是映射。
        状态.result = _结果; // 結果。
      }
      return 已侦测; // 回已偵測。
    }

    function 读标签属性(状态) { // 讀標籤屬性。
      var _位置, 是字面 = false, 是命名 = false, 标签把手, 标签名, 字符; // 位置、是字面、是命名、標籤把手、標籤名、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 !== 33) // 如果不是感嘆號。
        return false; // 回假。
      if (状态.tag !== null) { // 如果有標籤。
        抛错处(状态, "标签属性重复了"); // 拋出重複標籤屬性錯誤。
      }
      字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      if (字符 === 60) { // 如果是小於號。
        是字面 = true; // 是字面。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      } else if (字符 === 33) { // 如果是感嘆號。
        是命名 = true; // 是命名。
        标签把手 = "!!"; // 標籤把手。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      } else {
        标签把手 = "!"; // 標籤把手。
      }
      _位置 = 状态.position; // 位置。
      if (是字面) { // 如果是字面。
        do {
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        } while (字符 !== 0 && 字符 !== 62); // 直到結束或大於號。
        if (状态.position < 状态.length) { // 如果位置小於長度。
          标签名 = 状态.input.slice(_位置, 状态.position); // 標籤名。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        } else {
          抛错处(状态, "字面标签里水流就没了，不合规矩"); // 拋出水流結束錯誤。
        }
      } else {
        while (字符 !== 0 && !是空行否(字符)) { // 循環直到結束或空行。
          if (字符 === 33) { // 如果是感嘆號。
            if (!是命名) { // 如果不是命名。
              标签把手 = 状态.input.slice(_位置 - 1, 状态.position + 1); // 標籤把手。
              if (!标签把手.test(标签把手)) { // 如果不符合標籤把手正規表達式。
                抛错处(状态, "命名标签把手不能有这些字符"); // 拋出命名標籤把手錯誤。
              }
              是命名 = true; // 是命名。
              _位置 = 状态.position + 1; // 位置。
            } else {
              抛错处(状态, "标签后缀不能有感叹号"); // 拋出標籤後綴錯誤。
            }
          }
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        }
        标签名 = 状态.input.slice(_位置, 状态.position); // 標籤名。
        if (流指示符.test(标签名)) { // 如果標籤名有流指示符。
          抛错处(状态, "标签后缀不能有流指示符"); // 拋出標籤後綴錯誤。
        }
      }
      if (标签名 && !标签地址.test(标签名)) { // 如果標籤名不空且不符合標籤地址正規表達式。
        抛错处(状态, "标签名不能有这些字符: " + 标签名); // 拋出標籤名錯誤。
      }
      try { // 嘗試解碼。
        标签名 = decodeURIComponent(标签名); // 解碼。
      } catch (错处) { // 捕獲錯誤。
        抛错处(状态, "标签名歪了: " + 标签名); // 拋出標籤名歪了錯誤。
      }
      if (是字面) { // 如果是字面。
        状态.tag = 标签名; // 標籤。
      } else if (_hasOwnProperty.call(状态.tagMap, 标签把手)) { // 如果標籤圖譜裡有把手。
        状态.tag = 状态.tagMap[标签把手] + 标签名; // 標籤。
      } else if (标签把手 === "!") { // 如果是感嘆號。
        状态.tag = "!" + 标签名; // 標籤。
      } else if (标签把手 === "!!") { // 如果是兩個感嘆號。
        状态.tag = "tag:yaml.org,2002:" + 标签名; // 標籤。
      } else {
        抛错处(状态, '没声明的标签把手 "' + 标签把手 + '"'); // 拋出沒聲明標籤把手錯誤。
      }
      return true; // 回真。
    }

    function 读锚点属性(状态) { // 讀錨點屬性。
      var _位置, 字符; // 位置、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 !== 38) // 如果不是與號。
        return false; // 回假。
      if (状态.anchor !== null) { // 如果有錨點。
        抛错处(状态, "锚点属性重复了"); // 拋出重複錨點屬性錯誤。
      }
      字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      _位置 = 状态.position; // 位置。
      while (字符 !== 0 && !是空行否(字符) && !是流符否(字符)) { // 循環直到結束、空行或流符。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      }
      if (状态.position === _位置) { // 如果位置沒變。
        抛错处(状态, "锚点节点名至少得有一个字符"); // 拋出錨點節點名錯誤。
      }
      状态.anchor = 状态.input.slice(_位置, 状态.position); // 錨點。
      return true; // 回真。
    }

    function 读别名(状态) { // 讀別名。
      var _位置, 别名, 字符; // 位置、別名、字符。
      字符 = 状态.input.charCodeAt(状态.position); // 取字符。
      if (字符 !== 42) // 如果不是星號。
        return false; // 回假。
      字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      _位置 = 状态.position; // 位置。
      while (字符 !== 0 && !是空行否(字符) && !是流符否(字符)) { // 循環直到結束、空行或流符。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
      }
      if (状态.position === _位置) { // 如果位置沒變。
        抛错处(状态, "别名节点名至少得有一个字符"); // 拋出別名節點名錯誤。
      }
      别名 = 状态.input.slice(_位置, 状态.position); // 別名。
      if (!_hasOwnProperty.call(状态.anchorMap, 别名)) { // 如果錨點圖譜裡沒有別名。
        抛错处(状态, '没认出来的别名 "' + 别名 + '"'); // 拋出沒認出來別名錯誤。
      }
      状态.result = 状态.anchorMap[别名]; // 結果是錨點圖譜裡的別名。
      跳过间隔(状态, true, -1); // 跳過間隔。
      return true; // 回真。
    }

    function 组合节点(状态, 父缩进, 节点境, 允许寻找, 允许紧凑) { // 組合節點。
      var 允许块样式, 允许块标量, 允许块集合, 缩进状态 = 1, // 允許塊樣式、允許塊標量、允許塊集合、縮進狀態。
        在新行 = false, // 在新行。
        有内容 = false, // 有內容。
        类型索引, 类型数量, 类型列表, 类型, 流缩进, 块缩进; // 類型索引、類型數量、類型列表、類型、流縮進、塊縮進。
      if (状态.listener !== null) { // 如果有監聽器。
        状态.listener("open", 状态); // 調用監聽器。
      }
      状态.tag = null; // 標籤清空。
      状态.anchor = null; // 錨點清空。
      状态.kind = null; // 種類清空。
      状态.result = null; // 結果清空。
      允许块样式 = 允许块标量 = 允许块集合 = 块外境 === 节点境 || 块内境 === 节点境; // 允許塊樣式、塊標量、塊集合。
      if (允许寻找) { // 如果允許尋找。
        if (跳过间隔(状态, true, -1)) { // 跳過間隔。
          在新行 = true; // 在新行。
          if (状态.lineIndent > 父缩进) { // 如果行縮進大於父縮進。
            缩进状态 = 1; // 縮進狀態是一。
          } else if (状态.lineIndent === 父缩进) { // 如果行縮進等於父縮進。
            缩进状态 = 0; // 縮進狀態是零。
          } else if (状态.lineIndent < 父缩进) { // 如果行縮進小於父縮進。
            缩进状态 = -1; // 縮進狀態是負一。
          }
        }
      }
      if (缩进状态 === 1) { // 如果縮進狀態是一。
        while (读标签属性(状态) || 读锚点属性(状态)) { // 讀標籤屬性或錨點屬性。
          if (跳过间隔(状态, true, -1)) { // 跳過間隔。
            在新行 = true; // 在新行。
            允许块集合 = 允许块样式; // 允許塊集合。
            if (状态.lineIndent > 父缩进) { // 如果行縮進大於父縮進。
              缩进状态 = 1; // 縮進狀態是一。
            } else if (状态.lineIndent === 父缩进) { // 如果行縮進等於父縮進。
              缩进状态 = 0; // 縮進狀態是零。
            } else if (状态.lineIndent < 父缩进) { // 如果行縮進小於父縮進。
              缩进状态 = -1; // 縮進狀態是負一。
            }
          } else {
            允许块集合 = false; // 不允許塊集合。
          }
        }
      }
      if (允许块集合) { // 如果允許塊集合。
        允许块集合 = 在新行 || 允许紧凑; // 允許塊集合。
      }
      if (缩进状态 === 1 || 块外境 === 节点境) { // 如果縮進狀態是一或塊外境。
        if (流内境 === 节点境 || 流外境 === 节点境) { // 如果是流內境或流外境。
          流缩进 = 父缩进; // 流縮進。
        } else {
          流缩进 = 父缩进 + 1; // 流縮進。
        }
        块缩进 = 状态.position - 状态.lineStart; // 塊縮進。
        if (缩进状态 === 1) { // 如果縮進狀態是一。
          if (允许块集合 && (读块序列(状态, 块缩进) || 读块映射(状态, 块缩进, 流缩进)) || 读流集合(状态, 流缩进)) { // 讀塊序列、塊映射或流集合。
            有内容 = true; // 有內容。
          } else {
            if (允许块标量 && 读块标量(状态, 流缩进) || 读单引号标量(状态, 流缩进) || 读双引号标量(状态, 流缩进)) { // 讀塊標量、單引號標量或雙引號標量。
              有内容 = true; // 有內容。
            } else if (读别名(状态)) { // 讀別名。
              有内容 = true; // 有內容。
              if (状态.tag !== null || 状态.anchor !== null) { // 如果有標籤或錨點。
                抛错处(状态, "别名节点不该有任何属性"); // 拋出別名節點錯誤。
              }
            } else if (读普通标量(状态, 流缩进, 流内境 === 节点境)) { // 讀普通標量。
              有内容 = true; // 有內容。
              if (状态.tag === null) { // 如果沒有標籤。
                状态.tag = "?"; // 標籤是問號。
              }
            }
            if (状态.锚点 !== null) { // 如果有錨點。
              状态.anchorMap[状态.锚点] = 状态.result; // 記錄錨點和結果。
            }
          }
        } else if (缩进状态 === 0) { // 如果縮進狀態是零。
          有内容 = 允许块集合 && 读块序列(状态, 块缩进); // 有內容。
        }
      }
      if (状态.tag === null) { // 如果沒有標籤。
        if (状态.锚点 !== null) { // 如果有錨點。
          状态.anchorMap[状态.锚点] = 状态.result; // 記錄錨點和結果。
        }
      } else if (状态.tag === "?") { // 如果標籤是問號。
        if (状态.result !== null && 状态.kind !== "scalar") { // 如果結果不空且種類不是標量。
          抛错处(状态, '!<?>标签的节点种类不中用；它该是“标量”，不是“' + 状态.kind + '”'); // 拋出節點種類錯誤。
        }
        for (类型索引 = 0, 类型数量 = 状态.implicitTypes.length; 类型索引 < 类型数量; 类型索引 += 1) { // 循環隱式類型。
          类型 = 状态.implicitTypes[类型索引]; // 類型。
          if (类型.resolve(状态.result)) { // 如果能解析。
            状态.result = 类型.construct(状态.result); // 構造結果。
            状态.tag = 类型.tag; // 標籤。
            if (状态.锚点 !== null) { // 如果有錨點。
              状态.anchorMap[状态.锚点] = 状态.result; // 記錄錨點和結果。
            }
            break; // 跳出。
          }
        }
      } else if (状态.tag !== "!") { // 如果標籤不是感嘆號。
        if (_hasOwnProperty.call(状态.typeMap[状态.kind || "fallback"], 状态.tag)) { // 如果類型圖譜裡有標籤。
          类型 = 状态.typeMap[状态.kind || "fallback"][状态.tag]; // 類型。
        } else {
          类型 = null; // 類型是空。
          类型列表 = 状态.typeMap.multi[状态.kind || "fallback"]; // 類型列表。
          for (类型索引 = 0, 类型数量 = 类型列表.length; 类型索引 < 类型数量; 类型索引 += 1) { // 循環類型列表。
            if (状态.tag.slice(0, 类型列表[类型索引].tag.length) === 类型列表[类型索引].tag) { // 如果標籤匹配。
              类型 = 类型列表[类型索引]; // 類型。
              break; // 跳出。
            }
          }
        }
        if (!类型) { // 如果沒有類型。
          抛错处(状态, "不知名的标签 !<" + 状态.tag + ">"); // 拋出不知名標籤錯誤。
        }
        if (状态.result !== null && 类型.kind !== 状态.kind) { // 如果結果不空且種類不匹配。
          抛错处(状态, "不中用的节点种类 !<" + 状态.tag + '>标签；它该是“' + 类型.kind + '”，不是“' + 状态.kind + '”'); // 拋出節點種類錯誤。
        }
        if (!类型.resolve(状态.result, 状态.tag)) { // 如果不能解析。
          抛错处(状态, "没法解析带 !<" + 状态.tag + "> 显式标签的节点"); // 拋出解析錯誤。
        } else {
          状态.result = 类型.construct(状态.result, 状态.tag); // 構造結果。
          if (状态.锚点 !== null) { // 如果有錨點。
            状态.anchorMap[状态.锚点] = 状态.result; // 記錄錨點和結果。
          }
        }
      }
      if (状态.listener !== null) { // 如果有監聽器。
        状态.listener("close", 状态); // 調用監聽器。
      }
      return 状态.tag !== null || 状态.anchor !== null || 有内容; // 回標籤、錨點或有內容。
    }

    function 读文档(状态) { // 讀文檔。
      var 文档始 = 状态.position, // 文檔始。
        _位置, 指令名, 指令参数, 有指令 = false, 字符; // 位置、指令名、指令參數、有指令、字符。
      状态.version = null; // 版本清空。
      状态.checkLineBreaks = 状态.legacy; // 檢查換行。
      状态.tagMap = /* @__PURE__ */ Object.create(null); // 標籤圖譜清空。
      状态.anchorMap = /* @__PURE__ */ Object.create(null); // 錨點圖譜清空。
      while ((字符 = 状态.input.charCodeAt(状态.position)) !== 0) { // 循環直到結束。
        跳过间隔(状态, true, -1); // 跳過間隔。
        字符 = 状态.input.charCodeAt(状态.position); // 取字符。
        if (状态.lineIndent > 0 || 字符 !== 37) { // 如果行縮進大於零或不是百分號。
          break; // 跳出。
        }
        有指令 = true; // 有指令。
        字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        _位置 = 状态.position; // 位置。
        while (字符 !== 0 && !是空行否(字符)) { // 循環直到結束或空行。
          字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
        }
        指令名 = 状态.input.slice(_位置, 状态.position); // 指令名。
        指令参数 = []; // 指令參數。
        if (指令名.length < 1) { // 如果指令名長度小於一。
          抛错处(状态, "指令名至少得有一个字符"); // 拋出指令名錯誤。
        }
        while (字符 !== 0) { // 循環直到結束。
          while (是空白否(字符)) { // 跳過空白。
            字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          }
          if (字符 === 35) { // 如果是井號。
            do {
              字符 = 状态.input.charCodeAt(++状态.position); // 跳過註釋。
            } while (字符 !== 0 && !是行尾否(字符)); // 直到結束或行尾。
            break; // 跳出。
          }
          if 是行尾否(字符)) // 如果是行尾。
            break; // 跳出。
          _位置 = 状态.position; // 位置。
          while (字符 !== 0 && !是空行否(字符)) { // 循環直到結束或空行。
            字符 = 状态.input.charCodeAt(++状态.position); // 取下一個字符。
          }
          指令参数.push(状态.input.slice(_位置, 状态.position)); // 推入指令參數。
        }
        if (字符 !== 0) // 如果不是結束。
          读换行(状态); // 讀換行。
        if (_hasOwnProperty.call(指令处理者, 指令名)) { // 如果指令處理者裡有指令名。
          指令处理者[指令名](状态, 指令名, 指令参数); // 調用指令處理者。
        } else {
          抛警示(状态, '未知文档指令 "' + 指令名 + '"'); // 拋出未知指令警告。
        }
      }
      跳过间隔(状态, true, -1); // 跳過間隔。
      if (状态.lineIndent === 0 && 状态.input.charCodeAt(状态.position) === 45 && 状态.input.charCodeAt(状态.position + 1) === 45 && 状态.input.charCodeAt(状态.position + 2) === 45) { // 如果是三個連字符。
        状态.position += 3; // 位置加三。
        跳过间隔(状态, true, -1); // 跳過間隔。
      } else if (有指令) { // 如果有指令。
        抛错处(状态, "指令结束标记不见了"); // 拋出指令結束標記錯誤。
      }
      组合节点(状态, 状态.lineIndent - 1, 块外境, false, true); // 組合節點。
      跳过间隔(状态, true, -1); // 跳過間隔。
      if (状态.checkLineBreaks && 非西文换行.test(状态.input.slice(文档始, 状态.position))) { // 如果檢查換行且有非西文換行。
        抛警示(状态, "非西文换行被当成内容了"); // 拋出非西文換行警告。
      }
      状态.documents.push(状态.result); // 推入文檔。
      if (状态.position === 状态.lineStart && 测文档分隔(状态)) { // 如果是文檔分隔符。
        if (状态.input.charCodeAt(状态.position) === 46) { // 如果是點。
          状态.position += 3; // 位置加三。
          跳过间隔(状态, true, -1); // 跳過間隔。
        }
        return; // 回。
      }
      if (状态.position < 状态.length - 1) { // 如果位置小於長度減一。
        抛错处(状态, "水流尽头或文档分隔符不见了"); // 拋出水流盡頭錯誤。
      } else {
        return; // 回。
      }
    }

    function 装载文档(输入, 选项) { // 裝載文檔。
      输入 = String(输入); // 轉成字串。
      选项 = 选项 || {}; // 選項。
      if (输入.length !== 0) { // 如果輸入不空。
        if (输入.charCodeAt(输入.length - 1) !== 10 && 输入.charCodeAt(输入.length - 1) !== 13) { // 如果末尾沒有換行。
          输入 += "\n"; // 加上換行。
        }
        if (输入.charCodeAt(0) === 65279) { // 如果有BOM。
          输入 = 输入.slice(1); // 去掉BOM。
        }
      }
      var 状态 = new 状态(输入, 选项); // 新狀態。
      var 空字节位置 = 输入.indexOf("\0"); // 空字節位置。
      if (空字节位置 !== -1) { // 如果有空字節。
        状态.position = 空字节位置; // 位置。
        抛错处(状态, "输入里不能有空字节"); // 拋出空字節錯誤。
      }
      状态.input += "\0"; // 輸入加上空字節。
      while (状态.input.charCodeAt(状态.position) === 32) { // 跳過開頭空格。
        状态.lineIndent += 1; // 行縮進加一。
        状态.position += 1; // 位置加一。
      }
      while (状态.position < 状态.length - 1) { // 循環直到結束。
        读文档(状态); // 讀文檔。
      }
      return 状态.documents; // 回文檔列表。
    }

    function 全装载(输入, 迭代器, 选项) { // 全裝載。
      if (迭代器 !== null && typeof 迭代器 === "object" && typeof 选项 === "undefined") { // 如果迭代器是物件且選項是空。
        选项 = 迭代器; // 選項。
        迭代器 = null; // 迭代器清空。
      }
      var 文档列表 = 装载文档(输入, 选项); // 裝載文檔。
      if (typeof 迭代器 !== "function") { // 如果迭代器不是函數。
        return 文档列表; // 回文檔列表。
      }
      for (var 索引 = 0, 长度 = 文档列表.length; 索引 < 长度; 索引 += 1) { // 循環。
        迭代器(文档列表[索引]); // 調用迭代器。
      }
    }

    function 装载(输入, 选项) { // 裝載。
      var 文档列表 = 装载文档(输入, 选项); // 裝載文檔。
      if (文档列表.length === 0) { // 如果文檔列表是空。
        return void 0; // 回空。
      } else if (文档列表.length === 1) { // 如果文檔列表只有一個。
        return 文档列表[0]; // 回第一個。
      }
      throw new 歪门邪道之祸("水流里只该有一个文档，结果多了"); // 拋出文檔數量錯誤。
    }
    模块.exports.全装载 = 全装载; // 全裝載，出口。
    模块.exports.装载 = 装载; // 裝載，出口。
  }
});

// node_modules/js-yaml/lib/dumper.js
var 寻倾倒 = 寻常货({ // 尋找傾倒，把東西都倒出去。
  "node_modules/js-yaml/lib/dumper.js"(出口, 模块) { // 傾倒的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 寻常 = 寻常货栈(); // 尋常貨棧裡找尋常。
    var 歪门邪道之祸 = 寻异端(); // 歪門邪道之禍。
    var 默认纲要 = 寻默认(); // 默認綱要。
    var _toString = Object.prototype.toString; // 轉字串。
    var _hasOwnProperty = Object.prototype.hasOwnProperty; // 自己的屬性。
    var 字节序标记 = 65279; // 字节序标记。
    var 制表符 = 9; // 制表符。
    var 换行符 = 10; // 换行符。
    var 回车符 = 13; // 回车符。
    var 空格符 = 32; // 空格符。
    var 感叹符 = 33; // 感叹符。
    var 双引号 = 34; // 双引号。
    var 井号 = 35; // 井号。
    var 百分符 = 37; // 百分符。
    var 与符 = 38; // 与符。
    var 单引号 = 39; // 单引号。
    var 星号 = 42; // 星号。
    var 逗号 = 44; // 逗号。
    var 减号 = 45; // 减号。
    var 冒号 = 58; // 冒号。
    var 等号 = 61; // 等号。
    var 大于号 = 62; // 大于号。
    var 问号 = 63; // 问号。
    var 艾特符 = 64; // 艾特符。
    var 左方括号 = 91; // 左方括号。
    var 右方括号 = 93; // 右方括号。
    var 反引号 = 96; // 反引号。
    var 左花括号 = 123; // 左花括号。
    var 竖线符 = 124; // 竖线符。
    var 右花括号 = 125; // 右花括号。
    var 转义序列 = {}; // 转义序列。
    转义序列[0] = "\\0"; // 空字符。
    转义序列[7] = "\\a"; // 响铃。
    转义序列[8] = "\\b"; // 退格。
    转义序列[9] = "\\t"; // 制表符。
    转义序列[10] = "\\n"; // 换行。
    转义序列[11] = "\\v"; // 垂直制表符。
    转义序列[12] = "\\f"; // 换页。
    转义序列[13] = "\\r"; // 回车。
    转义序列[27] = "\\e"; // ESC。
    转义序列[34] = '\\"'; // 双引号。
    转义序列[92] = "\\\\"; // 反斜杠。
    转义序列[133] = "\\N"; // 下一行。
    转义序列[160] = "\\_"; // 不间断空格。
    转义序列[8232] = "\\L"; // 行分隔符。
    转义序列[8233] = "\\P"; // 段落分隔符。
    var 废弃布尔语法 = [ // 废弃布尔语法。
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
    var 废弃六十进制语法 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/; // 废弃六十进制语法。
    function 汇编样式图(纲要, 图谱) { // 汇编样式图。
      var 结果, 钥匙, 索引, 长度, 标签, 样式, 类型; // 结果、钥匙、索引、长度、标签、样式、类型。
      if (图谱 === null) // 如果图谱是空。
        return {}; // 回空物件。
      结果 = {}; // 结果。
      钥匙 = Object.keys(图谱); // 钥匙。
      for (索引 = 0, 长度 = 钥匙.length; 索引 < 长度; 索引 += 1) { // 循环。
        标签 = 钥匙[索引]; // 标签。
        样式 = String(图谱[标签]); // 样式。
        if (标签.slice(0, 2) === "!!") { // 如果是两个感叹号。
          标签 = "tag:yaml.org,2002:" + 标签.slice(2); // 标签。
        }
        类型 = 纲要.compiledTypeMap["fallback"][标签]; // 类型。
        if (类型 && _hasOwnProperty.call(类型.styleAliases, 样式)) { // 如果类型有样式别名。
          样式 = 类型.styleAliases[样式]; // 样式。
        }
        结果[标签] = 样式; // 结果。
      }
      return 结果; // 回结果。
    }

    function 编码十六进制(字符码) { // 编码十六进制。
      var 字串, 把手, 长度; // 字串、把手、长度。
      字串 = 字符码.toString(16).toUpperCase(); // 转成大写十六进制字串。
      if (字符码 <= 255) { // 如果字符码小於等於255。
        把手 = "x"; // 把手是x。
        长度 = 2; // 长度是2。
      } else if (字符码 <= 65535) { // 如果字符码小於等於65535。
        把手 = "u"; // 把手是u。
        长度 = 4; // 长度是4。
      } else if (字符码 <= 4294967295) { // 如果字符码小於等於4294967295。
        把手 = "U"; // 把手是U。
        长度 = 8; // 长度是8。
      } else {
        throw new 歪门邪道之祸("字串里的码点不能超过0xFFFFFFFF"); // 抛出码点错误。
      }
      return "\\" + 把手 + 寻常.反复("0", 长度 - 字串.length) + 字串; // 回转义字串。
    }

    var 单引号类型 = 1; // 单引号类型。
    var 双引号类型 = 2; // 双引号类型。
    function 状态(选项) { // 状态。
      this.schema = 选项["schema"] || 默认纲要; // 纲要。
      this.indent = Math.max(1, 选项["indent"] || 2); // 缩进。
      this.noArrayIndent = 选项["noArrayIndent"] || false; // 不数组缩进。
      this.skipInvalid = 选项["skipInvalid"] || false; // 跳过无效。
      this.flowLevel = 寻常.空空如也(选项["flowLevel"]) ? -1 : 选项["flowLevel"]; // 流级别。
      this.styleMap = 汇编样式图(this.schema, 选项["styles"] || null); // 样式图。
      this.sortKeys = 选项["sortKeys"] || false; // 排序钥匙。
      this.lineWidth = 选项["lineWidth"] || 80; // 行宽。
      this.noRefs = 选项["noRefs"] || false; // 不引用。
      this.noCompatMode = 选项["noCompatMode"] || false; // 不兼容模式。
      this.condenseFlow = 选项["condenseFlow"] || false; // 凝缩流。
      this.quotingType = 选项["quotingType"] === '"' ? 双引号类型 : 单引号类型; // 引号类型。
      this.forceQuotes = 选项["forceQuotes"] || false; // 强制引号。
      this.replacer = typeof 选项["replacer"] === "function" ? 选项["replacer"] : null; // 替换器。
      this.implicitTypes = this.schema.compiledImplicit; // 隐式类型。
      this.explicitTypes = this.schema.compiledExplicit; // 显式类型。
      this.tag = null; // 标签。
      this.result = ""; // 结果。
      this.duplicates = []; // 重复。
      this.usedDuplicates = null; // 已用重复。
    }

    function 缩进字串(字串, 空格数) { // 缩进字串。
      var 缩进 = 寻常.反复(" ", 空格数), // 缩进。
        位置 = 0, // 位置。
        下个 = -1, // 下个。
        结果 = "", // 结果。
        行, 长度 = 字串.length; // 行、长度。
      while (位置 < 长度) { // 循环。
        下个 = 字串.indexOf("\n", 位置); // 找到下个换行。
        if (下个 === -1) { // 如果没有。
          行 = 字串.slice(位置); // 行。
          位置 = 长度; // 位置。
        } else {
          行 = 字串.slice(位置, 下个 + 1); // 行。
          位置 = 下个 + 1; // 位置。
        }
        if (行.length && 行 !== "\n") // 如果行不空且不是换行。
          结果 += 缩进; // 加上缩进。
        结果 += 行; // 加上行。
      }
      return 结果; // 回结果。
    }

    function 生成下行(状态, 级别) { // 生成下行。
      return "\n" + 寻常.反复(" ", 状态.indent * 级别); // 回换行和缩进。
    }

    function 测试隐式解析(状态, 字串) { // 测试隐式解析。
      var 索引, 长度, 类型; // 索引、长度、类型。
      for (索引 = 0, 长度 = 状态.implicitTypes.length; 索引 < 长度; 索引 += 1) { // 循环。
        类型 = 状态.implicitTypes[索引]; // 类型。
        if (类型.resolve(字串)) { // 如果能解析。
          return true; // 回真。
        }
      }
      return false; // 回假。
    }

    function 是空白否(字符码) { // 看看是不是空白。
      return 字符码 === 空格符 || 字符码 === 制表符; // 判斷是不是空格或製表符。
    }

    function 可打印否(字符码) { // 看看是不是可打印。
      return 32 <= 字符码 && 字符码 <= 126 || 161 <= 字符码 && 字符码 <= 55295 && 字符码 !== 8232 && 字符码 !== 8233 || 57344 <= 字符码 && 字符码 <= 65533 && 字符码 !== 字节序标记 || 65536 <= 字符码 && 字符码 <= 1114111; // 判斷是不是可打印字符。
    }

    function 是非空或空白否(字符码) { // 看看是不是非空或空白。
      return 可打印否(字符码) && 字符码 !== 字节序标记 && 字符码 !== 回车符 && 字符码 !== 换行符; // 判斷是不是可打印且不是BOM、回車或換行。
    }

    function 是纯净安全否(字符码, 之前字符码, 在块中) { // 看看是不是纯净安全。
      var 字符码是非空或空白 = 是非空或空白否(字符码); // 字符碼是非空或空白。
      var 字符码是非空 = 字符码是非空或空白 && !是空白否(字符码); // 字符碼是非空。
      return (
        // ns-plain-safe
        (在块中 ? (
          // c = flow-in
          字符码是非空或空白
        ) : 字符码是非空或空白 && 字符码 !== 逗号 && 字符码 !== 左方括号 && 字符码 !== 右方括号 && 字符码 !== 左花括号 && 字符码 !== 右花括号) && 字符码 !== 井号 && !(之前字符码 === 冒号 && !字符码是非空) || 是非空或空白否(之前字符码) && !是空白否(之前字符码) && 字符码 === 井号 || 之前字符码 === 冒号 && 字符码是非空
      ); // 判斷是不是純淨安全。
    }

    function 是纯净安全首(字符码) { // 看看是不是纯净安全首。
      return 可打印否(字符码) && 字符码 !== 字节序标记 && !是空白否(字符码) && 字符码 !== 减号 && 字符码 !== 问号 && 字符码 !== 冒号 && 字符码 !== 逗号 && 字符码 !== 左方括号 && 字符码 !== 右方括号 && 字符码 !== 左花括号 && 字符码 !== 右花括号 && 字符码 !== 井号 && 字符码 !== 与符 && 字符码 !== 星号 && 字符码 !== 感叹符 && 字符码 !== 竖线符 && 字符码 !== 等号 && 字符码 !== 大于号 && 字符码 !== 单引号 && 字符码 !== 双引号 && 字符码 !== 百分符 && 字符码 !== 艾特符 && 字符码 !== 反引号; // 判斷是不是純淨安全首。
    }

    function 是纯净安全尾(字符码) { // 看看是不是纯净安全尾。
      return !是空白否(字符码) && 字符码 !== 冒号; // 判斷是不是純淨安全尾。
    }

    function 取码点(字串, 位置) { // 取码点。
      var 第一个 = 字串.charCodeAt(位置), // 第一个。
        第二个; // 第二个。
      if (第一个 >= 55296 && 第一个 <= 56319 && 位置 + 1 < 字串.length) { // 如果是高位代理。
        第二个 = 字串.charCodeAt(位置 + 1); // 第二个。
        if (第二个 >= 56320 && 第二个 <= 57343) { // 如果是低位代理。
          return (第一个 - 55296) * 1024 + 第二个 - 56320 + 65536; // 回码点。
        }
      }
      return 第一个; // 回第一个。
    }

    function 需缩进指示否(字串) { // 看看是不是需要缩进指示。
      var 开头空格正则 = /^\n* /; // 开头空格正则。
      return 开头空格正则.test(字串); // 判斷是不是需要縮進指示。
    }

    var 普通样式 = 1; // 普通样式。
    var 单引号样式 = 2; // 单引号样式。
    var 字面样式 = 3; // 字面样式。
    var 折叠样式 = 4; // 折叠样式。
    var 双引号样式 = 5; // 双引号样式。
    function 选择标量样式(字串, 单行限定, 每级缩进, 行宽, 测试歧义类型, 引号类型, 强制引号, 在块中) { // 选择标量样式。
      var 索引; // 索引。
      var 字符 = 0; // 字符。
      var 之前字符 = null; // 之前字符。
      var 有换行 = false; // 有换行。
      var 有可折叠行 = false; // 有可折叠行。
      var 应跟踪宽度 = 行宽 !== -1; // 应跟踪宽度。
      var 之前换行 = -1; // 之前换行。
      var 纯净 = 是纯净安全首(取码点(字串, 0)) && 是纯净安全尾(取码点(字串, 字串.length - 1)); // 纯净。
      if (单行限定 || 强制引号) { // 如果是单行限定或强制引号。
        for (索引 = 0; 索引 < 字串.length; 字符 >= 65536 ? 索引 += 2 : 索引++) { // 循环。
          字符 = 取码点(字串, 索引); // 取码点。
          if (!可打印否(字符)) { // 如果不可打印。
            return 双引号样式; // 回双引号样式。
          }
          纯净 = 纯净 && 是纯净安全否(字符, 之前字符, 在块中); // 纯净。
          之前字符 = 字符; // 之前字符。
        }
      } else {
        for (索引 = 0; 索引 < 字串.length; 字符 >= 65536 ? 索引 += 2 : 索引++) { // 循环。
          字符 = 取码点(字串, 索引); // 取码点。
          if (字符 === 换行符) { // 如果是换行符。
            有换行 = true; // 有换行。
            if (应跟踪宽度) { // 如果应跟踪宽度。
              有可折叠行 = 有可折叠行 || // 有可折叠行。
                索引 - 之前换行 - 1 > 行宽 && 字串[之前换行 + 1] !== " "; // 超过行宽且不是空格。
              之前换行 = 索引; // 之前换行。
            }
          } else if (!可打印否(字符)) { // 如果不可打印。
            return 双引号样式; // 回双引号样式。
          }
          纯净 = 纯净 && 是纯净安全否(字符, 之前字符, 在块中); // 纯净。
          之前字符 = 字符; // 之前字符。
        }
        有可折叠行 = 有可折叠行 || 应跟踪宽度 && (索引 - 之前换行 - 1 > 行宽 && 字串[之前换行 + 1] !== " "); // 有可折叠行。
      }
      if (!有换行 && !有可折叠行) { // 如果没有换行也没有可折叠行。
        if (纯净 && !强制引号 && !测试歧义类型(字串)) { // 如果纯净且不强制引号且不歧义。
          return 普通样式; // 回普通样式。
        }
        return 引号类型 === 双引号类型 ? 双引号样式 : 单引号样式; // 回引号类型。
      }
      if (每级缩进 > 9 && 需缩进指示否(字串)) { // 如果每级缩进大于9且需要缩进指示。
        return 双引号样式; // 回双引号样式。
      }
      if (!强制引号) { // 如果不强制引号。
        return 有可折叠行 ? 折叠样式 : 字面样式; // 回折叠样式或字面样式。
      }
      return 引号类型 === 双引号类型 ? 双引号样式 : 单引号样式; // 回引号类型。
    }

    function 写标量(状态, 字串, 级别, 是钥匙, 在块中) { // 写标量。
      状态.dump = function () { // 倾倒。
        if (字串.length === 0) { // 如果字串是空。
          return 状态.quotingType === 双引号类型 ? '""' : "''"; // 回空引号。
        }
        if (!状态.noCompatMode) { // 如果不兼容模式。
          if (废弃布尔语法.indexOf(字串) !== -1 || 废弃六十进制语法.test(字串)) { // 如果是废弃布尔语法或废弃六十进制语法。
            return 状态.quotingType === 双引号类型 ? '"' + 字串 + '"' : "'" + 字串 + "'"; // 回引号字串。
          }
        }
        var 缩进 = 状态.indent * Math.max(1, 级别); // 缩进。
        var 行宽 = 状态.lineWidth === -1 ? -1 : Math.max(Math.min(状态.lineWidth, 40), 状态.lineWidth - 缩进); // 行宽。
        var 单行限定 = 是钥匙 || 状态.flowLevel > -1 && 级别 >= 状态.flowLevel; // 单行限定。
        function 测试歧义(字串2) { // 测试歧义。
          return 测试隐式解析(状态, 字串2); // 回测试隐式解析。
        }
        switch (选择标量样式( // 选择标量样式。
          字串, // 字串。
          单行限定, // 单行限定。
          状态.indent, // 缩进。
          行宽, // 行宽。
          测试歧义, // 测试歧义。
          状态.quotingType, // 引号类型。
          状态.forceQuotes && !是钥匙, // 强制引号。
          在块中 // 在块中。
        )) {
          case 普通样式: // 普通样式。
            return 字串; // 回字串。
          case 单引号样式: // 单引号样式。
            return "'" + 字串.replace(/'/g, "''") + "'"; // 回单引号字串。
          case 字面样式: // 字面样式。
            return "|" + 块头(字串, 状态.indent) + 丢弃末尾换行(缩进字串(字串, 缩进)); // 回字面样式字串。
          case 折叠样式: // 折叠样式。
            return ">" + 块头(字串, 状态.indent) + 丢弃末尾换行(缩进字串(折叠字串(字串, 行宽), 缩进)); // 回折叠样式字串。
          case 双引号样式: // 双引号样式。
            return '"' + 转义字串(字串, 行宽) + '"'; // 回双引号字串。
          default:
            throw new 歪门邪道之祸("不可能的错处：标量样式不对劲"); // 抛出不可能的错处。
        }
      }();
    }

    function 块头(字串, 每级缩进) { // 块头。
      var 缩进指示符 = 需缩进指示否(字串) ? String(每级缩进) : ""; // 缩进指示符。
      var 剪切 = 字串[字串.length - 1] === "\n"; // 剪切。
      var 保留 = 剪切 && (字串[字串.length - 2] === "\n" || 字串 === "\n"); // 保留。
      var 啃食 = 保留 ? "+" : 剪切 ? "" : "-"; // 啃食。
      return 缩进指示符 + 啃食 + "\n"; // 回缩进指示符、啃食和换行。
    }

    function 丢弃末尾换行(字串) { // 丢弃末尾换行。
      return 字串[字串.length - 1] === "\n" ? 字串.slice(0, -1) : 字串; // 回去掉末尾换行的字串。
    }

    function 折叠字串(字串, 宽度) { // 折叠字串。
      var 行正则 = /(\n+)([^\n]*)/g; // 行正则。
      var 结果 = function () { // 结果。
        var 下个换行 = 字串.indexOf("\n"); // 下个换行。
        下个换行 = 下个换行 !== -1 ? 下个换行 : 字串.length; // 下个换行。
        行正则.lastIndex = 下个换行; // 行正则的lastIndex。
        return 折叠行(字串.slice(0, 下个换行), 宽度); // 回折叠行。
      }();
      var 之前更多缩进 = 字串[0] === "\n" || 字串[0] === " "; // 之前更多缩进。
      var 更多缩进; // 更多缩进。
      var 匹配; // 匹配。
      while (匹配 = 行正则.exec(字串)) { // 循环。
        var 前缀 = 匹配[1], // 前缀。
          行 = 匹配[2]; // 行。
        更多缩进 = 行[0] === " "; // 更多缩进。
        结果 += 前缀 + (!之前更多缩进 && !更多缩进 && 行 !== "" ? "\n" : "") + 折叠行(行, 宽度); // 加上前缀、换行和折叠行。
        之前更多缩进 = 更多缩进; // 之前更多缩进。
      }
      return 结果; // 回结果。
    }

    function 折叠行(行, 宽度) { // 折叠行。
      if (行 === "" || 行[0] === " ") // 如果行是空或开头是空格。
        return 行; // 回行。
      var 分隔正则 = / [^ ]/g; // 分隔正则。
      var 匹配; // 匹配。
      var 始 = 0, // 始。
        末, 当前 = 0, // 末、当前。
        下个 = 0; // 下个。
      var 结果 = ""; // 结果。
      while (匹配 = 分隔正则.exec(行)) { // 循环。
        下个 = 匹配.index; // 下个。
        if (下个 - 始 > 宽度) { // 如果超过宽度。
          末 = 当前 > 始 ? 当前 : 下个; // 末。
          结果 += "\n" + 行.slice(始, 末); // 加上换行和行。
          始 = 末 + 1; // 始。
        }
        当前 = 下个; // 当前。
      }
      结果 += "\n"; // 加上换行。
      if (行.length - 始 > 宽度 && 当前 > 始) { // 如果行长超过宽度且当前大于始。
        结果 += 行.slice(始, 当前) + "\n" + 行.slice(当前 + 1); // 加上行和换行。
      } else {
        结果 += 行.slice(始); // 加上行。
      }
      return 结果.slice(1); // 回结果。
    }

    function 转义字串(字串) { // 转义字串。
      var 结果 = ""; // 结果。
      var 字符 = 0; // 字符。
      var 转义序列符; // 转义序列符。
      for (var 索引 = 0; 索引 < 字串.length; 字符 >= 65536 ? 索引 += 2 : 索引++) { // 循环。
        字符 = 取码点(字串, 索引); // 取码点。
        转义序列符 = 转义序列[字符]; // 转义序列符。
        if (!转义序列符 && 可打印否(字符)) { // 如果没有转义序列符且可打印。
          结果 += 字串[索引]; // 加上字符。
          if (字符 >= 65536) // 如果字符码大于等于65536。
            结果 += 字串[索引 + 1]; // 加上字符。
        } else {
          结果 += 转义序列符 || 编码十六进制(字符); // 加上转义序列符或编码十六进制。
        }
      }
      return 结果; // 回结果。
    }

    function 写流序列(状态, 级别, 物件) { // 写流序列。
      var _结果 = "", // 结果。
        _标签 = 状态.tag, // 标签。
        索引, 长度, 值; // 索引、长度、值。
      for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循环。
        值 = 物件[索引]; // 值。
        if (状态.replacer) { // 如果有替换器。
          值 = 状态.replacer.call(物件, String(索引), 值); // 调用替换器。
        }
        if (写节点(状态, 级别, 值, false, false) || typeof 值 === "undefined" && 写节点(状态, 级别, null, false, false)) { // 写节点。
          if (_结果 !== "") // 如果结果不空。
            _结果 += "," + (!状态.condenseFlow ? " " : ""); // 加上逗号和空格。
          _结果 += 状态.dump; // 加上倾倒。
        }
      }
      状态.tag = _标签; // 标签回退。
      状态.dump = "[" + _结果 + "]"; // 倾倒。
    }

    function 写块序列(状态, 级别, 物件, 紧凑) { // 写块序列。
      var _结果 = "", // 结果。
        _标签 = 状态.tag, // 标签。
        索引, 长度, 值; // 索引、长度、值。
      for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循环。
        值 = 物件[索引]; // 值。
        if (状态.replacer) { // 如果有替换器。
          值 = 状态.replacer.call(物件, String(索引), 值); // 调用替换器。
        }
        if (写节点(状态, 级别 + 1, 值, true, true, false, true) || typeof 值 === "undefined" && 写节点(状态, 级别 + 1, null, true, true, false, true)) { // 写节点。
          if (!紧凑 || _结果 !== "") { // 如果不紧凑或结果不空。
            _结果 += 生成下行(状态, 级别); // 加上下行。
          }
          if (状态.dump && 换行符 === 状态.dump.charCodeAt(0)) { // 如果倾倒有内容且开头是换行符。
            _结果 += "-"; // 加上减号。
          } else {
            _结果 += "- "; // 加上减号和空格。
          }
          _结果 += 状态.dump; // 加上倾倒。
        }
      }
      状态.tag = _标签; // 标签回退。
      状态.dump = _结果 || "[]"; // 倾倒。
    }

    function 写流映射(状态, 级别, 物件) { // 写流映射。
      var _结果 = "", // 结果。
        _标签 = 状态.tag, // 标签。
        物件钥匙列表 = Object.keys(物件), // 物件钥匙列表。
        索引, 长度, 物件钥匙, 物件值, 对子缓冲区; // 索引、长度、物件钥匙、物件值、对子缓冲区。
      for (索引 = 0, 长度 = 物件钥匙列表.length; 索引 < 长度; 索引 += 1) { // 循环。
        对子缓冲区 = ""; // 对子缓冲区。
        if (_结果 !== "") // 如果结果不空。
          对子缓冲区 += ", " + (!状态.condenseFlow ? " " : ""); // 加上逗号和空格。
        if (状态.condenseFlow) // 如果凝缩流。
          对子缓冲区 += '"'; // 加上双引号。
        物件钥匙 = 物件钥匙列表[索引]; // 物件钥匙。
        物件值 = 物件[物件钥匙]; // 物件值。
        if (状态.replacer) { // 如果有替换器。
          物件值 = 状态.replacer.call(物件, 物件钥匙, 物件值); // 调用替换器。
        }
        if (!写节点(状态, 级别, 物件钥匙, false, false)) { // 写节点。
          continue; // 继续。
        }
        if (状态.dump.length > 1024) // 如果倾倒长度大于1024。
          对子缓冲区 += "? "; // 加上问号和空格。
        对子缓冲区 += 状态.dump + (状态.condenseFlow ? '"' : "") + ":" + (状态.condenseFlow ? "" : " "); // 加上倾倒、引号和冒号。
        if (!写节点(状态, 级别, 物件值, false, false)) { // 写节点。
          continue; // 继续。
        }
        对子缓冲区 += 状态.dump; // 加上倾倒。
        _结果 += 对子缓冲区; // 加上对子缓冲区。
      }
      状态.tag = _标签; // 标签回退。
      状态.dump = "{" + _结果 + "}"; // 倾倒。
    }

    function 写块映射(状态, 级别, 物件, 紧凑) { // 写块映射。
      var _结果 = "", // 结果。
        _标签 = 状态.tag, // 标签。
        物件钥匙列表 = Object.keys(物件), // 物件钥匙列表。
        索引, 长度, 物件钥匙, 物件值, 显式对子, 对子缓冲区; // 索引、长度、物件钥匙、物件值、显式对子、对子缓冲区。
      if (状态.sortKeys === true) { // 如果排序钥匙是真。
        物件钥匙列表.sort(); // 排序。
      } else if (typeof 状态.sortKeys === "function") { // 如果排序钥匙是函数。
        物件钥匙列表.sort(状态.sortKeys); // 调用排序函数。
      } else if (状态.sortKeys) { // 如果排序钥匙是真。
        throw new 歪门邪道之祸("排序钥匙得是真假值或函数"); // 抛出排序钥匙错误。
      }
      for (索引 = 0, 长度 = 物件钥匙列表.length; 索引 < 长度; 索引 += 1) { // 循环。
        对子缓冲区 = ""; // 对子缓冲区。
        if (!紧凑 || _结果 !== "") { // 如果不紧凑或结果不空。
          对子缓冲区 += 生成下行(状态, 级别); // 加上下行。
        }
        物件钥匙 = 物件钥匙列表[索引]; // 物件钥匙。
        物件值 = 物件[物件钥匙]; // 物件值。
        if (状态.replacer) { // 如果有替换器。
          物件值 = 状态.replacer.call(物件, 物件钥匙, 物件值); // 调用替换器。
        }
        if (!写节点(状态, 级别 + 1, 物件钥匙, true, true, true)) { // 写节点。
          continue; // 继续。
        }
        显式对子 = 状态.tag !== null && 状态.tag !== "?" || 状态.dump && 状态.dump.length > 1024; // 显式对子。
        if (显式对子) { // 如果是显式对子。
          if (状态.dump && 换行符 === 状态.dump.charCodeAt(0)) { // 如果倾倒有内容且开头是换行符。
            对子缓冲区 += "?"; // 加上问号。
          } else {
            对子缓冲区 += "? "; // 加上问号和空格。
          }
        }
        对子缓冲区 += 状态.dump; // 加上倾倒。
        if (显式对子) { // 如果是显式对子。
          对子缓冲区 += 生成下行(状态, 级别); // 加上下行。
        }
        if (!写节点(状态, 级别 + 1, 物件值, true, 显式对子)) { // 写节点。
          continue; // 继续。
        }
        if (状态.dump && 换行符 === 状态.dump.charCodeAt(0)) { // 如果倾倒有内容且开头是换行符。
          对子缓冲区 += ":"; // 加上冒号。
        } else {
          对子缓冲区 += ": "; // 加上冒号和空格。
        }
        对子缓冲区 += 状态.dump; // 加上倾倒。
        _结果 += 对子缓冲区; // 加上对子缓冲区。
      }
      状态.tag = _标签; // 标签回退。
      状态.dump = _结果 || "{}"; // 倾倒。
    }

    function 侦测类型(状态, 物件, 显式) { // 侦测类型。
      var _结果, 类型列表, 索引, 长度, 类型, 样式; // 结果、类型列表、索引、长度、类型、样式。
      类型列表 = 显式 ? 状态.explicitTypes : 状态.implicitTypes; // 类型列表。
      for (索引 = 0, 长度 = 类型列表.length; 索引 < 长度; 索引 += 1) { // 循环。
        类型 = 类型列表[索引]; // 类型。
        if ((类型.instanceOf || 类型.predicate) && (!类型.instanceOf || typeof 物件 === "object" && 物件 instanceof 类型.instanceOf) && (!类型.predicate || 类型.predicate(物件))) { // 如果有实例或判断且符合。
          if (显式) { // 如果是显式。
            if (类型.multi && 类型.representName) { // 如果是多类型且有表示名。
              状态.tag = 类型.representName(物件); // 标签。
            } else {
              状态.tag = 类型.tag; // 标签。
            }
          } else {
            状态.tag = "?"; // 标签是问号。
          }
          if (类型.represent) { // 如果有表示。
            样式 = 状态.styleMap[类型.tag] || 类型.defaultStyle; // 样式。
            if (_toString.call(类型.represent) === "[object Function]") { // 如果表示是函数。
              _结果 = 类型.represent(物件, 样式); // 调用表示函数。
            } else if (_hasOwnProperty.call(类型.represent, 样式)) { // 如果表示有样式。
              _结果 = 类型.represent[样式](物件, 样式); // 调用表示样式函数。
            } else {
              throw new 歪门邪道之祸("!<" + 类型.tag + '>标签解析器不认“' + 样式 + '”样式'); // 抛出标签解析器错误。
            }
            状态.dump = _结果; // 倾倒。
          }
          return true; // 回真。
        }
      }
      return false; // 回假。
    }

    function 写节点(状态, 级别, 物件, 块, 紧凑, 是钥匙, 是块序列) { // 写节点。
      状态.tag = null; // 标签清空。
      状态.dump = 物件; // 倾倒。
      if (!侦测类型(状态, 物件, false)) { // 如果没侦测到类型。
        侦测类型(状态, 物件, true); // 侦测显式类型。
      }
      var 类型 = _toString.call(状态.dump); // 类型。
      var 在块中 = 块; // 在块中。
      var 标签字串; // 标签字串。
      if (块) { // 如果是块。
        块 = 状态.flowLevel < 0 || 状态.flowLevel > 级别; // 块。
      }
      var 物件或阵列 = 类型 === "[object Object]" || 类型 === "[object Array]", // 物件或阵列。
        重复索引, 重复; // 重复索引、重复。
      if (物件或阵列) { // 如果是物件或阵列。
        重复索引 = 状态.duplicates.indexOf(物件); // 重复索引。
        重复 = 重复索引 !== -1; // 重复。
      }
      if (状态.tag !== null && 状态.tag !== "?" || 重复 || 状态.indent !== 2 && 级别 > 0) { // 如果有标签或重复或缩进不为2且级别大于0。
        紧凑 = false; // 不紧凑。
      }
      if (重复 && 状态.usedDuplicates[重复索引]) { // 如果重复且已用重复。
        状态.dump = "*ref_" + 重复索引; // 倾倒。
      } else {
        if (物件或阵列 && 重复 && !状态.usedDuplicates[重复索引]) { // 如果是物件或阵列且重复且未用重复。
          状态.usedDuplicates[重复索引] = true; // 已用重复。
        }
        if (类型 === "[object Object]") { // 如果是物件。
          if (块 && Object.keys(状态.dump).length !== 0) { // 如果是块且倾倒不空。
            写块映射(状态, 级别, 状态.dump, 紧凑); // 写块映射。
            if (重复) { // 如果重复。
              状态.dump = "&ref_" + 重复索引 + 状态.dump; // 倾倒。
            }
          } else {
            写流映射(状态, 级别, 状态.dump); // 写流映射。
            if (重复) { // 如果重复。
              状态.dump = "&ref_" + 重复索引 + " " + 状态.dump; // 倾倒。
            }
          }
        } else if (类型 === "[object Array]") { // 如果是阵列。
          if (块 && 状态.dump.length !== 0) { // 如果是块且倾倒不空。
            if (状态.noArrayIndent && !是块序列 && 级别 > 0) { // 如果不数组缩进且不是块序列且级别大于0。
              写块序列(状态, 级别 - 1, 状态.dump, 紧凑); // 写块序列。
            } else {
              写块序列(状态, 级别, 状态.dump, 紧凑); // 写块序列。
            }
            if (重复) { // 如果重复。
              状态.dump = "&ref_" + 重复索引 + 状态.dump; // 倾倒。
            }
          } else {
            写流序列(状态, 级别, 状态.dump); // 写流序列。
            if (重复) { // 如果重复。
              状态.dump = "&ref_" + 重复索引 + " " + 状态.dump; // 倾倒。
            }
          }
        } else if (类型 === "[object String]") { // 如果是字串。
          if (状态.tag !== "?") { // 如果标签不是问号。
            写标量(状态, 状态.dump, 级别, 是钥匙, 在块中); // 写标量。
          }
        } else if (类型 === "[object Undefined]") { // 如果是未定义。
          return false; // 回假。
        } else {
          if (状态.skipInvalid) // 如果跳过无效。
            return false; // 回假。
          throw new 歪门邪道之祸("不中用的物件种类，没法倾倒 " + 类型); // 抛出物件种类错误。
        }
        if (状态.tag !== null && 状态.tag !== "?") { // 如果有标签且不是问号。
          标签字串 = encodeURI( // 编码URI。
            状态.tag[0] === "!" ? 状态.tag.slice(1) : 状态.tag // 标签。
          ).replace(/!/g, "%21"); // 替换感叹号。
          if (状态.tag[0] === "!") { // 如果标签开头是感叹号。
            标签字串 = "!" + 标签字串; // 加上感叹号。
          } else if (标签字串.slice(0, 18) === "tag:yaml.org,2002:") { // 如果标签字串开头是tag:yaml.org,2002:。
            标签字串 = "!!" + 标签字串.slice(18); // 加上两个感叹号。
          } else {
            标签字串 = "!<" + 标签字串 + ">"; // 加上!<和>。
          }
          状态.dump = 标签字串 + " " + 状态.dump; // 倾倒。
        }
      }
      return true; // 回真。
    }

    function 取重复引用(物件, 状态) { // 取重复引用。
      var 物件列表 = [], // 物件列表。
        重复索引列表 = [], // 重复索引列表。
        索引, 长度; // 索引、长度。
      检查节点(物件, 物件列表, 重复索引列表); // 检查节点。
      for (索引 = 0, 长度 = 重复索引列表.length; 索引 < 长度; 索引 += 1) { // 循环。
        状态.duplicates.push(物件列表[重复索引列表[索引]]); // 推入重复。
      }
      状态.usedDuplicates = new Array(长度); // 已用重复。
    }

    function 检查节点(物件, 物件列表, 重复索引列表) { // 检查节点。
      var 物件钥匙列表, 索引, 长度; // 物件钥匙列表、索引、长度。
      if (物件 !== null && typeof 物件 === "object") { // 如果物件不空且是物件。
        索引 = 物件列表.indexOf(物件); // 索引。
        if (索引 !== -1) { // 如果索引不为负一。
          if (重复索引列表.indexOf(索引) === -1) { // 如果重复索引列表里没有索引。
            重复索引列表.push(索引); // 推入索引。
          }
        } else {
          物件列表.push(物件); // 推入物件。
          if (Array.isArray(物件)) { // 如果是阵列。
            for (索引 = 0, 长度 = 物件.length; 索引 < 长度; 索引 += 1) { // 循环。
              检查节点(物件[索引], 物件列表, 重复索引列表); // 检查节点。
            }
          } else {
            物件钥匙列表 = Object.keys(物件); // 物件钥匙列表。
            for (索引 = 0, 长度 = 物件钥匙列表.length; 索引 < 长度; 索引 += 1) { // 循环。
              检查节点(物件[物件钥匙列表[索引]], 物件列表, 重复索引列表); // 检查节点。
            }
          }
        }
      }
    }

    function 倾倒(输入, 选项) { // 倾倒。
      选项 = 选项 || {}; // 选项。
      var 状态 = new 状态(选项); // 新状态。
      if (!状态.noRefs) // 如果不引用。
        取重复引用(输入, 状态); // 取重复引用。
      var 值 = 输入; // 值。
      if (状态.replacer) { // 如果有替换器。
        值 = 状态.replacer.call({ "": 值 }, "", 值); // 调用替换器。
      }
      if (写节点(状态, 0, 值, true, true)) // 写节点。
        return 状态.dump + "\n"; // 回倾倒和换行。
      return ""; // 回空字串。
    }
    模块.exports.倾倒 = 倾倒; // 倾倒，出口。
  }
});

// node_modules/js-yaml/index.js
var 寻歪门邪道 = 寻常货({ // 尋找歪門邪道，這是咱們山寨的總綱。
  "node_modules/js-yaml/index.js"(出口, 模块) { // 歪門邪道的規矩。
    "use strict"; // 嚴格執行。
    启动小跟班(); // 小跟班又來了。
    var 装载器 = 寻装载(); // 装载器。
    var 倾倒器 = 寻倾倒(); // 倾倒器。
    function 改名(从何, 到何) { // 改名。
      return function () { // 回函数。
        throw new Error("函数 yaml." + 从何 + " 在 js-yaml 4 中已移除。请改用 yaml." + 到何 + "，它现在默认是安全的。"); // 抛出错误。
      };
    }
    模块.exports.Type = 寻类型(); // 类型。
    模块.exports.Schema = 寻纲要(); // 纲要。
    模块.exports.FAILSAFE_SCHEMA = 寻保底(); // 保底纲要。
    模块.exports.JSON_SCHEMA = 寻秘档(); // 秘档纲要。
    模块.exports.CORE_SCHEMA = 寻核心(); // 核心纲要。
    模块.exports.DEFAULT_SCHEMA = 寻默认(); // 默认纲要。
    模块.exports.load = 装载器.装载; // 装载。
    模块.exports.loadAll = 装载器.全装载; // 全装载。
    模块.exports.dump = 倾倒器.倾倒; // 倾倒。
    模块.exports.YAMLException = 寻异端(); // 歪门邪道之祸。
    模块.exports.types = { // 类型。
      binary: 寻二进(), // 二进。
      float: 寻浮点(), // 浮点。
      map: 寻映射(), // 映射。
      null: 寻空值(), // 空值。
      pairs: 寻对子(), // 对子。
      set: 寻集合(), // 集合。
      timestamp: 寻时戳(), // 时戳。
      bool: 寻真假(), // 真假。
      int: 寻整数(), // 整数。
      merge: 寻合并(), // 合并。
      omap: 寻有序图(), // 有序图。
      seq: 寻序列(), // 序列。
      str: 寻字串() // 字串。
    };
    模块.exports.safeLoad = 改名("safeLoad", "load"); // 安全装载。
    模块.exports.safeLoadAll = 改名("safeLoadAll", "loadAll"); // 安全全装载。
    模块.exports.safeDump = 改名("safeDump", "dump"); // 安全倾倒。
  }
});

// src/index.js
启动小跟班(); // 小跟班又來了，準備幹活！
var 歪门邪道 = 寻歪门邪道(); // 歪門邪道，咱們的秘密武器。
var 山寨总舵主 = { // 山寨總舵主，就是咱們這個大當家。
  async 接客(来客, 山寨家底) { // 總舵主親自接客，來客和山寨家底都得看好。
    const 路引 = new URL(来客.url); // 看看來客的路引。
    const 地盘 = 路引.origin; // 咱們的地盤。
    const 前院门面 = 'https://raw.githubusercontent.com/yzcjd/sub-trans/main/frontend.html'; // 前院門面，對外展示的。
    const 藏宝阁 = 山寨家底.SUB_BUCKET; // 藏寶閣，放寶貝的地方。
    let 后山秘道 = 山寨家底.BACKEND.replace(/(https?:\/\/[^/]+).*$/, "$1"); // 後山秘道，通往後院的。
    const 暗号 = "subscription"; // 暗號，對上暗號才能進。
    const 小径分岔 = 路引.pathname.split("/").filter((segment) => segment.length > 0); // 小徑分岔，看看來客走哪條路。
    if (小径分岔.length === 0) { // 如果沒走小徑，直接到前院。
      const 回话 = await fetch(前院门面); // 去前院門面拿東西。
