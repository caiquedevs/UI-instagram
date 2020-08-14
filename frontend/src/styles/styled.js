import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      outline: none;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      font-weight: 600;
      line-height: 18px;
      text-overflow: ellipsis;
      color: #262626;
   }

   body { background: #fafafa; }

   div.container{
      width: 100%;
      max-width: 935px;
      height: auto;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      @media screen and (min-width: 0px) and (max-width: 999px){
         max-width: 600px;
         flex-direction: column-reverse;
      }
   }
`;

export default GlobalStyle;
