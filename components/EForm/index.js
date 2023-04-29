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
import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { EFormItem } from "../..";
import { BottomToTop } from "../..";
import { useTrigger } from "./useTrigger";
export function EForm(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$affairData = _ref.affairData,
    affairData = _ref$affairData === void 0 ? {} : _ref$affairData,
    affairWidth = _ref.affairWidth,
    extendForm = _ref.extendForm,
    type = _ref.type,
    _ref$isShowSumbit = _ref.isShowSumbit,
    isShowSumbit = _ref$isShowSumbit === void 0 ? true : _ref$isShowSumbit,
    _ref$hiddenLabels = _ref.hiddenLabels,
    hiddenLabels = _ref$hiddenLabels === void 0 ? [] : _ref$hiddenLabels,
    onAffairSuccess = _ref.onAffairSuccess;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useTrigger = useTrigger(false),
    _useTrigger2 = _slicedToArray(_useTrigger, 2),
    loading = _useTrigger2[0],
    setLoading = _useTrigger2[1];
  var onSumbit = useCallback(function () {
    form.validateFields().then(function () {
      setLoading(true);
      form.submit();
    });
  }, [form]);

  // eslint-disable-next-line
  useEffect(function () {
    return Object.keys(affairData).length === 0 ? form.resetFields() : form.setFieldsValue(_objectSpread({
      enabled: 0
    }, affairData));
  }, [affairData]);
  return /*#__PURE__*/React.createElement(Form, {
    form: form,
    layout: "horizontal",
    labelAlign: "right",
    labelCol: {
      span: affairWidth && affairWidth > 900 ? 2 : 5
    },
    labelWrap: true,
    onFinish: function onFinish(values) {
      return onAffairSuccess(values);
    }
  }, /*#__PURE__*/React.createElement(Form.Item, {
    style: {
      display: 'none'
    },
    name: "id"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "hidden"
  })), data === null || data === void 0 ? void 0 : data.map(function (item, idx) {
    var _item$rules;
    return /*#__PURE__*/React.createElement(BottomToTop, {
      key: item.key,
      index: idx
    }, /*#__PURE__*/React.createElement(Form.Item, {
      key: item.key,
      label: /*#__PURE__*/React.createElement(React.Fragment, null, hiddenLabels.includes(item.title) ? '' : item.title),
      name: item.dataIndex,
      rules: (_item$rules = item.rules) !== null && _item$rules !== void 0 ? _item$rules : []
    }, /*#__PURE__*/React.createElement(EFormItem, {
      value: true,
      content: item,
      onChange: item.onChange,
      type: type,
      typeKey: "affairType"
    })));
  }), /*#__PURE__*/React.createElement(BottomToTop, {
    index: data.length + 1
  }, extendForm), isShowSumbit ? /*#__PURE__*/React.createElement(BottomToTop, {
    index: extendForm ? data.length + 2 : data.length + 1
  }, /*#__PURE__*/React.createElement(Form.Item, {
    wrapperCol: {
      offset: data.filter(function (item) {
        return hiddenLabels.includes(item.title);
      }).length ? 0 : affairWidth && affairWidth > 900 ? 2 : 5
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    loading: loading,
    type: "primary",
    onClick: onSumbit
  }, "\u786E\u8BA4"), type !== 'display' ? /*#__PURE__*/React.createElement(Button, {
    type: "link",
    onClick: function onClick() {
      return form.resetFields();
    }
  }, "\u6E05\u7A7A") : ''))) : '');
}
export default EForm;