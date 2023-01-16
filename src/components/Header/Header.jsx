import React, { Fragment } from "react";
import "../../../UI/Header.css";
import pokemonlogo from "../../../UI/pokemonlogo.png";
import SearchPokemon from "./SearchPokemon";
function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <label>
          <img src={pokemonlogo} />
        </label>
        <SearchPokemon
          searchPokemons={props.pokemons}
          filterPokemons={props.filterPokemons}
          setFilter={props.setFilter}
        />
      </header>
    </Fragment>
  );
}

export default Header;
