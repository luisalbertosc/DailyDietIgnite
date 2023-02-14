import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 340px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
  border: 1px solid ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_2}
`;

export const TitleButton = styled.Text<Props>`
color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
padding: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``;