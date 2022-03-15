import style from '../LandingPage/LandingPage.module.css';

export default function InfoUploaded() {
  return (
    <div className={style.mainContainer}>
      <img
        src={require('../../assets/company-logo.png')}
        alt="fulltimeforce logo"
      />
      <section className={style.info}>
        <p style={{ fontSize: '1.4rem', marginBottom: '20px' }}>
          <strong>Your application has been sent!</strong>
        </p>
        <p>
          We appreciate your time and interest so <br /> we will be
          communicating with you
        </p>
      </section>
    </div>
  );
}
