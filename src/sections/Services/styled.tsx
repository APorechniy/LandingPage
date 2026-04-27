import styled, { keyframes } from "styled-components";

export const ServicesSection = styled.section`
    padding: 6rem 2rem;
    background: var(--background);
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const ServicesContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
`;

export const SectionHeader = styled.div`
    margin-bottom: 4rem;
    @media(max-width: 768px) {
      text-align: center;
      margin-bottom: 2.5rem;
    }
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    color: var(--text-main);
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

export const SectionSubtitle = styled.p`
    color: var(--text-muted);
    font-size: 1.1rem;
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;

export const ServiceCard = styled.div`
    background: var(--surface-elevated);
    border-radius: var(--border-radius-md);
    padding: 2rem;
    border: 1px solid var(--border-light);
    transition: transform var(--transition-fast);

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CardIcon = styled.div`
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    user-select: none;
`;

export const CardTitle = styled.h3`
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.75rem;
    text-align: center
`;

export const CardDesc = styled.p`
    color: var(--text-muted);
    line-height: 1.6;
    text-align: center
`;

