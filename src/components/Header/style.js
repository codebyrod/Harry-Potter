import { Link } from "gatsby"
import styled from "styled-components"

export const Component = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #3C3A8C;
height: 20vw;

`

export const BoxImg = styled.div `
display: flex;
justify-content: center;

`

export const Img = styled.img `
margin: 3% 0 3% ;
width: 30vw;

`

export const ListItem = styled.ul `
list-style: none;
display: flex;
justify-content: space-evenly;
width: 70vw;
font-size: 1.2rem;
color: #D9AD77;

`

export const Item = styled(Link) `
color: #D9AD77;
`

export const ItemX = styled.p `
color: #D9AD77;
`
