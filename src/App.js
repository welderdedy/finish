import React from 'react';
import styled from "styled-components";
import Rua from "./Imagens/rua1.jpg"
import Welder from "./Imagens/unnamed.jpg";



export const H1 = styled.h1`

display:flex;
justify-content:space-evenly;

`
export const Div = styled.div`

background-color:black;

`
export const Ul = styled.ul`

display:flex;
justify-content:space-evenly;
list-style:none;
color:white;
font-size:40px;
`



export const Img1 = styled.img`
width:20%;
border-radius:80px;
position:relative;
top:80px;



`

export const Img = styled.img`
width:100%;
height:5%;
border-radius:100px;
position:relative;
bottom:200px;
`

export const H2 = styled.h2`
display:flex;
justify-content:center;
position:relative;
bottom:200px;
color:red;
font-size:30px;

`
export const Title2 = styled.h2`

position:relative;
bottom:200px;
color:red;

`

export const P = styled.p`
width:30%;
border-radius:80px;
display:flex;
justify-content:center;
position:relative;
left:500px;
bottom:200px;
color:red;



`



function App() {
  return (
    <>
    
    <Div>
    <H1>Portifolio</H1>
    <nav>
    <Ul>
    <li>  Welder </li>
    <li> Projeto </li>
    <li><a href="https://pt.wikipedia.org/wiki/Carapicu%C3%ADba"target="_blank">Cidade</a> </li>
    </Ul>
    </nav>
    
    
   
    <Img1 src={Welder} alt="log" />
   
    <P>O projeto: “ Minha rua tem História e memória” tem a finalidade de proporcionar um espaço melhor na rua valorização a beleza, amor, carinho e respeito pela nossa rua, ela tem a função de mostrar a nossa vizinhança que podemos e devemos valorizar e respeitar a beleza da nossa rua, pois é nela que vivemos, nos tornamos cidadãos e muitas das vezes, passamos por toda a nossa experiência de vida aqui.este projeto será muito importante ,pois proporcionará um maior espaço para fazermos festas , bem como também sua preservação e, um reconhecimento da importância de cada pessoa como parte integrante na formação da rua ou vizinhança.</P>
    <H2>Projeto</H2>
    <Img src={Rua} alt="avn" />
    <Title2>Bom o projeto é bem simples tem um carro com uma capa que só atrapalha a movimentação da rua o dono que é meu vizinho disse que vai mandar ao desmanche vai ajudar muito o espaço na rua.</Title2>
    <iframe width="1314" height="1009" src="https://www.youtube.com/embed/BD5bY9I7b24" title="O espaço que um carro ocupa nas ruas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Div>

    </>
  );
}

export default App;
