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
}


export const InputContainer = styled.View<StyleInputProps>`
  border-radius: 6px;
  background-color: ${(props: { bgColor: string; }) => props.bgColor == null ? '#fff': props.bgColor};
  border:  ${(props: { bgColor: string; }) => props.bgColor === 'rgb(0,0,0)' ? '1px solid #fff' : '0px solid #0000'} ;
  min-height: 36px;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  width: 100%;
`;
