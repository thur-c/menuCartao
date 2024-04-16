import React, { ReactNode, useMemo } from 'react';
import { Text } from '../Text';
import { InputContainer, MainContainer } from './styles';
import { getLuminance } from 'polished';

interface InputProps {
  children: ReactNode;
  title: string;
  color?: string;
  width: 1 | 2 | 3;
  pressable?: boolean;
  onPress?: () => void;
}


export default function Input({children,  title, color, width, pressable, onPress}: InputProps){
  const textColor = useMemo(() => {
    const rgb = color === null || color === undefined ? '0,0,0' : color;
    const backgroundLuminance = getLuminance(`rgba(${rgb},1)`);

    // Defina um valor de limiar para decidir quando escolher preto ou branco
    const threshold = 0.5;

    // Escolha a cor do texto com base no contraste
    return backgroundLuminance > threshold ? '#09090b' : '#fafafa';
  }, [color]);
  return(
    <MainContainer width={width}>
      <Text
        weight={700}
        size={14}
      >
        {title}
      </Text>
      <InputContainer
        bgColor={color}
        color={textColor}
        disabled={!pressable}
        onPress={onPress}
      >
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
