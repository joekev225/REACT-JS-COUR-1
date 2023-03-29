// import Component from './composants/Component';
// import logo from './logo.svg';
// import './App.css';
// import ClassComponent from './composants/ClassComponent'
import Profile from './composants/Profile'

function App() {
  let name= 'Ouraga kevin'
  let bio ='je suis passionnée d\'informatique'
  let profession='ingenieurie'
  return (
    <div className="App">
       <Profile fullName={name} bio={bio} profession={profession}>image</Profile>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header> */}
    </div>
  );
}

export default App;
