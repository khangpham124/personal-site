import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";

type TPaginateProps = {
  total: number;
  pageSize: number;
  pageIndex: number;
  onChange: ({ selected: number }) => void;
};

const Paginate: React.FC<TPaginateProps> = ({
  total,
  pageSize,
  pageIndex,
  onChange,
  ...rest
}) => {
  const pageCount = Math.ceil(total / pageSize);

  const handleChange = ({ selected }) => {
    onChange?.({ selected: selected + 1 });
  };

  return (
    pageCount > 1 && (
      <ReactPaginate
        pageCount={pageCount}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        containerClassName={styles["Paginate"]}
        pageClassName={styles["Paginate__page"]}
        pageLinkClassName={styles["Paginate__page-link"]}
        activeClassName={styles["active"]}
        breakClassName={styles["Paginate__break"]}
        previousClassName={styles["Paginate__previousBtn"]}
        nextClassName={styles["Paginate__nextBtn"]}
        disabledClassName={styles["disabled"]}
        marginPagesDisplayed={2}
        onPageChange={handleChange}
        forcePage={pageIndex - 1}
        {...rest}
      />
    )
  );
};

export default Paginate;
