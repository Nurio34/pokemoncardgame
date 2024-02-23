
function index({handleTransition,handleisArrangeTeamMenu}) {
  return (
    <ul >
      <li><button onClick={()=>{
        handleTransition()
        handleisArrangeTeamMenu()
      }
      }>Arrange Team</button></li>  
    </ul>
  )
}

export default index