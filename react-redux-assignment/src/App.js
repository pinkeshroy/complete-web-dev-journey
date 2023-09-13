import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { FormComp } from './formComp';
import { NotesConatiner } from './notesContainer';
import reduxStore from './store';
import { Provider } from 'react-redux';
// import { NodeApiCAll } from './nodeApiCall';
function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
        <FormComp />
        <NotesConatiner />
      </Provider>
    </div>
  );
}

export default App;

// <Provider store={reduxStore}>
//   <FormComp />
//   <NotesConatiner />
// </Provider>