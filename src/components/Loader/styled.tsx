import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div<{ $fullPage: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${props => props.$fullPage && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  `}
`;

export const Spinner = styled.div<{ $size: number, $color: string, $activeColor: string, $strokeWidth: number }>`
  width: ${props => props.$size || 40}px;
  height: ${props => props.$size || 40}px;
  border: ${props => props.$strokeWidth || 3}px solid ${props => props.$color || '#ccc'};
  border-top-color: ${props => props.$activeColor || '#333'};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;