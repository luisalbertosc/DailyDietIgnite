import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'


export type StatisticsHeaderContainerProps = 'GREEN' | 'RED'

type Props = {
    variant: StatisticsHeaderContainerProps
}
export const StatisticsHeaderContainer = styled.View<Props>`
  width: 100%;
  height: 200px;
  background-color: ${({variant, theme})=> variant === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 50px;
`

export const TextFooter = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const IconContainer = styled(TouchableOpacity)`
    position: relative;
    bottom: 80px;
    right: 155px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
    size: 28,
    color: variant === 'GREEN' ?  theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))``;