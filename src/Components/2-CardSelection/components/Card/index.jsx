import { useState } from "react";
import "./styles/index.css"
import Id from "./components/1-Id"
import Name from "./components/2-Name";
import Types from "./components/3-Types"
import Stats from "./components/4-Stats"
import Sticker from "./components/5-Sticker"
import { Pokemons } from "../../../1-Setup";


function index({all_Pokemons, pokemon, add_To_Team}) {

    const [cardInfo, setCardInfo] = useState(pokemon)
    const {id,name,types,stats,sprites,base_experience} = cardInfo
    const category = () => {
      if(Object.values(Pokemons).filter(obj=>obj.Pokemons.includes(name))[0]) {
        return Object.values(Pokemons).filter(obj=>obj.Pokemons.includes(name))[0]["Category"]
      }
    } 

    // console.log(Pokemons);

  return (
    <>
    {all_Pokemons.includes(name) &&(
      <button
          className={`card border-[1px] border-red-500 rounded-md aspect-[0.70]
              grid justify-items-center grid-rows-[1fr,auto] relative isolate cursor-pointer
              `              
            }
          style={{backgroundImage: `url(${sprites.other.showdown.front_shiny})`}}
          id={id}
          onClick={()=>{
            add_To_Team(cardInfo)
          }}
          disabled={!Pokemons.Common_Pokemons.Pokemons.includes(name) && true}
      >
          <Id id={id} />
          <Name name={name} />
          <Types types={types} />
          <Stats stats={stats} />
          <Sticker name={name} category={category} />
      </button>
    )}
</>
    
  )
}

export default index

// 