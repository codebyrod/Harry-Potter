import React, { useState} from "react";
import * as S from "./style"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

export function Header(){

    const [navbar, setNavbar] = useState(true)

    const changeBackground = () => {
        if(window.scrollY >= 333){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    
        console.log("Tô aqui", window.scrollY)
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <S.Component >
            <S.MenuBar 
            color={navbar === true ? '#3C3A8C' : 'rgba(0,0,0,0)'} 
            sombra={navbar === true ? '5px 2px 3px black' : ''}
            >
            <Link to="/">
            <S.BoxImg>
                <S.Img src={Logo} alt="logo Harry Potter"/>
            </S.BoxImg>
            </Link>
            <S.ListItem>
                <S.Item color={navbar} to="/">Início</S.Item>
                {/* antes o código era assim:
                navbar === true ? '#D9AD77' : '#1A2142'
                mudei para apenas a navbar pq fica melhor, mas fica mais dificil lembrar depois, por isso tô deixando o comentário aqui */}
                <S.Item color={navbar} to="/about">Sobre</S.Item>
                <S.Item color={navbar} to="/books">Livros</S.Item>
            </S.ListItem>
            </S.MenuBar>
            <S.BoxImgHeader>
                <img />
            </S.BoxImgHeader>
        </S.Component>
        
    )
}
