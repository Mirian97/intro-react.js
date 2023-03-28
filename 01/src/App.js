import './App.css';
import profile from "./assets/gabriela.jpg";
import btnPrev from "./assets/icon-prev.svg"
import btnNext from "./assets/icon-next.svg"

function App() {
  return (
    <div className="content-wrapper">
      <div className="text-wrapper">
        <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
          consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
          brilhante!”</p>
        <div className="author__content-wrapper">
          <div className="author__name">Gabriela da Silva</div>
          <div className="author__title">Desenvolvedora Fullstack</div>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel__img-wrapper">
          <img src={profile} alt="bootcamp graduate" className="carousel__img" />
        </div>
        <div className="carousel__btn-wrapper">
          <button id="btn-prev" className="btn btn--previous">
            <img src={btnPrev} alt="previous button" />
          </button>
          <button id="btn-next" className="btn btn--next">
            <img src={btnNext} alt="next button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
