import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Ocorreu um erro no login, tente novamente mais tarde.');
        }

    }

    return(
        <div className="logon-container">

            <form onSubmit={handleLogin} className="form-box">

                <section className="form">
                    <img src={LogoImg} alt="Be The Hero"/>
                </section>

                <h1 className="faca-logon">Faca seu Logon</h1>
                <input value={id} onChange={e => setId(e.target.value) } placeholder="Sua ID"/>
                <button type="submit" className="button">Entrar</button>

                <Link to="/register" className="not-have">
                    <FiLogIn sixe={16} color="#E02041"/>
                    Nao tenho cadastro
                </Link>
            </form>

            <div>
                <img src={heroesImg} alt="Heroes"/>
            </div>

        </div>
    );
}