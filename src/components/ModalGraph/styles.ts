import styled from 'styled-components/native';
import { Text } from '../../components/Text';


export const Overlay = styled.View`
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
  background-color: #082f50;
  width: 380px;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
export const GraphContainer = styled.View`
  border-radius: 8px;
  background-color: #eee;
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

interface LineProps{
  color: string;
}

export const LineY = styled.View<LineProps>`
  width: 2px;
  height: 50%;
  top: -3px;
  left: 1px;
  background-color: ${(prop: LineProps) => prop.color};
`;
export const LineX = styled.View<LineProps>`
  height: 2px;
  width: 50%;
  top: -3px;
  background-color: ${(prop: LineProps) => prop.color};
`;
export const TextX = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  left: -3px;
`;
export const TextY = styled.View`
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

export const TextYBottom = styled.View`
  gap: 10px;
  justify-content: center;

`;
interface GridProps{
  spacingX: string;
  spacingY: string;

}

export const GridX = styled.View<GridProps>`
  background-color: #0002;
  height: 1px;
  width: 250px;
  top: ${(prop: GridProps) => prop.spacingX}px;
`;

export const GridY = styled.View<GridProps>`
  background-color: #0002;
  flex: 1;
  width: 1px;
  height: 250px;
  position: absolute;
  left: ${(prop: GridProps) => prop.spacingY}px;
`;
export const SmallCircle = styled.View`
  width: 40px;
  height: 40px;
  position: absolute;
  border: 1px solid #0005;
  align-self: center;
  justify-self: center;
  border-radius: 999px;
  left: 106px;
  top: 106px;
`;
export const BigCircle = styled.View`
  width: 72px;
  height: 72px;
  position: absolute;
  background-color: #9994;
  align-self: center;
  justify-self: center;
  border-radius: 999px;
  left: 90px;
  top: 90px;
`;

interface BallProps{
  color: string;
  x: string;
  y: string;
}

export const Ball = styled.View<BallProps>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border-radius: 999px;
  background-color: ${(prop: BallProps) => prop.color};
  left: ${(prop: BallProps) => prop.x}px;
  top: ${(prop: BallProps) => prop.y}px;
  position: absolute;
`;
export const GraphBottomContainer = styled.View`
  border-radius: 8px;
  background-color: #eee;
  width: 50px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

interface GridBottomProps{
  spacingX: string;
}

export const GridXBottom = styled.View<GridBottomProps>`
  background-color: #0002;
  width: 100%;
  height: 1px;
  position: absolute;
  top: ${(prop: GridProps) => prop.spacingX}px;
`;


export const GraphLineXBottom = styled.View`
  height: 2px;
  width: 100%;
  background-color: #000;
  margin-top: 2px;
`;

export const GraphLineYBottom = styled.View`
  width: 2px;
  height: 100%;
  margin-right: 6px;
  background-color: #000;
  position: absolute;
`;

export const GraphsView = styled.View`
  align-items: center;
  flex-direction: row;
`;


export const THeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  min-height: 40px;
  align-items: center;
  background-color: #222;
  border: 1px solid #000;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Tbody = styled.View`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const TableView = styled.View`
  flex: 1;
  justify-content: center;
`;

interface TrowProps {
  color: string;
}

export const TRow = styled.View<TrowProps>`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  background-color: ${(props: TrowProps) => props.color};
  border: 1px solid #000;
`;
