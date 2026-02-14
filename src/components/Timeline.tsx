import { format, intervalToDuration, isAfter } from 'date-fns';
// import { ptBR } from 'date-fns/locale';
import { timeline_obj } from '../data/data';
import { useEffect, useState } from 'react';
import { ptBR } from 'date-fns/locale';

function Timeline() {
    const today = new Date()
    const hasStarted =  isAfter(today, timeline_obj.start)
    const wantedDate = hasStarted ? timeline_obj.end : timeline_obj.start
    const [timeRemaning, setTimeRemaning] = useState(()=>intervalToDuration({
        start: today,
        end: wantedDate,
    }))

    useEffect(function() {
        const cronometer = setInterval(() => {
            setTimeRemaning(
                intervalToDuration({ start: new Date(), end: wantedDate })
            );
        }, 1000);

        return () => clearInterval(cronometer);
    }, [])

    const weeks = Math.floor((timeRemaning?.days ?? 0) / 7);
    const days = (timeRemaning.days ?? 0) % 7;

    return (
        <div className='timeline'>
            <h2>Tempo restante até o {!hasStarted ? 'começo' : 'fim'} d{timeline_obj.event}</h2>
            <span>{weeks !== 0 ? `${weeks} semanas |` : null}  {days !== 0 ? `${days} dias |` : null} {timeRemaning.minutes !== 0 ? `${timeRemaning.minutes} minutos` : null}</span>
            <small>{hasStarted ? `Término em ${format(timeline_obj.end, 'dd/MM/yyyy', {locale: ptBR})}` : `Início em ${format(timeline_obj.start, 'dd/MM/yyyy', {locale: ptBR})}`}</small>
        </div>
    )
}

export default Timeline
