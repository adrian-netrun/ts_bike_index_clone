import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState('')

  const serverRequest = (() => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data)
    })
  });

  return (
    <div>
      <h1>Test has passed</h1>
      <p>Everything now works</p>
      <button onClick={serverRequest}>Get data</button>
    </div>
  );
};

export default App;
