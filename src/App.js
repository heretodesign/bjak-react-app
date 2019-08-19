import React from 'react';
import './App.scss';
import axios from 'axios'
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.js'
import Landing from './components/content/Landing.js'
import NoticeNav from './components/content/NoticeNav.js'
import DetailPage from './pages/DetailPage.js'
import ListPage from './pages/ListPage.js'
import ViewPage from './pages/ViewPage.js'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <NoticeNav />
        <Route exact path="/" component={ListPage} />
        <Route path="/pages/viewpage/:id" component={ViewPage} />
        <Route path="/pages/detailpage/" component={DetailPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
