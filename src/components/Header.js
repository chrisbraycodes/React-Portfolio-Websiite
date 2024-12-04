import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GlobalStyles from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from '../theme';

// Animation for header background
const fibonacciLight = keyframes`
  0% { background-position: 50% 50%; }
  100% { background-position: 50% 50%; }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: radial-gradient(circle, #ffffff 10%, transparent 70%);
  animation: ${fibonacciLight} 120s infinite ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;  // Stack logo and icons vertically on mobile
    align-items: center;     // Center content horizontally
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;  // Add space between logo and icon box on mobile
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.bodySide};  // Dark background for the icon box
  padding: 0.5rem 1rem;  // Space around icons
  border-radius: 10px;  // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Optional subtle shadow for depth
  margin-top: 1rem;  // Lower the box slightly

  @media (max-width: 768px) {
    margin-top: 0;  // Remove margin-top on mobile
    padding: 0.5rem; // Adjust padding for smaller screens
  }
`;

const IconLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};  // Color of icons based on theme
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.linkHover};  // Change color on hover
  }
`;

const ThemeToggle = styled.button`
    background: ${({ theme }) => theme.bodySide};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.linkHover};
        color: ${({ theme }) => theme.body};
    }
`;

const HamburgerButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: absolute;
  top: 100%; /* Position just below the header */
  right: 0;
  background: ${({ theme }) => theme.bodySide};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px); /* Hidden by default */
  opacity: 0; /* Hidden by default */
  transition: all 0.3s ease-in-out;

  &.active {
    transform: translateY(0); /* Drop down when active */
    opacity: 1; /* Fully visible when active */
  }

  a {
    display: block;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0.5rem 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === null ? true : savedMode === 'true';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <Logo>Christopher's React Portfolio</Logo>
        <IconContainer>
          <IconLink href="https://github.com/chrisbraycodes" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="https://linkedin.com/in/chrisbraycodes" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? 'Day Mode' : 'Night Mode'}
          </ThemeToggle>
          <HamburgerButton onClick={() => setMenuOpen((prev) => !prev)}>☰</HamburgerButton>
        </IconContainer>
        <Nav className={menuOpen ? 'active' : ''}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Nav>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
