import { useState } from "react";
import { RadioContainer, ButtonMethod, Icon, TextRadio, ViewInDiet, ViewOutOfDiet } from "./styles";

type RadioProps = {
    options: [
        'SIM', 'NÃO'
    ];
    statusDietYesOrNo: string | boolean;
    onChangeSelect: (value:any) => void
}

export function Radio({ options, statusDietYesOrNo, onChangeSelect}: RadioProps){

    const isStatusYes = statusDietYesOrNo === 'SIM'? true : false
    const isStatusNo = statusDietYesOrNo === 'NÃO'? true : false

    const [focusGreen, setFocusGreen] = useState(isStatusYes);
    const [focusRed, setFocusRed] = useState(isStatusNo);


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
