import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function Modal({data, tests, setState}: {data: { id: number; due_date: Date; subject: string; news: boolean; desc?: string; content?: string[] }[], tests?: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>}) {

    return (
            <div className="modal__background">
                <div className="modal__container">
                    <button onClick={()=> setState(false)} className="modal__close">X</button>
                    <div className="modal__title mb-5">
                        <h1>Todas as {tests ? 'Provas' : 'Tarefas'}</h1>
                        <p>Não hove nenhuma atualização desde a última checagem.</p>
                    </div>
                    <div className="modal__body">
                        <ul className='flex flex-column gap-3'>
                            {data.slice().sort((a,b) => Number(b.news) - Number(a.news)).map((item) => (<li key={item.id}>
                                <h4>{format(item.due_date, 'dd/MM/yyyy', {locale: ptBR})}</h4>
                                <h2>{item.subject}</h2>
                                {tests ? 
                                    <ul className='mb-4'>
                                        {item.content?.map((subject: string, index: number)=> <li key={index}>{subject}</li>)}
                                    </ul>
                                : <p className='mb-4'>{item.desc}</p>}
                                <div className={`flex ${item.news ? 'justify-content-between' : 'justify-content-end'}`}>
                                    {item.news && <span>NOVO!</span>}
                                    <button className='align-self-end'>Acessar {tests ? 'conteúdo' : 'enunciado'}</button>
                                </div>
                            </li>))}
                        </ul>
                    </div>
                    <div className="modal__footer">
                        <button onClick={()=> setState(false)}>voltar</button>
                    </div>
                </div>
            </div>
      
    )
}

export default Modal
