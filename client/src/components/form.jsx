import React from 'react';
import style from 'styled-components';

const Text = style.textarea`
  background-color: #EEEEEE;
  display: block;
  height: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  width: 40%;

  ::placeholder {
    font-size: 3em;
  }
`;

const Button = style.div`
  bottom: 6%;
  font-weight: bold;
  font-size: 2em;
  margin: auto;
  position: fixed;
  right: 24%;
`;

const Intro = style.p`
  display: inline-block;
  position: fixed;
  left: 3%;
  top: 20%;
  width: 20%;
`;

const Form = ({handleSubmit}) => (
  <div>
    <Intro>
      Hello! <br></br>
      <br></br>
      Welcome to RoadRunnerReader, <br></br>
      Where you can effortlessly read 250 words per minute.<br></br>
      <br></br>
      You can navigate through arrow keys and spacebar.<br></br>
      - <b>Up</b> / <b>Down</b> : Speed up / Slow Down<br></br>
      - <b>Left</b> / <b>Right</b> : Switch current word<br></br>
      - <b>Spacebar</b> : Play/Pause<br></br>
      <br></br>
      Click <b>'FullText'</b> to open/close a view of the entire text.<br></br>
      <br></br>
      Input the text you'd like to read then press <b>'Start'</b>!<br></br>
      <br></br>
      Enjoy!!
      </Intro>
    <Text type='text' placeholder='Input your text in here.'></Text>
    <Button onClick={(e) => {handleSubmit(e)}}>Start</Button>
  </div>
)

export default Form;