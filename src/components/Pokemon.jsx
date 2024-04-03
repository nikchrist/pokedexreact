import React from "react";
function Pokemon({ pokemon }) {
  return (
    <React.Fragment key={pokemon.id}>
      <div className="pokemonname">{pokemon.name}</div>
      <div className="pokemonimage">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="stats-wrapper">
        {pokemon.stats.map((stat) => (
          <React.Fragment key={stat.stat.name}>
            <div className="statname statitem">{stat.stat.name}</div>
            <div className="statvalue statitem">{stat.base_stat}</div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Pokemon;
