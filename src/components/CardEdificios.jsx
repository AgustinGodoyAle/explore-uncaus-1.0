import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-[1100px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start ">
          <p className="text-tiny text-black/60 uppercase font-bold">Edificio Principal</p>
          <h4 className="text-black/90 font-medium text-xl">El primer edificio de nuestra universidad</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="src/images/edificios/edprincipal.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Más de 20 aulas</p>
              <p className="text-tiny text-white/60">Recorre sus pasillos y descubre cual es tu aula!</p>
            </div>
          </div>
          <Button radius="full" size="sm">Explorar</Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Edificio Tecnológico</p>
          <h4 className="text-black font-medium text-2xl">Cuenta con 5 pisos</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="src/images/edificios/edtecno.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">En este edificio se encuentra la UME y la UEP N°188</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
          Explorar
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Estadio Arena UNCAus</p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="src/images/edificios/arenauncaus1.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Cuenta con aulas de clases y distintas oficinas en su edificio </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
          Explorar
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Edificio anexo Iglesia Greco-Ucraniana</p>
          <h4 className="text-black font-medium text-large"></h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="src/images/edificios/edprincipal.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Recorré sus pasillos y descubrí cual es tu aula!</p>
            </div>
          </div>
          <Button radius="full" size="sm">Explorar</Button>
        </CardFooter>
      </Card>
      
      <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Edificio Tecnológico</p>
          <h4 className="text-black font-medium text-large">Cuenta con 5 pisos</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="src/images/edificios/edtecno.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Cuenta con aulas de clases y distintas oficinas en su edificio </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
          Explorar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
