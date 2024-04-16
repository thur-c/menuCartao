import styled from 'styled-components/native';
import { Camera } from 'expo-camera';


export const ModalBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const CameraView = styled(Camera)`
  flex: 1;
  width: 100%;
  z-index: -1;
  position: relative;
`;



export const CloseButton = styled.TouchableOpacity`
background-color: #fff;
position: absolute;
right: 0;
top: 0;
margin: 20px;
z-index: 2;
width: 40px;
height: 40px;
border-radius: 50px;
align-items: center;
justify-content: center;
`;

export const CameraButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #0009;
  width: 60px;
  height: 60px;
  border-radius: 20px;
`;
