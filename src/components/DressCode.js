import dressBg from '../assets/dresscode-bg.png';

const SWATCHES = [
  { color: '#d8ccb4', name: 'беж' },
  { color: '#c4c4a0', name: 'оливка' },
  { color: '#75743b', name: 'мох' },
  { color: '#6e0927', name: 'бордо' },
  { color: '#501213', name: 'марсала' },
];

export default function DressCode() {
  return (
    <section className="invite__section dress">
      <img className="dress__bg" src={dressBg} alt="" />
      <div className="dress__veil" />
      <div>
        <h2 className="invite__script dress__title">Дресс-код</h2>
        <p className="invite__sans dress__text">
          Мы очень ждём и с удовольствием готовимся к нашему незабываемому дню! Поддержите нас
          вашими улыбками и объятиями, а также красивыми нарядами в палитре торжества
        </p>
      </div>
      <div className="dress__swatches" aria-label="Палитра дресс-кода">
        {SWATCHES.map((s) => (
          <span
            key={s.name}
            className="dress__swatch"
            style={{ background: s.color }}
            title={s.name}
          />
        ))}
      </div>
    </section>
  );
}
