const random =  require('../client/utils/randomize_vowels');
const express = require('express');
const bodyParser = require('body-parser');
var helmet = require('helmet');
const app = express();
const port = process.env.PORT || 5000;

// the __dirname is the current directory
const path = require('path')
app.use(helmet())
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    app.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
  }
  //build mode
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  })

app.post('/api/randomize-vowels', (req, res) => {
    result = randomizeVowels(req.body.input);
  res.send(`${result}`);
});

app.post('/api/randomize-consonants', (req, res) => {
    result = randomizeConsonants(req.body.input);
  res.send(`${result}`);
});

app.listen(port, () => console.log(`Listening on port ${process.env.PORT || 5000}!`));

function randomizeVowels(userInput) {
    return random.randomize(userInput, 0)
}

function randomizeConsonants(userInput) {
    return random.randomize(userInput, 1)
}
