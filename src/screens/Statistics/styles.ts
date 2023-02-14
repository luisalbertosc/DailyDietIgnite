import styled from "styled-components/native";


export const StatisticsContainer = styled.View`
`

export const GeneralStatisticsContainer = styled.View`
    width: 100%;
    height: 100%;
    margin-top: -15px;
    border-radius: 20px;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 30px;
    margin-bottom: 20px;
`
export const RectInfo = styled.View`
    width: 340px;
    height: 90px;
    background-color: ${({theme})=> theme.COLORS.GRAY_6};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`
export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const TextFooter = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

`
export const SquareInfoContainer = styled.View`
flex-direction: row;
`
export type SquareInfoProps = 'GREEN' | 'RED'

type Props = {
    variant: SquareInfoProps;
}

export const SquareInfo = styled.View<Props>`
    width: 165px;
    height: 125px;
    border-radius: 8px;
    background-color: ${({variant, theme}) => variant === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin: 5px;
    align-items: center;
    justify-content: center;
`
export const TextFooterSquare = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    width: 120px;
`