import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 173px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  background-color: ${({theme})=> theme.COLORS.GRAY_7};
  padding: 0 15px;
`

export const Logo = styled.Image`
  
`;