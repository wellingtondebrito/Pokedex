import React from 'react'
import styled from "styled-components"



export const MainContainer = styled.div`
    width: 100vw;
    height: 92vh;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`

export const CardContainer = styled.div `
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px;
    width: 250px;
    height: 35vh;
    border-radius: 10px;
    box-shadow: 6px 6px 10px rgba(142, 142, 142, 20%);

    h2{
      font-size: 24px;  
      color: #E93457;
    }
`;
export const ImageCardContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50vh;
    
    img {
        margin-top: 50px;
        width: 120px;
    }
`;


export const ButtonContainer = styled.div `
    display:flex;
    justify-content: space-between;
    align-items: center;

`;

export const RemoveButton = styled.button`
    background-color: #EED535;
    width: 100px;
    height: 30px;
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
`
export const DetailsButton = styled.button`
    background-color: #EED535;
    width: 100px;
    height: 30px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
`
