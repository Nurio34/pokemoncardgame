import React from 'react'
import { Rare_Pokemons } from '../../../../../1-Setup'

export default function index({name}) {
  return (
    <div>
        {Rare_Pokemons.includes(name) && 
            <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(255,255,0,0.7)] 
            text-red-500 font-extrabold text-2xl grid place-content-center pointer-events-none">
              Rare
            </div>
          }
    </div>
  )
}
