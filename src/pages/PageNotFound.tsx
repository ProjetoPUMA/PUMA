import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="dotted">
      <div className="not-found not-found__container">
        <div className="not-found__img-container">
          <img src="colors_footer.svg" alt="puma confuso" />
        </div>
        <div className="not-found__header">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
        </div>
        <div className="not-found__content">
          <div className="not-found__content-img">
            <img src="puma_resting.svg" alt="puma confuso" />
          </div>
          <p>
            Lamentamos o ocorrido, por favor, clique no botão abaixo para voltar
            ao site!
          </p>
          <Button color="blue" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </div>
        <div className="not-found__footer">
          <p>©Projeto P.U.M.A. 2026 | Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
