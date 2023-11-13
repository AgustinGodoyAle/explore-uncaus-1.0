import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon"; // Asegúrate de importar el ícono de ojo abierto
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon"; // Asegúrate de importar el ícono de ojo cerrado

export default function InputPassword(props) {
  const { value, onChange, label } = props;
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label={label}
      variant="bordered"
      placeholder="Ingresa tu contraseña"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      value={value}
      onValueChange={onChange}
      className="max-w-xs"
    />
  );
}
