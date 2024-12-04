import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Define a balloon-like floating animation
const balloonAnimation = keyframes`
    0% {
        transform: translate(0, 0) scale(0.5);
        opacity: 0;
    }
    25% {
        transform: translate(-20px, -40px) scale(0.8);
        opacity: 0.8;
    }
    50% {
        transform: translate(20px, -80px) scale(1);
        opacity: 1;
    }
    75% {
        transform: translate(-10px, -40px) scale(1.1);
    }
    100% {
        transform: translate(0, 0) scale(1);
    }
`;

// Styled component for the profile image
const ProfileImage = styled(motion.img)`
    display: block;
    margin: 1rem auto;
    width: 150px;
    height: 150px;
    border-radius: 50%; // Circular shape
    border: 3px solid ${({ theme }) => theme.border}; // Dynamic border based on theme
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
    animation: ${balloonAnimation} 6s ease-out forwards; // Balloon animation
`;

// Main container for the About section
const Section = styled(motion.section)`
    margin-bottom: 4rem;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.border}; // Dynamic border color
    border-radius: 8px;
    background: ${({ theme }) => theme.body}; // Dynamic background based on theme
    color: ${({ theme }) => theme.text}; // Dynamic text color
    max-width: 800px; // Restrict width for better readability
    margin: auto;
    word-wrap: break-word;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

// Title with hover interaction for a playful effect
const AnimatedTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text}; // Dynamic title color
`;

// Styled paragraph with support for emphasized text
const Paragraph = styled(motion.p)`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text}; // Dynamic paragraph text color
    line-height: 1.6; // Improve readability
    text-align: justify;
    margin: 0;
    max-width: 700px; // Limit width for better readability

    strong {
        color: ${({ theme }) => theme.linkHover}; // Highlighted text color
    }
`;

// About component
const About = () => {
    const title = "About Me";

    return (
        <Section
            id="about"
            initial="hidden" // Initial animation state
            whileInView="visible" // Animation triggers when in view
            viewport={{ once: true }} // Trigger animation only once
            variants={{
                hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate down
                visible: { opacity: 1, y: 0 }, // Animate to full opacity and original position
            }}
            transition={{ duration: 0.5 }} // Smooth transition
        >
            <AnimatedTitle>
                {title.split('').map((char, index) => (
                    <span key={index}>{char === ' ' ? '\u00A0' : char}</span> // Preserve spaces as non-breaking
                ))}
            </AnimatedTitle>
            <ProfileImage src="/circle.png" alt="Christopher Bray's Profile Picture" />
            <Paragraph
                initial={{ opacity: 0 }} // Start invisible
                animate={{ opacity: 1 }} // Fade in animation
                transition={{ delay: 0.5, duration: 1 }} // Add delay for staggered effect
            >
                Hi! I'm Christopher, a passionate <strong>React Developer</strong> with a
                love for crafting modern, interactive web applications. I specialize in{' '}
                <strong>React</strong>, <strong>React Native</strong>, and{' '}
                <strong>JavaScript</strong>, bringing ideas to life with innovative,
                high-quality solutions.
            </Paragraph>
        </Section>
    );
};

export { About };
