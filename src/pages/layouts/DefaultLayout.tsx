import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

function DefaultLayout() {
    return (
        <main>
           <Header />
           <section className="content">
                <Outlet />
           </section> 
           <footer className="footer">©PUMA 2026 | Todos os direitos reservados</footer>
        </main>
    )
}

export default DefaultLayout
