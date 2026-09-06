import swan from '../assets/lace-details.png';

export default function Details() {
  return (
    <section className="invite__section details">
      <div className="details__swans" aria-hidden="true">
        <img className="details__swan details__swan--left" src={swan} alt="" />
        <img className="details__swan details__swan--right" src={swan} alt="" />
      </div>
      <h2 className="invite__script details__title">Детали</h2>
      <div className="details__block">
        <p className="invite__sans details__h">ПОДАРКИ</p>
        <p className="invite__sans details__p">
          Если вы желаете поздравить нас по случаю праздника, мы будем благодарны денежным подаркам
          и обещаем найти им самое лучшее применение
        </p>
      </div>
      <div className="details__block">
        <p className="invite__sans details__h">АТМОСФЕРА</p>
        <p className="invite__sans details__p">
          Будем благодарны, если вы воздержитесь от криков «Горько» на празднике. Мы точно не
          оставим вас без поцелуев, но хотим еще успевать веселиться вместе с вами и вкусно кушать!
        </p>
      </div>
      <div className="details__block">
        <p className="invite__sans details__h">ДЕТИ</p>
        <p className="invite__sans details__p">
          Мы будем рады разделить этот праздник даже с самыми маленькими членами наших семей, но
          просим учесть что под конец вечера на дискотеке будут включаться треки не для детских
          ушей)
        </p>
      </div>
    </section>
  );
}
