import styled from "styled-components/native";


export const AvatarContainer = styled.View`
    width: 45px;
    height: 45px;
    border-radius: 9999px;
    background-color: ${({theme}) => theme.COLORS.GRAY_4};
    border: 2px solid ${({theme}) => theme.COLORS.GRAY_3}
`