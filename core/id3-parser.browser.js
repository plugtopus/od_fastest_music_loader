! function e(r, n, t) {
    function o(a, l) {
        if (!n[a]) {
            if (!r[a]) {
                var u = "function" == typeof require && require;
                if (!l && u) return u(a, !0);
                if (i) return i(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var s = n[a] = {
                exports: {}
            };
            r[a][0].call(s.exports, function(e) {
                var n = r[a][1][e];
                return o(n || e)
            }, s, s.exports, e, r, n, t)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < t.length; a++) o(t[a]);
    return o
}({
    1: [function(e, r, n) {
        "use strict";
        r.exports = {
            TALB: "album",
            TBPM: "bpm",
            TCOM: "composer",
            TCON: "genre",
            TCOP: "copyright",
            TDEN: "encoding-time",
            TDLY: "playlist-delay",
            TDOR: "original-release-time",
            TDRC: "recording-time",
            TDRL: "release-time",
            TDTG: "tagging-time",
            TENC: "encoder",
            TEXT: "writer",
            TFLT: "file-type",
            TIPL: "involved-people",
            TIT1: "content-group",
            TIT2: "title",
            TIT3: "subtitle",
            TKEY: "initial-key",
            TLAN: "language",
            TLEN: "length",
            TMCL: "credits",
            TMED: "media-type",
            TMOO: "mood",
            TOAL: "original-album",
            TOFN: "original-filename",
            TOLY: "original-writer",
            TOPE: "original-artist",
            TOWN: "owner",
            TPE1: "artist",
            TPE2: "band",
            TPE3: "conductor",
            TPE4: "remixer",
            TPOS: "set-part",
            TPRO: "produced-notice",
            TPUB: "publisher",
            TRCK: "track",
            TRSN: "radio-name",
            TRSO: "radio-owner",
            TSOA: "album-sort",
            TSOP: "performer-sort",
            TSOT: "title-sort",
            TSRC: "isrc",
            TSSE: "encoder-settings",
            TSST: "set-subtitle",
            TXXX: "user-defined-text-information",
            TYER: "year",
            WCOM: "url-commercial",
            WCOP: "url-legal",
            WOAF: "url-file",
            WOAR: "url-artist",
            WOAS: "url-source",
            WORS: "url-radio",
            WPAY: "url-payment",
            WPUB: "url-publisher",
            WAF: "url-file",
            WAR: "url-artist",
            WAS: "url-source",
            WCM: "url-commercial",
            WCP: "url-copyright",
            WPB: "url-publisher",
            COMM: "comments",
            USLT: "lyrics",
            APIC: "image",
            PIC: "image"
        }
    }, {}],
    2: [function(e, r, n) {
        "use strict";
        r.exports = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta Rap", "Top 40", "Christian Rap", "Pop / Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast  Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "A Cappella", "Euro-House", "Dance Hall", "Goa", "Drum & Bass", "Club-House", "Hardcore", "Terror", "Indie", "BritPop", "Negerpunk", "Polsk Punk", "Beat", "Christian Gangsta Rap", "Heavy Metal", "Black Metal", "Crossover", "Contemporary Christian", "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "JPop", "Synthpop", "Rock/Pop"]
    }, {}],
    3: [function(e, r, n) {
        "use strict";
        r.exports = ["other", "file-icon", "icon", "cover-front", "cover-back", "leaflet", "media", "artist-lead", "artist", "conductor", "band", "composer", "writer", "location", "during-recording", "during-performance", "screen", "fish", "illustration", "logo-band", "logo-publisher"]
    }, {}],
    4: [function(e, r, n) {
        (function(n, t) {
            "use strict";
            var o, i = e("./genres.core"),
                a = e("./frameTypes.core"),
                l = e("./imageTypes.core"),
                u = e("./stringUtils.core"),
                c = u.readUTF16String,
                s = u.readUTF8String,
                f = u.readISO8859String,
                p = 128,
                d = 20,
                m = function() {};

            function g(e) {
                var r, n = Promise.defer();
                return e instanceof File ? ((r = new FileReader).onload = function(r) {
                    e = new Uint8Array(r.target.result), n.resolve(e)
                }, r.readAsArrayBuffer(e)) : e instanceof Uint8Array || e instanceof t ? n.resolve(e) : n.reject(new TypeError("argument should be instance of Buffer|Uint8Array|File")), n.promise.then(function(e) {
                    var r, n = function(e) {
                            if (!e || e.length < p) return !1;
                            e = e.slice(e.length - p);
                            var r = {
                                    version: {
                                        major: 1,
                                        minor: 0
                                    }
                                },
                                n = /(^[\s\u0000]+|[\s\u0000]+$)/;
                            if ("TAG" !== s(e, 3)) return !1;
                            r.title = s(e.slice(3), 30).replace(n, ""), r.artist = s(e.slice(33), 30).replace(n, ""), r.album = s(e.slice(63), 30).replace(n, ""), r.year = s(e.slice(93), 4).replace(n, ""), 0 === e[125] ? (r.comment = s(e.slice(97), 28).replace(n, ""), r.version.minor = 1, r.track = e[126]) : r.comment = s(e.slice(97), 30).replace(n, "");
                            return r.genre = i[e[127]] || "", r
                        }(e),
                        t = function(e) {
                            if (!e || e.length < d) return !1;
                            var r, n, t, o = function(e, r) {
                                if (!e || e.length < 10) return !1;
                                var n, t, o;
                                if (r = r || {}, "ID3" !== s(e, 3)) return !1;
                                return n = r.version || (r.version = {
                                    major: 2
                                }), t = r.version.flags || (r.version.flags = {}), n.minor = e[3], n.revision = e[4], o = e[5], t.unsync = !0 & o, t.xheader = !0 & o, t.experimental = !0 & o, r
                            }(e.slice(0, 14));
                            if (!o) return !1;
                            if (r = o.version.flags, n = 10, r.unsync) throw new Error("not support unsynchronisation");
                            r.xheader && (n += v(e.slice(10, 14)));
                            return t = v(e.slice(6, 10)),
                                function(e, r) {
                                    for (var n = 0, t = r.version; n < e.length;) {
                                        var o, i, a = T(e.slice(n + 4));
                                        if (0 === a) break;
                                        if (!(i = e.slice(n, n + 10 + a)).length) break;
                                        (o = h(i, t.minor, a)) && (r[o.tag] = o.value), n += i.length
                                    }
                                }(e.slice(n, t + n), o), o
                        }(e);
                    if (t) {
                        for (r in n) r in t && "" !== t[r] || (t[r] = n[r]);
                        return t.version = {
                            v1: n && n.version,
                            v2: t.version
                        }, t
                    }
                    return n ? (n.version = {
                        v1: n.version,
                        v2: !1
                    }, n) : {
                        version: !1
                    }
                })
            }

            function h(e, r, n) {
                var t, o, u, p, d = {
                        tag: null,
                        value: null
                    },
                    m = y(e, 4, 0),
                    g = y(e, 1, 0);
                n || T(e.slice(4));
                if (0 !== [e[8], e[9]][1]) return !1;
                if (!(m in a)) return !1;
                if (d.tag = a[m], "T" === g) {
                    if (0 === (o = e[10])) d.value = f(e.slice(11));
                    else if (3 === o) d.value = s(e.slice(11));
                    else {
                        if (1 !== o && 2 !== o) return !1;
                        d.value = c(e.slice(11))
                    }
                    "TCON" === m && parseInt(d.value) && (d.value = i[parseInt(d.value)])
                } else if ("W" === g) d.value = s(e.slice(10));
                else if ("COMM" === m || "USLT" === m) {
                    for (o = e[10], p = 0, t = u = 14;; t++)
                        if (1 === o || 2 === o) {
                            if (0 === e[t] && 0 === e[t + 1]) {
                                u = t + 2;
                                break
                            }
                            t++
                        } else if (0 === e[t]) {
                            u = t + 1;
                            break
                        }
                    if (0 === o || 3 === o) d.value = s(e.slice(u));
                    else {
                        if (1 !== o && 2 !== o) return !1;
                        d.value = c(e.slice(u))
                    }
                } else if ("APIC" === m) {
                    o = e[10];
                    var h = {
                        type: null,
                        mime: null,
                        imageType: null,
                        description: null,
                        data: null
                    };
                    for (p = 0, t = u = 11;; t++)
                        if (0 === e[t]) {
                            p = t - u;
                            break
                        }
                    for (h.mime = s(e.slice(u), p), h.type = l[e[u + p + 1]] || "other", u += p + 2, p = 0, t = u;; t++)
                        if (0 === e[t]) {
                            p = t - u;
                            break
                        }
                    for (h.description = 0 === p ? null : c(e.slice(u), p), t = u += p + 1; 0 === e[t]; t++) u++;
                    h.data = e.slice(u), d.value = h
                }
                return !!d.tag && d
            }

            function v(e) {
                return 2097152 * (127 & e[0]) + 16384 * (127 & e[1]) + 128 * (127 & e[2]) + (127 & e[3])
            }

            function T(e) {
                return e.length < 4 ? 0 : 16777216 * e[0] + 65536 * e[1] + 256 * e[2] + e[3]
            }

            function y(e, r, n, o) {
                n = n || 0, r < 0 && (r += e.length);
                var i = "";
                if (t !== m) return (e = e.slice(n, n + r)) instanceof t ? e.toString() : new t(e).toString();
                for (var a = n; a < n + r; a++) i += String.fromCharCode(e[a]);
                return o ? i : decodeURIComponent(encodeURIComponent(i))
            }
            "object" == typeof window && window.window === window ? ((o = window).Buffer = m, o.ID3 = {
                parse: g
            }) : "object" == typeof n && n.global === n ? ((o = n).File = m, o.FileReader = m) : o = this, o.Promise ? o.Promise.defer || (Promise.defer = function() {
                var e = {};
                return e.promise = new Promise(function(r, n) {
                    e.resolve = r, e.reject = n
                }), e
            }) : o.Promise = e("promise-a-plus"), "slice" in Uint8Array.prototype || (Uint8Array.prototype.slice = Uint8Array.prototype.subarray), r.exports = {
                parse: g
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
    }, {
        "./frameTypes.core": 1,
        "./genres.core": 2,
        "./imageTypes.core": 3,
        "./stringUtils.core": 5,
        buffer: 6,
        "promise-a-plus": 7
    }],
    5: [function(e, r, n) {
        "use strict";
        var t = {
            readUTF16String: function(e, r, n) {
                var t = 0,
                    o = 1,
                    i = 0;
                n = Math.min(n || e.length, e.length), 254 === e[0] && 255 === e[1] ? (r = !0, t = 2) : 255 === e[0] && 254 === e[1] && (r = !1, t = 2), r && (o = 0, i = 1);
                var a, l, u, c, s, f = [];
                for (s = 0; t < n && (a = e[t + o], l = e[t + i], t += 2, 0 !== (u = (a << 8) + l)); s++) a < 216 || a >= 224 ? f[s] = String.fromCharCode(u) : (c = (e[t + o] << 8) + e[t + i], t += 2, f[s] = String.fromCharCode(u, c));
                return f.join("")
            },
            readUTF8String: function(e, r) {
                var n = 0;
                r = Math.min(r || e.length, e.length), 239 === e[0] && 187 === e[1] && 191 === e[2] && (n = 3);
                for (var t = [], o = 0; n < r; o++) {
                    var i, a, l, u = e[n++];
                    if (0 === u) break;
                    u < 128 ? t[o] = String.fromCharCode(u) : u >= 194 && u < 224 ? (i = e[n++], t[o] = String.fromCharCode(((31 & u) << 6) + (63 & i))) : u >= 224 && u < 240 ? (i = e[n++], a = e[n++], t[o] = String.fromCharCode(((15 & u) << 12) + ((63 & i) << 6) + (63 & a))) : u >= 240 && u < 245 && (l = ((7 & u) << 18) + ((63 & (i = e[n++])) << 12) + ((63 & (a = e[n++])) << 6) + (63 & e[n++]) - 65536, t[o] = String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l)))
                }
                return t.join("")
            },
            readNullTerminatedString: function(e, r) {
                var n, t, o = [];
                for (r = r || e.length, n = 0; n < r && 0 !== (t = e[n++]);) o[n - 1] = String.fromCharCode(t);
                return o.join("")
            },
            readISO8859String: function(e, r) {
                var n, t, o = [];
                for (r = r || e.length, n = 0; n < r;) t = e[n++], o[n - 1] = String.fromCharCode(t);
                return o.join("")
            }
        };
        r.exports = t
    }, {}],
    6: [function(e, r, n) {}, {}],
    7: [function(e, r, n) {
        "use strict";
        var t = 0,
            o = 1,
            i = 2;

        function a(e) {
            var r = t,
                n = null,
                u = [];

            function c(e) {
                r = i, n = e, u.forEach(s), u = null
            }

            function s(e) {
                r === t ? u.push(e) : (r === o && "function" == typeof e.onFulfilled && e.onFulfilled(n), r === i && "function" == typeof e.onRejected && e.onRejected(n))
            }
            this.done = function(e, r) {
                setTimeout(function() {
                    s({
                        onFulfilled: e,
                        onRejected: r
                    })
                }, 0)
            };
            var f = function(e, r) {
                var n, t = this,
                    o = new a(function(i, a) {
                        return t.done(function(r) {
                            if ("function" != typeof e) return i(r);
                            try {
                                return (n = e(r)) === o ? a(new TypeError("The `promise` and `x` refer to the same object.")) : i(n)
                            } catch (e) {
                                return a(e)
                            }
                        }, function(e) {
                            if ("function" != typeof r) return a(e);
                            try {
                                return (n = r(e)) === o ? a(new TypeError("The `promise` and `x` refer to the same object.")) : i(n)
                            } catch (e) {
                                return a(e)
                            }
                        })
                    });
                return o
            };
            this.then = f, this.catch = function(e) {
                return f.call(this, void 0, e)
            }, l(e, function e(t) {
                try {
                    var i = (p = typeof(a = t), !a || "object" !== p && "function" !== p || "function" != typeof(f = a.then) ? null : f);
                    if (i) return void l(function() {
                        i.apply(t, arguments)
                    }, e, c);
                    r = o, n = t, u.forEach(s), u = null
                } catch (e) {
                    c(e)
                }
                var a, f, p
            }, c)
        }

        function l(e, r, n) {
            var t = !1;
            try {
                e(function(e) {
                    t || (t = !0, setTimeout(function() {
                        r(e)
                    }, 0))
                }, function(e) {
                    t || (t = !0, setTimeout(function() {
                        n(e)
                    }, 0))
                })
            } catch (e) {
                if (t) return;
                t = !0, setTimeout(function() {
                    n(e)
                }, 0)
            }
        }
        a.resolve = function(e) {
            return new a(function(r, n) {
                r(e)
            })
        }, a.reject = function(e) {
            return new a(function(r, n) {
                n(e)
            })
        }, a.all = function(e) {
            var r, n, t, o, i = 0;
            if (null == e || "number" != typeof e.length) throw new Error("ArgumentsError: argument should be iterable.");
            return 0 === (n = e.length) ? a.resolve([]) : new a(function(l, u) {
                for (r = new Array(n), o = 0; o < n; o++) ! function(o) {
                    (t = e[o]) instanceof a || (t = a.resolve(t)), t.catch(function(e) {
                        u(e)
                    }), t.then(function(e) {
                        r[o] = e, ++i === n && l(r)
                    })
                }(o)
            })
        }, a.race = function(e) {
            var r, n, t, o;
            if (null == e || "number" != typeof e.length) throw new Error("ArgumentsError: argument should be iterable.");
            for (r = a.deferred(), n = e.length, t = 0; t < n; t++) {
                if (!((o = e[t]) instanceof a)) {
                    r.resolve(o);
                    break
                }
                o.then(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                })
            }
            return r.promise
        }, a.deferred = function() {
            var e = {};
            return e.promise = new a(function(r, n) {
                e.resolve = r, e.reject = n
            }), e
        }, a.defer = a.deferred, r.exports = a
    }, {}]
}, {}, [4]);