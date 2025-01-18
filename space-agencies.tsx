'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Agency {
  id: string
  name: string
  title: string[]
  bgColor: string
  textColor: string
}

const agencies: Agency[] = [
  {
    id: 'roscosmos',
    name: 'ROSCOSMOS',
    title: ['Rus', 'Spa', 'Age'],
    bgColor: 'bg-black',
    textColor: 'text-white'
  },
  {
    id: 'esa',
    name: 'ESA',
    title: ['Euro', 'Spa', 'Age'],
    bgColor: 'bg-gray-300',
    textColor: 'text-black'
  },
  {
    id: 'nasa',
    name: 'NASA',
    title: ['National', 'Aeronautics and', 'Space', 'Administration'],
    bgColor: 'bg-gray-100',
    textColor: 'text-black'
  },
  {
    id: 'jaxa',
    name: 'JAXA',
    title: ['Japan', 'Aerospace', 'Exploration', 'Agency'],
    bgColor: 'bg-blue-900',
    textColor: 'text-white'
  }
]

export default function SpaceAgencies() {
  const [activeAgency, setActiveAgency] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {agencies.map((agency) => (
        <motion.div
          key={agency.id}
          className={`${agency.bgColor} transition-all duration-500 ease-in-out cursor-pointer overflow-hidden`}
          animate={{
            flex: activeAgency === agency.id ? 2 : activeAgency === null ? 1 : 0.2,
          }}
          onClick={() => setActiveAgency(activeAgency === agency.id ? null : agency.id)}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="space-y-2 flex-grow">
              <div className="flex items-center justify-between">
                <p className={`text-sm tracking-wider ${agency.textColor}`}>{agency.name}</p>
                <motion.div
                  animate={{ rotate: activeAgency === agency.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-4 h-4 ${agency.textColor}`} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {(activeAgency === agency.id || activeAgency === null) && (
                  <motion.div
                    initial={activeAgency !== null ? { opacity: 0, height: 0 } : false}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`space-y-1 overflow-hidden md:vertical-text ${activeAgency !== agency.id ? 'md:inactive' : ''}`}
                  >
                    {agency.title.map((line, index) => (
                      <p key={index} className={`text-4xl font-light ${agency.textColor}`}>
                        {line}
                      </p>
                    ))}
                    <div className="accent-line bg-sky-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

