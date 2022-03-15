import { useNavigate } from 'react-router-dom';
import style from './404.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <section className={style.imgSection}>
        <img
          src={require('../assets/company-logo-small.png')}
          alt="fulltimeforce-logo"
          id={style.companyLogo}
        />
      </section>
      <main className={style.notFoundContainer}>
        <section>
          <img src={require('../assets/illustration.png')} alt="illustration" />
        </section>
        <section className={style.info}>
          <h1>404</h1>
          <h2>ERROR</h2>
          <p>
            Unfortunately, this page does <br /> not exist or is disabled
          </p>
          <p>
            We invite you to use the upper <br /> menu or return to the main
            page{' '}
          </p>
          <button className={style.homeBtn} onClick={() => navigate('/')}>
            Homepage
          </button>
        </section>
      </main>
    </div>
  );
}
