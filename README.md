Link to Deployed App:
https://wordplay.siddarthmadan09.now.sh/
## Documentation

### Folder Structure

 All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server.js file.
 
 Approach
 The parent component is the App Component
 It contains 2 Component
 1. Output Component - This contains the input textarea, buttons, and the output textarea
 2. BarChart Component - This containts the visualization chart.
 
 Output Component - Create as a functional stateless component - There is no state involved. 
 As React follows a top -down reconcilation approach . the data flows down and actions flow up, the output state value is stored in the parent component(App) and is passed as props to Output Component
 The Output component actions flow up and the handling the server logic is present in the App component for the 2 api endpoints.
 
 Utils folder contains 2 methods
 1. Count - contains the logic for counting the frequency of letters.
 2. randomize_Vowels.js - contains the randomize logic
