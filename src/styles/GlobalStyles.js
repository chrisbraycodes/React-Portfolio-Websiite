import { createGlobalStyle } from 'styled-components';

// Global styles for consistent application-wide theming and resets
const GlobalStyles = createGlobalStyle`
    /* Resetting default margin, padding, and box-sizing for all elements */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Base styles for the body, including theme-based background and text color */
    body {
        background: ${({ theme }) => theme.bodySide};
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        transition: background 0.3s ease, color 0.3s ease;
    }

    /* Main content styling for centering and adding structure */
    main {
        background: ${({ theme }) => theme.body};
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Styling for all headings with consistent spacing and color */
    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        line-height: 1.2;
    }

    /* Links with smooth hover transitions and theme-based colors */
    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.linkHover};
            text-decoration: underline;
        }
    }

    /* Styling for lists to ensure readability and spacing */
    ul, ol {
        margin: 1rem 0;
        padding-left: 2rem;
    }

    /* Button styling with hover effects and smooth transitions */
    button {
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease;

        &:hover {
            filter: brightness(1.1);
        }
    }

    /* Ensures images are responsive and maintain aspect ratio */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Scrollbar styling for webkit-based browsers */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.body};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.linkHover};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyles;
