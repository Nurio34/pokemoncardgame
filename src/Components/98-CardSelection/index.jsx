import { useState, useEffect } from "react";
import "./styles/index.css"
import { Pokemons } from "../../Components/99-Setup";
import Card from "./components/1-Card"
import Deck from "./components/2-Deck"

function index({pokedex,myTeam, add_To_Team}) {

    // const [pokedex, setPokedex] = useState([]);
    const [not_Evolved_Pokemons,setNot_Evolved_Pokemons] = useState(()=>{
        return Object.values(Pokemons).map(item=>item.Pokemons).flat()
    })

    // useEffect(() => {
    //     const getData = async (id) => {
    //         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //         const data = await res.json();
    //         setPokedex((preState) => {
    //             return [...preState, data];
    //         });
    //     };
    //     const total = Array(151).fill("p");
    //     total.forEach((item, index) => getData(index + 1));
    // }, []);

    return (
        <div
            className="grid grid-cols-3 justify-center items-center  gap-4 p-4"
        >
            {pokedex
                .sort((a, b) => a.id - b.id)
                .map((pokemon) => {
                    // console.log(pokemon);
                    return <Card key={pokemon.id} not_Evolved_Pokemons={not_Evolved_Pokemons} pokemon={pokemon} add_To_Team={add_To_Team} />
                })
            }
            <Deck myTeam={myTeam} />
        </div>
    );
}

export default index;
