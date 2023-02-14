import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';



export const Container = styled(TouchableOpacity)`
  width: 340px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
  margin-top: 90px;
`;

export const TitleButton = styled.Text`
color: ${({theme}) => theme.COLORS.WHITE};
font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
padding: 12px;
`

