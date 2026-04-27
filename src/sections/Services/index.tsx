import { CardDesc, CardIcon, CardTitle, SectionHeader, SectionSubtitle, SectionTitle, ServiceCard, ServicesContainer, ServicesGrid, ServicesSection } from "./styled";

export const Services = () => {
    return (
        <ServicesSection id="services">
            <ServicesContainer >
                <SectionHeader >
                    <SectionTitle >Что вы получаете</SectionTitle>
                    <SectionSubtitle >Больше, чем просто вёрстка</SectionSubtitle>
                </SectionHeader>
                <ServicesGrid >
                    <ServiceCard >
                        <CardIcon >⚡</CardIcon>
                        <CardTitle >Старт за 24 часа</CardTitle>
                        <CardDesc >От брифа до запуска — одни сутки. Без потери качества и с полной отчётностью</CardDesc>
                    </ServiceCard>
                    <ServiceCard >
                        <CardIcon >🔄</CardIcon>
                        <CardTitle >CRM-интеграция</CardTitle>
                        <CardDesc >amoCRM, Bitrix24, HubSpot, YandexMetrika — подключим любую систему</CardDesc>
                    </ServiceCard>
                    <ServiceCard >
                        <CardIcon >📊</CardIcon>
                        <CardTitle >Конверсия сразу</CardTitle>
                        <CardDesc >Вы платите за готовый продукт, который принесет заявки уже завтра</CardDesc>
                    </ServiceCard>
                </ServicesGrid>
            </ServicesContainer>
        </ServicesSection>
    );
};
