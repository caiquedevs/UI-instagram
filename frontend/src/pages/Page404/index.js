import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './styled';

export default function Page404() {
   return (
      <Section>
         <header>
            <div className="container">
               <figure>
                  <Link to="/feed">
                     <img
                        src="https://www.instagram.com/static/images/branding/logoWhiteoutLockup.png/3a62b1a95da3.png"
                        alt="logo"
                     />
                  </Link>
               </figure>

               <span>visitante</span>
            </div>
         </header>

         <div className="textarea">
            <h2>Esta página não está disponível.</h2>

            <p>
               O link que você acessou pode estar quebrado ou a página pode ter
               sido removida. <Link to="/feed"> Voltar para o Instagram. </Link>
            </p>
         </div>
      </Section>
   );
}
