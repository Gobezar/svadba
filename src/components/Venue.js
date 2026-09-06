import venueBg from '../assets/venue-bg.png';

const MAP_URL =
  'https://yandex.ru/maps/org/territoriya_kofe/214368233985/?ll=46.053849%2C51.528172&z=17';

export default function Venue() {
  return (
    <section className="invite__section venue">
      <img className="venue__bg" src={venueBg} alt="" />
      <div className="venue__veil" />
      <h2 className="invite__script venue__title">Место проведения</h2>
      <p className="invite__sans venue__place">Территория Кофе</p>
      <p className="invite__sans venue__city">г. Саратов</p>
      <p className="invite__sans venue__addr">
        Московская ул., 9
        <br />
        2 этаж
      </p>
      <a className="invite__sans venue__map" href={MAP_URL} target="_blank" rel="noreferrer">
        показать на карте
      </a>
    </section>
  );
}
