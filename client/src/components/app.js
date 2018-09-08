import React from 'react';
import Nav from './nav.js';
import Main from './main.js';

const App = () => {

// fetch('/admin')
// .then( resp => resp.json())
// .then( resp => console.log(resp))

return ( 
  <div>
    <Nav />
    <Main />
  </div>
)
}

export default App;