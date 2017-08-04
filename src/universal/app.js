import React, {Component} from 'react';

class App extends Component {
  state = {randomNumber: -1};

  onClickGenerateRandom = () => {
    const randomNumber = _generateRandom();
    console.log(`onClickGenerateRandom: ${randomNumber}`);
    this.setState({randomNumber});
  };

  render() {
    return (
      <div>
        Welcome to WebAsm!
        <br/>
        <br/>
        <div>
          <button onClick={this.onClickGenerateRandom}>Generate random</button>
        </div>
        <br/>
        {
          this.state.randomNumber < 0 ?
            <div>Click to generate random number</div>
            :
            <div style={{textAlign: 'center', width: '100px', borderWidth: 1, borderColor: 'red', borderStyle: 'solid', color: 'red'}}>
              {this.state.randomNumber}
            </div>
        }
      </div>
    );
  }
}

export default App;
