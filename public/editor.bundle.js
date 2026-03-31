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
                  if ((v = e3.slice(h3)) === c3) {
                    var d2 = Math.min(a3, h3);
                    if ((y = u3.slice(0, d2)) === (m = p2.slice(0, d2))) return f(y, u3.slice(d2), p2.slice(d2), c3);
                  }
                }
                if (null === l3 || l3 === a3) {
                  var g2 = a3, v = (p2 = e3.slice(0, g2), e3.slice(g2));
                  if (p2 === u3) {
                    var _ = Math.min(o2 - g2, s2 - g2);
                    if ((b = c3.slice(c3.length - _)) === (C = v.slice(v.length - _))) return f(u3, c3.slice(0, c3.length - _), v.slice(0, v.length - _), b);
                  }
                }
              }
              if (r3.length > 0 && i2 && 0 === i2.length) {
                var y = t4.slice(0, r3.index), b = t4.slice(r3.index + r3.length);
                if (!(s2 < (d2 = y.length) + (_ = b.length))) {
                  var m = e3.slice(0, d2), C = e3.slice(s2 - _);
                  if (y === m && b === C) return f(y, t4.slice(d2, o2 - _), e3.slice(d2, s2 - _), b);
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
              var h3 = f2[0], p2 = f2[1], d2 = f2[2], g2 = f2[3], v = f2[4], _ = n2(h3, d2), y = n2(p2, g2);
              return _.concat([[0, v]], y);
            }
            return (function(t5, n3) {
              for (var i2 = t5.length, o2 = n3.length, s3 = Math.ceil((i2 + o2) / 2), a4 = s3, u4 = 2 * s3, c4 = new Array(u4), l4 = new Array(u4), f3 = 0; f3 < u4; f3++) c4[f3] = -1, l4[f3] = -1;
              c4[a4 + 1] = 0, l4[a4 + 1] = 0;
              for (var h4 = i2 - o2, p3 = h4 % 2 != 0, d3 = 0, g3 = 0, v2 = 0, _2 = 0, y2 = 0; y2 < s3; y2++) {
                for (var b = -y2 + d3; b <= y2 - g3; b += 2) {
                  for (var m = a4 + b, C = (S = b === -y2 || b !== y2 && c4[m - 1] < c4[m + 1] ? c4[m + 1] : c4[m - 1] + 1) - b; S < i2 && C < o2 && t5.charAt(S) === n3.charAt(C); ) S++, C++;
                  if (c4[m] = S, S > i2) g3 += 2;
                  else if (C > o2) d3 += 2;
                  else if (p3 && (O = a4 + h4 - b) >= 0 && O < u4 && -1 !== l4[O] && S >= (A = i2 - l4[O])) return r2(t5, n3, S, C);
                }
                for (var E = -y2 + v2; E <= y2 - _2; E += 2) {
                  for (var A, O = a4 + E, w = (A = E === -y2 || E !== y2 && l4[O - 1] < l4[O + 1] ? l4[O + 1] : l4[O - 1] + 1) - E; A < i2 && w < o2 && t5.charAt(i2 - A - 1) === n3.charAt(o2 - w - 1); ) A++, w++;
                  if (l4[O] = A, A > i2) _2 += 2;
                  else if (w > o2) v2 += 2;
                  else if (!p3) {
                    var S;
                    if ((m = a4 + h4 - E) >= 0 && m < u4 && -1 !== c4[m]) {
                      if (C = a4 + (S = c4[m]) - m, S >= (A = i2 - A)) return r2(t5, n3, S, C);
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
                    var v = d - 1;
                    t3[v] && 1 === t3[v][0] && (f2++, p = t3[v][1] + p, v--), t3[v] && t3[v][0] === e2 && (u2++, h2 = t3[v][1] + h2, v--), d = v;
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
                var _ = f2 + u2;
                0 === h2.length && 0 === p.length ? (t3.splice(a2 - _, _), a2 -= _) : 0 === h2.length ? (t3.splice(a2 - _, _, [1, p]), a2 = a2 - _ + 1) : 0 === p.length ? (t3.splice(a2 - _, _, [e2, h2]), a2 = a2 - _ + 1) : (t3.splice(a2 - _, _, [e2, h2], [1, p]), a2 = a2 - _ + 2);
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
        var r2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Boolean]", a = "[object Date]", u = "[object Function]", c = "[object GeneratorFunction]", l = "[object Map]", f = "[object Number]", h = "[object Object]", p = "[object Promise]", d = "[object RegExp]", g = "[object Set]", v = "[object String]", _ = "[object Symbol]", y = "[object WeakMap]", b = "[object ArrayBuffer]", m = "[object DataView]", C = "[object Float32Array]", E = "[object Float64Array]", A = "[object Int8Array]", O = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", j = "[object Uint8ClampedArray]", x = "[object Uint16Array]", L = "[object Uint32Array]", T = /\w*$/, M = /^\[object .+?Constructor\]$/, N = /^(?:0|[1-9]\d*)$/, R = {};
        R[o] = R["[object Array]"] = R[b] = R[m] = R[s] = R[a] = R[C] = R[E] = R[A] = R[O] = R[w] = R[l] = R[f] = R[h] = R[d] = R[g] = R[v] = R[_] = R[S] = R[j] = R[x] = R[L] = true, R["[object Error]"] = R[u] = R[y] = false;
        var k = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, D = "object" == typeof self && self && self.Object === Object && self, q = k || D || Function("return this")(), B = e2 && !e2.nodeType && e2, I = B && t2 && !t2.nodeType && t2, P = I && I.exports === B;
        function F(t3, e3) {
          return t3.set(e3[0], e3[1]), t3;
        }
        function z(t3, e3) {
          return t3.add(e3), t3;
        }
        function U(t3, e3, n3, r3) {
          var i2 = -1, o2 = t3 ? t3.length : 0;
          for (r3 && o2 && (n3 = t3[++i2]); ++i2 < o2; ) n3 = e3(n3, t3[i2], i2, t3);
          return n3;
        }
        function G(t3) {
          var e3 = false;
          if (null != t3 && "function" != typeof t3.toString) try {
            e3 = !!(t3 + "");
          } catch (t4) {
          }
          return e3;
        }
        function H(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4, r3) {
            n3[++e3] = [r3, t4];
          })), n3;
        }
        function $2(t3, e3) {
          return function(n3) {
            return t3(e3(n3));
          };
        }
        function V(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4) {
            n3[++e3] = t4;
          })), n3;
        }
        var W, X = Array.prototype, Q = Function.prototype, Z = Object.prototype, Y = q["__core-js_shared__"], K = (W = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "", J = Q.toString, tt = Z.hasOwnProperty, et = Z.toString, nt = RegExp("^" + J.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), rt = P ? q.Buffer : void 0, it = q.Symbol, ot = q.Uint8Array, st = $2(Object.getPrototypeOf, Object), at = Object.create, ut = Z.propertyIsEnumerable, ct = X.splice, lt = Object.getOwnPropertySymbols, ft = rt ? rt.isBuffer : void 0, ht = $2(Object.keys, Object), pt = qt(q, "DataView"), dt = qt(q, "Map"), gt = qt(q, "Promise"), vt = qt(q, "Set"), _t2 = qt(q, "WeakMap"), yt = qt(Object, "create"), bt = zt(pt), mt = zt(dt), Ct = zt(gt), Et = zt(vt), At = zt(_t2), Ot = it ? it.prototype : void 0, wt = Ot ? Ot.valueOf : void 0;
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
          tt.call(t3, e3) && Ut(r3, n3) && (void 0 !== n3 || e3 in t3) || (t3[e3] = n3);
        }
        function Mt(t3, e3) {
          for (var n3 = t3.length; n3--; ) if (Ut(t3[n3][0], e3)) return n3;
          return -1;
        }
        function Nt(t3, e3, n3, r3, i2, p2, y2) {
          var M2;
          if (r3 && (M2 = p2 ? r3(t3, i2, p2, y2) : r3(t3)), void 0 !== M2) return M2;
          if (!Wt(t3)) return t3;
          var N2 = Gt(t3);
          if (N2) {
            if (M2 = (function(t4) {
              var e4 = t4.length, n4 = t4.constructor(e4);
              return e4 && "string" == typeof t4[0] && tt.call(t4, "index") && (n4.index = t4.index, n4.input = t4.input), n4;
            })(t3), !e3) return (function(t4, e4) {
              var n4 = -1, r4 = t4.length;
              for (e4 || (e4 = Array(r4)); ++n4 < r4; ) e4[n4] = t4[n4];
              return e4;
            })(t3, M2);
          } else {
            var k2 = It(t3), D2 = k2 == u || k2 == c;
            if ($t(t3)) return (function(t4, e4) {
              if (e4) return t4.slice();
              var n4 = new t4.constructor(t4.length);
              return t4.copy(n4), n4;
            })(t3, e3);
            if (k2 == h || k2 == o || D2 && !p2) {
              if (G(t3)) return p2 ? t3 : {};
              if (M2 = (function(t4) {
                return "function" != typeof t4.constructor || Ft(t4) ? {} : Wt(e4 = st(t4)) ? at(e4) : {};
                var e4;
              })(D2 ? {} : t3), !e3) return (function(t4, e4) {
                return kt(t4, Bt(t4), e4);
              })(t3, (function(t4, e4) {
                return t4 && kt(e4, Xt(e4), t4);
              })(M2, t3));
            } else {
              if (!R[k2]) return p2 ? t3 : {};
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
                  case C:
                  case E:
                  case A:
                  case O:
                  case w:
                  case S:
                  case j:
                  case x:
                  case L:
                    return (function(t5, e5) {
                      var n5 = e5 ? Rt(t5.buffer) : t5.buffer;
                      return new t5.constructor(n5, t5.byteOffset, t5.length);
                    })(t4, r4);
                  case l:
                    return (function(t5, e5, n5) {
                      return U(e5 ? n5(H(t5), true) : H(t5), F, new t5.constructor());
                    })(t4, r4, n4);
                  case f:
                  case v:
                    return new o2(t4);
                  case d:
                    return (function(t5) {
                      var e5 = new t5.constructor(t5.source, T.exec(t5));
                      return e5.lastIndex = t5.lastIndex, e5;
                    })(t4);
                  case g:
                    return (function(t5, e5, n5) {
                      return U(e5 ? n5(V(t5), true) : V(t5), z, new t5.constructor());
                    })(t4, r4, n4);
                  case _:
                    return i3 = t4, wt ? Object(wt.call(i3)) : {};
                }
              })(t3, k2, Nt, e3);
            }
          }
          y2 || (y2 = new Lt());
          var q2 = y2.get(t3);
          if (q2) return q2;
          if (y2.set(t3, M2), !N2) var B2 = n3 ? (function(t4) {
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
            return !(!Wt(t4) || (e4 = t4, K && K in e4)) && (Vt(t4) || G(t4) ? nt : M).test(zt(t4));
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
          return tt.call(e3, t3) ? e3[t3] : void 0;
        }, St.prototype.has = function(t3) {
          var e3 = this.__data__;
          return yt ? void 0 !== e3[t3] : tt.call(e3, t3);
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
        var Bt = lt ? $2(lt, Object) : function() {
          return [];
        }, It = function(t3) {
          return et.call(t3);
        };
        function Pt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || N.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Ft(t3) {
          var e3 = t3 && t3.constructor;
          return t3 === ("function" == typeof e3 && e3.prototype || Z);
        }
        function zt(t3) {
          if (null != t3) {
            try {
              return J.call(t3);
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
              })(t5) && tt.call(t5, "callee") && (!ut.call(t5, "callee") || et.call(t5) == o);
            })(t4) ? (function(t5, e4) {
              for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e4(n4);
              return r4;
            })(t4.length, String) : [], r3 = n3.length, i2 = !!r3;
            for (var s2 in t4) !e3 && !tt.call(t4, s2) || i2 && ("length" == s2 || Pt(s2, r3)) || n3.push(s2);
            return n3;
          })(t3) : (function(t4) {
            if (!Ft(t4)) return ht(t4);
            var e3 = [];
            for (var n3 in Object(t4)) tt.call(t4, n3) && "constructor" != n3 && e3.push(n3);
            return e3;
          })(t3);
        }
        t2.exports = function(t3) {
          return Nt(t3, true, true);
        };
      }, 307: (t2, e2, n2) => {
        t2 = n2.nmd(t2);
        var r2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", u = "[object Date]", c = "[object Error]", l = "[object Function]", f = "[object Map]", h = "[object Number]", p = "[object Object]", d = "[object Promise]", g = "[object RegExp]", v = "[object Set]", _ = "[object String]", y = "[object WeakMap]", b = "[object ArrayBuffer]", m = "[object DataView]", C = /^\[object .+?Constructor\]$/, E = /^(?:0|[1-9]\d*)$/, A = {};
        A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = true, A[o] = A[s] = A[b] = A[a] = A[m] = A[u] = A[c] = A[l] = A[f] = A[h] = A[p] = A[g] = A[v] = A[_] = A[y] = false;
        var O = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, w = "object" == typeof self && self && self.Object === Object && self, S = O || w || Function("return this")(), j = e2 && !e2.nodeType && e2, x = j && t2 && !t2.nodeType && t2, L = x && x.exports === j, T = L && O.process, M = (function() {
          try {
            return T && T.binding && T.binding("util");
          } catch (t3) {
          }
        })(), N = M && M.isTypedArray;
        function R(t3, e3) {
          for (var n3 = -1, r3 = null == t3 ? 0 : t3.length; ++n3 < r3; ) if (e3(t3[n3], n3, t3)) return true;
          return false;
        }
        function k(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4, r3) {
            n3[++e3] = [r3, t4];
          })), n3;
        }
        function D(t3) {
          var e3 = -1, n3 = Array(t3.size);
          return t3.forEach((function(t4) {
            n3[++e3] = t4;
          })), n3;
        }
        var q, B, I, P = Array.prototype, F = Function.prototype, z = Object.prototype, U = S["__core-js_shared__"], G = F.toString, H = z.hasOwnProperty, $2 = (q = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q : "", V = z.toString, W = RegExp("^" + G.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), X = L ? S.Buffer : void 0, Q = S.Symbol, Z = S.Uint8Array, Y = z.propertyIsEnumerable, K = P.splice, J = Q ? Q.toStringTag : void 0, tt = Object.getOwnPropertySymbols, et = X ? X.isBuffer : void 0, nt = (B = Object.keys, I = Object, function(t3) {
          return B(I(t3));
        }), rt = xt(S, "DataView"), it = xt(S, "Map"), ot = xt(S, "Promise"), st = xt(S, "Set"), at = xt(S, "WeakMap"), ut = xt(Object, "create"), ct = Nt(rt), lt = Nt(it), ft = Nt(ot), ht = Nt(st), pt = Nt(at), dt = Q ? Q.prototype : void 0, gt = dt ? dt.valueOf : void 0;
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
          return null == t3 ? void 0 === t3 ? "[object Undefined]" : "[object Null]" : J && J in Object(t3) ? (function(t4) {
            var e3 = H.call(t4, J), n3 = t4[J];
            try {
              t4[J] = void 0;
              var r3 = true;
            } catch (t5) {
            }
            var i2 = V.call(t4);
            return r3 && (e3 ? t4[J] = n3 : delete t4[J]), i2;
          })(t3) : (function(t4) {
            return V.call(t4);
          })(t3);
        }
        function At(t3) {
          return Ft(t3) && Et(t3) == o;
        }
        function Ot(t3, e3, n3, r3, i2) {
          return t3 === e3 || (null == t3 || null == e3 || !Ft(t3) && !Ft(e3) ? t3 != t3 && e3 != e3 : (function(t4, e4, n4, r4, i3, l2) {
            var d2 = Dt(t4), y2 = Dt(e4), C2 = d2 ? s : Tt(t4), E2 = y2 ? s : Tt(e4), A2 = (C2 = C2 == o ? p : C2) == p, O2 = (E2 = E2 == o ? p : E2) == p, w2 = C2 == E2;
            if (w2 && qt(t4)) {
              if (!qt(e4)) return false;
              d2 = true, A2 = false;
            }
            if (w2 && !A2) return l2 || (l2 = new mt()), d2 || zt(t4) ? wt(t4, e4, n4, r4, i3, l2) : (function(t5, e5, n5, r5, i4, o2, s2) {
              switch (n5) {
                case m:
                  if (t5.byteLength != e5.byteLength || t5.byteOffset != e5.byteOffset) return false;
                  t5 = t5.buffer, e5 = e5.buffer;
                case b:
                  return !(t5.byteLength != e5.byteLength || !o2(new Z(t5), new Z(e5)));
                case a:
                case u:
                case h:
                  return Rt(+t5, +e5);
                case c:
                  return t5.name == e5.name && t5.message == e5.message;
                case g:
                case _:
                  return t5 == e5 + "";
                case f:
                  var l3 = k;
                case v:
                  var p2 = 1 & r5;
                  if (l3 || (l3 = D), t5.size != e5.size && !p2) return false;
                  var d3 = s2.get(t5);
                  if (d3) return d3 == e5;
                  r5 |= 2, s2.set(t5, e5);
                  var y3 = wt(l3(t5), l3(e5), r5, i4, o2, s2);
                  return s2.delete(t5), y3;
                case "[object Symbol]":
                  if (gt) return gt.call(t5) == gt.call(e5);
              }
              return false;
            })(t4, e4, C2, n4, r4, i3, l2);
            if (!(1 & n4)) {
              var S2 = A2 && H.call(t4, "__wrapped__"), j2 = O2 && H.call(e4, "__wrapped__");
              if (S2 || j2) {
                var x2 = S2 ? t4.value() : t4, L2 = j2 ? e4.value() : e4;
                return l2 || (l2 = new mt()), i3(x2, L2, n4, r4, l2);
              }
            }
            return !!w2 && (l2 || (l2 = new mt()), (function(t5, e5, n5, r5, i4, o2) {
              var s2 = 1 & n5, a2 = St(t5), u2 = a2.length;
              if (u2 != St(e5).length && !s2) return false;
              for (var c2 = u2; c2--; ) {
                var l3 = a2[c2];
                if (!(s2 ? l3 in e5 : H.call(e5, l3))) return false;
              }
              var f2 = o2.get(t5);
              if (f2 && o2.get(e5)) return f2 == e5;
              var h2 = true;
              o2.set(t5, e5), o2.set(e5, t5);
              for (var p2 = s2; ++c2 < u2; ) {
                var d3 = t5[l3 = a2[c2]], g2 = e5[l3];
                if (r5) var v2 = s2 ? r5(g2, d3, l3, e5, t5, o2) : r5(d3, g2, l3, t5, e5, o2);
                if (!(void 0 === v2 ? d3 === g2 || i4(d3, g2, n5, r5, o2) : v2)) {
                  h2 = false;
                  break;
                }
                p2 || (p2 = "constructor" == l3);
              }
              if (h2 && !p2) {
                var _2 = t5.constructor, y3 = e5.constructor;
                _2 == y3 || !("constructor" in t5) || !("constructor" in e5) || "function" == typeof _2 && _2 instanceof _2 && "function" == typeof y3 && y3 instanceof y3 || (h2 = false);
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
              if (!R(e3, (function(t4, e4) {
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
              return !!$2 && $2 in t5;
            })(t4)) && (Bt(t4) ? W : C).test(Nt(t4));
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
          return H.call(e3, t3) ? e3[t3] : void 0;
        }, vt.prototype.has = function(t3) {
          var e3 = this.__data__;
          return ut ? void 0 !== e3[t3] : H.call(e3, t3);
        }, vt.prototype.set = function(t3, e3) {
          var n3 = this.__data__;
          return this.size += this.has(t3) ? 0 : 1, n3[t3] = ut && void 0 === e3 ? r2 : e3, this;
        }, _t2.prototype.clear = function() {
          this.__data__ = [], this.size = 0;
        }, _t2.prototype.delete = function(t3) {
          var e3 = this.__data__, n3 = Ct(e3, t3);
          return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : K.call(e3, n3, 1), --this.size, 0));
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
        var Lt = tt ? function(t3) {
          return null == t3 ? [] : (t3 = Object(t3), (function(e3, n3) {
            for (var r3 = -1, i2 = null == e3 ? 0 : e3.length, o2 = 0, s2 = []; ++r3 < i2; ) {
              var a2 = e3[r3];
              u2 = a2, Y.call(t3, u2) && (s2[o2++] = a2);
            }
            var u2;
            return s2;
          })(tt(t3)));
        } : function() {
          return [];
        }, Tt = Et;
        function Mt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || E.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Nt(t3) {
          if (null != t3) {
            try {
              return G.call(t3);
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
        (rt && Tt(new rt(new ArrayBuffer(1))) != m || it && Tt(new it()) != f || ot && Tt(ot.resolve()) != d || st && Tt(new st()) != v || at && Tt(new at()) != y) && (Tt = function(t3) {
          var e3 = Et(t3), n3 = e3 == p ? t3.constructor : void 0, r3 = n3 ? Nt(n3) : "";
          if (r3) switch (r3) {
            case ct:
              return m;
            case lt:
              return f;
            case ft:
              return d;
            case ht:
              return v;
            case pt:
              return y;
          }
          return e3;
        });
        var kt = At(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? At : function(t3) {
          return Ft(t3) && H.call(t3, "callee") && !Y.call(t3, "callee");
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
        var zt = N ? /* @__PURE__ */ (function(t3) {
          return function(e3) {
            return t3(e3);
          };
        })(N) : function(t3) {
          return Ft(t3) && It(t3.length) && !!A[Et(t3)];
        };
        function Ut(t3) {
          return null != (e3 = t3) && It(e3.length) && !Bt(e3) ? (function(t4, e4) {
            var n3 = Dt(t4), r3 = !n3 && kt(t4), i2 = !n3 && !r3 && qt(t4), o2 = !n3 && !r3 && !i2 && zt(t4), s2 = n3 || r3 || i2 || o2, a2 = s2 ? (function(t5, e5) {
              for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e5(n4);
              return r4;
            })(t4.length, String) : [], u2 = a2.length;
            for (var c2 in t4) !e4 && !H.call(t4, c2) || s2 && ("length" == c2 || i2 && ("offset" == c2 || "parent" == c2) || o2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || Mt(c2, u2)) || a2.push(c2);
            return a2;
          })(t3) : (function(t4) {
            if (n3 = (e4 = t4) && e4.constructor, e4 !== ("function" == typeof n3 && n3.prototype || z)) return nt(t4);
            var e4, n3, r3 = [];
            for (var i2 in Object(t4)) H.call(t4, i2) && "constructor" != i2 && r3.push(i2);
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
                  var v = new t3(n3.rest());
                  return l2.concat(v).chop();
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
        n2.r(e2), n2.d(e2, { default: () => A });
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
        }, h = _(0, 0, 0, 0);
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
        function v(t3) {
          return i ? g(t3) ? (function(t4) {
            var e3 = t4.getBBox();
            return _(0, 0, e3.width, e3.height);
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
            return _(i2.left, i2.top, a2, u2);
          })(t3) : h;
        }
        function _(t3, e3, n3, r3) {
          return { x: t3, y: e3, width: n3, height: r3 };
        }
        var y = (function() {
          function t3(t4) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _(0, 0, 0, 0), this.target = t4;
          }
          return t3.prototype.isActive = function() {
            var t4 = v(this.target);
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
        })(), C = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new r2(), E = function t3(e3) {
          if (!(this instanceof t3)) throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          var n3 = c.getInstance(), r3 = new m(e3, n3, this);
          C.set(this, r3);
        };
        ["observe", "unobserve", "disconnect"].forEach((function(t3) {
          E.prototype[t3] = function() {
            var e3;
            return (e3 = C.get(this))[t3].apply(e3, arguments);
          };
        }));
        const A = void 0 !== o.ResizeObserver ? o.ResizeObserver : E;
      }, 413: (t2, e2, n2) => {
        "use strict";
        n2.r(e2), n2.d(e2, { default: () => _ });
        var r2 = n2(379), i = n2.n(r2), o = n2(795), s = n2.n(o), a = n2(569), u = n2.n(a), c = n2(565), l = n2.n(c), f = n2(216), h = n2.n(f), p = n2(589), d = n2.n(p), g = n2(582), v = {};
        v.styleTagTransform = d(), v.setAttributes = l(), v.insert = u().bind(null, "head"), v.domAPI = s(), v.insertStyleElement = h(), i()(g.Z, v);
        const _ = g.Z && g.Z.locals ? g.Z.locals : void 0;
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

// node_modules/lib0/map.js
var create = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create();
  m.forEach((v, k) => {
    r.set(k, v);
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
var isNaN = Number.isNaN;
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
var isNaN2 = Number.isNaN;
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
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
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
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
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
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
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
var undefinedToNull = (v) => v === void 0 ? null : v;

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
      s.shape.map((v) => v + "")
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
  constructor(v) {
    super();
    this.shape = v.length === 1 ? v[0] : new $Union(v);
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
  constructor(v) {
    super();
    this.shape = v;
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
  constructor(v) {
    super();
    this.shape = v;
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
    for (const k in o) {
      o2[k] = $(o[k]);
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
    for (const k in o.shape) {
      let prop = o.shape[k];
      if ($$optional.check(prop)) {
        if (bool(gen)) {
          continue;
        }
        prop = prop.shape;
      }
      res[k] = _random(prop, gen);
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
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        dels[j - 1] = new DeleteItem(left.clock, max(left.len, right.clock + right.len - left.clock));
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
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
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
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
        const v = item.content.getContent()[item.length - 1];
        map3[key] = v instanceof AbstractType ? v.toJSON() : v;
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
      (v) => v[0]
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
      (v) => v[1].content.getContent()[v[1].length - 1]
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
      (v) => (
        /** @type {any} */
        [v[0], v[1].content.getContent()[v[1].length - 1]]
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
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
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
    el.insert(0, this.toArray().map((v) => v instanceof AbstractType ? v.clone() : v));
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
        for (let j = 0; j < node.attrs.length; j++) {
          const attr = node.attrs[j];
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
            for (let key in op.attributes) {
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
var Quill = window.Quill;
Quill.register("modules/cursors", import_quill_cursors.default);
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
function showLoadingOverlay(msg) {
  let ov = document.getElementById("init-loading-overlay");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "init-loading-overlay";
    ov.style.cssText = "position:fixed;inset:0;background:rgba(249,250,251,0.92);backdrop-filter:blur(4px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:Inter,sans-serif;";
    document.body.appendChild(ov);
  }
  ov.innerHTML = '<div style="width:36px;height:36px;border:3px solid #e5e7eb;border-top-color:#10b981;border-radius:50%;animation:spin 0.8s linear infinite"></div><p style="color:#6b7280;font-size:14px;">' + msg + "</p>";
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
  el.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><h3 style="font-size:17px;font-weight:700;color:#111827;margin:0">' + message + '</h3><a href="/auth.html" style="padding:10px 24px;background:#10b981;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;font-size:14px;">Sign in again</a>';
  if (!ov) document.body.appendChild(el);
}
function showForbidden() {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:16px;font-family:Inter,sans-serif;color:#374151">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <h2 style="font-size:20px;font-weight:700">Access Denied</h2>
      <p style="color:#6b7280">You don't have permission to view this document.</p>
      <a href="/dashboard.html" style="color:#10b981;font-weight:600;text-decoration:none">\u2190 Back to Dashboard</a>
    </div>`;
}
showLoadingOverlay("Connecting\u2026");
(async () => {
  try {
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
      const username = user.user_metadata?.username || user.email?.split("@")[0] || "User";
      const { data: newProf } = await sb.from("profiles").insert({ id: user.id, username }).select().single();
      profile = newProf;
    }
    if (!profile) {
      await sb.auth.signOut().catch(() => {
      });
      showSessionError("Your profile could not be loaded.");
      return;
    }
    myId = profile.id;
    myName = profile.username;
    const params2 = new URLSearchParams(window.location.search);
    docId = params2.get("doc");
    if (!docId) {
      window.location.href = "/dashboard.html";
      return;
    }
    const inviteToken = params2.get("invite");
    showLoadingOverlay("Loading document\u2026");
    const { data: doc2, error: docErr } = await sb.from("documents").select("*").eq("id", docId).single();
    if (docErr || !doc2) {
      window.location.href = "/dashboard.html";
      return;
    }
    if (doc2.owner_id === myId) {
      myRole = "owner";
    } else {
      let { data: perm } = await sb.from("document_permissions").select("*").eq("doc_id", docId).eq("user_id", myId).single();
      if (!perm && inviteToken) {
        try {
          const decodedRole = atob(inviteToken);
          if (["editor", "commenter", "viewer"].includes(decodedRole)) {
            await sb.from("document_permissions").insert({ doc_id: docId, user_id: myId, role: decodedRole });
            perm = { role: decodedRole };
            const url = new URL(window.location.href);
            url.searchParams.delete("invite");
            window.history.replaceState({}, document.title, url.toString());
          }
        } catch (e) {
          console.error("Invalid invite token", e);
        }
      }
      if (!perm) return showForbidden();
      myRole = perm.role;
    }
    myColor = `hsl(${parseInt(myId.replace(/-/g, ""), 16) % 360}, 80%, 45%)`;
    applyRoleUI(myRole);
    const editorContainer = document.getElementById("editor");
    const isReadOnly = myRole === "viewer";
    quill = new Quill(editorContainer, {
      theme: "snow",
      modules: {
        toolbar: isReadOnly ? false : "#toolbar",
        history: { userOnly: true },
        cursors: {
          hideDelayMs: 5e3,
          hideSpeedMs: 300,
          selectionChangeSource: null,
          transformOnTextChange: true
        }
      },
      placeholder: "Start typing your collaborative document here\u2026",
      readOnly: isReadOnly
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
    ydoc = new Doc();
    ytext = ydoc.getText("quill");
    const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${wsProtocol}//${window.location.host}`;
    const roomName = `doc-${docId}`;
    wsProvider = new WebsocketProvider(wsUrl, roomName, ydoc);
    wsProvider.awareness.setLocalStateField("user", {
      id: myId,
      name: myName,
      color: myColor,
      role: myRole
    });
    const binding = new QuillBinding(ytext, quill, wsProvider.awareness);
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
    wsProvider.awareness.on("change", () => {
      users = {};
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
    quill.on("text-change", () => {
      debounceDbSave();
    });
    applyRoleUI(myRole);
    docTitleInput.value = doc2.title;
    document.title = `${doc2.title} \u2013 CoDoc`;
    renderComments();
    renderHistory();
    setupMyAvatar();
    hideLoadingOverlay();
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
      comments = msg.comments;
      versionHistory = msg.versionHistory;
      renderComments();
      renderHistory();
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
function debounceDbSave() {
  if (myRole === "viewer") return;
  clearTimeout(dbSaveTimer);
  dbSaveTimer = setTimeout(() => {
    const sb = getSupabase();
    if (sb && quill) {
      sb.from("documents").update({
        content: quill.root.innerHTML,
        comments,
        versions: versionHistory
      }).eq("id", docId).then();
    }
  }, 2e3);
}
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
window.startAddComment = function() {
  if (myRole === "viewer") return;
  const range = quill?.getSelection();
  if (!range || range.length === 0) {
    showToast("Select some text first to add a comment.");
    return;
  }
  savedRange = range;
  commentText.value = "";
  commentModal.classList.remove("hidden");
  setTimeout(() => commentText.focus(), 50);
};
window.cancelComment = function() {
  commentModal.classList.add("hidden");
  savedRange = null;
};
window.submitComment = function() {
  const text2 = commentText.value.trim();
  if (!text2) return;
  let selectedText = "";
  if (savedRange && quill) {
    selectedText = quill.getText(savedRange.index, savedRange.length);
    quill.formatText(savedRange.index, savedRange.length, "background", "#fef3c7");
  }
  comments.push({
    id: "c" + Date.now(),
    author: myName,
    authorColor: myColor,
    text: text2,
    selectedText: selectedText || null,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    resolved: false,
    replies: []
  });
  syncState();
  renderComments();
  commentModal.classList.add("hidden");
  savedRange = null;
};
function renderComments() {
  const active = comments.filter((c) => !c.resolved);
  const resolved = comments.filter((c) => c.resolved);
  commentCount.textContent = active.length;
  if ([...active, ...resolved].length === 0) {
    commentsList.innerHTML = `
      <div class="no-comments">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <p>No comments yet.<br/>Select text and click Comment.</p>
      </div>`;
    return;
  }
  commentsList.innerHTML = "";
  [...active, ...resolved].forEach((c) => {
    const card = document.createElement("div");
    card.className = "comment-card" + (c.resolved ? " resolved" : "");
    card.id = "comment-card-" + c.id;
    const canAct = myRole !== "viewer";
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
    commentsList.appendChild(card);
  });
}
window.sendReply = function(commentId) {
  const input = document.getElementById("reply-" + commentId);
  if (!input) return;
  const text2 = input.value.trim();
  if (!text2) return;
  input.value = "";
  const c = comments.find((x) => x.id === commentId);
  if (c) {
    c.replies.push({ author: myName, authorColor: myColor, text: text2, timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    syncState();
    renderComments();
  }
};
window.resolveComment = function(commentId) {
  const c = comments.find((x) => x.id === commentId);
  if (c) {
    c.resolved = true;
    syncState();
    renderComments();
  }
};
document.getElementById("history-btn").addEventListener("click", () => {
  historyPanel.classList.remove("hidden");
  historyOverlay.classList.remove("hidden");
});
window.closeHistory = function() {
  historyPanel.classList.add("hidden");
  historyOverlay.classList.add("hidden");
};
window.cancelSaveVersion = function() {
  saveVersionModal.classList.add("hidden");
};
window.confirmSaveVersion = function() {
  const name = versionNameInput.value.trim();
  versionHistory.unshift({
    id: "v" + Date.now(),
    name: name || "Unnamed Version",
    content: quill.root.innerHTML,
    author: myName,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  syncState();
  renderHistory();
  saveVersionModal.classList.add("hidden");
  showToast(`\u{1F4BE} Version "${name || "Unnamed Version"}" saved`);
};
versionNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") window.confirmSaveVersion();
  if (e.key === "Escape") window.cancelSaveVersion();
});
function renderHistory() {
  if (versionHistory.length === 0) {
    historyList.innerHTML = '<div class="no-comments"><p>No saved versions yet.</p></div>';
    return;
  }
  historyList.innerHTML = "";
  versionHistory.forEach((v) => {
    const item = document.createElement("div");
    item.className = "version-item";
    item.innerHTML = `
      <div class="version-name">${escapeHtml(v.name)}</div>
      <div class="version-meta">${escapeHtml(v.author)} \xB7 ${timeAgo(v.timestamp)}</div>
    `;
    item.addEventListener("click", () => {
      if (confirm("Restore this version? Current content will be replaced.")) {
        const delta = quill.clipboard.convert({ html: v.content });
        quill.setContents(delta);
        showToast(`\u{1F504} Restored "${v.name}"`);
        window.closeHistory();
      }
    });
    historyList.appendChild(item);
  });
}
var aiChatPanel = document.getElementById("ai-chat-panel");
var aiChatOverlay = document.getElementById("ai-chat-overlay");
var aiChatMessages = document.getElementById("ai-chat-messages");
var aiChatInput = document.getElementById("ai-chat-input");
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
  if (includeCtx && quill) {
    prompt2 = `Document content:

${quill.getText()}

---

User question/request: ${text2}`;
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
    if (data.result) {
      const copyIcon = `<svg style="width:12px;height:12px;margin-right:3px;vertical-align:middle;display:inline-block;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      const encodedMsg = escapeHtml(data.result).replace(/"/g, "&quot;");
      aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content">${escapeHtml(data.result)}</div><div class="chat-time" style="display:flex;gap:12px;align-items:center;"><span>Now</span><span class="chat-copy-btn" onclick="copyAiText(this)" data-text="${encodedMsg}" style="cursor:pointer;color:#10b981;transition:0.2s;">${copyIcon}Copy</span></div></div>`;
    } else {
      aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Error: ${escapeHtml(data.error || "Unknown error")}</div></div>`;
    }
  } catch (err) {
    document.getElementById("ai-typing")?.remove();
    aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Network error</div></div>`;
  }
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
};
window.copyAiText = function(btn) {
  const text2 = btn.getAttribute("data-text");
  navigator.clipboard.writeText(text2);
  const oldHtml = btn.innerHTML;
  btn.innerHTML = "\u2713 Copied!";
  setTimeout(() => btn.innerHTML = oldHtml, 2e3);
};
window.sendQuickPrompt = function(type) {
  const selectedText = quill ? quill.getText(quill.getSelection()?.index || 0, quill.getSelection()?.length || 0) : "";
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
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    window.sendChatMessage();
  }
});
aiChatInput?.addEventListener("input", () => {
  aiChatInput.style.height = "auto";
  aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + "px";
});
commentModal.addEventListener("click", (e) => {
  if (e.target === commentModal) window.cancelComment();
});
window.openShareModal = function() {
  const canInvite = myRole === "owner" || myRole === "editor";
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
  const canInvite = myRole === "owner" || myRole === "editor";
  let link;
  if (canInvite) {
    const roleOpt = document.querySelector('input[name="share-role"]:checked');
    const role = roleOpt ? roleOpt.value : "viewer";
    link = window.location.origin + "/editor.html?doc=" + docId + "&invite=" + btoa(role);
  } else {
    link = window.location.origin + "/editor.html?doc=" + docId;
  }
  document.getElementById("share-link-input").value = link;
};
window.copyShareLink = function() {
  const linkInput = document.getElementById("share-link-input");
  navigator.clipboard.writeText(linkInput.value).catch(() => {
    linkInput.select();
    document.execCommand("copy");
  });
  showToast("\u{1F517} Link copied to clipboard!", "#10b981");
};
document.querySelectorAll('input[name="share-role"]').forEach((el) => {
  el.addEventListener("change", window.generateShareLink);
});
document.getElementById("share-btn")?.addEventListener("click", window.openShareModal);
window.toggleExportMenu = function() {
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
};
window.exportDocument = function(format) {
  document.getElementById("export-dropdown").classList.add("hidden");
  const title = docTitleInput.value.trim() || "Untitled Document";
  if (format === "html") {
    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>${escapeHtml(title)}</title>
<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}</style>
</head>
<body>
<h1>${escapeHtml(title)}</h1>
${quill.root.innerHTML}
</body></html>`;
    downloadFile(title + ".html", html, "text/html");
    showToast("\u{1F4C4} Exported as HTML", "#10b981");
  } else if (format === "txt") {
    downloadFile(title + ".txt", quill.getText(), "text/plain");
    showToast("\u{1F4C4} Exported as TXT", "#10b981");
  } else if (format === "pdf") {
    const printW = window.open("", "_blank");
    printW.document.write(`<!DOCTYPE html><html><head><title>${escapeHtml(title)}</title>
<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}@media print{body{margin:0;padding:20px;}}</style>
</head><body><h1>${escapeHtml(title)}</h1>${quill.root.innerHTML}</body></html>`);
    printW.document.close();
    printW.focus();
    setTimeout(() => {
      printW.print();
      printW.close();
    }, 400);
    showToast("\u{1F5A8}\uFE0F Print/PDF dialog opened", "#10b981");
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
var toastTimer = null;
function showToast(message, color = null) {
  toastEl.textContent = message;
  toastEl.className = "toast" + (color ? " has-color" : "");
  if (color) toastEl.style.borderLeftColor = color;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add("hidden"), 3500);
}
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
/*! Bundled license information:

quill-cursors/dist/quill-cursors.js:
  (*! For license information please see quill-cursors.js.LICENSE.txt *)
*/
