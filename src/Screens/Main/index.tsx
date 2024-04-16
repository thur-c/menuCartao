import React, { useState, useRef, useEffect } from 'react';
import Input from '../../components/Input';
import { Alert, Animated, BackHandler, Easing, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Modalize } from 'react-native-modalize';
import { RootStackParamList } from '../../@types/RootStackParamList';
import ModalTabela from '../../components/ModalTabela';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import ModalFluxo from '../../components/ModalFluxo';
import ModalGraph from '../../components/ModalGraph';
import ModalProblemas from '../../components/ModalProblemas';
import { Text } from '../../components/Text';
import { AntDesign } from '@expo/vector-icons';
import {
  ButtonMedidas,
  ButtonView,
  Buttons,
  FormView,
  MainContainer,
  ViewGram,
  ViewLarg,
  ViewMedidas
} from './styles';
import { api } from '../../utils/api';
import LoaderScreen from '../../components/LoaderScreen';

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>

export default function Main({navigation}: MainProps){
  const modalizeRefTabela = useRef<Modalize>(null);
  const modalizeRefFluxo = useRef<Modalize>(null);
  const modalizeRefProblemas = useRef<Modalize>(null);
  const [isModalGraphVisible, setIsModalGraphVisible] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false); // Estado para controlar se o botão está expandido ou não
  const [buttonHeight] = useState(new Animated.Value(40));
  const [longPress, setLongPress] = useState(false);
  const [isSelectionModeEnabled, setIsSelectionModeEnabled] =
  React.useState(false);
  const route = useRoute();
  const {
    artigo,
    cartao,
    codCli,
    cliente,
    status,
    tipo,
    nota,
    emissao,
    numPr,
    composicao,
    cor,
    rgb,
    dataEntrada,
    dataNota,
    divisao,
    material,
    largCru,
    largSoli,
    largReali,
    gramaCru,
    gramaRealiDataC,
    gramaRealRama,
    gramaSoli,
    obsCliente,
    obsSeiren,
    itemPecas,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any = route.params;
  const [loading, setLoading] = useState(false);
  const [fluxoData, setFluxoData] = useState();
  const [dataColorData, setDataColorData] = useState();

  useEffect(() => {
    setLoading(true);
    async function getFluxoData(){
      return(
        await api.post('AbrideiraDesenroladeira/chama-dll?deviceName=TBT-CARTAO', {
          nomeDll: 'FluxoCartaoTb',
          parametros: [cartao]
        }));
    }

    async function getDataColorData(){
      return(
        await api.post('AbrideiraDesenroladeira/chama-dll?deviceName=TBT-CARTAO', {
          nomeDll: 'LeituraCor',
          parametros: [cartao]
        }));
    }


    Promise.all([getFluxoData(), getDataColorData()])
      .then(function ([fluxo, dataColor]) {
        try {

          if (fluxo.data.success === true && dataColor.data.success === true){
            const ItemListaFluxo =  fluxo.data.data.ItemListaFluxo;
            const ItemDados =   dataColor.data.data.ItemDados;
            setFluxoData(ItemListaFluxo);
            setDataColorData(ItemDados);
          }else{
            Alert.alert('Ocorreu um erro!', 'Ocorreu um erro interno!');
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          Alert.alert('Ocorreu um erro!', error.toString());
        }
      })
      .catch((err) => {
        Alert.alert('Ocorreu um erro!', err.message);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .finally(() => {
        setLoading(false);
      });


  },[]);

  function handleCloseGraphModal(){
    setIsModalGraphVisible(false);
  }

  function handleOpenModalProblemas(){
    setLongPress(false);
    modalizeRefProblemas.current?.open();
  }

  function handleOpenModalTabela(){
    modalizeRefTabela.current?.open();
  }

  function handleOpenModalFluxo(){
    modalizeRefFluxo.current?.open();
  }

  function handleModalProblemasLongPress(){
    setLongPress(true);
    modalizeRefProblemas.current?.open();
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModeEnabled) {
          setIsSelectionModeEnabled(false);
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [isSelectionModeEnabled])
  );

  function handlePress() {
    const newHeight = isButtonExpanded ? 40 : 200;

    Animated.parallel([
      Animated.timing(buttonHeight, {
        toValue: newHeight,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),

    ]).start();

    setIsButtonExpanded(!isButtonExpanded);
  }

  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return(
    <>
      <LoaderScreen
        isModaVisible={loading}
      />

      <ScrollView style={{backgroundColor: '#1c1917', flex: 1}}
        contentContainerStyle={{zIndex: 0}}
      >
        <MainContainer>
          <Text
            style={{marginTop: 10}}
            weight={700}
            size={20}
          >DADOS DO CARTÃO
          </Text>

          <FormView>
            <Input width={1} title={'CARTÃO'}>{cartao}</Input>
            <Input width={1} title={'STATUS'} onPress={() => console.log()}>{status}</Input>
            <Input width={1} title={'TIPO'}>{tipo}</Input>
            <Input width={3} title={'CLIENTE'}>{codCli}  -  {cliente}</Input>
            <Input width={1} title={'NOTA'}>{nota}</Input>
            <Input width={1} title={'EMISSÃO'}>{emissao}</Input>
            <Input width={1} title={'DIGITADO'}>{dataNota}</Input>
            <Input width={1} title={'ENTRADA'}>{dataEntrada}</Input>
            <Input width={1} title={'ARTIGO'}>{artigo}</Input>
            <Input width={2} title={'P.R'}>{numPr}</Input>
            <Input width={1} title={'AMOSTRA DA COR'} color={rgb}> </Input>
            <Input width={2} title={'COR'}>{cor}</Input>
            <Input width={1} title={'DIVISÃO'}>{divisao}</Input>
            <Input width={2} title={'MATERIAL'}>{material}</Input>
            <Input width={2} title={'COMPOSIÇÃO'}>{composicao}</Input>
            <Input width={3} title={'OBSERVAÇÃO CLIENTE'}>{obsCliente}</Input>
            <Input width={3} title={'OBSERVAÇÃO SEIREN'}>{obsSeiren}</Input>
          </FormView>

          <Animated.View style={[{flex: 1, width: '100%', padding: 10}, { minHeight: buttonHeight }]}>
            <ButtonMedidas
              title="Largura e Gramatura"
              onPress={handlePress}
              color="#841584"
              accessibilityLabel="Clique para ver as medidas"
            >
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Largura e Gramatura</Text>
              {isButtonExpanded ? (
                <AntDesign style={{position: 'absolute', right: 10}} name="up" size={18} color="#fff" />
              ) : (
                <AntDesign style={{position: 'absolute', right: 10}} name="down" size={18} color="#fff" />
              )}
            </ButtonMedidas>
            {isButtonExpanded && (

              <ViewMedidas>
                <Text style={{textAlign: 'center'}} weight={600}>
                  LARGURA
                </Text>
                <ViewLarg>
                  <Input width={1} title='CRU'>{largCru} m</Input>
                  <Input width={1} title='SOLICITADA'>{largSoli} m</Input>
                  <Input width={1} title='REALIZADA'>{largReali} m</Input>
                </ViewLarg>

                <Text style={{textAlign: 'center', marginTop: 10}} weight={600}>
                  GRAMATURA
                </Text>

                <ViewGram>
                  <Input width={1} title='CRU'>{gramaCru} g/m²</Input>
                  <Input width={1} title='SOLICITADA'>{gramaSoli} g/m²</Input>
                  <Input width={1} title='REAL. RAMA'>{gramaRealRama} g/m²</Input>
                  <Input width={1} title='REALIIZADA DATA COLOR'>{gramaRealiDataC} g/m²</Input>
                </ViewGram>
              </ViewMedidas>

            )}
          </Animated.View>

          <ButtonView>

            <Buttons color='#1d4ed8' onPress={() => handleOpenModalTabela()}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Peças/Faturamento</Text>
            </Buttons>

            <Buttons color='#ca8a04' onPress={() => handleOpenModalFluxo()}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Fluxo/Apontamento</Text>
            </Buttons>

            <Buttons color='#16a34a' onPress={() => setIsModalGraphVisible(true)}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Datacolor</Text>
            </Buttons>

            {/* <Buttons color='#dc2626' onPress={() => handleOpenModalProblemas()}
              onLongPress={() => handleModalProblemasLongPress()}
            >
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Problemas</Text>
            </Buttons> */}

          </ButtonView>

        </MainContainer>
      </ScrollView>

      <ModalTabela
        modalizeRef={modalizeRefTabela}
        itemPecas={itemPecas}
      />

      <ModalFluxo
        fluxoData={fluxoData!}
        modalizeRef={modalizeRefFluxo!}
      />

      <ModalProblemas
        longPress={longPress}
        modalizeRef={modalizeRefProblemas}
      />

      <ModalGraph
        dataColorData={dataColorData!}
        isModalVisible={isModalGraphVisible}
        onClose={handleCloseGraphModal}
      />

    </>
  );
}
