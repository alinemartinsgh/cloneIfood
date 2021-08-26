import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #F0001A;
  border-radius: 5px;
  padding: 10px 40px; 
  max-width:190px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme == 'primary' ? '#F0001A' : '#FFFFFF'}; 
`

export const Text = styled.Text`
  color: ${({ theme }) => theme == 'primary' ? '#FFFFFF' : '#F0001A'};
`