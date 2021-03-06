import React, { useEffect } from 'react';
import './App.css';
//import data from './data/data';
//import Home from './pages/Home';
import Menu from './components/UnAuthenticated/menu/Menu';
import Footer from './components/footer/Footer';
//import Loader from './components/loader/Loader';
import Routes from './routes/Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const customHistory = createBrowserHistory({ basename: '/' });

function App() {

  const [siteInfo, setSiteInfo] = React.useState({});

  useEffect(() => {

    let init = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://quizzertech.com/system/wp-json', init)
      .then(response => response.json())
      .then(data => {
        setSiteInfo({ title: data.name, description: data.description })
      })
  }, []);

  return (
    <div className="App">
      <Router history={customHistory}>
        <div><Menu></Menu></div>
        <div className="login-status">=D</div>
        <header className="App-header">
          <h1>{siteInfo.title ? siteInfo.title : ''}</h1>
          <span>{siteInfo.description ? siteInfo.description : ''}</span>
        </header>
        <section className="container">
          <Routes />
        </section>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
