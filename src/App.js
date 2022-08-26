import logo from './logo.svg';
import './App.css';
import ShoppingCard from './shoping-card'

const listProductions = [
  {
    name: 'computer'
  }, 
  {
    name: 'monitor'
  },
  {
    name: 'motorbike'
  }
]
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div> 
      {
        listProductions.map((production) => {
          return <ShoppingCard name={production.name} key={production.name}/>
        })
      }
    </div>
  );
}

export default App;
