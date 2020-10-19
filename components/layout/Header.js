import React from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Buscar />
          <Navegacion />
        </div>
        <div>
          <p>Hola: Javi</p>
          <button type="button">Cerrar Sesión</button>

          <Link href="/">
            <a>Login</a>
          </Link>
          <Link href="/">
            <a>Crear Cuenta</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
