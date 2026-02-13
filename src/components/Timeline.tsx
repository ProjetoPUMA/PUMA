import { intervalToDuration, isAfter } from 'date-fns';
// import { ptBR } from 'date-fns/locale';
import { timeline_obj } from '../data/data';
import { useEffect, useState } from 'react';

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
        <div>
            <h2>Tempo restante até o {!hasStarted ? 'começo' : 'fim'} d{timeline_obj.event}</h2>
            <span>{weeks} semanas | {days !== 0 ? `${days} dias |` : null} {timeRemaning.minutes} minutos</span>
        </div>
    )
}

export default Timeline
