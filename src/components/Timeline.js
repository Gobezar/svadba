import iconGuests from '../assets/icon-guests.svg';
import iconBanquet from '../assets/icon-banquet.svg';
import iconCake from '../assets/icon-cake.svg';
import iconDisco from '../assets/icon-disco.svg';
import iconEnd from '../assets/icon-end.svg';

const ITEMS = [
  { src: iconGuests, title: 'СБОР ГОСТЕЙ', time: '17:00' },
  { src: iconBanquet, title: 'БАНКЕТ', time: '18:00' },
  { src: iconCake, title: 'ТОРТ', time: '21:00', extra: 'timeline__item--cake' },
  { src: iconDisco, title: 'ДИСКОТЕКА', time: '22:00' },
  { src: iconEnd, title: 'ЗАВЕРШЕНИЕ', time: '23:00' },
];

export default function Timeline() {
  return (
    <section className="invite__section timeline">
      <p className="invite__sans timeline__title">{`Наш план\nна этот замечательный день`}</p>
      <div className="timeline__grid">
        {ITEMS.map((item) => (
          <div key={item.title} className={`timeline__item ${item.extra || ''}`}>
            <img className="timeline__icon" src={item.src} alt="" width={56} height={56} />
            <p className="invite__sans timeline__label">
              <span className="timeline__name">{item.title}</span>
              <span className="timeline__time">{item.time}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
