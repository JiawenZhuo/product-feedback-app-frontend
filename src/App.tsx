
import './App.css';
import React from 'react';

import Card from './components/Card/Card';

function App() {

  let infos =[
    {
      username: "usernameone",
      comment: "comment"
    },
    {
      username: "usernametwo",
      comment: "comment2"
    }
  ]
  return (
    <div>
      <Card infos={infos}/>
    </div>
  );
}

export default App;
