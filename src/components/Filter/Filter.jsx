import React from "react";
import PropTypes from "prop-types";

import "./Filter.styles.css";

const Filter = ({ filterText, handleFilter }) => {
  return (
    <>
      <label className="filter-label">
        Find contacts by name
        <input
          className="filter-input"
          type="text"
          value={filterText}
          onChange={({ target }) => handleFilter(target)}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
