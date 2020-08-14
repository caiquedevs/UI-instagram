import Styled from 'styled-components';

export const Aside = Styled.aside`
   width: 100%;
   max-width: 293px;
   margin: 30px 0;

   figure.userBar{
      width: 100%;
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      img {
         border-radius: 50%;
         width: 50px;
      }

      svg path{
         color: #dcdcdc
      }
      figcaption{
         margin: 0 15px;
         span{
            font-size: 14px;
            display: block;
            font-weight: 600;
         }
         small{
            font-size: 12px;
            color: #8E8E8E;
            display: block;
         }
      }

   }

   section.suggestions{
      width: 100%;
      height: auto;
      padding: 15px 15px 15px 19px;
      border: 1px solid #dbdbdb;
      border-radius: 3px;
      background-color: #ffffff;

      div.title{
         width: 100%;
         display: flex;
         justify-content: space-between;
         margin-bottom: 15px;

         span{
            font-size: 14px;
            color: #8e8e8e;
         }
         small{
            font-size: 12px;

         }
      }

      ul {
         list-style: none;

         li.iconStory{ display: none; }

         li figure{
            display: flex;
            margin-bottom: 14px;

            figcaption{
               display: flex;
               flex-direction: column;

               small {
                  font-weight: normal;
                  font-size: 13px;
                  color: rgba(0,0,0, 0.5);
               }
            }

            img{
               width: 34px;
               border-radius: 50%;
               margin-right: 17px;
            }
         }
      }
   }

   @media screen and (min-width: 640px) and (max-width: 999px){
      max-width: 100%;
      margin: 0;
      overflow: hidden;

      figure.userBar { display: none; }

      section.suggestions {
         padding: 15px 15px 5px 15px;
         border-top: 0px;

         div.title { display: none; }

         ul {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;

            li.iconStory{
               display: block;

               figure {

                  img{
                     width: auto;
                     border-radius: 0;
                     margin: 0 auto;
                  }

                  figcaption{
                     font-size: 14px;
                  }

               }
            }

            li{
               margin-right: 15px;

               figure {
                  max-width: 66px;
                  margin: 0;
                  flex-direction: column;

                  img{
                     width: 56px;
                     margin: 0 auto;
                  }

                  figcaption{
                     margin: 5px 0;
                     text-align: center;
                     font-size: 14px;

                     span{ overflow: hidden }
                     small { display: none }
                  }

                  img{
                     width: 56px;
                  }
               }
            }
         }


      }
   }
   @media screen and (min-width: 0px) and (max-width: 639px){
      max-width: 100%;
      margin: 0;
      overflow: hidden;

      figure.userBar { display: none; }

      section.suggestions {
         padding: 0px 15px;
         border-top: 0px;
         border-left: 0px;
         border-right: 0px;
         overflow: hidden;
         background-color: #fafafa;

         div.title { display: none; }

         ul {
            width: 100%;
            height: auto;
            padding: 15px 0;
            display: flex;
            align-items: center;
            overflow: auto;

            li.iconStory{
               display: block;

               figure {
                  img{
                     width: auto;
                     border-radius: 0;
                     margin: 0 auto;
                  }

                  figcaption{
                     font-size: 14px;
                     span{
                        font-size: 12px;
                     }
                  }

               }
            }

            li{
               margin-right: 15px;

               figure {
                  max-width: 66px;
                  margin: 0;
                  flex-direction: column;

                  img{
                     width: 56px;
                     margin: 0 auto;
                  }

                  figcaption{
                     margin: 5px 0;
                     text-align: center;
                     font-size: 14px;

                     span{ overflow: hidden; }
                     small { display: none }
                  }
               }
            }
         }
   }
`;
