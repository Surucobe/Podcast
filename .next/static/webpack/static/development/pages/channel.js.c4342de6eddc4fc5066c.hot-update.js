webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./component/PodcastPlayer.jsx":
/*!*************************************!*\
  !*** ./component/PodcastPlayer.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Podacst; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_stars_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/stars.svg */ "./public/static/stars.svg");
/* harmony import */ var _public_static_stars_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_stars_svg__WEBPACK_IMPORTED_MODULE_8__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Podacst =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Podacst, _React$Component);

  function Podacst() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Podacst);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Podacst).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Podacst, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          clip = _this$props.clip;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        style: {
          backgroundImage: "url(".concat(_public_static_stars_svg__WEBPACK_IMPORTED_MODULE_8___default.a, ")")
        },
        className: "jsx-3364101357" + " " + "podcast-container"
      }, __jsx("a", {
        onClick: onClose,
        className: "jsx-3364101357" + " " + "close"
      }, " Back "), __jsx("img", {
        src: clip.urls.image || clip.urls.wave_img,
        alt: clip.title,
        className: "jsx-3364101357" + " " + "hero"
      }), __jsx("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-3364101357"
      }, __jsx("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-3364101357"
      })), __jsx("p", {
        className: "jsx-3364101357"
      }, "comments: ".concat(clip.counts.comments, " likes: ").concat(clip.counts.likes, " plays: ").concat(clip.counts.plays))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3364101357"
      }, ".hero.jsx-3364101357{background-color:black;width:250px;height:250px;}.podcast-container.jsx-3364101357{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;background-color:#000;}.close.jsx-3364101357{justify-self:left;position:absolute;left:15px;top:15px;}audio.jsx-3364101357{outline:0;margin:20px 0;}p.jsx-3364101357{color:whitesmoke;}a.jsx-3364101357{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcUG9kY2FzdFBsYXllci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQixBQUdzQyxBQUtYLEFBVU0sQUFNUixBQUlPLEFBR0YsVUFORCxFQWhCSCxHQXVCYixFQUhBLENBVm9CLEtBZk4sQUFNQyxDQWdCZixXQXJCZSxDQWVILFVBQ0QsRUFmWCxPQWdCQSwwQ0FYd0IsOEVBQ0gsNkZBQ0ksbUdBQ0wsa0JBQ0ksc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFybG9uXFxEb3dubG9hZHNcXENvZGluZ1xcanNfcHJvamVjdHNcXHBvZGNhc3RcXGNvbXBvbmVudFxcUG9kY2FzdFBsYXllci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgc3RhcnMgZnJvbSAnLi4vcHVibGljL3N0YXRpYy9zdGFycy5zdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2RhY3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgb25DbG9zZSwgY2xpcCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3QtY29udGFpbmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3RhcnN9KWAgfX0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsgb25DbG9zZSB9IGNsYXNzTmFtZT1cImNsb3NlXCIgPiBCYWNrIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXsgY2xpcC51cmxzLmltYWdlIHx8IGNsaXAudXJscy53YXZlX2ltZyB9IFxyXG4gICAgICAgICAgICBhbHQ9eyBjbGlwLnRpdGxlIH0gY2xhc3NOYW1lPVwiaGVyb1wiIC8+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT5cclxuICAgICAgICAgICAgICA8c291cmNlIHNyYz17IGNsaXAudXJscy5oaWdoX21wMyB9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgeyBgY29tbWVudHM6ICR7Y2xpcC5jb3VudHMuY29tbWVudHN9IGxpa2VzOiAke2NsaXAuY291bnRzLmxpa2VzfSBwbGF5czogJHtjbGlwLmNvdW50cy5wbGF5c31gIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5oZXJve1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb2RjYXN0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsb3Nle1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXVkaW97XHJcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marlon\\\\Downloads\\\\Coding\\\\js_projects\\\\podcast\\\\component\\\\PodcastPlayer.jsx */"));
    }
  }]);

  return Podacst;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.c4342de6eddc4fc5066c.hot-update.js.map