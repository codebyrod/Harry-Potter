import { Link } from "gatsby"
import styled from "styled-components"

export const Component = styled.div `
height: 41vw;
transition: 0.5ms;
`

export const MenuBar = styled.div ` 
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
z-index: 10;
height: 7vw;
width: 100%;
box-shadow: ${(props) => props.sombra};
background: ${(props) => props.color};
transition: 1s;
`

//video que me ajudou muito
//https://www.youtube.com/watch?v=JMsNslI8KoY

export const BoxImg = styled.div `
display: flex;
align-items: center;
justify-content: center;
height: 7vw;
width: 40vw;
padding: 3rem;
`

export const Img = styled.img `
margin: 3% 0 3% ;
width: 50%;
`

export const ListItem = styled.ul `
list-style: none;
display: flex;
justify-content: space-evenly;
width: 70vw;
font-size: 1.2rem;
`

export const Item = styled(Link) `
color: ${(props) => props.color ? '#D9AD77' : '#1A2142'};
transition: 1s;
`

export const BoxImgHeader = styled.div `
background-image: url('https://sm.ign.com/ign_br/screenshot/default/tumblr-n6cu0ytzph1rlv62so2-500_66a6.gif');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100vw; 
width: 98.65vw;
height: 100%;
`
