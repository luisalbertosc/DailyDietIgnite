import styled from "styled-components/native";


export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.GRAY_7};
`

export const StatisticsButtonContainer = styled.View`
align-items: center;
justify-content: center;
`

export const TextButtonContainer = styled.View`
align-items: center;
`

export const Title = styled.Text`
  margin-top: 48px;
  margin-bottom: 12px;
  margin-left: 24px;
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const FoodListContainer = styled.View`
  align-items: center;
  margin-top: 48px;

`

export const Heading = styled.Text`
margin-bottom: 10px;
font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`