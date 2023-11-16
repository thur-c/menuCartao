import styled from 'styled-components/native';
import { Camera } from 'expo-camera';


export const ModalBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const CameraView = styled(Camera)`
flex: 1;
width: 150%;
max-height: 100%;
z-index: -1;
position: relative;
`;

export const Overlay1 = styled.View`
  flex: 1;
  width: 100%;
  height: 40%;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  position: absolute;
  z-index: 1;

`;

export const Overlay2 = styled.View`
  flex: 1;
  width: 100%;
  height: 40%;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  position: absolute;
  z-index: 1;
  bottom: 0;
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

