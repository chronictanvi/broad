import React from 'react';

const ByTheNumbers: React.FC = () => {
    return (
        <div className="font-neueHaas text-[#344899]">
            <div className="border-y-2 border-[#344899] py-6">
                <h2 className="font-mono text-xl text-center font-bold py-2">BY THE NUMBERS</h2>
            </div>

            <div className="py-10">
                {[
                    { number: '2018', text: 'Catalyzed by philanthropy, DepMap was officially launched in 2018.' },
                    { number: '2,000', text: 'In the years since, the DepMap has profiled 2,000 cell lines' },
                    { number: '34', text: '...representing more than 34 cancers' },
                    { number: '2M', text: '...and conducted approximately 2 million genome-wide screens.' },
                    { number: '11,000', text: 'Today, DepMap’s online portal has more than 11,000 weekly global users' },
                    { number: '19', text: '...and includes 19 pharmaceutical companies, who make up the DepMap Consortium' },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-2 px-2 md:px-0 md:gap-[6rem] p-5 md:justify-between w-full">
                        <div className="text-center md:text-right md:w-1/2 ">
                            <h1 className="text-9xl font-neueHaas tracking-[-.04em]">{item.number}</h1>
                        </div>
                        <div className="text-center md:text-left md:w-1/2 max-w-[20rem]">
                            <p className="text-2xl font-semibold leading-7">{item.text}</p>
                        </div>
                    </div>
                    
                ))}


<div  className="flex flex-col mt-12 md:flex-row items-center gap-2 md:gap-[6rem]   py-12 p-5 md:justify-between w-full">


<div className="text-center md:text-right md:w-1/2 ">

       </div>
       <div className="text-center md:text-left md:w-1/2 max-w-[20rem]">
           <p className="text-2xl font-semibold leading-7">DEPMAP IN ACTION: <span className='italic'>WRN</span></p>
       </div>




</div>




                 <div  className="flex flex-col md:flex-row items-center gap-2 md:gap-[6rem]  py-5 px-5 md:justify-between w-full">


                 <div className="text-center md:text-right md:w-1/2 ">
             
                            <h1 className="text-[9rem] font-outline-2 text-[#CED7E9] font-neueHaas tracking-[-.04em]">51</h1>
                        </div>
                        <div className="text-center md:text-left md:w-1/2 max-w-[20rem]">
                            <p className="text-2xl font-semibold leading-7">Using DepMap and Project DRIVE datasets, Broad researchers and their collaborators identified 51 cell lines classified as having MSI.<sup><a href="#fn1" id="ref1">1</a></sup></p>
                        </div>




                 </div>

                 <div  className="flex flex-col md:flex-row items-center gap-2 md:gap-[6rem]   py-5 px-5 md:justify-between w-full">


<div className="text-center md:text-right md:w-1/2 ">
<h1 className="text-[9rem] font-outline-2 text-[#CED7E9] font-neueHaas tracking-[-.04em]">73</h1>
       </div>
       <div className="text-center md:text-left md:w-1/2 max-w-[20rem]">
           <p className="text-2xl font-semibold leading-7">Of those cell lines, the teams found that 73% of them were dependent on <span className='italic'>WRN</span>, a particular protein-encoding gene.</p>
       </div>





</div>
<hr className='border border-[#344899] my-5'></hr>

<sup id="fn1" className='font-martina text-center'>1. [<span className='italic'> Microsatellite instability</span> (MSI)  
   Causes runaway mutation when a DNA 
   Repair system in a cell is broken.]<a href="#ref1" title="Jump back to footnote 1 in the text."> ↩</a></sup>


            </div>
        </div>
    );
};

export default ByTheNumbers;
