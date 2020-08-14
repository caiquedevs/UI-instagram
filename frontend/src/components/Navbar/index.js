import React from 'react';
import { Link } from 'react-router-dom';

import { MdPhotoCamera } from 'react-icons/md';

import logo from '../../assets/img/logo.svg';
import iconHome from '../../assets/icons/iconHome.svg';
import iconArrow from '../../assets/icons/iconArrow.svg';
import iconCompass from '../../assets/icons/iconCompass.svg';
import iconHeart from '../../assets/icons/iconHeart.svg';

import { Header } from './styled';

export default function NavbarComponent({ data }) {
   const user = { ...data[0] };
   return (
      <Header>
         <div className="container">
            <nav>
               <figure className="iconPhoto">
                  <MdPhotoCamera size="22px" />
               </figure>

               <figure>
                  <Link to="/">
                     <img width="103px" src={logo} alt="Logo" />
                  </Link>
               </figure>

               <div className="searchBar">
                  <input
                     placeholder="Pesquisar"
                     type="search"
                     name="search"
                     id="search"
                  />
               </div>

               <ul>
                  <li className="iconHome">
                     <img src={iconHome} alt="icon" />
                  </li>
                  <li className="iconArrow">
                     <img height="19px" src={iconArrow} alt="icon" />
                  </li>
                  <li className="iconCompass">
                     <img src={iconCompass} alt="icon" />
                  </li>
                  <li className="iconHeart">
                     <img src={iconHeart} alt="icon" />
                  </li>
                  <li className="iconUser">
                     <img src={user.avatar} alt="avatar-user" />
                  </li>
               </ul>
            </nav>
         </div>
      </Header>
   );
}
