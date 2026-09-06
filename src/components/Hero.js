import envelope from '../assets/envelope.png';

export default function Hero() {
  return (
    <section className="invite__section hero">
      <div className="hero__envelope">
        <img className="hero__envelope-img" src={envelope} alt="" />
        <p className="invite__sans hero__card-text">
          {`Это приглашение\nна нашу крутецкую свадьбу!`}
        </p>
      </div>
      <p className="invite__script hero__names">
        Юлия <span className="hero__amp">&</span> Андрей
      </p>
    </section>
  );
}
