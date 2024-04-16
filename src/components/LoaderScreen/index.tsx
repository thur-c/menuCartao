import { ActivityIndicator, Modal } from 'react-native';
import { MainContainer } from './styles';

interface LoaderProps{
  isModaVisible: boolean;
}
export default function LoaderScreen({ isModaVisible}: LoaderProps){

  return(
    <Modal
      animationType='fade'
      transparent
      visible={isModaVisible}
    >
      <MainContainer>

        <ActivityIndicator
          size={35}
          color={'#fff'}
        />
      </MainContainer>
    </Modal>
  );
}
