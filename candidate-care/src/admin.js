import './App.css';
import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';


function Admin() {
  return (
    <div className="">
      <div className="">   


<div className='flex h-[85vh] items-center justify-center'>

    <div>
        
    <div className="text-center">

        {/* Header Comp - Center*/}
        <div className='flex text-left justify-center my-10'>
            <Header />
        </div>


      <div className='bg-gray-100 shadow-inner rounded-xl p-5'>

      <form>

          <div className='space-y-3 md:space-x-5 text-left'>
            <input name='name' placeholder='Next Candidate' type={'text'} className='px-5 py-3 w-full md:w-72 rounded-2xl outline-none shadow-md' ></input>
            <input name='name' placeholder='Reference Number' type={'text'} className='px-5 py-3  md:w-62 rounded-2xl outline-none shadow-md' ></input>
    <br className='md:hidden' />
            <button className='bg-blue-600 rounded-xl px-4 py-1.5 text-white hover:bg-blue-700 duration-300 ' type='submit'>
              update
            </button>
            
            
          </div>

         
         
        
      </form>


      <div className=''>
        
        

        <br />

        <div className='relative  space-x-3 mb-5 bg-white w-72 rounded-xl pt-5 pb-5 shadow-lg ml-auto mr-auto'>
          <h1 className='absolute inset-x-0 -top-2 w-48 ml-auto mr-auto rounded-2xl text-xs pt-1  font-sans  bg-white '>
            Candidate Status
          </h1>


          <button className='bg-blue-600  font-sans rounded-xl px-4 py-0.5 text-white hover:bg-blue-700 duration-300 ' type='submit'>
            Join Now
          </button>

          <button className='bg-yellow-500  font-sans rounded-xl px-4 py-0.5 text-white hover:bg-blue-700 duration-300 ' type='submit'>
            Wait Mode
          </button>


        </div>



        

       
   
      </div>
      </div>

      <div>
        <div className='mt-5 bg-gray-200 pt-5 pb-0.5 rounded-3xl'>
          
        <div className='relative  space-x-3 mb-5 bg-white w-72 rounded-xl pt-5 pb-5 shadow-lg ml-auto mr-auto'>
          <h1 className='absolute inset-x-0 -top-2 w-48 ml-auto mr-auto rounded-2xl text-xs pt-1  font-sans  bg-white '>
            Meeting Status
          </h1>



          <button className='bg-green-600  font-sans rounded-xl px-4 py-0.5 text-white hover:bg-blue-700 duration-300 ' type='submit'>
            Start
          </button>

          <button className='bg-red-500  font-sans rounded-xl px-4 py-0.5 text-white hover:bg-blue-700 duration-300 ' type='submit'>
           End
          </button>



        </div>
        </div>
      </div>
          
    </div>
    <br />
    <Footer />

    </div>


</div>



</div>
  
    
    </div>
  );
}

export default Admin;
