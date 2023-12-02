import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Card2({ title, subtitle, imageUrl, buttonText }) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="max-w-[360px] h-full flex flex-col"
    >
      <div className="flex-grow">
        <Image
          alt={title}
          className="object-cover w-full h-full"
          src={imageUrl}
        />
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
        <p className="text-tiny text-white/80">{subtitle}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}