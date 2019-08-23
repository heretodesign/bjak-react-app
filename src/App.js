import React, { Suspense, lazy } from 'react';
import './App.scss';
import axios from 'axios'
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.js'
import Landing from './components/content/Landing.js'
import NoticeNav from './components/content/NoticeNav.js'

const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <NoticeNav />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ListPage} />
          <Route path="/pages/viewpage/:id" component={ViewPage} />
          <Route path="/pages/detailpage/" component={DetailPage} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
