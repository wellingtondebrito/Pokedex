import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { CardContainer, ImageCardContainer, ButtonContainer, RemoveButton, DetailsButton } from './PokedexStyle';



function PokeBall(props) {
 
  const [pokeImage, setPokeImage] = useState([])
  

 
  
  useEffect(()=>{
    getPokeImage()
  },[])

  
 
  const getPokeImage =()=>{
    axios
    .get(props.url)
    .then((response)=>{
        setPokeImage(response.data.sprites.front_default)
      
    })
    .catch((err)=>{ console.log(err.mensage)})
}
  return (
          
          <CardContainer>
            <ImageCardContainer>
              <img src={pokeImage} />
            </ImageCardContainer>
            <h2>{props.name}</h2>
            <ButtonContainer>
              <RemoveButton onClick={props.removePokemon}>Deletar</RemoveButton>
              <DetailsButton onClick={props.pokeDetail}>Detalhes</DetailsButton>
            </ButtonContainer>
          </CardContainer>
          
  );
}

export default PokeBall;
