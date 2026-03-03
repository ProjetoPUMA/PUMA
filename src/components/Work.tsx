import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import DownloadButton from "./DownloadButton";

function Work({
  date,
  hasDate,
  subject,
  title,
  news,
  desc,
  hasInstructions,
  fileID,
}: {
  date: Date;
  hasDate?: boolean;
  subject: string;
  title: string;
  news: boolean;
  desc: string;
  hasInstructions: boolean;
  fileID?: string;
}) {
  return (
    <li>
      {news && <p>NOVO!</p>}
      <div className="flex justify-content-between works__list--header">
        <div>
          <h4>
            {!hasDate ? "Sem data" : format(date, "dd/MM", { locale: ptBR })}
          </h4>
          <h3>{title}</h3>
        </div>
        <span>{subject}</span>
      </div>
      <div className="flex  works__list--content">
        <p className="works__desc">{desc}</p>
        {hasInstructions && (
          <DownloadButton fileID={fileID}>Baixar Instruções</DownloadButton>
        )}
      </div>
    </li>
  );
}

export default Work;
