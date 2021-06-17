'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SwitchFilter;

var _react = require('react');
var _react2 = _interopRequireDefault(_react);

var _style = require('@yun548/bulma-react-datatable/lib/style');
var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SwitchFilter({props, filter}) {
    return _react2.default.createElement(
        'div',
        {className: "align-center mr-5 height-8", key: filter.key + "-div"},
        _react2.default.createElement(
            'div',
            { className: 'input-group-addon input-group-prepend  mb-2', key: filter.key + "-label" },
            _react2.default.createElement(
                'span',
                { className: 'input-group-text', style: _style2.default.table_size },
                filter.label ? filter.label : ''
            )
        ),
        _react2.default.createElement(
            'input',
            {
                type: "checkbox", 
                name: filter.key, 
                value: true, 
                key: filter.key,
                onChange: props.addFilterSwitch
            },
            null
        )
    )
}