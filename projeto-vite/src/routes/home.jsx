import axios from 'axios'

import {useState, useEffect} from 'react'

import {Link} from "react-router-dom"

import { useNavigate } from 'react-router-dom'

import "./home.css";

const Home = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        try {

            const response = await axios.get('http://127.0.0.1:8000/alunos/')

            const data = response.data

            setPosts(data)

        } catch(error) {
            console.log(error)
        }
    }

    const deletar = async() => {
        console.log('deletado.')
    }

    useEffect(() => {

        getPosts()

    }, [])

  return (
    <div className='home'>
        <h1>
            Usuários
        </h1>
        <div>
            <center>
        <Link to={'/new'} className='btn-adicionar'>Adicionar</Link>
        </center>
        </div>
        {posts.lenght === 0 ? (<p>Carregando...</p>) : (
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.nome}</h2>
                    <p>CPF: {post.cpf}</p>
                    <p>E-Mail: {post.email}</p>
                    <Link className='btn-deletar' onClick={()=> {
                        deletar()
                    }}>Deletar</Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home