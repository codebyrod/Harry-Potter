import styled from "styled-components"

export const Container = styled.div `
background-color: #004170;
`

export const Box = styled.div `
display: flex;
flex-wrap: wrap;
padding: 2rem 1rem;
display: flex;
justify-content: center;
`

export const BoxMap = styled.div `
margin: 0.5rem;
border: 2px #72A0C1 solid;
background-color: #72A0C1;
border-radius: 2vw;
`
export const Title = styled.h2 `
text-align: center;
padding: 0.5rem;
color: #002244;
`

export const BoxImg = styled.div `
width: 18vw;
height: 22vw;
overflow: hidden;
margin: 0.5rem 0 1rem 0;
`

export const Img = styled.img `
width: 18vw;
&:hover{
    width: 19vw;
    transition: 700ms;
    transform: translate(-0.5vw) ;
}
`
export const BoxText = styled.div `
padding: 0.4rem
`

export const Text = styled.p ` 
color: #004170 ;
font-size: 1.2rem;
text-transform: capitalize;
text-align: center;
padding: 0.3rem;
`