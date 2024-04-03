function Header({ dispatch, searchedPokemon }) {
  return (
    <header>
      <div className="limitpokemons">
        <span style={{ color: "#fff", marginRight: "20px", fontSize: "20px" }}>
          Number of pokemons to show
        </span>
        <input
          type="text"
          id="limitpokemons"
          onChange={(e) => {
            dispatch({
              type: "setLimit",
              payload: e.target.value,
            });
            dispatch({ type: "initSearchedPokemon" });
          }}
        />
      </div>
      <div className="sort">
        <span style={{ color: "#fff", marginRight: "20px", fontSize: "20px" }}>
          Sort By
        </span>
        <select
          id="sortpokemons"
          onChange={(e) => {
            dispatch({
              type: "sortPokemons",
              payload: e.target.value,
            });
            dispatch({ type: "initSearchedPokemon" });
          }}
        >
          <option value="default">Default</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>
      <div className="searchbar">
        <span style={{ color: "#fff", marginRight: "20px", fontSize: "20px" }}>
          Search Pokemon
        </span>
        <input
          type="text"
          id="searchpokemon"
          value={searchedPokemon}
          onChange={(e) => {
            dispatch({
              type: "searchPokemon",
              payload: e.target.value !== "" ? e.target.value : "",
            });
          }}
        />
      </div>
    </header>
  );
}

export default Header;
