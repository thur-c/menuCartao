import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Cell, TRow, THeader, TableView, TableText, CellHeader } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Text } from '../Text';

interface ModalTabelaProps {
  modalizeRef: React.RefObject<Modalize>;
  itemPecas: TabelaProps;
}
type TabelaProps = [string,
    {
      NumCartao: string,
      NumPeca: string,
      PesoCru: string,
      ComCru: string,
      PesAcab: string,
      CompAcab: string,
      MaqLote: string,
      SitPeca: string,
  }]

export default function ModalTabela({ modalizeRef, itemPecas }: ModalTabelaProps) {
  const windowWidth = Dimensions.get('window').width;

  const table = itemPecas != undefined && Object.entries(itemPecas) as TabelaProps[];

  return (

    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', paddingVertical: 30, paddingHorizontal: 10}}
      HeaderComponent={(
        <TouchableOpacity
          onPress={() => modalizeRef.current?.close()}
          style={{right: 10, top: -30, position: 'absolute', backgroundColor: '#f00', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20}}>
          <Text weight={600}>Fechar</Text>
        </TouchableOpacity>
      )}
    >


      <ScrollView contentContainerStyle={{
        minWidth: windowWidth <= 500 ? '150%' : '100%',
        flexDirection: 'column',
        marginBottom: 20
      }}
      horizontal
      >

        <THeader>
          <CellHeader>
            <TableText>Nº Peça</TableText>
            <TableText>Peso Cru</TableText>
            <TableText>Comp. Cru</TableText>
            <TableText>Peso Acab.</TableText>
            <TableText>Comp. Acab.</TableText>
            <TableText>Maq. Lote</TableText>
            <TableText>Sit. Peça</TableText>
          </CellHeader>
        </THeader>

        <TRow>
          <ScrollView contentContainerStyle={{gap: 20}} >
            {table && table.map(([,item]) =>  (
              <Cell key={item.NumPeca}>
                <TableText>{item.NumPeca}</TableText>
                <TableText>{item.PesoCru}</TableText>
                <TableText>{item.ComCru}</TableText>
                <TableText>{item.PesAcab}</TableText>
                <TableText>{item.CompAcab}</TableText>
                <TableText>{item.MaqLote}</TableText>
                <TableText>{item.SitPeca}</TableText>
              </Cell>
            ))}
          </ScrollView>
        </TRow>

      </ScrollView>

    </Modalize>

  );
}
