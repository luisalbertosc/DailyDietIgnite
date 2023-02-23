import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'



export const AvatarContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 9999px;
    background-color: ${({theme}) => theme.COLORS.GRAY_4};
    border: 2px solid ${({theme}) => theme.COLORS.GRAY_3}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 30,
  color: theme.COLORS.GRAY_3,
}))``;