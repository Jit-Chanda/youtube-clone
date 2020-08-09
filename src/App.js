import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import SideBar from './components/Sidebar/sidebar.component';
import RecomendedVideo from './components/RecomendedVideo/recomendedVideo.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './components/searchPage/searchPage.components';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>

          <Route path='/search/:searchTerm'>
            <div className="app_page">
                <SideBar />
                <SearchPage />
            </div>
          </Route>

          <Route path='/'>
             <div className="app_page">
                <SideBar />
                <RecomendedVideo />
              </div>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
