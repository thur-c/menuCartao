import React, { useState } from 'react';
import { Text } from '../Text';
import {  Modal } from 'react-native';
import { ButtonSubmit, CloseButton, Input, InputView, ModalBody } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { api } from '../../utils/api';
import { useNavigation } from '@react-navigation/native';
import LoaderScreen from '../LoaderScreen';
import { Alert } from 'react-native';

interface ModalCodigoProps{
isModalVisible: boolean | number;
onClose: () => void;
}
type ModalCodigoScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function ModalCodigo({isModalVisible, onClose }: ModalCodigoProps & ModalCodigoScreenProps){
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);



  function handleCloseButton(){
    setCodigo('');
    setError(false);
    onClose();
  }

  async function handleOkButton(){
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
        onClose();

      }else{
        setErrorMessage(cartao.Mensagem) ;
        setError(true);
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
        setCodigo('');
        setLoading(false);
      });
  }

  return(
    <>
      <LoaderScreen
        isModaVisible={loading}
      />
      <Modal
        animationType='fade'
        transparent
        onRequestClose={handleCloseButton}
        visible={isModalVisible == 1 ? true : false}
      >

        <ModalBody>
          <InputView>
            {/* <TextInput  ></TextInput> */}

            <CloseButton onPress={() => handleCloseButton()}>
              <Ionicons
                name="close"
                color={'#000'}
                size={24}
              />
            </CloseButton>

            <Text color={'#fff'} weight={600}>INSIRA O CÓDIGO DO CARTÃO:</Text>
            <Input
              style={{
                borderWidth: error ? 2 : 0,
                borderColor: error ? '#f00' : 'transparent',
              }}
              value={codigo}
              keyboardType='number-pad'
              onChangeText={(data: string) => setCodigo(data)}

            />

            {error == true &&
              <Text size={12} weight={600} color={'#ff0000'}>{errorMessage}</Text>
            }
            <ButtonSubmit
              onPress={() => handleOkButton()}
            >
              <Text weight={700}>OK</Text>
            </ButtonSubmit>
          </InputView>
        </ModalBody>
      </Modal>
    </>

  );
}
