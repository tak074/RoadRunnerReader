import React from 'react';
import Title from './title.jsx';
import TextBox from './textBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Title/>
        <TextBox/>
      </div>
    )
  }
}

export default App;