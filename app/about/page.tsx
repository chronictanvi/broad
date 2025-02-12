import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-black">
    <div className=" p-4 p-5 text-white">



      <div className="flex md:flex-row flex-col gap-4 justify-center" >


<div>
      {/* Back to Home Button */}
      <div className="w-full h-24 max-w-4xl">
        <a href="/" className=" font-neueHaas transition hover:underline">
          ← Back to Home
        </a>
      </div>

        <div className=" flex-grow h-auto relative ">
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

        <div className="text-white  ">

         <div className="flex flex-col md:flex-row items-stretch">

   {/* Site title mobile */}

   <div className=" 
 text-xl font-neueHaas font-medium text-white md:hidden block py-5
">
  <p>
   
About this site
    </p>
 </div>


          {/* Col 2*/}
          <div className=" md:mx-12 xl:mr-40">



  {/* Inspiration */}
  <div className="md:text-left">
 
            <h3 className="text-sm font-mono ">INSPIRATION</h3>
            <p className="font-martina prose text-white font-normal ">
              The design of this booklet was inspired by the structure of the microfluidic system used in Drop-Seq, 
              a technology developed at the Broad that enables scientists to capture the gene expression of thousands 
              of cells at the same time. This technology has paved the way for new insights into health and disease.
            </p>
          </div>



          <br></br>
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

        
    
          </div>

      {/* Site title */}

      <div className=" 
 md:text-2xl text-xl font-neueHaas font-medium text-white md:mt-4 text-right md:text-vertical md:text-left hidden md:block
">
  <p>
   
About this site
    </p>
 </div>
 </div>


<div>


  
</div>

        </div>
      </div>
    </div>
  </div>
  
  )
}

