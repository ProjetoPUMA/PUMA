import type { ReactNode } from "react";
import { Link } from "react-router-dom";

function DownloadButton({fileID, children}: {fileID?: string, children: ReactNode}) {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileID}`;

    return (
        <Link to={downloadUrl} className='align-self-end'>{children}</Link>
    )
}

export default DownloadButton
