
import "./styles/index.css"

function index({myTeam}) {
    console.log(myTeam);
  return (
    <div className={`fixed bottom-0 flex flex-wrap items-center bg-red-500 gap-2 max-h-[75px]
    ${myTeam.length && "p-2"}`
    }>
        {myTeam.map(member=>{
            return (
                <div key={member.id} className="mini_card w-12 aspect-[9/11] rounded-md"
                    style={{backgroundImage:`url(${member.images.front_shiny})`,backgroundColor:"rgba(255,255,255)"}}
                >

                </div>
            )
        })}
        {myTeam.length > 0 && (
            <button className=" bg-purple-600 py-1 px-2 text-white">Ready</button>
        )}
    </div>
  )
}

export default index