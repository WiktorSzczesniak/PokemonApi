import React, { useState } from "react";
import "../../../UI/SearchPokemon.css";
function SearchPokemon(props) {
  const [name, setName] = useState("");
  const filter = (event) => {
    const keyword = event.target.value;
    setName(keyword);
    props.setFilter(keyword);
  };
  return (
    <div>
      <input
        className="input"
        placeholder="Search Pokemon"
        onChange={filter}
        list="data"
        value={name}
        options={props.filterPokemons}
      />

      {/* <datalist id="data" className="datalist">
        {" "}
        {props.filterPokemons.map((name, index) => (
          <option key={index}>{name.name}</option>
        ))}
      </datalist> */}
    </div>
  );
}

export default SearchPokemon;
