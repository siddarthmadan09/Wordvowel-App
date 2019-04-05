import React from 'react';
import './output.css';
import Button from '@material-ui/core/Button';

const Output = props => {
  const { outputBlob } = props;

  return(
    <React.Fragment>
      <div className="container">
        <section className="section">
          <div className="title">
            Input
          </div>
          <div className="text-container">
            <textarea 
              id="input" 
              className="textarea" 
              rows="8" 
              cols="50" 
              wrap="hard" 
              placeholder="Enter text to convert">
            </textarea>
          </div>
        </section>
        <section className="section">
          <div className="title">
            Output
          </div>
          <div className="text-container">
            <textarea 
              id="output" 
              className="textarea" 
              rows="8" 
              cols="50" 
              wrap="hard" 
              value= {outputBlob}
              onChange={(event) => props.handleOnChange(event)} 
              disabled>
            </textarea>
          </div>
        </section>
        <Button className="button" onClick={() => props.randomizeVowels(input.value)} 
          color="primary"
          variant="outlined">
          Randomize Vowels
        </Button>
        <Button className="button" onClick={() => props.randomizeConsonants(input.value)} 
          color="secondary"
          variant="outlined">
          Randomize Consonants
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Output;