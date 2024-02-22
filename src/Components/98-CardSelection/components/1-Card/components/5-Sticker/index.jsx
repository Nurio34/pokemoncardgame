import React from 'react'
import { Category_Colors } from '../../../../../99-Setup'

export default function index({name, category, in_Team}) {

  return (
    <div>
        { 
            <div className={`absolute top-0 left-0 w-full h-full font-extrabold text-xl grid place-content-center pointer-events-none uppercase`}
              style={
                {
                  backgroundColor:`${Category_Colors[category()]["bgClr"]}`,
                  color:`${Category_Colors[category()]["textClr"]}`
                }
            }
            >
              {!in_Team && category() !== "common" && <p className=' rotate-45'>{category()}</p>}
              {in_Team && <p className=' rotate-45'>team</p>}
            </div>
          }
    </div>
  )
}
