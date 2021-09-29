import { Link } from "gatsby"
import styled from "styled-components"

export const Component = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #002244;
height: 8vw;
`
export const Title = styled.h1 `
color: #A4DDED;
margin: 1rem;
`

export const ListItem = styled.ul `
list-style: none;
display: flex;
justify-content: space-evenly;
width: 70vw;
font-size: 1.2rem;
color: #A4DDED;

`

export const Item = styled(Link) `
color: #A4DDED;
`

export const ItemX = styled.p `
color: #A4DDED;
`
