import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Card1({ title, title1, subtitle, imageUrl, imageAlt }) {
  return (
    <Card className="py-4 h-full flex flex-col">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title1}</p>
        <small className="text-default-500">{subtitle}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-grow">
        <Image
          isBlurred
          alt={imageAlt}
          className="object-cover rounded-xl w-full h-full"
          src={imageUrl}
          width={420}
        />
      </CardBody>
    </Card>
  );
}
