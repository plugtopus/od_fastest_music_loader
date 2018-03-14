! function(e, t) {
    "function" == typeof define && define.amd ? define(["~lib/ua", "~lib/utils"], t) : "undefined" != typeof exports ? t(require("~lib/ua"), require("~lib/utils")) : (t(e.ua, e.utils), e.background = {})
}(this, function(e, t) {
    "use strict";
    var n, a = chrome['runtime'].getManifest(),
        s = a.version,
        i = a.name,
        o = "UA-38362028-1",
        c = "anonymous",
        r = !1,
        u = (n = [], {
            add: function(e) {
                var t = this;
                e.onDisconnect.addListener(function(n) {
                    return t.remove(e)
                }), n.push(e)
            },
            remove: function(e) {
                ~n.indexOf(e) && n.splice(n.indexOf(e), 1)
            },
            post: function(e) {
                return (0, t.each)(n, function() {
                    this.postMessage(e)
                })
            },
            postTo: function(e, a) {
                (0, t.each)(n, function(t, n) {
                    if (n.name === e) return n.postMessage(a), !1
                })
            }
        });

    function d(e, t) {
        f({
            v: 1,
            tid: o,
            cid: c,
            t: "pageview",
            dp: e,
            dt: t
        })
    }

    function l(e, t, n, a) {
        if (r) {
            var s = {
                v: 1,
                tid: o,
                cid: c,
                t: "event",
                ec: e,
                ea: t,
                el: n,
                ev: a
            };
            void 0 === a && delete s.ev, "string" == typeof e ? f.call(this, s) : g(this, t)
        }
    }

    function f(e) {
        var n, a, s, i, o, c, u, d, l;
        r && (a = (n = {
            method: "POST",
            url: "https://www.google-analytics.com/collect",
            data: e
        }).method, s = void 0 === a ? "GET" : a, i = n.url, o = n.data, c = void 0 === o ? null : o, u = n.headers, d = n.success, (l = new XMLHttpRequest).onload = function() {
            200 === this.status && d && d(this.response)
        }, l.open(s, i, !0), u && (0, t.each)(u, function(e, t) {
            return l.setRequestHeader(e, t)
        }), l.send(null === c ? null : (0, t.prepareParams)(c)))
    }

    function g(e, t, n) {
        e.postMessage(Object.assign({}, t, {
            data: n
        }))
    }

    function p() {
        d("background?app=" + (0, e.getBrowser)(), i + " v" + s)
    }
    chrome['runtime']['onConnect'].addListener(function(e) {
        u.add(e), e.onMessage.addListener(function() {
            var n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = a.act,
                i = a.data;
            switch (s) {
                case "get_settings":
                    (0, t.storageGet)("settings").then(function(t) {
                        var n = t ? t.settings : {};
                        g(e, a, n)
                    });
                    break;
                case "set_analytics":
                    r = i, (0, t.storageSet)({
                        analytics: i
                    }), p();
                    break;
                case "get_analytics":
                    (0, t.storageGet)("analytics").then(function(t) {
                        g(e, a, t && t.analytics)
                    });
                    break;
                case "set_settings":
                    (0, t.storageSet)({
                        settings: i
                    }), n = a, u.post(n);
                    break;
                case "track_page":
                    d.apply(void 0, i);
                    break;
                case "track_event":
                    l.apply(void 0, i);
                    break;
                case "stats":
                    l.call(e, i, {
                        act: s
                    });
                    break;
                case "proxy":
                    var o = a.dest;
                    u.postTo(o, i);
                    break;
                default:
                    g(e, {
                        act: "error"
                    }, null)
            }
        })
    });

    (0, t.storageGet)(["cid", "analytics"]).then(function(e) {
        e && (r = !r, e.cid ? c = e.cid : (c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
            return crypto.getRandomValues(new Uint8Array(e)).reduce(function(e, t) {
                return e + t.toString(16)
            }, "")
        }(), (0, t.storageSet)({
            cid: c
        }))), p()
    })
});