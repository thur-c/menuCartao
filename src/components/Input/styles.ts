import styled from 'styled-components/native';

interface StyleMainContainerProps {
  width: number;
}

export const MainContainer = styled.View<StyleMainContainerProps>`
  flex-grow: 1;
  padding: 10px;
  min-width: ${(props: { width: number; }) =>
    props.width === 1 ? '30%' :
      props.width === 2 ? '50%' : '100%'
};
`;

interface StyleInputProps {
  bgColor: string;
  color: string;
}

export const InputContainer = styled.TouchableOpacity<StyleInputProps>`
  border-radius: 6px;
  background-color: ${(props: { bgColor: string; }) => props.bgColor == null ? '#fff': `rgb(${props.bgColor})`};
  border: 1px solid ${(props: { color: string; }) => props.color} ;
  min-height: 36px;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  width: 100%;
`;
