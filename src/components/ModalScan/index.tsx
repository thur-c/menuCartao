import React, {useState, useEffect} from 'react';
import { BackHandler } from 'react-native';
import { CameraView, CloseButton, ModalBody, Overlay1, Overlay2 } from './styles';
import { Camera } from 'expo-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

interface ModalScanProps{
  isModalVisible: boolean;
  onClose: () => void;
  data?: string;

}

type ModalScanScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function ModalScan({ onClose, navigation}: ModalScanProps & ModalScanScreenProps){
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);


  function showErrorToast() {
    Toast.show({
      type: 'error',
      text1: 'Erro!',
      text2: 'Código inválido!',
    });
  }

  function showInfoToast() {
    Toast.show({
      type: 'info',
      text1: 'Atenção',
      text2: 'Aponte sua câmera para o código de barras!',
    });
  }

  useEffect(() => {
    showInfoToast();
    const getBarCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCameraPermissions();
  }, []);

  function handleCloseButton(){
    onClose();
  }

  function handleScanned({data}: ModalScanProps){
    if(data!.length <= 5 || data!.length > 6){
      showErrorToast();
    }
    else{
      navigation.navigate('Main');
      console.log(data);
      onClose();
    }
  }

  useEffect(() => {
    const backAction = () => {
      onClose();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [navigation]);


  return(
    <ModalBody>
      <CloseButton onPress={() => handleCloseButton()}>

        <Ionicons
          name="close"
          color={'#000'}
          size={24}
        />
      </CloseButton>

      <Overlay1/>
      <CameraView onBarCodeScanned={(data: ModalScanProps) => handleScanned(data)}/>
      <Overlay2/>

    </ModalBody>
  );
}
