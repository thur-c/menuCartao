import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const MainContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #1c1917;
  padding: 5px;
`;

export const FormView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
`;

interface ButtonProps {
  color: string;
}

export const Buttons = styled.TouchableOpacity<ButtonProps>`
  height: 60px;
  width: 180px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ButtonProps) => props.color};
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const ButtonMedidas = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #555;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0px 2px 15px rgba(0, 0, 0);
  ${Platform.OS === 'ios' ? '' : 'elevation: 10;'}
`;

export const ViewMedidas = styled.View`
  justify-content: center;
  background-color: #444;
  top: -7px;
  z-index: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
`;
