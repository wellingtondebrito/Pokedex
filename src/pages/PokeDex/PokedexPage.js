import React from 'react'
import PokeBall from './PokeBall';
import {  MainContainer, GoToBack, PokeCard, PokemonImg } from './PokedexStyle';
import NavBar from '../../components/NavBar'
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


function PokedexPage() {

  const {states, setters} = useContext(GlobalStateContext)
  const history=useHistory()

  const BASE_URL= "https://pokeapi.co/api/v2"

  const goToPokeDetail=(id)=>{
    axios.get(`${BASE_URL}/pokemon/${id}`)
    .then((response)=>{
      history.push(`pokeDetails/${id}`)
    }).catch((error)=>{
      console.log(error)
    })
    
}

const deletePokemon = (remove) => {
  const index = states.pokeDex.findIndex((i) => i.name === remove.name)
  let newPokeDex = [...states.pokeDex]
  newPokeDex.splice(index, 1)
  setters.setPokeDex(newPokeDex)
}

  return (
    <div>
      <NavBar/>
      <MainContainer>
      {states.pokeDex.map((pokemon)=>{
        return(
         <PokeBall
          name={pokemon.name}
          url={pokemon.url}
          pokeDetail = {()=>goToPokeDetail(pokemon.name)}
          removePokemon = {()=>deletePokemon(pokemon)}
          />
        )
      })}
     </MainContainer> 
    </div>  
  );
}

export default PokedexPage;
