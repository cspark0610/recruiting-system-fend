import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <section className={style.footerSection}>
        <p>
          Copyright © 2022 <span id={style.companyName}>FullTimeForce</span> .
          Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
}
