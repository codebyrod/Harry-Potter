import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.div `
background-color: #564D8C;
`

export const Box = styled.div `
display: flex;
flex-wrap: wrap;
padding: 2rem 1rem;
display: flex;
justify-content: center;
`

export const BoxMap = styled(Link) `
margin: 2vw 1vw;
// background-color: #72A0C1;
border-radius: 2vw;
`

export const BoxContent = styled.div `  
background-color: blue;
height: 27vw;
width: 18vw;

`

export const BoxTitle = styled.div `
background-color: #3C3A8C;
position: relative;
z-index: 3;
transform: rotate(270deg);
bottom: 42%;
right: 44%;
`

export const Title = styled.p `
text-align: center;
padding: 0.7%;
color: #D9AD77;
font-size: 1.5vw;

`

export const BoxMoldura = styled.img ` 
 width: 18vw;
 position: absolute;
 z-index: 1;
`

export const BoxImg = styled.div `
width: 18vw;
height: 27vw;
overflow: hidden;
margin: 0.5rem 0 1rem 0;
opacity: 1;
background-color: #3C3A8C;
display: flex;
align-items: center;
`

export const Img = styled.img `
width: 120%;
&:hover{
    width: 19vw;
    transition: 700ms;
    transform: translate(-0.5vw) ;
}
`
export const BoxText = styled.div `
padding: 0.4rem;
background-color: #564D8C;
opacity: 0.2;
`

export const Text = styled.p ` 
color: #D9AD77 ;
font-size: 1.2rem;
text-transform: capitalize;
text-align: center;
padding: 0.3rem;
`