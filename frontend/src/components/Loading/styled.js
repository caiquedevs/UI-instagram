import Styled from 'styled-components';

export const Section = Styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   position:fixed;
   top: 0;
   left: 0;
   z-index: 1;
   background-color: #ffffff;
   visibility: ${props => (props.isVisible ? 'hidden' : 'visible')};
   opacity: ${props => (props.isVisible ? '0' : '1')};
   transition: 0.8s all;
`;
