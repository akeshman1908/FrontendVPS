import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <main>
        <section>
          <h1>Welkom bij PortfolioTracker!</h1>
          <p>Begin met het volgen van je portfolio en assets in realtime.</p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#000',
            }}
            onClick={() => window.location.href = '/portfolio'}
          >
            Bekijk mijn portfolio
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
