import React from 'react';
import style from 'styled-components';

const Header = style.h1`
  font-size: 2.5em;
  text-align: center;
  padding-top: 1%;
`;

const Title = () => (
  <div>
    <Header>RoadRunnerReader</Header>
  </div>
)

export default Title;