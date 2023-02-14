import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import styled from "styled-components/native";


export const RadioContainer = styled.View`
flex-direction: row;
margin-top: 10px;
justify-content: space-between;
`

export type RadioMethodProps = 'GREEN' | 'RED';

type Props = {
  variant: RadioMethodProps;
}
export const ButtonMethod = styled(TouchableOpacity)`
`


type ViewProps = {
  type: boolean;
}
export const ViewInDiet = styled.View<ViewProps>`
  width: 165px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  background-color: ${({type, theme }) => type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6};
  border: 1px solid ${({type, theme }) => type ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6};
  border-radius: 6px;
`
export const ViewOutOfDiet = styled.View<ViewProps>`
  width: 165px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  background-color: ${({type, theme }) => type ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
  border: 1px solid ${({type, theme }) => type ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6};
  border-radius: 6px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
    size: 10,
    color: variant === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))``;

  export const TextRadio = styled.Text`
  margin-left: 5px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-transform: capitalize;
  `