import Quiz from '../img/quiz.svg';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import '../styles/components/welcome.scss';
import '../styles/components/button.scss';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar</p>
            <button className='btn' onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Iniciar</button>
            <img src={Quiz} alt="Início do Quiz" />
        </div>
    )
};

export default Welcome;