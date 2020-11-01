import React from 'react';
import styled from 'styled-components';


const Text = styled.textarea`
  height: 200px;
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const TextBox = () => (
  <div>
    <Text type='text'></Text>
    {/* <div>hiii</div> */}
  </div>
)

export default TextBox;