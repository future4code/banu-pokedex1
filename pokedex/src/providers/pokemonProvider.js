import React, {useEffect, useState} from 'react';
import PokemonContext from '../contexts/DataContext'
import axios from 'axios';

const PokemonProvider = ({children}) => {
    const [pokemon, setPokemon] = useState(undefined)
    const [pokemonDetail, setPokemonDetail] = useState([])
    const [pokeList, setPokeList] = useState([])
    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(pokemon => {
            setPokemon(pokemon?.data.results)
            console.log(pokemon?.data?.results)
        })
        .catch(err => {
            console.log(err.message)
        })
        
    }, []);

    useEffect(() => {
        let array = [];
        pokemon?.map(poke => {
            axios.get(`${poke?.url}`)
            .then(pokemonDetailed => {
                array = [...array, pokemonDetailed.data];
                setPokemonDetail(array);
            })
            .catch(err => {
                console.log(err)
            })
        })
    }, [pokemon])


    const handlePokemonDetail = (pokemon, navigate) => {
        setPokeInfo(pokemon)
        navigate('/details')
    }

    return(
        <PokemonContext.Provider value={{
            pokemon,
            pokemonDetail,
            pokeList,
            setPokemon,
            setPokemonDetail,
            setPokeList,
            handlePokemonDetail,
            pokeInfo
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;

