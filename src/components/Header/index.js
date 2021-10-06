import React from "react";
import * as S from "./style"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

export function Header(){
    return(
        <S.Component>
            <Link to="/">
            <S.BoxImg>
                <S.Img src={Logo} alt="logo Harry Potter"/>
            </S.BoxImg>
            </Link>
            <nav>
                <S.ListItem>
                        <S.Item to="/">Início</S.Item>
                        <S.Item to="/about">Sobre</S.Item>
                        <S.Item to="/books">Livros</S.Item>
                </S.ListItem>
            </nav>
        </S.Component>
        
    )
}
