import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'
import PokedexPage from '../pages/PokedexPage'

const Router = () => {
    return (
        <Router>

            <Routes>

                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/pokedex' element={<PokedexPage />} />
                <Route exact path='/details' element={<DetailsPage />} />

            </Routes>

        </Router>
    )
};

export default Router;