'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _tableFilters = require("../../src/components/filters/TableFilters");

var _tableFilters2 = _interopRequireDefault(_tableFilters);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function TableHeader(props) {
  if (props.config.show_length_menu == true || props.config.show_filter == true || props.config.button.excel == true || props.config.button.csv == true || props.config.button.print == true) {
    return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'level notification mb-0', id: props.id ? props.id + "-table-head" : "" }, _react2.default.createElement('div', { className: 'level-left' }, _react2.default.createElement('div', { className: 'level-item' }, props.config.show_length_menu ? _react2.default.createElement('div', { className: 'input-group asrt-page-length' }, (0, _includes2.default)(props.config.language.length_menu, '_MENU_') ? _react2.default.createElement('select', { type: 'text', className: 'input', style: _style2.default.table_size_dropdown,
      onChange: props.changePageSize }, props.config.length_menu.map(function (value, key) {
      return _react2.default.createElement('option', { key: value }, value);
    }), _react2.default.createElement('option', { value: props.recordLength }, 'All')) : null, _react2.default.createElement('div', { className: 'input-group-addon input-group-prepend' }, _react2.default.createElement('span', { className: 'input-group-text', style: _style2.default.table_size }, props.lengthMenuText[1] ? props.lengthMenuText[1] : ''))) : null)), _react2.default.createElement('div', { className: 'level-right' }, _react2.default.createElement('div', { className: 'level-item' }, props.config.show_filter ? _react2.default.createElement('div', { className: 'table_filter control', style: _style2.default.table_filter }, _react2.default.createElement('input', {
      type: 'search',
      className: 'input',
      placeholder: props.config.language.filter,
      onChange: props.filterRecords })) : null, _react2.default.createElement('div', { className: 'table_tools', style: _style2.default.table_tool }, props.config.button.excel ? _react2.default.createElement('button', { className: 'button is-primary buttons-excel',
      tabIndex: '0',
      'aria-controls': 'configuration_tbl',
      title: 'Export to Excel',
      style: _style2.default.table_tool_btn,
      onClick: props.exportToExcel }, _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'iconify', 'data-icon': 'fa:file-excel-o' }))) : null, props.config.button.csv ? _react2.default.createElement('button', { className: 'button is-primary buttons-csv',
      tabIndex: '0',
      'aria-controls': 'configuration_tbl',
      title: 'Export to CSV',
      style: _style2.default.table_tool_btn,
      onClick: props.exportToCSV }, _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'iconify', 'data-icon': 'fa:file-text-o' }))) : null, props.config.button.print ? _react2.default.createElement('button', { className: 'button is-primary buttons-pdf',
      tabIndex: '0',
      'aria-controls': 'configuration_tbl',
      title: 'Export to PDF',
      style: _style2.default.table_tool_btn,
      onClick: props.exportToPDF }, _react2.default.createElement('span', null, _react2.default.createElement('i', { className: 'iconify', 'data-icon': 'fa:print' }))) : null, props.config.button.extra == true ? props.extraButtons.map(function (elem, index) {
      elem.clickCount = 0;
      elem.singleClickTimer = '';
      return _react2.default.createElement('button', { className: elem.className ? elem.className : "button is-primary buttons-pdf",
        tabIndex: '0',
        'aria-controls': 'configuration_tbl',
        title: elem.title ? elem.title : "Export to PDF",
        style: _style2.default.table_tool_btn,
        onClick: function onClick(event) {
          elem.onClick(event);
        },
        key: index }, elem.children);
    }) : null)))), props.filters ? _react2.default.createElement(_tableFilters2.default, { props: props }) : null);
  } else {
    return null;
  }
}