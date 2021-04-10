import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import PokeballIcon from '../assets/pokeball.svg'
import Logo from '../assets/pokemon.svg'


const NavBarContainer=styled.div`
display:flex;
justify-content: space-between;

bottom: 0px;
margin:0px;
width:100vw;
height:100px;
padding: 2em;
background-color: #035392;
box-shadow: 0 2px 2px #666;

`

const Navigation = styled.nav `
  width: 300px;
  display: flex;
  justify-content: space-around;
  margin-left: 24px;
  margin-right: 64px;
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p{
    color: #ffffff;
    margin-left: 16px;
    
    :hover {
      color: #edab1e;
    }
  }

  img {
    width: 32px;
    height: 32px;

    :hover{
      position: relative;
      top: -2px;
      
  }
  }

`

const LogoPokemon = styled.img`
  width: 150px;
`



function NavBar() {

  const history=useHistory()

  const goToPokeDetail=()=>{
    history.push(`pokeDetails/:id`)
  } 

  const goToHome=()=>{
    history.push(`/`)
  } 
  const goToPokedex=()=>{
    history.push(`/pokedexPage`)
  } 
  return (
    <NavBarContainer>
      <LogoPokemon src={Logo} />
      <Navigation>
        
        <Menu onClick={goToHome}>
          <img src={PokeballIcon} />
          <p>Home</p>
          
        </Menu>
        <Menu onClick={goToPokedex}>
          <img src={PokeballIcon} />
          <p>Pokedex</p>
          
        </Menu>
      </Navigation>
       
    </NavBarContainer>
       
  );
}

export default NavBar;
