import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Cell, TRow, THeader, TableView, Line, TableText } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { mock, values } from '../mock';
import { View } from 'react-native';

interface ModalTabelaProps {
  modalizeRef: React.RefObject<Modalize>;
}

export default function ModalTabela({ modalizeRef }: ModalTabelaProps) {
  const windowHeight = Dimensions.get('window').height;



  return (
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20 }}
    >

      <TableView style={{height: 0.8 * windowHeight, justifyContent: 'center'}}>

        <THeader>
          <Cell>
            <TableText>Nº</TableText>
            <TableText>Peso</TableText>
            <TableText>Peça</TableText>
            <TableText>Larg.</TableText>
            <TableText>Compr.</TableText>
            <TableText>Máq.</TableText>
          </Cell>
        </THeader>

        <TRow style={{maxHeight: 0.83 * windowHeight}}>
          <ScrollView>
            {values.map((item) => (
              <View key={item.numero}>
                <Cell>
                  <TableText>{item.numero}</TableText>
                  <TableText>{item.peça}</TableText>
                  <TableText>{item.peso}</TableText>
                  <TableText>{item.larg}</TableText>
                  <TableText>{item.compr}</TableText>
                  <TableText>{item.maq}</TableText>
                </Cell>
                {item.numero !== values[values.length - 1].numero && <Line />}
              </View>
            ))}
          </ScrollView>
        </TRow>
      </TableView>
    </Modalize>
  );
}
