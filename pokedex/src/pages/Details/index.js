import { Container, HeaderSection, HeaderItems, MainSection, GoBackButton, RemoveOrAddButton, DetailsWrapper, FrontImage, BackImage, Stats, Types, Moves, Menu, MenuIcon, MenuHeader, MenuSection, GoBackButtonMenu, RemoveOrAddButtonMenu } from './style'

import { useState } from 'react'

export function Details() {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <>
            {!menuToggle ? 
                <Container>
                    <HeaderSection>
                        <HeaderItems>
                            <GoBackButton>Voltar</GoBackButton>
                            <h3>PokeName</h3>
                            <RemoveOrAddButton>Adicionar/Remover</RemoveOrAddButton>
                            <MenuIcon onClick={() => setMenuToggle(!menuToggle)}/>
                        </HeaderItems>
                    </HeaderSection>
                    <MainSection>
                        <DetailsWrapper>
                            <FrontImage>
                                <h4>Frontal Image</h4>
                            </FrontImage>
                            <BackImage>
                                <h4>Back Image</h4>
                            </BackImage>
                            <Stats>
                                <h2>Stats</h2>
                                <p>HP</p>
                                <p>Attack</p>
                                <p>Defense</p>
                                <p>Special-Attack</p>
                                <p>Special-Defense</p>
                                <p>Speed</p>
                            </Stats>
                            <Types>
                                <h2>Type 1</h2>
                                <h2>Type 2</h2>
                            </Types>
                            <Moves>
                                <h2>Moves</h2>
                                <p>Move 1</p>
                                <p>Move 2</p>
                                <p>Move 3</p>
                                <p>Move 4</p>
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