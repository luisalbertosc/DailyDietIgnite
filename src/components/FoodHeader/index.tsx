import { Icon, IconContainer, NewFoodHeaderContainer, Ttile } from "./styles";

type StatisticsButtonProps = {
    title: string;
    onHandle: () => void;
}

export function FoodHeader({onHandle, title}: StatisticsButtonProps){
    return(
        <NewFoodHeaderContainer>
            <Ttile>{title}</Ttile>
            <IconContainer onPress={onHandle}>
                <Icon name="arrow-back"/>
            </IconContainer>
        </NewFoodHeaderContainer>
    )
}