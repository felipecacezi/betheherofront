import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Profile(){

    const [title, setTitle]             = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue]             = useState('');
    const ongId                         = localStorage.getItem('ongId');
    const history                       = useHistory();

    async function handleNewIncident(e){

        e.preventDefault();

        const data = {title,description,value};

        try{
            await api.post('incidents', data,{headers:{ Authorization : ongId, }});
            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar, tente novamente.')
        }

    }



    return(
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link to="/profile" className="not-have">
                        <FiArrowLeft sixe={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input    value={title} onChange={ e => setTitle(e.target.value) } className="input" placeholder="Titulo do caso"/>
                    <textarea value={description} onChange={ e => setDescription(e.target.value) }  placeholder="Descriçao" className="textarea" />
                    <input    value={value} onChange={ e => setValue(e.target.value) }  className="input" placeholder="Valor em reais"/>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}