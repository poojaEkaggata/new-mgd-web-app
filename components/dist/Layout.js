"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var Footer_1 = require("../slices/Footer");
/* class Layout extends Component
{
  render ()
  {
    const { children } = this.props;
    return (
        <>
            <div className='layout'>
                <Header />
                {children}
            </div>
        </>
    );
  }
} */
/* const Layout = ({children}) =>
{
    return (
        <>
            <div className='layout'>
                <Header />
                {children}
            </div>
        </>
    );
}

export default Layout; */
/* export default function Layout({children})
{
  return (
    <>
      <Header />
        <main>
            {children}
        </main>
      <Footer />
    </>
  );
} */
exports.Layout = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", __assign({}, props), children),
        react_1["default"].createElement(Footer_1["default"], null)));
};
