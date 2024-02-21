import { useState } from "react";
import "./styles/index.css"
import {Legendary_Pokemons, Non_Evolved_Pokemons, Rare_Pokemons} from "../../../1-Setup"
import Id from "./components/1-Id"
import Name from "./components/2-Name";
import Types from "./components/3-Types"
import Stats from "./components/4-Stats"
import Rare_Sticker from "./components/5-Rare_Sticker"
import Legendary_Sticker from "./components/6-Legendary_Sticker";


function index({pokemon}) {

    const [cardInfo, setCardInfo] = useState(pokemon)
    const {id,name,types,stats,sprites,base_experience} = cardInfo
    // console.log(cardInfo);
  return (
    <>
    {Non_Evolved_Pokemons.includes(name) && (
      <button
          className={`card border-[1px] border-red-500 rounded-md aspect-[0.70]
              grid justify-items-center grid-rows-[1fr,auto] relative isolate cursor-pointer
              `              
            }
          style={{backgroundImage: `url(${sprites.other.showdown.front_shiny})`}}
          id={id}
          onClick={()=>console.log(name)}
          disabled={Rare_Pokemons.includes(name) && true}
      >
          <Id id={base_experience} />
          <Name name={name} />
          <Types types={types} />
          <Stats stats={stats} />
          <Rare_Sticker name={name} />
          <Legendary_Sticker name={name} />
      </button>
    )}
</>
    
  )
}

export default index

// 