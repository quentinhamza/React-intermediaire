import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'
import profilePicture from '../../assets/profile.png' // Assuming you have a default profile picture

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
  const [freelances, setFreelances] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFreelances() {
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        if (!response.ok) {
          throw new Error(`Failed to fetch freelances: ${response.statusText}`)
        }
        const data = await response.json()
        console.log('Freelances fetched:', data.freelancersList)
        setFreelances(data.freelancersList || [])
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (isLoading) {
    return <Loader /> // Utilise le Loader importé
  }

  if (error) {
    return <div>Erreur : {error}</div>
  }

  return (
    <FreelancesContainer>
      <FreelancesTitle>Trouvez votre prestataire</FreelancesTitle>
      <FreelancesSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelancesSubtitle>
      <CardsContainer>
        {freelances.map((freelance) => (
          <Card
            key={freelance.id}
            label={freelance.job}
            title={freelance.name}
            picture={freelance.picture || profilePicture}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  )
}

export default Freelances
