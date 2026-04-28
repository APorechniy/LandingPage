"use client"

import { useForm } from "@/hooks/useForm";
import styles from "./index.module.css";
import { Loader } from "@/components/Loader";

export const Hero = () => {
    const {
        name, phone, email, service, sendingStatus, handleChange, handleSubmit
    } = useForm()
    return (
        <section className={styles.heroSection} >
            <div className={styles.heroContainer} >
                <div className={styles.heroGrid} >
                    <div className={styles.heroContent} >
                        <div className={styles.heroBadgesRow}>
                            <span className={styles.heroBadge} style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>🚀 Старт за 24 часа</span>
                            <span className={styles.heroBadge} style={{ background: "var(--accent-secondary-soft)", color: "var(--accent-secondary)" }}>♾️ Полный Flow</span>
                            <span className={styles.heroBadge} style={{ background: "var(--accent-thirdy-soft)", color: "var(--accent-thirdy)" }}>🛡️ Поддержка 1 год</span>
                        </div>
                        <h1 className={styles.heroTitle} >
                            <span  >
                                Генерируем лендинг
                            </span>
                        </h1>
                        <p className={styles.heroDescription} >
                            Не просто сайт — а готовый инструмент для генерации лидов. <br /> Берём на себя всё: от дизайна до интеграции с вашей CRM.
                        </p>
                        <ul className={styles.heroList} >
                            <li className={styles.heroListItem} >
                                ✓ Полное сопровождение «под ключ»
                            </li>
                            <li className={styles.heroListItem} >
                                ✓ Интеграция с любой CRM-системой
                            </li>
                            <li className={styles.heroListItem} >
                                ✓ Вы получаете лидов, а не картинку
                            </li>
                        </ul>
                    </div>
                    <form className={styles.heroForm} onSubmit={handleSubmit}>
                        {
                            sendingStatus === "SUCCESS"
                                ?
                                <div className={styles.notify}>
                                    <h3 className={styles.formTitle} >Мы приняли Вашу заявку</h3>
                                    <p className={styles.formSubtitle}  >Свяжемся в ближайшее время</p>
                                </div>
                                :
                                <>
                                    <h3 className={styles.formTitle} >
                                        Обсудить проект
                                    </h3>
                                    <p className={styles.formSubtitle} >
                                        Ответим в течение 15 минут
                                    </p>
                                    <div className={styles.formGroup} >
                                        <label className={styles.formLabel} htmlFor='hero-name' >
                                            Имя *
                                        </label>
                                        <input value={name} onChange={(e) => handleChange(e.target.value, "name")} className={styles.formInput} type='text' id='hero-name' required >
                                        </input>
                                    </div>
                                    <div className={styles.formGroup} >
                                        <label className={styles.formLabel} htmlFor='hero-email' >
                                            E-Mail *
                                        </label>
                                        <input value={email} onChange={(e) => handleChange(e.target.value, "email")} className={styles.formInput} type='email' id='hero-email' required >
                                        </input>
                                    </div>
                                    <div className={styles.formGroup} >
                                        <label className={styles.formLabel} htmlFor='hero-phone' >
                                            Телефон
                                        </label>
                                        <input value={phone} onChange={(e) => handleChange(e.target.value, "phone")} className={styles.formInput} type='tel' id='hero-phone' placeholder='+7 (___) ___-__-__' >
                                        </input>
                                    </div>
                                    <div className={styles.formGroupLast} >
                                        <label className={styles.formLabel} htmlFor='hero-service' >
                                            Интересует *
                                        </label>
                                        <select value={service} onChange={(e) => handleChange(e.target.value, "service")} className={styles.formSelect} id='hero-service' required>
                                            <option value={"landing"}>Лендинг под ключ</option>
                                            <option value={"app"}>Web-приложение</option>
                                            <option value={"intagration"}>Интеграция готового решения</option>
                                        </select>
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
            </div>
        </section>
    );
};
