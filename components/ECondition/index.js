function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useCallback, useEffect } from "react";
import { Button, Col, Form, Row } from "antd";
import EAnimation from "../EAnimation";
import { EFormItem } from "../..";
export function ECondition(_ref) {
  var _columns$length;
  var onConditionChange = _ref.onConditionChange,
    condition = _ref.condition,
    columns = _ref.columns;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  // 监听动态条件
  var onChange = useCallback(function (_, data) {
    return onConditionChange(function (curr) {
      return _objectSpread(_objectSpread({}, curr), data);
    });
  }, [onConditionChange]);

  // 清空
  var clearCondition = useCallback(function () {
    onConditionChange({});
    form.resetFields();
  }, [form, onConditionChange]);

  // 设置默认值
  // eslint-disable-next-line
  useEffect(function () {
    return form.setFieldsValue(condition);
  }, [condition]);
  return /*#__PURE__*/React.createElement(Form, {
    form: form,
    labelCol: {
      span: 6
    },
    layout: "inline",
    onValuesChange: onChange,
    style: {
      margin: 15,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Row, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    span: 23
  }, /*#__PURE__*/React.createElement(Row, {
    style: {
      width: '90%',
      maxWidth: 1920
    }
  }, columns === null || columns === void 0 ? void 0 : columns.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(Col, {
      key: item.key,
      span: columns.length === 4 ? 6 : 6,
      style: {
        marginBottom: 15
      }
    }, /*#__PURE__*/React.createElement(EAnimation, {
      index: idx
    }, /*#__PURE__*/React.createElement(Form.Item, {
      key: item.key,
      name: item.dataIndex,
      label: item.title
    }, /*#__PURE__*/React.createElement(EFormItem, {
      content: item,
      typeKey: "conditionType",
      type: "",
      value: ""
    }))));
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 1,
    style: {
      display: 'flex',
      flexDirection: 'column-reverse',
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(EAnimation, {
    index: (_columns$length = columns === null || columns === void 0 ? void 0 : columns.length) !== null && _columns$length !== void 0 ? _columns$length : 5
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return clearCondition();
    },
    type: "link"
  }, "\u6E05\u7A7A"))))));
}
export default ECondition;