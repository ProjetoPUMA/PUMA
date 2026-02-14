import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import DownloadButton from './DownloadButton';

function Modal({data, tests, setState, works}: {data: { id: number; due_date: Date; subject: string; news: boolean; desc?: string; content?: string[]; hasInstructions?: boolean; fileID?: string; title?: string }[], tests?: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>, works?: boolean}) {
    console.log(data.filter((item)=>item.news))

    return (
            <div className="modal__background">
                <div className="modal__container">
                    <button onClick={()=> setState(false)} className="modal__close">X</button>
                    <div className="modal__title mb-5">
                        <h1>Todas {tests ? 'as Provas' : works ? 'os Trabalhos' : 'as Tarefas'}</h1>
                        <p>{data.filter((item)=>item.news).length !== 0 ? 'Um novo item foi adicionado a lista. Fique atento!' : 'Não hove nenhuma atualização desde a última checagem.'}</p>
                    </div>
                    <div className="modal__body">
                        {data.length !== 0 ? <ul className='flex flex-column gap-3'>
                            {data.slice().sort((a,b) => Number(b.news) - Number(a.news)).map((item) => (<li key={item.id}>
                                <h4>{format(item.due_date, 'dd/MM/yyyy', {locale: ptBR})}</h4>
                                {!works ? <h2>{item.subject}</h2> 
                                :   <>
                                        <h3>{item.subject}</h3>
                                        <h2>{item.title}</h2>
                                    </>
                                }
                                
                                {tests ? 
                                    (<ul className='mb-4'>
                                        {item.content?.map((subject: string, index: number)=> <li key={index}>{subject}</li>)}
                                    </ul>)
                                : <p className='mb-4'>{item.desc}</p>}
                                <div className={`flex ${item.news ? 'justify-content-between' : 'justify-content-end'}`}>
                                    {item.news && <span>NOVO!</span>}
                                    {item.hasInstructions && <DownloadButton fileID={item.fileID ?? undefined}>Baixar {tests ? 'conteúdo' : works ? 'instruções' : 'enunciado'}</DownloadButton>}
                                </div>
                            </li>))}
                        </ul> : <p>Não temos nenhuma {tests ? 'prova' : 'tarefa'} marcada ainda!</p>}
                    </div>
                    <div className="modal__footer">
                        <button onClick={()=> setState(false)}>voltar</button>
                    </div>
                </div>
            </div>
      
    )
}

export default Modal
