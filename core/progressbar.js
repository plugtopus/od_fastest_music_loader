! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = t()
    }
}(function() {
    return function t(e, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var p = n[s] = {
                    exports: {}
                };
                e[s][0].call(p.exports, function(t) {
                    var n = e[s][1][t];
                    return r(n || t)
                }, p, p.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
        return r
    }({
        1: [function(t, e, n) {
            (function() {
                var t = this || Function("return this")(),
                    i = function() {
                        "use strict";
                        var i, r, o, s, a, u, h = "linear",
                            p = 1e3 / 60,
                            c = Date.now ? Date.now : function() {
                                return +new Date
                            },
                            l = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : c;

                        function f() {}

                        function _(t, e) {
                            var n;
                            for (n in t) Object.hasOwnProperty.call(t, n) && e(n)
                        }

                        function d(t, e) {
                            return _(e, function(n) {
                                t[n] = e[n]
                            }), t
                        }

                        function g(t, e) {
                            _(e, function(n) {
                                void 0 === t[n] && (t[n] = e[n])
                            })
                        }

                        function w(t, e, n, r, o, s, a) {
                            var u, h, p, c = t < s ? 0 : (t - s) / o;
                            for (u in e) e.hasOwnProperty(u) && (p = "function" == typeof(h = a[u]) ? h : i[h], e[u] = y(n[u], r[u], p, c));
                            return e
                        }

                        function y(t, e, n, i) {
                            return t + (e - t) * n(i)
                        }

                        function m(t, e) {
                            var n = x.prototype.filter,
                                i = t._filterArgs;
                            _(n, function(r) {
                                void 0 !== n[r][e] && n[r][e].apply(t, i)
                            })
                        }

                        function v(t, e, n, i, r, h, c, f, _, d, g) {
                            o = e + n + i, s = Math.min(g || l(), o), a = s >= o, u = i - (o - s), t.isPlaying() && (a ? (_(c, t._attachment, u), t.stop(!0)) : (t._scheduleId = d(t._timeoutHandler, p), m(t, "beforeTween"), s < e + n ? w(1, r, h, c, 1, 1, f) : w(s, r, h, c, i, e + n, f), m(t, "afterTween"), _(r, t._attachment, u)))
                        }

                        function S(t, e) {
                            var n = {},
                                i = typeof e;
                            return _(t, "string" === i || "function" === i ? function(t) {
                                n[t] = e
                            } : function(t) {
                                n[t] || (n[t] = e[t] || h)
                            }), n
                        }

                        function x(t, e) {
                            this._currentState = t || {}, this._configured = !1, this._scheduleFunction = r, void 0 !== e && this.setConfig(e)
                        }
                        return r = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, x.prototype.tween = function(t) {
                            return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = l(), this._start(this.get(), this._attachment), this.resume())
                        }, x.prototype.setConfig = function(t) {
                            t = t || {}, this._configured = !0, this._attachment = t.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = t.delay || 0, this._start = t.start || f, this._step = t.step || f, this._finish = t.finish || f, this._duration = t.duration || 500, this._currentState = d({}, t.from) || this.get(), this._originalState = this.get(), this._targetState = d({}, t.to) || this.get();
                            var e = this;
                            this._timeoutHandler = function() {
                                v(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                            };
                            var n = this._currentState,
                                i = this._targetState;
                            return g(i, n), this._easing = S(n, t.easing || h), this._filterArgs = [n, this._originalState, i, this._easing], m(this, "tweenCreated"), this
                        }, x.prototype.get = function() {
                            return d({}, this._currentState)
                        }, x.prototype.set = function(t) {
                            this._currentState = t
                        }, x.prototype.pause = function() {
                            return this._pausedAtTime = l(), this._isPaused = !0, this
                        }, x.prototype.resume = function() {
                            return this._isPaused && (this._timestamp += l() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                        }, x.prototype.seek = function(t) {
                            t = Math.max(t, 0);
                            var e = l();
                            return this._timestamp + t === 0 ? this : (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, v(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause()), this)
                        }, x.prototype.stop = function(e) {
                            return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = f, (t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || t.mozCancelRequestAnimationFrame || t.clearTimeout)(this._scheduleId), e && (m(this, "beforeTween"), w(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), m(this, "afterTween"), m(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                        }, x.prototype.isPlaying = function() {
                            return this._isTweening && !this._isPaused
                        }, x.prototype.setScheduleFunction = function(t) {
                            this._scheduleFunction = t
                        }, x.prototype.dispose = function() {
                            var t;
                            for (t in this) this.hasOwnProperty(t) && delete this[t]
                        }, x.prototype.filter = {}, x.prototype.formula = {
                            linear: function(t) {
                                return t
                            }
                        }, i = x.prototype.formula, d(x, {
                            now: l,
                            each: _,
                            tweenProps: w,
                            tweenProp: y,
                            applyFilter: m,
                            shallowCopy: d,
                            defaults: g,
                            composeEasingObject: S
                        }), "function" == typeof SHIFTY_DEBUG_NOW && (t.timeoutHandler = v), "object" == typeof n ? e.exports = x : void 0 === t.Tweenable && (t.Tweenable = x), x
                    }();
                i.shallowCopy(i.prototype.formula, {
                    easeInQuad: function(t) {
                        return Math.pow(t, 2)
                    },
                    easeOutQuad: function(t) {
                        return -(Math.pow(t - 1, 2) - 1)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                    },
                    easeInCubic: function(t) {
                        return Math.pow(t, 3)
                    },
                    easeOutCubic: function(t) {
                        return Math.pow(t - 1, 3) + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                    },
                    easeInQuart: function(t) {
                        return Math.pow(t, 4)
                    },
                    easeOutQuart: function(t) {
                        return -(Math.pow(t - 1, 4) - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                    },
                    easeInQuint: function(t) {
                        return Math.pow(t, 5)
                    },
                    easeOutQuint: function(t) {
                        return Math.pow(t - 1, 5) + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - Math.pow(t - 1, 2))
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInBack: function(t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function(t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    elastic: function(t) {
                        return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                    },
                    swingFromTo: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    swingFrom: function(t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    swingTo: function(t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    bounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    bouncePast: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeFromTo: function(t) {
                        return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                    },
                    easeFrom: function(t) {
                        return Math.pow(t, 4)
                    },
                    easeTo: function(t) {
                        return Math.pow(t, .25)
                    }
                }),
                    function() {
                        function t(t, e, n, i, r, o) {
                            var s, a = 0,
                                u = 0,
                                h = 0,
                                p = 0,
                                c = 0,
                                l = 0;

                            function f(t) {
                                return ((a * t + u) * t + h) * t
                            }

                            function _(t) {
                                return t >= 0 ? t : 0 - t
                            }
                            return a = 1 - (h = 3 * e) - (u = 3 * (i - e) - h), p = 1 - (l = 3 * n) - (c = 3 * (r - n) - l), s = function(t, e) {
                                var n, i, r, o, s, p, c;
                                for (r = t, p = 0; p < 8; p++) {
                                    if (_(o = f(r) - t) < e) return r;
                                    if (_(s = (3 * a * (c = r) + 2 * u) * c + h) < 1e-6) break;
                                    r -= o / s
                                }
                                if (i = 1, (r = t) < (n = 0)) return n;
                                if (r > i) return i;
                                for (; n < i;) {
                                    if (_((o = f(r)) - t) < e) return r;
                                    t > o ? n = r : i = r, r = .5 * (i - n) + n
                                }
                                return r
                            }(t, 1 / (200 * o)), ((p * s + c) * s + l) * s
                        }
                        i.setBezierFunction = function(e, n, r, o, s) {
                            var a, u, h, p, c = (a = n, u = r, h = o, p = s, function(e) {
                                return t(e, a, u, h, p, 1)
                            });
                            return c.displayName = e, c.x1 = n, c.y1 = r, c.x2 = o, c.y2 = s, i.prototype.formula[e] = c
                        }, i.unsetBezierFunction = function(t) {
                            delete i.prototype.formula[t]
                        }
                    }(),
                    function() {
                        var t = new i;
                        t._filterArgs = [], i.interpolate = function(e, n, r, o, s) {
                            var a = i.shallowCopy({}, e),
                                u = s || 0,
                                h = i.composeEasingObject(e, o || "linear");
                            t.set({});
                            var p = t._filterArgs;
                            p.length = 0, p[0] = a, p[1] = e, p[2] = n, p[3] = h, i.applyFilter(t, "tweenCreated"), i.applyFilter(t, "beforeTween");
                            var c, l, f, _, d, g, w = (c = e, l = a, f = n, _ = r, d = h, g = u, i.tweenProps(_, l, c, f, 1, g, d));
                            return i.applyFilter(t, "afterTween"), w
                        }
                    }(),
                    function(t) {
                        var e = /(\d|\-|\.)/,
                            n = /([^\-0-9\.]+)/g,
                            i = /[0-9.\-]+/g,
                            r = new RegExp("rgb\\(" + i.source + /,\s*/.source + i.source + /,\s*/.source + i.source + "\\)", "g"),
                            o = /^.*\(/,
                            s = /#([0-9]|[a-f]){3,6}/gi,
                            a = "VAL";

                        function u(e) {
                            t.each(e, function(t) {
                                var n = e[t];
                                "string" == typeof n && n.match(s) && (e[t] = l(s, n, h))
                            })
                        }

                        function h(t) {
                            var e = function(t) {
                                3 === (t = t.replace(/#/, "")).length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                                return p[0] = c(t.substr(0, 2)), p[1] = c(t.substr(2, 2)), p[2] = c(t.substr(4, 2)), p
                            }(t);
                            return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
                        }
                        var p = [];

                        function c(t) {
                            return parseInt(t, 16)
                        }

                        function l(t, e, n) {
                            var i = e.match(t),
                                r = e.replace(t, a);
                            if (i)
                                for (var o, s = i.length, u = 0; u < s; u++) o = i.shift(), r = r.replace(a, n(o));
                            return r
                        }

                        function f(t) {
                            for (var e = t.match(i), n = e.length, r = t.match(o)[0], s = 0; s < n; s++) r += parseInt(e[s], 10) + ",";
                            return r = r.slice(0, -1) + ")"
                        }

                        function _(i) {
                            var r = {};
                            return t.each(i, function(t) {
                                var o, s, u = i[t];
                                if ("string" == typeof u) {
                                    var h = y(u);
                                    r[t] = {
                                        formatString: (o = u, s = o.match(n), s ? (1 === s.length || o[0].match(e)) && s.unshift("") : s = ["", ""], s.join(a)),
                                        chunkNames: function(t, e) {
                                            var n, i = [],
                                                r = t.length;
                                            for (n = 0; n < r; n++) i.push("_" + e + "_" + n);
                                            return i
                                        }(h, t)
                                    }
                                }
                            }), r
                        }

                        function d(e, n) {
                            t.each(n, function(t) {
                                for (var i = y(e[t]), r = i.length, o = 0; o < r; o++) e[n[t].chunkNames[o]] = +i[o];
                                delete e[t]
                            })
                        }

                        function g(e, n) {
                            t.each(n, function(t) {
                                var i = e[t],
                                    o = function(t, e) {
                                        w.length = 0;
                                        for (var n = e.length, i = 0; i < n; i++) w.push(t[e[i]]);
                                        return w
                                    }(function(t, e) {
                                        for (var n, i = {}, r = e.length, o = 0; o < r; o++) n = e[o], i[n] = t[n], delete t[n];
                                        return i
                                    }(e, n[t].chunkNames), n[t].chunkNames);
                                i = function(t, e) {
                                    for (var n = t, i = e.length, r = 0; r < i; r++) n = n.replace(a, +e[r].toFixed(4));
                                    return n
                                }(n[t].formatString, o), e[t] = l(r, i, f)
                            })
                        }
                        var w = [];

                        function y(t) {
                            return t.match(i)
                        }
                        t.prototype.filter.token = {
                            tweenCreated: function(t, e, n, i) {
                                u(t), u(e), u(n), this._tokenData = _(t)
                            },
                            beforeTween: function(e, n, i, r) {
                                var o, s;
                                o = r, s = this._tokenData, t.each(s, function(t) {
                                    var e, n = s[t].chunkNames,
                                        i = n.length,
                                        r = o[t];
                                    if ("string" == typeof r) {
                                        var a = r.split(" "),
                                            u = a[a.length - 1];
                                        for (e = 0; e < i; e++) o[n[e]] = a[e] || u
                                    } else
                                        for (e = 0; e < i; e++) o[n[e]] = r;
                                    delete o[t]
                                }), d(e, this._tokenData), d(n, this._tokenData), d(i, this._tokenData)
                            },
                            afterTween: function(e, n, i, r) {
                                var o, s;
                                g(e, this._tokenData), g(n, this._tokenData), g(i, this._tokenData), o = r, s = this._tokenData, t.each(s, function(t) {
                                    var e = s[t].chunkNames,
                                        n = e.length,
                                        i = o[e[0]];
                                    if ("string" == typeof i) {
                                        for (var r = "", a = 0; a < n; a++) r += " " + o[e[a]], delete o[e[a]];
                                        o[t] = r.substr(1)
                                    } else o[t] = i
                                })
                            }
                        }
                    }(i)
            }).call(null)
        }, {}],
        2: [function(t, e, n) {
            var i = t("./shape"),
                r = t("./utils"),
                o = function(t, e) {
                    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, i.apply(this, arguments)
                };
            (o.prototype = new i).constructor = o, o.prototype._pathString = function(t) {
                var e = t.strokeWidth;
                t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
                var n = 50 - e / 2;
                return r.render(this._pathTemplate, {
                    radius: n,
                    "2radius": 2 * n
                })
            }, o.prototype._trailString = function(t) {
                return this._pathString(t)
            }, e.exports = o
        }, {
            "./shape": 7,
            "./utils": 8
        }],
        3: [function(t, e, n) {
            var i = t("./shape"),
                r = t("./utils"),
                o = function(t, e) {
                    this._pathTemplate = "M 0,{center} L 100,{center}", i.apply(this, arguments)
                };
            (o.prototype = new i).constructor = o, o.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
            }, o.prototype._pathString = function(t) {
                return r.render(this._pathTemplate, {
                    center: t.strokeWidth / 2
                })
            }, o.prototype._trailString = function(t) {
                return this._pathString(t)
            }, e.exports = o
        }, {
            "./shape": 7,
            "./utils": 8
        }],
        4: [function(t, e, n) {
            e.exports = {
                Line: t("./line"),
                Circle: t("./circle"),
                SemiCircle: t("./semicircle"),
                Path: t("./path"),
                Shape: t("./shape"),
                utils: t("./utils")
            }
        }, {
            "./circle": 2,
            "./line": 3,
            "./path": 5,
            "./semicircle": 6,
            "./shape": 7,
            "./utils": 8
        }],
        5: [function(t, e, n) {
            var i = t("shifty"),
                r = t("./utils"),
                o = {
                    easeIn: "easeInCubic",
                    easeOut: "easeOutCubic",
                    easeInOut: "easeInOutCubic"
                },
                s = function t(e, n) {
                    if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                    var i;
                    n = r.extend({
                        duration: 800,
                        easing: "linear",
                        from: {},
                        to: {},
                        step: function() {}
                    }, n), i = r.isString(e) ? document.querySelector(e) : e, this.path = i, this._opts = n, this._tweenable = null;
                    var o = this.path.getTotalLength();
                    this.path.style.strokeDasharray = o + " " + o, this.set(0)
                };
            s.prototype.value = function() {
                var t = this._getComputedDashOffset(),
                    e = this.path.getTotalLength();
                return parseFloat((1 - t / e).toFixed(6), 10)
            }, s.prototype.set = function(t) {
                this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
                var e = this._opts.step;
                if (r.isFunction(e)) {
                    var n = this._easing(this._opts.easing);
                    e(this._calculateTo(t, n), this._opts.shape || this, this._opts.attachment)
                }
            }, s.prototype.stop = function() {
                this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
            }, s.prototype.animate = function(t, e, n) {
                e = e || {}, r.isFunction(e) && (n = e, e = {});
                var o = r.extend({}, e),
                    s = r.extend({}, this._opts);
                e = r.extend(s, e);
                var a = this._easing(e.easing),
                    u = this._resolveFromAndTo(t, a, o);
                this.stop(), this.path.getBoundingClientRect();
                var h = this._getComputedDashOffset(),
                    p = this._progressToOffset(t),
                    c = this;
                this._tweenable = new i, this._tweenable.tween({
                    from: r.extend({
                        offset: h
                    }, u.from),
                    to: r.extend({
                        offset: p
                    }, u.to),
                    duration: e.duration,
                    easing: a,
                    step: function(t) {
                        c.path.style.strokeDashoffset = t.offset;
                        var n = e.shape || c;
                        e.step(t, n, e.attachment)
                    },
                    finish: function(t) {
                        r.isFunction(n) && n()
                    }
                })
            }, s.prototype._getComputedDashOffset = function() {
                var t = window.getComputedStyle(this.path, null);
                return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
            }, s.prototype._progressToOffset = function(t) {
                var e = this.path.getTotalLength();
                return e - t * e
            }, s.prototype._resolveFromAndTo = function(t, e, n) {
                return n.from && n.to ? {
                    from: n.from,
                    to: n.to
                } : {
                    from: this._calculateFrom(e),
                    to: this._calculateTo(t, e)
                }
            }, s.prototype._calculateFrom = function(t) {
                return i.interpolate(this._opts.from, this._opts.to, this.value(), t)
            }, s.prototype._calculateTo = function(t, e) {
                return i.interpolate(this._opts.from, this._opts.to, t, e)
            }, s.prototype._stopTween = function() {
                null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
            }, s.prototype._easing = function(t) {
                return o.hasOwnProperty(t) ? o[t] : t
            }, e.exports = s
        }, {
            "./utils": 8,
            shifty: 1
        }],
        6: [function(t, e, n) {
            var i = t("./shape"),
                r = t("./circle"),
                o = t("./utils"),
                s = function(t, e) {
                    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, i.apply(this, arguments)
                };
            (s.prototype = new i).constructor = s, s.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 50")
            }, s.prototype._initializeTextContainer = function(t, e, n) {
                t.text.style && (n.style.top = "auto", n.style.bottom = "0", t.text.alignToBottom ? o.setStyle(n, "transform", "translate(-50%, 0)") : o.setStyle(n, "transform", "translate(-50%, 50%)"))
            }, s.prototype._pathString = r.prototype._pathString, s.prototype._trailString = r.prototype._trailString, e.exports = s
        }, {
            "./circle": 2,
            "./shape": 7,
            "./utils": 8
        }],
        7: [function(t, e, n) {
            var i = t("./path"),
                r = t("./utils"),
                o = "Object is destroyed",
                s = function t(e, n) {
                    if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                    if (0 !== arguments.length) {
                        this._opts = r.extend({
                            color: "#555",
                            strokeWidth: 1,
                            trailColor: null,
                            trailWidth: null,
                            fill: null,
                            text: {
                                style: {
                                    color: null,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    padding: 0,
                                    margin: 0,
                                    transform: {
                                        prefix: !0,
                                        value: "translate(-50%, -50%)"
                                    }
                                },
                                autoStyleContainer: !0,
                                alignToBottom: !0,
                                value: null,
                                className: "progressbar-text"
                            },
                            svgStyle: {
                                display: "block",
                                width: "100%"
                            },
                            warnings: !1
                        }, n, !0), r.isObject(n) && void 0 !== n.svgStyle && (this._opts.svgStyle = n.svgStyle), r.isObject(n) && r.isObject(n.text) && void 0 !== n.text.style && (this._opts.text.style = n.text.style);
                        var o, s = this._createSvgView(this._opts);
                        if (!(o = r.isString(e) ? document.querySelector(e) : e)) throw new Error("Container does not exist: " + e);
                        this._container = o, this._container.appendChild(s.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && r.setStyles(s.svg, this._opts.svgStyle), this.svg = s.svg, this.path = s.path, this.trail = s.trail, this.text = null;
                        var a = r.extend({
                            attachment: void 0,
                            shape: this
                        }, this._opts);
                        this._progressPath = new i(s.path, a), r.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                    }
                };
            s.prototype.animate = function(t, e, n) {
                if (null === this._progressPath) throw new Error(o);
                this._progressPath.animate(t, e, n)
            }, s.prototype.stop = function() {
                if (null === this._progressPath) throw new Error(o);
                void 0 !== this._progressPath && this._progressPath.stop()
            }, s.prototype.destroy = function() {
                if (null === this._progressPath) throw new Error(o);
                this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
            }, s.prototype.set = function(t) {
                if (null === this._progressPath) throw new Error(o);
                this._progressPath.set(t)
            }, s.prototype.value = function() {
                if (null === this._progressPath) throw new Error(o);
                return void 0 === this._progressPath ? 0 : this._progressPath.value()
            }, s.prototype.setText = function(t) {
                if (null === this._progressPath) throw new Error(o);
                null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), r.isObject(t) ? (r.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
            }, s.prototype._createSvgView = function(t) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this._initializeSvg(e, t);
                var n = null;
                (t.trailColor || t.trailWidth) && (n = this._createTrail(t), e.appendChild(n));
                var i = this._createPath(t);
                return e.appendChild(i), {
                    svg: e,
                    path: i,
                    trail: n
                }
            }, s.prototype._initializeSvg = function(t, e) {
                t.setAttribute("viewBox", "0 0 100 100")
            }, s.prototype._createPath = function(t) {
                var e = this._pathString(t);
                return this._createPathElement(e, t)
            }, s.prototype._createTrail = function(t) {
                var e = this._trailString(t),
                    n = r.extend({}, t);
                return n.trailColor || (n.trailColor = "#eee"), n.trailWidth || (n.trailWidth = n.strokeWidth), n.color = n.trailColor, n.strokeWidth = n.trailWidth, n.fill = null, this._createPathElement(e, n)
            }, s.prototype._createPathElement = function(t, e) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return n.setAttribute("d", t), n.setAttribute("stroke", e.color), n.setAttribute("stroke-width", e.strokeWidth), e.fill ? n.setAttribute("fill", e.fill) : n.setAttribute("fill-opacity", "0"), n
            }, s.prototype._createTextContainer = function(t, e) {
                var n = document.createElement("div");
                n.className = t.text.className;
                var i = t.text.style;
                return i && (t.text.autoStyleContainer && (e.style.position = "relative"), r.setStyles(n, i), i.color || (n.style.color = t.color)), this._initializeTextContainer(t, e, n), n
            }, s.prototype._initializeTextContainer = function(t, e, n) {}, s.prototype._pathString = function(t) {
                throw new Error("Override this function for each progress bar")
            }, s.prototype._trailString = function(t) {
                throw new Error("Override this function for each progress bar")
            }, s.prototype._warnContainerAspectRatio = function(t) {
                if (this.containerAspectRatio) {
                    var e = window.getComputedStyle(t, null),
                        n = parseFloat(e.getPropertyValue("width"), 10),
                        i = parseFloat(e.getPropertyValue("height"), 10);
                    r.floatEquals(this.containerAspectRatio, n / i) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", n / i), console.warn("Aspect ratio of should be", this.containerAspectRatio))
                }
            }, e.exports = s
        }, {
            "./path": 5,
            "./utils": 8
        }],
        8: [function(t, e, n) {
            var i = "Webkit Moz O ms".split(" "),
                r = .001;

            function o(t, e, n) {
                for (var r = t.style, o = 0; o < i.length; ++o) {
                    r[i[o] + s(e)] = n
                }
                r[e] = n
            }

            function s(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function a(t) {
                return e = t, "[object Array]" !== Object.prototype.toString.call(e) && ("object" === typeof t && !!t);
                var e
            }

            function u(t, e) {
                for (var n in t) {
                    if (t.hasOwnProperty(n)) e(t[n], n)
                }
            }
            e.exports = {
                extend: function t(e, n, i) {
                    e = e || {}, n = n || {}, i = i || !1;
                    for (var r in n)
                        if (n.hasOwnProperty(r)) {
                            var o = e[r],
                                s = n[r];
                            i && a(o) && a(s) ? e[r] = t(o, s, i) : e[r] = s
                        }
                    return e
                },
                render: function(t, e) {
                    var n = t;
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var r = e[i],
                                o = new RegExp("\\{" + i + "\\}", "g");
                            n = n.replace(o, r)
                        }
                    return n
                },
                setStyle: o,
                setStyles: function(t, e) {
                    u(e, function(e, n) {
                        null !== e && void 0 !== e && (a(e) && !0 === e.prefix ? o(t, n, e.value) : t.style[n] = e)
                    })
                },
                capitalize: s,
                isString: function(t) {
                    return "string" == typeof t || t instanceof String
                },
                isFunction: function(t) {
                    return "function" == typeof t
                },
                isObject: a,
                forEachObject: u,
                floatEquals: function(t, e) {
                    return Math.abs(t - e) < r
                },
                removeChildren: function(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }
            }
        }, {}]
    }, {}, [4])(4)
});