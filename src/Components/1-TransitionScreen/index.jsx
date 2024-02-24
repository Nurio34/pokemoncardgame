import "./styles/index.css"

function index({transition}) {
  return (
    <div className={`${transition ? "transScreen pointer-events-auto" : " pointer-events-none"} absolute w-screen h-screen z-10 pointer-events-none`}></div>
  )
}

export default index