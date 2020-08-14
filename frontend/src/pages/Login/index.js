import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Icones
import { FaUserCircle } from 'react-icons/fa';
import phone from '../../assets/img/phone.svg';
import logo from '../../assets/img/logo.svg';

import { Section } from './styled';

export default function LoginPage() {
   const [userId, setUserId] = useState();
   const history = useHistory();

   const handleSubmit = e => {
      e.preventDefault();
      history.push(`/feed/${userId.replace('@', '')}`);
   };

   return (
      <Section>
         <div className="phone">
            <figure>
               <img src={phone} alt="example phone" />
            </figure>
         </div>

         <div className="formLogin">
            <form onSubmit={handleSubmit}>
               <header>
                  <img width="174px" src={logo} alt="logotipo" />
               </header>

               <div className="thumb">
                  <FaUserCircle size="102px" />
               </div>

               <input
                  type="search"
                  name="userId"
                  placeholder="@username"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
               />

               <button type="submit">Entrar</button>

               <span>
                  Não tem uma conta? <strong>Cadastre-se</strong>
               </span>
            </form>
         </div>
      </Section>
   );
}
