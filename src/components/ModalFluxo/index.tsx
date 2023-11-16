import React, { useState } from 'react';
import { Modalize } from 'react-native-modalize';
import { TimeLineView, ModalView, Line, Circle, CircleView, LineView, TextTimeLine } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { fluxo } from '../mock';
import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../Text';

interface ModalFluxoProps {
  modalizeRef: React.RefObject<Modalize>;
}

export default function ModalFluxo({ modalizeRef }: ModalFluxoProps) {
  const [info, setInfo] = useState('');


  function selectedStatus(inicio: string, fim:  string){
    if (inicio != '' && fim != '') {
      return 'finalizado';
    }
    else if (inicio != '' && fim == '') {
      return 'em_processo';
    }
    else{
      return 'nao_iniciado';
    }
  }


  function handleInfoFluxo(id: string){
    id = info === id ? '' : id;
    setInfo(id);
  }

  return (
    <Modalize
      adjustToContentHeight
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={{ backgroundColor: '#e1e1e1', width: 70 }}
      modalStyle={{ backgroundColor: '#333', padding: 20}}
    >

      <ModalView>

        <ScrollView style={{maxHeight: 700, width: 700}}
          contentContainerStyle={{alignItems: 'center', padding: 30, width: 700}}>
          <TimeLineView>
            {fluxo.map((item) => (
              <CircleView key={item.id}>

                <LineView>

                  <Circle size={selectedStatus(item.inicio, item.fim)} color={selectedStatus(item.inicio, item.fim)}>
                    {selectedStatus(item.inicio, item.fim) == 'finalizado' &&
                    <Image
                      style={{flex: 1, width: '100%'}}
                      source={require('../../assets/images/ok.png')}
                    />
                    }
                    {selectedStatus(item.inicio, item.fim) == 'em_processo' &&
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../../assets/images/tecido.png')}
                    />
                    }
                  </Circle>


                  <Line color={selectedStatus(item.inicio, item.fim)}/>
                </LineView>

                <TouchableOpacity
                  onPress={() => handleInfoFluxo(item.id)}
                  disabled={selectedStatus(item.inicio, item.fim) == 'finalizado' ? false : true}
                >

                  <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>

                    <TextTimeLine
                      size={selectedStatus(item.inicio, item.fim)}
                      color={selectedStatus(item.inicio, item.fim)}
                    >
                      {
                        info == item.id
                          ?
                          'Operador: ' + item.operador +
                          '\n' +
                          'Data: ' + item.data +
                          '\n' +
                          'Inicio: ' + item.inicio +
                          '\n' +
                          'Fim: ' + item.fim
                          :
                          item.processo
                      }
                      {
                        selectedStatus(item.inicio, item.fim) == 'em_processo' && item.operador != '' &&
                        <Text size={12}>
                          {'\n'}
                          Operador: {item.operador}
                          {'\n'}
                          Data de inicio: {item.data + ' ' +item.inicio}
                        </Text>
                      }
                    </TextTimeLine>

                    {
                      selectedStatus(item.inicio, item.fim) == 'finalizado' &&
                        <Ionicons
                          name='information-circle-outline'
                          color={'#fff'}
                          size={18}
                        />

                    }
                  </View>
                </TouchableOpacity>
              </CircleView>
            ))}
          </TimeLineView>
        </ScrollView>
      </ModalView>
    </Modalize>
  );
}
