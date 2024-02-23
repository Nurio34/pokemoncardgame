import { useState } from "react";
import "./styles/index.css"
import Id from "./components/1-Id"
import Name from "./components/2-Name";
import Types from "./components/3-Types"
import Stats from "./components/4-Stats"
import Sticker from "./components/5-Sticker"
import { Pokemons } from "../../../99-Setup";


function index({not_Evolved_Pokemons, pokemon, add_To_Team}) {

    const [pokemonCard, setPokemonCard] = useState({
      id : pokemon.id,
      name : pokemon.name,
      types : pokemon.types,
      stats : {
        hp : pokemon.stats.map((item) => {
          if (item.stat.name === "hp")
              return item.base_stat;
        }).filter(item=>item)[0],
        attack : pokemon.stats.map((item) => {
          if (item.stat.name === "attack")
              return item.base_stat;
        }).filter(item=>item)[0],
        defense : pokemon.stats.map((item) => {
          if (item.stat.name === "defense")
              return item.base_stat;
        }).filter(item=>item)[0],
      },
      gifs : pokemon.sprites.other.showdown,
      images : pokemon.sprites,
      in_Team : false,
      category : () => {
        if(Object.values(Pokemons).filter(obj=>obj.Pokemons.includes(name))[0]) {
          return Object.values(Pokemons).filter(obj=>obj.Pokemons.includes(name))[0]["Category"]
        }
      } 
    })
    const {id,name,types,stats,gifs,category,in_Team} = pokemonCard

  return (
    <>
    {not_Evolved_Pokemons.includes(name) &&(
      <button
          className={`card border-[1px] border-red-500 rounded-md aspect-[0.70]
              grid justify-items-center grid-rows-[1fr,auto] relative isolate cursor-pointer
              `              
            }
          style={{backgroundImage: `url(${gifs.front_shiny})`}}
          id={id}
          onClick={()=>{
            setPokemonCard(preState=>{
              return {...preState,in_Team:!pokemonCard.in_Team}
            })
            add_To_Team(pokemonCard)
          }}
          disabled={!Pokemons.Common_Pokemons.Pokemons.includes(name) && true}
      >
          <Id id={id} />
          <Name name={name} />
          <Types types={types} />
          <Stats stats={stats} />
          <Sticker name={name} category={category} in_Team={in_Team} />
      </button>
    )}
</>
    
  )
}

export default index

// 