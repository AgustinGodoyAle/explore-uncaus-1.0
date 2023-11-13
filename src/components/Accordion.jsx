import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Haz clic aquí para ver como llegar";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="¿Donde se encuentra alumnado?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Donde se encuentra el aula magna?">
        blablablablablablabla
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Donde se encuentran los baños?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="¿Donde se encuentran los departamentos de las distintas carreras?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 3" title="¿Donde se entregan los papeles para inscripciones a una carrera?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
