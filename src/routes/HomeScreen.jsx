import React from "react";
import Card1 from "../components/Card1.jsx"
import CardText from "../components/CardText.jsx"
import { Link, Button } from "@nextui-org/react";
import logoexplore from "/images/logo3.png"
import estudiante from "/images/estudiante1.jpg"
import aulas from "/images/aulas.jpg"
import eventos from "/images/eventos.jpg"
import estudiantes from "/images/estudiantes.jpg"
import qr from "/images/QR.png"


export const HomeScreen = () => {
  return (
    <>
      <section>

        <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden">
          <h1 className="responsive-text tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b text-center">
            <p className="responsive-text">Conocé cada punto de tu universidad.</p>
          </h1>
        </div>

        <div class="relative flex items-center justify-center border-default-200 dark:border-default-100 py-4 rounded-lg overflow-hidden">
          <div class="max-w-full h-full text-center">
            <div style={{ display: "inline-block", textAlign: "center" }}>
              <img
                src={logoexplore}
                alt="logoExplore"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 rounded-lg overflow-hidden">
          <h1 className="responsive-text tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b text-center">
            <p className="py-2">Encontrá tus clases y exámenes de la forma más rápida.</p>
            <p className="py-2">Todo desde tu celular.</p>
          </h1>
        </div>


        <div class="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-4 rounded-lg overflow-hidden">
          <div class="max-w-full py-4 w-full h-full scrollbar-hide overflow-x-scroll text-center">
            <p className="font-bold text-base">Desarrollamos una forma sencilla de hacerlo.</p>
            <small className="text-default-500">Nuestra aplicación</small>
          </div>
        </div>
      </section>

      <section>
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
              imageUrl={estudiante}
              imageAlt="estudiante"
            />
          </div>
          <div className="max-w-full py-4 px-2 h-full">
            <Card1
              title="Inscribite a tus clases y consultá día, horario, y lugar"
              title1="¡Conocé donde cursas!"
              subtitle="Encontrá tu aula"
              imageUrl={aulas}
              imageAlt="aulas"
            />
          </div>
          <div className="max-w-full py-4 px-2 h-full">
            <Card1
              title="Accedé como invitado y consultá la ubicación que deseas"
              title1="¡No te pierdas ningún evento!"
              subtitle="No conocer las instalaciones ya no es un problema"
              imageUrl={eventos}
              imageAlt="eventos"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 px-2 rounded-lg overflow-hidden ">
          <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
            <p className="py-2">¡Descargala ya!</p>
          </h1>
        </div>

        <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 py-6 px-2 rounded-lg overflow-hidden">
          <div class="max-w-full py-4  w-full h-full scrollbar-hide overflow-x-scroll">
            <h1 className="py-2 font-bold text-xl">Escaneá el QR para descargarla en tu celular.</h1>
            <p className="py-2 font-bold text-base ">Tambien podes hacer click en el siguiente botón.</p>
            <Button href="https://drive.google.com/file/d/1g3o3tPQ1pQv2oLA1ZsHiPEHX8Z0TlJwq/view?usp=drive_link" as={Link} color="primary" showAnchorIcon variant="solid">Descargar</Button>
          </div>
          <div class="max-w-full py-3 w-full h-full scrollbar-hide overflow-x-scroll">
            <img src={qr} alt="qr" style={{ maxWidth: "55%", maxHeight: "55%" }} />
          </div>
        </div>

      </section>


      <section>
        <div className="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-10 px-2 rounded-lg overflow-hidden ">
          <h1 className="tracking-tight inline font-bold from-white to-[#b249f8] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b text-center">
            <p className="py-2">Nosotros</p>
          </h1>
        </div>

        <div class="relative overflow-y-hidden flex items-center justify-center border-default-200 dark:border-default-100 py-4 px-2 rounded-lg overflow-hidden">
          <div class="max-w-full py-2 w-full h-full scrollbar-hide overflow-x-scroll text-center">
            <h1 className="font-bold text-base">Somos estudiantes de Ingeniería en Sistemas de la Universidad Nacional del Chaco Austral</h1>
            <h1 className="font-bold text-base">Nuestra idea surgió de ver a tantos ingresantes e incluso estudiantes avanzados que no logran unicarse en nuestra universidad</h1>
            <small className="text-default-500">Esperamos solucionar este problema mediante nuestra aplicación</small>
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
              message="Con este sistema queremos que cada una de las personas que se encuentre en nuestra universidad se sienta cómoda"
              avatarUrl="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </div>
        </div>
      </section>
    </>
  )
}