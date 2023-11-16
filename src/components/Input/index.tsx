import React, { ReactNode } from 'react';
import { Text } from '../Text';
import { InputContainer, MainContainer } from './styles';

interface InputProps {
  widht: '93' | '45' | '29';
  children: ReactNode;
  title: string;
  color?: string
}

export default function Input({children, widht, title, color}: InputProps){
  return(
    <MainContainer>
      <Text
        weight={700}
      >
        {title}
      </Text>
      <InputContainer
        widht={widht}
        bgColor={color}>

        <Text
          selectable={true}
          color={'#000'} weight={600}
        >
          {children}
        </Text>
      </InputContainer>
    </MainContainer>
  );
}
