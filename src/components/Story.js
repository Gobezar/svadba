import photoMain from '../assets/photo-main.png';
import cluster from '../assets/story-cluster.png';

export default function Story() {
  return (
    <section className="invite__section story">
      <p className="invite__sans story__lead">
        <span className="story__lead-date">22 августа </span>
        <span className="story__lead-yes">я сказала да...</span>
      </p>
      <img className="story__photo" src={photoMain} alt="Юлия и Андрей" />
      <p className="invite__sans story__invite">
        и вот мы уже готовы позвать
        <br />
        Вас отмечать
        <br />
        с нами праздник
        <br />
        нашей любви!
      </p>
      <img className="story__cluster" src={cluster} alt="" />
    </section>
  );
}
