import { StateInterface, selectedAnswerProps } from "../../../modules/interfaces";

export default interface QuestionProps extends ArrProps {
    setQuestionNumber: (i: number) => void,
    selectedAnswer?: string,
    selectedAnswers: selectedAnswerProps | any,
    editAnswers: (id: number, i: string) => void
}


export interface AppProps extends StateInterface {
    setQuestionNumber: (id: number) => void,
    setAnswers: (id: number, item: string) => void,
    getQuestions: () => void,
    checkCorrectAnswers: () => void
}

export interface ArrProps {
    id: number,
    question: string,
    answers: string[],
    // value: string
}

export const arr: ArrProps[] = [
    {
        id: 1,
        question: "what is the oldest championship in atp tennis",
        answers: [
            "I think wimpoldin is the oldest",
            "Rolland Garros",
            "US Open",
            "Australian open"
        ],
        // value: "answer 1"
    },
    {
        id: 2,
        question: "what is Your football favorite Team ",
        answers: [
            "Sure , Arsenal",
            "No , I don't like football",
            "Barca",
            "Real Madrid"
        ],
        // value: "answer 2"
    },
    {
        id: 3,
        question: "Which team won Preimer league in 2004",
        answers: [
            "Gunners , Arsenal for sure",
            "Manchester United",
            "Chelsea",
            "Liverpool"
        ],
        // value: "answer 3"
    },
    {
        id: 4,
        question: "who you think best player in history ?",
        answers: [
            "Messi",
            "Maradona",
            "Ronaldo",
            "Pele"
        ],
        // value: "answer 4"
    }
]