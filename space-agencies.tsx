"use client";

import { useState } from "react";
import { Pane } from "./components/ui/pane";

import Image from "next/image";

interface Agency {
  id: string;
  name: string;
  title: string;
  bgColor: string;
  textColor: string;
  accordionClass: string;
}

const agencies: Agency[] = [
  {
    id: "nasa",
    name: "004",
    title: "DepMap and Patient Impact",
    bgColor: "bg-[#CFD7E9]",
    textColor: "text-[#42518C]",
    accordionClass: "accordion-04",
  },
  {
    id: "esa",
    name: "003",
    title: "Eye of the Needle",
    bgColor: "bg-[#DE6079]",
    textColor: "text-white",
    accordionClass: "accordion-03",
  },
  {
    id: "roscosmos",
    name: "002",
    title: "A New Perspective on a Decades-old Mystery",
    bgColor: "bg-[#6381BE]",
    textColor: "text-white",
    accordionClass: "accordion-02",
  },
  {
    id: "intro",
    name: "001 ",
    title: "Introduction: Scale",
    bgColor: "bg-[#292D74]",
    textColor: "text-white",
    accordionClass: "accordion-01",
  },
  {
    id: "jaxa",
    name: "000",
    title: "Broad Institute Year in Review 2024",
    bgColor: "bg-white",
    textColor: "text-black",
    accordionClass: "accordion-00",
  },
];

export default function SpaceAgencies() {
  const [activeAgencyIndex, setActiveAgencyIndex] = useState(4);

  const handleScrollToBottom = () => {
    if (activeAgencyIndex > 0) {
      setActiveAgencyIndex(activeAgencyIndex - 1);
    }
  };

  return (
    <div className="font-['neue-haas-grotesk-display'] flex flex-col md:flex-row">
      <div
        className=" w-full h-screen absolute overflow-hidden 
"
      >
        {agencies.map((agency, index) => (
          <Pane
            index={index}
            key={agency.id}
            accordionClass={agency.accordionClass}
            className={`${agency.bgColor} accordion `}
            isTransformed={index > activeAgencyIndex}
            isActive={activeAgencyIndex === index}
            onClick={() => setActiveAgencyIndex(index)}
            onScrollToBottom={handleScrollToBottom}
          >
            {agency.id === "jaxa" && (
              <div className="flex flex-col justify-between min-h-screen bg-white ">
                <div className="flex-1 justify-between ">
                  <div className="   ">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/differently-k6ixLwbbp6wKKpRCNDXHPDElbh5HDD.svg"
                      alt="Differently"
                      width={1920}
                      height={640}
                      className="w-[90%] object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="  leading-[3em] text-[#0033BB]">
                    <p className="text-xl leading-[1em] font-bold">
                      Broad Institute
                    </p>
                    <p className="text-xl  font-bold">Year in Review 2024</p>

                    <span className="font-bold">Scroll to read</span>
                  </div>
                </div>
              </div>
            )}

            {agency.id === "intro" && (
              <div className="min-h-screen md:mx-40   flex flex-col bg-[#292D74] ">
                <div className=" w-full  ">
                  {/* <Image
                    src="/key-art.png"
                    alt="Differently"
                    width={1920}
                    height={640}
                    className="w-full h-auto object-contain"
                    sizes="100vw"
                    priority
                  /> */}
                  <div
                    className="sticky top-0 flex flex-col justify-items-start
"
                  >
                    <p className={`text-sm ${agency.textColor}`}>
                      {agency.name}
                    </p>

                    <p className={`text-5xl ${agency.textColor} `}>
                      {agency.title}
                    </p>
                  </div>
                </div>
                <div
                  className="2xl:mr-80 font-martina text-white font-normal text-xl  leading-tight py-40
text-lgtext-white  "
                >
                  <p className="p-3">
                    Scale. In science, it’s a word that often connotes size, and
                    usually a massive size. And it’s often bandied about as
                    genomic and other technologies produce ever-growing reams of
                    data and cutting-edge computational approaches are trained
                    to interpret them. Sequencing centers are churning out
                    hundreds of thousands of genomes a day. Laboratories are now
                    able to profile millions of cells in an experiment. Machine
                    learning is scanning many millions of medical images to find
                    new patterns.
                  </p>

                  <p className="p-3">
                    But at the Broad Institute, scale means something different.
                    It’s more than just size—it’s about taking systematic,
                    unbiased approaches and going where the data leads you. It’s
                    about traversing reams of cellular data and uncovering a
                    lead that could someday help solve a medical mystery. It’s
                    about shifting through millions of proteins to build one
                    that could someday be a new gene-editing tool. Or taking
                    everything we know about the genetic changes cancer cells
                    undergo, figuring out which ones they need to survive, and
                    giving access to the research community so we can get to
                    clinical trials more quickly and more safely for patients.
                  </p>
                  <p className="p-3">
                    And it’s one of the many ways the Broad community continues
                    to forge its own distinct path to scientific breakthroughs
                    that may someday transform medicine. We invite you to join
                    us on this journey and learn more about our work here.
                  </p>
                </div>
              </div>
            )}

            {agency.id === "roscosmos" && (
              <div className="min-h-screen  md:mx-40 bg-[#6381BE] bg-text-lg leading-tight  flex flex-col ">
                <div className=" w-full h-auto">
                  {/* <Image
                    src="/key-art.png"
                    alt="Differently"
                    width={1920}
                    height={640}
                    className="w-full h-auto object-contain"
                    sizes="100vw"
                    priority
                  /> */}

                  <div
                    className="flex flex-col justify-items-start
"
                  >
                    <p className={`text-sm ${agency.textColor}`}>
                      {agency.name}
                    </p>

                    <p className={`text-5xl ${agency.textColor} `}>
                      {agency.title}
                    </p>
                  </div>
                </div>
                <div
                  className="2xl:mr-80 text-white  font-martina font-normal text-xl  leading-tight py-40
"
                >
                  <p className="p-3">
                    Thirty years ago, the cause of Huntington’s disease was
                    traced to a mutation in the HTT gene. Yet, the precise
                    mechanism by which this mutation causes brain cells to die
                    remained elusive. The prevailing thought was that the
                    mutation produces a toxic protein that gradually
                    accumulates, ultimately killing neurons. Research from the
                    McCarroll lab in the Stanley Center for Psychiatric Research
                    offers a new take—one that not only rewrites the basic
                    biology of the disease but also unlocks new therapeutic
                    possibilities.
                  </p>

                  <p className="p-3">
                    The true culprit may lie not in the protein itself but in
                    the gene’s behavior—specifically, the phenomenon of somatic
                    instability, a subtle genetic anomaly first observed in
                    animal models in the late 1990s. In Huntington’s patients, a
                    repeating DNA sequence—CAG—expands unpredictably as the
                    disease progresses, and it is this expansion, McCarroll and
                    his team believe, that drives the degeneration of the
                    brain’s motor centers. 
                  </p>
                  <p className="p-3">
                    Yet for much of the last three decades, the field has
                    largely overlooked this clue, fixated instead on the role of
                    the protein. But new technologies allow researchers to zoom
                    in and discover what is happening to affected brain cells.
                  </p>
                  <p className="p-3">
                    McCarroll and his team adapted a technology they previously
                    developed known as Drop-seq—which allows them to
                    individually profile many thousands of cells—to track the
                    precise length of these CAG repeats in individual cells,
                    providing a level of granularity previously unavailable. By
                    analyzing over half a million cells from healthy and
                    Huntington’s-affected brains, they discovered that striatal
                    projection neurons—the cells most affected by the
                    disease—were the only striatal cells to show a significant
                    expansion of these repeats. Once the expansion surpasses
                    around 150 repeats, these neurons begin to deteriorate,
                    setting in motion the hallmark symptoms of Huntington’s:
                    involuntary movements, cognitive decline, and loss of motor
                    function.
                  </p>
                  <p className="p-3">
                    The discovery, published in{" "}
                    <span className="font-italic"> Cell</span>, fundamentally
                    alters the way we think about Huntington’s disease. It also
                    explains why decades of drug development have failed to
                    materialize an effective treatment for the disease: they
                    were chasing the wrong target. A more promising therapeutic
                    strategy could involve slowing or halting the expansion of
                    the CAG repeats. Such an approach might delay the onset of
                    the disease or even arrest its progression, offering
                    long-awaited hope for thousands of patients.
                  </p>
                </div>
              </div>
            )}

            {agency.id === "esa" && (
              <div className="min-h-screen  lg:mx-40 text-lg leading-tight  flex flex-col bg-[#DE6079]">
                <div className="  h-auto ">
                  <div
                    className="flex flex-col justify-items-start
"
                  >
                    <p className={`text-sm ${agency.textColor}`}>
                      {agency.name}
                    </p>

                    <p className={`text-5xl ${agency.textColor} `}>
                      {agency.title}
                    </p>
                  </div>

                  {/* <Image
                    src="/key-art.png"
                    alt="Differently"
                    width={1920}
                    height={640}
                    className="w-full h-auto object-contain"
                    sizes="80vw"
                    priority
                  /> */}
                </div>

                <div
                  className="2xl:mr-80  text-white  font-martina font-normal text-xl  leading-tight font-normal leading-tight py-40
"
                >
                  <p className="p-3">
                    Scientists are developing novel gene- and cell-based
                    therapies for rare diseases, metabolic disorders,
                    cardiovascular conditions, cancers, and more. But these
                    therapies still face a major hurdle: they need to reach the
                    right disease-causing cells in the body.
                  </p>

                  <p className="p-3">
                    Current technologies can deliver gene therapies to some
                    tissues, such as the eye, blood, and liver, but not others,
                    especially crucial locations like the brain, heart, lung,
                    and kidney. As part of an ambitious initiative to build a
                    suite of modular tools that researchers can quickly—and
                    scalably—repurpose to design gene-editing therapies that
                    strike at the root causes of diseases, Broad researcher Feng
                    Zhang is tackling this bottleneck with a new delivery
                    vehicle that can ferry gene-editing tools to different cell
                    types.
                  </p>
                  <p className="p-3">
                    With the support of a group of philanthropists, he and his
                    team are doing this by plumbing nature’s secrets. In this
                    case, they have refashioned a natural feature of
                    Photorhabdus bacteria called eCIS—extracellular contractile
                    injection system—in which a tiny syringe-like tube injects
                    proteins into host cells. On one end of the eCIS are tail
                    fibers that recognize specific receptors on the cell surface
                    and latch on. Though eCISs naturally only target insect and
                    mouse cells, using AlphaFold—an AI program that predicts the
                    shape of proteins and has so far cataloged more than 200
                    million protein structures, the Zhang Lab reengineered the
                    tail fibers of an eCIS to bind to human cells—and tricked
                    the syringe into delivering a protein of the lab’s choosing.
                  </p>
                  <p className="p-3">
                    Thus far, the reengineered eCIS machines have shown their
                    versatility, delivering different types of proteins to human
                    cells. These include base editors, which can make
                    single-letter changes to DNA; proteins that are toxic to
                    cancer cells; and Cas9, a large DNA-cutting enzyme used in
                    CRISPR gene-editing systems. The team even deployed an eCIS
                    to deliver proteins into the brains of live mice. It’s a
                    major step forward for developing future gene therapies to
                    the brain, one of the most challenging parts of the body to
                    target.
                  </p>
                  <p className="p-3">
                    The promise is immense, and the team is working to realize
                    it by optimizing their eCIS systems while also exploring
                    other promising delivery approaches.
                  </p>
                </div>
              </div>
            )}

            {agency.id === "nasa" && (
              <div className="min-h-screen  md:mx-40 text-lg leading-tight bg-[#CFD7E9]">
                <div className="  h-auto ">
                  {/* <Image
                    src="/key-art.png"
                    alt="Differently"
                    width={1920}
                    height={640}
                    className=" h-auto object-contain"
                    sizes="80vw"
                    priority
                  /> */}
                </div>

                <div
                  className="flex flex-col justify-items-start
"
                >
                  <p className={`text-sm ${agency.textColor}`}>{agency.name}</p>

                  <p className={`text-5xl ${agency.textColor} `}>
                    {agency.title}
                  </p>
                </div>

                <div
                  className=" 2xl:mr-80 text-[#42518C] font-martina font-normal text-xl  leading-tight py-40
"
                >
                  <p className="p-3">
                    It’s often said that scientists have cured cancer many times
                    … in mice. Beneath the quip lay the belief that laboratory
                    models of cancer were all imperfect, and therefore,
                    scientists shouldn’t agonize over validating a therapeutic
                    hypothesis—they just needed to move quickly to get drugs to
                    cancer patients.
                  </p>

                  <p className="p-3">
                    But there’s a major glitch: most drugs fail in clinical
                    trials. Even amid breakthroughs in cancer treatments, up to
                    95 percent of experimental oncology drugs still never make
                    it to patients. That’s an astonishing waste of resources—and
                    it unnecessarily exposes cancer patients to sometimes
                    gruelling treatments.
                  </p>
                  <p className="p-3">
                    With the advent of genomic sequencing, scientists realized
                    that the central problem in finding effective new cancer
                    drugs wasn’t so much that models were imperfect, but that
                    cancer isn’t a single disease. Instead, it’s a collection of
                    molecularly distinct diseases. So taking a single cell
                    line—”immortalized” cells that grow in Petri dishes and are
                    the workhorse of cancer research—and applying it to a range
                    of cancers was a recipe for failure.
                  </p>
                  <p className="p-3">
                    Thus, Broad cancer researchers and their collaborators
                    (notably those at the Wellcome Sanger Institute in the UK)
                    reasoned they could use the latest genomic and other
                    advanced technologies to create a new resource that captured
                    the molecular diversity of actual human tumors. They also
                    reckoned they could pinpoint tumors’ weak spots—genetic
                    anomalies found only in cancer cells and necessary for their
                    survival, and thus, perfect drug targets. They began
                    collecting existing cell lines—and generated new
                    ones—profiled them genomically, and then systematically made
                    genetic tweaks (e.g., deleted or dialed down genes) to
                    identify molecular vulnerabilities, or dependencies. And
                    they also subjected the cell lines to thousands of drug
                    treatments to see whether any possible treatments already
                    existed.
                  </p>
                  <p className="p-3">
                    These collective efforts, many of which were catalyzed by
                    philanthropy, were dubbed the Cancer Dependency Map.
                    Officially launched in 2018, the DepMap, as it’s now called,
                    has profiled 2,000 cell lines (representing more than 34
                    cancers), conducted ~2 million genome-wide screens.
                  </p>
                  <p className="p-3">
                    And it’s become a hallmark Broad-led effort: one that not
                    only takes an unbiased, data-driven approach, but rallies
                    together researchers to parse through and ultimately, to
                    actively contribute data. Open to researchers, the DepMap
                    portal, which also includes analytical tools, boasts more
                    than 11,000 users a week from across the world. And it also
                    now includes 19 pharmaceutical companies, who make up the
                    DepMap Consortium, which supports the overall effort.
                  </p>
                  <p className="p-3">
                    Above all, it’s leading to a real impact on patients,
                    validating identified targets (a key step in persuading drug
                    companies to take them up) and uncovering new ones. So far,
                    seven clinical trials have emerged from the DepMap, with
                    many more expected in the coming years.
                  </p>
                </div>
              </div>
            )}
            <div
              className="sticky top-0 flex flex-col items-center justify-items-start
 h-full"
            >
              <p className={`text-sm ${agency.textColor} whitespace-nowrap`}>
                {agency.name}
              </p>

              <p
                className={`flex hidden md:block items-center md:text-2xl text-xl md:font-light font-medium ${agency.textColor} md:mt-4 text-right md:text-vertical md:text-left text-horizontal`}
              >
                {agency.title}
              </p>
            </div>
          </Pane>
        ))}
      </div>
    </div>
  );
}
