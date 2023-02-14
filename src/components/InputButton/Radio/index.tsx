import { useState } from "react";
import { RadioContainer, ButtonMethod, Icon, TextRadio, ViewInDiet, ViewOutOfDiet } from "./styles";

type RadioProps = {
    options: [
        'SIM', 'NÃO'
    ];
    onChangeSelect: (value:any) => void
}

export function Radio({ options, onChangeSelect}: RadioProps){
    const [focusGreen, setFocusGreen] = useState(false);
    const [focusRed, setFocusRed] = useState(false);

    

    function handleButtonRadio(value: string){
        onChangeSelect(value)

        switch(value){
            case 'SIM':
                if(!focusGreen){
                    setFocusGreen(true);
                    setFocusRed(false)
                } else{
                    setFocusGreen(false);
                }
                break;
            case 'NÃO':
                if(!focusRed){
                    setFocusRed(true);
                    setFocusGreen(false);
                } else{
                    setFocusRed(false);
                }
                break;
        }
    }

    return(
        <RadioContainer>
            {options.map((opt) => 
                <ButtonMethod key={opt} onPress={()=> handleButtonRadio(opt)}>
                    {opt === 'SIM' ? 
                    <ViewInDiet type={focusGreen}>
                        <Icon variant="GREEN" name="circle"/>
                        <TextRadio>{opt}</TextRadio>
                    </ViewInDiet> 
                    : 
                    <ViewOutOfDiet type={focusRed}>
                        <Icon variant="RED" name="circle"/>
                        <TextRadio>{opt}</TextRadio>
                    </ViewOutOfDiet>
                    }
               </ButtonMethod>
            )}
        </RadioContainer>
    )}
