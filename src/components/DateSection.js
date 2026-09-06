import heart from '../assets/heart.svg';
import lace from '../assets/date-lace.jpg';

const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const DAYS = [
  { n: '28', muted: true },
  { n: '29', muted: true },
  { n: '30', muted: true },
  { n: '1' },
  { n: '2', wedding: true },
  { n: '3' },
  { n: '4' },
];

export default function DateSection() {
  return (
    <section className="invite__section date">
      <img className="date__lace" src={lace} alt="" />
      <p className="invite__sans date__kicker">Та самая дата</p>
      <p className="invite__script date__month">Октябрь</p>
      <div className="invite__sans date__week">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="date__grid">
        {DAYS.map((d) => (
          <span
            key={d.n}
            className={`invite__sans date__cell${d.muted ? ' date__cell--muted' : ''}${d.wedding ? ' date__cell--wedding' : ''}`}
          >
            {d.wedding ? (
              <img className="date__heart" src={heart} alt="" width={32} height={32} />
            ) : null}
            <span className="date__num">{d.n}</span>
          </span>
        ))}
      </div>
      <p className="invite__sans date__note">
        Приглашаем Вас разделить с нами этот радостный день, в который создадим новую семью! Мы
        соединим наши сердца и судьбы в окружении самых близких людей, а еще очень весело это
        отпразднуем!!
      </p>
    </section>
  );
}
