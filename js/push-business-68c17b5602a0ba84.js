(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [74],
  {
    2242: function (a, i, s) {
      a.exports = { default: s(4003), __esModule: !0 };
    },
    5105: function (a, i, s) {
      a.exports = { default: s(5175), __esModule: !0 };
    },
    2600: function (a, i, s) {
      "use strict";
      i.__esModule = !0;
      var e,
        t = s(2242),
        o = (e = t) && e.__esModule ? e : { default: e };
      i.default = (function () {
        function a(a, i) {
          for (var s = 0; s < i.length; s++) {
            var e = i[s];
            (e.enumerable = e.enumerable || !1),
              (e.configurable = !0),
              "value" in e && (e.writable = !0),
              (0, o.default)(a, e.key, e);
          }
        }
        return function (i, s, e) {
          return s && a(i.prototype, s), e && a(i, e), i;
        };
      })();
    },
    4003: function (a, i, s) {
      s(1001);
      var e = s(4731).Object;
      a.exports = function (a, i, s) {
        return e.defineProperty(a, i, s);
      };
    },
    5175: function (a, i, s) {
      s(1500), (a.exports = s(4731).Object.getPrototypeOf);
    },
    5762: function (a, i, s) {
      var e = s(9901),
        t = s(4731),
        o = s(3777);
      a.exports = function (a, i) {
        var s = (t.Object || {})[a] || Object[a],
          x = {};
        (x[a] = i(s)),
          e(
            e.S +
              e.F *
                o(function () {
                  s(1);
                }),
            "Object",
            x
          );
      };
    },
    1001: function (a, i, s) {
      var e = s(9901);
      e(e.S + e.F * !s(5810), "Object", { defineProperty: s(1738).f });
    },
    1500: function (a, i, s) {
      var e = s(9411),
        t = s(1146);
      s(5762)("getPrototypeOf", function () {
        return function (a) {
          return t(e(a));
        };
      });
    },
    8788: function (a, i, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/push-business",
        function () {
          return s(9040);
        },
      ]);
    },
    1431: function (a, i, s) {
      "use strict";
      var e = s(5893);
      i.Z = function () {
        return (0, e.jsx)(e.Fragment, {
          children: (0, e.jsxs)("div", {
            className:
              "d-flex justify-content-center justify-content-lg-start divStore my-4",
            style: { position: "relative", bottom: "14%", right: "1%" },
            children: [
              (0, e.jsx)("a", {
                className: "d-inline-flex mx-3",
                href: "https://apps.apple.com/ng/app/push-ci/id1601308812",
                children: (0, e.jsx)("img", {
                  alt: "JL PAY App Store",
                  src: "/images/app-store.png",
                  className: "img-fluid",
                }),
              }),
              (0, e.jsx)("a", {
                className: "d-inline-flex mx-2",
                href: "https://play.google.com/store/apps/details?id=com.panelyscash.app",
                children: (0, e.jsx)("img", {
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
    4052: function (a, i, s) {
      "use strict";
      s.d(i, {
        U: function () {
          return o;
        },
      });
      var e = s(5893),
        t = (s(7294), s(1431)),
        o = function () {
          return (0, e.jsx)("section", {
            className: "section py-5 bg-cs-35 mt-5",
            id: "contacts",
            children: (0, e.jsx)("div", {
              className: "container",
              children: (0, e.jsxs)("div", {
                className: "row",
                children: [
                  (0, e.jsx)("div", {
                    className: " col-md-5 d-none d-lg-block ",
                    children: (0, e.jsx)("img", {
                      alt: "",
                      "data-aos": "flip-left",
                      src: "images/Groupe 4867@2x.png",
                      className: "img-fluid position-absolute img-join",
                      style: { width: "340px", left: "16%", top: "-7em" },
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className:
                      "col-md-12 col-xl-7 col-lg-7 justify-content-center text-lg-left text-center",
                    "data-aos": "flip-right",
                    children: [
                      (0, e.jsxs)("div", {
                        className: "col",
                        children: [
                          (0, e.jsxs)("h4", {
                            className:
                              "fw-bold text-center text-lg-left titleJoin",
                            children: [
                              "Rejoignez-nous maintenant",
                              (0, e.jsx)("span", {
                                style: { color: "#d9534f" },
                                children: "_",
                              }),
                            ],
                          }),
                          (0, e.jsxs)("p", {
                            className: "textJoin Poppins blue-propos",
                            style: { fontSize: "22px" },
                            children: [
                              (0, e.jsx)("b", {
                                children:
                                  "Alors, qu\u2019attendez-vous ? T\xe9l\xe9chargez l'application mobile et",
                              }),
                              (0, e.jsx)("br", {}),
                              (0, e.jsx)("b", {
                                children:
                                  "inscrivez-vous pour b\xe9n\xe9ficier du compte mobile tout-en-un d\xe8s aujourd\u2019hui",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: "col d-lg-inline-flex",
                        children: [
                          (0, e.jsx)("p", {
                            className: "textInfo text-push-ci mr-3",
                            style: {
                              fontSize: "23px",
                              position: "relative",
                              bottom: "14px",
                            },
                            children: "JL PAY :",
                          }),
                          (0, e.jsxs)("ul", {
                            className:
                              "social-icons reseaux justify-content-center",
                            style: { position: "relative", bottom: "6px" },
                            children: [
                              (0, e.jsx)("li", {
                                className: "social-icons-facebook",
                                children: (0, e.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.facebook.com/pushci",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, e.jsx)("i", {
                                    children: (0, e.jsx)("img", {
                                      src: "/images/fb.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, e.jsx)("li", {
                                className: "social-icons-twitter",
                                children: (0, e.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.instagram.com/push_ci/",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, e.jsx)("i", {
                                    children: (0, e.jsx)("img", {
                                      src: "/images/inst.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, e.jsx)("li", {
                                className: "social-icons-google",
                                children: (0, e.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://www.linkedin.com/company/push-ci/",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, e.jsx)("i", {
                                    children: (0, e.jsx)("img", {
                                      src: "/images/link.png",
                                      className: "img-fluid",
                                      alt: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, e.jsx)("li", {
                                className: "social-icons-youtube",
                                children: (0, e.jsx)("a", {
                                  "data-toggle": "tooltip",
                                  href: "https://twitter.com/pushCi",
                                  target: "_blank",
                                  title: "",
                                  "data-original-title": "Facebook",
                                  rel: "noreferrer",
                                  children: (0, e.jsx)("i", {
                                    children: (0, e.jsx)("img", {
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
                      (0, e.jsx)(t.Z, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    1995: function (a, i, s) {
      "use strict";
      s.d(i, {
        R: function () {
          return l;
        },
      });
      var e = s(5893),
        t = s(1664),
        o = s.n(t),
        x = s(1163),
        r = function () {
          var a = (0, x.useRouter)(),
            i = function (i) {
              return a.pathname === i;
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("nav", {
                className: "primary-menu navbar navbar-expand-lg",
                children: (0, e.jsx)("div", {
                  id: "header-nav",
                  className: "collapse navbar-collapse",
                  children: (0, e.jsxs)("ul", {
                    className: "navbar-nav mr-auto",
                    children: [
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/home.html",
                          className: "".concat(i("/home") && "active-nav"),
                          children: "Accueil",
                        }),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/a-propos.html",
                          className: "".concat(i("/a-propos") && "active-nav"),
                          children: "A propos",
                        }),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/nos-tarifs.html",
                          className: "".concat(
                            i("/nos-tarifs") && "active-nav"
                          ),
                          children: "Nos tarifs",
                        }),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/devenir-distributeur.html",
                          className: "".concat(
                            i("/devenir-distributeur") && "active-nav"
                          ),
                          children: "Devenir distributeur",
                        }),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/push-business.html",
                          className: "".concat(
                            i("/push-business") && "active-nav"
                          ),
                          children: "JL PAY business",
                        }),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)("a", {
                          href: "/ouvrir-un-compte.html",
                          className: "d-lg-none ".concat(
                            i("/ouvrir-un-compte") && "active-nav"
                          ),
                          children: "Ouvrir un compte",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, e.jsx)("nav", {
                className: "login-signup navbar navbar-expand",
                children: (0, e.jsx)("ul", {
                  className: "navbar-nav d-none d-lg-inline",
                  children: (0, e.jsx)("li", {
                    className: "align-items-center h-auto ml-sm-3 ",
                    children: (0, e.jsx)("a", {
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
        l = function () {
          return (0, e.jsx)("header", {
            id: "header",
            style: { zIndex: "10" },
            className:
              "containder-md shadow pb-2 bg-white fixed-top push-header",
            children: (0, e.jsx)("div", {
              className: "container",
              children: (0, e.jsxs)("div", {
                className: "header-row pt-3",
                children: [
                  (0, e.jsx)("div", {
                    className: "header-column justify-content-start",
                    children: (0, e.jsx)("div", {
                      className: "logo",
                      children: (0, e.jsx)(o(), {
                        href: "/",
                        children: (0, e.jsx)("a", {
                          className: "d-flex",
                          children: (0, e.jsx)("img", {
                            src: "/images/logo.svg",
                            style: { maxWidth: "100px" },
                            className: "img-fluid logo-img",
                            alt: "JL PAY",
                            title: "JL PAY By Panelys",
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: "header-column justify-content-end",
                    children: (0, e.jsx)(r, {}),
                  }),
                  (0, e.jsxs)("button", {
                    className: "navbar-toggler justify-content-md-end",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#header-nav",
                    children: [
                      (0, e.jsx)("span", {}),
                      " ",
                      (0, e.jsx)("span", {}),
                      " ",
                      (0, e.jsx)("span", {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    9040: function (a, i, s) {
      "use strict";
      s.r(i),
        s.d(i, {
          default: function () {
            return v;
          },
        });
      var e = s(5893),
        t = s(811),
        o = s(1995),
        x = s(682),
        r = s(1608),
        l = s(729),
        n = s(6968),
        k = s(1555),
        c = s(7294),
        m = s(4052),
        p = s(7333),
        d = s(9464),
        h = JSON.parse(
          '{"nm":"Comp 1","ddd":0,"h":1500,"w":1500,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":4,"nm":"Cog Assets Outlines","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[447.124,444.161,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[752,761,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[102.727,30.164],[30.164,-102.727],[-4.27,-27.357],[0,0],[-5.669,19.307],[-75.871,-22.279],[22.278,-75.87],[51.019,-9.835],[0,0],[-20.798,70.831]],"o":[[-102.721,-30.161],[-8.31,28.301],[0,0],[-2.303,-18.796],[22.277,-75.869],[75.871,22.278],[-15.63,53.234],[0,0],[67.551,-14.337],[30.164,-102.726]],"v":[[44.495,-172.919],[-196.339,-41.417],[-201.89,42.932],[-152.43,30.526],[-147.676,-27.129],[30.207,-124.265],[127.335,53.623],[16.762,153.965],[29.862,203.079],[175.997,67.911]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-8.5,11.938],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[447.084,444.195],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.47,"y":1},"s":[0],"t":7},{"s":[-360],"t":143.000005824509}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[24.507,11.889],[0,0],[4.404,21.652],[0,0],[13.16,23.831],[0,0],[14.24,4.181],[10.918,-3.848],[0,0],[19.233,12.501],[0,0],[26.125,7.671],[0,0],[11.895,-24.505],[0,0],[21.698,-4.594],[0,0],[11.176,3.282],[12.874,-7.185],[0,0],[-8.899,-25.715],[0,0],[12.107,-18.573],[0,0],[7.674,-26.133],[0,0],[-24.505,-11.896],[0,0],[0,0],[0,0],[-0.688,2.34],[0,0],[-2.447,-0.325],[0,0],[-5.101,8.682],[-20.81,19.536],[3.31,9.395],[0,0],[-2.095,1.142],[0,0],[-0.897,-0.263],[-0.562,-0.75],[0,0],[-9.719,2.432],[-28.505,-0.933],[-4.369,8.897],[0,0],[-2.34,-0.687],[0,0],[0.329,-2.455],[0,0],[-8.685,-5.092],[-19.976,-21.331],[-9.571,3.258],[0,0],[-0.897,-0.263],[-0.889,-1.627],[0,0],[1.842,-1.62],[0,0],[-2.433,-9.717],[0.925,-28.51],[-8.947,-4.197],[0,0],[0.688,-2.341],[0,0],[0,0],[2.447,0.327],[0,0],[5.041,-8.509],[20.985,-19.483],[-3.25,-9.565],[0,0],[2.096,-1.153],[0,0],[0.907,0.267],[0.564,0.748],[0,0],[0,0],[0,0],[-11.167,-3.28],[-13.058,7.128],[0,0],[8.891,25.715],[0,0],[-12.051,18.389],[0,0],[-7.675,26.136],[0,0]],"o":[[0,0],[-0.328,-22.215],[0,0],[21.379,-16.825],[0,0],[-7.129,-13.056],[-11.167,-3.279],[0,0],[-16.446,-15.992],[0,0],[3.239,-27.047],[0,0],[-26.136,-7.674],[0,0],[-22.04,0.382],[0,0],[-7.106,-9.131],[-14.237,-4.181],[0,0],[-23.783,12.986],[0,0],[-15.471,16.009],[0,0],[-27.047,-3.239],[0,0],[-7.672,26.127],[0,0],[0,0],[0,0],[-2.234,-1.048],[0,0],[0.69,-2.35],[0,0],[10.034,1.177],[14.442,-24.54],[7.3,-6.862],[0,0],[-0.739,-2.174],[0,0],[1.638,-0.896],[1.083,0.318],[0,0],[6.288,7.918],[27.559,-7.172],[9.928,0.172],[0,0],[1.05,-2.244],[0,0],[2.341,0.688],[0,0],[-1.183,10.023],[25.2,14.836],[6.858,7.301],[0,0],[1.059,-0.281],[0.723,0.212],[0,0],[1.139,2.104],[0,0],[-7.862,6.111],[7.129,27.739],[-0.411,10.058],[0,0],[2.235,1.048],[0,0],[0,0],[-0.687,2.341],[0,0],[-10.022,-1.184],[-14.626,24.476],[-7.301,6.86],[0,0],[0.727,2.173],[0,0],[-1.637,0.884],[-1.073,-0.314],[0,0],[0,0],[0,0],[7.106,9.132],[14.239,4.18],[0,0],[23.78,-12.984],[0,0],[15.471,-16.006],[0,0],[27.044,3.248],[0,0],[8.036,-26.03]],"v":[[413.963,35.542],[356.429,7.485],[349.35,-58.406],[399.692,-97.851],[414.089,-168.207],[376.154,-237.682],[343.085,-264.425],[309.358,-263.555],[248.782,-242.584],[195.226,-285.522],[202.702,-348.314],[163.152,-408.284],[87.28,-430.562],[21.578,-401.497],[-6.86,-343.292],[-72.682,-335.799],[-111.762,-386.043],[-139.855,-405.054],[-182.123,-400.432],[-251.779,-362.552],[-277.707,-295.579],[-256.533,-234.354],[-297.809,-182.459],[-360.598,-189.943],[-420.57,-150.385],[-442.849,-74.512],[-413.781,-8.819],[-359.098,17.908],[-344.61,-31.433],[-391.602,-54.38],[-394.185,-60.223],[-371.906,-136.095],[-366.571,-139.623],[-287.718,-130.165],[-262.778,-142.418],[-209.733,-209.065],[-203.273,-235.749],[-229.622,-312.001],[-227.288,-317.966],[-157.813,-355.902],[-153.967,-356.341],[-151.522,-354.647],[-102.367,-292.06],[-76.013,-283.144],[8.633,-292.738],[32.186,-306.967],[67.55,-379.388],[73.396,-381.98],[149.278,-359.699],[152.794,-354.357],[143.344,-275.501],[155.6,-250.57],[223.601,-196.144],[250.407,-189.448],[325.708,-215.885],[328.675,-215.998],[331.675,-213.551],[369.611,-144.076],[368.355,-137.782],[305.475,-88.322],[296.615,-62.145],[305.805,22.576],[320.022,46.126],[391.961,81.147],[394.553,87.004],[372.276,162.874],[372.091,162.819],[366.756,166.338],[287.354,156.73],[262.65,168.862],[209.124,235.165],[202.419,261.967],[228.522,337.755],[226.185,343.732],[156.71,381.668],[152.857,382.092],[150.418,380.403],[108.774,327.458],[71.095,361.223],[110.539,411.561],[138.619,430.581],[180.896,425.961],[250.371,388.025],[276.295,321.051],[255.327,260.469],[296.907,208.866],[360.421,216.553],[420.392,177.002],[442.669,101.131]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[445.124,433.161],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.468,"y":1},"s":[0],"t":0},{"s":[360],"t":129.000005254278}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1}],"v":"5.4.1","fr":29.9700012207031,"op":156.00000635401,"ip":0,"assets":[]}'
        ),
        y = JSON.parse(
          '{"nm":"Rocket-transparent","ddd":0,"h":1240,"w":1140,"meta":{"g":"LottieFiles AE 0.1.20"},"layers":[{"ty":4,"nm":"Soplo stroke 8","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":50},{"s":[100],"t":60.0000024438501}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":55},{"s":[100],"t":60.0000024438501}],"ix":1},"m":1}],"ind":1,"parent":26},{"ty":4,"nm":"Soplo stroke 7","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":46},{"s":[100],"t":57.0000023216576}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":43},{"s":[100],"t":55.0000022401959}],"ix":1},"m":1}],"ind":2,"parent":26},{"ty":4,"nm":"Soplo stroke 6","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":37},{"s":[100],"t":47.0000019143492}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":42},{"s":[100],"t":47.0000019143492}],"ix":1},"m":1}],"ind":3,"parent":26},{"ty":4,"nm":"Soplo stroke 5","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":33},{"s":[100],"t":44.0000017921567}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":30},{"s":[100],"t":42.0000017106951}],"ix":1},"m":1}],"ind":4,"parent":26},{"ty":4,"nm":"Soplo stroke 4","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":24},{"s":[100],"t":34.0000013848484}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":29},{"s":[100],"t":34.0000013848484}],"ix":1},"m":1}],"ind":5,"parent":26},{"ty":4,"nm":"Soplo stroke 3","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":15},{"s":[100],"t":26.0000010590017}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":12},{"s":[100],"t":24.00000097754}],"ix":1},"m":1}],"ind":6,"parent":26},{"ty":4,"nm":"Soplo stroke 2","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":7},{"s":[100],"t":15.0000006109625}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":10},{"s":[100],"t":16.0000006516934}],"ix":1},"m":1}],"ind":7,"parent":26},{"ty":4,"nm":"Soplo stroke 13","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-7,-32],[-2,-79]],"o":[[-25,48],[10,49],[2.153,85.026]],"v":[[-1,113.5],[-6,264.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":50},{"s":[100],"t":57.0000023216576}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":49},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":53},{"s":[100],"t":56.0000022809268}],"ix":1},"m":1}],"ind":8,"parent":26},{"ty":4,"nm":"Soplo stroke 12","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-7,-32],[-2,-79]],"o":[[-25,48],[10,49],[2.153,85.026]],"v":[[-1,113.5],[-6,264.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":19},{"s":[100],"t":26.0000010590017}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":18},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":22},{"s":[100],"t":25.0000010182709}],"ix":1},"m":1}],"ind":9,"parent":26},{"ty":4,"nm":"Soplo stroke 11","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-7,-32],[-2,-79]],"o":[[-25,48],[10,49],[2.153,85.026]],"v":[[-1,113.5],[-6,264.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":29},{"s":[100],"t":36.0000014663101}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":28},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":32},{"s":[100],"t":35.0000014255792}],"ix":1},"m":1}],"ind":10,"parent":26},{"ty":4,"nm":"Soplo stroke 10","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-7,-32],[-2,-79]],"o":[[-25,48],[10,49],[2.153,85.026]],"v":[[-1,113.5],[-6,264.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":12},{"s":[100],"t":19.0000007738859}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":11},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":15},{"s":[100],"t":18.000000733155}],"ix":1},"m":1}],"ind":11,"parent":26},{"ty":4,"nm":"Soplo stroke 9","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-7,-32],[-2,-79]],"o":[[-25,48],[10,49],[2.153,85.026]],"v":[[-1,113.5],[-6,264.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"s":[100],"t":13.0000005295009}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":9},{"s":[100],"t":12.00000048877}],"ix":1},"m":1}],"ind":12,"parent":26},{"ty":4,"nm":"Soplo stroke","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,198.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-60,-147],[-2,-79]],"o":[[0,0],[24.177,59.232],[2.153,85.026]],"v":[[-5,108.5],[-17,289.5],[1,439.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":1},{"s":[100],"t":9.00000036657752}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[6],"t":4},{"s":[100],"t":10.0000004073083}],"ix":1},"m":1}],"ind":13,"parent":26},{"ty":4,"nm":"Soplo 2","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[40,210.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":1},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":2},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":3},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":4},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":6},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":7},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":8},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":9},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":10},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":11},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":12},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":14},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":15},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":16},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":17},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":18},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":19},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":20},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":21},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":22},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":23},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":24},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":25},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":26},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":27},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":28},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":29},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":31},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":32},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":33},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":34},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":35},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":36},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":37},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":38},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":39},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":40},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":41},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":42},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":43},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":44},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":45},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":46},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":47},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":48},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":49},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":51},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":52},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":53},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":54},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":55},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":56},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":57},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":58},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":59},{"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":60.0000024438501}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":14,"parent":26},{"ty":4,"nm":"Soplo","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[60,210.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":1},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":2},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":3},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":4},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":6},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":7},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":8},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":9},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":10},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":11},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":12},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":14},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":15},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":16},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":17},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":18},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":19},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":20},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":21},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":22},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":23},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":24},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":25},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":26},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":27},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":28},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":29},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":31},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":32},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":33},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":34},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":35},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":36},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":37},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":38},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":39},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":40},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":41},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":42},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":43},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":44},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":45},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":46},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":47},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":48},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":49},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":51},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":52},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":53},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":54},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[4.213,-58.135],[0,-55]],"o":[[-23,20],[3,96],[0,55]],"v":[[-25,76.5],[-75,178.5],[-29,367.5]]}],"t":55},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-28,380]]}],"t":56},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-28.5,391.5]]}],"t":57},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[0.5,-53.5],[-1,-156.5]],"o":[[-20,7.5],[4,73.5],[0,55]],"v":[[-25,76.5],[-76,153.5],[-30,413.5]]}],"t":58},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[41,-28],[1,-63],[0,-128.5]],"o":[[-20,7.5],[-1,63],[0,55]],"v":[[-25,76.5],[-77.5,161],[-31,389.5]]}],"t":59},{"s":[{"c":false,"i":[[41,-28],[1,-63],[0.5,-95]],"o":[[-23,20],[-1,63],[0,55]],"v":[[-25,76.5],[-75.5,171.5],[-32,376.5]]}],"t":60.0000024438501}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":15,"parent":26},{"ty":4,"nm":"Shape Layer 9","sr":1,"st":0,"op":60.0000024438501,"ip":44.0000017921567,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-4.689,-54.092],[-3.817,-19.083],[-5.602,-23.476],[0,-46.136]],"o":[[0,0],[-112.5,100.5],[-4.433,29.324],[2.187,25.227],[1.107,11.797],[13.7,57.415],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-136.061,64.201],[-127,132.5],[-115.953,187.378],[-81,371.5]]}],"t":52},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-4.689,-54.092],[-3.817,-19.083],[-5.602,-23.476],[0,-46.136]],"o":[[0,0],[-112.5,100.5],[-4.433,29.324],[2.187,25.227],[1.107,11.797],[13.7,57.415],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-136.061,64.201],[-127,132.5],[-115.953,187.378],[-81,371.5]]}],"t":53},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[0,0],[0,0],[6.211,-47.329],[11,-34],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-2.34,17.829],[-14,32],[0,0],[0,0]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-146.061,38.201],[-167,120.5],[-162.953,220.378],[-164,381.5]]}],"t":54},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[0,0],[0,0],[6.211,-47.329],[7,-39],[-2.225,-34.416],[0,0]],"o":[[0,0],[0,0],[0,0],[-5.939,24.299],[-6,45],[3.464,53.597],[0,0]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-161.061,34.201],[-181,118.5],[-162.953,220.378],[-164,381.5]]}],"t":55},{"s":[{"c":false,"i":[[0,0],[0,0],[0,0],[6.211,-47.329],[7,-39],[-2.225,-34.416],[0,0]],"o":[[0,0],[0,0],[0,0],[-5.939,24.299],[-6,45],[3.464,53.597],[0,0]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-161.061,34.201],[-197,122.5],[-162.953,220.378],[-164,381.5]]}],"t":56.0000022809268}],"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":55},{"s":[100],"t":59.0000024031193}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":50},{"s":[100],"t":59.0000024031193}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":16,"parent":26},{"ty":4,"nm":"Shape Layer 8","sr":1,"st":0,"op":58.0000023623884,"ip":42.0000017106951,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[-5.602,-23.476],[0,-46.136]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[1.107,11.797],[13.7,57.415],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-115.953,187.378],[-81,371.5]]}],"t":51},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[2,-30],[-7.63,-21.954],[10.647,-61.041]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[-1.451,15.672],[18.662,53.693],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-134,131.5],[-122.702,188.671],[-81,371.5]]}],"t":52},{"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[2,-30],[-10.017,-27.095],[9.828,-56.349]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[-1.724,18.618],[19.036,51.492],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-155,137.5],[-118.159,201.298],[-81,371.5]]}],"t":53.0000021587343}],"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":46},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":53},{"s":[100],"t":57.0000023216576}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":46},{"s":[100],"t":57.0000023216576}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":17,"parent":26},{"ty":4,"nm":"Shape Layer 6","sr":1,"st":0,"op":53.0000021587343,"ip":37.0000015070409,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":37},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":48},{"s":[100],"t":52.0000021180034}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":41},{"s":[100],"t":52.0000021180034}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":18,"parent":26},{"ty":4,"nm":"Shape Layer 7","sr":1,"st":0,"op":49.0000019958109,"ip":33.0000013441176,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":34},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":44},{"s":[100],"t":48.0000019550801}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":34},{"s":[100],"t":48.0000019550801}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":19,"parent":26},{"ty":4,"nm":"Shape Layer 5","sr":1,"st":0,"op":41.0000016699642,"ip":25.0000010182709,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[25.5,-50.5],[5,-51],[0,-65]],"o":[[0,0],[-112.5,100.5],[-25.5,50.5],[-5,51],[0,42]],"v":[[0,-387],[-12.5,-346],[-149.5,-59.5],[-196,74.501],[-198,371.5]]}],"t":33},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[0,0],[24,-96.001],[0,-65]],"o":[[0,0],[-112.5,100.5],[0,0],[-5,50.999],[0,42]],"v":[[0,-387],[-12.5,-346],[-141.5,-60.5],[-162,82.501],[-198,371.5]]}],"t":34},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[0,0],[24,-96.001],[0,-65]],"o":[[0,0],[-112.5,100.5],[0,0],[-5,50.999],[0,42]],"v":[[0,-387],[-12.5,-346],[-141.5,-60.5],[-162,82.501],[-221,368.5]]}],"t":35},{"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[0,0],[24,-96.001],[0,-65]],"o":[[0,0],[-112.5,100.5],[0,0],[-35,95.999],[0,42]],"v":[[0,-387],[-12.5,-346],[-141.5,-60.5],[-162,82.501],[-182,383.5]]}],"t":36.0000014663101}],"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":32},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":36},{"s":[100],"t":40.0000016292334}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":32},{"s":[100],"t":40.0000016292334}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":20,"parent":26},{"ty":4,"nm":"Shape Layer 4","sr":1,"st":0,"op":35.0000014255792,"ip":19.0000007738859,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]}],"t":25},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-19,-39],[0,-65]],"o":[[0,0],[-112.5,100.5],[-4,76.5],[5,28],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-182,142.5],[-81,371.5]]}],"t":26},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-19,-39],[0,-65]],"o":[[0,0],[-112.5,100.5],[-16,65.5],[5,28],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-200,146.5],[-81,371.5]]}],"t":27},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[0,-74],[0,-65]],"o":[[0,0],[-112.5,100.5],[-25,62.5],[-3,91],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-215,149.5],[-218,373.5]]}],"t":28},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[1,-75],[0,-65]],"o":[[0,0],[-112.5,100.5],[-42,51.5],[0,37],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-231,160.5],[-231,375.5]]}],"t":29},{"s":[{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[4,-110],[0,-65]],"o":[[0,0],[-112.5,100.5],[-42,51.5],[-3,71],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-244,159.5],[-245,373.5]]}],"t":30.0000012219251}],"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":20},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":30},{"s":[100],"t":34.0000013848484}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":23},{"s":[100],"t":34.0000013848484}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":21,"parent":26},{"ty":4,"nm":"Shape Layer 3","sr":1,"st":0,"op":27.0000010997325,"ip":11.0000004480392,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":15},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":22},{"s":[100],"t":26.0000010590017}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":15},{"s":[100],"t":26.0000010590017}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":22,"parent":26},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":0,"op":23.0000009368092,"ip":7.00000028511585,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":9},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":18},{"s":[100],"t":22.0000008960784}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":9},{"s":[100],"t":22.0000008960784}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":23,"parent":26},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":16.0000006516934,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50.5,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[16.531,-14.49],[6.5,-43],[-12,-60],[0,-65]],"o":[[0,0],[-112.5,100.5],[-6.5,43],[3.813,40.649],[0,42]],"v":[[0,-387],[-12.5,-346],[-137,-79],[-127,132.5],[-81,371.5]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[91.667],"t":11},{"s":[100],"t":15.0000006109625}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":4},{"s":[100],"t":15.0000006109625}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":24,"parent":26},{"ty":3,"nm":"Null 3","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[570,620,0],"ix":2},"r":{"a":0,"k":40,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":11}},"ef":[],"ind":25},{"ty":3,"nm":"Null 2","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[570,579.5,0],"t":0,"ti":[0,0,0],"to":[13,-12.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[648,505.5,0],"t":30,"ti":[13,-12.333,0],"to":[0,0,0]},{"s":[570,579.5,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":42,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":11}},"ef":[],"ind":26},{"ty":4,"nm":"Body 3","sr":1,"st":0,"op":31.0000012626559,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[211.788,297.201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50.194,14.991,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-76.75,-51]],"o":[[0,0],[0,0]],"v":[[-82.75,24.75],[82.75,25.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.522,134.488],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.498,-0.45],[-121.262,-368.073],[-1.221,-0.003],[0,0],[-0.384,1.167],[13.663,12.186],[0.726,-0.024],[0,0]],"o":[[-12.963,11.723],[0.382,1.161],[0,0],[1.228,0.004],[121.061,-367.527],[-0.543,-0.484],[0,0],[-0.67,0.022]],"v":[[-5.4,-271.334],[-65.526,269.838],[-62.837,271.793],[63.019,272.197],[65.727,270.242],[1.986,-271.466],[0.015,-272.177],[-3.597,-272.059]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0275,0.2784,0.3373],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.788,297.201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":27,"parent":26},{"ty":4,"nm":"1 wing","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":2,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[81.896,118.272,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-102.319,97.092,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[1.926,-1.029],[7.31,-27.418],[-2.151,0.758],[-48.817,-5.882],[0.381,1.893],[-1.317,31.981]],"o":[[-52.918,28.281],[-0.587,2.204],[14.301,-5.035],[1.917,0.231],[-11.951,-59.328],[0.09,-2.182]],"v":[[39.928,-92.243],[-56.309,89.109],[-52.632,92.514],[53.412,80.395],[56.514,77.01],[44.083,-89.622]]}],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[-1.912,-1.029],[-7.252,-27.42],[2.136,0.757],[48.478,-5.883],[-0.379,1.893],[1.31,31.981]],"o":[[52.55,28.281],[0.583,2.204],[-14.202,-5.035],[-1.904,0.231],[11.868,-59.328],[-0.089,-2.182]],"v":[[265.169,-92.243],[360.736,89.109],[357.085,92.514],[251.777,80.395],[248.697,77.01],[261.042,-89.622]]}],"t":30},{"s":[{"c":true,"i":[[1.926,-1.029],[7.31,-27.418],[-2.151,0.758],[-48.817,-5.882],[0.381,1.893],[-1.317,31.981]],"o":[[-52.918,28.281],[-0.587,2.204],[14.301,-5.035],[1.917,0.231],[-11.951,-59.328],[0.09,-2.182]],"v":[[39.928,-92.243],[-56.309,89.109],[-52.632,92.514],[53.412,80.395],[56.514,77.01],[44.083,-89.622]]}],"t":59.0000024031193}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[81.895,118.272],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":28,"parent":26},{"ty":4,"nm":"Body 4","sr":1,"st":0,"op":60.0000024438501,"ip":30.0000012219251,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[211.788,297.201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50.194,14.991,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-76.75,-51]],"o":[[0,0],[0,0]],"v":[[-82.75,24.75],[82.75,25.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.522,134.488],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.498,-0.45],[-121.262,-368.073],[-1.221,-0.003],[0,0],[-0.384,1.167],[13.663,12.186],[0.726,-0.024],[0,0]],"o":[[-12.963,11.723],[0.382,1.161],[0,0],[1.228,0.004],[121.061,-367.527],[-0.543,-0.484],[0,0],[-0.67,0.022]],"v":[[-5.4,-271.334],[-65.526,269.838],[-62.837,271.793],[63.019,272.197],[65.727,270.242],[1.986,-271.466],[0.015,-272.177],[-3.597,-272.059]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0275,0.2784,0.3373],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.788,297.201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":29,"parent":26},{"ty":4,"nm":"2 wing","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":2,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[81.896,118.272,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[202.318,97.092,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[-1.926,-1.029],[-7.31,-27.418],[2.151,0.758],[48.817,-5.882],[-0.381,1.893],[1.316,31.981]],"o":[[52.919,28.281],[0.587,2.204],[-14.301,-5.035],[-1.917,0.231],[11.951,-59.328],[-0.09,-2.182]],"v":[[-39.927,-92.243],[56.308,89.109],[52.633,92.514],[-53.411,80.395],[-56.515,77.01],[-44.083,-89.622]]}],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[1.942,-1.029],[7.365,-27.42],[-2.169,0.757],[-49.228,-5.883],[0.385,1.893],[-1.33,31.981]],"o":[[-53.365,28.281],[-0.592,2.204],[14.422,-5.035],[1.933,0.231],[-12.052,-59.328],[0.091,-2.182]],"v":[[-264.429,-92.243],[-361.476,89.109],[-357.77,92.514],[-250.831,80.395],[-247.702,77.01],[-260.239,-89.622]]}],"t":30},{"s":[{"c":true,"i":[[-1.926,-1.029],[-7.31,-27.418],[2.151,0.758],[48.817,-5.882],[-0.381,1.893],[1.316,31.981]],"o":[[52.919,28.281],[0.587,2.204],[-14.301,-5.035],[-1.917,0.231],[11.951,-59.328],[-0.09,-2.182]],"v":[[-39.927,-92.243],[56.308,89.109],[52.633,92.514],[-53.411,80.395],[-56.515,77.01],[-44.083,-89.622]]}],"t":59.0000024031193}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[81.896,118.272],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":30,"parent":26},{"ty":4,"nm":"Body 2","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[211.788,297.201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50.194,14.991,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-76.75,-51]],"o":[[0,0],[0,0]],"v":[[-82.75,24.75],[82.75,25.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.522,134.488],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.498,-0.45],[-121.262,-368.073],[-1.221,-0.003],[0,0],[-0.384,1.167],[13.663,12.186],[0.726,-0.024],[0,0]],"o":[[-12.963,11.723],[0.382,1.161],[0,0],[1.228,0.004],[121.061,-367.527],[-0.543,-0.484],[0,0],[-0.67,0.022]],"v":[[-5.4,-271.334],[-65.526,269.838],[-62.837,271.793],[63.019,272.197],[65.727,270.242],[1.986,-271.466],[0.015,-272.177],[-3.597,-272.059]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0275,0.2784,0.3373],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.788,297.201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":31,"parent":26},{"ty":4,"nm":"Iilum","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[76.333,128.086,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,63.416,0],"t":0,"ti":[-27,0,0],"to":[-27.667,0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-116,63.416,0],"t":18,"ti":[49.333,0,0],"to":[27,0,0]},{"h":1,"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[212,63.416,0],"t":19},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[212,63.416,0],"t":42,"ti":[39.94,0,0],"to":[-17.657,0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[107.178,63.416,0],"t":53,"ti":[10.349,0,0],"to":[-24.822,0,0]},{"s":[50,63.416,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-28.351],[28.351,0],[0,28.351],[-28.351,0]],"o":[[0,28.351],[-28.351,0],[0,-28.351],[28.351,0]],"v":[[51.334,0],[0.001,51.333],[-51.334,0],[0.001,-51.333]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[76.334,76.333],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-16.664],[16.663,0],[0,16.663],[-16.663,0]],"o":[[0,16.663],[-16.663,0],[0,-16.664],[16.663,0]],"v":[[30.172,0],[0,30.172],[-30.172,0],[0,-30.172]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[76.334,201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":32,"parent":26},{"ty":4,"nm":"Body 5","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[211.788,297.201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50.194,14.991,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-76.75,-51]],"o":[[0,0],[0,0]],"v":[[-82.75,24.75],[82.75,25.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.522,134.488],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.498,-0.45],[-121.262,-368.073],[-1.221,-0.003],[0,0],[-0.384,1.167],[13.663,12.186],[0.726,-0.024],[0,0]],"o":[[-12.963,11.723],[0.382,1.161],[0,0],[1.228,0.004],[121.061,-367.527],[-0.543,-0.484],[0,0],[-0.67,0.022]],"v":[[-5.4,-271.334],[-65.526,269.838],[-62.837,271.793],[63.019,272.197],[65.727,270.242],[1.986,-271.466],[0.015,-272.177],[-3.597,-272.059]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.788,297.201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":33,"parent":26},{"ty":4,"nm":"Iilum 2","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[76.333,128.086,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[212,63.416,0],"t":12,"ti":[70.467,0,0],"to":[-28.631,0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,63.416,0],"t":30,"ti":[20.703,0,0],"to":[-50.955,0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-116,63.416,0],"t":48,"ti":[0,0,0],"to":[-49.333,0,0]},{"s":[-116,63.416,0],"t":53.0000021587343}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-28.351],[28.351,0],[0,28.351],[-28.351,0]],"o":[[0,28.351],[-28.351,0],[0,-28.351],[28.351,0]],"v":[[51.334,0],[0.001,51.333],[-51.334,0],[0.001,-51.333]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[76.334,76.333],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-16.664],[16.663,0],[0,16.663],[-16.663,0]],"o":[[0,16.663],[-16.663,0],[0,-16.664],[16.663,0]],"v":[[30.172,0],[0,30.172],[-30.172,0],[0,-30.172]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[76.334,201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":34,"parent":26},{"ty":4,"nm":"Body","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[211.788,297.201,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50.194,14.991,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-76.75,-51]],"o":[[0,0],[0,0]],"v":[[-82.75,24.75],[82.75,25.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.9608,0.9608,0.9608],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.522,134.488],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.498,-0.45],[-121.262,-368.073],[-1.221,-0.003],[0,0],[-0.384,1.167],[13.663,12.186],[0.726,-0.024],[0,0]],"o":[[-12.963,11.723],[0.382,1.161],[0,0],[1.228,0.004],[121.061,-367.527],[-0.543,-0.484],[0,0],[-0.67,0.022]],"v":[[-5.4,-271.334],[-65.526,269.838],[-62.837,271.793],[63.019,272.197],[65.727,270.242],[1.986,-271.466],[0.015,-272.177],[-3.597,-272.059]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"c":{"a":0,"k":[0.949,0.949,0.949],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[211.788,297.201],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":35,"parent":26},{"ty":0,"nm":"flying shapes","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[573.5,600,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[570,620,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":1147,"h":1200,"refId":"comp_0","ind":36}],"v":"5.5.7","fr":29.9700012207031,"op":60.0000024438501,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":4,"nm":"Shape Layer 18","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-240.621,-262.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[136.321,703.11,0],"t":0,"ti":[-1.689,2.013,0],"to":[0.317,-0.378,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-14.68,883.065,0],"t":12,"ti":[-1.982,2.362,0],"to":[0.343,-0.408,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[772.433,-54.979,0],"t":13,"ti":[-0.512,0.61,0],"to":[24.418,-29.101,0]},{"s":[152.39,683.959,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":90,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":1},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":10},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":17},{"s":[100],"t":23.0000009368092}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 2","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[87.812,66.895],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.855,-261.266],"ix":2},"r":{"a":0,"k":90,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[102.581,74.248],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.355,-265.016],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 17","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-240.621,-262.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[1066.438,574.748,0],"t":0,"ti":[-2.913,3.471,0],"to":[1.176,-1.401,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[434.32,1328.077,0],"t":48,"ti":[-9.069,10.809,0],"to":[0.37,-0.441,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[1190.095,427.38,0],"t":49,"ti":[-1.353,1.613,0],"to":[82.161,-97.916,0]},{"s":[1082.508,555.596,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":90,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":30},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":39},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":54},{"s":[100],"t":60.0000024438501}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 2","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[87.812,66.895],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.855,-261.266],"ix":2},"r":{"a":0,"k":90,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[102.581,74.248],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.355,-265.016],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 16","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-240.621,-262.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[814.89,778.074,0],"t":0,"ti":[-2.913,3.471,0],"to":[1.176,-1.401,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[412.247,1257.925,0],"t":30,"ti":[-9.069,10.809,0],"to":[0.37,-0.441,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[1246.442,263.77,0],"t":31,"ti":[-1.353,1.613,0],"to":[82.161,-97.916,0]},{"s":[830.96,758.923,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":90,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":14},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":24},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":39},{"s":[100],"t":45.0000018328876}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 2","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-237.605,-261.016],"ix":2},"r":{"a":0,"k":90,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.355,-265.016],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"Shape Layer 15","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-240.621,-262.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[368.225,345.839,0],"t":0,"ti":[-2.913,3.471,0],"to":[1.176,-1.401,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-10.635,797.347,0],"t":30,"ti":[-9.069,10.809,0],"to":[0.37,-0.441,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[696.931,-45.897,0],"t":31,"ti":[-1.353,1.613,0],"to":[82.161,-97.916,0]},{"s":[384.295,326.688,0],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":90,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":20},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":37},{"s":[100],"t":42.0000017106951}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 2","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-237.605,-261.016],"ix":2},"r":{"a":0,"k":90,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-240,-287],[-240,-238.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[-238.355,-265.016],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-238.355,-265.016],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4},{"ty":4,"nm":"Shape Layer 14","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-199.027,1419.303,0],"ix":1},"s":{"a":0,"k":[57.726,57.726,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[665.876,60.204,0],"ix":2},"r":{"a":0,"k":40,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":31},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":40},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":53},{"s":[100],"t":59.0000024031193}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[44.945,44.945],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-199.027,1514.473],"t":0,"ti":[0,0],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-199.027,3349.473],"t":44,"ti":[0,0],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-199.027,929.473],"t":45,"ti":[0,0],"to":[0,0]},{"s":[-199.027,1489.473],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"Shape Layer 13","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-339.027,695,0],"ix":1},"s":{"a":0,"k":[57.726,57.726,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[924.453,668.649,0],"ix":2},"r":{"a":0,"k":40,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":2},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":9},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":40},{"s":[0],"t":53.0000021587343}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[44.945,44.945],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-199.027,209.473],"t":0,"ti":[0,-276.667],"to":[0,276.667]},{"s":[-199.027,1869.473],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6},{"ty":4,"nm":"Shape Layer 12","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-339.027,-610.527,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[1479.324,-11.289,0],"ix":2},"r":{"a":0,"k":40,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":11},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":24},{"s":[100],"t":32.0000013033867}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[44.945,44.945],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-339.027,695],"t":0,"ti":[0,-140.62],"to":[0,213.333]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-339.027,1109.473],"t":17,"ti":[0,-170.731],"to":[0,213.333]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-339.027,-220.018],"t":18,"ti":[0,-140.62],"to":[0,330.178]},{"s":[-339.027,669.473],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":4,"nm":"Shape Layer 11","sr":1,"st":0,"op":60.0000024438501,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[542.858,574.288,0],"ix":2},"r":{"a":0,"k":40,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100],"t":34},{"s":[0],"t":48.0000019550801}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[44.945,44.945],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[-339.027,-610.527],"t":0,"ti":[0,-213.333],"to":[0,213.333]},{"s":[-339.027,669.473],"t":59.0000024031193}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8}]}]}'
        ),
        f = JSON.parse(
          '{"nm":"Analytics","ddd":0,"h":500,"w":500,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":4,"nm":"Analytics Outlines - Group 1","sr":1,"st":0,"op":128,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[37,63.417,0],"ix":1},"s":{"a":0,"k":[500,500,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[185,317.086,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37,63.601],[37,63.234]]}],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37,63.601],[37,25.634]]}],"t":25},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37,63.601],[37,63.234]]}],"t":50},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37,63.601],[37,59.234]]}],"t":63},{"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[37,63.601],[37,63.234]]}],"t":75}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Analytics Outlines - Group 2","sr":1,"st":0,"op":128,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[51.348,55.648,0],"ix":1},"s":{"a":0,"k":[500,500,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[256.738,278.241,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[51.348,63.601],[51.348,47.696]]}],"t":12},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[51.348,63.601],[51.348,63.296]]}],"t":30},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[51.348,63.601],[51.348,41.696]]}],"t":50},{"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[51.348,63.601],[51.348,47.696]]}],"t":62}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Analytics Outlines - Group 3","sr":1,"st":0,"op":128,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[65.313,47.561,0],"ix":1},"s":{"a":0,"k":[500,500,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[326.563,237.806,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 3","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[65.313,63.601],[65.313,31.522]]}],"t":10},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[65.313,63.601],[65.313,63.322]]}],"t":35},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[65.313,63.601],[65.313,25.522]]}],"t":60},{"s":[{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[65.313,63.601],[65.313,31.522]]}],"t":75}],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":10,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3}],"v":"5.5.2","fr":50,"op":128,"ip":0,"assets":[]}'
        ),
        u = JSON.parse(
          '{"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":49.0000019958109,"w":1080,"h":1080,"nm":"lock color","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"bold Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[540,652.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[540,572.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[540,652.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[540,652.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":36,"s":[540,572.75,0],"to":[0,0,0],"ti":[0,0,0]},{"t":38.0000015477717,"s":[540,652.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[145.75,121.5,0],"ix":1,"l":2},"s":{"a":0,"k":[167,167,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[9.619,-5.609],[0,0],[8.94,0],[0,8.924],[0,0],[0,11.915],[-17.832,0],[0,-17.832]],"o":[[0,0],[0,8.924],[-8.94,0],[0,0],[-9.62,-5.609],[0,-17.832],[17.832,0],[0,11.915]],"v":[[16.167,3.589],[16.167,40.417],[0,56.583],[-16.166,40.417],[-16.166,3.589],[-32.333,-24.25],[0,-56.583],[32.333,-24.25]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[64.667,-121.25],[-64.666,-121.25]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-20.063],[0,0],[-20.047,0],[0,0],[0,20.063],[0,0],[20.047,0],[0,0]],"o":[[0,0],[-20.047,0],[0,0],[0,20.063],[0,0],[20.047,0],[0,0],[0,-20.063],[0,0],[0,0]],"v":[[-97,-121.25],[-109.125,-121.25],[-145.5,-84.875],[-145.5,84.875],[-109.125,121.25],[109.125,121.25],[145.5,84.875],[145.5,-84.875],[109.125,-121.25],[97,-121.25]],"c":false},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[145.75,121.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":149.850006103516,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 3 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[65.24,75.998,0],"to":[0,-7.984,0],"ti":[0,7.984,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":12,"s":[65.24,28.094,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":36,"s":[65.24,28.094,0],"to":[0,7.984,0],"ti":[0,-7.984,0]},{"t":38.0000015477717,"s":[65.24,75.998,0]}],"ix":2,"l":2},"a":{"a":0,"k":[100,290.766,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[44.402,0],[0,-44.402],[0,0]],"o":[[0,0],[0,-44.402],[-44.402,0],[0,0],[0,0]],"v":[[80.51,15.383],[80.51,-14.872],[0,-95.383],[-80.51,-14.872],[-80.51,95.383]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[180.51,195.383],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":149.850006103516,"st":0,"bm":0}],"markers":[]}'
        ),
        b = function () {
          var a = (0, c.useState)(!0),
            i = a[0],
            s = a[1],
            t = (0, c.useState)(""),
            b = t[0],
            v = t[1],
            g = (0, c.useState)(""),
            j = g[0],
            S = g[1],
            E = (0, c.useState)(""),
            D = E[0],
            A = E[1],
            B = (0, c.useState)(""),
            G = B[0],
            V = B[1],
            N = (0, c.useState)(""),
            w = N[0],
            P = N[1],
            F = (0, c.useState)(""),
            T = F[0],
            M = F[1],
            Z = (0, c.useState)(!1),
            _ = Z[0],
            C = Z[1],
            L = (0, c.useState)(!1),
            O = L[0],
            z = L[1],
            I = (0, c.useState)(!1),
            R = I[0],
            q = I[1],
            J = (0, c.useState)(!1),
            U = J[0],
            W =
              (J[1],
              "\n    Raison social : "
                .concat(w, " \n\n    Nom : ")
                .concat(b, " \n\n    Pr\xe9noms : ")
                .concat(j, " \n\n    Email : ")
                .concat(G, " \n\n    T\xe9l\xe9phone : ")
                .concat(D, " \n\n      ")
                .concat(T, " \n\n    ")),
            H = function () {
              return b && j && w && G && D && _;
            };
          return (
            (0, c.useEffect)(
              function () {
                H() || z(!1);
              },
              [b, j, w, G, D, H, _]
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: "bg-white home-top",
                  children: [
                    (0, e.jsx)(o.R, {}),
                    (0, e.jsxs)("section", {
                      className: "hero-wrap bg-cyan border-32 mx-3 mx-md-5",
                      id: "devenir-distributeur",
                      children: [
                        (0, e.jsx)("div", {
                          className: "d-none d-lg-block",
                          children: (0, e.jsxs)("div", {
                            className:
                              "row mb-lg-5 pb-md-5 hero-content align-items-center px-0",
                            children: [
                              (0, e.jsx)("div", {
                                className: "col-lg-5 pr-0 ",
                                children: (0, e.jsx)("img", {
                                  src: "/images/Groupe19884.png",
                                  className: "img-fluid",
                                  alt: "distributor",
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className:
                                  "col-lg-7 align-items-center distributorBlock pl-0",
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: "col-lg-12 block-text",
                                    "data-aos": "zoom-in-down",
                                    children: [
                                      (0, e.jsx)("h1", {
                                        className:
                                          "textDistributor hero-txt Poppins blue-propos titleDiv",
                                        children:
                                          "R\xe9volutionnez la gestion de vos paiements de masse avec JL PAY Business !",
                                      }),
                                      (0, e.jsx)("br", {}),
                                      (0, e.jsx)("h6", {
                                        className:
                                          "avenir-black blue-propos text-justify  pr-5",
                                        style: {
                                          fontSize: "20px",
                                          fontFamily: "Avenir",
                                        },
                                        children: (0, e.jsx)("div", {
                                          children:
                                            "Que vous soyez une entreprise, une association, une coop\xe9rative, une ONG ou de tout autre secteur professionnel, JL PAY Business est sp\xe9cialement con\xe7u pour r\xe9pondre \xe0 vos besoins.",
                                        }),
                                      }),
                                      (0, e.jsx)("br", {}),
                                      (0, e.jsx)("h6", {
                                        className:
                                          "avenir-black blue-propos text-justify pr-5",
                                        style: {
                                          fontSize: "20px",
                                          fontFamily: "Avenir",
                                        },
                                        children: (0, e.jsx)("div", {
                                          children:
                                            " Simplifiez la gestion des paiements de salaire, des dons gouvernementaux, des fonds sociaux, et bien plus encore. Notre solution professionnelle automatis\xe9e vous permet d\u2019acc\xe9l\xe9rer vos paiements de masse en toute s\xe9curit\xe9. Comptez sur nous pour vous offrir une gestion simplifi\xe9e et efficace de vos transactions financi\xe8res.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: "d-flex justify-content-center",
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: "w-auto pt-3",
                                        children: (0, e.jsx)("button", {
                                          onClick: function () {
                                            return document
                                              .getElementById("demande-demo")
                                              .scrollIntoView({
                                                behavior: "smooth",
                                              });
                                          },
                                          type: "button",
                                          className:
                                            "btn btn-primary cus-btn-open font-weight-900",
                                          children: "Demander une d\xe9mo",
                                        }),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: "w-auto",
                                        children: (0, e.jsx)("img", {
                                          src: "/images/moins_24_heures.png",
                                          className: "img-fluid ml-5",
                                          alt: "distributor",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, e.jsx)("div", {
                          className: "d-block d-lg-none",
                          children: (0, e.jsxs)("div", {
                            className:
                              "mb-lg-5 pb-md-5 hero-content align-items-center px-0",
                            children: [
                              (0, e.jsx)("div", {
                                className: "p-0",
                                children: (0, e.jsx)("img", {
                                  src: "/images/Groupe19884.png",
                                  className: "img-fluid",
                                  alt: "distributor",
                                }),
                              }),
                              (0, e.jsx)("div", {
                                className:
                                  "align-items-center distributorBlock pl-0",
                                children: (0, e.jsxs)("div", {
                                  className:
                                    "col-lg-12 pb-5 mb-md-3 block-text",
                                  "data-aos": "zoom-in-down",
                                  children: [
                                    (0, e.jsx)("h1", {
                                      className:
                                        "textDistributor hero-txt Poppins blue-propos titleDiv",
                                      children:
                                        "R\xe9volutionnez la gestion de vos paiements de masse avec JL PAY Business !",
                                    }),
                                    (0, e.jsx)("br", {}),
                                    (0, e.jsx)("h6", {
                                      className:
                                        "avenir-black blue-propos text-justify",
                                      style: {
                                        fontSize: "20px",
                                        fontFamily: "Avenir",
                                      },
                                      children: (0, e.jsx)("div", {
                                        children:
                                          "Que vous soyez une entreprise, une association, une coop\xe9rative, une ONG ou de tout autre secteur professionnel, JL PAY Business est sp\xe9cialement con\xe7u pour r\xe9pondre \xe0 vos besoins.",
                                      }),
                                    }),
                                    (0, e.jsx)("br", {}),
                                    (0, e.jsx)("h6", {
                                      className:
                                        "avenir-black blue-propos text-justify",
                                      style: {
                                        fontSize: "20px",
                                        fontFamily: "Avenir",
                                      },
                                      children: (0, e.jsx)("div", {
                                        children:
                                          " Simplifiez la gestion des paiements de salaire, des dons gouvernementaux, des fonds sociaux, et bien plus encore. Notre solution professionnelle automatis\xe9e vous permet d\u2019acc\xe9l\xe9rer vos paiements de masse en toute s\xe9curit\xe9. Comptez sur nous pour vous offrir une gestion simplifi\xe9e et efficace de vos transactions financi\xe8res.",
                                      }),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className:
                                        "d-flex flex-column justify-content-center align-content-center text-center",
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: "w-auto pt-3",
                                          children: (0, e.jsx)("button", {
                                            type: "button",
                                            className:
                                              "btn btn-primary cus-btn-open font-weight-900",
                                            onClick: function () {
                                              return document
                                                .getElementById("demande-demo")
                                                .scrollIntoView({
                                                  behavior: "smooth",
                                                });
                                            },
                                            children: "Demander une d\xe9mo",
                                          }),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: "w-auto",
                                          children: (0, e.jsx)("img", {
                                            src: "/images/moins_24_heures.png",
                                            className: "img-fluid w-25",
                                            alt: "distributor",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("section", {
                  className: "bg-white mb-5 mt-5 mt-lg-5 mx-auto",
                  id: "cards",
                  children: [
                    (0, e.jsx)("div", {
                      className: "container mb-5",
                      children: (0, e.jsxs)("div", {
                        className: "row row-cols-1 row-cols-sm-2 row-cols-lg-4",
                        children: [
                          (0, e.jsx)("div", {
                            className: "col mb-4 mb-lg-0",
                            children: (0, e.jsx)("div", {
                              className: "card-pb",
                              children: (0, e.jsxs)("div", {
                                className: "card-pb-body",
                                children: [
                                  (0, e.jsx)("div", {
                                    className: "lottie green",
                                    children: (0, e.jsx)(d.Z, {
                                      options: {
                                        loop: !0,
                                        autoplay: !0,
                                        animationData: h,
                                      },
                                      height: 100,
                                      width: 100,
                                    }),
                                  }),
                                  (0, e.jsx)("span", {
                                    className: "card-pb-title",
                                    children: "Efficacit\xe9",
                                  }),
                                  (0, e.jsx)("p", {
                                    className: "card-pb-paragraph",
                                    children:
                                      "Automatisez les processus avec JL PAY Business et gagnez du temps pr\xe9cieux pour vous concentrer sur d\u2019autres aspects de votre entreprise.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "col mb-4 mb-lg-0",
                            children: (0, e.jsx)("div", {
                              className: "card-pb",
                              children: (0, e.jsxs)("div", {
                                className: "card-pb-body",
                                children: [
                                  (0, e.jsx)("div", {
                                    className: "lottie blue",
                                    children: (0, e.jsx)(d.Z, {
                                      options: {
                                        loop: !0,
                                        autoplay: !0,
                                        animationData: u,
                                      },
                                      height: 100,
                                      width: 100,
                                    }),
                                  }),
                                  (0, e.jsx)("span", {
                                    className: "card-pb-title",
                                    children: "S\xe9curit\xe9",
                                  }),
                                  (0, e.jsx)("p", {
                                    className: "card-pb-paragraph",
                                    children:
                                      "Notre solution garantit la s\xe9curit\xe9 de vos transactions financi\xe8res. Vous pouvez compter sur nous pour prot\xe9ger vos donn\xe9es et celles de vos b\xe9n\xe9ficiaires.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "col mb-4 mb-lg-0",
                            children: (0, e.jsx)("div", {
                              className: "card-pb",
                              children: (0, e.jsxs)("div", {
                                className: "card-pb-body",
                                children: [
                                  (0, e.jsx)("div", {
                                    className: "lottie green",
                                    children: (0, e.jsx)(d.Z, {
                                      options: {
                                        loop: !0,
                                        autoplay: !0,
                                        animationData: f,
                                      },
                                      height: 100,
                                      width: 100,
                                    }),
                                  }),
                                  (0, e.jsx)("span", {
                                    className: "card-pb-title",
                                    children: "Simplicit\xe9",
                                  }),
                                  (0, e.jsx)("p", {
                                    className: "card-pb-paragraph",
                                    children:
                                      "Notre plateforme intuitive, accessible depuis n\u2019importe quelle position, vous permet de g\xe9rer facilement vos flux financiers.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: "col mb-4 mb-lg-0",
                            children: (0, e.jsx)("div", {
                              className: "card-pb",
                              children: (0, e.jsxs)("div", {
                                className: "card-pb-body",
                                children: [
                                  (0, e.jsx)("div", {
                                    className: "lottie blue",
                                    children: (0, e.jsx)(d.Z, {
                                      options: {
                                        loop: !0,
                                        autoplay: !0,
                                        animationData: y,
                                      },
                                      height: 100,
                                      width: 100,
                                    }),
                                  }),
                                  (0, e.jsx)("span", {
                                    className: "card-pb-title",
                                    children: "Rapidit\xe9",
                                  }),
                                  (0, e.jsx)("p", {
                                    className: "card-pb-paragraph",
                                    children:
                                      "Nous vous garantissons un traitement plus rapide de vos paiements de masse, \xe9vitant ainsi les retards et assurant une meilleure fluidit\xe9 dans vos op\xe9rations.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: "row justify-content-center",
                      children: (0, e.jsx)("p", {
                        className: "d-none d-block w-50 text-center",
                        children:
                          "Votre performance est primordiale. Notre solution est sp\xe9cialement con\xe7ue pour s\u2019int\xe9grer parfaitement \xe0 votre infrastructure existante, avec une approche flexible qui s\u2019adapte \xe0 vos besoins sp\xe9cifiques.",
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)("section", {
                  className: "mb-5 mx-4",
                  children: (0, e.jsx)(x.Z, {
                    children: (0, e.jsx)(r.Z, {
                      id: "demande-demo",
                      children: (0, e.jsx)(l.Z, {
                        noValidate: !0,
                        validated: R,
                        onSubmit: function (a) {
                          var i = a.currentTarget,
                            e = D.replace(/\s/g, "");
                          if (!/^(01|05|07)\d{8}$/.test(e))
                            return (
                              s(!1),
                              z(!1),
                              q(!1),
                              a.stopPropagation(),
                              void a.preventDefault()
                            );
                          !1 === i.checkValidity() && a.stopPropagation(),
                            a.preventDefault(),
                            z(!0),
                            q(!0);
                        },
                        style: { marginBottom: "5%" },
                        className:
                          "shadow becomeDistributor bg-white rounded position-relative",
                        children: (0, e.jsxs)("div", {
                          className: "position-relative",
                          children: [
                            (0, e.jsx)("div", {
                              className: "loader rounded ".concat(
                                !U && "d-none"
                              ),
                              children: (0, e.jsx)(n.Z, {
                                animation: "grow",
                                className: "position-absolute",
                                style: {
                                  bottom: 0,
                                  top: "45%",
                                  color: "#98ca53",
                                },
                              }),
                            }),
                            (0, e.jsx)("p", {
                              className: "titleDiv text-center py-5",
                              children: "Demande de d\xe9mo",
                            }),
                            (0, e.jsx)("p", {
                              className: "titleDiv text-center py-5 d-none",
                              children: "Demande de d\xe9mo",
                            }),
                            (0, e.jsxs)(r.Z, {
                              className: "justify-content-center mb-lg-3",
                              children: [
                                (0, e.jsx)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  controlId: "firstname",
                                  className:
                                    "position-relative group-fields mb-3 mb-lg-0",
                                  children: (0, e.jsxs)("div", {
                                    className: "float-label-control",
                                    children: [
                                      (0, e.jsx)(l.Z.Control, {
                                        type: "text",
                                        name: "firstname",
                                        placeholder: "",
                                        value: b,
                                        onChange: function (a) {
                                          return v(a.target.value);
                                        },
                                        className: "fields w-100",
                                        required: !0,
                                      }),
                                      (0, e.jsx)("label", { children: "Nom" }),
                                    ],
                                  }),
                                }),
                                (0, e.jsx)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  controlId: "lastname",
                                  className:
                                    "position-relative group-fields mb-3 mb-lg-0",
                                  children: (0, e.jsxs)("div", {
                                    className: "float-label-control",
                                    children: [
                                      (0, e.jsx)(l.Z.Control, {
                                        type: "text",
                                        name: "lastname",
                                        placeholder: "",
                                        value: j,
                                        onChange: function (a) {
                                          return S(a.target.value);
                                        },
                                        className: "fields w-100",
                                        required: !0,
                                      }),
                                      (0, e.jsx)("label", {
                                        children: "Pr\xe9noms",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, e.jsxs)(r.Z, {
                              className: "justify-content-center mb-lg-3",
                              children: [
                                (0, e.jsxs)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  controlId: "contact",
                                  className:
                                    "position-relative group-fields mb-3 mb-lg-0",
                                  required: !0,
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: "float-label-control",
                                      children: [
                                        (0, e.jsx)(p.HH, {
                                          name: "contact",
                                          placeholder: "",
                                          value: D,
                                          className:
                                            "fields form-control w-100  ".concat(
                                              i ? "" : "is-invalid"
                                            ),
                                          onValueChange: function (a) {
                                            var i = a.formattedValue.replace(
                                              /\s/g,
                                              ""
                                            );
                                            /^(01|05|07)\d{8}$/.test(i)
                                              ? s(!0)
                                              : (z(!1), q(!1), s(!1)),
                                              A(a.formattedValue);
                                          },
                                          required: !0,
                                          format: "## ## ## ## ##",
                                        }),
                                        (0, e.jsx)("label", {
                                          children: "Contact",
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(l.Z.Control.Feedback, {
                                      type: "invalid",
                                      tooltip: !0,
                                      children: " Ce champ est requis",
                                    }),
                                  ],
                                }),
                                (0, e.jsx)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  controlId: "email",
                                  className:
                                    "position-relative group-fields mb-lg-0",
                                  children: (0, e.jsxs)("div", {
                                    className: "float-label-control",
                                    children: [
                                      (0, e.jsx)(l.Z.Control, {
                                        type: "email",
                                        name: "email",
                                        placeholder: "",
                                        value: G,
                                        onChange: function (a) {
                                          return V(a.target.value);
                                        },
                                        required: !0,
                                        className: "fields w-100",
                                      }),
                                      (0, e.jsx)("label", {
                                        children: "Email",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, e.jsx)(r.Z, {
                              className: "justify-content-center mt-5",
                              children: (0, e.jsx)("div", {
                                className: "divider",
                              }),
                            }),
                            (0, e.jsxs)(r.Z, {
                              className: "justify-content-center mb-3 mb-lg-5",
                              children: [
                                (0, e.jsxs)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  controlId: "company_name",
                                  className:
                                    "position-relative group-fields mb-3 mb-lg-0",
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: "float-label-control",
                                      children: [
                                        (0, e.jsx)(l.Z.Control, {
                                          type: "text",
                                          placeholder: "",
                                          name: "company_name",
                                          value: w,
                                          onChange: function (a) {
                                            return P(a.target.value);
                                          },
                                          required: !0,
                                          className: "fields w-100",
                                        }),
                                        (0, e.jsx)("label", {
                                          children: "Nom de l'entreprise",
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)(l.Z.Control.Feedback, {
                                      type: "invalid",
                                      tooltip: !0,
                                      children: "Ce champ est requis",
                                    }),
                                  ],
                                }),
                                (0, e.jsx)(l.Z.Group, {
                                  as: k.Z,
                                  lg: 4,
                                  md: 5,
                                  sm: 12,
                                  xs: 11,
                                  className:
                                    "position-relative group-fields mb-3 mb-lg-0",
                                }),
                              ],
                            }),
                            (0, e.jsx)(r.Z, {
                              className: "justify-content-center mt-4 mt-lg-0",
                              children: (0, e.jsx)(l.Z.Group, {
                                as: k.Z,
                                lg: 8,
                                md: 12,
                                xs: 11,
                                controlId: "comment",
                                className:
                                  "position-relative group-fields mb-3 mb-lg-0",
                                children: (0, e.jsx)(l.Z.Control, {
                                  as: "textarea",
                                  name: "comment",
                                  placeholder:
                                    "D\xe9crivez votre besoin (Facultatif)",
                                  rows: 4,
                                  value: T,
                                  maxLength: 300,
                                  onChange: function (a) {
                                    return M(a.target.value);
                                  },
                                  className: "mx-auto fields w-100",
                                }),
                              }),
                            }),
                            (0, e.jsx)(r.Z, {
                              className:
                                "mx-lg-5 px-lg-0 px-lg-5 mx-0 d-flex justify-content-center mb-3",
                              children: (0, e.jsx)(l.Z.Group, {
                                as: k.Z,
                                md: 12,
                                controlId: "checkbox",
                                className:
                                  "position-relative group-fields px-lg-0 px-lg-2",
                                children: (0, e.jsx)(l.Z.Check, {
                                  value: _,
                                  onChange: function (a) {
                                    return C(a.target.checked);
                                  },
                                  type: "checkbox",
                                  label:
                                    "En cliquant, j'autorise Panelys \xe0 utiliser mes informations renseign\xe9es dans le cadre strict de la prospection et d'une \xe9ventuelle souscription aux services de JL PAY Business.",
                                  className: "mx-auto text-main",
                                }),
                              }),
                            }),
                            (0, e.jsx)("div", {
                              className: "mb-5 text-center",
                              children: O
                                ? (0, e.jsx)("a", {
                                    className:
                                      "btn btn-primary cus-btn-open font-weight-900",
                                    href: "mailto:"
                                      .concat(
                                        "pushbusiness@panelys.com",
                                        "?subject="
                                      )
                                      .concat(
                                        "Demande de d\xe9mo JL PAY Business",
                                        "&body="
                                      )
                                      .concat(encodeURIComponent(W)),
                                    children: "Envoyer",
                                  })
                                : (0, e.jsx)("button", {
                                    type: "submit",
                                    className:
                                      "btn btn-primary cus-btn-open font-weight-900",
                                    disabled: !H(),
                                    children: "Valider",
                                  }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, e.jsx)(m.U, {}),
              ],
            })
          );
        },
        v = b;
      b.getLayout = function (a) {
        return (0, e.jsx)(t.g, { children: a });
      };
    },
    9464: function (a, i, s) {
      "use strict";
      var e = m(s(8239)),
        t = m(s(5105)),
        o = m(s(9663)),
        x = m(s(2600)),
        r = m(s(9135)),
        l = m(s(3196)),
        n = m(s(7294)),
        k = m(s(5697)),
        c = m(s(1248));
      function m(a) {
        return a && a.__esModule ? a : { default: a };
      }
      var p = (function (a) {
        function i() {
          var a, s, e, x;
          (0, o.default)(this, i);
          for (var l = arguments.length, n = Array(l), k = 0; k < l; k++)
            n[k] = arguments[k];
          return (
            (s = e =
              (0, r.default)(
                this,
                (a = i.__proto__ || (0, t.default)(i)).call.apply(
                  a,
                  [this].concat(n)
                )
              )),
            (e.handleClickToPause = function () {
              e.anim.isPaused ? e.anim.play() : e.anim.pause();
            }),
            (x = s),
            (0, r.default)(e, x)
          );
        }
        return (
          (0, l.default)(i, a),
          (0, x.default)(i, [
            {
              key: "componentDidMount",
              value: function () {
                var a = this.props,
                  i = a.options,
                  s = a.eventListeners,
                  t = i.loop,
                  o = i.autoplay,
                  x = i.animationData,
                  r = i.rendererSettings,
                  l = i.segments;
                (this.options = {
                  container: this.el,
                  renderer: "svg",
                  loop: !1 !== t,
                  autoplay: !1 !== o,
                  segments: !1 !== l,
                  animationData: x,
                  rendererSettings: r,
                }),
                  (this.options = (0, e.default)({}, this.options, i)),
                  (this.anim = c.default.loadAnimation(this.options)),
                  this.registerEvents(s);
              },
            },
            {
              key: "componentWillUpdate",
              value: function (a) {
                this.options.animationData !== a.options.animationData &&
                  (this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options = (0, e.default)({}, this.options, a.options)),
                  (this.anim = c.default.loadAnimation(this.options)),
                  this.registerEvents(a.eventListeners));
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.props.isStopped
                  ? this.stop()
                  : this.props.segments
                  ? this.playSegments()
                  : this.play(),
                  this.pause(),
                  this.setSpeed(),
                  this.setDirection();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options.animationData = null),
                  (this.anim = null);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                this.anim.setSpeed(this.props.speed);
              },
            },
            {
              key: "setDirection",
              value: function () {
                this.anim.setDirection(this.props.direction);
              },
            },
            {
              key: "play",
              value: function () {
                this.anim.play();
              },
            },
            {
              key: "playSegments",
              value: function () {
                this.anim.playSegments(this.props.segments);
              },
            },
            {
              key: "stop",
              value: function () {
                this.anim.stop();
              },
            },
            {
              key: "pause",
              value: function () {
                ((this.props.isPaused && !this.anim.isPaused) ||
                  (!this.props.isPaused && this.anim.isPaused)) &&
                  this.anim.pause();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.anim.destroy();
              },
            },
            {
              key: "registerEvents",
              value: function (a) {
                var i = this;
                a.forEach(function (a) {
                  i.anim.addEventListener(a.eventName, a.callback);
                });
              },
            },
            {
              key: "deRegisterEvents",
              value: function (a) {
                var i = this;
                a.forEach(function (a) {
                  i.anim.removeEventListener(a.eventName, a.callback);
                });
              },
            },
            {
              key: "render",
              value: function () {
                var a = this,
                  i = this.props,
                  s = i.width,
                  t = i.height,
                  o = i.ariaRole,
                  x = i.ariaLabel,
                  r = i.isClickToPauseDisabled,
                  l = i.title,
                  k = function (a) {
                    return "number" === typeof a ? a + "px" : a || "100%";
                  },
                  c = (0, e.default)(
                    {
                      width: k(s),
                      height: k(t),
                      overflow: "hidden",
                      margin: "0 auto",
                      outline: "none",
                    },
                    this.props.style
                  ),
                  m = r
                    ? function () {
                        return null;
                      }
                    : this.handleClickToPause;
                return n.default.createElement("div", {
                  ref: function (i) {
                    a.el = i;
                  },
                  style: c,
                  onClick: m,
                  title: l,
                  role: o,
                  "aria-label": x,
                  tabIndex: "0",
                });
              },
            },
          ]),
          i
        );
      })(n.default.Component);
      (i.Z = p),
        (p.propTypes = {
          eventListeners: k.default.arrayOf(k.default.object),
          options: k.default.object.isRequired,
          height: k.default.oneOfType([k.default.string, k.default.number]),
          width: k.default.oneOfType([k.default.string, k.default.number]),
          isStopped: k.default.bool,
          isPaused: k.default.bool,
          speed: k.default.number,
          segments: k.default.arrayOf(k.default.number),
          direction: k.default.number,
          ariaRole: k.default.string,
          ariaLabel: k.default.string,
          isClickToPauseDisabled: k.default.bool,
          title: k.default.string,
          style: k.default.string,
        }),
        (p.defaultProps = {
          eventListeners: [],
          isStopped: !1,
          isPaused: !1,
          speed: 1,
          ariaRole: "button",
          ariaLabel: "animation",
          isClickToPauseDisabled: !1,
          title: "",
        });
    },
  },
  function (a) {
    a.O(0, [296, 910, 774, 888, 179], function () {
      return (i = 8788), a((a.s = i));
      var i;
    });
    var i = a.O();
    _N_E = i;
  },
]);
