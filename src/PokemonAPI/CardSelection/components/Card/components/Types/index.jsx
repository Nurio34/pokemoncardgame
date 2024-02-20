
import Type from "./components/Type";

function index({types}) {
  return (
    <div className=" absolute bottom-8 right-0 grid gap-1 p-1 -z-10 ">
        {types.map((type,index) => {
            return (
                <Type key={index} type={type} />
            );
        })}
    </div>
  )
}

export default index