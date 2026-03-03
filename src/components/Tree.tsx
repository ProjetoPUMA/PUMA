import { Link, useNavigate, useParams } from "react-router-dom";
import { getSubjectName } from "../utils/subjectsNameCorrection";
import { useEffect } from "react";

function Tree({
  material,
  activities,
}: {
  material?: boolean;
  activities?: boolean;
}) {
  const { materia } = useParams();
  const subjectName = getSubjectName(materia);

  const navigate = useNavigate();

  useEffect(() => {
    if (subjectName === "Matéria não encontrada") {
      navigate("/materia-inexistente", { replace: true });
    }
  }, [subjectName, navigate]);

  return (
    <h1>
      <Link to="/PUMA/materias">MATÉRIAS</Link>
      &gt;&gt;
      {!material && !activities ? (
        `${subjectName}`
      ) : (
        <Link to={`/PUMA/materias/mural/${materia}`}>{subjectName}</Link>
      )}
      {material ? `>> MATERIAL` : activities ? ">> ATIVIDADES" : null}
    </h1>
  );
}

export default Tree;
