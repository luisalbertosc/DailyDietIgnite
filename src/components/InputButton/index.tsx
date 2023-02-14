import { DailyContext } from "@context/DailyDietContext";
import { useContext } from "react";
import { Radio } from "./Radio";
import {
    InputButtonContainer,
    TitleInput,

} from "./styles";



export function InputButton() {
    const {getDietStatus} = useContext(DailyContext);

    return (
        <InputButtonContainer>
            <TitleInput>Está dentro da dieta?</TitleInput>
            <Radio options={['SIM', 'NÃO']} onChangeSelect={getDietStatus} />
        </InputButtonContainer>
    )
}