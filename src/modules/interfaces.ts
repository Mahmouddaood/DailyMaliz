export interface Action {
    type: string,
    payload?: any
}

export interface selectedAnswerProps {
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string
}

export interface StateInterface {
    selectedAnswers: selectedAnswerProps,
    questionNumber: number,
    questions: ArrProps[],
    loading: boolean,
    finished: boolean
}


export interface ArrProps {
    id: number,
    question: string,
    answers: string[],
    value: string
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
        value: "answer 1"
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
        value: "answer 2"
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
        value: "answer 3"
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
        value: "answer 4"
    }
]

export const correctAnswers: selectedAnswerProps | any = {
    answer1: "I think wimpoldin is the oldest",
    answer2: "Sure , Arsenal",
    answer3: "Gunners , Arsenal for sure",
    answer4: "Messi",
}

// interface CorrectProps {
//     correctAnswer1: string,
//     correctAnswer2: string,
//     correctAnswer3: string,
//     correctAnswer4: string
// }