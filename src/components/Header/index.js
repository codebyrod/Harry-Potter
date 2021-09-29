import React from "react";
import * as S from "./style"
import { Link } from "gatsby"

export function Header(){
    return(
        <S.Component>
            <Link to="/">
            <S.Title>O Indesejável nº 1</S.Title>
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
