import React, { Component, Suspense } from 'react';
import './App.css';

const Header = React.lazy(() => import('./components/header'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading......</div>}>
          <Header header="header"></Header>
        </Suspense>
      </div>
    );
  }
}

export default App;
