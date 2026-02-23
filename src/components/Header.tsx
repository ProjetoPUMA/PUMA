import classNames from "classnames";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Header() {
  const today = new Date();
  const location = useLocation();
  const isPhone = useMediaQuery({ query: "(max-width:  42.8125em)" });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const todayWeekday = format(today, "EEE", { locale: ptBR });

  return (
    <header className="header">
      <div className="header__container">
        {!isPhone ? (
          <div className="header__title-container">
            <div className="header__logo">
              <img src="puma_header.svg" alt="puma" />
            </div>
            <div className="header__title">
              <img src="title_header.svg" alt="tótulo do site" />
            </div>
            <div className="header__date">
              <span>Data:</span>
              <h2>{format(today, "dd/MM", { locale: ptBR })}</h2>
            </div>
          </div>
        ) : (
          <div>
            <div className="header__title-container">
              <div className="header__logo">
                <img src="puma_header.svg" alt="puma" />
              </div>
              <div className="header__title">
                <img src="title_header.svg" alt="título do site" />
              </div>
              <div className="header__menu-container">
                <div
                  className="header__menu"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <i className="bx bx-menu-closer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isPhone ? (
        <>
          <h2 className="header__name">
            PLATAFORMA UNIFICADA DE MATERIAIS ACADÊMICOS
          </h2>
          <div className="header__date header__date--phone">
            <span>Data:</span>
            <h2>
              {todayWeekday}-feira,
              <span>{format(today, "dd/MM", { locale: ptBR })}</span>
            </h2>
          </div>
        </>
      ) : (
        <h2 className="header__name">
          PLATAFORMA UNIFICADA DE MATERIAIS ACADÊMICOS
        </h2>
      )}

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
              to="/PUMA/"
            >
              Mural
            </Link>
          </li>
          <li>
            <NavLink to="/PUMA/materias">Matérias</NavLink>
          </li>
          <li className="header__nav--calendar">
            <NavLink to="/PUMA/calendarios">Horários e Calendários</NavLink>
          </li>
          <li>
            <NavLink to="/PUMA/documentos">Documentos</NavLink>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="nav__container">
          <div>
            <div className="header__title-container">
              <div className="header__logo">
                <img src="puma_header.svg" alt="puma" />
              </div>
              <div className="header__title">
                <img src="puma_inverted.svg" alt="título do site" />
              </div>
              <div className="header__menu-container">
                <div
                  className="header__menu"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <i className="bx bx-x" />
                </div>
              </div>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link
                  className={classNames({
                    active:
                      location.pathname !== "/PUMA/materias" &&
                      location.pathname !== "/PUMA/calendarios" &&
                      location.pathname !== "/PUMA/documentos",
                  })}
                  to="/PUMA/"
                >
                  Mural
                </Link>
                <span>01</span>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <NavLink to="/PUMA/materias">Matérias</NavLink>
                <span>02</span>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <NavLink to="/PUMA/calendarios">Horários</NavLink>
                <span>03</span>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <NavLink to="/PUMA/documentos">Documentos</NavLink>
                <span>04</span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
