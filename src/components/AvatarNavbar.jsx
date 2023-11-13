import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            color:"secondary",
                            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                        description="@tonyreichert"
                        name="Tony Reichert"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Registrado como:</p>
                        <p className="font-semibold">agustingodoyale@gmail.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">Mi perfil</DropdownItem>
                    <DropdownItem key="team_settings">Mis clases</DropdownItem>
                    <DropdownItem key="analytics">Mis eventos</DropdownItem>
                    <DropdownItem key="system">Incribirse</DropdownItem>
                    <DropdownItem key="configurations">Configuración</DropdownItem>
                    <DropdownItem key="help_and_feedback">Ayuda</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Cerrar sesión
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
