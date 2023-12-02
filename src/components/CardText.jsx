import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function CardText({ name, username, message, avatarUrl }) {

  return (
    <Card className="max-w-full h-full">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="h-full">{message}</p>
        <span className="pt-2">
          #ExploreUNCAus 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
