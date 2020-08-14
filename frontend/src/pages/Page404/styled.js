import Styled from 'styled-components';

export const Section = Styled.section`
   width: 100%;
   height: 100vh;

   header{
      width: 100%;
      height: 78px;
      display: flex;
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid #efefef;

      div.container {
         align-items: center;

         span{
            font-size: 16px;
            font-weight: 400;
            color: #003569;
         }
      }

      figure{
         display: flex;
      }
   }

   div.textarea{
      padding: 22px 40px 0;

      h2{
         font-size: 24px;
         text-align: center;
         margin: 19px 0;
         line-height: initial;
         font-weight: 700;
      }

      p{
         font-size: 16px;
         text-align: center;
         margin: 16px 0;
         line-height: initial;
         font-weight: normal;

         a{
            text-decoration: none;
            color: #003569;
         }
      }
   }

   @media screen and (min-width: 640px) and (max-width: 999px){}

   @media screen and (min-width: 0px) and (max-width: 639px){
      div.container{
         flex-direction: row;
         padding: 0 15px;
         flex-wrap: wrap;
      }
   }
`;
