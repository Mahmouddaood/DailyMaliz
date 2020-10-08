import React from 'react'
import { connect } from 'react-redux'
import { usePrevious } from '../../services/usePrevious'
import QuestionProps from './interfaces/QuestionInterface'
import {
    setAnswers
} from '../../modules/action'
import {
    AnsButton,
    AnswerSection,
    Answer,
    InnerRadio,
    OneAnswer,
    OuterRadio,
    Question,
    QuestionHeader,
    QuestionDiv
} from '../../styles'
const {
    useMemo,
    useCallback,
    memo
} = React

const QuestionBody: React.FC<QuestionProps> = ({
    id,
    answers,
    question,
    // value,
    setQuestionNumber,
    editAnswers,
    selectedAnswers,
    selectedAnswer
}): JSX.Element => {
    // console.log("selected", selectedAnswers)
    const prevAnswer = usePrevious(selectedAnswer)
    const answerChanged = prevAnswer !== selectedAnswer
    const updateAnswers = useCallback((item: string) => {
        editAnswers(id, item)
    }, [
        editAnswers,
        id
    ])
    const renderItem = useCallback((item: string, idx: number) => {
        let keyName: any = `answer${id}`
        return <OneAnswer onClick={() => updateAnswers(item)} key={idx} >
            <OuterRadio style={{
            }} onClick={() => updateAnswers(item)}>
                {selectedAnswers[keyName] === item && <InnerRadio />}
            </OuterRadio>
            <Answer>{item}</Answer>
        </OneAnswer>
    }, [
        id,
        selectedAnswers,
        updateAnswers
    ])

    const renderAnswers = useMemo(() => answers.map(renderItem), [
        answers,
        renderItem,
    ])

    return <QuestionDiv>
        <QuestionHeader>
            <Question>{question}</Question>
            <AnsButton
                onClick={() => setQuestionNumber(id)}
            >{id === 4 ? "get Final Result" : "answer"}</AnsButton>
        </QuestionHeader>
        <AnswerSection>
            {renderAnswers}
        </AnswerSection>
    </QuestionDiv>

}

const mapDispatchToProps = (dispatch: any) => ({
    editAnswers: (id: number, item: string) => dispatch(setAnswers(id, item)),
})

const mapstateToProps = (state: any) => {
    const { rootReducer } = state
    const {
        selectedAnswers,
    } = rootReducer
    return {
        selectedAnswers
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(memo(QuestionBody))

