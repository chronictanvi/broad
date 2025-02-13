import Image from "next/image";

type PropTypes = {
  open: boolean;
  close: () => void;
};

export default function About({ open, close }: PropTypes) {
  return (
    <div
      className={`fixed bottom-0 z-[100] ${open ? "visible left-0" : "invisible left-full"} top-0 w-screen transition-[visibility,left] duration-800`}
    >
      <div className="relative flex h-full w-full flex-col justify-between overflow-y-auto bg-black px-5 pb-5 pt-10 text-white">
        <div className="flex flex-col justify-center gap-4 pr-16 lg:flex-row">
          <div className="hidden basis-2/3 lg:block">
            <div className="relative -ml-6 h-auto flex-grow">
              <a href="https://www.broadinstitute.org/" target="_blank">
                <Image
                  src="FooterCurve.svg"
                  alt=""
                  width={1920}
                  height={1080}
                  objectFit="fill"
                />
              </a>
            </div>
          </div>

          <div className="mb-5 md:mx-12 lg:hidden">
            <div className="relative -ml-2 h-auto max-w-[350px] flex-grow">
              <a href="https://www.broadinstitute.org/" target="_blank">
                <Image
                  src="logo.png"
                  alt=""
                  width={1920}
                  height={1080}
                  objectFit="fill"
                />
              </a>
            </div>
          </div>

          <div className="basis-1/3 text-white">
            <div className="flex flex-col items-stretch md:flex-row">
              {/* Site title mobile */}

              {/* Col 2*/}
              <div className="md:mx-12 xl:mr-40">
                <div className="flex flex-col gap-6 md:text-left">
                  {/* Inspiration */}
                  <div>
                    <h3 className="mb-2 font-mono text-sm font-bold">
                      INSPIRATION
                    </h3>
                    <p className="prose font-martina text-base font-normal leading-tight text-white">
                      The design of this booklet was inspired by the structure
                      of the microfluidic system used in Drop-Seq, a technology
                      developed at the Broad that enables scientists to capture
                      the gene expression of thousands of cells at the same
                      time. This technology has paved the way for new insights
                      into health and disease.
                    </p>
                  </div>

                  {/* Design */}
                  <div>
                    <h3 className="mb-2 font-mono text-sm font-semibold">
                      DESIGN
                    </h3>
                    <a href="https://www.pentagram.com/">
                      {" "}
                      <p className="font-martina text-base font-normal leading-tight">
                        Pentagram
                        <br />
                        Team Giorgia Lupi
                      </p>
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="mb-2 font-mono text-sm font-semibold">
                      BROAD INSTITUTE
                    </h3>
                    <address className="font-martina text-base font-normal not-italic leading-tight">
                      Merkin Building
                      <br />
                      5 Main St.
                      <br />
                      Cambridge, MA 02142
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Site title */}
        <div className="text-vertical absolute right-0 top-0 block px-4 py-10 text-left text-right font-neueHaas text-2xl font-semibold text-white">
          <p>About this site</p>
        </div>

        {/* Back to Home Button */}
        <div className="pt-10">
          <button
            onClick={close}
            className="font-neueHaas text-2xl font-semibold text-white underline-offset-4 transition hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
