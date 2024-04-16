import styled from 'styled-components/native';
import { Text } from '../Text';
import { Platform } from 'react-native';

export const ModalView = styled.View`
  max-height: 600px;
  align-items: center;
  justify-content: center;
  padding: 30px;

 `;

export const TimeLineView = styled.SafeAreaView`
  justify-content: center;
  min-width: 250px;

`;
export const LineView = styled.SafeAreaView`
  align-items: center;
  width: 30px;
  height: 100px; /* ESPAÇO ENTRE AS BOLINHAS */
  justify-content: center;
`;


interface StyleLineProps{
  color: string;
}

export const Line = styled.View`
  background-color: #fff;
  height: 150%;
  width: 1px;
  z-index: -10;
  position: absolute;

`;

interface StyleTextProps{
  size: string;
  color: string;
}

export const TextTimeLine = styled(Text)<StyleTextProps>`
  font-size:  ${(props: StyleTextProps) => props.size}px;
  color: ${(props: StyleTextProps) => props.color};
  font-weight: bold;
  width: 100%;
`;


interface StyleCircleProps{
  marginTop: string;
  size: string;
  color: string;
}


export const Circle = styled.View<StyleCircleProps>`
  width: ${(props: StyleCircleProps) => props.size}px;
  min-height: ${(props: StyleCircleProps) => props.size}px;
  color: ${(props: StyleCircleProps) => props.color};
  z-index: 1000;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px black;
  ${Platform.OS === 'ios' ? '' : 'elevation: 5;'}



`;
export const CircleView = styled.SafeAreaView`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  z-index: 1;

`;


