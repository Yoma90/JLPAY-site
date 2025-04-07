(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [47],
  {
    861: function (e, s, a) {
      "use strict";
      a.d(s, {
        FT: function () {
          return n;
        },
      });
      var l = a(7294),
        c = a(5893);
      const i = ["as", "disabled"];
      function n({
        tagName: e,
        disabled: s,
        href: a,
        target: l,
        rel: c,
        role: i,
        onClick: n,
        tabIndex: r = 0,
        type: t,
      }) {
        e || (e = null != a || null != l || null != c ? "a" : "button");
        const d = { tagName: e };
        if ("button" === e) return [{ type: t || "button", disabled: s }, d];
        const o = (l) => {
          (s ||
            ("a" === e &&
              (function (e) {
                return !e || "#" === e.trim();
              })(a))) &&
            l.preventDefault(),
            s ? l.stopPropagation() : null == n || n(l);
        };
        return (
          "a" === e && (a || (a = "#"), s && (a = void 0)),
          [
            {
              role: null != i ? i : "button",
              disabled: void 0,
              tabIndex: s ? void 0 : r,
              href: a,
              target: "a" === e ? l : void 0,
              "aria-disabled": s || void 0,
              rel: "a" === e ? c : void 0,
              onClick: o,
              onKeyDown: (e) => {
                " " === e.key && (e.preventDefault(), o(e));
              },
            },
            d,
          ]
        );
      }
      const r = l.forwardRef((e, s) => {
        let { as: a, disabled: l } = e,
          r = (function (e, s) {
            if (null == e) return {};
            var a,
              l,
              c = {},
              i = Object.keys(e);
            for (l = 0; l < i.length; l++)
              (a = i[l]), s.indexOf(a) >= 0 || (c[a] = e[a]);
            return c;
          })(e, i);
        const [t, { tagName: d }] = n(
          Object.assign({ tagName: a, disabled: l }, r)
        );
        return (0, c.jsx)(d, Object.assign({}, r, t, { ref: s }));
      });
      r.displayName = "Button";
    },
    4184: function (e, s) {
      var a;
      !(function () {
        "use strict";
        var l = {}.hasOwnProperty;
        function c() {
          for (var e = [], s = 0; s < arguments.length; s++) {
            var a = arguments[s];
            if (a) {
              var i = typeof a;
              if ("string" === i || "number" === i) e.push(a);
              else if (Array.isArray(a)) {
                if (a.length) {
                  var n = c.apply(null, a);
                  n && e.push(n);
                }
              } else if ("object" === i) {
                if (
                  a.toString !== Object.prototype.toString &&
                  !a.toString.toString().includes("[native code]")
                ) {
                  e.push(a.toString());
                  continue;
                }
                for (var r in a) l.call(a, r) && a[r] && e.push(r);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((c.default = c), (e.exports = c))
          : void 0 ===
              (a = function () {
                return c;
              }.apply(s, [])) || (e.exports = a);
      })();
    },
    5646: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/nos-tarifs",
        function () {
          return a(8645);
        },
      ]);
    },
    6060: function (e, s, a) {
      "use strict";
      a.d(s, {
        U: function () {
          return i;
        },
      });
      var l = a(5893),
        c = (a(7294), a(1431)),
        i = function () {
          return (0, l.jsx)("section", {
            className: "section pt-5 bg-cs-35 mt-5",
            id: "contacts",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsxs)("div", {
                className: "row",
                children: [
                  (0, l.jsx)("div", {
                    className: " col-md-5 d-none d-lg-block ",
                    children: (0, l.jsx)("img", {
                      alt: "",
                      "data-aos": "flip-left",
                      src: "images/Groupe 4867@2x.png",
                      className: "img-fluid position-absolute",
                      style: { width: "380px", left: "5em", top: "-8em" },
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "col-md-12 col-xl-7 col-lg-7 justify-content-center text-lg-left text-center",
                    "data-aos": "flip-right",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "col",
                        children: [
                          (0, l.jsxs)("h4", {
                            className:
                              "fw-bold text-center text-lg-left titleJoin",
                            children: [
                              "Rejoignez-nous maintenant",
                              (0, l.jsx)("span", {
                                style: { color: "#d9534f" },
                                children: "_",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("p", {
                            className: "textJoin Poppins blue-propos",
                            children: [
                              (0, l.jsx)("b", {
                                children:
                                  "Alors, qu\u2019attendez-vous ? Connectez-vous \xe0 l'application mobile et",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("b", {
                                children:
                                  "Inscrivez-vous pour b\xe9n\xe9ficier du compte mobile tout-en-un 1 d\xe8s aujourd\u2019hui",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "col d-lg-inline-flex",
                        children: [
                          (0, l.jsx)("p", {
                            className: "textInfo text-push-ci mr-3",
                            style: {
                              fontSize: "23px",
                              position: "relative",
                              bottom: "14px",
                            },
                            children: "push :",
                          }),
                          (0, l.jsxs)("ul", {
                            className:
                              "social-icons justify-content-center reseaux",
                            style: { position: "relative", bottom: "8px" },
                            children: [
                              (0, l.jsx)("li", {
                                className: "social-icons-facebook",
                                children: (0, l.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.facebook.com/pushci",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, l.jsx)("i", {
                                    children: (0, l.jsx)("img", {
                                      src: "/images/fb.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("li", {
                                className: "social-icons-twitter",
                                children: (0, l.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.instagram.com/push_ci/",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, l.jsx)("i", {
                                    children: (0, l.jsx)("img", {
                                      src: "/images/inst.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("li", {
                                className: "social-icons-google",
                                children: (0, l.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.linkedin.com/company/push-ci/",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, l.jsx)("i", {
                                    children: (0, l.jsx)("img", {
                                      src: "/images/link.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("li", {
                                className: "social-icons-youtube",
                                children: (0, l.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://twitter.com/pushCi",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, l.jsx)("i", {
                                    children: (0, l.jsx)("img", {
                                      src: "/images/tw.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)(c.Z, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    3265: function (e, s, a) {
      "use strict";
      a.d(s, {
        J: function () {
          return r;
        },
      });
      var l = a(5893),
        c = a(5005),
        i = a(1664),
        n = a.n(i),
        r = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("section", {
                className: "findagencyweb",
                children: (0, l.jsx)("div", {
                  className: "container block-find-agency",
                  children: (0, l.jsxs)("div", {
                    className: "row firstBlock",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "col-lg-7 col-md-7 col-sm-12 pr-0 div-find find-us-img",
                        children: (0, l.jsx)("img", {
                          className: "web-version",
                          "data-aos": "zoom-in",
                          width: "101.9%",
                          src: "/images/man-with-card.png",
                          alt: "",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "col-lg-5 col-md-5 col-sm-12 find-us div-find",
                        children: (0, l.jsxs)("div", {
                          "data-aos": "zoom-in",
                          className: "FindAgency-texts",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "d-none d-md-block",
                              children: [
                                (0, l.jsxs)("p", {
                                  className: "text-white titleFind",
                                  children: [
                                    "Nos agences push r\xe9volutionnent ",
                                    (0, l.jsx)("br", {}),
                                    " l\u2019usage des Cartes Bancaires !",
                                  ],
                                }),
                                (0, l.jsxs)("p", {
                                  className:
                                    "text-white text-justify second-p-findagency",
                                  children: [
                                    "Gr\xe2ce \xe0 votre num\xe9ro de t\xe9l\xe9phone (Compte ",
                                    (0, l.jsx)("br", {}),
                                    " push), retirez GRATUITEMENT votre argent,",
                                    (0, l.jsx)("br", {}),
                                    " avec ou sans votre carte, dans le point push ",
                                    (0, l.jsx)("br", {}),
                                    " le plus proche de chez vous !",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "d-noned-block d-md-none FindAgency-texts-mobile",
                              children: [
                                (0, l.jsx)("p", {
                                  className:
                                    "text-white titleFind titleFind-mobile",
                                  children:
                                    "Nos agences push r\xe9volutionnent l\u2019usage des Cartes Bancaires !",
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-white textFind-mobile",
                                  children:
                                    "Gr\xe2ce \xe0 votre num\xe9ro de t\xe9l\xe9phone (Compte push), retirez GRATUITEMENT votre argent, avec ou sans votre carte, dans le point push le plus proche de chez vous !",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("h5", {
                              className: "text-white widthdraw",
                              children: [
                                "Retrait & Transfert ",
                                (0, l.jsx)("span", {
                                  className: "amount",
                                  children: " 0",
                                }),
                                (0, l.jsx)("sup", { children: " Fcfa" }),
                              ],
                            }),
                            (0, l.jsx)(n(), {
                              href: "/trouver-une-agence",
                              children: (0, l.jsx)(c.Z, {
                                size: "sm",
                                variant: "light",
                                className: "find-agency d-none",
                                children: "Trouver une agence",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("section", {
                className: "findagencymobile",
                children: (0, l.jsx)("div", {
                  className: "container block-find-agency",
                  children: (0, l.jsxs)("div", {
                    className: "row firstBlock",
                    children: [
                      (0, l.jsx)("div", {
                        className: "col-sm-12 pr-0 div-find find-us-img",
                        children: (0, l.jsx)("img", {
                          "data-aos": "zoom-in",
                          width: "100%",
                          src: "/images/IJ4A5980-mobile.png",
                          alt: "",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: "col-sm-12 find-us div-find",
                        children: (0, l.jsxs)("div", {
                          "data-aos": "zoom-in",
                          className: "FindAgency-texts",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "d-none d-md-block",
                              children: [
                                (0, l.jsxs)("p", {
                                  className: "text-white titleFind",
                                  children: [
                                    "Nos agences push r\xe9volutionnent ",
                                    (0, l.jsx)("br", {}),
                                    " l\u2019usage des Cartes Bancaires !",
                                  ],
                                }),
                                (0, l.jsxs)("p", {
                                  className:
                                    "text-white text-justify second-p-findagency",
                                  children: [
                                    "Gr\xe2ce \xe0 votre num\xe9ro de t\xe9l\xe9phone (Compte ",
                                    (0, l.jsx)("br", {}),
                                    " push), retirez GRATUITEMENT votre argent,",
                                    (0, l.jsx)("br", {}),
                                    " avec ou sans votre carte, dans le point push ",
                                    (0, l.jsx)("br", {}),
                                    " le plus proche de chez vous !",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "d-noned-block d-md-none FindAgency-texts-mobile",
                              children: [
                                (0, l.jsx)("p", {
                                  className:
                                    "text-white titleFind titleFind-mobile",
                                  children:
                                    "Nos agences push r\xe9volutionnent l\u2019usage des Cartes Bancaires !",
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-white textFind-mobile",
                                  children:
                                    "Gr\xe2ce \xe0 votre num\xe9ro de t\xe9l\xe9phone (Compte push), retirez GRATUITEMENT votre argent, avec ou sans votre carte, dans le point push le plus proche de chez vous !",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("h5", {
                              className: "text-white widthdraw",
                              children: [
                                "Retrait & Transfert ",
                                (0, l.jsx)("span", {
                                  className: "amount",
                                  children: " 0",
                                }),
                                (0, l.jsx)("sup", { children: " Fcfa" }),
                              ],
                            }),
                            (0, l.jsx)(n(), {
                              href: "/trouver-une-agence",
                              children: (0, l.jsx)(c.Z, {
                                size: "sm",
                                variant: "light",
                                className: "find-agency ",
                                children: "Trouver une agence",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
    8645: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return j;
          },
        });
      var l = a(5893),
        c = a(811),
        i = a(1995),
        n = a(5433),
        r = a(6060),
        t = a(682),
        d = a(1608),
        o = a(1555),
        m = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("section", {
                className: "price mb-4 firstTarifs",
                children: [
                  (0, l.jsxs)(t.Z, {
                    children: [
                      (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)(o.Z, {
                          children: (0, l.jsx)("div", {
                            className: "text-center title-tarifs blue",
                            style: { fontSize: "80px" },
                            children: "Nos Tarifs",
                          }),
                        }),
                      }),
                      (0, l.jsx)(d.Z, {
                        className: "d-none",
                        children: (0, l.jsx)(o.Z, {
                          children: (0, l.jsxs)("div", {
                            className: "text-center title-frais blue",
                            children: [
                              "Taux de change ",
                              (0, l.jsx)("i", { children: "(Frais inclus)" }),
                              " : ",
                              (0, l.jsx)("span", {
                                className: "avenir-black",
                                children: "1 EUR = 680 Fcfa",
                              }),
                              " ",
                              (0, l.jsx)("i", {
                                children: "(Soit 3,8% de frais)",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)(o.Z, {
                          md: { span: 5, offset: 5 },
                          children: (0, l.jsxs)("div", {
                            className: "d-flex row-card-panelys",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "img-carte",
                                "data-aos": "flip-left",
                                children: [
                                  (0, l.jsx)("img", {
                                    width: "170px",
                                    src: "/images/push_CARD_01.png",
                                    className: "tarifs-carte-virtuelle",
                                    alt: "",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "blue",
                                    children: (0, l.jsx)("h6", {
                                      className:
                                        "avenir-black blue text-center tarifs-title-carte-virtuelle",
                                      style: { fontSize: "18px" },
                                      children: "La Virtuelle push",
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "img-carte physique-carte",
                                "data-aos": "flip-left",
                                children: [
                                  (0, l.jsx)("img", {
                                    width: "170px",
                                    src: "/images/push_CARD_02.png",
                                    className: "tarifs-carte-push",
                                    alt: "",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "green",
                                    children: (0, l.jsx)("h6", {
                                      className:
                                        "avenir-black blue text-center tarifs-title-carte-push",
                                      style: { fontSize: "18px" },
                                      children: "La carte push",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(t.Z, {
                    className: "tarifs-web-bloc",
                    children: (0, l.jsxs)("div", {
                      className: "bloc-price",
                      children: [
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Prix de la carte",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 blue fact group-text-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "5 000",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Retrait en Point de vente push",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 blue fact group-text-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "1",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "Avenir percent ml-1",
                                    children: "%",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "1",
                                  }),
                                  " ",
                                  (0, l.jsx)("span", {
                                    className: "Avenir percent ml-1",
                                    children: "%",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Transfert de push vers push",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 blue fact group-text-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "Achat de cr\xe9dit T\xe9l\xe9phonique",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 blue fact group-text-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Paiement TPE local (GIM UEMOA)",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 blue fact group-text-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "Paiement TPE/Internet International (VISA)",
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "col-5 blue fact text-center ajust-single-amount-web",
                                children: (0, l.jsxs)("div", {
                                  className:
                                    "position-relative crossbar-single",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "180",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "ml-2 fa fa-asterisk",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Retrait DAB local (BNI)",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 blue fact group-text-dashed",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "-",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "0",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Retrait DAB local (GIM UEMOA)",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 blue fact group-text-dashed",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "-",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "500",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Retrait DAB international (VISA)",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 blue fact group-text-dashed",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "-",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 green fact amount-green",
                                children: (0, l.jsxs)("div", {
                                  className: "position-relative crossbar-duo",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "180",
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "ml-2 fa fa-asterisk",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "Rechargement via d\xe9p\xf4t d'esp\xe8ces en banque",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-7 blue fact text-center",
                                children: [
                                  (0, l.jsxs)("span", {
                                    className: "amount un-pourcent-frais",
                                    children: [
                                      "0",
                                      (0, l.jsx)("span", {
                                        className: "Avenir percent ml-1",
                                        children: "%",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "frais-timbre",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "font-weight-bold",
                                        children: "+ 100 Fcfa",
                                      }),
                                      " de frais de timbre",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Rechargement via virement bancaire",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-7 blue fact text-center",
                                children: (0, l.jsxs)("span", {
                                  className: "amount un-pourcent-frais",
                                  children: [
                                    "0",
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent ml-1",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Rechargement Mobile Money",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-7 blue fact text-center",
                                children: (0, l.jsxs)("span", {
                                  className: "amount un-pourcent-frais",
                                  children: [
                                    "1",
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent ml-1",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "D\xe9p\xf4t d'esp\xe8ces en point push",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-7 blue fact text-center",
                                children: (0, l.jsxs)("span", {
                                  className: "amount un-pourcent-frais",
                                  children: [
                                    "0",
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent ml-1",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Transfert de push vers Mobile Money",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-7 blue fact text-center",
                                children: [
                                  (0, l.jsxs)("span", {
                                    className: "amount un-pourcent-frais",
                                    children: [
                                      "1,5",
                                      (0, l.jsx)("span", {
                                        className: "Avenir percent ml-1",
                                        children: "%",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "frais-timbre",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "font-weight-bold",
                                        children: "+ 150 Fcfa",
                                      }),
                                      " de frais fixes",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Frais mensuels",
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "col-3 blue last-fact frais-mensuels-1 text-center",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "0 Fcfa / mois",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "col-3 green last-fact frais-mensuels-2",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "490 Fcfa / mois",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "Personnalisation de la carte",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 blue fact group-text-dashed",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "-",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "1 000",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "Livraison express (moins de 2h) de la carte \xe0 Abidjan",
                              }),
                              (0, l.jsx)("div", {
                                className: "col-3 blue fact group-text-dashed",
                                children: (0, l.jsx)("span", {
                                  className: "amount",
                                  children: "-",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-3 green fact amount-green",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "1 000",
                                  }),
                                  " ",
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "Frais de rejet pour fonds insuffisants",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-7 blue fact text-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount un-pourcent-frais",
                                    children: "250",
                                  }),
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children: "R\xe9initialisation de code",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-7 blue fact text-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount un-pourcent-frais",
                                    children: "0",
                                  }),
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "Fcfa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "price-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsx)("div", {
                                className: "col-5 label-avantage",
                                children:
                                  "R\xe9ception de virement bancaire via RIB",
                              }),
                              (0, l.jsxs)("div", {
                                className: "col-7 blue fact text-center pl-1",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "amount un-pourcent-frais",
                                    children: "0",
                                  }),
                                  (0, l.jsx)("sup", {
                                    className: "currency",
                                    children: "%",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "details-row mt-4",
                          children: (0, l.jsxs)(d.Z, {
                            children: [
                              (0, l.jsxs)(o.Z, {
                                md: "1",
                                children: [
                                  " ",
                                  (0, l.jsx)("i", {
                                    className: "fa fa-asterisk green",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(o.Z, {
                                className: "describe-fees",
                                children: (0, l.jsxs)("div", {
                                  className: "blue text-left",
                                  children: [
                                    "Offre promotionnelle : les frais push sont offerts. ",
                                    (0, l.jsx)("br", {}),
                                    "Sur les op\xe9rations hors XOF, un taux de change est applicable et consultable depuis l\u2019application mobile. ",
                                    (0, l.jsx)("br", {}),
                                    "Les \xe9tablissements tiers peuvent parfois appliquer des frais suppl\xe9mentaires.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("section", {
                className: "price mb-4 secondTarifs",
                children: [
                  (0, l.jsxs)(t.Z, {
                    children: [
                      (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)(o.Z, {
                          children: (0, l.jsx)("div", {
                            className: "text-center title-tarifs blue",
                            children: "Nos Tarifs",
                          }),
                        }),
                      }),
                      (0, l.jsx)(d.Z, {
                        className: "d-none",
                        children: (0, l.jsx)(o.Z, {
                          children: (0, l.jsxs)("div", {
                            className: "text-center title-frais blue",
                            children: [
                              "Taux de change ",
                              (0, l.jsx)("i", { children: "(Frais inclus)" }),
                              " : ",
                              (0, l.jsx)("span", {
                                className: "avenir-black",
                                children: "1 EUR = 680 Fcfa",
                              }),
                              " ",
                              (0, l.jsx)("i", {
                                children: "(Soit 3,8% de frais)",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)(o.Z, {
                          md: { span: 5, offset: 5 },
                          children: (0, l.jsx)("div", {
                            className: "d-flex row-card-panelys",
                            children: (0, l.jsxs)("div", {
                              className: "img-carte",
                              children: [
                                (0, l.jsx)("img", {
                                  width: "170px",
                                  className: "img-carte-virtuelle",
                                  src: "/images/push_CARD_02.png",
                                  alt: "",
                                }),
                                (0, l.jsx)("div", {
                                  className: "blue",
                                  children: (0, l.jsx)("h6", {
                                    className: "avenir-black blue",
                                    children: "La Carte push",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(t.Z, {
                    className: "tarifs-mobile-bloc-2",
                    children: (0, l.jsx)("div", {
                      className: "bloc-price",
                      children: (0, l.jsxs)("div", {
                        className: "price-container",
                        children: [
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-4 label-avantage",
                                  children: "Prix de la carte",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 green fact",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "5 000",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Retrait en Point de vente push",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "1",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent ml-1",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Transfert de push vers push",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Achat de cr\xe9dit T\xe9l\xe9phonique",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Paiement TPE local (GIM-UEMOA)",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-4 label-avantage",
                                  children:
                                    "Paiement TPE/Internet International (VISA)",
                                }),
                                (0, l.jsx)("div", {
                                  className: "col-6 green fact mt-4",
                                  children: (0, l.jsxs)("div", {
                                    className:
                                      "position-relative crossbar-single",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "amount killes",
                                        children: (0, l.jsx)("small", {
                                          children: "180",
                                        }),
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "currency",
                                        children: "Fcfa",
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "ml-2 fa fa-asterisk",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Retrait DAB local (BNI)",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Retrait au distributeur (DAB GIM-UEMOA)",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 green fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "500",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-4 label-avantage",
                                  children: "Retrait DAB international (VISA)",
                                }),
                                (0, l.jsx)("div", {
                                  className: "col-6 green fact mt-4",
                                  children: (0, l.jsxs)("div", {
                                    className:
                                      "position-relative crossbar-single",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "amount killes",
                                        children: (0, l.jsx)("small", {
                                          children: "180",
                                        }),
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "currency",
                                        children: "Fcfa",
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "ml-2 fa fa-asterisk",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Rechargement via d\xe9p\xf4t d'esp\xe8ces en banque",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 green mt-4",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "amount",
                                          children: "0",
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "Avenir percent",
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "frais-timbre",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "font-weight-bold",
                                          children: "+ 100 Fcfa",
                                        }),
                                        " de frais de timbre",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Rechargement via virement bancaire",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 green mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Rechargement via Mobile Money",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 green mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "1",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "D\xe9p\xf4t d'esp\xe8ces en point push",
                                }),
                                (0, l.jsx)("div", {
                                  className: "col-6 green mt-4",
                                  children: (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "amount",
                                        children: "0",
                                      }),
                                      (0, l.jsx)("span", {
                                        className: "Avenir percent",
                                        children: "%",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Transfert de push vers Mobile Money",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 green mt-4",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "mb-1",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "amount",
                                          children: "1,5",
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "Avenir percent",
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("span", {
                                      className: "frais-timbre",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "font-weight-bold",
                                          children: "+ 150 Fcfa",
                                        }),
                                        " de frais fixes",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-8px" },
                                  children: "Frais mensuels",
                                }),
                                (0, l.jsx)("div", {
                                  className: "col-6 green last-fact",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "490 Fcfa / mois",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-11px" },
                                  children: "Personnalisation de la carte",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 green fact mt-3 ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "1 000",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-16px" },
                                  children:
                                    "Livraison express (moins de 2h) de la carte \xe0 Abidjan",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 green fact mt-4 ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "1 000",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-16px" },
                                  children:
                                    "Frais de rejet pour fonds insuffisant",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 green fact ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "250",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-16px" },
                                  children: "R\xe9initialisation de code",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 green fact ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "0",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-16px" },
                                  children:
                                    "R\xe9ception de virement bancaire via RIB",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 green fact ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount killes",
                                      children: (0, l.jsx)("small", {
                                        children: "0",
                                      }),
                                    }),
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "details-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsxs)(o.Z, {
                                  md: "1",
                                  sm: "1",
                                  xs: "1",
                                  children: [
                                    " ",
                                    (0, l.jsx)("i", {
                                      className: "fa fa-asterisk green",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)(o.Z, {
                                  md: "11",
                                  sm: "11",
                                  xs: "10",
                                  className: "describe-fees",
                                  children: (0, l.jsxs)("div", {
                                    className: "blue text-left",
                                    children: [
                                      "Offre promotionnelle : les frais push sont offerts. ",
                                      (0, l.jsx)("br", {}),
                                      "Sur les op\xe9rations hors XOF, un taux de change est applicable et consultable depuis l\u2019application mobile. ",
                                      (0, l.jsx)("br", {}),
                                      "Les \xe9tablissements tiers peuvent parfois appliquer des frais suppl\xe9mentaires.",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)(t.Z, {
                    children: (0, l.jsx)(d.Z, {
                      children: (0, l.jsx)(o.Z, {
                        md: { span: 5, offset: 5 },
                        children: (0, l.jsx)("div", {
                          className: "d-flex row-card-panelys",
                          children: (0, l.jsxs)("div", {
                            className: "img-carte",
                            children: [
                              (0, l.jsx)("img", {
                                width: "170px",
                                className: "img-carte-virtuelle",
                                src: "/images/push_CARD_01.png",
                                alt: "",
                              }),
                              (0, l.jsx)("div", {
                                className: "blue",
                                children: (0, l.jsx)("h6", {
                                  className: "avenir-black blue",
                                  children: "La Virtuelle push",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)(t.Z, {
                    className: "tarifs-mobile-bloc-1",
                    children: (0, l.jsx)("div", {
                      className: "bloc-price",
                      children: (0, l.jsxs)("div", {
                        className: "price-container",
                        children: [
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Prix de la carte",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact mt-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-8px" },
                                  children: "Retrait en Point de vente push",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact mt-3",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Transfert de push vers push",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact mt-3",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Achat de cr\xe9dit T\xe9l\xe9phonique",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Paiement TPE/Internet local (GIM-UEMOA)",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Paiement TPE/Internet International (VISA)",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-6 blue new-fact mt-4 ajust-details-to-left-2",
                                  children: (0, l.jsxs)("div", {
                                    className: "position-relative crossbar-duo",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "amount killes",
                                        children: (0, l.jsx)("small", {
                                          children: "180",
                                        }),
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "currency",
                                        children: "Fcfa",
                                      }),
                                      (0, l.jsx)("sup", {
                                        className: "ml-2 fa fa-asterisk",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Retrait au distributeur (DAB BNI)",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-4 blue fact ajust-details-to-left-1",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "-",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Retrait au distributeur (DAB GIM-UEMOA)",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-4 blue fact ajust-details-to-left-1",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "-",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Retrait DAB international (VISA)",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-4 blue fact ajust-details-to-left-1",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "-",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Rechargement via d\xe9p\xf4t d'esp\xe8ces en banque",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 blue mt-4",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "amount",
                                          children: "0",
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "Avenir percent",
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "frais-timbre",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "font-weight-bold",
                                          children: "+ 100 Fcfa",
                                        }),
                                        " de frais de timbre",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Rechargement via virement bancaire",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 blue mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Rechargement Mobile Money",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 blue mt-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "1",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "Avenir percent",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "D\xe9p\xf4t d'esp\xe8ces en point push",
                                }),
                                (0, l.jsx)("div", {
                                  className: "col-6 blue",
                                  children: (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "amount",
                                        children: "0",
                                      }),
                                      (0, l.jsx)("span", {
                                        className: "Avenir percent",
                                        children: "%",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Transfert de push vers Mobile Money",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 blue mt-4",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "amount",
                                          children: "1,5",
                                        }),
                                        (0, l.jsx)("span", {
                                          className: "Avenir percent",
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("span", {
                                      className: "frais-timbre",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: "font-weight-bold",
                                          children: "+ 150 Fcfa",
                                        }),
                                        " de frais fixes",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Frais mensuels",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-4 blue fact",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children: "Personnalisation de la carte",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-4 blue fact mt-4 ajust-details-to-left-1",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "-",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  children:
                                    "Livraison (moins de 2h) de la carte \xe0 Abidjan",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "col-4 blue fact mt-4 ajust-details-to-left-1",
                                  children: (0, l.jsx)("span", {
                                    className: "amount",
                                    children: "-",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-18px" },
                                  children:
                                    "Frais de rejet pour fonds insuffisants",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 blue fact ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "250",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-18px" },
                                  children: "R\xe9initialisation de code",
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "col-5 blue fact ajust-details-to-left-2",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "250",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "Fcfa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "price-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsx)("div", {
                                  className: "col-5 label-avantage",
                                  style: { marginTop: "-18px" },
                                  children:
                                    "R\xe9ception de virement bancaire via RIB",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "col-6 blue",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "amount",
                                      children: "0",
                                    }),
                                    " ",
                                    (0, l.jsx)("sup", {
                                      className: "currency",
                                      children: "%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "details-row mt-4",
                            children: (0, l.jsxs)(d.Z, {
                              children: [
                                (0, l.jsxs)(o.Z, {
                                  md: "1",
                                  sm: "1",
                                  xs: "1",
                                  children: [
                                    " ",
                                    (0, l.jsx)("i", {
                                      className: "fa fa-asterisk green",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)(o.Z, {
                                  md: "11",
                                  sm: "11",
                                  xs: "10",
                                  className: "describe-fees",
                                  children: (0, l.jsxs)("div", {
                                    className: "blue text-left",
                                    children: [
                                      "Offre promotionnelle : les frais push sont offerts. ",
                                      (0, l.jsx)("br", {}),
                                      "Sur les op\xe9rations hors XOF, un taux de change est applicable et consultable depuis l\u2019application mobile. ",
                                      (0, l.jsx)("br", {}),
                                      "Les \xe9tablissements tiers peuvent parfois appliquer des frais suppl\xe9mentaires.",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        x = a(3265),
        h = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className:
                  "bg-white bg-hero-propos bg-nos-tarifs-mobiles home-top",
                children: [
                  (0, l.jsx)(i.R, {}),
                  (0, l.jsx)(m, {}),
                  (0, l.jsx)("div", {
                    className: "bloc-tarifs-find-agency",
                    children: (0, l.jsx)(x.J, {}),
                  }),
                ],
              }),
              (0, l.jsx)(n.B, {}),
              (0, l.jsx)(r.U, {}),
            ],
          });
        },
        j = h;
      h.getLayout = function (e) {
        return (0, l.jsx)(c.g, { children: e });
      };
    },
    5005: function (e, s, a) {
      "use strict";
      var l = a(4184),
        c = a.n(l),
        i = a(7294),
        n = a(861),
        r = a(6792),
        t = a(5893);
      const d = i.forwardRef(
        (
          {
            as: e,
            bsPrefix: s,
            variant: a,
            size: l,
            active: i,
            className: d,
            ...o
          },
          m
        ) => {
          const x = (0, r.vE)(s, "btn"),
            [h, { tagName: j }] = (0, n.FT)({ tagName: e, ...o }),
            u = j;
          return (0, t.jsx)(u, {
            ...h,
            ...o,
            ref: m,
            className: c()(
              d,
              x,
              i && "active",
              a && `${x}-${a}`,
              l && `${x}-${l}`,
              o.href && o.disabled && "disabled"
            ),
          });
        }
      );
      (d.displayName = "Button"),
        (d.defaultProps = { variant: "primary", active: !1, disabled: !1 }),
        (s.Z = d);
    },
    1555: function (e, s, a) {
      "use strict";
      var l = a(4184),
        c = a.n(l),
        i = a(7294),
        n = a(6792),
        r = a(5893);
      const t = i.forwardRef((e, s) => {
        const [
          { className: a, ...l },
          { as: i = "div", bsPrefix: t, spans: d },
        ] = (function ({ as: e, bsPrefix: s, className: a, ...l }) {
          s = (0, n.vE)(s, "col");
          const i = (0, n.pi)(),
            r = (0, n.zG)(),
            t = [],
            d = [];
          return (
            i.forEach((e) => {
              const a = l[e];
              let c, i, n;
              delete l[e],
                "object" === typeof a && null != a
                  ? ({ span: c, offset: i, order: n } = a)
                  : (c = a);
              const o = e !== r ? `-${e}` : "";
              c && t.push(!0 === c ? `${s}${o}` : `${s}${o}-${c}`),
                null != n && d.push(`order${o}-${n}`),
                null != i && d.push(`offset${o}-${i}`);
            }),
            [
              { ...l, className: c()(a, ...t, ...d) },
              { as: e, bsPrefix: s, spans: t },
            ]
          );
        })(e);
        return (0, r.jsx)(i, {
          ...l,
          ref: s,
          className: c()(a, !d.length && t),
        });
      });
      (t.displayName = "Col"), (s.Z = t);
    },
    682: function (e, s, a) {
      "use strict";
      var l = a(4184),
        c = a.n(l),
        i = a(7294),
        n = a(6792),
        r = a(5893);
      const t = i.forwardRef(
        ({ bsPrefix: e, fluid: s, as: a = "div", className: l, ...i }, t) => {
          const d = (0, n.vE)(e, "container"),
            o = "string" === typeof s ? `-${s}` : "-fluid";
          return (0, r.jsx)(a, {
            ref: t,
            ...i,
            className: c()(l, s ? `${d}${o}` : d),
          });
        }
      );
      (t.displayName = "Container"),
        (t.defaultProps = { fluid: !1 }),
        (s.Z = t);
    },
    1608: function (e, s, a) {
      "use strict";
      var l = a(4184),
        c = a.n(l),
        i = a(7294),
        n = a(6792),
        r = a(5893);
      const t = i.forwardRef(
        ({ bsPrefix: e, className: s, as: a = "div", ...l }, i) => {
          const t = (0, n.vE)(e, "row"),
            d = (0, n.pi)(),
            o = (0, n.zG)(),
            m = `${t}-cols`,
            x = [];
          return (
            d.forEach((e) => {
              const s = l[e];
              let a;
              delete l[e],
                null != s && "object" === typeof s
                  ? ({ cols: a } = s)
                  : (a = s);
              const c = e !== o ? `-${e}` : "";
              null != a && x.push(`${m}${c}-${a}`);
            }),
            (0, r.jsx)(a, { ref: i, ...l, className: c()(s, t, ...x) })
          );
        }
      );
      (t.displayName = "Row"), (s.Z = t);
    },
    6792: function (e, s, a) {
      "use strict";
      a.d(s, {
        SC: function () {
          return m;
        },
        pi: function () {
          return d;
        },
        vE: function () {
          return t;
        },
        zG: function () {
          return o;
        },
      });
      var l = a(7294);
      a(5893);
      const c = ["xxl", "xl", "lg", "md", "sm", "xs"],
        i = l.createContext({
          prefixes: {},
          breakpoints: c,
          minBreakpoint: "xs",
        }),
        { Consumer: n, Provider: r } = i;
      function t(e, s) {
        const { prefixes: a } = (0, l.useContext)(i);
        return e || a[s] || s;
      }
      function d() {
        const { breakpoints: e } = (0, l.useContext)(i);
        return e;
      }
      function o() {
        const { minBreakpoint: e } = (0, l.useContext)(i);
        return e;
      }
      function m() {
        const { dir: e } = (0, l.useContext)(i);
        return "rtl" === e;
      }
    },
  },
  function (e) {
    e.O(0, [107, 774, 888, 179], function () {
      return (s = 5646), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
