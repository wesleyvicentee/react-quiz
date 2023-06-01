import Option from './Option';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import '../styles/components/questions.scss';
import '../styles/components/button.scss';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: {answer: currentQuestion.answer, option }
        })
    }

    return (
        <div className='questions-container'>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button className='btn' onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Confirmar</button>
            )}
        </div>
    )
}

export default Questions