import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1>PUMA</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Mural</NavLink>
                    </li>
                    <li>
                        <NavLink to="/materias">Matérias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/documentos">Documentos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calendarios">Horários e Calendário</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
