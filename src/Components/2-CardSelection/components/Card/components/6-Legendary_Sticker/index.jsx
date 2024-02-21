import React from 'react'
import { Legendary_Pokemons } from '../../../../../1-Setup'

export function index ({name}) {
  return (
    <div>
        {Legendary_Pokemons.includes(name) && 
            <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(255,0,0,0.7)] 
            text-yellow-500 font-extrabold text-2xl grid place-content-center pointer-events-none">
              Legend
            </div>
          }
    </div>
  )
}

export default  index