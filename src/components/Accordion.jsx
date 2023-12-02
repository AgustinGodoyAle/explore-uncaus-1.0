import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="¿Explore UNCAus es paga?">
        No, nuestra aplicación es totalmente gratuita!
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Comó puedo descargarla?">
        Solo necesitas entrar desde tu celular y descargar la apk haciendo click en el botón que se encuentra arriba.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Necesito estar registrado en la aplicación?">
        No es necesario estar registrado en la aplición ya que podes ingresar como invitado y encontrar el aula o punto de interes que desees. Pero si queres saber donde queda tu clase o tu examen, es necesario estar registrado.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="¿Como me registro en la aplicación?">
        Un administrador del sistema te va a pedir tus datos para registrarte y ya podrás acceder a todas las funcionalidades tanto como alumno como profesor
      </AccordionItem>

    </Accordion>
  );
}
