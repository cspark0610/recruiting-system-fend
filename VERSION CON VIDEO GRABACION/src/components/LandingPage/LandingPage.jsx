import { useNavigate } from 'react-router-dom';
import logo from '../../assets/company-logo.png';
import style from './LandingPage.module.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={style.mainContainer}>
      <img src={logo} alt="fulltimeforce logo" />
      <section className={style.info}>
        <p>
          <strong>Welcome to the next phase of the selection process!</strong>
        </p>
        <p>In this phase your oral level of English will be measured</p>
      </section>
      <button
        className={style.nextBtn}
        onClick={() => navigate('/info-upload')}
      >
        Get Started
      </button>
    </div>
  );
}
