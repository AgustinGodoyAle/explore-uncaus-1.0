import React from 'react'
import Card2 from '../components/Card2'

export const EdificiosScreen = () => {
  return (
    <>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        Elegí que edificio querés recorrer
      </div>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Tecnológico"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/edtecno.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Principal"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/edprincipal.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Estadio Arena UNCAus"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/arenauncaus1.jpg"
            buttonText="Recorrer"
          />
        </div>
      </div>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Tecnológico"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/edtecno.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Edificio Principal"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/edprincipal.jpg"
            buttonText="Recorrer"
          />
        </div>
        <div class="live-preview flex h-full w-full not-prose justify-center items-center">
          <Card2
            title="Estadio Arena UNCAus"
            subtitle="Descripción del edificio"
            imageUrl="src/images/edificios/arenauncaus1.jpg"
            buttonText="Recorrer"
          />
        </div>
      </div>
    </>

  )
}
