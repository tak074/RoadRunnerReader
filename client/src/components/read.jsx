import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  font-size: 15em;
  display: inline;
  margin: auto;
  text-align: center;
  color: white;
`;

const Side = styled.div`
  font-size: 15em;
  display: inline;
  margin: auto;
  text-align: center;
  color: gray;
`;

const Container = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  padding-top: 10%;
`;


const Read = ({text}) => (
  <Container>
    <Side>{text[0] + ' '}</Side><Main>{text[1]}</Main><Side>{' ' + text[2]}</Side>
  </Container>
)

export default Read;