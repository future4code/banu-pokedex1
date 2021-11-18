import { } from './style'; // Aqui vai o seu CSS do styled
import styled from 'styled-components';

//CSS HEADER
const Header = styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 27vw;
    border: 1px solid black;
    background-color: red;
    color: #fff;
    width: 100vw;
    height: 5vw;
    padding-left: 2vw;
`;

const Button = styled.button`
    background-color: #FFF;
    /* border: 1px solid black; */
    border: none;
    padding: 8px 18px;
    background-color: blue;
    color: #fff;
`;

//CSS MAINDIV

const Maindiv = styled.div`
    display: grid;
`

const Pokecard = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid gray; */
    width: 18vw;
    height: 40vh;
    background-color: lightgray;
`

const Pokephoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 18vw;
    /* border: 1px solid red; */
`

const Pokebutton = styled.div`
    display: flex;
`

const Buttons = styled.button`
    background-color: lightgray;
    border-radius: 20px;
    border: 1px solid gray;
    height: 10vh;
    width: 9vw;
`

export function Pokedex() {
    return (
        <>
            <Header>
                <Button> Voltar para lista de Pokemons </Button>
                <h2> POKEDEX </h2>
            </Header>
            <Maindiv>
                <Pokecard>
                    <Pokephoto>
                        <p> POKE CARD </p>
                    </Pokephoto>
                    <Pokebutton>
                        <Buttons> Remover </Buttons>
                        <Buttons> Detalhes </Buttons>
                    </Pokebutton>
                </Pokecard>
            </Maindiv>
        </>
    )
}