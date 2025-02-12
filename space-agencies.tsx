"use client";

import { useState, useEffect } from "react";
import { Pane } from "./components/ui/pane";
import Popup from "./components/ui/popup";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ByTheNumbers from "./components/ui/byTheNumbers";

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
    name: "003",
    title: "DepMap and Patient Impact",
    bgColor: "bg-[#CFD7E9]",
    textColor: "text-[#344899]",
    accordionClass: "accordion-04",
  },
  {
    id: "esa",
    name: "002",
    title: "Eye of the Needle",
    bgColor: "bg-[#DA2F62]",
    textColor: "text-white",
    accordionClass: "accordion-03",
  },
  {
    id: "roscosmos",
    name: "001",
    title: "A New Perspective on a Decades-old Mystery",
    bgColor: "bg-[#4773CD]",
    textColor: "text-white",
    accordionClass: "accordion-02",
  },
  {
    id: "intro",
    name: " ",
    title: "Introduction: Scale",
    bgColor: "bg-[#292D74]",
    textColor: "text-white",
    accordionClass: "accordion-01",
  },
  {
    id: "jaxa",
    name: "",
    title: "",
    bgColor: "bg-white",
    textColor: "text-[#344899]",
    accordionClass: "accordion-00",
  },
];

export default function SpaceAgencies() {
  const [activeAgencyIndex, setActiveAgencyIndex] = useState(4);
  const [showPopup, setShowPopup] = useState(true); // State for showing the popup
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToTop = () => {
    if (activeAgencyIndex < agencies.length - 1) {
      setActiveAgencyIndex(activeAgencyIndex + 1);
    }
  };

  const handleScrollToBottom = () => {
    if (activeAgencyIndex > 0) {
      setActiveAgencyIndex(activeAgencyIndex - 1);
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup when the button is clicked
  };

  const renderAgencyContent = (agency: Agency) => {
    switch (agency.id) {
      case "jaxa":
        return (
          <div className="max-h-screen mx-2 md:mx-10 grow pt-6 flex flex-col bg-white  ">
            <div className="flex-1 ">
              <div className="  mb-4">
                <Image
                  src="/differently.svg"
                  alt="Broad Does Things Differently"
                  width={1920}
                  height={640}
                  className="object-cover hidden md:block"
                  sizes="100vw"
                  priority
                />
                <Image
                  src="/differently-mobile.svg"
                  alt="Broad Does Things Differently"
                  width={1920}
                  height={640}
                  className="object-cover md:hidden block"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="font-neueHaas mx-1 text-[#344899]">
                <div className="leading-[2em] ">
                  <h2 className="text-xl  font-semibold">Broad Institute</h2>
                  {/* <h3 className="text-xl font-medium">Year in Review 2024</h3> */}
                  <div className="flex flex-col md:flex-row justify-between  text-[#344899]">
                    <div className="font-semibold hidden md:block">
                      Scroll to read
                    </div>

                    <Link href="/about">
                      {" "}
                      <div className="font-semibold md:py-0 py-2 hover:underline">
                        {" "}
                        About this site{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "intro":
        return (
          <div className="min-h-screen mx-2 lg:mx-40  pt-6 flex flex-col bg-[#292D74] ">
         <div className=" w-full h-auto mb-12">
              <Image
                src="/story-0.svg"
                alt="Scale"
                width={1920}
                height={640}
                className="object-cover hidden md:block"
                sizes="100vw"
                priority
              />

              <Image
                src="/story-0-mobile.svg"
                alt="Scale"
                width={1920}
                height={640}
                className="object-cover md:hidden block"
                sizes="100vw"
                priority
              />
            </div>

            <div className="">
              <article
                role="main"
                className="prose justify-center text-white   lg:mx-40   mx-2 font-martina font-normal text-xl pb-32  leading-6 
"
              >
          
              <p className="py-3">
                Scale. In science, it’s a word that often connotes size, and
                usually a massive size. And it’s often bandied about as genomic
                and other technologies produce ever-growing reams of data and
                cutting-edge computational approaches are trained to interpret
                them. Sequencing centers are churning out hundreds of thousands
                of genomes a day. Laboratories are now able to profile millions
                of cells in an experiment. Machine learning is scanning many
                millions of medical images to find new patterns.
              </p>

              <div className=" font-sans font-medium border rounded-full border-4 p-5">
                But at the Broad Institute, scale means something different.
              </div>

              <p className="py-3">
                It’s more than just size—it’s about taking systematic, unbiased
                approaches and going where the data leads you. It’s about
                traversing reams of cellular data and uncovering a lead that
                could someday help solve a medical mystery. It’s about sifting
                through millions of proteins to build one that could someday be
                a new gene-editing tool. Or taking everything we know about the
                genetic changes cancer cells undergo, figuring out which ones
                they need to survive, and giving access to the research
                community so we can get to clinical trials more quickly and more
                safely for patients.
              </p>
              <p className="py-3">
                And it’s one of the many ways the Broad community continues to
                forge its own distinct path to scientific breakthroughs that may
                someday transform medicine. We invite you to join us on this
                journey and learn more about our work here.
              </p>
            </article>
          </div>
          </div>
        );
      case "roscosmos":
        return (
          <div className="min-h-screen items-center mx-2 lg:mx-40 bg-[#4773CD] leading-tight  flex flex-col ">
            <div className=" w-full h-auto mb-12">
              <Image
                src="/story-1.svg"
                alt="A New Perspective on a Decades-old Mystery"
                width={1920}
                height={640}
                className="object-cover hidden md:block"
                sizes="100vw"
                priority
              />

              <Image
                src="/story-1-mobile.svg"
                alt="A New Perspective on a Decades-old Mystery"
                width={1920}
                height={640}
                className="object-cover md:hidden block"
                sizes="100vw"
                priority
              />
            </div>

            <div className="">
              <article
                role="main"
                className="prose justify-center text-white   lg:mx-40   mx-2 font-martina font-normal text-xl pb-32  leading-6 
"
              >
                <h2 className="py-5 text-[#D3BBDB] text-2xl font-neueHaas font-medium">
                  Broad scientists have unlocked new therapeutic possibilities
                  for Huntington’s disease.
                </h2>

                <p className="py-3">
                  Thirty years ago, the cause of Huntington’s disease was traced
                  to a mutation in the <span className="italic">HTT</span> gene.
                  Yet, the precise mechanism by which this mutation causes brain
                  cells to die remained elusive. The prevailing thought was that
                  the mutation produces a toxic protein that gradually
                  accumulates, ultimately killing neurons. Research from Steve
                  McCarroll, a Broad investigator, and his team offers a new
                  take—one that not only rewrites the basic biology of the
                  disease but also unlocks new therapeutic possibilities.
                </p>

                <p className="py-3">
                  The true culprit may lie not in the protein itself but in the
                  gene’s behavior—specifically, the phenomenon of{" "}
                  <span className="italic">somatic instability</span>, a subtle
                  genetic anomaly first observed in animal models in the late
                  1990s. In Huntington’s patients, a repeating DNA
                  sequence—CAG—expands unpredictably as the disease progresses,
                  and it is this expansion, McCarroll and his team believe, that
                  drives the degeneration of the brain’s motor centers.
                </p>
                <p className="py-3">
                  Yet for much of the last three decades, the field has largely
                  overlooked this clue, fixated instead on the role of the
                  protein. But new technologies allow researchers to zoom in and
                  discover what is happening to affected brain cells.
                </p>
                <p className="py-3">
                  McCarroll and his team specifically used a technology they
                  developed known as Drop-seq—which allows them to individually
                  profile many thousands of cells—to track the precise length of
                  these CAG repeats in individual cells, providing a level of
                  granularity previously unavailable. By analyzing over half a
                  million cells from healthy and Huntington’s-affected brains,
                  they discovered that striatal projection neurons—the cells
                  most affected by the disease—were the only ones to show a
                  significant expansion of these repeats. Once the expansion
                  surpasses around 150 repeats, these neurons begin to
                  deteriorate, setting in motion the hallmark symptoms of
                  Huntington’s: involuntary movements, cognitive decline, and
                  loss of motor function.    </p>
                  <p className="py-3">
                    The discovery, published in{" "}
                    <span className="italic"> Cell</span>, fundamentally alters
                    the way we think about Huntington’s disease. It also
                    explains why decades of drug development have failed to
                    materialize an effective treatment for the disease: they
                    were chasing the wrong target. A more promising therapeutic
                    strategy could involve slowing or halting the expansion of
                    the CAG repeats. Such an approach might delay the onset of
                    the disease or even arrest its progression, offering
                    long-awaited hope for thousands of patients.
              
                </p>
                <Image
                  src="/story-1-illu.svg"
                  alt="Huntington (HTT) Gene Somatic Instability"
                  width={1920}
                  height={640}
                  className="object-cover hidden md:block"
                  sizes="100vw"
                  priority
                />

                <Image
                  src="/story-1-illu-mobile.svg"
                  alt="Huntingtin (HTT) Gene Somatic Instability"
                  width={1920}
                  height={640}
                  className="object-cover md:hidden block"
                  sizes="100vw"
                  priority
                />
                <figcaption className=" font-mono text-sm text-white">
                  <h4 className="font-mono text-white">HOW IT WORKS</h4>
                  In Huntington’s patients, a repeating DNA sequence — CAG —
                  expands unpredictably as the disease progresses, and it is
                  this expansion, McCarroll and his team believe, that drives
                  the degeneration of the brain’s motor centers.
                </figcaption>



<div className="py-20">

</div>
                <div id="reading-list" className=" border-t-2 border-white">
  <h4 className="font-mono pt-32 text-sm text-white">FURTHER READING</h4>
  <div className="mt-4 space-y-2">
    {[
      {
        href: "https://www.broadinstitute.org/news/study-finds-surprising-way-genetic-mutation-causes-huntingtons-disease-transforming",
        text: "Study finds surprising way that genetic mutation causes Huntington’s disease, transforming understanding of the disorder",
      },
      {
        href: "https://www.youtube.com/watch?v=hd8Uukrocps",
        text: "A new understanding of Huntington's disease",
      },
      {
        href: "https://www.pbs.org/newshour/health/research-is-unraveling-the-mystery-of-what-causes-huntingtons-disease-a-devastating-brain-disorder",
        text: "Research is unraveling the mystery of what causes Huntington’s disease, a devastating brain disorder",
      },
      {
        href: "https://www.nature.com/articles/d41586-025-00119-x",
        text: "Revealed: Why the fatal Huntington’s gene takes so long to cause harm",
      },
      {
        href: "https://www.broadinstitute.org/news/new-gene-delivery-vehicle-shows-promise-human-brain-gene-therapy",
        text: "New gene delivery vehicle shows promise for human brain gene therapy",
      },
    ].map(({ href, text }, index) => (
      <p key={index} className="not-prose py-1">
        <a href={href}          className="text-white decoration-1 underline underline-offset-2 hover:underline hover:decoration-dotted hover:decoration-2
" target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </p>
    ))}
  </div>
</div>
              </article>
            </div>
          </div>
        );
      case "esa":
        return (
          <div className="min-h-screen items-center lg:mx-40 mx-2 text-lg leading-tight  flex flex-col bg-[#DA2F62]">
            <div className=" w-full h-auto mb-12">
              <Image
                src="/story-2.svg"
                alt="Eye of the Needle"
                width={1920}
                height={640}
                className="object-cover hidden md:block"
                sizes="100vw"
                priority
              />
              <Image
                src="/story-2-mobile.svg"
                alt="Eye of the Needle"
                width={1920}
                height={640}
                className="object-cover md:hidden block"
                sizes="100vw"
                priority
              />
            </div>

            <div className="">
              <article
                role="main"
                className="prose  justify-center text-white  font-martina font-normal text-xl pb-32  leading-6
"
              >
                <h2 className="py-5 text-white text-2xl font-neueHaas font-medium">
                  A promising gene-editing tool inspired by a bacterial syringe.
                </h2>

                <p className="py-3">
                  Scientists are developing novel gene- and cell-based therapies
                  for rare diseases, metabolic disorders, cardiovascular
                  conditions, cancers, and more. But these therapies still face
                  a major hurdle: they need to reach the right disease-causing
                  cells in the body.
                </p>

                <p className="py-3">
                  Current technologies can deliver gene therapies to some
                  tissues, such as the eye, blood, and liver, but not others,
                  especially crucial locations like the brain, heart, lung, and
                  kidney. As part of an ambitious initiative to build a suite of
                  modular tools that researchers can quickly—and
                  scalably—repurpose to design gene-editing therapies that
                  strike at the root causes of diseases, Broad researcher Feng
                  Zhang is tackling this bottleneck with a new delivery vehicle
                  that can ferry gene-editing tools to different cell types.
                </p>

                <Image
                  src="/story-2-illu.svg"
                  alt="extra-cellular contractile injection system"
                  width={1920}
                  height={640}
                  className="object-cover hidden md:block"
                  sizes="100vw"
                  priority
                />

                <Image
                  src="/story-2-illu-mobile.svg"
                  alt="extra-cellular contractile injection system"
                  width={1920}
                  height={640}
                  className="object-cover md:hidden block"
                  sizes="100vw"
                  priority
                />
                <figcaption className=" font-mono text-sm text-white">
                  <h4 className="font-mono text-white">HOW IT WORKS</h4>
                  In eCIS, a tiny syringe-like tube injects proteins into host
                  cells. On one end of eCIS are tail fibers that recognize
                  specific receptors on the cell surface and latch on.{" "}
                </figcaption>

                <p className="py-3">
                  With the support of a group of philanthropists, he and his
                  team are doing this by plumbing nature’s secrets. In this
                  case, they have refashioned a natural feature of{" "}
                  <span className="italic"> Photorhabdus </span> bacteria called
                  eCIS—extracellular contractile injection system—in which a
                  tiny syringe-like tube injects proteins into host cells. On
                  one end of the eCIS are tail fibers that recognize specific
                  receptors on the cell surface and latch on. Though eCISs
                  naturally only target insect and mouse cells, using
                  AlphaFold—an AI program that predicts the shape of proteins
                  and has so far catalogued more than 200 million protein
                  structures—the Zhang Lab reengineered the tail fibers of the
                  eCIS to bind to human cells and tricked the syringe into
                  delivering a protein of the lab’s choosing.
                </p>
                <p className="py-3">
                  Thus far, the reengineered eCIS machines have shown their
                  versatility, delivering different types of proteins to human
                  cells. These include base editors, which can make
                  single-letter changes to DNA; proteins that are toxic to
                  cancer cells; and Cas9, a large DNA-cutting enzyme used in
                  CRISPR gene-editing systems. The team even deployed an eCIS to
                  deliver proteins into the brains of live mice. It’s a major
                  step forward for developing future gene therapies to the
                  brain, one of the most challenging parts of the body to
                  target.
                </p>
                <p className="pt-3">
                  The potential is immense, and the team is working to realize
                  it by optimizing their eCIS systems while also exploring other
                  promising delivery approaches.
                </p>

                <div className="py-20">

</div>
                <div id="reading-list" className=" border-t-2 border-white">
  <h4 className="font-mono pt-40 text-sm text-white">FURTHER READING</h4>
  <div className="mt-4 space-y-2">


    {[
      {
        href: "https://www.nature.com/articles/s41568-024-00763-x",
        text: "The present and future of the Cancer Dependency Map",
      },
      {
        href: "https://www.broadinstitute.org/news/qa-new-approaches-are-needed-find-better-cancer-drug-targets",
        text: "Q&A: New approaches are needed to find better cancer drug targets",
      },
      {
        href: "https://www.broadinstitute.org/news/broad-dana-farber-st-jude-join-together-drive-progress-against-pediatric-cancer",
        text: "Broad, Dana-Farber, St. Jude join together to drive progress against pediatric cancer",
      },
      {
        href: "https://www.youtube.com/watch?v=IoRvY4zleKk",
        text: "Tumor Immunotherapy Discovery Engine (TIDE)",
      },
      {
        href: "https://www.broadinstitute.org/news/cancer-dependency-map-consortium-accelerates-research-tumor-vulnerabilities",
        text: "Cancer Dependency Map Consortium accelerates research into tumor vulnerabilities",
      },
    ].map(({ href, text }, index) => (
      <p key={index} className="not-prose py-1">
        <a
          href={href}
          className="text-white decoration-1 underline underline-offset-2 hover:underline hover:decoration-dotted hover:decoration-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </p>
    ))}
  </div>
</div>


              </article>
            </div>
          </div>
        );
      case "nasa":
        return (
          <div className="min-h-screen items-center lg:mx-40 mx-2 text-lg leading-tight  flex flex-col bg-[#CED7E9]">
            <div className=" w-full h-auto mb-12">
              <Image
                src="/story-3.svg"
                alt="DepMap and Patient Impact"
                width={1920}
                height={640}
                className="object-cover hidden md:block"
                sizes="100vw"
                priority
              />
              <Image
                src="/story-3-mobile.svg"
                alt="DepMap and Patient Impact"
                width={1920}
                height={640}
                className="object-cover md:hidden block"
                sizes="100vw"
                priority
              />
            </div>

            <div className="">
              <article
                role="main"
                className="prose  justify-center text-[#344899] font-martina font-normal text-xl pb-32  leading-6
"
              >
                <h2 className="py-5 text-2xl text-[#344899] font-neueHaas font-medium">
                  A Broad-led effort to understand the molecular diversity of
                  tumors is leading to new clinical trials.
                </h2>

                <p className="py-3">
                  It’s often said that scientists have cured cancer many times…
                  in mice. Beneath the quip lay the belief that laboratory
                  models of cancer were all imperfect, and therefore, scientists
                  shouldn’t agonize over validating a therapeutic
                  hypothesis—they just needed to move quickly to get drugs to
                  cancer patients.
                </p>

                <p className="py-3">
                  But there’s a major glitch: most drugs fail in clinical
                  trials. Even amid breakthroughs in cancer treatments, up to 95
                  percent of experimental oncology drugs still never make it to
                  patients. That’s an astonishing waste of resources—and it
                  unnecessarily exposes cancer patients to sometimes grueling
                  treatments.
                </p>
                <p className="py-3">
                  With the advent of genomic sequencing, scientists realized
                  that the central problem in finding effective new cancer drugs
                  wasn’t so much that models were imperfect, but that cancer
                  isn’t a single disease. Instead, it’s a collection of
                  molecularly distinct diseases. So taking a single cell line—
                  “immortalized” cells that grow in Petri dishes and are the
                  workhorse of cancer research—and applying it to a range of
                  cancers was a recipe for failure.
                </p>
                <p className="py-3">
                  Thus, Broad cancer researchers and their collaborators
                  (notably those at the Wellcome Sanger Institute in the U.K.)
                  reasoned they could use the latest genomic and other advanced
                  technologies to create a new resource that captured the
                  molecular diversity of actual human tumors. They also reckoned
                  they could pinpoint tumors’ weak spots—genetic anomalies found
                  only in cancer cells and necessary for their survival, and
                  thus, perfect drug targets. They began collecting existing
                  cell lines—and generated new ones—profiled them genomically,
                  and then systematically made genetic tweaks (e.g., deleted or
                  dialed down genes) to identify molecular vulnerabilities, or
                  dependencies. And they also subjected the cell lines to
                  thousands of drug treatments to see whether any possible
                  treatments already existed.
                </p>

                <Image
                  src="/story-3-illu.svg"
                  alt="Clinical Trials for Experimental Oncology Drugs"
                  width={1920}
                  height={640}
                  className="object-cover hidden md:block"
                  sizes="100vw"
                  priority
                />

                <Image
                  src="/story-3-illu-mobile.svg"
                  alt="Clinical Trials for Experimental Oncology Drugs"
                  width={1920}
                  height={640}
                  className="object-cover md:hidden block"
                  sizes="100vw"
                  priority
                />
                <figcaption className=" text-[#344899] text-sm font-mono">
                  <h4 className="text-[#344899] font-mono ">
                    EVEN AMID BREAKTHROUGHS
                  </h4>
                  Most drugs fail in clinical trials. Up to 95% of experimental
                  oncology drugs never make it to patients.
                </figcaption>

                <p className="py-3">
                  These collective efforts, many of which were catalyzed by
                  philanthropy, were dubbed the Cancer Dependency Map.
                  Officially launched in 2018, the DepMap has profiled 2,000
                  cell lines (representing more than 34 cancers) and conducted
                  around 2 million genome-wide screens.
                </p>
                <p className="py-3">
                  And it’s become a hallmark Broad-led effort: one that not only
                  takes an unbiased, data-driven approach, but rallies together
                  researchers to parse through and ultimately, to actively
                  contribute data. Open to researchers, the DepMap portal, which
                  also includes analytical tools, boasts more than 11,000 users
                  a week from across the world. And it also now includes 19
                  pharmaceutical companies, who make up the DepMap Consortium,
                  which supports the overall effort.
                </p>
                <p className="py-3">
                  Above all, it’s leading to a real impact on patients,
                  validating identified targets (a key step in persuading drug
                  companies to take them up) and uncovering new ones. So far,
                  seven clinical trials have emerged from the DepMap, with many
                  more expected in the coming years.
                </p>

                <p className="py-3">
                  Here’s one example of a new target that emerged from the
                  DepMap: Some cancers have a feature called{" "}
                  <span className="italic">microsatellite instability</span>{" "}
                  (MSI), which causes runaway mutation when a DNA repair system
                  in a cell is broken. About half of cancers with MSI can be
                  treated with drugs called checkpoint inhibitors that unleash
                  the patient’s immune system to kill cancer cells. But Broad
                  and Wellcome Sanger scientists wanted to find ways of
                  targeting the ones that didn’t respond. Using the DepMap
                  approach, they discovered that these cancers also depend on a
                  gene called <span className="italic">WRN,</span> which encodes
                  a protein that helps cells copy or read DNA by unwinding and
                  unzipping the genome’s double helix.
                </p>

                <p className="py-3">
                  The scientists uncovered this dependency by looking at two
                  datasets, the DepMap and Project DRIVE (an initiative of the
                  Novartis Institute for Biomedical Research). Both datasets
                  were generated by individually breaking or silencing thousands
                  of genes in cancer cell lines and measuring the resulting
                  effects on cell survival. Among the datasets, the team
                  identified 51 cell lines classified as having MSI. Of those,
                  they then found that 73 percent of them were dependent on{" "}
                  <span className="italic">WRN.</span> Now, at least three
                  companies are currently working on drugs to shut down{" "}
                  <span className="italic">WRN,</span> which should have no
                  effect on normal cells.{" "}
                </p>
           
              <ByTheNumbers />
              <div id="reading-list" className="py-24">
  <h4 className="font-bold not-prose font-mono text-sm">FURTHER READING</h4>

  <div className="mt-4 space-y-2">
    {[
      {
        href: "https://www.nature.com/articles/s41568-024-00763-x",
        text: "The present and future of the Cancer Dependency Map",
      },
      {
        href: "https://www.broadinstitute.org/news/qa-new-approaches-are-needed-find-better-cancer-drug-targets",
        text: "Q&A: New approaches are needed to find better cancer drug targets",
      },
      {
        href: "https://www.broadinstitute.org/news/broad-dana-farber-st-jude-join-together-drive-progress-against-pediatric-cancer",
        text: "Broad, Dana-Farber, St. Jude join together to drive progress against pediatric cancer",
      },
      {
        href: "https://www.youtube.com/watch?v=IoRvY4zleKk",
        text: "Tumor Immunotherapy Discovery Engine (TIDE)",
      },
      {
        href: "https://www.broadinstitute.org/news/cancer-dependency-map-consortium-accelerates-research-tumor-vulnerabilities",
        text: "Cancer Dependency Map Consortium accelerates research into tumor vulnerabilities",
      },
    ].map(({ href, text }, index) => (
      <p key={index} className="not-prose py-1">
        <a
          href={href}
          className="text-[#344899] decoration-1 underline underline-offset-2 hover:underline hover:decoration-dotted hover:decoration-2
"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </p>
    ))}
  </div>
</div>


              </article>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-neueHaas flex flex-col md:flex-row">
      <div className="w-full h-screen absolute md:overflow-hidden">
        <Popup showPopup={showPopup} closePopup={closePopup} />

        {isMobile ? (
          <>
            {renderAgencyContent(agencies[4])} {/* Render "jaxa" content */}
            <Accordion type="single" collapsible className="w-full">
              {agencies
                .slice(0, 4)
                .toReversed()
                .map((agency, index) => (
                  <AccordionItem key={agency.id} value={agency.id}>
                    <AccordionTrigger
                      className={`${agency.bgColor} ${agency.textColor} py-5 px-3`}
                    >
                      {agency.title}
                    </AccordionTrigger>
                    <AccordionContent
                      className={`${agency.bgColor} ${agency.textColor}`}
                    >
                      {renderAgencyContent(agency)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </>
        ) : (
          <>
            {!isMobile &&
              agencies.map((agency, index) => (
                <Pane
                  index={index}
                  key={agency.id}
                  className={`${agency.bgColor} accordion`}
                  isTransformed={index > activeAgencyIndex}
                  isActive={activeAgencyIndex === index}
                  onClick={() => setActiveAgencyIndex(index)}
                  onScrollToTop={handleScrollToTop}
                  onScrollToBottom={handleScrollToBottom}
                  agency={{
                    name: agency.name,
                    title: agency.title,
                    textColor: agency.textColor,
                  }}
                >
                  {renderAgencyContent(agency)}
                </Pane>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
