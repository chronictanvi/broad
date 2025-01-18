"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    bgColor: "bg-gray-300",
    textColor: "text-black",
  },
  {
    id: "nasa",
    name: "24.03",
    title: [" DepMap and Patient Impact"],
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
];

export default function SpaceAgencies() {
  const [activeAgency, setActiveAgency] = useState<string>("jaxa");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {agencies.map((agency) => (
        <div
          key={agency.id}
          className={`${agency.bgColor} ${
            activeAgency === agency.id
              ? "md:w-[90%] h-auto"
              : "md:w-[5%] h-[70px] md:h-auto"
          } transition-all duration-500 ease-in-out cursor-pointer overflow-hidden`}
          onClick={() => setActiveAgency(agency.id)}
        >
          <div className=" px-4 pt-6 h-full flex flex-col">
            <div className="space-y-2 flex-grow">
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm tracking-wider ${agency.textColor} whitespace-nowrap`}
                >
                  {agency.name}
                </p>
                <motion.div
                  animate={{ rotate: activeAgency === agency.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <ChevronDown className={`w-4 h-4 ${agency.textColor}`} /> */}
                </motion.div>
              </div>

              <AnimatePresence>
                <motion.div
                  key={activeAgency === agency.id ? "expanded" : "collapsed"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1 overflow-hidden flex-grow"
                >
                  {agency.title.map((line, index) => (
                    <p
                      key={index}
                      className={`text-3xl font-light ${
                        agency.textColor
                      } transition-all duration-500
                        ${
                          activeAgency === agency.id
                            ? "md:text-left"
                            : "text-right md:text-left"
                        }
                      `}
                      style={
                        activeAgency === agency.id
                          ? {}
                          : {
                              writingMode: "vertical-lr",
                              textOrientation: "mixed",
                            }
                      }
                    >
                      {line}
                    </p>
                  ))}
                  <div
                    className={`w-12 h-0.5 bg-sky-400 mt-4 ${
                      activeAgency === agency.id ? "" : "hidden"
                    }`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
