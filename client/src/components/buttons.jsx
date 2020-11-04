import React from 'react';
import style from 'styled-components';

const Container = style.div`
  display: block;
  position: fixed;
  bottom: 5%;
  left: 70%;
  margin: auto;
  text-align: center;
`;
const Button = style.div`
  display: inline;
  text-align: center;
  margin-left: 0.5em;
  font-size: 2em;
`;
const Speed = style.div`
  display: inline;
  text-align: center;
  color: #EEEEEE;
`;
const FullText = style.div`
  display: inline;
  text-align: center;
  margin-left: 2em;
  color: #EEEEEE;
`;


const Buttons = ({play, time, speed, ending, handleReset, handlePlay, handleSpeed, handleFullText}) => (
  <Container>
    <Button onClick={() => {handleReset()}}>Back</Button>
    <Button onClick={() => {handlePlay()}}>{ending? 'Replay' : play === true? 'Pause' : 'Play'}</Button>
    <Speed>
      <Button onClick={() => {handleSpeed(40)}}>-</Button>
      <Button>x{(time/speed).toFixed(2)}</Button>
      <Button onClick={() => {handleSpeed(38)}}>+</Button>
    </Speed>
    <FullText onClick={() => {handleFullText()}}>FullText</FullText>
  </Container>
)

export default Buttons;