import React from 'react';
import styled from 'styled-components';


const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 100vh;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;

  margin: 0 auto; 

  padding-top: 96px;
  padding-bottom: 32px;
  
`;
const TodoMainBlock= styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  flex:1;
  
 

`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock><TodoMainBlock>{children}</TodoMainBlock></TodoTemplateBlock>;
  }
  
  export default TodoTemplate;