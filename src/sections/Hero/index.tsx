"use client"

import { Loader } from "@/components/Loader";
import { BadgesRow, FormGroup, FormInput, FormLabel, FormSelect, FormSubmit, FormSubtitle, FormTitle, HeroBadge, HeroContainer, HeroContent, HeroDescription, HeroForm, HeroGrid, HeroList, HeroListItem, HeroSection, HeroTitle, Notify } from "./styled";
import { useForm } from "@/hooks/useForm";

export const Hero = () => {
    const {
        name, phone, email, service, sendingStatus, handleChange, handleSubmit
    } = useForm()

    return (
        <HeroSection id="hero">
            <HeroContainer >
                <HeroGrid >
                    <HeroContent >
                        <BadgesRow>
                            <HeroBadge $colorToken={"accent"}>🚀 Старт за 24 часа</HeroBadge>
                            <HeroBadge $colorToken={"accent-secondary"}>♾️ Полный Flow</HeroBadge>
                            <HeroBadge $colorToken={"accent-thirdy"}>🛡️ Поддержка 1 год</HeroBadge>
                        </BadgesRow>
                        <HeroTitle >Генерируем лендинг</HeroTitle>
                        <HeroDescription >Не просто сайт — а готовый инструмент для генерации лидов.<br />Берём на себя всё: от дизайна до интеграции с вашей CRM.</HeroDescription>
                        <HeroList >
                            <HeroListItem >✓ Полное сопровождение «под ключ»</HeroListItem>
                            <HeroListItem >✓ Интеграция с любой CRM-системой</HeroListItem>
                            <HeroListItem >✓ Вы получаете лидов, а не картинку</HeroListItem>
                        </HeroList>
                    </HeroContent>
                    <HeroForm onSubmit={handleSubmit}>
                        {
                            sendingStatus === "SUCCESS"
                                ?
                                <Notify>
                                    <FormTitle>Мы приняли Вашу заявку</FormTitle>
                                    <FormSubtitle >Свяжемся в ближайшее время</FormSubtitle>
                                </Notify>
                                :
                                <>
                                    <FormTitle >Обсудить проект</FormTitle>
                                    <FormSubtitle >Ответим в течение 15 минут</FormSubtitle>
                                    <FormGroup >
                                        <FormLabel htmlFor='hero-name' >Имя *</FormLabel>
                                        <FormInput
                                            onChange={(e) => handleChange(e.target.value, "name")}
                                            value={name}
                                            type='text'
                                            id='hero-name'
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup >
                                        <FormLabel htmlFor='hero-email'>E-Mail *</FormLabel>
                                        <FormInput
                                            onChange={(e) => handleChange(e.target.value, "email")}
                                            value={email}
                                            type='email'
                                            id='hero-email'
                                            placeholder=''
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup >
                                        <FormLabel htmlFor='hero-phone'>Телефон</FormLabel>
                                        <FormInput
                                            onChange={(e) => handleChange(e.target.value, "phone")}
                                            value={phone}
                                            type='tel'
                                            id='hero-phone'
                                            placeholder='+7 (___) ___-__-__'
                                        />
                                    </FormGroup>
                                    <FormGroup >
                                        <FormLabel htmlFor='hero-service'>Интересует *</FormLabel>
                                        <FormSelect
                                            onChange={(e) => handleChange(e.target.value, "service")}
                                            id='hero-service'
                                            value={service}
                                            required
                                        >
                                            <option value={"landing"}>Лендинг под ключ</option>
                                            <option value={"app"}>Web-приложение</option>
                                            <option value={"intagration"}>Интеграция готового решения</option>
                                        </FormSelect>
                                    </FormGroup>
                                    <FormSubmit role="submit" disabled={sendingStatus === "LOADING"}>
                                        {
                                            sendingStatus === "LOADING"
                                                ?
                                                <Loader />
                                                :
                                                "Отправить заявку"
                                        }
                                    </FormSubmit>
                                </>
                        }
                    </HeroForm>
                </HeroGrid>
            </HeroContainer>
        </HeroSection>
    );
};
