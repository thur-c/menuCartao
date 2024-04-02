import React, { useState, useRef, useEffect } from 'react';
import { mock } from '../../components/mock';
import Input from '../../components/Input';
import { Animated, BackHandler, Easing, Modal, ScrollView, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Modalize } from 'react-native-modalize';
import { RootStackParamList } from '../../@types/RootStackParamList';
import ModalTabela from '../../components/ModalTabela';
import { useFocusEffect } from '@react-navigation/native';
import ModalFluxo from '../../components/ModalFluxo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ButtonMedidas,
  ButtonView,
  Buttons,
  FormView,
  MainContainer,
  ViewMedidas
} from './styles';
import ModalGraph from '../../components/ModalGraph';
import ModalProblemas from '../../components/ModalProblemas';
import { Text } from '../../components/Text';
import { AntDesign } from '@expo/vector-icons';

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>


export default function Main({navigation}: MainProps){
  const modalizeRefTabela = useRef<Modalize>(null);
  const modalizeRefFluxo = useRef<Modalize>(null);
  const modalizeRefProblemas = useRef<Modalize>(null);
  const [isModalGraphVisible, setIsModalGraphVisible] = useState(false);
  const [isModalProblemasVisible, setIsModalProblemasVisible] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false); // Estado para controlar se o botão está expandido ou não
  const [buttonHeight] = useState(new Animated.Value(40));
  const [longPress, setLongPress] = useState(false);


  const [isSelectionModeEnabled, setIsSelectionModeEnabled] =
  React.useState(false);
  const [cartao, setCartao] = useState('');

  useEffect(() => {

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@codigo');
        if (value !== null) {
          setCartao(value);
        }
      } catch (e) {
        return e;
      }
    };

    getData();

  }, []);

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
    // Define a nova altura do botão com base no estado atual
    const newHeight = isButtonExpanded ? 40 : 200;

    Animated.parallel([
      Animated.timing(buttonHeight, {
        toValue: newHeight, // Nova altura desejada
        duration: 500, // Duração da animação
        easing: Easing.linear,
        useNativeDriver: false,
      }),

    ]).start();

    setIsButtonExpanded(!isButtonExpanded); // Inverte o estado do botão expandido
  }


  return(
    <>

      <ModalGraph
        isModalVisible={isModalGraphVisible}
        onClose={handleCloseGraphModal}
      />



      <ScrollView style={{backgroundColor: '#1c1917', flex: 1}}
        contentContainerStyle={{zIndex: 0}}
      >

        <MainContainer>
          <Text style={{marginTop: 10}}
            weight={700}
            size={20}
          >DADOS DO CARTÃO
          </Text>
          <FormView>
            <Input width={1} title={'CARTÃO'} >{cartao}</Input>
            <Input width={1} title={'STATUS'}> </Input>
            <Input width={1} title={'TIPO'}> </Input>
            <Input width={3} title={'CLIENTE'}>{mock[0].cliente}</Input>
            <Input width={1} title={'NOTA'}>{mock[0].nota}</Input>
            <Input width={1} title={'EMISSÃO'}>{mock[0].emissao}</Input>
            <Input width={1} title={'DIGITADO'}>{mock[0].digitado}</Input>
            <Input width={1} title={'ENTRADA'}>{mock[0].entrada}</Input>
            <Input width={1} title={'ARTIGO'}>{mock[0].art}</Input>
            <Input width={2} title={'COR'}>{mock[0].cor}</Input>
            <Input width={2} title={'AMOSTRA DA COR'} color={mock[0].amostraCor}> </Input>
            <Input width={1} title={'DIVISÃO'}>{mock[0].divisao}</Input>
            <Input width={1} title={'MATERIAL'}>{mock[0].material}</Input>
            <Input width={3} title={'OBSERVAÇÃO'}>{mock[0].obs}</Input>
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
                <Input width={1} title='LARG. CRU'>{mock[0].largCru}</Input>
                <Input width={1} title='LARG. SOLIC.'>{mock[0].largSolicitada}</Input>
                <Input width={1} title='LARG. REALI.'>{mock[0].largRealizada}</Input>
                <Input width={1} title='GRAM./M²CRU'>{mock[0].gramM2Cru}</Input>
                <Input width={1} title='GRAM. SOLICI.'>{mock[0].gramSolicitada}</Input>
                <Input width={1} title='GRAM. REALI.'>{mock[0].gramRealizada}</Input>
              </ViewMedidas>

            )}
          </Animated.View>
          <ButtonView>

            <Buttons color='#dc2626' onPress={() => handleOpenModalTabela()}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Peças/Faturamento</Text>
            </Buttons>

            <Buttons color='#1d4ed8' onPress={() => handleOpenModalFluxo()}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Fluxo/Apontamento</Text>
            </Buttons>

            <Buttons color='#16a34a' onPress={() => setIsModalGraphVisible(true)}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Datacolor</Text>
            </Buttons>

            <Buttons color='#ca8a04' onPress={() => handleOpenModalProblemas()} onLongPress={() => handleModalProblemasLongPress()}>
              <Text style={{textAlign: 'center'}} color={'#fff'} weight={600}>Problemas</Text>
            </Buttons>

          </ButtonView>
        </MainContainer>
      </ScrollView>

      <ModalTabela
        modalizeRef={modalizeRefTabela}
      />
      <ModalFluxo
        modalizeRef={modalizeRefFluxo}
      />
      <ModalProblemas
        longPress={longPress}
        modalizeRef={modalizeRefProblemas}
      />

    </>


  );
}
