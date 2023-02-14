import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'



export type StatisticsButtonContainerProps = 'GREEN' | 'RED'

type Props = {
    variant: StatisticsButtonContainerProps;
}

export const StatisticsButtonContainer = styled(TouchableOpacity)<Props>`
    width: 340px;
    height: 105px;
    background-color: ${({variant, theme}) => variant === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 25px;
`

export const TextFooter = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const IconContainer = styled.View`
    position: relative;
    bottom: 65px;
    left: 140px;
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
    size: 24,
    color: variant === 'GREEN' ?  theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))``;