function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Cascader, Input, Radio, Select, Switch } from "antd";
import { FORMTYPE, OPERATION } from "./constants";
export function RaeFormItem(_ref) {
  var _RaeFormEditRender, _RaeFormEditRender2;
  var content = _ref.content,
    value = _ref.value,
    _onChange = _ref.onChange,
    type = _ref.type,
    typeKey = _ref.typeKey;
  if (!(content !== null && content !== void 0 && content[typeKey])) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var RaeFormEditRender = (_RaeFormEditRender = {}, _defineProperty(_RaeFormEditRender, FORMTYPE.CASCADER, /*#__PURE__*/React.createElement(Cascader, {
    placeholder: "\u8BF7\u8F93\u5165".concat(content.title),
    value: value,
    onChange: _onChange,
    options: content.select,
    loadData: content.loadData
  })), _defineProperty(_RaeFormEditRender, FORMTYPE.INPUT, /*#__PURE__*/React.createElement(Input, {
    value: value,
    placeholder: "\u8BF7\u8F93\u5165".concat(content.title),
    onChange: _onChange
  })), _defineProperty(_RaeFormEditRender, FORMTYPE.RADIO, /*#__PURE__*/React.createElement(Radio.Group, _extends({
    options: content.select,
    value: value,
    onChange: _onChange,
    disabled: type === OPERATION.DISPLAY
  }, content))), _defineProperty(_RaeFormEditRender, FORMTYPE.SWITCH, /*#__PURE__*/React.createElement(Switch, {
    onChange: function onChange(val) {
      return _onChange === null || _onChange === void 0 ? void 0 : _onChange(val === true ? 1 : 0);
    },
    checked: typeof value === 'undefined' ? true : Boolean(value),
    disabled: type === OPERATION.DISPLAY
  })), _defineProperty(_RaeFormEditRender, FORMTYPE.SELECT, /*#__PURE__*/React.createElement(Select, {
    style: {
      minWidth: 100
    },
    allowClear: true,
    options: content.select,
    onChange: function onChange(val) {
      content.linked ? localStorage.setItem(content.dataIndex, val) : '';
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(val);
    },
    placeholder: "\u8BF7\u9009\u62E9".concat(content.title),
    value: value
  })), _defineProperty(_RaeFormEditRender, FORMTYPE.TEXTAREA, /*#__PURE__*/React.createElement(Input.TextArea, {
    disabled: type === OPERATION.DISPLAY,
    placeholder: "\u8BF7\u8F93\u5165".concat(content.title),
    onChange: _onChange,
    rows: 5,
    value: value
  })), _RaeFormEditRender);
  return (_RaeFormEditRender2 = RaeFormEditRender[content[typeKey]]) !== null && _RaeFormEditRender2 !== void 0 ? _RaeFormEditRender2 : /*#__PURE__*/React.createElement(React.Fragment, null, "\u6682\u65E0\u5339\u914D\u9879");
}
;
export default RaeFormItem;