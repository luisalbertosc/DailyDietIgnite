import { useState } from "react";
import { TextInputProps } from "react-native";
import {TextInputData } from "./styles";

type InputDataAndHourProps = TextInputProps & {

}

export function InputDataAndHour({...rest}: InputDataAndHourProps){
    const [focusData, setFocusData] = useState(false);
    return(
            <TextInputData
             onFocus={()=> setFocusData(true)}
             onBlur={()=> setFocusData(false)}
             variant={focusData}
             {...rest}
             />
             
    )
}