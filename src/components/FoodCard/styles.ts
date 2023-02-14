import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'




export const FoodCardContainer = styled(TouchableOpacity)`
width: 340px;
height: 50px;
background-color: ${({theme})=> theme.COLORS.GRAY_7};
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 14px;
border-radius: 6px;
border: 1px solid ${({theme})=> theme.COLORS.GRAY_5};
margin-bottom: 8px;
`

export const Date = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.S}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Name = styled.Text`
width: 200px;
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const IconBar = styled(MaterialIcons).attrs<Props>(({ theme }) => ({
    size: 5,
    color:theme.COLORS.GRAY_1
  }))``;

export type FoodIconProps = 'GREEN' | 'RED'

type Props = {
    variant: FoodIconProps
}

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
    size: 14,
    color: variant === 'GREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
  }))``;