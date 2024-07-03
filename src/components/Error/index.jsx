import styled from 'styled-components'
import ErrorImage from '../../assets/404.svg' // Adjust path if necessary

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9fc;
  text-align: center;
`

const ErrorTitle = styled.h1`
  font-size: 1.9375rem; /* 31px to rem */
  color: #000;
  margin-bottom: 50px;
`

const ErrorImageWrapper = styled.img`
  width: 50%;
  max-width: 400px;
  margin-bottom: 40px;
`

const ErrorSubtitle = styled.h2`
  font-size: 1.9375rem; /* 31px to rem */
  color: #000;
  margin-top: 20px; /* Adjust margin top */
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>Oups...</ErrorTitle>
      <ErrorImageWrapper src={ErrorImage} alt="404" />
      <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
    </ErrorContainer>
  )
}

export default Error
