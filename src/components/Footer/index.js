import React from "react";
import * as S from "./style"
import LufaLufa from "../../images/lufalufa.png"
import Corvinal from "../../images/corvinal.png"
import Grifinória from "../../images/grifinória.png"
import Sonserina from "../../images/sonserina.png"
import Hogwarts from "../../images/hogwarts.png"

export function Footer(){
    return(
        <S.Container>
            <S.BoxImg>
                <div>
                <S.Img src={LufaLufa} />
                </div>
                <div>
                <S.Img src={Corvinal} />
                </div>
                <div>
                <S.ImgH src={Hogwarts} />
                </div>
                <div>
                <S.Img src={Sonserina} />
                </div>
                <div>
                <S.Img src={Grifinória} />
                </div>
            </S.BoxImg>
            <S.BoxText>
            <S.Text>Início</S.Text>
            <S.Text>Suporte</S.Text>
            <S.Text>Newsletter</S.Text>
            <S.Text>Termos de Uso</S.Text>
            <S.Text>Política de Privacidade</S.Text>
            </S.BoxText>
            <S.BoxP>
                <p>@ 2021 Code By Rod</p>
            </S.BoxP>
        </S.Container>
    )
}
