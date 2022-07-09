import React from "react";
import "./index.css"
import PokemonThumb from "./components/PokemonThumb";

const GetIn = () => {

    return (
        <nav>
            <div className='button1'>
                <a href="/pokemons" className='hover-underline-animation'> Pokemon </a>
            </div>
            
            <div className='button2'>
                <a href="/info" className='hover-underline-animation'>Mi información</a>
            </div>
        </nav>
    );

};

export default Nav;