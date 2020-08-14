import React from 'react';

import iconLoading from '../../assets/img/loading.png';
import { Section } from './styled';

export default function LoadingComponent({ data }) {
   return (
      <Section isVisible={data}>
         <figure>
            <img src={iconLoading} alt="loading icon" />
         </figure>
      </Section>
   );
}
