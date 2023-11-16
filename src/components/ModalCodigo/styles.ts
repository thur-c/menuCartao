import styled from 'styled-components/native';

export const ModalBody = styled.KeyboardAvoidingView`
  flex: 1;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  z-index: -1;
  position: relative;
`;

export const InputView = styled.View`
  border-radius: 20px;
  background-color: #075985;
  height: 300px;
  width: 350px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 12px;
  height: 40px;
  width: 250px;
  margin-top: 12px;
  margin-bottom: 6px;
  padding: 0px 8px;
  font-family: 'GeneralSans-600';
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: 40px;
  width: 250px;
  border-radius: 30px;
  background-color: #16a34a;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 5px 5px black;
  elevation: 5;
`;

export const CloseButton = styled.TouchableOpacity`
position: absolute;
top: -14px;
right: -14px;
height: 45px;
width: 45px;
background-color: #fff;
padding: 10px;
border-radius: 999px;
position: absolute;
box-shadow: 10px 5px 5px black;
elevation: 10;
`;
