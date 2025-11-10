// import './App.css'
import { Component } from 'react'
import Logic from './components/Logic'
import Inprogress from './components/Inprogress'
import Backlog from './components/backlog'
import Done from './components/done'


class App extends Component {


  render() {
    return (
      <div style={{width:"100%",height:"auto",display:"flex",margin:"auto", gap:"2rem", justifyContent:"center"}}>
        <Backlog />
        <Inprogress />
        <Done />
      </div>
    )
  }
}


export default App