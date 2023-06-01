import Welcome from './components/Welcome';
import Questions from './components/Questions';
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import './styles/components/app.scss';
import Gameover from './components/Gameover';

function App () {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({ type: 'REORDER_QUESTIONS' });
    }, []);

    return (
        <div className='app'>
            <h1>Quiz de Programação</h1>
            {quizState.gameStage === 'Start' && <Welcome />}
            {quizState.gameStage === 'Playing' && <Questions />}
            {quizState.gameStage === 'End' && <Gameover />}
        </div>
    )
};

export default App;
