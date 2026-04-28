import styles from "./index.module.css";

export const Steps = () => {
    return (
        <section className={styles.stepsSection} id="steps">
            <div className={styles.stepsContainer} >
                <div className={styles.sectionHeader} >
                    <h2 className={styles.sectionTitle} >
                        Как мы работаем
                    </h2>
                </div>
                <div className={styles.stepsList} >
                    <div className={styles.stepItem} >
                        <div className={styles.stepNumber} >
                            01
                        </div>
                        <div className={styles.stepContent} >
                            <h3 className={styles.stepTitle} >
                                Короткий брифинг (30 минут)
                            </h3>
                            <p className={styles.stepDesc} >
                                Созваниваемся, фиксируем цели, ЦА, оффер. Формируем ТЗ в реальном времени.
                            </p>
                        </div>
                    </div>
                    <div className={styles.stepItem} >
                        <div className={styles.stepNumber} >
                            02
                        </div>
                        <div className={styles.stepContent} >
                            <h3 className={styles.stepTitle} >
                                5 макетов на выбор
                            </h3>
                            <p className={styles.stepDesc} >
                                Вы получаете 5 вариантов первого экрана. Выбираете лучший — его и верстаем.
                            </p>
                        </div>
                    </div>
                    <div className={styles.stepItem} >
                        <div className={styles.stepNumber} >
                            03
                        </div>
                        <div className={styles.stepContent} >
                            <h3 className={styles.stepTitle} >
                                Реализация за 1 день
                            </h3>
                            <p className={styles.stepDesc} >
                                Верстаем, подключаем формы, настраиваем аналитику. Вы получаете ссылку на тестовый домен.
                            </p>
                        </div>
                    </div>
                    <div className={styles.stepItem} >
                        <div className={styles.stepNumber} >
                            04
                        </div>
                        <div className={styles.stepContent} >
                            <h3 className={styles.stepTitle} >
                                Деплой на ваш хостинг
                            </h3>
                            <p className={styles.stepDesc} >
                                Помогаем с размещением на любом хостинге или передаём архив с исходниками.
                            </p>
                        </div>
                    </div>
                    <div className={styles.stepItemLast} >
                        <div className={styles.stepNumber} >
                            05
                        </div>
                        <div className={styles.stepContent} >
                            <h3 className={styles.stepTitle} >
                                Поддержка в течение года
                            </h3>
                            <p className={styles.stepDesc} >
                                Бесплатные правки по вёрстке, консультации по улучшению конверсии.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
