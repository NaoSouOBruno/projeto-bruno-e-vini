import React from 'react'

import './login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [User, setUser] = useState()

    const [Senha, setSenha] = useState()

    const Login = async (e) => {

        if (User == 'bruno' && Senha == '123') {
            navigate('./home')
        }
    }

  return (
    <div className='new-post'>
        <h2>Login:</h2>
        <form onSubmit={(e) => Login(e)}>
            <div className='form-control'>
                <label htmlFor='user'>Usuário:</label>
                <input type='text' name='user' id='user' placeholder='Usuário'
                onChange={(e) => setUser(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='senha'>Senha:</label>
                <input type='password' name='senha' id='senha' placeholder='Senha'
                onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <input type='submit' value='Entrar' className='btn'/>
        </form>

        <p>Login: bruno</p>
        <p>Senha: 123</p>
    </div>
  )
}

export default Login