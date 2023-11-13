import React from "react";
import { Input } from "@nextui-org/react";

export default function InputEmail(props) {
  const { value, onChange, label, isInvalid, errorMessage } = props;

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const handleValueChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Input
      value={value}
      type="email"
      label={label}
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && errorMessage}
      onValueChange={handleValueChange}
      className="max-w-xs"
    />
  );
}
