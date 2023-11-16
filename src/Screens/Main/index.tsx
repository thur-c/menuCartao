import React, { useState, useRef, useEffect } from 'react';
import { mock } from '../../components/mock';
import Input from '../../components/Input';
import { Animated, BackHandler, Modal, ScrollView, Text } from 'react-native';
import Button from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Modalize } from 'react-native-modalize';

import { RootStackParamList } from '../../@types/RootStackParamList';
import ModalTabela from '../../components/ModalTabela';
import { View } from 'react-native';
import {
  ButtonView,
  FormView,
  MainContainer
} from './styles';
import { useFocusEffect } from '@react-navigation/native';
import ModalFluxo from '../../components/ModalFluxo';

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>


export default function Main({navigation}: MainProps){
  const modalizeRefTabela = useRef<Modalize>(null);
  const modalizeRefFluxo = useRef<Modalize>(null);
  const [isSelectionModeEnabled, setIsSelectionModeEnabled] =
  React.useState(false);

  function handleOpenModalTabela(){
    modalizeRefTabela.current?.open();

  }
  function handleOpenModalFluxo(){
    modalizeRefFluxo.current?.open();

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
  return(
    <>

      <ScrollView style={{backgroundColor: '#172554'}}
        contentContainerStyle={{zIndex: 0}}
      >

        <MainContainer>

          <FormView>
            <Input title={'CARTÃO'} widht='93'>{mock[0].cartao}</Input>
            <Input title={'CLIENTE'} widht='93'>{mock[0].cliente}</Input>
            <Input title={'NOTA'} widht='45'>{mock[0].nota}</Input>
            <Input title={'EMISSÃO'} widht='45'>{mock[0].emissao}</Input>
            <Input title={'DIGITADO'} widht='45'>{mock[0].digitado}</Input>
            <Input title={'ENTRADA'} widht='45'>{mock[0].entrada}</Input>
            <Input title={'ARTIGO'} widht='45'>{mock[0].art}</Input>
            <Input title={'AMOSTRA DA COR'} widht='45' color={mock[0].amostraCor}> </Input>
            <Input title={'COR'} widht='93'>{mock[0].cor}</Input>
            <Input title={'LARG. CRU.'} widht='29'>{mock[0].largCru}</Input>
            <Input title={'LARG. SOLIC.'} widht='29'>{mock[0].largSolicitada}</Input>
            <Input title={'LARG. REALI.'} widht='29'>{mock[0].largRealizada}</Input>
            <Input title={'GRAM./ M²Cru'} widht='29'>{mock[0].gramM2Cru}</Input>
            <Input title={'GRAM. SOLIC.'} widht='29'>{mock[0].gramSolicitada}</Input>
            <Input title={'GRAM. REALI.'} widht='29'>{mock[0].gramRealizada}</Input>
            <Input title={'DIVISÃO'} widht='45'>{mock[0].divisao}</Input>
            <Input title={'MATERIAL'} widht='45'>{mock[0].material}</Input>
            <Input title={'OBSERVAÇÃO'} widht='93'>{mock[0].obs}</Input>


          </FormView>
          <ButtonView>
            <Button onPress={() => handleOpenModalTabela()}>Peças/Faturamento</Button>
            <Button onPress={() => handleOpenModalFluxo()}>Fluxo/Apontamento</Button>
          </ButtonView>



        </MainContainer>
      </ScrollView>

      <ModalTabela
        modalizeRef={modalizeRefTabela}
      />
      <ModalFluxo
        modalizeRef={modalizeRefFluxo}
      />

    </>


  );
}
