import React, { Component } from 'react';
import './App.scss';
import StudentList from './Component/StudentList';

class App extends Component {
  render() {
    return (
      // TODO GTB-知识点: - html 标签使用不合理，不够语义化
      <div data-testid="app" className="App">
        <div>
          <div>
            <p>分组列表</p>
            <button type="button">分组学员</button>
            <div>具体分组</div>
          </div>
          <div>
            <StudentList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// TODO GTB-综合: * 完成度太低
