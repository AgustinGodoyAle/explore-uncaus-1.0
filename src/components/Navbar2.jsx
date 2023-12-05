import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo3 from "/images/logo3.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-between items-center" justify="start">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* NavbarBrand for mobile
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <div style={{ maxWidth: "200px" }}>
              <Link color="secondary" href="/">
                <img
                  src={logo3}
                  alt="logo3"
                  style={{ maxWidth: "100%", maxHeight: "70px" }}
                />
              </Link>
            </div>
          </NavbarBrand>
        </NavbarContent>
      */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/edificios" aria-current="page" color="secondary">
              Explorar edificios
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="/help">
              Preguntas frecuentes
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="https://uncaus.edu.ar/">Nuestra universidad</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button as={Link} color="success" href="/" variant="flat">
              Descargar App
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>

        {/* NavbarBrand for desktop */}
        {!isMenuOpen && (
          <NavbarBrand>
            <div style={{ maxWidth: "200px" }}>
              <Link color="secondary" href="/">
                <img
                  src={logo3}
                  alt="logo3"
                  style={{ maxWidth: "100%", maxHeight: "70px" }}
                />
              </Link>
            </div>
          </NavbarBrand>
        )}

        <NavbarContent className="hidden sm:flex gap-4 items-center">
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
          <NavbarItem>
            <Link href="https://uncaus.edu.ar/">Nuestra universidad</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="success" href="https://drive.google.com/file/d/1g3o3tPQ1pQv2oLA1ZsHiPEHX8Z0TlJwq/view?usp=drive_link" variant="flat">
              Descargar App
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
