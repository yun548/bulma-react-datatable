'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableFilters;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableFilters ({props}) {
    // console.log(props);
    return _react2.default.createElement(
        'div',
        {
            className: 'level notification mb-0 justify-content-end'
        },
        props.filters.map(function (filter) {
            if (filter.type === "dropdown")  {
                return _react2.default.createElement(
                    'div',
                    {className: "align-center mr-5", key: filter.key + "-div"},
                    _react2.default.createElement(
                        'div',
                        { className: 'input-group-addon input-group-prepend', key: filter.key + "-label" },
                        _react2.default.createElement(
                            'span',
                            { className: 'input-group-text', style: _style2.default.table_size },
                            filter.label ? filter.label : ''
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        {
                            type:'text', 
                            className: 'input', 
                            multiple: filter.multiple, 
                            size:1, 
                            style: _style2.default.table_size_dropdown, 
                            key:filter.key,
                            name: filter.key,
                            onChange: props.addFilterDropdown
                        },
                        _react2.default.createElement(
                            'option',
                            { value: null },
                            'All'
                        ),
                        Object.entries(filter.choices).map(function (choice) {
                            return _react2.default.createElement(
                                'option',
                                {key:choice[1], value:choice[1]},
                                choice[0]
                            );
                        })
                    )
                )
            } else if (filter.type === "switch"){
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
                
        })

    );
}

