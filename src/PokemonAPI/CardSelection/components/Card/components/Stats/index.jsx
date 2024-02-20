
import { statsColors } from "../../../../../Setup";

function index({stats}) {
  return (
    <div className=" flex p-1 gap-1">
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["hp"]}`,
                }}
            >
                {stats.map((item) => {
                    if (item.stat.name === "hp")
                        return item.base_stat;
                })}
            </p>
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["attack"]}`,
                }}
            >
                {stats.map((item) => {
                    if (item.stat.name === "attack")
                        return item.base_stat;
                })}
            </p>
            <p
                className=" text-white px-1"
                style={{
                    backgroundColor: `${statsColors["defense"]}`,
                }}
            >
                {stats.map((item) => {
                    if (item.stat.name === "defense")
                        return item.base_stat;
                })}
            </p>
        </div>
  )
}

export default index