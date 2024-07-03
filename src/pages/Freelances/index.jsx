import styled from 'styled-components'
import Card from '../../components/Card'
import profilePicture from '../../assets/profile.png' // assuming you have this image

const FreelancesContainer = styled.div`
  padding: 40px 20px;
  background-color: #f8f9fa;
`

const FreelancesTitle = styled.h1`
  font-size: 2.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`

const FreelancesSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 40px;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px 50px; /* Horizontal and vertical spacing */
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`

function Freelances() {
  return (
    <FreelancesContainer>
      <FreelancesTitle>Trouvez votre prestataire</FreelancesTitle>
      <FreelancesSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelancesSubtitle>
      <CardsContainer>
        <Card label="UX Designer" title="Jane Doe" picture={profilePicture} />
        <Card
          label="Développeur frontend"
          title="Alexandra Dupont"
          picture={profilePicture}
        />
        <Card label="Devops" title="Jeanne Biche" picture={profilePicture} />
        <Card
          label="UX Designer"
          title="Lauren Ipsum"
          picture={profilePicture}
        />
      </CardsContainer>
    </FreelancesContainer>
  )
}

export default Freelances
