// Dependancies
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { ThemeSelector } from '../../Utils';

// SCSS
import "./Navbar.scss"

// Styled Components
const StyledNav = styled.nav`
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: #151515
  height: 65px;
  border-bottom: 1px solid ${(props:any)=> props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledSpan = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: ${(props:any) => props.theme.seconadry };
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`;
const StyledLi = styled.li`
  text-decoration: none;
`;
const StyledNavLink = styled(NavLink)`
  line-height: 65px;
  color: ${(props:any) => props.theme.primary };
  text-decoration: none;
  display: inline-block;
  padding: 0 15px;
  font-weight: 700;
  transition: all .7s ease-in-out;
  font-size: calc(10px + 1.2vmin);
  &:hover {
    background-color: ${(props:any) => props.theme.backgroundColor };
    color: ${(props:any) => props.theme.secondary };
  }
`;

const Navbar = () => {
    return(
        <StyledNav>
            <StyledSpan>&lt; Alain Guillon /&gt;</StyledSpan>
            <ThemeSelector />
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/accueil" activeClassName="active">Accueil</StyledNavLink>
                </StyledLi>

                <StyledLi>
                    <StyledNavLink to="/story">Story</StyledNavLink>
                </StyledLi>

                <StyledLi>
                    <StyledNavLink to="/project">Projects</StyledNavLink>
                </StyledLi>

                <StyledLi>
                    <StyledNavLink to="/contact">Contact</StyledNavLink>
                </StyledLi>

            </StyledUl>
        </StyledNav>
    )
}

export default Navbar