import styled from 'styled-components/native';
import { Text } from '../../components/Text';

export const MainContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
  flex: 1;
`;

export const TextLabel = styled(Text)`
  width: 28px;
  text-align: center;
`;

export const ModalContainer = styled.View`
  border-radius: 12px;
  background-color: #082f49;
  width: 380px;
  max-height: 750px;
  align-items: center;
  justify-content: center;
  flex: 1;

`;
export const GraphContainer = styled.View`
  border-radius: 8px;
  background-color: #eee;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 20px;
`;

interface LineProps{
  color: string;
}

export const LineY = styled.View<LineProps>`
  width: 2px;
  height: 50%;
  margin-left: 6px;
  background-color: ${(prop: LineProps) => prop.color};
`;
export const LineX = styled.View<LineProps>`
  height: 2px;
  width: 50%;
  background-color: ${(prop: LineProps) => prop.color};
  margin-top: 2px;
`;
export const TextX = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-right: 5px;
`;
export const TextY = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

interface GridProps{
  spacingX: string;
  spacingY: string;

}

export const GridX = styled.View<GridProps>`
  background-color: #0002;
  flex: 1;
  height: 1px;
  width: 300px;
  position: absolute;
  top: ${(prop: GridProps) => prop.spacingX}px;
`;

export const GridY = styled.View<GridProps>`
  background-color: #0002;
  flex: 1;
  width: 1px;
  height: 300px;
  position: absolute;
  left: ${(prop: GridProps) => prop.spacingY}px;
`;
export const SmallCircle = styled.View`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 132px;
  top: 132px;
  border: 1px solid #0005;
  align-self: center;
  justify-self: center;
  border-radius: 999px;
`;
export const BigCircle = styled.View`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 112px;
  top: 112px;
  background-color: #9994;
  align-self: center;
  justify-self: center;
  border-radius: 999px;
`;

interface BallProps{
  color: string;
  left: string;
  top: string;
}

export const Ball = styled.View<BallProps>`
  width: 10px;
  border-radius: 999px;
  height: 10px;
  border-radius: 999px;
  background-color: ${(prop: BallProps) => prop.color};
  left: ${(prop: BallProps) => prop.left}px;
  top: ${(prop: BallProps) => prop.top}px;
  position: absolute;
`;
export const GraphBottomContainer = styled.View`
  background-color: #eee;
  width: 300px;
  height: 150px;
  border-radius: 8px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

interface GridBottomProps{
  spacingY: string;
}

export const GridYBottom = styled.View<GridBottomProps>`
  background-color: #0002;
  flex: 1;
  width: 1px;
  height: 150px;
  position: absolute;
  left: ${(prop: GridProps) => prop.spacingY}px;
`;


export const GraphLineXBottom = styled.View`
  height: 2px;
  width: 50%;
  background-color: #000;
  margin-top: 2px;
`;

export const GraphLineYBottom = styled.View`
  width: 2px;
  height: 50%;
  margin-right: 6px;

`;

export const ButtonsView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;

`;
export const ButtonChangeTypeRed = styled.TouchableOpacity`
  height: 50px;
  width: 80px;
  background-color: #f00;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const ButtonChangeTypeBlue = styled.TouchableOpacity`
  height: 50px;
  width: 80px;
  background-color: #000FFF;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
