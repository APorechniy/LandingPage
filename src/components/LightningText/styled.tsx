import styled, { keyframes } from "styled-components";

const lightningGlow = keyframes`
  0% {
    text-shadow: none;
    color: inherit;
  }
  5% {
    text-shadow: 0 0 5px #fff, 0 0 10px #ffea00, 0 0 15px #ffcc00;
    color: #fff;
  }
  10% {
    text-shadow: none;
    color: inherit;
  }
  15% {
    text-shadow: 0 0 3px #fff, 0 0 8px #ffcc00;
    color: #fff5cc;
  }
  20% {
    text-shadow: none;
    color: inherit;
  }
  100% {
    text-shadow: none;
    color: inherit;
  }
`;

const letterLightning = keyframes`
  0% {
    text-shadow: none;
    color: inherit;
  }
  4% {
    text-shadow: none;
    color: inherit;
  }
  5% {
    text-shadow: 0 0 5px #fff, 0 0 12px var(--accent), 0 0 20px var(--accent);
    color: #ffffff;
  }
  7% {
    text-shadow: 0 0 3px #fff, 0 0 8px var(--accent);
    color: #fff9e0;
  }
  9% {
    text-shadow: none;
    color: inherit;
  }
  100% {
    text-shadow: none;
    color: inherit;
  }
`;

export const LightningParagraph = styled.p`
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: white;
    line-height: 1.3;
    margin: 0;

    transition: all 0.3s ease;
  
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.8),
          transparent
        );
        opacity: 0;
        animation: ${lightningGlow} 3s infinite;
    }

    @media(max-width: 768px) {
      font-size: 1.8rem;
    }
`;

export const LightningLetter = styled.span<{ $charIndex: number }>`
  transition: all 0.3s ease;
  display: inline-block;
  animation: ${letterLightning} 3s infinite;
  animation-delay: calc(0.05s * ${props => props.$charIndex});
  white-space: pre;
  will-change: transform, text-shadow;
`

export const WordWrapper = styled.span`
  display: inline-block;
  white-space: normal;
`;