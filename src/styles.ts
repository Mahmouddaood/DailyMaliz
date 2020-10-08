import styled from 'styled-components'


// export const Flex = styled.div`
// display: flex;
// flex-direction: ${({ dir }) => dir};
// justify-content: ${({ justify }) => justify};
// align-items: ${({ align }) => align};
// `



export const QuestionSection = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
height:300px;
`

export const HeadTitle = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    color: antiquewhite;
    letter-spacing: 2px;
`

export const StyledImg = styled.img`
border-radius: 15px;
    height: 85%; 
    width: 100%;
`

export const FLexDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
`

export const QuestionDiv = styled.div`
border-radius:8px;
        background-color: burlywood;
        min-height: 250px;
        margin-top: 85px;
        padding: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 90%;
        align-self: center;
        margin: 35px auto;

`

export const QuestionHeader = styled.div`
display: flex;
justify-content: space-between;
align-self: center;
background-color: #ffffff33;
padding: 6px;
margin: 5px 0px;
align-items: center;
width: 95%;
border-radius:7px;
`
export const Question = styled.h3`
text-align: left;
line-height: 25px;
color: #2b292f;
font-size: 23px;
`
export const AnsButton = styled.button`
background-color: bisque;
color: #000;
font-size: 16px;
min-width: 80px;
margin: 0px 10px;
height: 50px;
border-radius: 12px;
text-align: center;
border: 0;
outline: 0;
cursor:pointer;
 &:hover {
    background-color: #9C27B0;
    color: white;
 }
`
export const AnswerSection = styled.div`
display: flex;
flex-direction: column;
min-height: 180px;
justify-content: space-around;
align-items: flex-start;
width: 95%;
align-self: center;
border-radius: 6px;
padding-left: 15px
`
export const OneAnswer = styled.div`
min-width: 163px;
cursor:pointer;
display: flex;
height:40px;
justify-content: space-between;
align-items: center;
&:hover {
    background-color: #9C27B0;
    color: white;
    border-radius:8px
 }
`
export const OuterRadio = styled.div`
width: 20px;
height: 20px;
background-color: white;
border-width: 7px;
border-color: #fff;
border-radius: 15px;
`
export const InnerRadio = styled.div`
width: 13px;
height: 13px;
background-color: #673AB7;
margin: 4px 3.5px 3.3px 3.3px;
border-radius: 12px
`
export const Answer = styled.span`
text-align: right;
margin-left: 50px;
font-size: 18px;
fontWeight: 500
`
export const Error = styled.div`
margin: 173px;
text-align: center
`
export const ErrorText = styled.h1`
font-size: 50pxx,
color: black
`