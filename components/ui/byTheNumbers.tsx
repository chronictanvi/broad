import React from 'react';

const ByTheNumbers: React.FC = () => {
    return (
        <div className="font-sans text-[#344899]">
            <div className="border-y-4 border-indigo-400 py-6">
                <h2 className="font-mono text-2xl text-center font-bold py-6">BY THE NUMBERS</h2>
            </div>

            <div className="pt-10">
                {[
                    { number: '2018', text: 'Catalyzed by philanthropy, DepMap was officially launched in 2018.' },
                    { number: '2,000', text: 'In the years since, the DepMap has profiled 2,000 cell lines' },
                    { number: '34', text: '...representing more than 34 cancers' },
                    { number: '2M', text: '...and conducted approximately 2 million genome-wide screens.' },
                    { number: '11,000', text: 'Today, DepMap’s online portal has more than 11,000 weekly global users' },
                    { number: '19', text: '...and includes 19 pharmaceutical companies, who make up the DepMap Consortium' },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-[6rem] p-5 md:justify-between w-full">
                        <div className="text-center md:text-right md:w-1/2 ">
                            <h1 className="text-9xl font-neueHaas tracking-[-.04em]">{item.number}</h1>
                        </div>
                        <div className="text-center md:text-left md:w-1/2 max-w-[20rem]">
                            <p className="text-2xl font-semibold leading-7">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ByTheNumbers;
