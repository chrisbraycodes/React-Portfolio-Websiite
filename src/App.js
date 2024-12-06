import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import { About, Projects, Contact } from './components/Sections';
import Skills from './components/Skills';
import RootLayout from './components/Analytics.tsx';
import LocationInfo from './components/LocationInfo'; // Import the LocationInfo component

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === null ? true : savedMode === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const currentTheme = isDarkMode ? darkTheme : lightTheme;

    return (
        <RootLayout>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyles />
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <main>
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <LocationInfo /> {/* Add the LocationInfo component here */}
                </main>
                <Footer />
            </ThemeProvider>
        </RootLayout>
    );
};

export default App;
