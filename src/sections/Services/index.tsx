import styles from "./index.module.css";

export const Services = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.servicesContainer} >
                <div className={styles.sectionHeader} >
                    <h2 className={styles.sectionTitle} >
                        Что вы получаете
                    </h2>
                    <p className={styles.sectionSubtitle} >
                        Больше, чем просто вёрстка
                    </p>
                </div>
                <div className={styles.servicesGrid} >
                    <div className={styles.serviceCard} >
                        <div className={styles.cardIcon} >
                            ⚡
                        </div>
                        <h3 className={styles.cardTitle} >
                            Старт за 24 часа
                        </h3>
                        <p className={styles.cardDesc} >
                            От брифа до запуска — одни сутки. Без потери качества и с полной отчётностью
                        </p>
                    </div>
                    <div className={styles.serviceCard} >
                        <div className={styles.cardIcon} >
                            🔄
                        </div>
                        <h3 className={styles.cardTitle} >
                            CRM-интеграция
                        </h3>
                        <p className={styles.cardDesc} >
                            amoCRM, Bitrix24, HubSpot, YandexMetrika — подключим любую систему
                        </p>
                    </div>
                    <div className={styles.serviceCard} >
                        <div className={styles.cardIcon} >
                            📊
                        </div>
                        <h3 className={styles.cardTitle} >
                            Конверсия сразу
                        </h3>
                        <p className={styles.cardDesc} >
                            Вы платите за готовый продукт, который принесет заявки уже завтра
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
