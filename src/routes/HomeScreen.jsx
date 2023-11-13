import React from "react";
import Card1 from "../components/Card1.jsx"
import CardText from "../components/CardText.jsx"
import Card2 from "../components/Card2.jsx"

export const HomeScreen = () => {
  return (
    <>
    <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
      <h1>¡ Bienvenido !</h1>
    </div>
    <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <img src="../src/images/logoExplore.jpeg" alt="logoExplore" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <h4 className="font-bold text-large">Titulo 1</h4>
          <p className="text-tiny uppercase font-bold">Titulo 2</p>
          <small className="text-default-500">subtitulo</small>
        </div>
      </div>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <Card1
            title="Explorá todos los edificios de la universidad"
            title1="¡Llega a donde quieras!"
            subtitle="Vistas de todos los pisos y áreas"
            imageUrl="src/images/edificios/presentacionuncaus.png"
            imageAlt="Otra imagen"
          />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <Card1
            title="Inscribite a tus clases"
            title1="¡Conocé donde cursas!"
            subtitle="Encontrá tu aula"
            imageUrl="src/images/aulas.jpg"
            imageAlt="Otra imagen"
          />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <Card1
            title="Agendá tus eventos"
            title1="¡Nó te pierdas ningún evento!"
            subtitle="Eventos de todo tipo a tu alcance"
            imageUrl="src/images/eventos.jpg"
            imageAlt="Otra imagen"
          />
        </div>
      </div>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <img src="../src/images/logoExplore.jpeg" alt="logoExplore" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <h4 className="font-bold text-large">Titulo 1</h4>
          <p className="text-tiny uppercase font-bold">Titulo 2</p>
          <small className="text-default-500">subtitulo</small>
        </div>
      </div>
      <div class="relative overflow-y-hidden flex items-center  border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden">
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <CardText
            name="Narela Lotoski"
            username="nare"
            message="Explore UNCAus busca dar solución a nuevos alumnos e invitados que desconocen como llegar a los distintos puntos de la universidad"
            avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            followers="4"
            isFollowed={true} // Cambia esto según el estado de seguimiento
          />
        </div>
        <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <CardText
            name="Agustín Godoy"
            username="agustingodoyale"
            message="Con este sistema queremos que cada una de las persona que se encuentre en nuestra universidad se sienta cómoda"
            avatarUrl="https://i.pravatar.cc/150?u=a04258114e29026302d"
            followers="4"
            isFollowed={true} // Cambia esto según el estado de seguimiento
          />
        </div><div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
          <CardText
            name="Gustavo Paszco"
            username="paszcogustavo"
            message="Es un orgullo que mis alumnos puedan crear un sistema tan completo "
            avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            followers="4"
            isFollowed={true} // Cambia esto según el estado de seguimiento
          />
        </div>
      </div>
    </>
  )
}