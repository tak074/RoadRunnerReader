import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
  padding-top: 1%;
`;

const Title = () => (
  <div>
    <Header>RoadRunnerReader</Header>
  </div>
)

export default Title;