import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="p-5 text-white">
        {/* Back to Home Button */}
        <div className="h-12 w-full max-w-4xl md:h-24">
          <a href="/" className="font-neueHaas transition hover:underline">
            ← &nbsp; Back to Home
          </a>
        </div>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:pr-16">
          <div className="hidden basis-2/3 lg:block">
            <div className="relative -ml-6 h-auto flex-grow">
              <Image
                src="FooterCurve.svg"
                alt="Background image"
                width={1920}
                height={1080}
                objectFit="fill"
                className="hidden lg:block"
              />
            </div>
          </div>

          <div className="text-white">
            <div className="flex flex-col items-stretch md:flex-row">
              {/* Site title mobile */}

              <div className="block py-5 font-neueHaas text-xl font-semibold text-white md:hidden">
                <p>About this site</p>
              </div>

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
      </div>
      {/* Site title */}

      <div className="md:text-vertical absolute right-0 top-0 hidden px-4 py-6 text-right font-neueHaas text-xl font-semibold text-white md:block md:text-left md:text-2xl">
        <p>About this site</p>
      </div>
    </div>
  );
}
