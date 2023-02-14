import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';


export const CompleteContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`
type Props = {
    variant: "GREEN" | "RED"
}

export const Title = styled.Text<Props>`
    color: ${({variant, theme}) => variant === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
export const Message = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    margin-top: 5px;
    text-align: center;
`

export const TextStrong = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};

`
export const Image = styled.Image`
margin-top: 40px;
`
export const Button = styled(TouchableOpacity)`
    width: 240px;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.GRAY_2};
    margin-top: 50px;
`
export const TitleButton = styled.Text`
color: ${({theme}) => theme.COLORS.WHITE};
font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
padding: 12px;
`

export const SubContainer = styled.View`
    justify-content: center;
    align-items: center;
`
