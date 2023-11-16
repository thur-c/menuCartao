import styled from 'styled-components/native';

export const MainContainer = styled.View`
  margin: 8px;
`;

interface StyleInputProps {
  widht: string;
  bgColor: string;
}


export const InputContainer = styled.View<StyleInputProps>`
  border-radius: 6px;
  background-color: ${(props: { bgColor: StyleInputProps; }) => props.bgColor == null ? '#fff': props.bgColor};
  min-height: 36px;
  min-width: ${(props: { widht: StyleInputProps; }) => props.widht}%;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
`;
