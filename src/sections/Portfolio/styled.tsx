import styled from "styled-components";

export const PortfolioSection = styled.section`
    padding: 6rem 2rem;
    background: var(--background-alt);
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const PortfolioContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
`;

export const SectionHeader = styled.div`
    margin-bottom: 4rem;
    @media(max-width: 768px) {
      text-align: center;
    }
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    color: var(--text-main);
    font-weight: 700;
`;

export const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;

export const PortfolioCard = styled.div`
    background: var(--surface);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    border: 1px solid var(--border-light);
    box-shadow: var(--shadow-md);

    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const CardImage = styled.div`
    height: 220px;
    background: var(--primary-light);
    position: relative;
    @media(max-width: 768px) {
      height: 200px;
    }
`;

export const CardImageImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardTag = styled.span`
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--accent);
    color: var(--primary);
    padding: 0.2rem 0.75rem;
    border-radius: var(--border-radius-full);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
`;

export const CardContent = styled.div`
    padding: 1.5rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.25rem;
`;

export const CardMeta = styled.p`
    color: var(--text-light);
    font-size: 0.85rem;
`;

