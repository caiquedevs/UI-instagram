import Styled from 'styled-components';

export const Header = Styled.header`
   width: 100%;
   height: 54px;
   border-bottom: 1px solid #dbdbdb;
   background-color: #fff;

   nav{
      width: 100%;
      height: 54px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      figure.iconPhoto{
         display: none;
      }

      figure{
         display: flex;
         align-items: center;
         justify-content: flex-start;

         a{
            display: flex;
            align-items: center;
         }

         img{
            margin-bottom: -5px;
         }

      }

      div.searchBar{
         display: flex;
         align-items: center;
         justify-content: center;

         input{
            width: 215px;
            height: 28px;
            padding: 0 7px;
            border: 1px solid #dbdbdb;
            border-radius: 3px;

            ::-webkit-input-placeholder{
               margin: 0 auto;
               text-align: center;
               color: #dbdbdb;
            }
         }
      }

      ul{
         display: flex;
         align-items: center;
         justify-content: flex-end;
         list-style: none;

         li{
            display: flex;
            padding: 0 5px;
            margin: 0 6px;

            svg path {
               color: #dcdcdc;
            }
         }

         li.iconUser img {
            border-radius: 50%;
            max-width: 30px;
         }
      }
   }

   @media screen and (min-width: 640px) and (max-width: 999px){
      nav{
         display: flex;
         align-items: center;
         justify-content: space-between;

      }
   }

   @media screen and (min-width: 0px) and (max-width: 639px){
      nav {
         padding: 0 15px;
         display: flex;
         align-items: center;
         justify-content: space-between;

         figure.iconPhoto{
         display: flex;
      }

         div.searchBar { display: none; }

         ul {
            li.iconHome, li.iconCompass, li.iconHeart, li.iconUser { display: none; }
            li.iconArrow { margin: 0; padding: 0;}
         }
      }
   }
`;
