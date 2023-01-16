import React from "react";
import "../../../UI/Button.css";
function ButtonLoadMore(props) {
  return (
    <div className="ButtonDiv">
      <button className="button" onClick={props.onLoadMore}>
        Load more pokemons
      </button>
    </div>
  );
}

export default ButtonLoadMore;
