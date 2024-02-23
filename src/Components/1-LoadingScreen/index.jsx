
import LoadingBg1 from "../../assets/LoadingBg_638_1134.jpg"
import LoadingBg2 from "../../assets/LoadingBg_800_1421.jpg"
import "./styles/index.css"


function index({progressValue,is_Loading,handleIsStarted,handleTransition}) {
  return (
    <div className="relative">

        <img src={LoadingBg1} alt="" />

        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-red-400 p-1 rounded-lg">
            {is_Loading &&<input type="range" name="" id="" value={progressValue}
            />}
            {progressValue > 99.99 && <button className="btn rounded-lg absolute bg-white text-yellow-500 uppercase font-extrabold -bottom-[200%] left-1/2 -translate-x-1/2 w-max py-1 px-2 overflow-hidden"
              onClick={()=>{
                handleIsStarted()
                handleTransition()
              }}
            >
              start jorney
            </button>}
        </div>

        <div className="logo w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="front bg-yellow-500 w-full h-full"></div>
        </div>

    </div>
  )
}

export default index