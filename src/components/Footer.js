import lace from '../assets/footer-lace.png';

export default function Footer() {
  return (
    <footer className="invite__section footer">
      <img className="footer__lace" src={lace} alt="" />
      <p className="invite__sans footer__text">
        Ваше тепло и участие сделают нашу свадьбу ещё светлее!
      </p>
      <p className="invite__script footer__names">Андрей и Юлия</p>
    </footer>
  );
}
