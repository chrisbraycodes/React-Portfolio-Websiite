import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Projects } from './Projects';
import { About } from './About';
import Contact from './Contact';

// Styled container for individual sections with consistent layout and styling
const Section = styled(motion.section)`
    margin-bottom: 4rem;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.background};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Export key components for use in the application
export { About, Contact, Projects };
