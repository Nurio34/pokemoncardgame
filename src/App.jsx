import { useEffect, useState } from "react"
import TransitionScreen from "./Components/1-TransitionScreen"
import LoadingScreen from "./Components/1-LoadingScreen"
import HomeScreen from "./Components/3-HomeScreen"
import CardSelection from "./Components/98-CardSelection"

function App() {

  const [pokedex, setPokedex] = useState([]);
  const [progressValue,setProgressValue] = useState(0)
  const [is_Loading, setIs_Loading] = useState(false)
  const [is_Started, setIs_Started] = useState(false)
  const [transition, setTransition] = useState(false)
  const [is_arrangeTeamMenu,setIs_arrangeTeamMenu] = useState(false)

  const [myTeam, setMyTeam] = useState([])

  //! pokedex State //
  useEffect(() => {

    const total_Pokemon = Array(151).fill("p");
    const all_Urls = total_Pokemon.map((item,index)=>{
      return `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
    })

    //TODO progressValue State //
    const fetchWithProgress = (url) => {
      return fetch(url)
          .then(response => {
              // Update progress for each request
              setProgressValue(preState => {
                return preState += 100 / all_Urls.length;
              })
              
              return response.json();
          });
  };

  const promises = all_Urls.map(url => fetchWithProgress(url));


  Promise.all(promises)
    .then(dataArray => {
        // All requests completed successfully
        setPokedex(dataArray)
    })
    .catch(error => {
        // Handle errors from any of the requests
        console.error('Error:', error);
    });
  }, []);

  
  //! isLoading State //
  useEffect(()=>{
    if(pokedex){
        return setIs_Loading(preState=>{
          return !preState
        })
    }
  },[pokedex])

  //! isStarted State //
  const handleIsStarted = () => {
    
    return setTimeout(() => {
      setIs_Started(preState=>{
        return !preState
      })
    }, 2000);
  }

  //! transition State //

  const handleTransition = () => {
    return setTransition(preState=>{
      return !preState
    })
  }

  useEffect(()=>{
    if(transition) {
      const timer = setTimeout(() => {
        handleTransition()
      }, 4000);
  
      return () => clearInterval(timer)
    }
    
  },[transition])

  //! is_arrangeTeamMenu State //
  const handleisArrangeTeamMenu = () => {
    return setTimeout(() => {
      setIs_arrangeTeamMenu(preState=>{
        return !preState
      })
    }, 2000);
  }


  //!myTeam State //
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
    if(myTeam.length > 0){
      console.log(myTeam);
    console.log("Your Team is above");
    return
    }
  },[myTeam])

  return (
    <div className=" overflow-hidden">   
      <TransitionScreen transition={transition} />
      {!is_Started && <LoadingScreen progressValue={progressValue} is_Loading={is_Loading} handleIsStarted={handleIsStarted} handleTransition={handleTransition} />}
      {is_Started && !is_arrangeTeamMenu && <HomeScreen handleTransition={handleTransition} handleisArrangeTeamMenu={handleisArrangeTeamMenu}  />}
      {is_arrangeTeamMenu && <CardSelection pokedex={pokedex} myTeam={myTeam} add_To_Team={add_To_Team} />}
    </div>
  )
}

export default App
