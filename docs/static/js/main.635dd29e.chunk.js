(this['webpackJsonpsorting-algorithm-visualization'] = this['webpackJsonpsorting-algorithm-visualization'] || []).push([
  [0],
  {
    27: function (e, t, c) {},
    34: function (e, t, c) {
      'use strict';
      c.r(t);
      var r = c(0),
        n = c.n(r),
        u = c(20),
        a = c.n(u),
        s = (c(27), c(12)),
        i = c(3),
        l = c(7),
        b = c(9),
        j = c(11),
        o = c.n(j);
      function f() {
        var e = Object(r.useReducer)(function (e) {
          return e + 1;
        }, 0);
        return Object(b.a)(e, 2)[1];
      }
      var O = { count: 100, data: [], delay: 100, useRAF: !1, isContinue: !0, isSorting: !1 },
        d = n.a.createContext(O);
      function h(e) {
        var t = e.isContinue,
          c = e.isSorting,
          n = e.useRAF,
          u = e.delay,
          a = Object(r.useRef)(!1),
          s = Object(r.useRef)(!0),
          i = Object(r.useRef)(!1),
          l = Object(r.useRef)(100);
        return (
          Object(r.useEffect)(
            function () {
              s.current = t;
            },
            [t],
          ),
          Object(r.useEffect)(
            function () {
              a.current = c;
            },
            [c],
          ),
          Object(r.useEffect)(
            function () {
              i.current = n;
            },
            [n],
          ),
          Object(r.useEffect)(
            function () {
              l.current = u;
            },
            [u],
          ),
          { isSortingRef: a, isContinueRef: s, useRAFRef: i, delayRef: l }
        );
      }
      var v = c(1),
        g = function () {
          var e = Object(r.useContext)(d),
            t = e.count,
            c = e.data,
            n = e.delay,
            u = e.isContinue,
            a = e.isSorting,
            s = e.useRAF,
            j = Object(i.f)(),
            O = Object(r.useState)([]),
            g = Object(b.a)(O, 2),
            x = g[0],
            m = g[1],
            R = f(),
            p = h({ isContinue: u, isSorting: a, useRAF: s, delay: n }),
            C = p.isSortingRef,
            y = p.isContinueRef,
            N = p.useRAFRef,
            k = p.delayRef,
            S = Object(r.useRef)([]);
          S.current = x;
          var A = Object(r.useRef)(0),
            F = Object(r.useRef)(0),
            w = Object(r.useRef)(0),
            E = Object(r.useRef)(!1),
            J = Object(r.useCallback)(
              function () {
                (C.current = !1), (A.current = 0), (F.current = 0), (w.current = 0);
              },
              [C],
            ),
            L = Object(r.useCallback)(
              function () {
                m(JSON.parse(JSON.stringify(c))), J();
              },
              [c, J],
            );
          Object(r.useEffect)(
            function () {
              L();
            },
            [L],
          );
          var q = Object(r.useCallback)(function (e) {
              var t = A.current;
              if (t < e.length) {
                var c = F.current;
                if (c < e.length - t - 1) {
                  if (
                    (e[c - 1] && (e[c - 1].status = void 0),
                    (e[c].status = 'current'),
                    (e[c + 1].status = 'target'),
                    F.current++,
                    e[c].value > e[c + 1].value)
                  )
                    if (E.current) {
                      (e[c].status = 'target'), (e[c + 1].status = 'current');
                      var r = e[c].value;
                      (e[c].value = e[c + 1].value), (e[c + 1].value = r), (E.current = !1);
                    } else F.current--, (E.current = !0);
                } else
                  A.current++,
                    (F.current = 0),
                    e[c - 1] && (e[c - 1].status = void 0),
                    (e[c].status = 'finished'),
                    w.current++;
                return Object(l.a)(e);
              }
              return Object(l.a)(e);
            }, []),
            D = Object(r.useCallback)(
              function () {
                if (y.current) {
                  C.current = !0;
                  var e = q(S.current);
                  m(e),
                    w.current !== e.length
                      ? N.current
                        ? requestAnimationFrame(D)
                        : setTimeout(D, k.current)
                      : (J(), R());
                }
              },
              [q, k, R, J, y, C, N],
            );
          return (
            Object(r.useEffect)(
              function () {
                u && C.current && D();
              },
              [u, D, a, C],
            ),
            Object(v.jsxs)('div', {
              children: [
                Object(v.jsx)('p', {
                  onClick: function () {
                    return j.push('/bubble-sort');
                  },
                  children: '\u5192\u6ce1\u6392\u5e8f',
                }),
                Object(v.jsx)('div', {
                  children: Object(v.jsxs)('div', {
                    className: 'flex items-center justify-center',
                    children: [
                      Object(v.jsx)('div', { className: 'current w-6 h-6' }),
                      '\u5f53\u524d',
                      Object(v.jsx)('div', { className: 'target w-6 h-6 ml-2' }),
                      '\u6b63\u5728\u6bd4\u8f83',
                      Object(v.jsx)('div', { className: 'finished w-6 h-6 ml-2' }),
                      '\u7ed3\u675f\u6bd4\u8f83',
                    ],
                  }),
                }),
                Object(v.jsx)('div', {
                  className: 'm-20',
                  children: x.map(function (e) {
                    return Object(v.jsx)(
                      'div',
                      {
                        className: o()('bg-black inline-block ml-px', e.status),
                        style: { width: 'calc('.concat(100 / t, '% - 1px)'), height: ''.concat(e.value, 'px') },
                      },
                      e.value,
                    );
                  }),
                }),
              ],
            })
          );
        },
        x = c(2),
        m = function () {
          var e = Object(r.useContext)(d),
            t = e.count,
            c = e.data,
            n = e.delay,
            u = e.isContinue,
            a = e.isSorting,
            s = e.useRAF,
            j = Object(i.f)(),
            O = Object(r.useState)([]),
            g = Object(b.a)(O, 2),
            m = g[0],
            R = g[1],
            p = f(),
            C = h({ isContinue: u, isSorting: a, useRAF: s, delay: n }),
            y = C.isSortingRef,
            N = C.isContinueRef,
            k = C.useRAFRef,
            S = C.delayRef,
            A = Object(r.useRef)([]);
          A.current = m;
          var F = Object(r.useRef)(0),
            w = Object(r.useRef)(0),
            E = Object(r.useRef)(0),
            J = Object(r.useRef)(0),
            L = Object(r.useRef)('toRight'),
            q = Object(r.useRef)(!1),
            D = Object(r.useRef)(!1),
            M = Object(r.useRef)(0),
            T = Object(r.useRef)(!0),
            z = Object(r.useRef)(!0),
            U = Object(r.useCallback)(function (e) {
              (F.current = 0),
                (w.current = e - 1),
                (E.current = 0),
                (J.current = 0),
                (M.current = 0),
                (T.current = !0),
                (z.current = !0),
                (L.current = 'toRight'),
                (q.current = !1),
                (D.current = !1);
            }, []),
            B = Object(r.useCallback)(
              function () {
                R(JSON.parse(JSON.stringify(c))), U(c.length);
              },
              [c, U],
            );
          Object(r.useEffect)(
            function () {
              B();
            },
            [B],
          );
          var I = Object(r.useCallback)(function (e) {
              var t = F.current;
              if (t < w.current) {
                if ('toRight' === L.current) {
                  var c = E.current;
                  if (c < e.length - t - 1) {
                    if (
                      (e[c - 1] && 'finished' !== e[c - 1].status && (e[c - 1].status = void 0),
                      (e[c].status = 'current'),
                      (e[c + 1].status = 'target'),
                      E.current++,
                      e[c].value > e[c + 1].value)
                    )
                      if (q.current) {
                        (e[c].status = 'target'), (e[c + 1].status = 'current');
                        var r = e[c + 1].value;
                        (e[c + 1].value = e[c].value), (e[c].value = r), (q.current = !1), (z.current = !1);
                      } else E.current--, (q.current = !0), (z.current = !0);
                    return (L.current = 'toRight'), Object(l.a)(e);
                  }
                  L.current = 'toLeftStart';
                }
                if ('toLeftStart' === L.current)
                  return (
                    (e[E.current].status = 'finished'),
                    (L.current = 'toLeft'),
                    (T.current = !0),
                    w.current--,
                    (J.current = w.current),
                    M.current++,
                    Object(l.a)(e)
                  );
                if (z.current)
                  return (
                    (M.current = e.length),
                    e.map(function (e) {
                      return Object(x.a)(Object(x.a)({}, e), {}, { status: 'finished' });
                    })
                  );
                if ('toLeft' === L.current) {
                  var n = J.current;
                  if (n > t) {
                    if (
                      (e[n + 1] && 'finished' !== e[n + 1].status && (e[n + 1].status = void 0),
                      (e[n].status = 'current'),
                      (e[n - 1].status = 'target'),
                      J.current--,
                      e[n - 1].value > e[n].value)
                    )
                      if (((e[n].status = 'target'), (e[n - 1].status = 'current'), D.current)) {
                        var u = e[n].value;
                        (e[n].value = e[n - 1].value), (e[n - 1].value = u), (D.current = !1), (T.current = !1);
                      } else J.current++, (D.current = !0), (T.current = !0);
                    return (L.current = 'toLeft'), Object(l.a)(e);
                  }
                  L.current = 'toRightStart';
                }
                return 'toRightStart' === L.current
                  ? ((e[J.current].status = 'finished'),
                    (L.current = 'toRight'),
                    (z.current = !0),
                    F.current++,
                    (E.current = F.current),
                    (J.current = w.current),
                    M.current++,
                    Object(l.a)(e))
                  : T.current
                  ? ((M.current = e.length),
                    e.map(function (e) {
                      return Object(x.a)(Object(x.a)({}, e), {}, { status: 'finished' });
                    }))
                  : Object(l.a)(e);
              }
              return (e[t].status = 'finished'), Object(l.a)(e);
            }, []),
            P = Object(r.useCallback)(
              function () {
                if (N.current) {
                  y.current = !0;
                  var e = I(A.current);
                  R(e),
                    M.current !== e.length
                      ? k.current
                        ? requestAnimationFrame(P)
                        : setTimeout(P, S.current)
                      : (U(e.length), p());
                }
              },
              [I, S, p, U, N, y, k],
            );
          return (
            Object(r.useEffect)(
              function () {
                u && y.current && P();
              },
              [u, P, a, y],
            ),
            Object(v.jsxs)('div', {
              children: [
                Object(v.jsx)('p', {
                  onClick: function () {
                    return j.push('/cocktail-sort');
                  },
                  children: '\u9e21\u5c3e\u9152\u6392\u5e8f',
                }),
                Object(v.jsx)('div', {
                  children: Object(v.jsxs)('div', {
                    className: 'flex items-center justify-center',
                    children: [
                      Object(v.jsx)('div', { className: 'current w-6 h-6' }),
                      '\u5f53\u524d',
                      Object(v.jsx)('div', { className: 'target w-6 h-6 ml-2' }),
                      '\u6b63\u5728\u6bd4\u8f83',
                      Object(v.jsx)('div', { className: 'finished w-6 h-6 ml-2' }),
                      '\u7ed3\u675f\u6bd4\u8f83',
                    ],
                  }),
                }),
                Object(v.jsx)('div', {
                  className: 'm-20',
                  children: m.map(function (e) {
                    return Object(v.jsx)(
                      'div',
                      {
                        className: o()('bg-black inline-block ml-px', e.status),
                        style: { width: 'calc('.concat(100 / t, '% - 1px)'), height: ''.concat(e.value, 'px') },
                      },
                      e.value,
                    );
                  }),
                }),
              ],
            })
          );
        },
        R = function () {
          var e = Object(r.useContext)(d),
            t = e.count,
            c = e.data,
            n = e.delay,
            u = e.isContinue,
            a = e.isSorting,
            s = e.useRAF,
            j = Object(i.f)(),
            O = Object(r.useState)([]),
            g = Object(b.a)(O, 2),
            x = g[0],
            m = g[1],
            R = f(),
            p = h({ isContinue: u, isSorting: a, useRAF: s, delay: n }),
            C = p.isSortingRef,
            y = p.isContinueRef,
            N = p.useRAFRef,
            k = p.delayRef,
            S = Object(r.useRef)([]);
          S.current = x;
          var A = Object(r.useRef)(0),
            F = Object(r.useRef)(1),
            w = Object(r.useRef)(0),
            E = Object(r.useRef)(0),
            J = Object(r.useCallback)(
              function () {
                (C.current = !1), (A.current = 0), (F.current = 1), (w.current = 0), (E.current = 0);
              },
              [C],
            ),
            L = Object(r.useCallback)(
              function () {
                m(JSON.parse(JSON.stringify(c))), J();
              },
              [c, J],
            );
          Object(r.useEffect)(
            function () {
              L();
            },
            [L],
          );
          var q = Object(r.useCallback)(function (e) {
              if ((0 === A.current && (e[w.current].status = 'target'), A.current < e.length - 1)) {
                var t = w.current,
                  c = F.current;
                if (c < e.length)
                  e[c - 1] && 'current' === e[c - 1].status && (e[c - 1].status = void 0),
                    (e[c].status = 'current'),
                    e[c].value < e[t].value &&
                      ((e[t].status = void 0), (w.current = c), (e[w.current].status = 'target')),
                    F.current++;
                else {
                  if (t !== A.current) {
                    var r = e[t].value;
                    (e[t].value = e[A.current].value), (e[A.current].value = r), (e[t].status = void 0);
                  }
                  (e[A.current].status = 'finished'),
                    (e[F.current - 1].status = void 0),
                    A.current++,
                    (w.current = A.current),
                    (F.current = A.current + 1),
                    E.current++,
                    (e[w.current].status = 'target');
                }
                return Object(l.a)(e);
              }
              return (e[A.current].status = 'finished'), E.current++, Object(l.a)(e);
            }, []),
            D = Object(r.useCallback)(
              function () {
                if (y.current) {
                  C.current = !0;
                  var e = q(S.current);
                  m(e),
                    E.current !== e.length
                      ? N.current
                        ? requestAnimationFrame(D)
                        : setTimeout(D, k.current)
                      : (J(), R());
                }
              },
              [q, k, R, J, y, C, N],
            );
          return (
            Object(r.useEffect)(
              function () {
                u && C.current && D();
              },
              [u, D, a, C],
            ),
            Object(v.jsxs)('div', {
              children: [
                Object(v.jsx)('p', {
                  onClick: function () {
                    return j.push('/selection-sort');
                  },
                  children: '\u9009\u62e9\u6392\u5e8f',
                }),
                Object(v.jsx)('div', {
                  children: Object(v.jsxs)('div', {
                    className: 'flex items-center justify-center',
                    children: [
                      Object(v.jsx)('div', { className: 'current w-6 h-6' }),
                      '\u5f53\u524d',
                      Object(v.jsx)('div', { className: 'target w-6 h-6 ml-2' }),
                      '\u6b63\u5728\u6bd4\u8f83',
                      Object(v.jsx)('div', { className: 'finished w-6 h-6 ml-2' }),
                      '\u7ed3\u675f\u6bd4\u8f83',
                    ],
                  }),
                }),
                Object(v.jsx)('div', {
                  className: 'm-20',
                  children: x.map(function (e) {
                    return Object(v.jsx)(
                      'div',
                      {
                        className: o()('bg-black inline-block ml-px', e.status),
                        style: { width: 'calc('.concat(100 / t, '% - 1px)'), height: ''.concat(e.value, 'px') },
                      },
                      e.value,
                    );
                  }),
                }),
              ],
            })
          );
        },
        p = function () {
          return Object(v.jsxs)('div', {
            children: [Object(v.jsx)(g, {}), Object(v.jsx)(m, {}), Object(v.jsx)(R, {})],
          });
        };
      function C(e, t) {
        switch (t.type) {
          case 'init':
            return Object(x.a)({}, O);
          case 'changeData':
            return Object(x.a)(Object(x.a)({}, e), {}, { data: t.payload });
          case 'changeCount':
            return Object(x.a)(Object(x.a)({}, e), {}, { count: t.payload });
          case 'changeDelay':
            return Object(x.a)(Object(x.a)({}, e), {}, { delay: t.payload });
          case 'toggleContinue':
            return Object(x.a)(Object(x.a)({}, e), {}, { isContinue: !e.isContinue });
          case 'toggleSorting':
            return Object(x.a)(Object(x.a)({}, e), {}, { isSorting: !e.isSorting });
          case 'toggleUseRAF':
            return Object(x.a)(Object(x.a)({}, e), {}, { useRAF: !e.useRAF });
          default:
            return Object(x.a)(Object(x.a)({}, e), t);
        }
      }
      var y = function (e) {
        var t = e.children,
          c = Object(r.useReducer)(C, O),
          n = Object(b.a)(c, 2),
          u = n[0],
          a = n[1];
        return Object(v.jsx)(d.Provider, { value: Object(x.a)(Object(x.a)({}, u), {}, { dispatch: a }), children: t });
      };
      function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Array(e).fill(0).map(function (e, c) {
          return c + (t ? 0 : 200 * Math.random());
        });
      }
      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return S(N(e, t));
      }
      function S(e) {
        for (var t, c, r = e.length - 1; r >= 0; r--)
          (c = e[(t = Math.floor(Math.random() * (r + 1)))]), (e[t] = e[r]), (e[r] = c);
        return e;
      }
      var A = function () {
        var e = Object(r.useContext)(d),
          t = e.count,
          c = e.delay,
          n = e.useRAF,
          u = e.isSorting,
          a = e.isContinue,
          s = e.dispatch,
          i = Object(r.useCallback)(
            function (e) {
              s({ type: 'changeCount', payload: Number(e.target.value) });
            },
            [s],
          ),
          l = Object(r.useCallback)(
            function (e) {
              s({ type: 'changeDelay', payload: Number(e.target.value) });
            },
            [s],
          ),
          b = Object(r.useCallback)(
            function () {
              s({
                type: 'changeData',
                payload: k(t).map(function (e) {
                  return { value: e };
                }),
              });
            },
            [s, t],
          ),
          j = Object(r.useCallback)(
            function () {
              s({ type: 'toggleSorting' });
            },
            [s],
          ),
          o = Object(r.useCallback)(
            function () {
              s({ type: 'toggleContinue' });
            },
            [s],
          ),
          f = Object(r.useCallback)(
            function () {
              s({ type: 'toggleUseRAF' });
            },
            [s],
          );
        return (
          Object(r.useEffect)(function () {
            b();
          }, []),
          Object(v.jsxs)('div', {
            className: 'm-10',
            children: [
              Object(v.jsxs)('div', {
                className: 'flex',
                children: [
                  Object(v.jsxs)('label', {
                    className: 'flex-1',
                    children: [
                      '\u6570\u636e\u6570\u91cf\uff1a',
                      Object(v.jsx)('input', { type: 'number', value: t || '', onChange: i, disabled: u }),
                    ],
                  }),
                  Object(v.jsxs)('label', {
                    className: 'flex-1',
                    children: [
                      '\u5ef6\u8fdf\uff1a',
                      Object(v.jsx)('input', {
                        className: 'disabled:opacity-50',
                        type: 'number',
                        value: c || '',
                        disabled: n,
                        onChange: l,
                      }),
                    ],
                  }),
                  Object(v.jsxs)('label', {
                    className: 'flex-1 mr-1',
                    children: [
                      Object(v.jsx)('input', { type: 'checkbox', value: n, onChange: f }),
                      '\u542f\u7528requestAnimationFrame',
                    ],
                  }),
                ],
              }),
              Object(v.jsx)('button', {
                className: 'rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50',
                onClick: b,
                disabled: u,
                children: '\u66f4\u6362\u6570\u636e',
              }),
              Object(v.jsx)('button', {
                className: 'rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50',
                onClick: j,
                disabled: u,
                children: '\u5f00\u59cb',
              }),
              Object(v.jsx)('button', {
                className: 'rounded-md p-1 bg-blue-400 text-white mr-1 disabled:opacity-50',
                onClick: o,
                children: a ? '\u6682\u505c' : '\u7ee7\u7eed',
              }),
            ],
          })
        );
      };
      var F = function () {
        return Object(v.jsxs)(v.Fragment, {
          children: [
            Object(v.jsx)('header', {
              children: Object(v.jsx)('h1', {
                className: 'm-0 text-center text-2xl',
                children: '\u6392\u5e8f\u7b97\u6cd5\u53ef\u89c6\u5316',
              }),
            }),
            Object(v.jsx)('main', {
              className: '',
              children: Object(v.jsxs)(y, {
                children: [
                  Object(v.jsx)(A, {}),
                  Object(v.jsx)(s.a, {
                    children: Object(v.jsxs)(i.c, {
                      children: [
                        Object(v.jsx)(i.a, { path: '/', exact: !0, component: p }),
                        Object(v.jsx)(i.a, { path: '/bubble-sort', exact: !0, component: g }),
                        Object(v.jsx)(i.a, { path: '/cocktail-sort', exact: !0, component: m }),
                        Object(v.jsx)(i.a, { path: '/selection-sort', exact: !0, component: R }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      a.a.render(Object(v.jsx)(n.a.StrictMode, { children: Object(v.jsx)(F, {}) }), document.getElementById('root'));
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.635dd29e.chunk.js.map
