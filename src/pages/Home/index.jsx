import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 30px;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
`

const HomeTitle = styled.h1`
  font-size: 3rem;
  color: #000;
  margin-bottom: 20px;
`

const HomeText = styled.p`
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 20px;
`

const HomeImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`

const CallToAction = styled(Link)`
  padding: 15px 30px;
  font-size: 1.25rem;
  color: white;
  background-color: #5843e4;
  text-decoration: none;
  border-radius: 30px;
  &:hover {
    background-color: #3b2f8e;
  }
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <TextContainer>
          <HomeTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </HomeTitle>
          <HomeText>
            Chez Shiny, nous réunissons les meilleurs profils pour vous.
          </HomeText>
          <CallToAction to="/survey/1">Faire le test</CallToAction>
        </TextContainer>
        <HomeImage src={HomeIllustration} alt="Home illustration" />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
