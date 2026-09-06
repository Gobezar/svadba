import { useState } from 'react';

const DRINKS = [
  'вино красное',
  'вино белое',
  'шампанское',
  'коньяк',
  'виски',
  'водка',
  'безалкогольные напитки',
  'свой вариант',
];

const ENDPOINT =
  process.env.REACT_APP_FORM_ENDPOINT ||
  'https://formsubmit.co/ajax/Rus642011@yandex.ru';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [companion, setCompanion] = useState('');
  const [attend, setAttend] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [customDrink, setCustomDrink] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const toggleDrink = (value) => {
    setDrinks((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!name.trim() || !attend) {
      setError('Укажите имя и сможете ли вы прийти.');
      return;
    }

    const payload = {
      _subject: 'RSVP — свадьба Юлии и Андрея',
      _template: 'table',
      _captcha: 'false',
      Имя: name.trim(),
      'С кем': companion.trim() || '—',
      Присутствие: attend,
      Напитки: drinks.join(', ') || '—',
      'Свой вариант': drinks.includes('свой вариант') ? customDrink.trim() : '',
    };

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      const message = String(result.message || '');
      if (/activation/i.test(message)) {
        setStatus('idle');
        setError(
          'На Rus642011@yandex.ru ушло письмо Activate Form. Откройте его, нажмите ссылку — и отправьте анкету ещё раз.'
        );
        return;
      }
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error('send failed');
      }
      setStatus('done');
    } catch {
      setStatus('idle');
      setError('Не получилось отправить. Попробуйте ещё раз.');
    }
  };

  if (status === 'done') {
    return (
      <section className="invite__section rsvp">
        <h2 className="invite__script rsvp__title">Вы придете?</h2>
        <p className="invite__sans rsvp__thanks">Спасибо, мы получили ваш ответ!</p>
      </section>
    );
  }

  return (
    <section className="invite__section rsvp">
      <div>
        <h2 className="invite__script rsvp__title">Вы придете?</h2>
        <p className="invite__sans rsvp__lead">
          Пожалуйста, подтвердите, сможете ли вы разделить с нами радость, ответив на несколько
          вопросов
        </p>
      </div>
      <form className="rsvp__form" onSubmit={onSubmit}>
        <label className="rsvp__field">
          <span className="invite__sans rsvp__label">Ваши имя и фамилия</span>
          <input
            className="invite__sans rsvp__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="rsvp__field">
          <span className="invite__sans rsvp__label">С кем вы будете?</span>
          <input
            className="invite__sans rsvp__input"
            value={companion}
            onChange={(e) => setCompanion(e.target.value)}
          />
        </label>
        <fieldset className="rsvp__field">
          <legend className="invite__sans rsvp__label">Планируете ли вы присутствовать?</legend>
          <div className="rsvp__options">
            <label className="invite__sans rsvp__choice">
              <input
                type="radio"
                name="attend"
                checked={attend === 'да, с удовольствием!'}
                onChange={() => setAttend('да, с удовольствием!')}
              />
              да, с удовольствием!
            </label>
            <label className="invite__sans rsvp__choice">
              <input
                type="radio"
                name="attend"
                checked={attend === 'к сожалению, не смогу'}
                onChange={() => setAttend('к сожалению, не смогу')}
              />
              к сожалению, не смогу
            </label>
          </div>
        </fieldset>
        <fieldset className="rsvp__field">
          <legend className="invite__sans rsvp__label">Ваши предпочтения по напиткам:</legend>
          <div className="rsvp__options">
            {DRINKS.map((drink) => (
              <label key={drink} className="invite__sans rsvp__choice">
                <input
                  type="checkbox"
                  checked={drinks.includes(drink)}
                  onChange={() => toggleDrink(drink)}
                />
                {drink}
              </label>
            ))}
            {drinks.includes('свой вариант') ? (
              <input
                className="invite__sans rsvp__custom"
                value={customDrink}
                onChange={(e) => setCustomDrink(e.target.value)}
                placeholder="напишите свой вариант"
              />
            ) : null}
          </div>
        </fieldset>
        {error ? <p className="invite__sans rsvp__error">{error}</p> : null}
        <button className="invite__sans rsvp__submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
        </button>
      </form>
    </section>
  );
}
