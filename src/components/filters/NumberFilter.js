'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NumberFilter;

var _react = require('react');
var _react2 = _interopRequireDefault(_react);

var _style = require('@yun548/bulma-react-datatable/lib/style');
var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NumberFilter({props, filter}) {
    return _react2.default.createElement(
        'div',
        {className: "column is-one-fifth", key: filter.key + "-div"},
        _react2.default.createElement(
            'div',
            { className: 'field'},
            _react2.default.createElement(
                'label',
                { className: 'label', key: filter.key + "-label" },
                filter.label ? filter.label : ''
            ),
            _react2.default.createElement(
                "input",
                {
                    type:'number',
                    className: 'input',
                    key:filter.key,
                    name: filter.key,
                    onChange: props.addFilter
                }
            )
        )
    )
}
