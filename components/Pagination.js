import React from "react";
import { Pagination } from "antd";

export const PaginationBooks = ({ currentPage, totalBooks, paginate }) => {
  const onChange = (page) => {
    paginate(page);
  };

  return (
    <Pagination
      onChange={() => paginate()}
      style={{ width: "100%", margin: "5rem 0" }}
      current={currentPage}
      defaultCurrent={1}
      total={totalBooks}
      onChange={onChange}
    />
  );
};
