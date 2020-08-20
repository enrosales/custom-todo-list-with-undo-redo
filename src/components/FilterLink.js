import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalState";

function FilterLink({ children }) {
  const { filter, setFilter } = useContext(GlobalContext);
  const disabled = filter === children;

  const handleClick = () => {
      setFilter(children);
  }
  return (
    <button
      disabled={disabled}
      onClick={() => handleClick()}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
}

export default FilterLink;

FilterLink.propTypes = {
  children: PropTypes.node.isRequired,
};
