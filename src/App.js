import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NewsComponents from "./Components/NewsComponents";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state={
    progress:0,
  }
  pro=(progress)=>{
    this.setState({progress:progress,})
  }
  render() {
    document.body.style.backgroundColor = "#f5f7f8";
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsComponents cat="general" key="general" setState={this.pro}/>} />
            <Route exact path="/business" element={<NewsComponents cat="business" key="business" setState={this.pro}/>} />
            <Route exact path="/entertainment" element={<NewsComponents cat="entertainment" key="entertainment" setState={this.pro}/>} />
            <Route exact path="/technology" element={<NewsComponents cat="technology" key="technology" setState={this.pro}/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
