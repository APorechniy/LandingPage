import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background: var(--background-alt);
    padding: 3rem 2rem 2rem;
    font-family: var(--font-main);
    border-top: 1px solid var(--border-light);
    @media(max-width: 768px) {
      padding: 2rem 1rem 1.5rem;
    }
`;

export const FooterContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-light);
    @media(max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
    }
`;

export const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const FooterLogoText = styled.span`
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
`;

export const FooterNav = styled.div`
    display: flex;
    gap: 2.5rem;
    @media(max-width: 768px) {
      gap: 2rem;
    }
`;

export const FooterLink = styled.a`
    color: var(--text-muted);
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color var(--transition-fast);
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    @media(max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
`;

export const FooterCopy = styled.p`
    color: var(--text-light);
    font-size: 0.9rem;
    margin: 0;
`;

export const FooterSocial = styled.div`
    display: flex;
    gap: 2rem;
`;

export const SocialLink = styled.a`
    color: var(--text-muted);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color var(--transition-fast);
`;
