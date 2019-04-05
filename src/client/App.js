import React, { Component } from 'react';
import './app.css';
import Output from './components/output';
import BarChart from './components/barchart/barchart';

/**
 * main component
 */
class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      outputValue: ''
    }
    this._randomizeVowels = this._randomizeVowels.bind(this);
    this._randomizeConsonants = this._randomizeConsonants.bind(this);
  }

  /**
   * handles the randomize vowels button
   */
  _randomizeVowels = async input => {
    const response = await fetch('/api/randomize-vowels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: input }),
    });
    const body = await response.text();
    this.setState({ outputValue: body });
  }

  /**
   * handles the randomize consonants button
   */
  _randomizeConsonants= async input => {
    const response = await fetch('/api/randomize-consonants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: input }),
    });
    const body = await response.text();
    this.setState({ outputValue: body });
  }

  render() {
    
    return (
      <div>
        <h1> Word Vowels </h1>
        <Output 
          randomizeVowels={this._randomizeVowels} 
          randomizeConsonants={this._randomizeConsonants}
          outputBlob={this.state.outputValue}>
        </Output>
        <div>
        <h1> Letter Frequency of Input </h1>
        <BarChart />
      </div>
      </div>
    );
  }
}

export default App;