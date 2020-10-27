import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <div>
          <div>
            <p>分组列表</p>
            <button type="button">分组学员</button>
            <div>具体分组</div>
          </div>
          <div>
            <p>学员列表</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
