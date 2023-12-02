import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >

            <NavbarContent className="sm:hidden pr-3 items-center" justify="start">
                <NavbarBrand>
                    <div style={{ maxWidth: "200px" }}>
                        <Link color="secondary" href="/">
                            <img
                                src="../src/images/logo3.png"
                                alt="logo3"
                                style={{ maxWidth: "100%", maxHeight: "70px" }}
                            />
                        </Link>
                    </div>
                </NavbarBrand>
            </NavbarContent>
            
            <NavbarContent className="hidden sm:flex gap-4 items-center" justify="start">
                <NavbarBrand>
                    <div style={{ maxWidth: "200px" }}>
                        <Link color="secondary" href="/">
                            <img
                                src="../src/images/logo3.png"
                                alt="logo3"
                                style={{ maxWidth: "100%", maxHeight: "70px" }}
                            />
                        </Link>
                    </div>
                </NavbarBrand>

                <NavbarItem isActive>
                    <Link href="/edificios" aria-current="page" color="secondary">
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
                    <Link href="https://uncaus.edu.ar/">Nuestra universidad</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="success" href="/" variant="flat">
                        Descargar Explore UNCAus
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
