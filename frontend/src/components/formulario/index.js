import React from 'react'
import './styles.css'

const Formulario = () => (
    <formulario id = "main-form">
        
        <div id="texto_cadastro">
            <h3>Area de Cadastro</h3>
        </div>
        
        <div id="formulario_interno">
            <form>
                <div id="campo_nome">
                    <label for='nome'>Nome:</label>
                    <input type="text" id="nome"/>
                </div>
                <hr id="hr"></hr>
                <div id="campo_idade">
                    <label for='nome'>Qual sua Idade:</label>
                    <input type="number" id="idade"/>
                </div>
                <hr id="hr"></hr>
                <div id="campo_email">
                    <label for='nome'>Nome:</label>
                    <input type="email" id="email"/>
                </div>
                <hr id="hr"></hr>
                <div id="campo_mensagem">
                    <label for='msg'>Mensagem:</label>
                    <textarea id="msg"></textarea>
                </div>               
            </form>
        </div>
    </formulario>
)

export default Formulario