"use client"
import React, { useRef, type ReactNode } from "react";
import { LightningLetter, LightningParagraph, WordWrapper } from "./styled";

export const LightningText = ({ children, ...props }: { children: ReactNode }) => {
    const containerRef = useRef(null);
    // Разбиваем текст на отдельные символы
    const text = typeof children === 'string' ? children : '';

    const renderText = () => {
        if (!text) return null;

        const elements: ReactNode[] = [];
        let globalCharIndex = 0;

        // Разбиваем текст на слова и пробелы
        const segments = text.split(/(\s+|\n)/);

        segments.forEach((segment, segmentIndex) => {
            // Обработка переноса строки
            if (segment === '\n') {
                elements.push(<br key={`br-${segmentIndex}`} />);
                return;
            }

            // Обработка пробелов
            if (segment.trim() === '') {
                const spaceLength = segment.length;
                for (let i = 0; i < spaceLength; i++) {
                    elements.push(
                        <span key={`space-${segmentIndex}-${i}`} style={{ display: 'inline-block', width: '0.3em' }}>
                            &nbsp;
                        </span>
                    );
                }
                return;
            }

            // Обработка слова
            const wordElement = (
                <WordWrapper key={`word-${segmentIndex}`}>
                    {segment.split('').map((char, charIndex) => {
                        const currentIndex = globalCharIndex + charIndex;
                        return (
                            <LightningLetter
                                key={`char-${segmentIndex}-${charIndex}`}
                                $charIndex={currentIndex}
                            >
                                {char}
                            </LightningLetter>
                        );
                    })}
                </WordWrapper>
            );

            elements.push(wordElement);
            globalCharIndex += segment.length;
        });

        return elements;
    };

    return (
        <LightningParagraph {...props}>
            {renderText()}
        </LightningParagraph>
    );
};