import { CardContent, CardImage, CardMeta, CardTitle, PortfolioCard, PortfolioContainer, PortfolioGrid, PortfolioSection, SectionHeader, SectionTitle } from "./styled";
import Image from "next/image";
import AviaPreview from "@/assets/avia-preview.png";
import ItaliaPreview from "@/assets/italia-preview.png";
import StandupPreview from "@/assets/standup-preview.png";


export const Portfolio = () => {
    return (
        <PortfolioSection id="portfolio">
            <PortfolioContainer >
                <SectionHeader >
                    <SectionTitle >Последние кейсы</SectionTitle>
                </SectionHeader>
                <PortfolioGrid >
                    <PortfolioCard >
                        <CardImage >
                            <Image src={AviaPreview} alt='Лендинг авиакомпании' height="200" style={{ width: "100%" }} />
                        </CardImage>
                        <CardContent >
                            <CardTitle >Sky Airlines</CardTitle>
                            <CardMeta >Конверсия 4.2%</CardMeta>
                        </CardContent>
                    </PortfolioCard>
                    <PortfolioCard >
                        <CardImage >
                            <Image src={ItaliaPreview} alt='Лендинг ресторана' height="220" style={{ width: "100%" }} />
                        </CardImage>
                        <CardContent >
                            <CardTitle >La Pasta</CardTitle>
                            <CardMeta >Броней +37%</CardMeta>
                        </CardContent>
                    </PortfolioCard>
                    <PortfolioCard >
                        <CardImage >
                            <Image src={StandupPreview} alt='Афиша концерта' height="220" style={{ width: "100%" }} />
                        </CardImage>
                        <CardContent >
                            <CardTitle >Name</CardTitle>
                            <CardMeta >Охват +52%</CardMeta>
                        </CardContent>
                    </PortfolioCard>
                </PortfolioGrid>
            </PortfolioContainer>
        </PortfolioSection>
    );
};
