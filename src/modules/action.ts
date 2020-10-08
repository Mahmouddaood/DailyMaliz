import {
    SET_QUESTION_NUMBER,
    GET_QUESTIONS,
    GET_QUESTIONS_FINISHED,
    SET_ANSWERS,
    GET_CORRECT_ANSWERS
} from './type'
import {
    ArrProps,
    Action,
    selectedAnswerProps
} from './interfaces'

export const getQuestions = (): Action => ({
    type: GET_QUESTIONS
})

export const getQuestionsFinsihed = (items: ArrProps[]): Action => ({
    type: GET_QUESTIONS_FINISHED,
    payload: items
})


export const setQuestionNumber = (id: number): Action => ({
    type: SET_QUESTION_NUMBER,
    payload: id
})

export const setAnswers = (id: number, item: string): Action => ({
    type: SET_ANSWERS,
    payload: {
        id,
        item
    }
})

export const getCorrectAnswers = (selectedAnswers: selectedAnswerProps): Action => ({
    type: GET_CORRECT_ANSWERS,
    payload: selectedAnswers
})