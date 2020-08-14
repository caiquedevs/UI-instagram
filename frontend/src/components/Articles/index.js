import React from 'react';

import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import { Article } from './styled';

export default function Articles({ data, name }) {
   return (
      <section>
         {data &&
            data.map(post => (
               <Article key={post.id}>
                  <CardHeader photo={post.avatar} name={name} />

                  <figure className="figurePost">
                     <img src={post.src} alt="thumbnail" />
                  </figure>

                  <CardFooter id={post.id} />
               </Article>
            ))}
      </section>
   );
}
