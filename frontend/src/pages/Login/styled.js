import Styled from 'styled-components';

export const Section = Styled.section`
   width: 100%;
   height: 90vh;
   background: #fff;
   display: grid;
   grid-template-columns: repeat(2, 1fr);

   div.phone{
      display: flex;
      align-items: center;
      justify-content: flex-end;

      figure{ margin-right: -15px }
   }

   div.formLogin{
      display: flex;
      align-items: center;
      justify-content: flex-start;

      form{
         width: 100%;
         max-width: 350px;
         padding: 30px 0;
         display: flex;
         align-items: center;
         flex-direction: column;
         border: 1px solid #dbdbdb;
         border-radius: 3px;

         div.thumb{
            margin: 20px 0;
            svg path{ color: #dcdcdc; }
         }

         input {
            width: 100%;
            max-width: 222px;
            height: 36px;
            padding: 0 7px ;
            margin-bottom: 8px;

            font-weight: 400;
            border: 1px solid #dbdbdb;
            border-radius: 3px;
         }

         button{
            width: 222px;
            height: 30px;
            margin-bottom: 30px;
            border: transparent;
            border-radius: 4px;
            background-color: #4fb6f9;
            color: #fff;
            cursor: pointer;
         }

         span{
            font-size: 14px;
            font-weight: 400;
            strong{
               font-size: 14px;
               color: #4fb6f9;
               cursor: pointer;
            }
         }
      }
   }

   @media screen and (min-width: 670px) and (max-width: 875px){
      grid-template-columns: 1fr;

      div.phone{ display: none;}
      div.formLogin{ justify-content: center; }
   }

   @media screen and (min-width: 0px) and (max-width: 639px){
      grid-template-columns: 1fr;

      div.phone{ display: none;}
      div.formLogin{ justify-content: center; }

      div.formLogin form { border: 0; }
   }
`;
