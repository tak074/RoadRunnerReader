import React from 'react';
import Title from './title.jsx';
import TextBox from './textBox.jsx';
import Read from './read.jsx';
import {story} from '../../../database/sample.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:['','',''],
      story:[],
    }

  }

  changeText() {
    let container = [];
    let time = 1000;
    console.log('story', this.state.story);
    console.log('story[2]', this.state.story[2]);
    if (this.state.story[2] === undefined) {
      console.log('two');
      // push this.state.story[0],1
      container.push(this.state.story[0]);
      container.push(this.state.story[1]);
      setTimeout (
        function() {
          this.setState({ text: container});
        }.bind(this),
        time
      );
    } else {
      console.log('three');
      // push this.state.story[0], 1, 2 into container
      container.push(this.state.story[0]);
      container.push(this.state.story[1]);
      container.push(this.state.story[2]);
      // remove first word of this.state.story
      let tempt = this.state.story;
      temp.shift();
      this.setState({story: temp});
      setTimeout (
        function() {
          this.setState({text: container});
          this.changeText();
        }.bind(this),
        time
      );
    }
  }

  componentDidMount() {
    let storyArr = story.split(' ');
    console.log('mounted', storyArr);
    this.setState({story: storyArr})
    .then(() => {
      console.log('after', this.state.story);
    });
    this.changeText();
  }

  render() {
    console.log('text', this.state.text);
    return (
      <div>
        <Title/>
        <Read text={this.state.text}/>
        {/* <TextBox/> */}
      </div>
    )
  }
}

export default App;