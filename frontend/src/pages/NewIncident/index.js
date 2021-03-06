import './styles.css';

import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ngoId = localStorage.getItem('ngoId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ngoId,
                }
            })

            history.push('/profile');

        } catch (error) {
            alert(`Erro ao cadastrar caso, tente novamente. \n ${error}`);
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    
                    <h1>Cadastro novo caso</h1>
                    <p>Descrever o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                    <Link className="back-link" to='/profile'>
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para Home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do Caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />  
                    <input 
                        placeholder="Valor em reais R$"                        
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}