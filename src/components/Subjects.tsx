function Subjects({teacher, days, subject, desc, news}: {teacher: string, days: string[], subject: string, desc: string, news: boolean}) {

    return (
        <li>
            <div>
                <h4>{teacher}</h4>
                <h4>
                    {days[0]} {days.length > 1 ? `| ${days[1]}` : ''}
                </h4>
            </div>
            <h2>{subject}</h2>
            <p>{desc}</p>
            {news && <p>Amigos, temos atualizações sobre essa matéria. Fiquem atentos ao mural!</p>}
        </li>
    )
}

export default Subjects
