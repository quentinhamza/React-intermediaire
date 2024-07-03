import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
`

const SurveyTitle = styled.h1`
  font-size: 2.5rem;
  color: #000;
`

const SurveyQuestion = styled.h2`
  font-size: 2rem;
  color: #000;
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

const NavButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #5843e4;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3b2f8e;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNum = parseInt(questionNumber, 10)
  const navigate = useNavigate()

  const previousQuestion = questionNum > 1 ? questionNum - 1 : 1
  const nextQuestion = questionNum < 10 ? questionNum + 1 : null

  return (
    <SurveyContainer>
      <SurveyTitle>Questionnaire</SurveyTitle>
      <SurveyQuestion>Question {questionNum}</SurveyQuestion>
      <Navigation>
        <NavButton onClick={() => navigate(`/survey/${previousQuestion}`)}>
          Précédent
        </NavButton>
        {nextQuestion ? (
          <NavButton onClick={() => navigate(`/survey/${nextQuestion}`)}>
            Suivant
          </NavButton>
        ) : (
          <NavButton onClick={() => navigate('/results')}>Résultats</NavButton>
        )}
      </Navigation>
    </SurveyContainer>
  )
}

export default Survey
