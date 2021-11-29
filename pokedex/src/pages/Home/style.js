import styled from "styled-components";

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
  background-color: #dc0a2d;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 27vw;
  border-bottom: 1px groove lightgray;
  color: #fff;
  width: 100vw;
  height: 5vw;
  padding-left: 2vw;
  button {
    background-color: #0d5c83;
    color: #fff;
    font-size: 15px;
    border: 1px solid gray;
    height: 7vh;
    width: 9vw;
    cursor: pointer;
    :hover {
      background-color: #f4a261;
      border: none;
    }
  }
`;

const HomeMain = styled.main`
  width: 100vw;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
  align-items: stretch;
  padding-left: 20px;
  padding-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  column-gap: 20px;
  row-gap: 15px;
`;

const PokemonCard = styled.div`
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: 40vh;
  background-color: #dedede;
  border: 8px inset #d90c2e;
  border-radius: 30px;
`;

const PokemonCardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

const PokemonCardImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 17vw;
`;

const PokemonCardButton = styled.div`
  display: flex;
  gap: 5px;
  margin: 5px 5px;
  button {
    background-color: #0d5c83;
    color: #fff;
    font-size: 15px;
    border-radius: 20px;
    border: 1px solid gray;
    height: 7vh;
    width: 9vw;
    :hover {
      background-color: #dc0a2d;
      border: none;
      cursor: pointer;
    }
  }
`;

export {
  HomeContainer,
  HomeHeader,
  HomeMain,
  PokemonCard,
  PokemonCardName,
  PokemonCardImage,
  PokemonCardButton
};
