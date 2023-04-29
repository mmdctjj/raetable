var _excluded = ["direction"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import styled, { keyframes } from "styled-components";
var rightToLeft = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(50%);\n  }\n  80% {\n    transform: translateX(-2%)\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1\n  }\n"])));
var rlefTotight = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateX(-50%);\n  }\n  80% {\n    transform: translateX(2%)\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1\n  }\n"])));
var bottomToTop = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    transform: translateY(50%);\n  }\n\n  80% {\n    transform: translateY(-10%);\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1\n  }\n"])));
export var RightToLeft = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  transform: translateX(50%);\n  opacity: 0;\n  animation: ", " ", "ms;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: ", "ms\n"])), rightToLeft, function (props) {
  var _props$duration;
  return (_props$duration = props.duration) !== null && _props$duration !== void 0 ? _props$duration : 300;
}, function (props) {
  var _props$index, _props$delay;
  return ((_props$index = props.index) !== null && _props$index !== void 0 ? _props$index : 0) * ((_props$delay = props.delay) !== null && _props$delay !== void 0 ? _props$delay : 130);
});
export var LeftToRight = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  transform: translateX(-100%);\n  opacity: 0;\n  animation: ", " ", "ms;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: ", "ms;\n"])), rlefTotight, function (props) {
  var _props$duration2;
  return (_props$duration2 = props.duration) !== null && _props$duration2 !== void 0 ? _props$duration2 : 300;
}, function (props) {
  var _props$index2, _props$delay2;
  return ((_props$index2 = props.index) !== null && _props$index2 !== void 0 ? _props$index2 : 0) * ((_props$delay2 = props.delay) !== null && _props$delay2 !== void 0 ? _props$delay2 : 130);
});
export var BottomToTop = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  transform: translateY(50%);\n  opacity: 0;\n  animation: ", " ", "ms;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: ", "ms\n"])), bottomToTop, function (props) {
  var _props$duration3;
  return (_props$duration3 = props.duration) !== null && _props$duration3 !== void 0 ? _props$duration3 : 300;
}, function (props) {
  var _props$index3, _props$delay3;
  return ((_props$index3 = props.index) !== null && _props$index3 !== void 0 ? _props$index3 : 0) * ((_props$delay3 = props.delay) !== null && _props$delay3 !== void 0 ? _props$delay3 : 130);
});
export var EAnimation = function EAnimation(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'BT' : _ref$direction,
    eAnimationProps = _objectWithoutProperties(_ref, _excluded);
  var Animation = {
    'BT': /*#__PURE__*/React.createElement(BottomToTop, eAnimationProps),
    'RL': /*#__PURE__*/React.createElement(RightToLeft, eAnimationProps),
    'LR': /*#__PURE__*/React.createElement(LeftToRight, eAnimationProps)
  };
  return Animation[direction];
};
export default EAnimation;