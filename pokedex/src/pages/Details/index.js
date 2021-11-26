import { Container, HeaderSection, HeaderItems, MainSection, GoBackButton, RemoveOrAddButton, DetailsWrapper, FrontImage, BackImage, Stats, Types, Moves, Menu, MenuIcon, MenuHeader, MenuSection, GoBackButtonMenu, RemoveOrAddButtonMenu } from './style'

import { useState } from 'react'
import { useNavigate } from "react-router";
import { useContext } from "react";
import PokemonContext from "../../contexts/DataContext";

export function Details() {
    const { pokeInfo } = useContext(PokemonContext)

    const { name, sprites, stats, types, moves } = pokeInfo

    const [menuToggle, setMenuToggle] = useState(false)

    const navigate = useNavigate()

    if (pokeInfo) navigate('/')

    return (
        <>
            {!menuToggle ? 
                <Container>
                    <HeaderSection>
                        <HeaderItems>
                            <GoBackButton onClick={() => navigate('/')}>Voltar</GoBackButton>
                            <h3>{name}</h3>
                            <RemoveOrAddButton>Adicionar/Remover</RemoveOrAddButton>
                            <MenuIcon onClick={() => setMenuToggle(!menuToggle)}/>
                        </HeaderItems>
                    </HeaderSection>
                    <MainSection>
                        <DetailsWrapper>
                            <FrontImage>
                                <img src={sprites?.front_default} alt={name}/>
                            </FrontImage>
                            <BackImage>
                                <img src={sprites?.back_default} alt={name}/>
                            </BackImage>
                            <Stats>
                                <h2>Stats</h2>
                                {stats?.map((stat, i) => {
                                    const statsName = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed']

                                    return (
                                        <>
                                            <strong>{statsName[i]}</strong>
                                            <p>{stat.base_stat}</p>
                                        </>
                                    )
                                })

                                }
                            </Stats>
                            <Types>
                                <h2>{types && types[0]?.type?.name}</h2>
                                <h2>{types && types[1]?.type?.name}</h2>
                            </Types>
                            <Moves>
                                {moves?.map((move, i) => {
                                    return (
                                        i <= 5 ? <p>{move.move.name}</p> : null
                                    )
                                })}
                            </Moves>
                        </DetailsWrapper>
                    </MainSection>
                </Container>
                : 
                <Menu>
                    <MenuHeader>
                        <HeaderItems>
                            <h3>PokeName</h3>
                            <MenuIcon onClick={() => setMenuToggle(!menuToggle)}/>
                        </HeaderItems>
                    </MenuHeader>
                    <MenuSection>
                        <GoBackButtonMenu>Voltar</GoBackButtonMenu>
                        <RemoveOrAddButtonMenu>Adicionar/Remover</RemoveOrAddButtonMenu>
                    </MenuSection>
                </Menu>
            }
        </>
    )
}