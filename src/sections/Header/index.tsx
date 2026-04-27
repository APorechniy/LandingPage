import { Logo } from "@/components/Logo";
import { HeaderContainer, HeaderCta, HeaderWrapper, NavContainer, NavItemOne, NavItemThree, NavItemTwo } from "./styled";

export const Header = () => {
    return (
        <HeaderWrapper >
            <HeaderContainer >
                <Logo />
                <NavContainer >
                    <NavItemOne href="#services">Услуги</NavItemOne>
                    <NavItemTwo href="#portfolio">Кейсы</NavItemTwo>
                    <NavItemThree href="#steps">Процесс</NavItemThree>
                </NavContainer>
                <HeaderCta href="#contact-form">Обсудить проект</HeaderCta>
            </HeaderContainer>
        </HeaderWrapper>
    );
};
