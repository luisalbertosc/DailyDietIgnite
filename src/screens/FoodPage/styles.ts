import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'



export const FoodPageContainer = styled.View`

`
type Props = {
  variant: string;
}
export const HeaderContainer = styled.View<Props>`
  height: 132px;
  background-color: ${({variant, theme})=> variant === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
`

export const Ttile = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
`} 
    margin-top: 50px;
`

export const InfoContainer = styled.View`
width: 100%;
height: 100%;
margin-top: -15px;
border-radius: 20px;
padding: 30px;
background-color: ${({theme})=> theme.COLORS.GRAY_7};
`
export const InfoTitle = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.XL}px;
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
    margin-top: 10px;

`

export const Message = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}
    margin-top: 10px;
    width: 330px;

`
export const DateAndHourTitle = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
    margin-top: 15px;
`
export const DataAndHour = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_2};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}  
    margin-top: 10px;
`

export const LabelDietStatus = styled.View`
flex-direction: row;
  width: 160px;
  height: 40px;
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-top: 30px;
`
export const LabelDietStatusText = styled.Text`
${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}
  margin-left: 6px;
`
export const ButtonsContainer = styled.View`
margin-top: 250px;
`
export const MarginButton = styled.View`
margin-top: 10px;
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

  export const IconCircle = styled(MaterialIcons).attrs<Props>(({ theme, variant }) => ({
    size: 10,
    color: variant === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }))``;

