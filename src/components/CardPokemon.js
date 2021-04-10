import React, { useEffect, useState } from 'react'
import { AddPokemon, ButtonContainer, CardContainer, Details, ImageCardContainer, PokeInfo} from '../pages/HomePage/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from "../global/GlobalStateContext";
function CardPokemon(props){

    const [pokeImage, setPokeImage] = useState([])
    
    
    const BASE_URL= "https://pokeapi.co/api/v2"

    const history=useHistory()

    useEffect(()=>{
        getPokeImage()
      },[])

    const goToPokeDetail=(id)=>{
        axios.get(`${BASE_URL}/pokemon/${id}`)
        .then((response)=>{
          history.push(`pokeDetails/${id}`)
        }).catch((error)=>{
          console.log(error)
        })
        
    }

 
    const getPokeImage =()=>{
      axios
      .get(props.url)
      .then((response)=>{
          setPokeImage(response.data.sprites.front_default)
       })
      .catch((err)=>{ console.log(err.mensage)})
  }
    return(
        <CardContainer>
            <ImageCardContainer>
                <img src={pokeImage}/>
            </ImageCardContainer>
            
              <h2>{props.name}</h2>
            
            <ButtonContainer>
                <AddPokemon onClick={props.addPokemon} >Pegar</AddPokemon>
                <Details  onClick={()=>goToPokeDetail(props.name)
                }>Detalhes</Details>
            </ButtonContainer>
        </CardContainer>

    );
}

export default CardPokemon