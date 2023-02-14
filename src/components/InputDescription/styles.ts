import styled from "styled-components/native";


type Props = {
  variant: boolean;
}
export const TextInputDsc = styled.TextInput<Props>`
  width: 340px;
  height: 140px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  border: 1px solid ${({ variant, theme }) => variant ? theme.COLORS.GRAY_3 : theme.COLORS.GRAY_5};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  padding: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
`