import React, { useState } from "react";
import Header from "./components/Header/Header";
import PokemonDetails from "./components/Pokemons/PokemonDetails";
import PokemonList from "./components/Pokemons/PokemonsList";
import PokemonBox from "./components/Pokemons/PokemonBox";
import axios from "axios";

import { useEffect } from "react";
function App(props) {
  const Url = "https://pokeapi.co/api/v2/pokemon/?limit=1151";
  const [pokeData, setPokeData] = useState([]);
  const [filter, setFilter] = useState("");
  const [pokeInfo, setPokeInfo] = useState();

  const filteredPokemons = pokeData.filter((poke) => {
    return (
      poke.name.toLowerCase().startsWith(filter.toLowerCase()) ||
      poke.types.some(({ type }) =>
        type.name.toLowerCase().startsWith(filter.toLowerCase())
      )
    );
  });
  const pokeapi = async () => {
    const res = await axios.get(Url);

    getPokemon(res.data.results);
    // console.log(res.data.results);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeapi();
  }, [Url]);
  // console.log(Url.name);

  const Pokemons = filteredPokemons.map((poke, index) => (
    <PokemonBox
      key={index}
      id={poke.id}
      info={poke}
      onShow={() => {
        showDetails(poke);
      }}
    />
  ));
  const [detailsVisible, setDetailsVisible] = useState(false);
  function showDetails(pokemon) {
    setPokeInfo(pokemon);

    setDetailsVisible(true);
  }

  function hideDetails() {
    setDetailsVisible(false);
  }

  return (
    <>
      <Header
        pokemons={pokeData}
        setFilter={setFilter}
        filterPokemons={filteredPokemons}
      />
      {detailsVisible && (
        <PokemonDetails onHideDetails={hideDetails} pokemonInfo={pokeInfo} />
      )}
      <PokemonList Pokemons={Pokemons} />
    </>
  );
}

export default App;
