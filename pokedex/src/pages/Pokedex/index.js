import { Header, Button, Maindiv, Pokecard, Pokephoto, Pokebutton, Buttons, P } from './style';
// import styled from 'styled-components';
import { useNavigate } from "react-router";
import { useContext } from "react";
import PokemonContext from "../../contexts/DataContext";


export function Pokedex() {
    const { pokeList, setPokeList, handlePokemonDetail } = useContext(PokemonContext)
    ///// USAR O POKEMONDETAIL PARA PEGAR OS DADOS, JÁ ESTÁ COMO ESTADO GLOBAL. QUALQUER DÚVIDA ME CHAMA - LÉO

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }


    const removePokemon = (itemToRemove) => {
        const index = pokeList.findIndex((i) => { return i.id === itemToRemove.id })

        let newPokeList = [...pokeList]

        if (newPokeList[index].amount === 1) {
            newPokeList.splice(index, 1)
        } else {
            newPokeList[index].amount -= 1;
        }
        setPokeList(newPokeList)
    }

    const pokedexList = pokeList.length === 0 ? (
        <h2> Você ainda não pegou nenhum Pokémon! </h2>
    ) : (
        pokeList.map((poke) => {
            return (
                <Pokecard>
                    <Pokephoto>
                        <P> {poke.name} </P>
                        <img src={poke.sprites.front_default} />
                    </Pokephoto>
                    <Pokebutton>
                        <Buttons onClick={() => removePokemon(poke)}> Remover </Buttons>
                        <Buttons onClick={() => handlePokemonDetail(poke, navigate)}> Detalhes </Buttons>
                    </Pokebutton>
                </Pokecard>
            )
        })
    )


    return (
        <>
            <Header>
                <Button onClick={goToHome}> Voltar para lista de Pokemons </Button>
                <h2> POKEDEX </h2>
            </Header>
            <Maindiv>
                {pokedexList}
            </Maindiv>
        </>
    )
}