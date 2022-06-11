


function Wait() {
    return <div>
    <div className="flex items-center justify-center font-sans">
                        <div className="text-center">

                            <div className="flex items-center space-x-2">
                            <h1 className="text-3xl">Please Wait</h1>
                            <svg className='w-6 md:w-8' version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                            width="40px" height="40px" viewBox="0 0 50 50" >
                                <path  d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="1s"
                                repeatCount="indefinite"/>
                                </path>
                            </svg>
                           
                            </div>

                           

                            <h1 className="text-base mt-2 "> <span className="animate-pulse">An interview is in progress.</span>  <br /> <span className="font-bold">Please be patient</span> until your turn</h1>

                            <div className="animate-spin text-2xl">
                                <i className="uil uil-spinner"></i>
                            </div>



                            <div className="space-x-2 mt-5">
                                <button className="bg-blue-600 rounded-3xl px-5 py-2 text-white hover:bg-blue-700 duration-300" data-aos="zoom-in">
                                    Stay Tuned
                                </button>

                                <button className="bg-white text-blue-600 font bold rounded-3xl px-5 py-1.5  shadow-md border-2 border-blue-700  duration-300 hover:translate-x-3">
                                    Help <i className="uil uil-comment-question font-bold group-hover:translate-x-3"></i>
                                </button>
                            </div>
                        </div>
                </div> 

    </div>
  }

  export default Wait