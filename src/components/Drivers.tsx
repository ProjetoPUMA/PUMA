import { Link } from "react-router-dom";
import { drivers } from "../data/data";

function Drivers() {
  return (
    <div className="drivers">
      <h1>DRIVE PARA ENVIO DAS ATIVIDADES</h1>
      <ul>
        {drivers.map((drive, index) => (
          <li key={index}>
            <h2>{drive.subject}</h2>{" "}
            <Link to={drive.link} target="_blank">
              • {drive.desc}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Drivers;
