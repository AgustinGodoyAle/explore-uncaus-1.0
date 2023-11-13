import React from 'react'
import Accordion from '../components/Accordion'

export const HelpScreen = () => {
  return (
    <>
      <div class="relative overflow-y-hidden flex items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <h4>Preguntas frecuentes</h4>
      </div>
      <Accordion />
    </>
  )
}
