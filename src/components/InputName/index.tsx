import { useState } from "react";
import { TextInputProps } from "react-native";
import { TextInputName } from "./styles";

type InputNameProps = TextInputProps & {

}

export function InputName({...rest}: InputNameProps){
    const [focus, setFocus] = useState(false);

    return(
        <TextInputName
        onFocus={()=> setFocus(true)}
        onBlur={()=> setFocus(false)}
        variant={focus}
        {...rest}
        />
    )
}