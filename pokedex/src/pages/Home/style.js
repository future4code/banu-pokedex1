import styled from 'styled-components';

const HomeContainer = styled.div`
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

const HomeHeader = styled.header`
    background-color: lightblue;
    width: 100vw;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        position: absolute;
        left: 15px;
        padding: 2px;
    }
`;

const HomeMain = styled.main`
    background-color: lightcoral;
    width: 100vw;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: stretch;
    align-items: stretch;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    column-gap: 20px;
    row-gap: 15px;
`;

const PokemonCard = styled.div`
    background-color: lightgray;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    height: 30vh;
    justify-content: center;
    align-items: center;
`;

const PokemonCardName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
`;

const PokemonCardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PokemonCardButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export {HomeContainer, HomeHeader, HomeMain, PokemonCard,  PokemonCardName, PokemonCardImage, PokemonCardButton};