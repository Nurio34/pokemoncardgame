import LoadingBg from "../../../../assets/LoadingBg_638_1134.jpg"
import LoadingBg2 from "../../../../assets/LoadingBg_800_1421.jpg"
import "./styles/index.css"


function index({progressValue}) {
  return (
    <div className="relative">

        <img src={LoadingBg} alt="" />

        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-red-400 p-1 rounded-lg">
            <input type="range" name="" id="" value={progressValue}
                className="  " 
            />
            <button className="btn rounded-lg absolute bg-white text-yellow-500 uppercase font-extrabold -bottom-[200%] left-1/2 -translate-x-1/2 w-max py-1 px-2 overflow-hidden">start jorney</button>
        </div>

        <div className="logo w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <img src={LoadingBg2} alt="" /> */}
            <div className="front bg-yellow-500 w-full h-full"></div>
        </div>


    </div>
  )
}

export default index