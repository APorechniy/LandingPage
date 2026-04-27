import styled from "styled-components";

export const SloganSection = styled.section`
    padding: 4rem 2rem;
    background: var(--slogan-background);
    font-family: var(--font-main);
    text-align: center;
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const SloganContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
