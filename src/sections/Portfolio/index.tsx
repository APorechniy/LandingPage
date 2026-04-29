import Image from "next/image";
import AviaPreview from "@/assets/avia-preview.png";
import ItaliaPreview from "@/assets/italia-preview.png";
import StandupPreview from "@/assets/standup-preview.png";

import styles from "./index.module.css";

export const Portfolio = () => {
    return (
        <section className={styles.portfolioSection} id="portfolio">
            <div className={styles.portfolioContainer} >
                <div className={styles.sectionHeader} >
                    <h2 className={styles.sectionTitle} >
                        Последние кейсы
                    </h2>
                </div>
                <div className={styles.portfolioGrid} >
                    <div className={styles.portfolioCard} >
                        <div className={styles.cardImage} >
                            <Image src={AviaPreview} alt='Лендинг авиакомпании' height="200" style={{ width: "100%" }} />
                        </div>
                        <div className={styles.cardContent} >
                            <h3 className={styles.cardTitle} >
                                Sky Airlines
                            </h3>
                            <p className={styles.cardMeta} >
                                Конверсия 4.2%
                            </p>
                        </div>
                    </div>
                    <div className={styles.portfolioCard} >
                        <div className={styles.cardImage} >
                            <Image src={ItaliaPreview} alt='Лендинг ресторана' height="220" style={{ width: "100%" }} />
                        </div>
                        <div className={styles.cardContent} >
                            <h3 className={styles.cardTitle} >
                                La Pasta
                            </h3>
                            <p className={styles.cardMeta} >
                                Броней +37%
                            </p>
                        </div>
                    </div>
                    <div className={styles.portfolioCard} >
                        <div className={styles.cardImage} >
                            <Image src={StandupPreview} alt='Афиша концерта' height="220" style={{ width: "100%" }} />
                        </div>
                        <div className={styles.cardContent} >
                            <h3 className={styles.cardTitle} >
                                Name
                            </h3>
                            <p className={styles.cardMeta} >
                                Покупателей +52%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
