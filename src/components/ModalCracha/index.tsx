import { Alert, Modal, StatusBar, View } from 'react-native';
import { CameraButton, CameraView, InputView, MainContainer } from './styles';
import * as Icon from '@expo/vector-icons';
import { BarCodeScanningResult, Camera, CameraType, FlashMode } from 'expo-camera';
import { Text } from '../Text';
import { useContext,  useState } from 'react';
import { api } from '../../utils/api';
import LoaderScreen from '../LoaderScreen';
import { LoginContext } from '../../context/loginContext';
import Toast from 'react-native-toast-message';


export default function ModalCracha(){
  const {hanldeSetUser} = useContext(LoginContext);

  const [cameraType, setCameraType] = useState<CameraType | number>(0);
  const [flash, setFlash] = useState<FlashMode>(FlashMode.off);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scanned, setScanned] = useState(false);

  function showInfoToast(name: string) {
    Toast.show({
      type: 'info',
      text1: 'Bem vindo(a), ' +  name + '!'
    });
  }

  async  function handleScanned(codigo: BarCodeScanningResult){
    setLoading(true);
    setScanned(true);

    await api.get(`Cracha/cracha-maquina?codBar=${codigo.data}&codMaquina=-X&deviceName=tbt`)
      .then((response) => {
        const data = response.data.data;
        if (data.situacao === '1') {
          Alert.alert('Atenção!', data.descricao);
        } else {
          const userData = data.descricao.split(' ').slice(2).join(' ').split(' ')[0];
          // Chama a função de retorno de chamada para notificar o componente pai
          hanldeSetUser(userData);
          setScanned(false);
          setVisible(false);
          showInfoToast(userData);

        }
      }).catch((err) => {
        Alert.alert('Erro!', err.message);
        setScanned(false);

      })
      .finally(() => {
        setLoading(false);
      });
  }


  return(
    <Modal
      visible={visible}
      animationType='fade'
      transparent
    >
      <LoaderScreen isModaVisible={loading}/>
      <StatusBar backgroundColor={'#094D92'}/>

      <MainContainer>
        <CameraView>
          <Camera
            type={cameraType}
            flashMode={flash}
            style={{flex: 1, width: '100%', zIndex: 0 }}
            onBarCodeScanned={scanned === true ? undefined : handleScanned}

          />
          <View style={{position: 'absolute', bottom: 0, justifyContent: 'space-between', width: '100%', flexDirection: 'row',
            padding: 20}}>

            <CameraButton onPress={() => setCameraType(cameraType === 0 ? 1 : 0)}>
              <Icon.Ionicons name="camera-reverse-outline" size={45} color="white" />
            </CameraButton>

            <CameraButton onPress={() => setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off)}>
              <Icon.Ionicons name="flashlight-outline" size={45} color="white" />
            </CameraButton>

          </View>

          <Icon.MaterialCommunityIcons
            style={{position: 'absolute'}}
            name="scan-helper" size={150} color="white"
          />
        </CameraView>
        <InputView>

          <Text size={35} weight={600} style={{textAlign:'center', padding: 50 }}>INFORME O CRACHÁ PARA INICIAR O APP</Text>

        </InputView>
      </MainContainer>
    </Modal>
  );
}
