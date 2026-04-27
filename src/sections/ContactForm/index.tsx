"use client"

import { useForm } from "@/hooks/useForm";
import { ContactCard, ContactContainer, ContactSection, FormGroupOne, FormGroupTwo, FormInput, FormLabel, FormSubmit, FormSubtitle, FormTitle, Notify } from "./styled";
import { Loader } from "@/components/Loader";

export const ContactForm = () => {
    const {
        name, phone, sendingStatus, handleChange, handleSubmit
    } = useForm()

    return (
        <ContactSection id="contact-form">
            <ContactContainer >
                <ContactCard onSubmit={handleSubmit}>
                    {
                        sendingStatus === "SUCCESS"
                            ?
                            <Notify>
                                <FormTitle>Мы приняли Вашу заявку</FormTitle>
                                <FormSubtitle >Свяжемся в ближайшее время</FormSubtitle>
                            </Notify>
                            :
                            <>
                                <FormTitle >Готовы обсудить проект?</FormTitle>
                                <FormSubtitle >Оставьте контакты — мы перезвоним сегодня</FormSubtitle>
                                <FormGroupOne >
                                    <FormLabel htmlFor='contact-name' >Имя *</FormLabel>
                                    <FormInput
                                        value={name}
                                        onChange={(e) => handleChange(e.target.value, "name")}
                                        type='text'
                                        id='contact-name'
                                        required
                                    />
                                </FormGroupOne>
                                <FormGroupTwo >
                                    <FormLabel htmlFor='contact-phone' >Телефон *</FormLabel>
                                    <FormInput
                                        value={phone}
                                        onChange={(e) => handleChange(e.target.value, "phone")}
                                        type='tel'
                                        id='contact-phone'
                                        placeholder='+7 (___) ___-__-__'
                                        required
                                    />
                                </FormGroupTwo>
                                <FormSubmit
                                    role='submit'
                                    disabled={sendingStatus === "LOADING"}
                                >
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
                </ContactCard>
            </ContactContainer>
        </ContactSection>
    );
};
