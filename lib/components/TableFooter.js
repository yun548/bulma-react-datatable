'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableFooter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _ADPagination = require('./ADPagination');

var _ADPagination2 = _interopRequireDefault(_ADPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableFooter(props) {
  if (props.config.show_info == true || props.config.show_pagination == true) {
    return _react2.default.createElement(
      'div',
      { className: 'notification', id: props.id ? props.id + "-table-foot" : "" },
      _react2.default.createElement(
        'div',
        { className: 'level' },
        _react2.default.createElement(
          'div',
          { className: 'level-left' },
          _react2.default.createElement(
            'div',
            { className: 'level-item' },
            _react2.default.createElement(
              'small',
              null,
              props.config.show_info ? props.paginationInfo : null
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'level-right' },
          _react2.default.createElement(
            'div',
            { className: 'level-item' },
            props.config.show_pagination ? _react2.default.createElement(
              'nav',
              { 'aria-label': 'Page navigation', className: 'pull-right' },
              _react2.default.createElement(
                'ul',
                { className: 'pagination justify-content-end asrt-pagination' },
                props.config.pagination == "basic" ? _react2.default.createElement(_Pagination2.default, {
                  config: props.config,
                  isFirst: props.isFirst,
                  isLast: props.isLast,
                  pages: props.pages,
                  page_number: props.page_number,
                  is_temp_page: props.is_temp_page,
                  temp_page_number: props.temp_page_number,
                  previousPage: props.previousPage,
                  firstPage: props.firstPage,
                  nextPage: props.nextPage,
                  lastPage: props.lastPage,
                  goToPage: props.goToPage,
                  onPageChange: props.onPageChange,
                  onPageBlur: props.onPageBlur }) : _react2.default.createElement(_ADPagination2.default, {
                  language: props.config.language,
                  isFirst: props.isFirst,
                  isLast: props.isLast,
                  pages: props.pages,
                  page_number: props.page_number,
                  previousPage: props.previousPage,
                  nextPage: props.nextPage,
                  goToPage: props.goToPage })
              )
            ) : null
          )
        )
      )
    );
  } else {
    return null;
  }
}