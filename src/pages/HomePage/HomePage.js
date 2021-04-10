import React, { useEffect, useContext } from "react";
import NavBar from '../../components/NavBar'
import { MainContainer } from './styles';

import GlobalStateContext from "../../global/GlobalStateContext";
import CardPokemon from "../../components/CardPokemon"
function HomePage() {
  const { states, setters, requests } = useContext(GlobalStateContext)
  

 
  const addPokeDex = (newPokemon) => {
    const index = states.pokemonList.findIndex((i)=> i.name === newPokemon.name)
    let NewPokeDex = [... states.pokeDex, newPokemon]
    
    let newPokeList = [...states.pokemonList]
    newPokeList.splice(index, 1)

    setters.setPokeDex(NewPokeDex)
    setters.setPokemonList(newPokeList)

}

console.log(states.pokeDex)
  
  return (
    <div>
      <NavBar/>
      <MainContainer>
        {states.pokemonList.map((item)=>{
        return( 
          <CardPokemon
            key={item.name}
            name={item.name}
            url={item.url}
            addPokemon ={()=>addPokeDex(item)}
          />
           
        );
      })}
        </MainContainer>
    </div>
       
  );
}

export default HomePage;
