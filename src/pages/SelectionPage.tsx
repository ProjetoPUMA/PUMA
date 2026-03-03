import { Link, useParams } from "react-router-dom";
import Tree from "../components/Tree";

function SelectionPage() {
  const { materia } = useParams<{ materia: string }>();

  return (
    <>
      <Tree />
      <div className="flex gap-5">
        <Link to={`/PUMA/materias/material/${materia}`}>MATÉRIAS</Link>
        <Link to={`/PUMA/materias/atividades/${materia}`}>ATVIDADES</Link>
      </div>
    </>
  );
}

export default SelectionPage;
