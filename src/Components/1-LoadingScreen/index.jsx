
import Video1 from "../../../../../static/video1.mp4"
import LoadingSection from "./components/LoadingSection"
import VideoSection from "./components/VideoSection"

function index({adjustLoading, progressValue}) {



  return (
    <div onClick={adjustLoading}>
        <LoadingSection progressValue={progressValue} />
        {/* <VideoSection /> */}
    </div>
  )
}

export default index