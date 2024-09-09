import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { AccessTimeFilled } from "@fluentui/react-icons";
import { Close } from 'feather-icons-react';

function App() {
  const notify = () => toast('Here is your toast.');

  return (
    <div className="App">
      <header className='App-header'>
        <p className='text-red500'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={notify}>Make me a toast</button>
      <Toaster/>
      <AccessTimeFilled/>
      <Close />;
      
    </div>
  );
}

export default App;
