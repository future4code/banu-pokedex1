import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";

// Container
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 15vh 85vh / 1fr;
    grid-template-areas: 
    'HeaderSection'
    'MainSection'
    ;
`

// Header
export const HeaderSection = styled.div`
    grid-area: HeaderSection;
    display: grid;
    place-items: center;
    
`
export const HeaderItems = styled.div`
    width: 95%;
    height: 90%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 34px;
    }
`
export const GoBackButton = styled.button`
    padding: 10px 25px;
    border: none;
    background-color: #f4a261;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    @media (max-width: 800px) {
        display: none;
    }
    
    
`
export const RemoveOrAddButton = styled(GoBackButton)`
`

// Main
export const MainSection = styled.div`
    grid-area: MainSection;
    display: grid;
    place-items: center;
`
export const DetailsWrapper = styled.div`
    width: 90%;
    height: 90%;
    display: grid;
    align-content: center;
    justify-content: center;
    grid: 15% 26% 26% 26% / 24% 24% 49%;
    gap: 10px;
    grid-template-areas: 
    'FrontImage Stats Types'
    'FrontImage Stats Moves'
    'BackImage Stats Moves'
    'BackImage Stats Moves'
    ;
    @media (max-width: 800px) {
        grid: repeat(2, 80px 150px 150px 150px) / 49% 49%;
        grid-template-areas: 
        'FrontImage Stats'
        'FrontImage Stats'
        'BackImage Stats'
        'BackImage Stats'
        'Types Types'
        'Moves Moves'
        'Moves Moves'
        'Moves Moves'
        ;
    }
    @media (max-width: 550px) {
        grid: repeat(8, 100px) 60px repeat(3, 100px) / 1fr;
        grid-template-areas: 
        'FrontImage'
        'FrontImage'
        'BackImage'
        'BackImage'
        'Stats'
        'Stats'
        'Stats'
        'Stats'
        'Types'
        'Moves'
        'Moves'
        'Moves'
        ;
    }
`
export const FrontImage = styled.div`
    grid-area: FrontImage;
    background-color: #f4a261;
    display: grid;
    place-items: center;
    border-radius: 8px;
    padding: 10px;
`
export const BackImage = styled.div`
    grid-area: BackImage;
    background-color: #f4a261;
    display: grid;
    place-items: center;
    border-radius: 8px;
    padding: 10px;
`
export const Stats = styled.div`
    grid-area: Stats;
    background-color: #f4a261;
    border-radius: 8px;
    padding: 10px;
    display: grid;
    place-items: center;
`
export const Types = styled.div`
    grid-area: Types;
    background-color: #f4a261;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`
export const Moves = styled.div`
    grid-area: Moves;
    background-color: #f4a261;
    border-radius: 8px;
    padding: 10px;
    display: grid;
    place-items: center;
`

// Menu

export const Menu = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 15vh 85vh / 1fr;
    grid-template-areas: 
    'MenuHeader'
    'MenuSection'
    ;
`
export const MenuIcon = styled(AiOutlineMenu)`
    /* display: none; */
    font-size: 30px;
    @media (min-width: 800px) {
        display: none;
    }
`
export const MenuHeader = styled.div`
    grid-area: MenuHeader;
    display: grid;
    place-items: center;
`
export const MenuSection = styled.div`
    grid-area: MenuSection;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const GoBackButtonMenu = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    font-family: 'Montserrat', sans-serif;
`
export const RemoveOrAddButtonMenu = styled(GoBackButtonMenu)`
`