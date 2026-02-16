import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import DownloadButton from './DownloadButton';
import classNames from 'classnames';

function HomeWork({date, subject, news, desc, works, content, hasInstructions, fileID}: {date: Date, subject: string, news: boolean, desc?: string, works?: boolean, content?: string[], hasInstructions: boolean, fileID?: string}) {
  
    const formatedDate = format(date, 'dd/MM/yyyy', {locale: ptBR})
    console.log(news)

    return (
        <li className={classNames('flex flex-column gap-3 homework', {'homework--news': news, 'homework--attention': isToday(date)})}>
            <div>
                <h4>{formatedDate}</h4>
                <h3>{subject}</h3>
            </div>
            {!works ? <p>{desc}</p> : 
            <ul>
                {content?.map((item, index)=> <li className='flex flex-column' key={index}>{item}</li>)}    
            </ul>}
            {isToday(date) && <small>Expira hoje, certifique-se de entrega-la ao professor.</small>}
            {hasInstructions && <DownloadButton fileID={fileID}>Baixar {works ? 'conteúdo' : 'enunciado'}</DownloadButton>}
        </li>
    )
}

export default HomeWork
