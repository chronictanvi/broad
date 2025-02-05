import React from 'react';



const ByTheNumbers: React.FC = () => {
    return (
       <div className="font-sans text-[#344899] ">



    <div className=" border-y-4 border-indigo-400 py-6">
    <h2 className="font-mono text-2xl text-center font-bold py-6">BY THE NUMBERS</h2>
    </div>

    <div className="pt-10">
      <div className='flex flex-col md:flex-row gap-24 items-center py-5'>
        <div>
      <h1 className='text-9xl font-neueHaas tracking-[-.04em]'>2018</h1>
      </div>
      <div>
        <p className='text-2xl font-semibold leading-7'> Catalyzed by philanthropy, <br></br> DepMap was officially <br></br>launched in 2018.</p>
      </div>
      </div>

    <div className='flex flex-col md:flex-row gap-24 items-center py-5'>
        <div>
      <h1 className='text-9xl font-neueHaas tracking-[-.04em]'>2018</h1>
      </div>
      <div><p className='text-2xl font-semibold leading-7'> Catalyzed by philanthropy, <br></br> DepMap was officially <br></br>launched in 2018.</p>
      </div>
  
    </div>
    </div>
    </div>
    );
};

export default ByTheNumbers;

