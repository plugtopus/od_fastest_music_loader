! function(t) {
    if ("object" == typeof exports) module.exports = t();
    else if ("function" == typeof define && define.amd) define(t);
    else {
        var r;
        try {
            r = window
        } catch (t) {
            r = self
        }
        r.SparkMD5 = t()
    }
}(function(t) {
    "use strict";
    var r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function e(t, r) {
        var e = t[0],
            n = t[1],
            f = t[2],
            i = t[3];
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[0] - 680876936 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[1] - 389564586 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[2] + 606105819 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[3] - 1044525330 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[4] - 176418897 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[5] + 1200080426 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[6] - 1473231341 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[7] - 45705983 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[8] + 1770035416 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[9] - 1958414417 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[10] - 42063 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[11] - 1990404162 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[12] + 1804603682 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[13] - 40341101 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[14] - 1502002290 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[15] + 1236535329 | 0) << 22 | n >>> 10) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[1] - 165796510 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[6] - 1069501632 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[11] + 643717713 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[0] - 373897302 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[5] - 701558691 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[10] + 38016083 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[15] - 660478335 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[4] - 405537848 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[9] + 568446438 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[14] - 1019803690 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[3] - 187363961 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[8] + 1163531501 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[13] - 1444681467 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[2] - 51403784 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[7] + 1735328473 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[12] - 1926607734 | 0) << 20 | n >>> 12) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[5] - 378558 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[8] - 2022574463 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[11] + 1839030562 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[14] - 35309556 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[1] - 1530992060 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[4] + 1272893353 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[7] - 155497632 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[10] - 1094730640 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[13] + 681279174 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[0] - 358537222 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[3] - 722521979 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[6] + 76029189 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[9] - 640364487 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[12] - 421815835 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[15] + 530742520 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[2] - 995338651 | 0) << 23 | n >>> 9) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[0] - 198630844 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[7] + 1126891415 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[14] - 1416354905 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[5] - 57434055 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[12] + 1700485571 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[3] - 1894986606 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[10] - 1051523 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[1] - 2054922799 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[8] + 1873313359 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[15] - 30611744 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[6] - 1560198380 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[13] + 1309151649 | 0) << 21 | n >>> 11) + f | 0, n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[4] - 145523070 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[11] - 1120210379 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[2] + 718787259 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[9] - 343485551 | 0) << 21 | n >>> 11) + f | 0, t[0] = e + t[0] | 0, t[1] = n + t[1] | 0, t[2] = f + t[2] | 0, t[3] = i + t[3] | 0
    }

    function n(t) {
        var r, e = [];
        for (r = 0; r < 64; r += 4) e[r >> 2] = t.charCodeAt(r) + (t.charCodeAt(r + 1) << 8) + (t.charCodeAt(r + 2) << 16) + (t.charCodeAt(r + 3) << 24);
        return e
    }

    function f(t) {
        var r, e = [];
        for (r = 0; r < 64; r += 4) e[r >> 2] = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
        return e
    }

    function i(t) {
        var r, f, i, h, o, s, a = t.length,
            u = [1732584193, -271733879, -1732584194, 271733878];
        for (r = 64; r <= a; r += 64) e(u, n(t.substring(r - 64, r)));
        for (f = (t = t.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < f; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
        if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
            for (e(u, i), r = 0; r < 16; r += 1) i[r] = 0;
        return h = (h = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(h[2], 16), s = parseInt(h[1], 16) || 0, i[14] = o, i[15] = s, e(u, i), u
    }

    function h(t) {
        var e, n = "";
        for (e = 0; e < 4; e += 1) n += r[t >> 8 * e + 4 & 15] + r[t >> 8 * e & 15];
        return n
    }

    function o(t) {
        var r;
        for (r = 0; r < t.length; r += 1) t[r] = h(t[r]);
        return t.join("")
    }

    function s(t) {
        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
    }

    function a(t) {
        var r, e = [],
            n = t.length;
        for (r = 0; r < n - 1; r += 2) e.push(parseInt(t.substr(r, 2), 16));
        return String.fromCharCode.apply(String, e)
    }

    function u() {
        this.reset()
    }
    return "5d41402abc4b2a76b9719d911017c592" !== o(i("hello")) && function(t, r) {
        var e = (65535 & t) + (65535 & r);
        return (t >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
    }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
        function r(t, r) {
            return (t = 0 | t || 0) < 0 ? Math.max(t + r, 0) : Math.min(t, r)
        }
        ArrayBuffer.prototype.slice = function(e, n) {
            var f, i, h, o, s = this.byteLength,
                a = r(e, s),
                u = s;
            return n !== t && (u = r(n, s)), a > u ? new ArrayBuffer(0) : (f = u - a, i = new ArrayBuffer(f), h = new Uint8Array(i), o = new Uint8Array(this, a, f), h.set(o), i)
        }
    }(), u.prototype.append = function(t) {
        return this.appendBinary(s(t)), this
    }, u.prototype.appendBinary = function(t) {
        this._buff += t, this._length += t.length;
        var r, f = this._buff.length;
        for (r = 64; r <= f; r += 64) e(this._hash, n(this._buff.substring(r - 64, r)));
        return this._buff = this._buff.substring(r - 64), this
    }, u.prototype.end = function(t) {
        var r, e, n = this._buff,
            f = n.length,
            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (r = 0; r < f; r += 1) i[r >> 2] |= n.charCodeAt(r) << (r % 4 << 3);
        return this._finish(i, f), e = o(this._hash), t && (e = a(e)), this.reset(), e
    }, u.prototype.reset = function() {
        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
    }, u.prototype.getState = function() {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        }
    }, u.prototype.setState = function(t) {
        return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
    }, u.prototype.destroy = function() {
        delete this._hash, delete this._buff, delete this._length
    }, u.prototype._finish = function(t, r) {
        var n, f, i, h = r;
        if (t[h >> 2] |= 128 << (h % 4 << 3), h > 55)
            for (e(this._hash, t), h = 0; h < 16; h += 1) t[h] = 0;
        n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), f = parseInt(n[2], 16), i = parseInt(n[1], 16) || 0, t[14] = f, t[15] = i, e(this._hash, t)
    }, u.hash = function(t, r) {
        return u.hashBinary(s(t), r)
    }, u.hashBinary = function(t, r) {
        var e = o(i(t));
        return r ? a(e) : e
    }, u.ArrayBuffer = function() {
        this.reset()
    }, u.ArrayBuffer.prototype.append = function(t) {
        var r, n, i, h, o, s = (n = this._buff.buffer, i = t, h = !0, (o = new Uint8Array(n.byteLength + i.byteLength)).set(new Uint8Array(n)), o.set(new Uint8Array(i), n.byteLength), h ? o : o.buffer),
            a = s.length;
        for (this._length += t.byteLength, r = 64; r <= a; r += 64) e(this._hash, f(s.subarray(r - 64, r)));
        return this._buff = r - 64 < a ? new Uint8Array(s.buffer.slice(r - 64)) : new Uint8Array(0), this
    }, u.ArrayBuffer.prototype.end = function(t) {
        var r, e, n = this._buff,
            f = n.length,
            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (r = 0; r < f; r += 1) i[r >> 2] |= n[r] << (r % 4 << 3);
        return this._finish(i, f), e = o(this._hash), t && (e = a(e)), this.reset(), e
    }, u.ArrayBuffer.prototype.reset = function() {
        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
    }, u.ArrayBuffer.prototype.getState = function() {
        var t, r = u.prototype.getState.call(this);
        return r.buff = (t = r.buff, String.fromCharCode.apply(null, new Uint8Array(t))), r
    }, u.ArrayBuffer.prototype.setState = function(t) {
        return t.buff = function(t, r) {
            var e, n = t.length,
                f = new ArrayBuffer(n),
                i = new Uint8Array(f);
            for (e = 0; e < n; e += 1) i[e] = t.charCodeAt(e);
            return r ? i : f
        }(t.buff, !0), u.prototype.setState.call(this, t)
    }, u.ArrayBuffer.prototype.destroy = u.prototype.destroy, u.ArrayBuffer.prototype._finish = u.prototype._finish, u.ArrayBuffer.hash = function(t, r) {
        var n = o(function(t) {
            var r, n, i, h, o, s, a = t.length,
                u = [1732584193, -271733879, -1732584194, 271733878];
            for (r = 64; r <= a; r += 64) e(u, f(t.subarray(r - 64, r)));
            for (n = (t = r - 64 < a ? t.subarray(r - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < n; r += 1) i[r >> 2] |= t[r] << (r % 4 << 3);
            if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                for (e(u, i), r = 0; r < 16; r += 1) i[r] = 0;
            return h = (h = 8 * a).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(h[2], 16), s = parseInt(h[1], 16) || 0, i[14] = o, i[15] = s, e(u, i), u
        }(new Uint8Array(t)));
        return r ? a(n) : n
    }, u
});