import React from "react";
import Pokemon from "./Pokemon";
function PokemonList({
  pokemons,
  sortby,
  limit,
  searchedPokemon,
  sortedpokemons,
}) {
  switch (sortby) {
    case "az":
      sortedpokemons = pokemons
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      sortedpokemons = pokemons
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "default":
      sortedpokemons = pokemons.slice();
      break;
    default:
      sortedpokemons = pokemons.slice();
  }
  if (searchedPokemon === "") {
    pokemons = sortedpokemons;
  }
  return (
    <div className="pokemon-wrapper">
      {searchedPokemon !== "" &&
        pokemons
          .filter(
            (pokemon, index) =>
              (index < limit || limit === -1) &&
              pokemon.name.includes(searchedPokemon)
          )
          .map((pokemon, index) => (
            <div className="pokemon" key={pokemon.id}>
              <Pokemon pokemon={pokemon} key={pokemon.id} />
            </div>
          ))}
      {searchedPokemon === "" &&
        sortedpokemons
          .filter((pokemon, index) => index < limit || limit === -1)
          .map((pokemon, index) => (
            <div className="pokemon" key={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </div>
          ))}
    </div>
  );
}

export default PokemonList;
