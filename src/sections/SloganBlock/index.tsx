import { LightningText } from "@/components/LightningText";
import { SloganContainer, SloganSection } from "./styled";

export const SloganBlock = () => {
    return (
        <SloganSection id="slogan">
            <SloganContainer >
                <LightningText >Генерируем лидов, а не пиксели</LightningText>
            </SloganContainer>
        </SloganSection>
    );
};
