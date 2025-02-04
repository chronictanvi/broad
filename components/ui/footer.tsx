import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column - Image */}
        <div className="flex justify-center md:justify-start">
          <Image src="/logo.png" alt="Broad Institute Logo" width={150} height={50} />
        </div>

        {/* Second Column - Address & Design Info */}
        <div>
          <p className="font-semibold">BROAD INSTITUTE</p>
          <p>Merkin Building<br />5 Main St.<br />Cambridge, MA 02142</p>
          <br />
          <p className="font-semibold">DESIGN</p>
          <p>Pentagram<br />Team Giorgia Lupi</p>
        </div>

        {/* Third Column - Inspiration */}
        <div>
          <p className="font-semibold">INSPIRATION</p>
          <p>
            The design of this booklet was inspired by the structure of the
            microfluidic system used in Drop-Seq, a technology developed at the
            Broad that enables scientists to capture the gene expression of
            thousands of cells at the same time. This technology has paved the
            way for new insights into health and disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
