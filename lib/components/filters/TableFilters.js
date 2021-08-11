'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TableFilters;

var _react = require('react');
var _react2 = _interopRequireDefault(_react);

var _style = require('@yun548/bulma-react-datatable/lib/style');
var _style2 = _interopRequireDefault(_style);

var _dropdownFilter = require("./DropdownFilter");
var _dropdownFilter2 = _interopRequireDefault(_dropdownFilter);

var _switchFilter = require("./SwitchFilter");
var _switchFilter2 = _interopRequireDefault(_switchFilter);

var _numberFilter = require("./NumberFilter");
var _numberFilter2 = _interopRequireDefault(_numberFilter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function TableFilters(_ref) {
    var props = _ref.props;

    return _react2.default.createElement('div', {
        className: 'notification columns is-multiline pt-0'
    }, props.filters.map(function (filter) {
        if (filter.type === 'dropdown') {
            return _react2.default.createElement(_dropdownFilter2.default, {
                props: props,
                filter: filter,
                key: filter.key
            });
        }

        if (filter.type === 'switch') {
            return _react2.default.createElement(_switchFilter2.default, {
                props: props,
                filter: filter,
                key: filter.key
            });
        }

        if (filter.type === 'number') {
            return _react2.default.createElement(_numberFilter2.default, {
                props: props,
                filter: filter,
                key: filter.key
            });
        }

        return null;
    }));
}