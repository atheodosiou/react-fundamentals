import React from 'react';
import './App.css';
// import textView from './assets/views/textView/textView';
import ClickCounter from './assets/components/ClickCounter/ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* View */}
        {/* {textView('TextView')} */}
        {/* Component */}
        <ClickCounter/>
      </header>
    </div>
  );
}

export default App;
