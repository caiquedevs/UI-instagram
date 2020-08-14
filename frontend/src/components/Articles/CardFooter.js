import React from 'react';

// Icones
import IconHeart from '../../assets/icons/iconHeart';
import iconChat from '../../assets/icons/iconChat.svg';
import iconArrow from '../../assets/icons/iconArrow.svg';

export default function CardFooter({ id }) {
   return (
      <footer>
         <div className="actions">
            <label htmlFor={`likePost${id}`}>
               <input type="checkbox" name="likeButton" id={`likePost${id}`} />
               <IconHeart />
            </label>

            <img src={iconChat} alt="icon" />

            <img height="22px" src={iconArrow} alt="icon" />
         </div>

         <div className="comment">
            <input
               type="text"
               name="comment"
               placeholder="Adicione um comentário"
            />
            <button type="button">Publicar</button>
         </div>
      </footer>
   );
}
