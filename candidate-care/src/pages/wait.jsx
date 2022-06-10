function Wait() {
    return <div>
    <div className="flex items-center justify-center">
                        <div className="text-center">

                            <h1 className="text-3xl">Please Wait...</h1>

                            <h1 className="text-base mt-2 "> An interview is in progress. <br /> <span className="font-bold">Please be patient</span> until your turn</h1>

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