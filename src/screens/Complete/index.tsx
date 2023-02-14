import { useNavigation } from "@react-navigation/native";

import { useContext } from "react";
import { DailyContext } from "@context/DailyDietContext";

import { Button, CompleteContainer, Image, Message, Title, TitleButton, SubContainer, TextStrong } from "./styles";

import imgComplete from "@assets/ilustration.png"
import imgCompleteOutDiet from "@assets/imageoutdiet.png"


export function Complete(){
    const {statusDiet, setStatusDiet} = useContext(DailyContext);

    const navigation = useNavigation();

    const handleGoHome = () => {
        setStatusDiet('');
        navigation.navigate('home')
      };

    return( 
        <CompleteContainer>
            {statusDiet === "SIM" ? 
            <SubContainer>
                <Title variant="GREEN">Continue assim!</Title> 
                <Message>Você continua <TextStrong>dentro da dieta</TextStrong>. Muito bem!</Message>
                <Image source={imgComplete}></Image>
            </SubContainer>
            : 
            <SubContainer>
                <Title variant="RED">Que pena!</Title> 
                <Message>Você <TextStrong>saiu da dieta</TextStrong> dessa vez, mas continue se esforçando e não desista!</Message>
                <Image source={imgCompleteOutDiet}></Image>
            </SubContainer>
            }
            <Button onPress={handleGoHome}>
                <TitleButton>Ir para a página inicial</TitleButton>
            </Button>
        </CompleteContainer>
    )
}