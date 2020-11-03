import React from 'react';
import style from 'styled-components';

const Main = style.div`
  font-size: 500%;
  display: block;
  margin: auto;
  text-align: center;
  color: white;
  padding-top: 15%;
`;

const Read = ({text}) => (
  <Main>{text[0]}</Main>
)

export default Read;