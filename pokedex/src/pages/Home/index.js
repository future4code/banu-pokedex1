import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import axiox from 'axios';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Styles from "./style";
import { HomeContainer, HomeHeader, HomeMain, PokemonCard,  PokemonCardName, PokemonCardImage, PokemonCardButton } from "./style";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import PokemonContext from "../../contexts/DataContext";


export function Home () {
    const {pokemon, pokemonDetail, setPokemon, setPokemonDetail, pokeList, setPokeList, handlePokemonDetail } = useContext(PokemonContext)

    const navigate = useNavigate();

    const goToPokedex = () => {
        navigate('/pokedex')
    }

    // const goToDetails = () => {
    //     navigate('/details')
    // }

    //FUNÇÃO FEITA POR RODRIGO - PODE ALTERAR CASO ACHE QUE DA PARA SIMPLIFICAR
    const addToPokedex = (pokemonToAdd) => {
        const position = pokeList.findIndex((item) => {
            return item.name === pokemonToAdd.name
        });

        const newPokemonList = [...pokeList]
        
        if (position === -1) {
            newPokemonList.push({ ...pokemonToAdd, amount: 1 })
        } else {
            alert ('Pokémon já adicionado!')
        }
        setPokeList(newPokemonList)
        console.log(pokeList)
    };

    return (
        <HomeContainer>
            <HomeHeader>
                <button onClick={goToPokedex}>Ir para Pokedex</button>
                <h1> Lista de Pokémons</h1>
            </HomeHeader>
            <HomeMain>
                {pokemonDetail && pokemonDetail.map(poke => {
                        return (
                            <PokemonCard key={poke.name+'5'}>
                                <PokemonCardName key={poke.name+'6'}>
                                    <h3 key={poke.name+'0'}>{poke.name}</h3>
                                </PokemonCardName>
                                <PokemonCardImage>
                                    <img key={poke.name+'1'} src={poke.sprites.front_default} />
                                </PokemonCardImage>
                                <PokemonCardButton key={poke.name+'7'}>
                                    <button key={poke.name+'2'} 
                                    onClick={() => addToPokedex(poke)}>Adicionar a Pokédex</button>
                                    <button key={poke.name+'3'} onClick={() => handlePokemonDetail(poke, navigate)}>Ver detalhes</button>
                                </PokemonCardButton>
                            </PokemonCard>
                        )
                    })}
            </HomeMain>
        </HomeContainer>
    )
};