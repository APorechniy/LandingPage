import styled, { keyframes } from "styled-components";

export const StepsSection = styled.section`
    padding: 6rem 2rem;
    background: var(--background);
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const StepsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    color: var(--text-main);
    font-weight: 700;
`;

export const StepsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StepItemOne = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      gap: 1rem;
    }
`;

export const StepItemTwo = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      gap: 1rem;
    }
`;

export const StepItemThree = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      gap: 1rem;
    }
`;

export const StepItemFour = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      gap: 1rem;
    }
`;

export const StepItemFive = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    @media(max-width: 768px) {
      gap: 1rem;
    }
`;

export const StepNumber = styled.div`
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
    @media(max-width: 768px) {
      font-size: 2rem;
    }
`;

export const StepContent = styled.div`
`;

export const StepTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.25rem;
    @media(max-width: 768px) {
      font-size: 1.1rem;
    }
`;

export const StepDesc = styled.p`
    color: var(--text-muted);
    line-height: 1.5;
    @media(max-width: 768px) {
      font-size: 0.9rem;
    }
`;

