import React from "react";
import {Avatar} from "@nextui-org/react";

export default function App() {
  return (
    <>
    <section className="mt-8">
    
    <div className="flex gap-4 items-center">
      <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </div>
    </section>
    <section className="mt-8">
    <div className="flex gap-4 items-center">
      <Avatar showFallback src='https://images.unsplash.com/broken' />
      <Avatar showFallback name='Jane' src='https://images.unsplash.com/broken' />
      <Avatar name='Joe' src='https://images.unsplash.com/broken' />
    </div>
  </section>
  </>
  );
}
