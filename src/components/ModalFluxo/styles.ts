import styled from 'styled-components/native';
import { Text } from '../Text';
import { Platform } from 'react-native';

export const ModalView = styled.View`
  max-height: 700px;
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
  justify-content: center;
  width: 30px;
  height: 80px; /* ESPAÇO ENTRE AS BOLINHAS */

`;


interface StyleLineProps{
  color: string;
}

export const Line = styled.View`
  background-color: ${(props: StyleLineProps) =>
  {
    if (props.color == 'finalizado') {
      return 'green';
    }else{
      return '#fff5';
    }
  }
};

  height: 100%;
  width: 1px;
  z-index: 0;
  position: absolute;

`;

interface StyleTextProps{
  size: string;
  color: string;
}

export const TextTimeLine = styled(Text)<StyleTextProps>`
text-align: center;
font-size: ${(props: StyleTextProps) =>{
    if (props.size == 'finalizado') {
      return 12;
    }
    else  if (props.size == 'em_processo') {
      return 22;
    } else  {
      return 12;
    }
  }}px;
  color: ${(props: StyleTextProps) =>
  {
    if (props.size == 'em_processo') {
      return '#FFF';
    } else  {
      return '#fff7';
    }}
};
`;


interface StyleCircleProps{
  marginTop: string;
  size: string;
  color: string;
}


export const Circle = styled.View<StyleCircleProps>`
  width: ${(props: StyleCircleProps) => {
    if (props.size == 'finalizado') {
      return 18;
    }
    else  if (props.size == 'em_processo') {
      return 28;
    } else  {
      return 14;
    }
  }}px;

  min-height: ${(props: StyleCircleProps) => {
    if (props.size == 'finalizado') {

      return 18;
    }
    else  if (props.size == 'em_processo') {
      return 28;
    } else  {
      return 14;
    }
  }}px;

  background-color: ${(props: StyleCircleProps) => {
    if (props.color == 'finalizado') {
      return 'transparent';
    }
    else  if (props.color == 'em_processo') {
      return '#fff';
    } else  {
      return '#fff3';
    }
  }};
  z-index: 1;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px black;
  ${Platform.OS === 'ios' ? '' : 'elevation: 5;'}



`;
export const CircleView = styled.SafeAreaView`
  flex-direction: row;
  gap: 50px;
  align-items: center;
  z-index: 1;
  justify-content: flex-start;

`;


