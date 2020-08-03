import React, { Component, Suspense } from 'react';
import './App.css';
import axios from 'axios';
const Header = React.lazy(() => import('./components/header'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading......</div>}>
          <Header header="header">
          </Header>
          <button onClick={() => axios.post('/login')}>request</button>
        </Suspense>
      </div>
    );
  }
}

export default App;
