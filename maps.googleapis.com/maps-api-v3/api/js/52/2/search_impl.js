google.maps.__gjsload__('search_impl', function(_) {
    var ecb = function(a) {
            _.G.call(this, a)
        },
        gcb = function(a) {
            var b = _.sj.Ra;
            a = a.toArray();
            fcb || (fcb = {
                M: "sssM",
                O: ["ss"]
            });
            return b.call(_.sj, a, fcb)
        },
        hcb = function(a, b) {
            _.D(a.m, 3, b)
        },
        X$ = function(a) {
            _.G.call(this, a)
        },
        icb = function() {
            var a = _.yk,
                b = _.Mj;
            this.j = _.Kg;
            this.h = _.nl(_.tu, a, _.Wu + "/maps/api/js/LayersService.GetFeature", b)
        },
        lcb = function(a, b, c) {
            var d = _.mE(new icb);
            c.di = (0, _.Oa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.bEa(c, _.TK(b));
            var e = [];
            e.push(_.L(c, "click", (0, _.Oa)(jcb, null, a)));
            _.mb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.L(c, f, (0, _.Oa)(kcb, null, a, f)))
            });
            e.push(_.L(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        jcb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.T(e.m, 2) ? new _.cf(_.Dn(e.getLocation().m, 1), _.Dn(e.getLocation().m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.vl(e.m, 3, _.ZK, h);
                    f.fields[k.getKey()] = k.Ja()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        kcb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        mcb = function() {};
    _.B(ecb, _.G);
    ecb.prototype.Sb = function() {
        return _.Od(this.m, 2)
    };
    var fcb;
    _.B(X$, _.G);
    X$.prototype.getStatus = function() {
        return _.I(this.m, 1, -1)
    };
    X$.prototype.getLocation = function() {
        return _.J(this.m, 2, _.Sn)
    };
    icb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new ecb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        hcb(d, _.Qd(_.ae(this.j)));
        for (var e in a.parameters) {
            var f = _.Ld(d.m, 4, _.ZK);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = gcb(d);
        this.h(a, c, c);
        return a
    };
    icb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    mcb.prototype.yv = function(a) {
        if (_.Yi[15]) {
            var b = a.Dd,
                c = a.Dd = a.getMap();
            b && a.h && (a.o ? (b = b.__gm.j, b.set(b.get().tf(a.h))) : a.h && _.xEa(a.h, b) && (_.mb(a.j || [], _.Kf), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.Nm;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var w = _.A(d[u].split(":")),
                        y = w.next().value;
                    w = _.ma(w);
                    b.parameters[y] = w.join(":")
                }
                e && (b.spotlightDescription = new _.Is(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Tm(g));
                m && (b.travelMapRequest = new _.$t(m));
                h && (b.mapsApiLayer = new _.ul(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Yo(p));
                q && (b.overlayLayer = new _.tr(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.ht(t));
                b.darkLaunch = !!k;
                a.h =
                    b;
                a.o = a.get("renderOnBaseMap");
                a.o ? (a = c.__gm.j, a.set(a.get().Md(b))) : lcb(a, c, b);
                _.R(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Df("search_impl", new mcb);
});