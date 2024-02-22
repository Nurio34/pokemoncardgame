
import { statsColors } from "../../../../../99-Setup"
function index({stats}) {

    return (
    <div className=" flex p-1 gap-1">
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["hp"]}`,
                }}
            >
                {stats.hp}
            </p>
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["attack"]}`,
                }}
            >
                {stats.attack}
            </p>
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["defense"]}`,
                }}
            >
                {stats.defense}
            </p>
        </div>
  )
}

export default index