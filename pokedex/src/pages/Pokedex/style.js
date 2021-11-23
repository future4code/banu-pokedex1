import styled from 'styled-components'

//CSS HEADER
export const Header = styled.header`
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

export const Button = styled.button`
    background-color: #FFF;
    /* border: 1px solid black; */
    border: none;
    padding: 8px 18px;
    background-color: blue;
    color: #fff;
`;

//CSS MAINDIV

export const Maindiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Pokecard = styled.div`
    margin: 30px 45px;
    display: flex;
    flex-direction: column;
    width: 18vw;
    height: 40vh;
    background-color: lightgray;
`

export const Pokephoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 18vw;
    /* border: 1px solid red; */
`

export const Pokebutton = styled.div`
    display: flex;
`

export const Buttons = styled.button`
    background-color: lightgray;
    border-radius: 20px;
    border: 1px solid gray;
    height: 10vh;
    width: 9vw;
`
