import React from 'react';

import iconStory from '../../assets/icons/iconStory.svg';

import suggestions from '../../suggestions';
import { Aside } from './styled';

export default function Sidebar({ data, name }) {
   const user = { ...data[0] };

   return (
      <Aside>
         <figure className="userBar">
            <img src={user.avatar} alt="user-avatar" />
            <figcaption>
               <span>{name}</span>
            </figcaption>
         </figure>

         <section className="suggestions">
            <div className="title">
               <span>Sugestões para você</span>
               <small>Ver tudo</small>
            </div>
            <ul>
               <li className="iconStory">
                  <figure>
                     <img src={iconStory} alt="icon Story" />
                     <figcaption>
                        <span>Seu story</span>
                     </figcaption>
                  </figure>
               </li>
               {suggestions.map(item => (
                  <li key={item.name}>
                     <figure>
                        <img src={item.src} alt="thumbnail" />
                        <figcaption>
                           <span>{item.name}</span>
                           <small>{item.label}</small>
                        </figcaption>
                     </figure>
                  </li>
               ))}
            </ul>
         </section>
      </Aside>
   );
}
