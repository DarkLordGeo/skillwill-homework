import { useEffect } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useWindowSize } from './hooks/useWindowSize';
function App() {

  const [mode, setMode] = useLocalStorage('theme-dark', true)
  const [windowSize, setWindowSize] = useWindowSize(false)

  useEffect(() => {
    if (windowSize) {
      setMode(false)
    }
  }, [windowSize])

  return (
    <div className="App">
      {mode ?
        <h1>darkmode</h1>
        : <h1>lightmode</h1>}
      {
        windowSize ?
          <h1>
            Mobile
          </h1>
          :
          <div>
            <h1>
              Desktop
            </h1>
            <button onClick={() => setMode((prevState) => !prevState)}>toggle theme</button>
          </div>
      }
      <br />
      <br />
      <br />
      <br />
      <div style={mode ? { background: "black", color: "white" } : {}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto veritatis ducimus dolorem nostrum cupiditate amet pariatur atque, tempore minima optio corporis ut soluta eos nihil! Quidem, assumenda! Commodi, cum.</p>
      </div>

    </div >
  );
}

export default App;
