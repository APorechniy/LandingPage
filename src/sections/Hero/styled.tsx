import styled from "styled-components";

export const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 2rem 4rem;
    background: var(--gradient-hero);
    font-family: var(--font-main);
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      min-height: auto;
      padding: 5rem 1rem 3rem;
    }
`;

export const HeroContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    width: 100%;
`;

export const HeroGrid = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media(max-width: 768px) {
      text-align: center;
    }
`;

export const BadgesRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.2rem;

    @media(max-width: 768px) {
      flex-direction: column;
      gap: 0.6rem;
    }
`

export const HeroBadge = styled.div<{ $colorToken: string }>`
    display: inline-block;
    background: var(--${(props) => props.$colorToken}-soft);
    color: var(--${(props) => props.$colorToken});
    padding: 0.3rem 1rem;
    border-radius: var(--border-radius-full);
    font-weight: 600;
    font-size: 0.85rem;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    user-select: none;
    @media(max-width: 768px) {
      margin: 0 auto;
      width: 70%;
    }
`;

export const HeroTitle = styled.h1`
    font-family: var(--font-display);
    font-size: clamp(2.75rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.15;
    color: var(--text-main);
    margin: 0;
    @media(max-width: 768px) {
      font-size: clamp(2rem, 8vw, 3rem);
    }
`;

export const HeroTitleAccent = styled.span`
    color: var(--accent);
    border-bottom: 3px solid var(--accent);
    padding-bottom: 0.25rem;
`;

export const HeroDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
    max-width: 90%;
    @media(max-width: 768px) {
      font-size: 1rem;
      max-width: 100%;
    }
`;

export const HeroList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    @media(max-width: 768px) {
      align-items: center;
    }
`;

export const HeroListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-main);
    font-weight: 500;
`;

export const ListIcon = styled.span`
    color: var(--accent);
    font-weight: 700;
`;

export const HeroForm = styled.form`
    background: var(--surface);
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-light);
    @media(max-width: 768px) {
      padding: 1.5rem;
    }
`;

export const FormTitle = styled.h3`
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.5rem;
    @media(max-width: 768px) {
      text-align: center;
    }
`;

export const FormSubtitle = styled.p`
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    @media(max-width: 768px) {
      text-align: center;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
    display: block;
    color: var(--text-main);
    font-weight: 500;
    font-family: var(--font-main);
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
`;

export const FormInput = styled.input`
    width: 100%;
    background: var(--background-alt);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-sm);
    padding: 0.85rem 1rem;
    color: var(--text-main);
    font-size: 0.95rem;
    font-family: var(--font-main);
    outline: none;
    transition: border-color var(--transition-fast);
`;

export const FormSelect = styled.select`
    width: 100%;
    background: var(--background-alt);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-sm);
    padding: 0.85rem 1rem;
    color: var(--text-main);
    font-size: 0.95rem;
    font-family: var(--font-main);
    outline: none;
    cursor: pointer;
`;

export const FormSubmit = styled.button`
    width: 100%;
    background: var(--gradient-accent);
    color: var(--primary);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 0.9rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: opacity var(--transition-fast);
`;

export const Notify = styled.div`
    width: 100%;
    height: 30rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.75rem;
`