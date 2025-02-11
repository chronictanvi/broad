import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">

      {/* Back to Home Button */}
      <div className="w-full max-w-4xl">
        <a href="/" className=" font-neueHaas transition hover:underline">
          ← Back to Home
        </a>
      </div>

      {/* Centered Content */}
      <div className="w-full max-w-4xl ">

        {/* Grid Container */}
        <div className="grid grid-cols-1 leading-5 py-10 md:grid-cols-3 gap-6">
          
          {/* Logo */}
          <div className="">
            <Image src="/logo.png" alt="Broad Institute Logo" width={200} height={58.75} />
          </div>

          {/* Address & Design */}
          <div className=" md:text-left font-martina">
            <div className='pb-6'>
              <h3 className="text-sm font-mono ">BROAD INSTITUTE</h3>
              <address className=" font-normal not-italic
 font-martina ">
                Merkin Building<br />
                5 Main St.<br />
                Cambridge, MA 02142
              </address>
            </div>
            
            <h3 className="text-sm font-mono ">DESIGN</h3>
           <a href='https://www.pentagram.com/'> <p className="font-martina font-normal ">
              Pentagram<br />
              Team Giorgia Lupi
            </p></a>
          </div>

          {/* Inspiration */}
          <div className="md:text-left">
            <h3 className="text-sm font-mono ">INSPIRATION</h3>
            <p className="font-martina font-normal ">
              The design of this booklet was inspired by the structure of the microfluidic system used in Drop-Seq, 
              a technology developed at the Broad that enables scientists to capture the gene expression of thousands 
              of cells at the same time. This technology has paved the way for new insights into health and disease.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
