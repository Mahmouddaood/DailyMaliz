import { usePrevious } from '../services/usePrevious'
import {
    StateInterface,
    Action
} from './interfaces'
import {
    SET_QUESTION_NUMBER,
    GET_QUESTIONS,
    GET_QUESTIONS_FINISHED,
    SET_ANSWERS, GET_CORRECT_ANSWERS
} from './type'


const initialStates: StateInterface = {
    selectedAnswers: {
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    },
    questionNumber: 1,
    questions: [],
    loading: false,
    finished: false
}


export default (state: StateInterface | any, action: Action | any): StateInterface | any => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                loading: true
            };
        case GET_QUESTIONS_FINISHED:
            const questions = action.payload
            return {
                ...state,
                loading: false,
                questions
            };
        case SET_QUESTION_NUMBER:
            const id = action.payload
            return {
                ...state,
                questionNumber: id
            };
        case SET_ANSWERS:
            const {
                id: question,
                item
            } = action.payload
            const keyName = `answer${question}`
            const finalState = {
                ...state,
                selectedAnswers: {
                    ...state.selectedAnswers,
                    [keyName]: item
                }
            }
            console.log("finalState", finalState)
            return finalState;
        case GET_CORRECT_ANSWERS:
            return {
                ...state,
                finished: true,

            }
        default:
            return initialStates
    }
}