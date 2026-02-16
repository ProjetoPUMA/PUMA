import DownloadButton from "../components/DownloadButton";
import { documents_array } from "../data/data";

function DocumentsPage() {
  return (
    <>
      <h1 className="mb-5">Documentos importantes da Fatec</h1>
      <section>
        <ul className="documents__list flex flex-column align-items-center gap-6">
          {documents_array.map((doc, index) => (
            <li className="flex justify-content-between" key={index}>
              <div>
                <h2>{doc.name}</h2>
                <p>{doc.desc}</p>
              </div>
              <DownloadButton className="align-self-center" fileID={doc.fileID}>
                Baixar
              </DownloadButton>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default DocumentsPage;
