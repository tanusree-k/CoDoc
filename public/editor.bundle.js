var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/quill-cursors/dist/quill-cursors.js
var require_quill_cursors = __commonJS({
  "node_modules/quill-cursors/dist/quill-cursors.js"(exports, module) {
    !(function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QuillCursors = e() : t.QuillCursors = e();
    })(self, (() => (() => {
      var t = { 582: (t2, e2, n2) => {
        "use strict";
        n2.d(e2, { Z: () => a });
        var r2 = n2(81), i = n2.n(r2), o = n2(645), s = n2.n(o)()(i());
        s.push([t2.id, ".ql-container{position:relative;overflow:hidden}@media(pointer: coarse){.ql-cursor-caret-container{z-index:-1}}.ql-cursor.hidden{display:none}.ql-cursor .ql-cursor-caret-container,.ql-cursor .ql-cursor-flag{position:absolute}.ql-cursor .ql-cursor-flag{z-index:1;transform:translate3d(-1px, -100%, 0);opacity:0;visibility:hidden;color:#fff;padding-bottom:2px;border-radius:0 3px 3px 0}.ql-cursor .ql-cursor-flag.flag-flipped{border-radius:3px 0 0 3px;transform:translate3d(calc(-100% + 1px ), -100%, 0)}@media screen{.ql-cursor .ql-cursor-flag{transition:opacity 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms,visibility 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms}}.ql-cursor .ql-cursor-flag .ql-cursor-name{margin-left:5px;margin-right:5px;display:inline-block;margin-top:-2px;white-space:nowrap}.ql-cursor .ql-cursor-flag.no-delay[style]{transition-delay:unset !important}.ql-cursor .ql-cursor-caret-container{cursor:text;margin-left:-9px;padding:0 9px}.ql-cursor .ql-cursor-caret-container.hover+.ql-cursor-flag{opacity:1;visibility:visible;transition:none}.ql-cursor .ql-cursor-caret-container.no-pointer{pointer-events:none}.ql-cursor .ql-cursor-caret-container .ql-cursor-caret{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background-color:attr(data-color)}.ql-cursor .ql-cursor-selection-block{position:absolute;pointer-events:none}", ""]);
        const a = s;
      }, 645: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = [];
          return e2.toString = function() {
            return this.map((function(e3) {
              var n2 = "", r2 = void 0 !== e3[5];
              return e3[4] && (n2 += "@supports (".concat(e3[4], ") {")), e3[2] && (n2 += "@media ".concat(e3[2], " {")), r2 && (n2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), n2 += t3(e3), r2 && (n2 += "}"), e3[2] && (n2 += "}"), e3[4] && (n2 += "}"), n2;
            })).join("");
          }, e2.i = function(t4, n2, r2, i, o) {
            "string" == typeof t4 && (t4 = [[null, t4, void 0]]);
            var s = {};
            if (r2) for (var a = 0; a < this.length; a++) {
              var u = this[a][0];
              null != u && (s[u] = true);
            }
            for (var c = 0; c < t4.length; c++) {
              var l = [].concat(t4[c]);
              r2 && s[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), n2 && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n2) : l[2] = n2), i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = i) : l[4] = "".concat(i)), e2.push(l));
            }
          }, e2;
        };
      }, 81: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return t3[1];
        };
      }, 529: (t2) => {
        var e2 = -1;
        function n2(t3, a2, u2, c2) {
          if (t3 === a2) return t3 ? [[0, t3]] : [];
          if (null != u2) {
            var l2 = (function(t4, e3, n3) {
              var r3 = "number" == typeof n3 ? { index: n3, length: 0 } : n3.oldRange, i2 = "number" == typeof n3 ? null : n3.newRange, o2 = t4.length, s2 = e3.length;
              if (0 === r3.length && (null === i2 || 0 === i2.length)) {
                var a3 = r3.index, u3 = t4.slice(0, a3), c3 = t4.slice(a3), l3 = i2 ? i2.index : null, h3 = a3 + s2 - o2;
                if ((null === l3 || l3 === h3) && !(h3 < 0 || h3 > s2)) {
                  var p2 = e3.slice(0, h3);
                  if ((v2 = e3.slice(h3)) === c3) {
                    var d2 = Math.min(a3, h3);
                    if ((y = u3.slice(0, d2)) === (m = p2.slice(0, d2))) return f(y, u3.slice(d2), p2.slice(d2), c3);
                  }
                }
                if (null === l3 || l3 === a3) {
                  var g2 = a3, v2 = (p2 = e3.slice(0, g2), e3.slice(g2));
                  if (p2 === u3) {
                    var _2 = Math.min(o2 - g2, s2 - g2);
                    if ((b = c3.slice(c3.length - _2)) === (C2 = v2.slice(v2.length - _2))) return f(u3, c3.slice(0, c3.length - _2), v2.slice(0, v2.length - _2), b);
                  }
                }
              }
              if (r3.length > 0 && i2 && 0 === i2.length) {
                var y = t4.slice(0, r3.index), b = t4.slice(r3.index + r3.length);
                if (!(s2 < (d2 = y.length) + (_2 = b.length))) {
                  var m = e3.slice(0, d2), C2 = e3.slice(s2 - _2);
                  if (y === m && b === C2) return f(y, t4.slice(d2, o2 - _2), e3.slice(d2, s2 - _2), b);
                }
              }
              return null;
            })(t3, a2, u2);
            if (l2) return l2;
          }
          var h2 = i(t3, a2), p = t3.substring(0, h2);
          h2 = o(t3 = t3.substring(h2), a2 = a2.substring(h2));
          var d = t3.substring(t3.length - h2), g = (function(t4, s2) {
            var a3;
            if (!t4) return [[1, s2]];
            if (!s2) return [[e2, t4]];
            var u3 = t4.length > s2.length ? t4 : s2, c3 = t4.length > s2.length ? s2 : t4, l3 = u3.indexOf(c3);
            if (-1 !== l3) return a3 = [[1, u3.substring(0, l3)], [0, c3], [1, u3.substring(l3 + c3.length)]], t4.length > s2.length && (a3[0][0] = a3[2][0] = e2), a3;
            if (1 === c3.length) return [[e2, t4], [1, s2]];
            var f2 = (function(t5, e3) {
              var n3 = t5.length > e3.length ? t5 : e3, r3 = t5.length > e3.length ? e3 : t5;
              if (n3.length < 4 || 2 * r3.length < n3.length) return null;
              function s3(t6, e4, n4) {
                for (var r4, s4, a5, u5, c5 = t6.substring(n4, n4 + Math.floor(t6.length / 4)), l5 = -1, f4 = ""; -1 !== (l5 = e4.indexOf(c5, l5 + 1)); ) {
                  var h5 = i(t6.substring(n4), e4.substring(l5)), p4 = o(t6.substring(0, n4), e4.substring(0, l5));
                  f4.length < p4 + h5 && (f4 = e4.substring(l5 - p4, l5) + e4.substring(l5, l5 + h5), r4 = t6.substring(0, n4 - p4), s4 = t6.substring(n4 + h5), a5 = e4.substring(0, l5 - p4), u5 = e4.substring(l5 + h5));
                }
                return 2 * f4.length >= t6.length ? [r4, s4, a5, u5, f4] : null;
              }
              var a4, u4, c4, l4, f3, h4 = s3(n3, r3, Math.ceil(n3.length / 4)), p3 = s3(n3, r3, Math.ceil(n3.length / 2));
              return h4 || p3 ? (a4 = p3 ? h4 && h4[4].length > p3[4].length ? h4 : p3 : h4, t5.length > e3.length ? (u4 = a4[0], c4 = a4[1], l4 = a4[2], f3 = a4[3]) : (l4 = a4[0], f3 = a4[1], u4 = a4[2], c4 = a4[3]), [u4, c4, l4, f3, a4[4]]) : null;
            })(t4, s2);
            if (f2) {
              var h3 = f2[0], p2 = f2[1], d2 = f2[2], g2 = f2[3], v2 = f2[4], _2 = n2(h3, d2), y = n2(p2, g2);
              return _2.concat([[0, v2]], y);
            }
            return (function(t5, n3) {
              for (var i2 = t5.length, o2 = n3.length, s3 = Math.ceil((i2 + o2) / 2), a4 = s3, u4 = 2 * s3, c4 = new Array(u4), l4 = new Array(u4), f3 = 0; f3 < u4; f3++) c4[f3] = -1, l4[f3] = -1;
              c4[a4 + 1] = 0, l4[a4 + 1] = 0;
              for (var h4 = i2 - o2, p3 = h4 % 2 != 0, d3 = 0, g3 = 0, v3 = 0, _3 = 0, y2 = 0; y2 < s3; y2++) {
                for (var b = -y2 + d3; b <= y2 - g3; b += 2) {
                  for (var m = a4 + b, C2 = (S2 = b === -y2 || b !== y2 && c4[m - 1] < c4[m + 1] ? c4[m + 1] : c4[m - 1] + 1) - b; S2 < i2 && C2 < o2 && t5.charAt(S2) === n3.charAt(C2); ) S2++, C2++;
                  if (c4[m] = S2, S2 > i2) g3 += 2;
                  else if (C2 > o2) d3 += 2;
                  else if (p3 && (O2 = a4 + h4 - b) >= 0 && O2 < u4 && -1 !== l4[O2] && S2 >= (A2 = i2 - l4[O2])) return r2(t5, n3, S2, C2);
                }
                for (var E2 = -y2 + v3; E2 <= y2 - _3; E2 += 2) {
                  for (var A2, O2 = a4 + E2, w2 = (A2 = E2 === -y2 || E2 !== y2 && l4[O2 - 1] < l4[O2 + 1] ? l4[O2 + 1] : l4[O2 - 1] + 1) - E2; A2 < i2 && w2 < o2 && t5.charAt(i2 - A2 - 1) === n3.charAt(o2 - w2 - 1); ) A2++, w2++;
                  if (l4[O2] = A2, A2 > i2) _3 += 2;
                  else if (w2 > o2) v3 += 2;
                  else if (!p3) {
                    var S2;
                    if ((m = a4 + h4 - E2) >= 0 && m < u4 && -1 !== c4[m]) {
                      if (C2 = a4 + (S2 = c4[m]) - m, S2 >= (A2 = i2 - A2)) return r2(t5, n3, S2, C2);
                    }
                  }
                }
              }
              return [[e2, t5], [1, n3]];
            })(t4, s2);
          })(t3 = t3.substring(0, t3.length - h2), a2 = a2.substring(0, a2.length - h2));
          return p && g.unshift([0, p]), d && g.push([0, d]), s(g, c2), g;
        }
        function r2(t3, e3, r3, i2) {
          var o2 = t3.substring(0, r3), s2 = e3.substring(0, i2), a2 = t3.substring(r3), u2 = e3.substring(i2), c2 = n2(o2, s2), l2 = n2(a2, u2);
          return c2.concat(l2);
        }
        function i(t3, e3) {
          if (!t3 || !e3 || t3.charAt(0) !== e3.charAt(0)) return 0;
          for (var n3 = 0, r3 = Math.min(t3.length, e3.length), i2 = r3, o2 = 0; n3 < i2; ) t3.substring(o2, i2) == e3.substring(o2, i2) ? o2 = n3 = i2 : r3 = i2, i2 = Math.floor((r3 - n3) / 2 + n3);
          return a(t3.charCodeAt(i2 - 1)) && i2--, i2;
        }
        function o(t3, e3) {
          if (!t3 || !e3 || t3.slice(-1) !== e3.slice(-1)) return 0;
          for (var n3 = 0, r3 = Math.min(t3.length, e3.length), i2 = r3, o2 = 0; n3 < i2; ) t3.substring(t3.length - i2, t3.length - o2) == e3.substring(e3.length - i2, e3.length - o2) ? o2 = n3 = i2 : r3 = i2, i2 = Math.floor((r3 - n3) / 2 + n3);
          return u(t3.charCodeAt(t3.length - i2)) && i2--, i2;
        }
        function s(t3, n3) {
          t3.push([0, ""]);
          for (var r3, a2 = 0, u2 = 0, f2 = 0, h2 = "", p = ""; a2 < t3.length; ) if (a2 < t3.length - 1 && !t3[a2][1]) t3.splice(a2, 1);
          else switch (t3[a2][0]) {
            case 1:
              f2++, p += t3[a2][1], a2++;
              break;
            case e2:
              u2++, h2 += t3[a2][1], a2++;
              break;
            case 0:
              var d = a2 - f2 - u2 - 1;
              if (n3) {
                if (d >= 0 && l(t3[d][1])) {
                  var g = t3[d][1].slice(-1);
                  if (t3[d][1] = t3[d][1].slice(0, -1), h2 = g + h2, p = g + p, !t3[d][1]) {
                    t3.splice(d, 1), a2--;
                    var v2 = d - 1;
                    t3[v2] && 1 === t3[v2][0] && (f2++, p = t3[v2][1] + p, v2--), t3[v2] && t3[v2][0] === e2 && (u2++, h2 = t3[v2][1] + h2, v2--), d = v2;
                  }
                }
                c(t3[a2][1]) && (g = t3[a2][1].charAt(0), t3[a2][1] = t3[a2][1].slice(1), h2 += g, p += g);
              }
              if (a2 < t3.length - 1 && !t3[a2][1]) {
                t3.splice(a2, 1);
                break;
              }
              if (h2.length > 0 || p.length > 0) {
                h2.length > 0 && p.length > 0 && (0 !== (r3 = i(p, h2)) && (d >= 0 ? t3[d][1] += p.substring(0, r3) : (t3.splice(0, 0, [0, p.substring(0, r3)]), a2++), p = p.substring(r3), h2 = h2.substring(r3)), 0 !== (r3 = o(p, h2)) && (t3[a2][1] = p.substring(p.length - r3) + t3[a2][1], p = p.substring(0, p.length - r3), h2 = h2.substring(0, h2.length - r3)));
                var _2 = f2 + u2;
                0 === h2.length && 0 === p.length ? (t3.splice(a2 - _2, _2), a2 -= _2) : 0 === h2.length ? (t3.splice(a2 - _2, _2, [1, p]), a2 = a2 - _2 + 1) : 0 === p.length ? (t3.splice(a2 - _2, _2, [e2, h2]), a2 = a2 - _2 + 1) : (t3.splice(a2 - _2, _2, [e2, h2], [1, p]), a2 = a2 - _2 + 2);
              }
              0 !== a2 && 0 === t3[a2 - 1][0] ? (t3[a2 - 1][1] += t3[a2][1], t3.splice(a2, 1)) : a2++, f2 = 0, u2 = 0, h2 = "", p = "";
          }
          "" === t3[t3.length - 1][1] && t3.pop();
          var y = false;
          for (a2 = 1; a2 < t3.length - 1; ) 0 === t3[a2 - 1][0] && 0 === t3[a2 + 1][0] && (t3[a2][1].substring(t3[a2][1].length - t3[a2 - 1][1].length) === t3[a2 - 1][1] ? (t3[a2][1] = t3[a2 - 1][1] + t3[a2][1].substring(0, t3[a2][1].length - t3[a2 - 1][1].length), t3[a2 + 1][1] = t3[a2 - 1][1] + t3[a2 + 1][1], t3.splice(a2 - 1, 1), y = true) : t3[a2][1].substring(0, t3[a2 + 1][1].length) == t3[a2 + 1][1] && (t3[a2 - 1][1] += t3[a2 + 1][1], t3[a2][1] = t3[a2][1].substring(t3[a2 + 1][1].length) + t3[a2 + 1][1], t3.splice(a2 + 1, 1), y = true)), a2++;
          y && s(t3, n3);
        }
        function a(t3) {
          return t3 >= 55296 && t3 <= 56319;
        }
        function u(t3) {
          return t3 >= 56320 && t3 <= 57343;
        }
        function c(t3) {
          return u(t3.charCodeAt(0));
        }
        function l(t3) {
          return a(t3.charCodeAt(t3.length - 1));
        }
        function f(t3, n3, r3, i2) {
          return l(t3) || c(i2) ? null : (function(t4) {
            for (var e3 = [], n4 = 0; n4 < t4.length; n4++) t4[n4][1].length > 0 && e3.push(t4[n4]);
            return e3;
          })([[0, t3], [e2, n3], [1, r3], [0, i2]]);
        }
        function h(t3, e3, r3) {
          return n2(t3, e3, r3, true);
        }
        h.INSERT = 1, h.DELETE = e2, h.EQUAL = 0, t2.exports = h;
      }, 465: (t2, e2, n2) => {
        t2 = n2.nmd(t2);
        var r2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Boolean]", a = "[object Date]", u = "[object Function]", c = "[object GeneratorFunction]", l = "[object Map]", f = "[object Number]", h = "[object Object]", p = "[object Promise]", d = "[object RegExp]", g = "[object Set]", v2 = "[object String]", _2 = "[object Symbol]", y = "[object WeakMap]", b = "[object ArrayBuffer]", m = "[object DataView]", C2 = "[object Float32Array]", E2 = "[object Float64Array]", A2 = "[object Int8Array]", O2 = "[object Int16Array]", w2 = "[object Int32Array]", S2 = "[object Uint8Array]", j2 = "[object Uint8ClampedArray]", x = "[object Uint16Array]", L2 = "[object Uint32Array]", T2 = /\w*$/, M = /^\[object .+?Constructor\]$/, N2 = /^(?:0|[1-9]\d*)$/, R2 = {};
        R2[o] = R2["[object Array]"] = R2[b] = R2[m] = R2[s] = R2[a] = R2[C2] = R2[E2] = R2[A2] = R2[O2] = R2[w2] = R2[l] = R2[f] = R2[h] = R2[d] = R2[g] = R2[v2] = R2[_2] = R2[S2] = R2[j2] = R2[x] = R2[L2] = true, R2["[object Error]"] = R2[u] = R2[y] = false;
        var k2 = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, D2 = "object" == typeof self && self && self.Object === Object && self, q2 = k2 || D2 || Function("return this")(), B = e2 && !e2.nodeType && e2, I2 = B && t2 && !t2.nodeType && t2, P2 = I2 && I2.exports === B;
        function F2(t3, e3) {
          return t3.set(e3[0], e3[1]), t3;
        }
        function z(t3, e3) {
          return t3.add(e3), t3;
        }
        function U2(t3, e3, n3, r3) {
          var i2 = -1, o2 = t3 ? t3.length : 0;
          for (r3 && o2 && (n3 = t3[++i2]); ++i2 < o2; ) n3 = e3(n3, t3[i2], i2, t3);
          return n3;
        }
        function G2(t3) {
          var e3 = false;
          if (null != t3 && "function" != typeof t3.toString) try {
            e3 = !!(t3 + "");
          } catch (t4) {
          }
          return e3;
        }
        function H2(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4, r3) {
            n3[++e3] = [r3, t4];
          })), n3;
        }
        function $3(t3, e3) {
          return function(n3) {
            return t3(e3(n3));
          };
        }
        function V2(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4) {
            n3[++e3] = t4;
          })), n3;
        }
        var W2, X2 = Array.prototype, Q2 = Function.prototype, Z2 = Object.prototype, Y2 = q2["__core-js_shared__"], K2 = (W2 = /[^.]+$/.exec(Y2 && Y2.keys && Y2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W2 : "", J2 = Q2.toString, tt2 = Z2.hasOwnProperty, et = Z2.toString, nt2 = RegExp("^" + J2.call(tt2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), rt = P2 ? q2.Buffer : void 0, it = q2.Symbol, ot = q2.Uint8Array, st = $3(Object.getPrototypeOf, Object), at = Object.create, ut = Z2.propertyIsEnumerable, ct = X2.splice, lt = Object.getOwnPropertySymbols, ft = rt ? rt.isBuffer : void 0, ht = $3(Object.keys, Object), pt = qt(q2, "DataView"), dt = qt(q2, "Map"), gt = qt(q2, "Promise"), vt = qt(q2, "Set"), _t2 = qt(q2, "WeakMap"), yt = qt(Object, "create"), bt = zt(pt), mt = zt(dt), Ct = zt(gt), Et = zt(vt), At = zt(_t2), Ot = it ? it.prototype : void 0, wt = Ot ? Ot.valueOf : void 0;
        function St(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function jt(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function xt(t3) {
          var e3 = -1, n3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function Lt(t3) {
          this.__data__ = new jt(t3);
        }
        function Tt(t3, e3, n3) {
          var r3 = t3[e3];
          tt2.call(t3, e3) && Ut(r3, n3) && (void 0 !== n3 || e3 in t3) || (t3[e3] = n3);
        }
        function Mt(t3, e3) {
          for (var n3 = t3.length; n3--; ) if (Ut(t3[n3][0], e3)) return n3;
          return -1;
        }
        function Nt(t3, e3, n3, r3, i2, p2, y2) {
          var M2;
          if (r3 && (M2 = p2 ? r3(t3, i2, p2, y2) : r3(t3)), void 0 !== M2) return M2;
          if (!Wt(t3)) return t3;
          var N3 = Gt(t3);
          if (N3) {
            if (M2 = (function(t4) {
              var e4 = t4.length, n4 = t4.constructor(e4);
              return e4 && "string" == typeof t4[0] && tt2.call(t4, "index") && (n4.index = t4.index, n4.input = t4.input), n4;
            })(t3), !e3) return (function(t4, e4) {
              var n4 = -1, r4 = t4.length;
              for (e4 || (e4 = Array(r4)); ++n4 < r4; ) e4[n4] = t4[n4];
              return e4;
            })(t3, M2);
          } else {
            var k3 = It(t3), D3 = k3 == u || k3 == c;
            if ($t(t3)) return (function(t4, e4) {
              if (e4) return t4.slice();
              var n4 = new t4.constructor(t4.length);
              return t4.copy(n4), n4;
            })(t3, e3);
            if (k3 == h || k3 == o || D3 && !p2) {
              if (G2(t3)) return p2 ? t3 : {};
              if (M2 = (function(t4) {
                return "function" != typeof t4.constructor || Ft(t4) ? {} : Wt(e4 = st(t4)) ? at(e4) : {};
                var e4;
              })(D3 ? {} : t3), !e3) return (function(t4, e4) {
                return kt(t4, Bt(t4), e4);
              })(t3, (function(t4, e4) {
                return t4 && kt(e4, Xt(e4), t4);
              })(M2, t3));
            } else {
              if (!R2[k3]) return p2 ? t3 : {};
              M2 = (function(t4, e4, n4, r4) {
                var i3, o2 = t4.constructor;
                switch (e4) {
                  case b:
                    return Rt(t4);
                  case s:
                  case a:
                    return new o2(+t4);
                  case m:
                    return (function(t5, e5) {
                      var n5 = e5 ? Rt(t5.buffer) : t5.buffer;
                      return new t5.constructor(n5, t5.byteOffset, t5.byteLength);
                    })(t4, r4);
                  case C2:
                  case E2:
                  case A2:
                  case O2:
                  case w2:
                  case S2:
                  case j2:
                  case x:
                  case L2:
                    return (function(t5, e5) {
                      var n5 = e5 ? Rt(t5.buffer) : t5.buffer;
                      return new t5.constructor(n5, t5.byteOffset, t5.length);
                    })(t4, r4);
                  case l:
                    return (function(t5, e5, n5) {
                      return U2(e5 ? n5(H2(t5), true) : H2(t5), F2, new t5.constructor());
                    })(t4, r4, n4);
                  case f:
                  case v2:
                    return new o2(t4);
                  case d:
                    return (function(t5) {
                      var e5 = new t5.constructor(t5.source, T2.exec(t5));
                      return e5.lastIndex = t5.lastIndex, e5;
                    })(t4);
                  case g:
                    return (function(t5, e5, n5) {
                      return U2(e5 ? n5(V2(t5), true) : V2(t5), z, new t5.constructor());
                    })(t4, r4, n4);
                  case _2:
                    return i3 = t4, wt ? Object(wt.call(i3)) : {};
                }
              })(t3, k3, Nt, e3);
            }
          }
          y2 || (y2 = new Lt());
          var q3 = y2.get(t3);
          if (q3) return q3;
          if (y2.set(t3, M2), !N3) var B2 = n3 ? (function(t4) {
            return (function(t5, e4, n4) {
              var r4 = e4(t5);
              return Gt(t5) ? r4 : (function(t6, e5) {
                for (var n5 = -1, r5 = e5.length, i3 = t6.length; ++n5 < r5; ) t6[i3 + n5] = e5[n5];
                return t6;
              })(r4, n4(t5));
            })(t4, Xt, Bt);
          })(t3) : Xt(t3);
          return (function(t4, e4) {
            for (var n4 = -1, r4 = t4 ? t4.length : 0; ++n4 < r4 && false !== e4(t4[n4], n4); ) ;
          })(B2 || t3, (function(i3, o2) {
            B2 && (i3 = t3[o2 = i3]), Tt(M2, o2, Nt(i3, e3, n3, r3, o2, t3, y2));
          })), M2;
        }
        function Rt(t3) {
          var e3 = new t3.constructor(t3.byteLength);
          return new ot(e3).set(new ot(t3)), e3;
        }
        function kt(t3, e3, n3, r3) {
          n3 || (n3 = {});
          for (var i2 = -1, o2 = e3.length; ++i2 < o2; ) {
            var s2 = e3[i2], a2 = r3 ? r3(n3[s2], t3[s2], s2, n3, t3) : void 0;
            Tt(n3, s2, void 0 === a2 ? t3[s2] : a2);
          }
          return n3;
        }
        function Dt(t3, e3) {
          var n3, r3, i2 = t3.__data__;
          return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function qt(t3, e3) {
          var n3 = (function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          })(t3, e3);
          return (function(t4) {
            return !(!Wt(t4) || (e4 = t4, K2 && K2 in e4)) && (Vt(t4) || G2(t4) ? nt2 : M).test(zt(t4));
            var e4;
          })(n3) ? n3 : void 0;
        }
        St.prototype.clear = function() {
          this.__data__ = yt ? yt(null) : {};
        }, St.prototype.delete = function(t3) {
          return this.has(t3) && delete this.__data__[t3];
        }, St.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (yt) {
            var n3 = e3[t3];
            return n3 === r2 ? void 0 : n3;
          }
          return tt2.call(e3, t3) ? e3[t3] : void 0;
        }, St.prototype.has = function(t3) {
          var e3 = this.__data__;
          return yt ? void 0 !== e3[t3] : tt2.call(e3, t3);
        }, St.prototype.set = function(t3, e3) {
          return this.__data__[t3] = yt && void 0 === e3 ? r2 : e3, this;
        }, jt.prototype.clear = function() {
          this.__data__ = [];
        }, jt.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = Mt(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : ct.call(e3, n3, 1), 0));
        }, jt.prototype.get = function(t3) {
          var e3 = this.__data__, n3 = Mt(e3, t3);
          return n3 < 0 ? void 0 : e3[n3][1];
        }, jt.prototype.has = function(t3) {
          return Mt(this.__data__, t3) > -1;
        }, jt.prototype.set = function(t3, e3) {
          var n3 = this.__data__, r3 = Mt(n3, t3);
          return r3 < 0 ? n3.push([t3, e3]) : n3[r3][1] = e3, this;
        }, xt.prototype.clear = function() {
          this.__data__ = { hash: new St(), map: new (dt || jt)(), string: new St() };
        }, xt.prototype.delete = function(t3) {
          return Dt(this, t3).delete(t3);
        }, xt.prototype.get = function(t3) {
          return Dt(this, t3).get(t3);
        }, xt.prototype.has = function(t3) {
          return Dt(this, t3).has(t3);
        }, xt.prototype.set = function(t3, e3) {
          return Dt(this, t3).set(t3, e3), this;
        }, Lt.prototype.clear = function() {
          this.__data__ = new jt();
        }, Lt.prototype.delete = function(t3) {
          return this.__data__.delete(t3);
        }, Lt.prototype.get = function(t3) {
          return this.__data__.get(t3);
        }, Lt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, Lt.prototype.set = function(t3, e3) {
          var n3 = this.__data__;
          if (n3 instanceof jt) {
            var r3 = n3.__data__;
            if (!dt || r3.length < 199) return r3.push([t3, e3]), this;
            n3 = this.__data__ = new xt(r3);
          }
          return n3.set(t3, e3), this;
        };
        var Bt = lt ? $3(lt, Object) : function() {
          return [];
        }, It = function(t3) {
          return et.call(t3);
        };
        function Pt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || N2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Ft(t3) {
          var e3 = t3 && t3.constructor;
          return t3 === ("function" == typeof e3 && e3.prototype || Z2);
        }
        function zt(t3) {
          if (null != t3) {
            try {
              return J2.call(t3);
            } catch (t4) {
            }
            try {
              return t3 + "";
            } catch (t4) {
            }
          }
          return "";
        }
        function Ut(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        }
        (pt && It(new pt(new ArrayBuffer(1))) != m || dt && It(new dt()) != l || gt && It(gt.resolve()) != p || vt && It(new vt()) != g || _t2 && It(new _t2()) != y) && (It = function(t3) {
          var e3 = et.call(t3), n3 = e3 == h ? t3.constructor : void 0, r3 = n3 ? zt(n3) : void 0;
          if (r3) switch (r3) {
            case bt:
              return m;
            case mt:
              return l;
            case Ct:
              return p;
            case Et:
              return g;
            case At:
              return y;
          }
          return e3;
        });
        var Gt = Array.isArray;
        function Ht(t3) {
          return null != t3 && (function(t4) {
            return "number" == typeof t4 && t4 > -1 && t4 % 1 == 0 && t4 <= i;
          })(t3.length) && !Vt(t3);
        }
        var $t = ft || function() {
          return false;
        };
        function Vt(t3) {
          var e3 = Wt(t3) ? et.call(t3) : "";
          return e3 == u || e3 == c;
        }
        function Wt(t3) {
          var e3 = typeof t3;
          return !!t3 && ("object" == e3 || "function" == e3);
        }
        function Xt(t3) {
          return Ht(t3) ? (function(t4, e3) {
            var n3 = Gt(t4) || (function(t5) {
              return (function(t6) {
                return /* @__PURE__ */ (function(t7) {
                  return !!t7 && "object" == typeof t7;
                })(t6) && Ht(t6);
              })(t5) && tt2.call(t5, "callee") && (!ut.call(t5, "callee") || et.call(t5) == o);
            })(t4) ? (function(t5, e4) {
              for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e4(n4);
              return r4;
            })(t4.length, String) : [], r3 = n3.length, i2 = !!r3;
            for (var s2 in t4) !e3 && !tt2.call(t4, s2) || i2 && ("length" == s2 || Pt(s2, r3)) || n3.push(s2);
            return n3;
          })(t3) : (function(t4) {
            if (!Ft(t4)) return ht(t4);
            var e3 = [];
            for (var n3 in Object(t4)) tt2.call(t4, n3) && "constructor" != n3 && e3.push(n3);
            return e3;
          })(t3);
        }
        t2.exports = function(t3) {
          return Nt(t3, true, true);
        };
      }, 307: (t2, e2, n2) => {
        t2 = n2.nmd(t2);
        var r2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", u = "[object Date]", c = "[object Error]", l = "[object Function]", f = "[object Map]", h = "[object Number]", p = "[object Object]", d = "[object Promise]", g = "[object RegExp]", v2 = "[object Set]", _2 = "[object String]", y = "[object WeakMap]", b = "[object ArrayBuffer]", m = "[object DataView]", C2 = /^\[object .+?Constructor\]$/, E2 = /^(?:0|[1-9]\d*)$/, A2 = {};
        A2["[object Float32Array]"] = A2["[object Float64Array]"] = A2["[object Int8Array]"] = A2["[object Int16Array]"] = A2["[object Int32Array]"] = A2["[object Uint8Array]"] = A2["[object Uint8ClampedArray]"] = A2["[object Uint16Array]"] = A2["[object Uint32Array]"] = true, A2[o] = A2[s] = A2[b] = A2[a] = A2[m] = A2[u] = A2[c] = A2[l] = A2[f] = A2[h] = A2[p] = A2[g] = A2[v2] = A2[_2] = A2[y] = false;
        var O2 = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, w2 = "object" == typeof self && self && self.Object === Object && self, S2 = O2 || w2 || Function("return this")(), j2 = e2 && !e2.nodeType && e2, x = j2 && t2 && !t2.nodeType && t2, L2 = x && x.exports === j2, T2 = L2 && O2.process, M = (function() {
          try {
            return T2 && T2.binding && T2.binding("util");
          } catch (t3) {
          }
        })(), N2 = M && M.isTypedArray;
        function R2(t3, e3) {
          for (var n3 = -1, r3 = null == t3 ? 0 : t3.length; ++n3 < r3; ) if (e3(t3[n3], n3, t3)) return true;
          return false;
        }
        function k2(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4, r3) {
            n3[++e3] = [r3, t4];
          })), n3;
        }
        function D2(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4) {
            n3[++e3] = t4;
          })), n3;
        }
        var q2, B, I2, P2 = Array.prototype, F2 = Function.prototype, z = Object.prototype, U2 = S2["__core-js_shared__"], G2 = F2.toString, H2 = z.hasOwnProperty, $3 = (q2 = /[^.]+$/.exec(U2 && U2.keys && U2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q2 : "", V2 = z.toString, W2 = RegExp("^" + G2.call(H2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), X2 = L2 ? S2.Buffer : void 0, Q2 = S2.Symbol, Z2 = S2.Uint8Array, Y2 = z.propertyIsEnumerable, K2 = P2.splice, J2 = Q2 ? Q2.toStringTag : void 0, tt2 = Object.getOwnPropertySymbols, et = X2 ? X2.isBuffer : void 0, nt2 = (B = Object.keys, I2 = Object, function(t3) {
          return B(I2(t3));
        }), rt = xt(S2, "DataView"), it = xt(S2, "Map"), ot = xt(S2, "Promise"), st = xt(S2, "Set"), at = xt(S2, "WeakMap"), ut = xt(Object, "create"), ct = Nt(rt), lt = Nt(it), ft = Nt(ot), ht = Nt(st), pt = Nt(at), dt = Q2 ? Q2.prototype : void 0, gt = dt ? dt.valueOf : void 0;
        function vt(t3) {
          var e3 = -1, n3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function _t2(t3) {
          var e3 = -1, n3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function yt(t3) {
          var e3 = -1, n3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < n3; ) {
            var r3 = t3[e3];
            this.set(r3[0], r3[1]);
          }
        }
        function bt(t3) {
          var e3 = -1, n3 = null == t3 ? 0 : t3.length;
          for (this.__data__ = new yt(); ++e3 < n3; ) this.add(t3[e3]);
        }
        function mt(t3) {
          var e3 = this.__data__ = new _t2(t3);
          this.size = e3.size;
        }
        function Ct(t3, e3) {
          for (var n3 = t3.length; n3--; ) if (Rt(t3[n3][0], e3)) return n3;
          return -1;
        }
        function Et(t3) {
          return null == t3 ? void 0 === t3 ? "[object Undefined]" : "[object Null]" : J2 && J2 in Object(t3) ? (function(t4) {
            var e3 = H2.call(t4, J2), n3 = t4[J2];
            try {
              t4[J2] = void 0;
              var r3 = true;
            } catch (t5) {
            }
            var i2 = V2.call(t4);
            return r3 && (e3 ? t4[J2] = n3 : delete t4[J2]), i2;
          })(t3) : (function(t4) {
            return V2.call(t4);
          })(t3);
        }
        function At(t3) {
          return Ft(t3) && Et(t3) == o;
        }
        function Ot(t3, e3, n3, r3, i2) {
          return t3 === e3 || (null == t3 || null == e3 || !Ft(t3) && !Ft(e3) ? t3 != t3 && e3 != e3 : (function(t4, e4, n4, r4, i3, l2) {
            var d2 = Dt(t4), y2 = Dt(e4), C3 = d2 ? s : Tt(t4), E3 = y2 ? s : Tt(e4), A3 = (C3 = C3 == o ? p : C3) == p, O3 = (E3 = E3 == o ? p : E3) == p, w3 = C3 == E3;
            if (w3 && qt(t4)) {
              if (!qt(e4)) return false;
              d2 = true, A3 = false;
            }
            if (w3 && !A3) return l2 || (l2 = new mt()), d2 || zt(t4) ? wt(t4, e4, n4, r4, i3, l2) : (function(t5, e5, n5, r5, i4, o2, s2) {
              switch (n5) {
                case m:
                  if (t5.byteLength != e5.byteLength || t5.byteOffset != e5.byteOffset) return false;
                  t5 = t5.buffer, e5 = e5.buffer;
                case b:
                  return !(t5.byteLength != e5.byteLength || !o2(new Z2(t5), new Z2(e5)));
                case a:
                case u:
                case h:
                  return Rt(+t5, +e5);
                case c:
                  return t5.name == e5.name && t5.message == e5.message;
                case g:
                case _2:
                  return t5 == e5 + "";
                case f:
                  var l3 = k2;
                case v2:
                  var p2 = 1 & r5;
                  if (l3 || (l3 = D2), t5.size != e5.size && !p2) return false;
                  var d3 = s2.get(t5);
                  if (d3) return d3 == e5;
                  r5 |= 2, s2.set(t5, e5);
                  var y3 = wt(l3(t5), l3(e5), r5, i4, o2, s2);
                  return s2.delete(t5), y3;
                case "[object Symbol]":
                  if (gt) return gt.call(t5) == gt.call(e5);
              }
              return false;
            })(t4, e4, C3, n4, r4, i3, l2);
            if (!(1 & n4)) {
              var S3 = A3 && H2.call(t4, "__wrapped__"), j3 = O3 && H2.call(e4, "__wrapped__");
              if (S3 || j3) {
                var x2 = S3 ? t4.value() : t4, L3 = j3 ? e4.value() : e4;
                return l2 || (l2 = new mt()), i3(x2, L3, n4, r4, l2);
              }
            }
            return !!w3 && (l2 || (l2 = new mt()), (function(t5, e5, n5, r5, i4, o2) {
              var s2 = 1 & n5, a2 = St(t5), u2 = a2.length;
              if (u2 != St(e5).length && !s2) return false;
              for (var c2 = u2; c2--; ) {
                var l3 = a2[c2];
                if (!(s2 ? l3 in e5 : H2.call(e5, l3))) return false;
              }
              var f2 = o2.get(t5);
              if (f2 && o2.get(e5)) return f2 == e5;
              var h2 = true;
              o2.set(t5, e5), o2.set(e5, t5);
              for (var p2 = s2; ++c2 < u2; ) {
                var d3 = t5[l3 = a2[c2]], g2 = e5[l3];
                if (r5) var v3 = s2 ? r5(g2, d3, l3, e5, t5, o2) : r5(d3, g2, l3, t5, e5, o2);
                if (!(void 0 === v3 ? d3 === g2 || i4(d3, g2, n5, r5, o2) : v3)) {
                  h2 = false;
                  break;
                }
                p2 || (p2 = "constructor" == l3);
              }
              if (h2 && !p2) {
                var _3 = t5.constructor, y3 = e5.constructor;
                _3 == y3 || !("constructor" in t5) || !("constructor" in e5) || "function" == typeof _3 && _3 instanceof _3 && "function" == typeof y3 && y3 instanceof y3 || (h2 = false);
              }
              return o2.delete(t5), o2.delete(e5), h2;
            })(t4, e4, n4, r4, i3, l2));
          })(t3, e3, n3, r3, Ot, i2));
        }
        function wt(t3, e3, n3, r3, i2, o2) {
          var s2 = 1 & n3, a2 = t3.length, u2 = e3.length;
          if (a2 != u2 && !(s2 && u2 > a2)) return false;
          var c2 = o2.get(t3);
          if (c2 && o2.get(e3)) return c2 == e3;
          var l2 = -1, f2 = true, h2 = 2 & n3 ? new bt() : void 0;
          for (o2.set(t3, e3), o2.set(e3, t3); ++l2 < a2; ) {
            var p2 = t3[l2], d2 = e3[l2];
            if (r3) var g2 = s2 ? r3(d2, p2, l2, e3, t3, o2) : r3(p2, d2, l2, t3, e3, o2);
            if (void 0 !== g2) {
              if (g2) continue;
              f2 = false;
              break;
            }
            if (h2) {
              if (!R2(e3, (function(t4, e4) {
                if (s3 = e4, !h2.has(s3) && (p2 === t4 || i2(p2, t4, n3, r3, o2))) return h2.push(e4);
                var s3;
              }))) {
                f2 = false;
                break;
              }
            } else if (p2 !== d2 && !i2(p2, d2, n3, r3, o2)) {
              f2 = false;
              break;
            }
          }
          return o2.delete(t3), o2.delete(e3), f2;
        }
        function St(t3) {
          return (function(t4, e3, n3) {
            var r3 = e3(t4);
            return Dt(t4) ? r3 : (function(t5, e4) {
              for (var n4 = -1, r4 = e4.length, i2 = t5.length; ++n4 < r4; ) t5[i2 + n4] = e4[n4];
              return t5;
            })(r3, n3(t4));
          })(t3, Ut, Lt);
        }
        function jt(t3, e3) {
          var n3, r3, i2 = t3.__data__;
          return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function xt(t3, e3) {
          var n3 = (function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          })(t3, e3);
          return (function(t4) {
            return !(!Pt(t4) || (function(t5) {
              return !!$3 && $3 in t5;
            })(t4)) && (Bt(t4) ? W2 : C2).test(Nt(t4));
          })(n3) ? n3 : void 0;
        }
        vt.prototype.clear = function() {
          this.__data__ = ut ? ut(null) : {}, this.size = 0;
        }, vt.prototype.delete = function(t3) {
          var e3 = this.has(t3) && delete this.__data__[t3];
          return this.size -= e3 ? 1 : 0, e3;
        }, vt.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (ut) {
            var n3 = e3[t3];
            return n3 === r2 ? void 0 : n3;
          }
          return H2.call(e3, t3) ? e3[t3] : void 0;
        }, vt.prototype.has = function(t3) {
          var e3 = this.__data__;
          return ut ? void 0 !== e3[t3] : H2.call(e3, t3);
        }, vt.prototype.set = function(t3, e3) {
          var n3 = this.__data__;
          return this.size += this.has(t3) ? 0 : 1, n3[t3] = ut && void 0 === e3 ? r2 : e3, this;
        }, _t2.prototype.clear = function() {
          this.__data__ = [], this.size = 0;
        }, _t2.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = Ct(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : K2.call(e3, n3, 1), --this.size, 0));
        }, _t2.prototype.get = function(t3) {
          var e3 = this.__data__, n3 = Ct(e3, t3);
          return n3 < 0 ? void 0 : e3[n3][1];
        }, _t2.prototype.has = function(t3) {
          return Ct(this.__data__, t3) > -1;
        }, _t2.prototype.set = function(t3, e3) {
          var n3 = this.__data__, r3 = Ct(n3, t3);
          return r3 < 0 ? (++this.size, n3.push([t3, e3])) : n3[r3][1] = e3, this;
        }, yt.prototype.clear = function() {
          this.size = 0, this.__data__ = { hash: new vt(), map: new (it || _t2)(), string: new vt() };
        }, yt.prototype.delete = function(t3) {
          var e3 = jt(this, t3).delete(t3);
          return this.size -= e3 ? 1 : 0, e3;
        }, yt.prototype.get = function(t3) {
          return jt(this, t3).get(t3);
        }, yt.prototype.has = function(t3) {
          return jt(this, t3).has(t3);
        }, yt.prototype.set = function(t3, e3) {
          var n3 = jt(this, t3), r3 = n3.size;
          return n3.set(t3, e3), this.size += n3.size == r3 ? 0 : 1, this;
        }, bt.prototype.add = bt.prototype.push = function(t3) {
          return this.__data__.set(t3, r2), this;
        }, bt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, mt.prototype.clear = function() {
          this.__data__ = new _t2(), this.size = 0;
        }, mt.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = e3.delete(t3);
          return this.size = e3.size, n3;
        }, mt.prototype.get = function(t3) {
          return this.__data__.get(t3);
        }, mt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, mt.prototype.set = function(t3, e3) {
          var n3 = this.__data__;
          if (n3 instanceof _t2) {
            var r3 = n3.__data__;
            if (!it || r3.length < 199) return r3.push([t3, e3]), this.size = ++n3.size, this;
            n3 = this.__data__ = new yt(r3);
          }
          return n3.set(t3, e3), this.size = n3.size, this;
        };
        var Lt = tt2 ? function(t3) {
          return null == t3 ? [] : (t3 = Object(t3), (function(e3, n3) {
            for (var r3 = -1, i2 = null == e3 ? 0 : e3.length, o2 = 0, s2 = []; ++r3 < i2; ) {
              var a2 = e3[r3];
              u2 = a2, Y2.call(t3, u2) && (s2[o2++] = a2);
            }
            var u2;
            return s2;
          })(tt2(t3)));
        } : function() {
          return [];
        }, Tt = Et;
        function Mt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || E2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Nt(t3) {
          if (null != t3) {
            try {
              return G2.call(t3);
            } catch (t4) {
            }
            try {
              return t3 + "";
            } catch (t4) {
            }
          }
          return "";
        }
        function Rt(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        }
        (rt && Tt(new rt(new ArrayBuffer(1))) != m || it && Tt(new it()) != f || ot && Tt(ot.resolve()) != d || st && Tt(new st()) != v2 || at && Tt(new at()) != y) && (Tt = function(t3) {
          var e3 = Et(t3), n3 = e3 == p ? t3.constructor : void 0, r3 = n3 ? Nt(n3) : "";
          if (r3) switch (r3) {
            case ct:
              return m;
            case lt:
              return f;
            case ft:
              return d;
            case ht:
              return v2;
            case pt:
              return y;
          }
          return e3;
        });
        var kt = At(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? At : function(t3) {
          return Ft(t3) && H2.call(t3, "callee") && !Y2.call(t3, "callee");
        }, Dt = Array.isArray, qt = et || function() {
          return false;
        };
        function Bt(t3) {
          if (!Pt(t3)) return false;
          var e3 = Et(t3);
          return e3 == l || "[object GeneratorFunction]" == e3 || "[object AsyncFunction]" == e3 || "[object Proxy]" == e3;
        }
        function It(t3) {
          return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= i;
        }
        function Pt(t3) {
          var e3 = typeof t3;
          return null != t3 && ("object" == e3 || "function" == e3);
        }
        function Ft(t3) {
          return null != t3 && "object" == typeof t3;
        }
        var zt = N2 ? /* @__PURE__ */ (function(t3) {
          return function(e3) {
            return t3(e3);
          };
        })(N2) : function(t3) {
          return Ft(t3) && It(t3.length) && !!A2[Et(t3)];
        };
        function Ut(t3) {
          return null != (e3 = t3) && It(e3.length) && !Bt(e3) ? (function(t4, e4) {
            var n3 = Dt(t4), r3 = !n3 && kt(t4), i2 = !n3 && !r3 && qt(t4), o2 = !n3 && !r3 && !i2 && zt(t4), s2 = n3 || r3 || i2 || o2, a2 = s2 ? (function(t5, e5) {
              for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e5(n4);
              return r4;
            })(t4.length, String) : [], u2 = a2.length;
            for (var c2 in t4) !e4 && !H2.call(t4, c2) || s2 && ("length" == c2 || i2 && ("offset" == c2 || "parent" == c2) || o2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || Mt(c2, u2)) || a2.push(c2);
            return a2;
          })(t3) : (function(t4) {
            if (n3 = (e4 = t4) && e4.constructor, e4 !== ("function" == typeof n3 && n3.prototype || z)) return nt2(t4);
            var e4, n3, r3 = [];
            for (var i2 in Object(t4)) H2.call(t4, i2) && "constructor" != i2 && r3.push(i2);
            return r3;
          })(t3);
          var e3;
        }
        t2.exports = function(t3, e3) {
          return Ot(t3, e3);
        };
      }, 210: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i, o = r2(n2(465)), s = r2(n2(307));
        !(function(t3) {
          t3.compose = function(t4, e3, n3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
            var r3 = o.default(e3);
            for (var i2 in n3 || (r3 = Object.keys(r3).reduce((function(t5, e4) {
              return null != r3[e4] && (t5[e4] = r3[e4]), t5;
            }), {})), t4) void 0 !== t4[i2] && void 0 === e3[i2] && (r3[i2] = t4[i2]);
            return Object.keys(r3).length > 0 ? r3 : void 0;
          }, t3.diff = function(t4, e3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
            var n3 = Object.keys(t4).concat(Object.keys(e3)).reduce((function(n4, r3) {
              return s.default(t4[r3], e3[r3]) || (n4[r3] = void 0 === e3[r3] ? null : e3[r3]), n4;
            }), {});
            return Object.keys(n3).length > 0 ? n3 : void 0;
          }, t3.invert = function(t4, e3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), t4 = t4 || {};
            var n3 = Object.keys(e3).reduce((function(n4, r3) {
              return e3[r3] !== t4[r3] && void 0 !== t4[r3] && (n4[r3] = e3[r3]), n4;
            }), {});
            return Object.keys(t4).reduce((function(n4, r3) {
              return t4[r3] !== e3[r3] && void 0 === e3[r3] && (n4[r3] = null), n4;
            }), n3);
          }, t3.transform = function(t4, e3, n3) {
            if (void 0 === n3 && (n3 = false), "object" != typeof t4) return e3;
            if ("object" == typeof e3) {
              if (!n3) return e3;
              var r3 = Object.keys(e3).reduce((function(n4, r4) {
                return void 0 === t4[r4] && (n4[r4] = e3[r4]), n4;
              }), {});
              return Object.keys(r3).length > 0 ? r3 : void 0;
            }
          };
        })(i || (i = {})), e2.default = i;
      }, 895: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }, i = r2(n2(529)), o = r2(n2(465)), s = r2(n2(307)), a = r2(n2(210)), u = r2(n2(430)), c = String.fromCharCode(0), l = (function() {
          function t3(t4) {
            Array.isArray(t4) ? this.ops = t4 : null != t4 && Array.isArray(t4.ops) ? this.ops = t4.ops : this.ops = [];
          }
          return t3.prototype.insert = function(t4, e3) {
            var n3 = {};
            return "string" == typeof t4 && 0 === t4.length ? this : (n3.insert = t4, null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3));
          }, t3.prototype.delete = function(t4) {
            return t4 <= 0 ? this : this.push({ delete: t4 });
          }, t3.prototype.retain = function(t4, e3) {
            if (t4 <= 0) return this;
            var n3 = { retain: t4 };
            return null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3);
          }, t3.prototype.push = function(t4) {
            var e3 = this.ops.length, n3 = this.ops[e3 - 1];
            if (t4 = o.default(t4), "object" == typeof n3) {
              if ("number" == typeof t4.delete && "number" == typeof n3.delete) return this.ops[e3 - 1] = { delete: n3.delete + t4.delete }, this;
              if ("number" == typeof n3.delete && null != t4.insert && (e3 -= 1, "object" != typeof (n3 = this.ops[e3 - 1]))) return this.ops.unshift(t4), this;
              if (s.default(t4.attributes, n3.attributes)) {
                if ("string" == typeof t4.insert && "string" == typeof n3.insert) return this.ops[e3 - 1] = { insert: n3.insert + t4.insert }, "object" == typeof t4.attributes && (this.ops[e3 - 1].attributes = t4.attributes), this;
                if ("number" == typeof t4.retain && "number" == typeof n3.retain) return this.ops[e3 - 1] = { retain: n3.retain + t4.retain }, "object" == typeof t4.attributes && (this.ops[e3 - 1].attributes = t4.attributes), this;
              }
            }
            return e3 === this.ops.length ? this.ops.push(t4) : this.ops.splice(e3, 0, t4), this;
          }, t3.prototype.chop = function() {
            var t4 = this.ops[this.ops.length - 1];
            return t4 && t4.retain && !t4.attributes && this.ops.pop(), this;
          }, t3.prototype.filter = function(t4) {
            return this.ops.filter(t4);
          }, t3.prototype.forEach = function(t4) {
            this.ops.forEach(t4);
          }, t3.prototype.map = function(t4) {
            return this.ops.map(t4);
          }, t3.prototype.partition = function(t4) {
            var e3 = [], n3 = [];
            return this.forEach((function(r3) {
              (t4(r3) ? e3 : n3).push(r3);
            })), [e3, n3];
          }, t3.prototype.reduce = function(t4, e3) {
            return this.ops.reduce(t4, e3);
          }, t3.prototype.changeLength = function() {
            return this.reduce((function(t4, e3) {
              return e3.insert ? t4 + u.default.length(e3) : e3.delete ? t4 - e3.delete : t4;
            }), 0);
          }, t3.prototype.length = function() {
            return this.reduce((function(t4, e3) {
              return t4 + u.default.length(e3);
            }), 0);
          }, t3.prototype.slice = function(e3, n3) {
            void 0 === e3 && (e3 = 0), void 0 === n3 && (n3 = 1 / 0);
            for (var r3 = [], i2 = u.default.iterator(this.ops), o2 = 0; o2 < n3 && i2.hasNext(); ) {
              var s2 = void 0;
              o2 < e3 ? s2 = i2.next(e3 - o2) : (s2 = i2.next(n3 - o2), r3.push(s2)), o2 += u.default.length(s2);
            }
            return new t3(r3);
          }, t3.prototype.compose = function(e3) {
            var n3 = u.default.iterator(this.ops), r3 = u.default.iterator(e3.ops), i2 = [], o2 = r3.peek();
            if (null != o2 && "number" == typeof o2.retain && null == o2.attributes) {
              for (var c2 = o2.retain; "insert" === n3.peekType() && n3.peekLength() <= c2; ) c2 -= n3.peekLength(), i2.push(n3.next());
              o2.retain - c2 > 0 && r3.next(o2.retain - c2);
            }
            for (var l2 = new t3(i2); n3.hasNext() || r3.hasNext(); ) if ("insert" === r3.peekType()) l2.push(r3.next());
            else if ("delete" === n3.peekType()) l2.push(n3.next());
            else {
              var f = Math.min(n3.peekLength(), r3.peekLength()), h = n3.next(f), p = r3.next(f);
              if ("number" == typeof p.retain) {
                var d = {};
                "number" == typeof h.retain ? d.retain = f : d.insert = h.insert;
                var g = a.default.compose(h.attributes, p.attributes, "number" == typeof h.retain);
                if (g && (d.attributes = g), l2.push(d), !r3.hasNext() && s.default(l2.ops[l2.ops.length - 1], d)) {
                  var v2 = new t3(n3.rest());
                  return l2.concat(v2).chop();
                }
              } else "number" == typeof p.delete && "number" == typeof h.retain && l2.push(p);
            }
            return l2.chop();
          }, t3.prototype.concat = function(e3) {
            var n3 = new t3(this.ops.slice());
            return e3.ops.length > 0 && (n3.push(e3.ops[0]), n3.ops = n3.ops.concat(e3.ops.slice(1))), n3;
          }, t3.prototype.diff = function(e3, n3) {
            if (this.ops === e3.ops) return new t3();
            var r3 = [this, e3].map((function(t4) {
              return t4.map((function(n4) {
                if (null != n4.insert) return "string" == typeof n4.insert ? n4.insert : c;
                throw new Error("diff() called " + (t4 === e3 ? "on" : "with") + " non-document");
              })).join("");
            })), o2 = new t3(), l2 = i.default(r3[0], r3[1], n3), f = u.default.iterator(this.ops), h = u.default.iterator(e3.ops);
            return l2.forEach((function(t4) {
              for (var e4 = t4[1].length; e4 > 0; ) {
                var n4 = 0;
                switch (t4[0]) {
                  case i.default.INSERT:
                    n4 = Math.min(h.peekLength(), e4), o2.push(h.next(n4));
                    break;
                  case i.default.DELETE:
                    n4 = Math.min(e4, f.peekLength()), f.next(n4), o2.delete(n4);
                    break;
                  case i.default.EQUAL:
                    n4 = Math.min(f.peekLength(), h.peekLength(), e4);
                    var r4 = f.next(n4), u2 = h.next(n4);
                    s.default(r4.insert, u2.insert) ? o2.retain(n4, a.default.diff(r4.attributes, u2.attributes)) : o2.push(u2).delete(n4);
                }
                e4 -= n4;
              }
            })), o2.chop();
          }, t3.prototype.eachLine = function(e3, n3) {
            void 0 === n3 && (n3 = "\n");
            for (var r3 = u.default.iterator(this.ops), i2 = new t3(), o2 = 0; r3.hasNext(); ) {
              if ("insert" !== r3.peekType()) return;
              var s2 = r3.peek(), a2 = u.default.length(s2) - r3.peekLength(), c2 = "string" == typeof s2.insert ? s2.insert.indexOf(n3, a2) - a2 : -1;
              if (c2 < 0) i2.push(r3.next());
              else if (c2 > 0) i2.push(r3.next(c2));
              else {
                if (false === e3(i2, r3.next(1).attributes || {}, o2)) return;
                o2 += 1, i2 = new t3();
              }
            }
            i2.length() > 0 && e3(i2, {}, o2);
          }, t3.prototype.invert = function(e3) {
            var n3 = new t3();
            return this.reduce((function(t4, r3) {
              if (r3.insert) n3.delete(u.default.length(r3));
              else {
                if (r3.retain && null == r3.attributes) return n3.retain(r3.retain), t4 + r3.retain;
                if (r3.delete || r3.retain && r3.attributes) {
                  var i2 = r3.delete || r3.retain;
                  return e3.slice(t4, t4 + i2).forEach((function(t5) {
                    r3.delete ? n3.push(t5) : r3.retain && r3.attributes && n3.retain(u.default.length(t5), a.default.invert(r3.attributes, t5.attributes));
                  })), t4 + i2;
                }
              }
              return t4;
            }), 0), n3.chop();
          }, t3.prototype.transform = function(e3, n3) {
            if (void 0 === n3 && (n3 = false), n3 = !!n3, "number" == typeof e3) return this.transformPosition(e3, n3);
            for (var r3 = e3, i2 = u.default.iterator(this.ops), o2 = u.default.iterator(r3.ops), s2 = new t3(); i2.hasNext() || o2.hasNext(); ) if ("insert" !== i2.peekType() || !n3 && "insert" === o2.peekType()) if ("insert" === o2.peekType()) s2.push(o2.next());
            else {
              var c2 = Math.min(i2.peekLength(), o2.peekLength()), l2 = i2.next(c2), f = o2.next(c2);
              if (l2.delete) continue;
              f.delete ? s2.push(f) : s2.retain(c2, a.default.transform(l2.attributes, f.attributes, n3));
            }
            else s2.retain(u.default.length(i2.next()));
            return s2.chop();
          }, t3.prototype.transformPosition = function(t4, e3) {
            void 0 === e3 && (e3 = false), e3 = !!e3;
            for (var n3 = u.default.iterator(this.ops), r3 = 0; n3.hasNext() && r3 <= t4; ) {
              var i2 = n3.peekLength(), o2 = n3.peekType();
              n3.next(), "delete" !== o2 ? ("insert" === o2 && (r3 < t4 || !e3) && (t4 += i2), r3 += i2) : t4 -= Math.min(i2, t4 - r3);
            }
            return t4;
          }, t3.Op = u.default, t3.AttributeMap = a.default, t3;
        })();
        t2.exports = l;
      }, 977: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i = r2(n2(430)), o = (function() {
          function t3(t4) {
            this.ops = t4, this.index = 0, this.offset = 0;
          }
          return t3.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, t3.prototype.next = function(t4) {
            t4 || (t4 = 1 / 0);
            var e3 = this.ops[this.index];
            if (e3) {
              var n3 = this.offset, r3 = i.default.length(e3);
              if (t4 >= r3 - n3 ? (t4 = r3 - n3, this.index += 1, this.offset = 0) : this.offset += t4, "number" == typeof e3.delete) return { delete: t4 };
              var o2 = {};
              return e3.attributes && (o2.attributes = e3.attributes), "number" == typeof e3.retain ? o2.retain = t4 : "string" == typeof e3.insert ? o2.insert = e3.insert.substr(n3, t4) : o2.insert = e3.insert, o2;
            }
            return { retain: 1 / 0 };
          }, t3.prototype.peek = function() {
            return this.ops[this.index];
          }, t3.prototype.peekLength = function() {
            return this.ops[this.index] ? i.default.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, t3.prototype.peekType = function() {
            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
          }, t3.prototype.rest = function() {
            if (this.hasNext()) {
              if (0 === this.offset) return this.ops.slice(this.index);
              var t4 = this.offset, e3 = this.index, n3 = this.next(), r3 = this.ops.slice(this.index);
              return this.offset = t4, this.index = e3, [n3].concat(r3);
            }
            return [];
          }, t3;
        })();
        e2.default = o;
      }, 430: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i, o = r2(n2(977));
        !(function(t3) {
          t3.iterator = function(t4) {
            return new o.default(t4);
          }, t3.length = function(t4) {
            return "number" == typeof t4.delete ? t4.delete : "number" == typeof t4.retain ? t4.retain : "string" == typeof t4.insert ? t4.insert.length : 1;
          };
        })(i || (i = {})), e2.default = i;
      }, 165: function(t2, e2, n2) {
        var r2, i;
        void 0 === (i = "function" == typeof (r2 = function() {
          var t3, e3 = {};
          function n3(t4, e4, n4) {
            var r4 = t4.getClientRects();
            if (2 === r4.length) {
              var i3 = t4.getBoundingClientRect();
              return r4[e4][n4] < i3[n4];
            }
            return false;
          }
          function r3(t4) {
            if (!t4) return t4;
            if (screen.deviceXDPI === screen.logicalXDPI) return t4;
            if ("length" in t4) return Array.prototype.map.call(t4, r3);
            var e4 = screen.deviceXDPI / screen.logicalXDPI;
            return { top: t4.top / e4, bottom: t4.bottom / e4, left: t4.left / e4, right: t4.right / e4, width: t4.width / e4, height: t4.height / e4 };
          }
          function i2(t4, e4) {
            var n4, r4 = 0, i3 = 1024;
            if (i3 >= e4.length) return Array.prototype.push.apply(t4, e4);
            for (; r4 < e4.length; ) n4 = Array.prototype.push.apply(t4, Array.prototype.slice.call(e4, r4, r4 + i3)), r4 += i3;
            return n4;
          }
          return e3.isBroken = function() {
            if (void 0 === t3) {
              var e4 = document.createElement("p"), r4 = document.createElement("span"), i3 = document.createTextNode("aa"), o = document.createTextNode("aa"), s = document.createElement("img");
              s.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
              var a = document.createRange();
              if (t3 = {}, e4.appendChild(i3), e4.appendChild(r4), r4.appendChild(s), r4.appendChild(o), document.body.appendChild(e4), a.setStart(i3, 1), a.setEnd(r4, 0), t3.getClientRects = t3.getBoundingClientRect = a.getClientRects().length > 1, t3.getClientRects || (a.setEnd(o, 1), t3.getClientRects = t3.getBoundingClientRect = 2 === a.getClientRects().length), !t3.getBoundingClientRect) {
                a.setEnd(a.startContainer, a.startOffset);
                var u = a.getBoundingClientRect();
                t3.getBoundingClientRect = 0 === u.top && 0 === u.left;
              }
              if (document.body.removeChild(e4), !t3.getBoundingClientRect) {
                var c = document.createElement("p");
                c.style.width = "0px", c.style.fontSize = "20px", c.style.whiteSpace = "normal", c.style.wordBreak = "normal";
                var l = document.createTextNode("m mm");
                c.appendChild(l), document.body.appendChild(c), a.setStart(l, 1), a.setEnd(l, 2), n3(a, 1, "left") ? t3.getBoundingClientRect = true : (a.setStart(l, 1), a.setEnd(l, 3), n3(a, 0, "top") && (t3.getBoundingClientRect = true)), document.body.removeChild(c);
              }
              var f = window.ActiveXObject && new Function("/*@cc_on return @_jscript_version; @*/")();
              t3.ieZoom = !!f && f <= 10;
            }
            return t3;
          }, e3.getClientRects = function(t4) {
            var e4 = this.isBroken();
            if (e4.ieZoom) return r3(t4.getClientRects());
            if (!e4.getClientRects) return t4.getClientRects();
            var n4 = [], o = [], s = t4.endContainer, a = t4.endOffset, u = document.createRange();
            function c(t5) {
              for (var e5 = 0; t5 = t5.previousSibling; ) e5++;
              return e5;
            }
            for (; s !== t4.commonAncestorContainer; ) u.setStart(s, 0), u.setEnd(s, a), i2(o, u.getClientRects()), a = c(s), s = s.parentNode;
            return (u = t4.cloneRange()).setEnd(s, a), i2(n4, u.getClientRects()), i2(n4, o), n4;
          }, e3.getBoundingClientRect = function(t4) {
            var e4 = this.getClientRects(t4);
            if (0 === e4.length) return null;
            var n4, i3 = t4.getBoundingClientRect(), o = this.isBroken();
            if (o.ieZoom) return r3(i3);
            if (!o.getBoundingClientRect) return i3;
            if (0 === i3.width && 0 === i3.height) return e4[0];
            for (var s = 0, a = e4.length; s < a; s++) {
              var u = e4[s];
              n4 ? (n4.left = Math.min(n4.left, u.left), n4.top = Math.min(n4.top, u.top), n4.right = Math.max(n4.right, u.right), n4.bottom = Math.max(n4.bottom, u.bottom)) : n4 = { left: u.left, top: u.top, right: u.right, bottom: u.bottom };
            }
            return n4 && (n4.width = n4.right - n4.left, n4.height = n4.bottom - n4.top), n4;
          }, e3;
        }) ? r2.call(e2, n2, e2, t2) : r2) || (t2.exports = i);
      }, 33: (t2, e2, n2) => {
        "use strict";
        n2.r(e2), n2.d(e2, { default: () => A2 });
        var r2 = (function() {
          if ("undefined" != typeof Map) return Map;
          function t3(t4, e3) {
            var n3 = -1;
            return t4.some((function(t5, r3) {
              return t5[0] === e3 && (n3 = r3, true);
            })), n3;
          }
          return (function() {
            function e3() {
              this.__entries__ = [];
            }
            return Object.defineProperty(e3.prototype, "size", { get: function() {
              return this.__entries__.length;
            }, enumerable: true, configurable: true }), e3.prototype.get = function(e4) {
              var n3 = t3(this.__entries__, e4), r3 = this.__entries__[n3];
              return r3 && r3[1];
            }, e3.prototype.set = function(e4, n3) {
              var r3 = t3(this.__entries__, e4);
              ~r3 ? this.__entries__[r3][1] = n3 : this.__entries__.push([e4, n3]);
            }, e3.prototype.delete = function(e4) {
              var n3 = this.__entries__, r3 = t3(n3, e4);
              ~r3 && n3.splice(r3, 1);
            }, e3.prototype.has = function(e4) {
              return !!~t3(this.__entries__, e4);
            }, e3.prototype.clear = function() {
              this.__entries__.splice(0);
            }, e3.prototype.forEach = function(t4, e4) {
              void 0 === e4 && (e4 = null);
              for (var n3 = 0, r3 = this.__entries__; n3 < r3.length; n3++) {
                var i2 = r3[n3];
                t4.call(e4, i2[1], i2[0]);
              }
            }, e3;
          })();
        })(), i = "undefined" != typeof window && "undefined" != typeof document && window.document === document, o = void 0 !== n2.g && n2.g.Math === Math ? n2.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t3) {
          return setTimeout((function() {
            return t3(Date.now());
          }), 1e3 / 60);
        }, a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], u = "undefined" != typeof MutationObserver, c = (function() {
          function t3() {
            this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = /* @__PURE__ */ (function(t4, e3) {
              var n3 = false, r3 = false, i2 = 0;
              function o2() {
                n3 && (n3 = false, t4()), r3 && u2();
              }
              function a2() {
                s(o2);
              }
              function u2() {
                var t5 = Date.now();
                if (n3) {
                  if (t5 - i2 < 2) return;
                  r3 = true;
                } else n3 = true, r3 = false, setTimeout(a2, 20);
                i2 = t5;
              }
              return u2;
            })(this.refresh.bind(this));
          }
          return t3.prototype.addObserver = function(t4) {
            ~this.observers_.indexOf(t4) || this.observers_.push(t4), this.connected_ || this.connect_();
          }, t3.prototype.removeObserver = function(t4) {
            var e3 = this.observers_, n3 = e3.indexOf(t4);
            ~n3 && e3.splice(n3, 1), !e3.length && this.connected_ && this.disconnect_();
          }, t3.prototype.refresh = function() {
            this.updateObservers_() && this.refresh();
          }, t3.prototype.updateObservers_ = function() {
            var t4 = this.observers_.filter((function(t5) {
              return t5.gatherActive(), t5.hasActive();
            }));
            return t4.forEach((function(t5) {
              return t5.broadcastActive();
            })), t4.length > 0;
          }, t3.prototype.connect_ = function() {
            i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
          }, t3.prototype.disconnect_ = function() {
            i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
          }, t3.prototype.onTransitionEnd_ = function(t4) {
            var e3 = t4.propertyName, n3 = void 0 === e3 ? "" : e3;
            a.some((function(t5) {
              return !!~n3.indexOf(t5);
            })) && this.refresh();
          }, t3.getInstance = function() {
            return this.instance_ || (this.instance_ = new t3()), this.instance_;
          }, t3.instance_ = null, t3;
        })(), l = function(t3, e3) {
          for (var n3 = 0, r3 = Object.keys(e3); n3 < r3.length; n3++) {
            var i2 = r3[n3];
            Object.defineProperty(t3, i2, { value: e3[i2], enumerable: false, writable: false, configurable: true });
          }
          return t3;
        }, f = function(t3) {
          return t3 && t3.ownerDocument && t3.ownerDocument.defaultView || o;
        }, h = _2(0, 0, 0, 0);
        function p(t3) {
          return parseFloat(t3) || 0;
        }
        function d(t3) {
          for (var e3 = [], n3 = 1; n3 < arguments.length; n3++) e3[n3 - 1] = arguments[n3];
          return e3.reduce((function(e4, n4) {
            return e4 + p(t3["border-" + n4 + "-width"]);
          }), 0);
        }
        var g = "undefined" != typeof SVGGraphicsElement ? function(t3) {
          return t3 instanceof f(t3).SVGGraphicsElement;
        } : function(t3) {
          return t3 instanceof f(t3).SVGElement && "function" == typeof t3.getBBox;
        };
        function v2(t3) {
          return i ? g(t3) ? (function(t4) {
            var e3 = t4.getBBox();
            return _2(0, 0, e3.width, e3.height);
          })(t3) : (function(t4) {
            var e3 = t4.clientWidth, n3 = t4.clientHeight;
            if (!e3 && !n3) return h;
            var r3 = f(t4).getComputedStyle(t4), i2 = (function(t5) {
              for (var e4 = {}, n4 = 0, r4 = ["top", "right", "bottom", "left"]; n4 < r4.length; n4++) {
                var i3 = r4[n4], o3 = t5["padding-" + i3];
                e4[i3] = p(o3);
              }
              return e4;
            })(r3), o2 = i2.left + i2.right, s2 = i2.top + i2.bottom, a2 = p(r3.width), u2 = p(r3.height);
            if ("border-box" === r3.boxSizing && (Math.round(a2 + o2) !== e3 && (a2 -= d(r3, "left", "right") + o2), Math.round(u2 + s2) !== n3 && (u2 -= d(r3, "top", "bottom") + s2)), !(function(t5) {
              return t5 === f(t5).document.documentElement;
            })(t4)) {
              var c2 = Math.round(a2 + o2) - e3, l2 = Math.round(u2 + s2) - n3;
              1 !== Math.abs(c2) && (a2 -= c2), 1 !== Math.abs(l2) && (u2 -= l2);
            }
            return _2(i2.left, i2.top, a2, u2);
          })(t3) : h;
        }
        function _2(t3, e3, n3, r3) {
          return { x: t3, y: e3, width: n3, height: r3 };
        }
        var y = (function() {
          function t3(t4) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _2(0, 0, 0, 0), this.target = t4;
          }
          return t3.prototype.isActive = function() {
            var t4 = v2(this.target);
            return this.contentRect_ = t4, t4.width !== this.broadcastWidth || t4.height !== this.broadcastHeight;
          }, t3.prototype.broadcastRect = function() {
            var t4 = this.contentRect_;
            return this.broadcastWidth = t4.width, this.broadcastHeight = t4.height, t4;
          }, t3;
        })(), b = function(t3, e3) {
          var n3, r3, i2, o2, s2, a2, u2, c2 = (r3 = (n3 = e3).x, i2 = n3.y, o2 = n3.width, s2 = n3.height, a2 = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u2 = Object.create(a2.prototype), l(u2, { x: r3, y: i2, width: o2, height: s2, top: i2, right: r3 + o2, bottom: s2 + i2, left: r3 }), u2);
          l(this, { target: t3, contentRect: c2 });
        }, m = (function() {
          function t3(t4, e3, n3) {
            if (this.activeObservations_ = [], this.observations_ = new r2(), "function" != typeof t4) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t4, this.controller_ = e3, this.callbackCtx_ = n3;
          }
          return t3.prototype.observe = function(t4) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t4 instanceof f(t4).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e3 = this.observations_;
              e3.has(t4) || (e3.set(t4, new y(t4)), this.controller_.addObserver(this), this.controller_.refresh());
            }
          }, t3.prototype.unobserve = function(t4) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t4 instanceof f(t4).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e3 = this.observations_;
              e3.has(t4) && (e3.delete(t4), e3.size || this.controller_.removeObserver(this));
            }
          }, t3.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
          }, t3.prototype.gatherActive = function() {
            var t4 = this;
            this.clearActive(), this.observations_.forEach((function(e3) {
              e3.isActive() && t4.activeObservations_.push(e3);
            }));
          }, t3.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var t4 = this.callbackCtx_, e3 = this.activeObservations_.map((function(t5) {
                return new b(t5.target, t5.broadcastRect());
              }));
              this.callback_.call(t4, e3, t4), this.clearActive();
            }
          }, t3.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }, t3.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          }, t3;
        })(), C2 = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new r2(), E2 = function t3(e3) {
          if (!(this instanceof t3)) throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          var n3 = c.getInstance(), r3 = new m(e3, n3, this);
          C2.set(this, r3);
        };
        ["observe", "unobserve", "disconnect"].forEach((function(t3) {
          E2.prototype[t3] = function() {
            var e3;
            return (e3 = C2.get(this))[t3].apply(e3, arguments);
          };
        }));
        const A2 = void 0 !== o.ResizeObserver ? o.ResizeObserver : E2;
      }, 413: (t2, e2, n2) => {
        "use strict";
        n2.r(e2), n2.d(e2, { default: () => _2 });
        var r2 = n2(379), i = n2.n(r2), o = n2(795), s = n2.n(o), a = n2(569), u = n2.n(a), c = n2(565), l = n2.n(c), f = n2(216), h = n2.n(f), p = n2(589), d = n2.n(p), g = n2(582), v2 = {};
        v2.styleTagTransform = d(), v2.setAttributes = l(), v2.insert = u().bind(null, "head"), v2.domAPI = s(), v2.insertStyleElement = h(), i()(g.Z, v2);
        const _2 = g.Z && g.Z.locals ? g.Z.locals : void 0;
      }, 379: (t2) => {
        "use strict";
        var e2 = [];
        function n2(t3) {
          for (var n3 = -1, r3 = 0; r3 < e2.length; r3++) if (e2[r3].identifier === t3) {
            n3 = r3;
            break;
          }
          return n3;
        }
        function r2(t3, r3) {
          for (var o = {}, s = [], a = 0; a < t3.length; a++) {
            var u = t3[a], c = r3.base ? u[0] + r3.base : u[0], l = o[c] || 0, f = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var h = n2(f), p = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] };
            if (-1 !== h) e2[h].references++, e2[h].updater(p);
            else {
              var d = i(p, r3);
              r3.byIndex = a, e2.splice(a, 0, { identifier: f, updater: d, references: 1 });
            }
            s.push(f);
          }
          return s;
        }
        function i(t3, e3) {
          var n3 = e3.domAPI(e3);
          return n3.update(t3), function(e4) {
            if (e4) {
              if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap && e4.supports === t3.supports && e4.layer === t3.layer) return;
              n3.update(t3 = e4);
            } else n3.remove();
          };
        }
        t2.exports = function(t3, i2) {
          var o = r2(t3 = t3 || [], i2 = i2 || {});
          return function(t4) {
            t4 = t4 || [];
            for (var s = 0; s < o.length; s++) {
              var a = n2(o[s]);
              e2[a].references--;
            }
            for (var u = r2(t4, i2), c = 0; c < o.length; c++) {
              var l = n2(o[c]);
              0 === e2[l].references && (e2[l].updater(), e2.splice(l, 1));
            }
            o = u;
          };
        };
      }, 569: (t2) => {
        "use strict";
        var e2 = {};
        t2.exports = function(t3, n2) {
          var r2 = (function(t4) {
            if (void 0 === e2[t4]) {
              var n3 = document.querySelector(t4);
              if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement) try {
                n3 = n3.contentDocument.head;
              } catch (t5) {
                n3 = null;
              }
              e2[t4] = n3;
            }
            return e2[t4];
          })(t3);
          if (!r2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r2.appendChild(n2);
        };
      }, 216: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = document.createElement("style");
          return t3.setAttributes(e2, t3.attributes), t3.insert(e2, t3.options), e2;
        };
      }, 565: (t2, e2, n2) => {
        "use strict";
        t2.exports = function(t3) {
          var e3 = n2.nc;
          e3 && t3.setAttribute("nonce", e3);
        };
      }, 795: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = t3.insertStyleElement(t3);
          return { update: function(n2) {
            !(function(t4, e3, n3) {
              var r2 = "";
              n3.supports && (r2 += "@supports (".concat(n3.supports, ") {")), n3.media && (r2 += "@media ".concat(n3.media, " {"));
              var i = void 0 !== n3.layer;
              i && (r2 += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), r2 += n3.css, i && (r2 += "}"), n3.media && (r2 += "}"), n3.supports && (r2 += "}");
              var o = n3.sourceMap;
              o && "undefined" != typeof btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e3.styleTagTransform(r2, t4, e3.options);
            })(e2, t3, n2);
          }, remove: function() {
            !(function(t4) {
              if (null === t4.parentNode) return false;
              t4.parentNode.removeChild(t4);
            })(e2);
          } };
        };
      }, 589: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          if (e2.styleSheet) e2.styleSheet.cssText = t3;
          else {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(t3));
          }
        };
      }, 607: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Cursor = e2.default = void 0;
        var i = r2(n2(678));
        e2.default = i.default;
        var o = r2(n2(353));
        e2.Cursor = o.default, n2(413);
      }, 353: (t2, e2) => {
        "use strict";
        Object.defineProperty(e2, "__esModule", { value: true });
        var n2 = (function() {
          function t3(t4, e3, n3) {
            this.id = t4, this.name = e3, this.color = n3, this.toggleNearCursor = this.toggleNearCursor.bind(this), this._toggleOpenedCursor = this._toggleOpenedCursor.bind(this), this._setHoverState = this._setHoverState.bind(this);
          }
          return t3.prototype.build = function(e3) {
            var n3 = document.createElement(t3.CONTAINER_ELEMENT_TAG);
            n3.classList.add(t3.CURSOR_CLASS), n3.id = "ql-cursor-".concat(this.id), n3.innerHTML = e3.template;
            var r2 = n3.getElementsByClassName(t3.SELECTION_CLASS)[0], i = n3.getElementsByClassName(t3.CARET_CONTAINER_CLASS)[0], o = i.getElementsByClassName(t3.CARET_CLASS)[0], s = n3.getElementsByClassName(t3.FLAG_CLASS)[0];
            return s.style.backgroundColor = this.color, o.style.backgroundColor = this.color, n3.getElementsByClassName(t3.NAME_CLASS)[0].textContent = this.name, this._hideDelay = "".concat(e3.hideDelayMs, "ms"), this._hideSpeedMs = e3.hideSpeedMs, this._positionFlag = e3.positionFlag, s.style.transitionDelay = this._hideDelay, s.style.transitionDuration = "".concat(this._hideSpeedMs, "ms"), this._el = n3, this._selectionEl = r2, this._caretEl = i, this._flagEl = s, i.addEventListener("mouseover", this._setHoverState, { passive: true }), this._el;
          }, t3.prototype.show = function() {
            this._el.classList.remove(t3.HIDDEN_CLASS);
          }, t3.prototype.hide = function() {
            this._el.classList.add(t3.HIDDEN_CLASS);
          }, t3.prototype.remove = function() {
            this._el.parentNode.removeChild(this._el);
          }, t3.prototype.toggleNearCursor = function(e3, n3) {
            var r2 = this._getCoordinates(), i = r2.left, o = r2.right, s = r2.top, a = r2.bottom, u = e3 >= i && e3 <= o && n3 >= s && n3 <= a;
            return this._caretEl.classList.toggle(t3.CONTAINER_HOVER_CLASS, u), u;
          }, t3.prototype.toggleFlag = function(e3) {
            var n3 = this;
            this._caretEl.classList.toggle(t3.CONTAINER_HOVER_CLASS, e3) || (this._flagEl.classList.add(t3.NO_DELAY_CLASS), setTimeout((function() {
              return n3._flagEl.classList.remove(t3.NO_DELAY_CLASS);
            }), this._hideSpeedMs));
          }, t3.prototype.updateCaret = function(t4, e3) {
            this._caretEl.style.top = "".concat(t4.top, "px"), this._caretEl.style.left = "".concat(t4.left, "px"), this._caretEl.style.height = "".concat(t4.height, "px"), this._positionFlag ? this._positionFlag(this._flagEl, t4, e3) : this._updateCaretFlag(t4, e3);
          }, t3.prototype.updateSelection = function(t4, e3) {
            var n3 = this;
            this._clearSelection(), t4 = t4 || [], t4 = Array.from(t4), t4 = this._sanitize(t4), (t4 = this._sortByDomPosition(t4)).forEach((function(t5) {
              return n3._addSelection(t5, e3);
            }));
          }, t3.prototype._setHoverState = function() {
            document.addEventListener("mousemove", this._toggleOpenedCursor, { passive: true });
          }, t3.prototype._toggleOpenedCursor = function(e3) {
            var n3 = this.toggleNearCursor(e3.clientX, e3.clientY);
            this._caretEl.classList.toggle(t3.CONTAINER_NO_POINTER_CLASS, n3), n3 || document.removeEventListener("mousemove", this._toggleOpenedCursor);
          }, t3.prototype._getCoordinates = function() {
            return this._caretEl.getBoundingClientRect();
          }, t3.prototype._updateCaretFlag = function(e3, n3) {
            this._flagEl.style.width = "";
            var r2 = this._flagEl.getBoundingClientRect();
            this._flagEl.classList.remove(t3.FLAG_FLIPPED_CLASS), e3.left > n3.width - r2.width && this._flagEl.classList.add(t3.FLAG_FLIPPED_CLASS), this._flagEl.style.left = "".concat(e3.left, "px"), this._flagEl.style.top = "".concat(e3.top, "px"), this._flagEl.style.width = "".concat(Math.ceil(r2.width), "px");
          }, t3.prototype._clearSelection = function() {
            this._selectionEl.innerHTML = "";
          }, t3.prototype._addSelection = function(t4, e3) {
            var n3 = this._selectionBlock(t4, e3);
            this._selectionEl.appendChild(n3);
          }, t3.prototype._selectionBlock = function(e3, n3) {
            var r2 = document.createElement(t3.SELECTION_ELEMENT_TAG);
            return r2.classList.add(t3.SELECTION_BLOCK_CLASS), r2.style.top = "".concat(e3.top - n3.top, "px"), r2.style.left = "".concat(e3.left - n3.left, "px"), r2.style.width = "".concat(e3.width, "px"), r2.style.height = "".concat(e3.height, "px"), r2.style.backgroundColor = this.color, r2.style.opacity = "0.3", r2;
          }, t3.prototype._sortByDomPosition = function(t4) {
            return t4.sort((function(t5, e3) {
              return t5.top === e3.top ? t5.left - e3.left : t5.top - e3.top;
            }));
          }, t3.prototype._sanitize = function(t4) {
            var e3 = this, n3 = /* @__PURE__ */ new Set();
            return t4.filter((function(t5) {
              if (!t5.width || !t5.height) return false;
              var r2 = e3._serialize(t5);
              return !n3.has(r2) && (n3.add(r2), true);
            }));
          }, t3.prototype._serialize = function(t4) {
            return ["top:".concat(t4.top), "right:".concat(t4.right), "bottom:".concat(t4.bottom), "left:".concat(t4.left)].join(";");
          }, t3.CONTAINER_ELEMENT_TAG = "SPAN", t3.SELECTION_ELEMENT_TAG = "SPAN", t3.CURSOR_CLASS = "ql-cursor", t3.SELECTION_CLASS = "ql-cursor-selections", t3.SELECTION_BLOCK_CLASS = "ql-cursor-selection-block", t3.CARET_CLASS = "ql-cursor-caret", t3.CARET_CONTAINER_CLASS = "ql-cursor-caret-container", t3.CONTAINER_HOVER_CLASS = "hover", t3.CONTAINER_NO_POINTER_CLASS = "no-pointer", t3.FLAG_CLASS = "ql-cursor-flag", t3.FLAG_FLIPPED_CLASS = "flag-flipped", t3.NAME_CLASS = "ql-cursor-name", t3.HIDDEN_CLASS = "hidden", t3.NO_DELAY_CLASS = "no-delay", t3;
        })();
        e2.default = n2;
      }, 678: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__assign || function() {
          return r2 = Object.assign || function(t3) {
            for (var e3, n3 = 1, r3 = arguments.length; n3 < r3; n3++) for (var i2 in e3 = arguments[n3]) Object.prototype.hasOwnProperty.call(e3, i2) && (t3[i2] = e3[i2]);
            return t3;
          }, r2.apply(this, arguments);
        }, i = this && this.__createBinding || (Object.create ? function(t3, e3, n3, r3) {
          void 0 === r3 && (r3 = n3);
          var i2 = Object.getOwnPropertyDescriptor(e3, n3);
          i2 && !("get" in i2 ? !e3.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
            return e3[n3];
          } }), Object.defineProperty(t3, r3, i2);
        } : function(t3, e3, n3, r3) {
          void 0 === r3 && (r3 = n3), t3[r3] = e3[n3];
        }), o = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
          Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
        } : function(t3, e3) {
          t3.default = e3;
        }), s = this && this.__importStar || function(t3) {
          if (t3 && t3.__esModule) return t3;
          var e3 = {};
          if (null != t3) for (var n3 in t3) "default" !== n3 && Object.prototype.hasOwnProperty.call(t3, n3) && i(e3, t3, n3);
          return o(e3, t3), e3;
        }, a = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var u = a(n2(353)), c = s(n2(165)), l = a(n2(338)), f = a(n2(33)), h = n2(895), p = (function() {
          function t3(t4, e3) {
            void 0 === e3 && (e3 = {}), this._cursors = {}, this._isObserving = false, this._handleCursorTouch = this._handleCursorTouch.bind(this), this.quill = t4, this.options = this._setDefaults(e3), this._container = this.quill.addContainer(this.options.containerClass), this._boundsContainer = this.options.boundsContainer || this.quill.container, this._currentSelection = this.quill.getSelection(), this._registerSelectionChangeListeners(), this._registerTextChangeListener(), this._registerDomListeners();
          }
          return t3.prototype.createCursor = function(t4, e3, n3) {
            var r3 = this._cursors[t4];
            if (!r3) {
              r3 = new u.default(t4, e3, n3), this._cursors[t4] = r3;
              var i2 = r3.build(this.options);
              this._container.appendChild(i2);
            }
            return r3;
          }, t3.prototype.moveCursor = function(t4, e3) {
            var n3 = this._cursors[t4];
            n3 && (n3.range = e3, this._updateCursor(n3));
          }, t3.prototype.removeCursor = function(t4) {
            var e3 = this._cursors[t4];
            e3 && (e3.remove(), delete this._cursors[t4]);
          }, t3.prototype.update = function() {
            var t4 = this;
            this.cursors().forEach((function(e3) {
              return t4._updateCursor(e3);
            }));
          }, t3.prototype.clearCursors = function() {
            var t4 = this;
            this.cursors().forEach((function(e3) {
              return t4.removeCursor(e3.id);
            }));
          }, t3.prototype.toggleFlag = function(t4, e3) {
            var n3 = this._cursors[t4];
            n3 && n3.toggleFlag(e3);
          }, t3.prototype.cursors = function() {
            var t4 = this;
            return Object.keys(this._cursors).map((function(e3) {
              return t4._cursors[e3];
            }));
          }, t3.prototype._registerSelectionChangeListeners = function() {
            var t4 = this;
            this.quill.on(this.quill.constructor.events.SELECTION_CHANGE, (function(e3) {
              t4._currentSelection = e3;
            }));
          }, t3.prototype._registerTextChangeListener = function() {
            var t4 = this;
            this.quill.on(this.quill.constructor.events.TEXT_CHANGE, (function(e3) {
              return t4._handleTextChange(e3);
            }));
          }, t3.prototype._registerDomListeners = function() {
            var t4 = this, e3 = this.quill.container.getElementsByClassName("ql-editor")[0];
            e3.addEventListener("scroll", (function() {
              return t4.update();
            }), { passive: true }), e3.addEventListener("touchstart", this._handleCursorTouch, { passive: true });
          }, t3.prototype._handleCursorTouch = function(t4) {
            var e3 = this;
            this.cursors().forEach((function(n3) {
              n3.toggleNearCursor(t4.pageX, t4.pageY), setTimeout((function() {
                return n3.toggleFlag(false);
              }), e3.options.hideDelayMs);
            }));
          }, t3.prototype._registerResizeObserver = function() {
            var t4 = this;
            if (!this._isObserving) {
              var e3 = this.quill.container.getElementsByClassName("ql-editor")[0], n3 = new f.default((function(e4) {
                if (!e4[0].target.isConnected) return n3.disconnect(), void (t4._isObserving = false);
                t4.update();
              }));
              n3.observe(e3), this._isObserving = true;
            }
          }, t3.prototype._updateCursor = function(t4) {
            if (this._registerResizeObserver(), !t4.range) return t4.hide();
            var e3 = this._indexWithinQuillBounds(t4.range.index), n3 = this._indexWithinQuillBounds(t4.range.index + t4.range.length), r3 = this.quill.getLeaf(e3), i2 = this.quill.getLeaf(n3);
            if (!this._leafIsValid(r3) || !this._leafIsValid(i2)) return t4.hide();
            t4.show();
            var o2 = this._boundsContainer.getBoundingClientRect(), s2 = this.quill.getBounds(n3);
            this._isRtl(i2[0].domNode.parentElement) && (s2 = this._adjustBoundsForRtl(s2, i2)), t4.updateCaret(s2, o2);
            var a2 = this._lineRanges(t4, r3, i2).reduce((function(t5, e4) {
              return t5.concat(Array.from(c.getClientRects(e4)));
            }), []);
            t4.updateSelection(a2, o2);
          }, t3.prototype._adjustBoundsForRtl = function(t4, e3) {
            var n3 = e3[0].domNode, i2 = e3[1];
            if (!(n3 instanceof Text) || 0 === n3.data.length) return t4;
            var o2 = this._getCharacterRectAtCursor(n3, i2), s2 = this.quill.container.getBoundingClientRect(), a2 = i2 < n3.data.length ? o2.right : o2.left;
            return r2(r2({}, t4), { left: a2 - s2.left });
          }, t3.prototype._getCharacterRectAtCursor = function(t4, e3) {
            var n3 = document.createRange();
            return e3 < t4.data.length ? (n3.setStart(t4, e3), n3.setEnd(t4, e3 + 1)) : (n3.setStart(t4, e3 - 1), n3.setEnd(t4, e3)), n3.getBoundingClientRect();
          }, t3.prototype._isRtl = function(t4) {
            return !!t4 && "rtl" === window.getComputedStyle(t4).direction;
          }, t3.prototype._indexWithinQuillBounds = function(t4) {
            var e3 = this.quill.getLength(), n3 = e3 ? e3 - 1 : 0;
            return t4 = Math.max(t4, 0), Math.min(t4, n3);
          }, t3.prototype._leafIsValid = function(t4) {
            return t4 && t4[0] && t4[0].domNode && t4[1] >= 0;
          }, t3.prototype._handleTextChange = function(t4) {
            var e3 = this;
            window.setTimeout((function() {
              e3.options.transformOnTextChange && e3._transformCursors(t4), e3.options.selectionChangeSource && (e3._emitSelection(), e3.update());
            }));
          }, t3.prototype._emitSelection = function() {
            this.quill.emitter.emit(this.quill.constructor.events.SELECTION_CHANGE, this.quill.getSelection(), this._currentSelection, this.options.selectionChangeSource);
          }, t3.prototype._setDefaults = function(e3) {
            return (e3 = Object.assign({}, e3)).template || (e3.template = t3.DEFAULTS.template), e3.containerClass || (e3.containerClass = t3.DEFAULTS.containerClass), null !== e3.selectionChangeSource && (e3.selectionChangeSource || (e3.selectionChangeSource = t3.DEFAULTS.selectionChangeSource)), e3.hideDelayMs = Number.isInteger(e3.hideDelayMs) ? e3.hideDelayMs : t3.DEFAULTS.hideDelayMs, e3.hideSpeedMs = Number.isInteger(e3.hideSpeedMs) ? e3.hideSpeedMs : t3.DEFAULTS.hideSpeedMs, e3.transformOnTextChange = !!e3.transformOnTextChange, e3;
          }, t3.prototype._lineRanges = function(t4, e3, n3) {
            var r3 = this.quill.getLines(t4.range);
            return r3.reduce((function(t5, i2, o2) {
              if (!i2.children) {
                var s2 = document.createRange();
                return s2.selectNode(i2.domNode), t5.concat(s2);
              }
              var a2 = 0 === o2 ? e3 : i2.path(0).pop(), u2 = a2[0], c2 = a2[1], l2 = o2 === r3.length - 1 ? n3 : i2.path(i2.length() - 1).pop(), f2 = l2[0], h2 = l2[1], p2 = document.createRange();
              return u2.domNode.nodeType === Node.TEXT_NODE ? p2.setStart(u2.domNode, c2) : p2.setStartBefore(u2.domNode), f2.domNode.nodeType === Node.TEXT_NODE ? p2.setEnd(f2.domNode, h2) : p2.setEndAfter(f2.domNode), t5.concat(p2);
            }), []);
          }, t3.prototype._transformCursors = function(t4) {
            var e3 = this;
            t4 = new h(t4), this.cursors().filter((function(t5) {
              return t5.range;
            })).forEach((function(n3) {
              n3.range.index = t4.transformPosition(n3.range.index), e3._updateCursor(n3);
            }));
          }, t3.DEFAULTS = { template: l.default, containerClass: "ql-cursors", selectionChangeSource: "api", hideDelayMs: 3e3, hideSpeedMs: 400 }, t3;
        })();
        e2.default = p;
      }, 338: function(t2, e2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i = r2(n2(353)), o = '\n  <span class="'.concat(i.default.SELECTION_CLASS, '"></span>\n  <span class="').concat(i.default.CARET_CONTAINER_CLASS, '">\n    <span class="').concat(i.default.CARET_CLASS, '"></span>\n  </span>\n  <div class="').concat(i.default.FLAG_CLASS, '">\n    <small class="').concat(i.default.NAME_CLASS, '"></small>\n  </div>\n');
        e2.default = o;
      } }, e = {};
      function n(r2) {
        var i = e[r2];
        if (void 0 !== i) return i.exports;
        var o = e[r2] = { id: r2, loaded: false, exports: {} };
        return t[r2].call(o.exports, o, o.exports, n), o.loaded = true, o.exports;
      }
      n.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return n.d(e2, { a: e2 }), e2;
      }, n.d = (t2, e2) => {
        for (var r2 in e2) n.o(e2, r2) && !n.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
      }, n.g = (function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window) return window;
        }
      })(), n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), n.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, n.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2), n.nc = void 0;
      var r = n(607);
      return r.default;
    })()));
  }
});

// node_modules/cropperjs/dist/cropper.js
var require_cropper = __commonJS({
  "node_modules/cropperjs/dist/cropper.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Cropper = factory());
    })(exports, (function() {
      "use strict";
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            _defineProperty(e, r2, t[r2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
          });
        }
        return e;
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
      var WINDOW = IS_BROWSER ? window : {};
      var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
      var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
      var NAMESPACE = "cropper";
      var ACTION_ALL = "all";
      var ACTION_CROP = "crop";
      var ACTION_MOVE = "move";
      var ACTION_ZOOM = "zoom";
      var ACTION_EAST = "e";
      var ACTION_WEST = "w";
      var ACTION_SOUTH = "s";
      var ACTION_NORTH = "n";
      var ACTION_NORTH_EAST = "ne";
      var ACTION_NORTH_WEST = "nw";
      var ACTION_SOUTH_EAST = "se";
      var ACTION_SOUTH_WEST = "sw";
      var CLASS_CROP = "".concat(NAMESPACE, "-crop");
      var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
      var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
      var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
      var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
      var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
      var CLASS_MOVE = "".concat(NAMESPACE, "-move");
      var DATA_ACTION = "".concat(NAMESPACE, "Action");
      var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
      var DRAG_MODE_CROP = "crop";
      var DRAG_MODE_MOVE = "move";
      var DRAG_MODE_NONE = "none";
      var EVENT_CROP = "crop";
      var EVENT_CROP_END = "cropend";
      var EVENT_CROP_MOVE = "cropmove";
      var EVENT_CROP_START = "cropstart";
      var EVENT_DBLCLICK = "dblclick";
      var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
      var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
      var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
      var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
      var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
      var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
      var EVENT_READY = "ready";
      var EVENT_RESIZE = "resize";
      var EVENT_WHEEL = "wheel";
      var EVENT_ZOOM = "zoom";
      var MIME_TYPE_JPEG = "image/jpeg";
      var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
      var REGEXP_DATA_URL = /^data:/;
      var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
      var REGEXP_TAG_NAME = /^img|canvas$/i;
      var MIN_CONTAINER_WIDTH = 200;
      var MIN_CONTAINER_HEIGHT = 100;
      var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: "",
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: MIN_CONTAINER_WIDTH,
        minContainerHeight: MIN_CONTAINER_HEIGHT,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
      };
      var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
      var isNaN4 = Number.isNaN || WINDOW.isNaN;
      function isNumber(value) {
        return typeof value === "number" && !isNaN4(value);
      }
      var isPositiveNumber = function isPositiveNumber2(value) {
        return value > 0 && value < Infinity;
      };
      function isUndefined(value) {
        return typeof value === "undefined";
      }
      function isObject2(value) {
        return _typeof(value) === "object" && value !== null;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function isPlainObject(value) {
        if (!isObject2(value)) {
          return false;
        }
        try {
          var _constructor = value.constructor;
          var prototype = _constructor.prototype;
          return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
        } catch (error) {
          return false;
        }
      }
      function isFunction(value) {
        return typeof value === "function";
      }
      var slice = Array.prototype.slice;
      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      function forEach2(data, callback) {
        if (data && isFunction(callback)) {
          if (Array.isArray(data) || isNumber(data.length)) {
            toArray(data).forEach(function(value, key) {
              callback.call(data, value, key, data);
            });
          } else if (isObject2(data)) {
            Object.keys(data).forEach(function(key) {
              callback.call(data, data[key], key, data);
            });
          }
        }
        return data;
      }
      var assign2 = Object.assign || function assign3(target) {
        for (var _len = arguments.length, args2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args2[_key - 1] = arguments[_key];
        }
        if (isObject2(target) && args2.length > 0) {
          args2.forEach(function(arg) {
            if (isObject2(arg)) {
              Object.keys(arg).forEach(function(key) {
                target[key] = arg[key];
              });
            }
          });
        }
        return target;
      };
      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }
      var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
      function setStyle(element2, styles) {
        var style = element2.style;
        forEach2(styles, function(value, property) {
          if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
            value = "".concat(value, "px");
          }
          style[property] = value;
        });
      }
      function hasClass(element2, value) {
        return element2.classList ? element2.classList.contains(value) : element2.className.indexOf(value) > -1;
      }
      function addClass(element2, value) {
        if (!value) {
          return;
        }
        if (isNumber(element2.length)) {
          forEach2(element2, function(elem) {
            addClass(elem, value);
          });
          return;
        }
        if (element2.classList) {
          element2.classList.add(value);
          return;
        }
        var className = element2.className.trim();
        if (!className) {
          element2.className = value;
        } else if (className.indexOf(value) < 0) {
          element2.className = "".concat(className, " ").concat(value);
        }
      }
      function removeClass(element2, value) {
        if (!value) {
          return;
        }
        if (isNumber(element2.length)) {
          forEach2(element2, function(elem) {
            removeClass(elem, value);
          });
          return;
        }
        if (element2.classList) {
          element2.classList.remove(value);
          return;
        }
        if (element2.className.indexOf(value) >= 0) {
          element2.className = element2.className.replace(value, "");
        }
      }
      function toggleClass(element2, value, added) {
        if (!value) {
          return;
        }
        if (isNumber(element2.length)) {
          forEach2(element2, function(elem) {
            toggleClass(elem, value, added);
          });
          return;
        }
        if (added) {
          addClass(element2, value);
        } else {
          removeClass(element2, value);
        }
      }
      var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
      function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
      }
      function getData(element2, name) {
        if (isObject2(element2[name])) {
          return element2[name];
        }
        if (element2.dataset) {
          return element2.dataset[name];
        }
        return element2.getAttribute("data-".concat(toParamCase(name)));
      }
      function setData(element2, name, data) {
        if (isObject2(data)) {
          element2[name] = data;
        } else if (element2.dataset) {
          element2.dataset[name] = data;
        } else {
          element2.setAttribute("data-".concat(toParamCase(name)), data);
        }
      }
      function removeData(element2, name) {
        if (isObject2(element2[name])) {
          try {
            delete element2[name];
          } catch (error) {
            element2[name] = void 0;
          }
        } else if (element2.dataset) {
          try {
            delete element2.dataset[name];
          } catch (error) {
            element2.dataset[name] = void 0;
          }
        } else {
          element2.removeAttribute("data-".concat(toParamCase(name)));
        }
      }
      var REGEXP_SPACES = /\s\s*/;
      var onceSupported = (function() {
        var supported = false;
        if (IS_BROWSER) {
          var once = false;
          var listener = function listener2() {
          };
          var options = Object.defineProperty({}, "once", {
            get: function get() {
              supported = true;
              return once;
            },
            /**
             * This setter can fix a `TypeError` in strict mode
             * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
             * @param {boolean} value - The value to set
             */
            set: function set(value) {
              once = value;
            }
          });
          WINDOW.addEventListener("test", listener, options);
          WINDOW.removeEventListener("test", listener, options);
        }
        return supported;
      })();
      function removeListener(element2, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (!onceSupported) {
            var listeners = element2.listeners;
            if (listeners && listeners[event] && listeners[event][listener]) {
              handler = listeners[event][listener];
              delete listeners[event][listener];
              if (Object.keys(listeners[event]).length === 0) {
                delete listeners[event];
              }
              if (Object.keys(listeners).length === 0) {
                delete element2.listeners;
              }
            }
          }
          element2.removeEventListener(event, handler, options);
        });
      }
      function addListener(element2, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (options.once && !onceSupported) {
            var _element$listeners = element2.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
            _handler = function handler() {
              delete listeners[event][listener];
              element2.removeEventListener(event, _handler, options);
              for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args2[_key2] = arguments[_key2];
              }
              listener.apply(element2, args2);
            };
            if (!listeners[event]) {
              listeners[event] = {};
            }
            if (listeners[event][listener]) {
              element2.removeEventListener(event, listeners[event][listener], options);
            }
            listeners[event][listener] = _handler;
            element2.listeners = listeners;
          }
          element2.addEventListener(event, _handler, options);
        });
      }
      function dispatchEvent(element2, type, data) {
        var event;
        if (isFunction(Event) && isFunction(CustomEvent)) {
          event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
          });
        } else {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent(type, true, true, data);
        }
        return element2.dispatchEvent(event);
      }
      function getOffset(element2) {
        var box = element2.getBoundingClientRect();
        return {
          left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
          top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
      }
      var location2 = WINDOW.location;
      var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
      function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location2.protocol || parts[2] !== location2.hostname || parts[3] !== location2.port);
      }
      function addTimestamp(url) {
        var timestamp = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
        return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
      }
      function getTransforms(_ref) {
        var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
        var values = [];
        if (isNumber(translateX) && translateX !== 0) {
          values.push("translateX(".concat(translateX, "px)"));
        }
        if (isNumber(translateY) && translateY !== 0) {
          values.push("translateY(".concat(translateY, "px)"));
        }
        if (isNumber(rotate) && rotate !== 0) {
          values.push("rotate(".concat(rotate, "deg)"));
        }
        if (isNumber(scaleX) && scaleX !== 1) {
          values.push("scaleX(".concat(scaleX, ")"));
        }
        if (isNumber(scaleY) && scaleY !== 1) {
          values.push("scaleY(".concat(scaleY, ")"));
        }
        var transform = values.length ? values.join(" ") : "none";
        return {
          WebkitTransform: transform,
          msTransform: transform,
          transform
        };
      }
      function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);
        var maxRatio = 0;
        forEach2(pointers, function(pointer, pointerId) {
          delete pointers2[pointerId];
          forEach2(pointers2, function(pointer2) {
            var x1 = Math.abs(pointer.startX - pointer2.startX);
            var y1 = Math.abs(pointer.startY - pointer2.startY);
            var x2 = Math.abs(pointer.endX - pointer2.endX);
            var y2 = Math.abs(pointer.endY - pointer2.endY);
            var z1 = Math.sqrt(x1 * x1 + y1 * y1);
            var z2 = Math.sqrt(x2 * x2 + y2 * y2);
            var ratio = (z2 - z1) / z1;
            if (Math.abs(ratio) > Math.abs(maxRatio)) {
              maxRatio = ratio;
            }
          });
        });
        return maxRatio;
      }
      function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX, pageY = _ref2.pageY;
        var end = {
          endX: pageX,
          endY: pageY
        };
        return endOnly ? end : _objectSpread2({
          startX: pageX,
          startY: pageY
        }, end);
      }
      function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach2(pointers, function(_ref3) {
          var startX = _ref3.startX, startY = _ref3.startY;
          pageX += startX;
          pageY += startY;
          count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
          pageX,
          pageY
        };
      }
      function getAdjustedSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;
          if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }
        return {
          width,
          height
        };
      }
      function getRotatedSizes(_ref5) {
        var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
        degree = Math.abs(degree) % 180;
        if (degree === 90) {
          return {
            width: height,
            height: width
          };
        }
        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
          width: newHeight,
          height: newWidth
        } : {
          width: newWidth,
          height: newHeight
        };
      }
      function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var maxSizes = getAdjustedSizes({
          aspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var minSizes = getAdjustedSizes({
          aspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
        var destMaxSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params2 = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [image].concat(_toConsumableArray(params2.map(function(param) {
          return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
      }
      var fromCharCode2 = String.fromCharCode;
      function getStringFromCharCode(dataView, start, length2) {
        var str = "";
        length2 += start;
        for (var i = start; i < length2; i += 1) {
          str += fromCharCode2(dataView.getUint8(i));
        }
        return str;
      }
      var REGEXP_DATA_URL_HEAD = /^data:.*,/;
      function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach2(uint8, function(value, i) {
          uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
      }
      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while (uint8.length > 0) {
          chunks.push(fromCharCode2.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
      }
      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        try {
          var littleEndian;
          var app1Start;
          var ifdStart;
          if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
            var length2 = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length2) {
              if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                app1Start = offset;
                break;
              }
              offset += 1;
            }
          }
          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 18761;
              if (littleEndian || endianness === 19789) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                  if (firstIFDOffset >= 8) {
                    ifdStart = tiffOffset + firstIFDOffset;
                  }
                }
              }
            }
          }
          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset;
            var i;
            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;
              if (dataView.getUint16(_offset, littleEndian) === 274) {
                _offset += 8;
                orientation = dataView.getUint16(_offset, littleEndian);
                dataView.setUint16(_offset, 1, littleEndian);
                break;
              }
            }
          }
        } catch (error) {
          orientation = 1;
        }
        return orientation;
      }
      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°
          case 3:
            rotate = -180;
            break;
          // Flip vertical
          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°
          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
        return {
          rotate,
          scaleX,
          scaleY
        };
      }
      var render = {
        render: function render2() {
          this.initContainer();
          this.initCanvas();
          this.initCropBox();
          this.renderCanvas();
          if (this.cropped) {
            this.renderCropBox();
          }
        },
        initContainer: function initContainer() {
          var element2 = this.element, options = this.options, container = this.container, cropper = this.cropper;
          var minWidth = Number(options.minContainerWidth);
          var minHeight = Number(options.minContainerHeight);
          addClass(cropper, CLASS_HIDDEN);
          removeClass(element2, CLASS_HIDDEN);
          var containerData = {
            width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
            height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
          };
          this.containerData = containerData;
          setStyle(cropper, {
            width: containerData.width,
            height: containerData.height
          });
          addClass(element2, CLASS_HIDDEN);
          removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
          var containerData = this.containerData, imageData = this.imageData;
          var viewMode = this.options.viewMode;
          var rotated = Math.abs(imageData.rotate) % 180 === 90;
          var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
          var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
          var aspectRatio = naturalWidth / naturalHeight;
          var canvasWidth = containerData.width;
          var canvasHeight = containerData.height;
          if (containerData.height * aspectRatio > containerData.width) {
            if (viewMode === 3) {
              canvasWidth = containerData.height * aspectRatio;
            } else {
              canvasHeight = containerData.width / aspectRatio;
            }
          } else if (viewMode === 3) {
            canvasHeight = containerData.width / aspectRatio;
          } else {
            canvasWidth = containerData.height * aspectRatio;
          }
          var canvasData = {
            aspectRatio,
            naturalWidth,
            naturalHeight,
            width: canvasWidth,
            height: canvasHeight
          };
          this.canvasData = canvasData;
          this.limited = viewMode === 1 || viewMode === 2;
          this.limitCanvas(true, true);
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          canvasData.left = (containerData.width - canvasData.width) / 2;
          canvasData.top = (containerData.height - canvasData.height) / 2;
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          this.initialCanvasData = assign2({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var viewMode = options.viewMode;
          var aspectRatio = canvasData.aspectRatio;
          var cropped = this.cropped && cropBoxData;
          if (sizeLimited) {
            var minCanvasWidth = Number(options.minCanvasWidth) || 0;
            var minCanvasHeight = Number(options.minCanvasHeight) || 0;
            if (viewMode > 1) {
              minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
              minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
              if (viewMode === 3) {
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            } else if (viewMode > 0) {
              if (minCanvasWidth) {
                minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
              } else if (minCanvasHeight) {
                minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
              } else if (cropped) {
                minCanvasWidth = cropBoxData.width;
                minCanvasHeight = cropBoxData.height;
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            }
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: minCanvasWidth,
              height: minCanvasHeight
            });
            minCanvasWidth = _getAdjustedSizes.width;
            minCanvasHeight = _getAdjustedSizes.height;
            canvasData.minWidth = minCanvasWidth;
            canvasData.minHeight = minCanvasHeight;
            canvasData.maxWidth = Infinity;
            canvasData.maxHeight = Infinity;
          }
          if (positionLimited) {
            if (viewMode > (cropped ? 0 : 1)) {
              var newCanvasLeft = containerData.width - canvasData.width;
              var newCanvasTop = containerData.height - canvasData.height;
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
              canvasData.maxTop = Math.max(0, newCanvasTop);
              if (cropped && this.limited) {
                canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                canvasData.maxLeft = cropBoxData.left;
                canvasData.maxTop = cropBoxData.top;
                if (viewMode === 2) {
                  if (canvasData.width >= containerData.width) {
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                  }
                  if (canvasData.height >= containerData.height) {
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                  }
                }
              }
            } else {
              canvasData.minLeft = -canvasData.width;
              canvasData.minTop = -canvasData.height;
              canvasData.maxLeft = containerData.width;
              canvasData.maxTop = containerData.height;
            }
          }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          if (transformed) {
            var _getRotatedSizes = getRotatedSizes({
              width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
              height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
              degree: imageData.rotate || 0
            }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
            var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
            var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
            canvasData.left -= (width - canvasData.width) / 2;
            canvasData.top -= (height - canvasData.height) / 2;
            canvasData.width = width;
            canvasData.height = height;
            canvasData.aspectRatio = naturalWidth / naturalHeight;
            canvasData.naturalWidth = naturalWidth;
            canvasData.naturalHeight = naturalHeight;
            this.limitCanvas(true, false);
          }
          if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
            canvasData.left = canvasData.oldLeft;
          }
          if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
            canvasData.top = canvasData.oldTop;
          }
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          this.limitCanvas(false, true);
          canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
          canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          setStyle(this.canvas, assign2({
            width: canvasData.width,
            height: canvasData.height
          }, getTransforms({
            translateX: canvasData.left,
            translateY: canvasData.top
          })));
          this.renderImage(changed);
          if (this.cropped && this.limited) {
            this.limitCropBox(true, true);
          }
        },
        renderImage: function renderImage(changed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
          var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
          assign2(imageData, {
            width,
            height,
            left: (canvasData.width - width) / 2,
            top: (canvasData.height - height) / 2
          });
          setStyle(this.image, assign2({
            width: imageData.width,
            height: imageData.height
          }, getTransforms(assign2({
            translateX: imageData.left,
            translateY: imageData.top
          }, imageData))));
          if (changed) {
            this.output();
          }
        },
        initCropBox: function initCropBox() {
          var options = this.options, canvasData = this.canvasData;
          var aspectRatio = options.aspectRatio || options.initialAspectRatio;
          var autoCropArea = Number(options.autoCropArea) || 0.8;
          var cropBoxData = {
            width: canvasData.width,
            height: canvasData.height
          };
          if (aspectRatio) {
            if (canvasData.height * aspectRatio > canvasData.width) {
              cropBoxData.height = cropBoxData.width / aspectRatio;
            } else {
              cropBoxData.width = cropBoxData.height * aspectRatio;
            }
          }
          this.cropBoxData = cropBoxData;
          this.limitCropBox(true, true);
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
          cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
          cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
          cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          this.initialCropBoxData = assign2({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
          var aspectRatio = options.aspectRatio;
          if (sizeLimited) {
            var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
            var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
            var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
            var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
            minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
            minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
            if (aspectRatio) {
              if (minCropBoxWidth && minCropBoxHeight) {
                if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
              } else if (minCropBoxWidth) {
                minCropBoxHeight = minCropBoxWidth / aspectRatio;
              } else if (minCropBoxHeight) {
                minCropBoxWidth = minCropBoxHeight * aspectRatio;
              }
              if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
              } else {
                maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
              }
            }
            cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
            cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
            cropBoxData.maxWidth = maxCropBoxWidth;
            cropBoxData.maxHeight = maxCropBoxHeight;
          }
          if (positionLimited) {
            if (limited) {
              cropBoxData.minLeft = Math.max(0, canvasData.left);
              cropBoxData.minTop = Math.max(0, canvasData.top);
              cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
              cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
            } else {
              cropBoxData.minLeft = 0;
              cropBoxData.minTop = 0;
              cropBoxData.maxLeft = containerData.width - cropBoxData.width;
              cropBoxData.maxTop = containerData.height - cropBoxData.height;
            }
          }
        },
        renderCropBox: function renderCropBox() {
          var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
          if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
            cropBoxData.left = cropBoxData.oldLeft;
          }
          if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
            cropBoxData.top = cropBoxData.oldTop;
          }
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          this.limitCropBox(false, true);
          cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
          cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          if (options.movable && options.cropBoxMovable) {
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
          }
          setStyle(this.cropBox, assign2({
            width: cropBoxData.width,
            height: cropBoxData.height
          }, getTransforms({
            translateX: cropBoxData.left,
            translateY: cropBoxData.top
          })));
          if (this.cropped && this.limited) {
            this.limitCanvas(true, true);
          }
          if (!this.disabled) {
            this.output();
          }
        },
        output: function output() {
          this.preview();
          dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
      };
      var preview = {
        initPreview: function initPreview() {
          var element2 = this.element, crossOrigin = this.crossOrigin;
          var preview2 = this.options.preview;
          var url = crossOrigin ? this.crossOriginUrl : this.url;
          var alt = element2.alt || "The image to preview";
          var image = document.createElement("img");
          if (crossOrigin) {
            image.crossOrigin = crossOrigin;
          }
          image.src = url;
          image.alt = alt;
          this.viewBox.appendChild(image);
          this.viewBoxImage = image;
          if (!preview2) {
            return;
          }
          var previews = preview2;
          if (typeof preview2 === "string") {
            previews = element2.ownerDocument.querySelectorAll(preview2);
          } else if (preview2.querySelector) {
            previews = [preview2];
          }
          this.previews = previews;
          forEach2(previews, function(el) {
            var img = document.createElement("img");
            setData(el, DATA_PREVIEW, {
              width: el.offsetWidth,
              height: el.offsetHeight,
              html: el.innerHTML
            });
            if (crossOrigin) {
              img.crossOrigin = crossOrigin;
            }
            img.src = url;
            img.alt = alt;
            img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
            el.innerHTML = "";
            el.appendChild(img);
          });
        },
        resetPreview: function resetPreview() {
          forEach2(this.previews, function(element2) {
            var data = getData(element2, DATA_PREVIEW);
            setStyle(element2, {
              width: data.width,
              height: data.height
            });
            element2.innerHTML = data.html;
            removeData(element2, DATA_PREVIEW);
          });
        },
        preview: function preview2() {
          var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
          var width = imageData.width, height = imageData.height;
          var left = cropBoxData.left - canvasData.left - imageData.left;
          var top = cropBoxData.top - canvasData.top - imageData.top;
          if (!this.cropped || this.disabled) {
            return;
          }
          setStyle(this.viewBoxImage, assign2({
            width,
            height
          }, getTransforms(assign2({
            translateX: -left,
            translateY: -top
          }, imageData))));
          forEach2(this.previews, function(element2) {
            var data = getData(element2, DATA_PREVIEW);
            var originalWidth = data.width;
            var originalHeight = data.height;
            var newWidth = originalWidth;
            var newHeight = originalHeight;
            var ratio = 1;
            if (cropBoxWidth) {
              ratio = originalWidth / cropBoxWidth;
              newHeight = cropBoxHeight * ratio;
            }
            if (cropBoxHeight && newHeight > originalHeight) {
              ratio = originalHeight / cropBoxHeight;
              newWidth = cropBoxWidth * ratio;
              newHeight = originalHeight;
            }
            setStyle(element2, {
              width: newWidth,
              height: newHeight
            });
            setStyle(element2.getElementsByTagName("img")[0], assign2({
              width: width * ratio,
              height: height * ratio
            }, getTransforms(assign2({
              translateX: -left * ratio,
              translateY: -top * ratio
            }, imageData))));
          });
        }
      };
      var events = {
        bind: function bind() {
          var element2 = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            addListener(element2, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            addListener(element2, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            addListener(element2, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            addListener(element2, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            addListener(element2, EVENT_ZOOM, options.zoom);
          }
          addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
          if (options.zoomable && options.zoomOnWheel) {
            addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
          }
          addListener(element2.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
          addListener(element2.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
          if (options.responsive) {
            addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
          }
        },
        unbind: function unbind() {
          var element2 = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            removeListener(element2, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            removeListener(element2, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            removeListener(element2, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            removeListener(element2, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            removeListener(element2, EVENT_ZOOM, options.zoom);
          }
          removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
          if (options.zoomable && options.zoomOnWheel) {
            removeListener(cropper, EVENT_WHEEL, this.onWheel, {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
          }
          removeListener(element2.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
          removeListener(element2.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
          if (options.responsive) {
            removeListener(window, EVENT_RESIZE, this.onResize);
          }
        }
      };
      var handlers = {
        resize: function resize() {
          if (this.disabled) {
            return;
          }
          var options = this.options, container = this.container, containerData = this.containerData;
          var ratioX = container.offsetWidth / containerData.width;
          var ratioY = container.offsetHeight / containerData.height;
          var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
          if (ratio !== 1) {
            var canvasData;
            var cropBoxData;
            if (options.restore) {
              canvasData = this.getCanvasData();
              cropBoxData = this.getCropBoxData();
            }
            this.render();
            if (options.restore) {
              this.setCanvasData(forEach2(canvasData, function(n, i) {
                canvasData[i] = n * ratio;
              }));
              this.setCropBoxData(forEach2(cropBoxData, function(n, i) {
                cropBoxData[i] = n * ratio;
              }));
            }
          }
        },
        dblclick: function dblclick() {
          if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
            return;
          }
          this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
          var _this = this;
          var ratio = Number(this.options.wheelZoomRatio) || 0.1;
          var delta = 1;
          if (this.disabled) {
            return;
          }
          event.preventDefault();
          if (this.wheeling) {
            return;
          }
          this.wheeling = true;
          setTimeout(function() {
            _this.wheeling = false;
          }, 50);
          if (event.deltaY) {
            delta = event.deltaY > 0 ? 1 : -1;
          } else if (event.wheelDelta) {
            delta = -event.wheelDelta / 120;
          } else if (event.detail) {
            delta = event.detail > 0 ? 1 : -1;
          }
          this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
          var buttons = event.buttons, button = event.button;
          if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
          (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
            return;
          }
          var options = this.options, pointers = this.pointers;
          var action;
          if (event.changedTouches) {
            forEach2(event.changedTouches, function(touch) {
              pointers[touch.identifier] = getPointer(touch);
            });
          } else {
            pointers[event.pointerId || 0] = getPointer(event);
          }
          if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
            action = ACTION_ZOOM;
          } else {
            action = getData(event.target, DATA_ACTION);
          }
          if (!REGEXP_ACTIONS.test(action)) {
            return;
          }
          if (dispatchEvent(this.element, EVENT_CROP_START, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          event.preventDefault();
          this.action = action;
          this.cropping = false;
          if (action === ACTION_CROP) {
            this.cropping = true;
            addClass(this.dragBox, CLASS_MODAL);
          }
        },
        cropMove: function cropMove(event) {
          var action = this.action;
          if (this.disabled || !action) {
            return;
          }
          var pointers = this.pointers;
          event.preventDefault();
          if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          if (event.changedTouches) {
            forEach2(event.changedTouches, function(touch) {
              assign2(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
          } else {
            assign2(pointers[event.pointerId || 0] || {}, getPointer(event, true));
          }
          this.change(event);
        },
        cropEnd: function cropEnd(event) {
          if (this.disabled) {
            return;
          }
          var action = this.action, pointers = this.pointers;
          if (event.changedTouches) {
            forEach2(event.changedTouches, function(touch) {
              delete pointers[touch.identifier];
            });
          } else {
            delete pointers[event.pointerId || 0];
          }
          if (!action) {
            return;
          }
          event.preventDefault();
          if (!Object.keys(pointers).length) {
            this.action = "";
          }
          if (this.cropping) {
            this.cropping = false;
            toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
          }
          dispatchEvent(this.element, EVENT_CROP_END, {
            originalEvent: event,
            action
          });
        }
      };
      var change = {
        change: function change2(event) {
          var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
          var action = this.action;
          var aspectRatio = options.aspectRatio;
          var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
          var right = left + width;
          var bottom = top + height;
          var minLeft = 0;
          var minTop = 0;
          var maxWidth = containerData.width;
          var maxHeight = containerData.height;
          var renderable = true;
          var offset;
          if (!aspectRatio && event.shiftKey) {
            aspectRatio = width && height ? width / height : 1;
          }
          if (this.limited) {
            minLeft = cropBoxData.minLeft;
            minTop = cropBoxData.minTop;
            maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
            maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
          }
          var pointer = pointers[Object.keys(pointers)[0]];
          var range = {
            x: pointer.endX - pointer.startX,
            y: pointer.endY - pointer.startY
          };
          var check = function check2(side) {
            switch (side) {
              case ACTION_EAST:
                if (right + range.x > maxWidth) {
                  range.x = maxWidth - right;
                }
                break;
              case ACTION_WEST:
                if (left + range.x < minLeft) {
                  range.x = minLeft - left;
                }
                break;
              case ACTION_NORTH:
                if (top + range.y < minTop) {
                  range.y = minTop - top;
                }
                break;
              case ACTION_SOUTH:
                if (bottom + range.y > maxHeight) {
                  range.y = maxHeight - bottom;
                }
                break;
            }
          };
          switch (action) {
            // Move crop box
            case ACTION_ALL:
              left += range.x;
              top += range.y;
              break;
            // Resize crop box
            case ACTION_EAST:
              if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_EAST);
              width += range.x;
              if (width < 0) {
                action = ACTION_WEST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_NORTH:
              if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_NORTH);
              height -= range.y;
              top += range.y;
              if (height < 0) {
                action = ACTION_SOUTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_WEST:
              if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_WEST);
              width -= range.x;
              left += range.x;
              if (width < 0) {
                action = ACTION_EAST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_SOUTH:
              if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_SOUTH);
              height += range.y;
              if (height < 0) {
                action = ACTION_NORTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_NORTH_EAST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
              } else {
                check(ACTION_NORTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_NORTH_WEST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
                left += cropBoxData.width - width;
              } else {
                check(ACTION_NORTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_WEST:
              if (aspectRatio) {
                if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_WEST);
                width -= range.x;
                left += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_EAST:
              if (aspectRatio) {
                if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_EAST);
                width += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            // Move canvas
            case ACTION_MOVE:
              this.move(range.x, range.y);
              renderable = false;
              break;
            // Zoom canvas
            case ACTION_ZOOM:
              this.zoom(getMaxZoomRatio(pointers), event);
              renderable = false;
              break;
            // Create crop box
            case ACTION_CROP:
              if (!range.x || !range.y) {
                renderable = false;
                break;
              }
              offset = getOffset(this.cropper);
              left = pointer.startX - offset.left;
              top = pointer.startY - offset.top;
              width = cropBoxData.minWidth;
              height = cropBoxData.minHeight;
              if (range.x > 0) {
                action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
              } else if (range.x < 0) {
                left -= width;
                action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
              }
              if (range.y < 0) {
                top -= height;
              }
              if (!this.cropped) {
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.cropped = true;
                if (this.limited) {
                  this.limitCropBox(true, true);
                }
              }
              break;
          }
          if (renderable) {
            cropBoxData.width = width;
            cropBoxData.height = height;
            cropBoxData.left = left;
            cropBoxData.top = top;
            this.action = action;
            this.renderCropBox();
          }
          forEach2(pointers, function(p) {
            p.startX = p.endX;
            p.startY = p.endY;
          });
        }
      };
      var methods = {
        // Show the crop box manually
        crop: function crop() {
          if (this.ready && !this.cropped && !this.disabled) {
            this.cropped = true;
            this.limitCropBox(true, true);
            if (this.options.modal) {
              addClass(this.dragBox, CLASS_MODAL);
            }
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.setCropBoxData(this.initialCropBoxData);
          }
          return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
          if (this.ready && !this.disabled) {
            this.imageData = assign2({}, this.initialImageData);
            this.canvasData = assign2({}, this.initialCanvasData);
            this.cropBoxData = assign2({}, this.initialCropBoxData);
            this.renderCanvas();
            if (this.cropped) {
              this.renderCropBox();
            }
          }
          return this;
        },
        // Clear the crop box
        clear: function clear() {
          if (this.cropped && !this.disabled) {
            assign2(this.cropBoxData, {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            });
            this.cropped = false;
            this.renderCropBox();
            this.limitCanvas(true, true);
            this.renderCanvas();
            removeClass(this.dragBox, CLASS_MODAL);
            addClass(this.cropBox, CLASS_HIDDEN);
          }
          return this;
        },
        /**
         * Replace the image's src and rebuild the cropper
         * @param {string} url - The new URL.
         * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
         * @returns {Cropper} this
         */
        replace: function replace(url) {
          var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!this.disabled && url) {
            if (this.isImg) {
              this.element.src = url;
            }
            if (hasSameSize) {
              this.url = url;
              this.image.src = url;
              if (this.ready) {
                this.viewBoxImage.src = url;
                forEach2(this.previews, function(element2) {
                  element2.getElementsByTagName("img")[0].src = url;
                });
              }
            } else {
              if (this.isImg) {
                this.replaced = true;
              }
              this.options.data = null;
              this.uncreate();
              this.load(url);
            }
          }
          return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
          if (this.ready && this.disabled) {
            this.disabled = false;
            removeClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
          if (this.ready && !this.disabled) {
            this.disabled = true;
            addClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        /**
         * Destroy the cropper and remove the instance from the image
         * @returns {Cropper} this
         */
        destroy: function destroy() {
          var element2 = this.element;
          if (!element2[NAMESPACE]) {
            return this;
          }
          element2[NAMESPACE] = void 0;
          if (this.isImg && this.replaced) {
            element2.src = this.originalUrl;
          }
          this.uncreate();
          return this;
        },
        /**
         * Move the canvas with relative offsets
         * @param {number} offsetX - The relative offset distance on the x-axis.
         * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
         * @returns {Cropper} this
         */
        move: function move(offsetX) {
          var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
          var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
          return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },
        /**
         * Move the canvas to an absolute point
         * @param {number} x - The x-axis coordinate.
         * @param {number} [y=x] - The y-axis coordinate.
         * @returns {Cropper} this
         */
        moveTo: function moveTo(x) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
          var canvasData = this.canvasData;
          var changed = false;
          x = Number(x);
          y = Number(y);
          if (this.ready && !this.disabled && this.options.movable) {
            if (isNumber(x)) {
              canvasData.left = x;
              changed = true;
            }
            if (isNumber(y)) {
              canvasData.top = y;
              changed = true;
            }
            if (changed) {
              this.renderCanvas(true);
            }
          }
          return this;
        },
        /**
         * Zoom the canvas with a relative ratio
         * @param {number} ratio - The target ratio.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoom: function zoom(ratio, _originalEvent) {
          var canvasData = this.canvasData;
          ratio = Number(ratio);
          if (ratio < 0) {
            ratio = 1 / (1 - ratio);
          } else {
            ratio = 1 + ratio;
          }
          return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },
        /**
         * Zoom the canvas to an absolute ratio
         * @param {number} ratio - The target ratio.
         * @param {Object} pivot - The zoom pivot point coordinate.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
          var options = this.options, canvasData = this.canvasData;
          var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
          ratio = Number(ratio);
          if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
            var newWidth = naturalWidth * ratio;
            var newHeight = naturalHeight * ratio;
            if (dispatchEvent(this.element, EVENT_ZOOM, {
              ratio,
              oldRatio: width / naturalWidth,
              originalEvent: _originalEvent
            }) === false) {
              return this;
            }
            if (_originalEvent) {
              var pointers = this.pointers;
              var offset = getOffset(this.cropper);
              var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                pageX: _originalEvent.pageX,
                pageY: _originalEvent.pageY
              };
              canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
            } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
              canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
            } else {
              canvasData.left -= (newWidth - width) / 2;
              canvasData.top -= (newHeight - height) / 2;
            }
            canvasData.width = newWidth;
            canvasData.height = newHeight;
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Rotate the canvas with a relative degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotate: function rotate(degree) {
          return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },
        /**
         * Rotate the canvas to an absolute degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotateTo: function rotateTo(degree) {
          degree = Number(degree);
          if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
            this.imageData.rotate = degree % 360;
            this.renderCanvas(true, true);
          }
          return this;
        },
        /**
         * Scale the image on the x-axis.
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @returns {Cropper} this
         */
        scaleX: function scaleX(_scaleX) {
          var scaleY = this.imageData.scaleY;
          return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },
        /**
         * Scale the image on the y-axis.
         * @param {number} scaleY - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scaleY: function scaleY(_scaleY) {
          var scaleX = this.imageData.scaleX;
          return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },
        /**
         * Scale the image
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scale: function scale(scaleX) {
          var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
          var imageData = this.imageData;
          var transformed = false;
          scaleX = Number(scaleX);
          scaleY = Number(scaleY);
          if (this.ready && !this.disabled && this.options.scalable) {
            if (isNumber(scaleX)) {
              imageData.scaleX = scaleX;
              transformed = true;
            }
            if (isNumber(scaleY)) {
              imageData.scaleY = scaleY;
              transformed = true;
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
          }
          return this;
        },
        /**
         * Get the cropped area position and size data (base on the original image)
         * @param {boolean} [rounded=false] - Indicate if round the data values or not.
         * @returns {Object} The result cropped data.
         */
        getData: function getData2() {
          var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              x: cropBoxData.left - canvasData.left,
              y: cropBoxData.top - canvasData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
            var ratio = imageData.width / imageData.naturalWidth;
            forEach2(data, function(n, i) {
              data[i] = n / ratio;
            });
            if (rounded) {
              var bottom = Math.round(data.y + data.height);
              var right = Math.round(data.x + data.width);
              data.x = Math.round(data.x);
              data.y = Math.round(data.y);
              data.width = right - data.x;
              data.height = bottom - data.y;
            }
          } else {
            data = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
          if (options.rotatable) {
            data.rotate = imageData.rotate || 0;
          }
          if (options.scalable) {
            data.scaleX = imageData.scaleX || 1;
            data.scaleY = imageData.scaleY || 1;
          }
          return data;
        },
        /**
         * Set the cropped area position and size with new data
         * @param {Object} data - The new data.
         * @returns {Cropper} this
         */
        setData: function setData2(data) {
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
          var cropBoxData = {};
          if (this.ready && !this.disabled && isPlainObject(data)) {
            var transformed = false;
            if (options.rotatable) {
              if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                imageData.rotate = data.rotate;
                transformed = true;
              }
            }
            if (options.scalable) {
              if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                imageData.scaleX = data.scaleX;
                transformed = true;
              }
              if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                imageData.scaleY = data.scaleY;
                transformed = true;
              }
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
            var ratio = imageData.width / imageData.naturalWidth;
            if (isNumber(data.x)) {
              cropBoxData.left = data.x * ratio + canvasData.left;
            }
            if (isNumber(data.y)) {
              cropBoxData.top = data.y * ratio + canvasData.top;
            }
            if (isNumber(data.width)) {
              cropBoxData.width = data.width * ratio;
            }
            if (isNumber(data.height)) {
              cropBoxData.height = data.height * ratio;
            }
            this.setCropBoxData(cropBoxData);
          }
          return this;
        },
        /**
         * Get the container size data.
         * @returns {Object} The result container data.
         */
        getContainerData: function getContainerData() {
          return this.ready ? assign2({}, this.containerData) : {};
        },
        /**
         * Get the image position and size data.
         * @returns {Object} The result image data.
         */
        getImageData: function getImageData() {
          return this.sized ? assign2({}, this.imageData) : {};
        },
        /**
         * Get the canvas position and size data.
         * @returns {Object} The result canvas data.
         */
        getCanvasData: function getCanvasData() {
          var canvasData = this.canvasData;
          var data = {};
          if (this.ready) {
            forEach2(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
              data[n] = canvasData[n];
            });
          }
          return data;
        },
        /**
         * Set the canvas position and size with new data.
         * @param {Object} data - The new canvas data.
         * @returns {Cropper} this
         */
        setCanvasData: function setCanvasData(data) {
          var canvasData = this.canvasData;
          var aspectRatio = canvasData.aspectRatio;
          if (this.ready && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              canvasData.left = data.left;
            }
            if (isNumber(data.top)) {
              canvasData.top = data.top;
            }
            if (isNumber(data.width)) {
              canvasData.width = data.width;
              canvasData.height = data.width / aspectRatio;
            } else if (isNumber(data.height)) {
              canvasData.height = data.height;
              canvasData.width = data.height * aspectRatio;
            }
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Get the crop box position and size data.
         * @returns {Object} The result crop box data.
         */
        getCropBoxData: function getCropBoxData() {
          var cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              left: cropBoxData.left,
              top: cropBoxData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
          }
          return data || {};
        },
        /**
         * Set the crop box position and size with new data.
         * @param {Object} data - The new crop box data.
         * @returns {Cropper} this
         */
        setCropBoxData: function setCropBoxData(data) {
          var cropBoxData = this.cropBoxData;
          var aspectRatio = this.options.aspectRatio;
          var widthChanged;
          var heightChanged;
          if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              cropBoxData.left = data.left;
            }
            if (isNumber(data.top)) {
              cropBoxData.top = data.top;
            }
            if (isNumber(data.width) && data.width !== cropBoxData.width) {
              widthChanged = true;
              cropBoxData.width = data.width;
            }
            if (isNumber(data.height) && data.height !== cropBoxData.height) {
              heightChanged = true;
              cropBoxData.height = data.height;
            }
            if (aspectRatio) {
              if (widthChanged) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else if (heightChanged) {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }
            this.renderCropBox();
          }
          return this;
        },
        /**
         * Get a canvas drawn the cropped image.
         * @param {Object} [options={}] - The config options.
         * @returns {HTMLCanvasElement} - The result canvas.
         */
        getCroppedCanvas: function getCroppedCanvas() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!this.ready || !window.HTMLCanvasElement) {
            return null;
          }
          var canvasData = this.canvasData;
          var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
          if (!this.cropped) {
            return source;
          }
          var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
          var ratio = source.width / Math.floor(canvasData.naturalWidth);
          if (ratio !== 1) {
            initialX *= ratio;
            initialY *= ratio;
            initialWidth *= ratio;
            initialHeight *= ratio;
          }
          var aspectRatio = initialWidth / initialHeight;
          var maxSizes = getAdjustedSizes({
            aspectRatio,
            width: options.maxWidth || Infinity,
            height: options.maxHeight || Infinity
          });
          var minSizes = getAdjustedSizes({
            aspectRatio,
            width: options.minWidth || 0,
            height: options.minHeight || 0
          }, "cover");
          var _getAdjustedSizes = getAdjustedSizes({
            aspectRatio,
            width: options.width || (ratio !== 1 ? source.width : initialWidth),
            height: options.height || (ratio !== 1 ? source.height : initialHeight)
          }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
          width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
          height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = options.fillColor || "transparent";
          context.fillRect(0, 0, width, height);
          var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
          context.imageSmoothingEnabled = imageSmoothingEnabled;
          if (imageSmoothingQuality) {
            context.imageSmoothingQuality = imageSmoothingQuality;
          }
          var sourceWidth = source.width;
          var sourceHeight = source.height;
          var srcX = initialX;
          var srcY = initialY;
          var srcWidth;
          var srcHeight;
          var dstX;
          var dstY;
          var dstWidth;
          var dstHeight;
          if (srcX <= -initialWidth || srcX > sourceWidth) {
            srcX = 0;
            srcWidth = 0;
            dstX = 0;
            dstWidth = 0;
          } else if (srcX <= 0) {
            dstX = -srcX;
            srcX = 0;
            srcWidth = Math.min(sourceWidth, initialWidth + srcX);
            dstWidth = srcWidth;
          } else if (srcX <= sourceWidth) {
            dstX = 0;
            srcWidth = Math.min(initialWidth, sourceWidth - srcX);
            dstWidth = srcWidth;
          }
          if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
            srcY = 0;
            srcHeight = 0;
            dstY = 0;
            dstHeight = 0;
          } else if (srcY <= 0) {
            dstY = -srcY;
            srcY = 0;
            srcHeight = Math.min(sourceHeight, initialHeight + srcY);
            dstHeight = srcHeight;
          } else if (srcY <= sourceHeight) {
            dstY = 0;
            srcHeight = Math.min(initialHeight, sourceHeight - srcY);
            dstHeight = srcHeight;
          }
          var params2 = [srcX, srcY, srcWidth, srcHeight];
          if (dstWidth > 0 && dstHeight > 0) {
            var scale = width / initialWidth;
            params2.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
          }
          context.drawImage.apply(context, [source].concat(_toConsumableArray(params2.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          return canvas;
        },
        /**
         * Change the aspect ratio of the crop box.
         * @param {number} aspectRatio - The new aspect ratio.
         * @returns {Cropper} this
         */
        setAspectRatio: function setAspectRatio(aspectRatio) {
          var options = this.options;
          if (!this.disabled && !isUndefined(aspectRatio)) {
            options.aspectRatio = Math.max(0, aspectRatio) || NaN;
            if (this.ready) {
              this.initCropBox();
              if (this.cropped) {
                this.renderCropBox();
              }
            }
          }
          return this;
        },
        /**
         * Change the drag mode.
         * @param {string} mode - The new drag mode.
         * @returns {Cropper} this
         */
        setDragMode: function setDragMode(mode) {
          var options = this.options, dragBox = this.dragBox, face = this.face;
          if (this.ready && !this.disabled) {
            var croppable = mode === DRAG_MODE_CROP;
            var movable = options.movable && mode === DRAG_MODE_MOVE;
            mode = croppable || movable ? mode : DRAG_MODE_NONE;
            options.dragMode = mode;
            setData(dragBox, DATA_ACTION, mode);
            toggleClass(dragBox, CLASS_CROP, croppable);
            toggleClass(dragBox, CLASS_MOVE, movable);
            if (!options.cropBoxMovable) {
              setData(face, DATA_ACTION, mode);
              toggleClass(face, CLASS_CROP, croppable);
              toggleClass(face, CLASS_MOVE, movable);
            }
          }
          return this;
        }
      };
      var AnotherCropper = WINDOW.Cropper;
      var Cropper2 = /* @__PURE__ */ (function() {
        function Cropper3(element2) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          _classCallCheck(this, Cropper3);
          if (!element2 || !REGEXP_TAG_NAME.test(element2.tagName)) {
            throw new Error("The first argument is required and must be an <img> or <canvas> element.");
          }
          this.element = element2;
          this.options = assign2({}, DEFAULTS, isPlainObject(options) && options);
          this.cropped = false;
          this.disabled = false;
          this.pointers = {};
          this.ready = false;
          this.reloading = false;
          this.replaced = false;
          this.sized = false;
          this.sizing = false;
          this.init();
        }
        _createClass(Cropper3, [{
          key: "init",
          value: function init() {
            var element2 = this.element;
            var tagName = element2.tagName.toLowerCase();
            var url;
            if (element2[NAMESPACE]) {
              return;
            }
            element2[NAMESPACE] = this;
            if (tagName === "img") {
              this.isImg = true;
              url = element2.getAttribute("src") || "";
              this.originalUrl = url;
              if (!url) {
                return;
              }
              url = element2.src;
            } else if (tagName === "canvas" && window.HTMLCanvasElement) {
              url = element2.toDataURL();
            }
            this.load(url);
          }
        }, {
          key: "load",
          value: function load(url) {
            var _this = this;
            if (!url) {
              return;
            }
            this.url = url;
            this.imageData = {};
            var element2 = this.element, options = this.options;
            if (!options.rotatable && !options.scalable) {
              options.checkOrientation = false;
            }
            if (!options.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            }
            if (REGEXP_DATA_URL.test(url)) {
              if (REGEXP_DATA_URL_JPEG.test(url)) {
                this.read(dataURLToArrayBuffer(url));
              } else {
                this.clone();
              }
              return;
            }
            var xhr = new XMLHttpRequest();
            var clone = this.clone.bind(this);
            this.reloading = true;
            this.xhr = xhr;
            xhr.onabort = clone;
            xhr.onerror = clone;
            xhr.ontimeout = clone;
            xhr.onprogress = function() {
              if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
                xhr.abort();
              }
            };
            xhr.onload = function() {
              _this.read(xhr.response);
            };
            xhr.onloadend = function() {
              _this.reloading = false;
              _this.xhr = null;
            };
            if (options.checkCrossOrigin && isCrossOriginURL(url) && element2.crossOrigin) {
              url = addTimestamp(url);
            }
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.withCredentials = element2.crossOrigin === "use-credentials";
            xhr.send();
          }
        }, {
          key: "read",
          value: function read(arrayBuffer) {
            var options = this.options, imageData = this.imageData;
            var orientation = resetAndGetOrientation(arrayBuffer);
            var rotate = 0;
            var scaleX = 1;
            var scaleY = 1;
            if (orientation > 1) {
              this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
              var _parseOrientation = parseOrientation(orientation);
              rotate = _parseOrientation.rotate;
              scaleX = _parseOrientation.scaleX;
              scaleY = _parseOrientation.scaleY;
            }
            if (options.rotatable) {
              imageData.rotate = rotate;
            }
            if (options.scalable) {
              imageData.scaleX = scaleX;
              imageData.scaleY = scaleY;
            }
            this.clone();
          }
        }, {
          key: "clone",
          value: function clone() {
            var element2 = this.element, url = this.url;
            var crossOrigin = element2.crossOrigin;
            var crossOriginUrl = url;
            if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
              if (!crossOrigin) {
                crossOrigin = "anonymous";
              }
              crossOriginUrl = addTimestamp(url);
            }
            this.crossOrigin = crossOrigin;
            this.crossOriginUrl = crossOriginUrl;
            var image = document.createElement("img");
            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }
            image.src = crossOriginUrl || url;
            image.alt = element2.alt || "The image to crop";
            this.image = image;
            image.onload = this.start.bind(this);
            image.onerror = this.stop.bind(this);
            addClass(image, CLASS_HIDE);
            element2.parentNode.insertBefore(image, element2.nextSibling);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            this.sizing = true;
            var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
            var done = function done2(naturalWidth, naturalHeight) {
              assign2(_this2.imageData, {
                naturalWidth,
                naturalHeight,
                aspectRatio: naturalWidth / naturalHeight
              });
              _this2.initialImageData = assign2({}, _this2.imageData);
              _this2.sizing = false;
              _this2.sized = true;
              _this2.build();
            };
            if (image.naturalWidth && !isIOSWebKit) {
              done(image.naturalWidth, image.naturalHeight);
              return;
            }
            var sizingImage = document.createElement("img");
            var body = document.body || document.documentElement;
            this.sizingImage = sizingImage;
            sizingImage.onload = function() {
              done(sizingImage.width, sizingImage.height);
              if (!isIOSWebKit) {
                body.removeChild(sizingImage);
              }
            };
            sizingImage.src = image.src;
            if (!isIOSWebKit) {
              sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
              body.appendChild(sizingImage);
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            image.parentNode.removeChild(image);
            this.image = null;
          }
        }, {
          key: "build",
          value: function build() {
            if (!this.sized || this.ready) {
              return;
            }
            var element2 = this.element, options = this.options, image = this.image;
            var container = element2.parentNode;
            var template = document.createElement("div");
            template.innerHTML = TEMPLATE;
            var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
            var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
            var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
            var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
            var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
            this.container = container;
            this.cropper = cropper;
            this.canvas = canvas;
            this.dragBox = dragBox;
            this.cropBox = cropBox;
            this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
            this.face = face;
            canvas.appendChild(image);
            addClass(element2, CLASS_HIDDEN);
            container.insertBefore(cropper, element2.nextSibling);
            removeClass(image, CLASS_HIDE);
            this.initPreview();
            this.bind();
            options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
            options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
            options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
            addClass(cropBox, CLASS_HIDDEN);
            if (!options.guides) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
            }
            if (!options.center) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
            }
            if (options.background) {
              addClass(cropper, "".concat(NAMESPACE, "-bg"));
            }
            if (!options.highlight) {
              addClass(face, CLASS_INVISIBLE);
            }
            if (options.cropBoxMovable) {
              addClass(face, CLASS_MOVE);
              setData(face, DATA_ACTION, ACTION_ALL);
            }
            if (!options.cropBoxResizable) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
            }
            this.render();
            this.ready = true;
            this.setDragMode(options.dragMode);
            if (options.autoCrop) {
              this.crop();
            }
            this.setData(options.data);
            if (isFunction(options.ready)) {
              addListener(element2, EVENT_READY, options.ready, {
                once: true
              });
            }
            dispatchEvent(element2, EVENT_READY);
          }
        }, {
          key: "unbuild",
          value: function unbuild() {
            if (!this.ready) {
              return;
            }
            this.ready = false;
            this.unbind();
            this.resetPreview();
            var parentNode = this.cropper.parentNode;
            if (parentNode) {
              parentNode.removeChild(this.cropper);
            }
            removeClass(this.element, CLASS_HIDDEN);
          }
        }, {
          key: "uncreate",
          value: function uncreate() {
            if (this.ready) {
              this.unbuild();
              this.ready = false;
              this.cropped = false;
            } else if (this.sizing) {
              this.sizingImage.onload = null;
              this.sizing = false;
              this.sized = false;
            } else if (this.reloading) {
              this.xhr.onabort = null;
              this.xhr.abort();
            } else if (this.image) {
              this.stop();
            }
          }
          /**
           * Get the no conflict cropper class.
           * @returns {Cropper} The cropper class.
           */
        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Cropper = AnotherCropper;
            return Cropper3;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */
        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            assign2(DEFAULTS, isPlainObject(options) && options);
          }
        }]);
        return Cropper3;
      })();
      assign2(Cropper2.prototype, render, preview, events, handlers, change, methods);
      return Cropper2;
    }));
  }
});

// src/utils.js
function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function timeAgo(iso) {
  if (!iso) return "just now";
  const diff = (Date.now() - new Date(iso)) / 1e3;
  if (diff < 60) return "just now";
  if (diff < 3600) return Math.floor(diff / 60) + "m ago";
  if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
  return Math.floor(diff / 86400) + "d ago";
}

// src/comments.js
function setupComments() {
  window.toggleCommentsSidebar = function() {
    const sidebar = document.getElementById("comments-sidebar");
    if (sidebar) sidebar.classList.toggle("hidden");
  };
  window.startAddComment = function() {
    if (window.myRole === "viewer") return;
    const range = window.quill?.getSelection();
    if (!range || range.length === 0) {
      window.showToast("Select some text first to add a comment.");
      return;
    }
    window.savedRange = range;
    window.commentText.value = "";
    window.commentModal.classList.remove("hidden");
    setTimeout(() => window.commentText.focus(), 50);
  };
  window.cancelComment = function() {
    window.commentModal.classList.add("hidden");
    window.savedRange = null;
  };
  window.submitComment = function() {
    const text2 = window.commentText.value.trim();
    if (!text2) return;
    let selectedText = "";
    if (window.savedRange && window.quill) {
      selectedText = window.quill.getText(window.savedRange.index, window.savedRange.length);
      window.quill.formatText(window.savedRange.index, window.savedRange.length, "background", "#fef3c7");
    }
    window.comments.push({
      id: "c" + Date.now(),
      author: window.myName,
      authorColor: window.myColor,
      text: text2,
      selectedText: selectedText || null,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      resolved: false,
      replies: []
    });
    window.syncState();
    window.renderComments?.();
    window.commentModal.classList.add("hidden");
    window.savedRange = null;
  };
  window.renderComments = function() {
    const active = window.comments.filter((c) => !c.resolved);
    const resolved = window.comments.filter((c) => c.resolved);
    window.commentCount.textContent = active.length;
    if ([...active, ...resolved].length === 0) {
      window.commentsList.innerHTML = `
      <div class="no-comments">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <p>No comments yet.<br/>Select text and click Comment.</p>
      </div>`;
      return;
    }
    window.commentsList.innerHTML = "";
    [...active, ...resolved].forEach((c) => {
      const card = document.createElement("div");
      card.className = "comment-card" + (c.resolved ? " resolved" : "");
      card.id = "comment-card-" + c.id;
      const canAct = window.myRole !== "viewer";
      card.innerHTML = `
      <div class="comment-author">
        <span class="comment-dot" style="background:${c.authorColor || "#d1d5db"}"></span>
        <span class="comment-name">${escapeHtml(c.author)}</span>
        <span class="comment-time">${timeAgo(c.timestamp)}</span>
      </div>
      ${c.selectedText ? `<div class="comment-quoted">"${escapeHtml(c.selectedText)}"</div>` : ""}
      <div class="comment-text">${escapeHtml(c.text)}</div>
      ${c.replies.length > 0 ? `<div class="comment-replies">${c.replies.map((r) => `
        <div class="reply-item">
          <span class="reply-dot" style="background:${r.authorColor || "#d1d5db"}"></span>
          <div class="reply-content"><span class="reply-author">${escapeHtml(r.author)}: </span>${escapeHtml(r.text)}</div>
        </div>`).join("")}</div>` : ""}
      ${canAct && !c.resolved ? `
      <div class="reply-input-row">
        <input class="reply-input" placeholder="Reply\u2026 (Enter to send)" id="reply-${c.id}" onkeydown="if(event.key==='Enter') sendReply('${c.id}')" />
        <button class="reply-send-btn" onclick="sendReply('${c.id}')">\u2192</button>
      </div>
      <div class="comment-actions">
        <button class="comment-action-btn" onclick="resolveComment('${c.id}')">\u2713 Resolve</button>
      </div>` : !c.resolved ? "" : '<div class="comment-actions"><span class="comment-action-btn">\u2713 Resolved</span></div>'}
    `;
      window.commentsList.appendChild(card);
    });
  };
  window.sendReply = function(commentId) {
    const input = document.getElementById("reply-" + commentId);
    if (!input) return;
    const text2 = input.value.trim();
    if (!text2) return;
    input.value = "";
    const c = window.comments.find((x) => x.id === commentId);
    if (c) {
      c.replies.push({ author: window.myName, authorColor: window.myColor, text: text2, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
      window.syncState();
      window.renderComments?.();
    }
  };
  window.resolveComment = function(commentId) {
    const c = window.comments.find((x) => x.id === commentId);
    if (c) {
      c.resolved = true;
      window.syncState();
      window.renderComments?.();
    }
  };
}

// src/history.js
function setupHistory() {
  document.getElementById("history-btn")?.addEventListener("click", async () => {
    if (window.myRole === "viewer") {
      window.showToast("Only editors can view full history.");
      return;
    }
    window.historyPanel.classList.remove("hidden");
    window.historyOverlay.classList.remove("hidden");
    window.historyList.innerHTML = '<div class="no-comments"><p>Loading history...</p></div>';
    try {
      const res = await fetch(`/api/history/${window.myId}?docId=${window.docId}`);
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Network error");
      }
      const data = await res.json();
      if (data && data.versions) {
        renderHistoryGrid(data.versions);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (e) {
      console.error("[History] Fetch failed:", e);
      window.historyList.innerHTML = `<div class="no-comments" style="color:#ef4444;"><p>Failed to load history:<br/>${e.message}</p></div>`;
    }
  });
  window.closeHistory = function() {
    window.historyPanel.classList.add("hidden");
    window.historyOverlay.classList.add("hidden");
  };
  window.cancelSaveVersion = function() {
    window.saveVersionModal.classList.add("hidden");
  };
  window.confirmSaveVersion = function() {
    const name = window.versionNameInput.value.trim();
    window.versionHistory.unshift({
      id: "v" + Date.now(),
      name: name || "Unnamed Version",
      content: window.quill.root.innerHTML,
      author: window.myName,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    window.syncState();
    window.renderHistory?.();
    window.saveVersionModal.classList.add("hidden");
    window.showToast(`\u{1F4BE} Version "${name || "Unnamed Version"}" saved`);
  };
  window.versionNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") window.confirmSaveVersion();
    if (e.key === "Escape") window.cancelSaveVersion();
  });
  function renderHistoryGrid(apiVersions) {
    if (!apiVersions || apiVersions.length === 0) {
      window.historyList.innerHTML = '<div class="no-comments"><p>No saved versions yet.</p></div>';
      return;
    }
    window.historyList.innerHTML = "";
    const total = apiVersions.length;
    apiVersions.forEach((v2, index) => {
      const vNumber = total - index;
      const item = document.createElement("div");
      item.className = "version-item";
      item.innerHTML = `
      <div class="version-name" style="display:flex; justify-content:space-between; align-items:center; width: 100%;">
        <span>Version v${vNumber}</span>
        ${window.myRole === "owner" || window.myRole === "editor" ? '<button class="btn-primary-sm restore-btn" style="padding: 4px 10px; font-size: 11px; z-index: 10;">Restore</button>' : ""}
      </div>
      <div class="version-meta">${timeAgo(v2.created_at)}</div>
    `;
      const restoreBtn = item.querySelector(".restore-btn");
      if (restoreBtn) {
        restoreBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (confirm(`Restore Version v${vNumber}? Current content will be replaced.`)) {
            const delta = window.quill.clipboard.convert({ html: v2.content });
            window.quill.setContents(delta);
            window.showToast(`\u{1F504} Restored Version v${vNumber}`);
            window.debounceDbSave();
            window.closeHistory();
          }
        });
      }
      window.historyList.appendChild(item);
    });
  }
  window.renderHistory = function() {
  };
}

// src/ai-chat.js
function setupAiChat() {
  const aiChatPanel = document.getElementById("ai-chat-panel");
  const aiChatOverlay = document.getElementById("ai-chat-overlay");
  const aiChatMessages = document.getElementById("ai-chat-messages");
  const aiChatInput = document.getElementById("ai-chat-input");
  document.getElementById("ai-chat-btn")?.addEventListener("click", () => {
    const isOpen = aiChatPanel.classList.contains("open");
    if (isOpen) {
      window.closeAIChat();
    } else {
      aiChatPanel.classList.add("open");
      aiChatOverlay.classList.remove("hidden");
      document.getElementById("ai-chat-btn")?.classList.add("active");
      aiChatInput?.focus();
    }
  });
  window.closeAIChat = function() {
    aiChatPanel.classList.remove("open");
    aiChatOverlay.classList.add("hidden");
    document.getElementById("ai-chat-btn")?.classList.remove("active");
  };
  window.sendChatMessage = async function() {
    const input = aiChatInput;
    const text2 = input.value.trim();
    if (!text2) return;
    input.value = "";
    input.style.height = "auto";
    const includeCtx = document.getElementById("include-doc-ctx")?.checked;
    let prompt2 = text2;
    let selectedTextObj = "";
    if (window.quill && window.aiLastSelection && window.aiLastSelection.length > 0) {
      selectedTextObj = window.quill.getText(window.aiLastSelection.index, window.aiLastSelection.length);
    }
    if (includeCtx && window.quill) {
      prompt2 = `Document Content:

${window.quill.getText()}

---

`;
      if (selectedTextObj) {
        prompt2 += `User's Currently Selected Text:
"${selectedTextObj}"

---

`;
      }
      prompt2 += `User Request: ${text2}`;
    }
    aiChatMessages.innerHTML += `
      <div class="chat-bubble-user"><div class="chat-bubble-content">${escapeHtml(text2)}</div><div class="chat-time">Now</div></div>
      <div class="chat-bubble-ai typing-indicator" id="ai-typing"><div class="chat-bubble-content"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    try {
      const resp = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "chat", text: prompt2 })
      });
      const data = await resp.json();
      document.getElementById("ai-typing")?.remove();
      if (data.reply || data.action) {
        aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content">${escapeHtml(data.reply || "Done.")}</div><div class="chat-time">Now</div></div>`;
        if (data.action && data.action !== "none" && data.content && window.quill && window.myRole !== "viewer") {
          window.pendingAiAction = {
            action: data.action,
            content: data.content,
            selection: window.aiLastSelection ? { ...window.aiLastSelection } : null
          };
          const actionId = "ai-action-" + Date.now();
          window.pendingAiAction.id = actionId;
          aiChatMessages.innerHTML += `
            <div class="chat-bubble-ai" id="${actionId}" style="opacity:0.95; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08);">
              <div class="chat-bubble-content" style="font-size:13px; color:#e5e7eb;">
                <strong>Proposed Change:</strong><br/>
                <pre style="white-space: pre-wrap; font-family:var(--font-mono); font-size:11px; background:rgba(0,0,0,0.3); padding:6px; border-radius:4px; max-height:150px; overflow-y:auto; margin-top:6px; margin-bottom:8px; color:#9ca3af;">${escapeHtml(data.content)}</pre>
                <div style="display:flex; gap:8px;">
                  <button onclick="confirmAiAction('${actionId}')" class="btn-primary-sm" style="flex:1;">Paste</button>
                  <button onclick="cancelAiAction('${actionId}')" class="btn-ghost-sm" style="flex:1;">Cancel</button>
                </div>
              </div>
            </div>`;
        }
      } else if (data.error) {
        aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Error: ${escapeHtml(data.error || "The AI service returned an error.")}</div></div>`;
      }
    } catch (err) {
      document.getElementById("ai-typing")?.remove();
      aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Network error: ${escapeHtml(err.message)}</div></div>`;
    }
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  };
  window.sendQuickPrompt = function(type) {
    const selectedText = window.quill ? window.quill.getText(window.quill.getSelection()?.index || 0, window.quill.getSelection()?.length || 0) : "";
    if (type === "summarize") {
      aiChatInput.value = selectedText ? 'Summarize:\n\n"' + selectedText + '"' : "Summarize this document.";
    } else if (type === "polish") {
      aiChatInput.value = selectedText ? 'Polish and improve this text:\n\n"' + selectedText + '"' : "Please polish and improve the writing style of this document.";
    } else if (type === "translate") {
      const lang = prompt("Translate to what language?", "Spanish");
      if (!lang) return;
      aiChatInput.value = selectedText ? "Translate to " + lang + ':\n\n"' + selectedText + '"' : "Translate this document to " + lang + ".";
    }
    window.sendChatMessage();
  };
  aiChatInput?.addEventListener("keydown", (e) => {
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      window.sendChatMessage();
    }
  });
  aiChatInput?.addEventListener("input", () => {
    aiChatInput.style.height = "auto";
    aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + "px";
  });
  window.confirmAiAction = function(actionId) {
    if (!window.pendingAiAction || window.pendingAiAction.id !== actionId) return;
    const { action, content, selection } = window.pendingAiAction;
    const quill2 = window.quill;
    if (!quill2) return;
    if (action === "replace") {
      if (selection && selection.length > 0) {
        quill2.deleteText(selection.index, selection.length);
        quill2.insertText(selection.index, content);
      } else {
        quill2.setText("");
        quill2.insertText(0, content);
      }
    } else if (action === "insert") {
      const idx = selection ? selection.index + selection.length : quill2.getLength();
      quill2.insertText(idx, content);
    }
    window.pendingAiAction = null;
    document.getElementById(actionId)?.remove();
    window.debounceDbSave?.();
    window.showToast("\u{1FA84} Applied AI change to document!", "#10b981");
  };
  window.cancelAiAction = function(actionId) {
    window.pendingAiAction = null;
    document.getElementById(actionId)?.remove();
  };
  const SpeechRecognition2 = window.SpeechRecognition || window.webkitSpeechRecognition;
  const aiMicBtn = document.getElementById("ai-mic-btn");
  if (SpeechRecognition2 && aiMicBtn) {
    let isAiDictating = false;
    const aiRec = new SpeechRecognition2();
    aiRec.continuous = false;
    aiRec.interimResults = false;
    aiRec.onstart = () => {
      isAiDictating = true;
      aiMicBtn.style.color = "#ef4444";
      aiMicBtn.classList.add("pulse");
    };
    aiRec.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      const currentVal = aiChatInput.value;
      aiChatInput.value = currentVal ? currentVal + " " + speech : speech;
      aiChatInput.style.height = "auto";
      aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + "px";
    };
    aiRec.onend = () => {
      isAiDictating = false;
      aiMicBtn.style.color = "#9ca3af";
      aiMicBtn.classList.remove("pulse");
    };
    aiMicBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (isAiDictating) aiRec.stop();
      else aiRec.start();
    });
  } else if (aiMicBtn) {
    aiMicBtn.style.display = "none";
  }
}

// src/sharing.js
function setupSharing() {
  window.openShareModal = function() {
    const canInvite = window.myRole === "owner" || window.myRole === "editor";
    const roleGroup = document.querySelector(".share-role-group");
    const genBtn = document.getElementById("generate-link-btn");
    const desc = document.querySelector("#share-modal p");
    if (roleGroup) roleGroup.style.display = canInvite ? "" : "none";
    if (genBtn) genBtn.style.display = canInvite ? "" : "none";
    if (desc) desc.textContent = canInvite ? "Choose a permission level and copy the link to share." : "Copy this link to share the document with others.";
    document.getElementById("share-modal").classList.remove("hidden");
    window.generateShareLink();
  };
  window.closeShareModal = function() {
    document.getElementById("share-modal").classList.add("hidden");
  };
  window.generateShareLink = function() {
    const canInvite = window.myRole === "owner" || window.myRole === "editor";
    let link;
    if (canInvite) {
      const roleOpt = document.querySelector('input[name="share-role"]:checked');
      const role = roleOpt ? roleOpt.value : "viewer";
      link = window.location.origin + "/editor.html?doc=" + window.docId + "&invite=" + btoa(role);
    } else {
      link = window.location.origin + "/editor.html?doc=" + window.docId;
    }
    document.getElementById("share-link-input").value = link;
  };
  window.copyShareLink = function() {
    const linkInput = document.getElementById("share-link-input");
    navigator.clipboard.writeText(linkInput.value).catch(() => {
      linkInput.select();
      document.execCommand("copy");
    });
    window.showToast("\u{1F517} Link copied to clipboard!", "#10b981");
  };
  document.querySelectorAll('input[name="share-role"]').forEach((el) => {
    el.addEventListener("change", window.generateShareLink);
  });
  document.getElementById("share-btn")?.addEventListener("click", window.openShareModal);
}

// src/theme.js
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// src/export.js
function toggleExportMenu() {
  if (typeof window.myName !== "undefined" && window.myName.startsWith("Guest")) {
    alert("Please sign in to export documents.");
    window.location.href = "/auth.html";
    return;
  }
  const menu = document.getElementById("export-dropdown");
  menu.classList.toggle("hidden");
  if (!menu.classList.contains("hidden")) {
    setTimeout(() => {
      const handler = (e) => {
        if (!menu.contains(e.target) && !e.target.closest("#export-btn")) {
          menu.classList.add("hidden");
          document.removeEventListener("click", handler);
        }
      };
      document.addEventListener("click", handler);
    }, 0);
  }
}
window.exportDocument = function(format) {
  document.getElementById("export-dropdown").classList.add("hidden");
  const title = window.docTitleInput.value.trim() || "Untitled Document";
  if (format === "html") {
    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>${escapeHtml(title)}</title>
<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}</style>
</head>
<body>
<h1>${escapeHtml(title)}</h1>
${window.quill.root.innerHTML}
</body></html>`;
    downloadFile(title + ".html", html, "text/html");
    window.showToast("\u{1F4C4} Exported as HTML", "#10b981");
  } else if (format === "txt") {
    downloadFile(title + ".txt", window.quill.getText(), "text/plain");
    window.showToast("\u{1F4C4} Exported as TXT", "#10b981");
  } else if (format === "pdf") {
    const printW = window.open("", "_blank");
    printW.document.write(`<!DOCTYPE html><html><head><title>${escapeHtml(title)}</title>
<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}@media print{body{margin:0;padding:20px;}}</style>
</head><body><h1>${escapeHtml(title)}</h1>${window.quill.root.innerHTML}</body></html>`);
    printW.document.close();
    printW.focus();
    setTimeout(() => {
      printW.print();
      printW.close();
    }, 400);
    window.showToast("\u{1F5A8}\uFE0F Print/PDF dialog opened", "#10b981");
  }
};
function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType + ";charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// node_modules/lib0/map.js
var create = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create();
  m.forEach((v2, k2) => {
    r.set(k2, v2);
  });
  return r;
};
var setIfUndefined = (map3, key, createT) => {
  let set = map3.get(key);
  if (set === void 0) {
    map3.set(key, set = createT());
  }
  return set;
};
var map = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
var any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};

// node_modules/lib0/set.js
var create2 = () => /* @__PURE__ */ new Set();

// node_modules/lib0/array.js
var last = (arr) => arr[arr.length - 1];
var appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
var from = Array.from;
var every = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (!f(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
var some = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
var unfold = (len, f) => {
  const array = new Array(len);
  for (let i = 0; i < len; i++) {
    array[i] = f(i, array);
  }
  return array;
};
var isArray = Array.isArray;

// node_modules/lib0/observable.js
var ObservableV2 = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(name, f) {
    setIfUndefined(
      this._observers,
      /** @type {string} */
      name,
      create2
    ).add(f);
    return f;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(
        name,
        /** @type {any} */
        _f
      );
      f(...args2);
    };
    this.on(
      name,
      /** @type {any} */
      _f
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};
var Observable = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create2).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(name, _f);
      f(...args2);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};

// node_modules/lib0/math.js
var floor = Math.floor;
var abs = Math.abs;
var min = (a, b) => a < b ? a : b;
var max = (a, b) => a > b ? a : b;
var isNaN2 = Number.isNaN;
var pow = Math.pow;
var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

// node_modules/lib0/binary.js
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN3 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/string.js
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = (s) => s.toLowerCase();
var trimLeftRegex = /^\s*/g;
var trimLeft = (s) => s.replace(trimLeftRegex, "");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match2) => `${separator}${toLowerCase(match2)}`));
var _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}
var repeat = (source, n) => unfold(n, () => source).join("");

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder = () => new Encoder();
var length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
var write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeUint8 = write;
var writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
var writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
var _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
var writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
var writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
var writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v2) {
    if (this.s === v2) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v2);
      this.s = v2;
    }
  }
};
var flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v2) {
    if (this.s === v2) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v2;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v2) {
    if (this.diff === v2 - this.s) {
      this.s = v2;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v2 - this.s;
      this.s = v2;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
};

// node_modules/lib0/error.js
var create3 = (s) => new Error(s);
var methodUnimplemented = () => {
  throw create3("Method unimplemented");
};
var unexpectedCase = () => {
  throw create3("Unexpected case");
};

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create3("Unexpected end of array");
var errorIntegerOutOfRange = create3("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array<Buf>} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder = (uint8Array) => new Decoder(uint8Array);
var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
var readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
var readUint8 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
var readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};

// node_modules/lib0/webcrypto.js
var subtle = crypto.subtle;
var getRandomValues = crypto.getRandomValues.bind(crypto);

// node_modules/lib0/random.js
var uint32 = () => getRandomValues(new Uint32Array(1))[0];
var uuidv4Template = "10000000-1000-4000-8000" + -1e11;
var uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);

// node_modules/lib0/time.js
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
var all = Promise.all.bind(Promise);

// node_modules/lib0/conditions.js
var undefinedToNull = (v2) => v2 === void 0 ? null : v2;

// node_modules/lib0/storage.js
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;
var onChange = (eventHandler) => usePolyfill || addEventListener(
  "storage",
  /** @type {any} */
  eventHandler
);
var offChange = (eventHandler) => usePolyfill || removeEventListener(
  "storage",
  /** @type {any} */
  eventHandler
);

// node_modules/lib0/trait/equality.js
var EqualityTraitSymbol = /* @__PURE__ */ Symbol("Equality");
var equals = (a, b) => a === b || !!a?.[EqualityTraitSymbol]?.(b) || false;

// node_modules/lib0/object.js
var isObject = (o) => typeof o === "object";
var assign = Object.assign;
var keys = Object.keys;
var forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
var map2 = (obj, f) => {
  const results = [];
  for (const key in obj) {
    results.push(f(obj[key], key));
  }
  return results;
};
var size = (obj) => keys(obj).length;
var isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
var every2 = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalFlat = (a, b) => a === b || size(a) === size(b) && every2(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && equals(b[key], val));
var freeze = Object.freeze;
var deepFreeze = (o) => {
  for (const key in o) {
    const c = o[key];
    if (typeof c === "object" || typeof c === "function") {
      deepFreeze(o[key]);
    }
  }
  return freeze(o);
};

// node_modules/lib0/function.js
var callAll = (fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
};
var id = (a) => a;
var equalityDeep = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a == null || b == null || a.constructor !== b.constructor && (a.constructor || Object) !== (b.constructor || Object)) {
    return false;
  }
  if (a[EqualityTraitSymbol] != null) {
    return a[EqualityTraitSymbol](b);
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // eslint-disable-next-line no-fallthrough
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case void 0:
    case Object:
      if (size(a) !== size(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
var isOneOf = (value, options) => options.includes(value);

// node_modules/lib0/environment.js
var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && !isNode;
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create();
    }
  }
  return params;
};
var hasParam = (name) => computeParams().has(name);
var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
var production = hasConf("production");
var forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = forceColor || !hasParam("--no-colors") && // @todo deprecate --no-colors
!hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/buffer.js
var createUint8ArrayFromLen = (len) => new Uint8Array(len);
var createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length2) => new Uint8Array(buffer, byteOffset, length2);
var createUint8ArrayFromArrayBuffer = (buffer) => new Uint8Array(buffer);
var toBase64Browser = (bytes) => {
  let s = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    s += fromCharCode(bytes[i]);
  }
  return btoa(s);
};
var toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
var fromBase64Browser = (s) => {
  const a = atob(s);
  const bytes = createUint8ArrayFromLen(a.length);
  for (let i = 0; i < a.length; i++) {
    bytes[i] = a.charCodeAt(i);
  }
  return bytes;
};
var fromBase64Node = (s) => {
  const buf = Buffer.from(s, "base64");
  return createUint8ArrayViewFromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength);
};
var toBase64 = isBrowser ? toBase64Browser : toBase64Node;
var fromBase64 = isBrowser ? fromBase64Browser : fromBase64Node;
var copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};

// node_modules/lib0/pair.js
var Pair = class {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
};
var create5 = (left, right) => new Pair(left, right);

// node_modules/lib0/prng.js
var bool = (gen) => gen.next() >= 0.5;
var int53 = (gen, min2, max2) => floor(gen.next() * (max2 + 1 - min2) + min2);
var int32 = (gen, min2, max2) => floor(gen.next() * (max2 + 1 - min2) + min2);
var int31 = (gen, min2, max2) => int32(gen, min2, max2);
var letter = (gen) => fromCharCode(int31(gen, 97, 122));
var word = (gen, minLen = 0, maxLen = 20) => {
  const len = int31(gen, minLen, maxLen);
  let str = "";
  for (let i = 0; i < len; i++) {
    str += letter(gen);
  }
  return str;
};
var oneOf = (gen, array) => array[int31(gen, 0, array.length - 1)];

// node_modules/lib0/schema.js
var schemaSymbol = /* @__PURE__ */ Symbol("0schema");
var ValidationError = class {
  constructor() {
    this._rerrs = [];
  }
  /**
   * @param {string?} path
   * @param {string} expected
   * @param {string} has
   * @param {string?} message
   */
  extend(path, expected, has, message = null) {
    this._rerrs.push({ path, expected, has, message });
  }
  toString() {
    const s = [];
    for (let i = this._rerrs.length - 1; i > 0; i--) {
      const r = this._rerrs[i];
      s.push(repeat(" ", (this._rerrs.length - i) * 2) + `${r.path != null ? `[${r.path}] ` : ""}${r.has} doesn't match ${r.expected}. ${r.message}`);
    }
    return s.join("\n");
  }
};
var shapeExtends = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null || a.constructor !== b.constructor) return false;
  if (a[EqualityTraitSymbol]) return equals(a, b);
  if (isArray(a)) {
    return every(
      a,
      (aitem) => some(b, (bitem) => shapeExtends(aitem, bitem))
    );
  } else if (isObject(a)) {
    return every2(
      a,
      (aitem, akey) => shapeExtends(aitem, b[akey])
    );
  }
  return false;
};
var Schema = class {
  // this.shape must not be defined on Schema. Otherwise typecheck on metatypes (e.g. $$object) won't work as expected anymore
  /**
   * If true, the more things are added to the shape the more objects this schema will accept (e.g.
   * union). By default, the more objects are added, the the fewer objects this schema will accept.
   * @protected
   */
  static _dilutes = false;
  /**
   * @param {Schema<any>} other
   */
  extends(other) {
    let [a, b] = [
      /** @type {any} */
      this.shape,
      /** @type {any} */
      other.shape
    ];
    if (
      /** @type {typeof Schema<any>} */
      this.constructor._dilutes
    ) [b, a] = [a, b];
    return shapeExtends(a, b);
  }
  /**
   * Overwrite this when necessary. By default, we only check the `shape` property which every shape
   * should have.
   * @param {Schema<any>} other
   */
  equals(other) {
    return this.constructor === other.constructor && equalityDeep(this.shape, other.shape);
  }
  [schemaSymbol]() {
    return true;
  }
  /**
   * @param {object} other
   */
  [EqualityTraitSymbol](other) {
    return this.equals(
      /** @type {any} */
      other
    );
  }
  /**
   * Use `schema.validate(obj)` with a typed parameter that is already of typed to be an instance of
   * Schema. Validate will check the structure of the parameter and return true iff the instance
   * really is an instance of Schema.
   *
   * @param {T} o
   * @return {boolean}
   */
  validate(o) {
    return this.check(o);
  }
  /* c8 ignore start */
  /**
   * Similar to validate, but this method accepts untyped parameters.
   *
   * @param {any} _o
   * @param {ValidationError} [_err]
   * @return {_o is T}
   */
  check(_o, _err) {
    methodUnimplemented();
  }
  /* c8 ignore stop */
  /**
   * @type {Schema<T?>}
   */
  get nullable() {
    return $union(this, $null);
  }
  /**
   * @type {$Optional<Schema<T>>}
   */
  get optional() {
    return new $Optional(
      /** @type {Schema<T>} */
      this
    );
  }
  /**
   * Cast a variable to a specific type. Returns the casted value, or throws an exception otherwise.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check only if not in a production environment.
   *
   * @template OO
   * @param {OO} o
   * @return {Extract<OO, T> extends never ? T : (OO extends Array<never> ? T : Extract<OO,T>)}
   */
  cast(o) {
    assert(o, this);
    return (
      /** @type {any} */
      o
    );
  }
  /**
   * EXPECTO PATRONUM!! 🪄
   * This function protects against type errors. Though it may not work in the real world.
   *
   * "After all this time?"
   * "Always." - Snape, talking about type safety
   *
   * Ensures that a variable is a a specific type. Returns the value, or throws an exception if the assertion check failed.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * Can be useful when defining lambdas: `s.lambda(s.$number, s.$void).expect((n) => n + 1)`
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check if not in a production environment.
   *
   * @param {T} o
   * @return {o extends T ? T : never}
   */
  expect(o) {
    assert(o, this);
    return o;
  }
};
var $ConstructedBy = class extends Schema {
  /**
   * @param {C} c
   * @param {((o:Instance<C>)=>boolean)|null} check
   */
  constructor(c, check) {
    super();
    this.shape = c;
    this._c = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is C extends ((...args:any[]) => infer T) ? T : (C extends (new (...args:any[]) => any) ? InstanceType<C> : never)} o
   */
  check(o, err = void 0) {
    const c = o?.constructor === this.shape && (this._c == null || this._c(o));
    !c && err?.extend(null, this.shape.name, o?.constructor.name, o?.constructor !== this.shape ? "Constructor match failed" : "Check failed");
    return c;
  }
};
var $constructedBy = (c, check = null) => new $ConstructedBy(c, check);
var $$constructedBy = $constructedBy($ConstructedBy);
var $Custom = class extends Schema {
  /**
   * @param {(o:any) => boolean} check
   */
  constructor(check) {
    super();
    this.shape = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is any}
   */
  check(o, err) {
    const c = this.shape(o);
    !c && err?.extend(null, "custom prop", o?.constructor.name, "failed to check custom prop");
    return c;
  }
};
var $custom = (check) => new $Custom(check);
var $$custom = $constructedBy($Custom);
var $Literal = class extends Schema {
  /**
   * @param {Array<T>} literals
   */
  constructor(literals) {
    super();
    this.shape = literals;
  }
  /**
   *
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is T}
   */
  check(o, err) {
    const c = this.shape.some((a) => a === o);
    !c && err?.extend(null, this.shape.join(" | "), o.toString());
    return c;
  }
};
var $literal = (...literals) => new $Literal(literals);
var $$literal = $constructedBy($Literal);
var _regexEscape = (
  /** @type {any} */
  RegExp.escape || /** @type {(str:string) => string} */
  ((str) => str.replace(/[().|&,$^[\]]/g, (s) => "\\" + s))
);
var _schemaStringTemplateToRegex = (s) => {
  if ($string.check(s)) {
    return [_regexEscape(s)];
  }
  if ($$literal.check(s)) {
    return (
      /** @type {Array<string|number>} */
      s.shape.map((v2) => v2 + "")
    );
  }
  if ($$number.check(s)) {
    return ["[+-]?\\d+.?\\d*"];
  }
  if ($$string.check(s)) {
    return [".*"];
  }
  if ($$union.check(s)) {
    return s.shape.map(_schemaStringTemplateToRegex).flat(1);
  }
  unexpectedCase();
};
var $StringTemplate = class extends Schema {
  /**
   * @param {T} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
    this._r = new RegExp("^" + shape.map(_schemaStringTemplateToRegex).map((opts) => `(${opts.join("|")})`).join("") + "$");
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is CastStringTemplateArgsToTemplate<T>}
   */
  check(o, err) {
    const c = this._r.exec(o) != null;
    !c && err?.extend(null, this._r.toString(), o.toString(), "String doesn't match string template.");
    return c;
  }
};
var $$stringTemplate = $constructedBy($StringTemplate);
var isOptionalSymbol = /* @__PURE__ */ Symbol("optional");
var $Optional = class extends Schema {
  /**
   * @param {S} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is (Unwrap<S>|undefined)}
   */
  check(o, err) {
    const c = o === void 0 || this.shape.check(o);
    !c && err?.extend(null, "undefined (optional)", "()");
    return c;
  }
  get [isOptionalSymbol]() {
    return true;
  }
};
var $$optional = $constructedBy($Optional);
var $Never = class extends Schema {
  /**
   * @param {any} _o
   * @param {ValidationError} [err]
   * @return {_o is never}
   */
  check(_o, err) {
    err?.extend(null, "never", typeof _o);
    return false;
  }
};
var $never = new $Never();
var $$never = $constructedBy($Never);
var $Object = class _$Object extends Schema {
  /**
   * @param {S} shape
   * @param {boolean} partial
   */
  constructor(shape, partial = false) {
    super();
    this.shape = shape;
    this._isPartial = partial;
  }
  static _dilutes = true;
  /**
   * @type {Schema<Partial<$ObjectToType<S>>>}
   */
  get partial() {
    return new _$Object(this.shape, true);
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is $ObjectToType<S>}
   */
  check(o, err) {
    if (o == null) {
      err?.extend(null, "object", "null");
      return false;
    }
    return every2(this.shape, (vv, vk) => {
      const c = this._isPartial && !hasProperty(o, vk) || vv.check(o[vk], err);
      !c && err?.extend(vk.toString(), vv.toString(), typeof o[vk], "Object property does not match");
      return c;
    });
  }
};
var $object = (def) => (
  /** @type {any} */
  new $Object(def)
);
var $$object = $constructedBy($Object);
var $objectAny = $custom((o) => o != null && (o.constructor === Object || o.constructor == null));
var $Record = class extends Schema {
  /**
   * @param {Keys} keys
   * @param {Values} values
   */
  constructor(keys2, values) {
    super();
    this.shape = {
      keys: keys2,
      values
    };
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [key in Unwrap<Keys>]: Unwrap<Values> }}
   */
  check(o, err) {
    return o != null && every2(o, (vv, vk) => {
      const ck = this.shape.keys.check(vk, err);
      !ck && err?.extend(vk + "", "Record", typeof o, ck ? "Key doesn't match schema" : "Value doesn't match value");
      return ck && this.shape.values.check(vv, err);
    });
  }
};
var $record = (keys2, values) => new $Record(keys2, values);
var $$record = $constructedBy($Record);
var $Tuple = class extends Schema {
  /**
   * @param {S} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [K in keyof S]: S[K] extends Schema<infer Type> ? Type : never }}
   */
  check(o, err) {
    return o != null && every2(this.shape, (vv, vk) => {
      const c = (
        /** @type {Schema<any>} */
        vv.check(o[vk], err)
      );
      !c && err?.extend(vk.toString(), "Tuple", typeof vv);
      return c;
    });
  }
};
var $tuple = (...def) => new $Tuple(def);
var $$tuple = $constructedBy($Tuple);
var $Array = class extends Schema {
  /**
   * @param {Array<S>} v
   */
  constructor(v2) {
    super();
    this.shape = v2.length === 1 ? v2[0] : new $Union(v2);
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Array<S extends Schema<infer T> ? T : never>} o
   */
  check(o, err) {
    const c = isArray(o) && every(o, (oi) => this.shape.check(oi));
    !c && err?.extend(null, "Array", "");
    return c;
  }
};
var $array = (...def) => new $Array(def);
var $$array = $constructedBy($Array);
var $arrayAny = $custom((o) => isArray(o));
var $InstanceOf = class extends Schema {
  /**
   * @param {new (...args:any) => T} constructor
   * @param {((o:T) => boolean)|null} check
   */
  constructor(constructor, check) {
    super();
    this.shape = constructor;
    this._c = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is T}
   */
  check(o, err) {
    const c = o instanceof this.shape && (this._c == null || this._c(o));
    !c && err?.extend(null, this.shape.name, o?.constructor.name);
    return c;
  }
};
var $instanceOf = (c, check = null) => new $InstanceOf(c, check);
var $$instanceOf = $constructedBy($InstanceOf);
var $$schema = $instanceOf(Schema);
var $Lambda = class extends Schema {
  /**
   * @param {Args} args
   */
  constructor(args2) {
    super();
    this.len = args2.length - 1;
    this.args = $tuple(...args2.slice(-1));
    this.res = args2[this.len];
  }
  /**
   * @param {any} f
   * @param {ValidationError} err
   * @return {f is _LArgsToLambdaDef<Args>}
   */
  check(f, err) {
    const c = f.constructor === Function && f.length <= this.len;
    !c && err?.extend(null, "function", typeof f);
    return c;
  }
};
var $$lambda = $constructedBy($Lambda);
var $function = $custom((o) => typeof o === "function");
var $Intersection = class extends Schema {
  /**
   * @param {T} v
   */
  constructor(v2) {
    super();
    this.shape = v2;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Intersect<UnwrapArray<T>>}
   */
  check(o, err) {
    const c = every(this.shape, (check) => check.check(o, err));
    !c && err?.extend(null, "Intersectinon", typeof o);
    return c;
  }
};
var $$intersect = $constructedBy($Intersection, (o) => o.shape.length > 0);
var $Union = class extends Schema {
  static _dilutes = true;
  /**
   * @param {Array<Schema<S>>} v
   */
  constructor(v2) {
    super();
    this.shape = v2;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is S}
   */
  check(o, err) {
    const c = some(this.shape, (vv) => vv.check(o, err));
    err?.extend(null, "Union", typeof o);
    return c;
  }
};
var $union = (...schemas) => schemas.findIndex(($s) => $$union.check($s)) >= 0 ? $union(...schemas.map(($s) => $($s)).map(($s) => $$union.check($s) ? $s.shape : [$s]).flat(1)) : schemas.length === 1 ? schemas[0] : new $Union(schemas);
var $$union = (
  /** @type {Schema<$Union<any>>} */
  $constructedBy($Union)
);
var _t = () => true;
var $any = $custom(_t);
var $$any = (
  /** @type {Schema<Schema<any>>} */
  $constructedBy($Custom, (o) => o.shape === _t)
);
var $bigint = $custom((o) => typeof o === "bigint");
var $$bigint = (
  /** @type {Schema<Schema<BigInt>>} */
  $custom((o) => o === $bigint)
);
var $symbol = $custom((o) => typeof o === "symbol");
var $$symbol = (
  /** @type {Schema<Schema<Symbol>>} */
  $custom((o) => o === $symbol)
);
var $number = $custom((o) => typeof o === "number");
var $$number = (
  /** @type {Schema<Schema<number>>} */
  $custom((o) => o === $number)
);
var $string = $custom((o) => typeof o === "string");
var $$string = (
  /** @type {Schema<Schema<string>>} */
  $custom((o) => o === $string)
);
var $boolean = $custom((o) => typeof o === "boolean");
var $$boolean = (
  /** @type {Schema<Schema<Boolean>>} */
  $custom((o) => o === $boolean)
);
var $undefined = $literal(void 0);
var $$undefined = (
  /** @type {Schema<Schema<undefined>>} */
  $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === void 0)
);
var $void = $literal(void 0);
var $null = $literal(null);
var $$null = (
  /** @type {Schema<Schema<null>>} */
  $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === null)
);
var $uint8Array = $constructedBy(Uint8Array);
var $$uint8Array = (
  /** @type {Schema<Schema<Uint8Array>>} */
  $constructedBy($ConstructedBy, (o) => o.shape === Uint8Array)
);
var $primitive = $union($number, $string, $null, $undefined, $bigint, $boolean, $symbol);
var $json = (() => {
  const $jsonArr = (
    /** @type {$Array<$any>} */
    $array($any)
  );
  const $jsonRecord = (
    /** @type {$Record<$string,$any>} */
    $record($string, $any)
  );
  const $json2 = $union($number, $string, $null, $boolean, $jsonArr, $jsonRecord);
  $jsonArr.shape = $json2;
  $jsonRecord.shape.values = $json2;
  return $json2;
})();
var $ = (o) => {
  if ($$schema.check(o)) {
    return (
      /** @type {any} */
      o
    );
  } else if ($objectAny.check(o)) {
    const o2 = {};
    for (const k2 in o) {
      o2[k2] = $(o[k2]);
    }
    return (
      /** @type {any} */
      $object(o2)
    );
  } else if ($arrayAny.check(o)) {
    return (
      /** @type {any} */
      $union(...o.map($))
    );
  } else if ($primitive.check(o)) {
    return (
      /** @type {any} */
      $literal(o)
    );
  } else if ($function.check(o)) {
    return (
      /** @type {any} */
      $constructedBy(
        /** @type {any} */
        o
      )
    );
  }
  unexpectedCase();
};
var assert = production ? () => {
} : (o, schema) => {
  const err = new ValidationError();
  if (!schema.check(o, err)) {
    throw create3(`Expected value to be of type ${schema.constructor.name}.
${err.toString()}`);
  }
};
var PatternMatcher = class {
  /**
   * @param {Schema<State>} [$state]
   */
  constructor($state) {
    this.patterns = [];
    this.$state = $state;
  }
  /**
   * @template P
   * @template R
   * @param {P} pattern
   * @param {(o:NoInfer<Unwrap<ReadSchema<P>>>,s:State)=>R} handler
   * @return {PatternMatcher<State,Patterns|Pattern<Unwrap<ReadSchema<P>>,R>>}
   */
  if(pattern, handler) {
    this.patterns.push({ if: $(pattern), h: handler });
    return this;
  }
  /**
   * @template R
   * @param {(o:any,s:State)=>R} h
   */
  else(h) {
    return this.if($any, h);
  }
  /**
   * @return {State extends undefined
   *   ? <In extends Unwrap<Patterns['if']>>(o:In,state?:undefined)=>PatternMatchResult<Patterns,In>
   *   : <In extends Unwrap<Patterns['if']>>(o:In,state:State)=>PatternMatchResult<Patterns,In>}
   */
  done() {
    return (
      /** @type {any} */
      (o, s) => {
        for (let i = 0; i < this.patterns.length; i++) {
          const p = this.patterns[i];
          if (p.if.check(o)) {
            return p.h(o, s);
          }
        }
        throw create3("Unhandled pattern");
      }
    );
  }
};
var match = (state) => new PatternMatcher(
  /** @type {any} */
  state
);
var _random = (
  /** @type {any} */
  match(
    /** @type {Schema<prng.PRNG>} */
    $any
  ).if($$number, (_o, gen) => int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER)).if($$string, (_o, gen) => word(gen)).if($$boolean, (_o, gen) => bool(gen)).if($$bigint, (_o, gen) => BigInt(int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER))).if($$union, (o, gen) => random(gen, oneOf(gen, o.shape))).if($$object, (o, gen) => {
    const res = {};
    for (const k2 in o.shape) {
      let prop = o.shape[k2];
      if ($$optional.check(prop)) {
        if (bool(gen)) {
          continue;
        }
        prop = prop.shape;
      }
      res[k2] = _random(prop, gen);
    }
    return res;
  }).if($$array, (o, gen) => {
    const arr = [];
    const n = int32(gen, 0, 42);
    for (let i = 0; i < n; i++) {
      arr.push(random(gen, o.shape));
    }
    return arr;
  }).if($$literal, (o, gen) => {
    return oneOf(gen, o.shape);
  }).if($$null, (o, gen) => {
    return null;
  }).if($$lambda, (o, gen) => {
    const res = random(gen, o.res);
    return () => res;
  }).if($$any, (o, gen) => random(gen, oneOf(gen, [
    $number,
    $string,
    $null,
    $undefined,
    $bigint,
    $boolean,
    $array($number),
    $record($union("a", "b", "c"), $number)
  ]))).if($$record, (o, gen) => {
    const res = {};
    const keysN = int53(gen, 0, 3);
    for (let i = 0; i < keysN; i++) {
      const key = random(gen, o.shape.keys);
      const val = random(gen, o.shape.values);
      res[key] = val;
    }
    return res;
  }).done()
);
var random = (gen, schema) => (
  /** @type {any} */
  _random($(schema), gen)
);

// node_modules/lib0/dom.js
var doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
var $fragment = $custom((el) => el.nodeType === DOCUMENT_FRAGMENT_NODE);
var domParser = (
  /** @type {DOMParser} */
  typeof DOMParser !== "undefined" ? new DOMParser() : null
);
var $element = $custom((el) => el.nodeType === ELEMENT_NODE);
var $text = $custom((el) => el.nodeType === TEXT_NODE);
var mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
var ELEMENT_NODE = doc.ELEMENT_NODE;
var TEXT_NODE = doc.TEXT_NODE;
var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
var COMMENT_NODE = doc.COMMENT_NODE;
var DOCUMENT_NODE = doc.DOCUMENT_NODE;
var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
var $node = $custom((el) => el.nodeType === DOCUMENT_NODE);

// node_modules/lib0/symbol.js
var create6 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create6();
var UNBOLD = create6();
var BLUE = create6();
var GREY = create6();
var GREEN = create6();
var RED = create6();
var PURPLE = create6();
var ORANGE = create6();
var UNCOLOR = create6();
var computeNoColorLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg === void 0) {
      break;
    } else if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      break;
    }
  }
  if (i > 0) {
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.js
var _browserStyleMap = {
  [BOLD]: create5("font-weight", "bold"),
  [UNBOLD]: create5("font-weight", "normal"),
  [BLUE]: create5("color", "blue"),
  [GREEN]: create5("color", "green"),
  [GREY]: create5("color", "grey"),
  [RED]: create5("color", "red"),
  [PURPLE]: create5("color", "purple"),
  [ORANGE]: create5("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create5("color", "black")
};
var computeBrowserLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const styles = [];
  const currentStyle = create();
  let logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg === void 0) {
        break;
      }
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
var print = (...args2) => {
  console.log(...computeLoggingArgs(args2));
  vconsoles.forEach((vc) => vc.print(args2));
};
var warn = (...args2) => {
  console.warn(...computeLoggingArgs(args2));
  args2.unshift(ORANGE);
  vconsoles.forEach((vc) => vc.print(args2));
};
var vconsoles = create2();

// node_modules/lib0/iterator.js
var createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
var iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
var iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  if (structs != null) {
    const lastStruct = structs[structs.length - 1];
    const clockState = lastStruct.id.clock + lastStruct.length;
    for (let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]) {
      iterateStructs(transaction, structs, del.clock, del.len, f);
    }
  }
});
var findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
var isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
var sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j2;
    for (i = 1, j2 = 1; i < dels.length; i++) {
      const left = dels[j2 - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        dels[j2 - 1] = new DeleteItem(left.clock, max(left.len, right.clock + right.len - left.clock));
      } else {
        if (j2 < i) {
          dels[j2] = right;
        }
        j2++;
      }
    }
    dels.length = j2;
  });
};
var mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
var addToDeleteSet = (ds, client, clock, length2) => {
  setIfUndefined(ds.clients, client, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new DeleteItem(clock, length2));
};
var createDeleteSet = () => new DeleteSet();
var createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
var writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
var readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
var readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
var generateNewClientId = uint32;
var Doc = class _Doc extends ObservableV2 {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.isDestroyed = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create4((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", [this]);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = (
    /** @type {any} */
    AbstractType
  )) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return (
          /** @type {InstanceType<Type>} */
          t
        );
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return (
      /** @type {InstanceType<Type>} */
      type
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return (
      /** @type {YArray<T>} */
      this.get(name, YArray)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return (
      /** @type {YMap<T>} */
      this.get(name, YMap)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(name = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(name, YXmlElement)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = true;
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new _Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
};
var DSDecoderV1 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
};
var UpdateDecoderV1 = class extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
};
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
var writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
var writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(
      encoder,
      /** @type {Array<GC|Item>} */
      store.clients.get(client),
      client,
      clock
    );
  });
};
var readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // left
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
var integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const inapplicableItems = clientsStructRefs.get(client);
      if (inapplicableItems) {
        inapplicableItems.i--;
        restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
        clientsStructRefs.delete(client);
        inapplicableItems.i = 0;
        inapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
var readUpdateV2 = (decoder, ydoc2, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc2, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
var applyUpdateV2 = (ydoc2, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc2, transactionOrigin, new YDecoder(decoder));
};
var applyUpdate = (ydoc2, update, transactionOrigin) => applyUpdateV2(ydoc2, update, transactionOrigin, UpdateDecoderV1);
var writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
var encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
var encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
var readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
var decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
var writeStateVector = (encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
};
var writeDocumentStateVector = (encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store));
var encodeStateVectorV2 = (doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
};
var encodeStateVector = (doc2) => encodeStateVectorV2(doc2, new DSEncoderV1());
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
var createEventHandler = () => new EventHandler();
var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
var removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
var createID = (client, clock) => new ID(client, clock);
var findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
var RelativePosition = class {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(type, tname, item, assoc = 0) {
    this.type = type;
    this.tname = tname;
    this.item = item;
    this.assoc = assoc;
  }
};
var createRelativePositionFromJSON = (json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname ?? null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
var AbsolutePosition = class {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(type, index, assoc = 0) {
    this.type = type;
    this.index = index;
    this.assoc = assoc;
  }
};
var createAbsolutePosition = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
var createRelativePosition = (type, item, assoc) => {
  let typeid = null;
  let tname = null;
  if (type._item === null) {
    tname = findRootTypeKey(type);
  } else {
    typeid = createID(type._item.id.client, type._item.id.clock);
  }
  return new RelativePosition(typeid, tname, item, assoc);
};
var createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
  let t = type._start;
  if (assoc < 0) {
    if (index === 0) {
      return createRelativePosition(type, null, assoc);
    }
    index--;
  }
  while (t !== null) {
    if (!t.deleted && t.countable) {
      if (t.length > index) {
        return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
      }
      index -= t.length;
    }
    if (t.right === null && assoc < 0) {
      return createRelativePosition(type, t.lastId, assoc);
    }
    t = t.right;
  }
  return createRelativePosition(type, null, assoc);
};
var getItemWithOffset = (store, id2) => {
  const item = getItem(store, id2);
  const diff = id2.clock - item.id.clock;
  return {
    item,
    diff
  };
};
var createAbsolutePositionFromRelativePosition = (rpos, doc2, followUndoneDeletions = true) => {
  const store = doc2.store;
  const rightID = rpos.item;
  const typeID = rpos.type;
  const tname = rpos.tname;
  const assoc = rpos.assoc;
  let type = null;
  let index = 0;
  if (rightID !== null) {
    if (getState(store, rightID.client) <= rightID.clock) {
      return null;
    }
    const res = followUndoneDeletions ? followRedone(store, rightID) : getItemWithOffset(store, rightID);
    const right = res.item;
    if (!(right instanceof Item)) {
      return null;
    }
    type = /** @type {AbstractType<any>} */
    right.parent;
    if (type._item === null || !type._item.deleted) {
      index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
      let n = right.left;
      while (n !== null) {
        if (!n.deleted && n.countable) {
          index += n.length;
        }
        n = n.left;
      }
    }
  } else {
    if (tname !== null) {
      type = doc2.get(tname);
    } else if (typeID !== null) {
      if (getState(store, typeID.client) <= typeID.clock) {
        return null;
      }
      const { item } = followUndoneDeletions ? followRedone(store, typeID) : { item: getItem(store, typeID) };
      if (item instanceof Item && item.content instanceof ContentType) {
        type = item.content.type;
      } else {
        return null;
      }
    } else {
      throw unexpectedCase();
    }
    if (assoc >= 0) {
      index = type._length;
    } else {
      index = 0;
    }
  }
  return createAbsolutePosition(type, index, rpos.assoc);
};
var compareRelativePositions = (a, b) => a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
var splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
var getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
var getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
var addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
var findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
var find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
var getItemCleanStart = (transaction, id2) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id2.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
var getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index = findIndexSS(structs, id2.clock);
  const struct = structs[index];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
var replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
var iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
};
var writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
var addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create2).add(parentSub);
  }
};
var tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
        right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(
            right.parentSub,
            /** @type {Item} */
            left
          );
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
var tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
var tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
var cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            fs.push(() => {
              callEventHandlerListeners(type._dEH, events, transaction);
            });
          }
        });
        fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
        fs.push(() => {
          if (transaction._needFormattingCleanup) {
            cleanupYTextAfterTransaction(transaction);
          }
        });
      });
      callAll(fs, []);
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
var transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
var mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
var sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
var flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
var finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
var convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
var errorComputeChanges = "You must not compute changes after the event-handler fired.";
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const target = this.target;
      const added = create2();
      const deleted = create2();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
var getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted && c.countable) {
          i += c.length;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
var warnPrematureAccess = () => {
  warn("Invalid access: Add Yjs type to a document before reading data.");
};
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
var refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
var findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
var updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
var callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
var typeListSlice = (type, start, end) => {
  type.doc ?? warnPrematureAccess();
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListToArray = (type) => {
  type.doc ?? warnPrematureAccess();
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  type.doc ?? warnPrematureAccess();
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
var typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
var typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
var typeListGet = (type, index) => {
  type.doc ?? warnPrematureAccess();
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
var lengthExceeded = () => create3("Length exceeded!");
var typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded();
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListDelete = (transaction, parent, index, length2) => {
  if (length2 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length2;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length2 > 0 && n !== null) {
    if (!n.deleted) {
      if (length2 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length2));
      }
      n.delete(transaction);
      length2 -= n.length;
    }
    n = n.right;
  }
  if (length2 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length2
      /* in case we remove the above exception */
    );
  }
};
var typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
var typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
var typeMapGet = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
var typeMapGetAll = (parent) => {
  const res = {};
  parent.doc ?? warnPrematureAccess();
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
var typeMapHas = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
var typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v2 = value;
    while (v2 !== null && (!snapshot.sv.has(v2.id.client) || v2.id.clock >= (snapshot.sv.get(v2.id.client) || 0))) {
      v2 = v2.left;
    }
    if (v2 !== null && isVisible(v2, snapshot)) {
      res[key] = v2.content.getContent()[v2.length - 1];
    }
  });
  return res;
};
var createMapIterator = (type) => {
  type.doc ?? warnPrematureAccess();
  return iteratorFilter(
    type._map.entries(),
    /** @param {any} entry */
    (entry) => !entry[1].deleted
  );
};
var YArrayEvent = class extends YEvent {
};
var YArray = class _YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new _YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new _YArray();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const arr = new _YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length2);
      });
    } else {
      this._prelimContent.splice(index, length2);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
var readYArray = (_decoder) => new YArray();
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
var YMap = class _YMap extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new _YMap();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const map3 = new _YMap();
    this.forEach((value, key) => {
      map3.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map3;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? warnPrematureAccess();
    const map3 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v2 = item.content.getContent()[item.length - 1];
        map3[key] = v2 instanceof AbstractType ? v2.toJSON() : v2;
      }
    });
    return map3;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v2) => v2[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v2) => v2[1].content.getContent()[v2[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v2) => (
        /** @type {any} */
        [v2[0], v2[1].content.getContent()[v2[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this.doc ?? warnPrematureAccess();
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map3) {
          typeMapDelete(transaction, map3, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
var readYMap = (_decoder) => new YMap();
var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
var findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
var findPosition = (transaction, parent, index, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
var updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
var minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    )) ;
    else {
      break;
    }
    currPos.forward();
  }
};
var insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) ?? null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
var insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(
    /** @type {string} */
    text2
  ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var formatText = (transaction, parent, currPos, length2, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop: while (currPos.right !== null && (length2 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
    if (!currPos.right.deleted) {
      switch (currPos.right.content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            currPos.right.content
          );
          const attr = attributes[key];
          if (attr !== void 0) {
            if (equalAttrs(attr, value)) {
              negatedAttributes.delete(key);
            } else {
              if (length2 === 0) {
                break iterationLoop;
              }
              negatedAttributes.set(key, value);
            }
            currPos.right.delete(transaction);
          } else {
            currPos.currentAttributes.set(key, value);
          }
          break;
        }
        default:
          if (length2 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
          }
          length2 -= currPos.right.length;
          break;
      }
    }
    currPos.forward();
  }
  if (length2 > 0) {
    let newlines = "";
    for (; length2 > 0; length2--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) ?? null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
var cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
var cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
var cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(
      transaction,
      /** @type {Array<Item|GC>} */
      doc2.store.clients.get(client),
      clock,
      afterClock,
      (item) => {
        if (!item.deleted && /** @type {Item} */
        item.content.constructor === ContentFormat && item.constructor !== GC) {
          needFullCleanup.add(
            /** @type {any} */
            item.parent
          );
        }
      }
    );
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !/** @type {YText} */
      item.parent._hasFormatting || needFullCleanup.has(
        /** @type {YText} */
        item.parent
      )) {
        return;
      }
      const parent = (
        /** @type {YText} */
        item.parent
      );
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
var deleteText = (transaction, currPos, length2) => {
  const startLength = length2;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length2 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length2 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length2));
          }
          length2 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length2);
  }
  return currPos;
};
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext2, transaction, subs) {
    super(ytext2, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert === "object" || insert.length > 0) {
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op) delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) ?? null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) ?? null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) ?? null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (!equalAttrs(attr, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
var YText = class _YText extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new _YText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const text2 = new _YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? warnPrematureAccess();
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    this.doc ?? warnPrematureAccess();
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v2, k2) => {
            attributes[k2] = v2;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text2, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length2) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index, true), length2);
      });
    } else {
      this._pending.push(() => this.delete(index, length2));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length2, attributes) {
    if (length2 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length2, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length2, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
var readYText = (_decoder) => new YText();
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
    root.doc ?? warnPrematureAccess();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            const nxt = n.next;
            if (nxt !== null) {
              n = nxt;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
var YXmlFragment = class _YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new _YXmlFragment();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const el = new _YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length2 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length2);
      });
    } else {
      this._prelimContent.splice(index, length2);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
var readYXmlFragment = (_decoder) => new YXmlFragment();
var YXmlElement = class _YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new _YXmlElement(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const el = new _YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      el.setAttribute(
        key,
        /** @type {any} */
        value
      );
    });
    el.insert(0, this.toArray().map((v2) => v2 instanceof AbstractType ? v2.clone() : v2));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(snapshot) {
    return (
      /** @type {any} */
      snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
var YXmlHook = class _YXmlHook extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new _YXmlHook(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const el = new _YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
var YXmlText = class _YXmlText extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new _YXmlText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const text2 = new _YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j2 = 0; j2 < node.attrs.length; j2++) {
          const attr = node.attrs[j2];
          str += ` ${attr.key}="${attr.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
var readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id2, length2) {
    this.id = id2;
    this.length = length2;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var ContentBinary = class _ContentBinary {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new _ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class _ContentDeleted {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new _ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new _ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
var createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
var ContentDoc = class _ContentDoc {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new _ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
var ContentEmbed = class _ContentEmbed {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new _ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
var ContentFormat = class _ContentFormat {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new _ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(_offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(_right) {
    return false;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(_transaction, item) {
    const p = (
      /** @type {YText} */
      item.parent
    );
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
var ContentJSON = class _ContentJSON {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new _ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new _ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
var readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
var isDevMode = getVariable("node_env") === "development";
var ContentAny = class _ContentAny {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
    isDevMode && deepFreeze(arr);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new _ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new _ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
var readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
var ContentString = class _ContentString {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new _ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new _ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
var readContentString = (decoder) => new ContentString(decoder.readString());
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class _ContentType {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new _ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
var followRedone = (store, id2) => {
  let nextID = id2;
  let diff = 0;
  let item;
  do {
    if (diff > 0) {
      nextID = createID(nextID.client, nextID.clock + diff);
    }
    item = getItem(store, nextID);
    diff = nextID.clock - item.id.clock;
    nextID = item.redone;
  } while (nextID !== null && item instanceof Item);
  return {
    item,
    diff
  };
};
var splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
var Item = class _Item extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === _Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      } else if (this.right && this.right.constructor === _Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
var readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// node_modules/lib0/broadcastchannel.js
var channels = /* @__PURE__ */ new Map();
var LocalStoragePolyfill = class {
  /**
   * @param {string} room
   */
  constructor(room) {
    this.room = room;
    this.onmessage = null;
    this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") });
    onChange(this._onChange);
  }
  /**
   * @param {ArrayBuffer} buf
   */
  postMessage(buf) {
    varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
  }
  close() {
    offChange(this._onChange);
  }
};
var BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
var getChannel = (room) => setIfUndefined(channels, room, () => {
  const subs = create2();
  const bc = new BC(room);
  bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
  return {
    bc,
    subs
  };
});
var subscribe = (room, f) => {
  getChannel(room).subs.add(f);
  return f;
};
var unsubscribe = (room, f) => {
  const channel = getChannel(room);
  const unsubscribed = channel.subs.delete(f);
  if (unsubscribed && channel.subs.size === 0) {
    channel.bc.close();
    channels.delete(room);
  }
  return unsubscribed;
};
var publish = (room, data, origin = null) => {
  const c = getChannel(room);
  c.bc.postMessage(data);
  c.subs.forEach((sub) => sub(data, origin));
};

// node_modules/y-protocols/sync.js
var messageYjsSyncStep1 = 0;
var messageYjsSyncStep2 = 1;
var messageYjsUpdate = 2;
var writeSyncStep1 = (encoder, doc2) => {
  writeVarUint(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc2);
  writeVarUint8Array(encoder, sv);
};
var writeSyncStep2 = (encoder, doc2, encodedStateVector) => {
  writeVarUint(encoder, messageYjsSyncStep2);
  writeVarUint8Array(encoder, encodeStateAsUpdate(doc2, encodedStateVector));
};
var readSyncStep1 = (decoder, encoder, doc2) => writeSyncStep2(encoder, doc2, readVarUint8Array(decoder));
var readSyncStep2 = (decoder, doc2, transactionOrigin, errorHandler) => {
  try {
    applyUpdate(doc2, readVarUint8Array(decoder), transactionOrigin);
  } catch (error) {
    if (errorHandler != null) errorHandler(
      /** @type {Error} */
      error
    );
    console.error("Caught error while handling a Yjs update", error);
  }
};
var writeUpdate = (encoder, update) => {
  writeVarUint(encoder, messageYjsUpdate);
  writeVarUint8Array(encoder, update);
};
var readUpdate = readSyncStep2;
var readSyncMessage = (decoder, encoder, doc2, transactionOrigin, errorHandler) => {
  const messageType = readVarUint(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc2);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc2, transactionOrigin, errorHandler);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc2, transactionOrigin, errorHandler);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};

// node_modules/y-protocols/auth.js
var messagePermissionDenied = 0;
var readAuthMessage = (decoder, y, permissionDeniedHandler2) => {
  switch (readVarUint(decoder)) {
    case messagePermissionDenied:
      permissionDeniedHandler2(y, readVarString(decoder));
  }
};

// node_modules/y-protocols/awareness.js
var outdatedTimeout = 3e4;
var Awareness = class extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
var removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
var applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};

// node_modules/lib0/url.js
var encodeQueryParams = (params2) => map2(params2, (val, key) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");

// node_modules/y-websocket/src/y-websocket.js
var messageSync = 0;
var messageQueryAwareness = 3;
var messageAwareness = 1;
var messageAuth = 2;
var messageHandlers = [];
messageHandlers[messageSync] = (encoder, decoder, provider, emitSynced, _messageType) => {
  writeVarUint(encoder, messageSync);
  const syncMessageType = readSyncMessage(
    decoder,
    encoder,
    provider.doc,
    provider
  );
  if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) {
    provider.synced = true;
  }
};
messageHandlers[messageQueryAwareness] = (encoder, _decoder, provider, _emitSynced, _messageType) => {
  writeVarUint(encoder, messageAwareness);
  writeVarUint8Array(
    encoder,
    encodeAwarenessUpdate(
      provider.awareness,
      Array.from(provider.awareness.getStates().keys())
    )
  );
};
messageHandlers[messageAwareness] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  applyAwarenessUpdate(
    provider.awareness,
    readVarUint8Array(decoder),
    provider
  );
};
messageHandlers[messageAuth] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  readAuthMessage(
    decoder,
    provider.doc,
    (_ydoc, reason) => permissionDeniedHandler(provider, reason)
  );
};
var messageReconnectTimeout = 3e4;
var permissionDeniedHandler = (provider, reason) => console.warn(`Permission denied to access ${provider.url}.
${reason}`);
var readMessage = (provider, buf, emitSynced) => {
  const decoder = createDecoder(buf);
  const encoder = createEncoder();
  const messageType = readVarUint(decoder);
  const messageHandler = provider.messageHandlers[messageType];
  if (
    /** @type {any} */
    messageHandler
  ) {
    messageHandler(encoder, decoder, provider, emitSynced, messageType);
  } else {
    console.error("Unable to compute message");
  }
  return encoder;
};
var closeWebsocketConnection = (provider, ws, event) => {
  if (ws === provider.ws) {
    provider.emit("connection-close", [event, provider]);
    provider.ws = null;
    ws.close();
    provider.wsconnecting = false;
    if (provider.wsconnected) {
      provider.wsconnected = false;
      provider.synced = false;
      removeAwarenessStates(
        provider.awareness,
        Array.from(provider.awareness.getStates().keys()).filter(
          (client) => client !== provider.doc.clientID
        ),
        provider
      );
      provider.emit("status", [{
        status: "disconnected"
      }]);
    } else {
      provider.wsUnsuccessfulReconnects++;
    }
    setTimeout(
      setupWS,
      min(
        pow(2, provider.wsUnsuccessfulReconnects) * 100,
        provider.maxBackoffTime
      ),
      provider
    );
  }
};
var setupWS = (provider) => {
  if (provider.shouldConnect && provider.ws === null) {
    const websocket = new provider._WS(provider.url, provider.protocols);
    websocket.binaryType = "arraybuffer";
    provider.ws = websocket;
    provider.wsconnecting = true;
    provider.wsconnected = false;
    provider.synced = false;
    websocket.onmessage = (event) => {
      provider.wsLastMessageReceived = getUnixTime();
      const encoder = readMessage(provider, new Uint8Array(event.data), true);
      if (length(encoder) > 1) {
        websocket.send(toUint8Array(encoder));
      }
    };
    websocket.onerror = (event) => {
      provider.emit("connection-error", [event, provider]);
    };
    websocket.onclose = (event) => {
      closeWebsocketConnection(provider, websocket, event);
    };
    websocket.onopen = () => {
      provider.wsLastMessageReceived = getUnixTime();
      provider.wsconnecting = false;
      provider.wsconnected = true;
      provider.wsUnsuccessfulReconnects = 0;
      provider.emit("status", [{
        status: "connected"
      }]);
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeSyncStep1(encoder, provider.doc);
      websocket.send(toUint8Array(encoder));
      if (provider.awareness.getLocalState() !== null) {
        const encoderAwarenessState = createEncoder();
        writeVarUint(encoderAwarenessState, messageAwareness);
        writeVarUint8Array(
          encoderAwarenessState,
          encodeAwarenessUpdate(provider.awareness, [
            provider.doc.clientID
          ])
        );
        websocket.send(toUint8Array(encoderAwarenessState));
      }
    };
    provider.emit("status", [{
      status: "connecting"
    }]);
  }
};
var broadcastMessage = (provider, buf) => {
  const ws = provider.ws;
  if (provider.wsconnected && ws && ws.readyState === ws.OPEN) {
    ws.send(buf);
  }
  if (provider.bcconnected) {
    publish(provider.bcChannel, buf, provider);
  }
};
var WebsocketProvider = class extends ObservableV2 {
  /**
   * @param {string} serverUrl
   * @param {string} roomname
   * @param {Y.Doc} doc
   * @param {object} opts
   * @param {boolean} [opts.connect]
   * @param {awarenessProtocol.Awareness} [opts.awareness]
   * @param {Object<string,string>} [opts.params] specify url parameters
   * @param {Array<string>} [opts.protocols] specify websocket protocols
   * @param {typeof WebSocket} [opts.WebSocketPolyfill] Optionall provide a WebSocket polyfill
   * @param {number} [opts.resyncInterval] Request server state every `resyncInterval` milliseconds
   * @param {number} [opts.maxBackoffTime] Maximum amount of time to wait before trying to reconnect (we try to reconnect using exponential backoff)
   * @param {boolean} [opts.disableBc] Disable cross-tab BroadcastChannel communication
   */
  constructor(serverUrl, roomname, doc2, {
    connect = true,
    awareness = new Awareness(doc2),
    params: params2 = {},
    protocols = [],
    WebSocketPolyfill = WebSocket,
    resyncInterval = -1,
    maxBackoffTime = 2500,
    disableBc = false
  } = {}) {
    super();
    while (serverUrl[serverUrl.length - 1] === "/") {
      serverUrl = serverUrl.slice(0, serverUrl.length - 1);
    }
    this.serverUrl = serverUrl;
    this.bcChannel = serverUrl + "/" + roomname;
    this.maxBackoffTime = maxBackoffTime;
    this.params = params2;
    this.protocols = protocols;
    this.roomname = roomname;
    this.doc = doc2;
    this._WS = WebSocketPolyfill;
    this.awareness = awareness;
    this.wsconnected = false;
    this.wsconnecting = false;
    this.bcconnected = false;
    this.disableBc = disableBc;
    this.wsUnsuccessfulReconnects = 0;
    this.messageHandlers = messageHandlers.slice();
    this._synced = false;
    this.ws = null;
    this.wsLastMessageReceived = 0;
    this.shouldConnect = connect;
    this._resyncInterval = 0;
    if (resyncInterval > 0) {
      this._resyncInterval = /** @type {any} */
      setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const encoder = createEncoder();
          writeVarUint(encoder, messageSync);
          writeSyncStep1(encoder, doc2);
          this.ws.send(toUint8Array(encoder));
        }
      }, resyncInterval);
    }
    this._bcSubscriber = (data, origin) => {
      if (origin !== this) {
        const encoder = readMessage(this, new Uint8Array(data), false);
        if (length(encoder) > 1) {
          publish(this.bcChannel, toUint8Array(encoder), this);
        }
      }
    };
    this._updateHandler = (update, origin) => {
      if (origin !== this) {
        const encoder = createEncoder();
        writeVarUint(encoder, messageSync);
        writeUpdate(encoder, update);
        broadcastMessage(this, toUint8Array(encoder));
      }
    };
    this.doc.on("update", this._updateHandler);
    this._awarenessUpdateHandler = ({ added, updated, removed }, _origin) => {
      const changedClients = added.concat(updated).concat(removed);
      const encoder = createEncoder();
      writeVarUint(encoder, messageAwareness);
      writeVarUint8Array(
        encoder,
        encodeAwarenessUpdate(awareness, changedClients)
      );
      broadcastMessage(this, toUint8Array(encoder));
    };
    this._exitHandler = () => {
      removeAwarenessStates(
        this.awareness,
        [doc2.clientID],
        "app closed"
      );
    };
    if (isNode && typeof process !== "undefined") {
      process.on("exit", this._exitHandler);
    }
    awareness.on("update", this._awarenessUpdateHandler);
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      if (this.wsconnected && messageReconnectTimeout < getUnixTime() - this.wsLastMessageReceived) {
        closeWebsocketConnection(
          this,
          /** @type {WebSocket} */
          this.ws,
          null
        );
      }
    }, messageReconnectTimeout / 10);
    if (connect) {
      this.connect();
    }
  }
  get url() {
    const encodedParams = encodeQueryParams(this.params);
    return this.serverUrl + "/" + this.roomname + (encodedParams.length === 0 ? "" : "?" + encodedParams);
  }
  /**
   * @type {boolean}
   */
  get synced() {
    return this._synced;
  }
  set synced(state) {
    if (this._synced !== state) {
      this._synced = state;
      this.emit("synced", [state]);
      this.emit("sync", [state]);
    }
  }
  destroy() {
    if (this._resyncInterval !== 0) {
      clearInterval(this._resyncInterval);
    }
    clearInterval(this._checkInterval);
    this.disconnect();
    if (isNode && typeof process !== "undefined") {
      process.off("exit", this._exitHandler);
    }
    this.awareness.off("update", this._awarenessUpdateHandler);
    this.doc.off("update", this._updateHandler);
    super.destroy();
  }
  connectBc() {
    if (this.disableBc) {
      return;
    }
    if (!this.bcconnected) {
      subscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = true;
    }
    const encoderSync = createEncoder();
    writeVarUint(encoderSync, messageSync);
    writeSyncStep1(encoderSync, this.doc);
    publish(this.bcChannel, toUint8Array(encoderSync), this);
    const encoderState = createEncoder();
    writeVarUint(encoderState, messageSync);
    writeSyncStep2(encoderState, this.doc);
    publish(this.bcChannel, toUint8Array(encoderState), this);
    const encoderAwarenessQuery = createEncoder();
    writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessQuery),
      this
    );
    const encoderAwarenessState = createEncoder();
    writeVarUint(encoderAwarenessState, messageAwareness);
    writeVarUint8Array(
      encoderAwarenessState,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ])
    );
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessState),
      this
    );
  }
  disconnectBc() {
    const encoder = createEncoder();
    writeVarUint(encoder, messageAwareness);
    writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ], /* @__PURE__ */ new Map())
    );
    broadcastMessage(this, toUint8Array(encoder));
    if (this.bcconnected) {
      unsubscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = false;
    }
  }
  disconnect() {
    this.shouldConnect = false;
    this.disconnectBc();
    if (this.ws !== null) {
      closeWebsocketConnection(this, this.ws, null);
    }
  }
  connect() {
    this.shouldConnect = true;
    if (!this.wsconnected && this.ws === null) {
      setupWS(this);
      this.connectBc();
    }
  }
};

// node_modules/y-quill/src/y-quill.js
var updateCursor = (quillCursors, aw, clientId, doc2, type) => {
  try {
    if (aw && aw.cursor && clientId !== doc2.clientID) {
      const user = aw.user || {};
      const color = user.color || "#ffa500";
      const name = user.name || `User: ${clientId}`;
      quillCursors.createCursor(clientId.toString(), name, color);
      const anchor = createAbsolutePositionFromRelativePosition(createRelativePositionFromJSON(aw.cursor.anchor), doc2);
      const head = createAbsolutePositionFromRelativePosition(createRelativePositionFromJSON(aw.cursor.head), doc2);
      if (anchor && head && anchor.type === type) {
        quillCursors.moveCursor(clientId.toString(), { index: anchor.index, length: head.index - anchor.index });
      }
    } else {
      quillCursors.removeCursor(clientId.toString());
    }
  } catch (err) {
    console.error(err);
  }
};
var QuillBinding = class {
  /**
   * @param {Y.Text} type
   * @param {any} quill
   * @param {Awareness} [awareness]
   */
  constructor(type, quill2, awareness) {
    const doc2 = (
      /** @type {Y.Doc} */
      type.doc
    );
    this.type = type;
    this.doc = doc2;
    this.quill = quill2;
    const quillCursors = quill2.getModule("cursors") || null;
    this.quillCursors = quillCursors;
    this._negatedUsedFormats = {};
    this.awareness = awareness;
    this._awarenessChange = ({ added, removed, updated }) => {
      const states = (
        /** @type {Awareness} */
        awareness.getStates()
      );
      added.forEach((id2) => {
        updateCursor(quillCursors, states.get(id2), id2, doc2, type);
      });
      updated.forEach((id2) => {
        updateCursor(quillCursors, states.get(id2), id2, doc2, type);
      });
      removed.forEach((id2) => {
        quillCursors.removeCursor(id2.toString());
      });
    };
    this._typeObserver = (event) => {
      if (event.transaction.origin !== this) {
        const eventDelta = event.delta;
        const delta = [];
        for (let i = 0; i < eventDelta.length; i++) {
          const d = eventDelta[i];
          if (d.insert !== void 0) {
            delta.push(Object.assign({}, d, { attributes: Object.assign({}, this._negatedUsedFormats, d.attributes || {}) }));
          } else {
            delta.push(d);
          }
        }
        quill2.updateContents(delta, this);
      }
    };
    type.observe(this._typeObserver);
    this._quillObserver = (eventType, delta, state, origin) => {
      if (delta && delta.ops) {
        const ops = delta.ops;
        ops.forEach((op) => {
          if (op.attributes !== void 0) {
            for (const key in op.attributes) {
              if (this._negatedUsedFormats[key] === void 0) {
                this._negatedUsedFormats[key] = false;
              }
            }
          }
        });
        if (origin !== this) {
          doc2.transact(() => {
            type.applyDelta(ops);
          }, this);
        }
      }
      if (awareness && quillCursors) {
        const sel = quill2.getSelection();
        const aw = (
          /** @type {any} */
          awareness.getLocalState()
        );
        if (sel === null) {
          if (awareness.getLocalState() !== null) {
            awareness.setLocalStateField(
              "cursor",
              /** @type {any} */
              null
            );
          }
        } else {
          const anchor = createRelativePositionFromTypeIndex(type, sel.index);
          const head = createRelativePositionFromTypeIndex(type, sel.index + sel.length);
          if (!aw || !aw.cursor || !compareRelativePositions(anchor, aw.cursor.anchor) || !compareRelativePositions(head, aw.cursor.head)) {
            awareness.setLocalStateField("cursor", {
              anchor,
              head
            });
          }
        }
        awareness.getStates().forEach((aw2, clientId) => {
          updateCursor(quillCursors, aw2, clientId, doc2, type);
        });
      }
    };
    quill2.on("editor-change", this._quillObserver);
    quill2.setContents(type.toDelta(), this);
    if (quillCursors !== null && awareness) {
      awareness.getStates().forEach((aw, clientId) => {
        updateCursor(quillCursors, aw, clientId, doc2, type);
      });
      awareness.on("change", this._awarenessChange);
    }
  }
  destroy() {
    this.type.unobserve(this._typeObserver);
    this.quill.off("editor-change", this._quillObserver);
    if (this.awareness) {
      this.awareness.off("change", this._awarenessChange);
    }
  }
};

// src/editor.js
var import_quill_cursors = __toESM(require_quill_cursors());

// node_modules/@enzedonline/quill-blot-formatter2/dist/index.esm.js
var v = class {
  formatter;
  toolbarButtons = [];
  debug;
  constructor(t) {
    this.formatter = t, this.debug = this.formatter.options.debug || false, this.debug && console.debug("Action created:", this.constructor.name);
  }
  /**
   * Called when the action is created.
   * Override this method to implement custom initialization logic.
   */
  onCreate = () => {
  };
  /**
   * Called when the action is being destroyed.
   * Override this method to implement custom cleanup logic.
   */
  onDestroy = () => {
  };
  /**
   * Called when the action should be updated.
   * Override this method to implement custom update logic.
   */
  onUpdate = () => {
  };
};
var _ = class __ extends v {
  /**
   * Moves the caret (text cursor) backward by a specified number of characters within the current selection.
   *
   * If the caret is at the beginning of a text node, it attempts to move to the end of the previous sibling text node.
   * If there is no previous sibling or the selection is not valid, the caret position remains unchanged.
   *
   * @param n - The number of characters to move the caret back. Defaults to 1.
   */
  static sendCaretBack = (t = 1, e = false) => {
    const i = window.getSelection();
    if (i && i.rangeCount > 0) {
      const s = i.getRangeAt(0), o = s.startContainer, n = s.startOffset;
      if (n > 0)
        s.setStart(o, n - t);
      else if (o.previousSibling) {
        const r = o.previousSibling;
        r.nodeType === Node.TEXT_NODE && s.setStart(r, r.textContent?.length || 0);
      }
      s.collapse(true), i.removeAllRanges(), i.addRange(s), e && console.debug("Caret moved back by", t, "characters");
    }
  };
  /**
   * Places the caret (text cursor) immediately before the specified blot in the Quill editor.
   *
   * @param quill - The Quill editor instance.
   * @param targetBlot - The blot before which the caret should be placed.
   */
  static placeCaretBeforeBlot = (t, e, i = false) => {
    const s = t.getIndex(e);
    t.setSelection(s, 0, "user"), i && console.debug("Caret placed before blot at index:", s, e);
  };
  /**
   * Places the caret (text cursor) immediately after the specified blot in the Quill editor.
   *
   * This method first clears any existing selection and ensures the editor is focused.
   * It then calculates the index of the target blot and determines whether it is the last blot in the document.
   * - If the target blot is the last one, the caret is placed at the very end of the document.
   * - Otherwise, the caret is positioned just after the target blot, using a combination of Quill's selection API
   *   and a native browser adjustment to avoid placing the caret inside a formatting span wrapper.
   *
   * @param quill - The Quill editor instance.
   * @param targetBlot - The blot after which the caret should be placed.
   */
  static placeCaretAfterBlot = (t, e, i = false) => {
    t.setSelection(null), t.root.focus();
    const s = t.getIndex(e), o = t.getLength();
    s + 1 >= o - 1 ? (t.setSelection(o - 1, 0, "user"), i && console.debug("Caret placed at the end of the document after blot:", e)) : (i && console.debug("Caret placed after character following blot at index:", s, e), t.setSelection(s + 2, 0, "user"), this.sendCaretBack(1, i));
  };
  /**
   * Initializes event listeners for the CaretAction.
   *
   * Adds a 'keyup' event listener to the document and an 'input' event listener
   * to the Quill editor's root element. Both listeners trigger the `onKeyUp` handler.
   *
   * @remarks
   * This method should be called when the action is created to ensure proper
   * caret handling and formatting updates in response to user input.
   */
  onCreate = () => {
    document.addEventListener("keyup", this.onKeyUp), this.formatter.quill.root.addEventListener("input", this.onKeyUp);
  };
  /**
   * Cleans up event listeners attached by this action.
   *
   * Removes the 'keyup' event listener from the document and the 'input' event listener
   * from the Quill editor's root element to prevent memory leaks and unintended behavior
   * after the action is destroyed.
   */
  onDestroy = () => {
    document.removeEventListener("keyup", this.onKeyUp), this.formatter.quill.root.removeEventListener("input", this.onKeyUp);
  };
  /**
   * Handles the keyup event for caret navigation around a target blot in the editor.
   *
   * - If a modal is open or there is no current formatting specification, the handler exits early.
   * - If the left arrow key is pressed, places the caret before the target blot and hides the formatter UI.
   * - If the right arrow key is pressed, places the caret after the target blot and hides the formatter UI.
   *
   * @param e - The keyboard event triggered by the user's keyup action.
   */
  onKeyUp = (t) => {
    const e = !!document.querySelector("[data-blot-formatter-modal]");
    if (!this.formatter.currentSpec || e)
      return;
    const i = this.formatter.currentSpec.getTargetBlot();
    i && (t.code === "ArrowLeft" ? (__.placeCaretBeforeBlot(this.formatter.quill, i, this.debug), this.formatter.hide()) : t.code === "ArrowRight" && (__.placeCaretAfterBlot(this.formatter.quill, i, this.debug), this.formatter.hide()));
  };
};
function T(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var C;
var S;
function R() {
  if (S) return C;
  S = 1;
  var h = function(c) {
    return t(c) && !e(c);
  };
  function t(a) {
    return !!a && typeof a == "object";
  }
  function e(a) {
    var c = Object.prototype.toString.call(a);
    return c === "[object RegExp]" || c === "[object Date]" || o(a);
  }
  var i = typeof Symbol == "function" && Symbol.for, s = i ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
  function o(a) {
    return a.$$typeof === s;
  }
  function n(a) {
    return Array.isArray(a) ? [] : {};
  }
  function r(a, c) {
    return c.clone !== false && c.isMergeableObject(a) ? x(n(a), a, c) : a;
  }
  function l(a, c, d) {
    return a.concat(c).map(function(y) {
      return r(y, d);
    });
  }
  function p(a, c) {
    if (!c.customMerge)
      return x;
    var d = c.customMerge(a);
    return typeof d == "function" ? d : x;
  }
  function m(a) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a).filter(function(c) {
      return Object.propertyIsEnumerable.call(a, c);
    }) : [];
  }
  function u(a) {
    return Object.keys(a).concat(m(a));
  }
  function g(a, c) {
    try {
      return c in a;
    } catch {
      return false;
    }
  }
  function b(a, c) {
    return g(a, c) && !(Object.hasOwnProperty.call(a, c) && Object.propertyIsEnumerable.call(a, c));
  }
  function M(a, c, d) {
    var y = {};
    return d.isMergeableObject(a) && u(a).forEach(function(f) {
      y[f] = r(a[f], d);
    }), u(c).forEach(function(f) {
      b(a, f) || (g(a, f) && d.isMergeableObject(c[f]) ? y[f] = p(f, d)(a[f], c[f], d) : y[f] = r(c[f], d));
    }), y;
  }
  function x(a, c, d) {
    d = d || {}, d.arrayMerge = d.arrayMerge || l, d.isMergeableObject = d.isMergeableObject || h, d.cloneUnlessOtherwiseSpecified = r;
    var y = Array.isArray(c), f = Array.isArray(a), B = y === f;
    return B ? y ? d.arrayMerge(a, c, d) : M(a, c, d) : r(c, d);
  }
  x.all = function(c, d) {
    if (!Array.isArray(c))
      throw new Error("first argument should be an array");
    return c.reduce(function(y, f) {
      return x(y, f, d);
    }, {});
  };
  var z = x;
  return C = z, C;
}
var O = R();
var H = /* @__PURE__ */ T(O);
var N = class {
  formatter;
  element;
  buttons = {};
  constructor(t) {
    this.formatter = t, this.element = document.createElement("div"), this.element.classList.add(this.formatter.options.toolbar.mainClassName), this.element.addEventListener("mousedown", (e) => {
      e.stopPropagation();
    }), this.formatter.options.toolbar.mainStyle && Object.assign(this.element.style, this.formatter.options.toolbar.mainStyle);
  }
  /**
   * Creates and appends toolbar action buttons to the toolbar element. 
   * Called by BlotFormatter.show() to initialize the toolbar.
   * 
   * Iterates through all actions registered in the formatter, collects their toolbar buttons,
   * stores each button in the `buttons` map by its action name, and appends the created button elements
   * to the toolbar's DOM element. Finally, appends the toolbar element to the formatter's overlay.
   */
  create = () => {
    const t = [];
    this.formatter.actions.forEach((e) => {
      e.toolbarButtons.forEach((i) => {
        this.buttons[i.action] = i, t.push(i.create());
      });
    }), this.element.append(...t), this.formatter.overlay.append(this.element), this.formatter.options.debug && console.debug("Toolbar created with buttons:", Object.keys(this.buttons), t);
  };
  /**
   * Cleans up the toolbar by removing its element from the overlay,
   * destroying all associated buttons, and clearing internal references.
   * Called by BlotFormatter.hide() to remove the toolbar from the DOM.
   * 
   * This should be called when the toolbar is no longer needed to prevent memory leaks.
   */
  destroy = () => {
    this.element && this.formatter.overlay.removeChild(this.element);
    for (const t of Object.values(this.buttons))
      t.destroy();
    this.buttons = {}, this.element.innerHTML = "", this.formatter.options.debug && console.debug("Toolbar destroyed");
  };
};
var k = class _k {
  /**
   * Initializes the tooltip adjustment watcher when the action is created.
   * Searches for the tooltip element within the Quill container and, if found,
   * sets up observation for tooltip adjustments. Logs a warning if the tooltip
   * element is not present.
   *
   * @remarks
   * This method should be called during the creation lifecycle of the action.
   */
  constructor(t, e = false) {
    this.quill = t, this.debug = e;
    const i = t.container.querySelector(".ql-tooltip");
    console.debug("tooltip:", i), i ? (_k.watchTooltip(t, e), e && console.debug("Tooltip watcher initialized for:", i)) : console.warn("No tooltip found to watch for adjustments.");
  }
  /**
   * Repositions a tooltip element within a given container to ensure it does not overflow
   * the container's boundaries. Adjusts the tooltip's `top` and `left` CSS properties if
   * necessary to keep it fully visible. Optionally logs debug information about the repositioning.
   *
   * @param tooltip - The tooltip HTMLDivElement to reposition.
   * @param container - The container HTMLElement within which the tooltip should remain visible.
   * @param debug - If true, logs debug information to the console. Defaults to false.
   */
  static _repositionTooltip = (t, e, i = false) => {
    const s = t.getBoundingClientRect(), o = e.getBoundingClientRect();
    let n = s.left - o.left, r = s.top - o.top;
    const l = s.width, p = s.height, m = e.clientWidth, u = e.clientHeight;
    let g = false;
    const b = {};
    r < 0 && (b.top = `${s.height}px`, g = true), r + p > u && (b.top = `${u - p}px`, g = true), n < 0 && (b.left = "0px", g = true), n + l > m && (b.left = `${m - l}px`, g = true), g ? (i && console.debug("Repositioning tooltip", b), b.top !== void 0 && (t.style.top = b.top), b.left !== void 0 && (t.style.left = b.left), t.classList.contains("ql-flip") && t.classList.remove("ql-flip")) : i && console.debug("Tooltip position is fine, no changes needed");
  };
  // Static property to store observers
  static observers = /* @__PURE__ */ new WeakMap();
  /**
   * Observes changes to the tooltip's attributes and triggers repositioning when necessary.
   *
   * @param quill - The Quill editor instance containing the tooltip.
   * @param debug - Optional flag to enable debug logging of attribute mutations.
   *
   * @remarks
   * Uses a MutationObserver to monitor changes to the tooltip's `style` and `class` attributes.
   * When a mutation is detected, the tooltip is repositioned within the container.
   * If `debug` is true, mutation details are logged to the console.
   */
  static watchTooltip(t, e = false) {
    const i = t.container.querySelector(".ql-tooltip"), s = t.container;
    if (!i) {
      console.warn("No tooltip found to watch for adjustments.");
      return;
    }
    this.removeTooltipWatcher(i, e);
    let o = false;
    const n = new MutationObserver((r) => {
      if (!o) {
        if (e)
          for (const l of r)
            console.debug("Tooltip mutation:", l.attributeName, i.getAttribute(l.attributeName));
        o = true, this._repositionTooltip(i, s, e), setTimeout(() => {
          o = false;
        }, 0);
      }
    });
    n.observe(i, {
      attributes: true,
      attributeFilter: ["style", "class"]
    }), this.observers.set(i, n);
  }
  /**
   * Removes the MutationObserver for the specified tooltip element.
   *
   * @param tooltip - The HTMLDivElement or Quill instance to stop watching.
   *                  If a Quill instance is provided, finds the tooltip within its container.
   */
  static removeTooltipWatcher(t, e = false) {
    let i = null;
    t instanceof HTMLDivElement ? i = t : i = t.container.querySelector(".ql-tooltip"), i && this.observers.has(i) && (this.observers.get(i)?.disconnect(), this.observers.delete(i), e && console.debug("Tooltip watcher removed for:", i));
  }
  /**
   * Cleans up resources when the action is destroyed.
   * Specifically, it finds the tooltip element within the Quill editor container
   * and removes its associated watcher if the tooltip exists.
   */
  destroy = () => {
    this.quill.container.querySelector(".ql-tooltip") && (_k.removeTooltipWatcher(this.quill, this.debug), this.debug && console.debug("Tooltip watcher removed on destroy"));
  };
};
var q = (h) => {
  const t = h.import("formats/image"), e = ["alt", "height", "width", "title"];
  return class extends t {
    static blotName = "image";
    static formats(s) {
      return e.reduce(
        (o, n) => (s.hasAttribute(n) && (o[n] = s.getAttribute(n)), o),
        {}
      );
    }
    format(s, o) {
      e.indexOf(s) > -1 ? o || s === "alt" ? this.domNode.setAttribute(s, o) : this.domNode.removeAttribute(s) : super.format(s, o);
    }
  };
};
var W = (h) => {
  const t = h.import("parchment"), { ClassAttributor: e, Scope: i } = t;
  return class extends e {
    constructor(o = false) {
      super("iframeAlign", "ql-iframe-align", {
        scope: i.BLOCK,
        whitelist: ["left", "center", "right"]
      }), this.debug = o;
    }
    static attrName = "iframeAlign";
    /**
     * Adds alignment and width-related formatting to the specified HTML element node.
     *
     * - Sets the alignment using the provided value, which can be either a string or an object containing an `align` property.
     * - Stores the alignment value in the element's `data-blot-align` attribute.
     * - Handles the element's `width` attribute:
     *   - If present, ensures the width value includes units (appends 'px' if numeric only).
     *   - Sets the CSS custom property `--resize-width` to the processed width value.
     *   - Sets the `data-relative-size` attribute to `'true'` if the width ends with '%', otherwise `'false'`.
     *   - If no width is specified, removes the `--resize-width` property and sets `data-relative-size` to `'false'`.
     *
     * @param node - The DOM element to which alignment and width formatting will be applied.
     * @param value - The alignment value, either as a string or an object with an `align` property.
     * @returns `true` if the formatting was successfully applied to an HTMLElement, otherwise `false`.
     */
    add(o, n) {
      if (this.debug && console.debug("IframeAlignAttributor.add", o, n), o instanceof HTMLElement) {
        typeof n == "object" ? (super.add(o, n.align), o.dataset.blotAlign = n.align) : (super.add(o, n), o.dataset.blotAlign = n);
        let r = o.getAttribute("width");
        return r ? (isNaN(Number(r.trim().slice(-1))) || (r = `${r}px`), o.style.setProperty("--resize-width", r), o.dataset.relativeSize = `${r.endsWith("%")}`) : (o.style.removeProperty("--resize-width"), o.dataset.relativeSize = "false"), this.debug && console.debug("IframeAlignAttributor.add - node:", o, "aligned with:", n), true;
      } else
        return this.debug && console.debug("IframeAlignAttributor.add - node is not an HTMLElement, skipping alignment"), false;
    }
    /**
     * Removes the alignment formatting from the specified DOM element.
     * 
     * If the provided node is an instance of HTMLElement, this method first calls the
     * parent class's `remove` method to perform any additional removal logic, and then
     * deletes the `data-blot-align` attribute from the element's dataset.
     *
     * @param node - The DOM element from which to remove the alignment formatting.
     */
    remove(o) {
      this.debug && console.debug("IframeAlignAttributor.remove", o), o instanceof HTMLElement && (super.remove(o), delete o.dataset.blotAlign);
    }
    /**
     * Extracts alignment and width information from a given DOM element.
     *
     * @param node - The DOM element from which to extract alignment and width values.
     * @returns An object containing:
     *   - `align`: The alignment class name derived from the superclass's value method.
     *   - `width`: The width value, determined from the element's CSS custom property '--resize-width', 
     *     its 'width' attribute, or an empty string if not present.
     *   - `relativeSize`: A string indicating whether the width ends with a '%' character, representing a relative size.
     */
    value(o) {
      const n = super.value(o), r = o instanceof HTMLElement && (o.style.getPropertyValue("--resize-width") || o.getAttribute("width")) || "", l = {
        align: n,
        width: r,
        relativeSize: `${r.endsWith("%")}`
      };
      return this.debug && console.debug("IframeAlignAttributor.value", o, l), l;
    }
  };
};
var D = (h) => {
  const t = h.import("parchment"), { ClassAttributor: e, Scope: i } = t;
  return class extends e {
    constructor(o = false) {
      super("imageAlign", "ql-image-align", {
        scope: i.INLINE,
        whitelist: ["left", "center", "right"]
      }), this.debug = o;
    }
    static tagName = "SPAN";
    static attrName = "imageAlign";
    /**
     * Adds or updates alignment and related formatting for an image wrapper node.
     *
     * This method applies alignment, caption, and width formatting to a given node containing an image.
     * It handles both object-based and string-based alignment values, updates relevant attributes,
     * and ensures the wrapper is styled correctly for Quill's image formatting.
     *
     * - If the node is an HTMLSpanElement, it sets alignment, caption (data-title), and width attributes.
     * - If the node is not a span, it attempts to find an image child and reapply the imageAlign format.
     * - Handles Quill's inline style merging quirks to avoid redundant wrappers.
     *
     * @param node - The DOM element (typically a span or container) to apply formatting to.
     * @param value - The alignment value, which can be a string or an object containing alignment and optional title.
     * @returns `true` if formatting was applied or handled, `false` otherwise.
     */
    add(o, n) {
      if (this.debug && console.debug("ImageAlignAttributor.add", o, n), o instanceof HTMLSpanElement && n) {
        let r = o.querySelector("img");
        if (typeof n == "object" && n.align)
          super.add(o, n.align), o.setAttribute("contenteditable", "false"), n.title ? o.setAttribute("data-title", n.title) : o.removeAttribute("data-title"), n.align && (r.dataset.blotAlign = n.align), this.debug && console.debug("ImageAlignAttributor.add - imageElement:", r, "aligned with:", n.align);
        else if (typeof n == "string")
          super.add(o, n), r.dataset.blotAlign = n, this.debug && console.debug("ImageAlignAttributor.add - imageElement:", r, "aligned with:", n);
        else
          return this.debug && console.debug("ImageAlignAttributor.add - no value provided, skipping alignment"), false;
        let l = this.getImageWidth(r);
        return o.setAttribute("data-relative-size", `${l?.endsWith("%")}`), true;
      } else {
        const r = o instanceof HTMLImageElement ? o : o.querySelector("img");
        if (this.debug && console.debug(`ImageAlignAttributor.add - ${o.tagName} is not a span, checking for image:`, r), r instanceof HTMLImageElement) {
          const l = h.find(r);
          return this.debug && console.debug("ImageAlignAttributor.add - found image blot:", l), l && (o.firstChild instanceof HTMLSpanElement || !r.parentElement?.matches('span[class^="ql-image-align-"]')) && (l.format("imageAlign", n), this.debug && console.debug("ImageAlignAttributor.add - reapplying imageAlign format to image blot:", n, l)), true;
        }
        return false;
      }
    }
    /**
     * Removes alignment formatting from the given DOM node.
     *
     * If the node is an HTMLElement, it first calls the parent class's remove method.
     * Then, if the node's first child is also an HTMLElement, it deletes the `blotAlign`
     * data attribute from that child element.
     *
     * @param node - The DOM element from which to remove alignment formatting.
     */
    remove(o) {
      this.debug && console.debug("ImageAlignAttributor.remove", o), o instanceof HTMLElement && (super.remove(o), o.firstChild && o.firstChild instanceof HTMLElement && delete o.firstChild.dataset.blotAlign);
    }
    /**
     * Retrieves alignment and metadata information for an image element within a given DOM node.
     *
     * This method attempts to find an `<img>` element within the provided node, then extracts its alignment,
     * title, and width attributes. If the width attribute is missing or invalid, it tries to determine the width
     * either immediately (if the image is loaded) or by setting an `onload` handler. The method returns an object
     * containing the alignment, title, width, a `contenteditable` flag, and a boolean string indicating if the width
     * is specified as a percentage.
     *
     * @param node - The DOM element to search for an image and extract alignment and metadata from.
     * @returns An object containing the image's alignment, title, width, contenteditable status, and relative size flag.
     */
    value(o) {
      const n = o.querySelector("img");
      if (!n) return null;
      const r = n.parentElement, l = super.value(r), p = n.getAttribute("title") || "";
      let m = n.getAttribute("width") || "";
      parseFloat(m) || (n.complete ? m = this.getImageWidth(n) : n.onload = (g) => {
        m = this.getImageWidth(g.target);
      });
      const u = {
        align: l,
        title: p,
        width: m,
        contenteditable: "false",
        relativeSize: `${m.endsWith("%")}`
      };
      return this.debug && console.debug("ImageAlignAttributor.value", o, u), u;
    }
    /**
     * Retrieves the width of the given HTMLImageElement, ensuring it is set as an attribute and formatted with 'px' units.
     * 
     * - If the 'width' attribute is not present, it uses the image's natural width and sets it as the 'width' attribute in pixels.
     * - If the 'width' attribute exists but does not end with a non-numeric character (i.e., is a number), it appends 'px' to the value.
     * - Updates the parent element's CSS variable '--resize-width' with the computed width.
     * 
     * @param imageElement - The HTMLImageElement whose width is to be retrieved and set.
     * @returns The width of the image as a string with 'px' units.
     */
    getImageWidth(o) {
      let n = o.getAttribute("width");
      return n ? isNaN(Number(n.trim().slice(-1))) || (n = `${n}px`, o.setAttribute("width", n)) : (n = `${o.naturalWidth}px`, o.setAttribute("width", n)), o.parentElement.style.setProperty("--resize-width", n), n;
    }
  };
};
var j = (h) => {
  const t = h.import("formats/video");
  return class extends t {
    static blotName = "video";
    static aspectRatio = "16 / 9 auto";
    static create(i) {
      const s = super.create(i);
      return s.setAttribute("width", "100%"), s.style.aspectRatio = this.aspectRatio, s;
    }
    html() {
      return this.domNode.outerHTML;
    }
  };
};
var $2 = class {
  alignments = {};
  options;
  formatter;
  debug;
  Scope;
  constructor(t) {
    this.formatter = t, this.debug = t.options.debug ?? false;
    const e = t.Quill.import("parchment");
    this.Scope = e.Scope, this.options = t.options, this.options.align.alignments.forEach((i) => {
      this.alignments[i] = {
        name: i,
        apply: (s) => {
          this.setAlignment(s, i);
        }
      };
    }), this.debug && console.debug("DefaultAligner created with alignments:", this.alignments);
  }
  /**
   * Retrieves all available alignment options.
   *
   * @returns {Alignment[]} An array of alignment objects defined in the `alignments` property.
   */
  getAlignments = () => Object.keys(this.alignments).map((t) => this.alignments[t]);
  /**
   * Clears alignment formatting from the given blot if it is an image or iframe.
   *
   * - For image blots (`IMG`), if the parent is a `SPAN`, removes the alignment attribute from the parent.
   * - For iframe blots (`IFRAME`), removes the alignment attribute directly from the blot.
   *
   * @param blot - The blot to clear alignment formatting from, or `null` if none.
   */
  clear = (t) => {
    t != null && (t.domNode.tagName === "IMG" ? t.parent !== null && t.parent.domNode.tagName === "SPAN" && (t.parent.format(this.formatter.ImageAlign.attrName, false), this.debug && console.debug("Cleared image alignment from parent span:", t.parent)) : t.domNode.tagName === "IFRAME" && (t.format(this.formatter.IframeAlign.attrName, false), this.debug && console.debug("Cleared iframe alignment:", t)));
  };
  /**
   * Determines whether the given blot is an inline blot.
   *
   * Checks if the provided `blot` has a scope that matches the inline blot scope.
   *
   * @param blot - The blot instance to check.
   * @returns `true` if the blot is an inline blot; otherwise, `false`.
   */
  isInlineBlot = (t) => (t.statics?.scope & this.Scope.INLINE) === this.Scope.INLINE_BLOT;
  /**
   * Determines if the provided blot is a block-level blot.
   *
   * Checks the blot's static scope against the BLOCK scope constant,
   * and returns true if it matches the BLOCK_BLOT type.
   *
   * @param blot - The blot instance to check.
   * @returns True if the blot is a block blot; otherwise, false.
   */
  isBlockBlot = (t) => (t.statics?.scope & this.Scope.BLOCK) === this.Scope.BLOCK_BLOT;
  /**
   * Determines whether the given blot has an inline scope.
   *
   * @param blot - The blot instance to check.
   * @returns `true` if the blot's scope includes the inline scope; otherwise, `false`.
   */
  hasInlineScope = (t) => (t.statics.scope & this.Scope.INLINE) === this.Scope.INLINE;
  /**
   * Determines whether the given blot has block-level scope.
   *
   * @param blot - The blot instance to check.
   * @returns `true` if the blot's scope includes block-level formatting; otherwise, `false`.
   */
  hasBlockScope = (t) => (t.statics.scope & this.Scope.BLOCK) === this.Scope.BLOCK;
  /**
   * Determines whether the given blot is aligned.
   *
   * If an alignment is specified, returns `true` only if the blot's alignment matches the specified alignment.
   * If no alignment is specified, returns `true` if the blot has any alignment.
   *
   * @param blot - The blot to check for alignment.
   * @param alignment - The alignment to compare against, or `null` to check for any alignment.
   * @returns `true` if the blot is aligned (and matches the specified alignment, if provided); otherwise, `false`.
   */
  isAligned = (t, e) => {
    const i = this.getAlignment(t);
    return e ? i === e.name : !!i;
  };
  /**
   * Retrieves the alignment value from the given blot's DOM node.
   *
   * @param blot - The blot instance whose alignment is to be determined.
   * @returns The alignment value as a string if present, otherwise `undefined`.
   */
  getAlignment = (t) => t.domNode.dataset.blotAlign;
  /**
   * Sets the alignment for a given blot (content element) in the editor.
   *
   * This method checks if the blot is already aligned as requested. If not, it clears any existing alignment,
   * and applies the new alignment based on the blot type (inline or block). For inline blots (such as images),
   * it may also set a relative width attribute if required by the configuration. For block blots (such as iframes),
   * it applies the alignment directly.
   *
   * Additionally, if the editor contains only an image, it ensures a new paragraph is added underneath to maintain
   * editor usability.
   *
   * @param blot - The blot (content element) to align. Can be `null`, in which case no action is taken.
   * @param alignment - The alignment to apply (e.g., 'left', 'center', 'right'). Must correspond to a key in `this.alignments`.
   */
  setAlignment = (t, e) => {
    if (t === null) {
      this.debug && console.debug("DefaultAligner.setAlignment called with null blot, no action taken");
      return;
    }
    const i = this.isAligned(t, this.alignments[e]);
    if (this.debug && console.debug("hasAlignment", i), this.clear(t), !i)
      if (this.isInlineBlot(t) || this.hasInlineScope(t)) {
        if (this.debug && console.debug("setting alignment", this.isInlineBlot(t) || this.hasInlineScope(t)), !t.domNode.getAttribute("width") && this.options.resize.useRelativeSize && !this.options.resize.allowResizeModeChange)
          try {
            const s = getComputedStyle(this.formatter.quill.root), o = this.formatter.quill.root.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
            t.domNode.setAttribute(
              "width",
              `${Math.min(Math.round(100 * t.domNode.naturalWidth / o), 100)}%`
            );
          } catch {
            this.debug && console.debug("DefaultAligner.setAlignment Error setting image width:", t);
          }
        this.debug && console.debug(
          "DefaultAligner.setAlignment formatting image with",
          this.formatter.ImageAlign.attrName,
          {
            align: this.alignments[e].name,
            title: t.domNode.getAttribute("title") || ""
          }
        ), t.format(
          this.formatter.ImageAlign.attrName,
          {
            align: this.alignments[e].name,
            title: t.domNode.getAttribute("title") || ""
          }
        );
        try {
          const s = this.formatter.quill.getContents().ops;
          s.length === 2 && s[1].insert === `
` && this.formatter.quill.insertText(this.formatter.quill.getLength(), `
`, "user");
        } catch {
        }
      } else (this.isBlockBlot(t) || this.hasBlockScope(t)) && (this.debug && console.debug(
        "DefaultAligner.setAlignment formatting iframe with",
        this.formatter.IframeAlign.attrName,
        {
          align: this.alignments[e].name
        }
      ), t.format(
        this.formatter.IframeAlign.attrName,
        this.alignments[e].name
      ));
  };
};
var A = class {
  action;
  icon;
  onClick;
  options;
  element = null;
  initialVisibility = true;
  // preset visibility before button is created
  constructor(t, e, i) {
    this.action = t, this.icon = i.icons[t], this.onClick = e, this.options = i;
  }
  /**
   * Creates and initializes the toolbar button element.
   * 
   * This method constructs a `span` element, sets its inner HTML to the provided icon,
   * assigns the appropriate class name and action data attribute, and attaches the click handler.
   * If tooltips are configured for the action, it sets the tooltip text.
   * The button's selected and visible states are initialized, and custom styling is applied.
   * 
   * @returns {HTMLElement} The created and configured toolbar button element.
   */
  create = () => (this.element = document.createElement("span"), this.element.innerHTML = this.icon, this.element.className = this.options.buttonClassName, this.element.dataset.action = this.action, this.element.onclick = this.onClick, this.options.tooltips && this.options.tooltips[this.action] && (this.element.title = this.options.tooltips[this.action]), this.selected = this.preselect(), this.visible = this.initialVisibility, this._styleButton(), this.element);
  /**
   * Cleans up the toolbar button by removing its click event handler,
   * detaching it from the DOM, and clearing the reference to the element.
   * This method should be called when the button is no longer needed to
   * prevent memory leaks.
   */
  destroy = () => {
    this.element && (this.element.onclick = null, this.element.remove(), this.element = null);
  };
  /**
   * Determines whether the toolbar button should appear as selected (active) when loaded.
   * Override this method to provide custom logic for button selection state.
   *
   * @returns {boolean} `true` if the button should be preselected; otherwise, `false`.
   */
  preselect = () => false;
  /**
   * Indicates whether the toolbar button is currently selected.
   *
   * Returns `true` if the underlying element's `data-selected` attribute is set to `'true'`, otherwise returns `false`.
   */
  get selected() {
    return this.element?.dataset.selected === "true";
  }
  /**
   * Sets the selected state of the toolbar button.
   * 
   * When set to `true`, applies the selected class and style to the button element.
   * When set to `false`, removes the selected class and style, and reapplies the default button style if provided.
   * Also updates the `data-selected` attribute on the element.
   *
   * @param value - Indicates whether the button should be in the selected state.
   */
  set selected(t) {
    this.element && (this.element.dataset.selected = t.toString(), t ? (this.element.classList.add(this.options.buttonSelectedClassName), this.options.buttonSelectedStyle && Object.assign(this.element.style, this.options.buttonSelectedStyle)) : (this.element.classList.remove(this.options.buttonSelectedClassName), this.options.buttonSelectedStyle && (this.element.removeAttribute("style"), this.options.buttonStyle && Object.assign(this.element.style, this.options.buttonStyle))));
  }
  /**
   * Indicates whether the toolbar button is currently visible.
   * Returns `true` if the button's element is not hidden (`display` is not set to `'none'`), otherwise returns `false`.
   */
  get visible() {
    return this.element?.style.display !== "none";
  }
  /**
   * Sets the visibility of the toolbar button element.
   * Accepts a CSS display value as a string or a boolean.
   * If a boolean is provided, `true` sets the display to 'inline-block', and `false` sets it to 'none'.
   * If a string is provided, it is used directly as the CSS display value.
   *
   * @param style - The desired visibility state, either as a CSS display string or a boolean.
   */
  set visible(t) {
    this.element && (typeof t == "boolean" && (t = t ? "inline-block" : "none"), this.element.style.display = t);
  }
  /**
   * Applies custom styles to the toolbar button and its SVG child element, if provided in the options.
   *
   * - If `options.buttonStyle` is defined, it merges the style properties into the button's element.
   * - If `options.svgStyle` is defined, it merges the style properties into the first child element (assumed to be an SVG).
   *
   * @private
   */
  _styleButton = () => {
    if (this.element && (this.options.buttonStyle && Object.assign(this.element.style, this.options.buttonStyle), this.options.svgStyle)) {
      const t = this.element.children[0];
      t && Object.assign(t.style, this.options.svgStyle);
    }
  };
};
var P = class extends v {
  aligner;
  alignButtons = {};
  constructor(t) {
    super(t), this.aligner = new $2(t), t.options.debug && console.debug("AlignAction Aligner created:", this.aligner);
  }
  /**
   * Creates alignment toolbar buttons for each available alignment option.
   * 
   * Iterates over the alignments provided by the aligner and creates a `ToolbarButton`
   * for each alignment, storing them in the `alignButtons` map. If there is a currently
   * selected blot, it checks its alignment and preselects the corresponding button.
   * Optionally logs debug information about the created buttons and the current alignment.
   *
   * @private
   */
  _createAlignmentButtons = () => {
    for (const e of Object.values(this.aligner.alignments))
      this.alignButtons[e.name] = new A(
        e.name,
        this.onClickHandler,
        this.formatter.options.toolbar
      );
    const t = this.formatter.currentSpec?.getTargetBlot();
    if (t) {
      const e = this.aligner.getAlignment(t);
      e && this.alignButtons[e] && (this.alignButtons[e].preselect = () => true), this.debug && (console.debug("AlignAction alignment buttons created:", this.alignButtons), console.debug("Blot alignment on load:", e));
    }
  };
  /**
   * Clears the selection state of all alignment buttons.
   *
   * Iterates through all buttons in the `alignButtons` collection and sets their
   * `selected` property to `false`. If debugging is enabled, logs a message to the console.
   *
   * @private
   */
  _clearButtons = () => {
    for (const t of Object.values(this.alignButtons))
      t.selected = false;
    this.debug && console.debug("AlignAction alignment buttons cleared");
  };
  /**
   * Handles click events on alignment toolbar buttons.
   *
   * This event handler determines which alignment action was triggered by the user,
   * retrieves the corresponding alignment configuration, and applies or clears the alignment
   * on the currently selected blot in the editor. It also updates the toolbar button states
   * and logs debug information if enabled.
   *
   * @param event - The click event triggered by the user on a toolbar button.
   */
  onClickHandler = (t) => {
    const e = t.target.closest(`span.${this.formatter.options.toolbar.buttonClassName}`);
    if (e) {
      const i = e.dataset.action || "", s = this.formatter.currentSpec?.getTargetBlot();
      if (i && s) {
        const o = this.aligner.alignments[i];
        this._clearButtons(), this.aligner.isAligned(s, o) ? (this.aligner.clear(s), this.debug && console.debug("AlignAction clear alignment:", i, s)) : (this.aligner.setAlignment(s, i), this.alignButtons[i].selected = true, this.debug && console.debug("AlignAction set alignment:", i, s));
      }
    }
    this.formatter.update();
  };
  /**
   * Initializes the alignment action by creating alignment buttons and storing them in the toolbar.
   * If debug mode is enabled in the formatter options, logs the created alignment buttons to the console.
   *
   * @returns {void}
   */
  onCreate = () => {
    this._createAlignmentButtons(), this.toolbarButtons = Object.values(this.alignButtons), this.formatter.options.debug && console.debug("AlignAction alignment buttons created:", this.toolbarButtons);
  };
  /**
   * Cleans up resources used by the alignment action.
   * 
   * This method resets the `alignButtons` object and clears the `toolbarButtons` array.
   * If debug mode is enabled in the formatter options, a debug message is logged to the console.
   *
   * @returns {void}
   */
  onDestroy = () => {
    this.alignButtons = {}, this.toolbarButtons = [], this.formatter.options.debug && console.debug("AlignAction alignment buttons destroyed");
  };
};
var F = class extends v {
  /**
   * Initializes event listeners for the delete action.
   * 
   * - Adds a 'keyup' event listener to the document that triggers `_onKeyUp`.
   * - Adds an 'input' event listener to the Quill editor's root element that also triggers `_onKeyUp`.
   * 
   * This method should be called when the delete action is created to ensure
   * proper handling of keyboard and input events.
   */
  onCreate = () => {
    document.addEventListener("keyup", this._onKeyUp), this.formatter.quill.root.addEventListener("input", this._onKeyUp);
  };
  /**
   * Cleans up event listeners associated with the action.
   * 
   * Removes the 'keyup' event listener from the document and the 'input' event listener
   * from the Quill editor's root element to prevent memory leaks and unintended behavior
   * after the action is destroyed.
   */
  onDestroy = () => {
    document.removeEventListener("keyup", this._onKeyUp), this.formatter.quill.root.removeEventListener("input", this._onKeyUp);
  };
  /**
   * Handles the keyup event for delete and backspace actions.
   * 
   * If no modal is open and a current spec is selected, checks if the pressed key is
   * 'Delete' or 'Backspace'. If so, finds the target blot element in the Quill editor,
   * determines its index, and deletes one character at that index. Afterwards, hides the formatter UI.
   * 
   * @param e - The keyboard event triggered by the user.
   */
  _onKeyUp = (t) => {
    const e = !!document.querySelector("[data-blot-formatter-modal]");
    if (!(!this.formatter.currentSpec || e) && (t.code === "Delete" || t.code === "Backspace")) {
      this.debug && console.debug("DeleteAction keyup detected:", t.code);
      const i = this.formatter.currentSpec.getTargetElement();
      if (i) {
        const s = this.formatter.Quill.find(i);
        if (s) {
          const o = this.formatter.quill.getIndex(s);
          this.formatter.quill.deleteText(o, 1, "user");
        }
      }
      this.formatter.hide();
    }
  };
};
var U = class extends v {
  _topLeftHandle;
  _topRightHandle;
  _bottomRightHandle;
  _bottomLeftHandle;
  _dragHandle = null;
  _dragStartX = 0;
  _dragCursorStyle;
  _preDragWidth = 0;
  _pinchStartDistance = 0;
  _calculatedAspectRatio = 0;
  _computedAspectRatio = void 0;
  _target;
  _editorStyle;
  _editorWidth = 0;
  _useRelativeSize;
  _resizeModeButton = null;
  _isUnclickable = false;
  _hasResized = false;
  _formattedWidth = "";
  _sizeInfoTimerId = null;
  _isImage = false;
  _isSVG = false;
  _naturalWidth = void 0;
  constructor(t) {
    super(t), this._topLeftHandle = this._createHandle("top-left", "nwse-resize"), this._topRightHandle = this._createHandle("top-right", "nesw-resize"), this._bottomRightHandle = this._createHandle("bottom-right", "nwse-resize"), this._bottomLeftHandle = this._createHandle("bottom-left", "nesw-resize"), this._dragCursorStyle = document.createElement("style"), this._useRelativeSize = this.formatter.options.resize.useRelativeSize, t.options.resize.allowResizeModeChange && (this._resizeModeButton = this._createResizeModeButton(), this.toolbarButtons = [
      this._resizeModeButton
    ]);
  }
  /**
   * Initializes the resize action by setting up the target element, determining its type,
   * and appending resize handles to the overlay. Also attaches mouse and touch event listeners
   * to the overlay for handling user interactions. Finally, positions the handles according to
   * the specified style options.
   *
   * @remarks
   * This method should be called when the resize action is created to ensure all necessary
   * DOM elements and event listeners are properly initialized.
   */
  onCreate = () => {
    this._target = this.formatter.currentSpec?.getTargetElement(), this._isUnclickable = this.formatter.currentSpec?.isUnclickable || false, this._isImage = this._target instanceof HTMLImageElement, this._isImage && (this._isSVG = this._isSvgImage()), this.formatter.overlay.append(
      this._topLeftHandle,
      this._topRightHandle,
      this._bottomRightHandle,
      this._bottomLeftHandle
    ), this.formatter.overlay.addEventListener("mousedown", this._onOverlayMouseDown), this.formatter.overlay.addEventListener("mouseup", this._onOverlayMouseUp);
    const t = { passive: false };
    this.formatter.overlay.addEventListener("touchstart", this._onOverlayTouchStart, t), this.formatter.overlay.addEventListener("touchmove", this._onOverlayTouchMove, t), this.formatter.overlay.addEventListener("touchend", this._onOverlayTouchEnd, t);
    const e = this.formatter.options.resize.handleStyle || {};
    this._repositionHandles(e), this.debug && console.debug("ResizeAction created with target:", this._target, "isUnclickable:", this._isUnclickable);
  };
  /**
   * Cleans up resources and event listeners associated with the resize action.
   * 
   * This method resets internal state, removes resize handles from the overlay,
   * detaches mouse and touch event listeners, and triggers an update on the formatter.
   * 
   * Should be called when the resize action is no longer needed to prevent memory leaks
   * and unintended behavior.
   */
  onDestroy = () => {
    this._target = null, this._isUnclickable = false, this._isImage = false, this._naturalWidth = void 0, this._isSVG = false, this._setCursor(""), [
      this._topLeftHandle,
      this._topRightHandle,
      this._bottomRightHandle,
      this._bottomLeftHandle
    ].forEach((e) => {
      e.remove();
    }), this.formatter.overlay.removeEventListener("mousedown", this._onOverlayMouseDown), this.formatter.overlay.removeEventListener("mouseup", this._onOverlayMouseUp);
    const t = { passive: false };
    this.formatter.overlay.removeEventListener("touchstart", this._onOverlayTouchStart, t), this.formatter.overlay.removeEventListener("touchmove", this._onOverlayTouchMove, t), this.formatter.overlay.removeEventListener("touchend", this._onOverlayTouchEnd, t), this.formatter.update();
  };
  /**
   * Creates a resize handle element for the specified position with the given cursor style.
   *
   * The handle is styled using the class name and optional style provided in the formatter's options.
   * It also sets a `data-position` attribute and attaches a pointer down event listener.
   *
   * @param position - The position identifier for the handle (e.g., 'top-left', 'bottom-right').
   * @param cursor - The CSS cursor style to apply when hovering over the handle.
   * @returns The created HTMLElement representing the resize handle.
   */
  _createHandle = (t, e) => {
    const i = document.createElement("div");
    return i.classList.add(this.formatter.options.resize.handleClassName), i.setAttribute("data-position", t), i.style.cursor = e, this.formatter.options.resize.handleStyle && Object.assign(i.style, this.formatter.options.resize.handleStyle), i.addEventListener("pointerdown", this._onHandlePointerDown), i;
  };
  /**
   * Repositions the resize handles around an element based on the provided handle style.
   *
   * @param handleStyle - Optional style object containing width and height properties for the handles.
   *                      If provided, the handles are offset by half their width and height to center them.
   *                      If not provided, default offsets of '0px' are used.
   *
   * The method updates the `left`, `right`, `top`, and `bottom` CSS properties of the four handles
   * (`_topLeftHandle`, `_topRightHandle`, `_bottomRightHandle`, `_bottomLeftHandle`) to ensure they are
   * correctly positioned relative to the element being resized.
   */
  _repositionHandles = (t) => {
    const e = t?.width ? `${-parseFloat(t.width) / 2}px` : "0px", i = t?.height ? `${-parseFloat(t.height) / 2}px` : "0px", { style: s } = this._topLeftHandle;
    s.left = e, s.top = i;
    const { style: o } = this._topRightHandle;
    o.right = e, o.top = i;
    const { style: n } = this._bottomRightHandle;
    n.right = e, n.bottom = i;
    const { style: r } = this._bottomLeftHandle;
    r.left = e, r.bottom = i;
  };
  /**
   * Sets the cursor style for the document body and all its children.
   * When a non-empty value is provided, it applies the specified cursor style
   * globally by injecting a style element into the document head.
   * When an empty value is provided, it removes the previously injected style element,
   * reverting the cursor to its default behavior.
   *
   * @param value - The CSS cursor value to apply (e.g., 'pointer', 'col-resize').
   */
  _setCursor = (t) => {
    if (!document.body) {
      console.warn("ResizeAction: Cannot set cursor - document.body is null");
      return;
    }
    try {
      t ? (this._dragCursorStyle.innerHTML = `body, body * { cursor: ${t} !important; }`, document.head.contains(this._dragCursorStyle) || document.head.appendChild(this._dragCursorStyle)) : document.head.contains(this._dragCursorStyle) && document.head.removeChild(this._dragCursorStyle);
    } catch (e) {
      console.error("ResizeAction: Error setting cursor style:", e);
    }
  };
  /**
   * Activates or deactivates the resize mode for the target element.
   * 
   * When activated, prepares the target for resizing by determining the resize mode (absolute or relative),
   * calculating editor and target dimensions, handling aspect ratio logic, and displaying size information.
   * When deactivated, applies the finalized width to the _target, updates toolbar button states, sets style attributes,
   * clears cached natural width, updates the formatter, and hides the size info box.
   * 
   * @param activate - If `true`, activates resize mode; if `false`, finalizes and deactivates resize mode.
   */
  _resizeMode = (t) => {
    if (t) {
      if (this._hasResized = false, this._formattedWidth = "", this._target) {
        this._useRelativeSize = this.formatter._useRelative(this._target), this._editorStyle = getComputedStyle(this.formatter.quill.root), this._editorWidth = this.formatter.quill.root.clientWidth - parseFloat(this._editorStyle.paddingLeft) - parseFloat(this._editorStyle.paddingRight);
        const e = this._target.getBoundingClientRect();
        if ((e.height === void 0 || e.height === 0) && (e.height = this._target.clientHeight + 1), this._preDragWidth = e.width, this._computedAspectRatio = getComputedStyle(this._target).aspectRatio || "auto", this._calculatedAspectRatio = e.width / e.height, this._useRelativeSize)
          this._isUnclickable && this._computedAspectRatio === "auto" && (this._target.style.aspectRatio = this.formatter.options.video.defaultAspectRatio, console.warn(
            `No iframe aspect-ratio set. Set an aspect ratio either via custom blot or css.
Using temporary aspect ratio "${this.formatter.options.video.defaultAspectRatio}"`
          ));
        else if (this._isUnclickable && this._computedAspectRatio !== "auto") {
          const i = this._computedAspectRatio.match(/(\d+)\s*\/\s*(\d+)/);
          if (i)
            try {
              this._calculatedAspectRatio = parseFloat(i[1]) / parseFloat(i[2]);
            } catch {
            }
        }
        this._isImage && !this._useRelativeSize && !this._isSVG && this.formatter.options.resize.imageOversizeProtection && (this._naturalWidth = this._target.naturalWidth), this._showSizeInfo(true, e.width, e.height), this.debug && console.debug("ResizeAction resize mode activated:", {
          target: this._target,
          useRelativeSize: this._useRelativeSize,
          editorWidth: this._editorWidth,
          preDragWidth: this._preDragWidth,
          aspectRatio: this._calculatedAspectRatio,
          computedAspectRatio: this._computedAspectRatio
        });
      }
    } else {
      if (this._target && this._hasResized) {
        let e = this._roundDimension(this._formattedWidth);
        this._target.setAttribute("width", e), this.formatter.toolbar.buttons.resizeMode && (this.formatter.toolbar.buttons.resizeMode.selected = this.isRelative), this._isUnclickable ? (this._target.style.setProperty("--resize-width", `${e}`), this._target.dataset.relativeSize = `${this.isRelative}`) : this.isAligned && this._target.parentElement && (this._target.parentElement.style.setProperty("--resize-width", `${e}`), this._target.parentElement.dataset.relativeSize = `${this.isRelative}`), this.debug && console.debug("ResizeAction resize mode deactivated:", {
          target: this._target,
          width: e,
          isRelative: this.isRelative,
          isAligned: this.isAligned
        });
      }
      this._naturalWidth = void 0, this.formatter.update(), this._showSizeInfo(false);
    }
  };
  /**
   * Handles the pointer down event on a resize handle.
   * 
   * Initiates the resize mode, sets up the drag handle, and stores the starting X position.
   * Adds event listeners for pointer move and pointer up to enable drag behavior.
   * 
   * @param event - The pointer event triggered when the user presses down on a resize handle.
   */
  _onHandlePointerDown = (t) => {
    this._resizeMode(true), t.target instanceof HTMLElement && this._target && (this._dragHandle = t.target, this._setCursor(this._dragHandle.style.cursor), this._dragStartX = t.clientX, document.addEventListener("pointermove", this._onHandleDrag), document.addEventListener("pointerup", this._onHandlePointerUp));
  };
  /**
   * Handles the drag event for a resize handle, updating the target element's width.
   *
   * Calculates the new width based on the pointer's movement and the initial drag position.
   * Ensures the new width stays within the editor's bounds and does not shrink below the minimum allowed width.
   * Applies the new width to both the target element and its overlay.
   *
   * @param event - The pointer event triggered during dragging.
   */
  _onHandleDrag = (t) => {
    if (!this._target || !this._dragHandle) return;
    this._hasResized = true;
    const e = t.clientX - this._dragStartX, i = this._dragHandle === this._topLeftHandle || this._dragHandle === this._bottomLeftHandle, s = Math.round(
      i ? this._preDragWidth - e : this._preDragWidth + e
    ), o = Math.max(
      Math.min(s, this._editorWidth),
      this.formatter.options.resize.minimumWidthPx
    );
    this._resizeTarget(o);
  };
  /**
   * Handles the pointer up event on the resize handle.
   * 
   * This method disables resize mode, resets the cursor style,
   * and removes the event listeners for pointer movement and pointer up events.
   * It is typically called when the user releases the pointer after resizing.
   */
  _onHandlePointerUp = () => {
    this._setCursor(""), this._resizeMode(false), document.removeEventListener("pointermove", this._onHandleDrag), document.removeEventListener("pointerup", this._onHandlePointerUp);
  };
  /**
   * Handles the touch start event on the overlay element.
   * If the overlay itself is the _target, enables resize mode.
   * When two fingers touch the target element, prevents default scrolling,
   * calculates the initial distance between the fingers for pinch-to-resize,
   * and stores the initial width of the target element.
   *
   * @param event - The touch event triggered on the overlay.
   */
  _onOverlayTouchStart = (t) => {
    t.target === this.formatter.overlay && (this._resizeMode(true), this._target && t.touches.length === 2 && (t.preventDefault(), this._pinchStartDistance = this._calculateDistance(t.touches[0], t.touches[1]), this._preDragWidth = this._target.clientWidth));
  };
  /**
   * Handles touch move events on the overlay for resizing the target element via pinch gestures.
   *
   * When two fingers are detected on the overlay, calculates the distance between them to determine
   * the scale factor for resizing. The new width is constrained between a minimum of 10px and the
   * maximum editor width. Prevents default touch behavior such as scrolling during the gesture.
   *
   * @param event - The touch event triggered by user interaction.
   */
  _onOverlayTouchMove = (t) => {
    if (t.target === this.formatter.overlay && this._target && t.touches.length === 2 && this._pinchStartDistance !== null && this._preDragWidth !== null && (t.preventDefault(), this._target)) {
      this._hasResized = true;
      const i = this._calculateDistance(t.touches[0], t.touches[1]) / this._pinchStartDistance;
      let s = Math.round(this._preDragWidth * i);
      s = Math.max(Math.min(s, this._editorWidth), 10), this._resizeTarget(s);
    }
  };
  /**
   * Handles the touch end event on the overlay element.
   * If the touch event's target is the formatter's overlay, it disables resize mode.
   *
   * @param event - The touch event triggered on the overlay.
   */
  _onOverlayTouchEnd = (t) => {
    t.target === this.formatter.overlay && this._resizeMode(false);
  };
  /**
   * Handles the mouse down event on the overlay element.
   * If the event target is the formatter's overlay, enables resize mode.
   *
   * @param event - The mouse event triggered by the user interaction.
   */
  _onOverlayMouseDown = (t) => {
    t.target === this.formatter.overlay && this._resizeMode(true);
  };
  /**
   * Handles the mouse up event on the overlay element.
   * If the event target is the formatter's overlay, it disables resize mode.
   *
   * @param event - The mouse event triggered when the user releases the mouse button.
   */
  _onOverlayMouseUp = (t) => {
    t.target === this.formatter.overlay && this._resizeMode(false);
  };
  /**
   * Resizes the target element to the specified width, maintaining aspect ratio and updating related UI elements.
   *
   * - Limits the new width if image oversize protection is enabled.
   * - Calculates the new height based on the aspect ratio.
   * - Updates the size information display.
   * - Sets the new width and height attributes on the target element.
   * - Applies the width style property to the wrapper if the image is aligned.
   * - Handles special cases for unclickable elements and absolute sizing.
   * - Triggers an update to the overlay position.
   *
   * @param newWidth - The desired new width for the target element.
   */
  _resizeTarget = (t) => {
    if (!this._target) {
      console.warn("ResizeAction: Cannot resize - target element is null");
      return;
    }
    try {
      t = Math.min(this._naturalWidth ?? 1 / 0, t);
      const e = t / this._calculatedAspectRatio;
      this._updateSizeInfo(t, e), this.formatter._useRelative(this._target) ? this._formattedWidth = `${100 * t / this._editorWidth}%` : this._formattedWidth = `${t}px`, this._target.setAttribute("width", this._formattedWidth), this._target.setAttribute("height", "auto"), this._isUnclickable ? (!this._useRelativeSize && this._computedAspectRatio === "auto" && this._target.setAttribute("height", `${e | 0}px`), this._target.style.setProperty("--resize-width", this._formattedWidth)) : (this.isAligned && this._target.parentElement && this._target.parentElement.style.setProperty("--resize-width", this._formattedWidth), !this._useRelativeSize && !this.formatter.options.image.autoHeight && this._target.setAttribute("height", `${e | 0}px`)), this.formatter.update();
    } catch (e) {
      console.error("ResizeAction: Error resizing target element:", e);
    }
  };
  /**
   * Shows or hides the size information box for the formatter.
   *
   * When `show` is `true`, cancels any existing size info timer, updates the size info
   * if `width` and `height` are provided, and makes the size info box visible.
   * When `show` is `false`, fades out and closes the size info box.
   *
   * @param show - Whether to show (`true`) or hide (`false`) the size info box.
   * @param width - The width to display in the size info box (optional).
   * @param height - The height to display in the size info box (optional).
   */
  _showSizeInfo = (t, e = null, i = null) => {
    t ? (this._cancelSizeInfoTimer(), e !== null && i !== null && this._updateSizeInfo(e, i), this.formatter.sizeInfo.style.transition = "", this.formatter.sizeInfo.style.opacity = "1") : this._closeSizeInfo();
  };
  /**
   * Updates the size information display for the selected blot.
   *
   * - Rounds the provided width and height to the nearest integer.
   * - Formats the size string as "width x height px".
   * - If the size is relative, displays the percentage relative to the editor width,
   *   with the actual pixel size in brackets.
   * - If the size is absolute and the blot has not been resized:
   *   - If the target element has a `width` attribute that differs from the displayed width,
   *     shows the attribute value and its calculated height, with the displayed size in brackets.
   *   - If the target is an image and its natural dimensions differ from the displayed size,
   *     shows the natural dimensions with the displayed size in brackets.
   * - Updates the `sizeInfo` element in the formatter with the computed size string.
   *
   * @param width - The displayed width of the blot.
   * @param height - The displayed height of the blot.
   */
  _updateSizeInfo = (t, e) => {
    const i = Math.round(t), s = Math.round(e);
    let o = `${i} x ${s}px`;
    if (this.isRelative)
      o = `${Math.round(100 * t / this._editorWidth)}% (${o})`;
    else if (!this._hasResized && this._target) {
      const n = this._target.getAttribute("width");
      if (n) {
        const r = parseFloat(n);
        if (r !== t) {
          const l = t / e, p = Math.round(r / l);
          o = `${n} x ${p}px (${o})`;
        }
      } else if (this._target instanceof HTMLImageElement) {
        const { naturalWidth: r, naturalHeight: l } = this._target;
        r !== t && (o = `${r} x ${l}px (${o})`);
      }
    }
    this.formatter.sizeInfo.innerText = o;
  };
  get isRelative() {
    return this._target?.getAttribute("width")?.endsWith("%") || false;
  }
  get isAligned() {
    return this._target ? this._target.hasAttribute("data-blot-align") : false;
  }
  /**
   * Creates a toolbar button for toggling the resize mode.
   *
   * The button is initialized with a unique identifier, a click handler, and toolbar options.
   * The `preselect` property is set to indicate whether the resize mode is currently relative.
   *
   * @returns {ToolbarButton} The configured resize mode toolbar button.
   */
  _createResizeModeButton = () => {
    const t = new A(
      "resizeMode",
      this._onResizeModeClickHandler,
      this.formatter.options.toolbar
    );
    return t.preselect = () => this.isRelative, t;
  };
  /**
   * Handles the click event for the resize mode control.
   * Stops the event from propagating further and swaps the resize mode.
   *
   * @param event - The event object triggered by the click.
   */
  _onResizeModeClickHandler = (t) => {
    t.stopImmediatePropagation(), this._swapResizeMode(true);
  };
  /**
   * Swaps the resize mode of the target element between relative (percentage-based) and absolute (pixel-based) sizing.
   * Updates the _target's width and height attributes, as well as relevant CSS custom properties and data attributes,
   * depending on the current resize mode and alignment. Also updates the toolbar button state and optionally displays
   * size information.
   *
   * @param showInfo - If true, displays size information after resizing.
   */
  _swapResizeMode = (t = false) => {
    if (this._target) {
      const e = this._target.getBoundingClientRect();
      this._editorStyle = getComputedStyle(this.formatter.quill.root), this._editorWidth = this.formatter.quill.root.clientWidth - parseFloat(this._editorStyle.paddingLeft) - parseFloat(this._editorStyle.paddingRight);
      let i, s;
      this.isRelative ? (i = `${Math.round(e.width)}px`, s = this.formatter.options.image.autoHeight ? "auto" : `${Math.round(e.height)}px`) : (i = `${Math.round(100 * e.width / this._editorWidth)}%`, s = "auto"), this._target.setAttribute("width", `${i}`), this._target.setAttribute("height", `${s}`), this.formatter.currentSpec?.isUnclickable ? (this._target.style.setProperty("--resize-width", `${i}`), this._target.dataset.relativeSize = `${this.isRelative}`) : this.isAligned && this._target.parentElement && (this._target.parentElement.style.setProperty("--resize-width", `${i}`), this._target.parentElement.dataset.relativeSize = `${this.isRelative}`), this.formatter.toolbar.buttons.resizeMode.selected = this.isRelative, this.formatter.update(), t && (this._showSizeInfo(true, e.width, e.height), this._showSizeInfo(false)), this.debug && console.debug("ResizeAction resize mode swapped:", {
        target: this._target,
        newWidth: i,
        isRelative: this.isRelative,
        isAligned: this.isAligned
      });
    }
  };
  /**
   * Initiates a timer to fade out the size information element after a delay.
   * Sets the opacity of the `sizeInfo` element to 0 with a transition effect after 1 second.
   * Stores the timer ID in `_sizeInfoTimerId` for potential future reference or cancellation.
   */
  _closeSizeInfo = () => {
    this._sizeInfoTimerId = setTimeout(() => {
      this.formatter.sizeInfo.style.transition = "opacity 1s", this.formatter.sizeInfo.style.opacity = "0";
    }, 1e3);
  };
  /**
   * Cancels the active size info timer, if one exists.
   * Clears the timeout associated with `_sizeInfoTimerId` and resets the timer ID to `null`.
   */
  _cancelSizeInfoTimer = () => {
    this._sizeInfoTimerId !== null && (clearTimeout(this._sizeInfoTimerId), this._sizeInfoTimerId = null);
  };
  /**
   * Calculates the Euclidean distance between two touch points.
   *
   * @param touch1 - The first touch point.
   * @param touch2 - The second touch point.
   * @returns The distance in pixels between the two touch points.
   */
  _calculateDistance = (t, e) => {
    const i = e.clientX - t.clientX, s = e.clientY - t.clientY;
    return Math.sqrt(i * i + s * s);
  };
  /**
   * Rounds the numeric part of a dimension string to the nearest integer, preserving any prefix or suffix.
   *
   * Examples:
   * - '-$34.565c' becomes '-$35c'
   * - '21.244px' becomes '21px'
   *
   * @param dim - The dimension string containing a number and optional prefix/suffix.
   * @returns The dimension string with the numeric part rounded to the nearest integer.
   */
  _roundDimension = (t) => t.replace(/([^0-9.-]*)(-?[\d.]+)(.*)/, (e, i, s, o) => `${i}${Math.round(Number(s))}${o}`);
  /**
   * Determines whether the target image is an SVG image.
   *
   * Checks if the target is an HTMLImageElement and then verifies:
   * - If the image source is a data URL, it checks for the 'image/svg+xml' MIME type.
   * - Otherwise, it checks if the image source URL ends with '.svg'.
   *
   * @returns {boolean} True if the target image is an SVG, otherwise false.
   */
  _isSvgImage = () => this._target instanceof HTMLImageElement ? this._target.src.startsWith("data:image/") ? this._target.src.includes("image/svg+xml") : this._target.src.endsWith(".svg") : false;
};
var I = class {
  // abstract class for Blot specifications
  formatter;
  isUnclickable = false;
  constructor(t) {
    this.formatter = t;
  }
  /**
   * Initializes the blot specification.
   *
   * This method is intended to perform any setup required for the blot spec.
   * It can be overridden by subclasses to provide specific initialization logic.
   * 
   */
  init = () => {
  };
  /**
   * Returns an array of `Action` instances based on the formatter's configuration options.
   * 
   * The returned actions may include:
   * - `AlignAction` if aligning is allowed (`options.align.allowAligning`)
   * - `ResizeAction` if resizing is allowed (`options.resize.allowResizing`)
   * - `DeleteAction` if keyboard deletion is allowed (`options.delete.allowKeyboardDelete`)
   * - Always includes `CaretAction`
   *
   * It can be overridden by subclasses to provide additional actions specific to the blot type.
   * 
   * @returns {Array<Action>} An array of enabled `Action` objects for the current formatter.
   */
  getActions() {
    const t = [];
    return this.formatter.options.align.allowAligning && t.push(new P(this.formatter)), this.formatter.options.resize.allowResizing && t.push(new U(this.formatter)), this.formatter.options.delete.allowKeyboardDelete && t.push(new F(this.formatter)), t.push(new _(this.formatter)), t;
  }
  /**
   * Returns the target HTML element associated with this blot.
   * 
   * This method is intended to be overridden by subclasses to provide the specific target element
   * for the blot type.
   *
   * @returns {HTMLElement | null} The target element, or `null` if none exists.
   */
  getTargetElement = () => null;
  /**
   * Retrieves the target blot associated with the current selection.
   *
   * This method first obtains the target DOM element using `getTargetElement()`.
   * If a target element exists, it uses the Quill instance to find and return the corresponding blot.
   * If no target element is found, it returns `null`.
   * 
   * @remarks
   * This method uses the quill instance constructor to overcome issue encountered with `Quill.find()`
   * with certain environments where the `Quill` global differs from the one used in the quill instance.
   * In those cases, the `find()` method will always return `null`. These environments include: vite,
   * react and angular.
   *
   * @returns {Blot | null} The blot corresponding to the target element, or `null` if not found.
   */
  getTargetBlot = () => {
    const t = this.getTargetElement();
    return t ? this.formatter.Quill.find(t) : null;
  };
  /**
   * Returns the overlay element associated with the blot.
   * 
   * @returns {HTMLElement | null} The overlay element, or `null` if none exists.
   */
  getOverlayElement = () => this.getTargetElement();
  /**
   * Clears the current selection in the Quill editor by setting it to `null`.
   * This effectively removes any active text selection.
   *
   * @remarks
   * Useful for resetting the editor's selection state, such as after formatting actions.
   */
  setSelection = () => {
    this.formatter.quill.setSelection(null);
  };
  /**
   * Callback invoked when the blot is hidden.
   * Override this method to implement custom hide behavior.
   */
  onHide = () => {
  };
};
var V = "blot-formatter__proxy-image";
var X = class extends I {
  selector;
  unclickable;
  proxyContainer;
  unclickableProxies;
  isUnclickable = true;
  constructor(t) {
    super(t), this.selector = t.options.video.selector, this.unclickable = null, this.proxyContainer = this._createProxyContainer(), this.unclickableProxies = {};
  }
  /**
   * Initializes event listeners and observers for unclickable blot proxies.
   * - Sets up a listener for Quill's 'text-change' event to handle updates.
   * - Adds a scroll event listener to the Quill root to reposition proxy images when scrolling occurs.
   * - Observes editor resize events to maintain correct proxy positioning.
   */
  init = () => {
    this.formatter.quill.on("text-change", this._onTextChange), this.formatter.quill.root.addEventListener("scroll", () => {
      this._repositionProxyImages();
    }), this._observeEditorResize();
  };
  /**
   * Observes the Quill editor's root element for resize events and triggers repositioning
   * of proxy images when the editor's dimensions change (e.g., due to screen resize or editor grow/shrink).
   * Uses a debounced approach to avoid excessive repositioning by waiting 200ms after the last resize event.
   *
   * @remarks
   * This method sets up a `ResizeObserver` on the editor's root element and calls
   * `_repositionProxyImages` whenever a resize is detected, with debouncing to improve performance.
   */
  _observeEditorResize = () => {
    let t = null;
    new ResizeObserver((i) => {
      for (const s of i)
        t && clearTimeout(t), t = window.setTimeout(() => {
          this._repositionProxyImages();
        }, 200);
    }).observe(this.formatter.quill.root);
  };
  /**
   * Returns the target HTML element associated with this instance.
   * 
   * @returns {HTMLElement | null} The unclickable HTML element, or `null` if not set.
   */
  getTargetElement = () => this.unclickable;
  /**
   * Returns the overlay HTML element associated with the blot, or `null` if none exists.
   *
   * @returns {HTMLElement | null} The unclickable overlay element, or `null` if not set.
   */
  getOverlayElement = () => this.unclickable;
  /**
   * Handles changes to the text content within the Quill editor.
   *
   * This method performs the following actions:
   * 1. Checks if any "unclickable" elements tracked by proxies have been deleted from the editor.
   *    If so, it removes their corresponding proxy images and cleans up the tracking object.
   * 2. Searches for new "unclickable" elements that do not yet have a proxy image and creates proxies for them.
   * 3. Repositions all proxy images to ensure they are correctly aligned with their associated elements.
   *
   * This method is intended to be called whenever the editor's content changes to keep proxy images in sync.
   */
  _onTextChange = () => {
    Object.entries(this.unclickableProxies).forEach(([t, { unclickable: e, proxyImage: i }]) => {
      try {
        this.formatter.quill.root.contains(e) || (i.remove(), delete this.unclickableProxies[t]);
      } catch {
      }
    }), this.formatter.quill.root.querySelectorAll(`${this.selector}:not([data-blot-formatter-id])`).forEach((t) => {
      this._createUnclickableProxyImage(t);
    }), this._repositionProxyImages();
  };
  /**
   * Creates a transparent proxy image overlay for an unclickable HTML element.
   * The proxy image is linked to the unclickable element via a randomly generated ID,
   * which is stored in the element's dataset and used as a key in the `unclickableProxies` record.
   * The proxy image is styled to be absolutely positioned and unselectable, and is appended to the proxy container.
   * Event listeners are attached to the proxy image to handle click, context menu, wheel, and touch events,
   * allowing interaction to be managed or passed through as needed.
   *
   * @param unclickable - The target HTMLElement to overlay with a transparent proxy image.
   */
  _createUnclickableProxyImage = (t) => {
    const e = Array.from(
      crypto.getRandomValues(new Uint8Array(5)),
      (r) => String.fromCharCode(97 + r % 26)
    ).join("");
    t.dataset.blotFormatterId = e;
    const i = document.createElement("canvas"), s = i.getContext("2d");
    s && (s.globalAlpha = 0, s.fillRect(0, 0, 1, 1));
    const o = document.createElement("img");
    o.src = i.toDataURL("image/png"), o.classList.add(V), o.dataset.blotFormatterId = e;
    const n = {
      ...this.formatter.options.video.proxyStyle,
      position: "absolute",
      margin: "0",
      userSelect: "none"
    };
    Object.assign(o.style, n), o.style.setProperty("-webkit-user-select", "none"), o.style.setProperty("-moz-user-select", "none"), o.style.setProperty("-ms-user-select", "none"), this.formatter.options.debug && o.style.setProperty("border", "3px solid red"), this.proxyContainer.appendChild(o), o.addEventListener("click", this._onProxyImageClick), o.addEventListener("contextmenu", (r) => {
      r.stopPropagation(), r.preventDefault();
    }), o.addEventListener("wheel", this.formatter._passWheelEventThrough), o.addEventListener("touchstart", this.formatter._onTouchScrollStart, { passive: false }), o.addEventListener("touchmove", this.formatter._onTouchScrollMove, { passive: false }), this.unclickableProxies[e] = {
      unclickable: t,
      proxyImage: o
    }, this.formatter.options.debug && console.debug("UnclickableBlotSpec created proxy for unclickable:", t, "with ID:", e, "and proxy image:", o);
  };
  /**
   * Repositions proxy images to overlay their corresponding "unclickable" elements
   * within the Quill editor container. Calculates each unclickable element's position
   * relative to the container, accounting for scroll offsets, and updates the proxy image's
   * style properties (`left`, `top`, `width`, `height`) accordingly.
   *
   * Handles errors gracefully by logging any issues encountered during positioning.
   *
   * @private
   */
  _repositionProxyImages = () => {
    if (Object.keys(this.unclickableProxies).length > 0) {
      const t = this.formatter.quill.container.getBoundingClientRect(), e = this.formatter.quill.container.scrollLeft, i = this.formatter.quill.container.scrollTop;
      Object.entries(this.unclickableProxies).forEach(([s, { unclickable: o, proxyImage: n }]) => {
        try {
          const r = o.getBoundingClientRect();
          Object.assign(
            n.style,
            {
              // display: 'block',
              left: `${r.left - t.left - 1 + e}px`,
              top: `${r.top - t.top + i}px`,
              width: `${r.width}px`,
              height: `${r.height}px`
            }
          );
        } catch (r) {
          const l = `Error positioning proxy image with id ${s}: `;
          console.error(l, `${r instanceof Error ? r.message : r}`);
        }
      });
    }
  };
  /**
   * Handles click events on proxy images representing unclickable blots.
   * Retrieves the associated unclickable blot using the proxy's dataset ID,
   * updates the `unclickable` property, and displays the formatter overlay.
   *
   * @param event - The mouse event triggered by clicking the proxy image.
   */
  _onProxyImageClick = (t) => {
    const i = t.target.dataset.blotFormatterId;
    this.unclickable = this.unclickableProxies[`${i}`].unclickable, this.formatter.show(this);
  };
  /**
   * Creates a proxy container element (`div`) with the class 'proxy-container' and appends it
   * to the Quill editor's container. This container is used to hold all proxy images.
   *
   * @returns {HTMLElement} The newly created proxy container element.
   * @private
   */
  _createProxyContainer = () => {
    const t = document.createElement("div");
    return t.classList.add("proxy-container"), this.formatter.quill.container.appendChild(t), t;
  };
};
var Y = class extends X {
  constructor(t) {
    super(t);
  }
};
var K = class extends v {
  modal;
  targetElement = null;
  currentBlot = null;
  constructor(t) {
    super(t), this.toolbarButtons = [
      new A(
        "attribute",
        this._onClickHandler,
        this.formatter.options.toolbar
      )
    ], this.modal = this._createModal();
  }
  /**
   * Initializes the target element and current blot for the action.
   * Retrieves the target element and blot from the current formatter specification.
   *
   * @remarks
   * This method should be called when the action is created to ensure
   * that the necessary references are set up for further processing.
   */
  onCreate = () => {
    this.targetElement = this.formatter.currentSpec?.getTargetElement(), this.currentBlot = this.formatter.currentSpec?.getTargetBlot();
  };
  /**
   * Cleans up resources when the action is destroyed.
   * Sets the target element to null and removes the modal element from the DOM.
   */
  onDestroy = () => {
    this.targetElement = null, this.modal.form.removeEventListener("submit", this._onSubmitHandler), this.modal.form.removeEventListener("cancel", this._hideAltTitleModal), this.modal.element.removeEventListener("pointerdown", this._onPointerDownHandler), this.modal.cancelButton.removeEventListener("click", this._hideAltTitleModal), this.modal.element.remove();
  };
  /**
   * Event handler for click events that triggers the display of the Alt Title modal.
   * 
   * @private
   * @remarks
   * This handler is assigned to UI elements to allow users to edit or view the Alt Title attribute.
   */
  _onClickHandler = () => {
    this._showAltTitleModal();
  };
  /**
   * Displays the modal for editing the 'alt' and 'title' attributes of the target element.
   * 
   * If a target element is present, this method sets the modal's input fields to the current
   * 'alt' and 'title' attribute values of the target element (or empty strings if not set),
   * and appends the modal element to the document body.
   *
   * @private
   */
  _showAltTitleModal = () => {
    this.targetElement && (this.modal.altInput.value = this.targetElement.getAttribute("alt") || "", this.modal.titleInput.value = this.targetElement.getAttribute("title") || "", document.body.append(this.modal.element), this.formatter.options.debug && console.debug("Showing Alt Title modal for:", this.targetElement));
  };
  /**
   * Hides and removes the alt/title modal from the DOM.
   *
   * This method removes the modal's element, effectively closing the modal UI.
   * It is typically called when the modal should no longer be visible to the user.
   *
   * @private
   */
  _hideAltTitleModal = () => {
    this.modal.element.remove();
  };
  /**
   * Updates the `alt` and `title` attributes of the target image element based on user input.
   * If a title is provided, it sets the `title` attribute; otherwise, it removes it.
   * Additionally, if an image alignment format is applied, it updates the alignment format
   * to include the new title value.
   *
   * @private
   */
  _setAltTitle = () => {
    if (this.targetElement) {
      const t = typeof this.modal.altInput.value == "string" ? this.modal.altInput.value : "", e = this.modal.titleInput.value;
      this.targetElement.setAttribute("alt", t), e ? this.targetElement.setAttribute("title", e) : this.targetElement.removeAttribute("title"), this.formatter.options.debug && console.debug("Setting alt:", t, "title:", e, "on target element:", this.targetElement);
      const i = this.currentBlot?.parent?.formats()[this.formatter.ImageAlign.attrName]?.align;
      this.currentBlot && i && (this.formatter.options.debug && console.debug("Updating title of image with alignment:", i), this.currentBlot.parent?.format(this.formatter.ImageAlign.attrName, false), this.currentBlot.format(
        this.formatter.ImageAlign.attrName,
        {
          align: i,
          title: e
        }
      ));
    }
  };
  /**
   * Creates and configures a modal dialog for editing image `alt` and `title` attributes.
   *
   * The modal includes:
   * - A unique identifier for each instance.
   * - A form with labeled textareas for `alt` and `title` values.
   * - Submit and cancel buttons, with customizable icons and styles.
   * - Event listeners for submitting, cancelling, and closing the modal by clicking outside.
   *
   * Styles and labels are sourced from `this.formatter.options.image.altTitleModalOptions` and `this.formatter.options.overlay.labels`.
   *
   * @returns {AltTitleModal} An object containing references to the modal element, form, alt and title inputs, and the cancel button.
   */
  _createModal = () => {
    const t = Array.from(
      crypto.getRandomValues(new Uint8Array(5)),
      (g) => String.fromCharCode(97 + g % 26)
    ).join(""), e = document.createElement("div");
    e.id = `${t}-modal`, e.setAttribute("data-blot-formatter-modal", "");
    const i = document.createElement("div"), s = document.createElement("form");
    s.id = `${t}-form`;
    const o = document.createElement("label");
    o.setAttribute("for", "alt"), o.textContent = this.formatter.options.overlay.labels?.alt || this.formatter.options.image.altTitleModalOptions.labels.alt;
    const n = document.createElement("textarea");
    n.name = "alt", n.rows = 3;
    const r = document.createElement("label");
    r.setAttribute("for", "title"), r.textContent = this.formatter.options.overlay.labels?.title || this.formatter.options.image.altTitleModalOptions.labels.title;
    const l = document.createElement("textarea");
    l.name = "title", l.rows = 3;
    const p = document.createElement("div"), m = document.createElement("button");
    m.type = "submit", m.innerHTML = this.formatter.options.image.altTitleModalOptions.icons.submitButton, p.appendChild(m), s.appendChild(o), s.appendChild(n), s.appendChild(r), s.appendChild(l), s.appendChild(p);
    const u = document.createElement("button");
    return u.id = `${t}-cancel`, u.type = "button", u.innerHTML = this.formatter.options.image.altTitleModalOptions.icons.cancelButton, this.formatter.options.image.altTitleModalOptions.styles && (Object.assign(e.style, this.formatter.options.image.altTitleModalOptions.styles.modalBackground), Object.assign(i.style, this.formatter.options.image.altTitleModalOptions.styles.modalContainer), Object.assign(o.style, this.formatter.options.image.altTitleModalOptions.styles.label), Object.assign(n.style, this.formatter.options.image.altTitleModalOptions.styles.textarea), Object.assign(r.style, this.formatter.options.image.altTitleModalOptions.styles.label), Object.assign(l.style, this.formatter.options.image.altTitleModalOptions.styles.textarea), Object.assign(m.style, this.formatter.options.image.altTitleModalOptions.styles.submitButton), Object.assign(u.style, this.formatter.options.image.altTitleModalOptions.styles.cancelButton)), i.appendChild(s), i.appendChild(u), e.appendChild(i), s.addEventListener("submit", this._onSubmitHandler), s.addEventListener("cancel", this._hideAltTitleModal), e.addEventListener("pointerdown", this._onPointerDownHandler), u.addEventListener("click", this._hideAltTitleModal), {
      element: e,
      form: s,
      altInput: n,
      titleInput: l,
      cancelButton: u
    };
  };
  _onSubmitHandler = (t) => {
    t.preventDefault(), this._setAltTitle(), this._hideAltTitleModal();
  };
  _onPointerDownHandler = (t) => {
    t.target === this.modal.element && this._hideAltTitleModal();
  };
};
var w = class _w extends v {
  options;
  modal;
  targetElement = null;
  imageDetails = null;
  /**
   * Determines whether the given HTML element is eligible for image compression.
   *
   * Eligibility criteria:
   * - The element must be an `<img>` tag.
   * - The image source must be a data URL (`data:image/`).
   * - The image must not be an SVG (`svg+xml`) or GIF (`gif`).
   *
   * @param targetElement - The HTML element to check for compression eligibility.
   * @returns `true` if the element is an eligible image for compression, otherwise `false`.
   */
  static isEligibleForCompression = (t, e = false) => {
    let i = false;
    if (t instanceof HTMLImageElement && t.src.startsWith("data:image/")) {
      const s = t.src.substring(5, t.src.indexOf(";"));
      i = s !== "svg+xml" && s !== "gif";
    }
    return e && console.debug("Image eligibility check:", {
      element: t,
      isEligible: i
    }), i;
  };
  constructor(t) {
    super(t), this.options = this.formatter.options.image.compressorOptions, this.toolbarButtons = [
      new A(
        "compress",
        this._onClickHandler,
        this.formatter.options.toolbar
      )
    ], this.modal = this._createModal();
  }
  /**
   * Initializes the CompressAction by setting the target element and updating the initial visibility
   * of the first toolbar button based on whether the target element is eligible for compression.
   *
   * This method should be called when the action is created. It ensures that the toolbar button
   * reflects the current eligibility state of the target element.
   */
  onCreate = () => {
    this.targetElement = this.formatter.currentSpec?.getTargetElement();
    const t = _w.isEligibleForCompression(this.targetElement, this.debug);
    this.toolbarButtons[0].initialVisibility = t, this.debug && console.debug("CompressAction initialized with target element:", this.targetElement, "is eligible:", t);
  };
  /**
   * Cleans up resources when the action is destroyed.
   * Sets the target element to null and hides the modal dialog.
   */
  onDestroy = () => {
    this.targetElement = null, this._hideModal(), this.modal.continueButton.removeEventListener("click", this._onContinueClick), this.modal.moreInfoButton.removeEventListener("click", this._onMoreInfoClick), this.modal.cancelButton.removeEventListener("click", this._hideModal), this.modal.element.removeEventListener("pointerdown", this._onBackgroundClick);
  };
  /**
   * Handles the click event for the compress action.
   * When triggered, it displays the modal dialog for compression options.
   *
   * @param event - The click event object.
   */
  _onClickHandler = () => {
    this._showModal();
  };
  /**
   * Displays a modal dialog for image compression if the target element is an image.
   * If the image can be compressed, shows additional information and appends the modal to the document body.
   * Otherwise, displays feedback indicating that no compression is possible.
   *
   * @private
   */
  _showModal = () => {
    this.targetElement instanceof HTMLImageElement && (this.imageDetails = this._getImageDetails(this.targetElement), this.imageDetails.canCompress ? (this.modal.moreInfoButton.style.visibility = "visible", this.modal.moreInfoText.style.display = "none", document.body.append(this.modal.element)) : this._displayFeedback(this.options.text.nothingToDo));
  };
  /**
   * Removes the modal element from the DOM, effectively hiding the modal.
   *
   * @private
   */
  _hideModal = () => {
    this.modal.element.remove();
  };
  /**
   * Parses the `width` and `height` attributes of an HTMLImageElement and returns their numeric values.
   * Handles values specified in pixels (`px`), percentages (`%`), em/rem units, or plain numbers.
   * If the attribute is a percentage, uses the maximum width from options if available.
   * For em/rem units, assumes 16px per unit.
   * If the height is not specified or cannot be parsed, attempts to calculate it using the aspect ratio
   * from the image's natural dimensions if width is available.
   * 
   * @param img - The HTMLImageElement whose dimensions are to be parsed.
   * @returns A tuple containing the parsed width and height as numbers, or `null` if parsing fails.
   */
  _parseDimensions = (t) => {
    let e = t.getAttribute("width"), i = t.getAttribute("height"), s = null, o = null;
    if (e)
      if (e.toLowerCase().endsWith("px"))
        s = parseFloat(e);
      else if (e.endsWith("%"))
        s = this.options.maxWidth ?? null;
      else if (e.toLowerCase().endsWith("em") || e.toLowerCase().endsWith("rem"))
        s = parseFloat(e) * 16;
      else if (!isNaN(parseFloat(e)))
        s = parseFloat(e);
      else
        return [null, null];
    if (i)
      if (!isNaN(parseFloat(i)))
        o = parseFloat(i);
      else if (i.toLowerCase().endsWith("px"))
        o = parseFloat(i);
      else if (i.toLowerCase().endsWith("em") || i.toLowerCase().endsWith("rem"))
        o = parseFloat(i) * 16;
      else if (s && t.naturalWidth > 0 && t.naturalHeight > 0)
        o = s / (t.naturalWidth / t.naturalHeight);
      else
        return [null, null];
    return [s, o];
  };
  /**
   * Calculates the approximate byte size of an image from its data URL.
   *
   * @param img - The HTMLImageElement whose size is to be determined.
   * @returns The size of the image in bytes if the `src` attribute is a valid base64-encoded data URL,
   *          or `null` if the `src` is not a valid image data URL or does not contain base64 data.
   */
  _getImageSize = (t) => {
    const e = t.getAttribute("src");
    if (!e || !e.startsWith("data:image/"))
      return null;
    const i = e.split(",")[1];
    return i ? Math.ceil(i.length * 3 / 4) : null;
  };
  /**
   * Displays a feedback message in the formatter's sizeInfo element.
   * The message is shown with full opacity, then fades out after 2.5 seconds.
   *
   * @param msg - The feedback message to display.
   */
  _displayFeedback = (t) => {
    this.formatter.sizeInfo.innerHTML = t, this.formatter.sizeInfo.style.transition = "", this.formatter.sizeInfo.style.opacity = "1", setTimeout(() => {
      this.formatter.sizeInfo.style.transition = "opacity 1s", this.formatter.sizeInfo.style.opacity = "0";
    }, 2500);
  };
  /**
   * Retrieves detailed information about an image element, including its natural and target dimensions,
   * file size, and whether it is eligible for compression based on the provided options.
   *
   * @param img - The HTMLImageElement to extract details from.
   * @returns An {@link ImageDetails} object containing the image's natural and target dimensions,
   *          file size, and compression eligibility.
   */
  _getImageDetails = (t) => {
    let [e, i] = this._parseDimensions(t);
    !e && (this.options.maxWidth ?? 1 / 0) < t.naturalWidth && (e = this.options.maxWidth, i = e / (t.naturalWidth / t.naturalHeight));
    const s = {
      naturalWidth: t.naturalWidth,
      naturalHeight: t.naturalHeight,
      targetWidth: e,
      targetHeight: i,
      size: this._getImageSize(t),
      canCompress: !!(e && i && e < t.naturalWidth && _w.isEligibleForCompression(t, this.debug))
    };
    return this.debug && console.debug("Image details:", {
      element: t,
      ...s
    }), s;
  };
  /**
   * Compresses a given HTMLImageElement by resizing it to target dimensions and reducing its quality.
   * If compression results in a smaller image, the image's `src` is updated with the compressed data URL.
   * Displays feedback about the compression result, including size reduction and new dimensions.
   *
   * @param img - The HTMLImageElement to compress.
   * @returns `true` if the compression process was initiated, `false` if image loading failed.
   *
   * @remarks
   * - Compression only occurs if `imageDetails.canCompress` is `true`.
   * - The image is resized to `imageDetails.targetWidth` and `imageDetails.targetHeight`.
   * - JPEG quality is determined by `options.jpegQuality`.
   * - Feedback is displayed using `_displayFeedback`.
   * - If compression is not possible, a "nothing to do" message is shown.
   */
  _compressImage = (t) => {
    if (this.imageDetails?.canCompress) {
      const e = new Image();
      e.src = t.src, e.onload = () => {
        this.debug && console.debug("Compressing Image Copy loaded:", e);
        const i = document.createElement("canvas");
        i.width = this.imageDetails.targetWidth, i.height = this.imageDetails.targetHeight, i.getContext("2d").drawImage(e, 0, 0, i.width, i.height);
        const o = i.toDataURL("image/jpeg", this.options.jpegQuality), n = new TextEncoder().encode(t.src).length, r = new TextEncoder().encode(o).length;
        r < n && (t.src = o);
        const l = `${Math.ceil((this.imageDetails.size - this._getImageSize(t)) / 1024)}kB`, p = `${this.options.text.reducedLabel}: ${l}<br>
                            ${this.imageDetails.naturalWidth} x ${this.imageDetails.naturalHeight}px \u2192 ${i.width} x ${Math.round(i.height)}px
                        `;
        return this.debug && console.debug("Image compressed:", {
          "original size": n,
          "resized size": r,
          "size diff": l,
          "new dimensions": { width: i.width, height: Math.round(i.height) }
        }), this._displayFeedback(p), true;
      }, e.onerror = (i) => (console.error("Image loading failed:", i), this._displayFeedback(`Image loading failed: ${i}`), false);
    } else
      this._displayFeedback(this.options.text.nothingToDo);
    return true;
  };
  /**
   * Creates and configures a modal dialog for the compress action.
   *
   * The modal includes a prompt, an optional "more info" section, and three buttons:
   * Cancel, More Info, and Continue. Styles and content are applied based on the
   * provided options. Event listeners are attached to handle user interactions:
   * - Continue: triggers image compression and hides the modal.
   * - More Info: displays additional information and hides the button.
   * - Cancel: hides the modal.
   * - Clicking the background: hides the modal if the background itself is clicked.
   *
   * @returns {CompressModal} An object containing the modal background element,
   *          the "More Info" button, and the "More Info" text element.
   */
  _createModal = () => {
    const t = document.createElement("div");
    t.setAttribute("data-blot-formatter-compress-modal", "");
    const e = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), o = document.createElement("div"), n = document.createElement("button"), r = document.createElement("button"), l = document.createElement("button");
    return s.style.display = "none", o.append(n, r, l), e.append(i, s, o), t.appendChild(e), i.innerHTML = this.options.text.prompt, s.innerHTML = this.options.text.moreInfo || "", this.options.styles && (Object.assign(t.style, this.options.styles.modalBackground), Object.assign(e.style, this.options.styles.modalContainer), Object.assign(o.style, this.options.styles.buttonContainer), Object.assign(n.style, { ...this.options.styles.buttons, ...this.options.buttons.cancel.style }), this.options.text.moreInfo ? Object.assign(r.style, { ...this.options.styles.buttons, ...this.options.buttons.moreInfo.style }) : r.style.visibility = "hidden", Object.assign(l.style, { ...this.options.styles.buttons, ...this.options.buttons.continue.style })), n.innerHTML = this.options.icons.cancel, r.innerHTML = this.options.icons.moreInfo, l.innerHTML = this.options.icons.continue, l.addEventListener("click", this._onContinueClick), r.addEventListener("click", this._onMoreInfoClick), n.addEventListener("click", this._hideModal), t.addEventListener("pointerdown", this._onBackgroundClick), {
      element: t,
      moreInfoButton: r,
      cancelButton: n,
      continueButton: l,
      moreInfoText: s
    };
  };
  _onContinueClick = () => {
    this.targetElement instanceof HTMLImageElement && this._compressImage(this.targetElement), this._hideModal();
  };
  _onMoreInfoClick = () => {
    this.modal.moreInfoText.innerHTML = this.options.text.moreInfo || "", this.modal.moreInfoText.style.display = "block", this.modal.moreInfoButton.style.visibility = "hidden";
  };
  _onBackgroundClick = (t) => {
    t.stopImmediatePropagation(), t.target === this.modal.element && (this.debug && console.debug("Modal background clicked, hiding modal"), this._hideModal());
  };
};
var Q = class extends v {
  targetElement = null;
  currentBlot = null;
  toolbarButton;
  linkOptions;
  modal;
  constructor(t) {
    super(t), this.linkOptions = this.formatter.options.image.linkOptions, this.toolbarButton = new A(
      "link",
      this._onClickHandler,
      this.formatter.options.toolbar
    ), this.toolbarButton.preselect = () => !!this.getLink(), this.toolbarButtons = [this.toolbarButton], window.LinkAction = this;
  }
  /**
   * Initializes the action by setting the `targetElement` property.
   * Retrieves the target element from the current formatter specification, if available.
   * This method is typically called when the action is created.
   */
  onCreate = () => {
    this.targetElement = this.formatter.currentSpec?.getTargetElement(), this.currentBlot = this.formatter.currentSpec?.getTargetBlot();
  };
  /**
   * Cleans up resources when the action is destroyed.
   * - Sets the target element to null.
   * - Removes any attached event listeners.
   * - Hides the link modal if it is visible.
   */
  onDestroy = () => {
    this.targetElement = null, this._removeEventListeners(), this.hideLinkModal();
  };
  /**
   * Attaches all necessary event listeners to the modal elements for handling
   * link-related actions such as submitting the form, blocking certain key events,
   * handling input changes, canceling, removing links, and managing background/context menu interactions.
   *
   * This method should be called after the modal elements are initialized to ensure
   * proper event handling within the link modal dialog.
   * 
   * @private
   */
  _addEventListeners = () => {
    this.modal && (this.modal.form.addEventListener("submit", this._formSubmitHandler), this.modal.cancelButton.addEventListener("click", this.hideLinkModal), this.modal.removeButton.addEventListener("click", this.removeLink), this.modal.background.addEventListener("click", this._onBackgroundClick), this.modal.input.addEventListener("contextmenu", this._trapContextEvent));
  };
  /**
   * Removes all event listeners attached to the modal elements.
   * 
   * This method detaches event handlers from the modal's dialog, form, input,
   * cancel button, remove button, background, and input context menu to prevent
   * memory leaks and unintended behavior when the modal is no longer in use.
   * 
   * @private
   */
  _removeEventListeners = () => {
    this.modal && (this.modal.form.removeEventListener("submit", this._formSubmitHandler), this.modal.cancelButton.removeEventListener("click", this.hideLinkModal), this.modal.removeButton.removeEventListener("click", this.removeLink), this.modal.background.removeEventListener("click", this._onBackgroundClick), this.modal.input.removeEventListener("contextmenu", this._trapContextEvent));
  };
  /**
   * Prevents the event from propagating further in the event chain.
   * This method is typically used to trap context menu or similar events,
   * ensuring that no other event listeners are triggered for the same event.
   *
   * @param e - The event to be stopped.
   */
  _trapContextEvent = (t) => {
    t.stopImmediatePropagation();
  };
  /**
   * Event handler that is triggered when the associated element is clicked.
   * Invokes the `showLinkModal` method to display the link editing modal.
   *
   * @private
   * @remarks
   * This handler is typically bound to a UI element to allow users to edit or add links.
   */
  _onClickHandler = () => {
    this.showLinkModal();
  };
  /**
   * Handles click events on the modal background.
   * 
   * If the click event's target is the modal background, this method prevents the default behavior,
   * stops the event from propagating further, and hides the link modal.
   *
   * @param e - The mouse event triggered by the user's click.
   */
  _onBackgroundClick = (t) => {
    t.target === this.modal?.background && (t.stopImmediatePropagation(), t.preventDefault(), this.hideLinkModal(), this.debug && console.debug("LinkAction modal background clicked, hiding modal"));
  };
  /**
   * Displays the link modal dialog for editing or inserting a link.
   * 
   * If a target element is present, this method constructs the modal,
   * appends it to the formatter's overlay, and sets up necessary event listeners.
   * The modal is initially hidden to prevent flicker, then shown after being
   * positioned correctly relative to the target element.
   *
   * @returns {void}
   */
  showLinkModal = () => {
    if (this.targetElement) {
      if (this.modal = this._buildModal(), !this.modal) return;
      this.formatter.overlay.append(this.modal.dialog, this.modal.background), this._addEventListeners(), this.modal.dialog.style.visibility = "hidden", this.modal.dialog.show(), this._positionModal(this.modal.dialog), this.modal.dialog.style.visibility = "visible", this.modal.input.focus(), this.modal.input.select();
    }
  };
  /**
   * Builds and returns the modal elements used for editing or inserting a link.
   *
   * This method creates a dialog element containing a form with a label, input field for the URL,
   * and three buttons: OK (submit), Remove, and Cancel. It also creates a background mask element.
   * All elements are styled and configured according to the `linkOptions` provided to the class.
   *
   * @returns An object containing references to the created modal elements:
   * - `dialog`: The dialog element that serves as the modal container.
   * - `background`: The background mask element for the modal.
   * - `form`: The form element inside the dialog.
   * - `label`: The label element for the input.
   * - `input`: The input element for entering the link URL.
   * - `okButton`: The submit button for confirming the link.
   * - `cancelButton`: The button for cancelling the operation.
   * - `removeButton`: The button for removing the link.
   */
  _buildModal = () => {
    const t = document.createElement("dialog");
    t.className = this.linkOptions.modal.dialog.className, t.dataset.blotFormatterModal = "", Object.assign(t.style, this.linkOptions.modal.dialog.style);
    const e = document.createElement("form");
    e.method = "dialog", e.className = this.linkOptions.modal.form.className, Object.assign(e.style, this.linkOptions.modal.form.style);
    const i = document.createElement("label");
    i.htmlFor = "link-url", i.textContent = this.linkOptions.modal.label.text, i.className = this.linkOptions.modal.label.className, Object.assign(i.style, this.linkOptions.modal.label.style);
    const s = document.createElement("input");
    s.type = "url", s.id = "link-url", s.name = "url", s.value = this.getLink() || "", s.select(), s.autofocus = true, s.className = this.linkOptions.modal.input.className, Object.assign(s.style, this.linkOptions.modal.input.style), s.placeholder = this.linkOptions.modal.input.placeholder || "";
    const o = document.createElement("button");
    o.type = "submit", o.innerHTML = this.linkOptions.modal.buttons.submit.icon, o.className = this.linkOptions.modal.buttons.submit.className, Object.assign(o.style, this.linkOptions.modal.buttons.submit.style);
    const n = document.createElement("button");
    n.type = "button", n.innerHTML = this.linkOptions.modal.buttons.cancel.icon, n.className = this.linkOptions.modal.buttons.cancel.className, Object.assign(n.style, this.linkOptions.modal.buttons.cancel.style);
    const r = document.createElement("button");
    r.type = "button", r.innerHTML = this.linkOptions.modal.buttons.remove.icon, r.className = this.linkOptions.modal.buttons.remove.className, Object.assign(r.style, this.linkOptions.modal.buttons.remove.style), e.appendChild(i), e.appendChild(s), e.appendChild(o), e.appendChild(r), e.appendChild(n), t.appendChild(e);
    const l = document.createElement("div");
    return l.className = this.linkOptions.modal.background.className || "", Object.assign(l.style, this.linkOptions.modal.background.style), {
      dialog: t,
      background: l,
      form: e,
      label: i,
      input: s,
      okButton: o,
      cancelButton: n,
      removeButton: r
    };
  };
  /**
   * Positions the given dialog element centered over the formatter's overlay,
   * ensuring it stays within the bounds of the Quill editor root element.
   *
   * The method calculates the overlay and Quill root bounding rectangles,
   * determines the dialog's dimensions, and computes the appropriate
   * `left` and `top` CSS properties to center the dialog over the overlay.
   * The horizontal & vertical position is clamped so the dialog does not overflow
   * the Quill root element.
   *
   * @param dialog - The HTMLDialogElement to position.
   */
  _positionModal = (t) => {
    const e = this.formatter.overlay.getBoundingClientRect(), i = this.formatter.quill.root.getBoundingClientRect(), s = t.offsetParent?.getBoundingClientRect() ?? { top: 0, left: 0 }, o = t.offsetWidth, n = t.offsetHeight;
    let r = e.left + e.width / 2 - o / 2 - s.left, l = e.top + e.height / 2 - n / 2 - s.top;
    const p = i.left - s.left, m = i.right - o - s.left;
    r = Math.min(Math.max(r, p), m);
    const u = i.top - s.top, g = i.bottom - n - s.top;
    l = Math.min(Math.max(l, u), g), t.style.position = "absolute", t.style.left = `${r}px`, t.style.top = `${l}px`;
  };
  /**
   * Hides and cleans up the link modal dialog.
   *
   * This method closes and removes the modal dialog and its background overlay if they exist,
   * removes any associated event listeners, and resets the modal reference to undefined.
   */
  hideLinkModal = () => {
    this.modal?.dialog?.open && this.modal.dialog.close(), this.modal?.dialog?.remove(), this.modal?.background && this.modal.background.remove(), this._removeEventListeners(), this.modal = void 0;
  };
  /**
   * Handles the form submission event for the link action.
   * 
   * Prevents the default form submission behavior, extracts the URL from the form data,
   * and applies or removes a link on the current blot based on the URL's presence.
   *
   * @param event - The form submission event.
   */
  _formSubmitHandler = (t) => {
    t.preventDefault();
    const e = t.target, s = new FormData(e).get("url").trim();
    this.debug && console.debug("LinkAction form submitted with URL:", s), this.currentBlot && (s ? this.applyLink(s) : this.removeLink());
  };
  /**
   * Retrieves the link format associated with the current blot, if any.
   *
   * @returns {any | null} The link URL if the current blot has a link format, otherwise `null`.
   *
   * @remarks
   * This method checks if the current blot exists and has a DOM node. It then retrieves the index of the blot
   * in the Quill editor and fetches its formats. If a link format is present, it returns the link value; otherwise, it returns `null`.
   */
  getLink = () => {
    const t = this.currentBlot;
    if (!t || !t.domNode) return null;
    const e = this.formatter.quill.getIndex(t), i = this.formatter.quill.getFormat(e, 1, this.formatter.Quill.sources.SILENT);
    return this.debug && console.debug("LinkAction getLink called, formats:", i), i.link || null;
  };
  /**
   * Removes the link format from the current image blot's parent wrapper, if present.
   * 
   * Traverses up the blot hierarchy from the current image blot to find a parent blot
   * with a 'link' format. If found, it removes the link format from that wrapper.
   * After removing the link, it hides the link modal and deselects the toolbar button.
   *
   * @returns {void}
   */
  removeLink = () => {
    const t = this.currentBlot;
    if (!t || !t.domNode) return;
    let e = t.parent;
    for (; e && typeof e.formats == "function"; ) {
      if (e.formats().link) {
        e.format("link", null);
        break;
      }
      e = e.parent;
    }
    this.debug && console.debug("LinkAction removeLink called, removed link from blot:", e), this.hideLinkModal(), this.toolbarButton.selected = false;
  };
  /**
   * Applies a link to the current blot if the provided URL is different from the existing link.
   * Removes any existing link, formats the current blot with the new link, and updates the toolbar button state.
   * Hides the link modal after applying the link.
   *
   * @param url - The URL to apply as a link to the current blot.
   */
  applyLink = (t) => {
    t !== this.getLink() && (this.removeLink(), this.currentBlot?.format("link", t), this.toolbarButton.selected = !!t), this.hideLinkModal();
  };
};
var Z = class extends I {
  img;
  constructor(t) {
    super(t), this.img = null;
  }
  /**
   * Initializes the image spec by attaching a click event listener to the Quill editor's root element.
   * The event listener triggers the `onClick` handler when the root element is clicked.
   */
  init = () => {
    this.formatter.quill.root.addEventListener("click", this.onClick);
  };
  /**
   * Returns an array of available actions for the image spec, based on the current formatter options and image eligibility.
   *
   * The returned actions may include:
   * - `LinkAction`: If link editing is allowed (`image.linkOptions.allowLinkEdit`).
   * - `AttributeAction`: If alt/title editing is allowed (`image.allowAltTitleEdit`).
   * - `CompressAction`: If compression is allowed (`image.allowCompressor`) and the image is eligible for compression.
   *
   * @returns {Array<Action>} The list of actions applicable to the current image spec.
   */
  getActions = () => {
    const t = super.getActions();
    return this.formatter.options.image.linkOptions.allowLinkEdit && t.push(new Q(this.formatter)), this.formatter.options.image.allowAltTitleEdit && t.push(new K(this.formatter)), this.formatter.options.image.allowCompressor && w.isEligibleForCompression(this.img) && t.push(new w(this.formatter)), t;
  };
  /**
   * Returns the target HTML element associated with this instance.
   *
   * @returns {HTMLElement | null} The image element if available, otherwise `null`.
   */
  getTargetElement = () => this.img;
  /**
   * Handles the hide event by resetting the image reference to null.
   * This is typically called when the overlay should no longer be displayed or interacted with.
   */
  onHide = () => {
    this.img = null;
  };
  /**
   * Handles click events on image elements.
   * 
   * If the clicked element is an HTMLImageElement, prevents the default behaviour
   * (such as opening links), stores a reference to the image, and displays the formatter UI.
   * 
   * @param event - The mouse event triggered by the click.
   */
  onClick = (t) => {
    const e = t.target;
    this.formatter.enabled && e instanceof HTMLImageElement && (t.stopImmediatePropagation(), t.preventDefault(), this.img = e, this.formatter.show(this));
  };
};
var E = '<svg viewBox="0 0 16 16" fill="currentColor" style="height:100%;width:auto"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/></svg>';
var L = '<svg viewBox="0 0 24 24" fill="currentcolor" style="height:100%;width:auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M 12,24 C 6.34314,24 3.514716,24 1.757364,22.2426 0,20.48532 0,17.6568 0,12 0,6.34314 0,3.514716 1.757364,1.757364 3.514716,0 6.34314,0 12,0 17.6568,0 20.48532,0 22.2426,1.757364 24,3.514716 24,6.34314 24,12 24,17.6568 24,20.48532 22.2426,22.2426 20.48532,24 17.6568,24 12,24 Z M 16.83636,8.363604 c 0.35148,0.351468 0.35148,0.921324 0,1.272756 l -6,6 c -0.35148,0.35148 -0.92124,0.35148 -1.272756,0 l -2.4,-2.4 c -0.351468,-0.35148 -0.351468,-0.92124 0,-1.27272 0.351468,-0.35148 0.921324,-0.35148 1.272792,0 L 10.2,13.72716 15.56364,8.363604 c 0.35148,-0.351468 0.92124,-0.351468 1.27272,0 z" style="stroke-width:1.2" /></svg>';
var G = '<svg viewBox="0 0 512 512" fill="currentcolor" style="height:100%;width:auto"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>';
var J = {
  specs: [
    Z,
    Y
  ],
  overlay: {
    className: "blot-formatter__overlay",
    style: {
      position: "absolute",
      boxSizing: "border-box",
      border: "1px dashed #444",
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      maxWidth: "100%",
      zIndex: 9999
    },
    sizeInfoStyle: {
      position: "absolute",
      color: "rgba(255, 255, 255, 0.7)",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "1em",
      textWrap: "nowrap",
      fontSize: "1rem",
      opacity: 0,
      lineHeight: 1.2
    }
  },
  align: {
    allowAligning: true,
    alignments: ["left", "center", "right"]
  },
  resize: {
    allowResizing: true,
    allowResizeModeChange: false,
    imageOversizeProtection: false,
    handleClassName: "blot-formatter__resize-handle",
    handleStyle: {
      position: "absolute",
      height: "12px",
      width: "12px",
      backgroundColor: "white",
      border: "1px solid #777",
      boxSizing: "border-box",
      opacity: "0.80",
      zIndex: 999
    },
    useRelativeSize: false,
    minimumWidthPx: 25
  },
  delete: {
    allowKeyboardDelete: true
  },
  toolbar: {
    icons: {
      left: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line></svg>',
      center: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line></svg>',
      right: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line></svg>',
      attribute: '<svg viewBox="0 0 24 24" fill="none" class="ql-stroke"><path d="M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      resizeMode: '<svg viewBox="0 0 24 24" class="ql-stroke"><path d="m 7.7056591,11.853515 q -1.515179,0 -2.4160962,-0.993056 -0.9009172,-1.0032944 -0.9009172,-2.6720388 0,-1.8223098 0.9521057,-2.8665548 0.9521057,-1.0544826 2.5696616,-1.0544826 1.5663674,0 2.426334,0.9725811 0.870204,0.972581 0.870204,2.7334647 0,1.7608836 -0.972581,2.8256044 -0.9623435,1.054482 -2.5287109,1.054482 z M 7.8489868,5.3935293 q -0.9725811,0 -1.5356544,0.7268764 -0.5630732,0.7166387 -0.5630732,1.9758752 0,1.2387612 0.5528356,1.9349241 0.5528355,0.685926 1.5049412,0.685926 0.9623434,0 1.5049413,-0.716639 0.5425978,-0.7166384 0.5425978,-1.9861126 0,-1.2387612 -0.5425978,-1.9246868 Q 8.7806171,5.3935293 7.8489868,5.3935293 Z M 17.533847,4.4926121 8.1151669,19.275845 H 6.6511764 L 16.059619,4.4926121 Z M 16.448651,19.398697 q -1.515179,0 -2.416096,-1.003294 -0.900917,-1.003294 -0.900917,-2.661801 0,-1.82231 0.962343,-2.876793 0.962344,-1.06472 2.559424,-1.06472 1.55613,0 2.426334,0.982819 0.870204,0.982819 0.870204,2.75394 0,1.750646 -0.972581,2.815366 -0.962343,1.054483 -2.528711,1.054483 z m 0.143328,-6.449748 q -0.982819,0 -1.545892,0.716638 -0.552836,0.716639 -0.552836,1.986113 0,1.218286 0.552836,1.914449 0.552835,0.685926 1.504941,0.685926 0.962343,0 1.504941,-0.716639 0.542598,-0.726876 0.542598,-1.986113 0,-1.248998 -0.542598,-1.924686 -0.53236,-0.675688 -1.46399,-0.675688 z" style="fill:currentColor;stroke:currentColor;stroke-width:0.3"/></svg>',
      compress: '<svg viewBox="0 0 28 28"><path d="m 19.250001,9.3125004 c 0.240623,0 0.437498,0.1968749 0.437498,0.4374991 V 18.49453 l -0.136717,-0.177734 -3.718751,-4.812498 c -0.123046,-0.161329 -0.317188,-0.254297 -0.51953,-0.254297 -0.202345,0 -0.39375,0.09297 -0.519532,0.254297 l -2.269532,2.936715 -0.833984,-1.167577 c -0.123047,-0.172265 -0.319922,-0.273437 -0.533204,-0.273437 -0.213281,0 -0.410156,0.101172 -0.533202,0.276172 l -2.1875003,3.0625 -0.1230462,0.169532 v -0.0082 -8.7500002 c 0,-0.2406242 0.1968749,-0.4374991 0.4374991,-0.4374991 z M 8.7499996,8 C 7.7847663,8 7,8.7847662 7,9.7499995 V 18.5 c 0,0.965233 0.7847663,1.75 1.7499996,1.75 H 19.250001 C 20.215235,20.25 21,19.465233 21,18.5 V 9.7499995 C 21,8.7847662 20.215235,8 19.250001,8 Z M 10.9375,13.250001 a 1.3125025,1.312501 0 1 0 0,-2.625002 1.3125025,1.312501 0 1 0 0,2.625002 z" /><path d="m 25.298508,20 h -3.58209 C 21.286567,20 21,20.286571 21,20.716427 v 3.582131 c 0,0.429856 0.286567,0.716426 0.716418,0.716426 v 0 c 0.429851,0 0.716418,-0.28657 0.716418,-0.716426 v -2.865705 h 2.865672 c 0.429851,0 0.716418,-0.28657 0.716418,-0.716426 C 26.014926,20.286571 25.728359,20 25.298508,20 Z" /><path d="M 6.298508,20 H 2.716418 C 2.2865673,20 2,20.286571 2,20.716427 c 0,0.429856 0.2865673,0.716426 0.716418,0.716426 H 5.58209 v 2.865705 c 0,0.429856 0.286567,0.716426 0.716418,0.716426 v 0 c 0.429851,0 0.716418,-0.28657 0.716418,-0.716426 V 20.716427 C 7.014926,20.286571 6.728359,20 6.298508,20 Z" /><path d="M 6.298507,3 C 5.868656,3 5.582089,3.28657 5.582089,3.716426 V 6.582131 H 2.716417 C 2.286567,6.582131 2,6.868702 2,7.298557 2,7.728413 2.286567,8.014984 2.716417,8.014984 h 3.58209 c 0.429845,0 0.716412,-0.286571 0.716412,-0.716427 V 3.716426 C 7.014919,3.28657 6.728352,3 6.298507,3 Z" /><path d="m 21.716418,8.014984 h 3.582089 c 0.429851,0 0.716418,-0.286571 0.716418,-0.716427 0,-0.429855 -0.286567,-0.716426 -0.716418,-0.716426 H 22.432836 V 3.716426 C 22.432836,3.28657 22.146269,3 21.716418,3 21.286567,3 21,3.28657 21,3.716426 v 3.582131 c 0,0.429856 0.286567,0.716427 0.716418,0.716427 z" /></svg>',
      link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style="fill: none;stroke: #444;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.5;"><line x1="7" x2="11" y1="7" y2="11"/><path class="ql-even" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>'
    },
    tooltips: {
      left: "Align Left",
      center: "Align Center",
      right: "Align Right",
      attribute: "Set Alt/Title",
      resizeMode: "Use Relative (%)/Absolute (px) Sizing",
      compress: "Compress Image",
      link: "Add/Edit Link"
    },
    mainClassName: "blot-formatter__toolbar",
    mainStyle: {
      position: "absolute",
      display: "flex",
      top: "0",
      right: "0",
      left: "0",
      transform: "translateY(-50%)",
      justifyContent: "center",
      flexWrap: "wrap",
      color: "#333",
      zIndex: "1"
    },
    buttonClassName: "blot-formatter__toolbar-button",
    buttonStyle: {
      display: "inline-block",
      width: "27px",
      height: "26px",
      background: "white",
      border: "1px solid #999",
      cursor: "pointer",
      margin: "0 -1px 0 0"
    },
    buttonSelectedClassName: "blot-formatter__toolbar-button--selected",
    buttonSelectedStyle: {
      filter: "invert(20%)"
    },
    svgStyle: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      background: "white",
      verticalAlign: "top"
    }
  },
  image: {
    allowAltTitleEdit: true,
    registerImageTitleBlot: false,
    registerArrowRightFix: true,
    altTitleModalOptions: {
      styles: {
        modalBackground: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        },
        modalContainer: {
          backgroundColor: "#f2f2f2",
          padding: "5px 10px 10px 10px",
          borderRadius: "5px",
          position: "relative",
          width: "90%",
          maxWidth: "500px",
          boxShadow: "6px 6px 5px #00000075"
        },
        label: {
          display: "block",
          color: "black",
          margin: "7px 0 5px 0",
          fontSize: "14px"
        },
        textarea: {
          backgroundColor: "white",
          fontSize: "13px",
          display: "block",
          resize: "none",
          width: "100%",
          padding: "5px",
          border: "1px solid lightgray",
          borderRadius: "4px",
          boxSizing: "border-box"
        },
        submitButton: {
          display: "block",
          marginLeft: "auto",
          marginTop: "5px",
          cursor: "pointer",
          border: 0,
          padding: 0,
          width: "2rem",
          height: "2rem",
          color: "#198754"
        },
        cancelButton: {
          display: "flex",
          width: "1.5rem",
          height: "1.5rem",
          position: "absolute",
          padding: 0,
          top: "-0.7rem",
          right: "-0.7rem",
          background: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          alignItems: "center",
          color: "rgb(197, 74, 71)"
        }
      },
      icons: {
        submitButton: L,
        cancelButton: E
      },
      labels: {
        alt: "Alt Text",
        title: "Image Title"
      }
    },
    allowCompressor: false,
    compressorOptions: {
      jpegQuality: 0.8,
      styles: {
        modalBackground: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        },
        modalContainer: {
          backgroundColor: "rgb(253, 253, 253)",
          border: "1px solid #ccc",
          boxShadow: "6px 6px 5px #00000075",
          padding: "15px",
          borderRadius: "8px",
          position: "relative",
          maxWidth: "min(90%, 400px)",
          textAlign: "justify",
          userSelect: "none"
        },
        buttonContainer: {
          gridTemplateColumns: "auto 1fr auto",
          display: "grid",
          gap: "1em",
          justifyItems: "center",
          borderTop: "1px solid lightgray",
          paddingTop: "12px"
        },
        buttons: {
          width: "1.5rem",
          height: "1.5rem",
          padding: 0,
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer"
        }
      },
      buttons: {
        continue: {
          className: "blot-formatter__compress-continue",
          style: {
            color: "#198754"
          }
        },
        cancel: {
          className: "blot-formatter__compress-cancel",
          style: {
            color: "rgb(197, 74, 71)"
          }
        },
        moreInfo: {
          className: "blot-formatter__compress-more-info",
          style: {
            color: "royalblue"
          }
        }
      },
      text: {
        prompt: '<p style="font-style: large;margin: 0 0 0.5em;">Compress image to its resized width?</p>',
        moreInfo: '<p style="font-size: smaller; line-height: 1.2;">You can reduce the file size and save disk space by compressing pictures. The compression reduces both the file size and picture dimensions based on the width setting.</p><p style="font-size: smaller;"><strong>NOTE:</strong> This process cannot be undone.</p>',
        reducedLabel: "Reduced",
        nothingToDo: "Image already optimised."
      },
      icons: {
        cancel: `<span style="color: rgb(197, 74, 71);">${E}</span>`,
        moreInfo: G,
        continue: L
      }
    },
    linkOptions: {
      allowLinkEdit: true,
      modal: {
        dialog: {
          className: "blot-formatter__link-modal",
          style: {
            // NOTE: positioning handled programatically
            margin: 0,
            backgroundColor: "#fdfdfd",
            border: "1px solid #ccc",
            boxShadow: "6px 6px 5px #00000075",
            color: "#444",
            padding: "6px 13px 6px 10px",
            whiteSpace: "nowrap",
            borderRadius: "5px",
            minWidth: "300px",
            maxWidth: "90%",
            overflow: "visible",
            zIndex: 101
            // Ensure it is above the background
          }
        },
        background: {
          className: "blot-formatter__link-modal-background",
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 100
          }
        },
        form: {
          className: "blot-formatter__link-form",
          style: {
            display: "flex",
            flexWrap: "nowrap",
            columnGap: "5px",
            alignItems: "center",
            margin: 0
          }
        },
        label: {
          className: "blot-formatter__link-label",
          style: {
            paddingRight: "5px",
            fontSize: "13px"
          },
          text: "URL:"
        },
        input: {
          className: "blot-formatter__link-input",
          style: {
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            fontSize: "13px",
            height: "26px",
            margin: "0 0.2rem 0 0",
            padding: "3px 5px",
            width: "100%",
            outline: "1px auto #df9001c2"
          },
          placeholder: "https://example.com"
        },
        buttons: {
          submit: {
            className: "blot-formatter__link-submit",
            style: {
              border: "none",
              borderRadius: "3px",
              padding: "0",
              cursor: "pointer",
              background: "transparent",
              width: "26px",
              height: "26px",
              color: "#198754",
              display: "flex",
              alignContent: "center",
              justifyContent: "center"
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style="height:100%;width:auto"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>',
            tooltip: "Create Link"
          },
          cancel: {
            className: "blot-formatter__link-cancel",
            style: {
              display: "flex",
              width: "18px",
              height: "18px",
              position: "absolute",
              top: "-8px",
              right: "-10px",
              padding: "0",
              background: "white",
              border: "1px solid rgb(157, 58, 56)",
              borderRadius: "5px",
              cursor: "pointer",
              alignItems: "center",
              color: "rgb(197, 74, 71)"
            },
            icon: E,
            tooltip: "Cancel"
          },
          remove: {
            className: "blot-formatter__link-remove",
            style: {
              border: "none",
              padding: "0",
              cursor: "pointer",
              background: "transparent",
              width: "26px",
              height: "26px",
              fill: "#c54a47",
              display: "flex",
              placeContent: "center",
              justifyContent: "center"
            },
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="height:100%;width:auto"><path d="M 6.265625,3.3457031 6.125,3.625 H 4.25 c -0.3457031,0 -0.625,0.2792969 -0.625,0.625 0,0.3457031 0.2792969,0.625 0.625,0.625 h 7.5 c 0.345703,0 0.625,-0.2792969 0.625,-0.625 0,-0.3457031 -0.279297,-0.625 -0.625,-0.625 H 9.875 L 9.734375,3.3457031 C 9.6289062,3.1328125 9.4121094,3 9.1757812,3 H 6.8242188 C 6.5878906,3 6.3710938,3.1328125 6.265625,3.3457031 Z M 11.75,5.5 h -7.5 l 0.4140625,6.621094 C 4.6953125,12.615234 5.1054688,13 5.5996094,13 h 4.8007816 c 0.49414,0 0.904297,-0.384766 0.935547,-0.878906 z" style="display:inline;stroke-width:0.0195312"/><path d="m 14,1 a 1,1 0 0 1 1,1 v 12 a 1,1 0 0 1 -1,1 H 2 A 1,1 0 0 1 1,14 V 2 A 1,1 0 0 1 2,1 Z M 2,0 A 2,2 0 0 0 0,2 v 12 a 2,2 0 0 0 2,2 h 12 a 2,2 0 0 0 2,-2 V 2 A 2,2 0 0 0 14,0 Z" style="display:inline"/></svg>',
            tooltip: "Remove Link"
          }
        }
      }
    },
    autoHeight: true
  },
  video: {
    selector: "iframe.ql-video",
    registerCustomVideoBlot: false,
    registerBackspaceFix: true,
    defaultAspectRatio: "16/9 auto",
    proxyStyle: {}
  }
};
var tt = (h, t) => t;
var nt = class {
  Quill;
  quill;
  options;
  currentSpec;
  specs;
  overlay;
  toolbar;
  sizeInfo;
  actions;
  _enabled = true;
  _startX = 0;
  // touch scroll tracking
  _startY = 0;
  _abortController;
  _resizeObserver;
  _tooltipContainPosition;
  ImageAlign;
  IframeAlign;
  constructor(t, e = {}) {
    this.Quill = t.constructor, this.quill = t, this.currentSpec = null, this.actions = [], e.debug && (window.blotFormatter = this);
    const i = D(this.Quill), s = W(this.Quill);
    this.ImageAlign = new i(e.debug), this.IframeAlign = new s(e.debug), e.debug && console.debug("Registering custom align formats", this.ImageAlign, this.IframeAlign), this.Quill.register({
      "formats/imageAlign": this.ImageAlign,
      "attributors/class/imageAlign": this.ImageAlign,
      "formats/iframeAlign": this.IframeAlign,
      "attributors/class/iframeAlign": this.IframeAlign
    }, true), this.options = H(J, e, { arrayMerge: tt }), e.debug && console.debug("BlotFormatter options", this.options), this._enabled = !(this.quill.options.readOnly || this.quill.container.classList.contains("ql-disabled"));
    const o = document.createElement("style");
    o.innerHTML = ".ql-disabled .blot-formatter__proxy-image {display: none;}", document.head.appendChild(o), [this.overlay, this.sizeInfo] = this._createOverlay(), this._addEventListeners(), this.toolbar = new N(this), e.debug && console.debug("BlotFormatter toolbar", this.toolbar), this.specs = this.options.specs.map(
      (n) => new n(this)
    ), this.specs.forEach((n) => n.init()), e.debug && console.debug("BlotFormatter specs", this.specs), this.quill.container.style.position = this.quill.container.style.position || "relative", this._registerCustomBlots(), this._keyboardBindings(), this.options.debug && console.debug("tooltip option", this.options.tooltip?.containTooltipPosition), this.options.tooltip?.containTooltipPosition && (this._tooltipContainPosition = new k(this.quill, this.options.debug));
  }
  /**
   * Destroys the BlotFormatter instance, cleaning up event listeners, actions, toolbar,
   * and DOM references. Also removes any global references and clears internal state.
   * Logs a debug message if the `debug` option is enabled.
   * Catches and logs any errors that occur during the destruction process.
   */
  destroy = () => {
    try {
      this.hide(), this._removeEventListeners(), this._destroyActions(), this.toolbar?.destroy(), this.overlay?.parentNode && this.overlay.parentNode.removeChild(this.overlay), this.currentSpec = null, this.specs = [], this.actions = [], this.options.tooltip?.containTooltipPosition && this._tooltipContainPosition && this._tooltipContainPosition?.destroy(), window.bf === this && delete window.bf, this.quill = null, this.options.debug && console.debug("BlotFormatter destroyed");
    } catch (t) {
      console.error("BlotFormatter.destroy error:", t);
    }
  };
  /**
   * Indicates whether the blot formatter is currently active.
   *
   * When `true`, formatting controls and interactions are available.
   * When `false`, the formatter is disabled and will not react to user input. Proxy images are hidden by css.
   *
   * @returns True if the formatter is enabled; otherwise false.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Enables or disables the blot formatter UI.
   *
   * When set to false, any currently visible formatter interface (such as
   * overlays, resize handles, or toolbars) is immediately hidden via `hide()`.
   * While disabled, user interactions that would normally trigger the formatter
   * are ignored until re-enabled.
   *
   * @param value True to enable the formatter; false to disable it and hide all active UI.
   */
  set enabled(t) {
    t || this.hide(), this._enabled = t;
  }
  /**
   * MutationObserver monitoring the Quill editor container's class attribute to track disabled state.
   *
   * When the container gains or loses the 'ql-disabled' CSS class, this observer updates the
   * formatter's `enabled` property accordingly, ensuring the formatter UI is automatically
   * disabled/enabled in sync with the editor.
   *
   * Behavior:
   * - Listens only for attribute mutations on the 'class' attribute.
   * - Sets `this.enabled` to false if 'ql-disabled' is present; true otherwise.
   *
   * Rationale:
   * Centralizes Quill's disabled state propagation without requiring explicit event hooks or
   * modifications to Quill's core. This avoids polling and keeps formatter state consistent.
   *
   * Lifecycle:
   * - Should be started after the editor container is available.
   * - Must be disconnected during teardown (e.g., in a destroy/dispose method) to prevent memory leaks.
   *
   * Caveats:
   * - Assumes the presence and semantic meaning of the 'ql-disabled' class as used by Quill.
   * - If external code mutates classes frequently, this may fire often; the handler is intentionally lightweight.
   */
  _qlDisabledObserver = new MutationObserver((t) => {
    t.forEach((e) => {
      e.type === "attributes" && e.attributeName === "class" && (this.enabled = !this.quill.container.classList.contains("ql-disabled"));
    });
  });
  /**
   * Displays the blot formatter overlay for the specified blot.
   *
   * This method performs the following actions:
   * - Hides any open Quill tooltips (such as hyperlink dialogs).
   * - Optionally exposes the formatter instance for debugging.
   * - Clears any existing overlay if active on another blot.
   * - Sets the current blot specification and selection.
   * - Disables user selection to prevent unwanted interactions.
   * - Appends the overlay to the Quill editor container.
   * - Repositions the overlay to match the blot's position.
   * - Creates action buttons or controls for the current blot.
   * - Initializes the toolbar for the formatter.
   * - Adds a document-level pointerdown event listener to handle outside clicks.
   * - Logs debug information if enabled in options.
   *
   * @param spec - The specification of the blot (*BlotSpec*) to be formatted.
   * @returns void
   */
  show = (t) => {
    try {
      if (!this.enabled) return;
      this.quill.container.querySelectorAll(".ql-tooltip:not(.ql-hidden)").forEach(
        (e) => {
          e.classList.add("ql-hidden");
        }
      ), this.options.debug && (window.blotFormatter = this), this.hide(), this.currentSpec = t, this.currentSpec.setSelection(), this._setUserSelect("none"), this.quill.container.appendChild(this.overlay), this._repositionOverlay(), this._createActions(t), this.toolbar.create(), this._scrollToolbarIntoView(this.toolbar.element), document.addEventListener("pointerdown", this._onDocumentPointerDown), this.options.debug && console.debug("BlotFormatter show", t);
    } catch (e) {
      throw console.error("Error showing BlotFormatter:", e), this.hide(), e;
    }
  };
  /**
   * Hides the blot formatter overlay and performs necessary cleanup.
   *
   * If a pointer event is provided, determines the click position relative to the target blot
   * and places the caret before or after the blot accordingly. Calls the `onHide` method of the
   * current spec, removes the overlay from the DOM, removes event listeners, resets user selection,
   * destroys toolbar and actions, and emits a `TEXT_CHANGE` event to ensure the editor state is updated.
   *
   * @param event - Optional pointer event that triggered the hide action. Used to determine caret placement.
   */
  hide = (t = null) => {
    if (this.currentSpec) {
      if (t) {
        const e = this.currentSpec.getTargetBlot();
        if (e) {
          const i = this._getClickPosition(t);
          i === "left" ? (this.options.debug && console.debug("Click position: LEFT"), _.placeCaretBeforeBlot(this.quill, e)) : i === "right" && (this.options.debug && console.debug("Click position: RIGHT"), _.placeCaretAfterBlot(this.quill, e));
        }
      }
      this.currentSpec.onHide(), this.currentSpec = null, this.quill.container.removeChild(this.overlay), document.removeEventListener("pointerdown", this._onDocumentPointerDown), this.overlay.style.setProperty("display", "none"), this._setUserSelect(""), this._destroyActions(), this.toolbar.destroy(), this.quill.emitter.emit(
        this.quill.constructor.events.TEXT_CHANGE,
        0,
        this.quill.getLength(),
        "api"
      );
    }
    this.options.debug && console.debug("BlotFormatter hide");
  };
  /**
   * Updates the state of the BlotFormatter overlay and its associated actions.
   *
   * This method repositions the overlay to match the current selection or formatting context,
   * triggers the `onUpdate` method for each registered action, and logs a debug message if
   * debugging is enabled in the options.
   *
   * @returns {void}
   */
  update = () => {
    this._repositionOverlay(), this.actions.forEach((t) => t.onUpdate()), this.options.debug && console.debug("BlotFormatter update");
  };
  /**
   * Initializes the actions for the given blot specification.
   * 
   * This method retrieves the list of actions from the provided `spec` using `getActions()`,
   * calls the `onCreate()` lifecycle method on each action, and assigns the resulting array
   * to the `actions` property. If debugging is enabled in the options, it logs each created action.
   *
   * @param spec - The blot specification containing the actions to initialize.
   */
  _createActions = (t) => {
    this.actions = t.getActions().map((e) => (e.onCreate(), this.options.debug && console.debug("BlotFormatter action created", e), e));
  };
  /**
   * Destroys all registered actions by calling their `onDestroy` method and clearing the actions array.
   * If debugging is enabled in the options, logs a debug message to the console.
   *
   * @private
   */
  _destroyActions = () => {
    this.actions.forEach((t) => t.onDestroy()), this.actions = [], this.options.debug && console.debug("BlotFormatter actions destroyed");
  };
  /**
   * Creates and configures the overlay and size info HTML elements used for formatting blots.
   *
   * The overlay element is styled and configured to be non-selectable, and the size info element
   * is appended to the overlay. Both elements can be customized via the `options.overlay` property.
   * 
   * @returns A tuple containing the overlay HTMLElement and the size info HTMLElement.
   */
  _createOverlay = () => {
    const t = document.createElement("div");
    t.classList.add(this.options.overlay.className), this.options.overlay.style && Object.assign(t.style, this.options.overlay.style), t.style.userSelect = "none", t.style.setProperty("-webkit-user-select", "none"), t.style.setProperty("-moz-user-select", "none"), t.style.setProperty("-ms-user-select", "none");
    const e = document.createElement("div");
    return this.options.overlay.sizeInfoStyle && Object.assign(e.style, this.options.overlay.sizeInfoStyle), t.appendChild(e), this.options.debug && console.debug("BlotFormatter overlay created", t, e), [t, e];
  };
  /**
   * Ensures that the toolbar element is visible within the viewport of the Quill editor.
   * If the toolbar is positioned above the visible area of the editor, it scrolls the target element into view
   * with an offset equal to the toolbar's height, then recalculates the toolbar's position.
   * If the toolbar is still above the viewport, it scrolls the window to bring the toolbar into view smoothly.
   *
   * @param toolbarElement - The HTML element representing the toolbar to be scrolled into view.
   * @returns A promise that resolves when any necessary scrolling has completed.
   */
  _scrollToolbarIntoView = async (t) => {
    let e = t.getBoundingClientRect();
    const i = this.quill.container.getBoundingClientRect(), s = this.currentSpec?.getTargetElement();
    e.top - i.top < 0 && s && (await this._scrollIntoViewWithOffset(s, e.height), e = t.getBoundingClientRect()), e.top < 0 && (this.options.debug && console.debug(`Scrolling window ${e.top - e.height}px to bring toolbar into view`), window.scrollBy({ top: e.top - e.height, behavior: "smooth" }));
  };
  /**
   * Scrolls the first scrollable ancestor of the given element into view with a specified offset.
   * If the element is outside the visible bounds of its scrollable ancestor, the ancestor is scrolled
   * so that the element is visible with the given offset from the top. Returns a promise that resolves
   * when scrolling has completed (or immediately if no scrolling was necessary).
   *
   * @param el - The target HTMLElement to scroll into view.
   * @param offset - The number of pixels to offset from the top of the scrollable ancestor (default: 10).
   * @returns A promise that resolves when scrolling is finished.
   */
  _scrollIntoViewWithOffset = (t, e = 10) => new Promise((i) => {
    let s = null;
    for (let o = t.parentElement; o; o = o.parentElement) {
      const { overflowY: n } = getComputedStyle(o);
      if (!["auto", "scroll"].includes(n) || o.scrollHeight <= o.clientHeight) continue;
      const r = o.getBoundingClientRect(), l = t.getBoundingClientRect();
      if (l.top < r.top + e) {
        s = o, o.scrollTo({
          top: o.scrollTop + l.top - r.top - e
        }), this.options.debug && console.debug(`Scrolling ancestor ${o.tagName} to bring element into view with offset ${e}px`);
        break;
      }
    }
    s ? setTimeout(() => {
      let n = s.scrollTop;
      const r = setInterval(() => {
        s.scrollTop === n ? (clearInterval(r), i()) : n = s.scrollTop;
      }, 50);
    }, 100) : i();
  });
  /**
   * Adds all necessary event listeners to the overlay and Quill root elements.
   *
   * - For the overlay:
   *   - Forwards mouse wheel and touch move events to allow scrolling.
   *   - Disables the context menu to prevent default browser actions.
   * - For the Quill root:
   *   - Repositions the overlay on scroll and resize events.
   *   - Dismisses the overlay when clicking on the Quill root.
   * - For the quill container
   *   - Observes class attribute changes to detect disabled state.
   *
   * This method ensures proper interaction and synchronization between the overlay
   * and the Quill editor, handling user input and UI updates.
   *
   * @private
   */
  _addEventListeners = () => {
    this._abortController = new AbortController();
    const { signal: t } = this._abortController;
    this.overlay.addEventListener("wheel", this._passWheelEventThrough, { passive: false, signal: t }), this.overlay.addEventListener("touchstart", this._onTouchScrollStart, { passive: false, signal: t }), this.overlay.addEventListener("touchmove", this._onTouchScrollMove, { passive: false, signal: t }), this.overlay.addEventListener("contextmenu", this._preventContextMenu, { signal: t }), this.quill.root.addEventListener("click", this._onClick, { signal: t }), this.quill.root.addEventListener("scroll", this._repositionOverlay, { signal: t }), this._resizeObserver = new ResizeObserver(this._repositionOverlay), this._resizeObserver.observe(this.quill.root), this._qlDisabledObserver.observe(this.quill.container, {
      attributes: true,
      attributeFilter: ["class"]
    });
  };
  /**
   * Removes event listeners and observers associated with the instance.
   * 
   * Aborts any ongoing operations managed by the internal AbortController,
   * and disconnects the internal ResizeObserver to stop observing changes.
   *
   * @private
   */
  _removeEventListeners = () => {
    this._abortController?.abort(), this._resizeObserver?.disconnect(), this._qlDisabledObserver.disconnect();
  };
  /**
   * Prevents the default context menu from appearing and stops the event from propagating further.
   *
   * @param event - The event object associated with the context menu action.
   */
  _preventContextMenu = (t) => {
    t.stopPropagation(), t.preventDefault();
  };
  /**
   * Repositions the overlay element to align with the currently selected blot's overlay target.
   *
   * Calculates the position and size of the overlay based on the bounding rectangles of the
   * Quill container and the overlay target element. Updates the overlay's style to match
   * the target's position and dimensions, ensuring it is correctly displayed over the selected blot.
   * Optionally logs debug information if the `debug` option is enabled.
   *
   * @private
   */
  _repositionOverlay = () => {
    if (this.currentSpec) {
      const t = this.currentSpec.getOverlayElement();
      if (t) {
        const e = this.quill.container.getBoundingClientRect(), i = t.getBoundingClientRect(), s = {
          left: `${i.left - e.left - 1 + this.quill.container.scrollLeft}px`,
          top: `${i.top - e.top + this.quill.container.scrollTop}px`,
          width: `${i.width}px`,
          height: `${i.height}px`
        };
        Object.assign(this.overlay.style, {
          display: "block",
          ...s
        }), this.options.debug && console.debug("Blotformatter _repositionOverlay", "specRect:", i, "overlayRect:", s);
      }
    }
  };
  /**
   * Sets the CSS `user-select` property (and its vendor-prefixed variants) to the specified value
   * on both the Quill editor root element and the document's root element.
   *
   * This method is typically used to enable or disable text selection within the editor and the page,
   * which can be useful during formatting operations to prevent unwanted user interactions.
   *
   * @param value - The value to set for the `user-select` property (e.g., `'none'`, `'auto'`).
   */
  _setUserSelect = (t) => {
    [
      "userSelect",
      "mozUserSelect",
      "webkitUserSelect",
      "msUserSelect"
    ].forEach((i) => {
      this.quill.root.style.setProperty(i, t), document.documentElement && document.documentElement.style.setProperty(i, t);
    }), this.options.debug && console.debug("BlotFormatter _setUserSelect", t);
  };
  /**
   * Handles the `pointerdown` event on the document to determine whether the blot formatter overlay should be dismissed.
   *
   * If the pointer event target is outside the Quill editor, not within a blot formatter modal,
   * and not a proxy image used by the blot formatter, the overlay is hidden.
   *
   * @param event - The pointer event triggered by user interaction.
   */
  _onDocumentPointerDown = (t) => {
    const e = t.target;
    this.quill.root.parentNode.contains(e) || e.closest("[data-blot-formatter-modal]") || e.classList.contains("blot-formatter__proxy-image") || this.hide(t);
  };
  /**
   * Handles pointer click events on the editor.
   * 
   * If debugging is enabled in the options, logs the click event to the console.
   * Then, hides the formatter UI in response to the click event.
   *
   * @param event - The pointer event triggered by the user's click.
   */
  _onClick = (t) => {
    this.options.debug && console.debug("BlotFormatter _onClick", t), this.enabled && this.hide(t);
  };
  /**
   * Handles the wheel event by scrolling the Quill editor's root element.
   * This method is intended to be used when the overlay or proxy receives a wheel event,
   * ensuring that the scroll action is passed through to the underlying Quill editor.
   *
   * @param event - The wheel event containing scroll delta values.
   *
   * @remarks
   * If the `debug` option is enabled, this method logs the scroll delta values to the console.
   */
  _passWheelEventThrough = (t) => {
    this.quill.root.scrollLeft += t.deltaX, this.quill.root.scrollTop += t.deltaY, this.options.debug && console.debug(`BlotFormatter scrolling Quill root x: ${t.deltaX}, y: ${t.deltaY}`);
  };
  /**
   * Handles the touch start event for scrolling interactions.
   * Records the initial X and Y positions of the first touch point.
   * Optionally logs debug information if enabled in options.
   *
   * @param event - The touch event triggered when the user starts touching the screen.
   */
  _onTouchScrollStart = (t) => {
    if (t.touches.length === 1) {
      const e = t.touches[0];
      this._startX = e.clientX, this._startY = e.clientY, this.options.debug && console.debug("BlotFormatter _onTouchScrollStart", `X: ${this._startX}, Y: ${this._startY}`);
    }
  };
  /**
   * Handles touch move events to enable custom scrolling behavior within the Quill editor root element.
   * 
   * This method allows for both vertical and horizontal scrolling using touch gestures,
   * and prevents default browser scrolling when appropriate to provide a smoother, controlled experience.
   * It updates the scroll position of the editor root based on the movement of the touch point,
   * and ensures scrolling does not exceed the bounds of the content.
   * 
   * @param event - The touch event triggered by the user's finger movement.
   * 
   * @remarks
   * - Only processes single-touch events.
   * - Prevents default scrolling if the editor can be scrolled further in the direction of the gesture.
   * - Updates the starting touch coordinates after each move to track incremental movement.
   * - Logs debug information if the `debug` option is enabled.
   */
  _onTouchScrollMove = (t) => {
    if (t.touches.length === 1) {
      const e = t.touches[0], i = this._startX - e.clientX, s = this._startY - e.clientY;
      if (Math.abs(i) < 2 && Math.abs(s) < 2) return;
      const o = this.quill.root, n = o.scrollTop === 0, r = o.scrollTop + o.clientHeight === o.scrollHeight, l = o.scrollLeft === 0, p = o.scrollLeft + o.clientWidth === o.scrollWidth, m = Math.abs(s) > Math.abs(i), u = Math.abs(i) > Math.abs(s);
      let g = false;
      m && !(n && s < 0) && !(r && s > 0) && (g = true, o.scrollTop += s), u && !(l && i < 0) && !(p && i > 0) && (g = true, o.scrollLeft += i), g && t.preventDefault(), this._startX = e.clientX, this._startY = e.clientY, this.options.debug && console.debug("BlotFormatter touch scroll end", `X: ${this._startX}, Y: ${this._startY}`);
    }
  };
  /**
   * Registers custom Quill blots based on the provided options.
   *
   * - If `options.image.registerImageTitleBlot` is enabled, registers a custom Image blot
   *   that supports a title attribute.
   * - If `options.video.registerCustomVideoBlot` is enabled, registers a custom Video blot
   *   with responsive behavior and sets its default aspect ratio from the options.
   *
   * Debug information is logged to the console if `options.debug` is true.
   *
   * @private
   */
  _registerCustomBlots = () => {
    if (this.options.image.registerImageTitleBlot) {
      const t = q(this.Quill);
      this.options.debug && console.debug("Registering custom Image blot", t), this.Quill.register({ "formats/image": t }, true), this.options.debug && console.debug("formats/image after register:", this.Quill.import("formats/image"));
    }
    if (this.options.video.registerCustomVideoBlot) {
      const t = j(this.Quill);
      this.options.debug && (console.debug("Registering custom Video blot", t), console.debug("Setting default aspect ratio for Video blot", this.options.video.defaultAspectRatio)), t.aspectRatio = this.options.video.defaultAspectRatio, this.Quill.register({ "formats/video": t }, true), this.options.debug && console.debug("formats/video after register:", this.Quill.import("formats/video"));
    }
  };
  /**
   * Registers custom keyboard bindings to address specific Quill editor issues and enhance user experience.
   *
   * - Adds a Backspace key binding to fix Quill bug #4364, ensuring proper deletion behavior for embedded videos (e.g., iframes).
   *   This is enabled if `options.video.registerBackspaceFix` is true.
   * - Adds an ArrowRight key binding to fix cursor navigation issues when moving past images,
   *   ensuring the cursor does not get stuck or hidden at the image location.
   *   This is enabled if `options.image.registerArrowRightFix` is true.
   *
   * Both bindings are conditionally registered based on the provided options.
   * Debug information is logged to the console if `options.debug` is enabled.
   *
   * @private
   */
  _keyboardBindings = () => {
    if (this.options.video.registerBackspaceFix) {
      this.quill.keyboard.bindings.Backspace || (this.quill.keyboard.bindings.Backspace = []);
      const t = {
        key: "Backspace",
        empty: true,
        line: {
          domNode: {
            tagName: "IFRAME"
          }
        },
        handler: (e) => {
          const [i] = this.quill.getLeaf(e.index - 1);
          if (i?.domNode?.tagName !== "IFRAME")
            return true;
          this.quill.deleteText(e.index - 1, 1, "user"), this.options.debug && console.debug(
            "BlotFormatter Backspace binding triggered, deleting iframe at index",
            e.index - 1
          );
        }
      };
      this.quill.keyboard.bindings.Backspace.unshift(t), this.options.debug && console.debug(
        "BlotFormatter added Backspace keyboard binding",
        t
      );
    }
    if (this.options.image.registerArrowRightFix) {
      this.quill.keyboard.bindings.ArrowRight || (this.quill.keyboard.bindings.ArrowRight = []);
      const t = {
        key: "ArrowRight",
        collapsed: true,
        empty: false,
        suffix: /^$/,
        handler: (e) => {
          const i = e.index + e.length, [s] = this.quill.getLeaf(i + 1);
          if (!s?.domNode)
            return true;
          const o = s.domNode;
          if (o?.tagName !== "IMG" || !o.parentElement?.matches('span[contenteditable="false"]'))
            return true;
          const n = this.quill.getLength();
          i + 1 >= n - 1 ? this.quill.setSelection(n - 1, 0, "user") : (this.quill.setSelection(i + 2, 0, "user"), _.sendCaretBack(1)), this.options.debug && console.debug(
            "BlotFormatter ArrowRight binding triggered, moving cursor past image at index",
            i
          );
        }
      };
      this.quill.keyboard.bindings.ArrowRight.unshift(t), this.options.debug && console.debug("BlotFormatter added ArrowRightFix keyboard binding", t);
    }
  };
  /**
   * Determines whether the resizing of the target element should use relative sizing (percentages)
   * or absolute sizing (pixels), based on the current configuration and the element's width attribute.
   *
   * @param targetElement - The HTML element whose sizing mode is being determined.
   * @returns `true` if relative sizing should be used, `false` otherwise.
   *
   * The method checks the `useRelativeSize` option and, if `allowResizeModeChange` is enabled,
   * inspects the element's `width` attribute to decide whether to use relative or absolute sizing.
   * If debugging is enabled, logs the decision to the console.
   */
  _useRelative = (t) => {
    let e = this.options.resize.useRelativeSize;
    if (this.options.resize.allowResizeModeChange) {
      const i = t.getAttribute("width");
      i ? e = i.endsWith("%") : e = this.options.resize.useRelativeSize;
    }
    return this.options.debug && console.debug("BlotFormatter _useRelative", e, "for element", t), e;
  };
  /**
   * Determines the relative position of a pointer event with respect to the overlay element.
   *
   * @param event - The pointer event to evaluate.
   * @returns The position of the pointer relative to the overlay, as a `PointerPosition` enum value.
   *
   * The possible return values are:
   * - `PointerPosition.ABOVE` if the pointer is above the overlay.
   * - `PointerPosition.BELOW` if the pointer is below the overlay.
   * - `PointerPosition.LEFT` if the pointer is to the left of the overlay.
   * - `PointerPosition.RIGHT` if the pointer is to the right of the overlay.
   * - `PointerPosition.INSIDE` if the pointer is inside the overlay.
   *
   * If the `debug` option is enabled, logs the determined position and event to the console.
   */
  _getClickPosition = (t) => {
    const i = this.overlay.getBoundingClientRect();
    let s;
    return t.clientY < i.top ? s = "above" : t.clientY > i.bottom ? s = "below" : t.clientX < i.left ? s = "left" : t.clientX > i.right ? s = "right" : s = "inside", this.options.debug && console.debug("BlotFormatter _getClickPosition", s, "for event", t), s;
  };
};

// src/editor.js
var import_cropperjs = __toESM(require_cropper());
window.escapeHtml = escapeHtml;
window.timeAgo = timeAgo;
window.toggleTheme = toggleTheme;
window.toggleExportMenu = toggleExportMenu;
var Quill = window.Quill;
Quill.register("modules/cursors", import_quill_cursors.default);
Quill.register("modules/blotFormatter", nt);
var Font = Quill.import("attributors/class/font");
Font.whitelist = ["serif", "monospace", "arial", "courier-new", "georgia", "times-new-roman", "verdana"];
Quill.register(Font, true);
var Size = Quill.import("attributors/style/size");
Size.whitelist = ["8px", "10px", "12px", "14px", "18px", "20px", "24px", "28px", "32px", "36px", "48px", "72px"];
Quill.register(Size, true);
(function injectFontCSS() {
  const style = document.createElement("style");
  style.textContent = `
    .ql-font-arial { font-family: Arial, Helvetica, sans-serif; }
    .ql-font-courier-new { font-family: 'Courier New', Courier, monospace; }
    .ql-font-georgia { font-family: Georgia, 'Times New Roman', serif; }
    .ql-font-times-new-roman { font-family: 'Times New Roman', Times, serif; }
    .ql-font-verdana { font-family: Verdana, Geneva, sans-serif; }
    .ql-font-serif { font-family: Georgia, 'Times New Roman', serif; }
    .ql-font-monospace { font-family: 'Courier New', Courier, monospace; }
  `;
  document.head.appendChild(style);
})();
function getSupabase() {
  if (window.supabaseClient) return window.supabaseClient;
  if (window.supabase) {
    const SUPABASE_URL = "https://qkxqfruwtiquvtcnjboe.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs";
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabaseClient;
  }
  return null;
}
var quill = null;
var ydoc = null;
var ytext = null;
var wsProvider = null;
var metaWs = null;
var myId = null;
var myName = "";
var myColor = "#10b981";
var myRole = "viewer";
var docId = null;
var users = {};
var comments = [];
var versionHistory = [];
var savedRange = null;
var dbSaveTimer = null;
var aiLastSelection = null;
var recentBadgeTimer = null;
var commentsList = document.getElementById("comments-list");
var commentCount = document.getElementById("comment-count");
var usersList = document.getElementById("users-list");
var userCount = document.getElementById("user-count");
var navAvatars = document.getElementById("nav-user-avatars");
var myAvatarEl = document.getElementById("my-avatar");
var recentBadge = document.getElementById("recent-change-badge");
var toastEl = document.getElementById("toast");
var historyPanel = document.getElementById("history-panel");
var historyOverlay = document.getElementById("history-overlay");
var historyList = document.getElementById("history-list");
var commentModal = document.getElementById("comment-modal");
var commentText = document.getElementById("comment-text");
var cursorLabels = document.getElementById("cursor-labels");
var docTitleInput = document.getElementById("doc-title");
var roleBadge = document.getElementById("role-badge");
var saveVersionModal = document.getElementById("save-version-modal");
var versionNameInput = document.getElementById("version-name-input");
var shareModal = document.getElementById("share-modal");
var shareLink = document.getElementById("share-link-input");
var permsList = document.getElementById("perms-list");
function syncGlobals() {
  window.quill = quill;
  window.ydoc = ydoc;
  window.ytext = ytext;
  window.wsProvider = wsProvider;
  window.metaWs = metaWs;
  window.myId = myId;
  window.myName = myName;
  window.myColor = myColor;
  window.myRole = myRole;
  window.docId = docId;
  window.users = users;
  window.comments = comments;
  window.versionHistory = versionHistory;
  window.savedRange = savedRange;
  window.dbSaveTimer = dbSaveTimer;
  window.aiLastSelection = aiLastSelection;
  window.recentBadgeTimer = recentBadgeTimer;
}
window.syncGlobals = syncGlobals;
window.commentsList = commentsList;
window.commentCount = commentCount;
window.usersList = usersList;
window.userCount = userCount;
window.navAvatars = navAvatars;
window.myAvatarEl = myAvatarEl;
window.recentBadge = recentBadge;
window.toastEl = toastEl;
window.historyPanel = historyPanel;
window.historyOverlay = historyOverlay;
window.historyList = historyList;
window.commentModal = commentModal;
window.commentText = commentText;
window.cursorLabels = cursorLabels;
window.docTitleInput = docTitleInput;
window.roleBadge = roleBadge;
window.saveVersionModal = saveVersionModal;
window.versionNameInput = versionNameInput;
window.shareModal = shareModal;
window.shareLink = shareLink;
window.permsList = permsList;
window.showToast = showToast;
window.syncState = syncState;
window.showLoadingOverlay = showLoadingOverlay;
window.hideLoadingOverlay = hideLoadingOverlay;
window.applyRoleUI = applyRoleUI;
window.debounceDbSave = debounceDbSave;
window.renderUserList = renderUserList;
window.connectMetaWs = connectMetaWs;
window.metaSend = metaSend;
function showLoadingOverlay(msg) {
  let ov = document.getElementById("init-loading-overlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "init-loading-overlay";
    ov.style.cssText = "position:fixed;inset:0;background:rgba(249,250,251,0.92);backdrop-filter:blur(4px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:Inter,sans-serif;";
    document.body.appendChild(ov);
  }
  ov.innerHTML = '<div style="width:36px;height:36px;border:3px solid #e5e7eb;border-top-color:#0d9488;border-radius:50%;animation:spin 0.7s linear infinite"></div><p style="color:#6b7280;font-size:14px;font-family:Inter,sans-serif;">' + msg + "</p>";
  if (!document.getElementById("init-spin-style")) {
    const s = document.createElement("style");
    s.id = "init-spin-style";
    s.textContent = "@keyframes spin{to{transform:rotate(360deg)}}";
    document.head.appendChild(s);
  }
}
function hideLoadingOverlay() {
  const ov = document.getElementById("init-loading-overlay");
  if (ov) ov.remove();
}
function showSessionError(message) {
  const ov = document.getElementById("init-loading-overlay");
  const el = ov || document.createElement("div");
  el.style.cssText = "position:fixed;inset:0;background:rgba(249,250,251,0.97);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-family:Inter,sans-serif;";
  el.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><h3 style="font-size:17px;font-weight:700;color:#111827;margin:0">' + message + '</h3><a href="/auth.html" style="padding:10px 24px;background:#0d9488;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;font-size:14px;">Sign in again</a>';
  if (!ov) document.body.appendChild(el);
}
showLoadingOverlay("Connecting\u2026");
(async () => {
  try {
    let updateWordCount = function() {
      const text2 = quill.getText().trim();
      const words = text2.length === 0 ? 0 : text2.split(/\s+/).filter((w2) => w2.length > 0).length;
      const chars = quill.getText().length - 1;
      const wEl = document.getElementById("word-count-status");
      const cEl = document.getElementById("char-count-status");
      if (wEl) wEl.textContent = words.toLocaleString() + (words === 1 ? " word" : " words");
      if (cEl) cEl.textContent = Math.max(0, chars).toLocaleString() + " characters";
    }, setAutosaveStatus = function(state) {
      const dot = document.getElementById("autosave-dot");
      const label = document.getElementById("autosave-label");
      if (!dot || !label) return;
      if (state === "saving") {
        dot.style.background = "#f59e0b";
        label.textContent = "Saving\u2026";
        dot.style.animation = "autosave-pulse 1s ease-in-out infinite";
      } else {
        dot.style.background = "#0d9488";
        label.textContent = "Saved";
        dot.style.animation = "";
      }
    }, applyHighlighting = function() {
      if (!window.hljs) return;
      quill.root.querySelectorAll(".ql-code-block").forEach((block) => {
        const lang = block.getAttribute("data-lang") || "plaintext";
        if (lang === "plaintext" || !hljs.getLanguage(lang)) {
          block.removeAttribute("data-highlighted");
          block.style.color = "";
          return;
        }
        block.removeAttribute("data-highlighted");
        try {
          const result = hljs.highlight(block.textContent, { language: lang, ignoreIllegals: true });
          block.innerHTML = result.value;
          block.setAttribute("data-highlighted", "yes");
          block.setAttribute("data-lang", lang);
        } catch (e) {
        }
      });
    }, loadFileIntoCropper = function(file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("\u26A0\uFE0F Image must be under 5MB", "#f59e0b");
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        document.getElementById("img-drop-zone").classList.add("hidden");
        const cropContainer = document.getElementById("crop-container");
        const cropImage = document.getElementById("crop-image");
        cropContainer.classList.remove("hidden");
        cropImage.src = ev.target.result;
        if (cropperInstance) cropperInstance.destroy();
        setTimeout(() => {
          cropperInstance = new import_cropperjs.default(cropImage, {
            viewMode: 1,
            autoCropArea: 0.95,
            dragMode: "move",
            background: false
          });
        }, 50);
      };
      reader.readAsDataURL(file);
    }, getDropIndex = function(e, quillInstance) {
      if (document.caretPositionFromPoint) {
        const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
        if (pos && pos.offsetNode) {
          const range = document.createRange();
          range.setStart(pos.offsetNode, pos.offset);
          range.collapse(true);
          const sel = document.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          return quillInstance.getSelection()?.index;
        }
      } else if (document.caretRangeFromPoint) {
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range) {
          const sel = document.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          return quillInstance.getSelection()?.index;
        }
      }
      return null;
    };
    const sb = getSupabase();
    if (!sb) {
      showSessionError("Could not connect \u2014 please refresh.");
      return;
    }
    showLoadingOverlay("Checking session\u2026");
    const { data: { user }, error: authErr } = await sb.auth.getUser();
    if (authErr || !user) {
      await sb.auth.signOut().catch(() => {
      });
      showSessionError("Your session has expired.");
      return;
    }
    showLoadingOverlay("Loading profile\u2026");
    let { data: profile } = await sb.from("profiles").select("*").eq("id", user.id).single();
    if (!profile) {
      const username = user.user_metadata?.username || user.email?.split("@")[0] || "Guest";
      const { data: newProf } = await sb.from("profiles").insert({ id: user.id, username }).select().single();
      profile = newProf;
      if (!profile) {
        try {
          const resp = await fetch("/api/ensure-profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: user.id, username })
          });
          const json = await resp.json();
          if (json.profile) profile = json.profile;
        } catch (e) {
          console.error("ensure-profile API error:", e);
        }
      }
    }
    if (!profile) {
      await sb.auth.signOut().catch(() => {
      });
      showSessionError("Your profile could not be loaded.");
      return;
    }
    myId = profile.id;
    window.myId = myId;
    window.myId = myId;
    window.myId = myId;
    myName = profile.username;
    window.myName = myName;
    window.myName = myName;
    window.myName = myName;
    const params2 = new URLSearchParams(window.location.search);
    docId = params2.get("doc");
    if (!docId) {
      window.location.href = "/dashboard.html";
      return;
    }
    const inviteToken = params2.get("invite");
    if (inviteToken) {
      try {
        const decodedRole = atob(inviteToken);
        if (["editor", "commenter", "viewer"].includes(decodedRole)) {
          await sb.from("document_permissions").insert({ doc_id: docId, user_id: myId, role: decodedRole }).catch(() => {
          });
          localStorage.setItem(`codoc_role_${docId}_${myId}`, decodedRole);
          const url = new URL(window.location.href);
          url.searchParams.delete("invite");
          window.history.replaceState({}, document.title, url.toString());
        }
      } catch (e) {
        console.error("Invalid invite token", e);
      }
    }
    showLoadingOverlay("Loading document\u2026");
    const { data: doc2, error: docErr } = await sb.from("documents").select("*").eq("id", docId).single();
    if (docErr || !doc2) {
      window.location.href = "/dashboard.html";
      return;
    }
    if (doc2.owner_id === myId) {
      myRole = "owner";
      window.myRole = myRole;
      window.myRole = myRole;
      window.myRole = myRole;
    } else {
      let { data: perm } = await sb.from("document_permissions").select("*").eq("doc_id", docId).eq("user_id", myId).single();
      let localRole = localStorage.getItem(`codoc_role_${docId}_${myId}`);
      if (!perm && localRole) {
        perm = { role: localRole };
      }
      if (!perm) {
        perm = { role: "editor" };
      }
      myRole = perm.role;
      window.myRole = myRole;
      window.myRole = myRole;
      window.myRole = myRole;
    }
    myColor = `hsl(${parseInt(myId.replace(/-/g, ""), 16) % 360}, 80%, 45%)`;
    applyRoleUI(myRole);
    const editorContainer = document.getElementById("editor");
    const isReadOnly = myRole === "viewer";
    window.quill = window.quill = window.quill = quill = new Quill(editorContainer, {
      theme: "snow",
      modules: {
        toolbar: isReadOnly ? false : "#toolbar",
        history: { userOnly: true },
        blotFormatter: {},
        cursors: {
          hideDelayMs: 1e4,
          hideSpeedMs: 400,
          selectionChangeSource: null,
          // We manage cursor moves ourselves
          transformOnTextChange: true
          // Let quill-cursors shift positions on text inserts (cosmetic only)
        }
      },
      placeholder: "Start typing your collaborative document here\u2026",
      readOnly: isReadOnly
    });
    window._quill = quill;
    quill.getModule("toolbar").addHandler("image", function() {
      if (window.openImageModal) {
        window.openImageModal();
      }
    });
    quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
      delta.ops.forEach((op) => {
        if (op.attributes) {
          delete op.attributes.color;
          delete op.attributes.background;
        }
      });
      return delta;
    });
    window.ydoc = window.ydoc = window.ydoc = ydoc = new Doc();
    window.ytext = window.ytext = window.ytext = ytext = ydoc.getText("quill");
    const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${wsProtocol}//${window.location.host}`;
    const roomName = `doc-${docId}`;
    window.wsProvider = window.wsProvider = window.wsProvider = wsProvider = new WebsocketProvider(wsUrl, roomName, ydoc);
    wsProvider.awareness.setLocalStateField("user", {
      id: myId,
      name: myName,
      color: myColor,
      role: myRole
    });
    const binding = new QuillBinding(ytext, quill);
    const cursors = quill.getModule("cursors");
    const _renderedCursors = /* @__PURE__ */ new Set();
    let _broadcastScheduled = false;
    let _pendingRange = void 0;
    const broadcastCursor = (range) => {
      _pendingRange = range;
      if (_broadcastScheduled) return;
      _broadcastScheduled = true;
      requestAnimationFrame(() => {
        _broadcastScheduled = false;
        const r = _pendingRange;
        try {
          if (r === null || r === void 0) {
            wsProvider.awareness.setLocalStateField("cursor", null);
          } else {
            const docLen = ytext.length;
            const anchorIdx = Math.min(r.index, docLen);
            const headIdx = Math.min(r.index + r.length, docLen);
            const anchor = createRelativePositionFromTypeIndex(ytext, anchorIdx);
            const head = createRelativePositionFromTypeIndex(ytext, headIdx);
            wsProvider.awareness.setLocalStateField("cursor", { anchor, head });
          }
        } catch (e) {
        }
      });
    };
    quill.on("selection-change", (range, _old, source) => {
      if (source === "user" || source === "api") {
        broadcastCursor(range);
      }
    });
    quill.on("text-change", (_delta, _old, source) => {
      if (source === "user") {
        broadcastCursor(quill.getSelection());
      }
    });
    window.addEventListener("focus", () => broadcastCursor(quill.getSelection()));
    window.addEventListener("blur", () => broadcastCursor(null));
    let _renderScheduled = false;
    const scheduleRenderRemoteCursors = () => {
      if (_renderScheduled) return;
      _renderScheduled = true;
      requestAnimationFrame(renderRemoteCursors);
    };
    const renderRemoteCursors = () => {
      _renderScheduled = false;
      if (!cursors || !wsProvider?.awareness) return;
      const states = wsProvider.awareness.getStates();
      const myClientId = wsProvider.awareness.clientID;
      const activeIds = /* @__PURE__ */ new Set();
      states.forEach((aw, clientId) => {
        if (clientId === myClientId) return;
        const safeId = String(clientId);
        if (aw && aw.cursor) {
          const user2 = aw.user || {};
          const name = user2.name || "Anonymous";
          const color = user2.color || "#94a3b8";
          if (!_renderedCursors.has(safeId)) {
            cursors.createCursor(safeId, name, color);
            _renderedCursors.add(safeId);
          }
          try {
            const anchorRel = createRelativePositionFromJSON(aw.cursor.anchor);
            const headRel = createRelativePositionFromJSON(aw.cursor.head);
            const anchorAbs = createAbsolutePositionFromRelativePosition(anchorRel, ydoc);
            const headAbs = createAbsolutePositionFromRelativePosition(headRel, ydoc);
            if (anchorAbs && headAbs && anchorAbs.type === ytext) {
              const docLen = quill.getLength();
              const index = Math.max(0, Math.min(anchorAbs.index, docLen - 1));
              const length2 = Math.max(0, Math.min(headAbs.index - anchorAbs.index, docLen - index));
              cursors.moveCursor(safeId, { index, length: length2 });
            }
          } catch (e) {
          }
          activeIds.add(safeId);
        }
      });
      _renderedCursors.forEach((id2) => {
        if (!activeIds.has(id2)) {
          try {
            cursors.removeCursor(id2);
          } catch (e) {
          }
          _renderedCursors.delete(id2);
        }
      });
    };
    wsProvider.awareness.on("change", scheduleRenderRemoteCursors);
    quill.on("text-change", scheduleRenderRemoteCursors);
    wsProvider.on("sync", (synced) => {
      if (synced && ytext.length === 0 && doc2.content) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = doc2.content;
        const delta = quill.clipboard.convert({ html: doc2.content });
        ytext.applyDelta(delta.ops.map((op) => {
          if (typeof op.insert === "string") return op;
          return op;
        }));
      }
    });
    wsProvider.on("status", ({ status }) => {
      if (status === "connected") {
        updateWsStatus("connected", "Live");
      } else if (status === "disconnected") {
        updateWsStatus("disconnected", "Reconnecting\u2026");
      } else {
        updateWsStatus("", "Connecting\u2026");
      }
    });
    wsProvider.awareness.on("change", ({ added, updated, removed }) => {
      users = {};
      const myClientId = wsProvider.awareness.clientID;
      wsProvider.awareness.getStates().forEach((state, clientId) => {
        if (state.user) {
          users[state.user.id || clientId] = {
            id: state.user.id || clientId,
            name: state.user.name || "Anonymous",
            color: state.user.color || "#94a3b8",
            role: state.user.role || "viewer"
          };
        }
      });
      renderUserList();
    });
    comments = doc2.comments || [];
    versionHistory = doc2.versions || [];
    connectMetaWs();
    updateWordCount();
    if (!document.getElementById("autosave-pulse-style")) {
      const s = document.createElement("style");
      s.id = "autosave-pulse-style";
      s.textContent = "@keyframes autosave-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }";
      document.head.appendChild(s);
    }
    quill.on("text-change", () => {
      updateWordCount();
      setAutosaveStatus("saving");
      debounceDbSave();
    });
    window.setAutosaveStatus = setAutosaveStatus;
    setAutosaveStatus("saved");
    quill.on("selection-change", (range) => {
      if (range) aiLastSelection = range;
    });
    applyRoleUI(myRole);
    docTitleInput.value = doc2.title;
    document.title = `${doc2.title} \u2013 CoDoc`;
    window.renderComments?.();
    window.renderHistory?.();
    const fontContainer = document.getElementById("custom-font-container");
    if (fontContainer) {
      fontContainer.innerHTML = `
      <select id="custom-font-select" class="tool-select" title="Font Family" style="width:130px;">
        <option value="">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option value="arial">Arial</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="times-new-roman">Times New Roman</option>
        <option value="verdana">Verdana</option>
      </select>
    `;
    }
    const sizeContainer = document.getElementById("custom-size-container");
    if (sizeContainer) {
      sizeContainer.innerHTML = `
      <select id="custom-size-select" class="tool-select" title="Font Size" style="width:70px;">
        <option value="8px">8</option>
        <option value="10px">10</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="" selected>16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
        <option value="28px">28</option>
        <option value="32px">32</option>
        <option value="36px">36</option>
        <option value="48px">48</option>
        <option value="72px">72</option>
      </select>
    `;
    }
    const customFontSelect = document.getElementById("custom-font-select");
    const customSizeSelect = document.getElementById("custom-size-select");
    if (customFontSelect) {
      customFontSelect.addEventListener("change", () => {
        const val = customFontSelect.value;
        quill.format("font", val || false);
        quill.focus();
      });
    }
    if (customSizeSelect) {
      customSizeSelect.addEventListener("change", () => {
        const val = customSizeSelect.value;
        quill.format("size", val || false);
        quill.focus();
      });
    }
    quill.on("selection-change", () => {
      if (!quill.getSelection()) return;
      const formats = quill.getFormat();
      if (customFontSelect) {
        customFontSelect.value = formats.font || "";
      }
      if (customSizeSelect) {
        customSizeSelect.value = formats.size || "";
      }
    });
    setupMyAvatar();
    hideLoadingOverlay();
    const codeLangSelect = document.getElementById("code-lang-select");
    quill.on("selection-change", () => {
      if (!codeLangSelect) return;
      const range = quill.getSelection();
      if (!range) return;
      const [block] = quill.scroll.descendant(
        (blot) => blot.statics && blot.statics.blotName === "code-block",
        range.index
      );
      const inCode = !!block;
      codeLangSelect.style.opacity = inCode ? "1" : "0.45";
      codeLangSelect.style.pointerEvents = inCode ? "auto" : "none";
      if (inCode) {
        const lang = block.domNode.getAttribute("data-lang") || "plaintext";
        codeLangSelect.value = lang;
      }
    });
    if (codeLangSelect) {
      codeLangSelect.addEventListener("change", () => {
        const range = quill.getSelection();
        if (!range) return;
        quill.format("code-block", true);
        const codeBlocks = quill.root.querySelectorAll(".ql-code-block");
        codeBlocks.forEach((bl) => {
          const blot = Quill.find(bl);
          if (blot) bl.setAttribute("data-lang", codeLangSelect.value);
        });
        applyHighlighting();
      });
    }
    let hlTimer = null;
    quill.on("text-change", () => {
      clearTimeout(hlTimer);
      hlTimer = setTimeout(applyHighlighting, 400);
    });
    setTimeout(applyHighlighting, 800);
    window._imgInsertIndex = null;
    window._imgTab = "upload";
    let cropperInstance = null;
    window.openImageModal = function() {
      if (myRole === "viewer") return;
      window._imgInsertIndex = quill.getSelection()?.index ?? quill.getLength();
      document.getElementById("img-drop-zone").classList.remove("hidden");
      document.getElementById("img-drop-zone").style.borderColor = "";
      document.getElementById("img-drop-label").textContent = "Click to choose or drag & drop an image";
      document.getElementById("crop-container").classList.add("hidden");
      document.getElementById("image-url-input").value = "";
      document.getElementById("image-file-input").value = "";
      if (cropperInstance) {
        cropperInstance.destroy();
        cropperInstance = null;
      }
      switchImgTab("upload");
      document.getElementById("image-modal").classList.remove("hidden");
    };
    window.closeImageModal = function() {
      document.getElementById("image-modal").classList.add("hidden");
      if (cropperInstance) {
        cropperInstance.destroy();
        cropperInstance = null;
      }
    };
    window.switchImgTab = function(tab) {
      window._imgTab = tab;
      document.getElementById("img-tab-upload").classList.toggle("active", tab === "upload");
      document.getElementById("img-tab-url").classList.toggle("active", tab === "url");
      document.getElementById("img-panel-upload").classList.toggle("hidden", tab !== "upload");
      document.getElementById("img-panel-url").classList.toggle("hidden", tab !== "url");
    };
    window.handleImageFileSelected = function(e) {
      const file = e.target.files[0];
      if (!file) return;
      loadFileIntoCropper(file);
    };
    window.confirmInsertImage = function() {
      const idx = window._imgInsertIndex ?? quill.getLength();
      if (window._imgTab === "upload") {
        if (!cropperInstance) {
          showToast("Please select and crop an image first.");
          return;
        }
        const croppedCanvas = cropperInstance.getCroppedCanvas({
          maxWidth: 1600,
          maxHeight: 1600
        });
        if (!croppedCanvas) {
          showToast("Error cropping image.");
          return;
        }
        const finalBase64 = croppedCanvas.toDataURL("image/jpeg", 0.85);
        quill.insertEmbed(idx, "image", finalBase64, "user");
        quill.setSelection(idx + 1);
      } else {
        const url = document.getElementById("image-url-input").value.trim();
        if (!url) {
          showToast("Please enter an image URL.");
          return;
        }
        quill.insertEmbed(idx, "image", url, "user");
        quill.setSelection(idx + 1);
      }
      window.closeImageModal();
      showToast("\u{1F5BC}\uFE0F Image inserted!", "#0d9488");
      debounceDbSave();
    };
    document.getElementById("image-modal").addEventListener("click", (e) => {
      if (e.target === document.getElementById("image-modal")) window.closeImageModal();
    });
    const dropZone = document.getElementById("img-drop-zone");
    if (dropZone) {
      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.style.borderColor = "#0d9488";
      });
      dropZone.addEventListener("dragleave", () => {
        dropZone.style.borderColor = "";
      });
      dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (!file || !file.type.startsWith("image/")) return;
        document.getElementById("image-file-input").files = e.dataTransfer.files;
        loadFileIntoCropper(file);
      });
    }
    let draggedImageIndex = null;
    let draggedImageUrl = null;
    quill.root.addEventListener("dragstart", (e) => {
      if (e.target.tagName === "IMG") {
        const blot = Quill.find(e.target);
        if (blot) {
          draggedImageIndex = quill.getIndex(blot);
          draggedImageUrl = e.target.src;
          e.dataTransfer.setData("text/plain", "");
        }
      }
    });
    quill.root.addEventListener("dragover", (e) => {
      if (draggedImageIndex !== null || e.dataTransfer.types && e.dataTransfer.types.includes("Files")) {
        e.preventDefault();
      }
    });
    quill.root.addEventListener("drop", (e) => {
      if (draggedImageIndex !== null && draggedImageUrl !== null) {
        e.preventDefault();
        const currentUrl = draggedImageUrl;
        const oldIndex = draggedImageIndex;
        draggedImageIndex = null;
        draggedImageUrl = null;
        let dropIndex = getDropIndex(e, quill);
        if (dropIndex !== null && dropIndex !== void 0) {
          let insertIndex = dropIndex;
          if (insertIndex > oldIndex) {
            insertIndex -= 1;
          }
          quill.deleteText(oldIndex, 1, "user");
          quill.insertEmbed(insertIndex, "image", currentUrl, "user");
          quill.setSelection(insertIndex + 1);
          debounceDbSave();
        }
      } else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
          e.preventDefault();
          let dropIndex = getDropIndex(e, quill);
          window._imgInsertIndex = dropIndex !== null ? dropIndex : quill.getLength();
          document.getElementById("img-drop-zone").classList.add("hidden");
          document.getElementById("crop-container").classList.add("hidden");
          switchImgTab("upload");
          document.getElementById("image-modal").classList.remove("hidden");
          document.getElementById("image-file-input").files = e.dataTransfer.files;
          loadFileIntoCropper(file);
        }
      }
    });
    syncGlobals();
    setupComments();
    setupHistory();
    setupAiChat();
    setupSharing();
  } catch (err) {
    console.error("Editor init error:", err);
    showSessionError("Failed to load: " + (err.message || "unknown error"));
  }
})();
function updateWsStatus(state, label) {
  const el = document.getElementById("ws-status");
  const txt = document.getElementById("ws-status-text");
  if (!el || !txt) return;
  el.className = "ws-status " + state;
  txt.textContent = label;
}
function connectMetaWs() {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  metaWs = new WebSocket(`${protocol}//${window.location.host}`);
  metaWs.addEventListener("open", () => {
    metaSend({ type: "meta-join", docId, userId: myId, userName: myName, userColor: myColor, userRole: myRole });
  });
  metaWs.addEventListener("message", (event) => {
    if (typeof event.data !== "string") return;
    let msg;
    try {
      msg = JSON.parse(event.data);
    } catch {
      return;
    }
    if (msg.type === "sync-state") {
      window.comments = window.comments = window.comments = comments = msg.comments;
      window.versionHistory = window.versionHistory = window.versionHistory = versionHistory = msg.versionHistory;
      window.renderComments?.();
      window.renderHistory?.();
    }
  });
  metaWs.addEventListener("close", () => {
    setTimeout(connectMetaWs, 2e3);
  });
}
function metaSend(obj) {
  if (metaWs && metaWs.readyState === WebSocket.OPEN) {
    metaWs.send(JSON.stringify(obj));
  }
}
function syncState() {
  metaSend({ type: "sync-state", comments, versionHistory });
  debounceDbSave();
}
async function saveToHistoryApi(content) {
  if (!myId || !docId || myRole === "viewer") return;
  try {
    const res = await fetch("/api/save-history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: myId, documentId: docId, content })
    });
    const data = await res.json();
    if (data.success) {
      if (window.setAutosaveStatus) window.setAutosaveStatus("saved");
    }
  } catch (e) {
    console.error("Auto-save history failed", e);
  }
}
function debounceDbSave() {
  if (myRole === "viewer") return;
  clearTimeout(dbSaveTimer);
  dbSaveTimer = setTimeout(async () => {
    const sb = getSupabase();
    const currentContent = quill ? quill.root.innerHTML : "";
    if (sb && quill) {
      sb.from("documents").update({
        content: currentContent,
        comments,
        versions: versionHistory
      }).eq("id", docId).then(() => {
        if (window.setAutosaveStatus) window.setAutosaveStatus("saved");
      });
    }
    await saveToHistoryApi(currentContent);
  }, 2e3);
}
window.addEventListener("beforeunload", () => {
  if (myRole === "viewer" || !quill) return;
  const content = quill.root.innerHTML;
  if (!content) return;
  const data = new Blob([JSON.stringify({ userId: myId, documentId: docId, content })], { type: "application/json" });
  navigator.sendBeacon("/api/save-history", data);
});
function applyRoleUI(role) {
  const editorEls = document.querySelectorAll(".editor-only");
  const commenterEls = document.querySelectorAll(".commenter-only");
  const viewerEls = document.querySelectorAll(".viewer-only");
  const ownerEls = document.querySelectorAll(".owner-only");
  editorEls.forEach((el) => el.classList.toggle("hidden", role !== "owner" && role !== "editor"));
  commenterEls.forEach((el) => el.classList.toggle("hidden", role !== "commenter"));
  viewerEls.forEach((el) => el.classList.toggle("hidden", role !== "viewer"));
  ownerEls.forEach((el) => el.classList.toggle("hidden", role !== "owner"));
  const badgeLabels = { owner: "Owner", editor: "Editor", commenter: "Commenter", viewer: "Viewer" };
  roleBadge.textContent = badgeLabels[role] || role;
  roleBadge.className = "role-badge-nav role-" + role;
  if (role === "owner") loadPermissions();
}
docTitleInput.addEventListener("change", async () => {
  const sb = getSupabase();
  if ((myRole === "owner" || myRole === "editor") && sb) {
    const newTitle = docTitleInput.value.trim() || "Untitled";
    docTitleInput.value = newTitle;
    document.title = `${newTitle} \u2013 CoDoc`;
    await sb.from("documents").update({ title: newTitle }).eq("id", docId);
    showToast("\u{1F4DD} Title updated");
  }
});
document.getElementById("save-version-btn")?.addEventListener("click", () => {
  if (myRole !== "owner" && myRole !== "editor") return;
  versionNameInput.value = "";
  saveVersionModal.classList.remove("hidden");
  setTimeout(() => versionNameInput.focus(), 50);
});
function setupMyAvatar() {
  if (!myAvatarEl) return;
  myAvatarEl.style.background = myColor;
  myAvatarEl.textContent = myName.charAt(0).toUpperCase();
  myAvatarEl.title = `${myName} (You)`;
}
function renderUserList() {
  const userArr = Object.values(users);
  userCount.textContent = userArr.length;
  navAvatars.innerHTML = "";
  userArr.slice(0, 5).forEach((u) => {
    if (u.id === myId) return;
    const av = document.createElement("div");
    av.className = "avatar";
    av.style.background = u.color;
    av.textContent = u.name.charAt(0).toUpperCase();
    av.title = u.name;
    navAvatars.appendChild(av);
  });
  usersList.innerHTML = "";
  userArr.forEach((u) => {
    const badgeClass = "role-" + (u.role || "viewer");
    usersList.innerHTML += `
      <div class="user-item">
        <span class="user-pulse" style="background:${u.color}"></span>
        <span class="user-name-item">${escapeHtml(u.name)}</span>
        <span class="doc-role-badge ${badgeClass}">${(u.role || "viewer").toUpperCase()}</span>
        ${u.id === myId ? '<span class="user-you">You</span>' : ""}
      </div>`;
  });
}
async function loadPermissions() {
  try {
    const sb = getSupabase();
    const { data: perms } = await sb.from("document_permissions").select("*, profiles:user_id(username)").eq("doc_id", docId);
    if (!perms) return;
    renderPermissions(perms.map((p) => ({ userId: p.user_id, role: p.role, username: p.profiles?.username })));
  } catch {
  }
}
function renderPermissions(perms) {
  permsList.innerHTML = "";
  if (perms.length === 0) {
    permsList.innerHTML = '<p style="font-size:12px;color:#9ca3af;padding:8px 10px">No shared users yet.</p>';
    return;
  }
  perms.forEach((p) => {
    const item = document.createElement("div");
    item.className = "user-item";
    item.style.flexWrap = "wrap";
    item.innerHTML = `
      <span class="user-dot" style="background:#6b7280"></span>
      <span class="user-name-item" style="flex:1">${escapeHtml(p.username)}</span>
      <select class="perm-select" data-uid="${p.userId}" style="font-size:11px;border:1px solid #e5e7eb;border-radius:4px;padding:2px 4px;cursor:pointer">
        <option value="editor" ${p.role === "editor" ? "selected" : ""}>Editor</option>
        <option value="commenter" ${p.role === "commenter" ? "selected" : ""}>Commenter</option>
        <option value="viewer" ${p.role === "viewer" ? "selected" : ""}>Viewer</option>
        <option value="remove">Remove</option>
      </select>`;
    item.querySelector(".perm-select").addEventListener("change", async function() {
      const sb = getSupabase();
      if (this.value === "remove") {
        await sb.from("document_permissions").delete().eq("doc_id", docId).eq("user_id", this.dataset.uid);
      } else {
        await sb.from("document_permissions").update({ role: this.value }).eq("doc_id", docId).eq("user_id", this.dataset.uid);
      }
      showToast("Permission updated");
      loadPermissions();
    });
    permsList.appendChild(item);
  });
}
var toastTimer = null;
function showToast(message, color = null) {
  toastEl.textContent = message;
  toastEl.className = "toast" + (color ? " has-color" : "");
  if (color) toastEl.style.borderLeftColor = color;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add("hidden"), 3500);
}
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var dictationBtn = document.getElementById("dictation-btn");
if (SpeechRecognition && dictationBtn) {
  let isDictating = false;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.onstart = () => {
    isDictating = true;
    dictationBtn.style.color = "#ef4444";
    showToast('\u{1F3A4} Listening... (Say "new line", "comma", "period")');
  };
  recognition.onresult = (event) => {
    if (!quill) return;
    const result = event.results[event.results.length - 1];
    let transcript = result[0].transcript.trim();
    const lower = transcript.toLowerCase();
    if (lower === "new line") transcript = "\n";
    else if (lower === "comma") transcript = ",";
    else if (lower === "period" || lower === "full stop") transcript = ".";
    else if (lower === "question mark") transcript = "?";
    else transcript = " " + transcript;
    const range = quill.getSelection(true);
    if (range) {
      quill.insertText(range.index, transcript);
      quill.setSelection(range.index + transcript.length);
    }
  };
  recognition.onend = () => {
    isDictating = false;
    dictationBtn.style.color = "";
  };
  dictationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (myRole === "viewer") {
      showToast("You do not have permission to edit.");
      return;
    }
    if (isDictating) recognition.stop();
    else recognition.start();
  });
} else if (dictationBtn) {
  dictationBtn.style.display = "none";
}
/*! Bundled license information:

quill-cursors/dist/quill-cursors.js:
  (*! For license information please see quill-cursors.js.LICENSE.txt *)

cropperjs/dist/cropper.js:
  (*!
   * Cropper.js v1.6.1
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-09-17T03:44:19.860Z
   *)
*/
