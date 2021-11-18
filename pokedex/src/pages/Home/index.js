import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import axiox from 'axios';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Styles from "./style";
import { HomeContainer, HomeHeader, HomeMain, PokemonCard,  PokemonCardName, PokemonCardImage, PokemonCardButton } from "./style";
import axios from "axios";


export function Home () {

    const [pokemon, setPokemon] = useState(undefined)
    const [pokemonDetail, setPokemonDetail] = useState(undefined)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(pokemon => {
            setPokemon(pokemon.data.results)
            console.log(pokemon?.data?.results)
        })
        .catch(err => {
            console.log(err)
        })

        // axios.get(`${pokemon?.url}`)
        // .then(pokemonDetailed => {
        //     console.log(pokemonDetailed && pokemonDetailed)
        // })
        // .catch(err => {
        //     console.log(err)
        // })

    }, []);

    return (
        <HomeContainer>
            <HomeHeader>
                <button>Ir para Pokedex</button>
                <h1> Lista de Pokémons</h1>
                {/* {console.log("aquiiii", pokemon)} */}
            </HomeHeader>
            <HomeMain>
                {pokemon && pokemon.map(poke => {
                    return (
                        <PokemonCard key={poke.name+'5'}>
                            <PokemonCardName key={poke.name+'6'}>
                                <h3 key={poke.name+'0'}>{poke.name}</h3>
                            </PokemonCardName>
                            <PokemonCardImage>
                                <img key={poke.name+'1'} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"} />
                            </PokemonCardImage>
                            <PokemonCardButton key={poke.name+'7'}>
                                <button key={poke.name+'2'}>Adicionar a Pokédex</button>
                                <button key={poke.name+'3'}>Ver detalhes</button>
                            </PokemonCardButton>
                        </PokemonCard>
                    )
                })}
            </HomeMain>
        </HomeContainer>
    )
};