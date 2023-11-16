import React, { useState } from 'react';
import { Text } from '../Text';
import { Modal } from 'react-native';
import { ButtonSubmit, CloseButton, Input, InputView, ModalBody } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';

interface ModalCodigoProps{
isModalVisible: boolean | number;
onClose: () => void;
}
type ModalCodigoScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function ModalCodigo({isModalVisible, onClose, navigation }: ModalCodigoProps & ModalCodigoScreenProps){
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState(false);



  function handleCloseButton(){
    setCodigo('');
    setError(false);
    onClose();
  }

  function handleOkButton(){
    if (codigo.length <= 5 || codigo.length > 6) {
      setError(true);
    }
    else{
      setCodigo('');
      setError(false);
      navigation.navigate('Main');
      onClose();
    }
  }

  return(
    <Modal
      animationType='fade'
      transparent
      visible={isModalVisible == 1 ? true : false}
      onRequestClose={onClose}
    >
      <ModalBody>
        <InputView>

          <CloseButton onPress={() => handleCloseButton()}>
            <Ionicons
              name="close"
              color={'#000'}
              size={24}
            />
          </CloseButton>

          <Text color={'#fff'} weight={600}>INSIRA O CÓDIGO DO CARTÃO:</Text>
          <Input style={{
            borderWidth: error ? 2 : 0,
            borderColor: error ? '#f00' : 'transparent',
          }}
          keyboardType='number-pad' onChangeText={(data: string) => setCodigo(data)}/>

          {error == true &&
            <Text size={14} weight={600} color={'#f00'}>Insira um código válido!</Text>
          }
          <ButtonSubmit
            onPress={() => handleOkButton()}
          >
            <Text weight={700}>OK</Text>
          </ButtonSubmit>
        </InputView>
      </ModalBody>
    </Modal>
  );
}
