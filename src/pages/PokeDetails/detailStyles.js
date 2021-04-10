import styled from 'styled-components'



export const ContainerPokeName= styled.div`
    display:flex;
    justify-content: center;
    width:100vw;
    height:100px;
    margin: 1em;
    h1{
      color:#e93457;
      
    }
   
`;
export const ContainerDetails= styled.div`
   display:flex;
   height: 100vh;
   /* background-color: rgba(0,29,170,0.5); */
`;
export const ContainerImg= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color: blue; */
`;

export const ContainerTypeMove= styled.div`
   display:flex;
   flex-direction: column;
   /* background-color:green; */
   
`;


export const DetailCardPhoto = styled.div`
   width: 300px;
   height: 300px;
   margin:1em;
  
  img{
    width:250px;
    
  }
 `;
export const DetailCardInfo = styled.div`
width:30vw;
height:640px;
box-shadow: 6px 6px 10px rgba(142, 142, 142, 20%);
margin:1em;
background-color: #fcfcfc;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h4,p{
  margin-left:2em;
  font-size: 16px;
}
`;

export const DetailCardTypes = styled.div`
display:flex;
justify-content:space-around;
width:40vw;
height:100px;
box-shadow: 6px 6px 10px rgba(142, 142, 142, 20%);
margin:1em;
background-color: #fcfcfc;
`;
export const DetailCardMoves = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:40vw;
height:500px;
box-shadow: 6px 6px 10px rgba(142, 142, 142, 20%);
margin:1em;
background-color: #fcfcfc;
`;