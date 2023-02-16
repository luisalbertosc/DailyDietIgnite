import { Date, FoodCardContainer, FoodIconProps, Icon, IconBar, Name } from "./styles";
import { TouchableOpacityProps } from 'react-native';


type Props = TouchableOpacityProps & {
    id: string;
    title: string;
    hour: string;
    variant?: FoodIconProps;
    onHandle: (id: string) => void;
  }

export function FoodCard({id, title, hour, variant, onHandle, ...rest}: Props){
    return(
        <FoodCardContainer {...rest} onPress={()=> onHandle(id)}>
            <Date>{hour}</Date>
            <IconBar name="circle"/>
            <Name numberOfLines={1}>{title}</Name>
            <Icon variant={variant} name="circle"/>
        </FoodCardContainer>
    )
}