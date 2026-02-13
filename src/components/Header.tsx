import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1>PUMA</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/PUMA">Mural</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PUMA/materias">Matérias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PUMA/documentos">Documentos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PUMA/calendarios">Horários e Calendário</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
