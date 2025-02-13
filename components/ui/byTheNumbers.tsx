import React from "react";

const ByTheNumbers: React.FC = () => {
  return (
    <div className="not-prose font-neueHaas text-[#344899]">
      <div className="border-y-2 border-[#344899] py-6">
        <h2 className="not-prose text-center font-mono text-xl font-bold">
          BY THE NUMBERS
        </h2>
      </div>

      <div className="py-10">
        {[
          {
            number: "2018",
            text: "Catalyzed by philanthropy, DepMap was officially launched in 2018.",
          },
          {
            number: "2,000",
            text: "In the years since, the DepMap has profiled 2,000 cell lines",
          },
          { number: "34", text: "...representing more than 34 cancers" },
          {
            number: "2M",
            text: "...and conducted approximately 2 million genome-wide screens.",
          },
          {
            number: "11,000",
            text: "Today, DepMap’s online portal has more than 11,000 weekly global users",
          },
          {
            number: "19",
            text: "...and includes 19 pharmaceutical companies, who make up the DepMap Consortium",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center gap-2 p-5 px-2 md:flex-row md:justify-between md:gap-[6rem] md:px-0"
          >
            <div className="text-center md:w-1/2 md:text-right">
              <h1 className="not-prose font-neueHaas text-9xl tracking-[-.04em]">
                {item.number}
              </h1>
            </div>
            <div className="max-w-[20rem] text-center md:w-1/2 md:text-left">
              <p className="not-prose text-2xl font-medium leading-7">
                {item.text}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-12 flex w-full flex-col items-center gap-2 py-12 md:flex-row md:justify-between md:gap-[6rem]">
          <div className="text-center md:w-1/2 md:text-right"></div>
          <div className="max-w-[20rem] text-center md:w-1/2 md:text-left">
            <p className="text-2xl font-medium leading-7">
              DEPMAP IN ACTION: <span className="italic">WRN</span>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-2 py-5 md:flex-row md:justify-between md:gap-[6rem]">
          <div className="text-center md:w-1/2 md:text-right">
            <h1 className="font-outline-2 font-neueHaas text-[9rem] leading-[10rem] tracking-[-.04em] text-[#CED7E9]">
              51
            </h1>
          </div>
          <div className="max-w-[20rem] text-center md:w-1/2 md:text-left">
            <p className="text-2xl font-medium leading-7">
              Using DepMap and Project DRIVE datasets, Broad researchers and
              their collaborators identified 51 cell lines classified as having
              MSI.
              <sup>
                <a className="text-[#344899]" href="#fn1" id="ref1">
                  1
                </a>
              </sup>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-2 py-5 md:flex-row md:justify-between md:gap-[6rem]">
          <div className="not-prose text-center md:w-1/2 md:text-right">
            <h1 className="font-outline-2 font-neueHaas text-[9rem] leading-[10rem] tracking-[-.04em] text-[#CED7E9]">
              73
            </h1>
          </div>
          <div className="max-w-[20rem] text-center md:w-1/2 md:text-left">
            <p className="text-2xl font-medium leading-7">
              Of those cell lines, the teams found that 73% of them were
              dependent on <span className="italic">WRN</span>, a particular
              protein-encoding gene.
            </p>
          </div>
        </div>
        <hr className="mb-5 mt-40 border border-[#344899]"></hr>

        <sup id="fn1" className="text-center font-mono text-sm">
          1. [<span className="italic"> Microsatellite instability</span> (MSI)
          Causes runaway mutation when a DNA Repair system in a cell is broken.]
          <a
            className="text-[#344899]"
            href="#ref1"
            title="Jump back to footnote 1 in the text."
          >
            ↩
          </a>
        </sup>
      </div>
    </div>
  );
};

export default ByTheNumbers;
