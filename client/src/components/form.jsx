import React from 'react';
import style from 'styled-components';
import play from './../icons/playBlack.png';


const Text = style.textarea`
  height: 70%;
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  background-color: #EEEEEE
`;

const Button = style.img`
  position: fixed;
  bottom: 6%;
  right: 24%;
  margin: auto;
  height: 3em;
`;

const Form = ({handleSubmit}) => (
  <div>
    <Text type='text'></Text>
    <Button onClick={(e) => {handleSubmit(e)}} src={play}></Button>
  </div>
)

export default Form;