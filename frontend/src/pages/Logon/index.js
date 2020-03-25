import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const apiResponse = await api.post('session', { id });

            //console.log(apiResponse.data.name);

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', apiResponse.data.name);

            history.push('/profile')

        } catch (err){
            alert(`Falha no login, tente novamente. \n ${err}`);
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                     type="text"
                     placeholder="Seu ID"
                     value={id}
                     onChange={e => setId(e.target.value)}/>

                    <button className= "button" type="submit">Entrar</button>

                    <Link className="back-link" to='/register'>
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}