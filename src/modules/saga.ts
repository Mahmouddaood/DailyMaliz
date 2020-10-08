
import { takeLatest, all, put, select } from "redux-saga/effects";
import { notification } from 'antd'
import {
    getQuestionsFinsihed
} from "./action";
import {
    arr,
    correctAnswers,
    selectedAnswerProps
} from './interfaces'
import {
    GET_QUESTIONS,
    GET_CORRECT_ANSWERS
} from './type'

export function* requestQuestions() {
    try {
        yield put(getQuestionsFinsihed(arr));
    } catch (error) {
        console.log("error is =>", error);
    }
}

export function* requestCorrectAnswers(selectedAnswers: selectedAnswerProps | any) {
    try {
        const { selectedAnswers: selected } = yield select(({ rootReducer }) => rootReducer)
        const { payload: selectedItems } = selectedAnswers
        let arr: any = []
        Object.keys(correctAnswers).forEach((ci: string) => {
            if (correctAnswers[ci] !== selectedItems[ci]) {
                arr = [...arr, selectedItems[ci]]
            }
        })
        notification.open({
            message: `thanks for completing Quiz , 
            you got answered ${Object.keys(correctAnswers).length - arr.length} questions
            error answers were ${[...arr]}
            `,
            description: `thanks for completeing quiz , there is ${arr.length > 0 ? `${arr.length}` : `No`} error`,
            style: {
                backgroundColor: "red",
                color: "#fff"
            }
        })
    } catch (error) {
        console.log("error is =>", error);
    }
}


export default function* mySaga() {
    yield all([
        takeLatest(GET_QUESTIONS, requestQuestions)
    ]);
    yield all([
        takeLatest(GET_CORRECT_ANSWERS, requestCorrectAnswers)
    ]);
}
