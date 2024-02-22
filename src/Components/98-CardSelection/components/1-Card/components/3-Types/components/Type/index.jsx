import { typeColors } from "../../../../../../../99-Setup"

function Type({type}) {
  return (
    <div
        key={type.type.name}
        className="w-4 aspect-square border-[1px] border-red-500 rounded-sm"
        style={{
            backgroundColor: `${
                typeColors[type.type.name]
            }`,
        }}
    ></div>
  )
}

export default Type