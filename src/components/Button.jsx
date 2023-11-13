import React from "react";
import { Button } from "@nextui-org/react";

export default function CustomButton(props) {
  const { children, color, variant, onClick } = props;

  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
}
