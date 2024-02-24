
import LoadingBg_Mobile_Low from "../../assets/LoadingBg_Mobile.webp"
import LoadingBg_Mobile_High from "../../assets/LoadingBg_Mobile.png"

import "./styles/index.css"


function index({progressValue,is_Loading,handleIsStarted,handleTransition}) {

  return (
    <div className="relative w-screen h-screen">

      <div className=" w-full h-full" 
        style={
          {
            backgroundImage:`url(${LoadingBg_Mobile_Low})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            backgroundPosition:"center"
          }
        }
      >
        <img loading="lazy" decoding="async" src={LoadingBg_Mobile_Low} alt="" className=" w-full h-full object-cover" />
      </div>

        {is_Loading &&<div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-red-400 p-1 rounded-lg">
            <input type="range" name="" id="" value={progressValue}/>
        </div>}

        {!is_Loading && <button className="btn absolute bottom-1/4 left-1/2 -translate-x-1/2 rounded-lg bg-white text-yellow-500 uppercase font-extrabold w-max py-1 px-2 overflow-hidden"
              onClick={()=>{
                handleIsStarted()
                handleTransition()
              }}
            >
              start jorney
            </button>}

        <div className="logo w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="front bg-yellow-500 w-full h-full"></div>
        </div>

    </div>
  )
}

export default index