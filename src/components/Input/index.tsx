import React, { ReactNode } from 'react';
import { Text } from '../Text';
import { InputContainer, MainContainer } from './styles';

interface InputProps {
  children: ReactNode;
  title: string;
  color?: string
  width: 1 | 2 | 3;
}

export default function Input({children,  title, color, width}: InputProps){
  return(
    <MainContainer width={width}>
      <Text
        weight={700}
        size={14}
      >
        {title}
      </Text>
      <InputContainer
        bgColor={color}>
        <Text
          selectable={true}
          size={16}
          color={'#000'} weight={600}
        >
          {children}
        </Text>
      </InputContainer>
    </MainContainer>
  );
}
