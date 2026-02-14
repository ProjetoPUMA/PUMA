import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function HomeWork({date, subject, news, desc}: {date: Date, subject: string, news: boolean, desc: string}) {
  
    const formatedDate = format(date, 'dd/MM/yyyy', {locale: ptBR})


    return (
        <li className='flex flex-column gap-3 homework'>
            <div>
                <h4>{formatedDate}</h4>
                <h3>{subject}</h3>
            </div>
            <p>{desc}</p>
            <a href="#">Acessar Enunciado</a>
            {news && 'NOVO!'}
        </li>
    )
}

export default HomeWork
