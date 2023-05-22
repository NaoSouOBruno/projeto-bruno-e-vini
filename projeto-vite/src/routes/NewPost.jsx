import React from 'react'

import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import './NewPost.css'

const NewPost = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState()

    const [cpf, setCpf] = useState()

    const [email, setEmail] = useState()

    const createPost = async (e) => {
        e.preventDefault()

        const post = { nome, cpf, email, userId: 1}

        await blogFetch.post('http://127.0.0.1:8000/alunos/', {
            body: post
        })

        navigate('./home')
    }

  return (
    <div className='new-post'>
        <h2>Inserir novo usuário:</h2>
        <form onSubmit={(e) => createPost(e)}>
            <div className='form-control'>
                <label htmlFor='nome'>Nome:</label>
                <input type='text' name='nome' id='nome' placeholder='Nome'
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='cpf'>CPF:</label>
                <input name='cpf' id='cpf' placeholder='CPF'
                onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='email'>E-mail:</label>
                <input name='email' id='email' placeholder='E-Mail'
                onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <Link to={'../home'}><input type='submit' value='Criar' className='btn'/></Link>
        </form>
    </div>
  )
}

export default NewPost