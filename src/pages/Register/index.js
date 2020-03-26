import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){

    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity]         = useState('');
    const [uf, setUf]             = useState('');

    const history = useHistory();

    async function handleRegister(e){

        e.preventDefault();

        const data = { name, email, whatsapp, city, uf };

        try{
            const response = await api.post('ongs', data);
            alert('Seu ID de acesso: '+response.data.id);

            history.push('/');
        }catch(err){
            alert('Erro no cadastro tente novamente.');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="not-have">
                        <FiArrowLeft sixe={16} color="#E02041"/>
                        Nao tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input value={name} onChange={ e => setName(e.target.value) } className="input" placeholder="Nome da ONG"/>
                    <input value={email} onChange={ e => setEmail(e.target.value) } className="input" placeholder="Email" type="email"/>
                    <input value={whatsapp} onChange={ e => setWhatsapp(e.target.value) } className="input" placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input value={city} onChange={ e => setCity(e.target.value) } className="input" placeholder="Cidade"/>
                        <input value={uf} onChange={ e => setUf(e.target.value) } className="input input-uf" placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}