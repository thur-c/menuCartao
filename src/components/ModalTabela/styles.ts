import styled from 'styled-components/native';
import { Text } from '../Text';

export const TableText = styled(Text)`
flex: 1;
color: #fff;
max-width: 16%;
font-size: 12px;
min-height: 20px;
text-align: center;
`;



export const TableView = styled.View`
padding: 10px;
`;

export const THeader = styled.View`
padding: 10px;
background-color: #172554;
border: 1px solid #000;
min-height: 20px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
`;

export const Cell = styled.View`
align-items: center;
justify-content: space-between;
flex-direction: row;

`;

export const TRow = styled.View`
padding: 10px;
background-color: #1e3a8a;
border: 1px solid #000;
border-top-width: 0;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`;
export const Line = styled.View`
flex: 1;
width: 100%;
height: 1px;
background-color: #3b82f6;
margin: 4px 0;
`;
