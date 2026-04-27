import styled, { keyframes } from "styled-components";

export const ContactSection = styled.section`
    padding: 6rem 2rem;
    background: var(--background-alt);
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const ContactContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

export const ContactCard = styled.form`
    background: var(--surface);
    border-radius: var(--border-radius-lg);
    padding: 3rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-light);
    @media(max-width: 768px) {
      padding: 2rem 1.5rem;
    }
`;

export const FormTitle = styled.h2`
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-main);
    text-align: center;
    margin-bottom: 0.5rem;
    @media(max-width: 768px) {
      font-size: 1.6rem;
    }
`;

export const FormSubtitle = styled.p`
    text-align: center;
    color: var(--text-muted);
    margin-bottom: 2rem;
`;

export const FormGroupOne = styled.div`
    margin-bottom: 1.5rem;
`;

export const FormGroupTwo = styled.div`
    margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
    display: block;
    color: var(--text-main);
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
    width: 100%;
    background: var(--background-alt);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-sm);
    padding: 0.9rem 1rem;
    color: var(--text-main);
    font-family: var(--font-main);
    outline: none;
`;

export const FormSubmit = styled.button`
    width: 100%;
    background: var(--gradient-accent);
    color: var(--primary);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`;

export const Notify = styled.div`
    width: 100%;
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.75rem;
`