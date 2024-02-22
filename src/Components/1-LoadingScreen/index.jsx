
import LoadingBg from "../../assets/LoadingBg_638_1134.jpg"

function index({adjustLoading}) {
  return (
    <div onClick={adjustLoading}>
        <img src={LoadingBg} alt="" />
    </div>
  )
}

export default index