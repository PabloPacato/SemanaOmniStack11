import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api'
//Imagens da aplicação 
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
//Botões de entrada de dados para Logon
export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions',{ id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        }   catch (err) {
            alert('Falha no login, tente novamente');
        }
    }
    
    return (
        <div className="logon-conteiner">
            <section className="form">
            <img src={logoImg} alt="Be the hero"/>
            <form onSubmit={handleLogin}>

                <h1>Faça seu Logon</h1>
                <input 
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />

                <button 
                className= "button">Entrar</button>

                <Link className="back-link" to= "/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}