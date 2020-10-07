import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Footer from './components/Footer'
import resumeData from './components/resumeData'

console.log("what", {resumeData})

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      resumeData
    }

    console.log('da state', {s: this.state})
  }

  // componentDidMount() {
  //   this.setState = {
  //     resumeData
  //   }
  // }

  render() {
    console.log("what2", {ha: this.state})
    return (
      <div className="App">
        <Home data={this.state.resumeData} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
