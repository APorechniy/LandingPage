import { SectionHeader, SectionTitle, StepContent, StepDesc, StepItemFive, StepItemFour, StepItemOne, StepItemThree, StepItemTwo, StepNumber, StepTitle, StepsContainer, StepsList, StepsSection } from "./styled";

export const Steps = () => {
    return (
        <StepsSection id="steps">
            <StepsContainer >
                <SectionHeader >
                    <SectionTitle >Как мы работаем</SectionTitle>
                </SectionHeader>
                <StepsList >
                    <StepItemOne >
                        <StepNumber >01</StepNumber>
                        <StepContent >
                            <StepTitle >Короткий брифинг (30 минут)</StepTitle>
                            <StepDesc >Созваниваемся, фиксируем цели, ЦА, оффер. Формируем ТЗ в реальном времени.</StepDesc>
                        </StepContent>
                    </StepItemOne>
                    <StepItemTwo >
                        <StepNumber >02</StepNumber>
                        <StepContent >
                            <StepTitle >5 макетов на выбор</StepTitle>
                            <StepDesc >Вы получаете 5 вариантов первого экрана. Выбираете лучший — его и верстаем.</StepDesc>
                        </StepContent>
                    </StepItemTwo>
                    <StepItemThree >
                        <StepNumber >03</StepNumber>
                        <StepContent >
                            <StepTitle >Реализация за 1 день</StepTitle>
                            <StepDesc >Верстаем, подключаем формы, настраиваем аналитику. Вы получаете ссылку на тестовый домен.</StepDesc>
                        </StepContent>
                    </StepItemThree>
                    <StepItemFour >
                        <StepNumber >04</StepNumber>
                        <StepContent >
                            <StepTitle >Деплой на ваш хостинг</StepTitle>
                            <StepDesc >Помогаем с размещением на любом хостинге или передаём архив с исходниками.</StepDesc>
                        </StepContent>
                    </StepItemFour>
                    <StepItemFive >
                        <StepNumber >05</StepNumber>
                        <StepContent >
                            <StepTitle >Поддержка в течение года</StepTitle>
                            <StepDesc >Бесплатные правки по вёрстке, консультации по улучшению конверсии.</StepDesc>
                        </StepContent>
                    </StepItemFive>
                </StepsList>
            </StepsContainer>
        </StepsSection>
    );
};
