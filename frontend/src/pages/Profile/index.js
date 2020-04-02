import React, { useState,useEffect } from 'react' 
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function Profile() {
    const [products, setProducts] = useState([])

    const history = useHistory()
    const lojaId = localStorage.getItem('lojaId')
    const lojaName = localStorage.getItem('lojaName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: lojaId
            }
        }).then(response => {
            setProducts(response.data)
        })
    }, [lojaId])

    async function handleDeleteProducts(id) {
        try{
            await api.delete(`products/${id}`, {
                headers: {
                    Authorization: lojaId
                }
            })

            setProducts(products.filter(product => product.id !== id))
        } catch(err) {
            alert('Erro ao deletar caso,tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Xvidros"/>
                <span>Bem Vinda,{lojaName}</span>

                <Link className="button" to="/products/new">Cadastrar novo produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Produtos Cadastrados</h1>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                    <strong>NOME:</strong>
                    <p>{product.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{product.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(product.value)}</p>

                    <button onClick={() => handleDeleteProducts(product.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}