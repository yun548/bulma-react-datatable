import React from 'react';
import Pagination from './Pagination';
import ADPagination from './ADPagination';

export default function TableFooter(props){
    if(props.config.show_info==true || props.config.show_pagination==true){
      return (
        <div className="notification" id={(props.id) ? props.id + "-table-foot" : ""}>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <small>
                  {(props.config.show_info) ? props.paginationInfo : null}
                </small>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                {(props.config.show_pagination) ? (
                  <nav aria-label="Page navigation" className="pull-right">
                    <ul className="pagination justify-content-end asrt-pagination">
                      {props.config.pagination == "basic" ? (
                        <Pagination
                          config={props.config}
                          isFirst={props.isFirst}
                          isLast={props.isLast}
                          pages={props.pages}
                          page_number={props.page_number}
                          is_temp_page={props.is_temp_page}
                          temp_page_number={props.temp_page_number}
                          previousPage={props.previousPage}
                          firstPage={props.firstPage}
                          nextPage={props.nextPage}
                          lastPage={props.lastPage}
                          goToPage={props.goToPage}
                          onPageChange={props.onPageChange}
                          onPageBlur={props.onPageBlur} />
                      ) : (
                      <ADPagination
                        language={props.config.language}
                        isFirst={props.isFirst}
                        isLast={props.isLast}
                        pages={props.pages}
                        page_number={props.page_number}
                        previousPage={props.previousPage}
                        nextPage={props.nextPage}
                        goToPage={props.goToPage}/>
                      )}
                    </ul>
                  </nav>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
