import React from "react";
import Card1 from "../components/Card1.jsx"
import CardText from "../components/CardText.jsx"
import { Link, Button } from "@nextui-org/react";


export const HomeScreen = () => {
  return (
    <>
      <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden ">
        <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          <p>Conocé cada punto de tu universidad.</p>
          <p>Encontrá tus clases y exámenes de la forma más rápida.</p>
          <p>Todo desde tu celular.</p>
        </h1>
      </div>

      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 py-6 rounded-lg overflow-hidden">
        <div class="max-w-full py-4  w-full h-full scrollbar-hide overflow-x-scroll">
          <img src="images/logoExplore.jpeg" alt="logoExplore" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div class="max-w-full py-4  w-full h-full scrollbar-hide overflow-x-scroll">
          <h1 className="font-bold text-xl">Queremos que puedas encontrar todas las instalación de la universidad.</h1>
          <h1 className="font-bold text-base">Sabemos que es dificil encontrar donde son tus clases y tus exámenes.</h1>
          <p className="font-bold text-base ">Es por esto que desarrollamos una forma sencilla de hacerlo.</p>
          <small className="text-default-500">Nuestra aplicación</small>
        </div>
      </div>

      <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden ">
        <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
          Te ofrecemos
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="max-w-full py-4 px-2 h-full">
          <Card1
            title="Buscá tu punto de interés y seguí las indicaciones en el mapa"
            title1="¡Llegá a donde quieras rápidamente!"
            subtitle="No pierdas tiempo preguntando"
            imageUrl="images/estudiante1.jpg"
            imageAlt="Otra imagen"
          />
        </div>
        <div className="max-w-full py-4 px-2 h-full">
          <Card1
            title="Inscribite a tus clases y consultá día, horario, y lugar"
            title1="¡Conocé donde cursas!"
            subtitle="Encontrá tu aula"
            imageUrl="images/aulas.jpg"
            imageAlt="Otra imagen"
          />
        </div>
        <div className="max-w-full py-4 px-2 h-full">
          <Card1
            title="Accedé como invitado y consultá la ubicación que deseas"
            title1="¡No te pierdas ningún evento!"
            subtitle="No conocer el las instalaciones ya no es un problema"
            imageUrl="images/eventos.jpg"
            imageAlt="Otra imagen"
          />
        </div>
      </div>


      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 py-6 rounded-lg overflow-hidden">
        <div class="max-w-full py-4  w-full h-full scrollbar-hide overflow-x-scroll">
          <h1 className="font-bold text-xl">¡Descargala ya!</h1>
          <h1 className="font-bold text-base">Escaneá el QR para descargarla en tu celular.</h1>
          <p className="font-bold text-base ">Tambien podes hacer click en el siguiente botón.</p>
          <Button href="https://github.com/nextui-org/nextui" as={Link} color="primary" showAnchorIcon variant="solid">Descargar</Button>
        </div>
        <div class="max-w-full py-4  w-full h-full scrollbar-hide overflow-x-scroll">
          <img src="images/estudiantes.jpg" alt="estudiantes" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <CardText
            name="Narela Lotoski"
            username="delvis.N.LOT@gmail.com"
            message="Explore UNCAus busca dar solución a nuevos alumnos e invitados que desconocen como llegar a los distintos puntos de la universidad"
            avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <CardText
            name="Agustín Godoy"
            username="agustingodoyomg@gmail.com"
            message="Con este sistema queremos que cada una de las persona que se encuentre en nuestra universidad se sienta cómoda"
            avatarUrl="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </div>
      </div>
    </>
  )
}