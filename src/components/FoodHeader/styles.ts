import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'



export const NewFoodHeaderContainer = styled.View`
  width: 100%;
  height: 132px;
  background-color: ${({theme})=> theme.COLORS.GRAY_5};
  justify-content: center;
  align-items: center;
`

export const Ttile = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 50px;
`

export const IconContainer = styled(TouchableOpacity)`
    position: relative;
    bottom: 25px;
    right: 155px;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 28,
    color: theme.COLORS.GRAY_2,
  }))``;