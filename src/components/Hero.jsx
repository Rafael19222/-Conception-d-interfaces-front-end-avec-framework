import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Bienvenue chez WebCraft Solutions</h1>
        <p className="hero__text">
          Découvre nos projets et nos formations en développement web.
        </p>
        <Link to="/inscription" className="btn hero__btn">
          S'inscrire à une formation
        </Link>
      </div>
    </section>
  );
}

export default Hero;
