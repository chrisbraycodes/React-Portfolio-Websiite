import React from 'react';
import styled from 'styled-components';
import { FaReact, FaJsSquare, FaCss3Alt, FaGitAlt, FaAccessibleIcon } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiGraphql, SiTypescript, SiTestinglibrary } from 'react-icons/si';

// Container for the skills section with responsive styling
const SkillsContainer = styled.section`
    padding: 2rem 1rem;
    max-width: 800px;
    margin: 0 auto;
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    z-index: 1;
`;

// Section title styling
const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

// Grid layout for skill cards
const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    justify-items: center;
    margin-top: 2rem;
`;

// Individual skill card with hover interaction
const SkillCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.body};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.linkHover};
    }

    span {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        font-weight: bold;
    }
`;

// Modal for displaying additional skill information on hover
const Modal = styled.div`
    position: absolute;
    top: -120%; /* Positioned above the skill card */
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) =>
        theme.text === '#000'
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(0, 0, 0, 0.95)'};
    color: ${({ theme }) =>
        theme.text === '#000' ? '#000' : '#fff'};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    z-index: 9999;
    width: 250px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    ${SkillCard}:hover & {
        opacity: 1;
        visibility: visible;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;

// Skills component displaying a list of skills with descriptions
const Skills = () => {
    const skills = [
        {
            icon: <FaReact />,
            name: 'React.js',
            description: 'React is the foundation of my front-end development. I use it to build fast, interactive, and dynamic user interfaces for modern web applications!',
        },
        {
            icon: <SiRedux />,
            name: 'Redux',
            description: 'Redux helps me manage complex state efficiently, ensuring scalability and maintainability in my applications.',
        },
        {
            icon: <FaJsSquare />,
            name: 'JavaScript',
            description: 'JavaScript is my go-to language for creating interactive and responsive web experiences.',
        },
        {
            icon: <SiTypescript />,
            name: 'TypeScript',
            description: 'TypeScript makes my code more robust by catching errors early and ensuring type safety in large projects.',
        },
        {
            icon: <FaCss3Alt />,
            name: 'CSS',
            description: 'CSS allows me to craft visually stunning and responsive designs that bring my applications to life.',
        },
        {
            icon: <SiTailwindcss />,
            name: 'TailwindCSS',
            description: 'TailwindCSS speeds up my workflow with utility-first classes for designing responsive layouts.',
        },
        {
            icon: <FaGitAlt />,
            name: 'Git',
            description: 'Git enables me to collaborate effectively, track changes, and manage version control for all my projects.',
        },
        {
            icon: <SiGraphql />,
            name: 'GraphQL',
            description: 'GraphQL helps me fetch data more efficiently with precise queries tailored to my app’s needs.',
        },
        {
            icon: <SiTestinglibrary />,
            name: 'Testing',
            description: 'I ensure high-quality applications with thorough testing using Jest and React Testing Library.',
        },
        {
            icon: <FaAccessibleIcon />,
            name: 'Accessibility',
            description: 'Accessibility is a priority, ensuring my apps are inclusive and usable for all users.',
        },
    ];

    return (
        <SkillsContainer id="skills">
            <Title>My Skills</Title>
            <SkillsGrid>
                {skills.map((skill, index) => (
                    <SkillCard key={index}>
                        {skill.icon}
                        <span>{skill.name}</span>
                        <Modal>
                            <p>{skill.description}</p>
                        </Modal>
                    </SkillCard>
                ))}
            </SkillsGrid>
        </SkillsContainer>
    );
};

export default Skills;
