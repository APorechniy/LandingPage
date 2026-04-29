"use client"

import { useForm } from "@/hooks/useForm";
import styles from "./index.module.css";
import { Loader } from "@/components/Loader";

export const ContactForm = () => {
    const {
        name, phone, sendingStatus, handleChange, handleSubmit
    } = useForm()
    return (
        <section className={styles.contactSection} id="contact-form">
            <div className={styles.contactContainer} >
                <form className={styles.contactCard} onSubmit={handleSubmit} >
                    {
                        sendingStatus === "SUCCESS"
                            ?
                            <div className={styles.notify}>
                                <h2 className={styles.formTitle}>Мы приняли Вашу заявку</h2>
                                <p className={styles.formSubtitle} >Свяжемся в ближайшее время</p>
                            </div>
                            :
                            <>
                                <h2 className={styles.formTitle} >
                                    Готовы обсудить проект?
                                </h2>
                                <p className={styles.formSubtitle} >
                                    Оставьте контакты — мы перезвоним сегодня
                                </p>
                                <div className={styles.formGroup} >
                                    <label className={styles.formLabel} htmlFor='contact-name' >
                                        Имя *
                                    </label>
                                    <input value={name} onChange={(e) => handleChange(e.target.value, "name")} className={styles.formInput} type='text' id='contact-name'>
                                    </input>
                                </div>
                                <div className={styles.formGroupLast} >
                                    <label className={styles.formLabel} htmlFor='contact-phone' >
                                        Телефон *
                                    </label>
                                    <input value={phone} onChange={(e) => handleChange(e.target.value, "phone")} className={styles.formInput} type='tel' id='contact-phone' placeholder='+7 (___) ___-__-__' >
                                    </input>
                                </div>
                                <button className={styles.formSubmit} type='submit' disabled={sendingStatus === "LOADING"}>
                                    {
                                        sendingStatus === "LOADING"
                                            ?
                                            <Loader />
                                            :
                                            "Отправить заявку"
                                    }
                                </button>
                            </>
                    }
                </form>
            </div>
        </section>
    );
};
