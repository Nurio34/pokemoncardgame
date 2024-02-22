import React from 'react'
import { Category_Colors } from '../../../../../1-Setup'

export default function index({name,category}) {

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
              {category() !== "common" && <p className=' rotate-45'>{category()}</p>}
            </div>
          }
    </div>
  )
}
