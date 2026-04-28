import { LightningText } from "@/components/LightningText";
import styles from "./index.module.css";

export const SloganBlock = () => {
    return (
        <section className={styles.sloganSection} >
            <div className={styles.sloganContainer} >
                <LightningText>Генерируем лидов, а не пиксели</LightningText>
            </div>
        </section>
    );
};
