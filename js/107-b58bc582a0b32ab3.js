"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [107],
  {
    1431: function (e, a, s) {
      var l = s(5893);
      a.Z = function () {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className:
              "d-flex justify-content-center justify-content-lg-start divStore my-4",
            style: { position: "relative", bottom: "14%", right: "1%" },
            children: [
              (0, l.jsx)("a", {
                className: "d-inline-flex mx-3",
                href: "https://apps.apple.com/ng/app/push-ci/id1601308812",
                children: (0, l.jsx)("img", {
                  alt: "JL PAY App Store",
                  src: "/images/app-store.png",
                  className: "img-fluid",
                }),
              }),
              (0, l.jsx)("a", {
                className: "d-inline-flex mx-2",
                href: "https://play.google.com/store/apps/details?id=com.panelyscash.app",
                children: (0, l.jsx)("img", {
                  alt: "JL PAY Play Store",
                  src: "/images/google-play-store.png",
                  className: "img-fluid",
                }),
              }),
            ],
          }),
        });
      };
    },
    5433: function (e, a, s) {
      s.d(a, {
        B: function () {
          return t;
        },
      });
      var l = s(5893),
        r = (s(1664), s(7294));
      function n(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, l = new Array(a); s < a; s++) l[s] = e[s];
        return l;
      }
      function i(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var s =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != s) {
              var l,
                r,
                n = [],
                i = !0,
                t = !1;
              try {
                for (
                  s = s.call(e);
                  !(i = (l = s.next()).done) &&
                  (n.push(l.value), !a || n.length !== a);
                  i = !0
                );
              } catch (c) {
                (t = !0), (r = c);
              } finally {
                try {
                  i || null == s.return || s.return();
                } finally {
                  if (t) throw r;
                }
              }
              return n;
            }
          })(e, a) ||
          (function (e, a) {
            if (!e) return;
            if ("string" === typeof e) return n(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(s);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return n(e, a);
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var t = function () {
        var e = i(r.useState(0), 2);
        e[0], e[1];
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "section bg-white pb-5 mb-5 mt-n5 mt-lg-5 section-faq",
            id: "block-faq",
            children: (0, l.jsxs)("div", {
              className: "container faqBlock",
              children: [
                (0, l.jsxs)("p", {
                  className: " text-center Poppins font-weight-bold blue",
                  children: [
                    "Des questions ? Nous vous r\xe9pondons",
                    (0, l.jsx)("span", {
                      style: { color: "#d9534f" },
                      children: "_",
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "row",
                  id: "faq",
                  children: (0, l.jsx)("div", {
                    className: "col-md-10 col-lg-8 mx-auto px-lg-5",
                    children: (0, l.jsxs)("div", {
                      className:
                        "accordion accordion-alternate arrow-right px-lg-5",
                      id: "popularTopics",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "card border-bottom border-top-0",
                          children: [
                            (0, l.jsx)("div", {
                              className: "card-header",
                              id: "heading1",
                              children: (0, l.jsx)("h5", {
                                className: "mb-0",
                                children: (0, l.jsx)("a", {
                                  href: "#",
                                  className: " collapsed Poppins blue",
                                  "data-toggle": "collapse",
                                  "data-target": "#collapse1",
                                  "aria-expanded": "false",
                                  "aria-controls": "collapse1",
                                  children: (0, l.jsx)("span", {
                                    className:
                                      "h5 font-weight-normal faq-questions",
                                    children: "Comment devenir client JL PAY ?",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              id: "collapse1",
                              className: "collapse",
                              "aria-labelledby": "heading1",
                              "data-parent": "#popularTopics",
                              children: (0, l.jsxs)("div", {
                                className: "card-body",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "faq-paragraph",
                                    children:
                                      "Pour ouvrir un compte JL PAY plusieurs possibilit\xe9s s'offrent \xe0 vous:",
                                  }),
                                  (0, l.jsx)("p", {
                                    children: (0, l.jsxs)("ol", {
                                      children: [
                                        (0, l.jsx)("li", {
                                          className: "ol-title text-green",
                                          children:
                                            "En t\xe9l\xe9chargeant l'application mobile JL PAY disponible sur Playstore et Appstore",
                                        }),
                                        (0, l.jsxs)("ul", {
                                          className: "ul-parent",
                                          children: [
                                            (0, l.jsx)("li", {
                                              className: "li-ul",
                                              children:
                                                "Saisir son num\xe9ro de t\xe9l\xe9phone et choisir votre code JL PAY \xe0 5 chiffres,",
                                            }),
                                            (0, l.jsx)("li", {
                                              className: "li-ul",
                                              children:
                                                "Joindre une photo de votre pi\xe8ce d'identit\xe9 en cours de validit\xe9 en recto et verso",
                                            }),
                                            (0, l.jsx)("li", {
                                              className: "li-ul",
                                              children:
                                                "Renseigner vos informations personnelles",
                                            }),
                                            (0, l.jsx)("li", {
                                              className: "li-ul",
                                              children:
                                                "Valider votre inscription",
                                            }),
                                            (0, l.jsx)("li", {
                                              className: "li-ul",
                                              children:
                                                "Choisir une carte Virtuelle ou Physique pour commencer votre exp\xe9rience JL PAY",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)("li", {
                                          className: "ol-title text-green",
                                          children:
                                            "En se rendant dans un point de vente JL PAY muni d'une pi\xe8ce d'identit\xe9 en cours de validit\xe9",
                                        }),
                                        (0, l.jsx)("p", {
                                          className: "faq-paragraph",
                                          children:
                                            "(Se r\xe9f\xe9rer \xe0 la premi\xe8re \xe9tape)",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "card border-bottom border-top-0",
                          children: [
                            (0, l.jsx)("div", {
                              className: "card-header",
                              id: "heading1",
                              children: (0, l.jsx)("h5", {
                                className: "mb-0",
                                children: (0, l.jsx)("a", {
                                  href: "#",
                                  className: "collapsed Poppins blue",
                                  "data-toggle": "collapse",
                                  "data-target": "#collapse3",
                                  "aria-expanded": "false",
                                  "aria-controls": "collapse3",
                                  children: (0, l.jsx)("span", {
                                    className:
                                      "h5 font-weight-normal faq-questions",
                                    children:
                                      "Comment recharger une carte JL PAY ?",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              id: "collapse3",
                              className: "collapse",
                              "aria-labelledby": "heading1",
                              "data-parent": "#popularTopics",
                              children: (0, l.jsxs)("div", {
                                className: "card-body",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "faq-paragraph",
                                    children:
                                      "Avec JL PAY, vous avez la possibilit\xe9 de recharger votre carte \xe0 travers 3 canaux:",
                                  }),
                                  (0, l.jsxs)("ol", {
                                    children: [
                                      (0, l.jsxs)("li", {
                                        className: "ol-title",
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children:
                                              "Depuis l'application mobile JL PAY",
                                          }),
                                          " pour un rechargement via n'importe quel r\xe9seau mobile money.",
                                        ],
                                      }),
                                      (0, l.jsxs)("p", {
                                        className: "faq-paragraph",
                                        children: [
                                          "En cliquant sur le menu ",
                                          (0, l.jsx)("b", {
                                            children:
                                              "\xab\xa0Recharger une carte\xa0\xbb,",
                                          }),
                                          " s\xe9lectionnez votre op\xe9rateur puis votre num\xe9ro de t\xe9l\xe9phone mobile money suivi du montant souhait\xe9 pour le rechargement en suivant les instructions de votre op\xe9rateur mobile money.",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        className: "ol-title mb-3",
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children: "Depuis le *755#",
                                          }),
                                          (0, l.jsx)("b", { children: "," }),
                                          " valable quelque soit votre op\xe9rateur t\xe9l\xe9phonique, vous choisissez l'option ",
                                          (0, l.jsx)("b", {
                                            children:
                                              "1- Rechargement carte JL PAY,",
                                          }),
                                          " s\xe9lectionnez votre op\xe9rateur puis vottre num\xe9ro de t\xe9l\xe9phone mobile money suivi du montant souhait\xe9 pour le rechargement en suivant les instructions de votre op\xe9rateur mobile money.",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        className: "ol-title",
                                        children: [
                                          "Dans tous nos ",
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children: "points de vente JL PAY",
                                          }),
                                          " muni de votre t\xe9l\xe9phone.",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "card border-bottom border-top-0",
                          children: [
                            (0, l.jsx)("div", {
                              className: "card-header",
                              id: "heading1",
                              children: (0, l.jsx)("h5", {
                                className: "mb-0",
                                children: (0, l.jsx)("a", {
                                  href: "#",
                                  className:
                                    "collapsed Poppins font-weight-normal blue",
                                  "data-toggle": "collapse",
                                  "data-target": "#collapse4",
                                  "aria-expanded": "false",
                                  "aria-controls": "collapse4",
                                  children: (0, l.jsx)("span", {
                                    className:
                                      "h5 font-weight-normal faq-questions",
                                    children:
                                      "Comment retirer de l\u2019argent avec une carte JL PAY ?",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              id: "collapse4",
                              className: "collapse",
                              "aria-labelledby": "heading1",
                              "data-parent": "#popularTopics",
                              children: (0, l.jsxs)("div", {
                                className: "card-body",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "faq-paragraph",
                                    children:
                                      "Pour les retraits, plusieurs choix s'offrent \xe0 vous:",
                                  }),
                                  (0, l.jsxs)("ol", {
                                    children: [
                                      (0, l.jsxs)("li", {
                                        className: "ol-title mb-3",
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children:
                                              "En vous rendant dans l'un de nos points de vente JL PAY ",
                                          }),
                                          "muni de votre t\xe9l\xe9phone quelque soit la carte JL PAY que vous poss\xe9dez",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        className: "ol-title",
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children:
                                              "Dans tous les guichets automatiques",
                                          }),
                                          "  (uniquement pour les d\xe9tenteurs de la Carte JL PAY)",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "card border-bottom border-top-0",
                          children: [
                            (0, l.jsx)("div", {
                              className: "card-header",
                              id: "heading1",
                              children: (0, l.jsx)("h5", {
                                className: "mb-0",
                                children: (0, l.jsx)("a", {
                                  href: "#",
                                  className: "collapsed Poppins blue",
                                  "data-toggle": "collapse",
                                  "data-target": "#collapse5",
                                  "aria-expanded": "false",
                                  "aria-controls": "collapse5",
                                  children: (0, l.jsx)("span", {
                                    className:
                                      "h5 font-weight-normal faq-questions",
                                    children: "Comment nous contacter ?",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              id: "collapse5",
                              className: "collapse",
                              "aria-labelledby": "heading1",
                              "data-parent": "#popularTopics",
                              children: (0, l.jsxs)("div", {
                                className: "card-body",
                                children: [
                                  (0, l.jsx)("p", {
                                    className: "faq-paragraph",
                                    children:
                                      "Notre centre de relation client est disponible 7j/7",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    children: [
                                      (0, l.jsxs)("li", {
                                        className: "li-ul",
                                        children: [
                                          "Par t\xe9l\xe9phone au ",
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children: "+225 25 2000 9339",
                                          }),
                                          " du lundi au vendredi de 08h \xe0 20h et le samedi de 08h \xe0 15h.",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        className: "li-ul",
                                        children: [
                                          "Par messagerie WhatsApp au ",
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children: "+225 07 49 71 71 71",
                                          }),
                                          " du lundi au vendredi de 08h \xe0 20h, le samedi de 08h \xe0 18h et le dimanche de 10h \xe0 18h.",
                                        ],
                                      }),
                                      (0, l.jsxs)("li", {
                                        className: "li-ul",
                                        children: [
                                          "Sur notre page Facebook ",
                                          (0, l.jsx)("span", {
                                            className: "text-green",
                                            children: (0, l.jsx)("a", {
                                              href: "https://www.facebook.com/pushci/",
                                              target: "_blank",
                                              rel: "noreferrer",
                                              children: "JL PAY",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "faq-paragraph",
                                    children:
                                      "Nos \xe9quipes vous r\xe9pondront avec plaisir et dans les plus brefs d\xe9lais.",
                                  }),
                                ],
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
          }),
        });
      };
    },
    1995: function (e, a, s) {
      s.d(a, {
        R: function () {
          return c;
        },
      });
      var l = s(5893),
        r = s(1664),
        n = s.n(r),
        i = s(1163),
        t = function () {
          var e = (0, i.useRouter)(),
            a = function (a) {
              return e.pathname === a;
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("nav", {
                className: "primary-menu navbar navbar-expand-lg",
                children: (0, l.jsx)("div", {
                  id: "header-nav",
                  className: "collapse navbar-collapse",
                  children: (0, l.jsxs)("ul", {
                    className: "navbar-nav mr-auto",
                    children: [
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/home.html",
                          className: "".concat(a("/home.html") && "active-nav"),
                          className: "".concat(a("/") && "active-nav"),
                          children: "Accueil",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/a-propos.html",
                          className: "".concat(a("/a-propos") && "active-nav"),
                          children: "A propos",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/nos-tarifs.html",
                          className: "".concat(
                            a("/nos-tarifs") && "active-nav"
                          ),
                          children: "Nos tarifs",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/devenir-distributeur.html",
                          className: "".concat(
                            a("/devenir-distributeur") && "active-nav"
                          ),
                          children: "Devenir distributeur",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/push-business.html",
                          className: "".concat(
                            a("/push-business.html") && "active-nav"
                          ),
                          children: "JL PAY business",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        children: (0, l.jsx)("a", {
                          href: "/ouvrir-un-compte.html",
                          className: "d-lg-none ".concat(
                            a("/ouvrir-un-compte.html") && "active-nav"
                          ),
                          children: "Ouvrir un compte",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("nav", {
                className: "login-signup navbar navbar-expand",
                children: (0, l.jsx)("ul", {
                  className: "navbar-nav d-none d-lg-inline",
                  children: (0, l.jsx)("li", {
                    className: "align-items-center h-auto ml-sm-3 ",
                    children: (0, l.jsx)("a", {
                      href: "/ouvrir-un-compte.html",
                      className: "btn btn-primary cus-btn-open",
                      children: "Ouvrir un compte",
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        c = function () {
          return (0, l.jsx)("header", {
            id: "header",
            style: { zIndex: "10" },
            className:
              "containder-md shadow pb-2 bg-white fixed-top push-header",
            children: (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsxs)("div", {
                className: "header-row pt-3",
                children: [
                  (0, l.jsx)("div", {
                    className: "header-column justify-content-start",
                    children: (0, l.jsx)("div", {
                      className: "logo",
                      children: (0, l.jsx)(n(), {
                        href: "/home.html",
                        children: (0, l.jsx)("a", {
                          className: "d-flex",
                          children: (0, l.jsx)("img", {
                            src: "/images/",
                            style: { maxWidth: "100px" },
                            className: "img-fluid logo-img",
                            alt: "JL PAY",
                            title: "JL PAY By Panelys",
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "header-column justify-content-end",
                    children: (0, l.jsx)(t, {}),
                  }),
                  (0, l.jsxs)("button", {
                    className: "navbar-toggler justify-content-md-end",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#header-nav",
                    children: [
                      (0, l.jsx)("span", {}),
                      " ",
                      (0, l.jsx)("span", {}),
                      " ",
                      (0, l.jsx)("span", {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
  },
]);
