import React, { Component } from 'react';
import Timeline from 'react-visjs-timeline';
import logo from './logo.svg';
import './App.css';

const items = [
    {id: 1, content: 'item 1', start: '2014-04-20'},
    {id: 2, content: 'item 2', start: '2014-04-14'},
    {id: 3, content: 'item 3', start: '2014-04-18'},
    {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    {id: 5, content: 'item 5', start: '2014-04-25'},
    {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
  ];

let options = {
  start: "2014-04-10",
  end: "2014-04-30",
  editable: true /* this option means you can add or remove items by clicking on the timeline */,
  margin: {
    item: 20
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="header">A basic timeline. You can move and zoom the timeline, and select items.</p>
        <Timeline
          items={items}
          options={options}
        />
      </div>
    );
  }
}

export default App;
