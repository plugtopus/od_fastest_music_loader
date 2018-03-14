! function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this.domready = t()
}(0, function() {
    var e, t = [],
        o = "object" == typeof document && document,
        n = o && o.documentElement.doScroll,
        d = "DOMContentLoaded",
        f = o && (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
    return !f && o && o.addEventListener(d, e = function() {
        for (o.removeEventListener(d, e), f = 1; e = t.shift();) e()
    }),
        function(e) {
            f ? setTimeout(e, 0) : t.push(e)
        }
});