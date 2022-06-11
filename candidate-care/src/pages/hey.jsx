


/* Greetings */

/* 
if(date<12) {
    const date = new Date().getHours()
      document.getElementById('greeting').innerHTML = 'Good Morning'
    }
    else {
      document.getElementById('greeting').innerHTML = 'Good Evening'
    }
*/




function Hey() {

    return <div>

            <div className='flex justify-center'>
            <div className='flex md:mb-20 mb-8 mt-14'>


            
              <h1 className="text-lg md:text-2xl font-sans">Hey <span className=" text-gray-700">Candidate,</span> <span id="greeting" className="font-bold">greeting. </span></h1>
            </div>

          </div>

    </div>
  }


  



  export default Hey