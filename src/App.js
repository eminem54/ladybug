import React from 'react';
import ReactDOM from 'react-dom';
import entry from './img/entry.png';
import './App.css';
import Main from './main/main.js';
import routes from './router.js';

class App extends React.Component{
  componentDidMount() {
    setTimeout(() => {
      ReactDOM.render(routes, document.getElementById('root'));
    }, 1000);
  }

  render() {
    return (
      <img src={entry} className="App-logo" logo="entry" /> 
    );
  }
}

export default App;
