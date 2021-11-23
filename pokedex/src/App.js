import { Routing } from "./Routing";

import PokemonProvider from './providers/pokemonProvider'
import { GlobalStyle } from "./assets/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <PokemonProvider>
        <Routing/>
      </PokemonProvider>
    </>
  );
}

export default App;
