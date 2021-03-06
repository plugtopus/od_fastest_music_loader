var saveAs = saveAs || function(e) {
    "use strict";
    if (!(void 0 === e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = function() {
                return e.URL || e.webkitURL || e
            },
            n = e.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            o = "download" in n,
            r = /constructor/i.test(e.HTMLElement) || e.safari,
            a = /CriOS\/[\d]+/.test(navigator.userAgent),
            i = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            d = function(e) {
                setTimeout(function() {
                    "string" == typeof e ? t().revokeObjectURL(e) : e.remove()
                }, 4e4)
            },
            s = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
                    type: e.type
                }) : e
            },
            f = function(f, u, c) {
                c || (f = s(f));
                var l, p = this,
                    v = "application/octet-stream" === f.type,
                    w = function() {
                        ! function(e, t, n) {
                            for (var o = (t = [].concat(t)).length; o--;) {
                                var r = e["on" + t[o]];
                                if ("function" == typeof r) try {
                                    r.call(e, n || e)
                                } catch (e) {
                                    i(e)
                                }
                            }
                        }(p, "writestart progress write writeend".split(" "))
                    };
                if (p.readyState = p.INIT, o) return l = t().createObjectURL(f), void setTimeout(function() {
                    var e, t;
                    n.href = l, n.download = u, e = n, t = new MouseEvent("click"), e.dispatchEvent(t), w(), d(l), p.readyState = p.DONE
                });
                ! function() {
                    if ((a || v && r) && e.FileReader) {
                        var n = new FileReader;
                        return n.onloadend = function() {
                            var t = a ? n.result : n.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                            e.open(t, "_blank") || (e.location.href = t), t = void 0, p.readyState = p.DONE, w()
                        }, n.readAsDataURL(f), void(p.readyState = p.INIT)
                    }
                    l || (l = t().createObjectURL(f)), v ? e.location.href = l : e.open(l, "_blank") || (e.location.href = l);
                    p.readyState = p.DONE, w(), d(l)
                }()
            },
            u = f.prototype;
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return t = t || e.name || "download", n || (e = s(e)), navigator.msSaveOrOpenBlob(e, t)
        } : (u.abort = function() {}, u.readyState = u.INIT = 0, u.WRITING = 1, u.DONE = 2, u.error = u.onwritestart = u.onprogress = u.onwrite = u.onabort = u.onerror = u.onwriteend = null, function(e, t, n) {
            return new f(e, t || e.name || "download", n)
        })
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
    return saveAs
});