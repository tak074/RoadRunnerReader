import React from 'react';
import style from 'styled-components';
import {story} from '../../../database/sample.js';

import Title from './title.jsx';
import Read from './read.jsx';
import Buttons from './buttons.jsx';
import Form from './form.jsx';
import FullText from './fullText.jsx';

const Front = style.div`
  height: 100%;
  width: 100%;
  background-color: #F5F5F5;
  color: black;
`;

const Display = style.div`
  height: 100%;
  width: 100%;
  background-color: black;
  color: #EEEEEE;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:[''],
      story:[],
      count: 0,
      ending: false,
      time: 150,
      speed: 150,
      play: false,
      front: true,
      fullText: false,
      processing: false
    }
  }

  changeText() {
    let container = [];
    let speed = this.state.speed;
    let count = this.state.count;
    let story = this.state.story;

    // push one word into container
    container.push(story[count]);
    console.log('container', container);
    if (story[count + 1] === undefined) {
      console.log('ending');
      let changeTextLast = setTimeout (
        function() {
          this.setState({
            text: container,
            ending: true,
            play: false,
            count: this.state.count + 1,
            processing: false
          });
        }.bind(this),
        speed
      );
    } else {
      let timer;
      if (count === 0) {
        timer = speed;
      } else {
        timer = container[0].length === 0? speed:speed * (story[count - 1].length)**(1/3);
      }
      let changeText = setTimeout (
        function() {
          this.setState({
            text: container,
            count: this.state.count + 1,
            processing: false
          });
        }.bind(this),
        timer
      );
    }
  }

  componentDidUpdate() {
    if (!this.state.processing) {
      if (this.state.play) {
        if (!this.state.ending) {
          this.changeText();
        }
      }
    }
  }

  handlePlay() {
    console.log('hanldePlay');
    if (!this.state.ending) {
      this.setState({play: this.state.play === false? true: false, processing: false});
    }
  }

  handleKey(e) {
    let keyCode = e.keyCode;
    console.log('pressed ', e.keyCode);

    // space for pause and play
    if (keyCode === 32) {
      this.handlePlay();
    }

    // changing words
    if (keyCode === 37 || keyCode === 39) {
      this.handleShift(keyCode);
    }

    // changing speed
    if (keyCode === 38 || keyCode === 40) {
      this.handleSpeed(keyCode);
    }
  }

  handleSpeed(input) {
    //speeding up
    if (input === 38) {
      console.log('speeding up');
      if (this.state.speed >= 50) {
        this.setState({
          speed: this.state.speed / 1.1,
          play:false,
          processing: false
        });
      }
    }
    //slowing down
    if (input === 40) {
      console.log('slowing down');
      if (this.state.speed <= 5000) {
        this.setState({
          speed: this.state.speed * 1.1,
          play:false,
          processing: false
        });
      }
    }
  }

  handleShift(input) {
    console.log('count', this.state.count);
    // left to go back one word
    if (input === 37) {
      if (this.state.count !== 0) {
        let temp = [];
        temp.push(this.state.story[this.state.count - 1]);
        this.setState({
          count: this.state.count - 1,
          play: false,
          text: temp,
          processing: false
        });
      }
    }
    // right to move up one word
    if (input === 39) {
      let temp = [];
      temp.push(this.state.story[this.state.count - 1]);
      this.setState({
        count: this.state.count + 1,
        play: false,
        text: temp,
        processing: false
      });
    }
  }

  handleSubmit(e) {
    let text = e.target.parentElement.children[0].value;
    let textArr = text.split(/ |\n/);
    let container= [textArr[0]];
    this.setState({
      story: textArr,
      front: false,
      speed: this.state.time,
      text: container,
      processing: false
    });
  }

  handleReset() {
    this.setState({
      text:[''],
      story:[],
      count: 0,
      ending: false,
      speed: this.state.time,
      play: false,
      front:true,
      processing: false
    });
  }

  handleFullText() {
    this.setState({
      fullText: this.state.fullText? false: true,
      processing: true
    })
  }

  render() {
    if (!this.state.front) {
      return (
        <Display onKeyDown={this.handleKey.bind(this)} tabIndex="0">
          <div>
            <Title/>
            <Read text={this.state.text}/>
          </div>
          <div>
            <FullText story={this.state.story} fullText={this.state.fullText} count={this.state.count}/>
            <Buttons
            play={this.state.play}
            speed={this.state.speed}
            time={this.state.time}
            handlePlay={this.handlePlay.bind(this)}
            handleReset={this.handleReset.bind(this)}
            handleSpeed={this.handleSpeed.bind(this)}
            handleFullText={this.handleFullText.bind(this)}
            />
          </div>
        </Display>
      )
    } else {
      console.log('front');
      return (
        <Front>
          <div>
            <Title/>
          </div>
          <div>
            <Form handleSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </Front>
      )
    }
  }
}

export default App;