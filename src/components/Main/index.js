import React, { useState, useEffect } from "react";
import {api} from "../../services/api"
import * as S from "./style"
import AlvoDumb from "../../images/alvo.jpg"
import Moldura from "../../images/moldura.png"

export function Main(){

    const [list, setList] = useState([])

    const Rabicho = {
        actor: "Não sei",
        alive: true,
        ancestry: "",
        dateOfBirth: "",
        eyeColour: "brown",
        gender: "mouse",
        hairColour: "black",
        hogwartsStaff: false,
        hogwartsStudent: true,
        house: "Ravenclaw",
        image: "https://pm1.narvii.com/6296/12460a8dc54fcba33e8c1fdb6ca34ca98738948f_hq.jpg",
        name: "Rabicho",
        patronus: "swan",
        species: "human",
        wand: {wood: "", core: "", length: ""},
        yearOfBirth: ""
    }
    
    const Alvo = {
        actor: "Não sei",
        alive: true,
        ancestry: "",
        dateOfBirth: "",
        eyeColour: "brown",
        gender: "mouse",
        hairColour: "black",
        hogwartsStaff: false,
        hogwartsStudent: true,
        house: "Ravenclaw",
        image: AlvoDumb,
        name: "Alvo Dumbledore",
        patronus: "swan",
        species: "human",
        wand: {wood: "", core: "", length: ""},
        yearOfBirth: ""
    }

    useEffect(() => {
        
        api.get().then(response => {
            response.data.unshift(Alvo, Rabicho)
            return setList(response.data)
        })
// método do ES5, método mais é await async
        console.log(api.get())
    },[])

    const handClick = (item) => {
        localStorage.setItem("keyteste", JSON.stringify(item) )
    }
    //localstorage só recebe string, então precisamos de um método para tranformar objeto em string que é o json.stringify

    return(
        <S.Container>
            <S.Box>
                {list.map((item, index) => (
                    <S.BoxMap key={index} to="/personagens" onClick={() => handClick(item) } >
                        <S.BoxContent>
                        <S.BoxImg>
                            <S.BoxMoldura src={Moldura} />
                            <S.Img src={item.image} />
                        </S.BoxImg>
                        <S.BoxTitle>
                            <S.Title>{item.name}</S.Title>
                        </S.BoxTitle>
                        </S.BoxContent>
                    </S.BoxMap>
                ))}
            </S.Box>
        </S.Container>
    )
}