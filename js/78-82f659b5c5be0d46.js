"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [78],
  {
    1143: function (e) {
      e.exports = function (e, t, n, r, a, o, s, i) {
        if (!e) {
          var u;
          if (void 0 === t)
            u = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, r, a, o, s, i],
              l = 0;
            (u = new Error(
              t.replace(/%s/g, function () {
                return c[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    3078: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      });
      var r = n(8146),
        a = n(7294);
      var o = function (e, t) {
          var n = (0, a.useRef)(!0);
          (0, a.useEffect)(function () {
            if (!n.current) return e();
            n.current = !1;
          }, t);
        },
        s = n(4775),
        i = n(6454),
        u = n(6852),
        c = Math.pow(2, 31) - 1;
      function l(e, t, n) {
        var r = n - Date.now();
        e.current =
          r <= c
            ? setTimeout(t, r)
            : setTimeout(function () {
                return l(e, t, n);
              }, c);
      }
      function d() {
        var e = (0, i.Z)(),
          t = (0, a.useRef)();
        return (
          (0, u.Z)(function () {
            return clearTimeout(t.current);
          }),
          (0, a.useMemo)(function () {
            var n = function () {
              return clearTimeout(t.current);
            };
            return {
              set: function (r, a) {
                void 0 === a && (a = 0),
                  e() &&
                    (n(),
                    a <= c
                      ? (t.current = setTimeout(r, a))
                      : l(t, r, Date.now() + a));
              },
              clear: n,
            };
          }, [])
        );
      }
      n(2092);
      n(8833);
      var f =
        "undefined" !== typeof n.g &&
        n.g.navigator &&
        "ReactNative" === n.g.navigator.product;
      "undefined" !== typeof document || f ? a.useLayoutEffect : a.useEffect,
        new WeakMap();
      var v = n(861),
        p = n(5893);
      const h = ["onKeyDown"];
      const m = a.forwardRef((e, t) => {
        let { onKeyDown: n } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, h);
        const [o] = (0, v.FT)(Object.assign({ tagName: "a" }, a)),
          s = (0, r.Z)((e) => {
            o.onKeyDown(e), null == n || n(e);
          });
        return (i = a.href) && "#" !== i.trim() && "button" !== a.role
          ? (0, p.jsx)("a", Object.assign({ ref: t }, a, { onKeyDown: n }))
          : (0, p.jsx)("a", Object.assign({ ref: t }, a, o, { onKeyDown: s }));
        var i;
      });
      m.displayName = "Anchor";
      var b = m,
        y = n(4184),
        g = n.n(y);
      function x() {
        return (
          (x = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          x.apply(this, arguments)
        );
      }
      var w = n(3366);
      n(1143);
      function N(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function j(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function E(e, t) {
        return Object.keys(t).reduce(function (n, r) {
          var o,
            s = n,
            i = s[N(r)],
            u = s[r],
            c = (0, w.Z)(s, [N(r), r].map(j)),
            l = t[r],
            d = (function (e, t, n) {
              var r = (0, a.useRef)(void 0 !== e),
                o = (0, a.useState)(t),
                s = o[0],
                i = o[1],
                u = void 0 !== e,
                c = r.current;
              return (
                (r.current = u),
                !u && c && s !== t && i(t),
                [
                  u ? e : s,
                  (0, a.useCallback)(
                    function (e) {
                      for (
                        var t = arguments.length,
                          r = new Array(t > 1 ? t - 1 : 0),
                          a = 1;
                        a < t;
                        a++
                      )
                        r[a - 1] = arguments[a];
                      n && n.apply(void 0, [e].concat(r)), i(e);
                    },
                    [n]
                  ),
                ]
              );
            })(u, i, e[l]),
            f = d[0],
            v = d[1];
          return x({}, c, (((o = {})[r] = f), (o[l] = v), o));
        }, e);
      }
      function S() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function C(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function k(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (S.__suppressDeprecationWarning = !0),
        (C.__suppressDeprecationWarning = !0),
        (k.__suppressDeprecationWarning = !0);
      var I = (0, n(6611).Z)("carousel-caption"),
        D = n(6792);
      const O = a.forwardRef(
        ({ as: e = "div", bsPrefix: t, className: n, ...r }, a) => {
          const o = g()(n, (0, D.vE)(t, "carousel-item"));
          return (0, p.jsx)(e, { ref: a, ...r, className: o });
        }
      );
      O.displayName = "CarouselItem";
      var T = O,
        _ = n(3439),
        R = n(3825),
        M = n(4509),
        Z = n(2785);
      const $ = {
        slide: !0,
        fade: !1,
        controls: !0,
        indicators: !0,
        indicatorLabels: [],
        defaultActiveIndex: 0,
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        wrap: !0,
        touch: !0,
        prevIcon: (0, p.jsx)("span", {
          "aria-hidden": "true",
          className: "carousel-control-prev-icon",
        }),
        prevLabel: "Previous",
        nextIcon: (0, p.jsx)("span", {
          "aria-hidden": "true",
          className: "carousel-control-next-icon",
        }),
        nextLabel: "Next",
      };
      const P = a.forwardRef((e, t) => {
        const {
            as: n = "div",
            bsPrefix: i,
            slide: u,
            fade: c,
            controls: l,
            indicators: f,
            indicatorLabels: v,
            activeIndex: h,
            onSelect: m,
            onSlide: y,
            onSlid: x,
            interval: w,
            keyboard: N,
            onKeyDown: j,
            pause: S,
            onMouseOver: C,
            onMouseOut: k,
            wrap: I,
            touch: O,
            onTouchStart: T,
            onTouchMove: $,
            onTouchEnd: P,
            prevIcon: L,
            prevLabel: A,
            nextIcon: K,
            nextLabel: F,
            variant: U,
            className: W,
            children: V,
            ...X
          } = E(e, { activeIndex: "onSelect" }),
          B = (0, D.vE)(i, "carousel"),
          H = (0, D.SC)(),
          q = (0, a.useRef)(null),
          [z, G] = (0, a.useState)("next"),
          [J, Q] = (0, a.useState)(!1),
          [Y, ee] = (0, a.useState)(!1),
          [te, ne] = (0, a.useState)(h || 0);
        (0, a.useEffect)(() => {
          Y ||
            h === te ||
            (q.current ? G(q.current) : G((h || 0) > te ? "next" : "prev"),
            u && ee(!0),
            ne(h || 0));
        }, [h, Y, te, u]),
          (0, a.useEffect)(() => {
            q.current && (q.current = null);
          });
        let re,
          ae = 0;
        (0, _.Ed)(V, (e, t) => {
          ++ae, t === h && (re = e.props.interval);
        });
        const oe = (0, s.Z)(re),
          se = (0, a.useCallback)(
            (e) => {
              if (Y) return;
              let t = te - 1;
              if (t < 0) {
                if (!I) return;
                t = ae - 1;
              }
              (q.current = "prev"), null == m || m(t, e);
            },
            [Y, te, m, I, ae]
          ),
          ie = (0, r.Z)((e) => {
            if (Y) return;
            let t = te + 1;
            if (t >= ae) {
              if (!I) return;
              t = 0;
            }
            (q.current = "next"), null == m || m(t, e);
          }),
          ue = (0, a.useRef)();
        (0, a.useImperativeHandle)(t, () => ({
          element: ue.current,
          prev: se,
          next: ie,
        }));
        const ce = (0, r.Z)(() => {
            !document.hidden &&
              (function (e) {
                if (!e || !e.style || !e.parentNode || !e.parentNode.style)
                  return !1;
                const t = getComputedStyle(e);
                return (
                  "none" !== t.display &&
                  "hidden" !== t.visibility &&
                  "none" !== getComputedStyle(e.parentNode).display
                );
              })(ue.current) &&
              (H ? se() : ie());
          }),
          le = "next" === z ? "start" : "end";
        o(() => {
          u || (null == y || y(te, le), null == x || x(te, le));
        }, [te]);
        const de = `${B}-item-${z}`,
          fe = `${B}-item-${le}`,
          ve = (0, a.useCallback)(
            (e) => {
              (0, M.Z)(e), null == y || y(te, le);
            },
            [y, te, le]
          ),
          pe = (0, a.useCallback)(() => {
            ee(!1), null == x || x(te, le);
          }, [x, te, le]),
          he = (0, a.useCallback)(
            (e) => {
              if (N && !/input|textarea/i.test(e.target.tagName))
                switch (e.key) {
                  case "ArrowLeft":
                    return e.preventDefault(), void (H ? ie(e) : se(e));
                  case "ArrowRight":
                    return e.preventDefault(), void (H ? se(e) : ie(e));
                }
              null == j || j(e);
            },
            [N, j, se, ie, H]
          ),
          me = (0, a.useCallback)(
            (e) => {
              "hover" === S && Q(!0), null == C || C(e);
            },
            [S, C]
          ),
          be = (0, a.useCallback)(
            (e) => {
              Q(!1), null == k || k(e);
            },
            [k]
          ),
          ye = (0, a.useRef)(0),
          ge = (0, a.useRef)(0),
          xe = d(),
          we = (0, a.useCallback)(
            (e) => {
              (ye.current = e.touches[0].clientX),
                (ge.current = 0),
                "hover" === S && Q(!0),
                null == T || T(e);
            },
            [S, T]
          ),
          Ne = (0, a.useCallback)(
            (e) => {
              e.touches && e.touches.length > 1
                ? (ge.current = 0)
                : (ge.current = e.touches[0].clientX - ye.current),
                null == $ || $(e);
            },
            [$]
          ),
          je = (0, a.useCallback)(
            (e) => {
              if (O) {
                const t = ge.current;
                Math.abs(t) > 40 && (t > 0 ? se(e) : ie(e));
              }
              "hover" === S &&
                xe.set(() => {
                  Q(!1);
                }, w || void 0),
                null == P || P(e);
            },
            [O, S, se, ie, xe, w, P]
          ),
          Ee = null != w && !J && !Y,
          Se = (0, a.useRef)();
        (0, a.useEffect)(() => {
          var e, t;
          if (!Ee) return;
          const n = H ? se : ie;
          return (
            (Se.current = window.setInterval(
              document.visibilityState ? ce : n,
              null != (e = null != (t = oe.current) ? t : w) ? e : void 0
            )),
            () => {
              null !== Se.current && clearInterval(Se.current);
            }
          );
        }, [Ee, se, ie, oe, w, ce, H]);
        const Ce = (0, a.useMemo)(
          () =>
            f &&
            Array.from({ length: ae }, (e, t) => (e) => {
              null == m || m(t, e);
            }),
          [f, ae, m]
        );
        return (0, p.jsxs)(n, {
          ref: ue,
          ...X,
          onKeyDown: he,
          onMouseOver: me,
          onMouseOut: be,
          onTouchStart: we,
          onTouchMove: Ne,
          onTouchEnd: je,
          className: g()(
            W,
            B,
            u && "slide",
            c && `${B}-fade`,
            U && `${B}-${U}`
          ),
          children: [
            f &&
              (0, p.jsx)("div", {
                className: `${B}-indicators`,
                children: (0, _.UI)(V, (e, t) =>
                  (0, p.jsx)(
                    "button",
                    {
                      type: "button",
                      "data-bs-target": "",
                      "aria-label":
                        null != v && v.length ? v[t] : `Slide ${t + 1}`,
                      className: t === te ? "active" : void 0,
                      onClick: Ce ? Ce[t] : void 0,
                      "aria-current": t === te,
                    },
                    t
                  )
                ),
              }),
            (0, p.jsx)("div", {
              className: `${B}-inner`,
              children: (0, _.UI)(V, (e, t) => {
                const n = t === te;
                return u
                  ? (0, p.jsx)(Z.Z, {
                      in: n,
                      onEnter: n ? ve : void 0,
                      onEntered: n ? pe : void 0,
                      addEndListener: R.Z,
                      children: (t, r) =>
                        a.cloneElement(e, {
                          ...r,
                          className: g()(
                            e.props.className,
                            n && "entered" !== t && de,
                            ("entered" === t || "exiting" === t) && "active",
                            ("entering" === t || "exiting" === t) && fe
                          ),
                        }),
                    })
                  : a.cloneElement(e, {
                      className: g()(e.props.className, n && "active"),
                    });
              }),
            }),
            l &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (I || 0 !== h) &&
                    (0, p.jsxs)(b, {
                      className: `${B}-control-prev`,
                      onClick: se,
                      children: [
                        L,
                        A &&
                          (0, p.jsx)("span", {
                            className: "visually-hidden",
                            children: A,
                          }),
                      ],
                    }),
                  (I || h !== ae - 1) &&
                    (0, p.jsxs)(b, {
                      className: `${B}-control-next`,
                      onClick: ie,
                      children: [
                        K,
                        F &&
                          (0, p.jsx)("span", {
                            className: "visually-hidden",
                            children: F,
                          }),
                      ],
                    }),
                ],
              }),
          ],
        });
      });
      (P.displayName = "Carousel"), (P.defaultProps = $);
      var L = Object.assign(P, { Caption: I, Item: T });
    },
    3439: function (e, t, n) {
      n.d(t, {
        Ed: function () {
          return o;
        },
        UI: function () {
          return a;
        },
        XW: function () {
          return s;
        },
      });
      var r = n(7294);
      function a(e, t) {
        let n = 0;
        return r.Children.map(e, (e) => (r.isValidElement(e) ? t(e, n++) : e));
      }
      function o(e, t) {
        let n = 0;
        r.Children.forEach(e, (e) => {
          r.isValidElement(e) && t(e, n++);
        });
      }
      function s(e, t) {
        return r.Children.toArray(e).some(
          (e) => r.isValidElement(e) && e.type === t
        );
      }
    },
  },
]);
