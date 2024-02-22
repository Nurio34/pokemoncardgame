import { useState, useEffect } from "react";
import "./styles/index.css"
import { Pokemons } from "../../Components/1-Setup";
import Card from "./components/Card"

function index({add_To_Team}) {

    const [pokedex, setPokedex] = useState([]);
    const [all_Pokemons,setAll_Pokemons] = useState(()=>{
        return Object.values(Pokemons).map(item=>item.Pokemons).flat()
    })

    useEffect(() => {
        const getData = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await res.json();
            setPokedex((preState) => {
                return [...preState, data];
            });
        };
        const total = Array(151).fill("p");
        total.forEach((item, index) => getData(index + 1));
    }, []);

    return (
        <div
            className="grid grid-cols-3 justify-center items-center  gap-4 p-4"
        >
            {pokedex
                .sort((a, b) => a.id - b.id)
                .map((pokemon) => {
                    // console.log(pokemon);
                    return <Card key={pokemon.id} all_Pokemons={all_Pokemons} pokemon={pokemon} add_To_Team={add_To_Team} />
                })}
        </div>
    );
}

export default index;
