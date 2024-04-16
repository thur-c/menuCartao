/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState, useEffect} from 'react';
import { Alert, BackHandler } from 'react-native';
import { CameraButton, CameraView, CloseButton, ModalBody } from './styles';
import { Camera, CameraType, FlashMode, WhiteBalance } from 'expo-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../utils/api';
import LoaderScreen from '../LoaderScreen';
import { View } from 'react-native';
import * as Icon from '@expo/vector-icons';

interface ModalScanProps{
  isModalVisible: boolean;
  onClose: () => void;
}

type ModalScanScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function ModalScan({ onClose }: ModalScanProps & ModalScanScreenProps){
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cameraType, setCameraType] = useState<CameraType | number>(0);
  const [flash, setFlash] = useState<FlashMode>(FlashMode.off);

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

  async function handleScanned(codigo: string){
    setLoading(true);
    await api.post('AbrideiraDesenroladeira/chama-dll?deviceName=TBT-CARTAO', {
      nomeDll: 'ConsultaCartao',
      parametros: [`${codigo}`]
    }).then((response) => {
      const cartao = response.data.data;
      if(codigo != '' && codigo != null && cartao.Situacao === '0' ){

        const itemsToSend = {
          artigo: cartao.Artigo,
          cartao: cartao.Cartao,
          codCli: cartao.CodCli,
          cliente: cartao.NomCli,
          status: cartao.SitCartao,
          tipo: cartao.Tipo,
          nota: cartao.Nota,
          numPr: cartao.NumPr,
          material: cartao.TipoArt,
          composicao: cartao.Composicao,
          cor: cartao.Cor,
          rgb: cartao.CorRgb,
          dataEntrada: cartao.DatEnt,
          dataNota: cartao.DatNota,
          emissao: cartao.DataCartao,
          divisao: cartao.Divisao,
          largCru: cartao.LarCru,
          largSoli: cartao.LarSol,
          largReali: cartao.LargReal,
          gramaCru: cartao.GramaCru,
          gramaRealiDataC: cartao.GramaRealDataC,
          gramaRealRama: cartao.GramaRealRama,
          gramaSoli: cartao.GramaSol,
          obsSeiren: cartao.ObsCar,
          obsCliente: cartao.ObsRom,
          itemPecas: cartao.ItemPecas,
        };
        navigation.navigate('Main', itemsToSend);

      }else{
        setErrorMessage(cartao.Mensagem);
        showErrorToast();
      }

    })
      .catch((err) =>
      {
        Alert.alert('Ocorreu um erro!', errorMessage != '' ? errorMessage : err.message);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
      ).finally(() => {
        setLoading(false);
      });
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
    <>
      <LoaderScreen
        isModaVisible={loading}
      />
      <ModalBody>
        <CloseButton onPress={() => handleCloseButton()}>

          <Ionicons
            name="close"
            color={'#000'}
            size={24}
          />
        </CloseButton>

        <CameraView
          type={cameraType}
          flashMode={flash}
          onBarCodeScanned={(a: any) => loading != true && handleScanned(a.data)}
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
      </ModalBody>
    </>

  );
}
