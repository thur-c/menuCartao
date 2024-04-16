import styled from 'styled-components/native';
import { Text } from '../Text';

export const TableText = styled(Text)`
  flex: 1;
  color: #fff;
  max-width: 14%;
  font-size: 12px;
  min-height: 20px;
  text-align: center;
`;

export const TableView = styled.ScrollView`
`;

export const THeader = styled.View`
  padding: 10px;
  min-height: 20px;
  background-color: #222;
  border: 1px solid #000;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Cell = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-bottom-color: #fff3;
  border-bottom-width: 0.5px;

`;
export const CellHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;


export const TRow = styled.View`
  max-height: 80%;
  padding: 10px;
  background-color: #111;
  border: 1px solid #000;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

