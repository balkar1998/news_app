import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {progress: 0}

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={4}
          />
         <Routes>
            <Route exact path='/' element={<News progress={this.setProgress} key='general' category={'general'} />} />
            <Route exact path='/Business' element={<News progress={this.setProgress} key='business' category={'business'} />} />
            <Route exact path='/Entertainment' element={<News progress={this.setProgress} key='entertainment' category={'entertainment'} />} />
            <Route exact path='/Health' element={<News progress={this.setProgress} key='health' category={'health'} />} />
            <Route exact path='/Science' element={<News progress={this.setProgress} key='science' category={'science'} />} />
            <Route exact path='/Sports' element={<News progress={this.setProgress} key='sports' category={'sports'} />} />
            <Route exact path='/Technology' element={<News progress={this.setProgress} key='technology' category={'technology'} />} />
          </Routes>
        </Router>
      </>
    )
  }
}