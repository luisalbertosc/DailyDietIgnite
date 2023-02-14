import { useState } from "react";
import { TextInputProps } from "react-native";
import { TextInputDsc } from "./styles";

type InputDescriptionProps = TextInputProps & {

}

export function InputDescription({...rest}: InputDescriptionProps){
    const [focus, setFocus] = useState(false);

    return(
        <TextInputDsc 
            multiline
            onFocus={()=> setFocus(true)}
            onBlur={()=> setFocus(false)}
            variant={focus}
            {...rest}
        />
        
    )
}