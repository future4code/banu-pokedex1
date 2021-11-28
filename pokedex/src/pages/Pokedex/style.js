import styled from 'styled-components'


export const Header = styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 27vw;
    border-bottom: 1px groove lightgray;
    background-color: #dc0a2d;
    color: #fff;
    width: 100vw;
    height: 5vw;
    padding-left: 2vw;
`;

export const Button = styled.button`
    background-color: #FFF;
    border: none;
    padding: 8px 18px;
    background-color: #106288;
    color: #fff;
`;

export const Maindiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Pokecard = styled.div`
    margin: 30px 10px;
    display: flex;
    flex-direction: column;
    width: 18vw;
    height: 40vh;
    background-color: #dedede;
    border: 8px inset #d90c2e;
    border-radius: 30px;
`

export const Pokephoto = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 30vh;
    width: 17vw;
`

export const P = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5vh;
`

export const Pokebutton = styled.div`
    display: flex;
    gap: 5px;
    margin: 5px 5px;
`

export const Buttons = styled.button`
    background-color: #0d5c83;
    color: #fff;
    font-size: 15px;
    border-radius: 20px;
    border: 1px solid gray;
    height: 7vh;
    width: 9vw;
`
