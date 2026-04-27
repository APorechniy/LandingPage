import { Logo } from "@/components/Logo";
import { FooterBottom, FooterContainer, FooterCopy, FooterLink, FooterNav, FooterSocial, FooterTop, FooterWrapper, SocialLink } from "./styled";

export const Footer = () => {
    return (
        <FooterWrapper >
            <FooterContainer >
                <FooterTop >
                    <Logo />
                    <FooterNav >
                        <FooterLink href="#services">Услуги</FooterLink>
                        <FooterLink href="#portfolio">Кейсы</FooterLink>
                        <FooterLink href="#steps">Процесс</FooterLink>
                    </FooterNav>
                </FooterTop>
                <FooterBottom >
                    <FooterCopy >{`© ${new Date().getFullYear()} Beautifier. Продаём лидов, а не пиксели.`}</FooterCopy>
                    <FooterSocial >
                        <SocialLink href="https://t.me/repa_13" target="_blank">Telegram</SocialLink>
                        <SocialLink href="mailto:beautifier@mail.ru">Email</SocialLink>
                    </FooterSocial>
                </FooterBottom>
            </FooterContainer>
        </FooterWrapper>
    );
};
