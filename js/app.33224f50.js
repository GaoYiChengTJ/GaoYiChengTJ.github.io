(function (t) {
  function a(a) {
    for (var r, o, s = a[0], l = a[1], c = a[2], p = 0, b = []; p < s.length; p++) o = s[p],
      Object.prototype.hasOwnProperty.call(i, o) && i[o] && b.push(i[o][0]),
      i[o] = 0;
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
    d && d(a);
    while (b.length) b.shift()();
    return n.push.apply(n, c || []),
      e()
  }
  function e() {
    for (var t, a = 0; a < n.length; a++) {
      for (var e = n[a], r = !0, s = 1; s < e.length; s++) {
        var l = e[s];
        0 !== i[l] && (r = !1)
      }
      r && (n.splice(a--, 1), t = o(o.s = e[0]))
    }
    return t
  }
  var r = {},
    i = {
      app: 0
    },
    n = [];
  function o(a) {
    if (r[a]) return r[a].exports;
    var e = r[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return t[a].call(e.exports, e, e.exports, o),
      e.l = !0,
      e.exports
  }
  o.m = t,
    o.c = r,
    o.d = function (t, a, e) {
      o.o(t, a) || Object.defineProperty(t, a, {
        enumerable: !0,
        get: e
      })
    },
    o.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(t, "__esModule", {
          value: !0
        })
    },
    o.t = function (t, a) {
      if (1 & a && (t = o(t)), 8 & a) return t;
      if (4 & a && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (o.r(e), Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      }), 2 & a && "string" != typeof t) for (var r in t) o.d(e, r,
        function (a) {
          return t[a]
        }.bind(null, r));
      return e
    },
    o.n = function (t) {
      var a = t && t.__esModule ?
        function () {
          return t["default"]
        } : function () {
          return t
        };
      return o.d(a, "a", a),
        a
    },
    o.o = function (t, a) {
      return Object.prototype.hasOwnProperty.call(t, a)
    },
    o.p = "/";
  var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = s.push.bind(s);
  s.push = a,
    s = s.slice();
  for (var c = 0; c < s.length; c++) a(s[c]);
  var d = l;
  n.push([0, "chunk-vendors"]),
    e()
})({
  0: function (t, a, e) {
    t.exports = e("56d7")
  },
  "034f": function (t, a, e) {
    "use strict";
    var r = e("85ec"),
      i = e.n(r);
    i.a
  },
  1465: function (t, a, e) { },
  "2c94": function (t, a, e) { },
  "2f56": function (t, a, e) {
    "use strict";
    var r = e("1465"),
      i = e.n(r);
    i.a
  },
  "56d7": function (t, a, e) {
    "use strict";
    e.r(a);
    e("e260"),
      e("e6cf"),
      e("cca6"),
      e("a79d");
    var r = e("2b0e"),
      i = function () {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", {
          staticStyle: {
            "margin-left": "auto",
            "margin-right": "auto"
          },
          attrs: {
            id: "app"
          }
        },
          [e("b-navbar", {
            staticStyle: {
              "background-color": "#343a40"
            },
            attrs: {
              toggleable: "lg"
            }
          },
            [e("b-navbar-brand", {
              staticStyle: {
                color: "white",
                font: "26px Avenir, Helvetica, Arial, sans-serif",
                "font-weight": "bold"
              }
            },
              [t._v(" Yicheng Gao ")]), e("b-navbar-toggle", {
                attrs: {
                  target: "nav-collapse"
                }
              }), e("b-collapse", {
                attrs: {
                  id: "nav-collapse",
                  "is-nav": ""
                }
              },
                [e("b-navbar-nav", {
                  staticClass: "ml-auto",
                  staticStyle: {
                    color: "white",
                    font: "22px Avenir, Helvetica, Arial, sans-serif"
                  }
                },
                  [
                  //   e("b-nav-item", {
                  //   staticStyle: {
                  //     color: "white"
                  //   },
                  //   attrs: {
                  //     href: "#publications"
                  //   }
                  // }, 
                  //   [t._v("Research")]), 

                    // e("b-nav-item", {
                    //   staticStyle: {
                    //     color: "white"
                    //   },
                    //   attrs: {
                    //     href: "#experience"
                    //   }
                    // },
                    //   [t._v("Experience")]), 

                      e("b-nav-item", {
                        staticStyle: {
                          color: "white"
                        },
                        attrs: {
                          // target: "_blank",
                          href: "./index.html"
                        }
                      },
                        [t._v("Home")]),

                      e("b-nav-item", {
                        staticStyle: {
                          color: "white"
                        },
                        attrs: {
                          target: "_blank",
                          href: "CV_yichengGao_20251004.pdf"
                        }
                      },
                        [t._v("CV")])
                      
                      ], 1)], 1)], 1), 
                      e("b-container", {
                          staticStyle: {
                            padding: "0"
                          }
                        },
                          [e("b-col", 
                            [e("b-row", {
                            staticStyle: {
                              padding: "0"
                            },
                            attrs: {
                              id: "myself"
                            }
                          },),

                          e("b-row", {
                            attrs: {
                              id: "publications"
                            }
                          },
                            [e("b-card", {
                              staticStyle: {
                                width: "100%",
                                border: "0px",
                                padding: "1vw 0 0 0"
                              },
                              attrs: {
                                "no-body": ""
                              }
                            },
                              [t.publications && t.publication_years ? e("b-card-header", {
                                staticStyle: {
                                  "font-size": "22px",
                                  "text-align": "left",
                                  "font-weight": "bold",
                                  border: "0px",
                                  background: "white"
                                }
                              },
                                [t._v("Publications")]) : t._e(), t._l(t.publication_years, (function (a) {
                                  return e("b-card", {
                                    key: "pubs_" + a,
                                    staticStyle: {
                                      padding: "5px",
                                      border: "0px"
                                    },
                                    attrs: {
                                      "no-body": ""
                                    }
                                  },
                                    [e("b-card-header", {
                                      staticStyle: {
                                        "font-size": "18px",
                                        "text-align": "left",
                                        "font-weight": "bold",
                                        border: "0px",
                                        background: "white",
                                        padding: "5px 5px 5px 5vw"
                                      }
                                    },
                                      [t._v(t._s(a))]), e("b-card-body", {
                                        staticStyle: {
                                          padding: "5px",
                                          border: "0px"
                                        }
                                      },
                                        [e("b-list-group", t._l(t.publications[a], (function (t, a) {
                                          return e("publication", {
                                            key: "pub_" + a,
                                            attrs: {
                                              data: t
                                            }
                                          })
                                        })), 1)], 1)], 1)
                                }))], 2)], 1), 
                              ], 1)], 1)], 1)
      },
      n = [],
      o = (e("b64b"), e("1bbb")),
      s = e("a15b"),
      l = e("b28b"),
      c = e("d0b9"),
      d = e("8f77"),
      p = e("042b"),
      b = e("4711"),
      u = e("205f"),
      g = e("6197"),
      f = e("e8a3"),
      v = e("3135"),
      h = e("d247"),
      w = e("5843"),
      y = e("11a5"),
      x = e("b885"),
      m = function () {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("b-list-group-item", {
          staticStyle: {
            "text-align": "left",
            border: "0px",
            padding: "0.25vw 0 0.25vw 0vw"
          }
        },
          [e("strong", [t._v(t._s(t.data.Date))]), t._v(": "), e("span", {
            domProps: {
              innerHTML: t._s(t.data.Content)
            }
          })])
      },
      _ = [],
      S = {
        name: "News",
        props: ["data"],
        components: {
          BListGroupItem: h["a"]
        }
      },
      C = S,
      k = (e("badf"), e("2877")),
      B = Object(k["a"])(C, m, _, !1, null, "6e49fe38", null),
      H = B.exports,
      z = function () {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("b-list-group-item", {
          staticStyle: {
            "text-align": "left",
            border: "0px",
            padding: "0.5vw 5vw"
          }
        },
          [e("b-card", {
            staticStyle: {
              padding: "0px"
            },
            attrs: {
              nobody: ""
            }
          },
            [e("b-row", {
              attrs: {
                "no-gutters": ""
              }
            },
              [e("b-col", {
                staticStyle: {
                  padding: "1% 0 1%"
                },
                attrs: {
                  md: "0"
                }
              },
                [
                //   e("b-card-img", {
                //   staticClass: "rounded-0",
                //   staticStyle: {
                //     width: "90%",
                //     position: "relative",
                //     top: "50%", left: "50%",
                //     transform: "translate(-50%,-50%)",
                //   },
                //   attrs: {
                //     src: t.data.image,
                //     alt: "Image",
                //   }
                // })
              ]
              , 1), e("b-col", {
                  attrs: {
                    md: "12"
                  }
                },
                  [e("b-card-body", {
                    staticStyle: {
                      padding: "0px",
                      // display:"inline",
                    }
                  },
                    [e("b-card-text", {
                      staticStyle: {
                        "margin-bottom": "0em",
                        "font-size": "18px",
                        "font-weight": "bold"
                      },
                      domProps: {
                        innerHTML: t._s(t.data.title)
                      }
                    }), e("b-card-text", {
                      staticStyle: {
                        margin: "0",
                        "font-size": "16px"
                      },
                      domProps: {
                        innerHTML: t._s(t.data.authors)
                      }
                    }), e("b-card-text", {
                      staticStyle: {
                        "margin-top": "0em",
                        "margin-bottom": "0em",
                        "font-size": "16px"
                      },
                      domProps: {
                        innerHTML: t._s(t.data.booktitle)
                      }
                    }), 
                    // t._l(Object.keys(t.data.links), (function (a) {
                    //   return e("b-button", {
                    //     key: "link_" + a,
                    //     staticStyle: {
                    //       "margin-right": "10px",
                    //       padding: "3px",
                    //       "font-size": "12px"
                    //     },
                    //     attrs: {
                    //       target: "_blank",
                    //       href: t.data.links[a],
                    //       variant: "outline-secondary"
                    //     }
                    //   },
                    //     [t._v(" " + t._s(a) + " ")])
                    // }))
                  ], 2)], 1)], 1)], 1)], 1)
      },
      T = [],
      M = e("1947"),
      L = e("2812"),
      A = e("d6e4"),
      O = {
        name: "Publication",
        props: ["data"],
        components: {
          BListGroupItem: h["a"],
          BCard: u["a"],
          BButton: M["a"],
          BCardHeader: x["a"],
          BCardBody: g["a"],
          BCardImg: L["a"],
          BRow: s["a"],
          BCol: l["a"],
          BCardText: A["a"]
        }
      },
      j = O,
      P = (e("2f56"), Object(k["a"])(j, z, T, !1, null, "f4975af4", null)),
      E = P.exports,
      U = (e("f9e3"), e("2dd8"), e("bc3a")),
      V = {
        name: "App",
        components: {
          BContainer: o["a"],
          BRow: s["a"],
          BCol: l["a"],
          BNavbar: c["a"],
          BNavbarBrand: d["a"],
          BNavbarNav: p["a"],
          BNavItem: b["a"],
          BCard: u["a"],
          BCardBody: g["a"],
          BAvatar: f["a"],
          BListGroup: v["a"],
          BListGroupItem: h["a"],
          BCollapse: w["a"],
          BNavbarToggle: y["a"],
          News: H,
          BCardHeader: x["a"],
          Publication: E
        },
        data: function () {
          return {
            news: !1,
            publications: !1,
            publication_years: !1
          }
        },
        mounted: function () {
          var t = this;
          U["get"]("news.json").then((function (a) {
            t.news = a.data.data
          })),
            U["get"]("allpublication.json").then((function (a) {
              t.publications = a.data.data,
                t.publication_years = Object.keys(a.data.data),
                t.publication_years.sort((function (t, a) {
                  return "Before 2019" == t || t < a ? 1 : -1
                }))
            }))
        }
      },
      I = V,
      K = (e("034f"), Object(k["a"])(I, i, n, !1, null, null, null)),
      D = K.exports;
    r["a"].config.productionTip = !1,
      new r["a"]({
        render: function (t) {
          return t(D)
        }
      }).$mount("#app")
  },
  "85ec": function (t, a, e) { },
  badf: function (t, a, e) {
    "use strict";
    var r = e("2c94"),
      i = e.n(r);
    i.a
  }
});
//# sourceMappingURL=app.33224f49.js.map
