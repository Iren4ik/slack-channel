/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: \"Inter\", sans-serif;\n  background-color: #673070;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n}\n\nh1, h2, h3, p {\n  margin: 0;\n}\n\nh1, h2 {\n  font-weight: 700px;\n}\n\np {\n  font-weight: 400px;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n  display: flex;\n}\n\n#app {\n  display: flex;\n  margin: auto;\n  color: #000000;\n  min-height: 814px;\n  display: grid;\n  grid-template-columns: 262px 829px;\n  grid-template-rows: 63px 751px;\n}\n\n.sidebar .sidebar-header {\n  background-color: #D6C4DA;\n  border-top-left-radius: 10px;\n  border-bottom: 1px solid #bcaec1;\n  max-height: 63px;\n  padding: 16px 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  grid-area: 1/1/2/2;\n}\n.sidebar .sidebar-header .sidebar-title {\n  display: flex;\n  gap: 8px;\n}\n.sidebar .sidebar-header .sidebar-title h1 {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 29.05px;\n  letter-spacing: -0.01em;\n}\n.sidebar .sidebar-header .sidebar-title img {\n  width: 12px;\n}\n.sidebar .sidebar-header img {\n  width: 17px;\n}\n.sidebar .sidebar-main {\n  padding: 18px 12px 33px;\n  grid-area: 2/1/3/2;\n  background-color: #D6C4DA;\n  border-bottom-left-radius: 10px;\n  min-height: 751px;\n}\n.sidebar .sidebar-main .sidebar-menu {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar .sidebar-main .sidebar-menu .sidebar-menu-btn {\n  gap: 12px;\n  padding: 7px 0 0 19px;\n}\n.sidebar .sidebar-main .sidebar-menu .sidebar-menu-btn img {\n  width: 20px;\n}\n.sidebar .sidebar-main .sidebar-menu .sidebar-menu-btn p {\n  font-size: 20px;\n  line-height: 24.2px;\n  letter-spacing: -0.04em;\n  color: #464446;\n}\n.sidebar .sidebar-main .channels .channels-header {\n  gap: 17px;\n  margin: 18px 0 12px;\n}\n.sidebar .sidebar-main .channels .channels-header p {\n  font-size: 20px;\n  line-height: 24.2px;\n  letter-spacing: -0.04em;\n  color: #464446;\n}\n.sidebar .sidebar-main .channels .channels-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 65%;\n  max-height: 532px;\n  overflow: auto;\n  scrollbar-width: none;\n  max-width: 238px;\n}\n.sidebar .sidebar-main .channels .channels-list button {\n  gap: 16px;\n  padding: 8px 31px 8px 12px;\n  max-width: 238px;\n  max-height: 38px;\n}\n.sidebar .sidebar-main .channels .channels-list button img {\n  width: 18px;\n  height: 18px;\n}\n.sidebar .sidebar-main .channels .channels-list button p {\n  font-size: 18px;\n  line-height: 21.78px;\n  letter-spacing: 0.02em;\n  text-align: left;\n  color: #464446;\n  display: block;\n  max-width: 161px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.sidebar .sidebar-main .channels .channels-list button:focus {\n  background-color: #592365;\n  max-width: 238px;\n  border-radius: 8px;\n}\n.sidebar .sidebar-main .channels .channels-list button:focus p {\n  color: #FFFFFF;\n}\n.sidebar .sidebar-main .channels .rollup-icon {\n  transition: transform 0.3s ease;\n}\n.sidebar .sidebar-main .channels .rollup-icon.rotated {\n  transform: rotate(-90deg);\n}\n.sidebar .sidebar-main .channels .add-channel-btn {\n  gap: 16px;\n  padding: 8px 31px 8px 12px;\n}\n.sidebar .sidebar-main .channels .add-channel-btn p {\n  font-size: 18px;\n  line-height: 21.78px;\n  letter-spacing: 0.02em;\n  color: #464446;\n}\n.sidebar .sidebar-main .hidden {\n  display: none;\n}\n\n.chat .chat-header {\n  max-height: 63px;\n  border-bottom: 1px solid #bcaec1;\n  border-top-right-radius: 10px;\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px 19px 24px;\n  margin: 0;\n  grid-area: 1/2/2/3;\n}\n.chat .chat-header .chat-name {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.chat .chat-header .chat-name h2 {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 29.05px;\n  letter-spacing: -0.04em;\n}\n.chat .chat-header .chat-name .chat-header-lock {\n  width: 24px;\n  height: 24px;\n}\n.chat .chat-header .chat-settings {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n}\n.chat .chat-header .chat-settings .chat-setting {\n  max-height: 37px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid #E1E1E3;\n}\n.chat .chat-header .chat-settings .chat-participants {\n  display: flex;\n  gap: 5px;\n  padding: 6px 10px 5px 6px;\n}\n.chat .chat-header .chat-settings .chat-participants span {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19.36px;\n  letter-spacing: -0.045em;\n  color: #60605F;\n}\n.chat .chat-header .chat-settings .chat-participants .chat-participants-list {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n}\n.chat .chat-header .chat-settings .chat-participants .chat-participants-list li {\n  height: 26px;\n  position: relative;\n}\n.chat .chat-header .chat-settings .chat-participants .chat-participants-list li:not(:first-child) {\n  margin-left: -4px;\n}\n.chat .chat-header .chat-settings .chat-participants .chat-participants-list img {\n  width: 26px;\n  height: 26px;\n  border: 2px solid white;\n  border-radius: 4px;\n}\n.chat .chat-header .chat-settings .chat-earflap .icon-earflap {\n  padding: 0 8px 0 9px;\n  border-right: 1px solid #E1E1E3;\n}\n.chat .chat-header .chat-settings .chat-earflap .icon-arrow {\n  padding: 0 10px 0 11px;\n}\n.chat .chat-header .chat-settings .chat-document {\n  padding: 0 7.5px;\n}\n.chat .chat-header .chat-settings .chat-document img {\n  width: 22px;\n  height: 22px;\n}\n.chat .chat-container {\n  background-color: #FFFFFF;\n  border-bottom-right-radius: 10px;\n  grid-area: 2/2/3/3;\n  background-color: #FFFFFF;\n  min-height: 751px;\n}\n.chat .chat-container .chat-pinned {\n  width: 100%;\n  background-color: white;\n  height: 45px;\n  display: flex;\n  flex-direction: row;\n  padding-left: 24px;\n  border-bottom: 1px solid #e1e1e3;\n  gap: 24px;\n}\n.chat .chat-container .chat-pinned .pinned-btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n.chat .chat-container .chat-pinned .pinned-btn .btn-icon-pin {\n  width: 18px;\n  height: 18px;\n}\n.chat .chat-container .chat-pinned .pinned-btn .btn-icon-plus {\n  width: 14px;\n  height: 14px;\n}\n.chat .chat-container .chat-pinned .pinned-btn .pinned-btn-text {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19.36px;\n  letter-spacing: 0.01em;\n  color: #616060;\n}\n.chat .chat-container .chat-content {\n  padding: 40px 24px 40px;\n  overflow-y: auto;\n  background-color: white;\n  max-height: 510px;\n  scrollbar-width: none;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.chat .chat-container .chat-content .message {\n  display: flex;\n  gap: 11px;\n}\n.chat .chat-container .chat-content .message img {\n  border: 1px solid black;\n  max-width: 48px;\n  max-height: 48px;\n  min-width: 48px;\n  min-height: 48px;\n  border-radius: 10px;\n}\n.chat .chat-container .chat-content .message p {\n  margin: 0;\n}\n.chat .chat-container .chat-content .message .message-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.chat .chat-container .chat-content .message .message-container .message-info {\n  display: flex;\n  gap: 10px;\n}\n.chat .chat-container .chat-content .message .message-container .message-info .message-author {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 21.78px;\n}\n.chat .chat-container .chat-content .message .message-container .message-info .message-time {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19.36px;\n  letter-spacing: -0.035em;\n  color: #616060;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji {\n  display: flex;\n  gap: 6px;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji button {\n  background-color: #f6f7f6;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  max-height: 32px;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji .emoji-btn-count {\n  padding: 0 8px;\n  gap: 7px;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji .emoji-btn-count img {\n  max-width: 20px;\n  max-height: 22px;\n  min-width: 20px;\n  min-height: 22px;\n  border: none;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji .emoji-btn-count span {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 16.94px;\n  letter-spacing: -0.005em;\n  color: #616060;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji .emoji-btn-add {\n  padding: 6px 12px;\n}\n.chat .chat-container .chat-content .message .message-container .message-emoji .emoji-btn-add img {\n  max-width: 20px;\n  max-height: 20px;\n  min-width: 20px;\n  min-height: 20px;\n  border: none;\n}\n.chat .chat-container .chat-content .hr {\n  display: flex;\n  margin-bottom: 40px;\n}\n.chat .chat-container .chat-content .hr .hr-line {\n  width: 100%;\n  position: relative;\n  margin: 0 -24px;\n  border-bottom: 1px solid #e1e1e3;\n}\n.chat .chat-container .chat-content .hr .hr-content {\n  position: relative;\n  display: flex;\n  top: 18px;\n  border: 1px solid #e1e1e3;\n  padding: 10px 17px;\n  border-radius: 100px;\n  background-color: white;\n  gap: 11px;\n  z-index: 2;\n}\n.chat .chat-container .chat-content .hr .hr-content p {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 19.36px;\n  letter-spacing: -0.005em;\n}\n.chat .chat-container .rich-text {\n  display: flex;\n  flex-direction: column;\n  color: var(--color);\n  border: 1px solid #e1e1e3;\n  border-top-left-radius: 9px;\n  border-top-right-radius: 9px;\n  margin: 0 24px;\n}\n.chat .chat-container .rich-text .toolbar {\n  min-height: 50px;\n  max-height: 50px;\n  border-top-left-radius: 9px;\n  border-top-right-radius: 9px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 16px 20px;\n  background: #f8f8f8;\n}\n.chat .chat-container .rich-text .toolbar hr {\n  width: fit-content;\n  min-height: 26px;\n  border: none;\n  border-right: 1px solid #e1e1e3;\n  margin: 0;\n}\n.chat .chat-container .rich-text .toolbar .btn {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  border-radius: 4px;\n  color: #c8c9ca;\n  margin: 0;\n  transition: all ease 0.5s;\n}\n.chat .chat-container .rich-text .toolbar .btn:active {\n  transform: scale(0.9);\n}\n.chat .chat-container .rich-text .toolbar .btn svg {\n  width: 18px;\n  height: 18px;\n}\n.chat .chat-container .rich-text .content {\n  display: flex;\n  gap: 5px;\n  width: 100%;\n  height: 100%;\n  padding: 10px 16px 0;\n  background: #ffffff;\n  outline: none;\n  align-items: center;\n  overflow: auto;\n}\n.chat .chat-container .rich-text .content p {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 24.2px;\n  letter-spacing: -0.04em;\n  color: #8d8d8d;\n}\n.chat .chat-container .rich-text .options-container {\n  background: #ffffff;\n  padding: 24px 15px 20px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.chat .chat-container .rich-text .options-container .options {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.chat .chat-container .rich-text .options-container .options .btn {\n  width: 32px;\n  height: 32px;\n  align-items: center;\n}\n.chat .chat-container .rich-text .options-container .options hr {\n  width: fit-content;\n  min-height: 26px;\n  border: none;\n  border-right: 1px solid #e1e1e3;\n  margin: 0;\n}\n.chat .chat-container .rich-text .options-container .send {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.chat .chat-container .rich-text .options-container .send hr {\n  width: fit-content;\n  min-height: 26px;\n  border: none;\n  border-right: 1px solid #e1e1e3;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// Цвета\n$bg-color-layout: #673070;;\n\n$bg-color-white: #FFFFFF;\n$bg-color-lilac: #D6C4DA;\n$bg-color-violet: #592365;\n\n$text-color-black: #000000;\n$text-color-grey-menu: #464446;\n$text-color-grey-chat: #60605F;\n$text-color-white: #FFFFFF;\n\n$border-btn-color: #E1E1E3;\n\n//  Размеры\n$header-height: 63px;\n$border-bottom: 1px solid #bcaec1;\n$border-radius: 10px;\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: \"Inter\", sans-serif;\n  background-color: $bg-color-layout;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n}\n\nh1, h2, h3, p {\n  margin: 0;\n}\n\nh1, h2 {\n  font-weight: 700px;\n}\n\np {\n  font-weight: 400px;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n  display: flex;\n}\n\n#app {\n  display: flex;\n  margin: auto;\n  // position: absolute;\n  // right: 6px;\n  // bottom: 6px;\n  color: $text-color-black;\n  min-height: 814px;\n\n  display: grid;\n  grid-template-columns: 262px 829px;\n  grid-template-rows: 63px 751px;\n}\n\n// Боковое меню\n.sidebar {\n\n  // Шапка бокового меню\n  .sidebar-header {\n    background-color: $bg-color-lilac;\n    border-top-left-radius: $border-radius;\n    border-bottom: $border-bottom;\n    max-height: $header-height;\n    padding: 16px 12px 18px;\n    display: flex;\n    justify-content: space-between;\n    // min-height: $header-height;\n    // max-height: $header-height;\n    grid-area: 1 / 1 / 2 / 2;\n\n    .sidebar-title {\n      display: flex;\n      gap: 8px;\n\n      h1 {\n        font-size: 24px;\n        font-weight: 700;\n        line-height: 29.05px;\n        letter-spacing: -0.01em;\n      }\n\n      img {\n        width: 12px;\n      }\n    }\n\n    img {\n      width: 17px;\n    }\n  }\n\n  // Основная часть бокового меню\n  .sidebar-main {\n    padding: 18px 12px 33px;\n    grid-area: 2 / 1 / 3 / 2;\n    background-color: $bg-color-lilac;\n    border-bottom-left-radius: $border-radius;\n    min-height: 751px;\n\n    .sidebar-menu {\n      display: flex;\n      flex-direction: column;\n\n      .sidebar-menu-btn {\n        gap: 12px;\n        padding: 7px 0 0 19px;\n      \n        img {\n          width: 20px;\n        }\n      \n        p {\n          font-size: 20px;\n          line-height: 24.2px;\n          letter-spacing: -0.04em;\n          color: $text-color-grey-menu;\n        }\n      }\n    }\n\n  // Список каналов\n    .channels {\n\n      .channels-header {\n        gap: 17px;\n        margin: 18px 0 12px;\n      \n        p {\n          font-size: 20px;\n          line-height: 24.2px;\n          letter-spacing: -0.04em;\n          color: $text-color-grey-menu\n        }\n      }\n    \n      .channels-list {\n        list-style-type: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        height: 65%;\n        max-height: 532px;\n        overflow: auto;\n        scrollbar-width: none;\n        max-width: 238px;\n      \n        button {\n          gap: 16px;\n          padding: 8px 31px 8px 12px;\n          max-width: 238px;\n          max-height: 38px;\n    \n          img {\n            width: 18px;\n            height: 18px;\n          }\n    \n          p {\n            font-size: 18px;\n            line-height: 21.78px;\n            letter-spacing: 0.02em;\n            text-align: left;\n            color: $text-color-grey-menu;\n            display: block;\n            max-width: 161px;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden;\n          }\n        }\n    \n        button:focus {\n          background-color: $bg-color-violet;\n          max-width: 238px;\n          border-radius: 8px;\n    \n          p {\n            color: $text-color-white;\n          }\n        }\n      }\n    \n      .rollup-icon {\n        transition: transform 0.3s ease;\n      }\n      \n      .rollup-icon.rotated {\n        transform: rotate(-90deg);\n      }\n    \n      .add-channel-btn {\n        gap: 16px;\n        padding: 8px 31px 8px 12px;\n    \n        p {\n          font-size: 18px;\n          line-height: 21.78px;\n          letter-spacing: 0.02em;\n          color: $text-color-grey-menu;\n        }\n      }\n    }\n  \n    .hidden {\n      display: none;\n    }\n  }\n}\n\n.chat {\n\n  .chat-header {\n    max-height: $header-height;\n    border-bottom: $border-bottom;\n    border-top-right-radius: $border-radius;\n    background-color: $bg-color-white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px 16px 19px 24px;\n    margin: 0;\n    grid-area: 1 / 2 / 2 / 3;\n\n    .chat-name {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n\n      h2 {\n        font-size: 24px;\n        font-weight: 700;\n        line-height: 29.05px;\n        letter-spacing: -0.04em;\n      }\n  \n      .chat-header-lock {\n        width: 24px;\n        height: 24px;\n      }\n    }\n\n    .chat-settings {\n      display: flex;\n      flex-direction: row;\n      gap: 12px;\n\n      .chat-setting {\n        max-height: 37px;\n        display: flex;\n        align-items: center;\n        border-radius: 8px;\n        border: 1px solid $border-btn-color;\n      }\n\n      .chat-participants {\n        display: flex;\n        gap: 5px;\n        padding: 6px 10px 5px 6px;\n\n        span {\n          font-size: 16px;\n          font-weight: 600;\n          line-height: 19.36px;\n          letter-spacing: -0.045em;\n          color: $text-color-grey-chat;\n        }\n\n        .chat-participants-list {\n          display: flex;\n          flex-direction: row;\n          list-style-type: none;\n          align-items: center;\n          padding: 0;\n          margin: 0;\n\n          li {\n            height: 26px;\n            position: relative;\n\n            &:not(:first-child) {\n              margin-left: -4px; // Смещение каждого аватара на -10px по горизонтали\n            }\n          }\n\n          img {\n            width: 26px;\n            height: 26px;\n            border: 2px solid white;\n            border-radius: 4px;\n          }\n        }\n      }\n\n      .chat-earflap {\n        .icon-earflap {\n          padding: 0 8px 0 9px;\n          border-right: 1px solid $border-btn-color;\n        }\n\n        .icon-arrow {\n          padding: 0 10px 0 11px;\n        }\n      }\n\n      .chat-document {\n        padding: 0 7.5px;\n\n        img {\n          width: 22px;\n          height: 22px;\n        }\n      }\n\n    }\n  }\n\n  .chat-container {\n    background-color: $bg-color-white;\n    border-bottom-right-radius: $border-radius;\n    grid-area: 2 / 2 / 3 / 3;\n    background-color: $bg-color-white;\n    min-height: 751px;\n\n    // Панель с закрепами\n    .chat-pinned {\n      width: 100%;\n      background-color: white;\n      height: 45px;\n      display: flex;\n      flex-direction: row;\n      padding-left: 24px;\n      border-bottom: 1px solid #e1e1e3;\n      gap: 24px;\n\n      .pinned-btn {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap: 10px;\n\n        .btn-icon-pin { \n          width: 18px;\n          height: 18px;\n        }\n\n        .btn-icon-plus {\n          width: 14px;  \n          height: 14px;\n        }\n\n        .pinned-btn-text {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          margin: 0;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 19.36px;\n          letter-spacing: 0.01em;\n          color: #616060;\n        }\n      }\n    }\n\n    // Контент чата\n    .chat-content {\n      padding: 40px 24px 40px;\n      overflow-y: auto;\n      background-color: white;\n      max-height: 510px;\n      scrollbar-width: none;\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n    \n      .message {\n        display: flex;\n        gap: 11px;\n    \n        img {\n          border: 1px solid black;\n          max-width: 48px;\n          max-height: 48px;\n          min-width: 48px;\n          min-height: 48px;\n          border-radius: 10px;\n        }\n    \n        p {\n          margin: 0;\n        }\n    \n        .message-container {\n          display: flex;\n          flex-direction: column;\n          gap: 6px;\n    \n          .message-info {\n            display: flex;\n            gap: 10px;\n    \n            .message-author {\n              font-size: 18px;\n              font-weight: 700;\n              line-height: 21.78px;\n            }\n    \n            .message-time {\n              font-size: 16px;\n              font-weight: 400;\n              line-height: 19.36px;\n              letter-spacing: -0.035em;\n              color: #616060;\n            }\n          }\n    \n          .message-emoji {\n            display: flex;\n            gap: 6px;\n    \n            button {\n              background-color: #f6f7f6;\n              border-radius: 100px;\n              display: flex;\n              align-items: center;\n              max-height: 32px;\n            }\n    \n            .emoji-btn-count {\n              padding: 0 8px;\n              gap: 7px;\n\n\n              img {\n                max-width: 20px;\n                max-height: 22px;\n                min-width: 20px;\n                min-height: 22px;\n                border: none;\n              }\n    \n              span {\n                font-size: 14px;\n                font-weight: 500;\n                line-height: 16.94px;\n                letter-spacing: -0.005em;\n                color: #616060;\n              }\n            }\n    \n            .emoji-btn-add {\n              padding: 6px 12px;\n\n\n              img {\n                max-width: 20px;\n                max-height: 20px;\n                min-width: 20px;\n                min-height: 20px;\n                border: none;\n              }\n            }\n          }\n        }\n      }\n    \n      .hr {\n        display: flex;\n        margin-bottom: 40px;\n    \n        .hr-line {\n          width: 100%;\n          position: relative;\n          margin: 0 -24px;\n          border-bottom: 1px solid #e1e1e3;\n        }\n    \n        .hr-content {\n          position: relative;\n          display: flex;\n          top: 18px;\n          border: 1px solid #e1e1e3;\n          padding: 10px 17px;\n          border-radius: 100px;\n          background-color: white;\n          gap: 11px;\n          z-index: 2;\n    \n          p {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 500;\n            line-height: 19.36px;\n            letter-spacing: -0.005em;\n          }\n        }\n      }\n    }\n\n    // Редактор сообщения\n    .rich-text {\n      display: flex;\n      flex-direction: column;\n      // margin-top: 40px;\n      color: var(--color);\n      border: 1px solid #e1e1e3;\n      border-top-left-radius: 9px;\n      border-top-right-radius: 9px;\n      margin: 0 24px;\n    \n      .toolbar {\n        // width: 100%;\n        min-height: 50px;\n        max-height: 50px;\n        border-top-left-radius: 9px;\n        border-top-right-radius: 9px;\n    \n        display: flex;\n        align-items: center;\n        gap: 20px;\n    \n        padding: 16px 20px;\n        background: #f8f8f8;\n    \n        hr {\n          width: fit-content;\n          min-height: 26px;\n          border: none;\n          border-right: 1px solid #e1e1e3;\n          margin: 0;\n        }\n    \n        .btn {\n          cursor: pointer;\n          position: relative;\n          display: block;\n          border-radius: 4px;\n          color: #c8c9ca;\n          margin: 0;\n          transition: all ease 0.5s;\n          // width: 18px;\n          // height: 18px;\n    \n          // &:hover {\n          //   border: 1px solid #C8C9CA;\n          //   padding: 3px;\n          // }\n    \n          &:active {\n            transform: scale(0.9);\n          }\n    \n          svg {\n            width: 18px;\n            height: 18px;\n          }\n        }\n      }\n    \n      .content {\n        display: flex;\n        gap: 5px;\n        width: 100%;\n        height: 100%;\n        padding: 10px 16px 0;\n        background: #ffffff;\n        outline: none;\n        align-items: center;\n    \n        overflow: auto;\n    \n        p {\n          margin: 0;\n          font-size: 20px;\n          font-weight: 400;\n          line-height: 24.2px;\n          letter-spacing: -0.04em;\n          color: #8d8d8d;\n        }\n      }\n    \n      .options-container {\n        background: #ffffff;\n        padding: 24px 15px 20px 16px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    \n        .options {\n          display: flex;\n          align-items: center;\n          gap: 18px;\n    \n          .btn {\n            width: 32px;\n            height: 32px;\n            align-items: center;\n          }\n    \n          hr {\n            width: fit-content;\n            min-height: 26px;\n            border: none;\n            border-right: 1px solid #e1e1e3;\n            margin: 0;\n          }\n        }\n    \n        .send {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n    \n          hr {\n            width: fit-content;\n            min-height: 26px;\n            border: none;\n            border-right: 1px solid #e1e1e3;\n            margin: 0;\n          }\n        }\n      }\n    }\n    \n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
var channels_1 = __webpack_require__(/*! ./utils/channels */ "./src/utils/channels.ts");
var messages_1 = __webpack_require__(/*! ./utils/messages */ "./src/utils/messages.ts");
var hash_svg_1 = __importDefault(__webpack_require__(/*! ./assets/icons/hash.svg */ "./src/assets/icons/hash.svg"));
var lock_svg_1 = __importDefault(__webpack_require__(/*! ./assets/icons/lock.svg */ "./src/assets/icons/lock.svg"));
var arrow_svg_1 = __importDefault(__webpack_require__(/*! ./assets/icons/arrow.svg */ "./src/assets/icons/arrow.svg"));
var emoji_finger_svg_1 = __importDefault(__webpack_require__(/*! ./assets/icons/emoji-finger.svg */ "./src/assets/icons/emoji-finger.svg"));
var emoji_svg_1 = __importDefault(__webpack_require__(/*! ./assets/icons/emoji.svg */ "./src/assets/icons/emoji.svg"));
// Получаем элементы DOM
var channelsList = document.getElementById("channels-list");
var channelsHeader = document.getElementById("channels-header");
var rollupIcon = document.querySelector(".rollup-icon");
// Функция для рендеринга списка каналов
function renderChannelsList() {
    if (channelsList) {
        channelsList.innerHTML = channels_1.channels
            .map(function (channel) {
            var iconSrc = channel.type === "public" ? hash_svg_1.default : lock_svg_1.default;
            return "\n          <button>\n            <img src=\"".concat(iconSrc, "\" alt=\"").concat(channel.type, " icon\"/>\n            <p>").concat(channel.name, "</p>\n          </button>\n        ");
        })
            .join("");
    }
}
// Функциональность раскрывающегося списка
function setupDropdownFunctionality() {
    if (channelsHeader && channelsList && rollupIcon) {
        channelsHeader.addEventListener("click", function () {
            channelsList.classList.toggle("hidden");
            rollupIcon.classList.toggle("rotated");
        });
    }
}
function renderMessages(messages, elementId) {
    if (elementId === void 0) { elementId = "chat-list"; }
    var today = new Date().toISOString().split("T")[0];
    var todaySeparatorAdded = false;
    var messageList = messages
        .map(function (message, index, arr) {
        var html = "";
        if (message.date === today && !todaySeparatorAdded) {
            html += "\n        <div class=\"hr\">\n          <div class=\"hr-line\"></div>\n          <div class=\"hr-content\">\n            <p>Today</p>\n            <img src=\"".concat(arrow_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430\"/>\n          </div>\n          <div class=\"hr-line\"></div>\n        </div>\n        ");
            todaySeparatorAdded = true;
        }
        html += "\n      <li class=\"message\">\n        <img src=\"".concat(message.avatar, "\" alt=\"\u0410\u0432\u0430\u0442\u0430\u0440 ").concat(message.author, "\" />\n        <div class=\"message-container\">\n          <div class=\"message-info\">\n            <p class=\"message-author\">").concat(message.author, "</p>\n            <p class=\"message-time\">").concat(message.time, "</p>\n          </div>\n          <p>").concat(message.content, "</p>\n          ");
        if (index === arr.length - 1) {
            html += "\n                <div class=\"message-emoji\">\n                  <button class=\"emoji-btn-count\">\n                    <img src=\"".concat(emoji_finger_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u0430\u043B\u0435\u0446 \u0432\u0432\u0435\u0440\u0445\"/>\n                    <span>0</span>\n                  </button>\n                  <button class=\"emoji-btn-add\">\n                    <img src=\"").concat(emoji_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430 \u0441\u043C\u0430\u0439\u043B\u0438\u043A\u0430\"/>                 \n                  </button>\n                </div>\n            ");
        }
        html += "\n          </div>\n        </li>\n      ";
        return html;
    })
        .join("");
    var chatElement = document.getElementById(elementId);
    if (chatElement) {
        chatElement.innerHTML = messageList;
    }
}
// Счетчик лайков
function setupLikeButton() {
    var _this = this;
    document.addEventListener("click", function (event) { return __awaiter(_this, void 0, void 0, function () {
        var target, emojiBtnCount, emojiCountSpan, currentCount, newCount, response, errorText, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    target = event.target;
                    if (!target.closest(".emoji-btn-count")) return [3 /*break*/, 7];
                    emojiBtnCount = target.closest(".emoji-btn-count");
                    emojiCountSpan = emojiBtnCount.querySelector("span");
                    if (!(emojiBtnCount && emojiCountSpan)) return [3 /*break*/, 7];
                    currentCount = parseInt(emojiCountSpan.textContent || "0", 10);
                    newCount = currentCount + 1;
                    emojiCountSpan.textContent = newCount.toString();
                    // Добавляем активный класс кнопке
                    emojiBtnCount.classList.add("active");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("https://stworka.com", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ count: newCount }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    console.log("Hello, world");
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.text()];
                case 4:
                    errorText = _a.sent();
                    console.error("Error ".concat(response.status, ": ").concat(errorText));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error("Request failed", error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
}
renderChannelsList();
setupDropdownFunctionality();
renderMessages(messages_1.messages);
setupLikeButton();


/***/ }),

/***/ "./src/utils/channels.ts":
/*!*******************************!*\
  !*** ./src/utils/channels.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.channels = void 0;
exports.channels = [
    { name: "slack-implementation", type: "public" },
    { name: "change-approval", type: "public" },
    { name: "culture-club", type: "public" },
    { name: "customersuccess", type: "public" },
    { name: "general", type: "public" },
    { name: "slack-workflows", type: "public" },
    { name: "marketintel", type: "public" },
    { name: "mdc-updates", type: "public" },
    { name: "product-feedback", type: "public" },
    { name: "product-feedback", type: "public" },
    { name: "product-feedback", type: "public" },
    { name: "product-qa", type: "public" },
    { name: "product-support", type: "public" },
    { name: "product-team", type: "private" },
    { name: "product-feedback", type: "public" },
    { name: "product-feedback", type: "public" },
    { name: "product-feedback", type: "public" },
    { name: "product-qa", type: "public" },
    { name: "product-support", type: "public" },
];


/***/ }),

/***/ "./src/utils/messages.ts":
/*!*******************************!*\
  !*** ./src/utils/messages.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.messages = void 0;
exports.messages = [
    {
        author: "Lara",
        time: "2:30 PM",
        date: "2024-07-08",
        content: "We need to think about how we can improve our current process. The way we receive feedback from the client is mostly on UI and not the experience. Let’s make time for a meeting to resolve this issue.",
        avatar: "images/lara.jpg",
    },
    {
        author: "Jordan",
        time: "4:30 PM",
        date: "2024-07-08",
        content: "The client wants an update on the progress of the work. We can create a prototype to show them tomorrow.",
        avatar: "images/jordan.jpg",
    },
    {
        author: "Sarah",
        time: "4:45 PM",
        date: "2024-07-08",
        content: "I agree. Let’s talk tomorrow.",
        avatar: "images/sarah.jpg",
    },
    {
        author: "Jordan",
        time: "8:30 AM",
        date: "2024-07-09",
        content: "Please send the project file when you get the chance. Thanks",
        avatar: "images/jordan.jpg",
    },
];


/***/ }),

/***/ "./src/assets/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/assets/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/arrow.svg";

/***/ }),

/***/ "./src/assets/icons/emoji-finger.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/emoji-finger.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/emoji-finger.svg";

/***/ }),

/***/ "./src/assets/icons/emoji.svg":
/*!************************************!*\
  !*** ./src/assets/icons/emoji.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/emoji.svg";

/***/ }),

/***/ "./src/assets/icons/hash.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/hash.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/hash.svg";

/***/ }),

/***/ "./src/assets/icons/lock.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/lock.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/lock.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("29f2795f834ba1e3bba0")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "project-root:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateproject_root"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSwrREFBK0QsNkJBQTZCLDJCQUEyQiw0QkFBNEIsK0JBQStCLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLCtCQUErQixzQ0FBc0Msb0NBQW9DLHVCQUF1QixPQUFPLDJCQUEyQixHQUFHLFVBQVUsY0FBYyxlQUFlLGtCQUFrQix1Q0FBdUMsdUNBQXVDLDJCQUEyQix1QkFBdUIsa0JBQWtCLEdBQUcsbUJBQW1CLGNBQWMsR0FBRyxZQUFZLHVCQUF1QixHQUFHLE9BQU8sdUJBQXVCLEdBQUcsWUFBWSxlQUFlLG9CQUFvQixrQkFBa0IsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsMEJBQTBCLGtCQUFrQixtQkFBbUIsNkJBQTZCLHNCQUFzQixvQkFBb0IsdUNBQXVDLG1DQUFtQyxHQUFHLCtCQUErQixpREFBaUQsd0NBQXdDLDZDQUE2QyxvQ0FBb0MsaUNBQWlDLDhCQUE4QixvQkFBb0IscUNBQXFDLG9DQUFvQyxvQ0FBb0MsK0JBQStCLHdCQUF3QixzQkFBc0IsaUJBQWlCLGNBQWMsMEJBQTBCLDJCQUEyQiwrQkFBK0Isa0NBQWtDLFNBQVMsZUFBZSxzQkFBc0IsU0FBUyxPQUFPLGFBQWEsb0JBQW9CLE9BQU8sS0FBSyx3REFBd0QsOEJBQThCLCtCQUErQix3Q0FBd0MsZ0RBQWdELHdCQUF3Qix1QkFBdUIsc0JBQXNCLCtCQUErQiw2QkFBNkIsb0JBQW9CLGdDQUFnQyx1QkFBdUIsd0JBQXdCLFdBQVcscUJBQXFCLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLHlDQUF5QyxXQUFXLFNBQVMsT0FBTyx3Q0FBd0MsNEJBQTRCLG9CQUFvQiw4QkFBOEIscUJBQXFCLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLG1EQUFtRCxTQUFTLDhCQUE4QixnQ0FBZ0MscUJBQXFCLG9CQUFvQixzQkFBc0Isc0JBQXNCLDRCQUE0Qix5QkFBeUIsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsc0JBQXNCLHVDQUF1Qyw2QkFBNkIsNkJBQTZCLHVCQUF1QiwwQkFBMEIsMkJBQTJCLGFBQWEscUJBQXFCLDhCQUE4QixtQ0FBbUMscUNBQXFDLCtCQUErQiwyQ0FBMkMsNkJBQTZCLCtCQUErQixzQ0FBc0Msa0NBQWtDLCtCQUErQixhQUFhLFdBQVcsOEJBQThCLCtDQUErQyw2QkFBNkIsK0JBQStCLHFCQUFxQix1Q0FBdUMsYUFBYSxXQUFXLFNBQVMsNEJBQTRCLDBDQUEwQyxTQUFTLHNDQUFzQyxvQ0FBb0MsU0FBUyxnQ0FBZ0Msb0JBQW9CLHFDQUFxQyxtQkFBbUIsNEJBQTRCLGlDQUFpQyxtQ0FBbUMseUNBQXlDLFdBQVcsU0FBUyxPQUFPLG1CQUFtQixzQkFBc0IsT0FBTyxLQUFLLEdBQUcsV0FBVyxvQkFBb0IsaUNBQWlDLG9DQUFvQyw4Q0FBOEMsd0NBQXdDLG9CQUFvQiwwQkFBMEIscUNBQXFDLG1DQUFtQyxnQkFBZ0IsK0JBQStCLG9CQUFvQixzQkFBc0IsNEJBQTRCLGlCQUFpQixjQUFjLDBCQUEwQiwyQkFBMkIsK0JBQStCLGtDQUFrQyxTQUFTLCtCQUErQixzQkFBc0IsdUJBQXVCLFNBQVMsT0FBTyx3QkFBd0Isc0JBQXNCLDRCQUE0QixrQkFBa0IseUJBQXlCLDJCQUEyQix3QkFBd0IsOEJBQThCLDZCQUE2Qiw4Q0FBOEMsU0FBUyw4QkFBOEIsd0JBQXdCLG1CQUFtQixvQ0FBb0Msa0JBQWtCLDRCQUE0Qiw2QkFBNkIsaUNBQWlDLHFDQUFxQyx5Q0FBeUMsV0FBVyxxQ0FBcUMsMEJBQTBCLGdDQUFnQyxrQ0FBa0MsZ0NBQWdDLHVCQUF1QixzQkFBc0Isa0JBQWtCLDJCQUEyQixpQ0FBaUMscUNBQXFDLG1DQUFtQyxrRUFBa0UsYUFBYSxtQkFBbUIsMEJBQTBCLDJCQUEyQixzQ0FBc0MsaUNBQWlDLGFBQWEsV0FBVyxTQUFTLHlCQUF5Qix5QkFBeUIsaUNBQWlDLHNEQUFzRCxXQUFXLHlCQUF5QixtQ0FBbUMsV0FBVyxTQUFTLDBCQUEwQiwyQkFBMkIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsV0FBVyxTQUFTLFNBQVMsS0FBSyx1QkFBdUIsd0NBQXdDLGlEQUFpRCwrQkFBK0Isd0NBQXdDLHdCQUF3QixpREFBaUQsb0JBQW9CLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDRCQUE0QiwyQkFBMkIseUNBQXlDLGtCQUFrQix1QkFBdUIsd0JBQXdCLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLDRCQUE0Qix3QkFBd0IseUJBQXlCLFdBQVcsNEJBQTRCLDBCQUEwQix5QkFBeUIsV0FBVyw4QkFBOEIsMEJBQTBCLGdDQUFnQyxnQ0FBZ0Msc0JBQXNCLDRCQUE0Qiw2QkFBNkIsaUNBQWlDLG1DQUFtQywyQkFBMkIsV0FBVyxTQUFTLE9BQU8sNENBQTRDLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLDBCQUEwQiw4QkFBOEIsc0JBQXNCLCtCQUErQixrQkFBa0Isd0JBQXdCLHdCQUF3QixvQkFBb0IscUJBQXFCLG9DQUFvQyw0QkFBNEIsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLFdBQVcsbUJBQW1CLHNCQUFzQixXQUFXLG9DQUFvQywwQkFBMEIsbUNBQW1DLHFCQUFxQixpQ0FBaUMsNEJBQTRCLHdCQUF3QixxQ0FBcUMsZ0NBQWdDLGlDQUFpQyxxQ0FBcUMsZUFBZSxtQ0FBbUMsZ0NBQWdDLGlDQUFpQyxxQ0FBcUMseUNBQXlDLCtCQUErQixlQUFlLGFBQWEsa0NBQWtDLDRCQUE0Qix1QkFBdUIsNEJBQTRCLDBDQUEwQyxxQ0FBcUMsOEJBQThCLG9DQUFvQyxpQ0FBaUMsZUFBZSxzQ0FBc0MsK0JBQStCLHlCQUF5Qix5QkFBeUIsa0NBQWtDLG1DQUFtQyxrQ0FBa0MsbUNBQW1DLCtCQUErQixpQkFBaUIsNEJBQTRCLGtDQUFrQyxtQ0FBbUMsdUNBQXVDLDJDQUEyQyxpQ0FBaUMsaUJBQWlCLGVBQWUsb0NBQW9DLGtDQUFrQyx5QkFBeUIsa0NBQWtDLG1DQUFtQyxrQ0FBa0MsbUNBQW1DLCtCQUErQixpQkFBaUIsZUFBZSxhQUFhLFdBQVcsU0FBUyxtQkFBbUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLCtCQUErQiw0QkFBNEIsNkNBQTZDLFdBQVcsNkJBQTZCLCtCQUErQiwwQkFBMEIsc0JBQXNCLHNDQUFzQywrQkFBK0IsaUNBQWlDLG9DQUFvQyxzQkFBc0IsdUJBQXVCLHFCQUFxQix3QkFBd0IsOEJBQThCLCtCQUErQixtQ0FBbUMsdUNBQXVDLGFBQWEsV0FBVyxTQUFTLE9BQU8sK0NBQStDLHNCQUFzQiwrQkFBK0IsNEJBQTRCLDRCQUE0QixrQ0FBa0Msb0NBQW9DLHFDQUFxQyx1QkFBdUIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsMkJBQTJCLHNDQUFzQyx1Q0FBdUMsOEJBQThCLDhCQUE4QixvQkFBb0IsbUNBQW1DLDhCQUE4QixvQkFBb0IsK0JBQStCLDZCQUE2Qix5QkFBeUIsNENBQTRDLHNCQUFzQixXQUFXLHNCQUFzQiw0QkFBNEIsK0JBQStCLDJCQUEyQiwrQkFBK0IsMkJBQTJCLHNCQUFzQixzQ0FBc0MsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsMkNBQTJDLDhCQUE4QixnQkFBZ0IsNEJBQTRCLG9DQUFvQyxhQUFhLHVCQUF1QiwwQkFBMEIsMkJBQTJCLGFBQWEsV0FBVyxTQUFTLHdCQUF3Qix3QkFBd0IsbUJBQW1CLHNCQUFzQix1QkFBdUIsK0JBQStCLDhCQUE4Qix3QkFBd0IsOEJBQThCLCtCQUErQixtQkFBbUIsc0JBQXNCLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLG9DQUFvQywyQkFBMkIsV0FBVyxTQUFTLGtDQUFrQyw4QkFBOEIsdUNBQXVDLHdCQUF3Qiw4QkFBOEIseUNBQXlDLDBCQUEwQiwwQkFBMEIsZ0NBQWdDLHNCQUFzQix3QkFBd0IsMEJBQTBCLDJCQUEyQixrQ0FBa0MsYUFBYSxzQkFBc0IsaUNBQWlDLCtCQUErQiwyQkFBMkIsOENBQThDLHdCQUF3QixhQUFhLFdBQVcsdUJBQXVCLDBCQUEwQixnQ0FBZ0Msc0JBQXNCLHNCQUFzQixpQ0FBaUMsK0JBQStCLDJCQUEyQiw4Q0FBOEMsd0JBQXdCLGFBQWEsV0FBVyxTQUFTLE9BQU8sV0FBVyxHQUFHLHVCQUF1QjtBQUM5bTdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRXZlLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN5RjtBQUN6RixZQUFpSTs7QUFFakk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNkhBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDZIQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw2SEFBTzs7QUFFM0IsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxzTUFBZ0c7QUFDdEcsTUFBTTtBQUFBO0FBQ04sc0NBQXNDLDZIQUFPO0FBQzdDLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBCQUEwQiw2SEFBTzs7QUFFakMscUJBQXFCLDZIQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLDZIQUFPLGFBQWE7Ozs7Ozs7Ozs7QUNuRXRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGNBQWM7O0FBRXhHOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1UWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyx3Q0FBZTtBQUN2QixpQkFBaUIsbUJBQU8sQ0FBQyxpREFBa0I7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMsaURBQWtCO0FBQzNDLGlDQUFpQyxtQkFBTyxDQUFDLDREQUF5QjtBQUNsRSxpQ0FBaUMsbUJBQU8sQ0FBQyw0REFBeUI7QUFDbEUsa0NBQWtDLG1CQUFPLENBQUMsOERBQTBCO0FBQ3BFLHlDQUF5QyxtQkFBTyxDQUFDLDRFQUFpQztBQUNsRixrQ0FBa0MsbUJBQU8sQ0FBQyw4REFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG1EQUFtRCxpQkFBaUI7QUFDcEUseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwSmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixNQUFNLDhDQUE4QztBQUNwRCxNQUFNLHlDQUF5QztBQUMvQyxNQUFNLHNDQUFzQztBQUM1QyxNQUFNLHlDQUF5QztBQUMvQyxNQUFNLGlDQUFpQztBQUN2QyxNQUFNLHlDQUF5QztBQUMvQyxNQUFNLHFDQUFxQztBQUMzQyxNQUFNLHFDQUFxQztBQUMzQyxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLG9DQUFvQztBQUMxQyxNQUFNLHlDQUF5QztBQUMvQyxNQUFNLHVDQUF1QztBQUM3QyxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLDBDQUEwQztBQUNoRCxNQUFNLG9DQUFvQztBQUMxQyxNQUFNLHlDQUF5QztBQUMvQzs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBLHNCQUFzQjtVQUN0QixvREFBb0QsdUJBQXVCO1VBQzNFO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N4Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOzs7OztXQ0FBOzs7OztXQ0FBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCLDRCQUE0QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtRUFBbUUsaUNBQWlDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7O1dBRUQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsMkJBQTJCO1dBQzNCLDRCQUE0QjtXQUM1QiwyQkFBMkI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxvQkFBb0IsZ0JBQWdCO1dBQ3BDO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0Esb0JBQW9CLGdCQUFnQjtXQUNwQztXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7O1dBRUg7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBLGlCQUFpQixxQ0FBcUM7V0FDdEQ7O1dBRUEsZ0RBQWdEO1dBQ2hEOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG9CQUFvQixpQkFBaUI7V0FDckM7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSCxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0EsTUFBTTtXQUNOLEtBQUs7V0FDTCxJQUFJO1dBQ0osR0FBRztXQUNIOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEVBQUU7O1dBRUY7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esb0JBQW9CLG9CQUFvQjtXQUN4QztXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7O1dBRUY7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0EsR0FBRztXQUNILEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0osR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ25ZQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsYUFBYTtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGlCQUFpQiw0QkFBNEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQix1Q0FBdUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsaUNBQWlDO1dBQ3BEO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsdUNBQXVDO1dBQzdEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQixzQkFBc0I7V0FDNUM7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLHdDQUF3QztXQUMzRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7Ozs7V0M5ZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC8uL3NyYy91dGlscy9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3QvLi9zcmMvdXRpbHMvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290L3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yb290L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJvb3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3Qtcm9vdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzMwNzA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaDEsIGgyLCBoMywgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLCBoMiB7XFxuICBmb250LXdlaWdodDogNzAwcHg7XFxufVxcblxcbnAge1xcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgbWluLWhlaWdodDogODE0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjJweCA4MjlweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjNweCA3NTFweDtcXG59XFxuXFxuLnNpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNENkM0REE7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiY2FlYzE7XFxuICBtYXgtaGVpZ2h0OiA2M3B4O1xcbiAgcGFkZGluZzogMTZweCAxMnB4IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgLnNpZGViYXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgLnNpZGViYXItdGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyOS4wNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLWhlYWRlciAuc2lkZWJhci10aXRsZSBpbWcge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBpbWcge1xcbiAgd2lkdGg6IDE3cHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4ge1xcbiAgcGFkZGluZzogMThweCAxMnB4IDMzcHg7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZDNERBO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDc1MXB4O1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1tYWluIC5zaWRlYmFyLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLnNpZGViYXItbWVudSAuc2lkZWJhci1tZW51LWJ0biB7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nOiA3cHggMCAwIDE5cHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLnNpZGViYXItbWVudSAuc2lkZWJhci1tZW51LWJ0biBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLnNpZGViYXItbWVudSAuc2lkZWJhci1tZW51LWJ0biBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNC4ycHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gIGNvbG9yOiAjNDY0NDQ2O1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1tYWluIC5jaGFubmVscyAuY2hhbm5lbHMtaGVhZGVyIHtcXG4gIGdhcDogMTdweDtcXG4gIG1hcmdpbjogMThweCAwIDEycHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmNoYW5uZWxzIC5jaGFubmVscy1oZWFkZXIgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjQuMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XFxuICBjb2xvcjogIzQ2NDQ0NjtcXG59XFxuLnNpZGViYXIgLnNpZGViYXItbWFpbiAuY2hhbm5lbHMgLmNoYW5uZWxzLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBtYXgtaGVpZ2h0OiA1MzJweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWF4LXdpZHRoOiAyMzhweDtcXG59XFxuLnNpZGViYXIgLnNpZGViYXItbWFpbiAuY2hhbm5lbHMgLmNoYW5uZWxzLWxpc3QgYnV0dG9uIHtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDhweCAzMXB4IDhweCAxMnB4O1xcbiAgbWF4LXdpZHRoOiAyMzhweDtcXG4gIG1heC1oZWlnaHQ6IDM4cHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmNoYW5uZWxzIC5jaGFubmVscy1saXN0IGJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmNoYW5uZWxzIC5jaGFubmVscy1saXN0IGJ1dHRvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMS43OHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzQ2NDQ0NjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxNjFweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmNoYW5uZWxzIC5jaGFubmVscy1saXN0IGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTkyMzY1O1xcbiAgbWF4LXdpZHRoOiAyMzhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnNpZGViYXIgLnNpZGViYXItbWFpbiAuY2hhbm5lbHMgLmNoYW5uZWxzLWxpc3QgYnV0dG9uOmZvY3VzIHAge1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmNoYW5uZWxzIC5yb2xsdXAtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1tYWluIC5jaGFubmVscyAucm9sbHVwLWljb24ucm90YXRlZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1tYWluIC5jaGFubmVscyAuYWRkLWNoYW5uZWwtYnRuIHtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDhweCAzMXB4IDhweCAxMnB4O1xcbn1cXG4uc2lkZWJhciAuc2lkZWJhci1tYWluIC5jaGFubmVscyAuYWRkLWNoYW5uZWwtYnRuIHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIxLjc4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbiAgY29sb3I6ICM0NjQ0NDY7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLW1haW4gLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hhdCAuY2hhdC1oZWFkZXIge1xcbiAgbWF4LWhlaWdodDogNjNweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNhZWMxO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNHB4IDE2cHggMTlweCAyNHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtbmFtZSBoMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI5LjA1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG59XFxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LW5hbWUgLmNoYXQtaGVhZGVyLWxvY2sge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTJweDtcXG59XFxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5jaGF0LXNldHRpbmcge1xcbiAgbWF4LWhlaWdodDogMzdweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMztcXG59XFxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5jaGF0LXBhcnRpY2lwYW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiA2cHggMTBweCA1cHggNnB4O1xcbn1cXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtc2V0dGluZ3MgLmNoYXQtcGFydGljaXBhbnRzIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOS4zNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0NWVtO1xcbiAgY29sb3I6ICM2MDYwNUY7XFxufVxcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1zZXR0aW5ncyAuY2hhdC1wYXJ0aWNpcGFudHMgLmNoYXQtcGFydGljaXBhbnRzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5jaGF0LXBhcnRpY2lwYW50cyAuY2hhdC1wYXJ0aWNpcGFudHMtbGlzdCBsaSB7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1zZXR0aW5ncyAuY2hhdC1wYXJ0aWNpcGFudHMgLmNoYXQtcGFydGljaXBhbnRzLWxpc3QgbGk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XFxufVxcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1zZXR0aW5ncyAuY2hhdC1wYXJ0aWNpcGFudHMgLmNoYXQtcGFydGljaXBhbnRzLWxpc3QgaW1nIHtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1zZXR0aW5ncyAuY2hhdC1lYXJmbGFwIC5pY29uLWVhcmZsYXAge1xcbiAgcGFkZGluZzogMCA4cHggMCA5cHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTFFMUUzO1xcbn1cXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtc2V0dGluZ3MgLmNoYXQtZWFyZmxhcCAuaWNvbi1hcnJvdyB7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbn1cXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtc2V0dGluZ3MgLmNoYXQtZG9jdW1lbnQge1xcbiAgcGFkZGluZzogMCA3LjVweDtcXG59XFxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5jaGF0LWRvY3VtZW50IGltZyB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBtaW4taGVpZ2h0OiA3NTFweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LXBpbm5lZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMztcXG4gIGdhcDogMjRweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LXBpbm5lZCAucGlubmVkLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAuY2hhdC1waW5uZWQgLnBpbm5lZC1idG4gLmJ0bi1pY29uLXBpbiB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LXBpbm5lZCAucGlubmVkLWJ0biAuYnRuLWljb24tcGx1cyB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LXBpbm5lZCAucGlubmVkLWJ0biAucGlubmVkLWJ0bi10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTkuMzZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XFxuICBjb2xvcjogIzYxNjA2MDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQge1xcbiAgcGFkZGluZzogNDBweCAyNHB4IDQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXgtaGVpZ2h0OiA1MTBweDtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMXB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAubWVzc2FnZSBpbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXgtd2lkdGg6IDQ4cHg7XFxuICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAubWVzc2FnZSAubWVzc2FnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDZweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWluZm8gLm1lc3NhZ2UtYXV0aG9yIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjEuNzhweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWluZm8gLm1lc3NhZ2UtdGltZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE5LjM2cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XFxuICBjb2xvcjogIzYxNjA2MDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWVtb2ppIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWVtb2ppIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y2O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDMycHg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1lbW9qaSAuZW1vamktYnRuLWNvdW50IHtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlIC5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1lbW9qaSAuZW1vamktYnRuLWNvdW50IGltZyB7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMnB4O1xcbiAgbWluLXdpZHRoOiAyMHB4O1xcbiAgbWluLWhlaWdodDogMjJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWVtb2ppIC5lbW9qaS1idG4tY291bnQgc3BhbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2Ljk0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XFxuICBjb2xvcjogIzYxNjA2MDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2UgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWVtb2ppIC5lbW9qaS1idG4tYWRkIHtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAubWVzc2FnZSAubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtZW1vamkgLmVtb2ppLWJ0bi1hZGQgaW1nIHtcXG4gIG1heC13aWR0aDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDIwcHg7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAuaHIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5ociAuaHItbGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCAtMjRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUzO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAuaHIgLmhyLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogMThweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTM7XFxuICBwYWRkaW5nOiAxMHB4IDE3cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMXB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLmhyIC5oci1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOS4zNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUzO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDlweDtcXG4gIG1hcmdpbjogMCAyNHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAudG9vbGJhciB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgbWF4LWhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDlweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAucmljaC10ZXh0IC50b29sYmFyIGhyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUzO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAudG9vbGJhciAuYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6ICNjOGM5Y2E7XFxuICBtYXJnaW46IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAudG9vbGJhciAuYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAucmljaC10ZXh0IC50b29sYmFyIC5idG4gc3ZnIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTZweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAucmljaC10ZXh0IC5jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNC4ycHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gIGNvbG9yOiAjOGQ4ZDhkO1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAub3B0aW9ucy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDI0cHggMTVweCAyMHB4IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5yaWNoLXRleHQgLm9wdGlvbnMtY29udGFpbmVyIC5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAub3B0aW9ucy1jb250YWluZXIgLm9wdGlvbnMgLmJ0biB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaGF0IC5jaGF0LWNvbnRhaW5lciAucmljaC10ZXh0IC5vcHRpb25zLWNvbnRhaW5lciAub3B0aW9ucyBociB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAyNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZTFlMztcXG4gIG1hcmdpbjogMDtcXG59XFxuLmNoYXQgLmNoYXQtY29udGFpbmVyIC5yaWNoLXRleHQgLm9wdGlvbnMtY29udGFpbmVyIC5zZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uY2hhdCAuY2hhdC1jb250YWluZXIgLnJpY2gtdGV4dCAub3B0aW9ucy1jb250YWluZXIgLnNlbmQgaHIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMjZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTM7XFxuICBtYXJnaW46IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFtQkE7RUFDRSxzQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQTNCZ0I7RUE0QmhCLHNCQUFBO0VB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LGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUE5R1I7QUFnSFE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQTlHVjtBQWlIUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUEvR1Y7QUF3SFU7RUFDRSxxQkFBQTtBQXRIWjtBQXlIVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBdkhaO0FBNEhNO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0FBM0hSO0FBNkhRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBM0hWO0FBK0hNO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBN0hSO0FBK0hRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQTdIVjtBQStIVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE3SFo7QUFnSVU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQTlIWjtBQWtJUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFoSVY7QUFrSVU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQWhJWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyDQptCy0LXRgtCwXFxuJGJnLWNvbG9yLWxheW91dDogIzY3MzA3MDs7XFxuXFxuJGJnLWNvbG9yLXdoaXRlOiAjRkZGRkZGO1xcbiRiZy1jb2xvci1saWxhYzogI0Q2QzREQTtcXG4kYmctY29sb3ItdmlvbGV0OiAjNTkyMzY1O1xcblxcbiR0ZXh0LWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xcbiR0ZXh0LWNvbG9yLWdyZXktbWVudTogIzQ2NDQ0NjtcXG4kdGV4dC1jb2xvci1ncmV5LWNoYXQ6ICM2MDYwNUY7XFxuJHRleHQtY29sb3Itd2hpdGU6ICNGRkZGRkY7XFxuXFxuJGJvcmRlci1idG4tY29sb3I6ICNFMUUxRTM7XFxuXFxuLy8gwqDQoNCw0LfQvNC10YDRi1xcbiRoZWFkZXItaGVpZ2h0OiA2M3B4O1xcbiRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjYWVjMTtcXG4kYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1sYXlvdXQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaDEsIGgyLCBoMywgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxLCBoMiB7XFxuICBmb250LXdlaWdodDogNzAwcHg7XFxufVxcblxcbnAge1xcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIHJpZ2h0OiA2cHg7XFxuICAvLyBib3R0b206IDZweDtcXG4gIGNvbG9yOiAkdGV4dC1jb2xvci1ibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDgxNHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYycHggODI5cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYzcHggNzUxcHg7XFxufVxcblxcbi8vINCR0L7QutC+0LLQvtC1INC80LXQvdGOXFxuLnNpZGViYXIge1xcblxcbiAgLy8g0KjQsNC/0LrQsCDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXFxuICAuc2lkZWJhci1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItbGlsYWM7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLWJvdHRvbTtcXG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxuICAgIHBhZGRpbmc6IDE2cHggMTJweCAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8vIG1pbi1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xcbiAgICAvLyBtYXgtaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgICAuc2lkZWJhci10aXRsZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDhweDtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5LjA1cHg7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcXG4gICAgICB9XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiAxN3B4O1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyDQntGB0L3QvtCy0L3QsNGPINGH0LDRgdGC0Ywg0LHQvtC60L7QstC+0LPQviDQvNC10L3RjlxcbiAgLnNpZGViYXItbWFpbiB7XFxuICAgIHBhZGRpbmc6IDE4cHggMTJweCAzM3B4O1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1saWxhYztcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIG1pbi1oZWlnaHQ6IDc1MXB4O1xcblxcbiAgICAuc2lkZWJhci1tZW51IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgLnNpZGViYXItbWVudS1idG4ge1xcbiAgICAgICAgZ2FwOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogN3B4IDAgMCAxOXB4O1xcbiAgICAgIFxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjQuMnB4O1xcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yLWdyZXktbWVudTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gIC8vINCh0L/QuNGB0L7QuiDQutCw0L3QsNC70L7QslxcbiAgICAuY2hhbm5lbHMge1xcblxcbiAgICAgIC5jaGFubmVscy1oZWFkZXIge1xcbiAgICAgICAgZ2FwOiAxN3B4O1xcbiAgICAgICAgbWFyZ2luOiAxOHB4IDAgMTJweDtcXG4gICAgICBcXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNC4ycHg7XFxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xcbiAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3ItZ3JleS1tZW51XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAuY2hhbm5lbHMtbGlzdCB7XFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDY1JTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUzMnB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgICBtYXgtd2lkdGg6IDIzOHB4O1xcbiAgICAgIFxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMzFweCA4cHggMTJweDtcXG4gICAgICAgICAgbWF4LXdpZHRoOiAyMzhweDtcXG4gICAgICAgICAgbWF4LWhlaWdodDogMzhweDtcXG4gICAgXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgICBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxLjc4cHg7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvci1ncmV5LW1lbnU7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjFweDtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICBidXR0b246Zm9jdXMge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItdmlvbGV0O1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDIzOHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIFxcbiAgICAgICAgICBwIHtcXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3Itd2hpdGU7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5yb2xsdXAtaWNvbiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAucm9sbHVwLWljb24ucm90YXRlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLmFkZC1jaGFubmVsLWJ0biB7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMzFweCA4cHggMTJweDtcXG4gICAgXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjEuNzhweDtcXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yLWdyZXktbWVudTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICAuaGlkZGVuIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jaGF0IHtcXG5cXG4gIC5jaGF0LWhlYWRlciB7XFxuICAgIG1heC1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xcbiAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLWJvdHRvbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTRweCAxNnB4IDE5cHggMjRweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuXFxuICAgIC5jaGF0LW5hbWUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDRweDtcXG5cXG4gICAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5LjA1cHg7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gICAgICB9XFxuICBcXG4gICAgICAuY2hhdC1oZWFkZXItbG9jayB7XFxuICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNoYXQtc2V0dGluZ3Mge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBnYXA6IDEycHg7XFxuXFxuICAgICAgLmNoYXQtc2V0dGluZyB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzN3B4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWJ0bi1jb2xvcjtcXG4gICAgICB9XFxuXFxuICAgICAgLmNoYXQtcGFydGljaXBhbnRzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDVweCA2cHg7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTkuMzZweDtcXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0NWVtO1xcbiAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3ItZ3JleS1jaGF0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNoYXQtcGFydGljaXBhbnRzLWxpc3Qge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICAgICAgbGkge1xcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDsgLy8g0KHQvNC10YnQtdC90LjQtSDQutCw0LbQtNC+0LPQviDQsNCy0LDRgtCw0YDQsCDQvdCwIC0xMHB4INC/0L4g0LPQvtGA0LjQt9C+0L3RgtCw0LvQuFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmNoYXQtZWFyZmxhcCB7XFxuICAgICAgICAuaWNvbi1lYXJmbGFwIHtcXG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCA5cHg7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItYnRuLWNvbG9yO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmljb24tYXJyb3cge1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuY2hhdC1kb2N1bWVudCB7XFxuICAgICAgICBwYWRkaW5nOiAwIDcuNXB4O1xcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgd2lkdGg6IDIycHg7XFxuICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jaGF0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci13aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci13aGl0ZTtcXG4gICAgbWluLWhlaWdodDogNzUxcHg7XFxuXFxuICAgIC8vINCf0LDQvdC10LvRjCDRgSDQt9Cw0LrRgNC10L/QsNC80LhcXG4gICAgLmNoYXQtcGlubmVkIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMztcXG4gICAgICBnYXA6IDI0cHg7XFxuXFxuICAgICAgLnBpbm5lZC1idG4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgLmJ0bi1pY29uLXBpbiB7IFxcbiAgICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmJ0bi1pY29uLXBsdXMge1xcbiAgICAgICAgICB3aWR0aDogMTRweDsgIFxcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucGlubmVkLWJ0bi10ZXh0IHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOS4zNnB4O1xcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xcbiAgICAgICAgICBjb2xvcjogIzYxNjA2MDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8g0JrQvtC90YLQtdC90YIg0YfQsNGC0LBcXG4gICAgLmNoYXQtY29udGVudCB7XFxuICAgICAgcGFkZGluZzogNDBweCAyNHB4IDQwcHg7XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBtYXgtaGVpZ2h0OiA1MTBweDtcXG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMThweDtcXG4gICAgXFxuICAgICAgLm1lc3NhZ2Uge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMTFweDtcXG4gICAgXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgbWF4LXdpZHRoOiA0OHB4O1xcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgcCB7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAubWVzc2FnZS1jb250YWluZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBnYXA6IDZweDtcXG4gICAgXFxuICAgICAgICAgIC5tZXNzYWdlLWluZm8ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICBcXG4gICAgICAgICAgICAubWVzc2FnZS1hdXRob3Ige1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMS43OHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgLm1lc3NhZ2UtdGltZSB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5LjM2cHg7XFxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XFxuICAgICAgICAgICAgICBjb2xvcjogIzYxNjA2MDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgIC5tZXNzYWdlLWVtb2ppIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogNnB4O1xcbiAgICBcXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmNjtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgLmVtb2ppLWJ0bi1jb3VudCB7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcXG4gICAgICAgICAgICAgIGdhcDogN3B4O1xcblxcblxcbiAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMnB4O1xcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgXFxuICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYuOTRweDtcXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzYxNjA2MDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgICAgIC5lbW9qaS1idG4tYWRkIHtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcblxcblxcbiAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5ociB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgXFxuICAgICAgICAuaHItbGluZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIG1hcmdpbjogMCAtMjRweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTM7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmhyLWNvbnRlbnQge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIHRvcDogMThweDtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMztcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxN3B4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGdhcDogMTFweDtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTkuMzZweDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8g0KDQtdC00LDQutGC0L7RgCDRgdC+0L7QsdGJ0LXQvdC40Y9cXG4gICAgLnJpY2gtdGV4dCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC8vIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUzO1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDlweDtcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOXB4O1xcbiAgICAgIG1hcmdpbjogMCAyNHB4O1xcbiAgICBcXG4gICAgICAudG9vbGJhciB7XFxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDlweDtcXG4gICAgXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgXFxuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbiAgICBcXG4gICAgICAgIGhyIHtcXG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTM7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAuYnRuIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgIGNvbG9yOiAjYzhjOWNhO1xcbiAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XFxuICAgICAgICAgIC8vIHdpZHRoOiAxOHB4O1xcbiAgICAgICAgICAvLyBoZWlnaHQ6IDE4cHg7XFxuICAgIFxcbiAgICAgICAgICAvLyAmOmhvdmVyIHtcXG4gICAgICAgICAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAjQzhDOUNBO1xcbiAgICAgICAgICAvLyAgIHBhZGRpbmc6IDNweDtcXG4gICAgICAgICAgLy8gfVxcbiAgICBcXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIFxcbiAgICAgICAgcCB7XFxuICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjQuMnB4O1xcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gICAgICAgICAgY29sb3I6ICM4ZDhkOGQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAub3B0aW9ucy1jb250YWluZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTVweCAyMHB4IDE2cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxuICAgICAgICAub3B0aW9ucyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMThweDtcXG4gICAgXFxuICAgICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgICBociB7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTM7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLnNlbmQge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgIFxcbiAgICAgICAgICBociB7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTM7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3N0eWxlcy5zY3NzXCIpO1xudmFyIGNoYW5uZWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy9jaGFubmVsc1wiKTtcbnZhciBtZXNzYWdlc18xID0gcmVxdWlyZShcIi4vdXRpbHMvbWVzc2FnZXNcIik7XG52YXIgaGFzaF9zdmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hc3NldHMvaWNvbnMvaGFzaC5zdmdcIikpO1xudmFyIGxvY2tfc3ZnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXNzZXRzL2ljb25zL2xvY2suc3ZnXCIpKTtcbnZhciBhcnJvd19zdmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hc3NldHMvaWNvbnMvYXJyb3cuc3ZnXCIpKTtcbnZhciBlbW9qaV9maW5nZXJfc3ZnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXNzZXRzL2ljb25zL2Vtb2ppLWZpbmdlci5zdmdcIikpO1xudmFyIGVtb2ppX3N2Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Fzc2V0cy9pY29ucy9lbW9qaS5zdmdcIikpO1xuLy8g0J/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLIERPTVxudmFyIGNoYW5uZWxzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbm5lbHMtbGlzdFwiKTtcbnZhciBjaGFubmVsc0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbm5lbHMtaGVhZGVyXCIpO1xudmFyIHJvbGx1cEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvbGx1cC1pY29uXCIpO1xuLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGA0LXQvdC00LXRgNC40L3Qs9CwINGB0L/QuNGB0LrQsCDQutCw0L3QsNC70L7QslxuZnVuY3Rpb24gcmVuZGVyQ2hhbm5lbHNMaXN0KCkge1xuICAgIGlmIChjaGFubmVsc0xpc3QpIHtcbiAgICAgICAgY2hhbm5lbHNMaXN0LmlubmVySFRNTCA9IGNoYW5uZWxzXzEuY2hhbm5lbHNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHZhciBpY29uU3JjID0gY2hhbm5lbC50eXBlID09PSBcInB1YmxpY1wiID8gaGFzaF9zdmdfMS5kZWZhdWx0IDogbG9ja19zdmdfMS5kZWZhdWx0O1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxuICAgICAgICAgIDxidXR0b24+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiLmNvbmNhdChpY29uU3JjLCBcIlxcXCIgYWx0PVxcXCJcIikuY29uY2F0KGNoYW5uZWwudHlwZSwgXCIgaWNvblxcXCIvPlxcbiAgICAgICAgICAgIDxwPlwiKS5jb25jYXQoY2hhbm5lbC5uYW1lLCBcIjwvcD5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICBcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9XG59XG4vLyDQpNGD0L3QutGG0LjQvtC90LDQu9GM0L3QvtGB0YLRjCDRgNCw0YHQutGA0YvQstCw0Y7RidC10LPQvtGB0Y8g0YHQv9C40YHQutCwXG5mdW5jdGlvbiBzZXR1cERyb3Bkb3duRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBpZiAoY2hhbm5lbHNIZWFkZXIgJiYgY2hhbm5lbHNMaXN0ICYmIHJvbGx1cEljb24pIHtcbiAgICAgICAgY2hhbm5lbHNIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoYW5uZWxzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgcm9sbHVwSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVuZGVyTWVzc2FnZXMobWVzc2FnZXMsIGVsZW1lbnRJZCkge1xuICAgIGlmIChlbGVtZW50SWQgPT09IHZvaWQgMCkgeyBlbGVtZW50SWQgPSBcImNoYXQtbGlzdFwiOyB9XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICB2YXIgdG9kYXlTZXBhcmF0b3JBZGRlZCA9IGZhbHNlO1xuICAgIHZhciBtZXNzYWdlTGlzdCA9IG1lc3NhZ2VzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBcIlwiO1xuICAgICAgICBpZiAobWVzc2FnZS5kYXRlID09PSB0b2RheSAmJiAhdG9kYXlTZXBhcmF0b3JBZGRlZCkge1xuICAgICAgICAgICAgaHRtbCArPSBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaHJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoci1saW5lXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaHItY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPHA+VG9kYXk8L3A+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiLmNvbmNhdChhcnJvd19zdmdfMS5kZWZhdWx0LCBcIlxcXCIgYWx0PVxcXCJcXHUwNDE4XFx1MDQzQVxcdTA0M0VcXHUwNDNEXFx1MDQzQVxcdTA0MzBcXFwiLz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhyLWxpbmVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIik7XG4gICAgICAgICAgICB0b2RheVNlcGFyYXRvckFkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IFwiXFxuICAgICAgPGxpIGNsYXNzPVxcXCJtZXNzYWdlXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIi5jb25jYXQobWVzc2FnZS5hdmF0YXIsIFwiXFxcIiBhbHQ9XFxcIlxcdTA0MTBcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDMwXFx1MDQ0MCBcIikuY29uY2F0KG1lc3NhZ2UuYXV0aG9yLCBcIlxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1pbmZvXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwibWVzc2FnZS1hdXRob3JcXFwiPlwiKS5jb25jYXQobWVzc2FnZS5hdXRob3IsIFwiPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtZXNzYWdlLXRpbWVcXFwiPlwiKS5jb25jYXQobWVzc2FnZS50aW1lLCBcIjwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxwPlwiKS5jb25jYXQobWVzc2FnZS5jb250ZW50LCBcIjwvcD5cXG4gICAgICAgICAgXCIpO1xuICAgICAgICBpZiAoaW5kZXggPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBodG1sICs9IFwiXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtZW1vamlcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImVtb2ppLWJ0bi1jb3VudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIuY29uY2F0KGVtb2ppX2Zpbmdlcl9zdmdfMS5kZWZhdWx0LCBcIlxcXCIgYWx0PVxcXCJcXHUwNDE4XFx1MDQzQVxcdTA0M0VcXHUwNDNEXFx1MDQzQVxcdTA0MzAgXFx1MDQzRlxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0NDYgXFx1MDQzMlxcdTA0MzJcXHUwNDM1XFx1MDQ0MFxcdTA0NDVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZW1vamktYnRuLWFkZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIpLmNvbmNhdChlbW9qaV9zdmdfMS5kZWZhdWx0LCBcIlxcXCIgYWx0PVxcXCJcXHUwNDE4XFx1MDQzQVxcdTA0M0VcXHUwNDNEXFx1MDQzQVxcdTA0MzAgXFx1MDQ0MVxcdTA0M0NcXHUwNDMwXFx1MDQzOVxcdTA0M0JcXHUwNDM4XFx1MDQzQVxcdTA0MzBcXFwiLz4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSBcIlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgXCI7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIHZhciBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgaWYgKGNoYXRFbGVtZW50KSB7XG4gICAgICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2VMaXN0O1xuICAgIH1cbn1cbi8vINCh0YfQtdGC0YfQuNC6INC70LDQudC60L7QslxuZnVuY3Rpb24gc2V0dXBMaWtlQnV0dG9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBlbW9qaUJ0bkNvdW50LCBlbW9qaUNvdW50U3BhbiwgY3VycmVudENvdW50LCBuZXdDb3VudCwgcmVzcG9uc2UsIGVycm9yVGV4dCwgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KFwiLmVtb2ppLWJ0bi1jb3VudFwiKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppQnRuQ291bnQgPSB0YXJnZXQuY2xvc2VzdChcIi5lbW9qaS1idG4tY291bnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppQ291bnRTcGFuID0gZW1vamlCdG5Db3VudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZW1vamlCdG5Db3VudCAmJiBlbW9qaUNvdW50U3BhbikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q291bnQgPSBwYXJzZUludChlbW9qaUNvdW50U3Bhbi50ZXh0Q29udGVudCB8fCBcIjBcIiwgMTApO1xuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudCA9IGN1cnJlbnRDb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppQ291bnRTcGFuLnRleHRDb250ZW50ID0gbmV3Q291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgSDQutC90L7Qv9C60LVcbiAgICAgICAgICAgICAgICAgICAgZW1vamlCdG5Db3VudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcImh0dHBzOi8vc3R3b3JrYS5jb21cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY291bnQ6IG5ld0NvdW50IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvLCB3b3JsZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS50ZXh0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgXCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cywgXCI6IFwiKS5jb25jYXQoZXJyb3JUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkXCIsIGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xufVxucmVuZGVyQ2hhbm5lbHNMaXN0KCk7XG5zZXR1cERyb3Bkb3duRnVuY3Rpb25hbGl0eSgpO1xucmVuZGVyTWVzc2FnZXMobWVzc2FnZXNfMS5tZXNzYWdlcyk7XG5zZXR1cExpa2VCdXR0b24oKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGFubmVscyA9IHZvaWQgMDtcbmV4cG9ydHMuY2hhbm5lbHMgPSBbXG4gICAgeyBuYW1lOiBcInNsYWNrLWltcGxlbWVudGF0aW9uXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwiY2hhbmdlLWFwcHJvdmFsXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwiY3VsdHVyZS1jbHViXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwiY3VzdG9tZXJzdWNjZXNzXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwiZ2VuZXJhbFwiLCB0eXBlOiBcInB1YmxpY1wiIH0sXG4gICAgeyBuYW1lOiBcInNsYWNrLXdvcmtmbG93c1wiLCB0eXBlOiBcInB1YmxpY1wiIH0sXG4gICAgeyBuYW1lOiBcIm1hcmtldGludGVsXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwibWRjLXVwZGF0ZXNcIiwgdHlwZTogXCJwdWJsaWNcIiB9LFxuICAgIHsgbmFtZTogXCJwcm9kdWN0LWZlZWRiYWNrXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwicHJvZHVjdC1mZWVkYmFja1wiLCB0eXBlOiBcInB1YmxpY1wiIH0sXG4gICAgeyBuYW1lOiBcInByb2R1Y3QtZmVlZGJhY2tcIiwgdHlwZTogXCJwdWJsaWNcIiB9LFxuICAgIHsgbmFtZTogXCJwcm9kdWN0LXFhXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwicHJvZHVjdC1zdXBwb3J0XCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwicHJvZHVjdC10ZWFtXCIsIHR5cGU6IFwicHJpdmF0ZVwiIH0sXG4gICAgeyBuYW1lOiBcInByb2R1Y3QtZmVlZGJhY2tcIiwgdHlwZTogXCJwdWJsaWNcIiB9LFxuICAgIHsgbmFtZTogXCJwcm9kdWN0LWZlZWRiYWNrXCIsIHR5cGU6IFwicHVibGljXCIgfSxcbiAgICB7IG5hbWU6IFwicHJvZHVjdC1mZWVkYmFja1wiLCB0eXBlOiBcInB1YmxpY1wiIH0sXG4gICAgeyBuYW1lOiBcInByb2R1Y3QtcWFcIiwgdHlwZTogXCJwdWJsaWNcIiB9LFxuICAgIHsgbmFtZTogXCJwcm9kdWN0LXN1cHBvcnRcIiwgdHlwZTogXCJwdWJsaWNcIiB9LFxuXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tZXNzYWdlcyA9IHZvaWQgMDtcbmV4cG9ydHMubWVzc2FnZXMgPSBbXG4gICAge1xuICAgICAgICBhdXRob3I6IFwiTGFyYVwiLFxuICAgICAgICB0aW1lOiBcIjI6MzAgUE1cIixcbiAgICAgICAgZGF0ZTogXCIyMDI0LTA3LTA4XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiV2UgbmVlZCB0byB0aGluayBhYm91dCBob3cgd2UgY2FuIGltcHJvdmUgb3VyIGN1cnJlbnQgcHJvY2Vzcy4gVGhlIHdheSB3ZSByZWNlaXZlIGZlZWRiYWNrIGZyb20gdGhlIGNsaWVudCBpcyBtb3N0bHkgb24gVUkgYW5kIG5vdCB0aGUgZXhwZXJpZW5jZS4gTGV04oCZcyBtYWtlIHRpbWUgZm9yIGEgbWVldGluZyB0byByZXNvbHZlIHRoaXMgaXNzdWUuXCIsXG4gICAgICAgIGF2YXRhcjogXCJpbWFnZXMvbGFyYS5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYXV0aG9yOiBcIkpvcmRhblwiLFxuICAgICAgICB0aW1lOiBcIjQ6MzAgUE1cIixcbiAgICAgICAgZGF0ZTogXCIyMDI0LTA3LTA4XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiVGhlIGNsaWVudCB3YW50cyBhbiB1cGRhdGUgb24gdGhlIHByb2dyZXNzIG9mIHRoZSB3b3JrLiBXZSBjYW4gY3JlYXRlIGEgcHJvdG90eXBlIHRvIHNob3cgdGhlbSB0b21vcnJvdy5cIixcbiAgICAgICAgYXZhdGFyOiBcImltYWdlcy9qb3JkYW4uanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGF1dGhvcjogXCJTYXJhaFwiLFxuICAgICAgICB0aW1lOiBcIjQ6NDUgUE1cIixcbiAgICAgICAgZGF0ZTogXCIyMDI0LTA3LTA4XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSSBhZ3JlZS4gTGV04oCZcyB0YWxrIHRvbW9ycm93LlwiLFxuICAgICAgICBhdmF0YXI6IFwiaW1hZ2VzL3NhcmFoLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBhdXRob3I6IFwiSm9yZGFuXCIsXG4gICAgICAgIHRpbWU6IFwiODozMCBBTVwiLFxuICAgICAgICBkYXRlOiBcIjIwMjQtMDctMDlcIixcbiAgICAgICAgY29udGVudDogXCJQbGVhc2Ugc2VuZCB0aGUgcHJvamVjdCBmaWxlIHdoZW4geW91IGdldCB0aGUgY2hhbmNlLiBUaGFua3NcIixcbiAgICAgICAgYXZhdGFyOiBcImltYWdlcy9qb3JkYW4uanBnXCIsXG4gICAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI5ZjI3OTVmODM0YmExZTNiYmEwXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInByb2plY3Qtcm9vdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbnZhciBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0O1xudmFyIHdhaXRpbmdVcGRhdGVSZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuXHRjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0ID0gdXBkYXRlZE1vZHVsZXNMaXN0O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZXByb2plY3Rfcm9vdFwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==