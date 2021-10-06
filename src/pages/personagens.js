import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GlobalStyle } from './globalStyled'
    
//graphql(`query{HarryPotter{name img}}`)

export default function Teste() {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("keyteste")) || {})
    
 //   data 
    
    useEffect(()=>{
        document.title = list.name
        //gambiarra Manipular o Dom no React é Gambiarra, pois o React usa um Dom Virtual, mas para inserir o meta HTML tem que usar uma lib chamada React Helmet, https://www.gatsbyjs.com/docs/add-page-metadata/
    },[])

    return (
        <div>
            <Header />
            <h2>{list.name}</h2>
            <Footer />
            <GlobalStyle />
        </div>
    )
}
