import classNames from "classnames";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const today = new Date();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="puma_header.svg" alt="" />
        </div>
        <div className="header__title">
          <img src="title_header.svg" alt="" />
        </div>
        <div className="header__date">
          <span>Data:</span>
          <h2>{format(today, "dd/MM", { locale: ptBR })}</h2>
        </div>
      </div>
      <h2 className="header__name">
        PLATAFORMA UNIFICADA DE MATERIAIS ACADÊMICOS
      </h2>
      <nav className="header__nav">
        <ul>
          <li>
            <Link
              className={classNames({
                active:
                  location.pathname !== "/PUMA/materias" &&
                  location.pathname !== "/PUMA/calendarios" &&
                  location.pathname !== "/PUMA/documentos",
              })}
              to="/PUMA"
            >
              Mural
            </Link>
          </li>
          <li>
            <NavLink to="/PUMA/materias">Matérias</NavLink>
          </li>
          <li>
            <NavLink to="/PUMA/calendarios">Horários e Calendário</NavLink>
          </li>
          <li>
            <NavLink to="/PUMA/documentos">Documentos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
