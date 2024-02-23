import { useEffect, useState } from "react"
import LoadingScreen from "./Components/1-LoadingScreen"
import CardSelection from "./Components/98-CardSelection"
import { data } from "autoprefixer";

function App() {

  const [is_Loading, setIs_Loading] = useState(true)
  const [pokedex, setPokedex] = useState([]);
  const [progressValue,setProgressValue] = useState(0)
  const [myTeam, setMyTeam] = useState([])

  //! isLoading State //
  const adjustLoading = () => {
    return setIs_Loading(preState=>{
      return !preState
    })
  }

  //! pokedex State //
  useEffect(() => {

    const total_Pokemon = Array(151).fill("p");
    const all_Urls = total_Pokemon.map((item,index)=>{
      return `https://pokeapi.co/api/v2/pokemon/${index + 1}/`
    })

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
        console.log('All requests completed successfully:', dataArray);
    })
    .catch(error => {
        // Handle errors from any of the requests
        console.error('Error:', error);
    });

    // const getData = async (id) => {
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //     const data = await res.json();
    //     setPokedex((preState) => {
    //         return [...preState, data];
    //     });
    // };
    // total.forEach((item, index) => getData(index + 1));
  }, []);

  useEffect(()=>{
    console.log(progressValue);
  },[progressValue])

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
    console.log(myTeam);
    console.log("Your Team is above");
  },[myTeam])

  return (
    <div >      
      {is_Loading && <LoadingScreen adjustLoading={adjustLoading} progressValue={progressValue} />}
      {!is_Loading && <CardSelection pokedex={pokedex} myTeam={myTeam} add_To_Team={add_To_Team} />}
    </div>
  )
}

export default App
