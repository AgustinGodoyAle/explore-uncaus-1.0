import React from 'react'
import Accordion from '../components/Accordion'

export const HelpScreen = () => {
  return (
    <>
      <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden ">
        <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          <p>Preguntas Frecuentes</p>
        </h1>
      </div>
      <Accordion />
    </>
  )
}
