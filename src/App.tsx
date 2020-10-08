import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
  QuestionSection,
  HeadTitle,
  StyledImg,
  FLexDiv,
  Error,
  ErrorText
} from './styles'
import Loader from 'react-loader-spinner'
import QuizImg from './assests/images/Quiz.jpg'
import QuestionBody from './components/Question';
import {
  // arr,
  AppProps
} from './components/Question/interfaces/QuestionInterface'
import {
  getCorrectAnswers,
  getQuestions,
  setQuestionNumber,
  // setAnswers
} from './modules/action';
import {
  ArrProps,
  selectedAnswerProps
} from './modules/interfaces'


const {
  Fragment,
  // useState,
  useCallback
} = React


const App: React.FC<AppProps | any> = ({
  selectedAnswers,
  questionNumber,
  questions,
  loading,
  setQuestionNumber,
  // setAnswers,
  getQuestions,
  checkCorrectAnswers,
  finished
}): JSX.Element => {
  console.log("selecReducer", loading)

  // const [questionNumber, setQuestionNumber] = useState<number>(1)
  // const [selectedAnswers, setAnswers] = useState<string[]>([])

  useEffect(() => {
    getQuestions()
  }, [getQuestions, questions])

  const skipQuestion = useCallback((id: number) => {
    if (id === questions.length) {
      checkCorrectAnswers(selectedAnswers)
    }
    else
      setQuestionNumber(id + 1)
  }, [
    setQuestionNumber,
    questions.length,
    checkCorrectAnswers,
    selectedAnswers
  ])

  return (
    <Fragment>
      <QuestionSection>
        <FLexDiv>
          <HeadTitle>
            now You must get in quiz
     </HeadTitle>
          <StyledImg src={QuizImg} />
        </FLexDiv>
      </QuestionSection >
      {Array.isArray(questions) && questions.length > 0 && !finished ?
        <Fragment>
          {questions.map((question: ArrProps) =>
            <QuestionBody
              id={
                questionNumber === 1 ? questions[0].id
                  : questionNumber === 2 ? questions[1].id
                    : questionNumber === 3 ? questions[2].id
                      : questionNumber === 4 && questions[3].id
              }
              question={
                questionNumber === 1 ? questions[0].question
                  : questionNumber === 2 ? questions[1].question
                    : questionNumber === 3 ? questions[2].question
                      : questionNumber === 4 && questions[3].question}
              answers={
                questionNumber === 1 ? questions[0].answers
                  : questionNumber === 2 ? questions[1].answers
                    : questionNumber === 3 ? questions[2].answers
                      : questionNumber === 4 && questions[3].answers
              }
              // value={questions[0].value}
              setQuestionNumber={skipQuestion}
            />


          )}
        </Fragment> : finished ?
          <Error>
            <ErrorText>Thanks for you</ErrorText>
          </Error> : loading && <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
      }

    </Fragment>

  );
}

const mapDispatchToProps = (dispatch: any) => ({
  setQuestionNumber: (id: number) => dispatch(setQuestionNumber(id)),
  // setAnswers: (id: number, item: string) => dispatch(setAnswers(id, item)),
  getQuestions: () => dispatch(getQuestions()),
  checkCorrectAnswers: (selectedAnswers: selectedAnswerProps) => dispatch(getCorrectAnswers(selectedAnswers))
})

const mapstateToProps = (state: any) => {
  const { rootReducer } = state

  return {
    ...rootReducer
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(App)



