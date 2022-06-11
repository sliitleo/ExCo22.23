import './App.css';
import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import Hey from './pages/hey';
import Name from './pages/name';
import Ready from './pages/ready';
import Wait from './pages/wait';




function App() {
  return (
    <div className="App">
    
      <Header />
    
      <div className="flex items-center justify-center">
        <div className="">
          <div>
            <Hey />
            <div className="scale-90 md:scale-100">
              <div className='flex justify-center'>
                <div className='grid lg:grid-cols-2 gap-10 max-w-5xl items-center overflow-y-hidden  overflow-x-hidden'>
                  <Name />

                  <div className=''>
                    <Ready />  
                  </div>

                  <div className='hidden'>
                    <Wait />
                  </div>

                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>       
      </div>
    </div>
  );
}

export default App;
