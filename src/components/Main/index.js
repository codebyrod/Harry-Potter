import React, { useState, useEffect } from "react";
import {api} from "../../services/api"
import * as S from "./style"

export function Main(){

    const [list, setList] = useState([])

    useEffect(() => {
        api.get().then(response => setList(response.data))
        console.log(api.get())
    },[])


    return(
        <S.Container>
            <S.Box>
                {list.map((item, index) => (
                    <S.BoxMap key="index">
                        <S.Title>{item.name}</S.Title>
                        <S.BoxImg>
                            <S.Img src={item.image} />
                        </S.BoxImg>
                        <S.BoxText>
                        <S.Text>Espécie: {item.species}</S.Text>
                        <S.Text>Casa: {item.house}</S.Text>
                        </S.BoxText>
                    </S.BoxMap>
                ))}
            </S.Box>
        </S.Container>
    )
}