import DownloadButton from "../components/DownloadButton";
import { documents_array } from "../data/data";

function DocumentsPage() {
  return (
    <section>
      <ul className="documents__list flex flex-column align-items-center gap-4">
        {documents_array.map((doc, index) => (
          <li
            className={`flex flex-column justify-content-between documents__container documents__container--${String(doc.id)}`}
            key={index}
          >
            <div className="documents__title align-self-end">
              <span>arquivo_0{doc.id}</span>
            </div>
            <div className="documents__body">
              <div className="flex justify-content-between">
                <h2>{doc.name}</h2>
                <DownloadButton
                  className="align-self-center"
                  fileID={doc.fileID}
                >
                  Baixar
                </DownloadButton>
              </div>
              <div className="flex documents__code">
                <img src="bar_code.svg" alt="código de barras" />
                <img src="bar_code.svg" alt="código de barras" />
              </div>
              <p>{doc.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DocumentsPage;
