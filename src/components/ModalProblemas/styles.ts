import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: relative;

`;

export const CardContainer = styled.TouchableOpacity`
  justify-content: center;
  width: 300px;
  min-height: 100px;
  gap: 20px;
  background-color: #0f172a;
  border-radius: 28px;
  padding: 22px;
  box-shadow: 5px 5px 8px rgba(0, 0, 50, 1);
  ${Platform.OS === 'android' ? 'elevation: 8;' : 'box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);'}
  position: relative;
  z-index: 0;
`;

export const ReportButton = styled.TouchableOpacity`
  z-index: 1;
  bottom: 30px;
  right: 10px;
  width: 48px;
  height: 48px;
  position: absolute;
  background-color: #888;
  border-radius: 30px;
  box-shadow: 5px 5px 8px rgb(0, 0, 0);
  ${Platform.OS === 'android' ? 'elevation: 8;' : 'box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);'}
  justify-content: center;
  align-items: center;
`;
export const LabelReport = styled.View`
  position: absolute;
  min-width: 150px;
  height: 48px;
  top: -50px;
`;
export const ReportView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 700px;
  padding: 30px;
`;

export const ButtonTakePhoto = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #111;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonPhoto = styled.TouchableOpacity`
  flex: 1;;
  height: 30px;
  background-color: #fff;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const CameraView = styled.View`
  height: 330px;
  width: 330px;
  z-index: 9999;
  justify-content: center;
  align-items: center;
`;
interface ButtonProblemProps {
  color: string
}
export const ButtonProblem = styled.TouchableOpacity<ButtonProblemProps>`
  width: 90px;
  height: 50px;
  background-color: ${(props: ButtonProblemProps) => props.color};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  background-color: green;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-top: 10px;
`;
