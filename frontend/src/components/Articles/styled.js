import Styled from 'styled-components';

export const Article = Styled.article`
   width: 100%;
   max-width: 616px;
   margin: 30px 0;
   border: 1px solid #dbdbdb;
   border-radius: 3px;
   background-color: #fff;

   header{
      width: 100%;
      height: 60px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #efefef;

      figure{
         display: flex;
         align-items: center;

         img { border-radius: 50%; }

         figcaption{
            margin-left: 15px;
            font-size: 14px;
         }
      }
   }

   figure.figurePost{
      width: 100%;
      height: 616px;

      img { max-width: 100%; }
   }

   footer{
      width: 100%;
      background-color: #fff;

      div.actions{
         width: 100%;
         height: 55px;
         padding: 0 20px;
         display: flex;
         align-items: center;

         img, svg{
            margin-right: 15px;
            transition: transform .1s;
            cursor: pointer;
            display: flex;
         }

         label{
            display: flex;

            input{
               appearance: none;

               :checked ~ svg path {
                  fill: #ed4956;
                  animation: pulse .25s;
               }
            }
         }
      }

      div.infos{
         width: 100%;
         padding: 0 15px;

         span{
            display: block;
            margin-bottom: 10px;
            overflow: hidden;
         }
         span.view{
            font-size: 14px;
         }
         span.title{
            font-size: 14px;
            font-weight: normal;
            strong{
               font-size: 14px;
               font-weight: 600;
            }
         }
         span.date{
            font-size: 10px;
            color: #8E8E8E;
            margin-bottom: 10px;
         }
      }

      div.comment{
         width: 100%;
         height: 57px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         border-top: 1px solid #EFEFEF;

         input{
            width: 100%;
            height: 55px;
            padding: 0 15px;
            border: none;
         }

         button{
            width: 85px;
            height: 55px;
            border: none;
            background: transparent;
            color: #B7E1FC;
            font-size: 15px;
            cursor: pointer;
         }
      }

      @keyframes pulse {
         0%   {
            transform: scale(1);
         }
         50%  {
            transform: scale(.8);
         }
         100% {
            transform: scale(1);
         }
      }
   }

   @media screen and (min-width: 0px) and (max-width: 639px){
      margin: 0;
      border: 0;

      figure.figurePost {
         height: min-content;
         display: flex;
         background-color: white;
      }

      footer div.actions img, footer div.actions svg {
         cursor: auto;
      }

      footer div.infos {
         padding-bottom: 15px;
      }

      footer div.comment {
         display: none;
      }
   }
`;
