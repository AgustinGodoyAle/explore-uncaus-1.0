import React from 'react'
import Card2 from '../components/Card2'

export const EdificiosScreen = () => {
  return (
    <>
      <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden ">
        <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          <p>Los Edificios de nuestra universidad</p>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Tecnológico"
            subtitle="Cuenta con 5 pisos"
            imageUrl="src/images/edificios/edtecno.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div className="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Principal"
            subtitle="Es por donde se ingresa a nuestra universidad"
            imageUrl="src/images/edificios/edprincipal.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div className="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Estadio Arena UNCAus"
            subtitle="Cuenta con aulas en su interior"
            imageUrl="src/images/edificios/arenauncaus1.jpg"
            buttonText="Recorrer"
          />
        </div>
      </div>
    </>

  )
}
