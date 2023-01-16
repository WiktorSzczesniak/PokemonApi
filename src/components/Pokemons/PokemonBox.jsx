import React from "react";
import "../../../UI/PokemonForm.css";
function PokemonBox(props) {
  const poketypes = props.info.types.map((type, index) => (
    <span key={index}>{type.type.name} </span>
  ));

  return (
    <div className="pokemonbox" onClick={props.onShow} key={props.id}>
      <h1>{props.info.name}</h1>
      <h2>{poketypes}</h2>
      <img src={props.info.sprites.front_default} />
    </div>
  );
}

export default PokemonBox;
