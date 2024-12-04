import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import { About, Projects, Contact } from './components/Sections';
import Skills from './components/Skills';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme preference, default to night mode
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === null ? true : savedMode === 'true';
    });

    useEffect(() => {
        // Save the theme preference to localStorage whenever it changes
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
