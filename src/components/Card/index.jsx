import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fc;
  border-radius: 20px;
  width: 334px;
  height: 339px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-10px);
  }
`

const CardLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #5843e4;
  font-size: 1.375rem;
  font-weight: 500;
`

const CardImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`

const CardTitle = styled.span`
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture || DefaultPicture} alt="profile" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
