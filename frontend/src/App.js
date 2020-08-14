import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/styled';

import Routes from './routes';

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Routes />
      </BrowserRouter>
   );
}

export default App;
