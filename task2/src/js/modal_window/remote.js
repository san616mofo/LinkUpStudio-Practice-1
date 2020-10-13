(function(g) {
    var window = this;
    var cqa = function(a, b) {
            return g.Vb(a, b)
        },
        m5 = function() {},
        dqa = function(a) {
            if (a.xc && "function" == typeof a.xc) return a.xc();
            if (g.Fa(a)) return a.split("");
            if (g.Na(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.Rb(a)
        },
        eqa = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.Na(a) || g.Fa(a))(0, g.A)(a, b, void 0);
            else {
                if (a.Gd && "function" == typeof a.Gd) var c = a.Gd();
                else if (a.xc && "function" == typeof a.xc) c = void 0;
                else if (g.Na(a) || g.Fa(a)) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c = g.Sb(a);
                d = dqa(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        },
        n5 = function(a) {
            g.Ym(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, g.H)()).toString(36));
            return a
        },
        o5 = function(a, b, c) {
            g.Ma(c) || (c = [String(c)]);
            g.cn(a.l, b, c)
        },
        p5 = function(a) {
            return (a = g.wo(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        q5 = function(a, b) {
            return b + " [" + a.aa + " " + a.D + " " + a.getStatus() + "]"
        },
        fqa = function(a) {
            return "content-type" == a.toLowerCase()
        },
        r5 = function(a) {
            a.g && a.I && (a.g.ontimeout = null);
            a.F && (g.v.clearTimeout(a.F), a.F = null)
        },
        gqa = function(a) {
            return g.Md && g.od(9) && g.Ha(a.timeout) && g.Ea(a.ontimeout)
        },
        s5 = function(a) {
            a.O || (a.O = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        },
        t5 = function(a, b) {
            if (a.g) {
                r5(a);
                var c = a.g,
                    d = a.P[0] ? g.Ja : null;
                a.g = null;
                a.P = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        u5 = function(a, b) {
            a.i = !1;
            a.g && (a.o = !0, a.g.abort(), a.o = !1);
            a.l = b;
            a.u = 5;
            s5(a);
            t5(a)
        },
        v5 = function(a) {
            return a.g ? a.g.readyState : 0
        },
        w5 = function(a) {
            if (a.i && "undefined" != typeof g.rY)
                if (a.P[1] && 4 == v5(a) && 2 == a.getStatus()) q5(a, "Local request error detected and ignored");
                else if (a.C && 4 == v5(a)) g.Hg(a.dw, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == v5(a)) {
                q5(a, "Request complete");
                a.i = !1;
                try {
                    var b = a.getStatus();
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = g.Tg(1, String(a.D));
                            if (!f && g.v.self && g.v.self.location) {
                                var k = g.v.self.location.protocol;
                                f = k.substr(0, k.length - 1)
                            }
                            e = !hqa.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.u = 6;
                        try {
                            var l = 2 < v5(a) ? a.g.statusText : ""
                        } catch (m) {
                            l = ""
                        }
                        a.l = l + " [" + a.getStatus() + "]";
                        s5(a)
                    }
                } finally {
                    t5(a)
                }
            }
        },
        x5 = function(a) {
            g.Tf.call(this);
            this.headers = new g.Nm;
            this.M = a || null;
            this.i = !1;
            this.P = this.g = null;
            this.aa = this.D = "";
            this.u = 0;
            this.l = "";
            this.o = this.V = this.C = this.O = !1;
            this.A = 0;
            this.F = null;
            this.Z = "";
            this.I = this.R = !1
        },
        y5 = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        iqa = function(a, b) {
            var c = [];
            g.Nk(b, function(d) {
                try {
                    var e = g.Lo.prototype.i.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                g.Ea(e) ? g.Ko(e) && c.push(d) : c.push(d)
            }, a);
            return c
        },
        jqa = function(a, b) {
            var c = iqa(a, b);
            (0, g.A)(c, function(d) {
                g.Lo.prototype.remove.call(this, d)
            }, a)
        },
        z5 = function(a) {
            if (a.dd) {
                if (a.dd.locationOverrideToken) return {
                    locationOverrideToken: a.dd.locationOverrideToken
                };
                if (null != a.dd.latitudeE7 && null != a.dd.longitudeE7) return {
                    latitudeE7: a.dd.latitudeE7,
                    longitudeE7: a.dd.longitudeE7
                }
            }
            return null
        },
        kqa = function(a, b) {
            g.ab(a, b) || a.push(b)
        },
        A5 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        B5 = function(a, b) {
            var c = b instanceof g.yc ? b : g.Ec(b, /^data:image\//i.test(b));
            a.src = g.zc(c)
        },
        lqa = function(a) {
            try {
                return g.v.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        mqa = function(a, b, c, d) {
            var e = new g.Qm(null, void 0);
            a && g.Rm(e, a);
            b && g.Sm(e, b);
            c && g.Tm(e, c);
            d && (e.i = d);
            return e
        },
        C5 = function(a) {
            if (g.v.JSON) try {
                return g.v.JSON.parse(a)
            } catch (b) {}
            return lqa(a)
        },
        D5 = function() {
            this.g = [];
            this.i = []
        },
        E5 = function(a, b) {
            g.Qp[a] = !0;
            var c = g.Op();
            c && c.publish.apply(c, arguments);
            g.Qp[a] = !1
        },
        F5 = function(a) {
            this.app = this.name = this.id = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.l = !1;
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Nm;
            this.g = this.i = "";
            a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", nqa(this, a.capabilities || ""), oqa(this, a.experiments || ""), this.i = a.remoteControllerUrl || "", this.g = a.localChannelEncryptionKey ||
                "")
        },
        nqa = function(a, b) {
            a.capabilities.clear();
            (0, g.Yd)(b.split(","), g.Sa(cqa, pqa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        oqa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        G5 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || ""
        },
        H5 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        I5 = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid
            }
        },
        qqa = function(a) {
            return new G5(a)
        },
        J5 = function(a) {
            return g.Ma(a) ? (0, g.B)(a, qqa) : []
        },
        K5 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + "}" : "null"
        },
        L5 = function(a) {
            return g.Ma(a) ? "[" + (0, g.B)(a, K5).join(",") + "]" : "null"
        },
        M5 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
        },
        rqa = function(a) {
            return (0, g.B)(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        N5 = function(a, b) {
            return g.Ya(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        O5 = function(a, b) {
            return g.Ya(a, function(c) {
                return H5(c, b)
            })
        },
        P5 = function(a) {
            try {
                var b = (0, g.it)(),
                    c = (0, g.ht)();
                b && b.remove(a);
                c && c.remove(a)
            } catch (d) {}
        },
        sqa = function() {
            var a = (0, g.ht)();
            a && jqa(a, a.g.lf(!0))
        },
        Q5 = function() {
            var a = g.kt("yt-remote-connected-devices") || [];
            g.rb(a);
            return a
        },
        tqa = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return (0, g.B)(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        R5 = function(a) {
            g.jt("yt-remote-connected-devices", a, 86400)
        },
        T5 = function() {
            if (S5) return S5;
            var a = g.kt("yt-remote-device-id");
            a || (a = M5(), g.jt("yt-remote-device-id", a, 31536E3));
            for (var b = Q5(), c = 1, d = a; g.ab(b, d);) c++, d = a + "#" + c;
            return S5 = d
        },
        U5 = function() {
            var a = Q5(),
                b = T5();
            g.ab(a, b);
            g.lt() && g.tb(a, b);
            a = tqa(a);
            if (0 == a.length) try {
                g.ls("remote_sid")
            } catch (c) {} else try {
                g.ks("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        V5 = function() {
            return g.kt("yt-remote-session-browser-channel")
        },
        W5 = function() {
            return g.kt("yt-remote-local-screens") || []
        },
        X5 = function() {
            g.jt("yt-remote-lounge-token-expiration", !0, 86400)
        },
        uqa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = (0, g.B)(W5(), function(d) {
                    return d.loungeToken
                }),
                c = (0, g.B)(a, function(d) {
                    return d.loungeToken
                });
            (0, g.lj)(c, function(d) {
                return !g.ab(b, d)
            }) && X5();
            g.jt("yt-remote-local-screens", a, 31536E3)
        },
        vqa = function(a, b) {
            g.jt("yt-remote-session-browser-channel", a);
            g.jt("yt-remote-session-screen-id", b);
            var c = Q5(),
                d = T5();
            g.ab(c, d) || c.push(d);
            R5(c);
            U5()
        },
        Y5 = function(a) {
            a || (P5("yt-remote-session-screen-id"), P5("yt-remote-session-video-id"));
            U5();
            a = Q5();
            g.db(a, T5());
            R5(a)
        },
        $5 = function() {
            if (!Z5) {
                var a = g.Vo();
                a && (Z5 = new g.Fo(a))
            }
            return Z5 ? !!Z5.get("yt-remote-use-staging-server") : !1
        },
        a6 = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        b6 = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        d6 = function(a) {
            a.length ? c6(a.shift(), function() {
                d6(a)
            }) : e6()
        },
        wqa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        c6 = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            d.src = a;
            (document.head || document.documentElement).appendChild(d)
        },
        e6 = function() {
            var a = b6();
            a && a(!1, "No cast extension found")
        },
        f6 = function() {
            if (xqa) {
                var a = 2,
                    b = b6(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                c6("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", e6, c)
            }
        },
        yqa = function() {
            f6();
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            d6(["//www.gstatic.com/eureka/clank/" + (a ? parseInt(a[1], 10) : 0) + "/cast_sender.js", "//www.gstatic.com/eureka/clank/cast_sender.js"])
        },
        g6 = function(a, b, c) {
            g.D.call(this);
            this.A = null != c ? (0, g.x)(a, c) : a;
            this.Wc = b;
            this.u = (0, g.x)(this.iD, this);
            this.g = !1;
            this.i = 0;
            this.l = this.za = null;
            this.o = []
        },
        h6 = function() {},
        i6 = function(a, b, c, d) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.A = d || 1;
            this.o = 45E3;
            this.ba = new g.dn(this);
            this.i = new g.Gg;
            this.i.setInterval(250)
        },
        k6 = function(a, b, c) {
            a.Vh = 1;
            a.Wf = n5(b.clone());
            a.sh = c;
            a.u = !0;
            j6(a, null)
        },
        l6 = function(a, b, c, d, e) {
            a.Vh = 1;
            a.Wf = n5(b.clone());
            a.sh = null;
            a.u = c;
            e && (a.aA = !1);
            j6(a, d)
        },
        j6 = function(a, b) {
            a.Fi = (0, g.H)();
            m6(a);
            a.Dg = a.Wf.clone();
            o5(a.Dg, "t", a.A);
            a.dl = 0;
            a.qc = a.g.yp(a.g.Qk() ? b : null);
            0 < a.Zp && (a.Hn = new g.Dl((0, g.x)(a.iB, a, a.qc), a.Zp));
            a.ba.ca(a.qc, "readystatechange", a.WL);
            var c = a.Zg ? g.cc(a.Zg) : {};
            a.sh ? (a.mo = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.qc.send(a.Dg, a.mo, a.sh, c)) : (a.mo = "GET", a.aA && !g.Od && (c.Connection = "close"), a.qc.send(a.Dg, a.mo, null, c));
            a.g.se(1)
        },
        t6 = function(a, b, c) {
            for (var d = !0; !a.Og && a.dl < c.length;) {
                var e = zqa(a, c);
                if (e == n6) {
                    4 == b && (a.pg = 4, o6(15), d = !1);
                    break
                } else if (e == p6) {
                    a.pg = 4;
                    o6(16);
                    d = !1;
                    break
                } else q6(a, e)
            }
            4 == b && 0 == c.length && (a.pg = 1, o6(17), d = !1);
            a.we = a.we && d;
            d || (r6(a), s6(a))
        },
        zqa = function(a, b) {
            var c = a.dl,
                d = b.indexOf("\n", c);
            if (-1 == d) return n6;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return p6;
            d += 1;
            if (d + c > b.length) return n6;
            var e = b.substr(d, c);
            a.dl = d + c;
            return e
        },
        w6 = function(a, b) {
            a.Fi = (0, g.H)();
            m6(a);
            var c = b ? window.location.hostname : "";
            a.Dg = a.Wf.clone();
            g.Ym(a.Dg, "DOMAIN", c);
            g.Ym(a.Dg, "t", a.A);
            try {
                a.Be = new ActiveXObject("htmlfile")
            } catch (n) {
                r6(a);
                a.pg = 7;
                o6(22);
                s6(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                for (var e = "", f = 0; f < c.length; f++) {
                    var k = c.charAt(f);
                    if ("<" == k) e += "\\x3c";
                    else if (">" == k) e += "\\x3e";
                    else {
                        var l = k;
                        if (l in u6) k = u6[l];
                        else if (l in v6) k = u6[l] = v6[l];
                        else {
                            var m = l.charCodeAt(0);
                            if (31 < m && 127 > m) k = l;
                            else {
                                if (256 > m) {
                                    if (k = "\\x", 16 > m || 256 < m) k += "0"
                                } else k = "\\u", 4096 > m && (k += "0");
                                k += m.toString(16).toUpperCase()
                            }
                            k =
                                u6[l] = k
                        }
                        e += k
                    }
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.Sc(g.rc("b/12014412"), d + "</body></html>");
            a.Be.open();
            a.Be.write(g.Nc(c));
            a.Be.close();
            a.Be.parentWindow.m = (0, g.x)(a.pL, a);
            a.Be.parentWindow.d = (0, g.x)(a.fz, a, !0);
            a.Be.parentWindow.rpcClose = (0, g.x)(a.fz, a, !1);
            c = a.Be.createElement("DIV");
            a.Be.parentWindow.document.body.appendChild(c);
            d = g.Dc(a.Dg.toString());
            d = g.Zc(g.Ac(d));
            d = g.Sc(g.rc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.Tc(c, d);
            a.g.se(1)
        },
        m6 = function(a) {
            a.gt = (0, g.H)() + a.o;
            x6(a, a.o)
        },
        x6 = function(a, b) {
            if (null != a.Wi) throw Error("WatchDog timer not null");
            a.Wi = y6((0, g.x)(a.zL, a), b)
        },
        z6 = function(a) {
            a.Wi && (g.v.clearTimeout(a.Wi), a.Wi = null)
        },
        s6 = function(a) {
            a.g.bw() || a.Og || a.g.un(a)
        },
        r6 = function(a) {
            z6(a);
            g.rf(a.Hn);
            a.Hn = null;
            a.i.stop();
            g.fn(a.ba);
            if (a.qc) {
                var b = a.qc;
                a.qc = null;
                b.abort();
                b.dispose()
            }
            a.Be && (a.Be = null)
        },
        q6 = function(a, b) {
            try {
                a.g.Zy(a, b), a.g.se(4)
            } catch (c) {}
        },
        B6 = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                A6(a, b, function(k) {
                    k ? c(!0) : g.v.setTimeout(function() {
                        B6(a, b, c, d, f)
                    }, f)
                })
            }
        },
        A6 = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    C6(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    C6(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    C6(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    C6(d), c(!1)
                } catch (e) {}
            };
            g.v.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            B5(d, a)
        },
        C6 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        D6 = function(a) {
            this.g = a;
            this.i = new h6
        },
        F6 = function(a) {
            var b = E6(a.g, a.kj, "/mail/images/cleardot.gif");
            n5(b);
            B6(b.toString(), 5E3, (0, g.x)(a.qC, a), 3, 2E3);
            a.se(1)
        },
        H6 = function(a) {
            var b = a.g.F;
            if (null != b) o6(5), b ? (o6(11), G6(a.g, a, !1)) : (o6(12), G6(a.g, a, !0));
            else if (a.Bd = new i6(a, void 0, void 0, void 0), a.Bd.Zg = a.Xp, b = a.g, b = E6(b, b.Qk() ? a.Sj : null, a.Yp), o6(5), !g.Md || g.pd(10)) o5(b, "TYPE", "xmlhttp"), l6(a.Bd, b, !1, a.Sj, !1);
            else {
                o5(b, "TYPE", "html");
                var c = a.Bd;
                a = !!a.Sj;
                c.Vh = 3;
                c.Wf = n5(b.clone());
                w6(c, a)
            }
        },
        I6 = function(a, b, c) {
            this.g = 1;
            this.i = [];
            this.o = [];
            this.u = new h6;
            this.D = a || null;
            this.F = null != b ? b : null;
            this.A = c || !1
        },
        Aqa = function(a, b) {
            this.g = a;
            this.map = b;
            this.context = null
        },
        J6 = function(a) {
            g.tf.call(this, "statevent", a)
        },
        K6 = function(a, b) {
            g.tf.call(this, "timingevent", a);
            this.size = b
        },
        L6 = function(a) {
            g.tf.call(this, "serverreachability", a)
        },
        P6 = function(a) {
            M6(a);
            if (3 == a.g) {
                var b = a.yk++,
                    c = a.fm.clone();
                g.Ym(c, "SID", a.l);
                g.Ym(c, "RID", b);
                g.Ym(c, "TYPE", "terminate");
                N6(a, c);
                b = new i6(a, a.l, b, void 0);
                b.Vh = 2;
                b.Wf = n5(c.clone());
                B5(new Image, b.Wf.toString());
                b.Fi = (0, g.H)();
                m6(b)
            }
            O6(a)
        },
        R6 = function(a) {
            a.HC(1, 0);
            a.fm = E6(a, null, a.Wp);
            Q6(a)
        },
        M6 = function(a) {
            a.eg && (a.eg.abort(), a.eg = null);
            a.Sb && (a.Sb.cancel(), a.Sb = null);
            a.nf && (g.v.clearTimeout(a.nf), a.nf = null);
            S6(a);
            a.xd && (a.xd.cancel(), a.xd = null);
            a.lg && (g.v.clearTimeout(a.lg), a.lg = null)
        },
        T6 = function(a, b) {
            if (0 == a.g) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new Aqa(a.FH++, b));
            2 != a.g && 3 != a.g || Q6(a)
        },
        Q6 = function(a) {
            a.xd || a.lg || (a.lg = y6((0, g.x)(a.ez, a), 0), a.Ph = 0)
        },
        W6 = function(a, b) {
            if (1 == a.g) {
                if (!b) {
                    a.yk = Math.floor(1E5 * Math.random());
                    var c = a.yk++,
                        d = new i6(a, "", c, void 0);
                    d.Zg = null;
                    var e = U6(a),
                        f = a.fm.clone();
                    g.Ym(f, "RID", c);
                    g.Ym(f, "CVER", "1");
                    N6(a, f);
                    k6(d, f, e);
                    a.xd = d;
                    a.g = 2
                }
            } else 3 == a.g && (b ? V6(a, b) : 0 == a.i.length || a.xd || V6(a))
        },
        V6 = function(a, b) {
            if (b)
                if (6 < a.Pg) {
                    a.i = a.o.concat(a.i);
                    a.o.length = 0;
                    var c = a.yk - 1;
                    var d = U6(a)
                } else c = b.C, d = b.sh;
            else c = a.yk++, d = U6(a);
            var e = a.fm.clone();
            g.Ym(e, "SID", a.l);
            g.Ym(e, "RID", c);
            g.Ym(e, "AID", a.ii);
            N6(a, e);
            c = new i6(a, a.l, c, a.Ph + 1);
            c.Zg = null;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.xd = c;
            k6(c, e, d)
        },
        N6 = function(a, b) {
            if (a.Tc) {
                var c = a.Tc.Cv();
                c && g.Lb(c, function(d, e) {
                    g.Ym(b, e, d)
                })
            }
        },
        U6 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Pg && 0 < b) {
                var d = a.i[0].g;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = 0; e < b; e++) {
                var f = a.i[e].g,
                    k = a.i[e].map;
                f = 6 >= a.Pg ? e : f - d;
                try {
                    g.Lb(k, function(l, m) {
                        c.push("req" + f + "_" + m + "=" + encodeURIComponent(l))
                    })
                } catch (l) {
                    c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.o = a.o.concat(a.i.splice(0, b));
            return c.join("&")
        },
        X6 = function(a) {
            a.Sb || a.nf || (a.C = 1, a.nf = y6((0, g.x)(a.dz, a), 0), a.Ih = 0)
        },
        Z6 = function(a) {
            if (a.Sb || a.nf || 3 <= a.Ih) return !1;
            a.C++;
            a.nf = y6((0, g.x)(a.dz, a), Y6(a, a.Ih));
            a.Ih++;
            return !0
        },
        G6 = function(a, b, c) {
            a.ko = c;
            a.Je = b.yf;
            a.A || R6(a)
        },
        S6 = function(a) {
            null != a.Tg && (g.v.clearTimeout(a.Tg), a.Tg = null)
        },
        Y6 = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        a7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Tc && (c = null);
                var d = (0, g.x)(a.AM, a);
                c || (c = new g.Qm("//www.google.com/images/cleardot.gif"), n5(c));
                A6(c.toString(), 1E4, d)
            } else o6(2);
            $6(a, b)
        },
        $6 = function(a, b) {
            a.g = 0;
            a.Tc && a.Tc.Eu(b);
            O6(a);
            M6(a)
        },
        O6 = function(a) {
            a.g = 0;
            a.Je = -1;
            if (a.Tc)
                if (0 == a.o.length && 0 == a.i.length) a.Tc.kp();
                else {
                    g.ib(a.o);
                    var b = g.ib(a.i);
                    a.o.length = 0;
                    a.i.length = 0;
                    a.Tc.kp(b)
                }
        },
        E6 = function(a, b, c) {
            var d = g.Zm(c);
            if ("" != d.g) b && g.Sm(d, b + "." + d.g), g.Tm(d, d.u);
            else {
                var e = window.location;
                d = mqa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.zj && g.Lb(a.zj, function(f, k) {
                g.Ym(d, k, f)
            });
            g.Ym(d, "VER", a.Pg);
            N6(a, d);
            return d
        },
        y6 = function(a, b) {
            if (!g.Oa(a)) throw Error("Fn must not be null and must be a function");
            return g.v.setTimeout(function() {
                a()
            }, b)
        },
        o6 = function(a) {
            b7.dispatchEvent(new J6(b7, a))
        },
        c7 = function() {},
        Bqa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        d7 = function(a, b) {
            g.D.call(this);
            this.g = new g.M(this.hL, 0, this);
            g.G(this, this.g);
            this.Wc = 5E3;
            this.i = 0;
            if (g.Oa(a)) b && (a = (0, g.x)(a, b));
            else if (a && g.Oa(a.handleEvent)) a = (0, g.x)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.l = a
        },
        e7 = function(a, b, c) {
            this.H = a;
            this.A = b;
            this.l = new g.Eo;
            this.i = new d7(this.fM, this);
            this.g = null;
            this.fb = !1;
            this.u = null;
            this.F = "";
            this.D = this.o = 0;
            this.C = [];
            this.I = c || !1
        },
        Cqa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.g.ko,
                sessionId: a.g.l,
                arrayId: a.g.ii
            }
        },
        f7 = function(a, b) {
            a.D = b || 0;
            a.i.stop();
            a.g && (3 == a.g.g && W6(a.g), P6(a.g));
            a.D = 0
        },
        g7 = function(a) {
            return !!a.g && 3 == a.g.g
        },
        Dqa = function(a, b) {
            (a.A.loungeIdToken = b) || a.i.stop()
        },
        h7 = function(a) {
            this.port = this.domain = "";
            this.g = "/api/lounge";
            this.i = !0;
            a = a || document.location.href;
            var b = Number(g.Tg(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Ug(a) || "";
            a = g.Jb;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ib(a, "10.0") && (this.i = !1))
        },
        i7 = function(a, b) {
            var c = a.g;
            if (g.Ea(void 0) ? 0 : a.i) c = "https://" + a.domain + a.port + a.g;
            return g.dh(c + b, {})
        },
        j7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Sa(a.o, d, !0),
                onError: g.Sa(a.l, e),
                he: g.Sa(a.u, e)
            };
            c && (a.ub = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Iq(b, a)
        },
        Eqa = function() {
            var a = k7;
            l7();
            m7.push(a);
            n7(m7)
        },
        o7 = function(a, b) {
            l7();
            var c = m7,
                d = Fqa(a, String(b));
            0 == c.length ? Gqa(d) : (n7(c), (0, g.A)(c, function(e) {
                e(d)
            }))
        },
        l7 = function() {
            m7 || (m7 = g.w("yt.mdx.remote.debug.handlers_") || [], g.Ia("yt.mdx.remote.debug.handlers_", m7, void 0))
        },
        Gqa = function(a) {
            var b = (p7 + 1) % 50;
            p7 = b;
            q7[b] = a;
            r7 || (r7 = 49 == b)
        },
        n7 = function(a) {
            var b = q7;
            if (b[0]) {
                var c = p7,
                    d = r7 ? c : -1;
                do {
                    d = (d + 1) % 50;
                    var e = b[d];
                    (0, g.A)(a, function(f) {
                        f(e)
                    })
                } while (d != c);
                q7 = Array(50);
                p7 = -1;
                r7 = !1
            }
        },
        Fqa = function(a, b) {
            var c = ((0, g.H)() - Hqa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        s7 = function(a) {
            g.P.call(this);
            this.C = a;
            this.g = []
        },
        t7 = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) {
                var d = c.name;
                c.id = b.id || c.id;
                c.name = b.name;
                c.token = b.token;
                c.uuid = b.uuid || c.uuid;
                return c.name != d
            }
            a.g.push(b);
            return !0
        },
        Iqa = function(a, b) {
            var c = a.g.length != b.length;
            a.g = (0, g.Yd)(a.g, function(f) {
                return !!N5(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = t7(a, b[d]) || c;
            return c
        },
        Jqa = function(a, b) {
            var c = a.g.length;
            a.g = (0, g.Yd)(a.g, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.g.length < c
        },
        u7 = function(a, b, c, d) {
            g.P.call(this);
            this.A = a;
            this.u = b;
            this.l = c;
            this.o = d;
            this.i = 0;
            this.g = null;
            this.za = NaN
        },
        w7 = function(a) {
            s7.call(this, "LocalScreenService");
            this.l = a;
            this.i = NaN;
            v7(this);
            this.info("Initializing with " + L5(this.g))
        },
        x7 = function(a) {
            if (a.g.length) {
                var b = (0, g.B)(a.g, function(d) {
                        return d.id
                    }),
                    c = i7(a.l, "/pairing/get_lounge_token_batch");
                j7(a.l, c, {
                    screen_ids: b.join(",")
                }, (0, g.x)(a.sD, a), (0, g.x)(a.rD, a))
            }
        },
        v7 = function(a) {
            var b = J5(W5());
            b = (0, g.Yd)(b, function(c) {
                return !c.uuid
            });
            return Iqa(a, b)
        },
        y7 = function(a, b) {
            uqa((0, g.B)(a.g, I5));
            b && X5()
        },
        A7 = function(a, b) {
            g.P.call(this);
            this.A = b;
            var c = g.kt("yt-remote-online-screen-ids") || "";
            c = c ? c.split(",") : [];
            for (var d = {}, e = this.A(), f = 0, k = e.length; f < k; ++f) {
                var l = e[f].id;
                d[l] = g.ab(c, l)
            }
            this.g = d;
            this.u = a;
            this.l = this.o = NaN;
            this.i = null;
            z7("Initialized with " + g.Lg(this.g))
        },
        B7 = function(a, b, c) {
            var d = i7(a.u, "/pairing/get_screen_availability");
            j7(a.u, d, {
                lounge_token: b.token
            }, (0, g.x)(function(e) {
                e = e.screens || [];
                for (var f = 0, k = e.length; f < k; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.x)(function() {
                c(!1)
            }, a))
        },
        C7 = function(a, b) {
            a: if (A5(b) != A5(a.g)) var c = !1;
                else {
                    c = g.Sb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.g[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (z7("Updated online screens: " + g.Lg(a.g)), a.g = b, a.N("screenChange"));Kqa(a)
        },
        D7 = function(a) {
            isNaN(a.l) || g.Np(a.l);
            a.l = g.Lp((0, g.x)(a.hs, a), 0 < a.o && a.o < (0, g.H)() ? 2E4 : 1E4)
        },
        z7 = function(a) {
            o7("OnlineScreenService", a)
        },
        E7 = function(a) {
            var b = {};
            (0, g.A)(a.A(), function(c) {
                c.token ? b[c.token] = c.id : this.Hb("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Kqa = function(a) {
            a = g.Sb(g.Mb(a.g, function(b) {
                return b
            }));
            g.rb(a);
            a.length ? g.jt("yt-remote-online-screen-ids", a.join(","), 60) : P5("yt-remote-online-screen-ids")
        },
        F7 = function(a) {
            s7.call(this, "ScreenService");
            this.A = a;
            this.i = this.l = null;
            this.o = [];
            this.u = {};
            Lqa(this)
        },
        H7 = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.u[b]);
            var k = a.Hd();
            if (k = (c ? O5(k, c) : null) || O5(k, b)) {
                k.uuid = b;
                var l = G7(a, k);
                B7(a.i, l, function(m) {
                    e(m ? l : null)
                })
            } else c ? Mqa(a, c, (0, g.x)(function(m) {
                var n = G7(this, new G5({
                    name: d,
                    screenId: c,
                    loungeToken: m,
                    dialId: b || ""
                }));
                B7(this.i, n, function(p) {
                    e(p ? n : null)
                })
            }, a), f) : e(null)
        },
        I7 = function(a, b) {
            for (var c = 0, d = a.g.length; c < d; ++c)
                if (a.g[c].name == b) return a.g[c];
            return null
        },
        Mqa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                ub: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, k) {
                    var l = k && k.screens || [];
                    l[0] && l[0].screenId == b ? c(l[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Iq(i7(a.A, "/pairing/get_lounge_token_batch"), e)
        },
        J7 = function(a) {
            a.g = a.l.Hd();
            var b = a.u,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.g.length; b < d; ++b) {
                var e = a.g[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + L5(a.g))
        },
        Lqa = function(a) {
            K7(a);
            a.l = new w7(a.A);
            a.l.subscribe("screenChange", (0, g.x)(a.AD, a));
            J7(a);
            a.o = J5(g.kt("yt-remote-automatic-screen-cache") || []);
            K7(a);
            a.info("Initializing automatic screens: " + L5(a.o));
            a.i = new A7(a.A, (0, g.x)(a.Hd, a, !0));
            a.i.subscribe("screenChange", (0, g.x)(function() {
                this.N("onlineScreenChange")
            }, a))
        },
        G7 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = O5(a.o, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.o.push(b), g.jt("yt-remote-automatic-screen-cache", (0, g.B)(a.o, I5)));
            K7(a);
            a.u[b.uuid] = b.id;
            g.jt("yt-remote-device-id-map", a.u, 31536E3);
            return b
        },
        K7 = function(a) {
            a.u = g.kt("yt-remote-device-id-map") || {}
        },
        L7 = function(a, b, c) {
            g.P.call(this);
            this.P = c;
            this.F = a;
            this.i = b;
            this.l = null
        },
        M7 = function(a, b) {
            o7(a.P, b)
        },
        O7 = function(a, b) {
            L7.call(this, a, b, "CastSession");
            this.g = null;
            this.o = 0;
            this.A = (0, g.x)(this.fN, this);
            this.u = (0, g.x)(this.KL, this);
            this.o = g.Lp((0, g.x)(function() {
                N7(this, null)
            }, this), 12E4)
        },
        Nqa = function(a) {
            a.info("sendYoutubeMessage_: getMdxSessionStatus " + g.Lg(void 0));
            var b = {
                type: "getMdxSessionStatus"
            };
            a.g ? a.g.sendMessage("urn:x-cast:com.google.youtube.mdx", b, g.Ja, (0, g.x)(function() {
                M7(this, "Failed to send message: getMdxSessionStatus.")
            }, a)) : M7(a, "Sending yt message without session: " + g.Lg(b))
        },
        N7 = function(a, b) {
            g.Np(a.o);
            if (b) {
                if (a.info("onConnectedScreenId_: Received screenId: " + b), !a.l || a.l.id != b) {
                    var c = (0, g.x)(a.wn, a),
                        d = (0, g.x)(a.Ld, a);
                    a.Sv(b, c, d, 5)
                }
            } else a.Ld(Error("Waiting for session status timed out."))
        },
        P7 = function(a, b, c) {
            L7.call(this, a, b, "DialSession");
            this.o = this.D = null;
            this.H = "";
            this.M = c;
            this.u = null;
            this.C = g.Ja;
            this.A = NaN;
            this.I = (0, g.x)(this.iN, this);
            this.g = g.Ja
        },
        Q7 = function(a) {
            a.g = a.F.nB(a.H, a.i.label, a.i.friendlyName, (0, g.x)(function(b) {
                this.g = g.Ja;
                this.wn(b)
            }, a), (0, g.x)(function(b) {
                this.g = g.Ja;
                this.Ld(b)
            }, a))
        },
        R7 = function(a) {
            var b = {};
            b.pairingCode = a.H;
            b.theme = a.M;
            if (a.u) {
                var c = a.u.currentTime || 0;
                b.v = a.u.videoId;
                b.t = c
            }
            $5() && (b.env_useStageMdx = 1);
            return g.bh(b)
        },
        S7 = function(a, b) {
            L7.call(this, a, b, "ManualSession");
            this.g = g.Lp((0, g.x)(this.ki, this, null), 150)
        },
        T7 = function(a, b, c, d) {
            g.P.call(this);
            this.i = a;
            this.C = b || "233637DE";
            this.A = c || "cl";
            this.D = d || !1;
            this.g = null;
            this.u = !1;
            this.l = [];
            this.o = (0, g.x)(this.qK, this)
        },
        U7 = function(a, b) {
            return b ? g.Ya(a.l, function(c) {
                return H5(b, c.label)
            }, a) : null
        },
        V7 = function(a) {
            o7("Controller", a)
        },
        k7 = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        W7 = function(a) {
            return a.u || !!a.l.length || !!a.g
        },
        X7 = function(a, b, c) {
            b != a.g && (g.rf(a.g), (a.g = b) ? (c ? a.N("yt-remote-cast2-receiver-resumed", b.i) : a.N("yt-remote-cast2-receiver-selected",
                b.i), b.subscribe("sessionScreen", (0, g.x)(a.cz, a, b)), b.l ? a.N("yt-remote-cast2-session-change", b.l) : c && a.g.ki(null)) : a.N("yt-remote-cast2-session-change", null))
        },
        Y7 = function(a) {
            var b = a.i.mB(),
                c = a.g && a.g.i;
            a = (0, g.B)(b, function(d) {
                c && H5(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = U7(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Rqa = function(a, b, c, d, e, f, k) {
            Oqa() ? Pqa(b, e, f, k) && ($7(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? a8(a, c) : (window.__onGCastApiAvailable = function(l, m) {
                    l ? a8(a, c) : (b8("Failed to load cast API: " + m), c8(!1), $7(!1), P5("yt-remote-cast-available"), P5("yt-remote-cast-receiver"), d8(), c(!1))
                }, d ? g.Yp("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") :
                0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? yqa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? e6() : (f6(), d6(Qqa.map(wqa))))) : Z7("Cannot initialize because not running Chrome")
        },
        d8 = function() {
            Z7("dispose");
            var a = e8();
            a && a.dispose();
            g.Ia("yt.mdx.remote.cloudview.instance_", null, void 0);
            f8(!1);
            g.Tp(g8);
            g8.length = 0
        },
        h8 = function() {
            return !!g.kt("yt-remote-cast-installed")
        },
        i8 = function() {
            var a = g.kt("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        j8 = function() {
            Z7("clearCurrentReceiver");
            P5("yt-remote-cast-receiver")
        },
        k8 = function() {
            return h8() ? e8() ? e8().getCastSession() : (b8("getCastSelector: Cast is not initialized."), null) : (b8("getCastSelector: Cast API is not installed!"), null)
        },
        m8 = function() {
            h8() ? e8() ? l8() ? (Z7("Requesting cast selector."), e8().requestSession()) : (Z7("Wait for cast API to be ready to request the session."), g8.push(g.Sp("yt-remote-cast2-api-ready", m8))) : b8("requestCastSelector: Cast is not initialized.") : b8("requestCastSelector: Cast API is not installed!")
        },
        n8 = function(a,
            b) {
            l8() ? e8().setConnectedScreenStatus(a, b) : b8("setConnectedScreenStatus called before ready.")
        },
        Oqa = function() {
            var a = 0 <= g.Jb.search(/ (CrMo|Chrome|CriOS)\//);
            return g.Uw || a
        },
        Sqa = function(a, b) {
            e8().init(a, b)
        },
        Pqa = function(a, b, c, d) {
            var e = !1;
            e8() || (a = new T7(a, b, c, d), a.subscribe("yt-remote-cast2-availability-change", function(f) {
                g.jt("yt-remote-cast-available", f);
                E5("yt-remote-cast2-availability-change", f)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(f) {
                Z7("onReceiverSelected: " + f.friendlyName);
                g.jt("yt-remote-cast-receiver", f);
                E5("yt-remote-cast2-receiver-selected", f)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(f) {
                Z7("onReceiverResumed: " + f.friendlyName);
                g.jt("yt-remote-cast-receiver", f)
            }), a.subscribe("yt-remote-cast2-session-change", function(f) {
                Z7("onSessionChange: " + K5(f));
                f || P5("yt-remote-cast-receiver");
                E5("yt-remote-cast2-session-change", f)
            }), g.Ia("yt.mdx.remote.cloudview.instance_", a, void 0), e = !0);
            Z7("cloudview.createSingleton_: " + e);
            return e
        },
        e8 = function() {
            return g.w("yt.mdx.remote.cloudview.instance_")
        },
        a8 = function(a, b) {
            c8(!0);
            $7(!1);
            Sqa(a, function(c) {
                c ? (f8(!0), g.Vp("yt-remote-cast2-api-ready")) : (b8("Failed to initialize cast API."), c8(!1), P5("yt-remote-cast-available"), P5("yt-remote-cast-receiver"), d8());
                b(c)
            })
        },
        Z7 = function(a) {
            o7("cloudview", a)
        },
        b8 = function(a) {
            o7("cloudview", a)
        },
        c8 = function(a) {
            Z7("setCastInstalled_ " + a);
            g.jt("yt-remote-cast-installed", a)
        },
        l8 = function() {
            return !!g.w("yt.mdx.remote.cloudview.apiReady_")
        },
        f8 = function(a) {
            Z7("setApiReady_ " + a);
            g.Ia("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        $7 = function(a) {
            g.Ia("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        o8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.A = this.C = 0;
            this.g = null;
            this.hasNext = this.Ke = !1;
            this.F = this.D = this.i = this.o = 0;
            this.l = NaN;
            this.u = !1;
            this.reset(a)
        },
        p8 = function(a) {
            a.audioTrackId = null;
            a.g = null;
            a.playerState = -1;
            a.Ke = !1;
            a.hasNext = !1;
            a.C = 0;
            a.A = (0, g.H)();
            a.o = 0;
            a.i = 0;
            a.D = 0;
            a.F = 0;
            a.l = NaN;
            a.u = !1
        },
        q8 = function(a) {
            return 1 == a.playerState ? ((0, g.H)() - a.A) / 1E3 : 0
        },
        r8 = function(a, b) {
            a.C = b;
            a.A = (0, g.H)()
        },
        s8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return ((0, g.H)() - a.A) / 1E3 + a.C;
                case -1E3:
                    return 0
            }
            return a.C
        },
        t8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && p8(a)
        },
        u8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.dc(a.g);
            b.hasPrevious = a.Ke;
            b.hasNext = a.hasNext;
            b.playerTime = a.C;
            b.playerTimeAt = a.A;
            b.seekableStart = a.o;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.F;
            b.liveIngestionTime = a.l;
            return b
        },
        x8 = function(a, b) {
            g.P.call(this);
            this.g = 0;
            this.o = a;
            this.A = [];
            this.u = new D5;
            this.l = this.i = null;
            this.F = (0, g.x)(this.nI, this);
            this.C = (0, g.x)(this.Bk, this);
            this.D = (0, g.x)(this.mI, this);
            this.H = (0, g.x)(this.AI, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.jt, this), v8(this))) : c = 3;
            0 != c && (b ? this.jt(c) : g.Lp((0, g.x)(function() {
                this.jt(c)
            }, this), 0));
            var d = k8();
            d && w8(this, d);
            this.subscribe("yt-remote-cast2-session-change", this.H)
        },
        y8 = function(a) {
            return new o8(a.o.getPlayerContextData())
        },
        v8 = function(a) {
            (0, g.A)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function(b) {
                this.A.push(this.o.subscribe(b, g.Sa(this.nK, b), this))
            }, a)
        },
        z8 = function(a) {
            (0, g.A)(a.A, function(b) {
                this.o.unsubscribeByKey(b)
            }, a);
            a.A.length = 0
        },
        A8 = function(a, b) {
            var c = a.u;
            50 > c.g.length + c.i.length && a.u.i.push(b)
        },
        C8 = function(a, b, c) {
            var d = y8(a);
            r8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            B8(a, d)
        },
        D8 = function(a, b, c) {
            a.o.sendMessage(b, c)
        },
        B8 = function(a, b) {
            z8(a);
            a.o.setPlayerContextData(u8(b));
            v8(a)
        },
        w8 = function(a, b) {
            a.l && (a.l.removeUpdateListener(a.F), a.l.removeMediaListener(a.C), a.Bk(null));
            a.l = b;
            a.l && (o7("CP", "Setting cast session: " + a.l.sessionId), a.l.addUpdateListener(a.F), a.l.addMediaListener(a.C), a.l.media.length && a.Bk(a.l.media[0]))
        },
        E8 = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = y8(a);
                b.contentId != d.videoId && o7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                r8(d, a.i.getEstimatedTime());
                B8(a, d)
            } else o7("CP", "No cast media video. Ignoring state update.")
        },
        F8 = function(a, b, c) {
            return (0, g.x)(function(d) {
                this.Hb("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Hb("Retrying " + b + " using MDx browser channel."), D8(this, b, c))
            }, a)
        },
        G8 = function(a, b, c) {
            g.P.call(this);
            this.u = NaN;
            this.I = !1;
            this.D = this.C = this.F = this.H = NaN;
            this.P = [];
            this.o = this.A = this.l = this.Oa = this.g = null;
            this.O = a;
            this.P.push(g.Rr(window, "beforeunload", (0, g.x)(this.lD, this)));
            this.i = [];
            this.Oa = new o8;
            this.M = b.id;
            this.g = Tqa(this, c);
            this.g.subscribe("handlerOpened", this.rI, this);
            this.g.subscribe("handlerClosed", this.oI, this);
            this.g.subscribe("handlerError", this.pI, this);
            this.g.subscribe("handlerMessage", this.qI, this);
            Dqa(this.g, b.token);
            this.subscribe("remoteQueueChange", function() {
                var d = this.Oa.videoId;
                g.lt() && g.jt("yt-remote-session-video-id", d)
            }, this)
        },
        H8 = function(a) {
            o7("conn", a)
        },
        Tqa = function(a, b) {
            return new e7(i7(a.O, "/bc"), b)
        },
        I8 = function(a, b) {
            a.N("proxyStateChange", b)
        },
        Uqa = function(a) {
            a.u = g.Lp((0, g.x)(function() {
                H8("Connecting timeout");
                this.Mh(1)
            }, a), 2E4)
        },
        J8 = function(a) {
            g.Np(a.u);
            a.u = NaN
        },
        K8 = function(a) {
            g.Np(a.H);
            a.H = NaN
        },
        Vqa = function(a) {
            L8(a);
            a.F = g.Lp((0, g.x)(function() {
                M8(this, "getNowPlaying")
            }, a), 2E4)
        },
        L8 = function(a) {
            g.Np(a.F);
            a.F = NaN
        },
        O8 = function(a, b) {
            b && (J8(a), K8(a));
            b == (g7(a.g) && isNaN(a.u)) ? b && (I8(a, 1), M8(a, "getSubtitlesTrack")) : b ? (a.Pv() && a.Oa.reset(), I8(a, 1), M8(a, "getNowPlaying"), N8(a)) : a.Mh(1)
        },
        Wqa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.Oa.videoId && (g.Yb(b.params) ? a.Oa.g = null : a.Oa.g = b.params, a.N("remotePlayerChange"))
        },
        P8 = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.Oa.listId = b.params.listId || a.Oa.listId;
            t8(a.Oa, c, d);
            a.N("remoteQueueChange")
        },
        Xqa = function(a, b) {
            b.params = b.params || {};
            P8(a, b);
            Q8(a, b);
            a.N("autoplayDismissed")
        },
        Q8 = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            r8(a.Oa, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.Oa.playerState && (c = -1E3);
            a.Oa.playerState = c;
            c = Number(b.params.loadedTime);
            a.Oa.F = isNaN(c) ? 0 : c;
            c = Number(b.params.duration);
            a.Oa.D = isNaN(c) ? 0 : c;
            c = a.Oa;
            var d = Number(b.params.liveIngestionTime);
            c.l = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.Oa;
            d = Number(b.params.seekableStartTime);
            var e = Number(b.params.seekableEndTime);
            c.o = isNaN(d) ? 0 : d;
            c.i = isNaN(e) ? 0 : e;
            1 == a.Oa.playerState ? Vqa(a) : L8(a);
            a.N("remotePlayerChange")
        },
        Yqa = function(a, b) {
            if (-1E3 !=
                a.Oa.playerState) {
                var c = 1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.Oa.playerState = c;
                c = parseInt(b.params.currentTime, 10);
                r8(a.Oa, isNaN(c) ? 0 : c);
                a.N("remotePlayerChange")
            }
        },
        Zqa = function(a, b) {
            var c = "true" == b.params.muted;
            a.Oa.volume = parseInt(b.params.volume, 10);
            a.Oa.muted = c;
            a.N("remotePlayerChange")
        },
        $qa = function(a, b) {
            a.A = b.params.videoId;
            a.N("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ara = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.Oa.Ke = "true" == b.params.hasPrevious;
            a.Oa.hasNext = c;
            a.N("previousNextChange")
        },
        N8 = function(a) {
            g.Np(a.D);
            a.D = g.Lp((0, g.x)(a.Mh, a, 1), 864E5)
        },
        M8 = function(a, b, c) {
            c ? H8("Sending: action=" + b + ", params=" + g.Lg(c)) : H8("Sending: action=" + b);
            a.g.sendMessage(b, c)
        },
        R8 = function(a) {
            s7.call(this, "ScreenServiceProxy");
            this.Vc = a;
            this.i = [];
            this.i.push(this.Vc.$_s("screenChange", (0, g.x)(this.dN, this)));
            this.i.push(this.Vc.$_s("onlineScreenChange", (0, g.x)(this.SJ, this)))
        },
        fra = function(a) {
            var b = {
                device: "Desktop",
                app: "youtube-desktop"
            };
            b = g.Dp("MDX_CONFIG") || b;
            sqa();
            U5();
            S8 || (S8 = new h7(b ? b.loungeApiHost : void 0), $5() && (S8.g = "/api/loungedev"));
            T8 || (T8 = g.w("yt.mdx.remote.deferredProxies_") || [], g.Ia("yt.mdx.remote.deferredProxies_", T8, void 0));
            bra();
            var c = U8();
            if (!c) {
                var d = new F7(S8);
                g.Ia("yt.mdx.remote.screenService_", d, void 0);
                c = U8();
                var e = !1,
                    f = void 0,
                    k = void 0,
                    l = !1;
                b && (e = !!b.loadCastApiSetupScript, f = b.appId, k = b.theme, l = !!b.disableDial);
                Rqa(a, d, function(m) {
                    m ? V8() && n8(V8(), "YouTube TV") : d.subscribe("onlineScreenChange",
                        function() {
                            E5("yt-remote-receiver-availability-change")
                        })
                }, e, f, k, l)
            }
            b && !g.w("yt.mdx.remote.initialized_") && (g.Ia("yt.mdx.remote.initialized_", !0, void 0), W8("Initializing: " + g.Lg(b)), X8.push(g.Sp("yt-remote-cast2-availability-change", function() {
                E5("yt-remote-receiver-availability-change")
            })), X8.push(g.Sp("yt-remote-cast2-receiver-selected", function() {
                Y8(null);
                E5("yt-remote-auto-connect", "cast-selector-receiver")
            })), X8.push(g.Sp("yt-remote-cast2-receiver-resumed", function() {
                E5("yt-remote-receiver-resumed", "cast-selector-receiver")
            })), X8.push(g.Sp("yt-remote-cast2-session-change", cra)), X8.push(g.Sp("yt-remote-connection-change", function(m) {
                m ? n8(V8(), "YouTube TV") : Z8() || (n8(null, null), j8())
            })), a = $8(), b.isAuto && (a.id += "#dial"), g.zq("desktop_enable_autoplay") && (a.capabilities = ["atp"]), a.name = b.device, a.app = b.app, (k = b.theme) && (a.theme = k), W8(" -- with channel params: " +
                g.Lg(a)), dra(a), c.start(), V8() || era())
        },
        gra = function() {
            var a = a9();
            h8() && g.kt("yt-remote-cast-available") && a.push({
                key: "cast-selector-receiver",
                name: "Cast..."
            });
            return a
        },
        a9 = function() {
            var a = U8().Vc.$_gos();
            var b = b9();
            b && c9() && (N5(a, b) || a.push(b));
            return rqa(a)
        },
        d9 = function() {
            var a = hra();
            !a && h8() && i8() && (a = {
                key: "cast-selector-receiver",
                name: i8()
            });
            return a
        },
        hra = function() {
            var a = a9(),
                b = b9();
            b || (b = Z8());
            return g.Ya(a, function(c) {
                return b && H5(b, c.key) ? !0 : !1
            })
        },
        b9 = function() {
            var a = V8();
            if (!a) return null;
            var b = U8().Hd();
            return O5(b, a)
        },
        cra = function(a) {
            W8("remote.onCastSessionChange_: " + K5(a));
            if (a) {
                var b = b9();
                b && b.id == a.id ? n8(b.id, "YouTube TV") : (b && e9(), f9(a, 1))
            } else c9() && e9()
        },
        e9 = function() {
            l8() ? e8().stopSession() : b8("stopSession called before API ready.");
            var a = c9();
            a && (a.disconnect(1), g9(null))
        },
        h9 = function() {
            var a = c9();
            return !!a && 3 != a.getProxyState()
        },
        W8 = function(a) {
            o7("remote", a)
        },
        U8 = function() {
            if (!i9) {
                var a = g.w("yt.mdx.remote.screenService_");
                i9 = a ? new R8(a) : null
            }
            return i9
        },
        V8 = function() {
            return g.w("yt.mdx.remote.currentScreenId_")
        },
        j9 = function(a) {
            g.Ia("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        ira = function() {
            return g.w("yt.mdx.remote.connectData_")
        },
        Y8 = function(a) {
            g.Ia("yt.mdx.remote.connectData_", a, void 0)
        },
        c9 = function() {
            return g.w("yt.mdx.remote.connection_")
        },
        g9 = function(a) {
            var b = c9();
            Y8(null);
            a || j9("");
            g.Ia("yt.mdx.remote.connection_", a, void 0);
            T8 && ((0, g.A)(T8, function(c) {
                c(a)
            }), T8.length = 0);
            b && !a ? E5("yt-remote-connection-change", !1) : !b && a && E5("yt-remote-connection-change", !0)
        },
        Z8 = function() {
            var a = g.lt();
            if (!a) return null;
            var b = U8().Hd();
            return O5(b, a)
        },
        f9 = function(a, b) {
            b9() && b9();
            if (k9) l9 = a;
            else {
                j9(a.id);
                var c = new G8(S8, a, $8());
                c.connect(b, ira());
                c.subscribe("beforeDisconnect", function(d) {
                    E5("yt-remote-before-disconnect", d)
                });
                c.subscribe("beforeDispose", function() {
                    c9() && g9(null)
                });
                g9(c)
            }
        },
        era = function() {
            var a = Z8();
            a ? (W8("Resume connection to: " + K5(a)), f9(a, 0)) : (Y5(), j8(), W8("Skipping connecting because no session screen found."))
        },
        bra = function() {
            var a = $8();
            if (g.Yb(a)) {
                a = T5();
                var b = g.kt("yt-remote-session-name") || "",
                    c = g.kt("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ia("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        $8 = function() {
            return g.w("yt.mdx.remote.channelParams_") || {}
        },
        dra = function(a) {
            a ? (g.jt("yt-remote-session-app", a.app), g.jt("yt-remote-session-name", a.name)) : (P5("yt-remote-session-app"), P5("yt-remote-session-name"));
            g.Ia("yt.mdx.remote.channelParams_", a, void 0)
        },
        m9 = function(a, b, c) {
            g.D.call(this);
            this.u = a;
            this.i = b;
            this.l = new g.zs(this);
            g.G(this, this.l);
            this.l.K(b, "onCaptionsTrackListChanged", this.mJ);
            this.l.K(b, "captionschanged", this.lI);
            this.l.K(b, "captionssettingschanged", this.AA);
            this.l.K(b, "videoplayerreset", this.xn);
            this.l.K(b, "mdxautoplaycancel", this.pC);
            this.O = this.l.K(b, "onVolumeChange", this.Ny);
            this.D = !1;
            this.g = c;
            c.subscribe("proxyStateChange", this.Yy, this);
            c.subscribe("remotePlayerChange", this.Dk, this);
            c.subscribe("remoteQueueChange", this.xn, this);
            c.subscribe("autoplayUpNext", this.Cy,
                this);
            c.subscribe("previousNextChange", this.Vy, this);
            c.subscribe("nowAutoplaying", this.Ry, this);
            c.subscribe("autoplayDismissed", this.By, this);
            this.suggestion = null;
            this.F = new g.pC(64);
            this.o = new g.M(this.yA, 500, this);
            g.G(this, this.o);
            this.A = new g.M(this.zA, 1E3, this);
            g.G(this, this.A);
            this.I = new g6(this.JM, 0, this);
            g.G(this, this.I);
            this.C = {};
            this.P = new g.M(this.ZA, 1E3, this);
            g.G(this, this.P);
            this.H = new g.Dl(this.IF, 1E3, this);
            g.G(this, this.H);
            this.M = g.Ja;
            this.AA();
            this.xn();
            this.Dk()
        },
        n9 = function(a, b) {
            a.u.Jc(b,
                a.i.getVideoData().lengthSeconds)
        },
        jra = function(a) {
            n9(a, 0);
            a.o.stop();
            o9(a, new g.pC(64))
        },
        q9 = function(a, b) {
            if (p9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.i.getSubtitlesUserSettings()
                }, g.fc(c, b));
                a.g.nA(a.i.getVideoData(1).videoId, c);
                a.C = y8(a.g).g
            }
        },
        r9 = function(a, b) {
            var c = a.i.getPlaylist();
            if (c) {
                var d = c.Sa;
                var e = c.listId.toString()
            }
            c = a.i.getVideoData(1);
            a.g.playVideo(c.videoId, b, d, e, c.playerParams, c.Cf, z5(c));
            o9(a, new g.pC(1))
        },
        kra = function(a, b) {
            if (b) {
                var c = a.i.getOption("captions", "tracklist", {
                    yQ: 1
                });
                c && c.length ? (a.i.setOption("captions", "track", b), a.D = !1) : (a.i.loadModule("captions"), a.D = !0)
            } else a.i.setOption("captions", "track", {})
        },
        p9 = function(a) {
            return y8(a.g).videoId == a.i.getVideoData(1).videoId
        },
        o9 = function(a, b) {
            a.A.stop();
            var c = a.F;
            if (!g.vC(c, b)) {
                var d = g.U(b, 2);
                d != g.U(a.F, 2) && g.jK(a.i, d);
                a.F = b;
                lra(a.u, c, b)
            }
        },
        s9 = function() {
            g.W.call(this, {
                B: "div",
                G: "ytp-mdx-popup-dialog",
                L: {
                    role: "dialog"
                },
                J: [{
                    B: "div",
                    G: "ytp-mdx-popup-dialog-inner-content",
                    J: [{
                        B: "div",
                        G: "ytp-mdx-popup-title",
                        U: "\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"
                    }, {
                        B: "div",
                        G: "ytp-mdx-popup-description",
                        U: '\u0420\u043e\u043b\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u0435, \u0447\u0442\u043e \u0441\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u0445. \u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 "\u041e\u0442\u043c\u0435\u043d\u0430" \u0438 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.'
                    }, {
                        B: "div",
                        G: "ytp-mdx-privacy-popup-buttons",
                        J: [{
                            B: "button",
                            W: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            U: "\u041e\u0442\u043c\u0435\u043d\u0430"
                        }, {
                            B: "button",
                            W: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                            U: "\u041e\u041a"
                        }]
                    }]
                }]
            });
            this.l = new g.cQ(this, 250);
            g.G(this, this.l);
            this.C = this.i["ytp-mdx-privacy-popup-cancel"];
            this.K(this.C, "click", this.o);
            this.u = this.i["ytp-mdx-privacy-popup-confirm"];
            this.K(this.u, "click", this.A)
        },
        t9 = function(a) {
            g.W.call(this, {
                B: "div",
                G: "ytp-remote",
                J: [{
                    B: "div",
                    G: "ytp-remote-display-status",
                    J: [{
                        B: "div",
                        G: "ytp-remote-display-status-icon",
                        J: [g.sP()]
                    }, {
                        B: "div",
                        G: "ytp-remote-display-status-text",
                        U: "{{statustext}}"
                    }]
                }]
            });
            this.l = new g.cQ(this, 250);
            g.G(this, this.l);
            this.o = a;
            this.K(a, "presentingplayerstatechange", this.u);
            mra(this, g.fK(a))
        },
        mra = function(a, b) {
            if (3 == a.o.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.o.getOption("remote", "currentReceiver").name
                };
                c = g.U(b, 128) ? g.rN('\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"', c) : g.wC(b) || g.U(b, 4) ? g.rN('\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 "$RECEIVER_NAME"', c) : g.rN('\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0443 "$RECEIVER_NAME"',
                    c);
                a.updateValue("statustext", c);
                a.l.show()
            } else a.l.hide()
        },
        u9 = function(a, b) {
            g.NT.call(this, "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430", 0, a, b);
            this.l = a;
            this.F = {};
            this.K(a, "onMdxReceiversChange", this.I);
            this.K(a, "presentingplayerstatechange", this.I);
            this.I()
        },
        v9 = function(a) {
            g.IK.call(this, a);
            this.i = {
                key: M5(),
                name: "\u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440"
            };
            this.u = null;
            this.o = [];
            this.C = this.g = null;
            this.A = [this.i];
            this.l = this.i;
            this.lk = new g.pC(64);
            this.H = 0;
            this.Km = -1;
            if (!g.Sy(g.X(this.player))) {
                a = this.player;
                var b = g.jD(a);
                b && (b = b.dn()) && (b = new u9(a, b), g.G(this, b));
                b = new t9(a);
                g.G(this, b);
                g.uK(a, b.element, 4);
                this.F = new s9;
                g.G(this, this.F);
                g.uK(a, this.F.element, 4);
                this.D = !!Z8()
            }
        },
        lra = function(a, b, c) {
            a.lk = c;
            a.player.N("presentingplayerstatechange", new g.AD(c, b))
        },
        w9 = function(a, b) {
            if (b.key != a.l.key)
                if (b.key == a.i.key) e9();
                else {
                    var c;
                    if (c = g.Q(g.X(a.player).experiments, "mdx_enable_privacy_disclosure")) c = g.Dp("PLAYER_CONFIG"), c = !(c && c.args && void 0 !== c.args.authuser || g.Dp("SESSION_INDEX") || g.Dp("LOGGED_IN"));
                    c && !a.D && (a.player.pauseVideo(), a.F.l.show(), c9() || (k9 = !0));
                    a.l = b;
                    var d = a.player.getPlaylistId();
                    c = a.player.getVideoData(1);
                    var e = c.videoId;
                    if (d || e) {
                        var f = a.player.getPlaylist();
                        if (f) {
                            var k = [];
                            for (var l = 0; l < f.getLength(); l++) k[l] = f.oa(l).videoId
                        } else k = [e];
                        f = a.player.getCurrentTime(1);
                        d = {
                            videoIds: k,
                            listId: d,
                            videoId: e,
                            playerParams: c.playerParams,
                            clickTrackingParams: c.Cf,
                            index: Math.max(a.player.getPlaylistIndex(), 0),
                            currentTime: 0 == f ? void 0 : f
                        };
                        (c = z5(c)) && (d.locationInfo = c);
                        c = d
                    } else c = null;
                    W8("Connecting to: " + g.Lg(b));
                    "cast-selector-receiver" == b.key ? (Y8(c || null), l8() ? e8().setLaunchParams(c || null) : b8("setLaunchParams called before ready.")) : !c && h9() && V8() == b.key ? E5("yt-remote-connection-change", !0) : (e9(), Y8(c || null), c = U8().Hd(), (c = O5(c, b.key)) && f9(c, 1))
                }
        },
        hqa = /^https?$/i,
        nra = ["POST",
            "PUT"
        ];
    g.y(x5, g.Tf);
    g.h = x5.prototype;
    g.h.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.D = a;
        this.l = "";
        this.u = 0;
        this.aa = b;
        this.O = !1;
        this.i = !0;
        this.g = this.M ? p5(this.M) : p5(g.MY);
        this.P = this.M ? this.M.getOptions() : g.MY.getOptions();
        this.g.onreadystatechange = (0, g.x)(this.dw, this);
        try {
            m5(q5(this, "Opening Xhr")), this.V = !0, this.g.open(b, String(a), !0), this.V = !1
        } catch (f) {
            m5(q5(this, "Error opening Xhr: " + f.message));
            u5(this, f);
            return
        }
        a = c ||
            "";
        var e = this.headers.clone();
        d && eqa(d, function(f, k) {
            e.set(k, f)
        });
        d = g.Ya(e.Gd(), fqa);
        c = g.v.FormData && a instanceof g.v.FormData;
        !g.ab(nra, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, k) {
            this.g.setRequestHeader(k, f)
        }, this);
        this.Z && (this.g.responseType = this.Z);
        "withCredentials" in this.g && this.g.withCredentials !== this.R && (this.g.withCredentials = this.R);
        try {
            r5(this), 0 < this.A && (this.I = gqa(this.g), m5(q5(this, "Will abort after " + this.A + "ms if incomplete, xhr2 " + this.I)), this.I ? (this.g.timeout = this.A, this.g.ontimeout = (0, g.x)(this.ew, this)) : this.F = g.Hg(this.ew, this.A, this)), m5(q5(this, "Sending request")), this.C = !0, this.g.send(a), this.C = !1
        } catch (f) {
            m5(q5(this, "Send error: " + f.message)), u5(this, f)
        }
    };
    g.h.ew = function() {
        "undefined" != typeof g.rY && this.g && (this.l = "Timed out after " + this.A + "ms, aborting", this.u = 8, q5(this, this.l), this.dispatchEvent("timeout"), this.abort(8))
    };
    g.h.abort = function(a) {
        this.g && this.i && (q5(this, "Aborting"), this.i = !1, this.o = !0, this.g.abort(), this.o = !1, this.u = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), t5(this))
    };
    g.h.T = function() {
        this.g && (this.i && (this.i = !1, this.o = !0, this.g.abort(), this.o = !1), t5(this, !0));
        x5.Xa.T.call(this)
    };
    g.h.dw = function() {
        this.ea() || (this.V || this.C || this.o ? w5(this) : this.pK())
    };
    g.h.pK = function() {
        w5(this)
    };
    g.h.isActive = function() {
        return !!this.g
    };
    g.h.getStatus = function() {
        try {
            return 2 < v5(this) ? this.g.status : -1
        } catch (a) {
            return -1
        }
    };
    g.h.getLastError = function() {
        return g.Fa(this.l) ? this.l : String(this.l)
    };
    var v6 = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        u6 = {
            "'": "\\'"
        },
        ora = {};
    g.h = D5.prototype;
    g.h.isEmpty = function() {
        return 0 == this.g.length && 0 == this.i.length
    };
    g.h.clear = function() {
        this.g = [];
        this.i = []
    };
    g.h.contains = function(a) {
        return g.ab(this.g, a) || g.ab(this.i, a)
    };
    g.h.remove = function(a) {
        var b = this.g;
        var c = (0, g.Pma)(b, a);
        0 <= c ? (g.cb(b, c), b = !0) : b = !1;
        return b || g.db(this.i, a)
    };
    g.h.xc = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.i.length;
        for (b = 0; b < c; ++b) a.push(this.i[b]);
        return a
    };
    var pqa = {
        BN: "atp",
        MP: "ska",
        BP: "que",
        bP: "mus",
        LP: "sus",
        sO: "dsp",
        IP: "seq"
    };
    F5.prototype.fg = function() {
        var a = new F5({
            id: this.id,
            name: this.name,
            app: this.app,
            type: this.type,
            user: this.username,
            userAvatarUri: this.avatar,
            obfuscatedGaiaId: this.obfuscatedGaiaId,
            theme: this.theme,
            capabilities: Array.from(this.capabilities.values()).join(","),
            experiments: Array.from(this.experiments.values()).join(",")
        });
        a.l = this.l;
        a.i = this.i;
        a.g = this.g
    };
    var Z5, S5 = "",
        xqa = a6("loadCastFramework") || a6("loadCastApplicationFramework"),
        Qqa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.y(g6, g.D);
    g.h = g6.prototype;
    g.h.hD = function(a) {
        this.o = arguments;
        this.g = !1;
        this.za ? this.l = (0, g.H)() + this.Wc : this.za = g.Hg(this.u, this.Wc)
    };
    g.h.stop = function() {
        this.za && (g.v.clearTimeout(this.za), this.za = null);
        this.l = null;
        this.g = !1;
        this.o = []
    };
    g.h.pause = function() {
        ++this.i
    };
    g.h.resume = function() {
        this.i && (--this.i, !this.i && this.g && (this.g = !1, this.A.apply(null, this.o)))
    };
    g.h.T = function() {
        this.stop();
        g6.Xa.T.call(this)
    };
    g.h.iD = function() {
        this.l ? (this.za = g.Hg(this.u, this.l - (0, g.H)()), this.l = null) : (this.za = null, this.i ? this.g = !0 : (this.g = !1, this.A.apply(null, this.o)))
    };
    h6.prototype.stringify = function(a) {
        return g.v.JSON.stringify(a, void 0)
    };
    h6.prototype.parse = function(a) {
        return g.v.JSON.parse(a, void 0)
    };
    g.h = i6.prototype;
    g.h.Zg = null;
    g.h.we = !1;
    g.h.Wi = null;
    g.h.gt = null;
    g.h.Fi = null;
    g.h.Vh = null;
    g.h.Wf = null;
    g.h.Dg = null;
    g.h.sh = null;
    g.h.qc = null;
    g.h.dl = 0;
    g.h.Be = null;
    g.h.mo = null;
    g.h.pg = null;
    g.h.Tj = -1;
    g.h.aA = !0;
    g.h.Og = !1;
    g.h.Zp = 0;
    g.h.Hn = null;
    var p6 = {},
        n6 = {};
    g.h = i6.prototype;
    g.h.setTimeout = function(a) {
        this.o = a
    };
    g.h.WL = function(a) {
        a = a.target;
        var b = this.Hn;
        b && 3 == v5(a) ? b.Pj() : this.iB(a)
    };
    g.h.iB = function(a) {
        try {
            if (a == this.qc) a: {
                var b = v5(this.qc),
                    c = this.qc.u,
                    d = this.qc.getStatus();
                if (g.Md && !g.pd(10) || g.Od && !g.od("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Dh && !y5(this.qc)) break a;
                this.Og || 4 != b || 7 == c || (8 == c || 0 >= d ? this.g.se(3) : this.g.se(2));
                z6(this);
                var e = this.qc.getStatus();
                this.Tj = e;
                var f = y5(this.qc);
                (this.we = 200 == e) ? (4 == b && r6(this), this.u ? (t6(this, b, f), g.Dh && this.we && 3 == b && (this.ba.ca(this.i, "tick", this.QL), this.i.start())) : q6(this, f), this.we && !this.Og && (4 == b ? this.g.un(this) : (this.we = !1, m6(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.pg = 3, o6(13)) : (this.pg = 0, o6(14)), r6(this), s6(this))
            }
        } catch (k) {
            this.qc && y5(this.qc)
        } finally {}
    };
    g.h.QL = function() {
        var a = v5(this.qc),
            b = y5(this.qc);
        this.dl < b.length && (z6(this), t6(this, a, b), this.we && 4 != a && m6(this))
    };
    g.h.pL = function(a) {
        y6((0, g.x)(this.oL, this, a), 0)
    };
    g.h.oL = function(a) {
        this.Og || (z6(this), q6(this, a), m6(this))
    };
    g.h.fz = function(a) {
        y6((0, g.x)(this.nL, this, a), 0)
    };
    g.h.nL = function(a) {
        this.Og || (r6(this), this.we = a, this.g.un(this), this.g.se(4))
    };
    g.h.cancel = function() {
        this.Og = !0;
        r6(this)
    };
    g.h.zL = function() {
        this.Wi = null;
        var a = (0, g.H)();
        0 <= a - this.gt ? (2 != this.Vh && this.g.se(3), r6(this), this.pg = 2, o6(18), s6(this)) : x6(this, this.gt - a)
    };
    g.h.getLastError = function() {
        return this.pg
    };
    g.h = D6.prototype;
    g.h.Xp = null;
    g.h.Bd = null;
    g.h.In = !1;
    g.h.cw = null;
    g.h.Zl = null;
    g.h.Jq = null;
    g.h.Yp = null;
    g.h.ce = null;
    g.h.yf = -1;
    g.h.Sj = null;
    g.h.kj = null;
    g.h.connect = function(a) {
        this.Yp = a;
        a = E6(this.g, null, this.Yp);
        o6(3);
        this.cw = (0, g.H)();
        var b = this.g.D;
        null != b ? (this.Sj = b[0], (this.kj = b[1]) ? (this.ce = 1, F6(this)) : (this.ce = 2, H6(this))) : (o5(a, "MODE", "init"), this.Bd = new i6(this, void 0, void 0, void 0), this.Bd.Zg = this.Xp, l6(this.Bd, a, !1, null, !0), this.ce = 0)
    };
    g.h.qC = function(a) {
        if (a) this.ce = 2, H6(this);
        else {
            o6(4);
            var b = this.g;
            b.Je = b.eg.yf;
            a7(b, 9)
        }
        a && this.se(2)
    };
    g.h.yp = function(a) {
        return this.g.yp(a)
    };
    g.h.abort = function() {
        this.Bd && (this.Bd.cancel(), this.Bd = null);
        this.yf = -1
    };
    g.h.bw = function() {
        return !1
    };
    g.h.Zy = function(a, b) {
        this.yf = a.Tj;
        if (0 == this.ce)
            if (b) {
                try {
                    var c = this.i.parse(b)
                } catch (d) {
                    c = this.g;
                    c.Je = this.yf;
                    a7(c, 2);
                    return
                }
                this.Sj = c[0];
                this.kj = c[1]
            } else c = this.g, c.Je = this.yf, a7(c, 2);
        else if (2 == this.ce)
            if (this.In) o6(7), this.Jq = (0, g.H)();
            else if ("11111" == b) {
            if (o6(6), this.In = !0, this.Zl = (0, g.H)(), c = this.Zl - this.cw, !g.Md || g.pd(10) || 500 > c) this.yf = 200, this.Bd.cancel(), o6(12), G6(this.g, this, !0)
        } else o6(8), this.Zl = this.Jq = (0, g.H)(), this.In = !1
    };
    g.h.un = function() {
        this.yf = this.Bd.Tj;
        if (this.Bd.we) 0 == this.ce ? this.kj ? (this.ce = 1, F6(this)) : (this.ce = 2, H6(this)) : 2 == this.ce && ((!g.Md || g.pd(10) ? !this.In : 200 > this.Jq - this.Zl) ? (o6(11), G6(this.g, this, !1)) : (o6(12), G6(this.g, this, !0)));
        else {
            0 == this.ce ? o6(9) : 2 == this.ce && o6(10);
            var a = this.g;
            this.Bd.getLastError();
            a.Je = this.yf;
            a7(a, 2)
        }
    };
    g.h.Qk = function() {
        return this.g.Qk()
    };
    g.h.isActive = function() {
        return this.g.isActive()
    };
    g.h.se = function(a) {
        this.g.se(a)
    };
    g.h = I6.prototype;
    g.h.zj = null;
    g.h.xd = null;
    g.h.Sb = null;
    g.h.Wp = null;
    g.h.fm = null;
    g.h.tu = null;
    g.h.rm = null;
    g.h.yk = 0;
    g.h.FH = 0;
    g.h.Tc = null;
    g.h.lg = null;
    g.h.nf = null;
    g.h.Tg = null;
    g.h.eg = null;
    g.h.ko = null;
    g.h.ii = -1;
    g.h.Mw = -1;
    g.h.Je = -1;
    g.h.Ph = 0;
    g.h.Ih = 0;
    g.h.Pg = 8;
    var b7 = new g.Tf;
    g.y(J6, g.tf);
    g.y(K6, g.tf);
    g.y(L6, g.tf);
    g.h = I6.prototype;
    g.h.connect = function(a, b, c, d, e) {
        o6(0);
        this.Wp = b;
        this.zj = c || {};
        d && g.Ea(e) && (this.zj.OSID = d, this.zj.OAID = e);
        this.A ? (y6((0, g.x)(this.Mu, this, a), 100), R6(this)) : this.Mu(a)
    };
    g.h.Mu = function(a) {
        this.eg = new D6(this);
        this.eg.Xp = null;
        this.eg.i = this.u;
        this.eg.connect(a)
    };
    g.h.bw = function() {
        return 0 == this.g
    };
    g.h.ez = function(a) {
        this.lg = null;
        W6(this, a)
    };
    g.h.dz = function() {
        this.nf = null;
        this.Sb = new i6(this, this.l, "rpc", this.C);
        this.Sb.Zg = null;
        this.Sb.Zp = 0;
        var a = this.tu.clone();
        g.Ym(a, "RID", "rpc");
        g.Ym(a, "SID", this.l);
        g.Ym(a, "CI", this.ko ? "0" : "1");
        g.Ym(a, "AID", this.ii);
        N6(this, a);
        if (!g.Md || g.pd(10)) g.Ym(a, "TYPE", "xmlhttp"), l6(this.Sb, a, !0, this.rm, !1);
        else {
            g.Ym(a, "TYPE", "html");
            var b = this.Sb,
                c = !!this.rm;
            b.Vh = 3;
            b.Wf = n5(a.clone());
            w6(b, c)
        }
    };
    g.h.Zy = function(a, b) {
        if (0 != this.g && (this.Sb == a || this.xd == a))
            if (this.Je = a.Tj, this.xd == a && 3 == this.g)
                if (7 < this.Pg) {
                    try {
                        var c = this.u.parse(b)
                    } catch (f) {
                        c = null
                    }
                    if (g.Ma(c) && 3 == c.length)
                        if (0 == c[0]) a: {
                            if (!this.nf) {
                                if (this.Sb)
                                    if (this.Sb.Fi + 3E3 < this.xd.Fi) S6(this), this.Sb.cancel(), this.Sb = null;
                                    else break a;
                                Z6(this);
                                o6(19)
                            }
                        } else this.Mw = c[1], 0 < this.Mw - this.ii && 37500 > c[2] && this.ko && 0 == this.Ih && !this.Tg && (this.Tg = y6((0, g.x)(this.hI, this), 6E3));
                        else a7(this, 11)
                } else b != ora.XN.g && a7(this, 11);
        else if (this.Sb == a &&
            S6(this), !g.xb(b)) {
            c = this.u.parse(b);
            g.Ma(c);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                this.ii = e[0];
                e = e[1];
                2 == this.g ? "c" == e[0] ? (this.l = e[1], this.rm = e[2], e = e[3], null != e ? this.Pg = e : this.Pg = 6, this.g = 3, this.Tc && this.Tc.Gu(), this.tu = E6(this, this.Qk() ? this.rm : null, this.Wp), X6(this)) : "stop" == e[0] && a7(this, 7) : 3 == this.g && ("stop" == e[0] ? a7(this, 7) : "noop" != e[0] && this.Tc && this.Tc.Fu(e), this.Ih = 0)
            }
        }
    };
    g.h.hI = function() {
        null != this.Tg && (this.Tg = null, this.Sb.cancel(), this.Sb = null, Z6(this), o6(20))
    };
    g.h.un = function(a) {
        if (this.Sb == a) {
            S6(this);
            this.Sb = null;
            var b = 2
        } else if (this.xd == a) this.xd = null, b = 1;
        else return;
        this.Je = a.Tj;
        if (0 != this.g)
            if (a.we) 1 == b ? (b = (0, g.H)() - a.Fi, b7.dispatchEvent(new K6(b7, a.sh ? a.sh.length : 0, b, this.Ph)), Q6(this), this.o.length = 0) : X6(this);
            else {
                var c = a.getLastError(),
                    d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Je)) {
                    if (d = 1 == b) this.xd || this.lg || 1 == this.g || 2 <= this.Ph ? d = !1 : (this.lg = y6((0, g.x)(this.ez, this, a), Y6(this, this.Ph)), this.Ph++, d = !0);
                    d = !(d || 2 == b && Z6(this))
                }
                if (d) switch (c) {
                    case 1:
                        a7(this,
                            5);
                        break;
                    case 4:
                        a7(this, 10);
                        break;
                    case 3:
                        a7(this, 6);
                        break;
                    case 7:
                        a7(this, 12);
                        break;
                    default:
                        a7(this, 2)
                }
            }
    };
    g.h.HC = function(a) {
        if (!g.ab(arguments, this.g)) throw Error("Unexpected channel state: " + this.g);
    };
    g.h.AM = function(a) {
        a ? o6(2) : (o6(1), $6(this, 8))
    };
    g.h.yp = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new x5;
        a.R = !1;
        return a
    };
    g.h.isActive = function() {
        return !!this.Tc && this.Tc.isActive(this)
    };
    g.h.se = function(a) {
        b7.dispatchEvent(new L6(b7, a))
    };
    g.h.Qk = function() {
        return !(!g.Md || g.pd(10))
    };
    g.h = c7.prototype;
    g.h.Gu = function() {};
    g.h.Fu = function() {};
    g.h.Eu = function() {};
    g.h.kp = function() {};
    g.h.Cv = function() {
        return {}
    };
    g.h.isActive = function() {
        return !0
    };
    g.y(d7, g.D);
    g.h = d7.prototype;
    g.h.hL = function() {
        this.Wc = Math.min(3E5, 2 * this.Wc);
        this.l();
        this.i && this.start()
    };
    g.h.start = function() {
        var a = this.Wc + 15E3 * Math.random();
        g.fo(this.g, a);
        this.i = (0, g.H)() + a
    };
    g.h.stop = function() {
        this.g.stop();
        this.i = 0
    };
    g.h.isActive = function() {
        return this.g.isActive()
    };
    g.h.reset = function() {
        this.g.stop();
        this.Wc = 5E3
    };
    g.y(e7, c7);
    g.h = e7.prototype;
    g.h.subscribe = function(a, b, c) {
        return this.l.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.l.unsubscribe(a, b, c)
    };
    g.h.If = function(a) {
        return this.l.ah(a)
    };
    g.h.N = function(a, b) {
        return this.l.N.apply(this.l, arguments)
    };
    g.h.dispose = function() {
        this.fb || (this.fb = !0, g.rf(this.l), f7(this), g.rf(this.i), this.i = null)
    };
    g.h.ea = function() {
        return this.fb
    };
    g.h.connect = function(a, b, c) {
        if (!this.g || 2 != this.g.g) {
            this.F = "";
            this.i.stop();
            this.u = a || null;
            this.o = b || 0;
            a = this.H + "/test";
            b = this.H + "/bind";
            var d = new I6(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.I),
                e = this.g;
            e && (e.Tc = null);
            d.Tc = this;
            this.g = d;
            e ? this.g.connect(a, b, this.A, e.l, e.ii) : c ? this.g.connect(a, b, this.A, c.sessionId, c.arrayId) : this.g.connect(a, b, this.A)
        }
    };
    g.h.sendMessage = function(a, b) {
        var c = {
            _sc: a
        };
        b && g.fc(c, b);
        this.i.isActive() || 2 == (this.g ? this.g.g : 0) ? this.C.push(c) : g7(this) && T6(this.g, c)
    };
    g.h.Gu = function() {
        this.i.reset();
        this.u = null;
        this.o = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) T6(this.g, a[b])
        }
        this.N("handlerOpened")
    };
    g.h.Eu = function(a) {
        var b = 2 == a && 401 == this.g.Je;
        4 == a || b || this.i.start();
        this.N("handlerError", a)
    };
    g.h.kp = function(a) {
        if (!this.i.isActive()) this.N("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.C.push(d)
            }
    };
    g.h.Cv = function() {
        var a = {
            v: 2
        };
        this.F && (a.gsessionid = this.F);
        0 != this.o && (a.ui = "" + this.o);
        0 != this.D && (a.ui = "" + this.D);
        this.u && g.fc(a, this.u);
        return a
    };
    g.h.Fu = function(a) {
        "S" == a[0] ? this.F = a[1] : "gracefulReconnect" == a[0] ? (this.i.start(), P6(this.g)) : this.N("handlerMessage", new Bqa(a[0], a[1]))
    };
    g.h.fM = function() {
        this.i.isActive();
        var a = this.g,
            b = 0;
        a.Sb && b++;
        a.xd && b++;
        0 == b && this.connect(this.u, this.o)
    };
    h7.prototype.o = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    h7.prototype.l = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    h7.prototype.u = function(a) {
        a(Error("request timed out"))
    };
    var Hqa = (0, g.H)(),
        m7 = null,
        q7 = Array(50),
        p7 = -1,
        r7 = !1;
    g.y(s7, g.P);
    s7.prototype.Hd = function() {
        return this.g
    };
    s7.prototype.contains = function(a) {
        return !!N5(this.g, a)
    };
    s7.prototype.get = function(a) {
        return a ? O5(this.g, a) : null
    };
    s7.prototype.info = function(a) {
        o7(this.C, a)
    };
    g.t(u7, g.P);
    g.h = u7.prototype;
    g.h.start = function() {
        !this.g && isNaN(this.za) && this.lB()
    };
    g.h.stop = function() {
        this.g && (this.g.abort(), this.g = null);
        isNaN(this.za) || (g.Np(this.za), this.za = NaN)
    };
    g.h.T = function() {
        this.stop();
        g.P.prototype.T.call(this)
    };
    g.h.lB = function() {
        this.za = NaN;
        this.g = g.Iq(i7(this.A, "/pairing/get_screen"), {
            method: "POST",
            ub: {
                pairing_code: this.u
            },
            timeout: 5E3,
            onSuccess: (0, g.x)(this.bN, this),
            onError: (0, g.x)(this.aN, this),
            he: (0, g.x)(this.cN, this)
        })
    };
    g.h.bN = function(a, b) {
        this.g = null;
        var c = b.screen || {};
        c.dialId = this.l;
        c.name = this.o;
        this.N("pairingComplete", new G5(c))
    };
    g.h.aN = function(a) {
        this.g = null;
        a.status && 404 == a.status ? this.i >= pra.length ? this.N("pairingFailed", Error("DIAL polling timed out")) : (a = pra[this.i], this.za = g.Lp((0, g.x)(this.lB, this), a), this.i++) : this.N("pairingFailed", Error("Server error " + a.status))
    };
    g.h.cN = function() {
        this.g = null;
        this.N("pairingFailed", Error("Server not responding"))
    };
    var pra = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.y(w7, s7);
    g.h = w7.prototype;
    g.h.start = function() {
        v7(this) && this.N("screenChange");
        !g.kt("yt-remote-lounge-token-expiration") && x7(this);
        g.Np(this.i);
        this.i = g.Lp((0, g.x)(this.start, this), 1E4)
    };
    g.h.add = function(a, b) {
        v7(this);
        t7(this, a);
        y7(this, !1);
        this.N("screenChange");
        b(a);
        a.token || x7(this)
    };
    g.h.remove = function(a, b) {
        var c = v7(this);
        Jqa(this, a) && (y7(this, !1), c = !0);
        b(a);
        c && this.N("screenChange")
    };
    g.h.eo = function(a, b, c, d) {
        var e = v7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, y7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.N("screenChange")
    };
    g.h.T = function() {
        g.Np(this.i);
        w7.Xa.T.call(this)
    };
    g.h.sD = function(a) {
        v7(this);
        var b = this.g.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        y7(this, !b);
        b && o7(this.C, "Missed " + b + " lounge tokens.")
    };
    g.h.rD = function(a) {
        o7(this.C, "Requesting lounge tokens failed: " + a)
    };
    g.t(A7, g.P);
    g.h = A7.prototype;
    g.h.start = function() {
        var a = parseInt(g.kt("yt-remote-fast-check-period") || "0", 10);
        (this.o = (0, g.H)() - 144E5 < a ? 0 : a) ? D7(this): (this.o = (0, g.H)() + 3E5, g.jt("yt-remote-fast-check-period", this.o), this.hs())
    };
    g.h.isEmpty = function() {
        return g.Yb(this.g)
    };
    g.h.update = function() {
        z7("Updating availability on schedule.");
        var a = this.A(),
            b = g.Mb(this.g, function(c, d) {
                return c && !!O5(a, d)
            }, this);
        C7(this, b)
    };
    g.h.T = function() {
        g.Np(this.l);
        this.l = NaN;
        this.i && (this.i.abort(), this.i = null);
        g.P.prototype.T.call(this)
    };
    g.h.hs = function() {
        g.Np(this.l);
        this.l = NaN;
        this.i && this.i.abort();
        var a = E7(this);
        if (A5(a)) {
            var b = i7(this.u, "/pairing/get_screen_availability");
            this.i = j7(this.u, b, {
                lounge_token: g.Sb(a).join(",")
            }, (0, g.x)(this.LK, this, a), (0, g.x)(this.KK, this))
        } else C7(this, {}), D7(this)
    };
    g.h.LK = function(a, b) {
        this.i = null;
        var c = g.Sb(E7(this));
        if (g.sb(c, g.Sb(a))) {
            c = b.screens || [];
            for (var d = {}, e = 0, f = c.length; e < f; ++e) d[a[c[e].loungeToken]] = "online" == c[e].status;
            C7(this, d);
            D7(this)
        } else this.Hb("Changing Screen set during request."), this.hs()
    };
    g.h.KK = function(a) {
        this.Hb("Screen availability failed: " + a);
        this.i = null;
        D7(this)
    };
    g.h.Hb = function(a) {
        o7("OnlineScreenService", a)
    };
    g.y(F7, s7);
    g.h = F7.prototype;
    g.h.start = function() {
        this.l.start();
        this.i.start();
        this.g.length && (this.N("screenChange"), this.i.isEmpty() || this.N("onlineScreenChange"))
    };
    g.h.add = function(a, b, c) {
        this.l.add(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.l.remove(a, b, c);
        this.i.update()
    };
    g.h.eo = function(a, b, c, d) {
        this.l.contains(a) ? this.l.eo(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, o7(this.C, a), d(Error(a)))
    };
    g.h.Hd = function(a) {
        return a ? this.g : g.fb(this.g, (0, g.Yd)(this.o, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.h.mB = function() {
        return (0, g.Yd)(this.Hd(!0), function(a) {
            return !!this.i.g[a.id]
        }, this)
    };
    g.h.nB = function(a, b, c, d, e) {
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var f = new u7(this.A, a, b, c);
        f.subscribe("pairingComplete", (0, g.x)(function(k) {
            g.rf(f);
            d(G7(this, k))
        }, this));
        f.subscribe("pairingFailed", function(k) {
            g.rf(f);
            e(k)
        });
        f.start();
        return (0, g.x)(f.stop, f)
    };
    g.h.eN = function(a, b, c, d) {
        g.Iq(i7(this.A, "/pairing/get_screen"), {
            method: "POST",
            ub: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.x)(function(e, f) {
                var k = new G5(f.screen || {});
                if (!k.name || I7(this, k.name)) {
                    a: {
                        var l = k.name;
                        for (var m = 2, n = b(l, m); I7(this, n);) {
                            m++;
                            if (20 < m) break a;
                            n = b(l, m)
                        }
                        l = n
                    }
                    k.name = l
                }
                c(G7(this, k))
            }, this),
            onError: (0, g.x)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            he: (0, g.x)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.T = function() {
        g.rf(this.l);
        g.rf(this.i);
        F7.Xa.T.call(this)
    };
    g.h.AD = function() {
        J7(this);
        this.N("screenChange");
        this.i.update()
    };
    F7.prototype.dispose = F7.prototype.dispose;
    g.y(L7, g.P);
    g.h = L7.prototype;
    g.h.wn = function(a) {
        this.l = a;
        this.N("sessionScreen", this.l)
    };
    g.h.Ld = function(a) {
        this.ea() || (a && M7(this, "" + a), this.l = null, this.N("sessionScreen", null))
    };
    g.h.info = function(a) {
        o7(this.P, a)
    };
    g.h.pB = function() {
        return null
    };
    g.h.ys = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.x)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.x)(function() {
            M7(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.h.T = function() {
        this.ys("");
        L7.Xa.T.call(this)
    };
    g.y(O7, L7);
    g.h = O7.prototype;
    g.h.xs = function(a) {
        if (this.g) {
            if (this.g == a) return;
            M7(this, "Overriding cast sesison with new session object");
            this.g.removeUpdateListener(this.A);
            this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.u)
        }
        this.g = a;
        this.g.addUpdateListener(this.A);
        this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.u);
        Nqa(this)
    };
    g.h.ki = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Lg(a))
    };
    g.h.stop = function() {
        this.g ? this.g.stop((0, g.x)(function() {
            this.Ld()
        }, this), (0, g.x)(function() {
            this.Ld(Error("Failed to stop receiver app."))
        }, this)) : this.Ld(Error("Stopping cast device witout session."))
    };
    g.h.ys = g.Ja;
    g.h.T = function() {
        this.info("disposeInternal");
        g.Np(this.o);
        this.o = 0;
        this.g && (this.g.removeUpdateListener(this.A), this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.u));
        this.g = null;
        O7.Xa.T.call(this)
    };
    g.h.KL = function(a, b) {
        if (!this.ea())
            if (b) {
                var c = C5(b);
                if (g.Pa(c)) {
                    var d = "" + c.type;
                    c = c.data || {};
                    this.info("onYoutubeMessage_: " + d + " " + g.Lg(c));
                    switch (d) {
                        case "mdxSessionStatus":
                            N7(this, c.screenId);
                            break;
                        default:
                            M7(this, "Unknown youtube message: " + d)
                    }
                } else M7(this, "Unable to parse message.")
            } else M7(this, "No data in message.")
    };
    g.h.Sv = function(a, b, c, d) {
        H7(this.F, this.i.label, a, this.i.friendlyName, (0, g.x)(function(e) {
            e ? b(e) : 0 <= d ? (M7(this, "Screen " + a + " appears to be offline. " + d + " retries left."), g.Lp((0, g.x)(this.Sv, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.h.pB = function() {
        return this.g
    };
    g.h.fN = function(a) {
        this.ea() || a || (M7(this, "Cast session died."), this.Ld())
    };
    g.y(P7, L7);
    g.h = P7.prototype;
    g.h.xs = function(a) {
        this.o = a;
        this.o.addUpdateListener(this.I)
    };
    g.h.ki = function(a) {
        this.u = a;
        this.C()
    };
    g.h.stop = function() {
        this.g();
        this.g = g.Ja;
        g.Np(this.A);
        this.o ? this.o.stop((0, g.x)(this.Ld, this, null), (0, g.x)(this.Ld, this, "Failed to stop DIAL device.")) : this.Ld()
    };
    g.h.T = function() {
        this.g();
        this.g = g.Ja;
        g.Np(this.A);
        this.o && this.o.removeUpdateListener(this.I);
        this.o = null;
        P7.Xa.T.call(this)
    };
    g.h.iN = function(a) {
        this.ea() || a || (M7(this, "DIAL session died."), this.g(), this.g = g.Ja, this.Ld())
    };
    g.h.nq = function(a) {
        this.H = M5();
        if (this.u) {
            var b = new chrome.cast.DialLaunchResponse(!0, R7(this));
            a(b);
            Q7(this)
        } else this.C = (0, g.x)(function() {
            g.Np(this.A);
            this.C = g.Ja;
            this.A = NaN;
            var c = new chrome.cast.DialLaunchResponse(!0, R7(this));
            a(c);
            Q7(this)
        }, this), this.A = g.Lp((0, g.x)(function() {
            this.C()
        }, this), 100)
    };
    g.h.VD = function(a, b, c) {
        H7(this.F, this.D.receiver.label, a, this.i.friendlyName, (0, g.x)(function(d) {
            d && d.token ? (this.wn(d), b(new chrome.cast.DialLaunchResponse(!1))) : this.nq(b, c)
        }, this), (0, g.x)(function(d) {
            M7(this, "Failed to get DIAL screen: " + d);
            this.nq(b, c)
        }, this))
    };
    g.y(S7, L7);
    S7.prototype.stop = function() {
        this.Ld()
    };
    S7.prototype.xs = g.Ja;
    S7.prototype.ki = function() {
        g.Np(this.g);
        this.g = NaN;
        var a = O5(this.F.Hd(), this.i.label);
        a ? this.wn(a) : this.Ld(Error("No such screen"))
    };
    S7.prototype.T = function() {
        g.Np(this.g);
        this.g = NaN;
        S7.Xa.T.call(this)
    };
    g.y(T7, g.P);
    g.h = T7.prototype;
    g.h.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.C);
        this.D || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
            e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION,
            f = (0, g.x)(this.uK, this);
        c = new chrome.cast.ApiConfig(c, (0, g.x)(this.bz, this), f, d, e);
        c.customDialLaunchCallback = (0, g.x)(this.II, this);
        chrome.cast.initialize(c, (0, g.x)(function() {
            this.ea() ||
                (chrome.cast.addReceiverActionListener(this.o), Eqa(), this.i.subscribe("onlineScreenChange", (0, g.x)(this.oB, this)), this.l = Y7(this), chrome.cast.setCustomReceivers(this.l, g.Ja, (0, g.x)(function(k) {
                    this.Hb("Failed to set initial custom receivers: " + g.Lg(k))
                }, this)), this.N("yt-remote-cast2-availability-change", W7(this)), b(!0))
        }, this), (0, g.x)(function(k) {
            this.Hb("Failed to initialize API: " + g.Lg(k));
            b(!1)
        }, this))
    };
    g.h.oM = function(a, b) {
        V7("Setting connected screen ID: " + a + " -> " + b);
        if (this.g) {
            var c = this.g.l;
            if (!a || c && c.id != a) V7("Unsetting old screen status: " + this.g.i.friendlyName), X7(this, null)
        }
        if (a && b) {
            if (!this.g) {
                c = O5(this.i.Hd(), a);
                if (!c) {
                    V7("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                var d = U7(this, c);
                d || (V7("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.l.push(d), chrome.cast.setCustomReceivers(this.l,
                    g.Ja, (0, g.x)(function(e) {
                        this.Hb("Failed to set initial custom receivers: " + g.Lg(e))
                    }, this)));
                V7("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
                X7(this, new S7(this.i, d), !0)
            }
            this.g.ys(b)
        } else V7("setConnectedScreenStatus: no screen.")
    };
    g.h.pM = function(a) {
        this.ea() ? this.Hb("Setting connection data on disposed cast v2") : this.g ? this.g.ki(a) : this.Hb("Setting connection data without a session")
    };
    g.h.hN = function() {
        this.ea() ? this.Hb("Stopping session on disposed cast v2") : this.g ? (this.g.stop(), X7(this, null)) : V7("Stopping non-existing session")
    };
    g.h.requestSession = function() {
        chrome.cast.requestSession((0, g.x)(this.bz, this), (0, g.x)(this.QK, this))
    };
    g.h.T = function() {
        this.i.unsubscribe("onlineScreenChange", (0, g.x)(this.oB, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.o);
        g.db(g.w("yt.mdx.remote.debug.handlers_") || [], k7);
        g.rf(this.g);
        T7.Xa.T.call(this)
    };
    g.h.Hb = function(a) {
        o7("Controller", a)
    };
    g.h.cz = function(a, b) {
        this.g == a && (b || X7(this, null), this.N("yt-remote-cast2-session-change", b))
    };
    g.h.qK = function(a, b) {
        if (!this.ea())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), V7("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.g)
                        if (this.g.i.label != a.label) V7("onReceiverAction_: Stopping active receiver: " + this.g.i.friendlyName), this.g.stop();
                        else {
                            V7("onReceiverAction_: Casting to active receiver.");
                            this.g.l && this.N("yt-remote-cast2-session-change", this.g.l);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            X7(this,
                                new S7(this.i, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            X7(this, new P7(this.i, a, this.A));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            X7(this, new O7(this.i, a));
                            break;
                        default:
                            this.Hb("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.g && this.g.i.label == a.label ? this.g.stop() : this.Hb("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Hb("onReceiverAction_ called without receiver.")
    };
    g.h.II = function(a) {
        if (this.ea()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Hb("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.g ? this.g.i : null;
        if (!c || c.label != b.label) return this.Hb("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.g.l) return V7("Reselecting dial screen."),
                this.N("yt-remote-cast2-session-change", this.g.l), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Hb('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            X7(this, new P7(this.i, b, this.A))
        }
        b = this.g;
        b.D = a;
        return b.D.appState == chrome.cast.DialAppState.RUNNING ? new Promise((0, g.x)(b.VD, b, (b.D.extraData || {}).screenId || null)) : new Promise((0, g.x)(b.nq, b))
    };
    g.h.bz = function(a) {
        if (!this.ea()) {
            V7("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.g)
                    if (b.receiverType == chrome.cast.ReceiverType.CAST) V7("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), X7(this, new O7(this.i, b), !0);
                    else {
                        this.Hb("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.g.i,
                    d = O5(this.i.Hd(), c.label);
                d && H5(d, b.label) &&
                    c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (V7("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.rf(this.g), this.g = new O7(this.i, b), this.g.subscribe("sessionScreen", (0, g.x)(this.cz, this, this.g)), this.g.ki(null));
                this.g.xs(a)
            }
        }
    };
    g.h.gN = function() {
        return this.g ? this.g.pB() : null
    };
    g.h.QK = function(a) {
        this.ea() || (this.Hb("Failed to estabilish a session: " + g.Lg(a)), a.code != chrome.cast.ErrorCode.CANCEL && X7(this, null))
    };
    g.h.uK = function(a) {
        V7("Receiver availability updated: " + a);
        if (!this.ea()) {
            var b = W7(this);
            this.u = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            W7(this) != b && this.N("yt-remote-cast2-availability-change", W7(this))
        }
    };
    g.h.oB = function() {
        this.ea() || (this.l = Y7(this), V7("Updating custom receivers: " + g.Lg(this.l)), chrome.cast.setCustomReceivers(this.l, g.Ja, (0, g.x)(function() {
            this.Hb("Failed to set custom receivers.")
        }, this)), this.N("yt-remote-cast2-availability-change", W7(this)))
    };
    T7.prototype.setLaunchParams = T7.prototype.pM;
    T7.prototype.setConnectedScreenStatus = T7.prototype.oM;
    T7.prototype.stopSession = T7.prototype.hN;
    T7.prototype.getCastSession = T7.prototype.gN;
    T7.prototype.requestSession = T7.prototype.requestSession;
    T7.prototype.init = T7.prototype.init;
    T7.prototype.dispose = T7.prototype.dispose;
    var g8 = [];
    o8.prototype.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        p8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.g = a.trackData, this.Ke = a.hasPrevious, this.hasNext = a.hasNext, this.C = a.playerTime, this.A = a.playerTimeAt, this.o = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.F = a.loadedTime, this.l = a.liveIngestionTime, this.u = !isNaN(this.l))
    };
    o8.prototype.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    o8.prototype.getDuration = function() {
        return this.u ? this.D + q8(this) : this.D
    };
    o8.prototype.clone = function() {
        return new o8(u8(this))
    };
    g.t(x8, g.P);
    g.h = x8.prototype;
    g.h.play = function() {
        1 == this.g ? (this.i ? this.i.play(null, g.Ja, F8(this, "play")) : D8(this, "play"), C8(this, 1, s8(y8(this))), this.N("remotePlayerChange")) : A8(this, this.play)
    };
    g.h.pause = function() {
        1 == this.g ? (this.i ? this.i.pause(null, g.Ja, F8(this, "pause")) : D8(this, "pause"), C8(this, 2, s8(y8(this))), this.N("remotePlayerChange")) : A8(this, this.pause)
    };
    g.h.seekTo = function(a) {
        if (1 == this.g) {
            if (this.i) {
                var b = y8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                c.resumeState = 1 == b.playerState || 3 == b.playerState ? chrome.cast.media.ResumeState.PLAYBACK_START : chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ja, F8(this, "seekTo", {
                    newTime: a
                }))
            } else D8(this, "seekTo", {
                newTime: a
            });
            C8(this, 3, a);
            this.N("remotePlayerChange")
        } else A8(this, g.Sa(this.seekTo, a))
    };
    g.h.stop = function() {
        if (1 == this.g) {
            this.i ? this.i.stop(null, g.Ja, F8(this, "stopVideo")) : D8(this, "stopVideo");
            var a = y8(this);
            a.index = -1;
            a.videoId = "";
            p8(a);
            B8(this, a);
            this.N("remotePlayerChange")
        } else A8(this, this.stop)
    };
    g.h.setVolume = function(a, b) {
        if (1 == this.g) {
            var c = y8(this);
            if (this.l) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.l.setReceiverVolumeLevel(d, (0, g.x)(function() {
                        o7("CP", "set receiver volume: " + d)
                    }, this), (0, g.x)(function() {
                        this.Hb("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.l.setReceiverMuted(b, (0, g.x)(function() {
                    o7("CP", "set receiver muted: " + b)
                }, this), (0, g.x)(function() {
                    this.Hb("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                D8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            B8(this, c)
        } else A8(this, g.Sa(this.setVolume, a, b))
    };
    g.h.nA = function(a, b) {
        if (1 == this.g) {
            var c = y8(this),
                d = {
                    videoId: a
                };
            b && (c.g = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, d.style = g.Lg(b.style), g.fc(d, c.g));
            D8(this, "setSubtitlesTrack", d);
            B8(this, c)
        } else A8(this, g.Sa(this.nA, a, b))
    };
    g.h.setAudioTrack = function(a, b) {
        if (1 == this.g) {
            var c = b.getLanguageInfo().getId();
            D8(this, "setAudioTrack", {
                videoId: a,
                audioTrackId: c
            });
            var d = y8(this);
            d.audioTrackId = c;
            B8(this, d)
        } else A8(this, g.Sa(this.setAudioTrack, a, b))
    };
    g.h.playVideo = function(a, b, c, d, e, f, k) {
        var l = y8(this);
        c = c || 0;
        var m = {
            videoId: a,
            currentIndex: c
        };
        t8(l, a, c);
        g.Ea(b) && (r8(l, b), m.currentTime = b);
        g.Ea(d) && (m.listId = d);
        null != e && (m.playerParams = e);
        null != f && (m.clickTrackingParams = f);
        null != k && (m.locationInfo = g.Lg(k));
        D8(this, "setPlaylist", m);
        d || B8(this, l)
    };
    g.h.Dn = function(a, b) {
        if (1 == this.g) {
            if (a && b) {
                var c = y8(this);
                t8(c, a, b);
                B8(this, c)
            }
            D8(this, "previous")
        } else A8(this, g.Sa(this.Dn, a, b))
    };
    g.h.nextVideo = function(a, b) {
        if (1 == this.g) {
            if (a && b) {
                var c = y8(this);
                t8(c, a, b);
                B8(this, c)
            }
            D8(this, "next")
        } else A8(this, g.Sa(this.nextVideo, a, b))
    };
    g.h.dv = function() {
        1 == this.g ? D8(this, "dismissAutoplay") : A8(this, this.dv)
    };
    g.h.dispose = function() {
        if (3 != this.g) {
            var a = this.g;
            this.g = 3;
            this.N("proxyStateChange", a, this.g)
        }
        g.P.prototype.dispose.call(this)
    };
    g.h.T = function() {
        z8(this);
        this.o = null;
        this.u.clear();
        w8(this, null);
        g.P.prototype.T.call(this)
    };
    g.h.jt = function(a) {
        if ((a != this.g || 2 == a) && 3 != this.g && 0 != a) {
            var b = this.g;
            this.g = a;
            this.N("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.u.isEmpty();) b = a = this.u, 0 == b.g.length && (b.g = b.i, b.g.reverse(), b.i = []), a.g.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.h.nK = function(a, b) {
        this.N(a, b)
    };
    g.h.nI = function(a) {
        if (!a) this.Bk(null), w8(this, null);
        else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = y8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) o7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, B8(this, b)
        }
    };
    g.h.Bk = function(a) {
        o7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.D);
        if (this.i = a) this.i.addUpdateListener(this.D), E8(this), this.N("remotePlayerChange")
    };
    g.h.mI = function(a) {
        a ? (E8(this), this.N("remotePlayerChange")) : this.Bk(null)
    };
    g.h.Ps = function() {
        D8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.h.AI = function() {
        var a = k8();
        a && w8(this, a)
    };
    g.h.Hb = function(a) {
        o7("CP", a)
    };
    g.t(G8, g.P);
    g.h = G8.prototype;
    g.h.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.playerParams,
                f = b.clickTrackingParams,
                k = b.index,
                l = {
                    videoId: d
                },
                m = b.currentTime,
                n = b.locationInfo;
            g.Ea(m) && (l.currentTime = 5 >= m ? 0 : m);
            e && (l.playerParams = e);
            n && (l.locationInfo = n);
            f && (l.clickTrackingParams = f);
            c && (l.listId = c);
            g.Ea(k) && (l.currentIndex = k);
            c && (this.Oa.listId = c);
            this.Oa.videoId = d;
            this.Oa.index = k || 0;
            this.Oa.state = 3;
            r8(this.Oa, m);
            this.o = "UNSUPPORTED";
            H8("Connecting with setPlaylist and params: " + g.Lg(l));
            this.g.connect({
                method: "setPlaylist",
                params: g.Lg(l)
            }, a, V5())
        } else H8("Connecting without params"), this.g.connect({}, a, V5());
        Uqa(this)
    };
    g.h.dispose = function() {
        this.ea() || (this.N("beforeDispose"), I8(this, 3));
        g.P.prototype.dispose.call(this)
    };
    g.h.T = function() {
        J8(this);
        L8(this);
        K8(this);
        g.Np(this.C);
        this.C = NaN;
        g.Np(this.D);
        this.D = NaN;
        this.l = null;
        g.Sr(this.P);
        this.P.length = 0;
        this.g.dispose();
        g.P.prototype.T.call(this);
        this.o = this.A = this.i = this.Oa = this.g = null
    };
    g.h.lD = function() {
        this.Mh(2)
    };
    g.h.rI = function() {
        H8("Channel opened");
        this.I && (this.I = !1, K8(this), this.H = g.Lp((0, g.x)(function() {
            H8("Timing out waiting for a screen.");
            this.Mh(1)
        }, this), 15E3));
        vqa(Cqa(this.g), this.M)
    };
    g.h.oI = function() {
        H8("Channel closed");
        isNaN(this.u) ? Y5(!0) : Y5();
        this.dispose()
    };
    g.h.pI = function(a) {
        Y5();
        isNaN(this.Hj()) ? (H8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.I = !0, H8("Channel error: " + a + " with reconnection in " + this.Hj() + " ms"), I8(this, 2))
    };
    g.h.qI = function(a) {
        a.params ? H8("Received: action=" + a.action + ", params=" + g.Lg(a.params)) : H8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = C5(a.params.devices);
                this.i = (0, g.B)(a, function(c) {
                    return new F5(c)
                });
                a = !!g.Ya(this.i, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                O8(this, a);
                break;
            case "loungeScreenDisconnected":
                g.eb(this.i, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                O8(this, !1);
                break;
            case "remoteConnected":
                var b = new F5(C5(a.params.device));
                g.Ya(this.i, function(c) {
                    return b ? c.id == b.id : !1
                }) || kqa(this.i, b);
                break;
            case "remoteDisconnected":
                b = new F5(C5(a.params.device));
                g.eb(this.i, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                P8(this, a);
                break;
            case "nowPlaying":
                Xqa(this, a);
                break;
            case "onStateChange":
                Q8(this, a);
                break;
            case "onAdStateChange":
                Yqa(this, a);
                break;
            case "onVolumeChanged":
                Zqa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                Wqa(this, a);
                break;
            case "nowAutoplaying":
                $qa(this, a);
                break;
            case "autoplayDismissed":
                this.N("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.A = a.params.videoId || null;
                this.N("autoplayUpNext", this.A);
                break;
            case "onAutoplayModeChanged":
                this.o =
                    a.params.autoplayMode;
                this.N("autoplayModeChange", this.o);
                "DISABLED" == this.o && this.N("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                ara(this, a);
                break;
            case "requestAssistedSignIn":
                this.N("assistedSignInRequested", a.params.authCode);
                break;
            default:
                H8("Unrecognized action: " + a.action)
        }
    };
    g.h.cM = function() {
        if (this.l) {
            var a = this.l;
            this.l = null;
            this.Oa.videoId != a && M8(this, "getNowPlaying")
        }
    };
    g.h.bD = function() {
        var a = 3;
        this.ea() || (a = 0, isNaN(this.Hj()) ? g7(this.g) && isNaN(this.u) && (a = 1) : a = 2);
        return a
    };
    g.h.Mh = function(a) {
        H8("Disconnecting with " + a);
        J8(this);
        this.N("beforeDisconnect", a);
        1 == a && Y5();
        f7(this.g, a);
        this.dispose()
    };
    g.h.aD = function() {
        var a = this.Oa;
        this.l && (a = this.Oa.clone(), t8(a, this.l, a.index));
        return u8(a)
    };
    g.h.qM = function(a) {
        var b = new o8(a);
        b.videoId && b.videoId != this.Oa.videoId && (this.l = b.videoId, g.Np(this.C), this.C = g.Lp((0, g.x)(this.cM, this), 5E3));
        var c = [];
        this.Oa.listId == b.listId && this.Oa.videoId == b.videoId && this.Oa.index == b.index || c.push("remoteQueueChange");
        this.Oa.playerState == b.playerState && this.Oa.volume == b.volume && this.Oa.muted == b.muted && s8(this.Oa) == s8(b) && g.Lg(this.Oa.g) == g.Lg(b.g) || c.push("remotePlayerChange");
        this.Oa.reset(a);
        (0, g.A)(c, function(d) {
            this.N(d)
        }, this)
    };
    g.h.Pv = function() {
        var a = this.g.A.id,
            b = g.Ya(this.i, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.h.Hj = function() {
        var a = this.g;
        return a.i.isActive() ? a.i.i - (0, g.H)() : NaN
    };
    g.h.TC = function() {
        return this.o || "UNSUPPORTED"
    };
    g.h.UC = function() {
        return this.A || ""
    };
    g.h.ZM = function() {
        if (!isNaN(this.Hj())) {
            var a = this.g.i;
            g.go(a.g);
            a.start()
        }
    };
    g.h.jM = function(a, b) {
        M8(this, a, b);
        N8(this)
    };
    G8.prototype.subscribe = G8.prototype.subscribe;
    G8.prototype.unsubscribeByKey = G8.prototype.If;
    G8.prototype.getProxyState = G8.prototype.bD;
    G8.prototype.disconnect = G8.prototype.Mh;
    G8.prototype.getPlayerContextData = G8.prototype.aD;
    G8.prototype.setPlayerContextData = G8.prototype.qM;
    G8.prototype.getOtherConnectedRemoteId = G8.prototype.Pv;
    G8.prototype.getReconnectTimeout = G8.prototype.Hj;
    G8.prototype.getAutoplayMode = G8.prototype.TC;
    G8.prototype.getAutoplayVideoId = G8.prototype.UC;
    G8.prototype.reconnect = G8.prototype.ZM;
    G8.prototype.sendMessage = G8.prototype.jM;
    g.t(R8, s7);
    g.h = R8.prototype;
    g.h.Hd = function(a) {
        return this.Vc.$_gs(a)
    };
    g.h.contains = function(a) {
        return !!this.Vc.$_c(a)
    };
    g.h.get = function(a) {
        return this.Vc.$_g(a)
    };
    g.h.start = function() {
        this.Vc.$_st()
    };
    g.h.add = function(a, b, c) {
        this.Vc.$_a(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.Vc.$_r(a, b, c)
    };
    g.h.eo = function(a, b, c, d) {
        this.Vc.$_un(a, b, c, d)
    };
    g.h.T = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Vc.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Vc = null;
        s7.prototype.T.call(this)
    };
    g.h.dN = function() {
        this.N("screenChange")
    };
    g.h.SJ = function() {
        this.N("onlineScreenChange")
    };
    F7.prototype.$_st = F7.prototype.start;
    F7.prototype.$_gspc = F7.prototype.eN;
    F7.prototype.$_gsppc = F7.prototype.nB;
    F7.prototype.$_c = F7.prototype.contains;
    F7.prototype.$_g = F7.prototype.get;
    F7.prototype.$_a = F7.prototype.add;
    F7.prototype.$_un = F7.prototype.eo;
    F7.prototype.$_r = F7.prototype.remove;
    F7.prototype.$_gs = F7.prototype.Hd;
    F7.prototype.$_gos = F7.prototype.mB;
    F7.prototype.$_s = F7.prototype.subscribe;
    F7.prototype.$_ubk = F7.prototype.If;
    var l9 = null,
        k9 = !1,
        S8 = null,
        T8 = null,
        i9 = null,
        X8 = [];
    g.t(m9, g.D);
    g.h = m9.prototype;
    g.h.T = function() {
        g.D.prototype.T.call(this);
        this.o.stop();
        this.A.stop();
        this.I.stop();
        this.M();
        this.g.unsubscribe("proxyStateChange", this.Yy, this);
        this.g.unsubscribe("remotePlayerChange", this.Dk, this);
        this.g.unsubscribe("remoteQueueChange", this.xn, this);
        this.g.unsubscribe("autoplayUpNext", this.Cy, this);
        this.g.unsubscribe("previousNextChange", this.Vy, this);
        this.g.unsubscribe("nowAutoplaying", this.Ry, this);
        this.g.unsubscribe("autoplayDismissed", this.By, this);
        this.g = this.u = null
    };
    g.h.yx = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.g.g)
            if (p9(this)) {
                if (!y8(this.g).isAdPlaying() || "control_seek" != a) switch (a) {
                    case "control_toggle_play_pause":
                        1 == y8(this.g).playerState ? this.g.pause() : this.g.play();
                        break;
                    case "control_play":
                        this.g.play();
                        break;
                    case "control_pause":
                        this.g.pause();
                        break;
                    case "control_seek":
                        this.H.Pj(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        q9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        c = c[0], p9(this) && this.g.setAudioTrack(this.i.getVideoData(1).videoId,
                            c)
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c = this.i.getCurrentTime();
                    r9(this, 0 == c ? void 0 : c);
                    break;
                case "control_seek":
                    r9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    q9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    c = c[0], p9(this) && this.g.setAudioTrack(this.i.getVideoData(1).videoId, c)
            }
    };
    g.h.lI = function(a) {
        this.I.hD(a)
    };
    g.h.JM = function(a) {
        this.yx("control_subtitles_set_track", g.Yb(a) ? null : a)
    };
    g.h.AA = function() {
        var a = this.i.getOption("captions", "track");
        g.Yb(a) || q9(this, a)
    };
    g.h.Ny = function(a) {
        if (p9(this)) {
            this.g.unsubscribe("remotePlayerChange", this.Dk, this);
            var b = Math.round(a.volume);
            a = !!a.muted;
            var c = y8(this.g);
            if (b != c.volume || a != c.muted) this.g.setVolume(b, a), this.P.start();
            this.g.subscribe("remotePlayerChange", this.Dk, this)
        }
    };
    g.h.mJ = function() {
        g.Yb(this.C) || kra(this, this.C);
        this.D = !1
    };
    g.h.Yy = function(a, b) {
        this.A.stop();
        2 == b && this.zA()
    };
    g.h.Dk = function() {
        if (p9(this)) {
            this.o.stop();
            var a = y8(this.g);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.Km = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.Km = 0;
                    break;
                default:
                    this.u.Km = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    o9(this, new g.pC(8));
                    this.yA();
                    break;
                case 1085:
                case 3:
                    o9(this, new g.pC(9));
                    break;
                case 1083:
                case 0:
                    o9(this, new g.pC(2));
                    this.H.stop();
                    n9(this, this.i.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    o9(this, new g.pC(4));
                    break;
                case 2:
                    o9(this, new g.pC(4));
                    n9(this, s8(a));
                    break;
                case -1:
                    o9(this, new g.pC(64));
                    break;
                case -1E3:
                    o9(this, new g.pC(128, {
                        errorCode: "mdx.remoteerror",
                        message: "\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f."
                    }))
            }
            a = y8(this.g).g;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName &&
                a.kind == b.kind : 1) || (this.C = a, kra(this, a));
            a = y8(this.g); - 1 == a.volume || Math.round(this.i.getVolume()) == a.volume && this.i.isMuted() == a.muted || this.P.isActive() || this.ZA()
        } else jra(this)
    };
    g.h.Vy = function() {
        this.i.N("mdxpreviousnextchange")
    };
    g.h.xn = function() {
        p9(this) || jra(this)
    };
    g.h.pC = function() {
        this.g.dv()
    };
    g.h.Cy = function(a) {
        a && (a = g.Iq("/watch_queue_ajax", {
            method: "GET",
            Cc: {
                action_get_watch_queue_item: 1,
                video_id: a
            },
            onSuccess: (0, g.x)(this.sL, this)
        })) && (this.M = (0, g.x)(a.abort, a))
    };
    g.h.sL = function(a, b) {
        var c = new g.aB(g.X(this.i), {
            videoId: b.videoId,
            title: b.title,
            author: b.author,
            murlmq_webp: b.url
        });
        this.suggestion = c;
        this.i.N("mdxautoplayupnext", c)
    };
    g.h.Ry = function(a) {
        isNaN(a) || this.i.N("mdxnowautoplaying", a)
    };
    g.h.By = function() {
        this.i.N("mdxautoplaycanceled")
    };
    g.h.IF = function(a, b) {
        -1 == y8(this.g).playerState ? r9(this, a) : b && this.g.seekTo(a)
    };
    g.h.ZA = function() {
        if (p9(this)) {
            var a = y8(this.g);
            this.l.La(this.O);
            a.muted ? this.i.mute() : this.i.unMute();
            this.i.setVolume(a.volume);
            this.O = this.l.K(this.i, "onVolumeChange", this.Ny)
        }
    };
    g.h.yA = function() {
        this.o.stop();
        if (!this.g.ea()) {
            var a = y8(this.g);
            1 == a.playerState && o9(this, new g.pC(8));
            n9(this, s8(a));
            this.o.start()
        }
    };
    g.h.zA = function() {
        this.A.stop();
        this.o.stop();
        var a = this.g.o.getReconnectTimeout();
        2 == this.g.g && !isNaN(a) && this.A.start()
    };
    g.t(s9, g.W);
    s9.prototype.o = function() {
        E5("mdx-privacy-popup-cancel");
        this.l.hide()
    };
    s9.prototype.A = function() {
        E5("mdx-privacy-popup-confirm");
        this.l.hide()
    };
    g.t(t9, g.W);
    t9.prototype.u = function(a) {
        mra(this, a.state)
    };
    g.t(u9, g.NT);
    u9.prototype.I = function() {
        var a = this.l.getOption("remote", "receivers");
        a && 1 < a.length && !this.l.getOption("remote", "quickCast") ? (this.F = g.ub(a, this.A, this), g.OT(this, (0, g.B)(a, this.A)), a = this.l.getOption("remote", "currentReceiver"), this.re(this.A(a)), this.enable(!0)) : this.enable(!1)
    };
    u9.prototype.A = function(a) {
        return a.key
    };
    u9.prototype.qe = function(a) {
        return "cast-selector-receiver" == a ? "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c" : this.F[a].name
    };
    u9.prototype.Hc = function(a) {
        g.NT.prototype.Hc.call(this, a);
        this.l.setOption("remote", "currentReceiver", this.F[a]);
        this.o.ib()
    };
    g.t(v9, g.IK);
    g.h = v9.prototype;
    g.h.create = function() {
        fra(g.Jy(g.X(this.player)));
        this.o.push(g.Sp("yt-remote-before-disconnect", this.iI, this));
        this.o.push(g.Sp("yt-remote-connection-change", this.vK, this));
        this.o.push(g.Sp("yt-remote-receiver-availability-change", this.Wy, this));
        this.o.push(g.Sp("yt-remote-auto-connect", this.tK, this));
        this.o.push(g.Sp("yt-remote-receiver-resumed", this.sK, this));
        this.o.push(g.Sp("mdx-privacy-popup-confirm", this.TL, this));
        this.o.push(g.Sp("mdx-privacy-popup-cancel", this.SL, this));
        this.Wy()
    };
    g.h.load = function() {
        this.player.cancelPlayback();
        g.IK.prototype.load.call(this);
        this.u = new m9(this, this.player, this.g);
        var a = (a = ira()) ? a.currentTime : 0;
        var b = h9() ? new x8(c9(), void 0) : null;
        0 == a && b && (a = s8(y8(b)));
        0 != a && this.Jc(a);
        lra(this, this.lk, this.lk);
        g.NX(this.player.app, 6)
    };
    g.h.unload = function() {
        this.player.N("mdxautoplaycanceled");
        this.l = this.i;
        g.sf(this.u, this.g);
        this.g = this.u = null;
        g.IK.prototype.unload.call(this);
        g.NX(this.player.app, 5)
    };
    g.h.T = function() {
        g.Tp(this.o);
        g.IK.prototype.T.call(this)
    };
    g.h.Ye = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.u.yx.apply(this.u, [a].concat(g.fa(c)))
    };
    g.h.getAdState = function() {
        return this.Km
    };
    g.h.dD = function() {
        return this.loaded ? this.u.suggestion : null
    };
    g.h.Ke = function() {
        return this.g ? y8(this.g).Ke : !1
    };
    g.h.hasNext = function() {
        return this.g ? y8(this.g).hasNext : !1
    };
    g.h.Jc = function(a, b) {
        this.H = a || 0;
        this.player.N("progresssync", a, b)
    };
    g.h.getCurrentTime = function() {
        return this.H
    };
    g.h.getProgressState = function() {
        var a = y8(this.g),
            b = this.player.getVideoData();
        return {
            allowSeeking: g.Q(g.X(this.player).experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.ac() : !a.isAdPlaying() && this.player.ac(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.l + q8(a) : a.l,
            isAtLiveHead: 1 >= (a.u ? a.i + q8(a) : a.i) - this.getCurrentTime(),
            loaded: a.F,
            seekableEnd: a.u ? a.i + q8(a) : a.i,
            seekableStart: 0 < a.o ? a.o +
                q8(a) : a.o
        }
    };
    g.h.nextVideo = function() {
        this.g && this.g.nextVideo()
    };
    g.h.Dn = function() {
        this.g && this.g.Dn()
    };
    g.h.iI = function(a) {
        1 == a && (this.C = this.g ? y8(this.g) : null)
    };
    g.h.vK = function() {
        var a = h9() ? new x8(c9(), void 0) : null;
        if (a) {
            var b = this.l;
            this.loaded && this.unload();
            this.g = a;
            this.C = null;
            b.key != this.i.key && (this.l = b, this.load())
        } else g.rf(this.g), this.g = null, this.loaded && (this.unload(), (a = this.C) && a.videoId == this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, s8(a)));
        this.player.N("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.Wy = function() {
        this.A = [this.i].concat(gra());
        var a = d9() || this.i;
        w9(this, a);
        this.player.la("onMdxReceiversChange")
    };
    g.h.tK = function() {
        var a = d9();
        w9(this, a)
    };
    g.h.sK = function() {
        this.l = d9()
    };
    g.h.TL = function() {
        this.D = !0;
        k9 = !1;
        l9 && f9(l9, 1);
        l9 = null
    };
    g.h.SL = function() {
        this.D = !1;
        w9(this, this.i);
        this.l = this.i;
        k9 = !1;
        l9 = null;
        this.player.playVideo()
    };
    g.h.uc = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.A;
            case "currentReceiver":
                return b && ("cast-selector-receiver" == b.key ? m8() : w9(this, b)), this.loaded ? this.l : this.i;
            case "quickCast":
                return 2 == this.A.length && "cast-selector-receiver" == this.A[1].key ? (b && m8(), !0) : !1
        }
    };
    g.h.Ps = function() {
        this.g.Ps()
    };
    g.h.Kb = function() {
        return !1
    };
    g.h.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.dV.remote = v9;
})(_yt_player);