import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const NavContainer = styled.nav`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`

const CallToAction = styled(Link)`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #5843e4;
  text-decoration: none;
  border-radius: 30px; // Rendre le bouton arrondi
  &:hover {
    background-color: #3b2f8e;
  }
`

function Header() {
  return (
    <NavContainer>
      <LogoImage src={Logo} alt="Logo" />
      <NavLinks>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/freelances">Profils</NavLink>
        <CallToAction to="/survey/1">Faire le test</CallToAction>
      </NavLinks>
    </NavContainer>
  )
}

export default Header
