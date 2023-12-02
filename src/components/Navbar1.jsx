import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import AvatarNavbar from "../components/AvatarNavbar.jsx"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Explorar edificios",
        "Preguntas frecuentes",
        "Inicias sesión",
        "Registrarse",
        "Eventos",
        "Clases",
        "Inscribirse",
        "Configuración de perfil",
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <div style={{ maxWidth: "200px" }}>
                        <Link color="secondary" href="/"><img src="../src/images/logo3.png" alt="logo3" style={{ maxWidth: "100%", maxHeight: "70px" }} /></Link>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <div style={{ maxWidth: "200px" }}>
                        <Link color="secondary" href="/"><img src="../src/images/logo3.png" alt="logo3" style={{ maxWidth: "100%", maxHeight: "70px" }} /></Link>
                    </div>
                </NavbarBrand>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Menu
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="Explora los diferentes edicios y sus planos."
                            startContent={icons.scale}
                            href="/help"
                            as={Link}
                            color="secondary"
                        >
                            Edificios
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Accedé a una lista de cuales son los próximos eventos."
                            startContent={icons.activity}
                            href="/eventos"
                            as={Link}
                            color="secondary"
                        >
                            Eventos
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="Aquí puedes ver cuales son tus próximas clases."
                            startContent={icons.flash}
                            href="/help"
                            as={Link}
                            color="secondary"
                        >
                            Clases
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Inscribite a una materia para obtener una notificación siempre que haya una nueva clase"
                            startContent={icons.server}
                            href="/help"
                            as={Link}
                            color="secondary"
                        >
                            Inscribirse a materia
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Inscribite a una carrera para acceder a todas sus materias."
                            startContent={icons.user}
                            href="/help"
                            as={Link}
                            color="secondary"
                        >
                            Inscribirse a carrera
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive>
                    <Link href="/edificios" aria-current="page" color="secondary" >
                        Explorar edificios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/help">
                        Preguntas frecuentes
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Iniciar sesión</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="success" href="/register" variant="flat">
                        Registrarse
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <AvatarNavbar></AvatarNavbar>
            </NavbarContent>


            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
