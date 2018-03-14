! function(t, e) {
    "function" == typeof define && define.amd ? define(["~lib/settings", "~lib/framework", "~lib/utils"], e) : "undefined" != typeof exports ? e(require("~lib/settings"), require("~lib/framework"), require("~lib/utils")) : (e(t.settings, t.framework, t.utils), t.ok = {})
}(this, function(t, e, r) {
    "use strict";
    o(t);
    var n = o(e);

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e
            }
        }(),
        i = function t(e, r, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, r);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, r, n)
            }
            if ("value" in o) return o.value;
            var i = o.get;
            return void 0 !== i ? i.call(n) : void 0
        },
        l = SparkMD5.hash,
        s = (0, r.getLoc)(),
        u = s.host,
        c = s.protocol,
        p = null,
        f = {
            getMediaFromEl: function(t, e) {
                t = (0, r.domClosest)("mus-tr_i", t) || (0, r.domClosest)("track", t) || (0, r.domClosest)("m_portal_track", t);
                try {
                    var n = JSON.parse((0, r.attr)(t, "data-query"));
                    if (!n && ((0, r.each)([function() {
                            var e = (0, r.domQuery)("[data-id]", t)[0];
                            return e && (0, r.attr)(e, "data-id")
                        }, function() {
                            var e = (0, r.geByClass1)("track_play", t),
                                n = e && (0, r.attr)(e, "id"),
                                o = n && n.match(/\d+_(\d+)/);
                            return o && o[1]
                        }, function() {
                            var e = (0, r.attr)(t, "id"),
                                n = e && e.match(/\d+_(\d+)/);
                            return n && n[1]
                        }], function(t, e) {
                            var r = e();
                            if (r) return n = {
                                trackId: r
                            }, !1
                        }), !n)) return null;
                    if (n.fullId = "" + n.trackId, e) return n;
                    n.url = "";
                    var o = (0, r.gpeByClass)("mus_album", t),
                        a = (0, r.geByClass1)("mus-tr_artist", t) || (0, r.geByClass1)("track_artist", t) || (0, r.geByClass1)("m_portal_c_artist", t) || o && (0, r.geByClass1)("mus_h2_tx", o);
                    a && (a = a.innerText);
                    var i = (0, r.geByClass1)("mus-tr_song", t) || (0, r.geByClass1)("track_song", t) || (0, r.geByClass1)("m_portal_track_name", t);
                    return i && (i = i.innerText), n.performer = a || "N/A", n.title = i || "N/A", n
                } catch (t) {
                    return null
                }
            },
            client: "flash",
            clientHashHelper: [4, 3, 5, 6, 1, 2, 8, 7, 2, 9, 3, 5, 7, 1, 4, 8, 8, 3, 4, 3, 1, 7, 3, 5, 9, 8, 1, 4, 3, 7, 2, 8],
            linkNornmalizer: function(t) {
                var e = /md5=(\w*)/g.exec(t)[1],
                    r = l(e + "secret"),
                    n = r.length,
                    o = 0,
                    a = void 0,
                    i = void 0,
                    s = void 0,
                    u = "";
                for (a = 0; a < n; a += 1) o += parseInt(r[a], 16);
                for (a = 0; a < n; a += 1) i = parseInt(r[a], 16), s = a === n - 1 ? i : parseInt(r[a + 1], 16), u += Math.abs(o - i * s * this.clientHashHelper[a]);
                return t + "&client=" + this.client + "&clientHash=" + u
            },
            responseParser: function(t) {
                try {
                    var e = JSON.parse(t);
                    if (e.play && e.track) {
                        var r = this.linkNornmalizer(e.play),
                            n = e.image && e.image.replace(/type=\d+/, "type=1").replace(/plc=\w+/, "plc=WEB"),
                            o = e.track,
                            a = o.ensemble,
                            i = o.name;
                        return {
                            fullId: o.id,
                            title: i,
                            performer: a,
                            url: r,
                            coverUrl: n
                        }
                    }
                    return null
                } catch (t) {}
            }
        },
        d = new(function(e) {
            function o(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var e = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t));
                return e.name = "mok_audio", e.__sid = null, Object.assign(e.progressBar, {
                    color: "#ed812b",
                    trailColor: "rgba(255,255,255,.1)"
                }), e
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(o, n.default), a(o, [{
                key: "getObjectFromRow",
                value: function() {
                    return f.getMediaFromEl.apply(f, arguments)
                }
            }, {
                key: "placeBtn",
                value: function(e, a, l) {
                    var s = (0, t.sett)("button_position");
                    (0, r.addClass)(e, n.default.ROW_CLASS + "_pos_" + s);
                    var u = (0, r.geByClass1)("mus-tr_play", e) || (0, r.geByClass1)("track_play", e) || (0, r.geByClass1)("m_portal_c_play", e);
                    (0, r.domInsertAfter)(l, u), i(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "placeBtn", this).call(this, e, a, l)
                }
            }, {
                key: "preload",
                value: function(t) {
                    i(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "preload", this).call(this, t),
                        function(t) {
                            var e = this,
                                n = t.fullId;
                            (p ? Promise.resolve(p) : new Promise(function(t, e) {
                                var n = new XMLHttpRequest;
                                (0, r.extend)(n, {
                                    onload: function() {
                                        if (200 === n.status) try {
                                            var r = JSON.parse(n.response);
                                            t(p = r.sid)
                                        } catch (t) {
                                            e(t)
                                        } else e(null)
                                    }
                                }), n.open("POST", c + "//ok.ru/web-api/music/conf", !0), n.send(null)
                            })).then(function(t) {
                                var o = function() {
                                        e.remove(n), e.mark("UNAVAILABLE", n)
                                    },
                                    a = new XMLHttpRequest;
                                (0, r.extend)(a, {
                                    onload: function() {
                                        if (200 === a.status) {
                                            var t = f.responseParser(a.response);
                                            t ? e.update(t) : o()
                                        }
                                    },
                                    onerror: function() {
                                        return o()
                                    }
                                }), a.open("GET", "https://wmf." + u + "/play;jsessionid=" + t + "?tid=" + n + "&client=" + f.client + "&ctx=pop", !0), a.setRequestHeader("Accept", "*/*"), a.send(null)
                            }).catch(function(t) {})
                        }.call(this, t)
                }
            }, {
                key: "claimed",
                value: function(t) {
                    return (0, r.hasClass)(t, "__disabled")
                }
            }]), o
        }())({
            rowsSelector: ".mus-tr_i,.track,.m_portal_track"
        });
    setTimeout(function() {
        return d.initCtx(!0)
    }, 4)
});