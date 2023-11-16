import React, { ReactNode } from 'react';
import { Text } from '../Text';
import { MainContainer } from './styles';

interface ButtonProps{
  children: ReactNode;
  onPress?: () => void;
}

export default function Button({children, onPress}: ButtonProps){
  return(
    <MainContainer onPress={onPress} activeOpacity={0.4} onLongPress={onPress}>
      <Text style={{textAlign: 'center'}} color={'#eee'} weight={600}>{children}</Text>

    </MainContainer>

  );
}
