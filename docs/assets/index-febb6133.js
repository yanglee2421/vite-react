function Y0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var sm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function X0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Cp(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ua = {},
  QE = {
    get exports() {
      return Ua;
    },
    set exports(e) {
      Ua = e;
    },
  },
  Xs = {},
  S = {},
  WE = {
    get exports() {
      return S;
    },
    set exports(e) {
      S = e;
    },
  },
  Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ku = Symbol.for("react.element"),
  KE = Symbol.for("react.portal"),
  GE = Symbol.for("react.fragment"),
  YE = Symbol.for("react.strict_mode"),
  XE = Symbol.for("react.profiler"),
  ZE = Symbol.for("react.provider"),
  JE = Symbol.for("react.context"),
  ex = Symbol.for("react.forward_ref"),
  tx = Symbol.for("react.suspense"),
  nx = Symbol.for("react.memo"),
  rx = Symbol.for("react.lazy"),
  cm = Symbol.iterator;
function ix(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cm && e[cm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  J0 = Object.assign,
  e1 = {};
function Ko(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = e1),
    (this.updater = n || Z0);
}
Ko.prototype.isReactComponent = {};
Ko.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ko.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function t1() {}
t1.prototype = Ko.prototype;
function Ep(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = e1),
    (this.updater = n || Z0);
}
var xp = (Ep.prototype = new t1());
xp.constructor = Ep;
J0(xp, Ko.prototype);
xp.isPureReactComponent = !0;
var fm = Array.isArray,
  n1 = Object.prototype.hasOwnProperty,
  Op = { current: null },
  r1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function i1(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      n1.call(t, r) && !r1.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: ku,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Op.current,
  };
}
function ox(e, t) {
  return {
    $$typeof: ku,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ku;
}
function ax(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dm = /\/+/g;
function ff(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ax("" + e.key)
    : t.toString(36);
}
function El(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ku:
          case KE:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + ff(a, 0) : r),
      fm(i)
        ? ((n = ""),
          e != null && (n = e.replace(dm, "$&/") + "/"),
          El(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (Pp(i) &&
            (i = ox(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(dm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), fm(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var l = r + ff(o, u);
      a += El(o, t, n, l, i);
    }
  else if (((l = ix(e)), typeof l == "function"))
    for (e = l.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ff(o, u++)), (a += El(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Qu(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    El(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function ux(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Vt = { current: null },
  xl = { transition: null },
  lx = {
    ReactCurrentDispatcher: Vt,
    ReactCurrentBatchConfig: xl,
    ReactCurrentOwner: Op,
  };
Ce.Children = {
  map: Qu,
  forEach: function (e, t, n) {
    Qu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Qu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Qu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ce.Component = Ko;
Ce.Fragment = GE;
Ce.Profiler = XE;
Ce.PureComponent = Ep;
Ce.StrictMode = YE;
Ce.Suspense = tx;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lx;
Ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = J0({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Op.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (l in t)
      n1.call(t, l) &&
        !r1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ku, type: e.type, key: i, ref: o, props: r, _owner: a };
};
Ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: JE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ZE, _context: e }),
    (e.Consumer = e)
  );
};
Ce.createElement = i1;
Ce.createFactory = function (e) {
  var t = i1.bind(null, e);
  return (t.type = e), t;
};
Ce.createRef = function () {
  return { current: null };
};
Ce.forwardRef = function (e) {
  return { $$typeof: ex, render: e };
};
Ce.isValidElement = Pp;
Ce.lazy = function (e) {
  return { $$typeof: rx, _payload: { _status: -1, _result: e }, _init: ux };
};
Ce.memo = function (e, t) {
  return { $$typeof: nx, type: e, compare: t === void 0 ? null : t };
};
Ce.startTransition = function (e) {
  var t = xl.transition;
  xl.transition = {};
  try {
    e();
  } finally {
    xl.transition = t;
  }
};
Ce.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ce.useCallback = function (e, t) {
  return Vt.current.useCallback(e, t);
};
Ce.useContext = function (e) {
  return Vt.current.useContext(e);
};
Ce.useDebugValue = function () {};
Ce.useDeferredValue = function (e) {
  return Vt.current.useDeferredValue(e);
};
Ce.useEffect = function (e, t) {
  return Vt.current.useEffect(e, t);
};
Ce.useId = function () {
  return Vt.current.useId();
};
Ce.useImperativeHandle = function (e, t, n) {
  return Vt.current.useImperativeHandle(e, t, n);
};
Ce.useInsertionEffect = function (e, t) {
  return Vt.current.useInsertionEffect(e, t);
};
Ce.useLayoutEffect = function (e, t) {
  return Vt.current.useLayoutEffect(e, t);
};
Ce.useMemo = function (e, t) {
  return Vt.current.useMemo(e, t);
};
Ce.useReducer = function (e, t, n) {
  return Vt.current.useReducer(e, t, n);
};
Ce.useRef = function (e) {
  return Vt.current.useRef(e);
};
Ce.useState = function (e) {
  return Vt.current.useState(e);
};
Ce.useSyncExternalStore = function (e, t, n) {
  return Vt.current.useSyncExternalStore(e, t, n);
};
Ce.useTransition = function () {
  return Vt.current.useTransition();
};
Ce.version = "18.2.0";
(function (e) {
  e.exports = Ce;
})(WE);
const ce = X0(S),
  Kl = Y0({ __proto__: null, default: ce }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sx = S,
  cx = Symbol.for("react.element"),
  fx = Symbol.for("react.fragment"),
  dx = Object.prototype.hasOwnProperty,
  hx = sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  px = { key: !0, ref: !0, __self: !0, __source: !0 };
function o1(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) dx.call(t, r) && !px.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: cx,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: hx.current,
  };
}
Xs.Fragment = fx;
Xs.jsx = o1;
Xs.jsxs = o1;
(function (e) {
  e.exports = Xs;
})(QE);
const vx = Ua.Fragment,
  gt = Ua.jsx,
  mx = Ua.jsxs;
var Sd = {},
  or = {},
  gx = {
    get exports() {
      return or;
    },
    set exports(e) {
      or = e;
    },
  },
  mn = {},
  bd = {},
  yx = {
    get exports() {
      return bd;
    },
    set exports(e) {
      bd = e;
    },
  },
  a1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, I) {
    var L = _.length;
    _.push(I);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        q = _[H];
      if (0 < i(q, I)) (_[H] = I), (_[L] = q), (L = H);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var I = _[0],
      L = _.pop();
    if (L !== I) {
      _[0] = L;
      e: for (var H = 0, q = _.length, V = q >>> 1; H < V; ) {
        var X = 2 * (H + 1) - 1,
          re = _[X],
          ie = X + 1,
          oe = _[ie];
        if (0 > i(re, L))
          ie < q && 0 > i(oe, re)
            ? ((_[H] = oe), (_[ie] = L), (H = ie))
            : ((_[H] = re), (_[X] = L), (H = X));
        else if (ie < q && 0 > i(oe, L)) (_[H] = oe), (_[ie] = L), (H = ie);
        else break e;
      }
    }
    return I;
  }
  function i(_, I) {
    var L = _.sortIndex - I.sortIndex;
    return L !== 0 ? L : _.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var l = [],
    s = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(_) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= _)
        r(s), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(s);
    }
  }
  function w(_) {
    if (((y = !1), g(_), !v))
      if (n(l) !== null) (v = !0), F(x);
      else {
        var I = n(s);
        I !== null && N(w, I.startTime - _);
      }
  }
  function x(_, I) {
    (v = !1), y && ((y = !1), m(k), (k = -1)), (h = !0);
    var L = f;
    try {
      for (
        g(I), d = n(l);
        d !== null && (!(d.expirationTime > I) || (_ && !A()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var q = H(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(l) && r(l),
            g(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var V = !0;
      else {
        var X = n(s);
        X !== null && N(w, X.startTime - I), (V = !1);
      }
      return V;
    } finally {
      (d = null), (f = L), (h = !1);
    }
  }
  var C = !1,
    E = null,
    k = -1,
    M = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < M);
  }
  function P() {
    if (E !== null) {
      var _ = e.unstable_now();
      T = _;
      var I = !0;
      try {
        I = E(!0, _);
      } finally {
        I ? O() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var O;
  if (typeof p == "function")
    O = function () {
      p(P);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      $ = R.port2;
    (R.port1.onmessage = P),
      (O = function () {
        $.postMessage(null);
      });
  } else
    O = function () {
      b(P, 0);
    };
  function F(_) {
    (E = _), C || ((C = !0), O());
  }
  function N(_, I) {
    k = b(function () {
      _(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), F(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (_) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var L = f;
      f = I;
      try {
        return _();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, I) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var L = f;
      f = _;
      try {
        return I();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (_, I, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? H + L : H))
          : (L = H),
        _)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = L + q),
        (_ = {
          id: c++,
          callback: I,
          priorityLevel: _,
          startTime: L,
          expirationTime: q,
          sortIndex: -1,
        }),
        L > H
          ? ((_.sortIndex = L),
            t(s, _),
            n(l) === null &&
              _ === n(s) &&
              (y ? (m(k), (k = -1)) : (y = !0), N(w, L - H)))
          : ((_.sortIndex = q), t(l, _), v || h || ((v = !0), F(x))),
        _
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (_) {
      var I = f;
      return function () {
        var L = f;
        f = I;
        try {
          return _.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(a1);
(function (e) {
  e.exports = a1;
})(yx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u1 = S,
  hn = bd;
function B(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var l1 = new Set(),
  Ha = {};
function qi(e, t) {
  Ao(e, t), Ao(e + "Capture", t);
}
function Ao(e, t) {
  for (Ha[e] = t, e = 0; e < t.length; e++) l1.add(t[e]);
}
var xr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cd = Object.prototype.hasOwnProperty,
  wx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hm = {},
  pm = {};
function Sx(e) {
  return Cd.call(pm, e)
    ? !0
    : Cd.call(hm, e)
    ? !1
    : wx.test(e)
    ? (pm[e] = !0)
    : ((hm[e] = !0), !1);
}
function bx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cx(e, t, n, r) {
  if (t === null || typeof t > "u" || bx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qt(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var $t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $t[e] = new Qt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $t[t] = new Qt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $t[e] = new Qt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $t[e] = new Qt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $t[e] = new Qt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $t[e] = new Qt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $t[e] = new Qt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $t[e] = new Qt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $t[e] = new Qt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rp = /[\-:]([a-z])/g;
function kp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rp, kp);
    $t[t] = new Qt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rp, kp);
    $t[t] = new Qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rp, kp);
  $t[t] = new Qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $t[e] = new Qt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$t.xlinkHref = new Qt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $t[e] = new Qt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mp(e, t, n, r) {
  var i = $t.hasOwnProperty(t) ? $t[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cx(t, n, i, r) && (n = null),
    r || i === null
      ? Sx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $r = u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wu = Symbol.for("react.element"),
  to = Symbol.for("react.portal"),
  no = Symbol.for("react.fragment"),
  Tp = Symbol.for("react.strict_mode"),
  Ed = Symbol.for("react.profiler"),
  s1 = Symbol.for("react.provider"),
  c1 = Symbol.for("react.context"),
  $p = Symbol.for("react.forward_ref"),
  xd = Symbol.for("react.suspense"),
  Od = Symbol.for("react.suspense_list"),
  Ap = Symbol.for("react.memo"),
  zr = Symbol.for("react.lazy"),
  f1 = Symbol.for("react.offscreen"),
  vm = Symbol.iterator;
function na(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vm && e[vm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var it = Object.assign,
  df;
function ma(e) {
  if (df === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      df = (t && t[1]) || "";
    }
  return (
    `
` +
    df +
    e
  );
}
var hf = !1;
function pf(e, t) {
  if (!e || hf) return "";
  hf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          u = o.length - 1;
        1 <= a && 0 <= u && i[a] !== o[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (i[a] !== o[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || i[a] !== o[u])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (hf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ma(e) : "";
}
function Ex(e) {
  switch (e.tag) {
    case 5:
      return ma(e.type);
    case 16:
      return ma("Lazy");
    case 13:
      return ma("Suspense");
    case 19:
      return ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pf(e.type, !1)), e;
    case 11:
      return (e = pf(e.type.render, !1)), e;
    case 1:
      return (e = pf(e.type, !0)), e;
    default:
      return "";
  }
}
function Pd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case no:
      return "Fragment";
    case to:
      return "Portal";
    case Ed:
      return "Profiler";
    case Tp:
      return "StrictMode";
    case xd:
      return "Suspense";
    case Od:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case c1:
        return (e.displayName || "Context") + ".Consumer";
      case s1:
        return (e._context.displayName || "Context") + ".Provider";
      case $p:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ap:
        return (
          (t = e.displayName || null), t !== null ? t : Pd(e.type) || "Memo"
        );
      case zr:
        (t = e._payload), (e = e._init);
        try {
          return Pd(e(t));
        } catch {}
    }
  return null;
}
function xx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pd(t);
    case 8:
      return t === Tp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ai(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function d1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ox(e) {
  var t = d1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ku(e) {
  e._valueTracker || (e._valueTracker = Ox(e));
}
function h1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = d1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rd(e, t) {
  var n = t.checked;
  return it({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ai(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function p1(e, t) {
  (t = t.checked), t != null && Mp(e, "checked", t, !1);
}
function kd(e, t) {
  p1(e, t);
  var n = ai(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Md(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Md(e, t.type, ai(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Md(e, t, n) {
  (t !== "number" || Gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ga = Array.isArray;
function go(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ai(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Td(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return it({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ym(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (ga(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ai(n) };
}
function v1(e, t) {
  var n = ai(t.value),
    r = ai(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function m1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $d(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? m1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gu,
  g1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gu = Gu || document.createElement("div"),
          Gu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gu.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ea = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Px = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ea).forEach(function (e) {
  Px.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ea[t] = Ea[e]);
  });
});
function y1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ea.hasOwnProperty(e) && Ea[e])
    ? ("" + t).trim()
    : t + "px";
}
function w1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = y1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Rx = it(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ad(e, t) {
  if (t) {
    if (Rx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function Fd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _d = null;
function Fp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nd = null,
  yo = null,
  wo = null;
function Sm(e) {
  if ((e = $u(e))) {
    if (typeof Nd != "function") throw Error(B(280));
    var t = e.stateNode;
    t && ((t = nc(t)), Nd(e.stateNode, e.type, t));
  }
}
function S1(e) {
  yo ? (wo ? wo.push(e) : (wo = [e])) : (yo = e);
}
function b1() {
  if (yo) {
    var e = yo,
      t = wo;
    if (((wo = yo = null), Sm(e), t)) for (e = 0; e < t.length; e++) Sm(t[e]);
  }
}
function C1(e, t) {
  return e(t);
}
function E1() {}
var vf = !1;
function x1(e, t, n) {
  if (vf) return e(t, n);
  vf = !0;
  try {
    return C1(e, t, n);
  } finally {
    (vf = !1), (yo !== null || wo !== null) && (E1(), b1());
  }
}
function Ba(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = nc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var Id = !1;
if (xr)
  try {
    var ra = {};
    Object.defineProperty(ra, "passive", {
      get: function () {
        Id = !0;
      },
    }),
      window.addEventListener("test", ra, ra),
      window.removeEventListener("test", ra, ra);
  } catch {
    Id = !1;
  }
function kx(e, t, n, r, i, o, a, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var xa = !1,
  Yl = null,
  Xl = !1,
  Ld = null,
  Mx = {
    onError: function (e) {
      (xa = !0), (Yl = e);
    },
  };
function Tx(e, t, n, r, i, o, a, u, l) {
  (xa = !1), (Yl = null), kx.apply(Mx, arguments);
}
function $x(e, t, n, r, i, o, a, u, l) {
  if ((Tx.apply(this, arguments), xa)) {
    if (xa) {
      var s = Yl;
      (xa = !1), (Yl = null);
    } else throw Error(B(198));
    Xl || ((Xl = !0), (Ld = s));
  }
}
function Bi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function O1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function bm(e) {
  if (Bi(e) !== e) throw Error(B(188));
}
function Ax(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bi(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return bm(i), e;
        if (o === r) return bm(i), t;
        o = o.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = o.child; u; ) {
          if (u === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function P1(e) {
  return (e = Ax(e)), e !== null ? R1(e) : null;
}
function R1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = R1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var k1 = hn.unstable_scheduleCallback,
  Cm = hn.unstable_cancelCallback,
  Fx = hn.unstable_shouldYield,
  _x = hn.unstable_requestPaint,
  ct = hn.unstable_now,
  Nx = hn.unstable_getCurrentPriorityLevel,
  _p = hn.unstable_ImmediatePriority,
  M1 = hn.unstable_UserBlockingPriority,
  Zl = hn.unstable_NormalPriority,
  Ix = hn.unstable_LowPriority,
  T1 = hn.unstable_IdlePriority,
  Zs = null,
  nr = null;
function Lx(e) {
  if (nr && typeof nr.onCommitFiberRoot == "function")
    try {
      nr.onCommitFiberRoot(Zs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Bn = Math.clz32 ? Math.clz32 : zx,
  Dx = Math.log,
  jx = Math.LN2;
function zx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dx(e) / jx) | 0)) | 0;
}
var Yu = 64,
  Xu = 4194304;
function ya(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~i;
    u !== 0 ? (r = ya(u)) : ((o &= a), o !== 0 && (r = ya(o)));
  } else (a = n & ~i), a !== 0 ? (r = ya(a)) : o !== 0 && (r = ya(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Bn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ux(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Bn(o),
      u = 1 << a,
      l = i[a];
    l === -1
      ? (!(u & n) || u & r) && (i[a] = Ux(u, t))
      : l <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Dd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $1() {
  var e = Yu;
  return (Yu <<= 1), !(Yu & 4194240) && (Yu = 64), e;
}
function mf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mu(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Bn(t)),
    (e[t] = n);
}
function qx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Bn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Np(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Bn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ze = 0;
function A1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var F1,
  Ip,
  _1,
  N1,
  I1,
  jd = !1,
  Zu = [],
  Xr = null,
  Zr = null,
  Jr = null,
  Va = new Map(),
  Qa = new Map(),
  Br = [],
  Bx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Em(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xr = null;
      break;
    case "dragenter":
    case "dragleave":
      Zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      Va.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qa.delete(t.pointerId);
  }
}
function ia(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = $u(t)), t !== null && Ip(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Vx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Xr = ia(Xr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Zr = ia(Zr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Jr = ia(Jr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Va.set(o, ia(Va.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Qa.set(o, ia(Qa.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function L1(e) {
  var t = bi(e.target);
  if (t !== null) {
    var n = Bi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = O1(n)), t !== null)) {
          (e.blockedOn = t),
            I1(e.priority, function () {
              _1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_d = r), n.target.dispatchEvent(r), (_d = null);
    } else return (t = $u(n)), t !== null && Ip(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xm(e, t, n) {
  Ol(e) && n.delete(t);
}
function Qx() {
  (jd = !1),
    Xr !== null && Ol(Xr) && (Xr = null),
    Zr !== null && Ol(Zr) && (Zr = null),
    Jr !== null && Ol(Jr) && (Jr = null),
    Va.forEach(xm),
    Qa.forEach(xm);
}
function oa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    jd ||
      ((jd = !0),
      hn.unstable_scheduleCallback(hn.unstable_NormalPriority, Qx)));
}
function Wa(e) {
  function t(i) {
    return oa(i, e);
  }
  if (0 < Zu.length) {
    oa(Zu[0], e);
    for (var n = 1; n < Zu.length; n++) {
      var r = Zu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xr !== null && oa(Xr, e),
      Zr !== null && oa(Zr, e),
      Jr !== null && oa(Jr, e),
      Va.forEach(t),
      Qa.forEach(t),
      n = 0;
    n < Br.length;
    n++
  )
    (r = Br[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && ((n = Br[0]), n.blockedOn === null); )
    L1(n), n.blockedOn === null && Br.shift();
}
var So = $r.ReactCurrentBatchConfig,
  es = !0;
function Wx(e, t, n, r) {
  var i = ze,
    o = So.transition;
  So.transition = null;
  try {
    (ze = 1), Lp(e, t, n, r);
  } finally {
    (ze = i), (So.transition = o);
  }
}
function Kx(e, t, n, r) {
  var i = ze,
    o = So.transition;
  So.transition = null;
  try {
    (ze = 4), Lp(e, t, n, r);
  } finally {
    (ze = i), (So.transition = o);
  }
}
function Lp(e, t, n, r) {
  if (es) {
    var i = zd(e, t, n, r);
    if (i === null) Pf(e, t, r, ts, n), Em(e, r);
    else if (Vx(i, e, t, n, r)) r.stopPropagation();
    else if ((Em(e, r), t & 4 && -1 < Bx.indexOf(e))) {
      for (; i !== null; ) {
        var o = $u(i);
        if (
          (o !== null && F1(o),
          (o = zd(e, t, n, r)),
          o === null && Pf(e, t, r, ts, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Pf(e, t, r, null, n);
  }
}
var ts = null;
function zd(e, t, n, r) {
  if (((ts = null), (e = Fp(r)), (e = bi(e)), e !== null))
    if (((t = Bi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = O1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ts = e), null;
}
function D1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Nx()) {
        case _p:
          return 1;
        case M1:
          return 4;
        case Zl:
        case Ix:
          return 16;
        case T1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wr = null,
  Dp = null,
  Pl = null;
function j1() {
  if (Pl) return Pl;
  var e,
    t = Dp,
    n = t.length,
    r,
    i = "value" in Wr ? Wr.value : Wr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Pl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Rl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ju() {
  return !0;
}
function Om() {
  return !1;
}
function gn(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ju
        : Om),
      (this.isPropagationStopped = Om),
      this
    );
  }
  return (
    it(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ju));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ju));
      },
      persist: function () {},
      isPersistent: Ju,
    }),
    t
  );
}
var Go = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jp = gn(Go),
  Tu = it({}, Go, { view: 0, detail: 0 }),
  Gx = gn(Tu),
  gf,
  yf,
  aa,
  Js = it({}, Tu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== aa &&
            (aa && e.type === "mousemove"
              ? ((gf = e.screenX - aa.screenX), (yf = e.screenY - aa.screenY))
              : (yf = gf = 0),
            (aa = e)),
          gf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : yf;
    },
  }),
  Pm = gn(Js),
  Yx = it({}, Js, { dataTransfer: 0 }),
  Xx = gn(Yx),
  Zx = it({}, Tu, { relatedTarget: 0 }),
  wf = gn(Zx),
  Jx = it({}, Go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eO = gn(Jx),
  tO = it({}, Go, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nO = gn(tO),
  rO = it({}, Go, { data: 0 }),
  Rm = gn(rO),
  iO = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  oO = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  aO = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = aO[e]) ? !!t[e] : !1;
}
function zp() {
  return uO;
}
var lO = it({}, Tu, {
    key: function (e) {
      if (e.key) {
        var t = iO[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? oO[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zp,
    charCode: function (e) {
      return e.type === "keypress" ? Rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sO = gn(lO),
  cO = it({}, Js, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  km = gn(cO),
  fO = it({}, Tu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zp,
  }),
  dO = gn(fO),
  hO = it({}, Go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pO = gn(hO),
  vO = it({}, Js, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mO = gn(vO),
  gO = [9, 13, 27, 32],
  Up = xr && "CompositionEvent" in window,
  Oa = null;
xr && "documentMode" in document && (Oa = document.documentMode);
var yO = xr && "TextEvent" in window && !Oa,
  z1 = xr && (!Up || (Oa && 8 < Oa && 11 >= Oa)),
  Mm = String.fromCharCode(32),
  Tm = !1;
function U1(e, t) {
  switch (e) {
    case "keyup":
      return gO.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function H1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ro = !1;
function wO(e, t) {
  switch (e) {
    case "compositionend":
      return H1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tm = !0), Mm);
    case "textInput":
      return (e = t.data), e === Mm && Tm ? null : e;
    default:
      return null;
  }
}
function SO(e, t) {
  if (ro)
    return e === "compositionend" || (!Up && U1(e, t))
      ? ((e = j1()), (Pl = Dp = Wr = null), (ro = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return z1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bO = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $m(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bO[e.type] : t === "textarea";
}
function q1(e, t, n, r) {
  S1(r),
    (t = ns(t, "onChange")),
    0 < t.length &&
      ((n = new jp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pa = null,
  Ka = null;
function CO(e) {
  ew(e, 0);
}
function ec(e) {
  var t = ao(e);
  if (h1(t)) return e;
}
function EO(e, t) {
  if (e === "change") return t;
}
var B1 = !1;
if (xr) {
  var Sf;
  if (xr) {
    var bf = "oninput" in document;
    if (!bf) {
      var Am = document.createElement("div");
      Am.setAttribute("oninput", "return;"),
        (bf = typeof Am.oninput == "function");
    }
    Sf = bf;
  } else Sf = !1;
  B1 = Sf && (!document.documentMode || 9 < document.documentMode);
}
function Fm() {
  Pa && (Pa.detachEvent("onpropertychange", V1), (Ka = Pa = null));
}
function V1(e) {
  if (e.propertyName === "value" && ec(Ka)) {
    var t = [];
    q1(t, Ka, e, Fp(e)), x1(CO, t);
  }
}
function xO(e, t, n) {
  e === "focusin"
    ? (Fm(), (Pa = t), (Ka = n), Pa.attachEvent("onpropertychange", V1))
    : e === "focusout" && Fm();
}
function OO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ec(Ka);
}
function PO(e, t) {
  if (e === "click") return ec(t);
}
function RO(e, t) {
  if (e === "input" || e === "change") return ec(t);
}
function kO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wn = typeof Object.is == "function" ? Object.is : kO;
function Ga(e, t) {
  if (Wn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Cd.call(t, i) || !Wn(e[i], t[i])) return !1;
  }
  return !0;
}
function _m(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nm(e, t) {
  var n = _m(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _m(n);
  }
}
function Q1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Q1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function W1() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gl(e.document);
  }
  return t;
}
function Hp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function MO(e) {
  var t = W1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Q1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Nm(n, o));
        var a = Nm(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var TO = xr && "documentMode" in document && 11 >= document.documentMode,
  io = null,
  Ud = null,
  Ra = null,
  Hd = !1;
function Im(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hd ||
    io == null ||
    io !== Gl(r) ||
    ((r = io),
    "selectionStart" in r && Hp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ra && Ga(Ra, r)) ||
      ((Ra = r),
      (r = ns(Ud, "onSelect")),
      0 < r.length &&
        ((t = new jp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = io))));
}
function el(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var oo = {
    animationend: el("Animation", "AnimationEnd"),
    animationiteration: el("Animation", "AnimationIteration"),
    animationstart: el("Animation", "AnimationStart"),
    transitionend: el("Transition", "TransitionEnd"),
  },
  Cf = {},
  K1 = {};
xr &&
  ((K1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete oo.animationend.animation,
    delete oo.animationiteration.animation,
    delete oo.animationstart.animation),
  "TransitionEvent" in window || delete oo.transitionend.transition);
function tc(e) {
  if (Cf[e]) return Cf[e];
  if (!oo[e]) return e;
  var t = oo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in K1) return (Cf[e] = t[n]);
  return e;
}
var G1 = tc("animationend"),
  Y1 = tc("animationiteration"),
  X1 = tc("animationstart"),
  Z1 = tc("transitionend"),
  J1 = new Map(),
  Lm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fi(e, t) {
  J1.set(e, t), qi(t, [e]);
}
for (var Ef = 0; Ef < Lm.length; Ef++) {
  var xf = Lm[Ef],
    $O = xf.toLowerCase(),
    AO = xf[0].toUpperCase() + xf.slice(1);
  fi($O, "on" + AO);
}
fi(G1, "onAnimationEnd");
fi(Y1, "onAnimationIteration");
fi(X1, "onAnimationStart");
fi("dblclick", "onDoubleClick");
fi("focusin", "onFocus");
fi("focusout", "onBlur");
fi(Z1, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
qi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  FO = new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));
function Dm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $x(r, t, void 0, e), (e.currentTarget = null);
}
function ew(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            l = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), l !== o && i.isPropagationStopped())) break e;
          Dm(i, u, s), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (l = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Dm(i, u, s), (o = l);
        }
    }
  }
  if (Xl) throw ((e = Ld), (Xl = !1), (Ld = null), e);
}
function Ke(e, t) {
  var n = t[Wd];
  n === void 0 && (n = t[Wd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tw(t, e, 2, !1), n.add(r));
}
function Of(e, t, n) {
  var r = 0;
  t && (r |= 4), tw(n, e, r, t);
}
var tl = "_reactListening" + Math.random().toString(36).slice(2);
function Ya(e) {
  if (!e[tl]) {
    (e[tl] = !0),
      l1.forEach(function (n) {
        n !== "selectionchange" && (FO.has(n) || Of(n, !1, e), Of(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[tl] || ((t[tl] = !0), Of("selectionchange", !1, t));
  }
}
function tw(e, t, n, r) {
  switch (D1(t)) {
    case 1:
      var i = Wx;
      break;
    case 4:
      i = Kx;
      break;
    default:
      i = Lp;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Id ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Pf(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = bi(u)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  x1(function () {
    var s = o,
      c = Fp(n),
      d = [];
    e: {
      var f = J1.get(e);
      if (f !== void 0) {
        var h = jp,
          v = e;
        switch (e) {
          case "keypress":
            if (Rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = sO;
            break;
          case "focusin":
            (v = "focus"), (h = wf);
            break;
          case "focusout":
            (v = "blur"), (h = wf);
            break;
          case "beforeblur":
          case "afterblur":
            h = wf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Pm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Xx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = dO;
            break;
          case G1:
          case Y1:
          case X1:
            h = eO;
            break;
          case Z1:
            h = pO;
            break;
          case "scroll":
            h = Gx;
            break;
          case "wheel":
            h = mO;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = nO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = km;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          m = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var p = s, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = Ba(p, m)), w != null && y.push(Xa(p, w, g)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== _d &&
            (v = n.relatedTarget || n.fromElement) &&
            (bi(v) || v[Or]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = s),
              (v = v ? bi(v) : null),
              v !== null &&
                ((b = Bi(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = s)),
          h !== v)
        ) {
          if (
            ((y = Pm),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = km),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (b = h == null ? f : ao(h)),
            (g = v == null ? f : ao(v)),
            (f = new y(w, p + "leave", h, n, c)),
            (f.target = b),
            (f.relatedTarget = g),
            (w = null),
            bi(c) === s &&
              ((y = new y(m, p + "enter", v, n, c)),
              (y.target = g),
              (y.relatedTarget = b),
              (w = y)),
            (b = w),
            h && v)
          )
            t: {
              for (y = h, m = v, p = 0, g = y; g; g = Ki(g)) p++;
              for (g = 0, w = m; w; w = Ki(w)) g++;
              for (; 0 < p - g; ) (y = Ki(y)), p--;
              for (; 0 < g - p; ) (m = Ki(m)), g--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Ki(y)), (m = Ki(m));
              }
              y = null;
            }
          else y = null;
          h !== null && jm(d, f, h, y, !1),
            v !== null && b !== null && jm(d, b, v, y, !0);
        }
      }
      e: {
        if (
          ((f = s ? ao(s) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var x = EO;
        else if ($m(f))
          if (B1) x = RO;
          else {
            x = OO;
            var C = xO;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (x = PO);
        if (x && (x = x(e, s))) {
          q1(d, x, n, c);
          break e;
        }
        C && C(e, f, s),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            Md(f, "number", f.value);
      }
      switch (((C = s ? ao(s) : window), e)) {
        case "focusin":
          ($m(C) || C.contentEditable === "true") &&
            ((io = C), (Ud = s), (Ra = null));
          break;
        case "focusout":
          Ra = Ud = io = null;
          break;
        case "mousedown":
          Hd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hd = !1), Im(d, n, c);
          break;
        case "selectionchange":
          if (TO) break;
        case "keydown":
        case "keyup":
          Im(d, n, c);
      }
      var E;
      if (Up)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        ro
          ? U1(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (z1 &&
          n.locale !== "ko" &&
          (ro || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && ro && (E = j1())
            : ((Wr = c),
              (Dp = "value" in Wr ? Wr.value : Wr.textContent),
              (ro = !0))),
        (C = ns(s, k)),
        0 < C.length &&
          ((k = new Rm(k, e, null, n, c)),
          d.push({ event: k, listeners: C }),
          E ? (k.data = E) : ((E = H1(n)), E !== null && (k.data = E)))),
        (E = yO ? wO(e, n) : SO(e, n)) &&
          ((s = ns(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Rm("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = E)));
    }
    ew(d, t);
  });
}
function Xa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ns(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ba(e, n)),
      o != null && r.unshift(Xa(e, o, i)),
      (o = Ba(e, t)),
      o != null && r.push(Xa(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ki(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jm(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      l = u.alternate,
      s = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      i
        ? ((l = Ba(n, o)), l != null && a.unshift(Xa(n, l, u)))
        : i || ((l = Ba(n, o)), l != null && a.push(Xa(n, l, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var _O = /\r\n?/g,
  NO = /\u0000|\uFFFD/g;
function zm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _O,
      `
`
    )
    .replace(NO, "");
}
function nl(e, t, n) {
  if (((t = zm(t)), zm(e) !== t && n)) throw Error(B(425));
}
function rs() {}
var qd = null,
  Bd = null;
function Vd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qd = typeof setTimeout == "function" ? setTimeout : void 0,
  IO = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Um = typeof Promise == "function" ? Promise : void 0,
  LO =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Um < "u"
      ? function (e) {
          return Um.resolve(null).then(e).catch(DO);
        }
      : Qd;
function DO(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rf(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Wa(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Wa(t);
}
function ei(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yo = Math.random().toString(36).slice(2),
  er = "__reactFiber$" + Yo,
  Za = "__reactProps$" + Yo,
  Or = "__reactContainer$" + Yo,
  Wd = "__reactEvents$" + Yo,
  jO = "__reactListeners$" + Yo,
  zO = "__reactHandles$" + Yo;
function bi(e) {
  var t = e[er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Or] || n[er])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hm(e); e !== null; ) {
          if ((n = e[er])) return n;
          e = Hm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $u(e) {
  return (
    (e = e[er] || e[Or]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ao(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function nc(e) {
  return e[Za] || null;
}
var Kd = [],
  uo = -1;
function di(e) {
  return { current: e };
}
function Ye(e) {
  0 > uo || ((e.current = Kd[uo]), (Kd[uo] = null), uo--);
}
function We(e, t) {
  uo++, (Kd[uo] = e.current), (e.current = t);
}
var ui = {},
  Dt = di(ui),
  Xt = di(!1),
  Li = ui;
function Fo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ui;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Zt(e) {
  return (e = e.childContextTypes), e != null;
}
function is() {
  Ye(Xt), Ye(Dt);
}
function qm(e, t, n) {
  if (Dt.current !== ui) throw Error(B(168));
  We(Dt, t), We(Xt, n);
}
function nw(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(B(108, xx(e) || "Unknown", i));
  return it({}, n, r);
}
function os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ui),
    (Li = Dt.current),
    We(Dt, e),
    We(Xt, Xt.current),
    !0
  );
}
function Bm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = nw(e, t, Li)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ye(Xt),
      Ye(Dt),
      We(Dt, e))
    : Ye(Xt),
    We(Xt, n);
}
var vr = null,
  rc = !1,
  kf = !1;
function rw(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function UO(e) {
  (rc = !0), rw(e);
}
function hi() {
  if (!kf && vr !== null) {
    kf = !0;
    var e = 0,
      t = ze;
    try {
      var n = vr;
      for (ze = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vr = null), (rc = !1);
    } catch (i) {
      throw (vr !== null && (vr = vr.slice(e + 1)), k1(_p, hi), i);
    } finally {
      (ze = t), (kf = !1);
    }
  }
  return null;
}
var lo = [],
  so = 0,
  as = null,
  us = 0,
  Pn = [],
  Rn = 0,
  Di = null,
  yr = 1,
  wr = "";
function gi(e, t) {
  (lo[so++] = us), (lo[so++] = as), (as = e), (us = t);
}
function iw(e, t, n) {
  (Pn[Rn++] = yr), (Pn[Rn++] = wr), (Pn[Rn++] = Di), (Di = e);
  var r = yr;
  e = wr;
  var i = 32 - Bn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Bn(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (yr = (1 << (32 - Bn(t) + i)) | (n << i) | r),
      (wr = o + e);
  } else (yr = (1 << o) | (n << i) | r), (wr = e);
}
function qp(e) {
  e.return !== null && (gi(e, 1), iw(e, 1, 0));
}
function Bp(e) {
  for (; e === as; )
    (as = lo[--so]), (lo[so] = null), (us = lo[--so]), (lo[so] = null);
  for (; e === Di; )
    (Di = Pn[--Rn]),
      (Pn[Rn] = null),
      (wr = Pn[--Rn]),
      (Pn[Rn] = null),
      (yr = Pn[--Rn]),
      (Pn[Rn] = null);
}
var dn = null,
  cn = null,
  et = !1,
  Hn = null;
function ow(e, t) {
  var n = Mn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dn = e), (cn = ei(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dn = e), (cn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Di !== null ? { id: yr, overflow: wr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Mn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (dn = e),
            (cn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yd(e) {
  if (et) {
    var t = cn;
    if (t) {
      var n = t;
      if (!Vm(e, t)) {
        if (Gd(e)) throw Error(B(418));
        t = ei(n.nextSibling);
        var r = dn;
        t && Vm(e, t)
          ? ow(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (et = !1), (dn = e));
      }
    } else {
      if (Gd(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (et = !1), (dn = e);
    }
  }
}
function Qm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  dn = e;
}
function rl(e) {
  if (e !== dn) return !1;
  if (!et) return Qm(e), (et = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vd(e.type, e.memoizedProps))),
    t && (t = cn))
  ) {
    if (Gd(e)) throw (aw(), Error(B(418)));
    for (; t; ) ow(e, t), (t = ei(t.nextSibling));
  }
  if ((Qm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = ei(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? ei(e.stateNode.nextSibling) : null;
  return !0;
}
function aw() {
  for (var e = cn; e; ) e = ei(e.nextSibling);
}
function _o() {
  (cn = dn = null), (et = !1);
}
function Vp(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
var HO = $r.ReactCurrentBatchConfig;
function zn(e, t) {
  if (e && e.defaultProps) {
    (t = it({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ls = di(null),
  ss = null,
  co = null,
  Qp = null;
function Wp() {
  Qp = co = ss = null;
}
function Kp(e) {
  var t = ls.current;
  Ye(ls), (e._currentValue = t);
}
function Xd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bo(e, t) {
  (ss = e),
    (Qp = co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Gt = !0), (e.firstContext = null));
}
function $n(e) {
  var t = e._currentValue;
  if (Qp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), co === null)) {
      if (ss === null) throw Error(B(308));
      (co = e), (ss.dependencies = { lanes: 0, firstContext: e });
    } else co = co.next = e;
  return t;
}
var Ci = null;
function Gp(e) {
  Ci === null ? (Ci = [e]) : Ci.push(e);
}
function uw(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Gp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Pr(e, r)
  );
}
function Pr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ur = !1;
function Yp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lw(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function br(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ti(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Me & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Pr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Gp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Pr(e, n)
  );
}
function kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Np(e, n);
  }
}
function Wm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function cs(e, t, n, r) {
  var i = e.updateQueue;
  Ur = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var l = u,
      s = l.next;
    (l.next = null), a === null ? (o = s) : (a.next = s), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== a &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = s = l = null), (u = o);
    do {
      var f = u.lane,
        h = u.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            y = u;
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = it({}, d, f);
              break e;
            case 2:
              Ur = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [u]) : f.push(u));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (f = u),
          (u = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (zi |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Km(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(B(191, i));
        i.call(r);
      }
    }
}
var sw = new u1.Component().refs;
function Zd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : it({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ic = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Bt(),
      i = ri(e),
      o = br(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ti(e, o, i)),
      t !== null && (Vn(t, e, i, r), kl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Bt(),
      i = ri(e),
      o = br(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ti(e, o, i)),
      t !== null && (Vn(t, e, i, r), kl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Bt(),
      r = ri(e),
      i = br(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ti(e, i, r)),
      t !== null && (Vn(t, e, r, n), kl(t, e, r));
  },
};
function Gm(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ga(n, r) || !Ga(i, o)
      : !0
  );
}
function cw(e, t, n) {
  var r = !1,
    i = ui,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = $n(o))
      : ((i = Zt(t) ? Li : Dt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Fo(e, i) : ui)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ic),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ym(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ic.enqueueReplaceState(t, t.state, null);
}
function Jd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = sw), Yp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = $n(o))
    : ((o = Zt(t) ? Li : Dt.current), (i.context = Fo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Zd(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ic.enqueueReplaceState(i, i.state, null),
      cs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ua(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var u = i.refs;
            u === sw && (u = i.refs = {}),
              a === null ? delete u[o] : (u[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function il(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xm(e) {
  var t = e._init;
  return t(e._payload);
}
function fw(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = ii(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = Nf(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, w) {
    var x = g.type;
    return x === no
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === zr &&
            Xm(x) === p.type))
      ? ((w = i(p, g.props)), (w.ref = ua(m, p, g)), (w.return = m), w)
      : ((w = _l(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = ua(m, p, g)),
        (w.return = m),
        w);
  }
  function s(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = If(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, w, x) {
    return p === null || p.tag !== 7
      ? ((p = Fi(g, m.mode, w, x)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Nf("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wu:
          return (
            (g = _l(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = ua(m, null, p)),
            (g.return = m),
            g
          );
        case to:
          return (p = If(p, m.mode, g)), (p.return = m), p;
        case zr:
          var w = p._init;
          return d(m, w(p._payload), g);
      }
      if (ga(p) || na(p))
        return (p = Fi(p, m.mode, g, null)), (p.return = m), p;
      il(m, p);
    }
    return null;
  }
  function f(m, p, g, w) {
    var x = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return x !== null ? null : u(m, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Wu:
          return g.key === x ? l(m, p, g, w) : null;
        case to:
          return g.key === x ? s(m, p, g, w) : null;
        case zr:
          return (x = g._init), f(m, p, x(g._payload), w);
      }
      if (ga(g) || na(g)) return x !== null ? null : c(m, p, g, w, null);
      il(m, g);
    }
    return null;
  }
  function h(m, p, g, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), u(p, m, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Wu:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, x);
        case to:
          return (m = m.get(w.key === null ? g : w.key) || null), s(p, m, w, x);
        case zr:
          var C = w._init;
          return h(m, p, g, C(w._payload), x);
      }
      if (ga(w) || na(w)) return (m = m.get(g) || null), c(p, m, w, x, null);
      il(p, w);
    }
    return null;
  }
  function v(m, p, g, w) {
    for (
      var x = null, C = null, E = p, k = (p = 0), M = null;
      E !== null && k < g.length;
      k++
    ) {
      E.index > k ? ((M = E), (E = null)) : (M = E.sibling);
      var T = f(m, E, g[k], w);
      if (T === null) {
        E === null && (E = M);
        break;
      }
      e && E && T.alternate === null && t(m, E),
        (p = o(T, p, k)),
        C === null ? (x = T) : (C.sibling = T),
        (C = T),
        (E = M);
    }
    if (k === g.length) return n(m, E), et && gi(m, k), x;
    if (E === null) {
      for (; k < g.length; k++)
        (E = d(m, g[k], w)),
          E !== null &&
            ((p = o(E, p, k)), C === null ? (x = E) : (C.sibling = E), (C = E));
      return et && gi(m, k), x;
    }
    for (E = r(m, E); k < g.length; k++)
      (M = h(E, m, k, g[k], w)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? k : M.key),
          (p = o(M, p, k)),
          C === null ? (x = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        E.forEach(function (A) {
          return t(m, A);
        }),
      et && gi(m, k),
      x
    );
  }
  function y(m, p, g, w) {
    var x = na(g);
    if (typeof x != "function") throw Error(B(150));
    if (((g = x.call(g)), g == null)) throw Error(B(151));
    for (
      var C = (x = null), E = p, k = (p = 0), M = null, T = g.next();
      E !== null && !T.done;
      k++, T = g.next()
    ) {
      E.index > k ? ((M = E), (E = null)) : (M = E.sibling);
      var A = f(m, E, T.value, w);
      if (A === null) {
        E === null && (E = M);
        break;
      }
      e && E && A.alternate === null && t(m, E),
        (p = o(A, p, k)),
        C === null ? (x = A) : (C.sibling = A),
        (C = A),
        (E = M);
    }
    if (T.done) return n(m, E), et && gi(m, k), x;
    if (E === null) {
      for (; !T.done; k++, T = g.next())
        (T = d(m, T.value, w)),
          T !== null &&
            ((p = o(T, p, k)), C === null ? (x = T) : (C.sibling = T), (C = T));
      return et && gi(m, k), x;
    }
    for (E = r(m, E); !T.done; k++, T = g.next())
      (T = h(E, m, k, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? k : T.key),
          (p = o(T, p, k)),
          C === null ? (x = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        E.forEach(function (P) {
          return t(m, P);
        }),
      et && gi(m, k),
      x
    );
  }
  function b(m, p, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === no &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Wu:
          e: {
            for (var x = g.key, C = p; C !== null; ) {
              if (C.key === x) {
                if (((x = g.type), x === no)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = i(C, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === zr &&
                    Xm(x) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, g.props)),
                    (p.ref = ua(m, C, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            g.type === no
              ? ((p = Fi(g.props.children, m.mode, w, g.key)),
                (p.return = m),
                (m = p))
              : ((w = _l(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = ua(m, p, g)),
                (w.return = m),
                (m = w));
          }
          return a(m);
        case to:
          e: {
            for (C = g.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = If(g, m.mode, w)), (p.return = m), (m = p);
          }
          return a(m);
        case zr:
          return (C = g._init), b(m, p, C(g._payload), w);
      }
      if (ga(g)) return v(m, p, g, w);
      if (na(g)) return y(m, p, g, w);
      il(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Nf(g, m.mode, w)), (p.return = m), (m = p)),
        a(m))
      : n(m, p);
  }
  return b;
}
var No = fw(!0),
  dw = fw(!1),
  Au = {},
  rr = di(Au),
  Ja = di(Au),
  eu = di(Au);
function Ei(e) {
  if (e === Au) throw Error(B(174));
  return e;
}
function Xp(e, t) {
  switch ((We(eu, t), We(Ja, e), We(rr, Au), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $d(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $d(t, e));
  }
  Ye(rr), We(rr, t);
}
function Io() {
  Ye(rr), Ye(Ja), Ye(eu);
}
function hw(e) {
  Ei(eu.current);
  var t = Ei(rr.current),
    n = $d(t, e.type);
  t !== n && (We(Ja, e), We(rr, n));
}
function Zp(e) {
  Ja.current === e && (Ye(rr), Ye(Ja));
}
var tt = di(0);
function fs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Mf = [];
function Jp() {
  for (var e = 0; e < Mf.length; e++)
    Mf[e]._workInProgressVersionPrimary = null;
  Mf.length = 0;
}
var Ml = $r.ReactCurrentDispatcher,
  Tf = $r.ReactCurrentBatchConfig,
  ji = 0,
  rt = null,
  mt = null,
  bt = null,
  ds = !1,
  ka = !1,
  tu = 0,
  qO = 0;
function Ft() {
  throw Error(B(321));
}
function ev(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wn(e[n], t[n])) return !1;
  return !0;
}
function tv(e, t, n, r, i, o) {
  if (
    ((ji = o),
    (rt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ml.current = e === null || e.memoizedState === null ? WO : KO),
    (e = n(r, i)),
    ka)
  ) {
    o = 0;
    do {
      if (((ka = !1), (tu = 0), 25 <= o)) throw Error(B(301));
      (o += 1),
        (bt = mt = null),
        (t.updateQueue = null),
        (Ml.current = GO),
        (e = n(r, i));
    } while (ka);
  }
  if (
    ((Ml.current = hs),
    (t = mt !== null && mt.next !== null),
    (ji = 0),
    (bt = mt = rt = null),
    (ds = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function nv() {
  var e = tu !== 0;
  return (tu = 0), e;
}
function Jn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return bt === null ? (rt.memoizedState = bt = e) : (bt = bt.next = e), bt;
}
function An() {
  if (mt === null) {
    var e = rt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = mt.next;
  var t = bt === null ? rt.memoizedState : bt.next;
  if (t !== null) (bt = t), (mt = e);
  else {
    if (e === null) throw Error(B(310));
    (mt = e),
      (e = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null,
      }),
      bt === null ? (rt.memoizedState = bt = e) : (bt = bt.next = e);
  }
  return bt;
}
function nu(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $f(e) {
  var t = An(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = mt,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var u = (a = null),
      l = null,
      s = o;
    do {
      var c = s.lane;
      if ((ji & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        l === null ? ((u = l = d), (a = r)) : (l = l.next = d),
          (rt.lanes |= c),
          (zi |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    l === null ? (a = r) : (l.next = u),
      Wn(r, t.memoizedState) || (Gt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (rt.lanes |= o), (zi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Af(e) {
  var t = An(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    Wn(o, t.memoizedState) || (Gt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function pw() {}
function vw(e, t) {
  var n = rt,
    r = An(),
    i = t(),
    o = !Wn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Gt = !0)),
    (r = r.queue),
    rv(yw.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (bt !== null && bt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ru(9, gw.bind(null, n, r, i, t), void 0, null),
      Ct === null)
    )
      throw Error(B(349));
    ji & 30 || mw(n, t, i);
  }
  return i;
}
function mw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = rt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (rt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ww(t) && Sw(e);
}
function yw(e, t, n) {
  return n(function () {
    ww(t) && Sw(e);
  });
}
function ww(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wn(e, n);
  } catch {
    return !0;
  }
}
function Sw(e) {
  var t = Pr(e, 1);
  t !== null && Vn(t, e, 1, -1);
}
function Zm(e) {
  var t = Jn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nu,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = QO.bind(null, rt, e)),
    [t.memoizedState, e]
  );
}
function ru(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = rt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (rt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bw() {
  return An().memoizedState;
}
function Tl(e, t, n, r) {
  var i = Jn();
  (rt.flags |= e),
    (i.memoizedState = ru(1 | t, n, void 0, r === void 0 ? null : r));
}
function oc(e, t, n, r) {
  var i = An();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (mt !== null) {
    var a = mt.memoizedState;
    if (((o = a.destroy), r !== null && ev(r, a.deps))) {
      i.memoizedState = ru(t, n, o, r);
      return;
    }
  }
  (rt.flags |= e), (i.memoizedState = ru(1 | t, n, o, r));
}
function Jm(e, t) {
  return Tl(8390656, 8, e, t);
}
function rv(e, t) {
  return oc(2048, 8, e, t);
}
function Cw(e, t) {
  return oc(4, 2, e, t);
}
function Ew(e, t) {
  return oc(4, 4, e, t);
}
function xw(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ow(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), oc(4, 4, xw.bind(null, t, e), n)
  );
}
function iv() {}
function Pw(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ev(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rw(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ev(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kw(e, t, n) {
  return ji & 21
    ? (Wn(n, t) || ((n = $1()), (rt.lanes |= n), (zi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Gt = !0)), (e.memoizedState = n));
}
function BO(e, t) {
  var n = ze;
  (ze = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Tf.transition;
  Tf.transition = {};
  try {
    e(!1), t();
  } finally {
    (ze = n), (Tf.transition = r);
  }
}
function Mw() {
  return An().memoizedState;
}
function VO(e, t, n) {
  var r = ri(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Tw(e))
  )
    $w(t, n);
  else if (((n = uw(e, t, n, r)), n !== null)) {
    var i = Bt();
    Vn(n, e, r, i), Aw(n, t, r);
  }
}
function QO(e, t, n) {
  var r = ri(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tw(e)) $w(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), Wn(u, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Gp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = uw(e, t, i, r)),
      n !== null && ((i = Bt()), Vn(n, e, r, i), Aw(n, t, r));
  }
}
function Tw(e) {
  var t = e.alternate;
  return e === rt || (t !== null && t === rt);
}
function $w(e, t) {
  ka = ds = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Aw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Np(e, n);
  }
}
var hs = {
    readContext: $n,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useInsertionEffect: Ft,
    useLayoutEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useMutableSource: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    unstable_isNewReconciler: !1,
  },
  WO = {
    readContext: $n,
    useCallback: function (e, t) {
      return (Jn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $n,
    useEffect: Jm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tl(4194308, 4, xw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = VO.bind(null, rt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zm,
    useDebugValue: iv,
    useDeferredValue: function (e) {
      return (Jn().memoizedState = e);
    },
    useTransition: function () {
      var e = Zm(!1),
        t = e[0];
      return (e = BO.bind(null, e[1])), (Jn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = rt,
        i = Jn();
      if (et) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), Ct === null)) throw Error(B(349));
        ji & 30 || mw(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Jm(yw.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ru(9, gw.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jn(),
        t = Ct.identifierPrefix;
      if (et) {
        var n = wr,
          r = yr;
        (n = (r & ~(1 << (32 - Bn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tu++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qO++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  KO = {
    readContext: $n,
    useCallback: Pw,
    useContext: $n,
    useEffect: rv,
    useImperativeHandle: Ow,
    useInsertionEffect: Cw,
    useLayoutEffect: Ew,
    useMemo: Rw,
    useReducer: $f,
    useRef: bw,
    useState: function () {
      return $f(nu);
    },
    useDebugValue: iv,
    useDeferredValue: function (e) {
      var t = An();
      return kw(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = $f(nu)[0],
        t = An().memoizedState;
      return [e, t];
    },
    useMutableSource: pw,
    useSyncExternalStore: vw,
    useId: Mw,
    unstable_isNewReconciler: !1,
  },
  GO = {
    readContext: $n,
    useCallback: Pw,
    useContext: $n,
    useEffect: rv,
    useImperativeHandle: Ow,
    useInsertionEffect: Cw,
    useLayoutEffect: Ew,
    useMemo: Rw,
    useReducer: Af,
    useRef: bw,
    useState: function () {
      return Af(nu);
    },
    useDebugValue: iv,
    useDeferredValue: function (e) {
      var t = An();
      return mt === null ? (t.memoizedState = e) : kw(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = Af(nu)[0],
        t = An().memoizedState;
      return [e, t];
    },
    useMutableSource: pw,
    useSyncExternalStore: vw,
    useId: Mw,
    unstable_isNewReconciler: !1,
  };
function Lo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ex(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ff(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function eh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var YO = typeof WeakMap == "function" ? WeakMap : Map;
function Fw(e, t, n) {
  (n = br(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vs || ((vs = !0), (ch = r)), eh(e, t);
    }),
    n
  );
}
function _w(e, t, n) {
  (n = br(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        eh(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        eh(e, t),
          typeof r != "function" &&
            (ni === null ? (ni = new Set([this])) : ni.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function eg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new YO();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = cP.bind(null, e, t, n)), t.then(e, e));
}
function tg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ng(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = br(-1, 1)), (t.tag = 2), ti(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var XO = $r.ReactCurrentOwner,
  Gt = !1;
function qt(e, t, n, r) {
  t.child = e === null ? dw(t, null, n, r) : No(t, e.child, n, r);
}
function rg(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    bo(t, i),
    (r = tv(e, t, n, r, o, i)),
    (n = nv()),
    e !== null && !Gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rr(e, t, i))
      : (et && n && qp(t), (t.flags |= 1), qt(e, t, r, i), t.child)
  );
}
function ig(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !dv(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Nw(e, t, o, r, i))
      : ((e = _l(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ga), n(a, r) && e.ref === t.ref)
    )
      return Rr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ii(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nw(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ga(o, r) && e.ref === t.ref)
      if (((Gt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Gt = !0);
      else return (t.lanes = e.lanes), Rr(e, t, i);
  }
  return th(e, t, n, r, i);
}
function Iw(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        We(ho, sn),
        (sn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          We(ho, sn),
          (sn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        We(ho, sn),
        (sn |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      We(ho, sn),
      (sn |= r);
  return qt(e, t, i, n), t.child;
}
function Lw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function th(e, t, n, r, i) {
  var o = Zt(n) ? Li : Dt.current;
  return (
    (o = Fo(t, o)),
    bo(t, i),
    (n = tv(e, t, n, r, o, i)),
    (r = nv()),
    e !== null && !Gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rr(e, t, i))
      : (et && r && qp(t), (t.flags |= 1), qt(e, t, n, i), t.child)
  );
}
function og(e, t, n, r, i) {
  if (Zt(n)) {
    var o = !0;
    os(t);
  } else o = !1;
  if ((bo(t, i), t.stateNode === null))
    $l(e, t), cw(t, n, r), Jd(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var l = a.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = $n(s))
      : ((s = Zt(n) ? Li : Dt.current), (s = Fo(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || l !== s) && Ym(t, a, r, s)),
      (Ur = !1);
    var f = t.memoizedState;
    (a.state = f),
      cs(t, r, a, i),
      (l = t.memoizedState),
      u !== r || f !== l || Xt.current || Ur
        ? (typeof c == "function" && (Zd(t, n, c, r), (l = t.memoizedState)),
          (u = Ur || Gm(t, n, u, r, f, l, s))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = s),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      lw(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : zn(t.type, u)),
      (a.props = s),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = $n(l))
        : ((l = Zt(n) ? Li : Dt.current), (l = Fo(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== d || f !== l) && Ym(t, a, r, l)),
      (Ur = !1),
      (f = t.memoizedState),
      (a.state = f),
      cs(t, r, a, i);
    var v = t.memoizedState;
    u !== d || f !== v || Xt.current || Ur
      ? (typeof h == "function" && (Zd(t, n, h, r), (v = t.memoizedState)),
        (s = Ur || Gm(t, n, s, r, f, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = l),
        (r = s))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nh(e, t, n, r, o, i);
}
function nh(e, t, n, r, i, o) {
  Lw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Bm(t, n, !1), Rr(e, t, o);
  (r = t.stateNode), (XO.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = No(t, e.child, null, o)), (t.child = No(t, null, u, o)))
      : qt(e, t, u, o),
    (t.memoizedState = r.state),
    i && Bm(t, n, !0),
    t.child
  );
}
function Dw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qm(e, t.context, !1),
    Xp(e, t.containerInfo);
}
function ag(e, t, n, r, i) {
  return _o(), Vp(i), (t.flags |= 256), qt(e, t, n, r), t.child;
}
var rh = { dehydrated: null, treeContext: null, retryLane: 0 };
function ih(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jw(e, t, n) {
  var r = t.pendingProps,
    i = tt.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    We(tt, i & 1),
    e === null)
  )
    return (
      Yd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = lc(a, r, 0, null)),
              (e = Fi(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ih(n)),
              (t.memoizedState = rh),
              e)
            : ov(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return ZO(e, t, a, r, u, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (u = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ii(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = ii(u, o)) : ((o = Fi(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ih(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = rh),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ii(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ov(e, t) {
  return (
    (t = lc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ol(e, t, n, r) {
  return (
    r !== null && Vp(r),
    No(t, e.child, null, n),
    (e = ov(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ZO(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ff(Error(B(422)))), ol(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = lc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Fi(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && No(t, e.child, null, a),
        (t.child.memoizedState = ih(a)),
        (t.memoizedState = rh),
        o);
  if (!(t.mode & 1)) return ol(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(B(419))), (r = Ff(o, r, void 0)), ol(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), Gt || u)) {
    if (((r = Ct), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Pr(e, i), Vn(r, e, i, -1));
    }
    return fv(), (r = Ff(Error(B(421)))), ol(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fP.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (cn = ei(i.nextSibling)),
      (dn = t),
      (et = !0),
      (Hn = null),
      e !== null &&
        ((Pn[Rn++] = yr),
        (Pn[Rn++] = wr),
        (Pn[Rn++] = Di),
        (yr = e.id),
        (wr = e.overflow),
        (Di = t)),
      (t = ov(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ug(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xd(e.return, t, n);
}
function _f(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function zw(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((qt(e, t, r.children, n), (r = tt.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ug(e, n, t);
        else if (e.tag === 19) ug(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((We(tt, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && fs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          _f(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && fs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        _f(t, !0, n, null, o);
        break;
      case "together":
        _f(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $l(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ii(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ii(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function JO(e, t, n) {
  switch (t.tag) {
    case 3:
      Dw(t), _o();
      break;
    case 5:
      hw(t);
      break;
    case 1:
      Zt(t.type) && os(t);
      break;
    case 4:
      Xp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      We(ls, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (We(tt, tt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jw(e, t, n)
          : (We(tt, tt.current & 1),
            (e = Rr(e, t, n)),
            e !== null ? e.sibling : null);
      We(tt, tt.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        We(tt, tt.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Iw(e, t, n);
  }
  return Rr(e, t, n);
}
var Uw, oh, Hw, qw;
Uw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
oh = function () {};
Hw = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ei(rr.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Rd(e, i)), (r = Rd(e, r)), (o = []);
        break;
      case "select":
        (i = it({}, i, { value: void 0 })),
          (r = it({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Td(e, i)), (r = Td(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rs);
    }
    Ad(n, r);
    var a;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var u = i[s];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ha.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var l = r[s];
      if (
        ((u = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && l !== u && (l != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                u[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(s, n)), (n = l);
        else
          s === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (u = u ? u.__html : void 0),
              l != null && u !== l && (o = o || []).push(s, l))
            : s === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(s, "" + l)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ha.hasOwnProperty(s)
                ? (l != null && s === "onScroll" && Ke("scroll", e),
                  o || u === l || (o = []))
                : (o = o || []).push(s, l));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
qw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function la(e, t) {
  if (!et)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _t(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function eP(e, t, n) {
  var r = t.pendingProps;
  switch ((Bp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _t(t), null;
    case 1:
      return Zt(t.type) && is(), _t(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Io(),
        Ye(Xt),
        Ye(Dt),
        Jp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (rl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Hn !== null && (hh(Hn), (Hn = null)))),
        oh(e, t),
        _t(t),
        null
      );
    case 5:
      Zp(t);
      var i = Ei(eu.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hw(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return _t(t), null;
        }
        if (((e = Ei(rr.current)), rl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[er] = t), (r[Za] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ke("cancel", r), Ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wa.length; i++) Ke(wa[i], r);
              break;
            case "source":
              Ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ke("error", r), Ke("load", r);
              break;
            case "details":
              Ke("toggle", r);
              break;
            case "input":
              mm(r, o), Ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Ke("invalid", r);
              break;
            case "textarea":
              ym(r, o), Ke("invalid", r);
          }
          Ad(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : Ha.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  Ke("scroll", r);
            }
          switch (n) {
            case "input":
              Ku(r), gm(r, o, !0);
              break;
            case "textarea":
              Ku(r), wm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = m1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[er] = t),
            (e[Za] = r),
            Uw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Fd(n, r)), n)) {
              case "dialog":
                Ke("cancel", e), Ke("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wa.length; i++) Ke(wa[i], e);
                i = r;
                break;
              case "source":
                Ke("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Ke("error", e), Ke("load", e), (i = r);
                break;
              case "details":
                Ke("toggle", e), (i = r);
                break;
              case "input":
                mm(e, r), (i = Rd(e, r)), Ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = it({}, r, { value: void 0 })),
                  Ke("invalid", e);
                break;
              case "textarea":
                ym(e, r), (i = Td(e, r)), Ke("invalid", e);
                break;
              default:
                i = r;
            }
            Ad(n, i), (u = i);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var l = u[o];
                o === "style"
                  ? w1(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && g1(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && qa(e, l)
                    : typeof l == "number" && qa(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ha.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Ke("scroll", e)
                      : l != null && Mp(e, o, l, a));
              }
            switch (n) {
              case "input":
                Ku(e), gm(e, r, !1);
                break;
              case "textarea":
                Ku(e), wm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ai(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? go(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      go(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = rs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _t(t), null;
    case 6:
      if (e && t.stateNode != null) qw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (((n = Ei(eu.current)), Ei(rr.current), rl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[er] = t),
            (o = r.nodeValue !== n) && ((e = dn), e !== null))
          )
            switch (e.tag) {
              case 3:
                nl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[er] = t),
            (t.stateNode = r);
      }
      return _t(t), null;
    case 13:
      if (
        (Ye(tt),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (et && cn !== null && t.mode & 1 && !(t.flags & 128))
          aw(), _o(), (t.flags |= 98560), (o = !1);
        else if (((o = rl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(B(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(B(317));
            o[er] = t;
          } else
            _o(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _t(t), (o = !1);
        } else Hn !== null && (hh(Hn), (Hn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || tt.current & 1 ? yt === 0 && (yt = 3) : fv())),
          t.updateQueue !== null && (t.flags |= 4),
          _t(t),
          null);
    case 4:
      return (
        Io(), oh(e, t), e === null && Ya(t.stateNode.containerInfo), _t(t), null
      );
    case 10:
      return Kp(t.type._context), _t(t), null;
    case 17:
      return Zt(t.type) && is(), _t(t), null;
    case 19:
      if ((Ye(tt), (o = t.memoizedState), o === null)) return _t(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) la(o, !1);
        else {
          if (yt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = fs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    la(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return We(tt, (tt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ct() > Do &&
            ((t.flags |= 128), (r = !0), la(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              la(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !et)
            )
              return _t(t), null;
          } else
            2 * ct() - o.renderingStartTime > Do &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), la(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ct()),
          (t.sibling = null),
          (n = tt.current),
          We(tt, r ? (n & 1) | 2 : n & 1),
          t)
        : (_t(t), null);
    case 22:
    case 23:
      return (
        cv(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? sn & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _t(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function tP(e, t) {
  switch ((Bp(t), t.tag)) {
    case 1:
      return (
        Zt(t.type) && is(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Io(),
        Ye(Xt),
        Ye(Dt),
        Jp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zp(t), null;
    case 13:
      if (
        (Ye(tt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(B(340));
        _o();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ye(tt), null;
    case 4:
      return Io(), null;
    case 10:
      return Kp(t.type._context), null;
    case 22:
    case 23:
      return cv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var al = !1,
  Nt = !1,
  nP = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function fo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        at(e, t, r);
      }
    else n.current = null;
}
function ah(e, t, n) {
  try {
    n();
  } catch (r) {
    at(e, t, r);
  }
}
var lg = !1;
function rP(e, t) {
  if (((qd = es), (e = W1()), Hp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            u = -1,
            l = -1,
            s = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (u = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++s === i && (u = a),
                f === o && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = u === -1 || l === -1 ? null : { start: u, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bd = { focusedElem: e, selectionRange: n }, es = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    b = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : zn(t.type, y),
                      b
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (w) {
          at(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (v = lg), (lg = !1), v;
}
function Ma(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ah(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ac(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[er], delete t[Za], delete t[Wd], delete t[jO], delete t[zO])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vw(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lh(e, t, n), e = e.sibling; e !== null; ) lh(e, t, n), (e = e.sibling);
}
function sh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sh(e, t, n), e = e.sibling; e !== null; ) sh(e, t, n), (e = e.sibling);
}
var xt = null,
  Un = !1;
function Nr(e, t, n) {
  for (n = n.child; n !== null; ) Qw(e, t, n), (n = n.sibling);
}
function Qw(e, t, n) {
  if (nr && typeof nr.onCommitFiberUnmount == "function")
    try {
      nr.onCommitFiberUnmount(Zs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Nt || fo(n, t);
    case 6:
      var r = xt,
        i = Un;
      (xt = null),
        Nr(e, t, n),
        (xt = r),
        (Un = i),
        xt !== null &&
          (Un
            ? ((e = xt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xt.removeChild(n.stateNode));
      break;
    case 18:
      xt !== null &&
        (Un
          ? ((e = xt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Rf(e.parentNode, n)
              : e.nodeType === 1 && Rf(e, n),
            Wa(e))
          : Rf(xt, n.stateNode));
      break;
    case 4:
      (r = xt),
        (i = Un),
        (xt = n.stateNode.containerInfo),
        (Un = !0),
        Nr(e, t, n),
        (xt = r),
        (Un = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && ah(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Nr(e, t, n);
      break;
    case 1:
      if (
        !Nt &&
        (fo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          at(n, t, u);
        }
      Nr(e, t, n);
      break;
    case 21:
      Nr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Nt = (r = Nt) || n.memoizedState !== null), Nr(e, t, n), (Nt = r))
        : Nr(e, t, n);
      break;
    default:
      Nr(e, t, n);
  }
}
function cg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nP()),
      t.forEach(function (r) {
        var i = dP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Dn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (xt = u.stateNode), (Un = !1);
              break e;
            case 3:
              (xt = u.stateNode.containerInfo), (Un = !0);
              break e;
            case 4:
              (xt = u.stateNode.containerInfo), (Un = !0);
              break e;
          }
          u = u.return;
        }
        if (xt === null) throw Error(B(160));
        Qw(o, a, i), (xt = null), (Un = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (s) {
        at(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ww(t, e), (t = t.sibling);
}
function Ww(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dn(t, e), Zn(e), r & 4)) {
        try {
          Ma(3, e, e.return), ac(3, e);
        } catch (y) {
          at(e, e.return, y);
        }
        try {
          Ma(5, e, e.return);
        } catch (y) {
          at(e, e.return, y);
        }
      }
      break;
    case 1:
      Dn(t, e), Zn(e), r & 512 && n !== null && fo(n, n.return);
      break;
    case 5:
      if (
        (Dn(t, e),
        Zn(e),
        r & 512 && n !== null && fo(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qa(i, "");
        } catch (y) {
          at(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          u = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && p1(i, o),
              Fd(u, a);
            var s = Fd(u, o);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? w1(i, d)
                : c === "dangerouslySetInnerHTML"
                ? g1(i, d)
                : c === "children"
                ? qa(i, d)
                : Mp(i, c, d, s);
            }
            switch (u) {
              case "input":
                kd(i, o);
                break;
              case "textarea":
                v1(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? go(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? go(i, !!o.multiple, o.defaultValue, !0)
                      : go(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Za] = o;
          } catch (y) {
            at(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Dn(t, e), Zn(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          at(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Dn(t, e), Zn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wa(t.containerInfo);
        } catch (y) {
          at(e, e.return, y);
        }
      break;
    case 4:
      Dn(t, e), Zn(e);
      break;
    case 13:
      Dn(t, e),
        Zn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (lv = ct())),
        r & 4 && cg(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Nt = (s = Nt) || c), Dn(t, e), (Nt = s)) : Dn(t, e),
        Zn(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (Y = e, c = e.child; c !== null; ) {
            for (d = Y = c; Y !== null; ) {
              switch (((f = Y), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ma(4, f, f.return);
                  break;
                case 1:
                  fo(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      at(r, n, y);
                    }
                  }
                  break;
                case 5:
                  fo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    dg(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (Y = h)) : dg(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  s
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (u.style.display = y1("display", a)));
              } catch (y) {
                at(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (y) {
                at(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Dn(t, e), Zn(e), r & 4 && cg(e);
      break;
    case 21:
      break;
    default:
      Dn(t, e), Zn(e);
  }
}
function Zn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qa(i, ""), (r.flags &= -33));
          var o = sg(e);
          sh(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = sg(e);
          lh(e, u, a);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      at(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function iP(e, t, n) {
  (Y = e), Kw(e);
}
function Kw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || al;
      if (!a) {
        var u = i.alternate,
          l = (u !== null && u.memoizedState !== null) || Nt;
        u = al;
        var s = Nt;
        if (((al = a), (Nt = l) && !s))
          for (Y = i; Y !== null; )
            (a = Y),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? hg(i)
                : l !== null
                ? ((l.return = a), (Y = l))
                : hg(i);
        for (; o !== null; ) (Y = o), Kw(o), (o = o.sibling);
        (Y = i), (al = u), (Nt = s);
      }
      fg(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (Y = o)) : fg(e);
  }
}
function fg(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Nt || ac(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Nt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Km(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Km(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Wa(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(B(163));
          }
        Nt || (t.flags & 512 && uh(t));
      } catch (f) {
        at(t, t.return, f);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function dg(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function hg(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ac(4, t);
          } catch (l) {
            at(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              at(t, i, l);
            }
          }
          var o = t.return;
          try {
            uh(t);
          } catch (l) {
            at(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            uh(t);
          } catch (l) {
            at(t, a, l);
          }
      }
    } catch (l) {
      at(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (Y = u);
      break;
    }
    Y = t.return;
  }
}
var oP = Math.ceil,
  ps = $r.ReactCurrentDispatcher,
  av = $r.ReactCurrentOwner,
  Tn = $r.ReactCurrentBatchConfig,
  Me = 0,
  Ct = null,
  vt = null,
  Mt = 0,
  sn = 0,
  ho = di(0),
  yt = 0,
  iu = null,
  zi = 0,
  uc = 0,
  uv = 0,
  Ta = null,
  Kt = null,
  lv = 0,
  Do = 1 / 0,
  hr = null,
  vs = !1,
  ch = null,
  ni = null,
  ul = !1,
  Kr = null,
  ms = 0,
  $a = 0,
  fh = null,
  Al = -1,
  Fl = 0;
function Bt() {
  return Me & 6 ? ct() : Al !== -1 ? Al : (Al = ct());
}
function ri(e) {
  return e.mode & 1
    ? Me & 2 && Mt !== 0
      ? Mt & -Mt
      : HO.transition !== null
      ? (Fl === 0 && (Fl = $1()), Fl)
      : ((e = ze),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : D1(e.type))),
        e)
    : 1;
}
function Vn(e, t, n, r) {
  if (50 < $a) throw (($a = 0), (fh = null), Error(B(185)));
  Mu(e, n, r),
    (!(Me & 2) || e !== Ct) &&
      (e === Ct && (!(Me & 2) && (uc |= n), yt === 4 && Vr(e, Mt)),
      Jt(e, r),
      n === 1 && Me === 0 && !(t.mode & 1) && ((Do = ct() + 500), rc && hi()));
}
function Jt(e, t) {
  var n = e.callbackNode;
  Hx(e, t);
  var r = Jl(e, e === Ct ? Mt : 0);
  if (r === 0)
    n !== null && Cm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cm(n), t === 1))
      e.tag === 0 ? UO(pg.bind(null, e)) : rw(pg.bind(null, e)),
        LO(function () {
          !(Me & 6) && hi();
        }),
        (n = null);
    else {
      switch (A1(r)) {
        case 1:
          n = _p;
          break;
        case 4:
          n = M1;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = T1;
          break;
        default:
          n = Zl;
      }
      n = nS(n, Gw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gw(e, t) {
  if (((Al = -1), (Fl = 0), Me & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (Co() && e.callbackNode !== n) return null;
  var r = Jl(e, e === Ct ? Mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var i = Me;
    Me |= 2;
    var o = Xw();
    (Ct !== e || Mt !== t) && ((hr = null), (Do = ct() + 500), Ai(e, t));
    do
      try {
        lP();
        break;
      } catch (u) {
        Yw(e, u);
      }
    while (1);
    Wp(),
      (ps.current = o),
      (Me = i),
      vt !== null ? (t = 0) : ((Ct = null), (Mt = 0), (t = yt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Dd(e)), i !== 0 && ((r = i), (t = dh(e, i)))), t === 1)
    )
      throw ((n = iu), Ai(e, 0), Vr(e, r), Jt(e, ct()), n);
    if (t === 6) Vr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !aP(i) &&
          ((t = gs(e, r)),
          t === 2 && ((o = Dd(e)), o !== 0 && ((r = o), (t = dh(e, o)))),
          t === 1))
      )
        throw ((n = iu), Ai(e, 0), Vr(e, r), Jt(e, ct()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          yi(e, Kt, hr);
          break;
        case 3:
          if (
            (Vr(e, r), (r & 130023424) === r && ((t = lv + 500 - ct()), 10 < t))
          ) {
            if (Jl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Bt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Qd(yi.bind(null, e, Kt, hr), t);
            break;
          }
          yi(e, Kt, hr);
          break;
        case 4:
          if ((Vr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Bn(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ct() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * oP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qd(yi.bind(null, e, Kt, hr), r);
            break;
          }
          yi(e, Kt, hr);
          break;
        case 5:
          yi(e, Kt, hr);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return Jt(e, ct()), e.callbackNode === n ? Gw.bind(null, e) : null;
}
function dh(e, t) {
  var n = Ta;
  return (
    e.current.memoizedState.isDehydrated && (Ai(e, t).flags |= 256),
    (e = gs(e, t)),
    e !== 2 && ((t = Kt), (Kt = n), t !== null && hh(t)),
    e
  );
}
function hh(e) {
  Kt === null ? (Kt = e) : Kt.push.apply(Kt, e);
}
function aP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Wn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vr(e, t) {
  for (
    t &= ~uv,
      t &= ~uc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Bn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pg(e) {
  if (Me & 6) throw Error(B(327));
  Co();
  var t = Jl(e, 0);
  if (!(t & 1)) return Jt(e, ct()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Dd(e);
    r !== 0 && ((t = r), (n = dh(e, r)));
  }
  if (n === 1) throw ((n = iu), Ai(e, 0), Vr(e, t), Jt(e, ct()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yi(e, Kt, hr),
    Jt(e, ct()),
    null
  );
}
function sv(e, t) {
  var n = Me;
  Me |= 1;
  try {
    return e(t);
  } finally {
    (Me = n), Me === 0 && ((Do = ct() + 500), rc && hi());
  }
}
function Ui(e) {
  Kr !== null && Kr.tag === 0 && !(Me & 6) && Co();
  var t = Me;
  Me |= 1;
  var n = Tn.transition,
    r = ze;
  try {
    if (((Tn.transition = null), (ze = 1), e)) return e();
  } finally {
    (ze = r), (Tn.transition = n), (Me = t), !(Me & 6) && hi();
  }
}
function cv() {
  (sn = ho.current), Ye(ho);
}
function Ai(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), IO(n)), vt !== null))
    for (n = vt.return; n !== null; ) {
      var r = n;
      switch ((Bp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && is();
          break;
        case 3:
          Io(), Ye(Xt), Ye(Dt), Jp();
          break;
        case 5:
          Zp(r);
          break;
        case 4:
          Io();
          break;
        case 13:
          Ye(tt);
          break;
        case 19:
          Ye(tt);
          break;
        case 10:
          Kp(r.type._context);
          break;
        case 22:
        case 23:
          cv();
      }
      n = n.return;
    }
  if (
    ((Ct = e),
    (vt = e = ii(e.current, null)),
    (Mt = sn = t),
    (yt = 0),
    (iu = null),
    (uv = uc = zi = 0),
    (Kt = Ta = null),
    Ci !== null)
  ) {
    for (t = 0; t < Ci.length; t++)
      if (((n = Ci[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Ci = null;
  }
  return e;
}
function Yw(e, t) {
  do {
    var n = vt;
    try {
      if ((Wp(), (Ml.current = hs), ds)) {
        for (var r = rt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ds = !1;
      }
      if (
        ((ji = 0),
        (bt = mt = rt = null),
        (ka = !1),
        (tu = 0),
        (av.current = null),
        n === null || n.return === null)
      ) {
        (yt = 1), (iu = t), (vt = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          u = n,
          l = t;
        if (
          ((t = Mt),
          (u.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var s = l,
            c = u,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = tg(a);
          if (h !== null) {
            (h.flags &= -257),
              ng(h, a, u, o, t),
              h.mode & 1 && eg(o, s, t),
              (t = h),
              (l = s);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              eg(o, s, t), fv();
              break e;
            }
            l = Error(B(426));
          }
        } else if (et && u.mode & 1) {
          var b = tg(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              ng(b, a, u, o, t),
              Vp(Lo(l, u));
            break e;
          }
        }
        (o = l = Lo(l, u)),
          yt !== 4 && (yt = 2),
          Ta === null ? (Ta = [o]) : Ta.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Fw(o, l, t);
              Wm(o, m);
              break e;
            case 1:
              u = l;
              var p = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (ni === null || !ni.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = _w(o, u, t);
                Wm(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Jw(n);
    } catch (x) {
      (t = x), vt === n && n !== null && (vt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xw() {
  var e = ps.current;
  return (ps.current = hs), e === null ? hs : e;
}
function fv() {
  (yt === 0 || yt === 3 || yt === 2) && (yt = 4),
    Ct === null || (!(zi & 268435455) && !(uc & 268435455)) || Vr(Ct, Mt);
}
function gs(e, t) {
  var n = Me;
  Me |= 2;
  var r = Xw();
  (Ct !== e || Mt !== t) && ((hr = null), Ai(e, t));
  do
    try {
      uP();
      break;
    } catch (i) {
      Yw(e, i);
    }
  while (1);
  if ((Wp(), (Me = n), (ps.current = r), vt !== null)) throw Error(B(261));
  return (Ct = null), (Mt = 0), yt;
}
function uP() {
  for (; vt !== null; ) Zw(vt);
}
function lP() {
  for (; vt !== null && !Fx(); ) Zw(vt);
}
function Zw(e) {
  var t = tS(e.alternate, e, sn);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jw(e) : (vt = t),
    (av.current = null);
}
function Jw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tP(n, t)), n !== null)) {
        (n.flags &= 32767), (vt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (yt = 6), (vt = null);
        return;
      }
    } else if (((n = eP(n, t, sn)), n !== null)) {
      vt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      vt = t;
      return;
    }
    vt = t = e;
  } while (t !== null);
  yt === 0 && (yt = 5);
}
function yi(e, t, n) {
  var r = ze,
    i = Tn.transition;
  try {
    (Tn.transition = null), (ze = 1), sP(e, t, n, r);
  } finally {
    (Tn.transition = i), (ze = r);
  }
  return null;
}
function sP(e, t, n, r) {
  do Co();
  while (Kr !== null);
  if (Me & 6) throw Error(B(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qx(e, o),
    e === Ct && ((vt = Ct = null), (Mt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ul ||
      ((ul = !0),
      nS(Zl, function () {
        return Co(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Tn.transition), (Tn.transition = null);
    var a = ze;
    ze = 1;
    var u = Me;
    (Me |= 4),
      (av.current = null),
      rP(e, n),
      Ww(n, e),
      MO(Bd),
      (es = !!qd),
      (Bd = qd = null),
      (e.current = n),
      iP(n),
      _x(),
      (Me = u),
      (ze = a),
      (Tn.transition = o);
  } else e.current = n;
  if (
    (ul && ((ul = !1), (Kr = e), (ms = i)),
    (o = e.pendingLanes),
    o === 0 && (ni = null),
    Lx(n.stateNode),
    Jt(e, ct()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (vs) throw ((vs = !1), (e = ch), (ch = null), e);
  return (
    ms & 1 && e.tag !== 0 && Co(),
    (o = e.pendingLanes),
    o & 1 ? (e === fh ? $a++ : (($a = 0), (fh = e))) : ($a = 0),
    hi(),
    null
  );
}
function Co() {
  if (Kr !== null) {
    var e = A1(ms),
      t = Tn.transition,
      n = ze;
    try {
      if (((Tn.transition = null), (ze = 16 > e ? 16 : e), Kr === null))
        var r = !1;
      else {
        if (((e = Kr), (Kr = null), (ms = 0), Me & 6)) throw Error(B(331));
        var i = Me;
        for (Me |= 4, Y = e.current; Y !== null; ) {
          var o = Y,
            a = o.child;
          if (Y.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (Y = s; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ma(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Y = d);
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var f = c.sibling,
                        h = c.return;
                      if ((Bw(c), c === s)) {
                        Y = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (Y = f);
                        break;
                      }
                      Y = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var b = y.sibling;
                    (y.sibling = null), (y = b);
                  } while (y !== null);
                }
              }
              Y = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (Y = a);
          else
            e: for (; Y !== null; ) {
              if (((o = Y), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ma(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (Y = m);
                break e;
              }
              Y = o.return;
            }
        }
        var p = e.current;
        for (Y = p; Y !== null; ) {
          a = Y;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (Y = g);
          else
            e: for (a = p; Y !== null; ) {
              if (((u = Y), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ac(9, u);
                  }
                } catch (x) {
                  at(u, u.return, x);
                }
              if (u === a) {
                Y = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (Y = w);
                break e;
              }
              Y = u.return;
            }
        }
        if (
          ((Me = i), hi(), nr && typeof nr.onPostCommitFiberRoot == "function")
        )
          try {
            nr.onPostCommitFiberRoot(Zs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ze = n), (Tn.transition = t);
    }
  }
  return !1;
}
function vg(e, t, n) {
  (t = Lo(n, t)),
    (t = Fw(e, t, 1)),
    (e = ti(e, t, 1)),
    (t = Bt()),
    e !== null && (Mu(e, 1, t), Jt(e, t));
}
function at(e, t, n) {
  if (e.tag === 3) vg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ni === null || !ni.has(r)))
        ) {
          (e = Lo(n, e)),
            (e = _w(t, e, 1)),
            (t = ti(t, e, 1)),
            (e = Bt()),
            t !== null && (Mu(t, 1, e), Jt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Bt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ct === e &&
      (Mt & n) === n &&
      (yt === 4 || (yt === 3 && (Mt & 130023424) === Mt && 500 > ct() - lv)
        ? Ai(e, 0)
        : (uv |= n)),
    Jt(e, t);
}
function eS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xu), (Xu <<= 1), !(Xu & 130023424) && (Xu = 4194304))
      : (t = 1));
  var n = Bt();
  (e = Pr(e, t)), e !== null && (Mu(e, t, n), Jt(e, n));
}
function fP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), eS(e, n);
}
function dP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), eS(e, n);
}
var tS;
tS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xt.current) Gt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Gt = !1), JO(e, t, n);
      Gt = !!(e.flags & 131072);
    }
  else (Gt = !1), et && t.flags & 1048576 && iw(t, us, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $l(e, t), (e = t.pendingProps);
      var i = Fo(t, Dt.current);
      bo(t, n), (i = tv(null, t, r, e, i, n));
      var o = nv();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Zt(r) ? ((o = !0), os(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Yp(t),
            (i.updater = ic),
            (t.stateNode = i),
            (i._reactInternals = t),
            Jd(t, r, e, n),
            (t = nh(null, t, r, !0, o, n)))
          : ((t.tag = 0), et && o && qp(t), qt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($l(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = pP(r)),
          (e = zn(r, e)),
          i)
        ) {
          case 0:
            t = th(null, t, r, e, n);
            break e;
          case 1:
            t = og(null, t, r, e, n);
            break e;
          case 11:
            t = rg(null, t, r, e, n);
            break e;
          case 14:
            t = ig(null, t, r, zn(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zn(r, i)),
        th(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zn(r, i)),
        og(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Dw(t), e === null)) throw Error(B(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          lw(e, t),
          cs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Lo(Error(B(423)), t)), (t = ag(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Lo(Error(B(424)), t)), (t = ag(e, t, r, n, i));
            break e;
          } else
            for (
              cn = ei(t.stateNode.containerInfo.firstChild),
                dn = t,
                et = !0,
                Hn = null,
                n = dw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((_o(), r === i)) {
            t = Rr(e, t, n);
            break e;
          }
          qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        hw(t),
        e === null && Yd(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Vd(r, i) ? (a = null) : o !== null && Vd(r, o) && (t.flags |= 32),
        Lw(e, t),
        qt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Yd(t), null;
    case 13:
      return jw(e, t, n);
    case 4:
      return (
        Xp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = No(t, null, r, n)) : qt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zn(r, i)),
        rg(e, t, r, i, n)
      );
    case 7:
      return qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          We(ls, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Wn(o.value, a)) {
            if (o.children === i.children && !Xt.current) {
              t = Rr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                a = o.child;
                for (var l = u.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = br(-1, n & -n)), (l.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (s.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Xd(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(B(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  Xd(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        qt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bo(t, n),
        (i = $n(i)),
        (r = r(i)),
        (t.flags |= 1),
        qt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = zn(r, t.pendingProps)),
        (i = zn(r.type, i)),
        ig(e, t, r, i, n)
      );
    case 15:
      return Nw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zn(r, i)),
        $l(e, t),
        (t.tag = 1),
        Zt(r) ? ((e = !0), os(t)) : (e = !1),
        bo(t, n),
        cw(t, r, i),
        Jd(t, r, i, n),
        nh(null, t, r, !0, e, n)
      );
    case 19:
      return zw(e, t, n);
    case 22:
      return Iw(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function nS(e, t) {
  return k1(e, t);
}
function hP(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Mn(e, t, n, r) {
  return new hP(e, t, n, r);
}
function dv(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pP(e) {
  if (typeof e == "function") return dv(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $p)) return 11;
    if (e === Ap) return 14;
  }
  return 2;
}
function ii(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Mn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _l(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) dv(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case no:
        return Fi(n.children, i, o, t);
      case Tp:
        (a = 8), (i |= 8);
        break;
      case Ed:
        return (
          (e = Mn(12, n, t, i | 2)), (e.elementType = Ed), (e.lanes = o), e
        );
      case xd:
        return (e = Mn(13, n, t, i)), (e.elementType = xd), (e.lanes = o), e;
      case Od:
        return (e = Mn(19, n, t, i)), (e.elementType = Od), (e.lanes = o), e;
      case f1:
        return lc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case s1:
              a = 10;
              break e;
            case c1:
              a = 9;
              break e;
            case $p:
              a = 11;
              break e;
            case Ap:
              a = 14;
              break e;
            case zr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Mn(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Fi(e, t, n, r) {
  return (e = Mn(7, e, r, t)), (e.lanes = n), e;
}
function lc(e, t, n, r) {
  return (
    (e = Mn(22, e, r, t)),
    (e.elementType = f1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nf(e, t, n) {
  return (e = Mn(6, e, null, t)), (e.lanes = n), e;
}
function If(e, t, n) {
  return (
    (t = Mn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vP(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mf(0)),
    (this.expirationTimes = mf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function hv(e, t, n, r, i, o, a, u, l) {
  return (
    (e = new vP(e, t, n, u, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Mn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yp(o),
    e
  );
}
function mP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: to,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rS(e) {
  if (!e) return ui;
  e = e._reactInternals;
  e: {
    if (Bi(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Zt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Zt(n)) return nw(e, n, t);
  }
  return t;
}
function iS(e, t, n, r, i, o, a, u, l) {
  return (
    (e = hv(n, r, !0, e, i, o, a, u, l)),
    (e.context = rS(null)),
    (n = e.current),
    (r = Bt()),
    (i = ri(n)),
    (o = br(r, i)),
    (o.callback = t ?? null),
    ti(n, o, i),
    (e.current.lanes = i),
    Mu(e, i, r),
    Jt(e, r),
    e
  );
}
function sc(e, t, n, r) {
  var i = t.current,
    o = Bt(),
    a = ri(i);
  return (
    (n = rS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = br(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ti(i, t, a)),
    e !== null && (Vn(e, i, a, o), kl(e, i, a)),
    a
  );
}
function ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pv(e, t) {
  mg(e, t), (e = e.alternate) && mg(e, t);
}
function gP() {
  return null;
}
var oS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vv(e) {
  this._internalRoot = e;
}
cc.prototype.render = vv.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  sc(e, t, null, null);
};
cc.prototype.unmount = vv.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ui(function () {
      sc(null, e, null, null);
    }),
      (t[Or] = null);
  }
};
function cc(e) {
  this._internalRoot = e;
}
cc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = N1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++);
    Br.splice(n, 0, e), n === 0 && L1(e);
  }
};
function mv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gg() {}
function yP(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = ys(a);
        o.call(s);
      };
    }
    var a = iS(t, r, e, 0, null, !1, !1, "", gg);
    return (
      (e._reactRootContainer = a),
      (e[Or] = a.current),
      Ya(e.nodeType === 8 ? e.parentNode : e),
      Ui(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = ys(l);
      u.call(s);
    };
  }
  var l = hv(e, 0, !1, null, null, !1, !1, "", gg);
  return (
    (e._reactRootContainer = l),
    (e[Or] = l.current),
    Ya(e.nodeType === 8 ? e.parentNode : e),
    Ui(function () {
      sc(t, l, n, r);
    }),
    l
  );
}
function dc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var l = ys(a);
        u.call(l);
      };
    }
    sc(t, a, e, i);
  } else a = yP(n, t, e, i, r);
  return ys(a);
}
F1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ya(t.pendingLanes);
        n !== 0 &&
          (Np(t, n | 1), Jt(t, ct()), !(Me & 6) && ((Do = ct() + 500), hi()));
      }
      break;
    case 13:
      Ui(function () {
        var r = Pr(e, 1);
        if (r !== null) {
          var i = Bt();
          Vn(r, e, 1, i);
        }
      }),
        pv(e, 1);
  }
};
Ip = function (e) {
  if (e.tag === 13) {
    var t = Pr(e, 134217728);
    if (t !== null) {
      var n = Bt();
      Vn(t, e, 134217728, n);
    }
    pv(e, 134217728);
  }
};
_1 = function (e) {
  if (e.tag === 13) {
    var t = ri(e),
      n = Pr(e, t);
    if (n !== null) {
      var r = Bt();
      Vn(n, e, t, r);
    }
    pv(e, t);
  }
};
N1 = function () {
  return ze;
};
I1 = function (e, t) {
  var n = ze;
  try {
    return (ze = e), t();
  } finally {
    ze = n;
  }
};
Nd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = nc(r);
            if (!i) throw Error(B(90));
            h1(r), kd(r, i);
          }
        }
      }
      break;
    case "textarea":
      v1(e, n);
      break;
    case "select":
      (t = n.value), t != null && go(e, !!n.multiple, t, !1);
  }
};
C1 = sv;
E1 = Ui;
var wP = { usingClientEntryPoint: !1, Events: [$u, ao, nc, S1, b1, sv] },
  sa = {
    findFiberByHostInstance: bi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  SP = {
    bundleType: sa.bundleType,
    version: sa.version,
    rendererPackageName: sa.rendererPackageName,
    rendererConfig: sa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $r.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = P1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sa.findFiberByHostInstance || gP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber)
    try {
      (Zs = ll.inject(SP)), (nr = ll);
    } catch {}
}
mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wP;
mn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mv(t)) throw Error(B(200));
  return mP(e, t, null, n);
};
mn.createRoot = function (e, t) {
  if (!mv(e)) throw Error(B(299));
  var n = !1,
    r = "",
    i = oS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = hv(e, 1, !1, null, null, n, !1, r, i)),
    (e[Or] = t.current),
    Ya(e.nodeType === 8 ? e.parentNode : e),
    new vv(t)
  );
};
mn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(B(188))
      : ((e = Object.keys(e).join(",")), Error(B(268, e)));
  return (e = P1(t)), (e = e === null ? null : e.stateNode), e;
};
mn.flushSync = function (e) {
  return Ui(e);
};
mn.hydrate = function (e, t, n) {
  if (!fc(t)) throw Error(B(200));
  return dc(null, e, t, !0, n);
};
mn.hydrateRoot = function (e, t, n) {
  if (!mv(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = oS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = iS(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Or] = t.current),
    Ya(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new cc(t);
};
mn.render = function (e, t, n) {
  if (!fc(t)) throw Error(B(200));
  return dc(null, e, t, !1, n);
};
mn.unmountComponentAtNode = function (e) {
  if (!fc(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (Ui(function () {
        dc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Or] = null);
        });
      }),
      !0)
    : !1;
};
mn.unstable_batchedUpdates = sv;
mn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!fc(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return dc(e, t, n, !1, r);
};
mn.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = mn);
})(gx);
const ou = X0(or),
  bP = Y0({ __proto__: null, default: ou }, [or]);
var yg = or;
(Sd.createRoot = yg.createRoot), (Sd.hydrateRoot = yg.hydrateRoot);
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $e.apply(this, arguments)
  );
}
var ht;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ht || (ht = {}));
const wg = "popstate";
function CP(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: a = "/",
      search: u = "",
      hash: l = "",
    } = lr(i.location.hash.substr(1));
    return au(
      "",
      { pathname: a, search: u, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(i, o) {
    let a = i.document.querySelector("base"),
      u = "";
    if (a && a.getAttribute("href")) {
      let l = i.location.href,
        s = l.indexOf("#");
      u = s === -1 ? l : l.slice(0, s);
    }
    return u + "#" + (typeof o == "string" ? o : kr(o));
  }
  function r(i, o) {
    EP(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return OP(t, n, r, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function EP(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xP() {
  return Math.random().toString(36).substr(2, 8);
}
function Sg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function au(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    $e(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? lr(t) : t,
      { state: n, key: (t && t.key) || r || xP() }
    )
  );
}
function kr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function lr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function OP(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    u = ht.Pop,
    l = null,
    s = c();
  s == null && ((s = 0), a.replaceState($e({}, a.state, { idx: s }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    u = ht.Pop;
    let b = c(),
      m = b == null ? null : b - s;
    (s = b), l && l({ action: u, location: y.location, delta: m });
  }
  function f(b, m) {
    u = ht.Push;
    let p = au(y.location, b, m);
    n && n(p, b), (s = c() + 1);
    let g = Sg(p, s),
      w = y.createHref(p);
    try {
      a.pushState(g, "", w);
    } catch {
      i.location.assign(w);
    }
    o && l && l({ action: u, location: y.location, delta: 1 });
  }
  function h(b, m) {
    u = ht.Replace;
    let p = au(y.location, b, m);
    n && n(p, b), (s = c());
    let g = Sg(p, s),
      w = y.createHref(p);
    a.replaceState(g, "", w),
      o && l && l({ action: u, location: y.location, delta: 0 });
  }
  function v(b) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof b == "string" ? b : kr(b);
    return (
      he(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(i, a);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(wg, d),
        (l = b),
        () => {
          i.removeEventListener(wg, d), (l = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: v,
    encodeLocation(b) {
      let m = v(b);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(b) {
      return a.go(b);
    },
  };
  return y;
}
var Pt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pt || (Pt = {}));
function PP(e) {
  return e.index === !0;
}
function aS(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, i) => {
      let o = [...t, i],
        a = typeof r.id == "string" ? r.id : o.join("-");
      return (
        he(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route"
        ),
        he(
          !n.has(a),
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(a),
        PP(r)
          ? $e({}, r, { id: a })
          : $e({}, r, {
              id: a,
              children: r.children ? aS(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function Sa(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? lr(t) : t,
    i = sS(r.pathname || "/", n);
  if (i == null) return null;
  let o = uS(e);
  RP(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) a = IP(o[u], jP(i));
  return a;
}
function uS(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, u) => {
    let l = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (he(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let s = Cr([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (he(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      uS(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: _P(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, a) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, a);
      else for (let l of lS(o.path)) i(o, a, l);
    }),
    t
  );
}
function lS(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = lS(r.join("/")),
    u = [];
  return (
    u.push(...a.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && u.push(...a),
    u.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function RP(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : NP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const kP = /^:\w+$/,
  MP = 3,
  TP = 2,
  $P = 1,
  AP = 10,
  FP = -2,
  bg = (e) => e === "*";
function _P(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bg) && (r += FP),
    t && (r += TP),
    n
      .filter((i) => !bg(i))
      .reduce((i, o) => i + (kP.test(o) ? MP : o === "" ? $P : AP), r)
  );
}
function NP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function IP(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let u = n[a],
      l = a === n.length - 1,
      s = i === "/" ? t : t.slice(i.length) || "/",
      c = LP(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: l },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = u.route;
    o.push({
      params: r,
      pathname: Cr([i, c.pathname]),
      pathnameBase: qP(Cr([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Cr([i, c.pathnameBase]));
  }
  return o;
}
function LP(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = DP(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    u = i.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      if (c === "*") {
        let f = u[d] || "";
        a = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = zP(u[d] || "", c)), s;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function DP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    uu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function jP(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      uu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function zP(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      uu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function sS(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function uu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function UP(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? lr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : HP(n, t)) : t,
    search: BP(r),
    hash: VP(i),
  };
}
function HP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Lf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function hc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function gv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = lr(e))
    : ((i = $e({}, e)),
      he(
        !i.pathname || !i.pathname.includes("?"),
        Lf("?", "pathname", "search", i)
      ),
      he(
        !i.pathname || !i.pathname.includes("#"),
        Lf("#", "pathname", "hash", i)
      ),
      he(!i.search || !i.search.includes("#"), Lf("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    u;
  if (r || a == null) u = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    u = d >= 0 ? t[d] : "/";
  }
  let l = UP(i, u),
    s = a && a !== "/" && a.endsWith("/"),
    c = (o || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (s || c) && (l.pathname += "/"), l;
}
const Cr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  qP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  BP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  VP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Cg extends Error {}
class QP {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      he(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let r;
    (this.abortPromise = new Promise((o, a) => (r = a))),
      (this.controller = new AbortController());
    let i = () => r(new Cg("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", i)),
      this.controller.signal.addEventListener("abort", i),
      (this.data = Object.entries(t).reduce((o, a) => {
        let [u, l] = a;
        return Object.assign(o, { [u]: this.trackPromise(u, l) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (i) => this.onSettle(r, t, null, i),
      (i) => this.onSettle(r, t, i)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, i) {
    return this.controller.signal.aborted && r instanceof Cg
      ? (this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r))
      : (this.pendingKeysSet.delete(n),
        this.done && this.unlistenAbortSignal(),
        r
          ? (Object.defineProperty(t, "_error", { get: () => r }),
            this.emit(!1, n),
            Promise.reject(r))
          : (Object.defineProperty(t, "_data", { get: () => i }),
            this.emit(!1, n),
            i));
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((i) => {
          this.subscribe((o) => {
            t.removeEventListener("abort", r), (o || this.done) && i(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      he(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, i] = n;
        return Object.assign(t, { [r]: KP(i) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function WP(e) {
  return e instanceof Promise && e._tracked === !0;
}
function KP(e) {
  if (!WP(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class yv {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function cS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const fS = ["post", "put", "patch", "delete"],
  GP = new Set(fS),
  YP = ["get", ...fS],
  XP = new Set(YP),
  ZP = new Set([301, 302, 303, 307, 308]),
  JP = new Set([307, 308]),
  Df = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  e2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Eg = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  dS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  t2 = !hS;
function n2(e) {
  he(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = aS(e.routes),
    n = null,
    r = new Set(),
    i = null,
    o = null,
    a = null,
    u = e.hydrationData != null,
    l = Sa(t, e.history.location, e.basename),
    s = null;
  if (l == null) {
    let D = Dr(404, { pathname: e.history.location.pathname }),
      { matches: j, route: U } = Mg(t);
    (l = j), (s = { [U.id]: D });
  }
  let c = !l.some((D) => D.route.loader) || e.hydrationData != null,
    d,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: c,
      navigation: Df,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || s,
      fetchers: new Map(),
      blockers: new Map(),
    },
    h = ht.Pop,
    v = !1,
    y,
    b = !1,
    m = !1,
    p = [],
    g = [],
    w = new Map(),
    x = 0,
    C = -1,
    E = new Map(),
    k = new Set(),
    M = new Map(),
    T = new Map(),
    A = new Map(),
    P = !1;
  function O() {
    return (
      (n = e.history.listen((D) => {
        let { action: j, location: U, delta: G } = D;
        if (P) {
          P = !1;
          return;
        }
        uu(
          A.size === 0 || G != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let W = Fe({
          currentLocation: f.location,
          nextLocation: U,
          historyAction: j,
        });
        if (W && G != null) {
          (P = !0),
            e.history.go(G * -1),
            fe(W, {
              state: "blocked",
              location: U,
              proceed() {
                fe(W, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: U,
                }),
                  e.history.go(G);
              },
              reset() {
                se(W), F({ blockers: new Map(d.state.blockers) });
              },
            });
          return;
        }
        return L(j, U);
      })),
      f.initialized || L(ht.Pop, f.location),
      d
    );
  }
  function R() {
    n && n(),
      r.clear(),
      y && y.abort(),
      f.fetchers.forEach((D, j) => xe(j)),
      f.blockers.forEach((D, j) => se(j));
  }
  function $(D) {
    return r.add(D), () => r.delete(D);
  }
  function F(D) {
    (f = $e({}, f, D)), r.forEach((j) => j(f));
  }
  function N(D, j) {
    var U, G;
    let W =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        pr(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((U = D.state) == null ? void 0 : U._isRedirect) !== !0,
      ue;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (ue = j.actionData)
        : (ue = null)
      : W
      ? (ue = f.actionData)
      : (ue = null);
    let ee = j.loaderData
      ? kg(f.loaderData, j.loaderData, j.matches || [], j.errors)
      : f.loaderData;
    for (let [Z] of A) se(Z);
    let J =
      v === !0 ||
      (f.navigation.formMethod != null &&
        pr(f.navigation.formMethod) &&
        ((G = D.state) == null ? void 0 : G._isRedirect) !== !0);
    F(
      $e({}, j, {
        actionData: ue,
        loaderData: ee,
        historyAction: h,
        location: D,
        initialized: !0,
        navigation: Df,
        revalidation: "idle",
        restoreScrollPosition: nn(D, j.matches || f.matches),
        preventScrollReset: J,
        blockers: new Map(f.blockers),
      })
    ),
      b ||
        h === ht.Pop ||
        (h === ht.Push
          ? e.history.push(D, D.state)
          : h === ht.Replace && e.history.replace(D, D.state)),
      (h = ht.Pop),
      (v = !1),
      (b = !1),
      (m = !1),
      (p = []),
      (g = []);
  }
  async function _(D, j) {
    if (typeof D == "number") {
      e.history.go(D);
      return;
    }
    let { path: U, submission: G, error: W } = xg(D, j),
      ue = f.location,
      ee = au(f.location, U, j && j.state);
    ee = $e({}, ee, e.history.encodeLocation(ee));
    let J = j && j.replace != null ? j.replace : void 0,
      Z = ht.Push;
    J === !0
      ? (Z = ht.Replace)
      : J === !1 ||
        (G != null &&
          pr(G.formMethod) &&
          G.formAction === f.location.pathname + f.location.search &&
          (Z = ht.Replace));
    let Te =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      le = Fe({ currentLocation: ue, nextLocation: ee, historyAction: Z });
    if (le) {
      fe(le, {
        state: "blocked",
        location: ee,
        proceed() {
          fe(le, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ee,
          }),
            _(D, j);
        },
        reset() {
          se(le), F({ blockers: new Map(f.blockers) });
        },
      });
      return;
    }
    return await L(Z, ee, {
      submission: G,
      pendingError: W,
      preventScrollReset: Te,
      replace: j && j.replace,
    });
  }
  function I() {
    if (
      (Ee(),
      F({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        L(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      L(h || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function L(D, j, U) {
    y && y.abort(),
      (y = null),
      (h = D),
      (b = (U && U.startUninterruptedRevalidation) === !0),
      ge(f.location, f.matches),
      (v = (U && U.preventScrollReset) === !0);
    let G = U && U.overrideNavigation,
      W = Sa(t, j, e.basename);
    if (!W) {
      let Re = Dr(404, { pathname: j.pathname }),
        { matches: dt, route: jt } = Mg(t);
      Ve(), N(j, { matches: dt, loaderData: {}, errors: { [jt.id]: Re } });
      return;
    }
    if (
      u2(f.location, j) &&
      !(U && U.submission && pr(U.submission.formMethod))
    ) {
      N(j, { matches: W });
      return;
    }
    y = new AbortController();
    let ue = fa(e.history, j, y.signal, U && U.submission),
      ee,
      J;
    if (U && U.pendingError) J = { [po(W).route.id]: U.pendingError };
    else if (U && U.submission && pr(U.submission.formMethod)) {
      let Re = await H(ue, j, U.submission, W, { replace: U.replace });
      if (Re.shortCircuited) return;
      (ee = Re.pendingActionData),
        (J = Re.pendingActionError),
        (G = $e({ state: "loading", location: j }, U.submission)),
        (ue = new Request(ue.url, { signal: ue.signal }));
    }
    let {
      shortCircuited: Z,
      loaderData: Te,
      errors: le,
    } = await q(ue, j, W, G, U && U.submission, U && U.replace, ee, J);
    Z ||
      ((y = null),
      N(
        j,
        $e({ matches: W }, ee ? { actionData: ee } : {}, {
          loaderData: Te,
          errors: le,
        })
      ));
  }
  async function H(D, j, U, G, W) {
    Ee();
    let ue = $e({ state: "submitting", location: j }, U);
    F({ navigation: ue });
    let ee,
      J = Fg(G, j);
    if (!J.route.action)
      ee = {
        type: Pt.error,
        error: Dr(405, {
          method: D.method,
          pathname: j.pathname,
          routeId: J.route.id,
        }),
      };
    else if (((ee = await ca("action", D, J, G, d.basename)), D.signal.aborted))
      return { shortCircuited: !0 };
    if (Eo(ee)) {
      let Z;
      return (
        W && W.replace != null
          ? (Z = W.replace)
          : (Z = ee.location === f.location.pathname + f.location.search),
        await oe(f, ee, { submission: U, replace: Z }),
        { shortCircuited: !0 }
      );
    }
    if (Aa(ee)) {
      let Z = po(G, J.route.id);
      return (
        (W && W.replace) !== !0 && (h = ht.Push),
        {
          pendingActionData: {},
          pendingActionError: { [Z.route.id]: ee.error },
        }
      );
    }
    if (xi(ee)) throw Dr(400, { type: "defer-action" });
    return { pendingActionData: { [J.route.id]: ee.data } };
  }
  async function q(D, j, U, G, W, ue, ee, J) {
    let Z = G;
    Z ||
      (Z = $e(
        {
          state: "loading",
          location: j,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        W
      ));
    let Te =
        W ||
        (Z.formMethod && Z.formAction && Z.formData && Z.formEncType
          ? {
              formMethod: Z.formMethod,
              formAction: Z.formAction,
              formData: Z.formData,
              formEncType: Z.formEncType,
            }
          : void 0),
      [le, Re] = Og(e.history, f, U, Te, j, m, p, g, ee, J, M);
    if (
      (Ve(
        (ye) =>
          !(U && U.some((Ie) => Ie.route.id === ye)) ||
          (le && le.some((Ie) => Ie.route.id === ye))
      ),
      le.length === 0 && Re.length === 0)
    )
      return (
        N(
          j,
          $e(
            { matches: U, loaderData: {}, errors: J || null },
            ee ? { actionData: ee } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    if (!b) {
      Re.forEach((Ie) => {
        let ke = f.fetchers.get(Ie.key),
          Le = {
            state: "loading",
            data: ke && ke.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(Ie.key, Le);
      });
      let ye = ee || f.actionData;
      F(
        $e(
          { navigation: Z },
          ye
            ? Object.keys(ye).length === 0
              ? { actionData: null }
              : { actionData: ye }
            : {},
          Re.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    (C = ++x), Re.forEach((ye) => w.set(ye.key, y));
    let {
      results: dt,
      loaderResults: jt,
      fetcherResults: In,
    } = await Ae(f.matches, U, le, Re, D);
    if (D.signal.aborted) return { shortCircuited: !0 };
    Re.forEach((ye) => w.delete(ye.key));
    let Gn = Tg(dt);
    if (Gn) return await oe(f, Gn, { replace: ue }), { shortCircuited: !0 };
    let { loaderData: wn, errors: Yn } = Rg(f, U, le, jt, J, Re, In, T);
    T.forEach((ye, Ie) => {
      ye.subscribe((ke) => {
        (ke || ye.done) && T.delete(Ie);
      });
    }),
      te();
    let Ne = Oe(C);
    return $e(
      { loaderData: wn, errors: Yn },
      Ne || Re.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function V(D) {
    return f.fetchers.get(D) || e2;
  }
  function X(D, j, U, G) {
    if (t2)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    w.has(D) && z(D);
    let W = Sa(t, U, e.basename);
    if (!W) {
      ae(D, j, Dr(404, { pathname: U }));
      return;
    }
    let { path: ue, submission: ee } = xg(U, G, !0),
      J = Fg(W, ue);
    if (((v = (G && G.preventScrollReset) === !0), ee && pr(ee.formMethod))) {
      re(D, j, ue, J, W, ee);
      return;
    }
    M.set(D, { routeId: j, path: ue, match: J, matches: W }),
      ie(D, j, ue, J, W, ee);
  }
  async function re(D, j, U, G, W, ue) {
    if ((Ee(), M.delete(D), !G.route.action)) {
      let Qe = Dr(405, { method: ue.formMethod, pathname: U, routeId: j });
      ae(D, j, Qe);
      return;
    }
    let ee = f.fetchers.get(D),
      J = $e({ state: "submitting" }, ue, {
        data: ee && ee.data,
        " _hasFetcherDoneAnything ": !0,
      });
    f.fetchers.set(D, J), F({ fetchers: new Map(f.fetchers) });
    let Z = new AbortController(),
      Te = fa(e.history, U, Z.signal, ue);
    w.set(D, Z);
    let le = await ca("action", Te, G, W, d.basename);
    if (Te.signal.aborted) {
      w.get(D) === Z && w.delete(D);
      return;
    }
    if (Eo(le)) {
      w.delete(D), k.add(D);
      let Qe = $e({ state: "loading" }, ue, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        f.fetchers.set(D, Qe),
        F({ fetchers: new Map(f.fetchers) }),
        oe(f, le, { isFetchActionRedirect: !0 })
      );
    }
    if (Aa(le)) {
      ae(D, j, le.error);
      return;
    }
    if (xi(le)) throw Dr(400, { type: "defer-action" });
    let Re = f.navigation.location || f.location,
      dt = fa(e.history, Re, Z.signal),
      jt =
        f.navigation.state !== "idle"
          ? Sa(t, f.navigation.location, e.basename)
          : f.matches;
    he(jt, "Didn't find any matches after fetcher action");
    let In = ++x;
    E.set(D, In);
    let Gn = $e({ state: "loading", data: le.data }, ue, {
      " _hasFetcherDoneAnything ": !0,
    });
    f.fetchers.set(D, Gn);
    let [wn, Yn] = Og(
      e.history,
      f,
      jt,
      ue,
      Re,
      m,
      p,
      g,
      { [G.route.id]: le.data },
      void 0,
      M
    );
    Yn.filter((Qe) => Qe.key !== D).forEach((Qe) => {
      let ut = Qe.key,
        zt = f.fetchers.get(ut),
        Xe = {
          state: "loading",
          data: zt && zt.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      f.fetchers.set(ut, Xe), w.set(ut, Z);
    }),
      F({ fetchers: new Map(f.fetchers) });
    let {
      results: Ne,
      loaderResults: ye,
      fetcherResults: Ie,
    } = await Ae(f.matches, jt, wn, Yn, dt);
    if (Z.signal.aborted) return;
    E.delete(D), w.delete(D), Yn.forEach((Qe) => w.delete(Qe.key));
    let ke = Tg(Ne);
    if (ke) return oe(f, ke);
    let { loaderData: Le, errors: pe } = Rg(
        f,
        f.matches,
        wn,
        ye,
        void 0,
        Yn,
        Ie,
        T
      ),
      Be = {
        state: "idle",
        data: le.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    f.fetchers.set(D, Be);
    let De = Oe(In);
    f.navigation.state === "loading" && In > C
      ? (he(h, "Expected pending action"),
        y && y.abort(),
        N(f.navigation.location, {
          matches: jt,
          loaderData: Le,
          errors: pe,
          fetchers: new Map(f.fetchers),
        }))
      : (F(
          $e(
            { errors: pe, loaderData: kg(f.loaderData, Le, jt, pe) },
            De ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        (m = !1));
  }
  async function ie(D, j, U, G, W, ue) {
    let ee = f.fetchers.get(D),
      J = $e(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        ue,
        { data: ee && ee.data, " _hasFetcherDoneAnything ": !0 }
      );
    f.fetchers.set(D, J), F({ fetchers: new Map(f.fetchers) });
    let Z = new AbortController(),
      Te = fa(e.history, U, Z.signal);
    w.set(D, Z);
    let le = await ca("loader", Te, G, W, d.basename);
    if (
      (xi(le) && (le = (await gS(le, Te.signal, !0)) || le),
      w.get(D) === Z && w.delete(D),
      Te.signal.aborted)
    )
      return;
    if (Eo(le)) {
      await oe(f, le);
      return;
    }
    if (Aa(le)) {
      let dt = po(f.matches, j);
      f.fetchers.delete(D),
        F({
          fetchers: new Map(f.fetchers),
          errors: { [dt.route.id]: le.error },
        });
      return;
    }
    he(!xi(le), "Unhandled fetcher deferred data");
    let Re = {
      state: "idle",
      data: le.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    f.fetchers.set(D, Re), F({ fetchers: new Map(f.fetchers) });
  }
  async function oe(D, j, U) {
    var G;
    let {
      submission: W,
      replace: ue,
      isFetchActionRedirect: ee,
    } = U === void 0 ? {} : U;
    j.revalidate && (m = !0);
    let J = au(
      D.location,
      j.location,
      $e({ _isRedirect: !0 }, ee ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (he(J, "Expected a location on the redirect navigation"),
      dS.test(j.location) &&
        hS &&
        typeof ((G = window) == null ? void 0 : G.location) < "u")
    ) {
      let jt = e.history.createURL(j.location).origin;
      if (window.location.origin !== jt) {
        ue
          ? window.location.replace(j.location)
          : window.location.assign(j.location);
        return;
      }
    }
    y = null;
    let Z = ue === !0 ? ht.Replace : ht.Push,
      {
        formMethod: Te,
        formAction: le,
        formEncType: Re,
        formData: dt,
      } = D.navigation;
    !W &&
      Te &&
      le &&
      dt &&
      Re &&
      (W = { formMethod: Te, formAction: le, formEncType: Re, formData: dt }),
      JP.has(j.status) && W && pr(W.formMethod)
        ? await L(Z, J, {
            submission: $e({}, W, { formAction: j.location }),
            preventScrollReset: v,
          })
        : await L(Z, J, {
            overrideNavigation: {
              state: "loading",
              location: J,
              formMethod: W ? W.formMethod : void 0,
              formAction: W ? W.formAction : void 0,
              formEncType: W ? W.formEncType : void 0,
              formData: W ? W.formData : void 0,
            },
            preventScrollReset: v,
          });
  }
  async function Ae(D, j, U, G, W) {
    let ue = await Promise.all([
        ...U.map((Z) => ca("loader", W, Z, j, d.basename)),
        ...G.map((Z) =>
          ca(
            "loader",
            fa(e.history, Z.path, W.signal),
            Z.match,
            Z.matches,
            d.basename
          )
        ),
      ]),
      ee = ue.slice(0, U.length),
      J = ue.slice(U.length);
    return (
      await Promise.all([
        $g(D, U, ee, W.signal, !1, f.loaderData),
        $g(
          D,
          G.map((Z) => Z.match),
          J,
          W.signal,
          !0
        ),
      ]),
      { results: ue, loaderResults: ee, fetcherResults: J }
    );
  }
  function Ee() {
    (m = !0),
      p.push(...Ve()),
      M.forEach((D, j) => {
        w.has(j) && (g.push(j), z(j));
      });
  }
  function ae(D, j, U) {
    let G = po(f.matches, j);
    xe(D), F({ errors: { [G.route.id]: U }, fetchers: new Map(f.fetchers) });
  }
  function xe(D) {
    w.has(D) && z(D),
      M.delete(D),
      E.delete(D),
      k.delete(D),
      f.fetchers.delete(D);
  }
  function z(D) {
    let j = w.get(D);
    he(j, "Expected fetch controller: " + D), j.abort(), w.delete(D);
  }
  function Q(D) {
    for (let j of D) {
      let G = {
        state: "idle",
        data: V(j).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      f.fetchers.set(j, G);
    }
  }
  function te() {
    let D = [];
    for (let j of k) {
      let U = f.fetchers.get(j);
      he(U, "Expected fetcher: " + j),
        U.state === "loading" && (k.delete(j), D.push(j));
    }
    Q(D);
  }
  function Oe(D) {
    let j = [];
    for (let [U, G] of E)
      if (G < D) {
        let W = f.fetchers.get(U);
        he(W, "Expected fetcher: " + U),
          W.state === "loading" && (z(U), E.delete(U), j.push(U));
      }
    return Q(j), j.length > 0;
  }
  function me(D, j) {
    let U = f.blockers.get(D) || Eg;
    return A.get(D) !== j && A.set(D, j), U;
  }
  function se(D) {
    f.blockers.delete(D), A.delete(D);
  }
  function fe(D, j) {
    let U = f.blockers.get(D) || Eg;
    he(
      (U.state === "unblocked" && j.state === "blocked") ||
        (U.state === "blocked" && j.state === "blocked") ||
        (U.state === "blocked" && j.state === "proceeding") ||
        (U.state === "blocked" && j.state === "unblocked") ||
        (U.state === "proceeding" && j.state === "unblocked"),
      "Invalid blocker state transition: " + U.state + " -> " + j.state
    ),
      f.blockers.set(D, j),
      F({ blockers: new Map(f.blockers) });
  }
  function Fe(D) {
    let { currentLocation: j, nextLocation: U, historyAction: G } = D;
    if (A.size === 0) return;
    A.size > 1 && uu(!1, "A router only supports one blocker at a time");
    let W = Array.from(A.entries()),
      [ue, ee] = W[W.length - 1],
      J = f.blockers.get(ue);
    if (
      !(J && J.state === "proceeding") &&
      ee({ currentLocation: j, nextLocation: U, historyAction: G })
    )
      return ue;
  }
  function Ve(D) {
    let j = [];
    return (
      T.forEach((U, G) => {
        (!D || D(G)) && (U.cancel(), j.push(G), T.delete(G));
      }),
      j
    );
  }
  function Pe(D, j, U) {
    if (
      ((i = D), (a = j), (o = U || ((G) => G.key)), !u && f.navigation === Df)
    ) {
      u = !0;
      let G = nn(f.location, f.matches);
      G != null && F({ restoreScrollPosition: G });
    }
    return () => {
      (i = null), (a = null), (o = null);
    };
  }
  function ge(D, j) {
    if (i && o && a) {
      let U = j.map((W) => Ag(W, f.loaderData)),
        G = o(D, U) || D.key;
      i[G] = a();
    }
  }
  function nn(D, j) {
    if (i && o && a) {
      let U = j.map((ue) => Ag(ue, f.loaderData)),
        G = o(D, U) || D.key,
        W = i[G];
      if (typeof W == "number") return W;
    }
    return null;
  }
  return (
    (d = {
      get basename() {
        return e.basename;
      },
      get state() {
        return f;
      },
      get routes() {
        return t;
      },
      initialize: O,
      subscribe: $,
      enableScrollRestoration: Pe,
      navigate: _,
      fetch: X,
      revalidate: I,
      createHref: (D) => e.history.createHref(D),
      encodeLocation: (D) => e.history.encodeLocation(D),
      getFetcher: V,
      deleteFetcher: xe,
      dispose: R,
      getBlocker: me,
      deleteBlocker: se,
      _internalFetchControllers: w,
      _internalActiveDeferreds: T,
    }),
    d
  );
}
function r2(e) {
  return e != null && "formData" in e;
}
function xg(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : kr(e);
  if (!t || !r2(t)) return { path: r };
  if (t.formMethod && !s2(t.formMethod))
    return { path: r, error: Dr(405, { method: t.formMethod }) };
  let i;
  if (
    t.formData &&
    ((i = {
      formMethod: t.formMethod || "get",
      formAction: mS(r),
      formEncType: (t && t.formEncType) || "application/x-www-form-urlencoded",
      formData: t.formData,
    }),
    pr(i.formMethod))
  )
    return { path: r, submission: i };
  let o = lr(r),
    a = vS(t.formData);
  return (
    n && o.search && yS(o.search) && a.append("index", ""),
    (o.search = "?" + a),
    { path: kr(o), submission: i }
  );
}
function i2(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Og(e, t, n, r, i, o, a, u, l, s, c) {
  let d = s ? Object.values(s)[0] : l ? Object.values(l)[0] : void 0,
    f = e.createURL(t.location),
    h = e.createURL(i),
    v = o || f.toString() === h.toString() || f.search !== h.search,
    y = s ? Object.keys(s)[0] : void 0,
    m = i2(n, y).filter((g, w) => {
      if (g.route.loader == null) return !1;
      if (o2(t.loaderData, t.matches[w], g) || a.some((E) => E === g.route.id))
        return !0;
      let x = t.matches[w],
        C = g;
      return Pg(
        g,
        $e(
          {
            currentUrl: f,
            currentParams: x.params,
            nextUrl: h,
            nextParams: C.params,
          },
          r,
          { actionResult: d, defaultShouldRevalidate: v || pS(x, C) }
        )
      );
    }),
    p = [];
  return (
    c &&
      c.forEach((g, w) => {
        if (n.some((x) => x.route.id === g.routeId))
          u.includes(w)
            ? p.push($e({ key: w }, g))
            : Pg(
                g.match,
                $e(
                  {
                    currentUrl: f,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: d, defaultShouldRevalidate: v }
                )
              ) && p.push($e({ key: w }, g));
        else return;
      }),
    [m, p]
  );
}
function o2(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function pS(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Pg(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function ca(e, t, n, r, i, o, a, u) {
  i === void 0 && (i = "/"), o === void 0 && (o = !1), a === void 0 && (a = !1);
  let l,
    s,
    c,
    d = new Promise((h, v) => (c = v)),
    f = () => c();
  t.signal.addEventListener("abort", f);
  try {
    let h = n.route[e];
    he(
      h,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
    ),
      (s = await Promise.race([
        h({ request: t, params: n.params, context: u }),
        d,
      ])),
      he(
        s !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            n.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`."
      );
  } catch (h) {
    (l = Pt.error), (s = h);
  } finally {
    t.signal.removeEventListener("abort", f);
  }
  if (l2(s)) {
    let h = s.status;
    if (ZP.has(h)) {
      let b = s.headers.get("Location");
      if (
        (he(
          b,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        dS.test(b))
      ) {
        if (!o) {
          let m = new URL(t.url),
            p = b.startsWith("//") ? new URL(m.protocol + b) : new URL(b);
          p.origin === m.origin && (b = p.pathname + p.search + p.hash);
        }
      } else {
        let m = r.slice(0, r.indexOf(n) + 1),
          p = hc(m).map((w) => w.pathnameBase),
          g = gv(b, p, new URL(t.url).pathname);
        if ((he(kr(g), "Unable to resolve redirect location: " + b), i)) {
          let w = g.pathname;
          g.pathname = w === "/" ? i : Cr([i, w]);
        }
        b = kr(g);
      }
      if (o) throw (s.headers.set("Location", b), s);
      return {
        type: Pt.redirect,
        status: h,
        location: b,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (a) throw { type: l || Pt.data, response: s };
    let v,
      y = s.headers.get("Content-Type");
    return (
      y && /\bapplication\/json\b/.test(y)
        ? (v = await s.json())
        : (v = await s.text()),
      l === Pt.error
        ? { type: l, error: new yv(h, s.statusText, v), headers: s.headers }
        : { type: Pt.data, data: v, statusCode: s.status, headers: s.headers }
    );
  }
  return l === Pt.error
    ? { type: l, error: s }
    : s instanceof QP
    ? { type: Pt.deferred, deferredData: s }
    : { type: Pt.data, data: s };
}
function fa(e, t, n, r) {
  let i = e.createURL(mS(t)).toString(),
    o = { signal: n };
  if (r && pr(r.formMethod)) {
    let { formMethod: a, formEncType: u, formData: l } = r;
    (o.method = a.toUpperCase()),
      (o.body = u === "application/x-www-form-urlencoded" ? vS(l) : l);
  }
  return new Request(i, o);
}
function vS(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function a2(e, t, n, r, i) {
  let o = {},
    a = null,
    u,
    l = !1,
    s = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (he(!Eo(c), "Cannot handle redirect results in processLoaderData"),
        Aa(c))
      ) {
        let h = po(e, f),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[h.route.id] == null && (a[h.route.id] = v),
          (o[f] = void 0),
          l || ((l = !0), (u = cS(c.error) ? c.error.status : 500)),
          c.headers && (s[f] = c.headers);
      } else
        xi(c)
          ? (i.set(f, c.deferredData), (o[f] = c.deferredData.data))
          : (o[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (u = c.statusCode),
          c.headers && (s[f] = c.headers);
    }),
    r && ((a = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: s }
  );
}
function Rg(e, t, n, r, i, o, a, u) {
  let { loaderData: l, errors: s } = a2(t, n, r, i, u);
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: f } = o[c];
    he(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let h = a[c];
    if (Aa(h)) {
      let v = po(e.matches, f.route.id);
      (s && s[v.route.id]) || (s = $e({}, s, { [v.route.id]: h.error })),
        e.fetchers.delete(d);
    } else if (Eo(h)) he(!1, "Unhandled fetcher revalidation redirect");
    else if (xi(h)) he(!1, "Unhandled fetcher deferred data");
    else {
      let v = {
        state: "idle",
        data: h.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      e.fetchers.set(d, v);
    }
  }
  return { loaderData: l, errors: s };
}
function kg(e, t, n, r) {
  let i = $e({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function po(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Mg(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Dr(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (u =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (u = "defer() is not supported in actions"))
      : e === 403
      ? ((a = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (u =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (u = 'Invalid request method "' + i.toUpperCase() + '"')),
    new yv(e || 500, a, new Error(u), !0)
  );
}
function Tg(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Eo(n)) return n;
  }
}
function mS(e) {
  let t = typeof e == "string" ? lr(e) : e;
  return kr($e({}, t, { hash: "" }));
}
function u2(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function xi(e) {
  return e.type === Pt.deferred;
}
function Aa(e) {
  return e.type === Pt.error;
}
function Eo(e) {
  return (e && e.type) === Pt.redirect;
}
function l2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function s2(e) {
  return XP.has(e);
}
function pr(e) {
  return GP.has(e);
}
async function $g(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let u = n[a],
      l = t[a],
      s = e.find((d) => d.route.id === l.route.id),
      c = s != null && !pS(s, l) && (o && o[l.route.id]) !== void 0;
    xi(u) &&
      (i || c) &&
      (await gS(u, r, i).then((d) => {
        d && (n[a] = d || n[a]);
      }));
  }
}
async function gS(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Pt.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Pt.error, error: i };
      }
    return { type: Pt.data, data: e.deferredData.data };
  }
}
function yS(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ag(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Fg(e, t) {
  let n = typeof t == "string" ? lr(t).search : t.search;
  if (e[e.length - 1].route.index && yS(n || "")) return e[e.length - 1];
  let r = hc(e);
  return r[r.length - 1];
}
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ws() {
  return (
    (ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ws.apply(this, arguments)
  );
}
function c2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const f2 = typeof Object.is == "function" ? Object.is : c2,
  { useState: d2, useEffect: h2, useLayoutEffect: p2, useDebugValue: v2 } = Kl;
function m2(e, t, n) {
  const r = t(),
    [{ inst: i }, o] = d2({ inst: { value: r, getSnapshot: t } });
  return (
    p2(() => {
      (i.value = r), (i.getSnapshot = t), jf(i) && o({ inst: i });
    }, [e, r, t]),
    h2(
      () => (
        jf(i) && o({ inst: i }),
        e(() => {
          jf(i) && o({ inst: i });
        })
      ),
      [e]
    ),
    v2(r),
    r
  );
}
function jf(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !f2(n, r);
  } catch {
    return !0;
  }
}
function g2(e, t, n) {
  return t();
}
const y2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  w2 = !y2,
  S2 = w2 ? g2 : m2,
  b2 = "useSyncExternalStore" in Kl ? ((e) => e.useSyncExternalStore)(Kl) : S2,
  wv = S.createContext(null),
  Fu = S.createContext(null),
  _u = S.createContext(null),
  pc = S.createContext(null),
  Vi = S.createContext({ outlet: null, matches: [] }),
  wS = S.createContext(null);
function C2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Xo() || he(!1);
  let { basename: r, navigator: i } = S.useContext(_u),
    { hash: o, pathname: a, search: u } = Sv(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : Cr([r, a])),
    i.createHref({ pathname: l, search: u, hash: o })
  );
}
function Xo() {
  return S.useContext(pc) != null;
}
function Nu() {
  return Xo() || he(!1), S.useContext(pc).location;
}
function SS() {
  Xo() || he(!1);
  let { basename: e, navigator: t } = S.useContext(_u),
    { matches: n } = S.useContext(Vi),
    { pathname: r } = Nu(),
    i = JSON.stringify(hc(n).map((u) => u.pathnameBase)),
    o = S.useRef(!1);
  return (
    S.useEffect(() => {
      o.current = !0;
    }),
    S.useCallback(
      function (u, l) {
        if ((l === void 0 && (l = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let s = gv(u, JSON.parse(i), r, l.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : Cr([e, s.pathname])),
          (l.replace ? t.replace : t.push)(s, l.state, l);
      },
      [e, t, i, r]
    )
  );
}
const E2 = S.createContext(null);
function x2(e) {
  let t = S.useContext(Vi).outlet;
  return t && S.createElement(E2.Provider, { value: e }, t);
}
function Sv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(Vi),
    { pathname: i } = Nu(),
    o = JSON.stringify(hc(r).map((a) => a.pathnameBase));
  return S.useMemo(() => gv(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function O2(e, t) {
  Xo() || he(!1);
  let { navigator: n } = S.useContext(_u),
    r = S.useContext(Fu),
    { matches: i } = S.useContext(Vi),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let l = Nu(),
    s;
  if (t) {
    var c;
    let y = typeof t == "string" ? lr(t) : t;
    u === "/" || ((c = y.pathname) != null && c.startsWith(u)) || he(!1),
      (s = y);
  } else s = l;
  let d = s.pathname || "/",
    f = u === "/" ? d : d.slice(u.length) || "/",
    h = Sa(e, { pathname: f }),
    v = M2(
      h &&
        h.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, a, y.params),
            pathname: Cr([
              u,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : Cr([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      r || void 0
    );
  return t && v
    ? S.createElement(
        pc.Provider,
        {
          value: {
            location: ws(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ht.Pop,
          },
        },
        v
      )
    : v;
}
function P2() {
  let e = F2(),
    t = cS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    o
  );
}
class R2 extends S.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          Vi.Provider,
          { value: this.props.routeContext },
          S.createElement(wS.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function k2(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(wv);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Vi.Provider, { value: t }, r)
  );
}
function M2(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let o = r.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    o >= 0 || he(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, a, u) => {
    let l = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      s = n ? a.route.errorElement || S.createElement(P2, null) : null,
      c = t.concat(r.slice(0, u + 1)),
      d = () =>
        S.createElement(
          k2,
          { match: a, routeContext: { outlet: o, matches: c } },
          l ? s : a.route.element !== void 0 ? a.route.element : o
        );
    return n && (a.route.errorElement || u === 0)
      ? S.createElement(R2, {
          location: n.location,
          component: s,
          error: l,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d();
  }, null);
}
var _g;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(_g || (_g = {}));
var lu;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(lu || (lu = {}));
function bS(e) {
  let t = S.useContext(Fu);
  return t || he(!1), t;
}
function T2(e) {
  let t = S.useContext(Vi);
  return t || he(!1), t;
}
function $2(e) {
  let t = T2(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function A2() {
  let { matches: e, loaderData: t } = bS(lu.UseMatches);
  return S.useMemo(
    () =>
      e.map((n) => {
        let { pathname: r, params: i } = n;
        return {
          id: n.route.id,
          pathname: r,
          params: i,
          data: t[n.route.id],
          handle: n.route.handle,
        };
      }),
    [e, t]
  );
}
function F2() {
  var e;
  let t = S.useContext(wS),
    n = bS(lu.UseRouteError),
    r = $2(lu.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function _2(e) {
  let { fallbackElement: t, router: n } = e,
    r = b2(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    i = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (a) => n.navigate(a),
        push: (a, u, l) =>
          n.navigate(a, {
            state: u,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
        replace: (a, u, l) =>
          n.navigate(a, {
            replace: !0,
            state: u,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
      }),
      [n]
    ),
    o = n.basename || "/";
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      wv.Provider,
      { value: { router: n, navigator: i, static: !1, basename: o } },
      S.createElement(
        Fu.Provider,
        { value: r },
        S.createElement(
          I2,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: i,
          },
          n.state.initialized ? S.createElement(L2, null) : t
        )
      )
    ),
    null
  );
}
function ph(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Xo() || he(!1);
  let o = S.useContext(Fu),
    a = SS();
  return (
    S.useEffect(() => {
      (o && o.navigation.state !== "idle") ||
        a(t, { replace: n, state: r, relative: i });
    }),
    null
  );
}
function N2(e) {
  he(!1);
}
function I2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = ht.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  Xo() && he(!1);
  let u = t.replace(/^\/*/, "/"),
    l = S.useMemo(() => ({ basename: u, navigator: o, static: a }), [u, o, a]);
  typeof r == "string" && (r = lr(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: h = "default",
    } = r,
    v = S.useMemo(() => {
      let y = sS(s, u);
      return y == null
        ? null
        : { pathname: y, search: c, hash: d, state: f, key: h };
    }, [u, s, c, d, f, h]);
  return v == null
    ? null
    : S.createElement(
        _u.Provider,
        { value: l },
        S.createElement(pc.Provider, {
          children: n,
          value: { location: v, navigationType: i },
        })
      );
}
function L2(e) {
  let { children: t, location: n } = e,
    r = S.useContext(wv),
    i = r && !t ? r.router.routes : vh(t);
  return O2(i, n);
}
var Ng;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ng || (Ng = {}));
new Promise(() => {});
function vh(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      if (r.type === S.Fragment) {
        n.push.apply(n, vh(r.props.children, t));
        return;
      }
      r.type !== N2 && he(!1), !r.props.index || !r.props.children || he(!1);
      let o = [...t, i],
        a = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = vh(r.props.children, o)), n.push(a);
    }),
    n
  );
}
function CS(e) {
  return e.map((t) => {
    let n = ws({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = CS(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    su.apply(this, arguments)
  );
}
function ES(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function D2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function j2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !D2(e);
}
const z2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  U2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function H2(e, t) {
  return n2({
    basename: t == null ? void 0 : t.basename,
    history: CP({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || q2(),
    routes: CS(e),
  }).initialize();
}
function q2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = su({}, t, { errors: B2(t.errors) })), t;
}
function B2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new yv(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      let o = new Error(i.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = i;
  return n;
}
const V2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Q2 = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: u,
        target: l,
        to: s,
        preventScrollReset: c,
      } = t,
      d = ES(t, z2),
      f,
      h = !1;
    if (V2 && typeof s == "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(s)) {
      f = s;
      let m = new URL(window.location.href),
        p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s);
      p.origin === m.origin ? (s = p.pathname + p.search + p.hash) : (h = !0);
    }
    let v = C2(s, { relative: i }),
      y = W2(s, {
        replace: a,
        state: u,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function b(m) {
      r && r(m), m.defaultPrevented || y(m);
    }
    return S.createElement(
      "a",
      su({}, d, { href: f || v, onClick: h || o ? r : b, ref: n, target: l })
    );
  }),
  fI = S.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: a = !1,
        style: u,
        to: l,
        children: s,
      } = t,
      c = ES(t, U2),
      d = Sv(l, { relative: c.relative }),
      f = Nu(),
      h = S.useContext(Fu),
      { navigator: v } = S.useContext(_u),
      y = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
      b = f.pathname,
      m =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    i ||
      ((b = b.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (y = y.toLowerCase()));
    let p = b === y || (!a && b.startsWith(y) && b.charAt(y.length) === "/"),
      g =
        m != null &&
        (m === y || (!a && m.startsWith(y) && m.charAt(y.length) === "/")),
      w = p ? r : void 0,
      x;
    typeof o == "function"
      ? (x = o({ isActive: p, isPending: g }))
      : (x = [o, p ? "active" : null, g ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let C = typeof u == "function" ? u({ isActive: p, isPending: g }) : u;
    return S.createElement(
      Q2,
      su({}, c, { "aria-current": w, className: x, ref: n, style: C, to: l }),
      typeof s == "function" ? s({ isActive: p, isPending: g }) : s
    );
  });
var Ig;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ig || (Ig = {}));
var Lg;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lg || (Lg = {}));
function W2(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    u = SS(),
    l = Nu(),
    s = Sv(e, { relative: a });
  return S.useCallback(
    (c) => {
      if (j2(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : kr(l) === kr(s);
        u(e, { replace: d, state: i, preventScrollReset: o, relative: a });
      }
    },
    [l, u, s, r, i, n, e, o, a]
  );
}
function Ss(e) {
  return (
    (Ss =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ss(e)
  );
}
var mh = {},
  K2 = {
    get exports() {
      return mh;
    },
    set exports(e) {
      mh = e;
    },
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (a === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var l in o) t.call(o, l) && o[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(K2);
const be = mh;
function It() {
  return (
    (It = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    It.apply(this, arguments)
  );
}
var cu = {},
  G2 = {
    get exports() {
      return cu;
    },
    set exports(e) {
      cu = e;
    },
  },
  Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Et = typeof Symbol == "function" && Symbol.for,
  bv = Et ? Symbol.for("react.element") : 60103,
  Cv = Et ? Symbol.for("react.portal") : 60106,
  vc = Et ? Symbol.for("react.fragment") : 60107,
  mc = Et ? Symbol.for("react.strict_mode") : 60108,
  gc = Et ? Symbol.for("react.profiler") : 60114,
  yc = Et ? Symbol.for("react.provider") : 60109,
  wc = Et ? Symbol.for("react.context") : 60110,
  Ev = Et ? Symbol.for("react.async_mode") : 60111,
  Sc = Et ? Symbol.for("react.concurrent_mode") : 60111,
  bc = Et ? Symbol.for("react.forward_ref") : 60112,
  Cc = Et ? Symbol.for("react.suspense") : 60113,
  Y2 = Et ? Symbol.for("react.suspense_list") : 60120,
  Ec = Et ? Symbol.for("react.memo") : 60115,
  xc = Et ? Symbol.for("react.lazy") : 60116,
  X2 = Et ? Symbol.for("react.block") : 60121,
  Z2 = Et ? Symbol.for("react.fundamental") : 60117,
  J2 = Et ? Symbol.for("react.responder") : 60118,
  eR = Et ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case bv:
        switch (((e = e.type), e)) {
          case Ev:
          case Sc:
          case vc:
          case gc:
          case mc:
          case Cc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wc:
              case bc:
              case xc:
              case Ec:
              case yc:
                return e;
              default:
                return t;
            }
        }
      case Cv:
        return t;
    }
  }
}
function xS(e) {
  return yn(e) === Sc;
}
Ue.AsyncMode = Ev;
Ue.ConcurrentMode = Sc;
Ue.ContextConsumer = wc;
Ue.ContextProvider = yc;
Ue.Element = bv;
Ue.ForwardRef = bc;
Ue.Fragment = vc;
Ue.Lazy = xc;
Ue.Memo = Ec;
Ue.Portal = Cv;
Ue.Profiler = gc;
Ue.StrictMode = mc;
Ue.Suspense = Cc;
Ue.isAsyncMode = function (e) {
  return xS(e) || yn(e) === Ev;
};
Ue.isConcurrentMode = xS;
Ue.isContextConsumer = function (e) {
  return yn(e) === wc;
};
Ue.isContextProvider = function (e) {
  return yn(e) === yc;
};
Ue.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === bv;
};
Ue.isForwardRef = function (e) {
  return yn(e) === bc;
};
Ue.isFragment = function (e) {
  return yn(e) === vc;
};
Ue.isLazy = function (e) {
  return yn(e) === xc;
};
Ue.isMemo = function (e) {
  return yn(e) === Ec;
};
Ue.isPortal = function (e) {
  return yn(e) === Cv;
};
Ue.isProfiler = function (e) {
  return yn(e) === gc;
};
Ue.isStrictMode = function (e) {
  return yn(e) === mc;
};
Ue.isSuspense = function (e) {
  return yn(e) === Cc;
};
Ue.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === vc ||
    e === Sc ||
    e === gc ||
    e === mc ||
    e === Cc ||
    e === Y2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xc ||
        e.$$typeof === Ec ||
        e.$$typeof === yc ||
        e.$$typeof === wc ||
        e.$$typeof === bc ||
        e.$$typeof === Z2 ||
        e.$$typeof === J2 ||
        e.$$typeof === eR ||
        e.$$typeof === X2))
  );
};
Ue.typeOf = yn;
(function (e) {
  e.exports = Ue;
})(G2);
function gh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    ce.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(gh(r)))
          : cu.isFragment(r) && r.props
          ? (n = n.concat(gh(r.props.children, t)))
          : n.push(r));
    }),
    n
  );
}
var Dg = {};
function tR(e, t) {}
function nR(e, t) {}
function OS(e, t, n) {
  !t && !Dg[n] && (e(!1, n), (Dg[n] = !0));
}
function Er(e, t) {
  OS(tR, e, t);
}
function dI(e, t) {
  OS(nR, e, t);
}
function wt(e) {
  return (
    (wt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wt(e)
  );
}
function rR(e, t) {
  if (wt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (wt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PS(e) {
  var t = rR(e, "string");
  return wt(t) === "symbol" ? t : String(t);
}
function _e(e, t, n) {
  return (
    (t = PS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jg(Object(n), !0).forEach(function (r) {
          _e(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : jg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Hi(e) {
  return (
    (Hi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hi(e)
  );
}
function xv(e, t, n) {
  var r = S.useRef({});
  return (
    (!("value" in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function RS(e, t) {
  typeof e == "function"
    ? e(t)
    : Hi(e) === "object" && e && "current" in e && (e.current = t);
}
function iR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (i) {
    return i;
  });
  return r.length <= 1
    ? r[0]
    : function (i) {
        t.forEach(function (o) {
          RS(o, i);
        });
      };
}
function oR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return xv(
    function () {
      return iR.apply(void 0, t);
    },
    t,
    function (r, i) {
      return (
        r.length === i.length &&
        r.every(function (o, a) {
          return o === i[a];
        })
      );
    }
  );
}
function kS(e) {
  var t,
    n,
    r = cu.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof r == "function" &&
      !(!((t = r.prototype) === null || t === void 0) && t.render)) ||
    (typeof e == "function" &&
      !(!((n = e.prototype) === null || n === void 0) && n.render))
  );
}
function aR(e) {
  return e instanceof HTMLElement ? e : ou.findDOMNode(e);
}
function Ar(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, PS(r.key), r);
  }
}
function Fr(e, t, n) {
  return (
    t && zg(e.prototype, t),
    n && zg(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yh(e, t) {
  return (
    (yh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    yh(e, t)
  );
}
function Ov(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && yh(e, t);
}
function bs(e) {
  return (
    (bs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    bs(e)
  );
}
function uR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function MS(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function lR(e, t) {
  if (t && (wt(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return MS(e);
}
function Pv(e) {
  var t = uR();
  return function () {
    var r = bs(e),
      i;
    if (t) {
      var o = bs(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return lR(this, i);
  };
}
function sR(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ug(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Iu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ug(Object(n), !0).forEach(function (r) {
          sR(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ug(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Rv(e, t) {
  var n = Iu({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function wh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cR(e) {
  if (Array.isArray(e)) return wh(e);
}
function fR(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function TS(e, t) {
  if (e) {
    if (typeof e == "string") return wh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return wh(e, t);
  }
}
function dR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(e) {
  return cR(e) || fR(e) || TS(e) || dR();
}
function kv(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function hR(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function jo(e, t) {
  if (e == null) return {};
  var n = hR(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function pR(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function i(o, a) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = r.has(o);
    if ((Er(!l, "Warning: There may be circular references"), l)) return !1;
    if (o === a) return !0;
    if (n && u > 1) return !1;
    r.add(o);
    var s = u + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length) return !1;
      for (var c = 0; c < o.length; c++) if (!i(o[c], a[c], s)) return !1;
      return !0;
    }
    if (o && a && Hi(o) === "object" && Hi(a) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(a).length
        ? !1
        : d.every(function (f) {
            return i(o[f], a[f], s);
          });
    }
    return !1;
  }
  return i(e, t);
}
var vR = (function () {
    function e() {
      Ar(this, e), _e(this, "cache", new Map());
    }
    return (
      Fr(e, [
        {
          key: "get",
          value: function (n) {
            return this.cache.get(n.join("%")) || null;
          },
        },
        {
          key: "update",
          value: function (n, r) {
            var i = n.join("%"),
              o = this.cache.get(i),
              a = r(o);
            a === null ? this.cache.delete(i) : this.cache.set(i, a);
          },
        },
      ]),
      e
    );
  })(),
  Sh = "data-token-hash",
  Oi = "data-css-hash",
  Fa = "__cssinjs_instance__",
  Cs = Math.random().toString(12).slice(2);
function mR() {
  if (typeof document < "u" && document.head && document.body) {
    var e = document.body.querySelectorAll("style[".concat(Oi, "]")) || [],
      t = document.head.firstChild;
    Array.from(e).forEach(function (r) {
      (r[Fa] = r[Fa] || Cs), document.head.insertBefore(r, t);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Oi, "]"))).forEach(
      function (r) {
        var i = r.getAttribute(Oi);
        if (n[i]) {
          if (r[Fa] === Cs) {
            var o;
            (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
          }
        } else n[i] = !0;
      }
    );
  }
  return new vR();
}
var $S = S.createContext({
  hashPriority: "low",
  cache: mR(),
  defaultCache: !0,
});
function gR(e) {
  if (Array.isArray(e)) return e;
}
function yR(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      o,
      a,
      u = [],
      l = !0,
      s = !1;
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (r = o.call(n)).done) && (u.push(r.value), u.length !== t);
          l = !0
        );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        if (!l && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function wR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function we(e, t) {
  return gR(e) || yR(e, t) || TS(e, t) || wR();
}
function AS(e, t, n, r) {
  var i = S.useContext($S),
    o = i.cache,
    a = [e].concat(de(t));
  return (
    S.useMemo(
      function () {
        o.update(a, function (u) {
          var l = u || [],
            s = we(l, 2),
            c = s[0],
            d = c === void 0 ? 0 : c,
            f = s[1],
            h = f,
            v = h || n();
          return [d + 1, v];
        });
      },
      [a.join("_")]
    ),
    S.useEffect(function () {
      return function () {
        o.update(a, function (u) {
          var l = u || [],
            s = we(l, 2),
            c = s[0],
            d = c === void 0 ? 0 : c,
            f = s[1],
            h = d - 1;
          return h === 0 ? (r == null || r(f, !1), null) : [d - 1, f];
        });
      };
    }, a),
    o.get(a)[1]
  );
}
function Fn() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function bh(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var Hg = "data-rc-order",
  SR = "rc-util-key",
  Ch = new Map();
function FS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : SR;
}
function Oc(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function bR(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function _S(e) {
  return Array.from((Ch.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function NS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Fn()) return null;
  var n = t.csp,
    r = t.prepend,
    i = document.createElement("style");
  i.setAttribute(Hg, bR(r)),
    n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce),
    (i.innerHTML = e);
  var o = Oc(t),
    a = o.firstChild;
  if (r) {
    if (r === "queue") {
      var u = _S(o).filter(function (l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(Hg));
      });
      if (u.length) return o.insertBefore(i, u[u.length - 1].nextSibling), i;
    }
    o.insertBefore(i, a);
  } else o.appendChild(i);
  return i;
}
function IS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Oc(t);
  return _S(n).find(function (r) {
    return r.getAttribute(FS(t)) === e;
  });
}
function Es(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = IS(e, t);
  if (n) {
    var r = Oc(t);
    r.removeChild(n);
  }
}
function CR(e, t) {
  var n = Ch.get(e);
  if (!n || !bh(document, n)) {
    var r = NS("", t),
      i = r.parentNode;
    Ch.set(e, i), e.removeChild(r);
  }
}
function fu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Oc(n);
  CR(r, n);
  var i = IS(t, n);
  if (i) {
    var o, a;
    if (
      !((o = n.csp) === null || o === void 0) &&
      o.nonce &&
      i.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)
    ) {
      var u;
      i.nonce = (u = n.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var l = NS(e, n);
  return l.setAttribute(FS(n), t), l;
}
function xs(e) {
  var t = "";
  return (
    Object.keys(e).forEach(function (n) {
      var r = e[n];
      (t += n), r && wt(r) === "object" ? (t += xs(r)) : (t += r);
    }),
    t
  );
}
function ER(e, t) {
  return kv("".concat(t, "_").concat(xs(e)));
}
var _a = "layer-"
    .concat(Date.now(), "-")
    .concat(Math.random())
    .replace(/\./g, ""),
  LS = "903px";
function xR(e, t) {
  if (Fn()) {
    var n;
    fu(e, _a);
    var r = document.createElement("div");
    (r.style.position = "fixed"),
      (r.style.left = "0"),
      (r.style.top = "0"),
      t == null || t(r),
      document.body.appendChild(r);
    var i = getComputedStyle(r).width === LS;
    return (
      (n = r.parentNode) === null || n === void 0 || n.removeChild(r), Es(_a), i
    );
  }
  return !1;
}
var zf = void 0;
function OR() {
  return (
    zf === void 0 &&
      (zf = xR(
        "@layer "
          .concat(_a, " { .")
          .concat(_a, " { width: ")
          .concat(LS, "!important; } }"),
        function (e) {
          e.className = _a;
        }
      )),
    zf
  );
}
var PR = {},
  RR = "css",
  Si = new Map();
function kR(e) {
  Si.set(e, (Si.get(e) || 0) + 1);
}
function MR(e) {
  if (typeof document < "u") {
    var t = document.querySelectorAll(
      "style[".concat(Sh, '="').concat(e, '"]')
    );
    t.forEach(function (n) {
      if (n[Fa] === Cs) {
        var r;
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
      }
    });
  }
}
function TR(e) {
  Si.set(e, (Si.get(e) || 0) - 1);
  var t = Array.from(Si.keys()),
    n = t.filter(function (r) {
      var i = Si.get(r) || 0;
      return i <= 0;
    });
  n.length < t.length &&
    n.forEach(function (r) {
      MR(r), Si.delete(r);
    });
}
function $R(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.salt,
    i = r === void 0 ? "" : r,
    o = n.override,
    a = o === void 0 ? PR : o,
    u = n.formatToken,
    l = S.useMemo(
      function () {
        return Object.assign.apply(Object, [{}].concat(de(t)));
      },
      [t]
    ),
    s = S.useMemo(
      function () {
        return xs(l);
      },
      [l]
    ),
    c = S.useMemo(
      function () {
        return xs(a);
      },
      [a]
    ),
    d = AS(
      "token",
      [i, e.id, s, c],
      function () {
        var f = e.getDerivativeToken(l),
          h = K(K({}, f), a);
        u && (h = u(h));
        var v = ER(h, i);
        (h._tokenKey = v), kR(v);
        var y = "".concat(RR, "-").concat(kv(v));
        return (h._hashId = y), [h, y];
      },
      function (f) {
        TR(f[0]._tokenKey);
      }
    );
  return d;
}
var AR = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  DS = "comm",
  jS = "rule",
  zS = "decl",
  FR = "@import",
  _R = "@keyframes",
  NR = Math.abs,
  Mv = String.fromCharCode;
function US(e) {
  return e.trim();
}
function Eh(e, t, n) {
  return e.replace(t, n);
}
function IR(e, t) {
  return e.indexOf(t);
}
function du(e, t) {
  return e.charCodeAt(t) | 0;
}
function hu(e, t, n) {
  return e.slice(t, n);
}
function Hr(e) {
  return e.length;
}
function HS(e) {
  return e.length;
}
function sl(e, t) {
  return t.push(e), e;
}
var Pc = 1,
  zo = 1,
  qS = 0,
  _n = 0,
  pt = 0,
  Zo = "";
function Tv(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Pc,
    column: zo,
    length: a,
    return: "",
  };
}
function LR() {
  return pt;
}
function DR() {
  return (
    (pt = _n > 0 ? du(Zo, --_n) : 0), zo--, pt === 10 && ((zo = 1), Pc--), pt
  );
}
function Qn() {
  return (
    (pt = _n < qS ? du(Zo, _n++) : 0), zo++, pt === 10 && ((zo = 1), Pc++), pt
  );
}
function _i() {
  return du(Zo, _n);
}
function Nl() {
  return _n;
}
function Rc(e, t) {
  return hu(Zo, e, t);
}
function xh(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jR(e) {
  return (Pc = zo = 1), (qS = Hr((Zo = e))), (_n = 0), [];
}
function zR(e) {
  return (Zo = ""), e;
}
function Uf(e) {
  return US(Rc(_n - 1, Oh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function UR(e) {
  for (; (pt = _i()) && pt < 33; ) Qn();
  return xh(e) > 2 || xh(pt) > 3 ? "" : " ";
}
function HR(e, t) {
  for (
    ;
    --t &&
    Qn() &&
    !(pt < 48 || pt > 102 || (pt > 57 && pt < 65) || (pt > 70 && pt < 97));

  );
  return Rc(e, Nl() + (t < 6 && _i() == 32 && Qn() == 32));
}
function Oh(e) {
  for (; Qn(); )
    switch (pt) {
      case e:
        return _n;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Oh(pt);
        break;
      case 40:
        e === 41 && Oh(e);
        break;
      case 92:
        Qn();
        break;
    }
  return _n;
}
function qR(e, t) {
  for (; Qn() && e + pt !== 47 + 10; )
    if (e + pt === 42 + 42 && _i() === 47) break;
  return "/*" + Rc(t, _n - 1) + "*" + Mv(e === 47 ? e : Qn());
}
function BR(e) {
  for (; !xh(_i()); ) Qn();
  return Rc(e, _n);
}
function VR(e) {
  return zR(Il("", null, null, null, [""], (e = jR(e)), 0, [0], e));
}
function Il(e, t, n, r, i, o, a, u, l) {
  for (
    var s = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      v = 0,
      y = 1,
      b = 1,
      m = 1,
      p = 0,
      g = "",
      w = i,
      x = o,
      C = r,
      E = g;
    b;

  )
    switch (((v = p), (p = Qn()))) {
      case 40:
        if (v != 108 && du(E, d - 1) == 58) {
          IR((E += Eh(Uf(p), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Uf(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += UR(v);
        break;
      case 92:
        E += HR(Nl() - 1, 7);
        continue;
      case 47:
        switch (_i()) {
          case 42:
          case 47:
            sl(QR(qR(Qn(), Nl()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        u[s++] = Hr(E) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            h > 0 &&
              Hr(E) - d &&
              sl(
                h > 32
                  ? Bg(E + ";", r, n, d - 1)
                  : Bg(Eh(E, " ", "") + ";", r, n, d - 2),
                l
              );
            break;
          case 59:
            E += ";";
          default:
            if (
              (sl((C = qg(E, t, n, s, c, i, u, g, (w = []), (x = []), d)), o),
              p === 123)
            )
              if (c === 0) Il(E, t, C, C, w, o, d, u, x);
              else
                switch (f === 99 && du(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    Il(
                      e,
                      C,
                      C,
                      r && sl(qg(e, C, C, 0, 0, i, u, g, i, (w = []), d), x),
                      i,
                      x,
                      d,
                      u,
                      r ? w : x
                    );
                    break;
                  default:
                    Il(E, C, C, C, [""], x, 0, u, x);
                }
        }
        (s = c = h = 0), (y = m = 1), (g = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + Hr(E)), (h = v);
      default:
        if (y < 1) {
          if (p == 123) --y;
          else if (p == 125 && y++ == 0 && DR() == 125) continue;
        }
        switch (((E += Mv(p)), p * y)) {
          case 38:
            m = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (u[s++] = (Hr(E) - 1) * m), (m = 1);
            break;
          case 64:
            _i() === 45 && (E += Uf(Qn())),
              (f = _i()),
              (c = d = Hr((g = E += BR(Nl())))),
              p++;
            break;
          case 45:
            v === 45 && Hr(E) == 2 && (y = 0);
        }
    }
  return o;
}
function qg(e, t, n, r, i, o, a, u, l, s, c) {
  for (
    var d = i - 1, f = i === 0 ? o : [""], h = HS(f), v = 0, y = 0, b = 0;
    v < r;
    ++v
  )
    for (var m = 0, p = hu(e, d + 1, (d = NR((y = a[v])))), g = e; m < h; ++m)
      (g = US(y > 0 ? f[m] + " " + p : Eh(p, /&\f/g, f[m]))) && (l[b++] = g);
  return Tv(e, t, n, i === 0 ? jS : u, l, s, c);
}
function QR(e, t, n) {
  return Tv(e, t, n, DS, Mv(LR()), hu(e, 2, -2), 0);
}
function Bg(e, t, n, r) {
  return Tv(e, t, n, zS, hu(e, 0, r), hu(e, r + 1, -1), r);
}
function Ph(e, t) {
  for (var n = "", r = HS(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function WR(e, t, n, r) {
  switch (e.type) {
    case FR:
    case zS:
      return (e.return = e.return || e.value);
    case DS:
      return "";
    case _R:
      return (e.return = e.value + "{" + Ph(e.children, r) + "}");
    case jS:
      e.value = e.props.join(",");
  }
  return Hr((n = Ph(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
var Vg = Fn(),
  KR = "_skip_check_";
function Qg(e) {
  var t = Ph(VR(e), WR);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function GR(e) {
  return wt(e) === "object" && e && KR in e;
}
function YR(e, t, n) {
  if (!t) return e;
  var r = ".".concat(t),
    i = n === "low" ? ":where(".concat(r, ")") : r,
    o = e.split(",").map(function (a) {
      var u,
        l = a.trim().split(/\s+/),
        s = l[0] || "",
        c =
          ((u = s.match(/^\w+/)) === null || u === void 0 ? void 0 : u[0]) ||
          "";
      return (
        (s = "".concat(c).concat(i).concat(s.slice(c.length))),
        [s].concat(de(l.slice(1))).join(" ")
      );
    });
  return o.join(",");
}
var Wg = new Set(),
  XR = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { root: !0, parentSelectors: [] },
      i = r.root,
      o = r.injectHash,
      a = r.parentSelectors,
      u = n.hashId,
      l = n.layer;
    n.path;
    var s = n.hashPriority,
      c = n.transformers,
      d = c === void 0 ? [] : c;
    n.linters;
    var f = "",
      h = {};
    function v(g) {
      var w = g.getName(u);
      if (!h[w]) {
        var x = e(g.style, n, { root: !1, parentSelectors: a }),
          C = we(x, 1),
          E = C[0];
        h[w] = "@keyframes ".concat(g.getName(u)).concat(E);
      }
    }
    function y(g) {
      var w =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return (
        g.forEach(function (x) {
          Array.isArray(x) ? y(x, w) : x && w.push(x);
        }),
        w
      );
    }
    var b = y(Array.isArray(t) ? t : [t]);
    if (
      (b.forEach(function (g) {
        var w = typeof g == "string" && !i ? {} : g;
        if (typeof w == "string")
          f += "".concat(
            w,
            `
`
          );
        else if (w._keyframe) v(w);
        else {
          var x = d.reduce(function (C, E) {
            var k;
            return (
              (E == null || (k = E.visit) === null || k === void 0
                ? void 0
                : k.call(E, C)) || C
            );
          }, w);
          Object.keys(x).forEach(function (C) {
            var E = x[C];
            if (
              wt(E) === "object" &&
              E &&
              (C !== "animationName" || !E._keyframe) &&
              !GR(E)
            ) {
              var k = !1,
                M = C.trim(),
                T = !1;
              (i || o) && u
                ? M.startsWith("@")
                  ? (k = !0)
                  : (M = YR(C, u, s))
                : i && !u && (M === "&" || M === "") && ((M = ""), (T = !0));
              var A = e(E, n, {
                  root: T,
                  injectHash: k,
                  parentSelectors: [].concat(de(a), [M]),
                }),
                P = we(A, 2),
                O = P[0],
                R = P[1];
              (h = K(K({}, h), R)), (f += "".concat(M).concat(O));
            } else {
              var $,
                F =
                  ($ = E == null ? void 0 : E.value) !== null && $ !== void 0
                    ? $
                    : E,
                N = C.replace(/[A-Z]/g, function (I) {
                  return "-".concat(I.toLowerCase());
                }),
                _ = F;
              !AR[C] &&
                typeof _ == "number" &&
                _ !== 0 &&
                (_ = "".concat(_, "px")),
                C === "animationName" &&
                  E !== null &&
                  E !== void 0 &&
                  E._keyframe &&
                  (v(E), (_ = E.getName(u))),
                (f += "".concat(N, ":").concat(_, ";"));
            }
          });
        }
      }),
      !i)
    )
      f = "{".concat(f, "}");
    else if (l && OR()) {
      var m = l.split(","),
        p = m[m.length - 1].trim();
      (f = "@layer ".concat(p, " {").concat(f, "}")),
        m.length > 1 && (f = "@layer ".concat(l, "{%%%:%}").concat(f));
    }
    return [f, h];
  };
function ZR(e, t) {
  return kv("".concat(e.join("%")).concat(t));
}
function JR() {
  return null;
}
function Rh(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = S.useContext($S),
    u = a.autoClear;
  a.mock;
  var l = a.defaultCache,
    s = a.hashPriority,
    c = a.container,
    d = a.ssrInline,
    f = a.transformers,
    h = a.linters,
    v = n._tokenKey,
    y = [v].concat(de(r)),
    b = Vg,
    m = AS(
      "style",
      y,
      function () {
        var C = t(),
          E = XR(C, {
            hashId: i,
            hashPriority: s,
            layer: o,
            path: r.join("-"),
            transformers: f,
            linters: h,
          }),
          k = we(E, 2),
          M = k[0],
          T = k[1],
          A = Qg(M),
          P = ZR(y, A);
        if (b) {
          var O = fu(A, P, { mark: Oi, prepend: "queue", attachTo: c });
          (O[Fa] = Cs),
            O.setAttribute(Sh, v),
            Object.keys(T).forEach(function (R) {
              Wg.has(R) ||
                (Wg.add(R),
                fu(Qg(T[R]), "_effect-".concat(R), {
                  mark: Oi,
                  prepend: "queue",
                  attachTo: c,
                }));
            });
        }
        return [A, v, P];
      },
      function (C, E) {
        var k = we(C, 3),
          M = k[2];
        (E || u) && Vg && Es(M, { mark: Oi });
      }
    ),
    p = we(m, 3),
    g = p[0],
    w = p[1],
    x = p[2];
  return function (C) {
    var E;
    if (!d || b || !l) E = S.createElement(JR, null);
    else {
      var k;
      E = S.createElement(
        "style",
        It({}, ((k = {}), _e(k, Sh, w), _e(k, Oi, x), k), {
          dangerouslySetInnerHTML: { __html: g },
        })
      );
    }
    return S.createElement(S.Fragment, null, E, C);
  };
}
var At = (function () {
  function e(t, n) {
    Ar(this, e),
      _e(this, "name", void 0),
      _e(this, "style", void 0),
      _e(this, "_keyframe", !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    Fr(e, [
      {
        key: "getName",
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return n ? "".concat(n, "-").concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function ek(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var $v = (function () {
  function e() {
    Ar(this, e),
      _e(this, "cache", void 0),
      _e(this, "keys", void 0),
      _e(this, "cacheCallTimes", void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    Fr(e, [
      {
        key: "size",
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: "internalGet",
        value: function (n) {
          var r,
            i,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (u) {
              if (!a) a = void 0;
              else {
                var l, s;
                a =
                  (l = a) === null ||
                  l === void 0 ||
                  (s = l.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(u);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              o &&
              (a.value[1] = this.cacheCallTimes++),
            (i = a) === null || i === void 0 ? void 0 : i.value
          );
        },
      },
      {
        key: "get",
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: "has",
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: "set",
        value: function (n, r) {
          var i = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var o = this.keys.reduce(
                  function (s, c) {
                    var d = we(s, 2),
                      f = d[1];
                    return i.internalGet(c)[1] < f
                      ? [c, i.internalGet(c)[1]]
                      : s;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = we(o, 1),
                u = a[0];
              this.delete(u);
            }
            this.keys.push(n);
          }
          var l = this.cache;
          n.forEach(function (s, c) {
            if (c === n.length - 1)
              l.set(s, { value: [r, i.cacheCallTimes++] });
            else {
              var d = l.get(s);
              d ? d.map || (d.map = new Map()) : l.set(s, { map: new Map() }),
                (l = l.get(s).map);
            }
          });
        },
      },
      {
        key: "deleteByPath",
        value: function (n, r) {
          var i = n.get(r[0]);
          if (r.length === 1) {
            var o;
            return (
              i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
              (o = i.value) === null || o === void 0 ? void 0 : o[0]
            );
          }
          var a = this.deleteByPath(i.map, r.slice(1));
          return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), a;
        },
      },
      {
        key: "delete",
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !ek(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
_e($v, "MAX_CACHE_SIZE", 20);
_e($v, "MAX_CACHE_OFFSET", 5);
var Kg = 0,
  tk = (function () {
    function e(t) {
      Ar(this, e),
        _e(this, "derivatives", void 0),
        _e(this, "id", void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Kg),
        t.length === 0 && (t.length > 0, void 0),
        (Kg += 1);
    }
    return (
      Fr(e, [
        {
          key: "getDerivativeToken",
          value: function (n) {
            return this.derivatives.reduce(function (r, i) {
              return i(n, r);
            }, void 0);
          },
        },
      ]),
      e
    );
  })(),
  Hf = new $v();
function BS(e) {
  var t = Array.isArray(e) ? e : [e];
  return Hf.has(t) || Hf.set(t, new tk(t)), Hf.get(t);
}
function Gi(e) {
  return (e.notSplit = !0), e;
}
Gi(["borderTop", "borderBottom"]),
  Gi(["borderTop"]),
  Gi(["borderBottom"]),
  Gi(["borderLeft", "borderRight"]),
  Gi(["borderLeft"]),
  Gi(["borderRight"]);
var nk = S.createContext({});
const Av = nk;
var Pi = "RC_FORM_INTERNAL_HOOKS",
  qe = function () {
    Er(
      !1,
      "Can not find FormContext. Please make sure you wrap Field under Form."
    );
  },
  Uo = S.createContext({
    getFieldValue: qe,
    getFieldsValue: qe,
    getFieldError: qe,
    getFieldWarning: qe,
    getFieldsError: qe,
    isFieldsTouched: qe,
    isFieldTouched: qe,
    isFieldValidating: qe,
    isFieldsValidating: qe,
    resetFields: qe,
    setFields: qe,
    setFieldValue: qe,
    setFieldsValue: qe,
    validateFields: qe,
    submit: qe,
    getInternalHooks: function () {
      return (
        qe(),
        {
          dispatch: qe,
          initEntityValue: qe,
          registerField: qe,
          useSubscribe: qe,
          setInitialValues: qe,
          destroyForm: qe,
          setCallbacks: qe,
          registerWatch: qe,
          getFields: qe,
          setValidateMessages: qe,
          setPreserve: qe,
          getInitialValue: qe,
        }
      );
    },
  });
function kh(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Mr() {
  Mr = function () {
    return e;
  };
  var e = {},
    t = Object.prototype,
    n = t.hasOwnProperty,
    r =
      Object.defineProperty ||
      function (P, O, R) {
        P[O] = R.value;
      },
    i = typeof Symbol == "function" ? Symbol : {},
    o = i.iterator || "@@iterator",
    a = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function l(P, O, R) {
    return (
      Object.defineProperty(P, O, {
        value: R,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      P[O]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (R, $, F) {
      return (R[$] = F);
    };
  }
  function s(P, O, R, $) {
    var F = O && O.prototype instanceof f ? O : f,
      N = Object.create(F.prototype),
      _ = new M($ || []);
    return r(N, "_invoke", { value: x(P, R, _) }), N;
  }
  function c(P, O, R) {
    try {
      return { type: "normal", arg: P.call(O, R) };
    } catch ($) {
      return { type: "throw", arg: $ };
    }
  }
  e.wrap = s;
  var d = {};
  function f() {}
  function h() {}
  function v() {}
  var y = {};
  l(y, o, function () {
    return this;
  });
  var b = Object.getPrototypeOf,
    m = b && b(b(T([])));
  m && m !== t && n.call(m, o) && (y = m);
  var p = (v.prototype = f.prototype = Object.create(y));
  function g(P) {
    ["next", "throw", "return"].forEach(function (O) {
      l(P, O, function (R) {
        return this._invoke(O, R);
      });
    });
  }
  function w(P, O) {
    function R(F, N, _, I) {
      var L = c(P[F], P, N);
      if (L.type !== "throw") {
        var H = L.arg,
          q = H.value;
        return q && wt(q) == "object" && n.call(q, "__await")
          ? O.resolve(q.__await).then(
              function (V) {
                R("next", V, _, I);
              },
              function (V) {
                R("throw", V, _, I);
              }
            )
          : O.resolve(q).then(
              function (V) {
                (H.value = V), _(H);
              },
              function (V) {
                return R("throw", V, _, I);
              }
            );
      }
      I(L.arg);
    }
    var $;
    r(this, "_invoke", {
      value: function (N, _) {
        function I() {
          return new O(function (L, H) {
            R(N, _, L, H);
          });
        }
        return ($ = $ ? $.then(I, I) : I());
      },
    });
  }
  function x(P, O, R) {
    var $ = "suspendedStart";
    return function (F, N) {
      if ($ === "executing") throw new Error("Generator is already running");
      if ($ === "completed") {
        if (F === "throw") throw N;
        return A();
      }
      for (R.method = F, R.arg = N; ; ) {
        var _ = R.delegate;
        if (_) {
          var I = C(_, R);
          if (I) {
            if (I === d) continue;
            return I;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if ($ === "suspendedStart") throw (($ = "completed"), R.arg);
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        $ = "executing";
        var L = c(P, O, R);
        if (L.type === "normal") {
          if ((($ = R.done ? "completed" : "suspendedYield"), L.arg === d))
            continue;
          return { value: L.arg, done: R.done };
        }
        L.type === "throw" &&
          (($ = "completed"), (R.method = "throw"), (R.arg = L.arg));
      }
    };
  }
  function C(P, O) {
    var R = O.method,
      $ = P.iterator[R];
    if ($ === void 0)
      return (
        (O.delegate = null),
        (R === "throw" &&
          P.iterator.return &&
          ((O.method = "return"),
          (O.arg = void 0),
          C(P, O),
          O.method === "throw")) ||
          (R !== "return" &&
            ((O.method = "throw"),
            (O.arg = new TypeError(
              "The iterator does not provide a '" + R + "' method"
            )))),
        d
      );
    var F = c($, P.iterator, O.arg);
    if (F.type === "throw")
      return (O.method = "throw"), (O.arg = F.arg), (O.delegate = null), d;
    var N = F.arg;
    return N
      ? N.done
        ? ((O[P.resultName] = N.value),
          (O.next = P.nextLoc),
          O.method !== "return" && ((O.method = "next"), (O.arg = void 0)),
          (O.delegate = null),
          d)
        : N
      : ((O.method = "throw"),
        (O.arg = new TypeError("iterator result is not an object")),
        (O.delegate = null),
        d);
  }
  function E(P) {
    var O = { tryLoc: P[0] };
    1 in P && (O.catchLoc = P[1]),
      2 in P && ((O.finallyLoc = P[2]), (O.afterLoc = P[3])),
      this.tryEntries.push(O);
  }
  function k(P) {
    var O = P.completion || {};
    (O.type = "normal"), delete O.arg, (P.completion = O);
  }
  function M(P) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      P.forEach(E, this),
      this.reset(!0);
  }
  function T(P) {
    if (P) {
      var O = P[o];
      if (O) return O.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var R = -1,
          $ = function F() {
            for (; ++R < P.length; )
              if (n.call(P, R)) return (F.value = P[R]), (F.done = !1), F;
            return (F.value = void 0), (F.done = !0), F;
          };
        return ($.next = $);
      }
    }
    return { next: A };
  }
  function A() {
    return { value: void 0, done: !0 };
  }
  return (
    (h.prototype = v),
    r(p, "constructor", { value: v, configurable: !0 }),
    r(v, "constructor", { value: h, configurable: !0 }),
    (h.displayName = l(v, u, "GeneratorFunction")),
    (e.isGeneratorFunction = function (P) {
      var O = typeof P == "function" && P.constructor;
      return (
        !!O && (O === h || (O.displayName || O.name) === "GeneratorFunction")
      );
    }),
    (e.mark = function (P) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(P, v)
          : ((P.__proto__ = v), l(P, u, "GeneratorFunction")),
        (P.prototype = Object.create(p)),
        P
      );
    }),
    (e.awrap = function (P) {
      return { __await: P };
    }),
    g(w.prototype),
    l(w.prototype, a, function () {
      return this;
    }),
    (e.AsyncIterator = w),
    (e.async = function (P, O, R, $, F) {
      F === void 0 && (F = Promise);
      var N = new w(s(P, O, R, $), F);
      return e.isGeneratorFunction(O)
        ? N
        : N.next().then(function (_) {
            return _.done ? _.value : N.next();
          });
    }),
    g(p),
    l(p, u, "Generator"),
    l(p, o, function () {
      return this;
    }),
    l(p, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (P) {
      var O = Object(P),
        R = [];
      for (var $ in O) R.push($);
      return (
        R.reverse(),
        function F() {
          for (; R.length; ) {
            var N = R.pop();
            if (N in O) return (F.value = N), (F.done = !1), F;
          }
          return (F.done = !0), F;
        }
      );
    }),
    (e.values = T),
    (M.prototype = {
      constructor: M,
      reset: function (O) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(k),
          !O)
        )
          for (var R in this)
            R.charAt(0) === "t" &&
              n.call(this, R) &&
              !isNaN(+R.slice(1)) &&
              (this[R] = void 0);
      },
      stop: function () {
        this.done = !0;
        var O = this.tryEntries[0].completion;
        if (O.type === "throw") throw O.arg;
        return this.rval;
      },
      dispatchException: function (O) {
        if (this.done) throw O;
        var R = this;
        function $(H, q) {
          return (
            (_.type = "throw"),
            (_.arg = O),
            (R.next = H),
            q && ((R.method = "next"), (R.arg = void 0)),
            !!q
          );
        }
        for (var F = this.tryEntries.length - 1; F >= 0; --F) {
          var N = this.tryEntries[F],
            _ = N.completion;
          if (N.tryLoc === "root") return $("end");
          if (N.tryLoc <= this.prev) {
            var I = n.call(N, "catchLoc"),
              L = n.call(N, "finallyLoc");
            if (I && L) {
              if (this.prev < N.catchLoc) return $(N.catchLoc, !0);
              if (this.prev < N.finallyLoc) return $(N.finallyLoc);
            } else if (I) {
              if (this.prev < N.catchLoc) return $(N.catchLoc, !0);
            } else {
              if (!L) throw new Error("try statement without catch or finally");
              if (this.prev < N.finallyLoc) return $(N.finallyLoc);
            }
          }
        }
      },
      abrupt: function (O, R) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var F = this.tryEntries[$];
          if (
            F.tryLoc <= this.prev &&
            n.call(F, "finallyLoc") &&
            this.prev < F.finallyLoc
          ) {
            var N = F;
            break;
          }
        }
        N &&
          (O === "break" || O === "continue") &&
          N.tryLoc <= R &&
          R <= N.finallyLoc &&
          (N = null);
        var _ = N ? N.completion : {};
        return (
          (_.type = O),
          (_.arg = R),
          N
            ? ((this.method = "next"), (this.next = N.finallyLoc), d)
            : this.complete(_)
        );
      },
      complete: function (O, R) {
        if (O.type === "throw") throw O.arg;
        return (
          O.type === "break" || O.type === "continue"
            ? (this.next = O.arg)
            : O.type === "return"
            ? ((this.rval = this.arg = O.arg),
              (this.method = "return"),
              (this.next = "end"))
            : O.type === "normal" && R && (this.next = R),
          d
        );
      },
      finish: function (O) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var $ = this.tryEntries[R];
          if ($.finallyLoc === O)
            return this.complete($.completion, $.afterLoc), k($), d;
        }
      },
      catch: function (O) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var $ = this.tryEntries[R];
          if ($.tryLoc === O) {
            var F = $.completion;
            if (F.type === "throw") {
              var N = F.arg;
              k($);
            }
            return N;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (O, R, $) {
        return (
          (this.delegate = { iterator: T(O), resultName: R, nextLoc: $ }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      },
    }),
    e
  );
}
function Gg(e, t, n, r, i, o, a) {
  try {
    var u = e[o](a),
      l = u.value;
  } catch (s) {
    n(s);
    return;
  }
  u.done ? t(l) : Promise.resolve(l).then(r, i);
}
function kc(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var o = e.apply(t, n);
      function a(l) {
        Gg(o, r, i, a, u, "next", l);
      }
      function u(l) {
        Gg(o, r, i, a, u, "throw", l);
      }
      a(void 0);
    });
  };
}
function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
function rk(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    pu(e, t);
}
function Mh(e) {
  return (
    (Mh = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Mh(e)
  );
}
function pu(e, t) {
  return (
    (pu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    pu(e, t)
  );
}
function ik() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ll(e, t, n) {
  return (
    ik()
      ? (Ll = Reflect.construct.bind())
      : (Ll = function (i, o, a) {
          var u = [null];
          u.push.apply(u, o);
          var l = Function.bind.apply(i, u),
            s = new l();
          return a && pu(s, a.prototype), s;
        }),
    Ll.apply(null, arguments)
  );
}
function ok(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Th(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Th = function (r) {
      if (r === null || !ok(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, i);
      }
      function i() {
        return Ll(r, arguments, Mh(this).constructor);
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        pu(i, r)
      );
    }),
    Th(e)
  );
}
var ak = /%[sdj%]/g,
  uk = function () {};
typeof process < "u" && process.env;
function $h(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var r = n.field;
      (t[r] = t[r] || []), t[r].push(n);
    }),
    t
  );
}
function fn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = 0,
    o = n.length;
  if (typeof e == "function") return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(ak, function (u) {
      if (u === "%%") return "%";
      if (i >= o) return u;
      switch (u) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return u;
      }
    });
    return a;
  }
  return e;
}
function lk(e) {
  return (
    e === "string" ||
    e === "url" ||
    e === "hex" ||
    e === "email" ||
    e === "date" ||
    e === "pattern"
  );
}
function St(e, t) {
  return !!(
    e == null ||
    (t === "array" && Array.isArray(e) && !e.length) ||
    (lk(t) && typeof e == "string" && !e)
  );
}
function sk(e, t, n) {
  var r = [],
    i = 0,
    o = e.length;
  function a(u) {
    r.push.apply(r, u || []), i++, i === o && n(r);
  }
  e.forEach(function (u) {
    t(u, a);
  });
}
function Yg(e, t, n) {
  var r = 0,
    i = e.length;
  function o(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var u = r;
    (r = r + 1), u < i ? t(e[u], o) : n([]);
  }
  o([]);
}
function ck(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, e[n] || []);
    }),
    t
  );
}
var Xg = (function (e) {
  rk(t, e);
  function t(n, r) {
    var i;
    return (
      (i = e.call(this, "Async Validation Error") || this),
      (i.errors = n),
      (i.fields = r),
      i
    );
  }
  return t;
})(Th(Error));
function fk(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (f, h) {
      var v = function (m) {
          return r(m), m.length ? h(new Xg(m, $h(m))) : f(i);
        },
        y = ck(e);
      Yg(y, n, v);
    });
    return (
      o.catch(function (f) {
        return f;
      }),
      o
    );
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    u = Object.keys(e),
    l = u.length,
    s = 0,
    c = [],
    d = new Promise(function (f, h) {
      var v = function (b) {
        if ((c.push.apply(c, b), s++, s === l))
          return r(c), c.length ? h(new Xg(c, $h(c))) : f(i);
      };
      u.length || (r(c), f(i)),
        u.forEach(function (y) {
          var b = e[y];
          a.indexOf(y) !== -1 ? Yg(b, n, v) : sk(b, n, v);
        });
    });
  return (
    d.catch(function (f) {
      return f;
    }),
    d
  );
}
function dk(e) {
  return !!(e && e.message !== void 0);
}
function hk(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]];
  }
  return n;
}
function Zg(e, t) {
  return function (n) {
    var r;
    return (
      e.fullFields
        ? (r = hk(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      dk(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == "function" ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    );
  };
}
function Jg(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object"
          ? (e[n] = Ri({}, e[n], r))
          : (e[n] = r);
      }
  }
  return e;
}
var VS = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || St(n, a || t.type)) &&
      i.push(fn(o.messages.required, t.fullField));
  },
  pk = function (t, n, r, i, o) {
    (/^\s+$/.test(n) || n === "") &&
      i.push(fn(o.messages.whitespace, t.fullField));
  },
  cl,
  vk = function () {
    if (cl) return cl;
    var e = "[a-fA-F\\d:]",
      t = function (w) {
        return w && w.includeBoundaries
          ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))"
          : "";
      },
      n =
        "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
      r = "[a-fA-F\\d]{1,4}",
      i = (
        `
(?:
(?:` +
        r +
        ":){7}(?:" +
        r +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        r +
        ":){6}(?:" +
        n +
        "|:" +
        r +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        r +
        ":){5}(?::" +
        n +
        "|(?::" +
        r +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        r +
        ":){4}(?:(?::" +
        r +
        "){0,1}:" +
        n +
        "|(?::" +
        r +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        r +
        ":){3}(?:(?::" +
        r +
        "){0,2}:" +
        n +
        "|(?::" +
        r +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        r +
        ":){2}(?:(?::" +
        r +
        "){0,3}:" +
        n +
        "|(?::" +
        r +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        r +
        ":){1}(?:(?::" +
        r +
        "){0,4}:" +
        n +
        "|(?::" +
        r +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        r +
        "){0,5}:" +
        n +
        "|(?::" +
        r +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, "")
        .replace(/\n/g, "")
        .trim(),
      o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"),
      a = new RegExp("^" + n + "$"),
      u = new RegExp("^" + i + "$"),
      l = function (w) {
        return w && w.exact
          ? o
          : new RegExp(
              "(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + i + t(w) + ")",
              "g"
            );
      };
    (l.v4 = function (g) {
      return g && g.exact ? a : new RegExp("" + t(g) + n + t(g), "g");
    }),
      (l.v6 = function (g) {
        return g && g.exact ? u : new RegExp("" + t(g) + i + t(g), "g");
      });
    var s = "(?:(?:[a-z]+:)?//)",
      c = "(?:\\S+(?::\\S*)?@)?",
      d = l.v4().source,
      f = l.v6().source,
      h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
      v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
      y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
      b = "(?::\\d{2,5})?",
      m = '(?:[/?#][^\\s"]*)?',
      p =
        "(?:" +
        s +
        "|www\\.)" +
        c +
        "(?:localhost|" +
        d +
        "|" +
        f +
        "|" +
        h +
        v +
        y +
        ")" +
        b +
        m;
    return (cl = new RegExp("(?:^" + p + "$)", "i")), cl;
  },
  ey = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  ba = {
    integer: function (t) {
      return ba.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return ba.number(t) && !ba.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == "function" &&
        typeof t.getMonth == "function" &&
        typeof t.getYear == "function" &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == "number";
    },
    object: function (t) {
      return typeof t == "object" && !ba.array(t);
    },
    method: function (t) {
      return typeof t == "function";
    },
    email: function (t) {
      return typeof t == "string" && t.length <= 320 && !!t.match(ey.email);
    },
    url: function (t) {
      return typeof t == "string" && t.length <= 2048 && !!t.match(vk());
    },
    hex: function (t) {
      return typeof t == "string" && !!t.match(ey.hex);
    },
  },
  mk = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      VS(t, n, r, i, o);
      return;
    }
    var a = [
        "integer",
        "float",
        "array",
        "regexp",
        "object",
        "method",
        "email",
        "number",
        "date",
        "url",
        "hex",
      ],
      u = t.type;
    a.indexOf(u) > -1
      ? ba[u](n) || i.push(fn(o.messages.types[u], t.fullField, t.type))
      : u &&
        typeof n !== t.type &&
        i.push(fn(o.messages.types[u], t.fullField, t.type));
  },
  gk = function (t, n, r, i, o) {
    var a = typeof t.len == "number",
      u = typeof t.min == "number",
      l = typeof t.max == "number",
      s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      d = null,
      f = typeof n == "number",
      h = typeof n == "string",
      v = Array.isArray(n);
    if ((f ? (d = "number") : h ? (d = "string") : v && (d = "array"), !d))
      return !1;
    v && (c = n.length),
      h && (c = n.replace(s, "_").length),
      a
        ? c !== t.len && i.push(fn(o.messages[d].len, t.fullField, t.len))
        : u && !l && c < t.min
        ? i.push(fn(o.messages[d].min, t.fullField, t.min))
        : l && !u && c > t.max
        ? i.push(fn(o.messages[d].max, t.fullField, t.max))
        : u &&
          l &&
          (c < t.min || c > t.max) &&
          i.push(fn(o.messages[d].range, t.fullField, t.min, t.max));
  },
  Yi = "enum",
  yk = function (t, n, r, i, o) {
    (t[Yi] = Array.isArray(t[Yi]) ? t[Yi] : []),
      t[Yi].indexOf(n) === -1 &&
        i.push(fn(o.messages[Yi], t.fullField, t[Yi].join(", ")));
  },
  wk = function (t, n, r, i, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(fn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == "string") {
        var a = new RegExp(t.pattern);
        a.test(n) ||
          i.push(fn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  Se = {
    required: VS,
    whitespace: pk,
    type: mk,
    range: gk,
    enum: yk,
    pattern: wk,
  },
  Sk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n, "string") && !t.required) return r();
      Se.required(t, n, i, a, o, "string"),
        St(n, "string") ||
          (Se.type(t, n, i, a, o),
          Se.range(t, n, i, a, o),
          Se.pattern(t, n, i, a, o),
          t.whitespace === !0 && Se.whitespace(t, n, i, a, o));
    }
    r(a);
  },
  bk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o), n !== void 0 && Se.type(t, n, i, a, o);
    }
    r(a);
  },
  Ck = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if ((n === "" && (n = void 0), St(n) && !t.required)) return r();
      Se.required(t, n, i, a, o),
        n !== void 0 && (Se.type(t, n, i, a, o), Se.range(t, n, i, a, o));
    }
    r(a);
  },
  Ek = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o), n !== void 0 && Se.type(t, n, i, a, o);
    }
    r(a);
  },
  xk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o), St(n) || Se.type(t, n, i, a, o);
    }
    r(a);
  },
  Ok = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o),
        n !== void 0 && (Se.type(t, n, i, a, o), Se.range(t, n, i, a, o));
    }
    r(a);
  },
  Pk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o),
        n !== void 0 && (Se.type(t, n, i, a, o), Se.range(t, n, i, a, o));
    }
    r(a);
  },
  Rk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (n == null && !t.required) return r();
      Se.required(t, n, i, a, o, "array"),
        n != null && (Se.type(t, n, i, a, o), Se.range(t, n, i, a, o));
    }
    r(a);
  },
  kk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o), n !== void 0 && Se.type(t, n, i, a, o);
    }
    r(a);
  },
  Mk = "enum",
  Tk = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o), n !== void 0 && Se[Mk](t, n, i, a, o);
    }
    r(a);
  },
  $k = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n, "string") && !t.required) return r();
      Se.required(t, n, i, a, o), St(n, "string") || Se.pattern(t, n, i, a, o);
    }
    r(a);
  },
  Ak = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n, "date") && !t.required) return r();
      if ((Se.required(t, n, i, a, o), !St(n, "date"))) {
        var l;
        n instanceof Date ? (l = n) : (l = new Date(n)),
          Se.type(t, l, i, a, o),
          l && Se.range(t, l.getTime(), i, a, o);
      }
    }
    r(a);
  },
  Fk = function (t, n, r, i, o) {
    var a = [],
      u = Array.isArray(n) ? "array" : typeof n;
    Se.required(t, n, i, a, o, u), r(a);
  },
  qf = function (t, n, r, i, o) {
    var a = t.type,
      u = [],
      l = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (l) {
      if (St(n, a) && !t.required) return r();
      Se.required(t, n, i, u, o, a), St(n, a) || Se.type(t, n, i, u, o);
    }
    r(u);
  },
  _k = function (t, n, r, i, o) {
    var a = [],
      u = t.required || (!t.required && i.hasOwnProperty(t.field));
    if (u) {
      if (St(n) && !t.required) return r();
      Se.required(t, n, i, a, o);
    }
    r(a);
  },
  Na = {
    string: Sk,
    method: bk,
    number: Ck,
    boolean: Ek,
    regexp: xk,
    integer: Ok,
    float: Pk,
    array: Rk,
    object: kk,
    enum: Tk,
    pattern: $k,
    date: Ak,
    url: qf,
    hex: qf,
    email: qf,
    required: Fk,
    any: _k,
  };
function Ah() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid",
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s",
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters",
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s",
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length",
    },
    pattern: { mismatch: "%s value %s does not match pattern %s" },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var Fh = Ah(),
  Lu = (function () {
    function e(n) {
      (this.rules = null), (this._messages = Fh), this.define(n);
    }
    var t = e.prototype;
    return (
      (t.define = function (r) {
        var i = this;
        if (!r) throw new Error("Cannot configure a schema with no rules");
        if (typeof r != "object" || Array.isArray(r))
          throw new Error("Rules must be an object");
        (this.rules = {}),
          Object.keys(r).forEach(function (o) {
            var a = r[o];
            i.rules[o] = Array.isArray(a) ? a : [a];
          });
      }),
      (t.messages = function (r) {
        return r && (this._messages = Jg(Ah(), r)), this._messages;
      }),
      (t.validate = function (r, i, o) {
        var a = this;
        i === void 0 && (i = {}), o === void 0 && (o = function () {});
        var u = r,
          l = i,
          s = o;
        if (
          (typeof l == "function" && ((s = l), (l = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return s && s(null, u), Promise.resolve(u);
        function c(y) {
          var b = [],
            m = {};
          function p(w) {
            if (Array.isArray(w)) {
              var x;
              b = (x = b).concat.apply(x, w);
            } else b.push(w);
          }
          for (var g = 0; g < y.length; g++) p(y[g]);
          b.length ? ((m = $h(b)), s(b, m)) : s(null, u);
        }
        if (l.messages) {
          var d = this.messages();
          d === Fh && (d = Ah()), Jg(d, l.messages), (l.messages = d);
        } else l.messages = this.messages();
        var f = {},
          h = l.keys || Object.keys(this.rules);
        h.forEach(function (y) {
          var b = a.rules[y],
            m = u[y];
          b.forEach(function (p) {
            var g = p;
            typeof g.transform == "function" &&
              (u === r && (u = Ri({}, u)), (m = u[y] = g.transform(m))),
              typeof g == "function" ? (g = { validator: g }) : (g = Ri({}, g)),
              (g.validator = a.getValidationMethod(g)),
              g.validator &&
                ((g.field = y),
                (g.fullField = g.fullField || y),
                (g.type = a.getType(g)),
                (f[y] = f[y] || []),
                f[y].push({ rule: g, value: m, source: u, field: y }));
          });
        });
        var v = {};
        return fk(
          f,
          l,
          function (y, b) {
            var m = y.rule,
              p =
                (m.type === "object" || m.type === "array") &&
                (typeof m.fields == "object" ||
                  typeof m.defaultField == "object");
            (p = p && (m.required || (!m.required && y.value))),
              (m.field = y.field);
            function g(C, E) {
              return Ri({}, E, {
                fullField: m.fullField + "." + C,
                fullFields: m.fullFields ? [].concat(m.fullFields, [C]) : [C],
              });
            }
            function w(C) {
              C === void 0 && (C = []);
              var E = Array.isArray(C) ? C : [C];
              !l.suppressWarning &&
                E.length &&
                e.warning("async-validator:", E),
                E.length && m.message !== void 0 && (E = [].concat(m.message));
              var k = E.map(Zg(m, u));
              if (l.first && k.length) return (v[m.field] = 1), b(k);
              if (!p) b(k);
              else {
                if (m.required && !y.value)
                  return (
                    m.message !== void 0
                      ? (k = [].concat(m.message).map(Zg(m, u)))
                      : l.error &&
                        (k = [l.error(m, fn(l.messages.required, m.field))]),
                    b(k)
                  );
                var M = {};
                m.defaultField &&
                  Object.keys(y.value).map(function (P) {
                    M[P] = m.defaultField;
                  }),
                  (M = Ri({}, M, y.rule.fields));
                var T = {};
                Object.keys(M).forEach(function (P) {
                  var O = M[P],
                    R = Array.isArray(O) ? O : [O];
                  T[P] = R.map(g.bind(null, P));
                });
                var A = new e(T);
                A.messages(l.messages),
                  y.rule.options &&
                    ((y.rule.options.messages = l.messages),
                    (y.rule.options.error = l.error)),
                  A.validate(y.value, y.rule.options || l, function (P) {
                    var O = [];
                    k && k.length && O.push.apply(O, k),
                      P && P.length && O.push.apply(O, P),
                      b(O.length ? O : null);
                  });
              }
            }
            var x;
            if (m.asyncValidator)
              x = m.asyncValidator(m, y.value, w, y.source, l);
            else if (m.validator) {
              try {
                x = m.validator(m, y.value, w, y.source, l);
              } catch (C) {
                console.error == null || console.error(C),
                  l.suppressValidatorError ||
                    setTimeout(function () {
                      throw C;
                    }, 0),
                  w(C.message);
              }
              x === !0
                ? w()
                : x === !1
                ? w(
                    typeof m.message == "function"
                      ? m.message(m.fullField || m.field)
                      : m.message || (m.fullField || m.field) + " fails"
                  )
                : x instanceof Array
                ? w(x)
                : x instanceof Error && w(x.message);
            }
            x &&
              x.then &&
              x.then(
                function () {
                  return w();
                },
                function (C) {
                  return w(C);
                }
              );
          },
          function (y) {
            c(y);
          },
          u
        );
      }),
      (t.getType = function (r) {
        if (
          (r.type === void 0 &&
            r.pattern instanceof RegExp &&
            (r.type = "pattern"),
          typeof r.validator != "function" &&
            r.type &&
            !Na.hasOwnProperty(r.type))
        )
          throw new Error(fn("Unknown rule type %s", r.type));
        return r.type || "string";
      }),
      (t.getValidationMethod = function (r) {
        if (typeof r.validator == "function") return r.validator;
        var i = Object.keys(r),
          o = i.indexOf("message");
        return (
          o !== -1 && i.splice(o, 1),
          i.length === 1 && i[0] === "required"
            ? Na.required
            : Na[this.getType(r)] || void 0
        );
      }),
      e
    );
  })();
Lu.register = function (t, n) {
  if (typeof n != "function")
    throw new Error(
      "Cannot register a validator by type, validator is not a function"
    );
  Na[t] = n;
};
Lu.warning = uk;
Lu.messages = Fh;
Lu.validators = Na;
var on = "'${name}' is not a valid ${type}",
  QS = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: on,
      method: on,
      array: on,
      object: on,
      number: on,
      date: on,
      boolean: on,
      integer: on,
      float: on,
      regexp: on,
      email: on,
      url: on,
      hex: on,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  };
function WS(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function _h(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Nk(e) {
  if (Array.isArray(e)) return _h(e);
}
function KS(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Fv(e, t) {
  if (e) {
    if (typeof e == "string") return _h(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _h(e, t);
  }
}
function Ik() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lk(e) {
  return Nk(e) || KS(e) || Fv(e) || Ik();
}
function GS(e) {
  if (Array.isArray(e)) return e;
}
function YS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dk(e) {
  return GS(e) || KS(e) || Fv(e) || YS();
}
function XS(e, t, n, r) {
  if (!t.length) return n;
  var i = Dk(t),
    o = i[0],
    a = i.slice(1),
    u;
  return (
    !e && typeof o == "number"
      ? (u = [])
      : Array.isArray(e)
      ? (u = Lk(e))
      : (u = Iu({}, e)),
    r && n === void 0 && a.length === 1
      ? delete u[o][a[0]]
      : (u[o] = XS(u[o], a, n, r)),
    u
  );
}
function jk(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !WS(e, t.slice(0, -1))
    ? e
    : XS(e, t, n, r);
}
function Mc(e) {
  return Array.isArray(e)
    ? Uk(e)
    : wt(e) === "object" && e !== null
    ? zk(e)
    : e;
}
function zk(e) {
  if (Object.getPrototypeOf(e) === Object.prototype) {
    var t = {};
    for (var n in e) t[n] = Mc(e[n]);
    return t;
  }
  return e;
}
function Uk(e) {
  return e.map(function (t) {
    return Mc(t);
  });
}
function lt(e) {
  return kh(e);
}
function Gr(e, t) {
  var n = WS(e, t);
  return n;
}
function jr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    i = jk(e, t, n, r);
  return i;
}
function ty(e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      var i = Gr(e, r);
      n = jr(n, r, i);
    }),
    n
  );
}
function Ia(e, t) {
  return (
    e &&
    e.some(function (n) {
      return JS(n, t);
    })
  );
}
function ny(e) {
  return (
    wt(e) === "object" &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function ZS(e, t) {
  var n = Array.isArray(e) ? de(e) : K({}, e);
  return (
    t &&
      Object.keys(t).forEach(function (r) {
        var i = n[r],
          o = t[r],
          a = ny(i) && ny(o);
        n[r] = a ? ZS(i, o || {}) : Mc(o);
      }),
    n
  );
}
function Dl(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return n.reduce(function (i, o) {
    return ZS(i, o);
  }, e);
}
function JS(e, t) {
  return !e || !t || e.length !== t.length
    ? !1
    : e.every(function (n, r) {
        return t[r] === n;
      });
}
function Hk(e, t) {
  if (e === t) return !0;
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    wt(e) !== "object" ||
    wt(t) !== "object"
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    i = new Set([].concat(n, r));
  return de(i).every(function (o) {
    var a = e[o],
      u = t[o];
    return typeof a == "function" && typeof u == "function" ? !0 : a === u;
  });
}
function qk(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && wt(t.target) === "object" && e in t.target
    ? t.target[e]
    : t;
}
function ry(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var i = e[t],
    o = t - n;
  return o > 0
    ? [].concat(
        de(e.slice(0, n)),
        [i],
        de(e.slice(n, t)),
        de(e.slice(t + 1, r))
      )
    : o < 0
    ? [].concat(
        de(e.slice(0, t)),
        de(e.slice(t + 1, n + 1)),
        [i],
        de(e.slice(n + 1, r))
      )
    : e;
}
var Bk = Lu;
function Vk(e, t) {
  return e.replace(/\$\{\w+\}/g, function (n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var iy = "CODE_LOGIC_ERROR";
function Nh(e, t, n, r, i) {
  return Ih.apply(this, arguments);
}
function Ih() {
  return (
    (Ih = kc(
      Mr().mark(function e(t, n, r, i, o) {
        var a, u, l, s, c, d, f, h, v;
        return Mr().wrap(
          function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  return (
                    (a = K({}, r)),
                    delete a.ruleIndex,
                    a.validator &&
                      ((u = a.validator),
                      (a.validator = function () {
                        try {
                          return u.apply(void 0, arguments);
                        } catch (m) {
                          return console.error(m), Promise.reject(iy);
                        }
                      })),
                    (l = null),
                    a &&
                      a.type === "array" &&
                      a.defaultField &&
                      ((l = a.defaultField), delete a.defaultField),
                    (s = new Bk(_e({}, t, [a]))),
                    (c = Dl({}, QS, i.validateMessages)),
                    s.messages(c),
                    (d = []),
                    (b.prev = 9),
                    (b.next = 12),
                    Promise.resolve(s.validate(_e({}, t, n), K({}, i)))
                  );
                case 12:
                  b.next = 17;
                  break;
                case 14:
                  (b.prev = 14),
                    (b.t0 = b.catch(9)),
                    b.t0.errors &&
                      (d = b.t0.errors.map(function (m, p) {
                        var g = m.message,
                          w = g === iy ? c.default : g;
                        return S.isValidElement(w)
                          ? S.cloneElement(w, { key: "error_".concat(p) })
                          : w;
                      }));
                case 17:
                  if (!(!d.length && l)) {
                    b.next = 22;
                    break;
                  }
                  return (
                    (b.next = 20),
                    Promise.all(
                      n.map(function (m, p) {
                        return Nh("".concat(t, ".").concat(p), m, l, i, o);
                      })
                    )
                  );
                case 20:
                  return (
                    (f = b.sent),
                    b.abrupt(
                      "return",
                      f.reduce(function (m, p) {
                        return [].concat(de(m), de(p));
                      }, [])
                    )
                  );
                case 22:
                  return (
                    (h = K(
                      K({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(", ") },
                      o
                    )),
                    (v = d.map(function (m) {
                      return typeof m == "string" ? Vk(m, h) : m;
                    })),
                    b.abrupt("return", v)
                  );
                case 25:
                case "end":
                  return b.stop();
              }
          },
          e,
          null,
          [[9, 14]]
        );
      })
    )),
    Ih.apply(this, arguments)
  );
}
function Qk(e, t, n, r, i, o) {
  var a = e.join("."),
    u = n
      .map(function (c, d) {
        var f = c.validator,
          h = K(K({}, c), {}, { ruleIndex: d });
        return (
          f &&
            (h.validator = function (v, y, b) {
              var m = !1,
                p = function () {
                  for (
                    var x = arguments.length, C = new Array(x), E = 0;
                    E < x;
                    E++
                  )
                    C[E] = arguments[E];
                  Promise.resolve().then(function () {
                    Er(
                      !m,
                      "Your validator function has already return a promise. `callback` will be ignored."
                    ),
                      m || b.apply(void 0, C);
                  });
                },
                g = f(v, y, p);
              (m =
                g &&
                typeof g.then == "function" &&
                typeof g.catch == "function"),
                Er(
                  m,
                  "`callback` is deprecated. Please return a promise instead."
                ),
                m &&
                  g
                    .then(function () {
                      b();
                    })
                    .catch(function (w) {
                      b(w || " ");
                    });
            }),
          h
        );
      })
      .sort(function (c, d) {
        var f = c.warningOnly,
          h = c.ruleIndex,
          v = d.warningOnly,
          y = d.ruleIndex;
        return !!f == !!v ? h - y : f ? 1 : -1;
      }),
    l;
  if (i === !0)
    l = new Promise(
      (function () {
        var c = kc(
          Mr().mark(function d(f, h) {
            var v, y, b;
            return Mr().wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    v = 0;
                  case 1:
                    if (!(v < u.length)) {
                      p.next = 12;
                      break;
                    }
                    return (y = u[v]), (p.next = 5), Nh(a, t, y, r, o);
                  case 5:
                    if (((b = p.sent), !b.length)) {
                      p.next = 9;
                      break;
                    }
                    return h([{ errors: b, rule: y }]), p.abrupt("return");
                  case 9:
                    (v += 1), (p.next = 1);
                    break;
                  case 12:
                    f([]);
                  case 13:
                  case "end":
                    return p.stop();
                }
            }, d);
          })
        );
        return function (d, f) {
          return c.apply(this, arguments);
        };
      })()
    );
  else {
    var s = u.map(function (c) {
      return Nh(a, t, c, r, o).then(function (d) {
        return { errors: d, rule: c };
      });
    });
    l = (i ? Kk(s) : Wk(s)).then(function (c) {
      return Promise.reject(c);
    });
  }
  return (
    l.catch(function (c) {
      return c;
    }),
    l
  );
}
function Wk(e) {
  return Lh.apply(this, arguments);
}
function Lh() {
  return (
    (Lh = kc(
      Mr().mark(function e(t) {
        return Mr().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.all(t).then(function (i) {
                    var o,
                      a = (o = []).concat.apply(o, de(i));
                    return a;
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    Lh.apply(this, arguments)
  );
}
function Kk(e) {
  return Dh.apply(this, arguments);
}
function Dh() {
  return (
    (Dh = kc(
      Mr().mark(function e(t) {
        var n;
        return Mr().wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (n = 0),
                  i.abrupt(
                    "return",
                    new Promise(function (o) {
                      t.forEach(function (a) {
                        a.then(function (u) {
                          u.errors.length && o([u]),
                            (n += 1),
                            n === t.length && o([]);
                        });
                      });
                    })
                  )
                );
              case 2:
              case "end":
                return i.stop();
            }
        }, e);
      })
    )),
    Dh.apply(this, arguments)
  );
}
var Gk = ["name"],
  Cn = [];
function oy(e, t, n, r, i, o) {
  return typeof e == "function"
    ? e(t, n, "source" in o ? { source: o.source } : {})
    : r !== i;
}
var _v = (function (e) {
  Ov(n, e);
  var t = Pv(n);
  function n(r) {
    var i;
    if (
      (Ar(this, n),
      (i = t.call(this, r)),
      (i.state = { resetCount: 0 }),
      (i.cancelRegisterFunc = null),
      (i.mounted = !1),
      (i.touched = !1),
      (i.dirty = !1),
      (i.validatePromise = null),
      (i.prevValidating = void 0),
      (i.errors = Cn),
      (i.warnings = Cn),
      (i.cancelRegister = function () {
        var l = i.props,
          s = l.preserve,
          c = l.isListField,
          d = l.name;
        i.cancelRegisterFunc && i.cancelRegisterFunc(c, s, lt(d)),
          (i.cancelRegisterFunc = null);
      }),
      (i.getNamePath = function () {
        var l = i.props,
          s = l.name,
          c = l.fieldContext,
          d = c.prefixName,
          f = d === void 0 ? [] : d;
        return s !== void 0 ? [].concat(de(f), de(s)) : [];
      }),
      (i.getRules = function () {
        var l = i.props,
          s = l.rules,
          c = s === void 0 ? [] : s,
          d = l.fieldContext;
        return c.map(function (f) {
          return typeof f == "function" ? f(d) : f;
        });
      }),
      (i.refresh = function () {
        i.mounted &&
          i.setState(function (l) {
            var s = l.resetCount;
            return { resetCount: s + 1 };
          });
      }),
      (i.triggerMetaEvent = function (l) {
        var s = i.props.onMetaChange;
        s == null || s(K(K({}, i.getMeta()), {}, { destroy: l }));
      }),
      (i.onStoreChange = function (l, s, c) {
        var d = i.props,
          f = d.shouldUpdate,
          h = d.dependencies,
          v = h === void 0 ? [] : h,
          y = d.onReset,
          b = c.store,
          m = i.getNamePath(),
          p = i.getValue(l),
          g = i.getValue(b),
          w = s && Ia(s, m);
        switch (
          (c.type === "valueUpdate" &&
            c.source === "external" &&
            p !== g &&
            ((i.touched = !0),
            (i.dirty = !0),
            (i.validatePromise = null),
            (i.errors = Cn),
            (i.warnings = Cn),
            i.triggerMetaEvent()),
          c.type)
        ) {
          case "reset":
            if (!s || w) {
              (i.touched = !1),
                (i.dirty = !1),
                (i.validatePromise = null),
                (i.errors = Cn),
                (i.warnings = Cn),
                i.triggerMetaEvent(),
                y == null || y(),
                i.refresh();
              return;
            }
            break;
          case "remove": {
            if (f) {
              i.reRender();
              return;
            }
            break;
          }
          case "setField": {
            if (w) {
              var x = c.data;
              "touched" in x && (i.touched = x.touched),
                "validating" in x &&
                  !("originRCField" in x) &&
                  (i.validatePromise = x.validating
                    ? Promise.resolve([])
                    : null),
                "errors" in x && (i.errors = x.errors || Cn),
                "warnings" in x && (i.warnings = x.warnings || Cn),
                (i.dirty = !0),
                i.triggerMetaEvent(),
                i.reRender();
              return;
            }
            if (f && !m.length && oy(f, l, b, p, g, c)) {
              i.reRender();
              return;
            }
            break;
          }
          case "dependenciesUpdate": {
            var C = v.map(lt);
            if (
              C.some(function (E) {
                return Ia(c.relatedFields, E);
              })
            ) {
              i.reRender();
              return;
            }
            break;
          }
          default:
            if (w || ((!v.length || m.length || f) && oy(f, l, b, p, g, c))) {
              i.reRender();
              return;
            }
            break;
        }
        f === !0 && i.reRender();
      }),
      (i.validateRules = function (l) {
        var s = i.getNamePath(),
          c = i.getValue(),
          d = Promise.resolve().then(function () {
            if (!i.mounted) return [];
            var f = i.props,
              h = f.validateFirst,
              v = h === void 0 ? !1 : h,
              y = f.messageVariables,
              b = l || {},
              m = b.triggerName,
              p = i.getRules();
            m &&
              (p = p
                .filter(function (w) {
                  return w;
                })
                .filter(function (w) {
                  var x = w.validateTrigger;
                  if (!x) return !0;
                  var C = kh(x);
                  return C.includes(m);
                }));
            var g = Qk(s, c, p, l, v, y);
            return (
              g
                .catch(function (w) {
                  return w;
                })
                .then(function () {
                  var w =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : Cn;
                  if (i.validatePromise === d) {
                    var x;
                    i.validatePromise = null;
                    var C = [],
                      E = [];
                    (x = w.forEach) === null ||
                      x === void 0 ||
                      x.call(w, function (k) {
                        var M = k.rule.warningOnly,
                          T = k.errors,
                          A = T === void 0 ? Cn : T;
                        M ? E.push.apply(E, de(A)) : C.push.apply(C, de(A));
                      }),
                      (i.errors = C),
                      (i.warnings = E),
                      i.triggerMetaEvent(),
                      i.reRender();
                  }
                }),
              g
            );
          });
        return (
          (i.validatePromise = d),
          (i.dirty = !0),
          (i.errors = Cn),
          (i.warnings = Cn),
          i.triggerMetaEvent(),
          i.reRender(),
          d
        );
      }),
      (i.isFieldValidating = function () {
        return !!i.validatePromise;
      }),
      (i.isFieldTouched = function () {
        return i.touched;
      }),
      (i.isFieldDirty = function () {
        if (i.dirty || i.props.initialValue !== void 0) return !0;
        var l = i.props.fieldContext,
          s = l.getInternalHooks(Pi),
          c = s.getInitialValue;
        return c(i.getNamePath()) !== void 0;
      }),
      (i.getErrors = function () {
        return i.errors;
      }),
      (i.getWarnings = function () {
        return i.warnings;
      }),
      (i.isListField = function () {
        return i.props.isListField;
      }),
      (i.isList = function () {
        return i.props.isList;
      }),
      (i.isPreserve = function () {
        return i.props.preserve;
      }),
      (i.getMeta = function () {
        i.prevValidating = i.isFieldValidating();
        var l = {
          touched: i.isFieldTouched(),
          validating: i.prevValidating,
          errors: i.errors,
          warnings: i.warnings,
          name: i.getNamePath(),
        };
        return l;
      }),
      (i.getOnlyChild = function (l) {
        if (typeof l == "function") {
          var s = i.getMeta();
          return K(
            K(
              {},
              i.getOnlyChild(l(i.getControlled(), s, i.props.fieldContext))
            ),
            {},
            { isFunction: !0 }
          );
        }
        var c = gh(l);
        return c.length !== 1 || !S.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 };
      }),
      (i.getValue = function (l) {
        var s = i.props.fieldContext.getFieldsValue,
          c = i.getNamePath();
        return Gr(l || s(!0), c);
      }),
      (i.getControlled = function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          s = i.props,
          c = s.trigger,
          d = s.validateTrigger,
          f = s.getValueFromEvent,
          h = s.normalize,
          v = s.valuePropName,
          y = s.getValueProps,
          b = s.fieldContext,
          m = d !== void 0 ? d : b.validateTrigger,
          p = i.getNamePath(),
          g = b.getInternalHooks,
          w = b.getFieldsValue,
          x = g(Pi),
          C = x.dispatch,
          E = i.getValue(),
          k =
            y ||
            function (P) {
              return _e({}, v, P);
            },
          M = l[c],
          T = K(K({}, l), k(E));
        T[c] = function () {
          (i.touched = !0), (i.dirty = !0), i.triggerMetaEvent();
          for (var P, O = arguments.length, R = new Array(O), $ = 0; $ < O; $++)
            R[$] = arguments[$];
          f ? (P = f.apply(void 0, R)) : (P = qk.apply(void 0, [v].concat(R))),
            h && (P = h(P, E, w(!0))),
            C({ type: "updateValue", namePath: p, value: P }),
            M && M.apply(void 0, R);
        };
        var A = kh(m || []);
        return (
          A.forEach(function (P) {
            var O = T[P];
            T[P] = function () {
              O && O.apply(void 0, arguments);
              var R = i.props.rules;
              R &&
                R.length &&
                C({ type: "validateField", namePath: p, triggerName: P });
            };
          }),
          T
        );
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        a = o(Pi),
        u = a.initEntityValue;
      u(MS(i));
    }
    return i;
  }
  return (
    Fr(n, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            o = i.shouldUpdate,
            a = i.fieldContext;
          if (((this.mounted = !0), a)) {
            var u = a.getInternalHooks,
              l = u(Pi),
              s = l.registerField;
            this.cancelRegisterFunc = s(this);
          }
          o === !0 && this.reRender();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
        },
      },
      {
        key: "reRender",
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.state.resetCount,
            o = this.props.children,
            a = this.getOnlyChild(o),
            u = a.child,
            l = a.isFunction,
            s;
          return (
            l
              ? (s = u)
              : S.isValidElement(u)
              ? (s = S.cloneElement(u, this.getControlled(u.props)))
              : (Er(!u, "`children` of Field is not validate ReactElement."),
                (s = u)),
            S.createElement(S.Fragment, { key: i }, s)
          );
        },
      },
    ]),
    n
  );
})(S.Component);
_v.contextType = Uo;
_v.defaultProps = { trigger: "onChange", valuePropName: "value" };
function eb(e) {
  var t = e.name,
    n = jo(e, Gk),
    r = S.useContext(Uo),
    i = t !== void 0 ? lt(t) : void 0,
    o = "keep";
  return (
    n.isListField || (o = "_".concat((i || []).join("_"))),
    S.createElement(_v, It({ key: o, name: i }, n, { fieldContext: r }))
  );
}
var Yk = S.createContext(null),
  Xk = function (t) {
    var n = t.name,
      r = t.initialValue,
      i = t.children,
      o = t.rules,
      a = t.validateTrigger,
      u = S.useContext(Uo),
      l = S.useRef({ keys: [], id: 0 }),
      s = l.current,
      c = S.useMemo(
        function () {
          var v = lt(u.prefixName) || [];
          return [].concat(de(v), de(lt(n)));
        },
        [u.prefixName, n]
      ),
      d = S.useMemo(
        function () {
          return K(K({}, u), {}, { prefixName: c });
        },
        [u, c]
      ),
      f = S.useMemo(
        function () {
          return {
            getKey: function (y) {
              var b = c.length,
                m = y[b];
              return [s.keys[m], y.slice(b + 1)];
            },
          };
        },
        [c]
      );
    if (typeof i != "function")
      return Er(!1, "Form.List only accepts function as children."), null;
    var h = function (y, b, m) {
      var p = m.source;
      return p === "internal" ? !1 : y !== b;
    };
    return S.createElement(
      Yk.Provider,
      { value: f },
      S.createElement(
        Uo.Provider,
        { value: d },
        S.createElement(
          eb,
          {
            name: [],
            shouldUpdate: h,
            rules: o,
            validateTrigger: a,
            initialValue: r,
            isList: !0,
          },
          function (v, y) {
            var b = v.value,
              m = b === void 0 ? [] : b,
              p = v.onChange,
              g = u.getFieldValue,
              w = function () {
                var k = g(c || []);
                return k || [];
              },
              x = {
                add: function (k, M) {
                  var T = w();
                  M >= 0 && M <= T.length
                    ? ((s.keys = [].concat(
                        de(s.keys.slice(0, M)),
                        [s.id],
                        de(s.keys.slice(M))
                      )),
                      p([].concat(de(T.slice(0, M)), [k], de(T.slice(M)))))
                    : ((s.keys = [].concat(de(s.keys), [s.id])),
                      p([].concat(de(T), [k]))),
                    (s.id += 1);
                },
                remove: function (k) {
                  var M = w(),
                    T = new Set(Array.isArray(k) ? k : [k]);
                  T.size <= 0 ||
                    ((s.keys = s.keys.filter(function (A, P) {
                      return !T.has(P);
                    })),
                    p(
                      M.filter(function (A, P) {
                        return !T.has(P);
                      })
                    ));
                },
                move: function (k, M) {
                  if (k !== M) {
                    var T = w();
                    k < 0 ||
                      k >= T.length ||
                      M < 0 ||
                      M >= T.length ||
                      ((s.keys = ry(s.keys, k, M)), p(ry(T, k, M)));
                  }
                },
              },
              C = m || [];
            return (
              Array.isArray(C) || (C = []),
              i(
                C.map(function (E, k) {
                  var M = s.keys[k];
                  return (
                    M === void 0 &&
                      ((s.keys[k] = s.id), (M = s.keys[k]), (s.id += 1)),
                    { name: k, key: M, isListField: !0 }
                  );
                }),
                x,
                y
              )
            );
          }
        )
      )
    );
  };
function Zk(e) {
  var t = !1,
    n = e.length,
    r = [];
  return e.length
    ? new Promise(function (i, o) {
        e.forEach(function (a, u) {
          a.catch(function (l) {
            return (t = !0), l;
          }).then(function (l) {
            (n -= 1), (r[u] = l), !(n > 0) && (t && o(r), i(r));
          });
        });
      })
    : Promise.resolve([]);
}
var tb = "__@field_split__";
function Bf(e) {
  return e
    .map(function (t) {
      return "".concat(wt(t), ":").concat(t);
    })
    .join(tb);
}
var Xi = (function () {
    function e() {
      Ar(this, e), (this.kvs = new Map());
    }
    return (
      Fr(e, [
        {
          key: "set",
          value: function (n, r) {
            this.kvs.set(Bf(n), r);
          },
        },
        {
          key: "get",
          value: function (n) {
            return this.kvs.get(Bf(n));
          },
        },
        {
          key: "update",
          value: function (n, r) {
            var i = this.get(n),
              o = r(i);
            o ? this.set(n, o) : this.delete(n);
          },
        },
        {
          key: "delete",
          value: function (n) {
            this.kvs.delete(Bf(n));
          },
        },
        {
          key: "map",
          value: function (n) {
            return de(this.kvs.entries()).map(function (r) {
              var i = we(r, 2),
                o = i[0],
                a = i[1],
                u = o.split(tb);
              return n({
                key: u.map(function (l) {
                  var s = l.match(/^([^:]*):(.*)$/),
                    c = we(s, 3),
                    d = c[1],
                    f = c[2];
                  return d === "number" ? Number(f) : f;
                }),
                value: a,
              });
            });
          },
        },
        {
          key: "toJSON",
          value: function () {
            var n = {};
            return (
              this.map(function (r) {
                var i = r.key,
                  o = r.value;
                return (n[i.join(".")] = o), null;
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Jk = ["name", "errors"],
  eM = Fr(function e(t) {
    var n = this;
    Ar(this, e),
      (this.formHooked = !1),
      (this.forceRootUpdate = void 0),
      (this.subscribable = !0),
      (this.store = {}),
      (this.fieldEntities = []),
      (this.initialValues = {}),
      (this.callbacks = {}),
      (this.validateMessages = null),
      (this.preserve = null),
      (this.lastValidatePromise = null),
      (this.getForm = function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      (this.getInternalHooks = function (r) {
        return r === Pi
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (Er(
              !1,
              "`getInternalHooks` is internal usage. Should not call directly."
            ),
            null);
      }),
      (this.useSubscribe = function (r) {
        n.subscribable = r;
      }),
      (this.prevWithoutPreserves = null),
      (this.setInitialValues = function (r, i) {
        if (((n.initialValues = r || {}), i)) {
          var o,
            a = Dl({}, r, n.store);
          (o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (u) {
              var l = u.key;
              a = jr(a, l, Gr(r, l));
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a);
        }
      }),
      (this.destroyForm = function () {
        var r = new Xi();
        n.getFieldEntities(!0).forEach(function (i) {
          n.isMergedPreserve(i.isPreserve()) || r.set(i.getNamePath(), !0);
        }),
          (n.prevWithoutPreserves = r);
      }),
      (this.getInitialValue = function (r) {
        var i = Gr(n.initialValues, r);
        return r.length ? Mc(i) : i;
      }),
      (this.setCallbacks = function (r) {
        n.callbacks = r;
      }),
      (this.setValidateMessages = function (r) {
        n.validateMessages = r;
      }),
      (this.setPreserve = function (r) {
        n.preserve = r;
      }),
      (this.watchList = []),
      (this.registerWatch = function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (i) {
              return i !== r;
            });
          }
        );
      }),
      (this.notifyWatch = function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (n.watchList.length) {
          var i = n.getFieldsValue();
          n.watchList.forEach(function (o) {
            o(i, r);
          });
        }
      }),
      (this.timeoutId = null),
      (this.warningUnhooked = function () {}),
      (this.updateStore = function (r) {
        n.store = r;
      }),
      (this.getFieldEntities = function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        return r
          ? n.fieldEntities.filter(function (i) {
              return i.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      (this.getFieldsMap = function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          i = new Xi();
        return (
          n.getFieldEntities(r).forEach(function (o) {
            var a = o.getNamePath();
            i.set(a, o);
          }),
          i
        );
      }),
      (this.getFieldEntitiesForNamePathList = function (r) {
        if (!r) return n.getFieldEntities(!0);
        var i = n.getFieldsMap(!0);
        return r.map(function (o) {
          var a = lt(o);
          return i.get(a) || { INVALIDATE_NAME_PATH: lt(o) };
        });
      }),
      (this.getFieldsValue = function (r, i) {
        if ((n.warningUnhooked(), r === !0 && !i)) return n.store;
        var o = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
          a = [];
        return (
          o.forEach(function (u) {
            var l,
              s =
                "INVALIDATE_NAME_PATH" in u
                  ? u.INVALIDATE_NAME_PATH
                  : u.getNamePath();
            if (
              !(
                !r &&
                !((l = u.isListField) === null || l === void 0) &&
                l.call(u)
              )
            )
              if (!i) a.push(s);
              else {
                var c = "getMeta" in u ? u.getMeta() : null;
                i(c) && a.push(s);
              }
          }),
          ty(n.store, a.map(lt))
        );
      }),
      (this.getFieldValue = function (r) {
        n.warningUnhooked();
        var i = lt(r);
        return Gr(n.store, i);
      }),
      (this.getFieldsError = function (r) {
        n.warningUnhooked();
        var i = n.getFieldEntitiesForNamePathList(r);
        return i.map(function (o, a) {
          return o && !("INVALIDATE_NAME_PATH" in o)
            ? {
                name: o.getNamePath(),
                errors: o.getErrors(),
                warnings: o.getWarnings(),
              }
            : { name: lt(r[a]), errors: [], warnings: [] };
        });
      }),
      (this.getFieldError = function (r) {
        n.warningUnhooked();
        var i = lt(r),
          o = n.getFieldsError([i])[0];
        return o.errors;
      }),
      (this.getFieldWarning = function (r) {
        n.warningUnhooked();
        var i = lt(r),
          o = n.getFieldsError([i])[0];
        return o.warnings;
      }),
      (this.isFieldsTouched = function () {
        n.warningUnhooked();
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
          i[o] = arguments[o];
        var a = i[0],
          u = i[1],
          l,
          s = !1;
        i.length === 0
          ? (l = null)
          : i.length === 1
          ? Array.isArray(a)
            ? ((l = a.map(lt)), (s = !1))
            : ((l = null), (s = a))
          : ((l = a.map(lt)), (s = u));
        var c = n.getFieldEntities(!0),
          d = function (b) {
            return b.isFieldTouched();
          };
        if (!l) return s ? c.every(d) : c.some(d);
        var f = new Xi();
        l.forEach(function (y) {
          f.set(y, []);
        }),
          c.forEach(function (y) {
            var b = y.getNamePath();
            l.forEach(function (m) {
              m.every(function (p, g) {
                return b[g] === p;
              }) &&
                f.update(m, function (p) {
                  return [].concat(de(p), [y]);
                });
            });
          });
        var h = function (b) {
            return b.some(d);
          },
          v = f.map(function (y) {
            var b = y.value;
            return b;
          });
        return s ? v.every(h) : v.some(h);
      }),
      (this.isFieldTouched = function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r]);
      }),
      (this.isFieldsValidating = function (r) {
        n.warningUnhooked();
        var i = n.getFieldEntities();
        if (!r)
          return i.some(function (a) {
            return a.isFieldValidating();
          });
        var o = r.map(lt);
        return i.some(function (a) {
          var u = a.getNamePath();
          return Ia(o, u) && a.isFieldValidating();
        });
      }),
      (this.isFieldValidating = function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r]);
      }),
      (this.resetWithFieldInitialValue = function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = new Xi(),
          o = n.getFieldEntities(!0);
        o.forEach(function (l) {
          var s = l.props.initialValue,
            c = l.getNamePath();
          if (s !== void 0) {
            var d = i.get(c) || new Set();
            d.add({ entity: l, value: s }), i.set(c, d);
          }
        });
        var a = function (s) {
            s.forEach(function (c) {
              var d = c.props.initialValue;
              if (d !== void 0) {
                var f = c.getNamePath(),
                  h = n.getInitialValue(f);
                if (h !== void 0)
                  Er(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      f.join("."),
                      "'. Field can not overwrite it."
                    )
                  );
                else {
                  var v = i.get(f);
                  if (v && v.size > 1)
                    Er(
                      !1,
                      "Multiple Field with path '".concat(
                        f.join("."),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    );
                  else if (v) {
                    var y = n.getFieldValue(f);
                    (!r.skipExist || y === void 0) &&
                      n.updateStore(jr(n.store, f, de(v)[0].value));
                  }
                }
              }
            });
          },
          u;
        r.entities
          ? (u = r.entities)
          : r.namePathList
          ? ((u = []),
            r.namePathList.forEach(function (l) {
              var s = i.get(l);
              if (s) {
                var c;
                (c = u).push.apply(
                  c,
                  de(
                    de(s).map(function (d) {
                      return d.entity;
                    })
                  )
                );
              }
            }))
          : (u = o),
          a(u);
      }),
      (this.resetFields = function (r) {
        n.warningUnhooked();
        var i = n.store;
        if (!r) {
          n.updateStore(Dl({}, n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(i, null, { type: "reset" }),
            n.notifyWatch();
          return;
        }
        var o = r.map(lt);
        o.forEach(function (a) {
          var u = n.getInitialValue(a);
          n.updateStore(jr(n.store, a, u));
        }),
          n.resetWithFieldInitialValue({ namePathList: o }),
          n.notifyObservers(i, o, { type: "reset" }),
          n.notifyWatch(o);
      }),
      (this.setFields = function (r) {
        n.warningUnhooked();
        var i = n.store,
          o = [];
        r.forEach(function (a) {
          var u = a.name;
          a.errors;
          var l = jo(a, Jk),
            s = lt(u);
          o.push(s),
            "value" in l && n.updateStore(jr(n.store, s, l.value)),
            n.notifyObservers(i, [s], { type: "setField", data: a });
        }),
          n.notifyWatch(o);
      }),
      (this.getFields = function () {
        var r = n.getFieldEntities(!0),
          i = r.map(function (o) {
            var a = o.getNamePath(),
              u = o.getMeta(),
              l = K(K({}, u), {}, { name: a, value: n.getFieldValue(a) });
            return Object.defineProperty(l, "originRCField", { value: !0 }), l;
          });
        return i;
      }),
      (this.initEntityValue = function (r) {
        var i = r.props.initialValue;
        if (i !== void 0) {
          var o = r.getNamePath(),
            a = Gr(n.store, o);
          a === void 0 && n.updateStore(jr(n.store, o, i));
        }
      }),
      (this.isMergedPreserve = function (r) {
        var i = r !== void 0 ? r : n.preserve;
        return i ?? !0;
      }),
      (this.registerField = function (r) {
        n.fieldEntities.push(r);
        var i = r.getNamePath();
        if ((n.notifyWatch([i]), r.props.initialValue !== void 0)) {
          var o = n.store;
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(o, [r.getNamePath()], {
              type: "valueUpdate",
              source: "internal",
            });
        }
        return function (a, u) {
          var l =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (d) {
              return d !== r;
            })),
            !n.isMergedPreserve(u) && (!a || l.length > 1))
          ) {
            var s = a ? void 0 : n.getInitialValue(i);
            if (
              i.length &&
              n.getFieldValue(i) !== s &&
              n.fieldEntities.every(function (d) {
                return !JS(d.getNamePath(), i);
              })
            ) {
              var c = n.store;
              n.updateStore(jr(c, i, s, !0)),
                n.notifyObservers(c, [i], { type: "remove" }),
                n.triggerDependenciesUpdate(c, i);
            }
          }
          n.notifyWatch([i]);
        };
      }),
      (this.dispatch = function (r) {
        switch (r.type) {
          case "updateValue": {
            var i = r.namePath,
              o = r.value;
            n.updateValue(i, o);
            break;
          }
          case "validateField": {
            var a = r.namePath,
              u = r.triggerName;
            n.validateFields([a], { triggerName: u });
            break;
          }
        }
      }),
      (this.notifyObservers = function (r, i, o) {
        if (n.subscribable) {
          var a = K(K({}, o), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (u) {
            var l = u.onStoreChange;
            l(r, i, a);
          });
        } else n.forceRootUpdate();
      }),
      (this.triggerDependenciesUpdate = function (r, i) {
        var o = n.getDependencyChildrenFields(i);
        return (
          o.length && n.validateFields(o),
          n.notifyObservers(r, o, {
            type: "dependenciesUpdate",
            relatedFields: [i].concat(de(o)),
          }),
          o
        );
      }),
      (this.updateValue = function (r, i) {
        var o = lt(r),
          a = n.store;
        n.updateStore(jr(n.store, o, i)),
          n.notifyObservers(a, [o], {
            type: "valueUpdate",
            source: "internal",
          }),
          n.notifyWatch([o]);
        var u = n.triggerDependenciesUpdate(a, o),
          l = n.callbacks.onValuesChange;
        if (l) {
          var s = ty(n.store, [o]);
          l(s, n.getFieldsValue());
        }
        n.triggerOnFieldsChange([o].concat(de(u)));
      }),
      (this.setFieldsValue = function (r) {
        n.warningUnhooked();
        var i = n.store;
        if (r) {
          var o = Dl(n.store, r);
          n.updateStore(o);
        }
        n.notifyObservers(i, null, { type: "valueUpdate", source: "external" }),
          n.notifyWatch();
      }),
      (this.setFieldValue = function (r, i) {
        n.setFields([{ name: r, value: i }]);
      }),
      (this.getDependencyChildrenFields = function (r) {
        var i = new Set(),
          o = [],
          a = new Xi();
        n.getFieldEntities().forEach(function (l) {
          var s = l.props.dependencies;
          (s || []).forEach(function (c) {
            var d = lt(c);
            a.update(d, function () {
              var f =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set();
              return f.add(l), f;
            });
          });
        });
        var u = function l(s) {
          var c = a.get(s) || new Set();
          c.forEach(function (d) {
            if (!i.has(d)) {
              i.add(d);
              var f = d.getNamePath();
              d.isFieldDirty() && f.length && (o.push(f), l(f));
            }
          });
        };
        return u(r), o;
      }),
      (this.triggerOnFieldsChange = function (r, i) {
        var o = n.callbacks.onFieldsChange;
        if (o) {
          var a = n.getFields();
          if (i) {
            var u = new Xi();
            i.forEach(function (s) {
              var c = s.name,
                d = s.errors;
              u.set(c, d);
            }),
              a.forEach(function (s) {
                s.errors = u.get(s.name) || s.errors;
              });
          }
          var l = a.filter(function (s) {
            var c = s.name;
            return Ia(r, c);
          });
          o(l, a);
        }
      }),
      (this.validateFields = function (r, i) {
        n.warningUnhooked();
        var o = !!r,
          a = o ? r.map(lt) : [],
          u = [];
        n.getFieldEntities(!0).forEach(function (c) {
          if ((o || a.push(c.getNamePath()), i != null && i.recursive && o)) {
            var d = c.getNamePath();
            d.every(function (v, y) {
              return r[y] === v || r[y] === void 0;
            }) && a.push(d);
          }
          if (!(!c.props.rules || !c.props.rules.length)) {
            var f = c.getNamePath();
            if (!o || Ia(a, f)) {
              var h = c.validateRules(
                K({ validateMessages: K(K({}, QS), n.validateMessages) }, i)
              );
              u.push(
                h
                  .then(function () {
                    return { name: f, errors: [], warnings: [] };
                  })
                  .catch(function (v) {
                    var y,
                      b = [],
                      m = [];
                    return (
                      (y = v.forEach) === null ||
                        y === void 0 ||
                        y.call(v, function (p) {
                          var g = p.rule.warningOnly,
                            w = p.errors;
                          g ? m.push.apply(m, de(w)) : b.push.apply(b, de(w));
                        }),
                      b.length
                        ? Promise.reject({ name: f, errors: b, warnings: m })
                        : { name: f, errors: b, warnings: m }
                    );
                  })
              );
            }
          }
        });
        var l = Zk(u);
        (n.lastValidatePromise = l),
          l
            .catch(function (c) {
              return c;
            })
            .then(function (c) {
              var d = c.map(function (f) {
                var h = f.name;
                return h;
              });
              n.notifyObservers(n.store, d, { type: "validateFinish" }),
                n.triggerOnFieldsChange(d, c);
            });
        var s = l
          .then(function () {
            return n.lastValidatePromise === l
              ? Promise.resolve(n.getFieldsValue(a))
              : Promise.reject([]);
          })
          .catch(function (c) {
            var d = c.filter(function (f) {
              return f && f.errors.length;
            });
            return Promise.reject({
              values: n.getFieldsValue(a),
              errorFields: d,
              outOfDate: n.lastValidatePromise !== l,
            });
          });
        return (
          s.catch(function (c) {
            return c;
          }),
          s
        );
      }),
      (this.submit = function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var i = n.callbacks.onFinish;
              if (i)
                try {
                  i(r);
                } catch (o) {
                  console.error(o);
                }
            })
            .catch(function (r) {
              var i = n.callbacks.onFinishFailed;
              i && i(r);
            });
      }),
      (this.forceRootUpdate = t);
  });
function nb(e) {
  var t = S.useRef(),
    n = S.useState({}),
    r = we(n, 2),
    i = r[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var o = function () {
          i({});
        },
        a = new eM(o);
      t.current = a.getForm();
    }
  return [t.current];
}
var jh = S.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  rb = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      i = t.onFormFinish,
      o = t.children,
      a = S.useContext(jh),
      u = S.useRef({});
    return S.createElement(
      jh.Provider,
      {
        value: K(
          K({}, a),
          {},
          {
            validateMessages: K(K({}, a.validateMessages), n),
            triggerFormChange: function (s, c) {
              r && r(s, { changedFields: c, forms: u.current }),
                a.triggerFormChange(s, c);
            },
            triggerFormFinish: function (s, c) {
              i && i(s, { values: c, forms: u.current }),
                a.triggerFormFinish(s, c);
            },
            registerForm: function (s, c) {
              s && (u.current = K(K({}, u.current), {}, _e({}, s, c))),
                a.registerForm(s, c);
            },
            unregisterForm: function (s) {
              var c = K({}, u.current);
              delete c[s], (u.current = c), a.unregisterForm(s);
            },
          }
        ),
      },
      o
    );
  },
  tM = [
    "name",
    "initialValues",
    "fields",
    "form",
    "preserve",
    "children",
    "component",
    "validateMessages",
    "validateTrigger",
    "onValuesChange",
    "onFieldsChange",
    "onFinish",
    "onFinishFailed",
  ],
  nM = function (t, n) {
    var r = t.name,
      i = t.initialValues,
      o = t.fields,
      a = t.form,
      u = t.preserve,
      l = t.children,
      s = t.component,
      c = s === void 0 ? "form" : s,
      d = t.validateMessages,
      f = t.validateTrigger,
      h = f === void 0 ? "onChange" : f,
      v = t.onValuesChange,
      y = t.onFieldsChange,
      b = t.onFinish,
      m = t.onFinishFailed,
      p = jo(t, tM),
      g = S.useContext(jh),
      w = nb(a),
      x = we(w, 1),
      C = x[0],
      E = C.getInternalHooks(Pi),
      k = E.useSubscribe,
      M = E.setInitialValues,
      T = E.setCallbacks,
      A = E.setValidateMessages,
      P = E.setPreserve,
      O = E.destroyForm;
    S.useImperativeHandle(n, function () {
      return C;
    }),
      S.useEffect(
        function () {
          return (
            g.registerForm(r, C),
            function () {
              g.unregisterForm(r);
            }
          );
        },
        [g, C, r]
      ),
      A(K(K({}, g.validateMessages), d)),
      T({
        onValuesChange: v,
        onFieldsChange: function (q) {
          if ((g.triggerFormChange(r, q), y)) {
            for (
              var V = arguments.length,
                X = new Array(V > 1 ? V - 1 : 0),
                re = 1;
              re < V;
              re++
            )
              X[re - 1] = arguments[re];
            y.apply(void 0, [q].concat(X));
          }
        },
        onFinish: function (q) {
          g.triggerFormFinish(r, q), b && b(q);
        },
        onFinishFailed: m,
      }),
      P(u);
    var R = S.useRef(null);
    M(i, !R.current),
      R.current || (R.current = !0),
      S.useEffect(function () {
        return O;
      }, []);
    var $,
      F = typeof l == "function";
    if (F) {
      var N = C.getFieldsValue(!0);
      $ = l(N, C);
    } else $ = l;
    k(!F);
    var _ = S.useRef();
    S.useEffect(
      function () {
        Hk(_.current || [], o || []) || C.setFields(o || []), (_.current = o);
      },
      [o, C]
    );
    var I = S.useMemo(
        function () {
          return K(K({}, C), {}, { validateTrigger: h });
        },
        [C, h]
      ),
      L = S.createElement(Uo.Provider, { value: I }, $);
    return c === !1
      ? L
      : S.createElement(
          c,
          It({}, p, {
            onSubmit: function (q) {
              q.preventDefault(), q.stopPropagation(), C.submit();
            },
            onReset: function (q) {
              var V;
              q.preventDefault(),
                C.resetFields(),
                (V = p.onReset) === null || V === void 0 || V.call(p, q);
            },
          }),
          L
        );
  };
function ay(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function rM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    i = r === void 0 ? [] : r,
    o = t[1],
    a = S.useState(),
    u = we(a, 2),
    l = u[0],
    s = u[1],
    c = S.useMemo(
      function () {
        return ay(l);
      },
      [l]
    ),
    d = S.useRef(c);
  d.current = c;
  var f = S.useContext(Uo),
    h = o || f,
    v = h && h._init,
    y = lt(i),
    b = S.useRef(y);
  return (
    (b.current = y),
    S.useEffect(
      function () {
        if (v) {
          var m = h.getFieldsValue,
            p = h.getInternalHooks,
            g = p(Pi),
            w = g.registerWatch,
            x = w(function (E) {
              var k = Gr(E, b.current),
                M = ay(k);
              d.current !== M && ((d.current = M), s(k));
            }),
            C = Gr(m(), b.current);
          return s(C), x;
        }
      },
      [v]
    ),
    l
  );
}
var iM = S.forwardRef(nM),
  Du = iM;
Du.FormProvider = rb;
Du.Field = eb;
Du.List = Xk;
Du.useForm = nb;
Du.useWatch = rM;
const oM = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size",
};
var aM = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century",
};
const uM = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"],
  },
  ib = uM,
  lM = {
    lang: Object.assign(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"],
      },
      aM
    ),
    timePickerLocale: Object.assign({}, ib),
  },
  uy = lM,
  an = "${label} is not a valid ${type}",
  sM = {
    locale: "en",
    Pagination: oM,
    DatePicker: uy,
    TimePicker: ib,
    Calendar: uy,
    global: { placeholder: "Please select" },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting",
    },
    Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Popconfirm: { okText: "OK", cancelText: "Cancel" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page",
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file",
    },
    Empty: { description: "No data" },
    Icon: { icon: "icon" },
    Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
    PageHeader: { back: "Back" },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date",
        },
        types: {
          string: an,
          method: an,
          array: an,
          object: an,
          number: an,
          date: an,
          boolean: an,
          integer: an,
          float: an,
          regexp: an,
          email: an,
          url: an,
          hex: an,
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters",
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}",
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}",
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
      },
    },
    Image: { preview: "Preview" },
    QRCode: { expired: "QR code expired", refresh: "Refresh" },
  },
  li = sM;
let jl = Object.assign({}, li.Modal);
function ly(e) {
  e
    ? (jl = Object.assign(Object.assign({}, jl), e))
    : (jl = Object.assign({}, li.Modal));
}
function hI() {
  return jl;
}
const cM = S.createContext(void 0),
  Nv = cM,
  fM = "internalMark",
  dM = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    S.useEffect(
      () => (
        ly(t && t.Modal),
        () => {
          ly();
        }
      ),
      [t]
    );
    const i = S.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return S.createElement(Nv.Provider, { value: i }, n);
  },
  hM = dM,
  pM = (e) => {
    const { componentName: t = "global", defaultLocale: n, children: r } = e,
      i = S.useContext(Nv),
      o = S.useMemo(() => {
        var u;
        const l = n || li[t],
          s = (u = i == null ? void 0 : i[t]) !== null && u !== void 0 ? u : {};
        return Object.assign(
          Object.assign({}, l instanceof Function ? l() : l),
          s || {}
        );
      }, [t, n, i]),
      a = S.useMemo(() => {
        const u = i && i.locale;
        return i && i.exist && !u ? li.locale : u;
      }, [i]);
    return r(o, a, i);
  },
  vM = pM,
  pI = (e, t) => {
    const n = S.useContext(Nv);
    return [
      S.useMemo(() => {
        var i;
        const o = t || li[e],
          a = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
        return Object.assign(
          Object.assign({}, typeof o == "function" ? o() : o),
          a || {}
        );
      }, [e, t, n]),
    ];
  },
  mM = "5.2.0";
function Tt(e, t) {
  gM(e) && (e = "100%");
  var n = yM(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function fl(e) {
  return Math.min(1, Math.max(0, e));
}
function gM(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function yM(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ob(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function dl(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ki(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function wM(e, t, n) {
  return { r: Tt(e, 255) * 255, g: Tt(t, 255) * 255, b: Tt(n, 255) * 255 };
}
function sy(e, t, n) {
  (e = Tt(e, 255)), (t = Tt(t, 255)), (n = Tt(n, 255));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = 0,
    u = (r + i) / 2;
  if (r === i) (a = 0), (o = 0);
  else {
    var l = r - i;
    switch (((a = u > 0.5 ? l / (2 - r - i) : l / (r + i)), r)) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l: u };
}
function Vf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function SM(e, t, n) {
  var r, i, o;
  if (((e = Tt(e, 360)), (t = Tt(t, 100)), (n = Tt(n, 100)), t === 0))
    (i = n), (o = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - a;
    (r = Vf(u, a, e + 1 / 3)), (i = Vf(u, a, e)), (o = Vf(u, a, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function zh(e, t, n) {
  (e = Tt(e, 255)), (t = Tt(t, 255)), (n = Tt(n, 255));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = r,
    u = r - i,
    l = r === 0 ? 0 : u / r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / u + 2;
        break;
      case n:
        o = (e - t) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: a };
}
function bM(e, t, n) {
  (e = Tt(e, 360) * 6), (t = Tt(t, 100)), (n = Tt(n, 100));
  var r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    a = n * (1 - i * t),
    u = n * (1 - (1 - i) * t),
    l = r % 6,
    s = [n, a, o, o, u, n][l],
    c = [u, n, n, a, o, o][l],
    d = [o, o, u, n, n, a][l];
  return { r: s * 255, g: c * 255, b: d * 255 };
}
function Uh(e, t, n, r) {
  var i = [
    ki(Math.round(e).toString(16)),
    ki(Math.round(t).toString(16)),
    ki(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function CM(e, t, n, r, i) {
  var o = [
    ki(Math.round(e).toString(16)),
    ki(Math.round(t).toString(16)),
    ki(Math.round(n).toString(16)),
    ki(EM(r)),
  ];
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join("");
}
function EM(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function cy(e) {
  return ln(e) / 255;
}
function ln(e) {
  return parseInt(e, 16);
}
function xM(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Hh = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function Ji(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    u = !1;
  return (
    typeof e == "string" && (e = RM(e)),
    typeof e == "object" &&
      (cr(e.r) && cr(e.g) && cr(e.b)
        ? ((t = wM(e.r, e.g, e.b)),
          (a = !0),
          (u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : cr(e.h) && cr(e.s) && cr(e.v)
        ? ((r = dl(e.s)),
          (i = dl(e.v)),
          (t = bM(e.h, r, i)),
          (a = !0),
          (u = "hsv"))
        : cr(e.h) &&
          cr(e.s) &&
          cr(e.l) &&
          ((r = dl(e.s)),
          (o = dl(e.l)),
          (t = SM(e.h, r, o)),
          (a = !0),
          (u = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = ob(n)),
    {
      ok: a,
      format: e.format || u,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var OM = "[-\\+]?\\d+%?",
  PM = "[-\\+]?\\d*\\.\\d+%?",
  Yr = "(?:".concat(PM, ")|(?:").concat(OM, ")"),
  Qf = "[\\s|\\(]+("
    .concat(Yr, ")[,|\\s]+(")
    .concat(Yr, ")[,|\\s]+(")
    .concat(Yr, ")\\s*\\)?"),
  Wf = "[\\s|\\(]+("
    .concat(Yr, ")[,|\\s]+(")
    .concat(Yr, ")[,|\\s]+(")
    .concat(Yr, ")[,|\\s]+(")
    .concat(Yr, ")\\s*\\)?"),
  jn = {
    CSS_UNIT: new RegExp(Yr),
    rgb: new RegExp("rgb" + Qf),
    rgba: new RegExp("rgba" + Wf),
    hsl: new RegExp("hsl" + Qf),
    hsla: new RegExp("hsla" + Wf),
    hsv: new RegExp("hsv" + Qf),
    hsva: new RegExp("hsva" + Wf),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function RM(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Hh[e]) (e = Hh[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = jn.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = jn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = jn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = jn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = jn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = jn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = jn.hex8.exec(e)),
                          n
                            ? {
                                r: ln(n[1]),
                                g: ln(n[2]),
                                b: ln(n[3]),
                                a: cy(n[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((n = jn.hex6.exec(e)),
                              n
                                ? {
                                    r: ln(n[1]),
                                    g: ln(n[2]),
                                    b: ln(n[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((n = jn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: ln(n[1] + n[1]),
                                        g: ln(n[2] + n[2]),
                                        b: ln(n[3] + n[3]),
                                        a: cy(n[4] + n[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((n = jn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: ln(n[1] + n[1]),
                                            g: ln(n[2] + n[2]),
                                            b: ln(n[3] + n[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function cr(e) {
  return Boolean(jn.CSS_UNIT.exec(String(e)));
}
var ft = (function () {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = xM(t)), (this.originalInput = t);
      var i = Ji(t);
      (this.originalInput = t),
        (this.r = i.r),
        (this.g = i.g),
        (this.b = i.b),
        (this.a = i.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : i.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = i.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          i,
          o = t.r / 255,
          a = t.g / 255,
          u = t.b / 255;
        return (
          o <= 0.03928
            ? (n = o / 12.92)
            : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          u <= 0.03928
            ? (i = u / 12.92)
            : (i = Math.pow((u + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * i
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = ob(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.toHsv = function () {
        var t = zh(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = zh(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.v * 100);
        return this.a === 1
          ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)")
          : "hsva("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(i, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHsl = function () {
        var t = sy(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = sy(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.l * 100);
        return this.a === 1
          ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)")
          : "hsla("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(i, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Uh(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), CM(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
          : "rgba("
              .concat(t, ", ")
              .concat(n, ", ")
              .concat(r, ", ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return "".concat(Math.round(Tt(n, 255) * 100), "%");
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Tt(n, 255) * 100);
        };
        return this.a === 1
          ? "rgb("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%)")
          : "rgba("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (
          var t = "#" + Uh(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Hh);
          n < r.length;
          n++
        ) {
          var i = r[n],
            o = i[0],
            a = i[1];
          if (t === a) return o;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = Boolean(t);
        t = t ?? this.format;
        var r = !1,
          i = this.a < 1 && this.a >= 0,
          o = !n && i && (t.startsWith("hex") || t === "name");
        return o
          ? t === "name" && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === "rgb" && (r = this.toRgbString()),
            t === "prgb" && (r = this.toPercentageRgbString()),
            (t === "hex" || t === "hex6") && (r = this.toHexString()),
            t === "hex3" && (r = this.toHexString(!0)),
            t === "hex4" && (r = this.toHex8String(!0)),
            t === "hex8" && (r = this.toHex8String()),
            t === "name" && (r = this.toName()),
            t === "hsl" && (r = this.toHslString()),
            t === "hsv" && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = fl(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = fl(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = fl(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = fl(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          i = new e(t).toRgb(),
          o = n / 100,
          a = {
            r: (i.r - r.r) * o + r.r,
            g: (i.g - r.g) * o + r.g,
            b: (i.b - r.b) * o + r.b,
            a: (i.a - r.a) * o + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          i = 360 / n,
          o = [this];
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + i) % 360), o.push(new e(r));
        return o;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], u = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: i, v: o })), (o = (o + u) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb();
        return new e({
          r: r.r + (n.r - r.r) * n.a,
          g: r.g + (n.g - r.g) * n.a,
          b: r.b + (n.b - r.b) * n.a,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1;
          a < t;
          a++
        )
          i.push(new e({ h: (r + a * o) % 360, s: n.s, l: n.l }));
        return i;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  hl = 2,
  fy = 0.16,
  kM = 0.05,
  MM = 0.05,
  TM = 0.15,
  ab = 5,
  ub = 4,
  $M = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function dy(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = zh(t, n, r);
  return { h: i.h * 360, s: i.s, v: i.v };
}
function pl(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(Uh(t, n, r, !1));
}
function AM(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return i;
}
function hy(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - hl * t : Math.round(e.h) + hl * t)
      : (r = n ? Math.round(e.h) + hl * t : Math.round(e.h) - hl * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function py(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - fy * t) : t === ub ? (r = e.s + fy) : (r = e.s + kM * t),
    r > 1 && (r = 1),
    n && t === ab && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function vy(e, t, n) {
  var r;
  return (
    n ? (r = e.v + MM * t) : (r = e.v - TM * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Tr(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Ji(e),
      i = ab;
    i > 0;
    i -= 1
  ) {
    var o = dy(r),
      a = pl(Ji({ h: hy(o, i, !0), s: py(o, i, !0), v: vy(o, i, !0) }));
    n.push(a);
  }
  n.push(pl(r));
  for (var u = 1; u <= ub; u += 1) {
    var l = dy(r),
      s = pl(Ji({ h: hy(l, u), s: py(l, u), v: vy(l, u) }));
    n.push(s);
  }
  return t.theme === "dark"
    ? $M.map(function (c) {
        var d = c.index,
          f = c.opacity,
          h = pl(AM(Ji(t.backgroundColor || "#141414"), Ji(n[d]), f * 100));
        return h;
      })
    : n;
}
var Kf = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  Gf = {},
  Yf = {};
Object.keys(Kf).forEach(function (e) {
  (Gf[e] = Tr(Kf[e])),
    (Gf[e].primary = Gf[e][5]),
    (Yf[e] = Tr(Kf[e], { theme: "dark", backgroundColor: "#141414" })),
    (Yf[e].primary = Yf[e][5]);
});
const FM = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  },
  lb = FM;
function _M(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const Iv = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911",
  },
  Tc = Object.assign(Object.assign({}, Iv), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
  });
function sb(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: i,
      colorWarning: o,
      colorError: a,
      colorInfo: u,
      colorPrimary: l,
      colorBgBase: s,
      colorTextBase: c,
    } = e,
    d = n(l),
    f = n(i),
    h = n(o),
    v = n(a),
    y = n(u),
    b = r(s, c);
  return Object.assign(Object.assign({}, b), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorBgMask: new ft("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}
const NM = (e) => {
    let t = e,
      n = e,
      r = e,
      i = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (i = 4) : e >= 8 && (i = 6),
      {
        borderRadius: e > 16 ? 16 : e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: i,
      }
    );
  },
  IM = NM;
function LM(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1,
    },
    IM(r)
  );
}
const fr = (e, t) => new ft(e).setAlpha(t).toRgbString(),
  da = (e, t) => new ft(e).darken(t).toHexString(),
  DM = (e) => {
    const t = Tr(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  jM = (e, t) => {
    const n = e || "#fff",
      r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: fr(r, 0.88),
      colorTextSecondary: fr(r, 0.65),
      colorTextTertiary: fr(r, 0.45),
      colorTextQuaternary: fr(r, 0.25),
      colorFill: fr(r, 0.15),
      colorFillSecondary: fr(r, 0.06),
      colorFillTertiary: fr(r, 0.04),
      colorFillQuaternary: fr(r, 0.02),
      colorBgLayout: da(n, 4),
      colorBgContainer: da(n, 0),
      colorBgElevated: da(n, 0),
      colorBgSpotlight: fr(r, 0.85),
      colorBorder: da(n, 15),
      colorBorderSecondary: da(n, 6),
    };
  };
function zM(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(2.71828, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(a / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map((n) => {
      const r = n + 8;
      return { size: n, lineHeight: r / n };
    })
  );
}
const UM = (e) => {
    const t = zM(e),
      n = t.map((i) => i.size),
      r = t.map((i) => i.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  },
  cb = UM;
function $c(e) {
  const t = Object.keys(Iv)
    .map((n) => {
      const r = Tr(e[n]);
      return new Array(10)
        .fill(1)
        .reduce((i, o, a) => ((i[`${n}-${a + 1}`] = r[a]), i), {});
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            sb(e, {
              generateColorPalettes: DM,
              generateNeutralColorPalettes: jM,
            })
          ),
          cb(e.fontSize)
        ),
        _M(e)
      ),
      lb(e)
    ),
    LM(e)
  );
}
function Xf(e) {
  return e >= 0 && e <= 255;
}
function vl(e, t) {
  const { r: n, g: r, b: i, a: o } = new ft(e).toRgb();
  if (o < 1) return e;
  const { r: a, g: u, b: l } = new ft(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const c = Math.round((n - a * (1 - s)) / s),
      d = Math.round((r - u * (1 - s)) / s),
      f = Math.round((i - l * (1 - s)) / s);
    if (Xf(c) && Xf(d) && Xf(f))
      return new ft({
        r: c,
        g: d,
        b: f,
        a: Math.round(s * 100) / 100,
      }).toRgbString();
  }
  return new ft({ r: n, g: r, b: i, a: 1 }).toRgbString();
}
var HM =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function qM(e) {
  const { override: t } = e,
    n = HM(e, ["override"]),
    r = Object.assign({}, t);
  Object.keys(Tc).forEach((f) => {
    delete r[f];
  });
  const i = Object.assign(Object.assign({}, n), r),
    o = 480,
    a = 576,
    u = 768,
    l = 992,
    s = 1200,
    c = 1600;
  return Object.assign(
    Object.assign(Object.assign({}, i), {
      colorLink: i.colorInfoText,
      colorLinkHover: i.colorInfoHover,
      colorLinkActive: i.colorInfoActive,
      colorFillContent: i.colorFillSecondary,
      colorFillContentHover: i.colorFill,
      colorFillAlter: i.colorFillQuaternary,
      colorBgContainerDisabled: i.colorFillTertiary,
      colorBorderBg: i.colorBgContainer,
      colorSplit: vl(i.colorBorderSecondary, i.colorBgContainer),
      colorTextPlaceholder: i.colorTextQuaternary,
      colorTextDisabled: i.colorTextQuaternary,
      colorTextHeading: i.colorText,
      colorTextLabel: i.colorTextSecondary,
      colorTextDescription: i.colorTextTertiary,
      colorTextLightSolid: i.colorWhite,
      colorHighlight: i.colorError,
      colorBgTextHover: i.colorFillSecondary,
      colorBgTextActive: i.colorFill,
      colorIcon: i.colorTextTertiary,
      colorIconHover: i.colorText,
      colorErrorOutline: vl(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: vl(i.colorWarningBg, i.colorBgContainer),
      fontSizeIcon: i.fontSizeSM,
      lineWidth: i.lineWidth,
      controlOutlineWidth: i.lineWidth * 2,
      controlInteractiveSize: i.controlHeight / 2,
      controlItemBgHover: i.colorFillTertiary,
      controlItemBgActive: i.colorPrimaryBg,
      controlItemBgActiveHover: i.colorPrimaryBgHover,
      controlItemBgActiveDisabled: i.colorFill,
      controlTmpOutline: i.colorFillQuaternary,
      controlOutline: vl(i.colorPrimaryBg, i.colorBgContainer),
      lineType: i.lineType,
      borderRadius: i.borderRadius,
      borderRadiusXS: i.borderRadiusXS,
      borderRadiusSM: i.borderRadiusSM,
      borderRadiusLG: i.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: i.sizeXXS,
      paddingXS: i.sizeXS,
      paddingSM: i.sizeSM,
      padding: i.size,
      paddingMD: i.sizeMD,
      paddingLG: i.sizeLG,
      paddingXL: i.sizeXL,
      paddingContentHorizontalLG: i.sizeLG,
      paddingContentVerticalLG: i.sizeMS,
      paddingContentHorizontal: i.sizeMS,
      paddingContentVertical: i.sizeSM,
      paddingContentHorizontalSM: i.size,
      paddingContentVerticalSM: i.sizeXS,
      marginXXS: i.sizeXXS,
      marginXS: i.sizeXS,
      marginSM: i.sizeSM,
      margin: i.size,
      marginMD: i.sizeMD,
      marginLG: i.sizeLG,
      marginXL: i.sizeXL,
      marginXXL: i.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: o,
      screenXSMin: o,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: u - 1,
      screenMD: u,
      screenMDMin: u,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: s - 1,
      screenXL: s,
      screenXLMin: s,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new ft("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ft("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ft("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    r
  );
}
const BM = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  Lv = (e) => ({
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: "none",
    fontFamily: e.fontFamily,
  }),
  VM = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": { lineHeight: 1 },
    svg: { display: "inline-block" },
  }),
  QM = () => ({
    "&::before": { display: "table", content: '""' },
    "&::after": { display: "table", clear: "both", content: '""' },
  }),
  WM = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": { color: e.colorLinkHover },
      "&:active": { color: e.colorLinkActive },
      [`&:active,
  &:hover`]: { textDecoration: e.linkHoverDecoration, outline: 0 },
      "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
      "&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
    },
  }),
  KM = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      i = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [i]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: "border-box",
        "&::before, &::after": { boxSizing: "border-box" },
        [i]: {
          boxSizing: "border-box",
          "&::before, &::after": { boxSizing: "border-box" },
        },
      },
    };
  },
  GM = (e) => ({
    outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s",
  }),
  YM = (e) => ({ "&:focus-visible": Object.assign({}, GM(e)) }),
  Dv = "anticon",
  XM = (e, t) => t || (e ? `ant-${e}` : "ant"),
  en = S.createContext({ getPrefixCls: XM, iconPrefixCls: Dv }),
  { Consumer: ZM } = en;
function Ac(e, t, n) {
  return (r) => {
    const [i, o, a] = jv(),
      { getPrefixCls: u, iconPrefixCls: l } = S.useContext(en),
      s = u();
    return (
      Rh({ theme: i, token: o, hashId: a, path: ["Shared", s] }, () => [
        { "&": WM(o) },
      ]),
      [
        Rh({ theme: i, token: o, hashId: a, path: [e, r, l] }, () => {
          const { token: c, flush: d } = eT(o),
            f = typeof n == "function" ? n(c) : n,
            h = Object.assign(Object.assign({}, f), o[e]),
            v = `.${r}`,
            y = Ho(
              c,
              {
                componentCls: v,
                prefixCls: r,
                iconCls: `.${l}`,
                antCls: `.${s}`,
              },
              h
            ),
            b = t(y, {
              hashId: a,
              prefixCls: r,
              rootPrefixCls: s,
              iconPrefixCls: l,
              overrideComponentToken: o[e],
            });
          return d(e, h), [KM(o, r), b];
        }),
        a,
      ]
    );
  };
}
const fb = typeof CSSINJS_STATISTIC < "u";
let qh = !0;
function Ho() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!fb) return Object.assign.apply(Object, [{}].concat(t));
  qh = !1;
  const r = {};
  return (
    t.forEach((i) => {
      Object.keys(i).forEach((a) => {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: () => i[a],
        });
      });
    }),
    (qh = !0),
    r
  );
}
function JM() {}
function eT(e) {
  let t,
    n = e,
    r = JM;
  return (
    fb &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(i, o) {
          return qh && t.add(o), i[o];
        },
      })),
      (r = (i, o) => {
        Array.from(t);
      })),
    { token: n, keys: t, flush: r }
  );
}
const tT = BS($c),
  Os = { token: Tc, hashed: !0 },
  db = ce.createContext(Os);
function jv() {
  const { token: e, hashed: t, theme: n, components: r } = ce.useContext(db),
    i = `${mM}-${t || ""}`,
    o = n || tT,
    [a, u] = $R(o, [Tc, e], {
      salt: i,
      override: Object.assign({ override: e }, r),
      formatToken: qM,
    });
  return [o, a, t ? u : ""];
}
const nT = `-ant-${Date.now()}-${Math.random()}`;
function rT(e, t) {
  const n = {},
    r = (a, u) => {
      let l = a.clone();
      return (l = (u == null ? void 0 : u(l)) || l), l.toRgbString();
    },
    i = (a, u) => {
      const l = new ft(a),
        s = Tr(l.toRgbString());
      (n[`${u}-color`] = r(l)),
        (n[`${u}-color-disabled`] = s[1]),
        (n[`${u}-color-hover`] = s[4]),
        (n[`${u}-color-active`] = s[6]),
        (n[`${u}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (n[`${u}-color-deprecated-bg`] = s[0]),
        (n[`${u}-color-deprecated-border`] = s[2]);
    };
  if (t.primaryColor) {
    i(t.primaryColor, "primary");
    const a = new ft(t.primaryColor),
      u = Tr(a.toRgbString());
    u.forEach((s, c) => {
      n[`primary-${c + 1}`] = s;
    }),
      (n["primary-color-deprecated-l-35"] = r(a, (s) => s.lighten(35))),
      (n["primary-color-deprecated-l-20"] = r(a, (s) => s.lighten(20))),
      (n["primary-color-deprecated-t-20"] = r(a, (s) => s.tint(20))),
      (n["primary-color-deprecated-t-50"] = r(a, (s) => s.tint(50))),
      (n["primary-color-deprecated-f-12"] = r(a, (s) =>
        s.setAlpha(s.getAlpha() * 0.12)
      ));
    const l = new ft(u[0]);
    (n["primary-color-active-deprecated-f-30"] = r(l, (s) =>
      s.setAlpha(s.getAlpha() * 0.3)
    )),
      (n["primary-color-active-deprecated-d-02"] = r(l, (s) => s.darken(2)));
  }
  return (
    t.successColor && i(t.successColor, "success"),
    t.warningColor && i(t.warningColor, "warning"),
    t.errorColor && i(t.errorColor, "error"),
    t.infoColor && i(t.infoColor, "info"),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function iT(e, t) {
  const n = rT(e, t);
  Fn() && fu(n, `${nT}-dynamic-theme`);
}
const Bh = S.createContext(!1),
  oT = (e) => {
    let { children: t, disabled: n } = e;
    const r = S.useContext(Bh);
    return S.createElement(Bh.Provider, { value: n ?? r }, t);
  },
  vI = Bh;
function aT(e, t) {
  const n = e || {},
    r = n.inherit === !1 || !t ? Os : t;
  return xv(
    () => {
      if (!e) return t;
      const o = Object.assign({}, r.components);
      return (
        Object.keys(e.components || {}).forEach((a) => {
          o[a] = Object.assign(Object.assign({}, o[a]), e.components[a]);
        }),
        Object.assign(Object.assign(Object.assign({}, r), n), {
          token: Object.assign(Object.assign({}, r.token), n.token),
          components: o,
        })
      );
    },
    [n, r],
    (o, a) =>
      o.some((u, l) => {
        const s = a[l];
        return !pR(u, s, !0);
      })
  );
}
const Vh = S.createContext(void 0),
  uT = (e) => {
    let { children: t, size: n } = e;
    const r = S.useContext(Vh);
    return S.createElement(Vh.Provider, { value: n || r }, t);
  },
  lT = Vh,
  sT = (e) => {
    const [t, n] = jv();
    return Rh(
      { theme: t, token: n, hashId: "", path: ["ant-design-icons", e] },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, VM()), {
            [`.${e} .${e}-icon`]: { display: "block" },
          }),
        },
      ]
    );
  },
  cT = sT;
var fT =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const dT = [
    "getTargetContainer",
    "getPopupContainer",
    "renderEmpty",
    "pageHeader",
    "input",
    "pagination",
    "form",
    "select",
  ],
  hT = "ant";
let Ps, hb;
function zl() {
  return Ps || hT;
}
function pT() {
  return hb || Dv;
}
const vT = (e) => {
    let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
    t !== void 0 && (Ps = t), n !== void 0 && (hb = n), r && iT(zl(), r);
  },
  pb = () => ({
    getPrefixCls: (e, t) => t || (e ? `${zl()}-${e}` : zl()),
    getIconPrefixCls: pT,
    getRootPrefixCls: () => Ps || zl(),
  }),
  mT = (e) => {
    var t, n;
    const {
        children: r,
        csp: i,
        autoInsertSpaceInButton: o,
        form: a,
        locale: u,
        componentSize: l,
        direction: s,
        space: c,
        virtual: d,
        dropdownMatchSelectWidth: f,
        legacyLocale: h,
        parentContext: v,
        iconPrefixCls: y,
        theme: b,
        componentDisabled: m,
      } = e,
      p = S.useCallback(
        ($, F) => {
          const { prefixCls: N } = e;
          if (F) return F;
          const _ = N || v.getPrefixCls("");
          return $ ? `${_}-${$}` : _;
        },
        [v.getPrefixCls, e.prefixCls]
      ),
      g = y || v.iconPrefixCls || Dv,
      w = g !== v.iconPrefixCls,
      x = i || v.csp,
      C = cT(g),
      E = aT(b, v.theme),
      k = {
        csp: x,
        autoInsertSpaceInButton: o,
        locale: u || h,
        direction: s,
        space: c,
        virtual: d,
        dropdownMatchSelectWidth: f,
        getPrefixCls: p,
        iconPrefixCls: g,
        theme: E,
      },
      M = Object.assign({}, v);
    Object.keys(k).forEach(($) => {
      k[$] !== void 0 && (M[$] = k[$]);
    }),
      dT.forEach(($) => {
        const F = e[$];
        F && (M[$] = F);
      });
    const T = xv(
        () => M,
        M,
        ($, F) => {
          const N = Object.keys($),
            _ = Object.keys(F);
          return N.length !== _.length || N.some((I) => $[I] !== F[I]);
        }
      ),
      A = S.useMemo(() => ({ prefixCls: g, csp: x }), [g, x]);
    let P = w ? C(r) : r,
      O = {};
    u &&
      (O =
        ((t = u.Form) === null || t === void 0
          ? void 0
          : t.defaultValidateMessages) ||
        ((n = li.Form) === null || n === void 0
          ? void 0
          : n.defaultValidateMessages) ||
        {}),
      a &&
        a.validateMessages &&
        (O = Object.assign(Object.assign({}, O), a.validateMessages)),
      Object.keys(O).length > 0 &&
        (P = S.createElement(rb, { validateMessages: O }, r)),
      u && (P = S.createElement(hM, { locale: u, _ANT_MARK__: fM }, P)),
      (g || x) && (P = S.createElement(Av.Provider, { value: A }, P)),
      l && (P = S.createElement(uT, { size: l }, P));
    const R = S.useMemo(() => {
      const $ = E || {},
        { algorithm: F, token: N } = $,
        _ = fT($, ["algorithm", "token"]),
        I = F && (!Array.isArray(F) || F.length > 0) ? BS(F) : void 0;
      return Object.assign(Object.assign({}, _), {
        theme: I,
        token: Object.assign(Object.assign({}, Tc), N),
      });
    }, [E]);
    return (
      b && (P = S.createElement(db.Provider, { value: R }, P)),
      m !== void 0 && (P = S.createElement(oT, { disabled: m }, P)),
      S.createElement(en.Provider, { value: T }, P)
    );
  },
  Fc = (e) =>
    S.createElement(vM, null, (t, n, r) =>
      S.createElement(ZM, null, (i) =>
        S.createElement(
          mT,
          Object.assign({ parentContext: i, legacyLocale: r }, e)
        )
      )
    );
Fc.ConfigContext = en;
Fc.SizeContext = lT;
Fc.config = vT;
const vb = Fc;
function Qh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gT(e) {
  if (Array.isArray(e)) return Qh(e);
}
function yT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function mb(e, t) {
  if (e) {
    if (typeof e == "string") return Qh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Qh(e, t);
  }
}
function wT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gb(e) {
  return gT(e) || yT(e) || mb(e) || wT();
}
var yb = function (t) {
    return +setTimeout(t, 16);
  },
  wb = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((yb = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (wb = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var my = 0,
  zv = new Map();
function Sb(e) {
  zv.delete(e);
}
var Rs = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  my += 1;
  var r = my;
  function i(o) {
    if (o === 0) Sb(r), t();
    else {
      var a = yb(function () {
        i(o - 1);
      });
      zv.set(r, a);
    }
  }
  return i(n), r;
};
Rs.cancel = function (e) {
  var t = zv.get(e);
  return Sb(t), wb(t);
};
function ha(e, t, n, r) {
  var i = ou.unstable_batchedUpdates
    ? function (a) {
        ou.unstable_batchedUpdates(n, a);
      }
    : n;
  return (
    e.addEventListener && e.addEventListener(t, i, r),
    {
      remove: function () {
        e.removeEventListener && e.removeEventListener(t, i, r);
      },
    }
  );
}
function Wh(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function gy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gy(Object(n), !0).forEach(function (r) {
          Wh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var ST = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
        },
      },
    ],
  },
  name: "check-circle",
  theme: "filled",
};
const bT = ST;
function CT(e) {
  if (Array.isArray(e)) return e;
}
function ET(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      u;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (u = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function xT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bb(e, t) {
  return CT(e) || ET(e, t) || mb(e, t) || xT();
}
function OT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Cb(e, t) {
  if (e == null) return {};
  var n = OT(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
var yy = {};
function PT(e, t) {}
function RT(e, t, n) {
  !t && !yy[n] && (e(!1, n), (yy[n] = !0));
}
function kT(e, t) {
  RT(PT, e, t);
}
function MT() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function TT(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var wy = "data-rc-order",
  $T = "rc-util-key",
  Kh = new Map();
function Eb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : $T;
}
function Uv(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function AT(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function xb(e) {
  return Array.from((Kh.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function Ob(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!MT()) return null;
  var n = t.csp,
    r = t.prepend,
    i = document.createElement("style");
  i.setAttribute(wy, AT(r)),
    n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce),
    (i.innerHTML = e);
  var o = Uv(t),
    a = o.firstChild;
  if (r) {
    if (r === "queue") {
      var u = xb(o).filter(function (l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(wy));
      });
      if (u.length) return o.insertBefore(i, u[u.length - 1].nextSibling), i;
    }
    o.insertBefore(i, a);
  } else o.appendChild(i);
  return i;
}
function FT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Uv(t);
  return xb(n).find(function (r) {
    return r.getAttribute(Eb(t)) === e;
  });
}
function _T(e, t) {
  var n = Kh.get(e);
  if (!n || !TT(document, n)) {
    var r = Ob("", t),
      i = r.parentNode;
    Kh.set(e, i), e.removeChild(r);
  }
}
function NT(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Uv(n);
  _T(r, n);
  var i = FT(t, n);
  if (i) {
    var o, a;
    if (
      !((o = n.csp) === null || o === void 0) &&
      o.nonce &&
      i.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)
    ) {
      var u;
      i.nonce = (u = n.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var l = Ob(e, n);
  return l.setAttribute(Eb(n), t), l;
}
function IT(e, t) {
  kT(e, "[@ant-design/icons] ".concat(t));
}
function Sy(e) {
  return (
    Ss(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (Ss(e.icon) === "object" || typeof e.icon == "function")
  );
}
function by() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        (t.className = r), delete t.class;
        break;
      default:
        t[n] = r;
    }
    return t;
  }, {});
}
function Gh(e, t, n) {
  return n
    ? ce.createElement(
        e.tag,
        ve(ve({ key: t }, by(e.attrs)), n),
        (e.children || []).map(function (r, i) {
          return Gh(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      )
    : ce.createElement(
        e.tag,
        ve({ key: t }, by(e.attrs)),
        (e.children || []).map(function (r, i) {
          return Gh(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      );
}
function Pb(e) {
  return Tr(e)[0];
}
function Rb(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var LT = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  DT = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LT,
      n = S.useContext(Av),
      r = n.csp;
    S.useEffect(function () {
      NT(t, "@ant-design-icons", { prepend: !0, csp: r });
    }, []);
  },
  jT = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  La = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function zT(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (La.primaryColor = t),
    (La.secondaryColor = n || Pb(t)),
    (La.calculated = !!n);
}
function UT() {
  return ve({}, La);
}
var _c = function (t) {
  var n = t.icon,
    r = t.className,
    i = t.onClick,
    o = t.style,
    a = t.primaryColor,
    u = t.secondaryColor,
    l = Cb(t, jT),
    s = La;
  if (
    (a && (s = { primaryColor: a, secondaryColor: u || Pb(a) }),
    DT(),
    IT(Sy(n), "icon should be icon definiton, but got ".concat(n)),
    !Sy(n))
  )
    return null;
  var c = n;
  return (
    c &&
      typeof c.icon == "function" &&
      (c = ve(
        ve({}, c),
        {},
        { icon: c.icon(s.primaryColor, s.secondaryColor) }
      )),
    Gh(
      c.icon,
      "svg-".concat(c.name),
      ve(
        {
          className: r,
          onClick: i,
          style: o,
          "data-icon": c.name,
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
        },
        l
      )
    )
  );
};
_c.displayName = "IconReact";
_c.getTwoToneColors = UT;
_c.setTwoToneColors = zT;
const Hv = _c;
function kb(e) {
  var t = Rb(e),
    n = bb(t, 2),
    r = n[0],
    i = n[1];
  return Hv.setTwoToneColors({ primaryColor: r, secondaryColor: i });
}
function HT() {
  var e = Hv.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var qT = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
kb("#1890ff");
var Nc = S.forwardRef(function (e, t) {
  var n,
    r = e.className,
    i = e.icon,
    o = e.spin,
    a = e.rotate,
    u = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    c = Cb(e, qT),
    d = S.useContext(Av),
    f = d.prefixCls,
    h = f === void 0 ? "anticon" : f,
    v = d.rootClassName,
    y = be(
      v,
      h,
      ((n = {}),
      Wh(n, "".concat(h, "-").concat(i.name), !!i.name),
      Wh(n, "".concat(h, "-spin"), !!o || i.name === "loading"),
      n),
      r
    ),
    b = u;
  b === void 0 && l && (b = -1);
  var m = a
      ? {
          msTransform: "rotate(".concat(a, "deg)"),
          transform: "rotate(".concat(a, "deg)"),
        }
      : void 0,
    p = Rb(s),
    g = bb(p, 2),
    w = g[0],
    x = g[1];
  return S.createElement(
    "span",
    ve(
      ve({ role: "img", "aria-label": i.name }, c),
      {},
      { ref: t, tabIndex: b, onClick: l, className: y }
    ),
    S.createElement(Hv, {
      icon: i,
      primaryColor: w,
      secondaryColor: x,
      style: m,
    })
  );
});
Nc.displayName = "AntdIcon";
Nc.getTwoToneColor = HT;
Nc.setTwoToneColor = kb;
const tn = Nc;
var Mb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: bT }));
};
Mb.displayName = "CheckCircleFilled";
const BT = S.forwardRef(Mb);
var VT = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z",
        },
      },
    ],
  },
  name: "close-circle",
  theme: "filled",
};
const QT = VT;
var Tb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: QT }));
};
Tb.displayName = "CloseCircleFilled";
const WT = S.forwardRef(Tb);
var KT = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
        },
      },
    ],
  },
  name: "close",
  theme: "outlined",
};
const GT = KT;
var $b = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: GT }));
};
$b.displayName = "CloseOutlined";
const Ab = S.forwardRef($b);
var YT = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
        },
      },
    ],
  },
  name: "exclamation-circle",
  theme: "filled",
};
const XT = YT;
var Fb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: XT }));
};
Fb.displayName = "ExclamationCircleFilled";
const ZT = S.forwardRef(Fb);
var JT = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
        },
      },
    ],
  },
  name: "info-circle",
  theme: "filled",
};
const e4 = JT;
var _b = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: e4 }));
};
_b.displayName = "InfoCircleFilled";
const t4 = S.forwardRef(_b);
function Cy(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit".concat(e)] = "webkit".concat(t)),
    (n["Moz".concat(e)] = "moz".concat(t)),
    (n["ms".concat(e)] = "MS".concat(t)),
    (n["O".concat(e)] = "o".concat(t.toLowerCase())),
    n
  );
}
function n4(e, t) {
  var n = {
    animationend: Cy("Animation", "AnimationEnd"),
    transitionend: Cy("Transition", "TransitionEnd"),
  };
  return (
    e &&
      ("AnimationEvent" in t || delete n.animationend.animation,
      "TransitionEvent" in t || delete n.transitionend.transition),
    n
  );
}
var r4 = n4(Fn(), typeof window < "u" ? window : {}),
  Nb = {};
if (Fn()) {
  var i4 = document.createElement("div");
  Nb = i4.style;
}
var ml = {};
function Ib(e) {
  if (ml[e]) return ml[e];
  var t = r4[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Nb)
        return (ml[e] = t[o]), ml[e];
    }
  return "";
}
var Lb = Ib("animationend"),
  Db = Ib("transitionend"),
  jb = !!(Lb && Db),
  Ey = Lb || "animationend",
  xy = Db || "transitionend";
function Oy(e, t) {
  if (!e) return null;
  if (wt(e) === "object") {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
var eo = "none",
  gl = "appear",
  yl = "enter",
  wl = "leave",
  Py = "none",
  mr = "prepare",
  vo = "start",
  mo = "active",
  qv = "end";
function o4(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      u;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (u = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function ks(e, t) {
  return GS(e) || o4(e, t) || Fv(e, t) || YS();
}
function xo(e) {
  var t = S.useRef(!1),
    n = S.useState(e),
    r = ks(n, 2),
    i = r[0],
    o = r[1];
  S.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(u, l) {
    (l && t.current) || o(u);
  }
  return [i, a];
}
const a4 = function () {
  var e = S.useRef(null);
  function t() {
    Rs.cancel(e.current);
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Rs(function () {
      i <= 1
        ? r({
            isCanceled: function () {
              return o !== e.current;
            },
          })
        : n(r, i - 1);
    });
    e.current = o;
  }
  return (
    S.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var zb = Fn() ? S.useLayoutEffect : S.useEffect,
  Ry = [mr, vo, mo, qv],
  Ub = !1,
  u4 = !0;
function Hb(e) {
  return e === mo || e === qv;
}
const l4 = function (e, t) {
    var n = xo(Py),
      r = we(n, 2),
      i = r[0],
      o = r[1],
      a = a4(),
      u = we(a, 2),
      l = u[0],
      s = u[1];
    function c() {
      o(mr, !0);
    }
    return (
      zb(
        function () {
          if (i !== Py && i !== qv) {
            var d = Ry.indexOf(i),
              f = Ry[d + 1],
              h = t(i);
            h === Ub
              ? o(f, !0)
              : l(function (v) {
                  function y() {
                    v.isCanceled() || o(f, !0);
                  }
                  h === !0 ? y() : Promise.resolve(h).then(y);
                });
          }
        },
        [e, i]
      ),
      S.useEffect(function () {
        return function () {
          s();
        };
      }, []),
      [c, i]
    );
  },
  s4 = function (e) {
    var t = S.useRef(),
      n = S.useRef(e);
    n.current = e;
    var r = S.useCallback(function (a) {
      n.current(a);
    }, []);
    function i(a) {
      a && (a.removeEventListener(xy, r), a.removeEventListener(Ey, r));
    }
    function o(a) {
      t.current && t.current !== a && i(t.current),
        a &&
          a !== t.current &&
          (a.addEventListener(xy, r),
          a.addEventListener(Ey, r),
          (t.current = a));
    }
    return (
      S.useEffect(function () {
        return function () {
          i(t.current);
        };
      }, []),
      [o, i]
    );
  };
function c4(e, t, n, r) {
  var i = r.motionEnter,
    o = i === void 0 ? !0 : i,
    a = r.motionAppear,
    u = a === void 0 ? !0 : a,
    l = r.motionLeave,
    s = l === void 0 ? !0 : l,
    c = r.motionDeadline,
    d = r.motionLeaveImmediately,
    f = r.onAppearPrepare,
    h = r.onEnterPrepare,
    v = r.onLeavePrepare,
    y = r.onAppearStart,
    b = r.onEnterStart,
    m = r.onLeaveStart,
    p = r.onAppearActive,
    g = r.onEnterActive,
    w = r.onLeaveActive,
    x = r.onAppearEnd,
    C = r.onEnterEnd,
    E = r.onLeaveEnd,
    k = r.onVisibleChanged,
    M = xo(),
    T = we(M, 2),
    A = T[0],
    P = T[1],
    O = xo(eo),
    R = we(O, 2),
    $ = R[0],
    F = R[1],
    N = xo(null),
    _ = we(N, 2),
    I = _[0],
    L = _[1],
    H = S.useRef(!1),
    q = S.useRef(null);
  function V() {
    return n();
  }
  var X = S.useRef(!1);
  function re(se) {
    var fe = V();
    if (!(se && !se.deadline && se.target !== fe)) {
      var Fe = X.current,
        Ve;
      $ === gl && Fe
        ? (Ve = x == null ? void 0 : x(fe, se))
        : $ === yl && Fe
        ? (Ve = C == null ? void 0 : C(fe, se))
        : $ === wl && Fe && (Ve = E == null ? void 0 : E(fe, se)),
        $ !== eo && Fe && Ve !== !1 && (F(eo, !0), L(null, !0));
    }
  }
  var ie = s4(re),
    oe = we(ie, 1),
    Ae = oe[0],
    Ee = S.useMemo(
      function () {
        var se, fe, Fe;
        switch ($) {
          case gl:
            return (se = {}), _e(se, mr, f), _e(se, vo, y), _e(se, mo, p), se;
          case yl:
            return (fe = {}), _e(fe, mr, h), _e(fe, vo, b), _e(fe, mo, g), fe;
          case wl:
            return (Fe = {}), _e(Fe, mr, v), _e(Fe, vo, m), _e(Fe, mo, w), Fe;
          default:
            return {};
        }
      },
      [$]
    ),
    ae = l4($, function (se) {
      if (se === mr) {
        var fe = Ee[mr];
        return fe ? fe(V()) : Ub;
      }
      if (Q in Ee) {
        var Fe;
        L(
          ((Fe = Ee[Q]) === null || Fe === void 0
            ? void 0
            : Fe.call(Ee, V(), null)) || null
        );
      }
      return (
        Q === mo &&
          (Ae(V()),
          c > 0 &&
            (clearTimeout(q.current),
            (q.current = setTimeout(function () {
              re({ deadline: !0 });
            }, c)))),
        u4
      );
    }),
    xe = we(ae, 2),
    z = xe[0],
    Q = xe[1],
    te = Hb(Q);
  (X.current = te),
    zb(
      function () {
        P(t);
        var se = H.current;
        if (((H.current = !0), !!e)) {
          var fe;
          !se && t && u && (fe = gl),
            se && t && o && (fe = yl),
            ((se && !t && s) || (!se && d && !t && s)) && (fe = wl),
            fe && (F(fe), z());
        }
      },
      [t]
    ),
    S.useEffect(
      function () {
        (($ === gl && !u) || ($ === yl && !o) || ($ === wl && !s)) && F(eo);
      },
      [u, o, s]
    ),
    S.useEffect(function () {
      return function () {
        (H.current = !1), clearTimeout(q.current);
      };
    }, []);
  var Oe = S.useRef(!1);
  S.useEffect(
    function () {
      A && (Oe.current = !0),
        A !== void 0 &&
          $ === eo &&
          ((Oe.current || A) && (k == null || k(A)), (Oe.current = !0));
    },
    [A, $]
  );
  var me = I;
  return (
    Ee[mr] && Q === vo && (me = K({ transition: "none" }, me)),
    [$, Q, me, A ?? t]
  );
}
var f4 = (function (e) {
  Ov(n, e);
  var t = Pv(n);
  function n() {
    return Ar(this, n), t.apply(this, arguments);
  }
  return (
    Fr(n, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(S.Component);
function d4(e) {
  var t = e;
  wt(e) === "object" && (t = e.transitionSupport);
  function n(i) {
    return !!(i.motionName && t);
  }
  var r = S.forwardRef(function (i, o) {
    var a = i.visible,
      u = a === void 0 ? !0 : a,
      l = i.removeOnLeave,
      s = l === void 0 ? !0 : l,
      c = i.forceRender,
      d = i.children,
      f = i.motionName,
      h = i.leavedClassName,
      v = i.eventProps,
      y = n(i),
      b = S.useRef(),
      m = S.useRef();
    function p() {
      try {
        return b.current instanceof HTMLElement ? b.current : aR(m.current);
      } catch {
        return null;
      }
    }
    var g = c4(y, u, p, i),
      w = we(g, 4),
      x = w[0],
      C = w[1],
      E = w[2],
      k = w[3],
      M = S.useRef(k);
    k && (M.current = !0);
    var T = S.useCallback(
        function (N) {
          (b.current = N), RS(o, N);
        },
        [o]
      ),
      A,
      P = K(K({}, v), {}, { visible: u });
    if (!d) A = null;
    else if (x === eo || !n(i))
      k
        ? (A = d(K({}, P), T))
        : !s && M.current
        ? (A = d(K(K({}, P), {}, { className: h }), T))
        : c
        ? (A = d(K(K({}, P), {}, { style: { display: "none" } }), T))
        : (A = null);
    else {
      var O, R;
      C === mr
        ? (R = "prepare")
        : Hb(C)
        ? (R = "active")
        : C === vo && (R = "start"),
        (A = d(
          K(
            K({}, P),
            {},
            {
              className: be(
                Oy(f, x),
                ((O = {}),
                _e(O, Oy(f, "".concat(x, "-").concat(R)), R),
                _e(O, f, typeof f == "string"),
                O)
              ),
              style: E,
            }
          ),
          T
        ));
    }
    if (S.isValidElement(A) && kS(A)) {
      var $ = A,
        F = $.ref;
      F || (A = S.cloneElement(A, { ref: T }));
    }
    return S.createElement(f4, { ref: m }, A);
  });
  return (r.displayName = "CSSMotion"), r;
}
const Ic = d4(jb);
var Yh = "add",
  Xh = "keep",
  Zh = "remove",
  Zf = "removed";
function h4(e) {
  var t;
  return (
    e && wt(e) === "object" && "key" in e ? (t = e) : (t = { key: e }),
    K(K({}, t), {}, { key: String(t.key) })
  );
}
function Jh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(h4);
}
function p4() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    o = Jh(e),
    a = Jh(t);
  o.forEach(function (s) {
    for (var c = !1, d = r; d < i; d += 1) {
      var f = a[d];
      if (f.key === s.key) {
        r < d &&
          ((n = n.concat(
            a.slice(r, d).map(function (h) {
              return K(K({}, h), {}, { status: Yh });
            })
          )),
          (r = d)),
          n.push(K(K({}, f), {}, { status: Xh })),
          (r += 1),
          (c = !0);
        break;
      }
    }
    c || n.push(K(K({}, s), {}, { status: Zh }));
  }),
    r < i &&
      (n = n.concat(
        a.slice(r).map(function (s) {
          return K(K({}, s), {}, { status: Yh });
        })
      ));
  var u = {};
  n.forEach(function (s) {
    var c = s.key;
    u[c] = (u[c] || 0) + 1;
  });
  var l = Object.keys(u).filter(function (s) {
    return u[s] > 1;
  });
  return (
    l.forEach(function (s) {
      (n = n.filter(function (c) {
        var d = c.key,
          f = c.status;
        return d !== s || f !== Zh;
      })),
        n.forEach(function (c) {
          c.key === s && (c.status = Xh);
        });
    }),
    n
  );
}
var v4 = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  m4 = ["status"],
  g4 = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd",
  ];
function y4(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ic,
    n = (function (r) {
      Ov(o, r);
      var i = Pv(o);
      function o() {
        var a;
        Ar(this, o);
        for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
          l[s] = arguments[s];
        return (
          (a = i.call.apply(i, [this].concat(l))),
          (a.state = { keyEntities: [] }),
          (a.removeKey = function (c) {
            var d = a.state.keyEntities,
              f = d.map(function (h) {
                return h.key !== c ? h : K(K({}, h), {}, { status: Zf });
              });
            return (
              a.setState({ keyEntities: f }),
              f.filter(function (h) {
                var v = h.status;
                return v !== Zf;
              }).length
            );
          }),
          a
        );
      }
      return (
        Fr(
          o,
          [
            {
              key: "render",
              value: function () {
                var u = this,
                  l = this.state.keyEntities,
                  s = this.props,
                  c = s.component,
                  d = s.children,
                  f = s.onVisibleChanged,
                  h = s.onAllRemoved,
                  v = jo(s, v4),
                  y = c || S.Fragment,
                  b = {};
                return (
                  g4.forEach(function (m) {
                    (b[m] = v[m]), delete v[m];
                  }),
                  delete v.keys,
                  S.createElement(
                    y,
                    v,
                    l.map(function (m) {
                      var p = m.status,
                        g = jo(m, m4),
                        w = p === Yh || p === Xh;
                      return S.createElement(
                        t,
                        It({}, b, {
                          key: g.key,
                          visible: w,
                          eventProps: g,
                          onVisibleChanged: function (C) {
                            if ((f == null || f(C, { key: g.key }), !C)) {
                              var E = u.removeKey(g.key);
                              E === 0 && h && h();
                            }
                          },
                        }),
                        d
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (u, l) {
                var s = u.keys,
                  c = l.keyEntities,
                  d = Jh(s),
                  f = p4(c, d);
                return {
                  keyEntities: f.filter(function (h) {
                    var v = c.find(function (y) {
                      var b = y.key;
                      return h.key === b;
                    });
                    return !(v && v.status === Zf && h.status === Zh);
                  }),
                };
              },
            },
          ]
        ),
        o
      );
    })(S.Component);
  return (n.defaultProps = { component: "div" }), n;
}
const w4 = y4(jb);
function ky(e) {
  var t = S.useRef();
  t.current = e;
  var n = S.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
var vu = Fn() ? S.useLayoutEffect : S.useEffect,
  My = function (t, n) {
    var r = S.useRef(!0);
    vu(function () {
      if (!r.current) return t();
    }, n),
      vu(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  };
function Jf(e) {
  return e !== void 0;
}
function qb(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    u = xo(function () {
      return Jf(i)
        ? i
        : Jf(r)
        ? typeof r == "function"
          ? r()
          : r
        : typeof e == "function"
        ? e()
        : e;
    }),
    l = ks(u, 2),
    s = l[0],
    c = l[1],
    d = i !== void 0 ? i : s,
    f = a ? a(d) : d,
    h = ky(o),
    v = xo([d]),
    y = ks(v, 2),
    b = y[0],
    m = y[1];
  My(
    function () {
      var g = b[0];
      s !== g && h(s, g);
    },
    [b]
  ),
    My(
      function () {
        Jf(i) || c(i);
      },
      [i]
    );
  var p = ky(function (g, w) {
    c(g, w), m([d], w);
  });
  return [f, p];
}
var ne = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (t) {
      var n = t.keyCode;
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ne.F1 && n <= ne.F12))
        return !1;
      switch (n) {
        case ne.ALT:
        case ne.CAPS_LOCK:
        case ne.CONTEXT_MENU:
        case ne.CTRL:
        case ne.DOWN:
        case ne.END:
        case ne.ESC:
        case ne.HOME:
        case ne.INSERT:
        case ne.LEFT:
        case ne.MAC_FF_META:
        case ne.META:
        case ne.NUMLOCK:
        case ne.NUM_CENTER:
        case ne.PAGE_DOWN:
        case ne.PAGE_UP:
        case ne.PAUSE:
        case ne.PRINT_SCREEN:
        case ne.RIGHT:
        case ne.SHIFT:
        case ne.UP:
        case ne.WIN_KEY:
        case ne.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function (t) {
      if (
        (t >= ne.ZERO && t <= ne.NINE) ||
        (t >= ne.NUM_ZERO && t <= ne.NUM_MULTIPLY) ||
        (t >= ne.A && t <= ne.Z) ||
        (window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      )
        return !0;
      switch (t) {
        case ne.SPACE:
        case ne.QUESTION_MARK:
        case ne.NUM_PLUS:
        case ne.NUM_MINUS:
        case ne.NUM_PERIOD:
        case ne.NUM_DIVISION:
        case ne.SEMICOLON:
        case ne.DASH:
        case ne.EQUALS:
        case ne.COMMA:
        case ne.PERIOD:
        case ne.SLASH:
        case ne.APOSTROPHE:
        case ne.SINGLE_QUOTE:
        case ne.OPEN_SQUARE_BRACKET:
        case ne.BACKSLASH:
        case ne.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    },
  },
  S4 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  b4 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  C4 = ""
    .concat(S4, " ")
    .concat(b4)
    .split(/[\s\n]+/),
  E4 = "aria-",
  x4 = "data-";
function Ty(e, t) {
  return e.indexOf(t) === 0;
}
function O4(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
    ? (n = { aria: !0 })
    : (n = Iu({}, t));
  var r = {};
  return (
    Object.keys(e).forEach(function (i) {
      ((n.aria && (i === "role" || Ty(i, E4))) ||
        (n.data && Ty(i, x4)) ||
        (n.attr && C4.includes(i))) &&
        (r[i] = e[i]);
    }),
    r
  );
}
const ed = () => ({ height: 0, opacity: 0 }),
  $y = (e) => {
    const { scrollHeight: t } = e;
    return { height: t, opacity: 1 };
  },
  P4 = (e) => ({ height: e ? e.offsetHeight : 0 }),
  td = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height",
  R4 = function () {
    return {
      motionName: `${
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"
      }-motion-collapse`,
      onAppearStart: ed,
      onEnterStart: ed,
      onAppearActive: $y,
      onEnterActive: $y,
      onLeaveStart: P4,
      onLeaveActive: ed,
      onAppearEnd: td,
      onEnterEnd: td,
      onLeaveEnd: td,
      motionDeadline: 500,
    };
  },
  mI = (e) =>
    e !== void 0 && (e === "topLeft" || e === "topRight")
      ? "slide-down"
      : "slide-up",
  Ms = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  gI = R4;
var k4 = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
        },
      },
    ],
  },
  name: "loading",
  theme: "outlined",
};
const M4 = k4;
var Bb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: M4 }));
};
Bb.displayName = "LoadingOutlined";
const T4 = S.forwardRef(Bb),
  $4 = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  A4 = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  Vb = function (e, t, n, r) {
    const o = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? "&"
      : "";
    return {
      [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, $4(r)), {
        animationPlayState: "paused",
      }),
      [`${o}${e}-leave`]: Object.assign(Object.assign({}, A4(r)), {
        animationPlayState: "paused",
      }),
      [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: "running" },
      [`${o}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: "running",
        pointerEvents: "none",
      },
    };
  },
  F4 = new At("antFadeIn", { "0%": { opacity: 0 }, "100%": { opacity: 1 } }),
  _4 = new At("antFadeOut", { "0%": { opacity: 1 }, "100%": { opacity: 0 } }),
  Qb = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const { antCls: n } = e,
      r = `${n}-fade`,
      i = t ? "&" : "";
    return [
      Vb(r, F4, _4, e.motionDurationMid, t),
      {
        [`
        ${i}${r}-enter,
        ${i}${r}-appear
      `]: { opacity: 0, animationTimingFunction: "linear" },
        [`${i}${r}-leave`]: { animationTimingFunction: "linear" },
      },
    ];
  },
  N4 = new At("antZoomIn", {
    "0%": { transform: "scale(0.2)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  I4 = new At("antZoomOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.2)", opacity: 0 },
  }),
  Ay = new At("antZoomBigIn", {
    "0%": { transform: "scale(0.8)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  Fy = new At("antZoomBigOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.8)", opacity: 0 },
  }),
  L4 = new At("antZoomUpIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
  }),
  D4 = new At("antZoomUpOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
  }),
  j4 = new At("antZoomLeftIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
  }),
  z4 = new At("antZoomLeftOut", {
    "0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
  }),
  U4 = new At("antZoomRightIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
  }),
  H4 = new At("antZoomRightOut", {
    "0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0,
    },
  }),
  q4 = new At("antZoomDownIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
  }),
  B4 = new At("antZoomDownOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0,
    },
  }),
  V4 = {
    zoom: { inKeyframes: N4, outKeyframes: I4 },
    "zoom-big": { inKeyframes: Ay, outKeyframes: Fy },
    "zoom-big-fast": { inKeyframes: Ay, outKeyframes: Fy },
    "zoom-left": { inKeyframes: j4, outKeyframes: z4 },
    "zoom-right": { inKeyframes: U4, outKeyframes: H4 },
    "zoom-up": { inKeyframes: L4, outKeyframes: D4 },
    "zoom-down": { inKeyframes: q4, outKeyframes: B4 },
  },
  Wb = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: i, outKeyframes: o } = V4[t];
    return [
      Vb(
        r,
        i,
        o,
        t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: "scale(0)",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          "&-prepare": { transform: "none" },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  Ir = (e, t) => new ft(e).setAlpha(t).toRgbString(),
  Zi = (e, t) => new ft(e).lighten(t).toHexString(),
  Q4 = (e) => {
    const t = Tr(e, { theme: "dark" });
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[6],
      6: t[5],
      7: t[4],
      8: t[6],
      9: t[5],
      10: t[4],
    };
  },
  W4 = (e, t) => {
    const n = e || "#000",
      r = t || "#fff";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Ir(r, 0.85),
      colorTextSecondary: Ir(r, 0.65),
      colorTextTertiary: Ir(r, 0.45),
      colorTextQuaternary: Ir(r, 0.25),
      colorFill: Ir(r, 0.18),
      colorFillSecondary: Ir(r, 0.12),
      colorFillTertiary: Ir(r, 0.08),
      colorFillQuaternary: Ir(r, 0.04),
      colorBgElevated: Zi(n, 12),
      colorBgContainer: Zi(n, 8),
      colorBgLayout: Zi(n, 0),
      colorBgSpotlight: Zi(n, 26),
      colorBorder: Zi(n, 26),
      colorBorderSecondary: Zi(n, 19),
    };
  },
  K4 = (e, t) => {
    const n = Object.keys(Iv)
        .map((i) => {
          const o = Tr(e[i], { theme: "dark" });
          return new Array(10)
            .fill(1)
            .reduce((a, u, l) => ((a[`${i}-${l + 1}`] = o[l]), a), {});
        })
        .reduce(
          (i, o) => ((i = Object.assign(Object.assign({}, i), o)), i),
          {}
        ),
      r = t ?? $c(e);
    return Object.assign(
      Object.assign(Object.assign({}, r), n),
      sb(e, { generateColorPalettes: Q4, generateNeutralColorPalettes: W4 })
    );
  },
  G4 = K4;
function Y4(e) {
  const { sizeUnit: t, sizeStep: n } = e,
    r = n - 2;
  return {
    sizeXXL: t * (r + 10),
    sizeXL: t * (r + 6),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 2),
    sizeMS: t * (r + 1),
    size: t * r,
    sizeSM: t * r,
    sizeXS: t * (r - 1),
    sizeXXS: t * (r - 1),
  };
}
const X4 = (e, t) => {
    const n = t ?? $c(e),
      r = n.fontSizeSM,
      i = n.controlHeight - 4;
    return Object.assign(
      Object.assign(
        Object.assign(Object.assign(Object.assign({}, n), Y4(t ?? e)), cb(r)),
        { controlHeight: i }
      ),
      lb(Object.assign(Object.assign({}, n), { controlHeight: i }))
    );
  },
  Z4 = X4;
function J4() {
  const [e, t, n] = jv();
  return { theme: e, token: t, hashId: n };
}
const e$ = {
  defaultConfig: Os,
  defaultSeed: Os.token,
  useToken: J4,
  defaultAlgorithm: $c,
  darkAlgorithm: G4,
  compactAlgorithm: Z4,
};
var t$ = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
        },
      },
    ],
  },
  name: "left",
  theme: "outlined",
};
const n$ = t$;
var Kb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: n$ }));
};
Kb.displayName = "LeftOutlined";
const r$ = S.forwardRef(Kb);
var i$ = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
        },
      },
    ],
  },
  name: "right",
  theme: "outlined",
};
const o$ = i$;
var Gb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: o$ }));
};
Gb.displayName = "RightOutlined";
const a$ = S.forwardRef(Gb);
function mu() {
  mu = function () {
    return e;
  };
  var e = {},
    t = Object.prototype,
    n = t.hasOwnProperty,
    r =
      Object.defineProperty ||
      function (P, O, R) {
        P[O] = R.value;
      },
    i = typeof Symbol == "function" ? Symbol : {},
    o = i.iterator || "@@iterator",
    a = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function l(P, O, R) {
    return (
      Object.defineProperty(P, O, {
        value: R,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      P[O]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (R, $, F) {
      return (R[$] = F);
    };
  }
  function s(P, O, R, $) {
    var F = O && O.prototype instanceof f ? O : f,
      N = Object.create(F.prototype),
      _ = new M($ || []);
    return r(N, "_invoke", { value: x(P, R, _) }), N;
  }
  function c(P, O, R) {
    try {
      return { type: "normal", arg: P.call(O, R) };
    } catch ($) {
      return { type: "throw", arg: $ };
    }
  }
  e.wrap = s;
  var d = {};
  function f() {}
  function h() {}
  function v() {}
  var y = {};
  l(y, o, function () {
    return this;
  });
  var b = Object.getPrototypeOf,
    m = b && b(b(T([])));
  m && m !== t && n.call(m, o) && (y = m);
  var p = (v.prototype = f.prototype = Object.create(y));
  function g(P) {
    ["next", "throw", "return"].forEach(function (O) {
      l(P, O, function (R) {
        return this._invoke(O, R);
      });
    });
  }
  function w(P, O) {
    function R(F, N, _, I) {
      var L = c(P[F], P, N);
      if (L.type !== "throw") {
        var H = L.arg,
          q = H.value;
        return q && Hi(q) == "object" && n.call(q, "__await")
          ? O.resolve(q.__await).then(
              function (V) {
                R("next", V, _, I);
              },
              function (V) {
                R("throw", V, _, I);
              }
            )
          : O.resolve(q).then(
              function (V) {
                (H.value = V), _(H);
              },
              function (V) {
                return R("throw", V, _, I);
              }
            );
      }
      I(L.arg);
    }
    var $;
    r(this, "_invoke", {
      value: function (N, _) {
        function I() {
          return new O(function (L, H) {
            R(N, _, L, H);
          });
        }
        return ($ = $ ? $.then(I, I) : I());
      },
    });
  }
  function x(P, O, R) {
    var $ = "suspendedStart";
    return function (F, N) {
      if ($ === "executing") throw new Error("Generator is already running");
      if ($ === "completed") {
        if (F === "throw") throw N;
        return A();
      }
      for (R.method = F, R.arg = N; ; ) {
        var _ = R.delegate;
        if (_) {
          var I = C(_, R);
          if (I) {
            if (I === d) continue;
            return I;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if ($ === "suspendedStart") throw (($ = "completed"), R.arg);
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        $ = "executing";
        var L = c(P, O, R);
        if (L.type === "normal") {
          if ((($ = R.done ? "completed" : "suspendedYield"), L.arg === d))
            continue;
          return { value: L.arg, done: R.done };
        }
        L.type === "throw" &&
          (($ = "completed"), (R.method = "throw"), (R.arg = L.arg));
      }
    };
  }
  function C(P, O) {
    var R = P.iterator[O.method];
    if (R === void 0) {
      if (((O.delegate = null), O.method === "throw")) {
        if (
          P.iterator.return &&
          ((O.method = "return"),
          (O.arg = void 0),
          C(P, O),
          O.method === "throw")
        )
          return d;
        (O.method = "throw"),
          (O.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          ));
      }
      return d;
    }
    var $ = c(R, P.iterator, O.arg);
    if ($.type === "throw")
      return (O.method = "throw"), (O.arg = $.arg), (O.delegate = null), d;
    var F = $.arg;
    return F
      ? F.done
        ? ((O[P.resultName] = F.value),
          (O.next = P.nextLoc),
          O.method !== "return" && ((O.method = "next"), (O.arg = void 0)),
          (O.delegate = null),
          d)
        : F
      : ((O.method = "throw"),
        (O.arg = new TypeError("iterator result is not an object")),
        (O.delegate = null),
        d);
  }
  function E(P) {
    var O = { tryLoc: P[0] };
    1 in P && (O.catchLoc = P[1]),
      2 in P && ((O.finallyLoc = P[2]), (O.afterLoc = P[3])),
      this.tryEntries.push(O);
  }
  function k(P) {
    var O = P.completion || {};
    (O.type = "normal"), delete O.arg, (P.completion = O);
  }
  function M(P) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      P.forEach(E, this),
      this.reset(!0);
  }
  function T(P) {
    if (P) {
      var O = P[o];
      if (O) return O.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var R = -1,
          $ = function F() {
            for (; ++R < P.length; )
              if (n.call(P, R)) return (F.value = P[R]), (F.done = !1), F;
            return (F.value = void 0), (F.done = !0), F;
          };
        return ($.next = $);
      }
    }
    return { next: A };
  }
  function A() {
    return { value: void 0, done: !0 };
  }
  return (
    (h.prototype = v),
    r(p, "constructor", { value: v, configurable: !0 }),
    r(v, "constructor", { value: h, configurable: !0 }),
    (h.displayName = l(v, u, "GeneratorFunction")),
    (e.isGeneratorFunction = function (P) {
      var O = typeof P == "function" && P.constructor;
      return (
        !!O && (O === h || (O.displayName || O.name) === "GeneratorFunction")
      );
    }),
    (e.mark = function (P) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(P, v)
          : ((P.__proto__ = v), l(P, u, "GeneratorFunction")),
        (P.prototype = Object.create(p)),
        P
      );
    }),
    (e.awrap = function (P) {
      return { __await: P };
    }),
    g(w.prototype),
    l(w.prototype, a, function () {
      return this;
    }),
    (e.AsyncIterator = w),
    (e.async = function (P, O, R, $, F) {
      F === void 0 && (F = Promise);
      var N = new w(s(P, O, R, $), F);
      return e.isGeneratorFunction(O)
        ? N
        : N.next().then(function (_) {
            return _.done ? _.value : N.next();
          });
    }),
    g(p),
    l(p, u, "Generator"),
    l(p, o, function () {
      return this;
    }),
    l(p, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (P) {
      var O = Object(P),
        R = [];
      for (var $ in O) R.push($);
      return (
        R.reverse(),
        function F() {
          for (; R.length; ) {
            var N = R.pop();
            if (N in O) return (F.value = N), (F.done = !1), F;
          }
          return (F.done = !0), F;
        }
      );
    }),
    (e.values = T),
    (M.prototype = {
      constructor: M,
      reset: function (O) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(k),
          !O)
        )
          for (var R in this)
            R.charAt(0) === "t" &&
              n.call(this, R) &&
              !isNaN(+R.slice(1)) &&
              (this[R] = void 0);
      },
      stop: function () {
        this.done = !0;
        var O = this.tryEntries[0].completion;
        if (O.type === "throw") throw O.arg;
        return this.rval;
      },
      dispatchException: function (O) {
        if (this.done) throw O;
        var R = this;
        function $(H, q) {
          return (
            (_.type = "throw"),
            (_.arg = O),
            (R.next = H),
            q && ((R.method = "next"), (R.arg = void 0)),
            !!q
          );
        }
        for (var F = this.tryEntries.length - 1; F >= 0; --F) {
          var N = this.tryEntries[F],
            _ = N.completion;
          if (N.tryLoc === "root") return $("end");
          if (N.tryLoc <= this.prev) {
            var I = n.call(N, "catchLoc"),
              L = n.call(N, "finallyLoc");
            if (I && L) {
              if (this.prev < N.catchLoc) return $(N.catchLoc, !0);
              if (this.prev < N.finallyLoc) return $(N.finallyLoc);
            } else if (I) {
              if (this.prev < N.catchLoc) return $(N.catchLoc, !0);
            } else {
              if (!L) throw new Error("try statement without catch or finally");
              if (this.prev < N.finallyLoc) return $(N.finallyLoc);
            }
          }
        }
      },
      abrupt: function (O, R) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var F = this.tryEntries[$];
          if (
            F.tryLoc <= this.prev &&
            n.call(F, "finallyLoc") &&
            this.prev < F.finallyLoc
          ) {
            var N = F;
            break;
          }
        }
        N &&
          (O === "break" || O === "continue") &&
          N.tryLoc <= R &&
          R <= N.finallyLoc &&
          (N = null);
        var _ = N ? N.completion : {};
        return (
          (_.type = O),
          (_.arg = R),
          N
            ? ((this.method = "next"), (this.next = N.finallyLoc), d)
            : this.complete(_)
        );
      },
      complete: function (O, R) {
        if (O.type === "throw") throw O.arg;
        return (
          O.type === "break" || O.type === "continue"
            ? (this.next = O.arg)
            : O.type === "return"
            ? ((this.rval = this.arg = O.arg),
              (this.method = "return"),
              (this.next = "end"))
            : O.type === "normal" && R && (this.next = R),
          d
        );
      },
      finish: function (O) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var $ = this.tryEntries[R];
          if ($.finallyLoc === O)
            return this.complete($.completion, $.afterLoc), k($), d;
        }
      },
      catch: function (O) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var $ = this.tryEntries[R];
          if ($.tryLoc === O) {
            var F = $.completion;
            if (F.type === "throw") {
              var N = F.arg;
              k($);
            }
            return N;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (O, R, $) {
        return (
          (this.delegate = { iterator: T(O), resultName: R, nextLoc: $ }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      },
    }),
    e
  );
}
function _y(e, t, n, r, i, o, a) {
  try {
    var u = e[o](a),
      l = u.value;
  } catch (s) {
    n(s);
    return;
  }
  u.done ? t(l) : Promise.resolve(l).then(r, i);
}
function Yb(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var o = e.apply(t, n);
      function a(l) {
        _y(o, r, i, a, u, "next", l);
      }
      function u(l) {
        _y(o, r, i, a, u, "throw", l);
      }
      a(void 0);
    });
  };
}
var ju = Iu({}, bP),
  u$ = ju.version,
  l$ = ju.render,
  s$ = ju.unmountComponentAtNode,
  Lc;
try {
  var c$ = Number((u$ || "").split(".")[0]);
  c$ >= 18 && (Lc = ju.createRoot);
} catch {}
function Ny(e) {
  var t = ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Hi(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ts = "__rc_react_root__";
function f$(e, t) {
  Ny(!0);
  var n = t[Ts] || Lc(t);
  Ny(!1), n.render(e), (t[Ts] = n);
}
function d$(e, t) {
  l$(e, t);
}
function h$(e, t) {
  if (Lc) {
    f$(e, t);
    return;
  }
  d$(e, t);
}
function p$(e) {
  return ep.apply(this, arguments);
}
function ep() {
  return (
    (ep = Yb(
      mu().mark(function e(t) {
        return mu().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.resolve().then(function () {
                    var i;
                    (i = t[Ts]) === null || i === void 0 || i.unmount(),
                      delete t[Ts];
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    ep.apply(this, arguments)
  );
}
function v$(e) {
  s$(e);
}
function yI(e) {
  return tp.apply(this, arguments);
}
function tp() {
  return (
    (tp = Yb(
      mu().mark(function e(t) {
        return mu().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Lc === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return", p$(t));
              case 2:
                v$(t);
              case 3:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    tp.apply(this, arguments)
  );
}
const m$ = (e) => {
    const { prefixCls: t, className: n, style: r, size: i, shape: o } = e,
      a = be({ [`${t}-lg`]: i === "large", [`${t}-sm`]: i === "small" }),
      u = be({
        [`${t}-circle`]: o === "circle",
        [`${t}-square`]: o === "square",
        [`${t}-round`]: o === "round",
      }),
      l = S.useMemo(
        () =>
          typeof i == "number"
            ? { width: i, height: i, lineHeight: `${i}px` }
            : {},
        [i]
      );
    return S.createElement("span", {
      className: be(t, a, u, n),
      style: Object.assign(Object.assign({}, l), r),
    });
  },
  Dc = m$,
  g$ = new At("ant-skeleton-loading", {
    "0%": { transform: "translateX(-37.5%)" },
    "100%": { transform: "translateX(37.5%)" },
  }),
  jc = (e) => ({ height: e, lineHeight: `${e}px` }),
  Oo = (e) => Object.assign({ width: e }, jc(e)),
  y$ = (e) => ({
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
    background: "transparent",
    "&::after": {
      position: "absolute",
      top: 0,
      insetInlineEnd: "-150%",
      bottom: 0,
      insetInlineStart: "-150%",
      background: e.skeletonLoadingBackground,
      animationName: g$,
      animationDuration: e.skeletonLoadingMotionDuration,
      animationTimingFunction: "ease",
      animationIterationCount: "infinite",
      content: '""',
    },
  }),
  nd = (e) => Object.assign({ width: e * 5, minWidth: e * 5 }, jc(e)),
  w$ = (e) => {
    const {
      skeletonAvatarCls: t,
      color: n,
      controlHeight: r,
      controlHeightLG: i,
      controlHeightSM: o,
    } = e;
    return {
      [`${t}`]: Object.assign(
        { display: "inline-block", verticalAlign: "top", background: n },
        Oo(r)
      ),
      [`${t}${t}-circle`]: { borderRadius: "50%" },
      [`${t}${t}-lg`]: Object.assign({}, Oo(i)),
      [`${t}${t}-sm`]: Object.assign({}, Oo(o)),
    };
  },
  S$ = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: n,
      skeletonInputCls: r,
      controlHeightLG: i,
      controlHeightSM: o,
      color: a,
    } = e;
    return {
      [`${r}`]: Object.assign(
        {
          display: "inline-block",
          verticalAlign: "top",
          background: a,
          borderRadius: n,
        },
        nd(t)
      ),
      [`${r}-lg`]: Object.assign({}, nd(i)),
      [`${r}-sm`]: Object.assign({}, nd(o)),
    };
  },
  Iy = (e) => Object.assign({ width: e }, jc(e)),
  b$ = (e) => {
    const {
      skeletonImageCls: t,
      imageSizeBase: n,
      color: r,
      borderRadiusSM: i,
    } = e;
    return {
      [`${t}`]: Object.assign(
        Object.assign(
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "top",
            background: r,
            borderRadius: i,
          },
          Iy(n * 2)
        ),
        {
          [`${t}-path`]: { fill: "#bfbfbf" },
          [`${t}-svg`]: Object.assign(Object.assign({}, Iy(n)), {
            maxWidth: n * 4,
            maxHeight: n * 4,
          }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: "50%" },
        }
      ),
      [`${t}${t}-circle`]: { borderRadius: "50%" },
    };
  },
  rd = (e, t, n) => {
    const { skeletonButtonCls: r } = e;
    return {
      [`${n}${r}-circle`]: { width: t, minWidth: t, borderRadius: "50%" },
      [`${n}${r}-round`]: { borderRadius: t },
    };
  },
  id = (e) => Object.assign({ width: e * 2, minWidth: e * 2 }, jc(e)),
  C$ = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: n,
      controlHeight: r,
      controlHeightLG: i,
      controlHeightSM: o,
      color: a,
    } = e;
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${n}`]: Object.assign(
                  {
                    display: "inline-block",
                    verticalAlign: "top",
                    background: a,
                    borderRadius: t,
                    width: r * 2,
                    minWidth: r * 2,
                  },
                  id(r)
                ),
              },
              rd(e, r, n)
            ),
            { [`${n}-lg`]: Object.assign({}, id(i)) }
          ),
          rd(e, i, `${n}-lg`)
        ),
        { [`${n}-sm`]: Object.assign({}, id(o)) }
      ),
      rd(e, o, `${n}-sm`)
    );
  },
  E$ = (e) => {
    const {
      componentCls: t,
      skeletonAvatarCls: n,
      skeletonTitleCls: r,
      skeletonParagraphCls: i,
      skeletonButtonCls: o,
      skeletonInputCls: a,
      skeletonImageCls: u,
      controlHeight: l,
      controlHeightLG: s,
      controlHeightSM: c,
      color: d,
      padding: f,
      marginSM: h,
      borderRadius: v,
      skeletonTitleHeight: y,
      skeletonBlockRadius: b,
      skeletonParagraphLineHeight: m,
      controlHeightXS: p,
      skeletonParagraphMarginTop: g,
    } = e;
    return {
      [`${t}`]: {
        display: "table",
        width: "100%",
        [`${t}-header`]: {
          display: "table-cell",
          paddingInlineEnd: f,
          verticalAlign: "top",
          [`${n}`]: Object.assign(
            { display: "inline-block", verticalAlign: "top", background: d },
            Oo(l)
          ),
          [`${n}-circle`]: { borderRadius: "50%" },
          [`${n}-lg`]: Object.assign({}, Oo(s)),
          [`${n}-sm`]: Object.assign({}, Oo(c)),
        },
        [`${t}-content`]: {
          display: "table-cell",
          width: "100%",
          verticalAlign: "top",
          [`${r}`]: {
            width: "100%",
            height: y,
            background: d,
            borderRadius: b,
            [`+ ${i}`]: { marginBlockStart: c },
          },
          [`${i}`]: {
            padding: 0,
            "> li": {
              width: "100%",
              height: m,
              listStyle: "none",
              background: d,
              borderRadius: b,
              "+ li": { marginBlockStart: p },
            },
          },
          [`${i}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: "61%",
          },
        },
        [`&-round ${t}-content`]: { [`${r}, ${i} > li`]: { borderRadius: v } },
      },
      [`${t}-with-avatar ${t}-content`]: {
        [`${r}`]: { marginBlockStart: h, [`+ ${i}`]: { marginBlockStart: g } },
      },
      [`${t}${t}-element`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({ display: "inline-block", width: "auto" }, C$(e)),
            w$(e)
          ),
          S$(e)
        ),
        b$(e)
      ),
      [`${t}${t}-block`]: {
        width: "100%",
        [`${o}`]: { width: "100%" },
        [`${a}`]: { width: "100%" },
      },
      [`${t}${t}-active`]: {
        [`
        ${r},
        ${i} > li,
        ${n},
        ${o},
        ${a},
        ${u}
      `]: Object.assign({}, y$(e)),
      },
    };
  },
  Jo = Ac(
    "Skeleton",
    (e) => {
      const { componentCls: t } = e,
        n = Ho(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: e.controlHeight * 1.5,
          skeletonTitleHeight: e.controlHeight / 2,
          skeletonBlockRadius: e.borderRadiusSM,
          skeletonParagraphLineHeight: e.controlHeight / 2,
          skeletonParagraphMarginTop: e.marginLG + e.marginXXS,
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,
          skeletonLoadingMotionDuration: "1.4s",
        });
      return [E$(n)];
    },
    (e) => {
      const { colorFillContent: t, colorFill: n } = e;
      return { color: t, colorGradientEnd: n };
    }
  ),
  x$ = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: i,
        shape: o = "circle",
        size: a = "default",
      } = e,
      { getPrefixCls: u } = S.useContext(en),
      l = u("skeleton", t),
      [s, c] = Jo(l),
      d = Rv(e, ["prefixCls", "className"]),
      f = be(l, `${l}-element`, { [`${l}-active`]: i }, n, r, c);
    return s(
      S.createElement(
        "div",
        { className: f },
        S.createElement(
          Dc,
          Object.assign({ prefixCls: `${l}-avatar`, shape: o, size: a }, d)
        )
      )
    );
  },
  O$ = x$,
  P$ = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: i,
        block: o = !1,
        size: a = "default",
      } = e,
      { getPrefixCls: u } = S.useContext(en),
      l = u("skeleton", t),
      [s, c] = Jo(l),
      d = Rv(e, ["prefixCls"]),
      f = be(
        l,
        `${l}-element`,
        { [`${l}-active`]: i, [`${l}-block`]: o },
        n,
        r,
        c
      );
    return s(
      S.createElement(
        "div",
        { className: f },
        S.createElement(
          Dc,
          Object.assign({ prefixCls: `${l}-button`, size: a }, d)
        )
      )
    );
  },
  R$ = P$;
var k$ = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z",
        },
      },
    ],
  },
  name: "dot-chart",
  theme: "outlined",
};
const M$ = k$;
var Xb = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: M$ }));
};
Xb.displayName = "DotChartOutlined";
const T$ = S.forwardRef(Xb),
  $$ = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        style: i,
        active: o,
        children: a,
      } = e,
      { getPrefixCls: u } = S.useContext(en),
      l = u("skeleton", t),
      [s, c] = Jo(l),
      d = be(l, `${l}-element`, { [`${l}-active`]: o }, c, n, r),
      f = a ?? S.createElement(T$, null);
    return s(
      S.createElement(
        "div",
        { className: d },
        S.createElement("div", { className: be(`${l}-image`, n), style: i }, f)
      )
    );
  },
  A$ = $$,
  F$ =
    "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
  _$ = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        style: i,
        active: o,
      } = e,
      { getPrefixCls: a } = S.useContext(en),
      u = a("skeleton", t),
      [l, s] = Jo(u),
      c = be(u, `${u}-element`, { [`${u}-active`]: o }, n, r, s);
    return l(
      S.createElement(
        "div",
        { className: c },
        S.createElement(
          "div",
          { className: be(`${u}-image`, n), style: i },
          S.createElement(
            "svg",
            {
              viewBox: "0 0 1098 1024",
              xmlns: "http://www.w3.org/2000/svg",
              className: `${u}-image-svg`,
            },
            S.createElement("path", { d: F$, className: `${u}-image-path` })
          )
        )
      )
    );
  },
  N$ = _$,
  I$ = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: i,
        block: o,
        size: a = "default",
      } = e,
      { getPrefixCls: u } = S.useContext(en),
      l = u("skeleton", t),
      [s, c] = Jo(l),
      d = Rv(e, ["prefixCls"]),
      f = be(
        l,
        `${l}-element`,
        { [`${l}-active`]: i, [`${l}-block`]: o },
        n,
        r,
        c
      );
    return s(
      S.createElement(
        "div",
        { className: f },
        S.createElement(
          Dc,
          Object.assign({ prefixCls: `${l}-input`, size: a }, d)
        )
      )
    );
  },
  L$ = I$,
  D$ = (e) => {
    const t = (u) => {
        const { width: l, rows: s = 2 } = e;
        if (Array.isArray(l)) return l[u];
        if (s - 1 === u) return l;
      },
      { prefixCls: n, className: r, style: i, rows: o } = e,
      a = gb(Array(o)).map((u, l) =>
        S.createElement("li", { key: l, style: { width: t(l) } })
      );
    return S.createElement("ul", { className: be(n, r), style: i }, a);
  },
  j$ = D$,
  z$ = (e) => {
    let { prefixCls: t, className: n, width: r, style: i } = e;
    return S.createElement("h3", {
      className: be(t, n),
      style: Object.assign({ width: r }, i),
    });
  },
  U$ = z$;
function od(e) {
  return e && typeof e == "object" ? e : {};
}
function H$(e, t) {
  return e && !t
    ? { size: "large", shape: "square" }
    : { size: "large", shape: "circle" };
}
function q$(e, t) {
  return !e && t ? { width: "38%" } : e && t ? { width: "50%" } : {};
}
function B$(e, t) {
  const n = {};
  return (
    (!e || !t) && (n.width = "61%"), !e && t ? (n.rows = 3) : (n.rows = 2), n
  );
}
const ea = (e) => {
  const {
      prefixCls: t,
      loading: n,
      className: r,
      rootClassName: i,
      style: o,
      children: a,
      avatar: u = !1,
      title: l = !0,
      paragraph: s = !0,
      active: c,
      round: d,
    } = e,
    { getPrefixCls: f, direction: h } = S.useContext(en),
    v = f("skeleton", t),
    [y, b] = Jo(v);
  if (n || !("loading" in e)) {
    const m = !!u,
      p = !!l,
      g = !!s;
    let w;
    if (m) {
      const E = Object.assign(
        Object.assign({ prefixCls: `${v}-avatar` }, H$(p, g)),
        od(u)
      );
      w = S.createElement(
        "div",
        { className: `${v}-header` },
        S.createElement(Dc, Object.assign({}, E))
      );
    }
    let x;
    if (p || g) {
      let E;
      if (p) {
        const M = Object.assign(
          Object.assign({ prefixCls: `${v}-title` }, q$(m, g)),
          od(l)
        );
        E = S.createElement(U$, Object.assign({}, M));
      }
      let k;
      if (g) {
        const M = Object.assign(
          Object.assign({ prefixCls: `${v}-paragraph` }, B$(m, p)),
          od(s)
        );
        k = S.createElement(j$, Object.assign({}, M));
      }
      x = S.createElement("div", { className: `${v}-content` }, E, k);
    }
    const C = be(
      v,
      {
        [`${v}-with-avatar`]: m,
        [`${v}-active`]: c,
        [`${v}-rtl`]: h === "rtl",
        [`${v}-round`]: d,
      },
      r,
      i,
      b
    );
    return y(S.createElement("div", { className: C, style: o }, w, x));
  }
  return typeof a < "u" ? a : null;
};
ea.Button = R$;
ea.Avatar = O$;
ea.Input = L$;
ea.Image = N$;
ea.Node = A$;
const V$ = ea;
var Zb = S.createContext(null),
  Ly = [];
function Q$(e, t) {
  var n = S.useState(function () {
      if (!Fn()) return null;
      var v = document.createElement("div");
      return v;
    }),
    r = we(n, 1),
    i = r[0],
    o = S.useRef(!1),
    a = S.useContext(Zb),
    u = S.useState(Ly),
    l = we(u, 2),
    s = l[0],
    c = l[1],
    d =
      a ||
      (o.current
        ? void 0
        : function (v) {
            c(function (y) {
              var b = [v].concat(de(y));
              return b;
            });
          });
  function f() {
    i.parentElement || document.body.appendChild(i), (o.current = !0);
  }
  function h() {
    var v;
    (v = i.parentElement) === null || v === void 0 || v.removeChild(i),
      (o.current = !1);
  }
  return (
    vu(
      function () {
        return e ? (a ? a(f) : f()) : h(), h;
      },
      [e]
    ),
    vu(
      function () {
        s.length &&
          (s.forEach(function (v) {
            return v();
          }),
          c(Ly));
      },
      [s]
    ),
    [i, d]
  );
}
var ad;
function Jb(e) {
  if (typeof document > "u") return 0;
  if (e || ad === void 0) {
    var t = document.createElement("div");
    (t.style.width = "100%"), (t.style.height = "200px");
    var n = document.createElement("div"),
      r = n.style;
    (r.position = "absolute"),
      (r.top = "0"),
      (r.left = "0"),
      (r.pointerEvents = "none"),
      (r.visibility = "hidden"),
      (r.width = "200px"),
      (r.height = "150px"),
      (r.overflow = "hidden"),
      n.appendChild(t),
      document.body.appendChild(n);
    var i = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    i === o && (o = n.clientWidth), document.body.removeChild(n), (ad = i - o);
  }
  return ad;
}
function Dy(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? Jb() : n;
}
function wI(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  var t = getComputedStyle(e, "::-webkit-scrollbar"),
    n = t.width,
    r = t.height;
  return { width: Dy(n), height: Dy(r) };
}
function W$() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var K$ = "rc-util-locker-".concat(Date.now()),
  jy = 0;
function G$(e) {
  var t = !!e,
    n = S.useState(function () {
      return (jy += 1), "".concat(K$, "_").concat(jy);
    }),
    r = we(n, 1),
    i = r[0];
  vu(
    function () {
      if (t) {
        var o = Jb(),
          a = W$();
        fu(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? "width: calc(100% - ".concat(o, "px);") : "",
            `
}`
          ),
          i
        );
      } else Es(i);
      return function () {
        Es(i);
      };
    },
    [t, i]
  );
}
var zy = !1;
function Y$(e) {
  return typeof e == "boolean" && (zy = e), zy;
}
var Uy = function (t) {
    return t === !1
      ? !1
      : !Fn() || !t
      ? null
      : typeof t == "string"
      ? document.querySelector(t)
      : typeof t == "function"
      ? t()
      : t;
  },
  eC = S.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      i = e.getContainer;
    e.debug;
    var o = e.autoDestroy,
      a = o === void 0 ? !0 : o,
      u = e.children,
      l = S.useState(n),
      s = we(l, 2),
      c = s[0],
      d = s[1],
      f = c || n;
    S.useEffect(
      function () {
        (a || n) && d(n);
      },
      [n, a]
    );
    var h = S.useState(function () {
        return Uy(i);
      }),
      v = we(h, 2),
      y = v[0],
      b = v[1];
    S.useEffect(function () {
      var A = Uy(i);
      b(A ?? null);
    });
    var m = Q$(f && !y),
      p = we(m, 2),
      g = p[0],
      w = p[1],
      x = y ?? g;
    G$(r && n && Fn() && (x === g || x === document.body));
    var C = null;
    if (u && kS(u) && t) {
      var E = u;
      C = E.ref;
    }
    var k = oR(C, t);
    if (!f || !Fn() || y === void 0) return null;
    var M = x === !1 || Y$(),
      T = u;
    return (
      t && (T = S.cloneElement(u, { ref: k })),
      S.createElement(Zb.Provider, { value: w }, M ? T : or.createPortal(T, x))
    );
  }),
  X$ = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",
          },
        },
      ],
    },
    name: "eye",
    theme: "outlined",
  };
const Z$ = X$;
var tC = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: Z$ }));
};
tC.displayName = "EyeOutlined";
const J$ = S.forwardRef(tC);
function Ni() {
  return (
    (Ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ni.apply(this, arguments)
  );
}
function qn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Hy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hy(Object(n), !0).forEach(function (r) {
          qn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function eA(e) {
  if (Array.isArray(e)) return e;
}
function tA(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      u;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (o = !0), (u = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw u;
      }
    }
    return r;
  }
}
function qy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nA(e, t) {
  if (e) {
    if (typeof e == "string") return qy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qy(e, t);
  }
}
function rA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kn(e, t) {
  return eA(e) || tA(e, t) || nA(e, t) || rA();
}
function $s(e) {
  return (
    ($s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $s(e)
  );
}
function iA(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function As(e, t) {
  if (e == null) return {};
  var n = iA(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function nC() {
  var e = document.documentElement.clientWidth,
    t = window.innerHeight || document.documentElement.clientHeight;
  return { width: e, height: t };
}
function oA(e) {
  var t = e.getBoundingClientRect(),
    n = document.documentElement;
  return {
    left:
      t.left +
      (window.pageXOffset || n.scrollLeft) -
      (n.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.pageYOffset || n.scrollTop) -
      (n.clientTop || document.body.clientTop || 0),
  };
}
function aA() {
  var e = Iu({}, Kl);
  return e.useId;
}
var By = 0;
function uA(e) {
  var t = S.useState("ssr-id"),
    n = ks(t, 2),
    r = n[0],
    i = n[1],
    o = aA(),
    a = o == null ? void 0 : o();
  return (
    S.useEffect(function () {
      if (!o) {
        var u = By;
        (By += 1), i("rc_unique_".concat(u));
      }
    }, []),
    e || a || r
  );
}
function lA(e) {
  var t = e.prefixCls,
    n = e.style,
    r = e.visible,
    i = e.maskProps,
    o = e.motionName;
  return S.createElement(
    Ic,
    {
      key: "mask",
      visible: r,
      motionName: o,
      leavedClassName: "".concat(t, "-mask-hidden"),
    },
    function (a, u) {
      var l = a.className,
        s = a.style;
      return S.createElement(
        "div",
        It(
          {
            ref: u,
            style: K(K({}, s), n),
            className: be("".concat(t, "-mask"), l),
          },
          i
        )
      );
    }
  );
}
function Vy(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function Qy(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")],
    r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var i = e.document;
    (n = i.documentElement[r]), typeof n != "number" && (n = i.body[r]);
  }
  return n;
}
function sA(e) {
  var t = e.getBoundingClientRect(),
    n = { left: t.left, top: t.top },
    r = e.ownerDocument,
    i = r.defaultView || r.parentWindow;
  return (n.left += Qy(i)), (n.top += Qy(i, !0)), n;
}
const cA = S.memo(
  function (e) {
    var t = e.children;
    return t;
  },
  function (e, t) {
    var n = t.shouldUpdate;
    return !n;
  }
);
var Wy = { width: 0, height: 0, overflow: "hidden", outline: "none" },
  fA = ce.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.className,
      i = e.style,
      o = e.title,
      a = e.ariaId,
      u = e.footer,
      l = e.closable,
      s = e.closeIcon,
      c = e.onClose,
      d = e.children,
      f = e.bodyStyle,
      h = e.bodyProps,
      v = e.modalRender,
      y = e.onMouseDown,
      b = e.onMouseUp,
      m = e.holderRef,
      p = e.visible,
      g = e.forceRender,
      w = e.width,
      x = e.height,
      C = S.useRef(),
      E = S.useRef();
    ce.useImperativeHandle(t, function () {
      return {
        focus: function () {
          var R;
          (R = C.current) === null || R === void 0 || R.focus();
        },
        changeActive: function (R) {
          var $ = document,
            F = $.activeElement;
          R && F === E.current
            ? C.current.focus()
            : !R && F === C.current && E.current.focus();
        },
      };
    });
    var k = {};
    w !== void 0 && (k.width = w), x !== void 0 && (k.height = x);
    var M;
    u &&
      (M = ce.createElement("div", { className: "".concat(n, "-footer") }, u));
    var T;
    o &&
      (T = ce.createElement(
        "div",
        { className: "".concat(n, "-header") },
        ce.createElement("div", { className: "".concat(n, "-title"), id: a }, o)
      ));
    var A;
    l &&
      (A = ce.createElement(
        "button",
        {
          type: "button",
          onClick: c,
          "aria-label": "Close",
          className: "".concat(n, "-close"),
        },
        s || ce.createElement("span", { className: "".concat(n, "-close-x") })
      ));
    var P = ce.createElement(
      "div",
      { className: "".concat(n, "-content") },
      A,
      T,
      ce.createElement(
        "div",
        It({ className: "".concat(n, "-body"), style: f }, h),
        d
      ),
      M
    );
    return ce.createElement(
      "div",
      {
        key: "dialog-element",
        role: "dialog",
        "aria-labelledby": o ? a : null,
        "aria-modal": "true",
        ref: m,
        style: K(K({}, i), k),
        className: be(n, r),
        onMouseDown: y,
        onMouseUp: b,
      },
      ce.createElement("div", {
        tabIndex: 0,
        ref: C,
        style: Wy,
        "aria-hidden": "true",
      }),
      ce.createElement(cA, { shouldUpdate: p || g }, v ? v(P) : P),
      ce.createElement("div", {
        tabIndex: 0,
        ref: E,
        style: Wy,
        "aria-hidden": "true",
      })
    );
  });
const dA = fA;
var rC = S.forwardRef(function (e, t) {
  var n = e.prefixCls,
    r = e.title,
    i = e.style,
    o = e.className,
    a = e.visible,
    u = e.forceRender,
    l = e.destroyOnClose,
    s = e.motionName,
    c = e.ariaId,
    d = e.onVisibleChanged,
    f = e.mousePosition,
    h = S.useRef(),
    v = S.useState(),
    y = we(v, 2),
    b = y[0],
    m = y[1],
    p = {};
  b && (p.transformOrigin = b);
  function g() {
    var w = sA(h.current);
    m(f ? "".concat(f.x - w.left, "px ").concat(f.y - w.top, "px") : "");
  }
  return S.createElement(
    Ic,
    {
      visible: a,
      onVisibleChanged: d,
      onAppearPrepare: g,
      onEnterPrepare: g,
      forceRender: u,
      motionName: s,
      removeOnLeave: l,
      ref: h,
    },
    function (w, x) {
      var C = w.className,
        E = w.style;
      return S.createElement(
        dA,
        It({}, e, {
          ref: t,
          title: r,
          ariaId: c,
          prefixCls: n,
          holderRef: x,
          style: K(K(K({}, E), i), p),
          className: be(o, C),
        })
      );
    }
  );
});
rC.displayName = "Content";
function hA(e) {
  var t = e.prefixCls,
    n = t === void 0 ? "rc-dialog" : t,
    r = e.zIndex,
    i = e.visible,
    o = i === void 0 ? !1 : i,
    a = e.keyboard,
    u = a === void 0 ? !0 : a,
    l = e.focusTriggerAfterClose,
    s = l === void 0 ? !0 : l,
    c = e.wrapStyle,
    d = e.wrapClassName,
    f = e.wrapProps,
    h = e.onClose,
    v = e.afterClose,
    y = e.transitionName,
    b = e.animation,
    m = e.closable,
    p = m === void 0 ? !0 : m,
    g = e.mask,
    w = g === void 0 ? !0 : g,
    x = e.maskTransitionName,
    C = e.maskAnimation,
    E = e.maskClosable,
    k = E === void 0 ? !0 : E,
    M = e.maskStyle,
    T = e.maskProps,
    A = e.rootClassName,
    P = S.useRef(),
    O = S.useRef(),
    R = S.useRef(),
    $ = S.useState(o),
    F = we($, 2),
    N = F[0],
    _ = F[1],
    I = uA();
  function L() {
    bh(O.current, document.activeElement) ||
      (P.current = document.activeElement);
  }
  function H() {
    if (!bh(O.current, document.activeElement)) {
      var ae;
      (ae = R.current) === null || ae === void 0 || ae.focus();
    }
  }
  function q(ae) {
    if (ae) H();
    else {
      if ((_(!1), w && P.current && s)) {
        try {
          P.current.focus({ preventScroll: !0 });
        } catch {}
        P.current = null;
      }
      N && (v == null || v());
    }
  }
  function V(ae) {
    h == null || h(ae);
  }
  var X = S.useRef(!1),
    re = S.useRef(),
    ie = function () {
      clearTimeout(re.current), (X.current = !0);
    },
    oe = function () {
      re.current = setTimeout(function () {
        X.current = !1;
      });
    },
    Ae = null;
  k &&
    (Ae = function (xe) {
      X.current ? (X.current = !1) : O.current === xe.target && V(xe);
    });
  function Ee(ae) {
    if (u && ae.keyCode === ne.ESC) {
      ae.stopPropagation(), V(ae);
      return;
    }
    o && ae.keyCode === ne.TAB && R.current.changeActive(!ae.shiftKey);
  }
  return (
    S.useEffect(
      function () {
        o && (_(!0), L());
      },
      [o]
    ),
    S.useEffect(function () {
      return function () {
        clearTimeout(re.current);
      };
    }, []),
    S.createElement(
      "div",
      It({ className: be("".concat(n, "-root"), A) }, O4(e, { data: !0 })),
      S.createElement(lA, {
        prefixCls: n,
        visible: w && o,
        motionName: Vy(n, x, C),
        style: K({ zIndex: r }, M),
        maskProps: T,
      }),
      S.createElement(
        "div",
        It(
          {
            tabIndex: -1,
            onKeyDown: Ee,
            className: be("".concat(n, "-wrap"), d),
            ref: O,
            onClick: Ae,
            style: K(K({ zIndex: r }, c), {}, { display: N ? null : "none" }),
          },
          f
        ),
        S.createElement(
          rC,
          It({}, e, {
            onMouseDown: ie,
            onMouseUp: oe,
            ref: R,
            closable: p,
            ariaId: I,
            prefixCls: n,
            visible: o && N,
            onClose: V,
            onVisibleChanged: q,
            motionName: Vy(n, y, b),
          })
        )
      )
    )
  );
}
var iC = function (t) {
  var n = t.visible,
    r = t.getContainer,
    i = t.forceRender,
    o = t.destroyOnClose,
    a = o === void 0 ? !1 : o,
    u = t.afterClose,
    l = S.useState(n),
    s = we(l, 2),
    c = s[0],
    d = s[1];
  return (
    S.useEffect(
      function () {
        n && d(!0);
      },
      [n]
    ),
    !i && a && !c
      ? null
      : S.createElement(
          eC,
          {
            open: n || i || c,
            autoDestroy: !1,
            getContainer: r,
            autoLock: n || c,
          },
          S.createElement(
            hA,
            It({}, t, {
              destroyOnClose: a,
              afterClose: function () {
                u == null || u(), d(!1);
              },
            })
          )
        )
  );
};
iC.displayName = "Dialog";
var pA = [
    "visible",
    "onVisibleChange",
    "getContainer",
    "current",
    "countRender",
  ],
  Bv = S.createContext({
    previewUrls: new Map(),
    setPreviewUrls: function () {
      return null;
    },
    current: null,
    setCurrent: function () {
      return null;
    },
    setShowPreview: function () {
      return null;
    },
    setMousePosition: function () {
      return null;
    },
    registerImage: function () {
      return function () {
        return null;
      };
    },
    rootClassName: "",
  }),
  vA = Bv.Provider,
  mA = function (t) {
    var n = t.previewPrefixCls,
      r = n === void 0 ? "rc-image-preview" : n,
      i = t.children,
      o = t.icons,
      a = o === void 0 ? {} : o,
      u = t.preview,
      l = $s(u) === "object" ? u : {},
      s = l.visible,
      c = s === void 0 ? void 0 : s,
      d = l.onVisibleChange,
      f = d === void 0 ? void 0 : d,
      h = l.getContainer,
      v = h === void 0 ? void 0 : h,
      y = l.current,
      b = y === void 0 ? 0 : y,
      m = l.countRender,
      p = m === void 0 ? void 0 : m,
      g = As(l, pA),
      w = S.useState(new Map()),
      x = kn(w, 2),
      C = x[0],
      E = x[1],
      k = S.useState(),
      M = kn(k, 2),
      T = M[0],
      A = M[1],
      P = qb(!!c, { value: c, onChange: f }),
      O = kn(P, 2),
      R = O[0],
      $ = O[1],
      F = S.useState(null),
      N = kn(F, 2),
      _ = N[0],
      I = N[1],
      L = c !== void 0,
      H = Array.from(C.keys()),
      q = H[b],
      V = new Map(
        Array.from(C)
          .filter(function (ie) {
            var oe = kn(ie, 2),
              Ae = oe[1].canPreview;
            return !!Ae;
          })
          .map(function (ie) {
            var oe = kn(ie, 2),
              Ae = oe[0],
              Ee = oe[1].url;
            return [Ae, Ee];
          })
      ),
      X = function (oe, Ae) {
        var Ee =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
          ae = function () {
            E(function (z) {
              var Q = new Map(z),
                te = Q.delete(oe);
              return te ? Q : z;
            });
          };
        return (
          E(function (xe) {
            return new Map(xe).set(oe, { url: Ae, canPreview: Ee });
          }),
          ae
        );
      },
      re = function (oe) {
        oe.stopPropagation(), $(!1), I(null);
      };
    return (
      S.useEffect(
        function () {
          A(q);
        },
        [q]
      ),
      S.useEffect(
        function () {
          !R && L && A(q);
        },
        [q, L, R]
      ),
      S.createElement(
        vA,
        {
          value: {
            isPreviewGroup: !0,
            previewUrls: V,
            setPreviewUrls: E,
            current: T,
            setCurrent: A,
            setShowPreview: $,
            setMousePosition: I,
            registerImage: X,
          },
        },
        i,
        S.createElement(
          oC,
          Ni(
            {
              "aria-hidden": !R,
              visible: R,
              prefixCls: r,
              onClose: re,
              mousePosition: _,
              src: V.get(T),
              icons: a,
              getContainer: v,
              countRender: p,
            },
            g
          )
        )
      )
    );
  },
  Ul = 1,
  Hl = 50,
  pa = 1,
  gA = 0.2,
  yA = function (t) {
    var n,
      r = t.visible,
      i = t.maskTransitionName,
      o = t.getContainer,
      a = t.prefixCls,
      u = t.rootClassName,
      l = t.icons,
      s = t.countRender,
      c = t.showSwitch,
      d = t.showProgress,
      f = t.current,
      h = t.count,
      v = t.scale,
      y = t.onSwitchLeft,
      b = t.onSwitchRight,
      m = t.onClose,
      p = t.onZoomIn,
      g = t.onZoomOut,
      w = t.onRotateRight,
      x = t.onRotateLeft,
      C = l.rotateLeft,
      E = l.rotateRight,
      k = l.zoomIn,
      M = l.zoomOut,
      T = l.close,
      A = l.left,
      P = l.right,
      O = "".concat(a, "-operations-operation"),
      R = "".concat(a, "-operations-icon"),
      $ = [
        { icon: T, onClick: m, type: "close" },
        { icon: k, onClick: p, type: "zoomIn", disabled: v === Hl },
        { icon: M, onClick: g, type: "zoomOut", disabled: v === Ul },
        { icon: E, onClick: w, type: "rotateRight" },
        { icon: C, onClick: x, type: "rotateLeft" },
      ],
      F = S.createElement(
        S.Fragment,
        null,
        c &&
          S.createElement(
            S.Fragment,
            null,
            S.createElement(
              "div",
              {
                className: be(
                  "".concat(a, "-switch-left"),
                  qn({}, "".concat(a, "-switch-left-disabled"), f === 0)
                ),
                onClick: y,
              },
              A
            ),
            S.createElement(
              "div",
              {
                className: be(
                  "".concat(a, "-switch-right"),
                  qn({}, "".concat(a, "-switch-right-disabled"), f === h - 1)
                ),
                onClick: b,
              },
              P
            )
          ),
        S.createElement(
          "ul",
          { className: "".concat(a, "-operations") },
          d &&
            S.createElement(
              "li",
              { className: "".concat(a, "-operations-progress") },
              (n = s == null ? void 0 : s(f + 1, h)) !== null && n !== void 0
                ? n
                : "".concat(f + 1, " / ").concat(h)
            ),
          $.map(function (N) {
            var _,
              I = N.icon,
              L = N.onClick,
              H = N.type,
              q = N.disabled;
            return S.createElement(
              "li",
              {
                className: be(
                  O,
                  ((_ = {}),
                  qn(_, "".concat(a, "-operations-operation-").concat(H), !0),
                  qn(_, "".concat(a, "-operations-operation-disabled"), !!q),
                  _)
                ),
                onClick: L,
                key: H,
              },
              S.isValidElement(I) ? S.cloneElement(I, { className: R }) : I
            );
          })
        )
      );
    return S.createElement(Ic, { visible: r, motionName: i }, function (N) {
      var _ = N.className,
        I = N.style;
      return S.createElement(
        eC,
        { open: !0, getContainer: o ?? document.body },
        S.createElement(
          "div",
          {
            className: be("".concat(a, "-operations-wrapper"), _, u),
            style: I,
          },
          F
        )
      );
    });
  },
  Ky = { x: 0, y: 0, rotate: 0, scale: 1 };
function wA(e) {
  var t = S.useRef(null),
    n = S.useRef([]),
    r = S.useState(Ky),
    i = kn(r, 2),
    o = i[0],
    a = i[1],
    u = function () {
      a(Ky);
    },
    l = function (d) {
      t.current === null &&
        ((n.current = []),
        (t.current = Rs(function () {
          a(function (f) {
            var h = f;
            return (
              n.current.forEach(function (v) {
                h = Sr(Sr({}, h), v);
              }),
              (t.current = null),
              h
            );
          });
        }))),
        n.current.push(Sr(Sr({}, o), d));
    },
    s = function (d, f, h) {
      var v = e.current,
        y = v.width,
        b = v.height,
        m = v.offsetWidth,
        p = v.offsetHeight,
        g = v.offsetLeft,
        w = v.offsetTop,
        x = d,
        C = o.scale * d;
      C > Hl
        ? ((x = Hl / o.scale), (C = Hl))
        : C < Ul && ((x = Ul / o.scale), (C = Ul));
      var E = f ?? innerWidth / 2,
        k = h ?? innerHeight / 2,
        M = x - 1,
        T = M * y * 0.5,
        A = M * b * 0.5,
        P = M * (E - o.x - g),
        O = M * (k - o.y - w),
        R = o.x - (P - T),
        $ = o.y - (O - A);
      if (d < 1 && C === 1) {
        var F = m * C,
          N = p * C,
          _ = nC(),
          I = _.width,
          L = _.height;
        F <= I && N <= L && ((R = 0), ($ = 0));
      }
      l({ x: R, y: $, scale: C });
    };
  return {
    transform: o,
    resetTransform: u,
    updateTransform: l,
    dispatchZoonChange: s,
  };
}
function Gy(e, t, n, r) {
  var i = t + n,
    o = (n - r) / 2;
  if (n > r) {
    if (t > 0) return qn({}, e, o);
    if (t < 0 && i < r) return qn({}, e, -o);
  } else if (t < 0 || i > r) return qn({}, e, t < 0 ? o : -o);
  return {};
}
function SA(e, t, n, r) {
  var i = nC(),
    o = i.width,
    a = i.height,
    u = null;
  return (
    e <= o && t <= a
      ? (u = { x: 0, y: 0 })
      : (e > o || t > a) &&
        (u = Sr(Sr({}, Gy("x", n, e, o)), Gy("y", r, t, a))),
    u
  );
}
var bA = [
    "prefixCls",
    "src",
    "alt",
    "onClose",
    "afterClose",
    "visible",
    "icons",
    "rootClassName",
    "getContainer",
    "countRender",
    "scaleStep",
    "transitionName",
    "maskTransitionName",
  ],
  oC = function (t) {
    var n = t.prefixCls,
      r = t.src,
      i = t.alt,
      o = t.onClose;
    t.afterClose;
    var a = t.visible,
      u = t.icons,
      l = u === void 0 ? {} : u,
      s = t.rootClassName,
      c = t.getContainer,
      d = t.countRender,
      f = t.scaleStep,
      h = f === void 0 ? 0.5 : f,
      v = t.transitionName,
      y = v === void 0 ? "zoom" : v,
      b = t.maskTransitionName,
      m = b === void 0 ? "fade" : b,
      p = As(t, bA),
      g = S.useRef(),
      w = S.useRef({ deltaX: 0, deltaY: 0, transformX: 0, transformY: 0 }),
      x = S.useState(!1),
      C = kn(x, 2),
      E = C[0],
      k = C[1],
      M = S.useContext(Bv),
      T = M.previewUrls,
      A = M.current,
      P = M.isPreviewGroup,
      O = M.setCurrent,
      R = T.size,
      $ = Array.from(T.keys()),
      F = $.indexOf(A),
      N = P ? T.get(A) : r,
      _ = P && R > 1,
      I = P && R >= 1,
      L = wA(g),
      H = L.transform,
      q = L.resetTransform,
      V = L.updateTransform,
      X = L.dispatchZoonChange,
      re = H.rotate,
      ie = H.scale,
      oe = be(qn({}, "".concat(n, "-moving"), E)),
      Ae = function () {
        q();
      },
      Ee = function () {
        X(pa + h);
      },
      ae = function () {
        X(pa - h);
      },
      xe = function () {
        V({ rotate: re + 90 });
      },
      z = function () {
        V({ rotate: re - 90 });
      },
      Q = function (ge) {
        ge.preventDefault(), ge.stopPropagation(), F > 0 && O($[F - 1]);
      },
      te = function (ge) {
        ge.preventDefault(), ge.stopPropagation(), F < R - 1 && O($[F + 1]);
      },
      Oe = function () {
        if (a && E) {
          k(!1);
          var ge = w.current,
            nn = ge.transformX,
            D = ge.transformY,
            j = H.x !== nn && H.y !== D;
          if (!j) return;
          var U = g.current.offsetWidth * ie,
            G = g.current.offsetHeight * ie,
            W = g.current.getBoundingClientRect(),
            ue = W.left,
            ee = W.top,
            J = re % 180 !== 0,
            Z = SA(J ? G : U, J ? U : G, ue, ee);
          Z && V(Sr({}, Z));
        }
      },
      me = function (ge) {
        ge.button === 0 &&
          (ge.preventDefault(),
          ge.stopPropagation(),
          (w.current = {
            deltaX: ge.pageX - H.x,
            deltaY: ge.pageY - H.y,
            transformX: H.x,
            transformY: H.y,
          }),
          k(!0));
      },
      se = function (ge) {
        a &&
          E &&
          V({ x: ge.pageX - w.current.deltaX, y: ge.pageY - w.current.deltaY });
      },
      fe = function (ge) {
        if (!(!a || ge.deltaY == 0)) {
          var nn = Math.abs(ge.deltaY / 100),
            D = Math.min(nn, gA),
            j = pa + D * h;
          ge.deltaY > 0 && (j = pa / j), X(j, ge.clientX, ge.clientY);
        }
      },
      Fe = S.useCallback(
        function (Pe) {
          !a ||
            !_ ||
            (Pe.keyCode === ne.LEFT
              ? F > 0 && O($[F - 1])
              : Pe.keyCode === ne.RIGHT && F < R - 1 && O($[F + 1]));
        },
        [F, R, $, O, _, a]
      ),
      Ve = function (ge) {
        a &&
          (ie !== 1
            ? V({ x: 0, y: 0, scale: 1 })
            : X(pa + h, ge.clientX, ge.clientY));
      };
    return (
      S.useEffect(
        function () {
          var Pe,
            ge,
            nn = ha(window, "mouseup", Oe, !1),
            D = ha(window, "mousemove", se, !1),
            j = ha(window, "keydown", Fe, !1);
          try {
            window.top !== window.self &&
              ((Pe = ha(window.top, "mouseup", Oe, !1)),
              (ge = ha(window.top, "mousemove", se, !1)));
          } catch {}
          return function () {
            var U, G;
            nn.remove(),
              D.remove(),
              j.remove(),
              (U = Pe) === null || U === void 0 || U.remove(),
              (G = ge) === null || G === void 0 || G.remove();
          };
        },
        [a, E, Fe]
      ),
      ce.createElement(
        ce.Fragment,
        null,
        ce.createElement(
          iC,
          Ni(
            {
              transitionName: y,
              maskTransitionName: m,
              closable: !1,
              keyboard: !0,
              prefixCls: n,
              onClose: o,
              afterClose: Ae,
              visible: a,
              wrapClassName: oe,
              rootClassName: s,
              getContainer: c,
            },
            p
          ),
          ce.createElement(
            "div",
            { className: "".concat(n, "-img-wrapper") },
            ce.createElement("img", {
              width: t.width,
              height: t.height,
              onWheel: fe,
              onMouseDown: me,
              onDoubleClick: Ve,
              ref: g,
              className: "".concat(n, "-img"),
              src: N,
              alt: i,
              style: {
                transform: "translate3d("
                  .concat(H.x, "px, ")
                  .concat(H.y, "px, 0) scale3d(")
                  .concat(ie, ", ")
                  .concat(ie, ", 1) rotate(")
                  .concat(re, "deg)"),
              },
            })
          )
        ),
        ce.createElement(yA, {
          visible: a,
          maskTransitionName: m,
          getContainer: c,
          prefixCls: n,
          rootClassName: s,
          icons: l,
          countRender: d,
          showSwitch: _,
          showProgress: I,
          current: F,
          count: R,
          scale: ie,
          onSwitchLeft: Q,
          onSwitchRight: te,
          onZoomIn: Ee,
          onZoomOut: ae,
          onRotateRight: xe,
          onRotateLeft: z,
          onClose: o,
        })
      )
    );
  },
  CA = [
    "src",
    "alt",
    "onPreviewClose",
    "prefixCls",
    "previewPrefixCls",
    "placeholder",
    "fallback",
    "width",
    "height",
    "style",
    "preview",
    "className",
    "onClick",
    "onError",
    "wrapperClassName",
    "wrapperStyle",
    "rootClassName",
    "crossOrigin",
    "decoding",
    "loading",
    "referrerPolicy",
    "sizes",
    "srcSet",
    "useMap",
    "draggable",
  ],
  EA = [
    "src",
    "visible",
    "onVisibleChange",
    "getContainer",
    "mask",
    "maskClassName",
    "icons",
    "scaleStep",
  ],
  Yy = 0,
  zc = function (t) {
    var n,
      r = t.src,
      i = t.alt,
      o = t.onPreviewClose,
      a = t.prefixCls,
      u = a === void 0 ? "rc-image" : a,
      l = t.previewPrefixCls,
      s = l === void 0 ? "".concat(u, "-preview") : l,
      c = t.placeholder,
      d = t.fallback,
      f = t.width,
      h = t.height,
      v = t.style,
      y = t.preview,
      b = y === void 0 ? !0 : y,
      m = t.className,
      p = t.onClick,
      g = t.onError,
      w = t.wrapperClassName,
      x = t.wrapperStyle,
      C = t.rootClassName,
      E = t.crossOrigin,
      k = t.decoding,
      M = t.loading,
      T = t.referrerPolicy,
      A = t.sizes,
      P = t.srcSet,
      O = t.useMap,
      R = t.draggable,
      $ = As(t, CA),
      F = c && c !== !0,
      N = $s(b) === "object" ? b : {},
      _ = N.src,
      I = N.visible,
      L = I === void 0 ? void 0 : I,
      H = N.onVisibleChange,
      q = H === void 0 ? o : H,
      V = N.getContainer,
      X = V === void 0 ? void 0 : V,
      re = N.mask,
      ie = N.maskClassName,
      oe = N.icons,
      Ae = N.scaleStep,
      Ee = As(N, EA),
      ae = _ ?? r,
      xe = L !== void 0,
      z = qb(!!L, { value: L, onChange: q }),
      Q = kn(z, 2),
      te = Q[0],
      Oe = Q[1],
      me = S.useState(F ? "loading" : "normal"),
      se = kn(me, 2),
      fe = se[0],
      Fe = se[1],
      Ve = S.useState(null),
      Pe = kn(Ve, 2),
      ge = Pe[0],
      nn = Pe[1],
      D = fe === "error",
      j = S.useContext(Bv),
      U = j.isPreviewGroup,
      G = j.setCurrent,
      W = j.setShowPreview,
      ue = j.setMousePosition,
      ee = j.registerImage,
      J = S.useState(function () {
        return (Yy += 1), Yy;
      }),
      Z = kn(J, 1),
      Te = Z[0],
      le = !!b,
      Re = S.useRef(!1),
      dt = function () {
        Fe("normal");
      },
      jt = function (ke) {
        g && g(ke), Fe("error");
      },
      In = function (ke) {
        if (!xe) {
          var Le = oA(ke.target),
            pe = Le.left,
            Be = Le.top;
          U ? (G(Te), ue({ x: pe, y: Be })) : nn({ x: pe, y: Be });
        }
        U ? W(!0) : Oe(!0), p && p(ke);
      },
      Gn = function (ke) {
        ke.stopPropagation(), Oe(!1), xe || nn(null);
      },
      wn = function (ke) {
        (Re.current = !1),
          fe === "loading" &&
            ke != null &&
            ke.complete &&
            (ke.naturalWidth || ke.naturalHeight) &&
            ((Re.current = !0), dt());
      };
    S.useEffect(function () {
      var Ie = ee(Te, ae);
      return Ie;
    }, []),
      S.useEffect(
        function () {
          ee(Te, ae, le);
        },
        [ae, le]
      ),
      S.useEffect(
        function () {
          D && Fe("normal"), F && !Re.current && Fe("loading");
        },
        [r]
      );
    var Yn = be(u, w, C, qn({}, "".concat(u, "-error"), D)),
      Ne = D && d ? d : ae,
      ye = {
        crossOrigin: E,
        decoding: k,
        draggable: R,
        loading: M,
        referrerPolicy: T,
        sizes: A,
        srcSet: P,
        useMap: O,
        alt: i,
        className: be(
          "".concat(u, "-img"),
          qn({}, "".concat(u, "-img-placeholder"), c === !0),
          m
        ),
        style: Sr({ height: h }, v),
      };
    return S.createElement(
      S.Fragment,
      null,
      S.createElement(
        "div",
        Ni({}, $, {
          className: Yn,
          onClick: le ? In : p,
          style: Sr({ width: f, height: h }, x),
        }),
        S.createElement(
          "img",
          Ni(
            {},
            ye,
            { ref: wn },
            D && d ? { src: d } : { onLoad: dt, onError: jt, src: r },
            { width: f, height: h }
          )
        ),
        fe === "loading" &&
          S.createElement(
            "div",
            { "aria-hidden": "true", className: "".concat(u, "-placeholder") },
            c
          ),
        re &&
          le &&
          S.createElement(
            "div",
            {
              className: be("".concat(u, "-mask"), ie),
              style: {
                display:
                  ((n = ye.style) === null || n === void 0
                    ? void 0
                    : n.display) === "none"
                    ? "none"
                    : void 0,
              },
            },
            re
          )
      ),
      !U &&
        le &&
        S.createElement(
          oC,
          Ni(
            {
              "aria-hidden": !te,
              visible: te,
              prefixCls: s,
              onClose: Gn,
              mousePosition: ge,
              src: Ne,
              alt: i,
              getContainer: X,
              icons: oe,
              scaleStep: Ae,
              rootClassName: C,
            },
            Ee
          )
        )
    );
  };
zc.PreviewGroup = mA;
zc.displayName = "Image";
var xA = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      { tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] },
      {
        tag: "path",
        attrs: {
          d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z",
        },
      },
    ],
  },
  name: "rotate-left",
  theme: "outlined",
};
const OA = xA;
var aC = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: OA }));
};
aC.displayName = "RotateLeftOutlined";
const PA = S.forwardRef(aC);
var RA = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      { tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] },
      {
        tag: "path",
        attrs: {
          d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z",
        },
      },
    ],
  },
  name: "rotate-right",
  theme: "outlined",
};
const kA = RA;
var uC = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: kA }));
};
uC.displayName = "RotateRightOutlined";
const MA = S.forwardRef(uC);
var TA = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z",
        },
      },
    ],
  },
  name: "zoom-in",
  theme: "outlined",
};
const $A = TA;
var lC = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: $A }));
};
lC.displayName = "ZoomInOutlined";
const AA = S.forwardRef(lC);
var FA = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z",
        },
      },
    ],
  },
  name: "zoom-out",
  theme: "outlined",
};
const _A = FA;
var sC = function (t, n) {
  return S.createElement(tn, ve(ve({}, t), {}, { ref: n, icon: _A }));
};
sC.displayName = "ZoomOutOutlined";
const NA = S.forwardRef(sC);
function Xy(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
  };
}
const cC = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
            transform: "none",
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: "none",
          },
          [`${t}-mask`]: Object.assign(Object.assign({}, Xy("fixed")), {
            zIndex: e.zIndexPopupBase,
            height: "100%",
            backgroundColor: e.colorBgMask,
            [`${t}-hidden`]: { display: "none" },
          }),
          [`${t}-wrap`]: Object.assign(Object.assign({}, Xy("fixed")), {
            overflow: "auto",
            outline: 0,
            WebkitOverflowScrolling: "touch",
          }),
        },
      },
      { [`${t}-root`]: Qb(e) },
    ];
  },
  IA = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap`]: {
            zIndex: e.zIndexPopupBase,
            position: "fixed",
            inset: 0,
            overflow: "auto",
            outline: 0,
            WebkitOverflowScrolling: "touch",
          },
          [`${t}-wrap-rtl`]: { direction: "rtl" },
          [`${t}-centered`]: {
            textAlign: "center",
            "&::before": {
              display: "inline-block",
              width: 0,
              height: "100%",
              verticalAlign: "middle",
              content: '""',
            },
            [t]: {
              top: 0,
              display: "inline-block",
              paddingBottom: 0,
              textAlign: "start",
              verticalAlign: "middle",
            },
          },
          [`@media (max-width: ${e.screenSMMax})`]: {
            [t]: {
              maxWidth: "calc(100vw - 16px)",
              margin: `${e.marginXS} auto`,
            },
            [`${t}-centered`]: { [t]: { flex: 1 } },
          },
        },
      },
      {
        [t]: Object.assign(Object.assign({}, Lv(e)), {
          pointerEvents: "none",
          position: "relative",
          top: 100,
          width: "auto",
          maxWidth: `calc(100vw - ${e.margin * 2}px)`,
          margin: "0 auto",
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.modalHeadingColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            wordWrap: "break-word",
          },
          [`${t}-content`]: {
            position: "relative",
            backgroundColor: e.modalContentBg,
            backgroundClip: "padding-box",
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadow,
            pointerEvents: "auto",
            padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
          },
          [`${t}-close`]: Object.assign(
            {
              position: "absolute",
              top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              insetInlineEnd:
                (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              zIndex: e.zIndexPopupBase + 10,
              padding: 0,
              color: e.modalCloseColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: "none",
              background: "transparent",
              borderRadius: e.borderRadiusSM,
              width: e.modalConfirmIconSize,
              height: e.modalConfirmIconSize,
              border: 0,
              outline: 0,
              cursor: "pointer",
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              "&-x": {
                display: "block",
                fontSize: e.fontSizeLG,
                fontStyle: "normal",
                lineHeight: `${e.modalCloseBtnSize}px`,
                textAlign: "center",
                textTransform: "none",
                textRendering: "auto",
              },
              "&:hover": {
                color: e.modalIconHoverColor,
                backgroundColor: e.wireframe
                  ? "transparent"
                  : e.colorFillContent,
                textDecoration: "none",
              },
              "&:active": {
                backgroundColor: e.wireframe
                  ? "transparent"
                  : e.colorFillContentHover,
              },
            },
            YM(e)
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.modalHeaderBg,
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
            marginBottom: e.marginXS,
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: "break-word",
          },
          [`${t}-footer`]: {
            textAlign: "end",
            background: e.modalFooterBg,
            marginTop: e.marginSM,
            [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:
              { marginBottom: 0, marginInlineStart: e.marginXS },
          },
          [`${t}-open`]: { overflow: "hidden" },
        }),
      },
      {
        [`${t}-pure-panel`]: {
          top: "auto",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
            display: "flex",
            flexDirection: "column",
            flex: "auto",
          },
          [`${t}-confirm-body`]: { marginBottom: "auto" },
        },
      },
    ];
  },
  LA = (e) => {
    const { componentCls: t } = e,
      n = `${t}-confirm`;
    return {
      [n]: {
        "&-rtl": { direction: "rtl" },
        [`${e.antCls}-modal-header`]: { display: "none" },
        [`${n}-body-wrapper`]: Object.assign({}, QM()),
        [`${n}-body`]: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          [`${n}-title`]: {
            flex: "0 0 100%",
            display: "block",
            overflow: "hidden",
            color: e.colorTextHeading,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            [`+ ${n}-content`]: {
              marginBlockStart: e.marginXS,
              flexBasis: "100%",
              maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`,
            },
          },
          [`${n}-content`]: { color: e.colorText, fontSize: e.fontSize },
          [`> ${e.iconCls}`]: {
            flex: "none",
            marginInlineEnd: e.marginSM,
            fontSize: e.modalConfirmIconSize,
            [`+ ${n}-title`]: { flex: 1 },
            [`+ ${n}-title + ${n}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.marginSM,
            },
          },
        },
        [`${n}-btns`]: {
          textAlign: "end",
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS,
          },
        },
      },
      [`${n}-error ${n}-body > ${e.iconCls}`]: { color: e.colorError },
      [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: { color: e.colorWarning },
      [`${n}-info ${n}-body > ${e.iconCls}`]: { color: e.colorInfo },
      [`${n}-success ${n}-body > ${e.iconCls}`]: { color: e.colorSuccess },
      [`${t}-zoom-leave ${t}-btns`]: { pointerEvents: "none" },
    };
  },
  DA = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl",
          [`${t}-confirm-body`]: { direction: "rtl" },
        },
      },
    };
  },
  jA = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-confirm`;
    return {
      [t]: {
        [`${t}-content`]: { padding: 0 },
        [`${t}-header`]: {
          padding: e.modalHeaderPadding,
          borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
          marginBottom: 0,
        },
        [`${t}-body`]: { padding: e.modalBodyPadding },
        [`${t}-footer`]: {
          padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
          borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
          marginTop: 0,
        },
      },
      [r]: {
        [`${n}-modal-body`]: {
          padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`,
        },
        [`${r}-body`]: {
          [`> ${e.iconCls}`]: {
            marginInlineEnd: e.margin,
            [`+ ${r}-title + ${r}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.margin,
            },
          },
        },
        [`${r}-btns`]: { marginTop: e.marginLG },
      },
    };
  },
  SI = Ac("Modal", (e) => {
    const t = e.padding,
      n = e.fontSizeHeading5,
      r = e.lineHeightHeading5,
      i = Ho(e, {
        modalBodyPadding: e.paddingLG,
        modalHeaderBg: e.colorBgElevated,
        modalHeaderPadding: `${t}px ${e.paddingLG}px`,
        modalHeaderBorderWidth: e.lineWidth,
        modalHeaderBorderStyle: e.lineType,
        modalHeaderTitleLineHeight: r,
        modalHeaderTitleFontSize: n,
        modalHeaderBorderColorSplit: e.colorSplit,
        modalHeaderCloseSize: r * n + t * 2,
        modalContentBg: e.colorBgElevated,
        modalHeadingColor: e.colorTextHeading,
        modalCloseColor: e.colorTextDescription,
        modalFooterBg: "transparent",
        modalFooterBorderColorSplit: e.colorSplit,
        modalFooterBorderStyle: e.lineType,
        modalFooterPaddingVertical: e.paddingXS,
        modalFooterPaddingHorizontal: e.padding,
        modalFooterBorderWidth: e.lineWidth,
        modalConfirmTitleFontSize: e.fontSizeLG,
        modalIconHoverColor: e.colorIconHover,
        modalConfirmIconSize: e.fontSize * e.lineHeight,
        modalCloseBtnSize: e.controlHeightLG * 0.55,
      });
    return [IA(i), LA(i), DA(i), cC(i), e.wireframe && jA(i), Wb(i, "zoom")];
  }),
  np = (e) => ({ position: e || "absolute", inset: 0 }),
  zA = (e) => {
    const {
      iconCls: t,
      motionDurationSlow: n,
      paddingXXS: r,
      marginXXS: i,
      prefixCls: o,
    } = e;
    return {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      background: new ft("#000").setAlpha(0.5).toRgbString(),
      cursor: "pointer",
      opacity: 0,
      transition: `opacity ${n}`,
      [`.${o}-mask-info`]: Object.assign(Object.assign({}, BM), {
        padding: `0 ${r}px`,
        [t]: { marginInlineEnd: i },
      }),
    };
  },
  UA = (e) => {
    const {
        previewCls: t,
        modalMaskBg: n,
        paddingSM: r,
        imagePreviewOperationDisabledColor: i,
        motionDurationSlow: o,
      } = e,
      a = new ft(n).setAlpha(0.1),
      u = a.clone().setAlpha(0.2);
    return {
      [`${t}-operations`]: Object.assign(Object.assign({}, Lv(e)), {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        color: e.imagePreviewOperationColor,
        listStyle: "none",
        background: a.toRgbString(),
        pointerEvents: "auto",
        "&-operation": {
          marginInlineStart: r,
          padding: r,
          cursor: "pointer",
          transition: `all ${o}`,
          "&:hover": { background: u.toRgbString() },
          "&-disabled": { color: i, pointerEvents: "none" },
          "&:last-of-type": { marginInlineStart: 0 },
        },
        "&-progress": {
          position: "absolute",
          left: { _skip_check_: !0, value: "50%" },
          transform: "translateX(-50%)",
        },
        "&-icon": { fontSize: e.imagePreviewOperationSize },
      }),
    };
  },
  HA = (e) => {
    const {
        modalMaskBg: t,
        iconCls: n,
        imagePreviewOperationDisabledColor: r,
        previewCls: i,
        zIndexPopup: o,
        motionDurationSlow: a,
      } = e,
      u = new ft(t).setAlpha(0.1),
      l = u.clone().setAlpha(0.2);
    return {
      [`${i}-switch-left, ${i}-switch-right`]: {
        position: "fixed",
        insetBlockStart: "50%",
        zIndex: o + 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: e.imagePreviewSwitchSize,
        height: e.imagePreviewSwitchSize,
        marginTop: -e.imagePreviewSwitchSize / 2,
        color: e.imagePreviewOperationColor,
        background: u.toRgbString(),
        borderRadius: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        transition: `all ${a}`,
        pointerEvents: "auto",
        "&:hover": { background: l.toRgbString() },
        ["&-disabled"]: {
          "&, &:hover": {
            color: r,
            background: "transparent",
            cursor: "not-allowed",
            [`> ${n}`]: { cursor: "not-allowed" },
          },
        },
        [`> ${n}`]: { fontSize: e.imagePreviewOperationSize },
      },
      [`${i}-switch-left`]: { insetInlineStart: e.marginSM },
      [`${i}-switch-right`]: { insetInlineEnd: e.marginSM },
    };
  },
  qA = (e) => {
    const {
      motionEaseOut: t,
      previewCls: n,
      motionDurationSlow: r,
      componentCls: i,
    } = e;
    return [
      {
        [`${i}-preview-root`]: {
          [n]: { height: "100%", textAlign: "center", pointerEvents: "none" },
          [`${n}-body`]: Object.assign(Object.assign({}, np()), {
            overflow: "hidden",
          }),
          [`${n}-img`]: {
            maxWidth: "100%",
            maxHeight: "100%",
            verticalAlign: "middle",
            transform: "scale3d(1, 1, 1)",
            cursor: "grab",
            transition: `transform ${r} ${t} 0s`,
            userSelect: "none",
            pointerEvents: "auto",
            "&-wrapper": Object.assign(Object.assign({}, np()), {
              transition: `transform ${r} ${t} 0s`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&::before": {
                display: "inline-block",
                width: 1,
                height: "50%",
                marginInlineEnd: -1,
                content: '""',
              },
            }),
          },
          [`${n}-moving`]: {
            [`${n}-preview-img`]: {
              cursor: "grabbing",
              "&-wrapper": { transitionDuration: "0s" },
            },
          },
        },
      },
      { [`${i}-preview-root`]: { [`${n}-wrap`]: { zIndex: e.zIndexPopup } } },
      {
        [`${i}-preview-operations-wrapper`]: {
          position: "fixed",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: e.zIndexPopup + 1,
          width: "100%",
        },
        "&": [UA(e), HA(e)],
      },
    ];
  },
  BA = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        position: "relative",
        display: "inline-block",
        [`${t}-img`]: {
          width: "100%",
          height: "auto",
          verticalAlign: "middle",
        },
        [`${t}-img-placeholder`]: {
          backgroundColor: e.colorBgContainerDisabled,
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "30%",
        },
        [`${t}-mask`]: Object.assign({}, zA(e)),
        [`${t}-mask:hover`]: { opacity: 1 },
        [`${t}-placeholder`]: Object.assign({}, np()),
      },
    };
  },
  VA = (e) => {
    const { previewCls: t } = e;
    return { [`${t}-root`]: Wb(e, "zoom"), ["&"]: Qb(e, !0) };
  },
  fC = Ac(
    "Image",
    (e) => {
      const t = new ft(e.colorTextLightSolid),
        n = `${e.componentCls}-preview`,
        r = Ho(e, {
          previewCls: n,
          imagePreviewOperationColor: t.toRgbString(),
          imagePreviewOperationDisabledColor: new ft(t)
            .setAlpha(0.25)
            .toRgbString(),
          modalMaskBg: new ft("#000").setAlpha(0.45).toRgbString(),
          imagePreviewOperationSize: e.fontSizeIcon * 1.5,
          imagePreviewSwitchSize: e.controlHeightLG,
        });
      return [BA(r), qA(r), cC(Ho(r, { componentCls: n })), VA(r)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 80 })
  );
var QA =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const dC = {
    rotateLeft: S.createElement(PA, null),
    rotateRight: S.createElement(MA, null),
    zoomIn: S.createElement(AA, null),
    zoomOut: S.createElement(NA, null),
    close: S.createElement(Ab, null),
    left: S.createElement(r$, null),
    right: S.createElement(a$, null),
  },
  WA = (e) => {
    var { previewPrefixCls: t, preview: n } = e,
      r = QA(e, ["previewPrefixCls", "preview"]);
    const { getPrefixCls: i } = S.useContext(en),
      o = i("image", t),
      a = `${o}-preview`,
      u = i(),
      [l, s] = fC(o),
      c = S.useMemo(() => {
        if (n === !1) return n;
        const d = typeof n == "object" ? n : {};
        return Object.assign(Object.assign({}, d), {
          transitionName: Ms(u, "zoom", d.transitionName),
          maskTransitionName: Ms(u, "fade", d.maskTransitionName),
          rootClassName: s,
        });
      }, [n]);
    return l(
      S.createElement(
        zc.PreviewGroup,
        Object.assign({ preview: c, previewPrefixCls: a, icons: dC }, r)
      )
    );
  },
  KA = WA;
var Zy =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const hC = (e) => {
  var { prefixCls: t, preview: n, rootClassName: r } = e,
    i = Zy(e, ["prefixCls", "preview", "rootClassName"]);
  const {
      getPrefixCls: o,
      locale: a = li,
      getPopupContainer: u,
    } = S.useContext(en),
    l = o("image", t),
    s = o(),
    c = a.Image || li.Image,
    [d, f] = fC(l),
    h = be(r, f),
    v = S.useMemo(() => {
      if (n === !1) return n;
      const y = typeof n == "object" ? n : {},
        { getContainer: b } = y,
        m = Zy(y, ["getContainer"]);
      return Object.assign(
        Object.assign(
          {
            mask: S.createElement(
              "div",
              { className: `${l}-mask-info` },
              S.createElement(J$, null),
              c == null ? void 0 : c.preview
            ),
            icons: dC,
          },
          m
        ),
        {
          getContainer: b || u,
          transitionName: Ms(s, "zoom", y.transitionName),
          maskTransitionName: Ms(s, "fade", y.maskTransitionName),
        }
      );
    }, [n, c]);
  return d(
    S.createElement(
      zc,
      Object.assign({ prefixCls: `${l}`, preview: v, rootClassName: h }, i)
    )
  );
};
hC.PreviewGroup = KA;
const Jy = hC,
  GA = {
    items_per_page: "???/???",
    jump_to: "??????",
    jump_to_confirm: "??????",
    page: "???",
    prev_page: "?????????",
    next_page: "?????????",
    prev_5: "?????? 5 ???",
    next_5: "?????? 5 ???",
    prev_3: "?????? 3 ???",
    next_3: "?????? 3 ???",
    page_size: "??????",
  };
var YA = S.forwardRef(function (e, t) {
  var n = e.prefixCls,
    r = e.style,
    i = e.className,
    o = e.duration,
    a = o === void 0 ? 4.5 : o,
    u = e.eventKey,
    l = e.content,
    s = e.closable,
    c = e.closeIcon,
    d = c === void 0 ? "x" : c,
    f = e.props,
    h = e.onClick,
    v = e.onNoticeClose,
    y = S.useState(!1),
    b = we(y, 2),
    m = b[0],
    p = b[1],
    g = function () {
      v(u);
    };
  S.useEffect(
    function () {
      if (!m && a > 0) {
        var x = setTimeout(function () {
          g();
        }, a * 1e3);
        return function () {
          clearTimeout(x);
        };
      }
    },
    [a, m]
  );
  var w = "".concat(n, "-notice");
  return S.createElement(
    "div",
    It({}, f, {
      ref: t,
      className: be(w, i, _e({}, "".concat(w, "-closable"), s)),
      style: r,
      onMouseEnter: function () {
        p(!0);
      },
      onMouseLeave: function () {
        p(!1);
      },
      onClick: h,
    }),
    S.createElement("div", { className: "".concat(w, "-content") }, l),
    s &&
      S.createElement(
        "a",
        {
          tabIndex: 0,
          className: "".concat(w, "-close"),
          onClick: function (C) {
            C.preventDefault(), C.stopPropagation(), g();
          },
        },
        d
      )
  );
});
const pC = YA;
var XA = S.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? "rc-notification" : n,
      i = e.container,
      o = e.motion,
      a = e.maxCount,
      u = e.className,
      l = e.style,
      s = e.onAllRemoved,
      c = S.useState([]),
      d = we(c, 2),
      f = d[0],
      h = d[1],
      v = function (E) {
        var k,
          M = f.find(function (T) {
            return T.key === E;
          });
        M == null || (k = M.onClose) === null || k === void 0 || k.call(M),
          h(function (T) {
            return T.filter(function (A) {
              return A.key !== E;
            });
          });
      };
    S.useImperativeHandle(t, function () {
      return {
        open: function (E) {
          h(function (k) {
            var M = de(k),
              T = M.findIndex(function (A) {
                return A.key === E.key;
              });
            return (
              T >= 0 ? (M[T] = E) : M.push(E),
              a > 0 && M.length > a && (M = M.slice(-a)),
              M
            );
          });
        },
        close: function (E) {
          v(E);
        },
        destroy: function () {
          h([]);
        },
      };
    });
    var y = S.useState({}),
      b = we(y, 2),
      m = b[0],
      p = b[1];
    S.useEffect(
      function () {
        var C = {};
        f.forEach(function (E) {
          var k = E.placement,
            M = k === void 0 ? "topRight" : k;
          M && ((C[M] = C[M] || []), C[M].push(E));
        }),
          Object.keys(m).forEach(function (E) {
            C[E] = C[E] || [];
          }),
          p(C);
      },
      [f]
    );
    var g = function (E) {
        p(function (k) {
          var M = K({}, k),
            T = M[E] || [];
          return T.length || delete M[E], M;
        });
      },
      w = S.useRef(!1);
    if (
      (S.useEffect(
        function () {
          Object.keys(m).length > 0
            ? (w.current = !0)
            : w.current && (s == null || s(), (w.current = !1));
        },
        [m]
      ),
      !i)
    )
      return null;
    var x = Object.keys(m);
    return or.createPortal(
      S.createElement(
        S.Fragment,
        null,
        x.map(function (C) {
          var E = m[C],
            k = E.map(function (T) {
              return { config: T, key: T.key };
            }),
            M = typeof o == "function" ? o(C) : o;
          return S.createElement(
            w4,
            It(
              {
                key: C,
                className: be(
                  r,
                  "".concat(r, "-").concat(C),
                  u == null ? void 0 : u(C)
                ),
                style: l == null ? void 0 : l(C),
                keys: k,
                motionAppear: !0,
              },
              M,
              {
                onAllRemoved: function () {
                  g(C);
                },
              }
            ),
            function (T, A) {
              var P = T.config,
                O = T.className,
                R = T.style,
                $ = P.key,
                F = P.className,
                N = P.style;
              return S.createElement(
                pC,
                It({}, P, {
                  ref: A,
                  prefixCls: r,
                  className: be(O, F),
                  style: K(K({}, R), N),
                  key: $,
                  eventKey: $,
                  onNoticeClose: v,
                })
              );
            }
          );
        })
      ),
      i
    );
  }),
  ZA = [
    "getContainer",
    "motion",
    "prefixCls",
    "maxCount",
    "className",
    "style",
    "onAllRemoved",
  ],
  JA = function () {
    return document.body;
  },
  e0 = 0;
function e3() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return (
    n.forEach(function (i) {
      i &&
        Object.keys(i).forEach(function (o) {
          var a = i[o];
          a !== void 0 && (e[o] = a);
        });
    }),
    e
  );
}
function t3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.getContainer,
    n = t === void 0 ? JA : t,
    r = e.motion,
    i = e.prefixCls,
    o = e.maxCount,
    a = e.className,
    u = e.style,
    l = e.onAllRemoved,
    s = jo(e, ZA),
    c = S.useState(),
    d = we(c, 2),
    f = d[0],
    h = d[1],
    v = S.useRef(),
    y = S.createElement(XA, {
      container: f,
      ref: v,
      prefixCls: i,
      motion: r,
      maxCount: o,
      className: a,
      style: u,
      onAllRemoved: l,
    }),
    b = S.useState([]),
    m = we(b, 2),
    p = m[0],
    g = m[1],
    w = S.useMemo(function () {
      return {
        open: function (C) {
          var E = e3(s, C);
          (E.key === null || E.key === void 0) &&
            ((E.key = "rc-notification-".concat(e0)), (e0 += 1)),
            g(function (k) {
              return [].concat(de(k), [{ type: "open", config: E }]);
            });
        },
        close: function (C) {
          g(function (E) {
            return [].concat(de(E), [{ type: "close", key: C }]);
          });
        },
        destroy: function () {
          g(function (C) {
            return [].concat(de(C), [{ type: "destroy" }]);
          });
        },
      };
    }, []);
  return (
    S.useEffect(function () {
      h(n());
    }),
    S.useEffect(
      function () {
        v.current &&
          p.length &&
          (p.forEach(function (x) {
            switch (x.type) {
              case "open":
                v.current.open(x.config);
                break;
              case "close":
                v.current.close(x.key);
                break;
              case "destroy":
                v.current.destroy();
                break;
            }
          }),
          g([]));
      },
      [p]
    ),
    [w, y]
  );
}
const n3 = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        boxShadow: r,
        colorBgElevated: i,
        colorSuccess: o,
        colorError: a,
        colorWarning: u,
        colorInfo: l,
        fontSizeLG: s,
        motionEaseInOutCirc: c,
        motionDurationSlow: d,
        marginXS: f,
        paddingXS: h,
        borderRadiusLG: v,
        zIndexPopup: y,
        messageNoticeContentPadding: b,
      } = e,
      m = new At("MessageMoveIn", {
        "0%": { padding: 0, transform: "translateY(-100%)", opacity: 0 },
        "100%": { padding: h, transform: "translateY(0)", opacity: 1 },
      }),
      p = new At("MessageMoveOut", {
        "0%": { maxHeight: e.height, padding: h, opacity: 1 },
        "100%": { maxHeight: 0, padding: 0, opacity: 0 },
      });
    return [
      {
        [t]: Object.assign(Object.assign({}, Lv(e)), {
          position: "fixed",
          top: f,
          width: "100%",
          pointerEvents: "none",
          zIndex: y,
          [`${t}-move-up`]: { animationFillMode: "forwards" },
          [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
            animationName: m,
            animationDuration: d,
            animationPlayState: "paused",
            animationTimingFunction: c,
          },
          [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: "running" },
          [`${t}-move-up-leave`]: {
            animationName: p,
            animationDuration: d,
            animationPlayState: "paused",
            animationTimingFunction: c,
          },
          [`${t}-move-up-leave${t}-move-up-leave-active`]: {
            animationPlayState: "running",
          },
          "&-rtl": { direction: "rtl", span: { direction: "rtl" } },
        }),
      },
      {
        [`${t}-notice`]: {
          padding: h,
          textAlign: "center",
          [`${t}-custom-content > ${n}`]: {
            verticalAlign: "text-bottom",
            marginInlineEnd: f,
            fontSize: s,
          },
          [`${t}-notice-content`]: {
            display: "inline-block",
            padding: b,
            background: i,
            borderRadius: v,
            boxShadow: r,
            pointerEvents: "all",
          },
          [`${t}-success > ${n}`]: { color: o },
          [`${t}-error > ${n}`]: { color: a },
          [`${t}-warning > ${n}`]: { color: u },
          [`
        ${t}-info > ${n},
        ${t}-loading > ${n}`]: { color: l },
        },
      },
      { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: "start" } },
    ];
  },
  vC = Ac(
    "Message",
    (e) => {
      const t = Ho(e, {
        messageNoticeContentPadding: `${
          (e.controlHeightLG - e.fontSize * e.lineHeight) / 2
        }px ${e.paddingSM}px`,
      });
      return [n3(t)];
    },
    (e) => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 })
  );
var r3 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const i3 = {
  info: S.createElement(t4, null),
  success: S.createElement(BT, null),
  error: S.createElement(WT, null),
  warning: S.createElement(ZT, null),
  loading: S.createElement(T4, null),
};
function mC(e) {
  let { prefixCls: t, type: n, icon: r, children: i } = e;
  return S.createElement(
    "div",
    { className: be(`${t}-custom-content`, `${t}-${n}`) },
    r || i3[n],
    S.createElement("span", null, i)
  );
}
function o3(e) {
  const { prefixCls: t, className: n, type: r, icon: i, content: o } = e,
    a = r3(e, ["prefixCls", "className", "type", "icon", "content"]),
    { getPrefixCls: u } = S.useContext(en),
    l = t || u("message"),
    [, s] = vC(l);
  return S.createElement(
    pC,
    Object.assign({}, a, {
      prefixCls: l,
      className: be(n, s, `${l}-notice-pure-panel`),
      eventKey: "pure",
      duration: null,
      content: S.createElement(mC, { prefixCls: l, type: r, icon: i }, o),
    })
  );
}
function a3(e, t) {
  return { motionName: t ?? `${e}-move-up` };
}
function Vv(e) {
  let t;
  const n = new Promise((i) => {
      t = e(() => {
        i(!0);
      });
    }),
    r = () => {
      t == null || t();
    };
  return (r.then = (i, o) => n.then(i, o)), (r.promise = n), r;
}
var u3 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
const l3 = 8,
  s3 = 3,
  c3 = S.forwardRef((e, t) => {
    const {
        top: n,
        prefixCls: r,
        getContainer: i,
        maxCount: o,
        duration: a = s3,
        rtl: u,
        transitionName: l,
        onAllRemoved: s,
      } = e,
      { getPrefixCls: c, getPopupContainer: d } = S.useContext(en),
      f = r || c("message"),
      [, h] = vC(f),
      v = () => ({ left: "50%", transform: "translateX(-50%)", top: n ?? l3 }),
      y = () => be(h, u ? `${f}-rtl` : ""),
      b = () => a3(f, l),
      m = S.createElement(
        "span",
        { className: `${f}-close-x` },
        S.createElement(Ab, { className: `${f}-close-icon` })
      ),
      [p, g] = t3({
        prefixCls: f,
        style: v,
        className: y,
        motion: b,
        closable: !1,
        closeIcon: m,
        duration: a,
        getContainer: () =>
          (i == null ? void 0 : i()) ||
          (d == null ? void 0 : d()) ||
          document.body,
        maxCount: o,
        onAllRemoved: s,
      });
    return (
      S.useImperativeHandle(t, () =>
        Object.assign(Object.assign({}, p), { prefixCls: f, hashId: h })
      ),
      g
    );
  });
let t0 = 0;
function gC(e) {
  const t = S.useRef(null);
  return [
    S.useMemo(() => {
      const r = (l) => {
          var s;
          (s = t.current) === null || s === void 0 || s.close(l);
        },
        i = (l) => {
          if (!t.current) {
            const x = () => {};
            return (x.then = () => {}), x;
          }
          const { open: s, prefixCls: c, hashId: d } = t.current,
            f = `${c}-notice`,
            {
              content: h,
              icon: v,
              type: y,
              key: b,
              className: m,
              onClose: p,
            } = l,
            g = u3(l, [
              "content",
              "icon",
              "type",
              "key",
              "className",
              "onClose",
            ]);
          let w = b;
          return (
            w == null && ((t0 += 1), (w = `antd-message-${t0}`)),
            Vv(
              (x) => (
                s(
                  Object.assign(Object.assign({}, g), {
                    key: w,
                    content: S.createElement(
                      mC,
                      { prefixCls: c, type: y, icon: v },
                      h
                    ),
                    placement: "top",
                    className: be(y && `${f}-${y}`, d, m),
                    onClose: () => {
                      p == null || p(), x();
                    },
                  })
                ),
                () => {
                  r(w);
                }
              )
            )
          );
        },
        a = {
          open: i,
          destroy: (l) => {
            var s;
            l !== void 0
              ? r(l)
              : (s = t.current) === null || s === void 0 || s.destroy();
          },
        };
      return (
        ["info", "success", "warning", "error", "loading"].forEach((l) => {
          const s = (c, d, f) => {
            let h;
            c && typeof c == "object" && "content" in c
              ? (h = c)
              : (h = { content: c });
            let v, y;
            typeof d == "function" ? (y = d) : ((v = d), (y = f));
            const b = Object.assign(
              Object.assign({ onClose: y, duration: v }, h),
              { type: l }
            );
            return i(b);
          };
          a[l] = s;
        }),
        a
      );
    }, []),
    S.createElement(
      c3,
      Object.assign({ key: "message-holder" }, e, { ref: t })
    ),
  ];
}
function f3(e) {
  return gC(e);
}
const d3 = ["success", "info", "warning", "error", "loading"];
let On = null,
  Mi = (e) => e(),
  gu = [],
  Fs = {};
function h3() {
  const {
      prefixCls: e,
      getContainer: t,
      duration: n,
      rtl: r,
      maxCount: i,
      top: o,
    } = Fs,
    a = e ?? pb().getPrefixCls("message"),
    u = (t == null ? void 0 : t()) || document.body;
  return {
    prefixCls: a,
    container: u,
    duration: n,
    rtl: r,
    maxCount: i,
    top: o,
  };
}
const p3 = S.forwardRef((e, t) => {
  const n = () => {
      const {
        prefixCls: d,
        container: f,
        maxCount: h,
        duration: v,
        rtl: y,
        top: b,
      } = h3();
      return {
        prefixCls: d,
        getContainer: () => f,
        maxCount: h,
        duration: v,
        rtl: y,
        top: b,
      };
    },
    [r, i] = S.useState(n),
    [o, a] = gC(r),
    u = pb(),
    l = u.getRootPrefixCls(),
    s = u.getIconPrefixCls(),
    c = () => {
      i(n);
    };
  return (
    S.useEffect(c, []),
    S.useImperativeHandle(t, () => {
      const d = Object.assign({}, o);
      return (
        Object.keys(d).forEach((f) => {
          d[f] = function () {
            return c(), o[f].apply(o, arguments);
          };
        }),
        { instance: d, sync: c }
      );
    }),
    S.createElement(vb, { prefixCls: l, iconPrefixCls: s }, a)
  );
});
function Uc() {
  if (!On) {
    const e = document.createDocumentFragment(),
      t = { fragment: e };
    (On = t),
      Mi(() => {
        h$(
          S.createElement(p3, {
            ref: (n) => {
              const { instance: r, sync: i } = n || {};
              Promise.resolve().then(() => {
                !t.instance && r && ((t.instance = r), (t.sync = i), Uc());
              });
            },
          }),
          e
        );
      });
    return;
  }
  On.instance &&
    (gu.forEach((e) => {
      const { type: t, skipped: n } = e;
      if (!n)
        switch (t) {
          case "open": {
            Mi(() => {
              const r = On.instance.open(
                Object.assign(Object.assign({}, Fs), e.config)
              );
              r == null || r.then(e.resolve), e.setCloseFn(r);
            });
            break;
          }
          case "destroy":
            Mi(() => {
              On == null || On.instance.destroy(e.key);
            });
            break;
          default:
            Mi(() => {
              var r;
              const i = (r = On.instance)[t].apply(r, gb(e.args));
              i == null || i.then(e.resolve), e.setCloseFn(i);
            });
        }
    }),
    (gu = []));
}
function v3(e) {
  (Fs = Object.assign(Object.assign({}, Fs), e)),
    Mi(() => {
      var t;
      (t = On == null ? void 0 : On.sync) === null ||
        t === void 0 ||
        t.call(On);
    });
}
function m3(e) {
  const t = Vv((n) => {
    let r;
    const i = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (o) => {
        r = o;
      },
    };
    return (
      gu.push(i),
      () => {
        r
          ? Mi(() => {
              r();
            })
          : (i.skipped = !0);
      }
    );
  });
  return Uc(), t;
}
function g3(e, t) {
  const n = Vv((r) => {
    let i;
    const o = {
      type: e,
      args: t,
      resolve: r,
      setCloseFn: (a) => {
        i = a;
      },
    };
    return (
      gu.push(o),
      () => {
        i
          ? Mi(() => {
              i();
            })
          : (o.skipped = !0);
      }
    );
  });
  return Uc(), n;
}
function y3(e) {
  gu.push({ type: "destroy", key: e }), Uc();
}
const w3 = {
    open: m3,
    destroy: y3,
    config: v3,
    useMessage: f3,
    _InternalPanelDoNotUseOrYouWillBeFired: o3,
  },
  yC = w3;
d3.forEach((e) => {
  yC[e] = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return g3(e, n);
  };
});
const wC = yC;
var S3 = {
  locale: "zh_CN",
  today: "??????",
  now: "??????",
  backToToday: "????????????",
  ok: "??????",
  timeSelect: "????????????",
  dateSelect: "????????????",
  weekSelect: "?????????",
  clear: "??????",
  month: "???",
  year: "???",
  previousMonth: "????????? (????????????)",
  nextMonth: "????????? (????????????)",
  monthSelect: "????????????",
  yearSelect: "????????????",
  decadeSelect: "????????????",
  yearFormat: "YYYY???",
  dayFormat: "D???",
  dateFormat: "YYYY???M???D???",
  dateTimeFormat: "YYYY???M???D??? HH???mm???ss???",
  previousYear: "????????? (Control??????????????????)",
  nextYear: "????????? (Control??????????????????)",
  previousDecade: "????????????",
  nextDecade: "????????????",
  previousCentury: "????????????",
  nextCentury: "????????????",
};
const b3 = {
    placeholder: "???????????????",
    rangePlaceholder: ["????????????", "????????????"],
  },
  SC = b3,
  bC = {
    lang: Object.assign(
      {
        placeholder: "???????????????",
        yearPlaceholder: "???????????????",
        quarterPlaceholder: "???????????????",
        monthPlaceholder: "???????????????",
        weekPlaceholder: "????????????",
        rangePlaceholder: ["????????????", "????????????"],
        rangeYearPlaceholder: ["????????????", "????????????"],
        rangeMonthPlaceholder: ["????????????", "????????????"],
        rangeQuarterPlaceholder: ["????????????", "????????????"],
        rangeWeekPlaceholder: ["?????????", "?????????"],
      },
      S3
    ),
    timePickerLocale: Object.assign({}, SC),
  };
bC.lang.ok = "??????";
const n0 = bC,
  un = "${label}?????????????????????${type}",
  C3 = {
    locale: "zh-cn",
    Pagination: GA,
    DatePicker: n0,
    TimePicker: SC,
    Calendar: n0,
    global: { placeholder: "?????????" },
    Table: {
      filterTitle: "??????",
      filterConfirm: "??????",
      filterReset: "??????",
      filterEmptyText: "????????????",
      filterCheckall: "??????",
      filterSearchPlaceholder: "?????????????????????",
      selectAll: "????????????",
      selectInvert: "????????????",
      selectNone: "????????????",
      selectionAll: "????????????",
      sortTitle: "??????",
      expand: "?????????",
      collapse: "?????????",
      triggerDesc: "????????????",
      triggerAsc: "????????????",
      cancelSort: "????????????",
    },
    Modal: { okText: "??????", cancelText: "??????", justOkText: "?????????" },
    Tour: { Next: "?????????", Previous: "?????????", Finish: "????????????" },
    Popconfirm: { cancelText: "??????", okText: "??????" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "?????????????????????",
      itemUnit: "???",
      itemsUnit: "???",
      remove: "??????",
      selectCurrent: "????????????",
      removeCurrent: "????????????",
      selectAll: "????????????",
      removeAll: "????????????",
      selectInvert: "????????????",
    },
    Upload: {
      uploading: "???????????????",
      removeFile: "????????????",
      uploadError: "????????????",
      previewFile: "????????????",
      downloadFile: "????????????",
    },
    Empty: { description: "????????????" },
    Icon: { icon: "??????" },
    Text: { edit: "??????", copy: "??????", copied: "????????????", expand: "??????" },
    PageHeader: { back: "??????" },
    Form: {
      optional: "????????????",
      defaultValidateMessages: {
        default: "??????????????????${label}",
        required: "?????????${label}",
        enum: "${label}?????????????????????[${enum}]",
        whitespace: "${label}??????????????????",
        date: {
          format: "${label}??????????????????",
          parse: "${label}?????????????????????",
          invalid: "${label}?????????????????????",
        },
        types: {
          string: un,
          method: un,
          array: un,
          object: un,
          number: un,
          date: un,
          boolean: un,
          integer: un,
          float: un,
          regexp: un,
          email: un,
          url: un,
          hex: un,
        },
        string: {
          len: "${label}??????${len}?????????",
          min: "${label}??????${min}?????????",
          max: "${label}??????${max}?????????",
          range: "${label}??????${min}-${max}????????????",
        },
        number: {
          len: "${label}????????????${len}",
          min: "${label}????????????${min}",
          max: "${label}????????????${max}",
          range: "${label}??????${min}-${max}??????",
        },
        array: {
          len: "??????${len}???${label}",
          min: "??????${min}???${label}",
          max: "??????${max}???${label}",
          range: "${label}????????????${min}-${max}??????",
        },
        pattern: { mismatch: "${label}??????????????????${pattern}" },
      },
    },
    Image: { preview: "??????" },
    QRCode: { expired: "???????????????", refresh: "????????????" },
  },
  E3 = C3;
var _s = {},
  x3 = {
    get exports() {
      return _s;
    },
    set exports(e) {
      _s = e;
    },
  },
  CC = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = S;
function O3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var P3 = typeof Object.is == "function" ? Object.is : O3,
  R3 = qo.useState,
  k3 = qo.useEffect,
  M3 = qo.useLayoutEffect,
  T3 = qo.useDebugValue;
function $3(e, t) {
  var n = t(),
    r = R3({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    M3(
      function () {
        (i.value = n), (i.getSnapshot = t), ud(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    k3(
      function () {
        return (
          ud(i) && o({ inst: i }),
          e(function () {
            ud(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    T3(n),
    n
  );
}
function ud(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !P3(e, n);
  } catch {
    return !0;
  }
}
function A3(e, t) {
  return t();
}
var F3 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? A3
    : $3;
CC.useSyncExternalStore =
  qo.useSyncExternalStore !== void 0 ? qo.useSyncExternalStore : F3;
(function (e) {
  e.exports = CC;
})(x3);
var rp = {},
  _3 = {
    get exports() {
      return rp;
    },
    set exports(e) {
      rp = e;
    },
  },
  EC = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc = S,
  N3 = _s;
function I3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var L3 = typeof Object.is == "function" ? Object.is : I3,
  D3 = N3.useSyncExternalStore,
  j3 = Hc.useRef,
  z3 = Hc.useEffect,
  U3 = Hc.useMemo,
  H3 = Hc.useDebugValue;
EC.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = j3(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = U3(
    function () {
      function l(h) {
        if (!s) {
          if (((s = !0), (c = h), (h = r(h)), i !== void 0 && a.hasValue)) {
            var v = a.value;
            if (i(v, h)) return (d = v);
          }
          return (d = h);
        }
        if (((v = d), L3(c, h))) return v;
        var y = r(h);
        return i !== void 0 && i(v, y) ? v : ((c = h), (d = y));
      }
      var s = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, i]
  );
  var u = D3(e, o[0], o[1]);
  return (
    z3(
      function () {
        (a.hasValue = !0), (a.value = u);
      },
      [u]
    ),
    H3(u),
    u
  );
};
(function (e) {
  e.exports = EC;
})(_3);
function q3(e) {
  e();
}
let xC = q3;
const B3 = (e) => (xC = e),
  V3 = () => xC,
  ar = S.createContext(null);
function OC() {
  return S.useContext(ar);
}
const PC = () => {
  throw new Error("uSES not initialized!");
};
let RC = PC;
const Q3 = (e) => {
    RC = e;
  },
  W3 = (e, t) => e === t;
function kC(e = ar) {
  const t = e === ar ? OC : () => S.useContext(e);
  return function (r, i = W3) {
    const { store: o, subscription: a, getServerState: u } = t(),
      l = RC(a.addNestedSub, o.getState, u || o.getState, r, i);
    return S.useDebugValue(l), l;
  };
}
const MC = kC();
function Po() {
  return (
    (Po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Po.apply(this, arguments)
  );
}
function TC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Qv = cu,
  K3 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  G3 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Y3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  $C = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Wv = {};
Wv[Qv.ForwardRef] = Y3;
Wv[Qv.Memo] = $C;
function r0(e) {
  return Qv.isMemo(e) ? $C : Wv[e.$$typeof] || K3;
}
var X3 = Object.defineProperty,
  Z3 = Object.getOwnPropertyNames,
  i0 = Object.getOwnPropertySymbols,
  J3 = Object.getOwnPropertyDescriptor,
  eF = Object.getPrototypeOf,
  o0 = Object.prototype;
function AC(e, t, n) {
  if (typeof t != "string") {
    if (o0) {
      var r = eF(t);
      r && r !== o0 && AC(e, r, n);
    }
    var i = Z3(t);
    i0 && (i = i.concat(i0(t)));
    for (var o = r0(e), a = r0(t), u = 0; u < i.length; ++u) {
      var l = i[u];
      if (!G3[l] && !(n && n[l]) && !(a && a[l]) && !(o && o[l])) {
        var s = J3(t, l);
        try {
          X3(e, l, s);
        } catch {}
      }
    }
  }
  return e;
}
var a0 = AC,
  ip = {},
  tF = {
    get exports() {
      return ip;
    },
    set exports(e) {
      ip = e;
    },
  },
  He = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kv = Symbol.for("react.element"),
  Gv = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  Bc = Symbol.for("react.strict_mode"),
  Vc = Symbol.for("react.profiler"),
  Qc = Symbol.for("react.provider"),
  Wc = Symbol.for("react.context"),
  nF = Symbol.for("react.server_context"),
  Kc = Symbol.for("react.forward_ref"),
  Gc = Symbol.for("react.suspense"),
  Yc = Symbol.for("react.suspense_list"),
  Xc = Symbol.for("react.memo"),
  Zc = Symbol.for("react.lazy"),
  rF = Symbol.for("react.offscreen"),
  FC;
FC = Symbol.for("react.module.reference");
function Nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Kv:
        switch (((e = e.type), e)) {
          case qc:
          case Vc:
          case Bc:
          case Gc:
          case Yc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case nF:
              case Wc:
              case Kc:
              case Zc:
              case Xc:
              case Qc:
                return e;
              default:
                return t;
            }
        }
      case Gv:
        return t;
    }
  }
}
He.ContextConsumer = Wc;
He.ContextProvider = Qc;
He.Element = Kv;
He.ForwardRef = Kc;
He.Fragment = qc;
He.Lazy = Zc;
He.Memo = Xc;
He.Portal = Gv;
He.Profiler = Vc;
He.StrictMode = Bc;
He.Suspense = Gc;
He.SuspenseList = Yc;
He.isAsyncMode = function () {
  return !1;
};
He.isConcurrentMode = function () {
  return !1;
};
He.isContextConsumer = function (e) {
  return Nn(e) === Wc;
};
He.isContextProvider = function (e) {
  return Nn(e) === Qc;
};
He.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kv;
};
He.isForwardRef = function (e) {
  return Nn(e) === Kc;
};
He.isFragment = function (e) {
  return Nn(e) === qc;
};
He.isLazy = function (e) {
  return Nn(e) === Zc;
};
He.isMemo = function (e) {
  return Nn(e) === Xc;
};
He.isPortal = function (e) {
  return Nn(e) === Gv;
};
He.isProfiler = function (e) {
  return Nn(e) === Vc;
};
He.isStrictMode = function (e) {
  return Nn(e) === Bc;
};
He.isSuspense = function (e) {
  return Nn(e) === Gc;
};
He.isSuspenseList = function (e) {
  return Nn(e) === Yc;
};
He.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === qc ||
    e === Vc ||
    e === Bc ||
    e === Gc ||
    e === Yc ||
    e === rF ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Zc ||
        e.$$typeof === Xc ||
        e.$$typeof === Qc ||
        e.$$typeof === Wc ||
        e.$$typeof === Kc ||
        e.$$typeof === FC ||
        e.getModuleId !== void 0))
  );
};
He.typeOf = Nn;
(function (e) {
  e.exports = He;
})(tF);
const iF = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function oF(
  e,
  t,
  n,
  r,
  { areStatesEqual: i, areOwnPropsEqual: o, areStatePropsEqual: a }
) {
  let u = !1,
    l,
    s,
    c,
    d,
    f;
  function h(p, g) {
    return (
      (l = p),
      (s = g),
      (c = e(l, s)),
      (d = t(r, s)),
      (f = n(c, d, s)),
      (u = !0),
      f
    );
  }
  function v() {
    return (
      (c = e(l, s)), t.dependsOnOwnProps && (d = t(r, s)), (f = n(c, d, s)), f
    );
  }
  function y() {
    return (
      e.dependsOnOwnProps && (c = e(l, s)),
      t.dependsOnOwnProps && (d = t(r, s)),
      (f = n(c, d, s)),
      f
    );
  }
  function b() {
    const p = e(l, s),
      g = !a(p, c);
    return (c = p), g && (f = n(c, d, s)), f;
  }
  function m(p, g) {
    const w = !o(g, s),
      x = !i(p, l, g, s);
    return (l = p), (s = g), w && x ? v() : w ? y() : x ? b() : f;
  }
  return function (g, w) {
    return u ? m(g, w) : h(g, w);
  };
}
function aF(e, t) {
  let {
      initMapStateToProps: n,
      initMapDispatchToProps: r,
      initMergeProps: i,
    } = t,
    o = TC(t, iF);
  const a = n(e, o),
    u = r(e, o),
    l = i(e, o);
  return oF(a, u, l, e, o);
}
function uF(e, t) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = (...o) => t(i(...o)));
  }
  return n;
}
function op(e) {
  return function (n) {
    const r = e(n);
    function i() {
      return r;
    }
    return (i.dependsOnOwnProps = !1), i;
  };
}
function u0(e) {
  return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : e.length !== 1;
}
function _C(e, t) {
  return function (r, { displayName: i }) {
    const o = function (u, l) {
      return o.dependsOnOwnProps ? o.mapToProps(u, l) : o.mapToProps(u, void 0);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (u, l) {
        (o.mapToProps = e), (o.dependsOnOwnProps = u0(e));
        let s = o(u, l);
        return (
          typeof s == "function" &&
            ((o.mapToProps = s), (o.dependsOnOwnProps = u0(s)), (s = o(u, l))),
          s
        );
      }),
      o
    );
  };
}
function Yv(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${
        r.wrappedComponentName
      }.`
    );
  };
}
function lF(e) {
  return e && typeof e == "object"
    ? op((t) => uF(e, t))
    : e
    ? typeof e == "function"
      ? _C(e)
      : Yv(e, "mapDispatchToProps")
    : op((t) => ({ dispatch: t }));
}
function sF(e) {
  return e
    ? typeof e == "function"
      ? _C(e)
      : Yv(e, "mapStateToProps")
    : op(() => ({}));
}
function cF(e, t, n) {
  return Po({}, n, e, t);
}
function fF(e) {
  return function (n, { displayName: r, areMergedPropsEqual: i }) {
    let o = !1,
      a;
    return function (l, s, c) {
      const d = e(l, s, c);
      return o ? i(d, a) || (a = d) : ((o = !0), (a = d)), a;
    };
  };
}
function dF(e) {
  return e ? (typeof e == "function" ? fF(e) : Yv(e, "mergeProps")) : () => cF;
}
function hF() {
  const e = V3();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const l0 = { notify() {}, get: () => [] };
function NC(e, t) {
  let n,
    r = l0;
  function i(d) {
    return l(), r.subscribe(d);
  }
  function o() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function u() {
    return Boolean(n);
  }
  function l() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = hF()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = l0));
  }
  const c = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: l,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const pF =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ns = pF ? S.useLayoutEffect : S.useEffect;
function s0(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ql(e, t) {
  if (s0(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !s0(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
const vF = ["reactReduxForwardedRef"];
let IC = PC;
const mF = (e) => {
    IC = e;
  },
  gF = [null, null];
function yF(e, t, n) {
  Ns(() => e(...t), n);
}
function wF(e, t, n, r, i, o) {
  (e.current = r), (n.current = !1), i.current && ((i.current = null), o());
}
function SF(e, t, n, r, i, o, a, u, l, s, c) {
  if (!e) return () => {};
  let d = !1,
    f = null;
  const h = () => {
    if (d || !u.current) return;
    const y = t.getState();
    let b, m;
    try {
      b = r(y, i.current);
    } catch (p) {
      (m = p), (f = p);
    }
    m || (f = null),
      b === o.current
        ? a.current || s()
        : ((o.current = b), (l.current = b), (a.current = !0), c());
  };
  return (
    (n.onStateChange = h),
    n.trySubscribe(),
    h(),
    () => {
      if (((d = !0), n.tryUnsubscribe(), (n.onStateChange = null), f)) throw f;
    }
  );
}
function bF(e, t) {
  return e === t;
}
function CF(
  e,
  t,
  n,
  {
    pure: r,
    areStatesEqual: i = bF,
    areOwnPropsEqual: o = ql,
    areStatePropsEqual: a = ql,
    areMergedPropsEqual: u = ql,
    forwardRef: l = !1,
    context: s = ar,
  } = {}
) {
  const c = s,
    d = sF(e),
    f = lF(t),
    h = dF(n),
    v = Boolean(e);
  return (b) => {
    const m = b.displayName || b.name || "Component",
      p = `Connect(${m})`,
      g = {
        shouldHandleStateChanges: v,
        displayName: p,
        wrappedComponentName: m,
        WrappedComponent: b,
        initMapStateToProps: d,
        initMapDispatchToProps: f,
        initMergeProps: h,
        areStatesEqual: i,
        areStatePropsEqual: a,
        areOwnPropsEqual: o,
        areMergedPropsEqual: u,
      };
    function w(E) {
      const [k, M, T] = S.useMemo(() => {
          const { reactReduxForwardedRef: z } = E,
            Q = TC(E, vF);
          return [E.context, z, Q];
        }, [E]),
        A = S.useMemo(
          () =>
            k &&
            k.Consumer &&
            ip.isContextConsumer(ce.createElement(k.Consumer, null))
              ? k
              : c,
          [k, c]
        ),
        P = S.useContext(A),
        O =
          Boolean(E.store) &&
          Boolean(E.store.getState) &&
          Boolean(E.store.dispatch),
        R = Boolean(P) && Boolean(P.store),
        $ = O ? E.store : P.store,
        F = R ? P.getServerState : $.getState,
        N = S.useMemo(() => aF($.dispatch, g), [$]),
        [_, I] = S.useMemo(() => {
          if (!v) return gF;
          const z = NC($, O ? void 0 : P.subscription),
            Q = z.notifyNestedSubs.bind(z);
          return [z, Q];
        }, [$, O, P]),
        L = S.useMemo(
          () => (O ? P : Po({}, P, { subscription: _ })),
          [O, P, _]
        ),
        H = S.useRef(),
        q = S.useRef(T),
        V = S.useRef(),
        X = S.useRef(!1);
      S.useRef(!1);
      const re = S.useRef(!1),
        ie = S.useRef();
      Ns(
        () => (
          (re.current = !0),
          () => {
            re.current = !1;
          }
        ),
        []
      );
      const oe = S.useMemo(
          () => () =>
            V.current && T === q.current ? V.current : N($.getState(), T),
          [$, T]
        ),
        Ae = S.useMemo(
          () => (Q) => _ ? SF(v, $, _, N, q, H, X, re, V, I, Q) : () => {},
          [_]
        );
      yF(wF, [q, H, X, T, V, I]);
      let Ee;
      try {
        Ee = IC(Ae, oe, F ? () => N(F(), T) : oe);
      } catch (z) {
        throw (
          (ie.current &&
            (z.message += `
The error may be correlated with this previous error:
${ie.current.stack}

`),
          z)
        );
      }
      Ns(() => {
        (ie.current = void 0), (V.current = void 0), (H.current = Ee);
      });
      const ae = S.useMemo(
        () => ce.createElement(b, Po({}, Ee, { ref: M })),
        [M, b, Ee]
      );
      return S.useMemo(
        () => (v ? ce.createElement(A.Provider, { value: L }, ae) : ae),
        [A, ae, L]
      );
    }
    const C = ce.memo(w);
    if (((C.WrappedComponent = b), (C.displayName = w.displayName = p), l)) {
      const k = ce.forwardRef(function (T, A) {
        return ce.createElement(C, Po({}, T, { reactReduxForwardedRef: A }));
      });
      return (k.displayName = p), (k.WrappedComponent = b), a0(k, b);
    }
    return a0(C, b);
  };
}
function LC({ store: e, context: t, children: n, serverState: r }) {
  const i = S.useMemo(() => {
      const u = NC(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = S.useMemo(() => e.getState(), [e]);
  Ns(() => {
    const { subscription: u } = i;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      o !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [i, o]);
  const a = t || ar;
  return ce.createElement(a.Provider, { value: i }, n);
}
function Xv(e = ar) {
  const t = e === ar ? OC : () => S.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const DC = Xv();
function jC(e = ar) {
  const t = e === ar ? DC : Xv(e);
  return function () {
    return t().dispatch;
  };
}
const zC = jC();
Q3(rp.useSyncExternalStoreWithSelector);
mF(_s.useSyncExternalStore);
B3(or.unstable_batchedUpdates);
const EF = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Provider: LC,
      ReactReduxContext: ar,
      batch: or.unstable_batchedUpdates,
      connect: CF,
      createDispatchHook: jC,
      createSelectorHook: kC,
      createStoreHook: Xv,
      shallowEqual: ql,
      useDispatch: zC,
      useSelector: MC,
      useStore: DC,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function kt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function pn(e) {
  return !!e && !!e[Ge];
}
function Kn(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === $F)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Da] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Da]) ||
      Jc(e) ||
      ef(e))
  );
}
function xF(e) {
  return pn(e) || kt(23, e), e[Ge].t;
}
function si(e, t, n) {
  n === void 0 && (n = !1),
    ci(e) === 0
      ? (n ? Object.keys : Ro)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function ci(e) {
  var t = e[Ge];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Jc(e)
    ? 2
    : ef(e)
    ? 3
    : 0;
}
function oi(e, t) {
  return ci(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bl(e, t) {
  return ci(e) === 2 ? e.get(t) : e[t];
}
function UC(e, t, n) {
  var r = ci(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function HC(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Jc(e) {
  return MF && e instanceof Map;
}
function ef(e) {
  return TF && e instanceof Set;
}
function wi(e) {
  return e.o || e.t;
}
function Zv(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = BC(e);
  delete t[Ge];
  for (var n = Ro(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function tf(e, t) {
  return (
    t === void 0 && (t = !1),
    Jv(e) ||
      pn(e) ||
      !Kn(e) ||
      (ci(e) > 1 && (e.set = e.add = e.clear = e.delete = OF),
      Object.freeze(e),
      t &&
        si(
          e,
          function (n, r) {
            return tf(r, !0);
          },
          !0
        )),
    e
  );
}
function OF() {
  kt(2);
}
function Jv(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function ir(e) {
  var t = sp[e];
  return t || kt(18, e), t;
}
function qC(e, t) {
  sp[e] || (sp[e] = t);
}
function ap() {
  return yu;
}
function ld(e, t) {
  t && (ir("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Is(e) {
  up(e), e.p.forEach(PF), (e.p = null);
}
function up(e) {
  e === yu && (yu = e.l);
}
function c0(e) {
  return (yu = { p: [], l: yu, h: e, m: !0, _: 0 });
}
function PF(e) {
  var t = e[Ge];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function sd(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || ir("ES5").S(t, e, r),
    r
      ? (n[Ge].P && (Is(t), kt(4)),
        Kn(e) && ((e = Ls(t, e)), t.l || Ds(t, e)),
        t.u && ir("Patches").M(n[Ge].t, e, t.u, t.s))
      : (e = Ls(t, n, [])),
    Is(t),
    t.u && t.v(t.u, t.s),
    e !== nm ? e : void 0
  );
}
function Ls(e, t, n) {
  if (Jv(t)) return t;
  var r = t[Ge];
  if (!r)
    return (
      si(
        t,
        function (o, a) {
          return f0(e, r, t, o, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Ds(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Zv(r.k)) : r.o;
    si(r.i === 3 ? new Set(i) : i, function (o, a) {
      return f0(e, r, i, o, a, n);
    }),
      Ds(e, i, !1),
      n && e.u && ir("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function f0(e, t, n, r, i, o) {
  if (pn(i)) {
    var a = Ls(e, i, o && t && t.i !== 3 && !oi(t.D, r) ? o.concat(r) : void 0);
    if ((UC(n, r, a), !pn(a))) return;
    e.m = !1;
  }
  if (Kn(i) && !Jv(i)) {
    if (!e.h.F && e._ < 1) return;
    Ls(e, i), (t && t.A.l) || Ds(e, i);
  }
}
function Ds(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && tf(t, n);
}
function cd(e, t) {
  var n = e[Ge];
  return (n ? wi(n) : e)[t];
}
function d0(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Qr(e) {
  e.P || ((e.P = !0), e.l && Qr(e.l));
}
function fd(e) {
  e.o || (e.o = Zv(e.t));
}
function lp(e, t, n) {
  var r = Jc(t)
    ? ir("MapSet").N(t, n)
    : ef(t)
    ? ir("MapSet").T(t, n)
    : e.g
    ? (function (i, o) {
        var a = Array.isArray(i),
          u = {
            i: a ? 1 : 0,
            A: o ? o.A : ap(),
            P: !1,
            I: !1,
            D: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = u,
          s = wu;
        a && ((l = [u]), (s = Ca));
        var c = Proxy.revocable(l, s),
          d = c.revoke,
          f = c.proxy;
        return (u.k = f), (u.j = d), f;
      })(t, n)
    : ir("ES5").J(t, n);
  return (n ? n.A : ap()).p.push(r), r;
}
function em(e) {
  return (
    pn(e) || kt(22, e),
    (function t(n) {
      if (!Kn(n)) return n;
      var r,
        i = n[Ge],
        o = ci(n);
      if (i) {
        if (!i.P && (i.i < 4 || !ir("ES5").K(i))) return i.t;
        (i.I = !0), (r = h0(n, o)), (i.I = !1);
      } else r = h0(n, o);
      return (
        si(r, function (a, u) {
          (i && Bl(i.t, a) === u) || UC(r, a, t(u));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function h0(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Zv(e);
}
function RF() {
  function e(o, a) {
    var u = i[o];
    return (
      u
        ? (u.enumerable = a)
        : (i[o] = u =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var l = this[Ge];
                return wu.get(l, o);
              },
              set: function (l) {
                var s = this[Ge];
                wu.set(s, o, l);
              },
            }),
      u
    );
  }
  function t(o) {
    for (var a = o.length - 1; a >= 0; a--) {
      var u = o[a][Ge];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Qr(u);
            break;
          case 4:
            n(u) && Qr(u);
        }
    }
  }
  function n(o) {
    for (var a = o.t, u = o.k, l = Ro(u), s = l.length - 1; s >= 0; s--) {
      var c = l[s];
      if (c !== Ge) {
        var d = a[c];
        if (d === void 0 && !oi(a, c)) return !0;
        var f = u[c],
          h = f && f[Ge];
        if (h ? h.t !== d : !HC(f, d)) return !0;
      }
    }
    var v = !!a[Ge];
    return l.length !== Ro(a).length + (v ? 0 : 1);
  }
  function r(o) {
    var a = o.k;
    if (a.length !== o.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (u && !u.get) return !0;
    for (var l = 0; l < a.length; l++) if (!a.hasOwnProperty(l)) return !0;
    return !1;
  }
  var i = {};
  qC("ES5", {
    J: function (o, a) {
      var u = Array.isArray(o),
        l = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(f, "" + h, e(h, !0));
            return f;
          }
          var v = BC(d);
          delete v[Ge];
          for (var y = Ro(v), b = 0; b < y.length; b++) {
            var m = y[b];
            v[m] = e(m, c || !!v[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), v);
        })(u, o),
        s = {
          i: u ? 5 : 4,
          A: a ? a.A : ap(),
          P: !1,
          I: !1,
          D: {},
          l: a,
          t: o,
          k: l,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(l, Ge, { value: s, writable: !0 }), l;
    },
    S: function (o, a, u) {
      u
        ? pn(a) && a[Ge].A === o && t(o.p)
        : (o.u &&
            (function l(s) {
              if (s && typeof s == "object") {
                var c = s[Ge];
                if (c) {
                  var d = c.t,
                    f = c.k,
                    h = c.D,
                    v = c.i;
                  if (v === 4)
                    si(f, function (g) {
                      g !== Ge &&
                        (d[g] !== void 0 || oi(d, g)
                          ? h[g] || l(f[g])
                          : ((h[g] = !0), Qr(c)));
                    }),
                      si(d, function (g) {
                        f[g] !== void 0 || oi(f, g) || ((h[g] = !1), Qr(c));
                      });
                  else if (v === 5) {
                    if ((r(c) && (Qr(c), (h.length = !0)), f.length < d.length))
                      for (var y = f.length; y < d.length; y++) h[y] = !1;
                    else for (var b = d.length; b < f.length; b++) h[b] = !0;
                    for (
                      var m = Math.min(f.length, d.length), p = 0;
                      p < m;
                      p++
                    )
                      f.hasOwnProperty(p) || (h[p] = !0),
                        h[p] === void 0 && l(f[p]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
function kF() {
  function e(r) {
    if (!Kn(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Jc(r))
      return new Map(
        Array.from(r.entries()).map(function (a) {
          return [a[0], e(a[1])];
        })
      );
    if (ef(r)) return new Set(Array.from(r).map(e));
    var i = Object.create(Object.getPrototypeOf(r));
    for (var o in r) i[o] = e(r[o]);
    return oi(r, Da) && (i[Da] = r[Da]), i;
  }
  function t(r) {
    return pn(r) ? e(r) : r;
  }
  var n = "add";
  qC("Patches", {
    $: function (r, i) {
      return (
        i.forEach(function (o) {
          for (var a = o.path, u = o.op, l = r, s = 0; s < a.length - 1; s++) {
            var c = ci(l),
              d = "" + a[s];
            (c !== 0 && c !== 1) ||
              (d !== "__proto__" && d !== "constructor") ||
              kt(24),
              typeof l == "function" && d === "prototype" && kt(24),
              typeof (l = Bl(l, d)) != "object" && kt(15, a.join("/"));
          }
          var f = ci(l),
            h = e(o.value),
            v = a[a.length - 1];
          switch (u) {
            case "replace":
              switch (f) {
                case 2:
                  return l.set(v, h);
                case 3:
                  kt(16);
                default:
                  return (l[v] = h);
              }
            case n:
              switch (f) {
                case 1:
                  return v === "-" ? l.push(h) : l.splice(v, 0, h);
                case 2:
                  return l.set(v, h);
                case 3:
                  return l.add(h);
                default:
                  return (l[v] = h);
              }
            case "remove":
              switch (f) {
                case 1:
                  return l.splice(v, 1);
                case 2:
                  return l.delete(v);
                case 3:
                  return l.delete(o.value);
                default:
                  return delete l[v];
              }
            default:
              kt(17, u);
          }
        }),
        r
      );
    },
    R: function (r, i, o, a) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (u, l, s, c) {
            var d = u.t,
              f = u.o;
            si(u.D, function (h, v) {
              var y = Bl(d, h),
                b = Bl(f, h),
                m = v ? (oi(d, h) ? "replace" : n) : "remove";
              if (y !== b || m !== "replace") {
                var p = l.concat(h);
                s.push(
                  m === "remove"
                    ? { op: m, path: p }
                    : { op: m, path: p, value: b }
                ),
                  c.push(
                    m === n
                      ? { op: "remove", path: p }
                      : m === "remove"
                      ? { op: n, path: p, value: t(y) }
                      : { op: "replace", path: p, value: t(y) }
                  );
              }
            });
          })(r, i, o, a);
        case 5:
        case 1:
          return (function (u, l, s, c) {
            var d = u.t,
              f = u.D,
              h = u.o;
            if (h.length < d.length) {
              var v = [h, d];
              (d = v[0]), (h = v[1]);
              var y = [c, s];
              (s = y[0]), (c = y[1]);
            }
            for (var b = 0; b < d.length; b++)
              if (f[b] && h[b] !== d[b]) {
                var m = l.concat([b]);
                s.push({ op: "replace", path: m, value: t(h[b]) }),
                  c.push({ op: "replace", path: m, value: t(d[b]) });
              }
            for (var p = d.length; p < h.length; p++) {
              var g = l.concat([p]);
              s.push({ op: n, path: g, value: t(h[p]) });
            }
            d.length < h.length &&
              c.push({
                op: "replace",
                path: l.concat(["length"]),
                value: d.length,
              });
          })(r, i, o, a);
        case 3:
          return (function (u, l, s, c) {
            var d = u.t,
              f = u.o,
              h = 0;
            d.forEach(function (v) {
              if (!f.has(v)) {
                var y = l.concat([h]);
                s.push({ op: "remove", path: y, value: v }),
                  c.unshift({ op: n, path: y, value: v });
              }
              h++;
            }),
              (h = 0),
              f.forEach(function (v) {
                if (!d.has(v)) {
                  var y = l.concat([h]);
                  s.push({ op: n, path: y, value: v }),
                    c.unshift({ op: "remove", path: y, value: v });
                }
                h++;
              });
          })(r, i, o, a);
      }
    },
    M: function (r, i, o, a) {
      o.push({ op: "replace", path: [], value: i === nm ? void 0 : i }),
        a.push({ op: "replace", path: [], value: r });
    },
  });
}
var p0,
  yu,
  tm = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  MF = typeof Map < "u",
  TF = typeof Set < "u",
  v0 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  nm = tm
    ? Symbol.for("immer-nothing")
    : (((p0 = {})["immer-nothing"] = !0), p0),
  Da = tm ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Ge = tm ? Symbol.for("immer-state") : "__$immer_state",
  $F = "" + Object.prototype.constructor,
  Ro =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  BC =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Ro(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  sp = {},
  wu = {
    get: function (e, t) {
      if (t === Ge) return e;
      var n = wi(e);
      if (!oi(n, t))
        return (function (i, o, a) {
          var u,
            l = d0(o, a);
          return l
            ? "value" in l
              ? l.value
              : (u = l.get) === null || u === void 0
              ? void 0
              : u.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !Kn(r)
        ? r
        : r === cd(e.t, t)
        ? (fd(e), (e.o[t] = lp(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in wi(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(wi(e));
    },
    set: function (e, t, n) {
      var r = d0(wi(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = cd(wi(e), t),
          o = i == null ? void 0 : i[Ge];
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (HC(n, i) && (n !== void 0 || oi(e.t, t))) return !0;
        fd(e), Qr(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        cd(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), fd(e), Qr(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = wi(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      kt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      kt(12);
    },
  },
  Ca = {};
si(wu, function (e, t) {
  Ca[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Ca.deleteProperty = function (e, t) {
    return Ca.set.call(this, e, t, void 0);
  }),
  (Ca.set = function (e, t, n) {
    return wu.set.call(this, e[0], t, n, e[0]);
  });
var AF = (function () {
    function e(n) {
      var r = this;
      (this.g = v0),
        (this.F = !0),
        (this.produce = function (i, o, a) {
          if (typeof i == "function" && typeof o != "function") {
            var u = o;
            o = i;
            var l = r;
            return function (y) {
              var b = this;
              y === void 0 && (y = u);
              for (
                var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), g = 1;
                g < m;
                g++
              )
                p[g - 1] = arguments[g];
              return l.produce(y, function (w) {
                var x;
                return (x = o).call.apply(x, [b, w].concat(p));
              });
            };
          }
          var s;
          if (
            (typeof o != "function" && kt(6),
            a !== void 0 && typeof a != "function" && kt(7),
            Kn(i))
          ) {
            var c = c0(r),
              d = lp(r, i, void 0),
              f = !0;
            try {
              (s = o(d)), (f = !1);
            } finally {
              f ? Is(c) : up(c);
            }
            return typeof Promise < "u" && s instanceof Promise
              ? s.then(
                  function (y) {
                    return ld(c, a), sd(y, c);
                  },
                  function (y) {
                    throw (Is(c), y);
                  }
                )
              : (ld(c, a), sd(s, c));
          }
          if (!i || typeof i != "object") {
            if (
              ((s = o(i)) === void 0 && (s = i),
              s === nm && (s = void 0),
              r.F && tf(s, !0),
              a)
            ) {
              var h = [],
                v = [];
              ir("Patches").M(i, s, h, v), a(h, v);
            }
            return s;
          }
          kt(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == "function")
            return function (s) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              return r.produceWithPatches(s, function (h) {
                return i.apply(void 0, [h].concat(d));
              });
            };
          var a,
            u,
            l = r.produce(i, o, function (s, c) {
              (a = s), (u = c);
            });
          return typeof Promise < "u" && l instanceof Promise
            ? l.then(function (s) {
                return [s, a, u];
              })
            : [l, a, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        Kn(n) || kt(8), pn(n) && (n = em(n));
        var r = c0(this),
          i = lp(this, n, void 0);
        return (i[Ge].C = !0), up(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[Ge],
          o = i.A;
        return ld(o, r), sd(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !v0 && kt(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var a = ir("Patches").$;
        return pn(n)
          ? a(n, r)
          : this.produce(n, function (u) {
              return a(u, r);
            });
      }),
      e
    );
  })(),
  vn = new AF(),
  Qi = vn.produce,
  VC = vn.produceWithPatches.bind(vn);
vn.setAutoFreeze.bind(vn);
vn.setUseProxies.bind(vn);
var m0 = vn.applyPatches.bind(vn);
vn.createDraft.bind(vn);
vn.finishDraft.bind(vn);
function Su(e) {
  return (
    (Su =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Su(e)
  );
}
function FF(e, t) {
  if (Su(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Su(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _F(e) {
  var t = FF(e, "string");
  return Su(t) === "symbol" ? t : String(t);
}
function NF(e, t, n) {
  return (
    (t = _F(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function g0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function y0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g0(Object(n), !0).forEach(function (r) {
          NF(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : g0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ot(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var w0 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  dd = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  bu = {
    INIT: "@@redux/INIT" + dd(),
    REPLACE: "@@redux/REPLACE" + dd(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + dd();
    },
  };
function IF(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function nf(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ot(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ot(1));
    return n(nf)(e, t);
  }
  if (typeof e != "function") throw new Error(Ot(2));
  var i = e,
    o = t,
    a = [],
    u = a,
    l = !1;
  function s() {
    u === a && (u = a.slice());
  }
  function c() {
    if (l) throw new Error(Ot(3));
    return o;
  }
  function d(y) {
    if (typeof y != "function") throw new Error(Ot(4));
    if (l) throw new Error(Ot(5));
    var b = !0;
    return (
      s(),
      u.push(y),
      function () {
        if (b) {
          if (l) throw new Error(Ot(6));
          (b = !1), s();
          var p = u.indexOf(y);
          u.splice(p, 1), (a = null);
        }
      }
    );
  }
  function f(y) {
    if (!IF(y)) throw new Error(Ot(7));
    if (typeof y.type > "u") throw new Error(Ot(8));
    if (l) throw new Error(Ot(9));
    try {
      (l = !0), (o = i(o, y));
    } finally {
      l = !1;
    }
    for (var b = (a = u), m = 0; m < b.length; m++) {
      var p = b[m];
      p();
    }
    return y;
  }
  function h(y) {
    if (typeof y != "function") throw new Error(Ot(10));
    (i = y), f({ type: bu.REPLACE });
  }
  function v() {
    var y,
      b = d;
    return (
      (y = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(Ot(11));
          function g() {
            p.next && p.next(c());
          }
          g();
          var w = b(g);
          return { unsubscribe: w };
        },
      }),
      (y[w0] = function () {
        return this;
      }),
      y
    );
  }
  return (
    f({ type: bu.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: h }),
    (r[w0] = v),
    r
  );
}
var LF = nf;
function DF(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: bu.INIT });
    if (typeof r > "u") throw new Error(Ot(12));
    if (typeof n(void 0, { type: bu.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ot(13));
  });
}
function rm(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    a;
  try {
    DF(n);
  } catch (u) {
    a = u;
  }
  return function (l, s) {
    if ((l === void 0 && (l = {}), a)) throw a;
    for (var c = !1, d = {}, f = 0; f < o.length; f++) {
      var h = o[f],
        v = n[h],
        y = l[h],
        b = v(y, s);
      if (typeof b > "u") throw (s && s.type, new Error(Ot(14)));
      (d[h] = b), (c = c || b !== y);
    }
    return (c = c || o.length !== Object.keys(l).length), c ? d : l;
  };
}
function S0(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function jF(e, t) {
  if (typeof e == "function") return S0(e, t);
  if (typeof e != "object" || e === null) throw new Error(Ot(16));
  var n = {};
  for (var r in e) {
    var i = e[r];
    typeof i == "function" && (n[r] = S0(i, t));
  }
  return n;
}
function Cu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function QC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Ot(15));
        },
        a = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        u = t.map(function (l) {
          return l(a);
        });
      return (
        (o = Cu.apply(void 0, u)(i.dispatch)),
        y0(y0({}, i), {}, { dispatch: o })
      );
    };
  };
}
var js = "NOT_FOUND";
function zF(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : js;
    },
    put: function (r, i) {
      t = { key: r, value: i };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function UF(e, t) {
  var n = [];
  function r(u) {
    var l = n.findIndex(function (c) {
      return t(u, c.key);
    });
    if (l > -1) {
      var s = n[l];
      return l > 0 && (n.splice(l, 1), n.unshift(s)), s.value;
    }
    return js;
  }
  function i(u, l) {
    r(u) === js && (n.unshift({ key: u, value: l }), n.length > e && n.pop());
  }
  function o() {
    return n;
  }
  function a() {
    n = [];
  }
  return { get: r, put: i, getEntries: o, clear: a };
}
var HF = function (t, n) {
  return t === n;
};
function qF(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var i = n.length, o = 0; o < i; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function cp(e, t) {
  var n = typeof t == "object" ? t : { equalityCheck: t },
    r = n.equalityCheck,
    i = r === void 0 ? HF : r,
    o = n.maxSize,
    a = o === void 0 ? 1 : o,
    u = n.resultEqualityCheck,
    l = qF(i),
    s = a === 1 ? zF(l) : UF(a, l);
  function c() {
    var d = s.get(arguments);
    if (d === js) {
      if (((d = e.apply(null, arguments)), u)) {
        var f = s.getEntries(),
          h = f.find(function (v) {
            return u(v.value, d);
          });
        h && (d = h.value);
      }
      s.put(arguments, d);
    }
    return d;
  }
  return (
    (c.clearCache = function () {
      return s.clear();
    }),
    c
  );
}
function BF(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == "function";
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == "function"
          ? "function " + (r.name || "unnamed") + "()"
          : typeof r;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        n +
        "]"
    );
  }
  return t;
}
function VF(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = function () {
    for (var a = arguments.length, u = new Array(a), l = 0; l < a; l++)
      u[l] = arguments[l];
    var s = 0,
      c,
      d = { memoizeOptions: void 0 },
      f = u.pop();
    if (
      (typeof f == "object" && ((d = f), (f = u.pop())), typeof f != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof f +
          "]"
      );
    var h = d,
      v = h.memoizeOptions,
      y = v === void 0 ? n : v,
      b = Array.isArray(y) ? y : [y],
      m = BF(u),
      p = e.apply(
        void 0,
        [
          function () {
            return s++, f.apply(null, arguments);
          },
        ].concat(b)
      ),
      g = e(function () {
        for (var x = [], C = m.length, E = 0; E < C; E++)
          x.push(m[E].apply(null, arguments));
        return (c = p.apply(null, x)), c;
      });
    return (
      Object.assign(g, {
        resultFunc: f,
        memoizedResultFunc: p,
        dependencies: m,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      g
    );
  };
  return i;
}
var zs = VF(cp);
function WC(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (a) {
      return function (u) {
        return typeof u == "function" ? u(i, o, e) : a(u);
      };
    };
  };
  return t;
}
var KC = WC();
KC.withExtraArgument = WC;
const b0 = KC;
var QF =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  zu =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        a;
      return (
        (a = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function u(s) {
        return function (c) {
          return l([s, c]);
        };
      }
      function l(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Bo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  WF = Object.defineProperty,
  KF = Object.defineProperties,
  GF = Object.getOwnPropertyDescriptors,
  C0 = Object.getOwnPropertySymbols,
  YF = Object.prototype.hasOwnProperty,
  XF = Object.prototype.propertyIsEnumerable,
  E0 = function (e, t, n) {
    return t in e
      ? WF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Yt = function (e, t) {
    for (var n in t || (t = {})) YF.call(t, n) && E0(e, n, t[n]);
    if (C0)
      for (var r = 0, i = C0(t); r < i.length; r++) {
        var n = i[r];
        XF.call(t, n) && E0(e, n, t[n]);
      }
    return e;
  },
  hd = function (e, t) {
    return KF(e, GF(t));
  },
  Uu = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (l) {
          try {
            u(n.next(l));
          } catch (s) {
            i(s);
          }
        },
        a = function (l) {
          try {
            u(n.throw(l));
          } catch (s) {
            i(s);
          }
        },
        u = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(o, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  dr = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = zs.apply(void 0, e),
      r = function (i) {
        for (var o = [], a = 1; a < arguments.length; a++)
          o[a - 1] = arguments[a];
        return n.apply(void 0, Bo([pn(i) ? em(i) : i], o));
      };
    return r;
  },
  ZF =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Cu
              : Cu.apply(null, arguments);
        };
function pi(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var GC = (function (e) {
  QF(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var i = e.apply(this, n) || this;
    return Object.setPrototypeOf(i, t.prototype), i;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Bo([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Bo([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function fp(e) {
  return Kn(e) ? Qi(e, function () {}) : e;
}
function JF(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function e_(e) {
  return function () {
    return function (t) {
      return function (n) {
        return t(n);
      };
    };
  };
}
function YC(e) {
  var t = typeof e;
  return (
    e == null ||
    t === "string" ||
    t === "boolean" ||
    t === "number" ||
    Array.isArray(e) ||
    pi(e)
  );
}
function XC(e, t, n, r, i, o) {
  t === void 0 && (t = ""), n === void 0 && (n = YC), i === void 0 && (i = []);
  var a;
  if (!n(e)) return { keyPath: t || "<root>", value: e };
  if (typeof e != "object" || e === null || (o != null && o.has(e))) return !1;
  for (
    var u = r != null ? r(e) : Object.entries(e),
      l = i.length > 0,
      s = function (b, m) {
        var p = t ? t + "." + b : b;
        if (l) {
          var g = i.some(function (w) {
            return w instanceof RegExp ? w.test(p) : p === w;
          });
          if (g) return "continue";
        }
        if (!n(m)) return { value: { keyPath: p, value: m } };
        if (typeof m == "object" && ((a = XC(m, p, n, r, i, o)), a))
          return { value: a };
      },
      c = 0,
      d = u;
    c < d.length;
    c++
  ) {
    var f = d[c],
      h = f[0],
      v = f[1],
      y = s(h, v);
    if (typeof y == "object") return y.value;
  }
  return o && ZC(e) && o.add(e), !1;
}
function ZC(e) {
  if (!Object.isFrozen(e)) return !1;
  for (var t = 0, n = Object.values(e); t < n.length; t++) {
    var r = n[t];
    if (!(typeof r != "object" || r === null) && !ZC(r)) return !1;
  }
  return !0;
}
function t_(e) {
  return function () {
    return function (t) {
      return function (n) {
        return t(n);
      };
    };
  };
}
function n_(e) {
  return typeof e == "boolean";
}
function r_() {
  return function (t) {
    return JC(t);
  };
}
function JC(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new GC();
  return (
    n && (n_(n) ? r.push(b0) : r.push(b0.withExtraArgument(n.extraArgument))), r
  );
}
var i_ = !0;
function eE(e) {
  var t = r_(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    a = o === void 0 ? t() : o,
    u = n.devTools,
    l = u === void 0 ? !0 : u,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    h;
  if (typeof i == "function") h = i;
  else if (pi(i)) h = rm(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = a;
  typeof v == "function" && (v = v(t));
  var y = QC.apply(void 0, v),
    b = Cu;
  l && (b = ZF(Yt({ trace: !i_ }, typeof l == "object" && l)));
  var m = [y];
  Array.isArray(f) ? (m = Bo([y], f)) : typeof f == "function" && (m = f(m));
  var p = b.apply(void 0, m);
  return nf(h, c, p);
}
function Lt(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return Yt(
        Yt({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function o_(e) {
  return pi(e) && typeof e.type == "string" && Object.keys(e).every(a_);
}
function a_(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function u_(e) {
  return "" + e;
}
function tE(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, a) {
        var u = typeof o == "string" ? o : o.type;
        if (u in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[u] = a), i;
      },
      addMatcher: function (o, a) {
        return n.push({ matcher: o, reducer: a }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function l_(e) {
  return typeof e == "function";
}
function nE(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? tE(t) : [t, n, r],
    o = i[0],
    a = i[1],
    u = i[2],
    l;
  if (l_(e))
    l = function () {
      return fp(e());
    };
  else {
    var s = fp(e);
    l = function () {
      return s;
    };
  }
  function c(d, f) {
    d === void 0 && (d = l());
    var h = Bo(
      [o[f.type]],
      a
        .filter(function (v) {
          var y = v.matcher;
          return y(f);
        })
        .map(function (v) {
          var y = v.reducer;
          return y;
        })
    );
    return (
      h.filter(function (v) {
        return !!v;
      }).length === 0 && (h = [u]),
      h.reduce(function (v, y) {
        if (y)
          if (pn(v)) {
            var b = v,
              m = y(b, f);
            return m === void 0 ? v : m;
          } else {
            if (Kn(v))
              return Qi(v, function (p) {
                return y(p, f);
              });
            var m = y(v, f);
            if (m === void 0) {
              if (v === null) return v;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return m;
          }
        return v;
      }, d)
    );
  }
  return (c.getInitialState = l), c;
}
function s_(e, t) {
  return e + "/" + t;
}
function gr(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : fp(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    a = {},
    u = {};
  i.forEach(function (c) {
    var d = r[c],
      f = s_(t, c),
      h,
      v;
    "reducer" in d ? ((h = d.reducer), (v = d.prepare)) : (h = d),
      (o[c] = h),
      (a[f] = h),
      (u[c] = v ? Lt(f, v) : Lt(f));
  });
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? tE(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      h = c[1],
      v = h === void 0 ? [] : h,
      y = c[2],
      b = y === void 0 ? void 0 : y,
      m = Yt(Yt({}, f), a);
    return nE(n, function (p) {
      for (var g in m) p.addCase(g, m[g]);
      for (var w = 0, x = v; w < x.length; w++) {
        var C = x[w];
        p.addMatcher(C.matcher, C.reducer);
      }
      b && p.addDefaultCase(b);
    });
  }
  var s;
  return {
    name: t,
    reducer: function (c, d) {
      return s || (s = l()), s(c, d);
    },
    actions: u,
    caseReducers: o,
    getInitialState: function () {
      return s || (s = l()), s.getInitialState();
    },
  };
}
function c_() {
  return { ids: [], entities: {} };
}
function f_() {
  function e(t) {
    return t === void 0 && (t = {}), Object.assign(c_(), t);
  }
  return { getInitialState: e };
}
function d_() {
  function e(t) {
    var n = function (s) {
        return s.ids;
      },
      r = function (s) {
        return s.entities;
      },
      i = dr(n, r, function (s, c) {
        return s.map(function (d) {
          return c[d];
        });
      }),
      o = function (s, c) {
        return c;
      },
      a = function (s, c) {
        return s[c];
      },
      u = dr(n, function (s) {
        return s.length;
      });
    if (!t)
      return {
        selectIds: n,
        selectEntities: r,
        selectAll: i,
        selectTotal: u,
        selectById: dr(r, o, a),
      };
    var l = dr(t, r);
    return {
      selectIds: dr(t, n),
      selectEntities: l,
      selectAll: dr(t, i),
      selectTotal: dr(t, u),
      selectById: dr(l, o, a),
    };
  }
  return { getSelectors: e };
}
function h_(e) {
  var t = st(function (n, r) {
    return e(r);
  });
  return function (r) {
    return t(r, void 0);
  };
}
function st(e) {
  return function (n, r) {
    function i(a) {
      return o_(a);
    }
    var o = function (a) {
      i(r) ? e(r.payload, a) : e(r, a);
    };
    return pn(n) ? (o(n), n) : Qi(n, o);
  };
}
function ja(e, t) {
  var n = t(e);
  return n;
}
function Ii(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function rE(e, t, n) {
  e = Ii(e);
  for (var r = [], i = [], o = 0, a = e; o < a.length; o++) {
    var u = a[o],
      l = ja(u, t);
    l in n.entities ? i.push({ id: l, changes: u }) : r.push(u);
  }
  return [r, i];
}
function iE(e) {
  function t(v, y) {
    var b = ja(v, e);
    b in y.entities || (y.ids.push(b), (y.entities[b] = v));
  }
  function n(v, y) {
    v = Ii(v);
    for (var b = 0, m = v; b < m.length; b++) {
      var p = m[b];
      t(p, y);
    }
  }
  function r(v, y) {
    var b = ja(v, e);
    b in y.entities || y.ids.push(b), (y.entities[b] = v);
  }
  function i(v, y) {
    v = Ii(v);
    for (var b = 0, m = v; b < m.length; b++) {
      var p = m[b];
      r(p, y);
    }
  }
  function o(v, y) {
    (v = Ii(v)), (y.ids = []), (y.entities = {}), n(v, y);
  }
  function a(v, y) {
    return u([v], y);
  }
  function u(v, y) {
    var b = !1;
    v.forEach(function (m) {
      m in y.entities && (delete y.entities[m], (b = !0));
    }),
      b &&
        (y.ids = y.ids.filter(function (m) {
          return m in y.entities;
        }));
  }
  function l(v) {
    Object.assign(v, { ids: [], entities: {} });
  }
  function s(v, y, b) {
    var m = b.entities[y.id],
      p = Object.assign({}, m, y.changes),
      g = ja(p, e),
      w = g !== y.id;
    return (
      w && ((v[y.id] = g), delete b.entities[y.id]), (b.entities[g] = p), w
    );
  }
  function c(v, y) {
    return d([v], y);
  }
  function d(v, y) {
    var b = {},
      m = {};
    v.forEach(function (w) {
      w.id in y.entities &&
        (m[w.id] = {
          id: w.id,
          changes: Yt(Yt({}, m[w.id] ? m[w.id].changes : null), w.changes),
        });
    }),
      (v = Object.values(m));
    var p = v.length > 0;
    if (p) {
      var g =
        v.filter(function (w) {
          return s(b, w, y);
        }).length > 0;
      g && (y.ids = Object.keys(y.entities));
    }
  }
  function f(v, y) {
    return h([v], y);
  }
  function h(v, y) {
    var b = rE(v, e, y),
      m = b[0],
      p = b[1];
    d(p, y), n(m, y);
  }
  return {
    removeAll: h_(l),
    addOne: st(t),
    addMany: st(n),
    setOne: st(r),
    setMany: st(i),
    setAll: st(o),
    updateOne: st(c),
    updateMany: st(d),
    upsertOne: st(f),
    upsertMany: st(h),
    removeOne: st(a),
    removeMany: st(u),
  };
}
function p_(e, t) {
  var n = iE(e),
    r = n.removeOne,
    i = n.removeMany,
    o = n.removeAll;
  function a(p, g) {
    return u([p], g);
  }
  function u(p, g) {
    p = Ii(p);
    var w = p.filter(function (x) {
      return !(ja(x, e) in g.entities);
    });
    w.length !== 0 && b(w, g);
  }
  function l(p, g) {
    return s([p], g);
  }
  function s(p, g) {
    (p = Ii(p)), p.length !== 0 && b(p, g);
  }
  function c(p, g) {
    (p = Ii(p)), (g.entities = {}), (g.ids = []), u(p, g);
  }
  function d(p, g) {
    return f([p], g);
  }
  function f(p, g) {
    for (var w = !1, x = 0, C = p; x < C.length; x++) {
      var E = C[x],
        k = g.entities[E.id];
      if (k) {
        (w = !0), Object.assign(k, E.changes);
        var M = e(k);
        E.id !== M && (delete g.entities[E.id], (g.entities[M] = k));
      }
    }
    w && m(g);
  }
  function h(p, g) {
    return v([p], g);
  }
  function v(p, g) {
    var w = rE(p, e, g),
      x = w[0],
      C = w[1];
    f(C, g), u(x, g);
  }
  function y(p, g) {
    if (p.length !== g.length) return !1;
    for (var w = 0; w < p.length && w < g.length; w++)
      if (p[w] !== g[w]) return !1;
    return !0;
  }
  function b(p, g) {
    p.forEach(function (w) {
      g.entities[e(w)] = w;
    }),
      m(g);
  }
  function m(p) {
    var g = Object.values(p.entities);
    g.sort(t);
    var w = g.map(e),
      x = p.ids;
    y(x, w) || (p.ids = w);
  }
  return {
    removeOne: r,
    removeMany: i,
    removeAll: o,
    addOne: st(a),
    updateOne: st(d),
    upsertOne: st(h),
    setOne: st(l),
    setMany: st(s),
    setAll: st(c),
    addMany: st(u),
    updateMany: st(f),
    upsertMany: st(v),
  };
}
function v_(e) {
  e === void 0 && (e = {});
  var t = Yt(
      {
        sortComparer: !1,
        selectId: function (u) {
          return u.id;
        },
      },
      e
    ),
    n = t.selectId,
    r = t.sortComparer,
    i = f_(),
    o = d_(),
    a = r ? p_(n, r) : iE(n);
  return Yt(Yt(Yt({ selectId: n, sortComparer: r }, i), o), a);
}
var m_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  rf = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += m_[(Math.random() * 64) | 0];
    return t;
  },
  g_ = ["name", "message", "stack", "code"],
  pd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  x0 = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  oE = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = g_; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  dp = (function () {
    function e(t, n, r) {
      var i = Lt(t + "/fulfilled", function (s, c, d, f) {
          return {
            payload: s,
            meta: hd(Yt({}, f || {}), {
              arg: d,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        o = Lt(t + "/pending", function (s, c, d) {
          return {
            payload: void 0,
            meta: hd(Yt({}, d || {}), {
              arg: c,
              requestId: s,
              requestStatus: "pending",
            }),
          };
        }),
        a = Lt(t + "/rejected", function (s, c, d, f, h) {
          return {
            payload: f,
            error: ((r && r.serializeError) || oE)(s || "Rejected"),
            meta: hd(Yt({}, h || {}), {
              arg: d,
              requestId: c,
              rejectedWithValue: !!f,
              requestStatus: "rejected",
              aborted: (s == null ? void 0 : s.name) === "AbortError",
              condition: (s == null ? void 0 : s.name) === "ConditionError",
            }),
          };
        }),
        u =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function s() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (s.prototype.abort = function () {}), s;
              })();
      function l(s) {
        return function (c, d, f) {
          var h = r != null && r.idGenerator ? r.idGenerator(s) : rf(),
            v = new u(),
            y;
          function b(p) {
            (y = p), v.abort();
          }
          var m = (function () {
            return Uu(this, null, function () {
              var p, g, w, x, C, E, k;
              return zu(this, function (M) {
                switch (M.label) {
                  case 0:
                    return (
                      M.trys.push([0, 4, , 5]),
                      (x =
                        (p = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : p.call(r, s, { getState: d, extra: f })),
                      y_(x) ? [4, x] : [3, 2]
                    );
                  case 1:
                    (x = M.sent()), (M.label = 2);
                  case 2:
                    if (x === !1 || v.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (C = new Promise(function (T, A) {
                        return v.signal.addEventListener("abort", function () {
                          return A({
                            name: "AbortError",
                            message: y || "Aborted",
                          });
                        });
                      })),
                      c(
                        o(
                          h,
                          s,
                          (g = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : g.call(
                                r,
                                { requestId: h, arg: s },
                                { getState: d, extra: f }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          C,
                          Promise.resolve(
                            n(s, {
                              dispatch: c,
                              getState: d,
                              extra: f,
                              requestId: h,
                              signal: v.signal,
                              abort: b,
                              rejectWithValue: function (T, A) {
                                return new pd(T, A);
                              },
                              fulfillWithValue: function (T, A) {
                                return new x0(T, A);
                              },
                            })
                          ).then(function (T) {
                            if (T instanceof pd) throw T;
                            return T instanceof x0
                              ? i(T.payload, h, s, T.meta)
                              : i(T, h, s);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (w = M.sent()), [3, 5];
                  case 4:
                    return (
                      (E = M.sent()),
                      (w =
                        E instanceof pd
                          ? a(null, h, s, E.payload, E.meta)
                          : a(E, h, s)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (k =
                        r &&
                        !r.dispatchConditionRejection &&
                        a.match(w) &&
                        w.meta.condition),
                      k || c(w),
                      [2, w]
                    );
                }
              });
            });
          })();
          return Object.assign(m, {
            abort: b,
            requestId: h,
            arg: s,
            unwrap: function () {
              return m.then(aE);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: o,
        rejected: a,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function aE(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function y_(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var w_ = function (e) {
    return e && typeof e.match == "function";
  },
  uE = function (e, t) {
    return w_(e) ? e.match(t) : e(t);
  };
function Wi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return uE(r, n);
    });
  };
}
function ko() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return uE(r, n);
    });
  };
}
function of(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Hu(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function af() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return of(n, ["pending"]);
      }
    : Hu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          i = Wi.apply(void 0, r);
        return i(n);
      }
    : af()(e[0]);
}
function Vo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return of(n, ["rejected"]);
      }
    : Hu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          i = Wi.apply(void 0, r);
        return i(n);
      }
    : Vo()(e[0]);
}
function qu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var i = ko(Vo.apply(void 0, e), n);
        return i(r);
      }
    : Hu(e)
    ? function (r) {
        var i = ko(Vo.apply(void 0, e), n);
        return i(r);
      }
    : qu()(e[0]);
}
function vi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return of(n, ["fulfilled"]);
      }
    : Hu(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          i = Wi.apply(void 0, r);
        return i(n);
      }
    : vi()(e[0]);
}
function Us() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return of(n, ["pending", "fulfilled", "rejected"]);
      }
    : Hu(e)
    ? function (n) {
        for (var r = [], i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          r.push(a.pending, a.rejected, a.fulfilled);
        }
        var u = Wi.apply(void 0, r);
        return u(n);
      }
    : Us()(e[0]);
}
var im = function (e, t) {
    if (typeof e != "function") throw new TypeError(t + " is not a function");
  },
  hp = function () {},
  lE = function (e, t) {
    return t === void 0 && (t = hp), e.catch(t), e;
  },
  sE = function (e, t) {
    return (
      e.addEventListener("abort", t, { once: !0 }),
      function () {
        return e.removeEventListener("abort", t);
      }
    );
  },
  Mo = function (e, t) {
    var n = e.signal;
    n.aborted ||
      ("reason" in n ||
        Object.defineProperty(n, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  S_ = "task",
  cE = "listener",
  fE = "completed",
  om = "cancelled",
  b_ = "task-" + om,
  C_ = "task-" + fE,
  dE = cE + "-" + om,
  E_ = cE + "-" + fE,
  Bu = (function () {
    function e(t) {
      (this.code = t),
        (this.name = "TaskAbortError"),
        (this.message = S_ + " " + om + " (reason: " + t + ")");
    }
    return e;
  })(),
  To = function (e) {
    if (e.aborted) throw new Bu(e.reason);
  };
function hE(e, t) {
  var n = hp;
  return new Promise(function (r, i) {
    var o = function () {
      return i(new Bu(e.reason));
    };
    if (e.aborted) {
      o();
      return;
    }
    (n = sE(e, o)),
      t
        .finally(function () {
          return n();
        })
        .then(r, i);
  }).finally(function () {
    n = hp;
  });
}
var x_ = function (e, t) {
    return Uu(void 0, null, function () {
      var n, r;
      return zu(this, function (i) {
        switch (i.label) {
          case 0:
            return i.trys.push([0, 3, 4, 5]), [4, Promise.resolve()];
          case 1:
            return i.sent(), [4, e()];
          case 2:
            return (n = i.sent()), [2, { status: "ok", value: n }];
          case 3:
            return (
              (r = i.sent()),
              [
                2,
                {
                  status: r instanceof Bu ? "cancelled" : "rejected",
                  error: r,
                },
              ]
            );
          case 4:
            return t == null || t(), [7];
          case 5:
            return [2];
        }
      });
    });
  },
  Hs = function (e) {
    return function (t) {
      return lE(
        hE(e, t).then(function (n) {
          return To(e), n;
        })
      );
    };
  },
  pE = function (e) {
    var t = Hs(e);
    return function (n) {
      return t(
        new Promise(function (r) {
          return setTimeout(r, n);
        })
      );
    };
  },
  O_ = Object.assign,
  O0 = {},
  Vu = "listenerMiddleware",
  P_ = function (e) {
    var t = function (n) {
      return sE(e, function () {
        return Mo(n, e.reason);
      });
    };
    return function (n) {
      im(n, "taskExecutor");
      var r = new AbortController();
      t(r);
      var i = x_(
        function () {
          return Uu(void 0, null, function () {
            var o;
            return zu(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    To(e),
                    To(r.signal),
                    [
                      4,
                      n({
                        pause: Hs(r.signal),
                        delay: pE(r.signal),
                        signal: r.signal,
                      }),
                    ]
                  );
                case 1:
                  return (o = a.sent()), To(r.signal), [2, o];
              }
            });
          });
        },
        function () {
          return Mo(r, C_);
        }
      );
      return {
        result: Hs(e)(i),
        cancel: function () {
          Mo(r, b_);
        },
      };
    };
  },
  R_ = function (e, t) {
    var n = function (r, i) {
      return Uu(void 0, null, function () {
        var o, a, u, l;
        return zu(this, function (s) {
          switch (s.label) {
            case 0:
              To(t),
                (o = function () {}),
                (a = new Promise(function (c, d) {
                  var f = e({
                    predicate: r,
                    effect: function (h, v) {
                      v.unsubscribe(),
                        c([h, v.getState(), v.getOriginalState()]);
                    },
                  });
                  o = function () {
                    f(), d();
                  };
                })),
                (u = [a]),
                i != null &&
                  u.push(
                    new Promise(function (c) {
                      return setTimeout(c, i, null);
                    })
                  ),
                (s.label = 1);
            case 1:
              return s.trys.push([1, , 3, 4]), [4, hE(t, Promise.race(u))];
            case 2:
              return (l = s.sent()), To(t), [2, l];
            case 3:
              return o(), [7];
            case 4:
              return [2];
          }
        });
      });
    };
    return function (r, i) {
      return lE(n(r, i));
    };
  },
  vE = function (e) {
    var t = e.type,
      n = e.actionCreator,
      r = e.matcher,
      i = e.predicate,
      o = e.effect;
    if (t) i = Lt(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i)
      throw new Error(
        "Creating or removing a listener requires one of the known fields for matching an action"
      );
    return im(o, "options.listener"), { predicate: i, type: t, effect: o };
  },
  k_ = function (e) {
    var t = vE(e),
      n = t.type,
      r = t.predicate,
      i = t.effect,
      o = rf(),
      a = {
        id: o,
        effect: i,
        type: n,
        predicate: r,
        pending: new Set(),
        unsubscribe: function () {
          throw new Error("Unsubscribe not initialized");
        },
      };
    return a;
  },
  pp = function (e) {
    e.pending.forEach(function (t) {
      Mo(t, dE);
    });
  },
  M_ = function (e) {
    return function () {
      e.forEach(pp), e.clear();
    };
  },
  P0 = function (e, t, n) {
    try {
      e(t, n);
    } catch (r) {
      setTimeout(function () {
        throw r;
      }, 0);
    }
  },
  mE = Lt(Vu + "/add"),
  gE = Lt(Vu + "/removeAll"),
  yE = Lt(Vu + "/remove"),
  T_ = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    console.error.apply(console, Bo([Vu + "/error"], e));
  };
function $_(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = new Map(),
    r = e.extra,
    i = e.onError,
    o = i === void 0 ? T_ : i;
  im(o, "onError");
  var a = function (h) {
      return (
        (h.unsubscribe = function () {
          return n.delete(h.id);
        }),
        n.set(h.id, h),
        function (v) {
          h.unsubscribe(), v != null && v.cancelActive && pp(h);
        }
      );
    },
    u = function (h) {
      for (var v = 0, y = Array.from(n.values()); v < y.length; v++) {
        var b = y[v];
        if (h(b)) return b;
      }
    },
    l = function (h) {
      var v = u(function (y) {
        return y.effect === h.effect;
      });
      return v || (v = k_(h)), a(v);
    },
    s = function (h) {
      var v = vE(h),
        y = v.type,
        b = v.effect,
        m = v.predicate,
        p = u(function (g) {
          var w = typeof y == "string" ? g.type === y : g.predicate === m;
          return w && g.effect === b;
        });
      return p && (p.unsubscribe(), h.cancelActive && pp(p)), !!p;
    },
    c = function (h, v, y, b) {
      return Uu(t, null, function () {
        var m, p, g;
        return zu(this, function (w) {
          switch (w.label) {
            case 0:
              (m = new AbortController()), (p = R_(l, m.signal)), (w.label = 1);
            case 1:
              return (
                w.trys.push([1, 3, 4, 5]),
                h.pending.add(m),
                [
                  4,
                  Promise.resolve(
                    h.effect(
                      v,
                      O_({}, y, {
                        getOriginalState: b,
                        condition: function (x, C) {
                          return p(x, C).then(Boolean);
                        },
                        take: p,
                        delay: pE(m.signal),
                        pause: Hs(m.signal),
                        extra: r,
                        signal: m.signal,
                        fork: P_(m.signal),
                        unsubscribe: h.unsubscribe,
                        subscribe: function () {
                          n.set(h.id, h);
                        },
                        cancelActiveListeners: function () {
                          h.pending.forEach(function (x, C, E) {
                            x !== m && (Mo(x, dE), E.delete(x));
                          });
                        },
                      })
                    )
                  ),
                ]
              );
            case 2:
              return w.sent(), [3, 5];
            case 3:
              return (
                (g = w.sent()),
                g instanceof Bu || P0(o, g, { raisedBy: "effect" }),
                [3, 5]
              );
            case 4:
              return Mo(m, E_), h.pending.delete(m), [7];
            case 5:
              return [2];
          }
        });
      });
    },
    d = M_(n),
    f = function (h) {
      return function (v) {
        return function (y) {
          if (mE.match(y)) return l(y.payload);
          if (gE.match(y)) {
            d();
            return;
          }
          if (yE.match(y)) return s(y.payload);
          var b = h.getState(),
            m = function () {
              if (b === O0)
                throw new Error(
                  Vu + ": getOriginalState can only be called synchronously"
                );
              return b;
            },
            p;
          try {
            if (((p = v(y)), n.size > 0))
              for (
                var g = h.getState(), w = Array.from(n.values()), x = 0, C = w;
                x < C.length;
                x++
              ) {
                var E = C[x],
                  k = !1;
                try {
                  k = E.predicate(y, g, b);
                } catch (M) {
                  (k = !1), P0(o, M, { raisedBy: "predicate" });
                }
                k && c(E, y, h, m);
              }
          } finally {
            b = O0;
          }
          return p;
        };
      };
    };
  return {
    middleware: f,
    startListening: l,
    stopListening: s,
    clearListeners: d,
  };
}
var Ti = "RTK_autoBatch",
  vp = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[Ti] = !0), t) };
    };
  },
  R0,
  A_ =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (R0 || (R0 = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  wE = function (e) {
    return function (t) {
      setTimeout(t, e);
    };
  },
  F_ =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : wE(10),
  __ = function (e) {
    return (
      e === void 0 && (e = { type: "raf" }),
      function (t) {
        return function () {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var i = t.apply(void 0, n),
            o = !0,
            a = !1,
            u = !1,
            l = new Set(),
            s =
              e.type === "tick"
                ? A_
                : e.type === "raf"
                ? F_
                : e.type === "callback"
                ? e.queueNotification
                : wE(e.timeout),
            c = function () {
              (u = !1),
                a &&
                  ((a = !1),
                  l.forEach(function (d) {
                    return d();
                  }));
            };
          return Object.assign({}, i, {
            subscribe: function (d) {
              var f = function () {
                  return o && d();
                },
                h = i.subscribe(f);
              return (
                l.add(d),
                function () {
                  h(), l.delete(d);
                }
              );
            },
            dispatch: function (d) {
              var f;
              try {
                return (
                  (o = !((f = d == null ? void 0 : d.meta) != null && f[Ti])),
                  (a = !o),
                  a && (u || ((u = !0), s(c))),
                  i.dispatch(d)
                );
              } finally {
                o = !0;
              }
            },
          });
        };
      }
    );
  };
RF();
const N_ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      MiddlewareArray: GC,
      SHOULD_AUTOBATCH: Ti,
      TaskAbortError: Bu,
      __DO_NOT_USE__ActionTypes: bu,
      addListener: mE,
      applyMiddleware: QC,
      autoBatchEnhancer: __,
      bindActionCreators: jF,
      clearAllListeners: gE,
      combineReducers: rm,
      compose: Cu,
      configureStore: eE,
      createAction: Lt,
      createAsyncThunk: dp,
      createDraftSafeSelector: dr,
      createEntityAdapter: v_,
      createImmutableStateInvariantMiddleware: e_,
      createListenerMiddleware: $_,
      createNextState: Qi,
      createReducer: nE,
      createSelector: zs,
      createSerializableStateInvariantMiddleware: t_,
      createSlice: gr,
      createStore: nf,
      current: em,
      findNonSerializableValue: XC,
      freeze: tf,
      getDefaultMiddleware: JC,
      getType: u_,
      isAllOf: ko,
      isAnyOf: Wi,
      isAsyncThunkAction: Us,
      isDraft: pn,
      isFulfilled: vi,
      isImmutableDefault: JF,
      isPending: af,
      isPlain: YC,
      isPlainObject: pi,
      isRejected: Vo,
      isRejectedWithValue: qu,
      legacy_createStore: LF,
      miniSerializeError: oE,
      nanoid: rf,
      original: xF,
      prepareAutoBatched: vp,
      removeListener: yE,
      unwrapResult: aE,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Qo =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        a;
      return (
        (a = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function u(s) {
        return function (c) {
          return l([s, c]);
        };
      }
      function l(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  qs =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  I_ = Object.defineProperty,
  L_ = Object.defineProperties,
  D_ = Object.getOwnPropertyDescriptors,
  Bs = Object.getOwnPropertySymbols,
  SE = Object.prototype.hasOwnProperty,
  bE = Object.prototype.propertyIsEnumerable,
  k0 = function (e, t, n) {
    return t in e
      ? I_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  nt = function (e, t) {
    for (var n in t || (t = {})) SE.call(t, n) && k0(e, n, t[n]);
    if (Bs)
      for (var r = 0, i = Bs(t); r < i.length; r++) {
        var n = i[r];
        bE.call(t, n) && k0(e, n, t[n]);
      }
    return e;
  },
  tr = function (e, t) {
    return L_(e, D_(t));
  },
  M0 = function (e, t) {
    var n = {};
    for (var r in e) SE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Bs)
      for (var i = 0, o = Bs(e); i < o.length; i++) {
        var r = o[i];
        t.indexOf(r) < 0 && bE.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  Wo = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (l) {
          try {
            u(n.next(l));
          } catch (s) {
            i(s);
          }
        },
        a = function (l) {
          try {
            u(n.throw(l));
          } catch (s) {
            i(s);
          }
        },
        u = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(o, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  Je;
(function (e) {
  (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected");
})(Je || (Je = {}));
function j_(e) {
  return {
    status: e,
    isUninitialized: e === Je.uninitialized,
    isLoading: e === Je.pending,
    isSuccess: e === Je.fulfilled,
    isError: e === Je.rejected,
  };
}
function z_(e) {
  return new RegExp("(^|:)//").test(e);
}
var U_ = function (e) {
    return e.replace(/\/$/, "");
  },
  H_ = function (e) {
    return e.replace(/^\//, "");
  };
function q_(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (z_(t)) return t;
  var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = U_(e)), (t = H_(t)), "" + e + n + t;
}
var T0 = function (e) {
  return [].concat.apply([], e);
};
function B_() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function V_() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var $0 = pi;
function am(e, t) {
  if (e === t || !(($0(e) && $0(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      i = n.length === r.length,
      o = Array.isArray(t) ? [] : {},
      a = 0,
      u = n;
    a < u.length;
    a++
  ) {
    var l = u[a];
    (o[l] = am(e[l], t[l])), i && (i = e[l] === o[l]);
  }
  return i ? e : o;
}
var A0 = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  Q_ = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  W_ = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  };
function F0(e) {
  if (!pi(e)) return e;
  for (var t = nt({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = r[n],
      o = i[0],
      a = i[1];
    a === void 0 && delete t[o];
  }
  return t;
}
function K_(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    i = n.prepareHeaders,
    o =
      i === void 0
        ? function (p) {
            return p;
          }
        : i,
    a = n.fetchFn,
    u = a === void 0 ? A0 : a,
    l = n.paramsSerializer,
    s = n.isJsonContentType,
    c = s === void 0 ? W_ : s,
    d = n.jsonContentType,
    f = d === void 0 ? "application/json" : d,
    h = n.jsonReplacer,
    v = n.timeout,
    y = n.validateStatus,
    b = M0(n, [
      "baseUrl",
      "prepareHeaders",
      "fetchFn",
      "paramsSerializer",
      "isJsonContentType",
      "jsonContentType",
      "jsonReplacer",
      "timeout",
      "validateStatus",
    ]);
  return (
    typeof fetch > "u" &&
      u === A0 &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
      ),
    function (p, g) {
      return Wo(t, null, function () {
        var w,
          x,
          C,
          E,
          k,
          M,
          T,
          A,
          P,
          O,
          R,
          $,
          F,
          N,
          _,
          I,
          L,
          H,
          q,
          V,
          X,
          re,
          ie,
          oe,
          Ae,
          Ee,
          ae,
          xe,
          z,
          Q,
          te,
          Oe,
          me,
          se,
          fe,
          Fe;
        return Qo(this, function (Ve) {
          switch (Ve.label) {
            case 0:
              return (
                (w = g.signal),
                (x = g.getState),
                (C = g.extra),
                (E = g.endpoint),
                (k = g.forced),
                (M = g.type),
                (A = typeof p == "string" ? { url: p } : p),
                (P = A.url),
                (O = A.headers),
                (R = O === void 0 ? new Headers(b.headers) : O),
                ($ = A.params),
                (F = $ === void 0 ? void 0 : $),
                (N = A.responseHandler),
                (_ = N === void 0 ? "json" : N),
                (I = A.validateStatus),
                (L = I === void 0 ? y ?? Q_ : I),
                (H = A.timeout),
                (q = H === void 0 ? v : H),
                (V = M0(A, [
                  "url",
                  "headers",
                  "params",
                  "responseHandler",
                  "validateStatus",
                  "timeout",
                ])),
                (X = nt(tr(nt({}, b), { signal: w }), V)),
                (R = new Headers(F0(R))),
                (re = X),
                [
                  4,
                  o(R, {
                    getState: x,
                    extra: C,
                    endpoint: E,
                    forced: k,
                    type: M,
                  }),
                ]
              );
            case 1:
              (re.headers = Ve.sent() || R),
                (ie = function (Pe) {
                  return (
                    typeof Pe == "object" &&
                    (pi(Pe) ||
                      Array.isArray(Pe) ||
                      typeof Pe.toJSON == "function")
                  );
                }),
                !X.headers.has("content-type") &&
                  ie(X.body) &&
                  X.headers.set("content-type", f),
                ie(X.body) &&
                  c(X.headers) &&
                  (X.body = JSON.stringify(X.body, h)),
                F &&
                  ((oe = ~P.indexOf("?") ? "&" : "?"),
                  (Ae = l ? l(F) : new URLSearchParams(F0(F))),
                  (P += oe + Ae)),
                (P = q_(r, P)),
                (Ee = new Request(P, X)),
                (ae = Ee.clone()),
                (T = { request: ae }),
                (z = !1),
                (Q =
                  q &&
                  setTimeout(function () {
                    (z = !0), g.abort();
                  }, q)),
                (Ve.label = 2);
            case 2:
              return Ve.trys.push([2, 4, 5, 6]), [4, u(Ee)];
            case 3:
              return (xe = Ve.sent()), [3, 6];
            case 4:
              return (
                (te = Ve.sent()),
                [
                  2,
                  {
                    error: {
                      status: z ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                      error: String(te),
                    },
                    meta: T,
                  },
                ]
              );
            case 5:
              return Q && clearTimeout(Q), [7];
            case 6:
              (Oe = xe.clone()), (T.response = Oe), (se = ""), (Ve.label = 7);
            case 7:
              return (
                Ve.trys.push([7, 9, , 10]),
                [
                  4,
                  Promise.all([
                    m(xe, _).then(
                      function (Pe) {
                        return (me = Pe);
                      },
                      function (Pe) {
                        return (fe = Pe);
                      }
                    ),
                    Oe.text().then(
                      function (Pe) {
                        return (se = Pe);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 8:
              if ((Ve.sent(), fe)) throw fe;
              return [3, 10];
            case 9:
              return (
                (Fe = Ve.sent()),
                [
                  2,
                  {
                    error: {
                      status: "PARSING_ERROR",
                      originalStatus: xe.status,
                      data: se,
                      error: String(Fe),
                    },
                    meta: T,
                  },
                ]
              );
            case 10:
              return [
                2,
                L(xe, me)
                  ? { data: me, meta: T }
                  : { error: { status: xe.status, data: me }, meta: T },
              ];
          }
        });
      });
    }
  );
  function m(p, g) {
    return Wo(this, null, function () {
      var w;
      return Qo(this, function (x) {
        switch (x.label) {
          case 0:
            return typeof g == "function"
              ? [2, g(p)]
              : (g === "content-type" && (g = c(p.headers) ? "json" : "text"),
                g !== "json" ? [3, 2] : [4, p.text()]);
          case 1:
            return (w = x.sent()), [2, w.length ? JSON.parse(w) : null];
          case 2:
            return [2, p.text()];
        }
      });
    });
  }
}
var $o = (function () {
  function e(t, n) {
    n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
  }
  return e;
})();
function G_(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 5),
    Wo(this, null, function () {
      var n, r;
      return Qo(this, function (i) {
        switch (i.label) {
          case 0:
            return (
              (n = Math.min(e, t)),
              (r = ~~((Math.random() + 0.4) * (300 << n))),
              [
                4,
                new Promise(function (o) {
                  return setTimeout(function (a) {
                    return o(a);
                  }, r);
                }),
              ]
            );
          case 1:
            return i.sent(), [2];
        }
      });
    })
  );
}
function Y_(e) {
  throw Object.assign(new $o({ error: e }), { throwImmediately: !0 });
}
var _0 = {},
  X_ = function (e, t) {
    return function (n, r, i) {
      return Wo(void 0, null, function () {
        var o, a, u, l, s, c, d;
        return Qo(this, function (f) {
          switch (f.label) {
            case 0:
              (o = [5, (t || _0).maxRetries, (i || _0).maxRetries].filter(
                function (h) {
                  return h !== void 0;
                }
              )),
                (a = o.slice(-1)[0]),
                (u = function (h, v, y) {
                  var b = y.attempt;
                  return b <= a;
                }),
                (l = nt(
                  nt({ maxRetries: a, backoff: G_, retryCondition: u }, t),
                  i
                )),
                (s = 0),
                (f.label = 1);
            case 1:
              f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 6]), [4, e(n, r, i)];
            case 3:
              if (((c = f.sent()), c.error)) throw new $o(c);
              return [2, c];
            case 4:
              if (((d = f.sent()), s++, d.throwImmediately)) {
                if (d instanceof $o) return [2, d.value];
                throw d;
              }
              return d instanceof $o &&
                !l.retryCondition(d.value.error, n, {
                  attempt: s,
                  baseQueryApi: r,
                  extraOptions: i,
                })
                ? [2, d.value]
                : [4, l.backoff(s, l.maxRetries)];
            case 5:
              return f.sent(), [3, 6];
            case 6:
              return [3, 1];
            case 7:
              return [2];
          }
        });
      });
    };
  },
  Z_ = Object.assign(X_, { fail: Y_ }),
  Eu = Lt("__rtkq/focused"),
  Vs = Lt("__rtkq/unfocused"),
  xu = Lt("__rtkq/online"),
  Qs = Lt("__rtkq/offline"),
  vd = !1;
function CE(e, t) {
  function n() {
    var r = function () {
        return e(Eu());
      },
      i = function () {
        return e(Vs());
      },
      o = function () {
        return e(xu());
      },
      a = function () {
        return e(Qs());
      },
      u = function () {
        window.document.visibilityState === "visible" ? r() : i();
      };
    vd ||
      (typeof window < "u" &&
        window.addEventListener &&
        (window.addEventListener("visibilitychange", u, !1),
        window.addEventListener("focus", r, !1),
        window.addEventListener("online", o, !1),
        window.addEventListener("offline", a, !1),
        (vd = !0)));
    var l = function () {
      window.removeEventListener("focus", r),
        window.removeEventListener("visibilitychange", u),
        window.removeEventListener("online", o),
        window.removeEventListener("offline", a),
        (vd = !1);
    };
    return l;
  }
  return t
    ? t(e, { onFocus: Eu, onFocusLost: Vs, onOffline: Qs, onOnline: xu })
    : n();
}
var ur;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(ur || (ur = {}));
function EE(e) {
  return e.type === ur.query;
}
function J_(e) {
  return e.type === ur.mutation;
}
function xE(e, t, n, r, i, o) {
  return eN(e)
    ? e(t, n, r, i).map(mp).map(o)
    : Array.isArray(e)
    ? e.map(mp).map(o)
    : [];
}
function eN(e) {
  return typeof e == "function";
}
function mp(e) {
  return typeof e == "string" ? { type: e } : e;
}
function md(e) {
  return e != null;
}
var Ou = Symbol("forceQueryFn"),
  gp = function (e) {
    return typeof e[Ou] == "function";
  };
function tN(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.api,
    o = e.context,
    a = new Map(),
    u = new Map(),
    l = i.internalActions,
    s = l.unsubscribeQueryResult,
    c = l.removeMutationResult,
    d = l.updateSubscriptionOptions;
  return {
    buildInitiateQuery: p,
    buildInitiateMutation: g,
    getRunningQueryThunk: v,
    getRunningMutationThunk: y,
    getRunningQueriesThunk: b,
    getRunningMutationsThunk: m,
    getRunningOperationPromises: h,
    removalWarning: f,
  };
  function f() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function h() {
    typeof process < "u";
    var w = function (x) {
      return Array.from(x.values()).flatMap(function (C) {
        return C ? Object.values(C) : [];
      });
    };
    return qs(qs([], w(a)), w(u)).filter(md);
  }
  function v(w, x) {
    return function (C) {
      var E,
        k = o.endpointDefinitions[w],
        M = t({ queryArgs: x, endpointDefinition: k, endpointName: w });
      return (E = a.get(C)) == null ? void 0 : E[M];
    };
  }
  function y(w, x) {
    return function (C) {
      var E;
      return (E = u.get(C)) == null ? void 0 : E[x];
    };
  }
  function b() {
    return function (w) {
      return Object.values(a.get(w) || {}).filter(md);
    };
  }
  function m() {
    return function (w) {
      return Object.values(u.get(w) || {}).filter(md);
    };
  }
  function p(w, x) {
    var C = function (E, k) {
      var M = k === void 0 ? {} : k,
        T = M.subscribe,
        A = T === void 0 ? !0 : T,
        P = M.forceRefetch,
        O = M.subscriptionOptions,
        R = Ou,
        $ = M[R];
      return function (F, N) {
        var _,
          I,
          L = t({ queryArgs: E, endpointDefinition: x, endpointName: w }),
          H = n(
            ((_ = {
              type: "query",
              subscribe: A,
              forceRefetch: P,
              subscriptionOptions: O,
              endpointName: w,
              originalArgs: E,
              queryCacheKey: L,
            }),
            (_[Ou] = $),
            _)
          ),
          q = i.endpoints[w].select(E),
          V = F(H),
          X = q(N()),
          re = V.requestId,
          ie = V.abort,
          oe = X.requestId !== re,
          Ae = (I = a.get(F)) == null ? void 0 : I[L],
          Ee = function () {
            return q(N());
          },
          ae = Object.assign(
            $
              ? V.then(Ee)
              : oe && !Ae
              ? Promise.resolve(X)
              : Promise.all([Ae, V]).then(Ee),
            {
              arg: E,
              requestId: re,
              subscriptionOptions: O,
              queryCacheKey: L,
              abort: ie,
              unwrap: function () {
                return Wo(this, null, function () {
                  var z;
                  return Qo(this, function (Q) {
                    switch (Q.label) {
                      case 0:
                        return [4, ae];
                      case 1:
                        if (((z = Q.sent()), z.isError)) throw z.error;
                        return [2, z.data];
                    }
                  });
                });
              },
              refetch: function () {
                return F(C(E, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                A && F(s({ queryCacheKey: L, requestId: re }));
              },
              updateSubscriptionOptions: function (z) {
                (ae.subscriptionOptions = z),
                  F(
                    d({
                      endpointName: w,
                      requestId: re,
                      queryCacheKey: L,
                      options: z,
                    })
                  );
              },
            }
          );
        if (!Ae && !oe && !$) {
          var xe = a.get(F) || {};
          (xe[L] = ae),
            a.set(F, xe),
            ae.then(function () {
              delete xe[L], Object.keys(xe).length || a.delete(F);
            });
        }
        return ae;
      };
    };
    return C;
  }
  function g(w) {
    return function (x, C) {
      var E = C === void 0 ? {} : C,
        k = E.track,
        M = k === void 0 ? !0 : k,
        T = E.fixedCacheKey;
      return function (A, P) {
        var O = r({
            type: "mutation",
            endpointName: w,
            originalArgs: x,
            track: M,
            fixedCacheKey: T,
          }),
          R = A(O),
          $ = R.requestId,
          F = R.abort,
          N = R.unwrap,
          _ = R.unwrap()
            .then(function (q) {
              return { data: q };
            })
            .catch(function (q) {
              return { error: q };
            }),
          I = function () {
            A(c({ requestId: $, fixedCacheKey: T }));
          },
          L = Object.assign(_, {
            arg: R.arg,
            requestId: $,
            abort: F,
            unwrap: N,
            unsubscribe: I,
            reset: I,
          }),
          H = u.get(A) || {};
        return (
          u.set(A, H),
          (H[$] = L),
          L.then(function () {
            delete H[$], Object.keys(H).length || u.delete(A);
          }),
          T &&
            ((H[T] = L),
            L.then(function () {
              H[T] === L && (delete H[T], Object.keys(H).length || u.delete(A));
            })),
          L
        );
      };
    };
  }
}
function N0(e) {
  return e;
}
function nN(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    i = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    a = e.api,
    u = function (g, w, x) {
      return function (C) {
        var E = i[g];
        C(
          a.internalActions.queryResultPatched({
            queryCacheKey: o({
              queryArgs: w,
              endpointDefinition: E,
              endpointName: g,
            }),
            patches: x,
          })
        );
      };
    },
    l = function (g, w, x) {
      return function (C, E) {
        var k,
          M,
          T = a.endpoints[g].select(w)(E()),
          A = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return C(a.util.patchQueryData(g, w, A.inversePatches));
            },
          };
        if (T.status === Je.uninitialized) return A;
        if ("data" in T)
          if (Kn(T.data)) {
            var P = VC(T.data, x),
              O = P[1],
              R = P[2];
            (k = A.patches).push.apply(k, O),
              (M = A.inversePatches).push.apply(M, R);
          } else {
            var $ = x(T.data);
            A.patches.push({ op: "replace", path: [], value: $ }),
              A.inversePatches.push({ op: "replace", path: [], value: T.data });
          }
        return C(a.util.patchQueryData(g, w, A.patches)), A;
      };
    },
    s = function (g, w, x) {
      return function (C) {
        var E;
        return C(
          a.endpoints[g].initiate(
            w,
            ((E = { subscribe: !1, forceRefetch: !0 }),
            (E[Ou] = function () {
              return { data: x };
            }),
            E)
          )
        );
      };
    },
    c = function (g, w) {
      return Wo(t, [g, w], function (x, C) {
        var E,
          k,
          M,
          T,
          A,
          P,
          O,
          R,
          $,
          F,
          N,
          _,
          I,
          L,
          H,
          q,
          V,
          X,
          re = C.signal,
          ie = C.abort,
          oe = C.rejectWithValue,
          Ae = C.fulfillWithValue,
          Ee = C.dispatch,
          ae = C.getState,
          xe = C.extra;
        return Qo(this, function (z) {
          switch (z.label) {
            case 0:
              (E = i[x.endpointName]), (z.label = 1);
            case 1:
              return (
                z.trys.push([1, 8, , 13]),
                (k = N0),
                (M = void 0),
                (T = {
                  signal: re,
                  abort: ie,
                  dispatch: Ee,
                  getState: ae,
                  extra: xe,
                  endpoint: x.endpointName,
                  type: x.type,
                  forced: x.type === "query" ? d(x, ae()) : void 0,
                }),
                (A = x.type === "query" ? x[Ou] : void 0),
                A ? ((M = A()), [3, 6]) : [3, 2]
              );
            case 2:
              return E.query
                ? [4, r(E.query(x.originalArgs), T, E.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (M = z.sent()),
                E.transformResponse && (k = E.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                E.queryFn(x.originalArgs, T, E.extraOptions, function (Q) {
                  return r(Q, T, E.extraOptions);
                }),
              ];
            case 5:
              (M = z.sent()), (z.label = 6);
            case 6:
              if ((typeof process < "u", M.error))
                throw new $o(M.error, M.meta);
              return (N = Ae), [4, k(M.data, M.meta, x.originalArgs)];
            case 7:
              return [
                2,
                N.apply(void 0, [
                  z.sent(),
                  ((V = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: M.meta,
                  }),
                  (V[Ti] = !0),
                  V),
                ]),
              ];
            case 8:
              if (((_ = z.sent()), (I = _), !(I instanceof $o))) return [3, 12];
              (L = N0),
                E.query &&
                  E.transformErrorResponse &&
                  (L = E.transformErrorResponse),
                (z.label = 9);
            case 9:
              return (
                z.trys.push([9, 11, , 12]),
                (H = oe),
                [4, L(I.value, I.meta, x.originalArgs)]
              );
            case 10:
              return [
                2,
                H.apply(void 0, [
                  z.sent(),
                  ((X = { baseQueryMeta: I.meta }), (X[Ti] = !0), X),
                ]),
              ];
            case 11:
              return (q = z.sent()), (I = q), [3, 12];
            case 12:
              throw (typeof process < "u", console.error(I), I);
            case 13:
              return [2];
          }
        });
      });
    };
  function d(g, w) {
    var x,
      C,
      E,
      k,
      M =
        (C = (x = w[n]) == null ? void 0 : x.queries) == null
          ? void 0
          : C[g.queryCacheKey],
      T = (E = w[n]) == null ? void 0 : E.config.refetchOnMountOrArgChange,
      A = M == null ? void 0 : M.fulfilledTimeStamp,
      P = (k = g.forceRefetch) != null ? k : g.subscribe && T;
    return P ? P === !0 || (Number(new Date()) - Number(A)) / 1e3 >= P : !1;
  }
  var f = dp(n + "/executeQuery", c, {
      getPendingMeta: function () {
        var g;
        return (g = { startedTimeStamp: Date.now() }), (g[Ti] = !0), g;
      },
      condition: function (g, w) {
        var x = w.getState,
          C,
          E,
          k,
          M = x(),
          T =
            (E = (C = M[n]) == null ? void 0 : C.queries) == null
              ? void 0
              : E[g.queryCacheKey],
          A = T == null ? void 0 : T.fulfilledTimeStamp,
          P = g.originalArgs,
          O = T == null ? void 0 : T.originalArgs,
          R = i[g.endpointName];
        return gp(g)
          ? !0
          : (T == null ? void 0 : T.status) === "pending"
          ? !1
          : d(g, M) ||
            (EE(R) &&
              (k = R == null ? void 0 : R.forceRefetch) != null &&
              k.call(R, {
                currentArg: P,
                previousArg: O,
                endpointState: T,
                state: M,
              }))
          ? !0
          : !A;
      },
      dispatchConditionRejection: !0,
    }),
    h = dp(n + "/executeMutation", c, {
      getPendingMeta: function () {
        var g;
        return (g = { startedTimeStamp: Date.now() }), (g[Ti] = !0), g;
      },
    }),
    v = function (g) {
      return "force" in g;
    },
    y = function (g) {
      return "ifOlderThan" in g;
    },
    b = function (g, w, x) {
      return function (C, E) {
        var k = v(x) && x.force,
          M = y(x) && x.ifOlderThan,
          T = function (R) {
            return (
              R === void 0 && (R = !0),
              a.endpoints[g].initiate(w, { forceRefetch: R })
            );
          },
          A = a.endpoints[g].select(w)(E());
        if (k) C(T());
        else if (M) {
          var P = A == null ? void 0 : A.fulfilledTimeStamp;
          if (!P) {
            C(T());
            return;
          }
          var O = (Number(new Date()) - Number(new Date(P))) / 1e3 >= M;
          O && C(T());
        } else C(T(!1));
      };
    };
  function m(g) {
    return function (w) {
      var x, C;
      return (
        ((C = (x = w == null ? void 0 : w.meta) == null ? void 0 : x.arg) ==
        null
          ? void 0
          : C.endpointName) === g
      );
    };
  }
  function p(g, w) {
    return {
      matchPending: ko(af(g), m(w)),
      matchFulfilled: ko(vi(g), m(w)),
      matchRejected: ko(Vo(g), m(w)),
    };
  }
  return {
    queryThunk: f,
    mutationThunk: h,
    prefetch: b,
    updateQueryData: l,
    upsertQueryData: s,
    patchQueryData: u,
    buildMatchThunkActions: p,
  };
}
function OE(e, t, n, r) {
  return xE(
    n[e.meta.arg.endpointName][t],
    vi(e) ? e.payload : void 0,
    qu(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function Sl(e, t, n) {
  var r = e[t];
  r && n(r);
}
function Pu(e) {
  var t;
  return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function I0(e, t, n) {
  var r = e[Pu(t)];
  r && n(r);
}
var va = {};
function rN(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.context,
    o = i.endpointDefinitions,
    a = i.apiUid,
    u = i.extractRehydrationInfo,
    l = i.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    d = Lt(t + "/resetApiState"),
    f = gr({
      name: t + "/queries",
      initialState: va,
      reducers: {
        removeQueryResult: {
          reducer: function (x, C) {
            var E = C.payload.queryCacheKey;
            delete x[E];
          },
          prepare: vp(),
        },
        queryResultPatched: function (x, C) {
          var E = C.payload,
            k = E.queryCacheKey,
            M = E.patches;
          Sl(x, k, function (T) {
            T.data = m0(T.data, M.concat());
          });
        },
      },
      extraReducers: function (x) {
        x.addCase(n.pending, function (C, E) {
          var k = E.meta,
            M = E.meta.arg,
            T,
            A,
            P = gp(M);
          (M.subscribe || P) &&
            ((A = C[(T = M.queryCacheKey)]) != null ||
              (C[T] = {
                status: Je.uninitialized,
                endpointName: M.endpointName,
              })),
            Sl(C, M.queryCacheKey, function (O) {
              (O.status = Je.pending),
                (O.requestId = P && O.requestId ? O.requestId : k.requestId),
                M.originalArgs !== void 0 && (O.originalArgs = M.originalArgs),
                (O.startedTimeStamp = k.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (C, E) {
            var k = E.meta,
              M = E.payload;
            Sl(C, k.arg.queryCacheKey, function (T) {
              var A;
              if (!(T.requestId !== k.requestId && !gp(k.arg))) {
                var P = o[k.arg.endpointName].merge;
                if (((T.status = Je.fulfilled), P))
                  if (T.data !== void 0) {
                    var O = k.fulfilledTimeStamp,
                      R = k.arg,
                      $ = k.baseQueryMeta,
                      F = k.requestId,
                      N = Qi(T.data, function (_) {
                        return P(_, M, {
                          arg: R.originalArgs,
                          baseQueryMeta: $,
                          fulfilledTimeStamp: O,
                          requestId: F,
                        });
                      });
                    T.data = N;
                  } else T.data = M;
                else
                  T.data =
                    (A = o[k.arg.endpointName].structuralSharing) == null || A
                      ? am(T.data, M)
                      : M;
                delete T.error, (T.fulfilledTimeStamp = k.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (C, E) {
            var k = E.meta,
              M = k.condition,
              T = k.arg,
              A = k.requestId,
              P = E.error,
              O = E.payload;
            Sl(C, T.queryCacheKey, function (R) {
              if (!M) {
                if (R.requestId !== A) return;
                (R.status = Je.rejected), (R.error = O ?? P);
              }
            });
          })
          .addMatcher(l, function (C, E) {
            for (
              var k = u(E).queries, M = 0, T = Object.entries(k);
              M < T.length;
              M++
            ) {
              var A = T[M],
                P = A[0],
                O = A[1];
              ((O == null ? void 0 : O.status) === Je.fulfilled ||
                (O == null ? void 0 : O.status) === Je.rejected) &&
                (C[P] = O);
            }
          });
      },
    }),
    h = gr({
      name: t + "/mutations",
      initialState: va,
      reducers: {
        removeMutationResult: {
          reducer: function (x, C) {
            var E = C.payload,
              k = Pu(E);
            k in x && delete x[k];
          },
          prepare: vp(),
        },
      },
      extraReducers: function (x) {
        x.addCase(r.pending, function (C, E) {
          var k = E.meta,
            M = E.meta,
            T = M.requestId,
            A = M.arg,
            P = M.startedTimeStamp;
          A.track &&
            (C[Pu(k)] = {
              requestId: T,
              status: Je.pending,
              endpointName: A.endpointName,
              startedTimeStamp: P,
            });
        })
          .addCase(r.fulfilled, function (C, E) {
            var k = E.payload,
              M = E.meta;
            M.arg.track &&
              I0(C, M, function (T) {
                T.requestId === M.requestId &&
                  ((T.status = Je.fulfilled),
                  (T.data = k),
                  (T.fulfilledTimeStamp = M.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (C, E) {
            var k = E.payload,
              M = E.error,
              T = E.meta;
            T.arg.track &&
              I0(C, T, function (A) {
                A.requestId === T.requestId &&
                  ((A.status = Je.rejected), (A.error = k ?? M));
              });
          })
          .addMatcher(l, function (C, E) {
            for (
              var k = u(E).mutations, M = 0, T = Object.entries(k);
              M < T.length;
              M++
            ) {
              var A = T[M],
                P = A[0],
                O = A[1];
              ((O == null ? void 0 : O.status) === Je.fulfilled ||
                (O == null ? void 0 : O.status) === Je.rejected) &&
                P !== (O == null ? void 0 : O.requestId) &&
                (C[P] = O);
            }
          });
      },
    }),
    v = gr({
      name: t + "/invalidation",
      initialState: va,
      reducers: {},
      extraReducers: function (x) {
        x.addCase(f.actions.removeQueryResult, function (C, E) {
          for (
            var k = E.payload.queryCacheKey, M = 0, T = Object.values(C);
            M < T.length;
            M++
          )
            for (var A = T[M], P = 0, O = Object.values(A); P < O.length; P++) {
              var R = O[P],
                $ = R.indexOf(k);
              $ !== -1 && R.splice($, 1);
            }
        })
          .addMatcher(l, function (C, E) {
            for (
              var k, M, T, A, P = u(E).provided, O = 0, R = Object.entries(P);
              O < R.length;
              O++
            )
              for (
                var $ = R[O], F = $[0], N = $[1], _ = 0, I = Object.entries(N);
                _ < I.length;
                _++
              )
                for (
                  var L = I[_],
                    H = L[0],
                    q = L[1],
                    V =
                      (A = (M = (k = C[F]) != null ? k : (C[F] = {}))[
                        (T = H || "__internal_without_id")
                      ]) != null
                        ? A
                        : (M[T] = []),
                    X = 0,
                    re = q;
                  X < re.length;
                  X++
                ) {
                  var ie = re[X],
                    oe = V.includes(ie);
                  oe || V.push(ie);
                }
          })
          .addMatcher(Wi(vi(n), qu(n)), function (C, E) {
            for (
              var k,
                M,
                T,
                A,
                P = OE(E, "providesTags", o, s),
                O = E.meta.arg.queryCacheKey,
                R = 0,
                $ = Object.values(C);
              R < $.length;
              R++
            )
              for (
                var F = $[R], N = 0, _ = Object.values(F);
                N < _.length;
                N++
              ) {
                var I = _[N],
                  L = I.indexOf(O);
                L !== -1 && I.splice(L, 1);
              }
            for (var H = 0, q = P; H < q.length; H++) {
              var V = q[H],
                X = V.type,
                re = V.id,
                ie =
                  (A = (M = (k = C[X]) != null ? k : (C[X] = {}))[
                    (T = re || "__internal_without_id")
                  ]) != null
                    ? A
                    : (M[T] = []),
                oe = ie.includes(O);
              oe || ie.push(O);
            }
          });
      },
    }),
    y = gr({
      name: t + "/subscriptions",
      initialState: va,
      reducers: {
        updateSubscriptionOptions: function (x, C) {},
        unsubscribeQueryResult: function (x, C) {},
        internal_probeSubscription: function (x, C) {},
      },
    }),
    b = gr({
      name: t + "/internalSubscriptions",
      initialState: va,
      reducers: {
        subscriptionsUpdated: function (x, C) {
          return m0(x, C.payload);
        },
      },
    }),
    m = gr({
      name: t + "/config",
      initialState: nt(
        { online: B_(), focused: V_(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (x, C) {
          var E = C.payload;
          x.middlewareRegistered =
            x.middlewareRegistered === "conflict" || a !== E ? "conflict" : !0;
        },
      },
      extraReducers: function (x) {
        x.addCase(xu, function (C) {
          C.online = !0;
        })
          .addCase(Qs, function (C) {
            C.online = !1;
          })
          .addCase(Eu, function (C) {
            C.focused = !0;
          })
          .addCase(Vs, function (C) {
            C.focused = !1;
          })
          .addMatcher(l, function (C) {
            return nt({}, C);
          });
      },
    }),
    p = rm({
      queries: f.reducer,
      mutations: h.reducer,
      provided: v.reducer,
      subscriptions: b.reducer,
      config: m.reducer,
    }),
    g = function (x, C) {
      return p(d.match(C) ? void 0 : x, C);
    },
    w = tr(
      nt(
        nt(nt(nt(nt({}, m.actions), f.actions), y.actions), b.actions),
        h.actions
      ),
      {
        unsubscribeMutationResult: h.actions.removeMutationResult,
        resetApiState: d,
      }
    );
  return { reducer: g, actions: w };
}
var za = Symbol.for("RTKQ/skipToken"),
  iN = za,
  PE = { status: Je.uninitialized },
  L0 = Qi(PE, function () {}),
  D0 = Qi(PE, function () {});
function oN(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (c) {
      return L0;
    },
    i = function (c) {
      return D0;
    };
  return {
    buildQuerySelector: u,
    buildMutationSelector: l,
    selectInvalidatedBy: s,
  };
  function o(c) {
    return nt(nt({}, c), j_(c.status));
  }
  function a(c) {
    var d = c[n];
    return d;
  }
  function u(c, d) {
    return function (f) {
      var h = t({ queryArgs: f, endpointDefinition: d, endpointName: c }),
        v = function (b) {
          var m, p, g;
          return (g =
            (p = (m = a(b)) == null ? void 0 : m.queries) == null
              ? void 0
              : p[h]) != null
            ? g
            : L0;
        },
        y = f === za ? r : v;
      return zs(y, o);
    };
  }
  function l() {
    return function (c) {
      var d, f;
      typeof c == "object" ? (f = (d = Pu(c)) != null ? d : za) : (f = c);
      var h = function (y) {
          var b, m, p;
          return (p =
            (m = (b = a(y)) == null ? void 0 : b.mutations) == null
              ? void 0
              : m[f]) != null
            ? p
            : D0;
        },
        v = f === za ? i : h;
      return zs(v, o);
    };
  }
  function s(c, d) {
    for (
      var f, h = c[n], v = new Set(), y = 0, b = d.map(mp);
      y < b.length;
      y++
    ) {
      var m = b[y],
        p = h.provided[m.type];
      if (p)
        for (
          var g =
              (f = m.id !== void 0 ? p[m.id] : T0(Object.values(p))) != null
                ? f
                : [],
            w = 0,
            x = g;
          w < x.length;
          w++
        ) {
          var C = x[w];
          v.add(C);
        }
    }
    return T0(
      Array.from(v.values()).map(function (E) {
        var k = h.queries[E];
        return k
          ? [
              {
                queryCacheKey: E,
                endpointName: k.endpointName,
                originalArgs: k.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var yp = function (e) {
  var t = e.endpointName,
    n = e.queryArgs;
  return (
    t +
    "(" +
    JSON.stringify(n, function (r, i) {
      return pi(i)
        ? Object.keys(i)
            .sort()
            .reduce(function (o, a) {
              return (o[a] = i[a]), o;
            }, {})
        : i;
    }) +
    ")"
  );
};
function RE() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var i = cp(function (c) {
        var d, f;
        return (f = r.extractRehydrationInfo) == null
          ? void 0
          : f.call(r, c, {
              reducerPath: (d = r.reducerPath) != null ? d : "api",
            });
      }),
      o = tr(
        nt(
          {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: i,
          serializeQueryArgs: function (c) {
            var d = yp;
            if ("serializeQueryArgs" in c.endpointDefinition) {
              var f = c.endpointDefinition.serializeQueryArgs;
              d = function (h) {
                var v = f(h);
                return typeof v == "string"
                  ? v
                  : yp(tr(nt({}, h), { queryArgs: v }));
              };
            } else r.serializeQueryArgs && (d = r.serializeQueryArgs);
            return d(c);
          },
          tagTypes: qs([], r.tagTypes || []),
        }
      ),
      a = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: rf(),
        extractRehydrationInfo: i,
        hasRehydrationInfo: cp(function (c) {
          return i(c) != null;
        }),
      },
      u = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var d = c.addTagTypes,
            f = c.endpoints;
          if (d)
            for (var h = 0, v = d; h < v.length; h++) {
              var y = v[h];
              o.tagTypes.includes(y) || o.tagTypes.push(y);
            }
          if (f)
            for (var b = 0, m = Object.entries(f); b < m.length; b++) {
              var p = m[b],
                g = p[0],
                w = p[1];
              typeof w == "function"
                ? w(a.endpointDefinitions[g])
                : Object.assign(a.endpointDefinitions[g] || {}, w);
            }
          return u;
        },
      },
      l = e.map(function (c) {
        return c.init(u, o, a);
      });
    function s(c) {
      for (
        var d = c.endpoints({
            query: function (w) {
              return tr(nt({}, w), { type: ur.query });
            },
            mutation: function (w) {
              return tr(nt({}, w), { type: ur.mutation });
            },
          }),
          f = 0,
          h = Object.entries(d);
        f < h.length;
        f++
      ) {
        var v = h[f],
          y = v[0],
          b = v[1];
        if (!c.overrideExisting && y in a.endpointDefinitions) {
          typeof process < "u";
          continue;
        }
        a.endpointDefinitions[y] = b;
        for (var m = 0, p = l; m < p.length; m++) {
          var g = p[m];
          g.injectEndpoint(y, b);
        }
      }
      return u;
    }
    return u.injectEndpoints({ endpoints: r.endpoints });
  };
}
function aN() {
  return function () {
    throw new Error(
      "When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax."
    );
  };
}
function uN(e) {
  for (var t in e) return !1;
  return !0;
}
var lN = 2147483647 / 1e3 - 1,
  sN = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      i = e.internalState,
      o = n.internalActions,
      a = o.removeQueryResult,
      u = o.unsubscribeQueryResult;
    function l(f) {
      var h = i.currentSubscriptions[f];
      return !!h && !uN(h);
    }
    var s = {},
      c = function (f, h, v) {
        var y;
        if (u.match(f)) {
          var b = h.getState()[t],
            m = f.payload.queryCacheKey;
          d(
            m,
            (y = b.queries[m]) == null ? void 0 : y.endpointName,
            h,
            b.config
          );
        }
        if (n.util.resetApiState.match(f))
          for (var p = 0, g = Object.entries(s); p < g.length; p++) {
            var w = g[p],
              x = w[0],
              C = w[1];
            C && clearTimeout(C), delete s[x];
          }
        if (r.hasRehydrationInfo(f))
          for (
            var b = h.getState()[t],
              E = r.extractRehydrationInfo(f).queries,
              k = 0,
              M = Object.entries(E);
            k < M.length;
            k++
          ) {
            var T = M[k],
              m = T[0],
              A = T[1];
            d(m, A == null ? void 0 : A.endpointName, h, b.config);
          }
      };
    function d(f, h, v, y) {
      var b,
        m = r.endpointDefinitions[h],
        p =
          (b = m == null ? void 0 : m.keepUnusedDataFor) != null
            ? b
            : y.keepUnusedDataFor;
      if (p !== 1 / 0) {
        var g = Math.max(0, Math.min(p, lN));
        if (!l(f)) {
          var w = s[f];
          w && clearTimeout(w),
            (s[f] = setTimeout(function () {
              l(f) || v.dispatch(a({ queryCacheKey: f })), delete s[f];
            }, g * 1e3));
        }
      }
    }
    return c;
  },
  cN = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      i = e.mutationThunk,
      o = e.api,
      a = e.assertTagType,
      u = e.refetchQuery,
      l = o.internalActions.removeQueryResult,
      s = Wi(vi(i), qu(i)),
      c = function (f, h) {
        s(f) && d(OE(f, "invalidatesTags", r, a), h),
          o.util.invalidateTags.match(f) &&
            d(xE(f.payload, void 0, void 0, void 0, void 0, a), h);
      };
    function d(f, h) {
      var v = h.getState(),
        y = v[t],
        b = o.util.selectInvalidatedBy(v, f);
      n.batch(function () {
        for (
          var m, p = Array.from(b.values()), g = 0, w = p;
          g < w.length;
          g++
        ) {
          var x = w[g].queryCacheKey,
            C = y.queries[x],
            E = (m = y.subscriptions[x]) != null ? m : {};
          C &&
            (Object.keys(E).length === 0
              ? h.dispatch(l({ queryCacheKey: x }))
              : C.status !== Je.uninitialized && h.dispatch(u(C, x)));
        }
      });
    }
    return c;
  },
  fN = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      a = {},
      u = function (h, v) {
        (r.internalActions.updateSubscriptionOptions.match(h) ||
          r.internalActions.unsubscribeQueryResult.match(h)) &&
          s(h.payload, v),
          (n.pending.match(h) || (n.rejected.match(h) && h.meta.condition)) &&
            s(h.meta.arg, v),
          (n.fulfilled.match(h) ||
            (n.rejected.match(h) && !h.meta.condition)) &&
            l(h.meta.arg, v),
          r.util.resetApiState.match(h) && d();
      };
    function l(h, v) {
      var y = h.queryCacheKey,
        b = v.getState()[t],
        m = b.queries[y],
        p = o.currentSubscriptions[y];
      if (!(!m || m.status === Je.uninitialized)) {
        var g = f(p);
        if (Number.isFinite(g)) {
          var w = a[y];
          w != null &&
            w.timeout &&
            (clearTimeout(w.timeout), (w.timeout = void 0));
          var x = Date.now() + g,
            C = (a[y] = {
              nextPollTimestamp: x,
              pollingInterval: g,
              timeout: setTimeout(function () {
                (C.timeout = void 0), v.dispatch(i(m, y));
              }, g),
            });
        }
      }
    }
    function s(h, v) {
      var y = h.queryCacheKey,
        b = v.getState()[t],
        m = b.queries[y],
        p = o.currentSubscriptions[y];
      if (!(!m || m.status === Je.uninitialized)) {
        var g = f(p);
        if (!Number.isFinite(g)) {
          c(y);
          return;
        }
        var w = a[y],
          x = Date.now() + g;
        (!w || x < w.nextPollTimestamp) && l({ queryCacheKey: y }, v);
      }
    }
    function c(h) {
      var v = a[h];
      v != null && v.timeout && clearTimeout(v.timeout), delete a[h];
    }
    function d() {
      for (var h = 0, v = Object.keys(a); h < v.length; h++) {
        var y = v[h];
        c(y);
      }
    }
    function f(h) {
      h === void 0 && (h = {});
      var v = Number.POSITIVE_INFINITY;
      for (var y in h)
        h[y].pollingInterval && (v = Math.min(h[y].pollingInterval, v));
      return v;
    }
    return u;
  },
  dN = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      a = r.internalActions.removeQueryResult,
      u = function (s, c) {
        Eu.match(s) && l(c, "refetchOnFocus"),
          xu.match(s) && l(c, "refetchOnReconnect");
      };
    function l(s, c) {
      var d = s.getState()[t],
        f = d.queries,
        h = o.currentSubscriptions;
      n.batch(function () {
        for (var v = 0, y = Object.keys(h); v < y.length; v++) {
          var b = y[v],
            m = f[b],
            p = h[b];
          if (!(!p || !m)) {
            var g =
              Object.values(p).some(function (w) {
                return w[c] === !0;
              }) ||
              (Object.values(p).every(function (w) {
                return w[c] === void 0;
              }) &&
                d.config[c]);
            g &&
              (Object.keys(p).length === 0
                ? s.dispatch(a({ queryCacheKey: b }))
                : m.status !== Je.uninitialized && s.dispatch(i(m, b)));
          }
        }
      });
    }
    return u;
  },
  j0 = new Error("Promise never resolved before cacheEntryRemoved."),
  hN = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      i = e.queryThunk,
      o = e.mutationThunk;
    e.internalState;
    var a = Us(i),
      u = Us(o),
      l = vi(i, o),
      s = {},
      c = function (h, v, y) {
        var b = d(h);
        if (i.pending.match(h)) {
          var m = y[n].queries[b],
            p = v.getState()[n].queries[b];
          !m &&
            p &&
            f(
              h.meta.arg.endpointName,
              h.meta.arg.originalArgs,
              b,
              v,
              h.meta.requestId
            );
        } else if (o.pending.match(h)) {
          var p = v.getState()[n].mutations[b];
          p &&
            f(
              h.meta.arg.endpointName,
              h.meta.arg.originalArgs,
              b,
              v,
              h.meta.requestId
            );
        } else if (l(h)) {
          var g = s[b];
          g != null &&
            g.valueResolved &&
            (g.valueResolved({ data: h.payload, meta: h.meta.baseQueryMeta }),
            delete g.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(h) ||
          t.internalActions.removeMutationResult.match(h)
        ) {
          var g = s[b];
          g && (delete s[b], g.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(h))
          for (var w = 0, x = Object.entries(s); w < x.length; w++) {
            var C = x[w],
              E = C[0],
              g = C[1];
            delete s[E], g.cacheEntryRemoved();
          }
      };
    function d(h) {
      return a(h)
        ? h.meta.arg.queryCacheKey
        : u(h)
        ? h.meta.requestId
        : t.internalActions.removeQueryResult.match(h)
        ? h.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(h)
        ? Pu(h.payload)
        : "";
    }
    function f(h, v, y, b, m) {
      var p = r.endpointDefinitions[h],
        g = p == null ? void 0 : p.onCacheEntryAdded;
      if (g) {
        var w = {},
          x = new Promise(function (A) {
            w.cacheEntryRemoved = A;
          }),
          C = Promise.race([
            new Promise(function (A) {
              w.valueResolved = A;
            }),
            x.then(function () {
              throw j0;
            }),
          ]);
        C.catch(function () {}), (s[y] = w);
        var E = t.endpoints[h].select(p.type === ur.query ? v : y),
          k = b.dispatch(function (A, P, O) {
            return O;
          }),
          M = tr(nt({}, b), {
            getCacheEntry: function () {
              return E(b.getState());
            },
            requestId: m,
            extra: k,
            updateCachedData:
              p.type === ur.query
                ? function (A) {
                    return b.dispatch(t.util.updateQueryData(h, v, A));
                  }
                : void 0,
            cacheDataLoaded: C,
            cacheEntryRemoved: x,
          }),
          T = g(v, M);
        Promise.resolve(T).catch(function (A) {
          if (A !== j0) throw A;
        });
      }
    }
    return c;
  },
  pN = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      i = e.mutationThunk,
      o = af(r, i),
      a = Vo(r, i),
      u = vi(r, i),
      l = {},
      s = function (c, d) {
        var f, h, v;
        if (o(c)) {
          var y = c.meta,
            b = y.requestId,
            m = y.arg,
            p = m.endpointName,
            g = m.originalArgs,
            w = n.endpointDefinitions[p],
            x = w == null ? void 0 : w.onQueryStarted;
          if (x) {
            var C = {},
              E = new Promise(function ($, F) {
                (C.resolve = $), (C.reject = F);
              });
            E.catch(function () {}), (l[b] = C);
            var k = t.endpoints[p].select(w.type === ur.query ? g : b),
              M = d.dispatch(function ($, F, N) {
                return N;
              }),
              T = tr(nt({}, d), {
                getCacheEntry: function () {
                  return k(d.getState());
                },
                requestId: b,
                extra: M,
                updateCachedData:
                  w.type === ur.query
                    ? function ($) {
                        return d.dispatch(t.util.updateQueryData(p, g, $));
                      }
                    : void 0,
                queryFulfilled: E,
              });
            x(g, T);
          }
        } else if (u(c)) {
          var A = c.meta,
            b = A.requestId,
            P = A.baseQueryMeta;
          (f = l[b]) == null || f.resolve({ data: c.payload, meta: P }),
            delete l[b];
        } else if (a(c)) {
          var O = c.meta,
            b = O.requestId,
            R = O.rejectedWithValue,
            P = O.baseQueryMeta;
          (v = l[b]) == null ||
            v.reject({
              error: (h = c.payload) != null ? h : c.error,
              isUnhandledError: !R,
              meta: P,
            }),
            delete l[b];
        }
      };
    return s;
  },
  vN = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (i, o) {
      var a, u;
      t.util.resetApiState.match(i) &&
        o.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < "u";
    };
  },
  z0,
  mN =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (z0 || (z0 = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  gN = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      i = t.reducerPath + "/subscriptions",
      o = null,
      a = !1,
      u = t.internalActions,
      l = u.updateSubscriptionOptions,
      s = u.unsubscribeQueryResult,
      c = function (d, f) {
        var h, v, y, b, m, p, g, w, x;
        if (l.match(f)) {
          var C = f.payload,
            E = C.queryCacheKey,
            k = C.requestId,
            M = C.options;
          return (
            (h = d == null ? void 0 : d[E]) != null && h[k] && (d[E][k] = M), !0
          );
        }
        if (s.match(f)) {
          var T = f.payload,
            E = T.queryCacheKey,
            k = T.requestId;
          return d[E] && delete d[E][k], !0;
        }
        if (t.internalActions.removeQueryResult.match(f))
          return delete d[f.payload.queryCacheKey], !0;
        if (n.pending.match(f)) {
          var A = f.meta,
            P = A.arg,
            k = A.requestId;
          if (P.subscribe) {
            var O = (y = d[(v = P.queryCacheKey)]) != null ? y : (d[v] = {});
            return (
              (O[k] =
                (m = (b = P.subscriptionOptions) != null ? b : O[k]) != null
                  ? m
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(f)) {
          var R = f.meta,
            $ = R.condition,
            P = R.arg,
            k = R.requestId;
          if ($ && P.subscribe) {
            var O = (g = d[(p = P.queryCacheKey)]) != null ? g : (d[p] = {});
            return (
              (O[k] =
                (x = (w = P.subscriptionOptions) != null ? w : O[k]) != null
                  ? x
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (d, f) {
      var h, v;
      if (
        (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.internalActions.internal_probeSubscription.match(d))
      ) {
        var y = d.payload,
          b = y.queryCacheKey,
          m = y.requestId,
          p = !!((h = r.currentSubscriptions[b]) != null && h[m]);
        return [!1, p];
      }
      var g = c(r.currentSubscriptions, d);
      if (g) {
        a ||
          (mN(function () {
            var E = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              k = VC(o, function () {
                return E;
              }),
              M = k[1];
            f.next(t.internalActions.subscriptionsUpdated(M)),
              (o = E),
              (a = !1);
          }),
          (a = !0));
        var w = !!((v = d.type) != null && v.startsWith(i)),
          x = n.rejected.match(d) && d.meta.condition && !!d.meta.arg.subscribe,
          C = !w && !x;
        return [C, !1];
      }
      return [!0, !1];
    };
  };
function yN(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    i = e.context,
    o = i.apiUid,
    a = { invalidateTags: Lt(t + "/invalidateTags") },
    u = function (d) {
      return !!d && typeof d.type == "string" && d.type.startsWith(t + "/");
    },
    l = [vN, sN, cN, fN, hN, pN],
    s = function (d) {
      var f = !1,
        h = { currentSubscriptions: {} },
        v = tr(nt({}, e), { internalState: h, refetchQuery: c }),
        y = l.map(function (p) {
          return p(v);
        }),
        b = gN(v),
        m = dN(v);
      return function (p) {
        return function (g) {
          f ||
            ((f = !0), d.dispatch(r.internalActions.middlewareRegistered(o)));
          var w = tr(nt({}, d), { next: p }),
            x = d.getState(),
            C = b(g, w, x),
            E = C[0],
            k = C[1],
            M;
          if (
            (E ? (M = p(g)) : (M = k),
            d.getState()[t] && (m(g, w, x), u(g) || i.hasRehydrationInfo(g)))
          )
            for (var T = 0, A = y; T < A.length; T++) {
              var P = A[T];
              P(g, w, x);
            }
          return M;
        };
      };
    };
  return { middleware: s, actions: a };
  function c(d, f, h) {
    return (
      h === void 0 && (h = {}),
      n(
        nt(
          {
            type: "query",
            endpointName: d.endpointName,
            originalArgs: d.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: f,
          },
          h
        )
      )
    );
  }
}
function Lr(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, qs([e], t));
}
var U0 = Symbol(),
  kE = function () {
    return {
      name: U0,
      init: function (e, t, n) {
        var r = t.baseQuery,
          i = t.tagTypes,
          o = t.reducerPath,
          a = t.serializeQueryArgs,
          u = t.keepUnusedDataFor,
          l = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        kF();
        var d = function (V) {
          return typeof process < "u", V;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: xu,
            onOffline: Qs,
            onFocus: Eu,
            onFocusLost: Vs,
          },
          util: {},
        });
        var f = nN({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: a,
          }),
          h = f.queryThunk,
          v = f.mutationThunk,
          y = f.patchQueryData,
          b = f.updateQueryData,
          m = f.upsertQueryData,
          p = f.prefetch,
          g = f.buildMatchThunkActions,
          w = rN({
            context: n,
            queryThunk: h,
            mutationThunk: v,
            reducerPath: o,
            assertTagType: d,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: l,
              keepUnusedDataFor: u,
              reducerPath: o,
            },
          }),
          x = w.reducer,
          C = w.actions;
        Lr(e.util, {
          patchQueryData: y,
          updateQueryData: b,
          upsertQueryData: m,
          prefetch: p,
          resetApiState: C.resetApiState,
        }),
          Lr(e.internalActions, C);
        var E = yN({
            reducerPath: o,
            context: n,
            queryThunk: h,
            mutationThunk: v,
            api: e,
            assertTagType: d,
          }),
          k = E.middleware,
          M = E.actions;
        Lr(e.util, M), Lr(e, { reducer: x, middleware: k });
        var T = oN({ serializeQueryArgs: a, reducerPath: o }),
          A = T.buildQuerySelector,
          P = T.buildMutationSelector,
          O = T.selectInvalidatedBy;
        Lr(e.util, { selectInvalidatedBy: O });
        var R = tN({
            queryThunk: h,
            mutationThunk: v,
            api: e,
            serializeQueryArgs: a,
            context: n,
          }),
          $ = R.buildInitiateQuery,
          F = R.buildInitiateMutation,
          N = R.getRunningMutationThunk,
          _ = R.getRunningMutationsThunk,
          I = R.getRunningQueriesThunk,
          L = R.getRunningQueryThunk,
          H = R.getRunningOperationPromises,
          q = R.removalWarning;
        return (
          Lr(e.util, {
            getRunningOperationPromises: H,
            getRunningOperationPromise: q,
            getRunningMutationThunk: N,
            getRunningMutationsThunk: _,
            getRunningQueryThunk: L,
            getRunningQueriesThunk: I,
          }),
          {
            name: U0,
            injectEndpoint: function (V, X) {
              var re,
                ie,
                oe = e;
              (ie = (re = oe.endpoints)[V]) != null || (re[V] = {}),
                EE(X)
                  ? Lr(
                      oe.endpoints[V],
                      { name: V, select: A(V, X), initiate: $(V, X) },
                      g(h, V)
                    )
                  : J_(X) &&
                    Lr(
                      oe.endpoints[V],
                      { name: V, select: P(), initiate: F(V) },
                      g(v, V)
                    );
            },
          }
        );
      },
    };
  },
  wN = RE(kE());
const SN = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get QueryStatus() {
        return Je;
      },
      buildCreateApi: RE,
      copyWithStructuralSharing: am,
      coreModule: kE,
      createApi: wN,
      defaultSerializeQueryArgs: yp,
      fakeBaseQuery: aN,
      fetchBaseQuery: K_,
      retry: Z_,
      setupListeners: CE,
      skipSelector: iN,
      skipToken: za,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Ws = {},
  bN = {
    get exports() {
      return Ws;
    },
    set exports(e) {
      Ws = e;
    },
  },
  ME = {};
const bl = Cp(SN),
  gd = Cp(N_),
  Cl = Cp(EF);
(function (e) {
  var t =
      (sm && sm.__spreadArray) ||
      function (z, Q) {
        for (var te = 0, Oe = Q.length, me = z.length; te < Oe; te++, me++)
          z[me] = Q[te];
        return z;
      },
    n = Object.create,
    r = Object.defineProperty,
    i = Object.defineProperties,
    o = Object.getOwnPropertyDescriptor,
    a = Object.getOwnPropertyDescriptors,
    u = Object.getOwnPropertyNames,
    l = Object.getOwnPropertySymbols,
    s = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    d = Object.prototype.propertyIsEnumerable,
    f = function (z, Q, te) {
      return Q in z
        ? r(z, Q, { enumerable: !0, configurable: !0, writable: !0, value: te })
        : (z[Q] = te);
    },
    h = function (z, Q) {
      for (var te in Q || (Q = {})) c.call(Q, te) && f(z, te, Q[te]);
      if (l)
        for (var Oe = 0, me = l(Q); Oe < me.length; Oe++)
          d.call(Q, (te = me[Oe])) && f(z, te, Q[te]);
      return z;
    },
    v = function (z, Q) {
      return i(z, a(Q));
    },
    y = function (z) {
      return r(z, "__esModule", { value: !0 });
    },
    b = function (z, Q, te) {
      if ((Q && typeof Q == "object") || typeof Q == "function")
        for (
          var Oe = function (fe) {
              c.call(z, fe) ||
                fe === "default" ||
                r(z, fe, {
                  get: function () {
                    return Q[fe];
                  },
                  enumerable: !(te = o(Q, fe)) || te.enumerable,
                });
            },
            me = 0,
            se = u(Q);
          me < se.length;
          me++
        )
          Oe(se[me]);
      return z;
    },
    m = function (z) {
      return b(
        y(
          r(
            z != null ? n(s(z)) : {},
            "default",
            z && z.__esModule && "default" in z
              ? {
                  get: function () {
                    return z.default;
                  },
                  enumerable: !0,
                }
              : { value: z, enumerable: !0 }
          )
        ),
        z
      );
    };
  y(e),
    (function (z, Q) {
      for (var te in Q) r(z, te, { get: Q[te], enumerable: !0 });
    })(e, {
      ApiProvider: function () {
        return ae;
      },
      createApi: function () {
        return xe;
      },
      reactHooksModule: function () {
        return X;
      },
    });
  var p = m(bl),
    g = m(gd),
    w = m(S),
    x = m(bl),
    C = m(Cl),
    E = m(S);
  function k(z, Q, te, Oe) {
    var me = (0, E.useMemo)(
        function () {
          return {
            queryArgs: z,
            serialized:
              typeof z == "object"
                ? Q({ queryArgs: z, endpointDefinition: te, endpointName: Oe })
                : z,
          };
        },
        [z, Q, te, Oe]
      ),
      se = (0, E.useRef)(me);
    return (
      (0, E.useEffect)(
        function () {
          se.current.serialized !== me.serialized && (se.current = me);
        },
        [me]
      ),
      se.current.serialized === me.serialized ? se.current.queryArgs : z
    );
  }
  var M = Symbol(),
    T = m(S),
    A = m(Cl);
  function P(z) {
    var Q = (0, T.useRef)(z);
    return (
      (0, T.useEffect)(
        function () {
          (0, A.shallowEqual)(Q.current, z) || (Q.current = z);
        },
        [z]
      ),
      (0, A.shallowEqual)(Q.current, z) ? Q.current : z
    );
  }
  var O,
    R,
    $ = m(gd),
    F = function (z) {
      return (
        z.endpointName +
        "(" +
        JSON.stringify(z.queryArgs, function (Q, te) {
          return (0, $.isPlainObject)(te)
            ? Object.keys(te)
                .sort()
                .reduce(function (Oe, me) {
                  return (Oe[me] = te[me]), Oe;
                }, {})
            : te;
        }) +
        ")"
      );
    },
    N =
      typeof window < "u" && window.document && window.document.createElement
        ? w.useLayoutEffect
        : w.useEffect,
    _ = function (z) {
      return z;
    },
    I = function (z) {
      return z.isUninitialized
        ? v(h({}, z), {
            isUninitialized: !1,
            isFetching: !0,
            isLoading: z.data === void 0,
            status: x.QueryStatus.pending,
          })
        : z;
    };
  function L(z) {
    return z.replace(z[0], z[0].toUpperCase());
  }
  function H(z) {
    for (var Q = [], te = 1; te < arguments.length; te++)
      Q[te - 1] = arguments[te];
    Object.assign.apply(Object, t([z], Q));
  }
  ((R = O || (O = {})).query = "query"), (R.mutation = "mutation");
  var q = m(Cl),
    V = Symbol(),
    X = function (z) {
      var Q = z === void 0 ? {} : z,
        te = Q.batch,
        Oe = te === void 0 ? q.batch : te,
        me = Q.useDispatch,
        se = me === void 0 ? q.useDispatch : me,
        fe = Q.useSelector,
        Fe = fe === void 0 ? q.useSelector : fe,
        Ve = Q.useStore,
        Pe = Ve === void 0 ? q.useStore : Ve,
        ge = Q.unstable__sideEffectsInRender,
        nn = ge !== void 0 && ge;
      return {
        name: V,
        init: function (D, j, U) {
          var G = D,
            W = (function (J) {
              var Z = J.api,
                Te = J.moduleOptions,
                le = Te.batch,
                Re = Te.useDispatch,
                dt = Te.useSelector,
                jt = Te.useStore,
                In = J.serializeQueryArgs,
                Gn = J.context,
                wn = Te.unstable__sideEffectsInRender
                  ? function (Ne) {
                      return Ne();
                    }
                  : w.useEffect;
              return {
                buildQueryHooks: function (Ne) {
                  var ye = function (Le, pe) {
                      var Be = pe === void 0 ? {} : pe,
                        De = Be.refetchOnReconnect,
                        Qe = Be.refetchOnFocus,
                        ut = Be.refetchOnMountOrArgChange,
                        zt = Be.skip,
                        Xe = zt !== void 0 && zt,
                        rn = Be.pollingInterval,
                        Sn = rn === void 0 ? 0 : rn,
                        sr = Z.endpoints[Ne].initiate,
                        Ut = Re(),
                        Ze = k(
                          Xe ? x.skipToken : Le,
                          F,
                          Gn.endpointDefinitions[Ne],
                          Ne
                        ),
                        Wt = P({
                          refetchOnReconnect: De,
                          refetchOnFocus: Qe,
                          pollingInterval: Sn,
                        }),
                        bn = (0, w.useRef)(!1),
                        ot = (0, w.useRef)(),
                        Ln = ot.current || {},
                        Xn = Ln.queryCacheKey,
                        ta = Ln.requestId,
                        cf = !1;
                      if (Xn && ta) {
                        var qE = Ut(
                          Z.internalActions.internal_probeSubscription({
                            queryCacheKey: Xn,
                            requestId: ta,
                          })
                        );
                        cf = !!qE;
                      }
                      var lm = !cf && bn.current;
                      return (
                        wn(function () {
                          bn.current = cf;
                        }),
                        wn(
                          function () {
                            ot.current = void 0;
                          },
                          [lm]
                        ),
                        wn(
                          function () {
                            var _r,
                              mi = ot.current;
                            if (Ze === x.skipToken)
                              return (
                                mi == null || mi.unsubscribe(),
                                void (ot.current = void 0)
                              );
                            var BE =
                              (_r = ot.current) == null
                                ? void 0
                                : _r.subscriptionOptions;
                            if (mi && mi.arg === Ze)
                              Wt !== BE && mi.updateSubscriptionOptions(Wt);
                            else {
                              mi == null || mi.unsubscribe();
                              var VE = Ut(
                                sr(Ze, {
                                  subscriptionOptions: Wt,
                                  forceRefetch: ut,
                                })
                              );
                              ot.current = VE;
                            }
                          },
                          [Ut, sr, ut, Ze, Wt, lm]
                        ),
                        (0, w.useEffect)(function () {
                          return function () {
                            var _r;
                            (_r = ot.current) == null || _r.unsubscribe(),
                              (ot.current = void 0);
                          };
                        }, []),
                        (0, w.useMemo)(function () {
                          return {
                            refetch: function () {
                              var _r;
                              if (!ot.current)
                                throw new Error(
                                  "Cannot refetch a query that has not been started yet."
                                );
                              return (_r = ot.current) == null
                                ? void 0
                                : _r.refetch();
                            },
                          };
                        }, [])
                      );
                    },
                    Ie = function (Le) {
                      var pe = Le === void 0 ? {} : Le,
                        Be = pe.refetchOnReconnect,
                        De = pe.refetchOnFocus,
                        Qe = pe.pollingInterval,
                        ut = Qe === void 0 ? 0 : Qe,
                        zt = Z.endpoints[Ne].initiate,
                        Xe = Re(),
                        rn = (0, w.useState)(M),
                        Sn = rn[0],
                        sr = rn[1],
                        Ut = (0, w.useRef)(),
                        Ze = P({
                          refetchOnReconnect: Be,
                          refetchOnFocus: De,
                          pollingInterval: ut,
                        });
                      wn(
                        function () {
                          var ot,
                            Ln,
                            Xn =
                              (ot = Ut.current) == null
                                ? void 0
                                : ot.subscriptionOptions;
                          Ze !== Xn &&
                            ((Ln = Ut.current) == null ||
                              Ln.updateSubscriptionOptions(Ze));
                        },
                        [Ze]
                      );
                      var Wt = (0, w.useRef)(Ze);
                      wn(
                        function () {
                          Wt.current = Ze;
                        },
                        [Ze]
                      );
                      var bn = (0, w.useCallback)(
                        function (ot, Ln) {
                          var Xn;
                          return (
                            Ln === void 0 && (Ln = !1),
                            le(function () {
                              var ta;
                              (ta = Ut.current) == null || ta.unsubscribe(),
                                (Ut.current = Xn =
                                  Xe(
                                    zt(ot, {
                                      subscriptionOptions: Wt.current,
                                      forceRefetch: !Ln,
                                    })
                                  )),
                                sr(ot);
                            }),
                            Xn
                          );
                        },
                        [Xe, zt]
                      );
                      return (
                        (0, w.useEffect)(function () {
                          return function () {
                            var ot;
                            (ot = Ut == null ? void 0 : Ut.current) == null ||
                              ot.unsubscribe();
                          };
                        }, []),
                        (0, w.useEffect)(
                          function () {
                            Sn === M || Ut.current || bn(Sn, !0);
                          },
                          [Sn, bn]
                        ),
                        (0, w.useMemo)(
                          function () {
                            return [bn, Sn];
                          },
                          [bn, Sn]
                        )
                      );
                    },
                    ke = function (Le, pe) {
                      var Be = pe === void 0 ? {} : pe,
                        De = Be.skip,
                        Qe = Be.selectFromResult,
                        ut = Z.endpoints[Ne].select,
                        zt = k(
                          De !== void 0 && De ? x.skipToken : Le,
                          In,
                          Gn.endpointDefinitions[Ne],
                          Ne
                        ),
                        Xe = (0, w.useRef)(),
                        rn = (0, w.useMemo)(
                          function () {
                            return (0, g.createSelector)(
                              [
                                ut(zt),
                                function (Wt, bn) {
                                  return bn;
                                },
                                function (Wt) {
                                  return zt;
                                },
                              ],
                              Yn
                            );
                          },
                          [ut, zt]
                        ),
                        Sn = (0, w.useMemo)(
                          function () {
                            return Qe ? (0, g.createSelector)([rn], Qe) : rn;
                          },
                          [rn, Qe]
                        ),
                        sr = dt(function (Wt) {
                          return Sn(Wt, Xe.current);
                        }, C.shallowEqual),
                        Ut = jt(),
                        Ze = rn(Ut.getState(), Xe.current);
                      return (
                        N(
                          function () {
                            Xe.current = Ze;
                          },
                          [Ze]
                        ),
                        sr
                      );
                    };
                  return {
                    useQueryState: ke,
                    useQuerySubscription: ye,
                    useLazyQuerySubscription: Ie,
                    useLazyQuery: function (Le) {
                      var pe = Ie(Le),
                        Be = pe[0],
                        De = pe[1],
                        Qe = ke(De, v(h({}, Le), { skip: De === M })),
                        ut = (0, w.useMemo)(
                          function () {
                            return { lastArg: De };
                          },
                          [De]
                        );
                      return (0, w.useMemo)(
                        function () {
                          return [Be, Qe, ut];
                        },
                        [Be, Qe, ut]
                      );
                    },
                    useQuery: function (Le, pe) {
                      var Be = ye(Le, pe),
                        De = ke(
                          Le,
                          h(
                            {
                              selectFromResult:
                                Le === x.skipToken || (pe != null && pe.skip)
                                  ? void 0
                                  : I,
                            },
                            pe
                          )
                        );
                      return (
                        (0, w.useDebugValue)({
                          data: De.data,
                          status: De.status,
                          isLoading: De.isLoading,
                          isSuccess: De.isSuccess,
                          isError: De.isError,
                          error: De.error,
                        }),
                        (0, w.useMemo)(
                          function () {
                            return h(h({}, De), Be);
                          },
                          [De, Be]
                        )
                      );
                    },
                  };
                },
                buildMutationHook: function (Ne) {
                  return function (ye) {
                    var Ie = ye === void 0 ? {} : ye,
                      ke = Ie.selectFromResult,
                      Le = ke === void 0 ? _ : ke,
                      pe = Ie.fixedCacheKey,
                      Be = Z.endpoints[Ne],
                      De = Be.select,
                      Qe = Be.initiate,
                      ut = Re(),
                      zt = (0, w.useState)(),
                      Xe = zt[0],
                      rn = zt[1];
                    (0, w.useEffect)(
                      function () {
                        return function () {
                          (Xe != null && Xe.arg.fixedCacheKey) ||
                            Xe == null ||
                            Xe.reset();
                        };
                      },
                      [Xe]
                    );
                    var Sn = (0, w.useCallback)(
                        function (Ln) {
                          var Xn = ut(Qe(Ln, { fixedCacheKey: pe }));
                          return rn(Xn), Xn;
                        },
                        [ut, Qe, pe]
                      ),
                      sr = (Xe || {}).requestId,
                      Ut = (0, w.useMemo)(
                        function () {
                          return (0, g.createSelector)(
                            [
                              De({
                                fixedCacheKey: pe,
                                requestId: Xe == null ? void 0 : Xe.requestId,
                              }),
                            ],
                            Le
                          );
                        },
                        [De, Xe, Le, pe]
                      ),
                      Ze = dt(Ut, C.shallowEqual),
                      Wt =
                        pe == null
                          ? Xe == null
                            ? void 0
                            : Xe.arg.originalArgs
                          : void 0,
                      bn = (0, w.useCallback)(
                        function () {
                          le(function () {
                            Xe && rn(void 0),
                              pe &&
                                ut(
                                  Z.internalActions.removeMutationResult({
                                    requestId: sr,
                                    fixedCacheKey: pe,
                                  })
                                );
                          });
                        },
                        [ut, pe, Xe, sr]
                      );
                    (0, w.useDebugValue)({
                      endpointName: Ze.endpointName,
                      data: Ze.data,
                      status: Ze.status,
                      isLoading: Ze.isLoading,
                      isSuccess: Ze.isSuccess,
                      isError: Ze.isError,
                      error: Ze.error,
                    });
                    var ot = (0, w.useMemo)(
                      function () {
                        return v(h({}, Ze), { originalArgs: Wt, reset: bn });
                      },
                      [Ze, Wt, bn]
                    );
                    return (0, w.useMemo)(
                      function () {
                        return [Sn, ot];
                      },
                      [Sn, ot]
                    );
                  };
                },
                usePrefetch: function (Ne, ye) {
                  var Ie = Re(),
                    ke = P(ye);
                  return (0, w.useCallback)(
                    function (Le, pe) {
                      return Ie(Z.util.prefetch(Ne, Le, h(h({}, ke), pe)));
                    },
                    [Ne, Ie, ke]
                  );
                },
              };
              function Yn(Ne, ye, Ie) {
                if (ye != null && ye.endpointName && Ne.isUninitialized) {
                  var ke = ye.endpointName,
                    Le = Gn.endpointDefinitions[ke];
                  In({
                    queryArgs: ye.originalArgs,
                    endpointDefinition: Le,
                    endpointName: ke,
                  }) ===
                    In({
                      queryArgs: Ie,
                      endpointDefinition: Le,
                      endpointName: ke,
                    }) && (ye = void 0);
                }
                Ie === x.skipToken && (ye = void 0);
                var pe = Ne.isSuccess ? Ne.data : ye == null ? void 0 : ye.data;
                pe === void 0 && (pe = Ne.data);
                var Be = pe !== void 0,
                  De = Ne.isLoading,
                  Qe = !Be && De,
                  ut = Ne.isSuccess || (De && Be);
                return v(h({}, Ne), {
                  data: pe,
                  currentData: Ne.data,
                  isFetching: De,
                  isLoading: Qe,
                  isSuccess: ut,
                });
              }
            })({
              api: D,
              moduleOptions: {
                batch: Oe,
                useDispatch: se,
                useSelector: Fe,
                useStore: Pe,
                unstable__sideEffectsInRender: nn,
              },
              serializeQueryArgs: j.serializeQueryArgs,
              context: U,
            }),
            ue = W.buildQueryHooks,
            ee = W.buildMutationHook;
          return (
            H(G, { usePrefetch: W.usePrefetch }),
            H(U, { batch: Oe }),
            {
              injectEndpoint: function (J, Z) {
                if (Z.type === O.query) {
                  var Te = ue(J),
                    le = Te.useQuery,
                    Re = Te.useLazyQuery;
                  H(G.endpoints[J], {
                    useQuery: le,
                    useLazyQuery: Re,
                    useLazyQuerySubscription: Te.useLazyQuerySubscription,
                    useQueryState: Te.useQueryState,
                    useQuerySubscription: Te.useQuerySubscription,
                  }),
                    (D["use" + L(J) + "Query"] = le),
                    (D["useLazy" + L(J) + "Query"] = Re);
                } else if (Z.type === O.mutation) {
                  var dt = ee(J);
                  H(G.endpoints[J], { useMutation: dt }),
                    (D["use" + L(J) + "Mutation"] = dt);
                }
              },
            }
          );
        },
      };
    };
  b(e, m(bl));
  var re = m(gd),
    ie = m(S),
    oe = m(S),
    Ae = m(Cl),
    Ee = m(bl);
  function ae(z) {
    var Q = oe.default.useState(function () {
      var te;
      return (0, re.configureStore)({
        reducer: ((te = {}), (te[z.api.reducerPath] = z.api.reducer), te),
        middleware: function (Oe) {
          return Oe().concat(z.api.middleware);
        },
      });
    })[0];
    return (
      (0, ie.useEffect)(
        function () {
          return z.setupListeners === !1
            ? void 0
            : (0, Ee.setupListeners)(Q.dispatch, z.setupListeners);
        },
        [z.setupListeners, Q.dispatch]
      ),
      oe.default.createElement(
        Ae.Provider,
        { store: Q, context: z.context },
        z.children
      )
    );
  }
  var xe = (0, p.buildCreateApi)((0, p.coreModule)(), X());
})(ME);
(function (e) {
  e.exports = ME;
})(bN);
const Vl = Ws.createApi({
    reducerPath: "apiRTKQ",
    baseQuery: Ws.fetchBaseQuery({
      baseUrl: {}.VITE_BASE_URL,
      timeout: 2e4,
      prepareHeaders(e) {
        const t = localStorage.getItem("token") || "";
        return e.set("Authorization", `Bearer ${t}`), e;
      },
    }),
    tagTypes: ["pwd", "joke"],
    endpoints(e) {
      return {
        Joke: e.query({
          query: () => ({ url: "/joke" }),
          providesTags: () => [{ type: "joke", id: "all" }],
          keepUnusedDataFor: 60 * 60,
        }),
        Bing: e.query({
          query: () => ({ url: "/bing", params: { idx: 0, n: 8 } }),
          transformResponse(t) {
            return t.isOk || wC.warning(String(t.mes)), t;
          },
          keepUnusedDataFor: 60 * 60,
        }),
        register: e.mutation({
          query: (t) => ({ url: "/auth/register", method: "post", body: t }),
        }),
        login: e.mutation({
          query: (t) => ({ url: "/auth/login", method: "post", body: t }),
        }),
        pwd: e.query({
          query: (t) => ({ url: "/pwd/query", params: t }),
          providesTags: [{ type: "pwd", id: "all" }],
        }),
        pwdOne: e.query({
          query: (t) => `/pwd/query/${t}`,
          providesTags: (t, n, r) => [{ type: "pwd", id: r }],
        }),
        pwdDel: e.mutation({
          query: (t) => ({ url: `/pwd/delete/${t}`, method: "delete" }),
          invalidatesTags: (t, n, r) => [
            { type: "pwd", id: "all" },
            { type: "pwd", id: r },
          ],
        }),
        pwdSave: e.mutation({
          query: (t) => ({ url: "/pwd/save", method: "post", body: t }),
          invalidatesTags: (t, n, r) => [
            { type: "pwd", id: "all" },
            { type: "pwd", id: r.pwd_id },
          ],
        }),
      };
    },
  }),
  {
    useJokeQuery: bI,
    useBingQuery: CI,
    useRegisterMutation: EI,
    useLoginMutation: xI,
    usePwdQuery: OI,
    usePwdOneQuery: PI,
    usePwdDelMutation: RI,
    usePwdSaveMutation: kI,
  } = Vl,
  H0 = gr({
    name: "gallery",
    initialState: CN,
    reducers: {
      actIsShow(e, { payload: t }) {
        e.isShow = t;
      },
      actImgArr(e, { payload: t }) {
        e.imgArr = t;
      },
    },
  });
function CN() {
  return { isShow: !1, imgArr: [] };
}
const Ru = gr({
  name: "theme",
  initialState: EN,
  reducers: {
    actIsDark(e, { payload: t }) {
      e.isDark = Boolean(t);
    },
    actGalleryIsShow(e, { payload: t }) {
      e.galleryIsShow = t;
    },
    actGalleryList(e, { payload: t }) {
      e.galleryList = t;
    },
  },
});
function EN() {
  return { isDark: !1, galleryIsShow: !1, galleryList: [] };
}
const TE = eE({
  reducer: {
    [Vl.reducerPath]: Vl.reducer,
    [H0.name]: H0.reducer,
    [Ru.name]: Ru.reducer,
  },
  middleware(e) {
    return e().concat(Vl.middleware);
  },
});
CE(TE.dispatch);
const $E = zC,
  AE = MC,
  xN = "modulepreload",
  ON = function (e) {
    return "/vite-react/" + e;
  },
  q0 = {},
  En = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = ON(o)), o in q0)) return;
        q0[o] = !0;
        const a = o.endsWith(".css"),
          u = a ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = i.length - 1; c >= 0; c--) {
            const d = i[c];
            if (d.href === o && (!a || d.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const s = document.createElement("link");
        if (
          ((s.rel = a ? "stylesheet" : xN),
          a || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = o),
          document.head.appendChild(s),
          a)
        )
          return new Promise((c, d) => {
            s.addEventListener("load", c),
              s.addEventListener("error", () =>
                d(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };
function MI(e) {
  const t = (n) => {
    const r = (o) => o.map((a) => e[a] || a).join(" ") + " ";
    if (Array.isArray(n)) return r(n);
    if (typeof n == "string") {
      const o = n.replace(/ +/g, ",").split(",");
      return r(o);
    }
    const i = Object.keys(n).filter((o) => n[o]);
    return r(i);
  };
  return S.useRef(t).current;
}
function xn(e) {
  const t = ce.lazy(e);
  return gt(ce.Suspense, {
    fallback: gt(V$, { active: !0 }),
    children: gt(t, {}),
  });
}
function PN(e) {
  S.useEffect(() => {
    const t = matchMedia("(prefers-color-scheme: dark)");
    e(t);
    const n = new AbortController(),
      { signal: r } = n;
    return (
      t.addEventListener("change", () => e(t), { signal: r }), () => n.abort()
    );
  }, []);
}
function TI(e) {
  return (
    RN(e),
    S.useReducer(
      (t, n) => {
        try {
          const r = structuredClone(t);
          return n(r), r;
        } catch {
          throw new Error("useStructure can`t handle this type");
        }
      },
      e,
      (t) => t
    )
  );
}
function RN(e) {
  return Object.prototype.toString
    .call(e)
    .replace(/\[object (\w+)\]/, "$1")
    .toLocaleLowerCase();
}
function $I(e) {
  const t = S.useRef(null);
  return (
    S.useEffect(() => {
      const n = t.current;
      if (!(n instanceof HTMLElement))
        throw new Error("resizeRef??????????????????htmlelement");
      let r;
      const i = new ResizeObserver(
        ([
          {
            contentBoxSize: [{ inlineSize: o, blockSize: a }],
          },
        ]) => {
          typeof r == "function" && r(), (r = e({ width: o, height: a }));
        }
      );
      return (
        i.observe(n),
        () => {
          typeof r == "function" && r(), i.unobserve(n), i.disconnect();
        }
      );
    }, []),
    t
  );
}
const kN = ce.createContext(wp());
function wp() {
  return {
    state: { user: "", token: "", expiration: 0 },
    signIn(t, n = !1) {},
    signOut() {},
  };
}
const MN = ["/demo"],
  TN = [
    {
      path: "",
      element: gt($N, {}),
      children: [
        { path: "*", element: gt(ph, { to: "/404", replace: !0 }) },
        {
          path: "login",
          element: xn(() =>
            En(
              () => import("./index-6e9e969c.js"),
              [
                "assets/index-6e9e969c.js",
                "assets/class-particle-d627ccf9.js",
                "assets/index-e4c4efc2.js",
                "assets/index-c63f4739.js",
                "assets/index-9b59e8d6.js",
                "assets/EllipsisOutlined-c77cd364.js",
                "assets/index-21468f8e.js",
                "assets/button-17c006b5.js",
                "assets/index-c10e5a9a.js",
                "assets/useFlexGapSupport-f958fbc2.js",
                "assets/index-92903092.js",
                "assets/Dropdown-903d5d2b.js",
                "assets/AntdIcon-7a21e915.js",
                "assets/index-449c7031.css",
              ]
            )
          ),
          handle: { title: "??????" },
        },
        {
          path: "",
          element: xn(() =>
            En(
              () => import("./index-e0954e2d.js"),
              [
                "assets/index-e0954e2d.js",
                "assets/ssw-3afda698.js",
                "assets/EllipsisOutlined-c77cd364.js",
                "assets/index-21468f8e.js",
                "assets/index-011e8102.js",
                "assets/index-9b59e8d6.js",
                "assets/button-17c006b5.js",
                "assets/fh-ac23ad71.js",
                "assets/index-a731edb4.js",
                "assets/Sider-bb03e72c.js",
                "assets/extendsObject-d0768a55.js",
                "assets/index-c10e5a9a.js",
                "assets/useFlexGapSupport-f958fbc2.js",
                "assets/AntdIcon-7a21e915.js",
                "assets/index-8f606165.css",
              ]
            )
          ),
          children: [
            {
              path: "",
              element: xn(() =>
                En(
                  () => import("./index-34dfece7.js"),
                  [
                    "assets/index-34dfece7.js",
                    "assets/index-92903092.js",
                    "assets/EllipsisOutlined-c77cd364.js",
                    "assets/index-21468f8e.js",
                    "assets/Dropdown-903d5d2b.js",
                    "assets/index-be505143.js",
                    "assets/useFlexGapSupport-f958fbc2.js",
                    "assets/button-17c006b5.js",
                    "assets/index-8542f2b6.js",
                    "assets/ssw-3afda698.js",
                    "assets/index-011e8102.js",
                    "assets/index-9b59e8d6.js",
                    "assets/AntdIcon-7a21e915.js",
                    "assets/snow-village-73853c49.js",
                    "assets/index-06d4c452.js",
                    "assets/index-c63f4739.js",
                    "assets/index-57c66347.css",
                  ]
                )
              ),
              handle: { title: "??????" },
            },
            {
              path: "404",
              element: xn(() =>
                En(
                  () => import("./index-0a1b8849.js"),
                  [
                    "assets/index-0a1b8849.js",
                    "assets/index-92903092.js",
                    "assets/EllipsisOutlined-c77cd364.js",
                    "assets/index-21468f8e.js",
                    "assets/Dropdown-903d5d2b.js",
                    "assets/index-8542f2b6.js",
                    "assets/button-17c006b5.js",
                    "assets/index-ba148f69.css",
                  ]
                )
              ),
              handle: { title: "404???NotFound" },
            },
            {
              path: "particle",
              element: xn(() =>
                En(
                  () => import("./index-fbd99847.js"),
                  [
                    "assets/index-fbd99847.js",
                    "assets/class-particle-d627ccf9.js",
                    "assets/index-a731edb4.js",
                    "assets/Sider-bb03e72c.js",
                    "assets/index-8bfaf2b4.css",
                  ]
                )
              ),
              handle: { title: "??????" },
            },
            {
              path: "snow",
              element: xn(() =>
                En(
                  () => import("./index-5d2a12ab.js"),
                  [
                    "assets/index-5d2a12ab.js",
                    "assets/class-particle-d627ccf9.js",
                    "assets/snow-village-73853c49.js",
                    "assets/index-21468f8e.js",
                    "assets/index-a731edb4.js",
                    "assets/Sider-bb03e72c.js",
                    "assets/index-f9103588.css",
                  ]
                )
              ),
              handle: { title: "??????" },
            },
            {
              path: "form",
              element: xn(() =>
                En(
                  () => import("./index-aca3fbd3.js"),
                  [
                    "assets/index-aca3fbd3.js",
                    "assets/fh-ac23ad71.js",
                    "assets/index-8a167e7a.css",
                  ]
                )
              ),
              handle: { title: "??????" },
            },
            {
              path: "bottle",
              element: xn(() =>
                En(
                  () => import("./index-9e21ba1b.js"),
                  ["assets/index-9e21ba1b.js", "assets/index-0f04e2c6.css"]
                )
              ),
              handle: { title: "??????" },
            },
            {
              path: "magnifier",
              element: xn(() =>
                En(
                  () => import("./index-6d4aa307.js"),
                  ["assets/index-6d4aa307.js", "assets/index-029fcde1.css"]
                )
              ),
              handle: { title: "?????????" },
            },
            {
              path: "threejs",
              element: xn(() =>
                En(
                  () => import("./index-bbf3916b.js"),
                  [
                    "assets/index-bbf3916b.js",
                    "assets/three-5a9ecf94.js",
                    "assets/index-74755bb0.css",
                  ]
                )
              ),
              handle: { title: "threejs" },
            },
            {
              path: "table",
              element: xn(() =>
                En(
                  () => import("./index-ada4243b.js"),
                  [
                    "assets/index-ada4243b.js",
                    "assets/button-17c006b5.js",
                    "assets/index-21468f8e.js",
                    "assets/index-e4c4efc2.js",
                    "assets/index-c63f4739.js",
                    "assets/index-9b59e8d6.js",
                    "assets/EllipsisOutlined-c77cd364.js",
                    "assets/index-c10e5a9a.js",
                    "assets/useFlexGapSupport-f958fbc2.js",
                    "assets/index-be505143.js",
                    "assets/index-011e8102.js",
                    "assets/extendsObject-d0768a55.js",
                    "assets/Sider-bb03e72c.js",
                    "assets/Dropdown-903d5d2b.js",
                    "assets/index-06d4c452.js",
                  ]
                )
              ),
              handle: { title: "??????" },
            },
          ],
        },
        {
          path: "demo",
          element: xn(() =>
            En(
              () => import("./index-c17cb8d8.js"),
              [
                "assets/index-c17cb8d8.js",
                "assets/index-be505143.js",
                "assets/useFlexGapSupport-f958fbc2.js",
                "assets/button-17c006b5.js",
                "assets/index-21468f8e.js",
                "assets/index-3019a20b.css",
              ]
            )
          ),
          handle: { title: "demo" },
          children: [{ path: "card", element: gt(vx, {}) }],
        },
      ],
    },
  ];
function $N() {
  const e = A2(),
    t = S.useRef(0),
    [n, r] = S.useReducer(
      (s, c) => {
        try {
          const d = structuredClone(s);
          return c(d), d;
        } catch {
          throw new Error("structuredClone can`t handle this type");
        }
      },
      wp().state,
      FN
    ),
    i = () => {
      clearTimeout(t.current),
        localStorage.removeItem("auth"),
        localStorage.removeItem("token"),
        r((s) => Object.assign(s, wp().state));
    },
    o = ({ user: s, token: c, expiration: d }, f = !1) => {
      clearTimeout(t.current), (t.current = setTimeout(i, d - Date.now()));
      const h = { user: s, token: c, expiration: d };
      f &&
        (localStorage.setItem("auth", JSON.stringify(h)),
        localStorage.setItem("token", c)),
        r((v) => Object.assign(v, h));
    },
    a = S.useRef({ signOut: i, signIn: o }),
    u = x2(),
    l = S.useMemo(() => {
      var d;
      const s = Boolean(n.expiration),
        c = ((d = e.at(-1)) == null ? void 0 : d.pathname) || "";
      return c === "/login"
        ? s
          ? gt(ph, { to: "/", replace: !0 })
          : u
        : AN(c) || s
        ? u
        : gt(ph, { to: "/login", replace: !0 });
    }, [n, u, e]);
  return (
    S.useEffect(() => {
      var c, d;
      const s =
        (d = (c = e.at(-1)) == null ? void 0 : c.handle) == null
          ? void 0
          : d.title;
      typeof s == "string" && (document.title = s);
    }, [e]),
    gt(kN.Provider, { value: { state: n, ...a.current }, children: l })
  );
}
function AN(e) {
  return MN.some((t) => e.startsWith(t));
}
function FN(e) {
  try {
    const t = localStorage.getItem("auth");
    if (!t) return e;
    const n = JSON.parse(t),
      { user: r, token: i, expiration: o } = n;
    if (!r || !i || !o) throw new TypeError("one or more fields are empty");
    if (typeof r != "string") throw new TypeError("field user is not a string");
    if (typeof i != "string")
      throw new TypeError("field token is not a string");
    if (typeof o != "number")
      throw new TypeError("field expiration isn`t a number");
    if (o - Date.now() < 1e3 * 60 * 5)
      throw new Error("Login information has expired");
    return { user: r, token: i, expiration: o };
  } catch (t) {
    console.error(t),
      localStorage.removeItem("auth"),
      localStorage.removeItem("token"),
      wC.warning("?????????????????????");
  }
  return e;
}
function _N(e, t) {
  return ce.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    let a = document.body;
    const u = document.querySelector(t || "body");
    return (
      u instanceof HTMLElement && (a = u),
      or.createPortal(gt(e, { ...o, ref: r, children: i }), a)
    );
  });
}
const NN = H2(TN);
function IN() {
  const { darkAlgorithm: e, defaultAlgorithm: t } = e$,
    n = $E();
  PN(({ matches: u }) => n(Ru.actions.actIsDark(u)));
  const r = _N(LN),
    { isDark: i, galleryIsShow: o } = AE((u) => u.theme),
    a = S.useMemo(() => {
      if (o) return gt(r, {});
    }, [o]);
  return mx(vb, {
    locale: E3,
    theme: { algorithm: i ? e : t },
    children: [gt(_2, { router: NN }), a],
  });
}
function LN() {
  const [e, t] = S.useState(!1),
    { galleryIsShow: n, galleryList: r } = AE((u) => u.theme);
  S.useEffect(() => t(n), [n]);
  const i = S.useMemo(() => r.map((u) => gt(Jy, { src: u }, u)), [r]),
    o = $E(),
    a = S.useMemo(() => {
      const u = (l) => {
        t(l),
          l
            ? o(Ru.actions.actGalleryIsShow(!0))
            : setTimeout(() => o(Ru.actions.actGalleryIsShow(!1)), 300);
      };
      return gt(Jy.PreviewGroup, {
        preview: { visible: e, onVisibleChange: u },
        children: i,
      });
    }, [e, i]);
  return gt("div", { className: "none", children: a });
}
function Sp(e, t) {
  return (
    (Sp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Sp(e, t)
  );
}
function uf(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Sp(e, t);
}
var lf = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (r) {
      var i = this,
        o = r || function () {};
      return (
        this.listeners.push(o),
        this.onSubscribe(),
        function () {
          (i.listeners = i.listeners.filter(function (a) {
            return a !== o;
          })),
            i.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function je() {
  return (
    (je = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    je.apply(this, arguments)
  );
}
var FE = typeof window > "u";
function Ht() {}
function DN(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jN(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ks(e) {
  return Array.isArray(e) ? e : [e];
}
function zN(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function yd(e, t, n) {
  return sf(e)
    ? typeof t == "function"
      ? je({}, n, { queryKey: e, queryFn: t })
      : je({}, t, { queryKey: e })
    : e;
}
function qr(e, t, n) {
  return sf(e) ? [je({}, t, { queryKey: e }), n] : [e || {}, t];
}
function UN(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function B0(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    a = e.predicate,
    u = e.queryKey,
    l = e.stale;
  if (sf(u)) {
    if (r) {
      if (t.queryHash !== um(u, t.options)) return !1;
    } else if (!Gs(t.queryKey, u)) return !1;
  }
  var s = UN(n, o);
  if (s === "none") return !1;
  if (s !== "all") {
    var c = t.isActive();
    if ((s === "active" && !c) || (s === "inactive" && c)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (a && !a(t))
  );
}
function V0(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (sf(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if ($i(t.options.mutationKey) !== $i(o)) return !1;
    } else if (!Gs(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function um(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || $i;
  return n(e);
}
function $i(e) {
  var t = Ks(e);
  return HN(t);
}
function HN(e) {
  return JSON.stringify(e, function (t, n) {
    return bp(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Gs(e, t) {
  return _E(Ks(e), Ks(t));
}
function _E(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !_E(e[n], t[n]);
      })
    : !1;
}
function NE(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (bp(e) && bp(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        a = n ? [] : {},
        u = 0,
        l = 0;
      l < o;
      l++
    ) {
      var s = n ? l : i[l];
      (a[s] = NE(e[s], t[s])), a[s] === e[s] && u++;
    }
    return r === o && u === r ? e : a;
  }
  return t;
}
function AI(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function bp(e) {
  if (!Q0(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!Q0(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Q0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function sf(e) {
  return typeof e == "string" || Array.isArray(e);
}
function qN(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function W0(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function IE() {
  if (typeof AbortController == "function") return new AbortController();
}
var BN = (function (e) {
    uf(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!FE && (o = window) != null && o.addEventListener) {
            var a = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", a, !1),
              window.addEventListener("focus", a, !1),
              function () {
                window.removeEventListener("visibilitychange", a),
                  window.removeEventListener("focus", a);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          a = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (u) {
            typeof u == "boolean" ? a.setFocused(u) : a.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(lf),
  Ql = new BN(),
  VN = (function (e) {
    uf(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!FE && (o = window) != null && o.addEventListener) {
            var a = function () {
              return i();
            };
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", a, !1),
              function () {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", a);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          a = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (u) {
            typeof u == "boolean" ? a.setOnline(u) : a.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(lf),
  Wl = new VN();
function QN(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Ys(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var LE = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function wd(e) {
  return e instanceof LE;
}
var DE = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      a,
      u;
    (this.abort = t.abort),
      (this.cancel = function (f) {
        return i == null ? void 0 : i(f);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (f, h) {
        (a = f), (u = h);
      }));
    var l = function (h) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(h),
          o == null || o(),
          a(h));
      },
      s = function (h) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(h),
          o == null || o(),
          u(h));
      },
      c = function () {
        return new Promise(function (h) {
          (o = h), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      d = function f() {
        if (!n.isResolved) {
          var h;
          try {
            h = t.fn();
          } catch (v) {
            h = Promise.reject(v);
          }
          (i = function (y) {
            if (
              !n.isResolved &&
              (s(new LE(y)), n.abort == null || n.abort(), Ys(h))
            )
              try {
                h.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Ys(h)),
            Promise.resolve(h)
              .then(l)
              .catch(function (v) {
                var y, b;
                if (!n.isResolved) {
                  var m = (y = t.retry) != null ? y : 3,
                    p = (b = t.retryDelay) != null ? b : QN,
                    g = typeof p == "function" ? p(n.failureCount, v) : p,
                    w =
                      m === !0 ||
                      (typeof m == "number" && n.failureCount < m) ||
                      (typeof m == "function" && m(n.failureCount, v));
                  if (r || !w) {
                    s(v);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, v),
                    qN(g)
                      .then(function () {
                        if (!Ql.isFocused() || !Wl.isOnline()) return c();
                      })
                      .then(function () {
                        r ? s(v) : f();
                      });
                }
              });
        }
      };
    d();
  },
  WN = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : W0(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++)
            a[u] = arguments[u];
          i.schedule(function () {
            r.apply(void 0, a);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            W0(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (o) {
                  r.notifyFn(o);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  Rt = new WN(),
  jE = console;
function zE() {
  return jE;
}
function KN(e) {
  jE = e;
}
var GN = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = je({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          jN(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          a,
          u = this.state.data,
          l = DN(r, u);
        return (
          (o = (a = this.options).isDataEqual) != null && o.call(a, u, l)
            ? (l = u)
            : this.options.structuralSharing !== !1 && (l = NE(u, l)),
          this.dispatch({
            data: l,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          l
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(Ht).catch(Ht) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !zN(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          a,
          u,
          l;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var s;
            return (
              (s = this.retryer) == null || s.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var c = this.observers.find(function (p) {
            return p.options.queryFn;
          });
          c && this.setOptions(c.options);
        }
        var d = Ks(this.queryKey),
          f = IE(),
          h = { queryKey: d, pageParam: void 0, meta: this.meta };
        Object.defineProperty(h, "signal", {
          enumerable: !0,
          get: function () {
            if (f) return (o.abortSignalConsumed = !0), f.signal;
          },
        });
        var v = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(h))
              : Promise.reject("Missing queryFn");
          },
          y = {
            fetchOptions: i,
            options: this.options,
            queryKey: d,
            state: this.state,
            fetchFn: v,
            meta: this.meta,
          };
        if ((a = this.options.behavior) != null && a.onFetch) {
          var b;
          (b = this.options.behavior) == null || b.onFetch(y);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((u = y.fetchOptions) == null ? void 0 : u.meta))
        ) {
          var m;
          this.dispatch({
            type: "fetch",
            meta: (m = y.fetchOptions) == null ? void 0 : m.meta,
          });
        }
        return (
          (this.retryer = new DE({
            fn: y.fetchFn,
            abort: f == null || (l = f.abort) == null ? void 0 : l.bind(f),
            onSuccess: function (g) {
              o.setData(g),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(g, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (g) {
              (wd(g) && g.silent) || o.dispatch({ type: "error", error: g }),
                wd(g) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(g, o),
                  zE().error(g)),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: y.options.retry,
            retryDelay: y.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          Rt.batch(function () {
            i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          a = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          u = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: u ? a ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: u ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, a;
        switch (i.type) {
          case "failed":
            return je({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return je({}, r, { isPaused: !0 });
          case "continue":
            return je({}, r, { isPaused: !1 });
          case "fetch":
            return je(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return je({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (a = i.dataUpdatedAt) != null ? a : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var u = i.error;
            return wd(u) && u.revert && this.revertState
              ? je({}, this.revertState)
              : je({}, r, {
                  error: u,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return je({}, r, { isInvalidated: !0 });
          case "setState":
            return je({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  YN = (function (e) {
    uf(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, a) {
        var u,
          l = o.queryKey,
          s = (u = o.queryHash) != null ? u : um(l, o),
          c = this.get(s);
        return (
          c ||
            ((c = new GN({
              cache: this,
              queryKey: l,
              queryHash: s,
              options: i.defaultQueryOptions(o),
              state: a,
              defaultOptions: i.getQueryDefaults(l),
              meta: o.meta,
            })),
            this.add(c)),
          c
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (a) {
            return a !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        Rt.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var a = qr(i, o),
          u = a[0];
        return (
          typeof u.exact > "u" && (u.exact = !0),
          this.queries.find(function (l) {
            return B0(u, l);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var a = qr(i, o),
          u = a[0];
        return Object.keys(u).length > 0
          ? this.queries.filter(function (l) {
              return B0(u, l);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        Rt.batch(function () {
          o.listeners.forEach(function (a) {
            a(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        Rt.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        Rt.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(lf),
  XN = (function () {
    function e(n) {
      (this.options = je({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || ZN()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(Ht).catch(Ht))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          a = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (a = a
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (u) {
                u !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: u,
                    variables: r.state.variables,
                  });
              }))),
          a
            .then(function () {
              return r.executeMutation();
            })
            .then(function (u) {
              (i = u),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (u) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    u,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                zE().error(u),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          u,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          u,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: u }), u);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new DE({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = JN(this.state, r)),
          Rt.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function ZN() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function JN(e, t) {
  switch (t.type) {
    case "failed":
      return je({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return je({}, e, { isPaused: !0 });
    case "continue":
      return je({}, e, { isPaused: !1 });
    case "loading":
      return je({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return je({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return je({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return je({}, e, t.state);
    default:
      return e;
  }
}
var eI = (function (e) {
  uf(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, o, a) {
      var u = new XN({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: a,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(u), u;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (o) {
        return o !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      Rt.batch(function () {
        i.mutations.forEach(function (o) {
          i.remove(o);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (o) {
          return V0(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return V0(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      Rt.batch(function () {
        o.listeners.forEach(function (a) {
          a(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (o) {
        return o.state.isPaused;
      });
      return Rt.batch(function () {
        return i.reduce(function (o, a) {
          return o.then(function () {
            return a.continue().catch(Ht);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(lf);
function tI() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          a,
          u,
          l =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          s =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          c = s == null ? void 0 : s.pageParam,
          d = (s == null ? void 0 : s.direction) === "forward",
          f = (s == null ? void 0 : s.direction) === "backward",
          h = ((a = t.state.data) == null ? void 0 : a.pages) || [],
          v = ((u = t.state.data) == null ? void 0 : u.pageParams) || [],
          y = IE(),
          b = y == null ? void 0 : y.signal,
          m = v,
          p = !1,
          g =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          w = function (R, $, F, N) {
            return (
              (m = N ? [$].concat(m) : [].concat(m, [$])),
              N ? [F].concat(R) : [].concat(R, [F])
            );
          },
          x = function (R, $, F, N) {
            if (p) return Promise.reject("Cancelled");
            if (typeof F > "u" && !$ && R.length) return Promise.resolve(R);
            var _ = {
                queryKey: t.queryKey,
                signal: b,
                pageParam: F,
                meta: t.meta,
              },
              I = g(_),
              L = Promise.resolve(I).then(function (q) {
                return w(R, F, q, N);
              });
            if (Ys(I)) {
              var H = L;
              H.cancel = I.cancel;
            }
            return L;
          },
          C;
        if (!h.length) C = x([]);
        else if (d) {
          var E = typeof c < "u",
            k = E ? c : K0(t.options, h);
          C = x(h, E, k);
        } else if (f) {
          var M = typeof c < "u",
            T = M ? c : nI(t.options, h);
          C = x(h, M, T, !0);
        } else
          (function () {
            m = [];
            var O = typeof t.options.getNextPageParam > "u",
              R = l && h[0] ? l(h[0], 0, h) : !0;
            C = R ? x([], O, v[0]) : Promise.resolve(w([], v[0], h[0]));
            for (
              var $ = function (_) {
                  C = C.then(function (I) {
                    var L = l && h[_] ? l(h[_], _, h) : !0;
                    if (L) {
                      var H = O ? v[_] : K0(t.options, I);
                      return x(I, O, H);
                    }
                    return Promise.resolve(w(I, v[_], h[_]));
                  });
                },
                F = 1;
              F < h.length;
              F++
            )
              $(F);
          })();
        var A = C.then(function (O) {
            return { pages: O, pageParams: m };
          }),
          P = A;
        return (
          (P.cancel = function () {
            (p = !0), y == null || y.abort(), Ys(C) && C.cancel();
          }),
          A
        );
      };
    },
  };
}
function K0(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function nI(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var rI = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new YN()),
        (this.mutationCache = n.mutationCache || new eI()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = Ql.subscribe(function () {
          Ql.isFocused() &&
            Wl.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Wl.subscribe(function () {
            Ql.isFocused() &&
              Wl.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = qr(r, i),
          a = o[0];
        return (a.fetching = !0), this.queryCache.findAll(a).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(je({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              a = i.state,
              u = a.data;
            return [o, u];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var a = yd(r),
          u = this.defaultQueryOptions(a);
        return this.queryCache.build(this, u).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var a = this;
        return Rt.batch(function () {
          return a
            .getQueryCache()
            .findAll(r)
            .map(function (u) {
              var l = u.queryKey;
              return [l, a.setQueryData(l, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = qr(r, i),
          a = o[0],
          u = this.queryCache;
        Rt.batch(function () {
          u.findAll(a).forEach(function (l) {
            u.remove(l);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var a = this,
          u = qr(r, i, o),
          l = u[0],
          s = u[1],
          c = this.queryCache,
          d = je({}, l, { active: !0 });
        return Rt.batch(function () {
          return (
            c.findAll(l).forEach(function (f) {
              f.reset();
            }),
            a.refetchQueries(d, s)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var a = this,
          u = qr(r, i, o),
          l = u[0],
          s = u[1],
          c = s === void 0 ? {} : s;
        typeof c.revert > "u" && (c.revert = !0);
        var d = Rt.batch(function () {
          return a.queryCache.findAll(l).map(function (f) {
            return f.cancel(c);
          });
        });
        return Promise.all(d).then(Ht).catch(Ht);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var a,
          u,
          l,
          s = this,
          c = qr(r, i, o),
          d = c[0],
          f = c[1],
          h = je({}, d, {
            active:
              (a = (u = d.refetchActive) != null ? u : d.active) != null
                ? a
                : !0,
            inactive: (l = d.refetchInactive) != null ? l : !1,
          });
        return Rt.batch(function () {
          return (
            s.queryCache.findAll(d).forEach(function (v) {
              v.invalidate();
            }),
            s.refetchQueries(h, f)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var a = this,
          u = qr(r, i, o),
          l = u[0],
          s = u[1],
          c = Rt.batch(function () {
            return a.queryCache.findAll(l).map(function (f) {
              return f.fetch(
                void 0,
                je({}, s, {
                  meta: { refetchPage: l == null ? void 0 : l.refetchPage },
                })
              );
            });
          }),
          d = Promise.all(c).then(Ht);
        return (s != null && s.throwOnError) || (d = d.catch(Ht)), d;
      }),
      (t.fetchQuery = function (r, i, o) {
        var a = yd(r, i, o),
          u = this.defaultQueryOptions(a);
        typeof u.retry > "u" && (u.retry = !1);
        var l = this.queryCache.build(this, u);
        return l.isStaleByTime(u.staleTime)
          ? l.fetch(u)
          : Promise.resolve(l.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(Ht).catch(Ht);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var a = yd(r, i, o);
        return (a.behavior = tI()), this.fetchQuery(a);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(Ht).catch(Ht);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = Rt.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(Ht).catch(Ht);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (a) {
          return $i(r) === $i(a.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return Gs(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (a) {
          return $i(r) === $i(a.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return Gs(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = je(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = um(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : je(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  iI = ou.unstable_batchedUpdates;
Rt.setBatchNotifyFunction(iI);
var oI = console;
KN(oI);
var G0 = ce.createContext(void 0),
  UE = ce.createContext(!1);
function HE(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = G0),
      window.ReactQueryClientContext)
    : G0;
}
var FI = function () {
    var t = ce.useContext(HE(ce.useContext(UE)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  aI = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    ce.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var a = HE(i);
    return ce.createElement(
      UE.Provider,
      { value: i },
      ce.createElement(a.Provider, { value: n }, o)
    );
  };
const uI = new rI({ defaultOptions: { queries: lI(), mutations: sI() } });
function lI() {
  return {
    staleTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: !1,
    retryDelay(e) {
      return Math.min(1e3 * 2 ** e, 3e4);
    },
  };
}
function sI() {
  return {};
}
const cI = document.querySelector("#root");
Sd.createRoot(cI).render(
  gt(ce.StrictMode, {
    children: gt(LC, {
      store: TE,
      children: gt(aI, { client: uI, children: gt(IN, {}) }),
    }),
  })
);
export {
  _e as $,
  tn as A,
  li as B,
  kN as C,
  vI as D,
  vu as E,
  vx as F,
  BT as G,
  ZT as H,
  WT as I,
  Uo as J,
  At as K,
  T4 as L,
  wC as M,
  Yk as N,
  xo as O,
  kS as P,
  Xk as Q,
  ce as R,
  lT as S,
  rM as T,
  jo as U,
  xv as V,
  eb as W,
  K as X,
  de as Y,
  ne as Z,
  gb as _,
  gt as a,
  SS as a$,
  we as a0,
  qb as a1,
  Er as a2,
  It as a3,
  Ov as a4,
  Pv as a5,
  Ar as a6,
  Fr as a7,
  gh as a8,
  wt as a9,
  eC as aA,
  $E as aB,
  AE as aC,
  Ru as aD,
  x2 as aE,
  ft as aF,
  VM as aG,
  ky as aH,
  GA as aI,
  vM as aJ,
  oM as aK,
  r$ as aL,
  a$ as aM,
  tR as aN,
  O4 as aO,
  gR as aP,
  fR as aQ,
  TS as aR,
  wR as aS,
  vb as aT,
  mI as aU,
  sm as aV,
  dI as aW,
  uy as aX,
  MS as aY,
  A2 as aZ,
  fI as a_,
  or as aa,
  oR as ab,
  Ms as ac,
  BM as ad,
  YM as ae,
  Ab as af,
  QM as ag,
  V$ as ah,
  J$ as ai,
  jv as aj,
  rb as ak,
  Wb as al,
  e$ as am,
  Tr as an,
  Kl as ao,
  h$ as ap,
  yI as aq,
  aR as ar,
  Fn as as,
  ou as at,
  bh as au,
  pR as av,
  ha as aw,
  Vb as ax,
  Lk as ay,
  Qb as az,
  $I as b,
  TN as b0,
  bI as b1,
  CI as b2,
  Jy as b3,
  TI as b4,
  SI as b5,
  dA as b6,
  hI as b7,
  iC as b8,
  t4 as b9,
  pb as ba,
  WS as bb,
  RS as bc,
  Jb as bd,
  oA as be,
  wI as bf,
  OI as bg,
  kI as bh,
  RI as bi,
  uf as bj,
  je as bk,
  Ht as bl,
  FE as bm,
  jN as bn,
  zN as bo,
  Ql as bp,
  NE as bq,
  zE as br,
  AI as bs,
  wd as bt,
  Rt as bu,
  lf as bv,
  FI as bw,
  yd as bx,
  xI as c,
  EI as d,
  Lv as e,
  GM as f,
  Ac as g,
  en as h,
  be as i,
  mx as j,
  gI as k,
  Ic as l,
  Ho as m,
  w4 as n,
  Rv as o,
  nb as p,
  oT as q,
  S as r,
  uT as s,
  Du as t,
  MI as u,
  iR as v,
  Rs as w,
  ve as x,
  pI as y,
  N4 as z,
};
