import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';

type ModalContainerProps = {
    isVisible: boolean
}
export const ModalContainer = styled.View<ModalContainerProps>`
    display: ${({isVisible}) => isVisible ? 'block' : 'none'};
    flex: 1;
    padding: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1D1B1E99;
`
export const Window = styled.View`
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 24%;
    padding: 23px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const ContentButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Message = styled.Text`
   ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
width: 210px;
text-align: center;
`

type Props = {
    type: 'PRIMARY' | 'SECONDARY'
}
export const Button = styled(TouchableOpacity)<Props>`
    width: 143px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }) => type === 'PRIMARY'? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    border: 1px solid ${({ theme, type }) => type === 'PRIMARY'? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_2};
    margin-top: 30px;
    border-radius: 6px;
`

export const TextButton = styled.Text<Props>`
    ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
 color: ${({ theme, type }) => type === 'PRIMARY'? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`