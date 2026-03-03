import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function DefaultLayout() {
  return (
    <main className="dotted">
      <Header />
      <section className="content">
        <Outlet />
      </section>
      <footer className="footer">
        <div className="footer__img-container">
          <img
            src={`${import.meta.env.BASE_URL}colors_footer.svg`}
            alt="paleta de cores do site"
          />
        </div>
        <p>©Projeto P.U.M.A. 2026 | Todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default DefaultLayout;
