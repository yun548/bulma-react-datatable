'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SwitchFilter;

var _react = require('react');
var _react2 = _interopRequireDefault(_react);

var _style = require('@yun548/bulma-react-datatable/lib/style');
var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function SwitchFilter(_ref) {
    var props = _ref.props,
        filter = _ref.filter;

    return _react2.default.createElement('div', { className: "column is-one-fifth", key: filter.key + "-div" }, _react2.default.createElement('div', { className: 'field' }, _react2.default.createElement('label', { className: 'label', key: filter.key + "-label" }, filter.label ? filter.label : ''), _react2.default.createElement("p", {
        className: "control"
    }, _react2.default.createElement("button", {
        className: "button",
        name: filter.key,
        id: filter.key + "-true",
        value: true,
        key: filter.key,
        onClick: props.addFilterSwitch
    }, "oui")), _react2.default.createElement("p", {
        className: "control"
    }, _react2.default.createElement("button", {
        className: "button",
        name: filter.key,
        id: filter.key + "-false",
        value: false,
        key: filter.key,
        onClick: props.addFilterSwitch
    }, "non"))));
}