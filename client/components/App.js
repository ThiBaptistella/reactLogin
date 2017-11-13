/*
    ./client/components/App.jsx
*/
//import react
import React from 'react';
import Contador from './Contador';
//export this componet to render in  index.js
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Contador />
      </div>
    );
  }
}
