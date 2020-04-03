import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.png'

export default function NewProduct () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    const lojaId = localStorage.getItem('lojaId')

    async function handleNewProduct(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('products', data, {
                headers: {
                    Authorization: lojaId,
                }
            })

            history.push('/profile')
        } catch(err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <div className="new-Product-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Xvidros"/>

                    <h1>Cadastrar novo produto</h1>
                    <p>Descreva o produto detalhadamente para encontrar um comprador.</p>

                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewProduct}>
                    <input 
                    placeholder='Titulo do produto'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                    placeholder='Descrição'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                    placeholder='Valor em reais'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}