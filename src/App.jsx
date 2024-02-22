import { useEffect, useState } from "react"
import LoadingScreen from "./Components/1-LoadingScreen"
import CardSelection from "./Components/98-CardSelection"

function App() {

  const [is_Loading, setIs_Loading] = useState(true)
  const [myTeam, setMyTeam] = useState([])

  const adjustLoading = () => {
    console.log("ok");
    return setIs_Loading(preState=>{
      return !preState
    })
  }

  const add_To_Team = ( card ) => {

    const is_Already_Selected = myTeam.some(member=>member.name === card.name)
    
    if(is_Already_Selected) {
      const filtered_Team = myTeam.filter(member=>member.name !== card.name)
      setMyTeam(filtered_Team)
      console.log(`You take ${card.name} out of the Team`);
      return
    }

    console.log(card);
    console.log(`New Pokemon has been added to the team`);
    setMyTeam( preState =>{ 
      return [...preState, card ]
    })
  }

  useEffect(()=>{
    console.log(myTeam);
    console.log("Your Team is above");
  },[myTeam])

  return (
    <div >      
      {is_Loading && <LoadingScreen adjustLoading={adjustLoading} />}
      {!is_Loading && <CardSelection myTeam={myTeam} add_To_Team={add_To_Team} />}
    </div>
  )
}

export default App
