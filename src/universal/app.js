import React, {Component} from 'react';

class App extends Component {
  render() {
    let diceResult = -1;
    if (typeof _roll_dice !== 'undefined') diceResult = _roll_dice();

    return (
      <div>
        Welcome to WebAsm!
        <br/>
        <br/>
        <div>
          Dice roll from webasm:&nbsp;
          <span style={{color: 'red'}}>{diceResult}</span>
        </div>
      </div>
    );
  }
}

export default App;
