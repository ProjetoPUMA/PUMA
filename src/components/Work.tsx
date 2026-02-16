import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import DownloadButton from "./DownloadButton";

function Work({
  date,
  subject,
  title,
  news,
  desc,
}: {
  date: Date;
  subject: string;
  title: string;
  news: boolean;
  desc: string;
}) {
  return (
    <li>
      {news && <p>NOVO!</p>}
      <div className="flex justify-content-between">
        <div>
          <h4>{format(date, "dd/MM/yyyy", { locale: ptBR })}</h4>
          <h3>{title}</h3>
        </div>
        <h4>{subject}</h4>
      </div>
      <div className="flex justify-content-between">
        <p>{desc}</p>
        <DownloadButton>Baixar Instruções</DownloadButton>
      </div>
    </li>
  );
}

export default Work;
