import { Logo } from "@/components/Logo";
import styles from "./index.module.css";

export const Header = () => {
    return (
        <header className={styles.headerWrapper} >
            <div className={styles.headerContainer} >
                <div className={styles.logoContainer} >
                    <Logo />
                </div>
                <nav className={styles.navContainer} >
                    <a className={styles.navItem} href='#services' >
                        Услуги
                    </a>
                    <a className={styles.navItem} href='#portfolio' >
                        Кейсы
                    </a>
                    <a className={styles.navItem} href='#steps' >
                        Процесс
                    </a>
                </nav>
                <a className={styles.headerCta} href="#contact-form">
                    Обсудить проект
                </a>
            </div>
        </header>
    );
};
