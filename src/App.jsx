import { useEffect, useState } from "react"
import CardSelection from "./Components/2-CardSelection"

function App() {

  const [myTeam, setMyTeam] = useState([])

  const add_To_Team = ( card ) => {

    console.log(card);
    console.log(`New Pokemon has been added to the team`);

    setMyTeam( preState =>{ 
      return [...preState, card ]
    })
  }

  useEffect(()=>{
    // console.log(myTeam);
    // console.log("Your Team is above");
  },[myTeam])

  return (
    <div >
      <CardSelection add_To_Team={add_To_Team} />
    </div>
  )
}

export default App
