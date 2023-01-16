import React from "react";
import PokemonModal from "./PokemonModal";
import "../../../UI/PokemonDetails.css";
function PokemonDetails(props) {
  const PokemonInfo = props.pokemonInfo;
  const PokeAbilities = PokemonInfo.abilities.map((abi, index) => (
    <li key={index}>
      {abi.ability.name[0].toUpperCase() + abi.ability.name.substring(1)}
    </li>
  ));
  const PokeStats = PokemonInfo.stats.map((stat, index) => (
    <li key={index}>
      {stat.stat.name}: {stat.base_stat}
    </li>
  ));
  const PokeTypes = PokemonInfo.types.map((type, index) => (
    <li key={index}>{type.type.name}</li>
  ));
  return (
    <PokemonModal onClose={props.onHideDetails}>
      <div className="details">
        <h1>
          {PokemonInfo.name[0].toUpperCase() + PokemonInfo.name.substring(1)}
        </h1>
        <div className="line"></div>
        <div className="images">
          <img src={PokemonInfo.sprites.front_default}></img>
          <img src={PokemonInfo.sprites.back_default}></img>
          <img src={PokemonInfo.sprites.front_shiny}></img>
          <img src={PokemonInfo.sprites.back_shiny}></img>
        </div>
        <div className="line"></div>
        <div className="pokemoninfo">
          <div className="profile">
            <h2>Profile</h2>
            <li>Height: {PokemonInfo.height}m</li>
            <li>Weight: {PokemonInfo.weight}kg</li>
          </div>
          <div className="abilities">
            <h2>Abilities</h2>
            {PokeAbilities}
          </div>
          <div className="stats">
            <h2>Stats</h2>
            {PokeStats}
          </div>
          <div className="types">
            <h2>Types</h2>
            {PokeTypes}
          </div>
        </div>
      </div>
    </PokemonModal>
  );
}

export default PokemonDetails;
