'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DropdownFilter;

var _react = require('react');
var _react2 = _interopRequireDefault(_react);

var _style = require('@yun548/bulma-react-datatable/lib/style');
var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function DropdownFilter(_ref) {
    var props = _ref.props,
        filter = _ref.filter;

    return _react2.default.createElement('div', { className: "align-center mr-5", key: filter.key + "-div" }, _react2.default.createElement('div', { className: 'input-group-addon input-group-prepend', key: filter.key + "-label" }, _react2.default.createElement('span', { className: 'input-group-text', style: _style2.default.table_size }, filter.label ? filter.label : '')), _react2.default.createElement("select", {
        type: 'text',
        className: 'input',
        multiple: filter.multiple,
        size: 1,
        style: _style2.default.table_size_dropdown,
        key: filter.key,
        name: filter.key,
        onChange: props.addFilterDropdown
    }, _react2.default.createElement('option', { value: null }, 'All'), Object.entries(filter.choices).map(function (choice) {
        return _react2.default.createElement('option', { key: choice[1], value: choice[1] }, choice[0]);
    })));
}