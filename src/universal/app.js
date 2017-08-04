import React, {Component} from 'react';

class App extends Component {
  state = {randomNumber: -1};

  onClickGenerateRandom = () => {
    // EUREKA! Call our C function with an underscore prefix!
    // All the methods in utils.c are exposed globally because utils.js
    // is included as a script tag in our html.
    const randomNumber = _generateRandom();
    console.log(`onClickGenerateRandom: ${randomNumber}`);
    this.setState({randomNumber});
  };

  render() {
    return (
      <div>
        <div style={{fontWeight: 'bold', fontSize: '26px'}}>
          Welcome to WebAssembly React Playground!
        </div>
        <div style={{width: '600px', paddingTop: '16px'}}>
          Begin by clicking the button below to generate
          a random number. This calls a C function which is compiled in a .wasm file.
        </div>
        <div style={{paddingTop: '16px'}}>
          <button onClick={this.onClickGenerateRandom}>Generate random</button>
        </div>
        <br/>
        {
          this.state.randomNumber < 0 ?
            <div style={{textAlign: 'center', width: '100px', color: 'grey', fontSize: '14px'}}>
              No number yet
            </div>
            :
            <div
              style={{textAlign: 'center', width: '100px', borderWidth: 1, borderColor: 'red', borderStyle: 'solid', color: 'red'}}>
              {this.state.randomNumber}
            </div>
        }
      </div>
    );
  }
}

export default App;
