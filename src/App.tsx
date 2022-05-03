
import './App.css';
import React from 'react';

import Card from './components/Card/Card';

function App() {

  let infos =[
    {
      username: "usernameone",
      comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, est molestias beatae vitae temporibus dignissimos ipsa recusandae perspiciatis dolor aliquam inventore qui, tenetur totam tempore rem assumenda ad culpa sit.",
      quantity: 0
    },
    {
      username: "usernametwo",
      comment: "comment2",
      quantity: 0
    }
  ]
  return (
    <div>
      <Card infos={infos}/>
    </div>
  );
}

export default App;
