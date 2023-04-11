import React from 'react';
import './Paginate.css';
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
const Paginate = ({

  items,
  current,
  size,
  setCurrent,
  setSize
}) => {


  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
  }

  const PerPageChange = async (value) => {
    setSize(value);
    const newPerPage = Math.ceil(await items?.length / value);
    if (current > newPerPage) {
        setCurrent(newPerPage);
    }
}
  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
        return <button><i className="fa fa-angle-double-left">Prev</i></button>;
    }
    if (type === 'next') {
        return <button><i className="fa fa-angle-double-right">Next</i></button>;
    }
    return originalElement;
}

  return (
    <Pagination
      className="pagination-data"
      showTotal={(total, range) => <p className=' text-sm'>Showing {range[0]} {range[1]} of {total}</p>}
      onChange={PaginationChange}
      total={items?.length}
      current={current}
      pageSize={size}
      showSizeChanger={false}
      itemRender={PrevNextArrow}
      onShowSizeChange={PerPageChange}
    />
  );
};

export default Paginate;