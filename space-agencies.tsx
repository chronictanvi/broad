"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Agency {
  id: string;
  name: string;
  title: string[];
  bgColor: string;
  textColor: string;
}

const agencies: Agency[] = [
  {
    id: "jaxa",
    name: "24.00",
    title: ["Introduction: Scale"],
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: "roscosmos",
    name: "24.01 ",
    title: ["A New Perspective on a Decades-old Mystery"],
    bgColor: "bg-[#4277FF]",
    textColor: "text-white",
  },
  {
    id: "esa",
    name: "24.02",
    title: ["Engineering Better Gene-Editing Tools"],
    bgColor: "bg-[#DFBDFF]",
    textColor: "text-[#0035BB]",
  },
  {
    id: "nasa",
    name: "24.03",
    title: [" DepMap and Patient Impact"],
    bgColor: "bg-[#87A8E0]",
    textColor: "text-black",
  },
];

const scrollToContent = () => {
  const contentElement = document.getElementById("content");
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1);
      window.scrollTo(0, window.scrollY - 1);
    }, 100);
  }
};

export default function SpaceAgencies() {
  const [activeAgency, setActiveAgency] = useState<string>("jaxa");
  const [isLandingVisible, setIsLandingVisible] = useState(true);
  const landingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "landing") {
          setIsLandingVisible(entry.isIntersecting);
        }
      });
    }, options);

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }

    return () => {
      if (landingRef.current) {
        observer.unobserve(landingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLandingVisible && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLandingVisible]);

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row sticky top-0 z-10 w-full snap-container">
        {agencies.map((agency) => (
          <div
            key={agency.id}
            className={`${agency.bgColor} ${
              activeAgency === agency.id
                ? "md:w-full h-auto"
                : "md:w-[60px] h-[70px] md:h-screen"
            } transition-all duration-500 ease-in-out cursor-pointer overflow-hidden`}
            onClick={() => setActiveAgency(agency.id)}
          >
            <div className="h-full overflow-y-auto flex flex-col">
              <div className="px-4 pt-6 pb-8 h-full flex flex-col">
                <div className="space-y-2 flex-grow">
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ rotate: activeAgency === agency.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* <ChevronDown className={`w-4 h-4 ${agency.textColor}`} /> */}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    <motion.div
                      key={
                        activeAgency === agency.id ? "expanded" : "collapsed"
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      id="landing"
                      className="space-y-1 overflow-hidden flex-grow"
                    >
                      <div className="snap-y snap-mandatory ">
                        <section className="snap-section snap-start">
                          {activeAgency === agency.id &&
                            agency.id === "jaxa" && (
                              <div
                                ref={landingRef}
                                className="flex flex-col justify-between min-h-screen text-sm font-medium text-gray-600 relative"
                              >
                                <div className="flex-1">
                                  <div className="relative w-full h-auto mb-4">
                                    <Image
                                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/differently-k6ixLwbbp6wKKpRCNDXHPDElbh5HDD.svg"
                                      alt="Differently"
                                      width={1920}
                                      height={640}
                                      className="w-full h-auto object-cover"
                                      sizes="100vw"
                                      priority
                                    />
                                  </div>
                                  Broad Institute Year in Review 2024
                                  <br />
                                  <span
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      scrollToContent();
                                    }}
                                  >
                                    Scroll to read
                                  </span>
                                </div>
                              </div>
                            )}
                        </section>

                        <section
                          id="content"
                          ref={contentRef}
                          className="snap-section snap-start"
                        >
                          <p
                            className={`text-sm  ${agency.textColor} whitespace-nowrap`}
                          >
                            {agency.name}
                          </p>
                          {agency.title.map((line, index) => (
                            <p
                              key={index}
                              className={`md:text-3xl text-base md:font-light font-bold ${
                                agency.textColor
                              } transition-all duration-500 md:mt-4 ${
                                activeAgency === agency.id
                                  ? "md:text-left "
                                  : "text-right md:text-vertical md:text-left text-horizontal  "
                              }`}
                            >
                              {line}
                            </p>
                          ))}

                          {activeAgency === agency.id &&
                            agency.id === "jaxa" && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="min-h-screen text-sm leading-relaxed pt-6 flex flex-col"
                              >
                                <p className="mx-20">
                                  Scale. In science, it's a word that often
                                  connotes size, and usually a massive size. And
                                  it's often bandied about as genomic and other
                                  technologies produce ever-growing reams of
                                  data and cutting-edge computational approaches
                                  are trained to interpret them. Sequencing
                                  centers are churning out hundreds of thousands
                                  of genomes a day. Laboratories are now able to
                                  profile millions of cells in an experiment.
                                  Machine learning is scanning many millions of
                                  medical images to find new patterns. But at
                                  the Broad Institute, scale means something
                                  different. It's more than just size—it's about
                                  taking systematic, unbiased approaches and
                                  going where the data leads you. It's about
                                  traversing reams of cellular data and
                                  uncovering a lead that could someday help
                                  solve a medical mystery. It's about shifting
                                  through millions of proteins to build one that
                                  could someday be a new gene-editing tool. Or
                                  taking everything we know about the genetic
                                  changes cancer cells undergo, figuring out
                                  which ones they need to survive, and giving
                                  access to the research community so we can get
                                  to clinical trials more quickly and more
                                  safely for patients.
                                </p>
                              </motion.div>
                            )}
                        </section>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
