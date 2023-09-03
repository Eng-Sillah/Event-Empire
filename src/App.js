import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './components/Sections/Home/Home';
import Events from './components/Sections/Events/Events';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">

      {/* Home Section Start */}
      <section className='home-section'>
          <div className='header'>
             <Navbar />
          </div>
      </section>
      {/* Home Section End! */}


    {/* Home Section Start  */}
      <section className='home-section'>
        <div className='home'>
          <Home />
        </div>
      </section>

    {/* Home Section End  */}


    {/* Events Section Start  */}
      <section className='events-section'>
        <div className='event'>
          <Events />
        </div>
      </section>

    {/* Events Section End  */}

    <section className='footer-section'>
      <div className='footer'>
        <Footer />
      </div>
    </section>
      

    </div>
  );
}

export default App;
