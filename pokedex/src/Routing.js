import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages

import { Home } from './pages/Home'
import { Pokedex } from './pages/Pokedex'
import { Details } from './pages/Details'


export function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/pokedex' element={<Pokedex/>}/>
                <Route path='/details' element={<Details/>}/>
            </Routes>
        </Router>
    )
}