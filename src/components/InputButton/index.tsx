import { DailyContext } from "@context/DailyDietContext";
import { useContext } from "react";
import { Radio } from "./Radio";
import {
    InputButtonContainer,
    TitleInput,

} from "./styles";

type InputButtonProps = {
    statusDietYesOrNo: string | boolean
}

export function InputButton({statusDietYesOrNo}: InputButtonProps) {
    const {getDietStatus} = useContext(DailyContext);

    return (
        <InputButtonContainer>
            <TitleInput>Está dentro da dieta?</TitleInput>
            <Radio options={['SIM', 'NÃO']} onChangeSelect={getDietStatus} statusDietYesOrNo={statusDietYesOrNo}/>
        </InputButtonContainer>
    )
}