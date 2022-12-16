import React, {useState}from 'react'
import './App.css';
import Background from './components/Background/Background';
import Result from './components/Result/Result';
import Search from './components/Search/Search';

function App() {
const [weatherApp,setWeatherApp]=useState({});
  

  return (
    <section className="app">
          <Background background={weatherApp.weather && weatherApp.weather[0].main} />
        <div id="header">Hava Durumu</div>
          <Search setWeatherApp={setWeatherApp} />
          <Result air={weatherApp} />
          
    </section>
  );
}

export default App;
