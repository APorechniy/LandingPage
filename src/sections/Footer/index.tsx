import { Logo } from "@/components/Logo";
import styles from "./index.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper} >
            <div className={styles.footerContainer} >
                <div className={styles.footerTop} >
                    <div className={styles.footerLogo} >
                        <Logo />
                    </div>
                    <div className={styles.footerNav} >
                        <a className={styles.footerLink} href="#services">
                            Услуги
                        </a>
                        <a className={styles.footerLink} href="#portfolio">
                            Кейсы
                        </a>
                        <a className={styles.footerLink} href="#steps">
                            Процесс
                        </a>
                    </div>
                </div>
                <div className={styles.footerBottom} >
                    <p className={styles.footerCopy} >
                        © 2026 Beautifier. Продаём лидов, а не пиксели
                    </p>
                    <div className={styles.footerSocial} >
                        <a className={styles.socialLink} href="https://t.me/repa_13" target="_blank">
                            Telegram
                        </a>
                        <a className={styles.socialLink} href="mailto:beautifier@mail.ru">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
