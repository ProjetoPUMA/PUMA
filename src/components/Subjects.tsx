import { Link } from "react-router-dom"

function Subjects({teacher, days, subject, desc, news, link}: {teacher: string, days: string[], subject: string, desc: string, news: boolean, link?: string}) {

    console.log(link)

    return (
        <li>
            <div className="subjects__header flex flex-column gap-1">
                <div className="flex w-100 justify-content-between">
                    <h4>{teacher}</h4>
                    <h4>
                        {days[0]} {days.length > 1 ? `| ${days[1]}` : ''}
                    </h4>
                </div>
                <h2>{subject}</h2>  
            </div>
            <div className="subjects__desc">
                <div className={`flex justify-content-between align-items-center ${news ? 'mb-3' : ''}`}>
                    <p className='subjects__text '>{desc}</p>
                    <Link target="_blank" to={link ?? ''}>Acessar conteúdo</Link>
                </div>
                {news && <p className="flex align-items-center gap-1"><i className="bx bx-alert-circle" /> Amigos, temos atualizações sobre essa matéria. Fiquem atentos ao mural!</p>}
            </div>
        </li>
    )
}

export default Subjects
