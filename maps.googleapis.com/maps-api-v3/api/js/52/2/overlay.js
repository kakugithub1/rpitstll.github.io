google.maps.__gjsload__('overlay', function(_) {
    var Kw = function(a) {
            this.h = a
        },
        qna = function() {},
        Lw = function(a) {
            a.To = a.To || new qna;
            return a.To
        },
        rna = function(a) {
            this.Fa = new _.Gi(function() {
                var b = a.To;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.In && a.onAdd) a.onAdd();
                        b.In = !0;
                        a.draw()
                    }
                } else {
                    if (b.In)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.In = !1
                }
            }, 0)
        },
        sna = function(a, b) {
            function c() {
                return _.Hi(e.Fa)
            }
            var d = Lw(a),
                e = d.Bm;
            e || (e = d.Bm = new rna(a));
            _.mb(d.Sa || [], _.Kf);
            var f = d.cb = d.cb || new _.Qu,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.pt = d.pt || new Kw(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Sa = [_.L(a, "panes_changed", c), _.L(g, "zoom_changed", c), _.L(g, "offset_changed", c), _.L(b, "projection_changed", c), _.L(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.cg && (_.R(b, "Ox"), _.P(b, 148440))
        },
        wna = function(a) {
            if (a) {
                var b = a.getMap();
                if (tna(a) !== b && b && b instanceof _.cg) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new una(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.wa;
                        var e = new Mw(b, d);
                        d.Xa(e);
                        c.overlayLayer = e;
                        vna(a);
                        wna(a)
                    })
                }
            }
        },
        vna = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.o.Yd(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        tna = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        una = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.o = c;
            this.j = !1;
            _.R(this.map, "Ox");
            _.P(this.map, 148440);
            c.pd(this)
        },
        xna = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Mw = function(a, b) {
            this.C = a;
            this.o = b;
            this.h = null;
            this.j = []
        };
    _.Ra(Kw, _.O);
    Kw.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.we(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Nw = {};
    _.Ra(rna, _.O);
    Nw.pd = function(a) {
        if (a) {
            var b = a.getMap();
            (Lw(a).Us || null) !== b && (b && sna(a, b), Lw(a).Us = b)
        }
    };
    Nw.Yd = function(a) {
        var b = Lw(a),
            c = b.cb;
        c && c.unbindAll();
        (c = b.pt) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Sa && _.mb(b.Sa, _.Kf);
        b.Sa = null;
        b.Bm && (b.Bm.Fa.Mc(), b.Bm = null);
        delete Lw(a).Us
    };
    var Ow = {};
    una.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Mw.prototype.dispose = function() {};
    Mw.prototype.Zb = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.lq(this.C, this.o, function() {});
        k.Zb(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, xna(b, k), b.draw()
    };
    Mw.prototype.pd = function(a) {
        this.j.push(a);
        this.h && xna(a, this.h);
        this.o.refresh()
    };
    Mw.prototype.Yd = function(a) {
        _.pb(this.j, a)
    };
    Ow.pd = wna;
    Ow.Yd = vna;
    _.Df("overlay", {
        sq: function(a) {
            if (a) {
                (0, Nw.Yd)(a);
                (0, Ow.Yd)(a);
                var b = a.getMap();
                b && (b instanceof _.cg ? (0, Ow.pd)(a) : (0, Nw.pd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Pq(a, {
                Vd: function(b) {
                    _.Dm(b.event.Na)
                },
                xc: function(b) {
                    return _.sq(b)
                },
                ph: function(b) {
                    return _.tq(b)
                },
                fd: function(b) {
                    return _.tq(b)
                },
                Ac: function(b) {
                    return _.uq(b)
                }
            }).Ei(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Hf);
            a.addEventListener("contextmenu", _.Hf);
            a.addEventListener("dblclick", _.Hf);
            a.addEventListener("mousedown",
                _.Hf);
            a.addEventListener("mousemove", _.Hf);
            a.addEventListener("MSPointerDown", _.Hf);
            a.addEventListener("pointerdown", _.Hf);
            a.addEventListener("touchstart", _.Hf);
            a.addEventListener("wheel", _.Hf)
        }
    });
});