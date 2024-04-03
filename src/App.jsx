import React, { useEffect, useReducer } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
const MAIN_URL = "https://pokeapi.co/api/v2/pokemon";
let sortedpokemons = [];
const initialState = {
  limit: -1,
  offset: 0,
  pokemons: [],
  firstload: true,
  sortby: "",
  visible: false,
  searchedPokemon: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "setLimit":
      return { ...state, limit: action.payload !== "" ? action.payload : -1 };
    case "setOffset":
      return { ...state, offset: state.offset };
    case "populatePokemons":
      return {
        ...state,
        pokemons: state.pokemons,
      };
    case "isFirstLoad":
      return { ...state, firstload: false };
    case "sortPokemons":
      return { ...state, sortby: action.payload };
    case "scrollTopIsVisible":
      return { ...state, visible: true };
    case "scrollTopNotVisible":
      return { ...state, visible: false };
    case "searchPokemon":
      return {
        ...state,
        searchedPokemon: action.payload,
      };
    case "initSearchedPokemon":
      return { ...state, searchedPokemon: initialState.searchedPokemon };
    default:
      new Error("action not found!!!");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let { limit, offset, pokemons, firstload, sortby, searchedPokemon } = state;

  useEffect(
    function () {
      async function getPokemons() {
        const res = await fetch(
          MAIN_URL +
            "/?limit=" +
            initialState.limit +
            "&offset=" +
            initialState.offset
        );
        const data = await res.json();
        const results = await data.results;
        results.map(async (result) => {
          let pokemon = await fetch(result.url).then((res) => res.json());
          dispatch({
            type: "populatePokemons",
            payload: pokemons.push(pokemon),
          });
        });
      }
      if (firstload === true) {
        getPokemons();
        dispatch({ type: "isFirstLoad" });
      }
    },
    [firstload, limit, offset, pokemons]
  );
  return (
    <React.Fragment>
      <div className="app">
        <Header dispatch={dispatch} searchedPokemon={state.searchedPokemon} />
        <PokemonList
          pokemons={pokemons}
          sortedpokemons={sortedpokemons}
          sortby={sortby}
          limit={limit}
          searchedPokemon={searchedPokemon}
          dispatch={dispatch}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
