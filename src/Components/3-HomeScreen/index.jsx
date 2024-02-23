
import Menu from "./components/Menu/index"

function index({handleTransition,handleisArrangeTeamMenu}) {
  return (
    <div>
        <Menu handleTransition={handleTransition} handleisArrangeTeamMenu={handleisArrangeTeamMenu} />
    </div>
  )
}

export default index