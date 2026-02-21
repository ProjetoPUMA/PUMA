import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavLink } from "react-router-dom";

function Header() {
  const today = new Date();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="./puma header.svg" alt="" />
        </div>
        <div className="header__title">
          <img src="./title header.svg" alt="" />
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
            <NavLink to="/PUMA">Mural</NavLink>
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
