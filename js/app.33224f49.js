(function(t) {
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
      o.d = function(t, a, e) {
        o.o(t, a) || Object.defineProperty(t, a, {
          enumerable: !0,
          get: e
        })
      },
      o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
            Object.defineProperty(t, "__esModule", {
              value: !0
            })
      },
      o.t = function(t, a) {
        if (1 & a && (t = o(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (o.r(e), Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        }), 2 & a && "string" != typeof t) for (var r in t) o.d(e, r,
            function(a) {
              return t[a]
            }.bind(null, r));
        return e
      },
      o.n = function(t) {
        var a = t && t.__esModule ?
            function() {
              return t["default"]
            }: function() {
              return t
            };
        return o.d(a, "a", a),
            a
      },
      o.o = function(t, a) {
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
  0 : function(t, a, e) {
    t.exports = e("56d7")
  },
  "034f": function(t, a, e) {
    "use strict";
    var r = e("85ec"),
        i = e.n(r);
    i.a
  },
  1465 : function(t, a, e) {},
  "2c94": function(t, a, e) {},
  "2f56": function(t, a, e) {
    "use strict";
    var r = e("1465"),
        i = e.n(r);
    i.a
  },
  "56d7": function(t, a, e) {
    "use strict";
    e.r(a);
    e("e260"),
        e("e6cf"),
        e("cca6"),
        e("a79d");
    var r = e("2b0e"),
        i = function() {
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
                                  href: "#publications"
                                }
                              },
                              [t._v("Research")]), 
                              
                              e("b-nav-item", {
                                staticStyle: {
                                  color: "white"
                                },
                                attrs: {
                                  href: "#experience"
                                }
                              }, 
                              [t._v("Experience")]), 
                              e("b-nav-item", {
                                staticStyle: {
                                  color: "white"
                                },
                                attrs: {
                                  // target: "_blank",
                                  href: "./publication.html"
                                }
                              },
                                [t._v("Publications")]),
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
                            ], 1)], 1)], 1), e("b-container", {
                    staticStyle: {
                      padding: "0"
                    }
                  },
                  [e("b-col", [e("b-row", {
                        staticStyle: {
                          padding: "0"
                        },
                        attrs: {
                          id: "myself"
                        }
                      },
                      [e("b-col", {
                            staticStyle: {
                              padding: "0"
															
                            },
                            attrs: {
                              sm: "4",
                              id: "photo"
                            }
                          },
                          [e("b-card", {
                                staticStyle: {
                                  border: "0px",
																	margin: "3vw 0 1vw 0"
                                },
                                attrs: {
                                  "no-body": ""
                                }
                              },
                              [e("b-card-body", [e("b-avatar", {
                                attrs: {
                                  src: "lifephoto.jpg",
                                  size: "60%"
                                }
                              })], 1), e("b-card-body", {
                                    staticStyle: {
                                      padding: "0 0 1.5vw 0"
                                    }
                                  },
                                  [e("b-list-group", {
                                        staticClass: "socials detail",
                                        staticStyle: {
                                          width: "80%",
                                          "margin-left": "5vw",
                                          "margin-right": "0",
                                          "font-size": "16px",
                                        }
                                      },
                                      [e("b-list-group-item", {
                                            staticStyle: {
                                              float: "left",
                                              border: "0px",
                                              "text-align": "left",
                                              padding: "0 0 0 2vw"
                                            },
                                            attrs: {
                                              href: "mailto: 2011398@tongji.edu.cn "
                                            }
                                          },
                                          [e("i", [e("svg", {
                                                staticClass: "svg-inline--fa fa-envelope fa-w-16 ",
                                                staticStyle: {
                                                  width: "20px"
                                                },
                                                attrs: {
                                                  "aria-hidden": "true",
                                                  focusable: "false",
                                                  "data-prefix": "fas",
                                                  "data-icon": "envelope",
                                                  role: "img",
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 512 512",
                                                  transform: "translate(0, -2)"
                                                }
                                              },
                                              [e("path", {
                                                attrs: {
                                                  fill: "currentColor",
                                                  d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                                }
                                              })])]), t._v(" 2011398@tongji.edu.cn ")]), 
																					// 		e("b-list-group-item", {
                                          //   staticStyle: {
                                          //     "align-self": "start",
                                          //     border: "0px",
                                          //     "text-align": "left",
                                          //     padding: "0 2vw"
                                          //   },
                                          //   attrs: {
                                          //     href: "https://github.com/liht1996"
                                          //   }
                                          // },
                                          // [e("i", [e("svg", {
                                          //       staticClass: "svg-inline--fa fa-github fa-w-16 ",
                                          //       staticStyle: {
                                          //         width: "20px"
                                          //       },
                                          //       attrs: {
                                          //         "aria-hidden": "true",
                                          //         focusable: "false",
                                          //         "data-prefix": "fab",
                                          //         "data-icon": "github",
                                          //         role: "img",
                                          //         xmlns: "http://www.w3.org/2000/svg",
                                          //         viewBox: "0 0 496 512",
                                          //         transform: "translate(0, -2)"
                                          //       }
                                          //     },
                                          //     [e("path", {
                                          //       attrs: {
                                          //         fill: "currentColor",
                                          //         d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                          //       }
                                          //     })])]), t._v(" GitHub ")])
																					, e("b-list-group-item", {
                                            staticStyle: {
                                              "align-self": "start",
                                              border: "0px",
                                              "text-align": "left",
                                              padding: "0 2vw"
                                            },
                                            attrs: {
                                              href: "https://scholar.google.com/citations?hl=en&authuser=2&user=MmLFH_MAAAAJ"
                                            }
                                          },
                                          [e("i", [e("svg", {
                                                staticClass: "svg-inline--fa fa-graduation-cap fa-w-20 ",
                                                staticStyle: {
                                                  width: "20px"
                                                },
                                                attrs: {
                                                  "aria-hidden": "true",
                                                  focusable: "false",
                                                  "data-prefix": "fas",
                                                  "data-icon": "graduation-cap",
                                                  role: "img",
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 640 512",
                                                  transform: "translate(0, -2)"
                                                }
                                              },
                                              [e("path", {
                                                attrs: {
                                                  fill: "currentColor",
                                                  d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                                                }
                                              })])]), t._v(" Google Scholar ")])
																					// 		, e("b-list-group-item", {
                                          //   staticStyle: {
                                          //     "align-self": "start",
                                          //     border: "0px",
                                          //     "text-align": "left",
                                          //     padding: "0 2vw"
                                          //   },
                                          //   attrs: {
                                          //     href: "https://www.linkedin.com/in/haotian-li-7264201b2/"
                                          //   }
                                          // }
                                          // [e("i", [e("svg", {
                                          //       staticClass: "svg-inline--fa fa-linkedin fa-w-14 ",
                                          //       staticStyle: {
                                          //         width: "20px"
                                          //       },
                                          //       attrs: {
                                          //         "aria-hidden": "true",
                                          //         focusable: "false",
                                          //         "data-prefix": "fab",
                                          //         "data-icon": "linkedin",
                                          //         role: "img",
                                          //         xmlns: "http://www.w3.org/2000/svg",
                                          //         viewBox: "0 0 448 512",
                                          //         transform: "translate(0, -2)"
                                          //       }
                                          //     },
                                          //     [e("path", {
                                          //       attrs: {
                                          //         fill: "currentColor",
                                          //         d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                          //       }
                                          //     })])]), t._v(" LinkedIn ")])
																				], 1)], 1)], 1)], 1),
																							 e("b-col", {
                            staticStyle: {
                              padding: "0"
                            },
                            attrs: {
                              sm: "8",
                              id: "intro"
                            }
																						},
                          [e("b-card", {
                                staticStyle: {
                                  "text-align": "left",
                                  border: "0px",
                                  color: "black"
                                }
                              },
                              [e("p", {
                                    staticStyle: {
                                      margin: "4vw 0 1vw 0"
                                    }
                                  },
                                  [t._v("I am currently a PhD candidate in Bioinformatics Department at Tongji University (TJU), supervised by "), 
                                  e("a", {
                                        // staticStyle: {
                                        //   color: "black"
                                        // },
                                        attrs: {
                                          href: "http://life.tongji.edu.cn/03/28/c12618a131880/page.htm",
                                          target: "_blank"
                                        }
                                      },
                                      [e("u", [t._v("Prof. Qi Liu")])]), 
                                      t._v(" in ")
                                      ,
                                      e("a", {
                                        // staticStyle: {
                                        //   color: "black"
                                        // },
                                        attrs: {
                                          href: "https://ai4omics.github.io/",
                                          target: "_blank"
                                        }
                                      },
                                      [e("u", [t._v("BM2 Lab") ])]),  
                                      t._v(". Now, I am also a Visiting Scholar of Helmholtz Munich, supervised by  "), 
                                      e("a", {
                                        // staticStyle: {
                                        //   color: "black"
                                        // },
                                        attrs: {
                                          href: "https://scholar.google.com/citations?user=sqWpn2AAAAAJ&hl=en",
                                          target: "_blank"
                                        }
                                      },
                                      [e("u", [t._v("Prof. Fabian J. Theis")])]),
                                      t._v(". I was a Research Intern in the AI/ML group at Microsoft Research Asia, mentored by  "),
                                      e("a", {
                                        // staticStyle: {
                                        //   color: "black"
                                        // },
                                        attrs: {
                                          href: "https://www.microsoft.com/en-us/research/people/caihuashan/",
                                          target: "_blank"
                                        }
                                      },
                                      [e("u", [t._v("Dr. Caihua Shan")])]), t._v(" and "),
                                      e("a", {
                                        // staticStyle: {
                                        //   color: "black"
                                        // },
                                        attrs: {
                                          href: "http://recmind.cn/",
                                          target: "_blank"
                                        }
                                      },
                                      [e("u", [t._v("Dr. Dongsheng Li")])]),t._v(". "),
                                    ]), 

																			e("p", [t._v("My main research interests are "), e("b", [t._v("Bioinformatics")]), t._v(", "), 
                                      e("b", [t._v("Computational Biology")]), t._v(", "), e("b", [t._v("Artificial Intelligence")]), t._v(" and "), e("b", [t._v("Machine Learning")]), t._v(".")]),
                                      e("p",[t._v("Specifically, My main research direction is "), e("b", [t._v("AI virtual cell construction")]), t._v(", including:")]), 
                                      e("b",[t._v("1. Cell disentanglement and counterfactual generation")]),
                                      e("p",[t._v("")]),
                                      e("b",[t._v("2. Cell perturbation prediction")]),
                                      e("p",[t._v("")]),
                                      e("b",[t._v("3. Multi-modal representation")]), 
                                      e("p",[t._v("")]),
                                      e("b",[t._v("4. Protein-protein interaction modeling")]), 
                                      e("p",[t._v("")]),
                                      e("p",[t._v("Besides, I am also interested in "), e("b", [t._v("bridging the gap between LLM and single-cell omics data")]), t._v(", such as using LLM reasoning capability to study omics data and building agent system for single-cell domain.")]), 
                                      e("b",{ style: "color: red" }, [t._v("Now, He is actively looking for a faculty or postdoctoral research position starting in 2026!")]), 
                                      e("p",[t._v("")]),
                                      e("p",[t._v("Feel Free to drop an email: gao.yicheng.98@gmail.com or 2011398@tongji.edu.cn")]), 
                                    ])], 1)], 1), 
																			
																		e("b-row", {
                        attrs: {
                          id: "news"
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
                          [e("b-card-header", {
                                staticStyle: {
                                  "font-size": "22px",
                                  "text-align": "left",
                                  "font-weight": "bold",
                                  border: "0px",
                                  background: "white"
                                }
                              },
                              [t._v(" News ")]), e("b-card-body", {
                                staticStyle: {
                                  border: "0px",
                                  padding: "5px 5px 5px 5vw", 
                                  height: "200px", 
                                  background: "white",
                                  "overflow-y": "auto", 
                                  "text-align": "left"
                                }
                              },
                              [t.news ? e("b-list-group", 
                                t._l(t.news, (function(t, a) {
                                return e("news", {
                                  key: "news_" + a, 
                                  // staticClass: "news-item"
                                  attrs: {
                                    data: t
                                  }
                                })
                                })), 1) : t._e(), 
                                e("p", [t._v("• [Sep 2025] Our work accepted by Genome Biology")]), 
                                e("p", [t._v("• [Sep 2025] Our work accepted by Cell Systems")]), 
                                e("p", [t._v("• [July 2025] Join Fabian Theis's lab as a visiting scholar")]), 
                                e("p", [t._v("• [Jun 2025] Our work accepted by Nature Communications and highlighted by Nature Communications!")]), 
                                e("p", [t._v("• [Jun 2025] Awarded the \"Potential Qingyuan Scholar\" of CAAI")]), 
                                e("p", [t._v("• [May 2025] Get the support of Shanghai Interdisciplinary Innovation Foundation, 50K RMB")]), 
                                e("p", [t._v("• [Jan 2025] Get the support of NSFC, 300K RMB")]), 
                                e("p", [t._v("• [Otc 2024] Awarded the \"Academic Pioneer\" at Tongji University!")]), 
                                e("p", [t._v("• [Otc 2024] Our one article in Nature Computational Science was highlighted!")]),
                                e("p", [t._v("• [Otc 2024] Awarded the \"Stars of Tomorrow\" in MSR!")]), 
                                e("p", [t._v("• [Sep 2024] Our work accepted by Nucleic Acid Research!")]), 
                              e("p", [t._v("• [Aug 2024] Our work accepted by Nature Computational Science!")]), 
                              e("p", [t._v("• [Aug 2024] Our one letter accepted by Nature Computational Science!")]), 
                              e("p", [t._v("• [May 2024] One article in Cell Genomics was annonated as a Featured Article!")]),
                              e("p", [t._v("• [Apr 2024] Our work accepted accept by Cell Genomics!")]), 
                              e("p", [t._v("• [Jan 2024] Our one work in Nature Machine Intelligence was selected as ESI highly cited")]),
                              e("p", [t._v("• [Dec 2023] Join Microsoft Research Asia as an intern.")]), 
                              e("p", [t._v("• [Sep 2023] Our one letter accepted by Nature Machine Intelligence.")]), 
                              e("p", [t._v("• [Mar 2023] Our one article in Nature Machine Intelligence was highlighted!")]),
                              e("p", [t._v("• [Jan 2023] Our one article accepted by Nature Machine Intelligence!")]), 
                              e("p", [t._v("• [Sep 2020] Join BM2 labs at Tongji University!")]),
                            ], 1)], 1)], 1), 
															
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
                              [t._v(" Main Publications")]) : t._e(), t._l(t.publication_years, (function(a) {
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
                                    [e("b-list-group", t._l(t.publications[a], (function(t, a) {
                                      return e("publication", {
                                        key: "pub_" + a,
                                        attrs: {
                                          data: t
                                        }
                                      })
                                    })), 1)], 1)], 1)
                          }))], 2)], 1), 

                    e("b-row", {
                              attrs: {
                                id: "otherpubs"
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
                              [t.publications ? e("b-card-header", {
                                  staticStyle: {
                                    "font-size": "22px",
                                    "text-align": "left",
                                    "font-weight": "bold",
                                    border: "0px",
                                    background: "white"
                                  }
                                },
                                [t._v("Other Publications")]) : t._e(), e("b-card-body", {
                                  staticStyle: {
                                    border: "0px",
                                    padding: "5px 5px 5px 5vw",
                                    "text-align": "left"
                                  }
                                },
                                [e("b-list-group", {
                                    staticStyle: {
                                      border: "0px"
                                    }
                                  },
                                  [e("b-list-group-item", {
                                      staticStyle: {
                                        border: "0px"
                                      }
                                    },
                                    [e("b-row", 
                                    [e("b-col", {attrs: {cols: "12"}},
                                      [
                                      e("div", {staticStyle: {"margin-bottom": "25px"}}, [
                                        e("p", {staticStyle: {"font-weight": "bold", "margin-bottom": "5px"}}, 
                                        [t._v("Benchmarking algorithms for generalizable single-cell perturbation response prediction")]
                                      ),
                                      e("p", {staticStyle: {"margin-bottom": "5px"}},
                                        [t._v("Zhiting Wei*, Yiheng Wang*, "), e("b", [t._v("Yicheng Gao*")]), t._v(", Shuguang Wang*, Ping Li, Duanmiao Si, Yuli Gao, Siqi Wu, Danlu Li, Kejing Dong, Xingbo Yang, Chen Tang, Shaliu Fu, Xiaohan Chen, Wannian Li, Yuzhou You, Chen Zhang, Aibin Liang, Guohui Chuai, Qi Liu")]
                                      ),
                                      e("p", {staticStyle: {"font-style": "italic", "margin-bottom": "0"}},
                                        [t._v("Nature Methods, 2025")]
                                      ),
                                      ]),

                                      e("div", {staticStyle: {"margin-bottom": "25px"}}, [
                                        e("p", {staticStyle: {"font-weight": "bold", "margin-bottom": "5px"}}, 
                                        [t._v("Benchmarking multi-slice integration and downstream applications in spatial transcriptomics data analysis")]
                                      ),
                                      e("p", {staticStyle: {"margin-bottom": "5px"}},
                                        [t._v("Kejing Dong*, "), e("b", [t._v("Yicheng Gao*")]), t._v(", Qi Zou, Yan Cui, Chuangyi Han, Senlin Lin, Zhikang Wang, Chen Tang, Xiaojie Cheng, Fangliangzi Meng, Xiaohan Chen, Shuguang Wang, Xuan Jin, Jingya Yang, Chen Zhang, Guohui Chuai, Zhiyuan Yuan, Qi Liu")]
                                      ),
                                      e("p", {staticStyle: {"font-style": "italic", "margin-bottom": "0"}},
                                        [t._v("Genome Biology, 2025")]
                                      ),
                                      ]),

                                      e("div", {staticStyle: {"margin-bottom": "25px"}}, [
                                        e("p", {staticStyle: {"font-weight": "bold", "margin-bottom": "5px"}}, 
                                        [t._v("Weakly-supervised peptide-TCR binding prediction facilitates neoantigen identification")]
                                      ),
                                      e("p", {staticStyle: {"margin-bottom": "5px"}},
                                        [t._v("Yuli Gao*, "), e("b", [t._v("Yicheng Gao*")]), t._v(", Siqi Wu*, Danlu Li, Chi Zhou, Fangliangzi Meng, Kejing Dong, Xueying Zhao, Ping Li, Aibin Zhang, Qi Liu")]
                                      ),
                                      e("p", {staticStyle: {"font-style": "italic", "margin-bottom": "0"}},
                                        [t._v("Cell Systems, 2025")]
                                      ),
                                      ]),
                                  
                                      e("div", {staticStyle: {"margin-bottom": "25px"}}, [
                                        e("p", {staticStyle: {"font-weight": "bold", "margin-bottom": "5px"}}, 
                                        [t._v("PerturBase: a comprehensive database for single-cell perturbation data analysis and visualization")]
                                      ),
                                      e("p", {staticStyle: {"margin-bottom": "5px"}},
                                        [t._v("Zhiting Wei*, Duanmiao Si*, Bin Duan*"),e("b", [t._v(", Yicheng Gao*, ")]), t._v("Qian Yu, Ling Guo, Qi Liu")]
                                      ),
                                      e("p", {staticStyle: {"font-style": "italic", "margin-bottom": "0"}},
                                        [t._v("Nucleic Acids Research, 2025")]
                                      ),
                                      ]),

                                    ],)],1)], 1)],1)], 1)], 1)],1),
                          
                          e("b-row", {
                        attrs: {
                          id: "awards"
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
                          [t.publications ? e("b-card-header", {
                                staticStyle: {
                                  "font-size": "22px",
                                  "text-align": "left",
                                  "font-weight": "bold",
                                  border: "0px",
                                  background: "white"
                                }
                              },
                              [t._v(" Awards and Grants ")]) : t._e(), e("b-card-body", {
                                staticStyle: {
                                  border: "0px",
                                  padding: "5px 5px 5px 5vw",
                                  "text-align": "left"
                                }
                              },
                              [e("b-list-group", {
                                    staticStyle: {
                                      border: "0px"
                                    }
                                  },
                                  [e("b-list-group-item", {
                                        staticStyle: {
                                          border: "0px"
                                        }
                                      },
                                      [e("b-row", 
                                      [
                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2025")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("National scholarship for PhD students in China (Top 0.2%)")])]),
                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2025")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("Chinese Association for Artificial Intelligence (CAAI) \"Potential Qingyuan Scholar\"")])]), 
                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2025")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("Shanghai Interdisciplinary Innovation Foundation for Intelligent Science & Technology, 50K RMB")])]),    
                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2025")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("National Natural Science Foundation of China (NSFC) Support for PhD student, 300K RMB")])]),                                
                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2024")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("\"Academic Pioneer Award\" at Tongji University (Top 0.05%), ranked 1st")])]),

                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2024")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v(" \"Stars of Tomorrow\" in Microsoft Research (Top 10% interns in MSR)")])]),

                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2024")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("National scholarship for PhD students in China (Top 0.2%)")])]),

                                        e("b-col", {attrs: {cols: "3"}},
                                        [t._v("2023")]),  e("b-col", {attrs: {cols: "9"}},
                                        [e("p", [t._v("National scholarship for PhD students in China (Top 0.2%)")])]),

                                        e("b-col", {attrs: {cols: "3"}},
                                          [t._v("2020")]),  e("b-col", {attrs: {cols: "9"}},
                                          [e("p", [t._v("Tongji University Scholarship for Outstanding Ph.D. Freshman (Top 5%)")])]), 

                                        e("b-col", {attrs: {cols: "3"}}, 
                                        [t._v("2019")]),e("b-col", {attrs: {cols: "9"}},
                                        [e("p", [t._v("The 9th MathorCup University Mathematical Modeling Challenge, First Prize")])]),



                                        ],1)],1)], 1)], 1)], 1)], 1),  e("b-row", {
                        attrs: {
                          id: "experience"
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
                          [t.publications ? e("b-card-header", {
                                staticStyle: {
                                  "font-size": "22px",
                                  "text-align": "left",
                                  "font-weight": "bold",
                                  border: "0px",
                                  background: "white"
                                }
                              },
                              [t._v(" Research/Work Experience ")]) : t._e(), e("b-card-body", {
                                staticStyle: {
                                  border: "0px",
                                  padding: "5px 5px 5px 5vw",
                                  "text-align": "left"
                                }
                              },
                              [e("b-list-group", {
                                    staticStyle: {
                                      border: "0px"
                                    }
                                  },
                                  [e("b-list-group-item", {
                                        staticStyle: {
                                          border: "0px"
                                        }
                                      },
                                      [e("b-row", [
                                      e("b-col", {attrs: {cols: "3"}},[t._v("2025.08-2026.02")]), 
                                      e("b-col", {attrs: {cols: "6"}},[e("p", {staticStyle: {margin: "0"}},
                                        [t._v("Visiting Scholar")]), 
                                        t._v("Mentored by "),
                                        e("a",{attrs:{href: "https://scholar.google.com/citations?user=sqWpn2AAAAAJ&hl=en",
                                        target: "_blank"}}, [e("u",[t._v("Prof. Fabian J. Theis")])]), 
                                        e("p", [t._v("Helmholtz Munich, Munich, Germany")])]), 
                                        e("b-col", {attrs: {cols: "3"}},[e("img",{attrs:{src:"./logos/helmholtz.svg",alt:"Logo", width:"150"}})]),
                                        
                                        e("b-col", {attrs: {cols: "3"}},[t._v("2023.12-2024.10")]), 
                                      e("b-col", {attrs: {cols: "6"}},[e("p", {staticStyle: {margin: "0"}},
                                        [t._v("Intern, AI/ML group")]), 
                                        
                                        t._v("Mentored by "),
                                        e("a",{attrs:{href: "https://www.microsoft.com/en-us/research/people/caihuashan/",
                                        target: "_blank"}}, [e("u",[t._v("Dr. Caihua Shan")])]), 
                                        t._v(" and "), 
                                        e("a",{attrs:{href: "http://recmind.cn/",
                                        target: "_blank"}}, [e("u",[t._v("Dr. Dongsheng Li")])]),

                                        e("p", [t._v("Microsoft Research Asia, Shanghai, China")])]), 

                                        e("b-col", {attrs: {cols: "3"}},[e("img",{attrs:{src:"./logos/Microsoft.png",alt:"Logo", width:"150"}})]),     

                                        e("b-col", {attrs: {cols: "3"}},[t._v("2020.07-2020.09")]), 
                                      e("b-col", {attrs: {cols: "6"}},[e("p", {staticStyle: {margin: "0"}},
                                        [t._v("Summer Intern, Algorithm Engineer")]), e("p", [t._v("BGI Genomics, Shenzhen, Guangdong, China")])]), 
                                        e("b-col", {attrs: {cols: "3"}},[e("img",{attrs:{src:"./logos/BGI.jpg",alt:"Logo", width:"150"}})]),

                                        e("b-col", {attrs: {cols: "3"}},[t._v("2019.07-2019.09")]), 
                                      e("b-col", {attrs: {cols: "6"}},[e("p", {staticStyle: {margin: "0"}},
                                        [t._v("Summer Intern, Algorithm Engineer")]), e("p", [t._v("BGI Genomics, Shenzhen, Guangdong, China")])]), 
                                        e("b-col", {attrs: {cols: "3"}},[e("img",{attrs:{src:"./logos/BGI.jpg",alt:"Logo", width:"150"}})]),
                                            ], 
                                            1)], 1)], 1)], 1)], 1)], 1), 
                      //                       e("b-row", {
                      //   attrs: {
                      //     id: "teaching"
                      //   }
                      // },
                      // [e("b-card", {
                      //       staticStyle: {
                      //         width: "100%",
                      //         border: "0px",
                      //         padding: "1vw 0 0 0"
                      //       },
                      //       attrs: {
                      //         "no-body": ""
                      //       }
                      //     },
                      //     [t.publications ? e("b-card-header", {
                      //           staticStyle: {
                      //             "font-size": "22px",
                      //             "text-align": "left",
                      //             "font-weight": "bold",
                      //             border: "0px",
                      //             background: "white"
                      //           }
                      //         },
                      //         [t._v(" Teaching Experience ")]) : t._e(), e("b-card-body", {
                      //           staticStyle: {
                      //             border: "0px",
                      //             padding: "5px 5px 5px 5vw",
                      //             "text-align": "left"
                      //           }
                      //         },
                      //         [e("b-list-group", {
                      //               staticStyle: {
                      //                 border: "0px"
                      //               }
                      //             },
                      //             [e("b-list-group-item", {
                      //                   staticStyle: {
                      //                     border: "0px"
                      //                   }
                      //                 },
                      //                 [e("b-row", [e("b-col", {
                      //                       attrs: {
                      //                         cols: "3"
                      //                       }
                      //                     },
                      //                     [t._v("2021 Fall")]), e("b-col", {
                      //                       attrs: {
                      //                         cols: "9"
                      //                       }
                      //                     },
                      //                     [e("p", [t._v("Teaching Assistant, Data Visualization and Application, School of Data Science, Fudan")])]), ], 1)], 1)], 1)], 1)], 1)], 1)
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
        m = function() {
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
        z = function() {
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
                      padding: "3px"
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
                              md: "3"
                            }
                          },
                          [e("b-card-img", {
                            staticClass: "rounded-0",
                            staticStyle: {
                              width: "90%",
															position: "relative",
                              top: "50%",left: "50%",
															transform: "translate(-50%,-50%)",
                            },
                            attrs: {
                              src: t.data.image,
                              alt: "Image",
                            }
                          })], 1), e("b-col", {
                            attrs: {
                              md: "9"
                            }
                          },
                          [e("b-card-body", {
                                staticStyle: {
                                  padding: "5px",
                                  // display:"inline",
                                }
                              },
                              [e("b-card-text", {
                                staticStyle: {
                                  "margin-bottom": "0.5em",
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
                                  "margin-top": "0.3em",
                                  "margin-bottom": "0.5em",
                                  "font-size": "16px"
                                },
                                domProps: {
                                  innerHTML: t._s(t.data.booktitle)
                                }
                              }), t._l(Object.keys(t.data.links), (function(a) {
                                return e("b-button", {
                                      key: "link_" + a,
                                      staticStyle: {
                                        "margin-right": "10px",
                                        padding: "3px",
                                        "font-size": "12px"
                                      },
                                      attrs: {
                                        target: "_blank",
                                        href: t.data.links[a],
                                        variant: "outline-secondary"
                                      }
                                    },
                                    [t._v(" " + t._s(a) + " ")])
                              }))], 2)], 1)], 1)], 1)], 1)
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
          data: function() {
            return {
              news: !1,
              publications: !1,
              publication_years: !1
            }
          },
          mounted: function() {
            var t = this;
            U["get"]("news.json").then((function(a) {
              t.news = a.data.data
            })),
                U["get"]("publication.json").then((function(a) {
                  t.publications = a.data.data,
                      t.publication_years = Object.keys(a.data.data),
                      t.publication_years.sort((function(t, a) {
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
          render: function(t) {
            return t(D)
          }
        }).$mount("#app")
  },
  "85ec": function(t, a, e) {},
  badf: function(t, a, e) {
    "use strict";
    var r = e("2c94"),
        i = e.n(r);
    i.a
  }
});
//# sourceMappingURL=app.33224f49.js.map
