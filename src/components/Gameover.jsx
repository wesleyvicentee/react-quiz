import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from '../img/welldone.svg'
import '../styles/components/gameover.scss'

const Gameover = () => {
    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div className="gameover">
          <h2>Fim do Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
          <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
          <img src={WellDone} alt="Fim de Quiz" />
          <button className="btn" onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
        </div>
    )
}

export default Gameover