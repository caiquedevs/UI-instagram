import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeader({ photo, name }) {
   return (
      <header>
         <figure>
            <img width="32px" src={photo} alt="thumbnail" />
            <figcaption>{name}</figcaption>
         </figure>
      </header>
   );
}

CardHeader.propTypes = {
   photo: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
};
