import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--surface);
    border-bottom: 1px solid var(--border-light);
    font-family: var(--font-main);
    box-shadow: var(--shadow-sm);
    @media(max-width: 768px) {
      background: var(--surface);
    }
`;

export const HeaderContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 768px) {
      padding: 0.75rem 1rem;
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    @media(max-width: 768px) {
      display: none;
    }
`;

export const NavItemOne = styled.a`
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
`;

export const NavItemTwo = styled.a`
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
`;

export const NavItemThree = styled.a`
    color: var(--text-muted);
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
`;

export const HeaderCta = styled.a`
    background: var(--primary);
    color: var(--text-light);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: 0.65rem 1.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    text-decoration: none;
    transition: background var(--transition-fast);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
    @media(max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
`;

