import styled from "styled-components/native";


export const NewFoodContainer = styled.View`
`

export const FormContainer = styled.View`
    width: 100%;
    height: 100%;
    margin-top: -15px;
    border-radius: 20px;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
`

export const ItensForm = styled.View`
margin-top: 25px;
`
export const TitleInput = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`
export const DataAndHourContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const DataAndHourInput = styled.View`

`

export const ErrorContainer = styled.View`
margin-top: -20px;
margin-bottom: 10px;
`

export const TextError = styled.Text`
color: ${({theme}) => theme.COLORS.RED_DARK};
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
`

export const ErrorContainerDateAndHour = styled.View`
margin-bottom: 5px;
`