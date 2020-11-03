import React from 'react';
import style from 'styled-components';
import playIcon from './../icons/play.png';
import pauseIcon from './../icons/pause.png';
import backIcon from './../icons/back.png';

const Container = style.div`
  display: block;
  position: fixed;
  bottom: 5%;
  right: 15%;
  margin: auto;
  text-align: center;
`;
const Button = style.div`
  display: inline;
  text-align: center;
  margin-left: 0.5em;
  color: white;
  font-size: 2em;
`;
const Icon = style.img`
  display: inline;
  margin-left: 0.5em;
  height: 3em;
`;
const Speed = style.div`
  display: inline;
  text-align: center;
  margin-left: 2em;
  color: white;
`;


const Buttons = ({play, time, speed, handleReset, handlePlay, handleSpeed}) => (
  <Container>
    <Icon onClick={() => {handleReset()}} src={backIcon}></Icon>
    <Icon onClick={() => {handlePlay()}} src={play === true? pauseIcon : playIcon}></Icon>
    <Speed>
      <Button onClick={() => {handleSpeed(40)}}>-</Button>
      <Button>x{(time/speed).toFixed(2)}</Button>
      <Button onClick={() => {handleSpeed(38)}}>+</Button>
    </Speed>

  </Container>
)

export default Buttons;