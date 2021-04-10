import React, { useState, useEffect }from 'react'
import { ContainerPokeName,ContainerDetails,ContainerImg,DetailCardPhoto,DetailCardInfo,ContainerTypeMove, DetailCardTypes,DetailCardMoves} from './detailStyles';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios'
import NavBar from '../../components/NavBar'
function PokeDetailsPage() {
 
  
  const history=useHistory()

  const BASE_URL= "https://pokeapi.co/api/v2"

  const [pokeDetail, setPokeDetail] = useState(undefined)
 
  const pathParams = useParams()
  const id = pathParams.id

  useEffect(()=>{
    getDetails()
  },[])

  const goToPokedex=()=>{
    history.push(`/pokedexPage`)
  } 

  const getDetails = () => {
    axios.get(`${BASE_URL}/pokemon/${id}`)
      .then((response)=>{
        setPokeDetail(response.data)
        console.log(response.data)
      }).catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div>
      <NavBar/>
    {pokeDetail && (
      <div>
       <ContainerPokeName>
       <h1>{pokeDetail.name}</h1>
     </ContainerPokeName>
      <ContainerDetails>
            <ContainerImg>
              <DetailCardPhoto >
                  <img src={pokeDetail.sprites.front_default} />
              </DetailCardPhoto>
              <DetailCardPhoto >
                  <img src={pokeDetail.sprites.back_default} />
              </DetailCardPhoto>
            </ContainerImg>          
            
            <DetailCardInfo>
              <h4>Status</h4>
              {pokeDetail.stats.map((pokemon)=>{
                return <p>{pokemon.stat.name}: {pokemon.base_stat}</p>
              })}
            </DetailCardInfo>
            <ContainerTypeMove>
              <DetailCardTypes>
              {pokeDetail.types.map((pokemon)=>{
                return <p>Tipo: {pokemon.type.name}</p>
              })}
              </DetailCardTypes>
                
              <DetailCardMoves>
                <h4>Moves</h4>
                {pokeDetail.moves.map((pokemon,i)=>{
                  if(i<5){
                    return <p>{pokemon.move.name}</p>
                  }else{

                  }
                
              })}
              </DetailCardMoves>  
            </ContainerTypeMove>
            
        
        </ContainerDetails>
        </div>
    )}
  </div>
)
}

export default PokeDetailsPage;
