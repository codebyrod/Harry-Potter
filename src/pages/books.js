import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GlobalStyle } from './globalStyled'

export default function Books() {
    return (
        <div>
            <Header />
            <h1>Livros</h1>
            <h2>Saga Harry Potter</h2>
            <ul>
                <li>Harry Potter e a Pedra Filosofal</li>
                <li>Harry Potter e a Câmara Secreta</li>
                <li>Harry Potter e o Prisioneiro de Azkaban</li>
                <li>Harry Potter e o Cálice de Fogo</li>
                <li>Harry Potter e a Ordem da Fênix</li>
                <li>Harry Potter e o Enigma do Príncipe</li>
                <li>Harry Potter e as Relíquias da Morte</li>
            </ul>
            <h2>Universo Expandido</h2>
            <ul>
                <li>Quadribol Através dos Tempos</li>
                <li>Animais Fantásticos e Onde Habitam</li>
                <li>Os Contos de Beedle, o Bardo</li>
            </ul>
            <Footer />
            <GlobalStyle />
        </div>
    )
}
