import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import '../styles/components/option.scss'

const Option = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div onClick={() => selectOption()}
            className={`option ${quizState.answerSelected && option === answer ? 'correct' : ''}
                               ${quizState.answerSelected && option === answer ? 'correct' : ''}`} >
            <p>{option}</p>
        </div>
    )
}

export default Option