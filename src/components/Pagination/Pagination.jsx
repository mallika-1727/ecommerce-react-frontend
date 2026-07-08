function Pagination() {
  return (
    <div className="pagination-wrapper">

      <select className="show-box">
        <option>Show 10 </option>
      </select>

      <div className="pagination">
        <button className="arrow disabled">‹</button>

        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>

        <button className="arrow next">›</button>
      </div>

    </div>
  );
}

export default Pagination;